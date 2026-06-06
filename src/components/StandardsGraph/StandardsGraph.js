import { useEffect, useState, useCallback, useRef } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import SemanticModelNode from './SemanticModelNode';
import KitNode from './KitNode';
import GraphControls from './GraphControls';
import NodeInfoPanel from './NodeInfoPanel';
import styles from './StandardsGraph.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';
import { useVersions, useDocsPreferredVersion } from '@docusaurus/plugin-content-docs/client';

const nodeTypes = {
  custom: CustomNode,
  semanticModel: SemanticModelNode,
  kit: KitNode,
};

// Category colors for CX standard nodes
const CATEGORY_COLORS = {
  usecase: { light: '#27AE60', dark: '#2ECC71' },
  component: { light: '#386FB3', dark: '#4a7bc8' },
};

// Colors for semantic model diamond nodes (keyed by latestStatus)
const SM_NODE_COLORS = {
  release: { light: '#0097A7', dark: '#26C6DA' },
  deprecated: { light: '#C0392B', dark: '#E74C3C' },
  unknown: { light: '#607D8B', dark: '#78909C' },
};

// Color for KIT hexagon nodes
const KIT_NODE_COLOR = { light: '#7D3C98', dark: '#A569BD' };

// ── Layouts ────────────────────────────────────────────────────────────────

// Single-ring layout (used when no outer-ring nodes are shown)
const getForceLayoutedElements = (nodes, edges) => {
  const nodeCount = nodes.length;
  const centerX = 600;
  const centerY = 400;
  const radius = Math.max(300, nodeCount * 80);

  nodes.forEach((node, index) => {
    const angle = (index / nodeCount) * 2 * Math.PI;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    node.position = {
      x: x - node.style.width / 2,
      y: y - node.style.height / 2,
    };
  });

  return { nodes, edges };
};

// Ring spacing between concentric layout rings (pixels)
const RING_SPACING = 320;

// Multi-ring layout: CX standards on inner ring, optional outer rings (KITs / SMs)
// outerRings is an array of node-arrays, each placed on its own ring
const getMultiRingLayoutedElements = (stdNodes, outerRings, allEdges) => {
  const centerX = 900;
  const centerY = 700;
  const startAngle = -Math.PI / 2; // start at top

  const innerRadius = Math.max(400, stdNodes.length * 88);

  stdNodes.forEach((node, i) => {
    const angle = startAngle + (i / stdNodes.length) * 2 * Math.PI;
    node.position = {
      x: centerX + Math.cos(angle) * innerRadius - (node.style.width || 200) / 2,
      y: centerY + Math.sin(angle) * innerRadius - (node.style.height || 200) / 2,
    };
  });

  let currentRadius = innerRadius;
  const allOuterNodes = [];
  for (const ring of outerRings) {
    if (ring.length === 0) continue;
    currentRadius += RING_SPACING;
    ring.forEach((node, i) => {
      const angle = startAngle + (i / Math.max(ring.length, 1)) * 2 * Math.PI;
      node.position = {
        x: centerX + Math.cos(angle) * currentRadius - 80,
        y: centerY + Math.sin(angle) * currentRadius - 80,
      };
    });
    allOuterNodes.push(...ring);
  }

  return { nodes: [...stdNodes, ...allOuterNodes], edges: allEdges };
};

// Calculate bubble diameter based on incoming reference count
const getBubbleDimensions = (referenceCount) => {
  const baseDiameter = 200;
  const maxDiameter = 320;
  const diameter = Math.min(baseDiameter + referenceCount * 50, maxDiameter);
  return { width: diameter, height: diameter };
};

// ── Component ──────────────────────────────────────────────────────────────

export default function StandardsGraph() {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });
  const [ownerData, setOwnerData] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [filteredCategories, setFilteredCategories] = useState(['usecase', 'component']);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCommittees, setSelectedCommittees] = useState([]);
  const [selectedExpertGroups, setSelectedExpertGroups] = useState([]);
  const [filterDeprecatedModels, setFilterDeprecatedModels] = useState(false);
  const [showSemanticModels, setShowSemanticModels] = useState(false);
  const [showKits, setShowKits] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentVersion, setCurrentVersion] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const { colorMode } = useColorMode();
  const location = useLocation();

  // SM edges generated during layout
  const smEdgesRef = useRef([]);
  // KIT edges generated during layout
  const kitEdgesRef = useRef([]);

  const baseUrl = useBaseUrl('/');

  // Load standard-owners data once
  useEffect(() => {
    fetch(`${baseUrl}standard-owners.json`)
      .then(r => r.ok ? r.json() : null)
      .then(data => setOwnerData(data))
      .catch(() => setOwnerData(null));
  }, [baseUrl]);

  // Get versions and user preference from Docusaurus plugin
  const allVersions = useVersions('default');
  const latestReleasedVersion = allVersions.find(v => v.isLast);
  const latestVersion = latestReleasedVersion ? latestReleasedVersion.name : null;

  const { preferredVersion } = useDocsPreferredVersion('default');

  // Determine which version's graph data to load.
  // URL param wins; otherwise fall back to the Docusaurus preferred version.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const versionParam = params.get('version');
    if (versionParam) {
      setCurrentVersion(versionParam);
      return;
    }
    setCurrentVersion(preferredVersion ? preferredVersion.name : 'current');
  }, [location.search, preferredVersion]);

  const handleVersionChange = useCallback(version => {
    setCurrentVersion(version);
  }, []);

  // Load graph data based on docs version
  useEffect(() => {
    if (currentVersion === null) return;

    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    setSelectedNodeId(null);

    const dataFile =
      currentVersion === 'current'
        ? 'standards-graph-data.json'
        : `standards-graph-data-${currentVersion}.json`;

    const fullUrl = `${baseUrl}${dataFile}`;

    fetch(fullUrl, { signal })
      .then(response => {
        if (!response.ok) {
          return fetch(`${baseUrl}standards-graph-data.json`, { signal });
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        setGraphData(data);
        setLoading(false);
      })
      .catch(error => {
        if (error.name === 'AbortError') return;
        console.error('[Standards Graph] Error loading graph data:', error);
        setLoading(false);
      });

    return () => controller.abort();
  }, [baseUrl, currentVersion]);

  // When SM nodes are hidden, clear any SM node that was selected
  useEffect(() => {
    if (!showSemanticModels) {
      setSelectedNodeId(prev => (prev?.startsWith('sm:') ? null : prev));
    }
  }, [showSemanticModels]);

  // When KIT nodes are hidden, clear any KIT node that was selected
  useEffect(() => {
    if (!showKits) {
      setSelectedNodeId(prev => (prev?.startsWith('kit:') ? null : prev));
    }
  }, [showKits]);

  // Process and layout graph data
  useEffect(() => {
    if (!graphData.nodes || graphData.nodes.length === 0) return;

    const filteredNodes = graphData.nodes.filter(node => {
      const categoryMatch = filteredCategories.includes(node.category);
      const searchMatch =
        searchTerm === '' ||
        node.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        node.number.includes(searchTerm);
      const tagMatch =
        selectedTags.length === 0 ||
        (node.tags && node.tags.some(t => selectedTags.includes(t)));
      const nodeOwner = ownerData?.standards?.[node.number];
      const committeeMatch =
        selectedCommittees.length === 0 ||
        selectedCommittees.includes(nodeOwner?.committeeId ?? null);
      const expertGroupMatch =
        selectedExpertGroups.length === 0 ||
        selectedExpertGroups.includes(nodeOwner?.expertGroupId ?? null);
      const deprecatedModelsMatch =
        !filterDeprecatedModels ||
        (node.semanticModels && node.semanticModels.some(m => m.status === 'deprecated'));
      return categoryMatch && searchMatch && tagMatch && committeeMatch && expertGroupMatch && deprecatedModelsMatch;
    });

    const filteredNodeIds = new Set(filteredNodes.map(n => n.id));

    const filteredEdges = graphData.edges.filter(
      edge => filteredNodeIds.has(edge.source) && filteredNodeIds.has(edge.target)
    );

    const isDark = colorMode === 'dark';

    const reactFlowNodes = filteredNodes.map(node => {
      const { width, height } = getBubbleDimensions(node.referenceCount);
      const isHighlighted =
        searchTerm !== '' &&
        (node.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          node.number.includes(searchTerm));

      const colors = CATEGORY_COLORS[node.category] || CATEGORY_COLORS.component;
      const categoryColor = isDark ? colors.dark : colors.light;

      // Build complete URL path with version prefix
      let adjustedPath;
      if (currentVersion === 'current') {
        adjustedPath = `${baseUrl}docs/next${node.path}`;
      } else if (currentVersion === latestVersion) {
        adjustedPath = `${baseUrl}docs${node.path}`;
      } else {
        adjustedPath = `${baseUrl}docs/${currentVersion}${node.path}`;
      }

      return {
        id: node.id,
        type: 'custom',
        data: {
          number: node.number,
          title: node.title,
          category: node.category,
          tags: node.tags,
          referenceCount: node.referenceCount,
          path: adjustedPath,
          isHighlighted,
        },
        style: {
          width,
          height,
          background: categoryColor,
          border: isHighlighted
            ? '3px solid #ff4444'
            : `2px solid ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 0.2s ease',
        },
      };
    });

    const reactFlowEdges = filteredEdges.map(edge => {
      const edgeColor = isDark ? '#6b8ec8' : '#4a7bc8';
      return {
        id: edge.id,
        source: edge.source,
        target: edge.target,
        type: 'default',
        animated: true,
        style: {
          stroke: edgeColor,
          strokeWidth: 3,
          transition: 'opacity 0.2s ease, stroke-width 0.2s ease',
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: edgeColor,
          width: 25,
          height: 25,
        },
      };
    });

    // ── Semantic model nodes ───────────────────────────────────────────────
    const smEdgeColor = isDark ? '#26C6DA' : '#0097A7';
    const newSmEdges = [];
    const smRFNodes = [];

    if (showSemanticModels && graphData.semanticModelIndex) {
      // Collect model names referenced by currently visible standards
      const referencedModelNames = new Set();
      for (const node of filteredNodes) {
        for (const sm of (node.semanticModels || [])) {
          referencedModelNames.add(sm.modelName);
        }
      }

      for (const modelName of [...referencedModelNames].sort()) {
        const meta = graphData.semanticModelIndex[modelName];
        if (!meta) continue;

        const smNodeId = `sm:${modelName}`;
        const colors = SM_NODE_COLORS[meta.latestStatus] || SM_NODE_COLORS.unknown;
        const bgColor = isDark ? colors.dark : colors.light;

        smRFNodes.push({
          id: smNodeId,
          type: 'semanticModel',
          data: {
            modelName,
            latestVersion: meta.latestVersion,
            latestStatus: meta.latestStatus,
            bgColor,
          },
          style: {
            width: 160,
            height: 160,
            background: 'transparent',
            border: 'none',
            transition: 'opacity 0.2s ease',
          },
          position: { x: 0, y: 0 },
        });

        // One directed edge per visible standard that references this model
        for (const stdNode of filteredNodes) {
          const refs = stdNode.semanticModels || [];
          if (refs.some(m => m.modelName === modelName)) {
            newSmEdges.push({
              id: `${stdNode.id}--sm--${modelName}`,
              source: stdNode.id,
              target: smNodeId,
              type: 'default',
              animated: false,
              style: {
                stroke: smEdgeColor,
                strokeWidth: 1.5,
                strokeDasharray: '5 4',
                opacity: 0.65,
                transition: 'opacity 0.2s ease',
              },
              markerEnd: {
                type: MarkerType.ArrowClosed,
                color: smEdgeColor,
                width: 14,
                height: 14,
              },
            });
          }
        }
      }
    }
    smEdgesRef.current = newSmEdges;

    // ── KIT nodes ──────────────────────────────────────────────────────────
    const kitEdgeColor = isDark ? '#A569BD' : '#7D3C98';
    const newKitEdges = [];
    const kitRFNodes = [];

    if (showKits && graphData.kitIndex) {
      const kitBgColor = isDark ? KIT_NODE_COLOR.dark : KIT_NODE_COLOR.light;

      for (const [slug, meta] of Object.entries(graphData.kitIndex).sort((a, b) => a[0].localeCompare(b[0]))) {
        // Only show KITs that reference at least one currently visible standard
        const validRefs = (meta.referencedStandards || []).filter(id => filteredNodeIds.has(id));
        if (validRefs.length === 0) continue;

        const kitNodeId = `kit:${slug}`;

        kitRFNodes.push({
          id: kitNodeId,
          type: 'kit',
          data: {
            kitName: meta.displayName.replace(/ KIT$/, ''),
            bgColor: kitBgColor,
            slug,
          },
          style: {
            width: 160,
            height: 160,
            background: 'transparent',
            border: 'none',
            transition: 'opacity 0.2s ease',
          },
          position: { x: 0, y: 0 },
        });

        // Edge from KIT node to each CX standard it references
        for (const stdId of validRefs) {
          newKitEdges.push({
            id: `kit:${slug}--${stdId}`,
            source: kitNodeId,
            target: stdId,
            type: 'default',
            animated: false,
            style: {
              stroke: kitEdgeColor,
              strokeWidth: 1.5,
              strokeDasharray: '6 3',
              opacity: 0.6,
              transition: 'opacity 0.2s ease',
            },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: kitEdgeColor,
              width: 14,
              height: 14,
            },
          });
        }
      }
    }
    kitEdgesRef.current = newKitEdges;

    // ── Layout ─────────────────────────────────────────────────────────────
    const allExtraEdges = [...newSmEdges, ...newKitEdges];
    const outerRings = [];

    // KIT ring first (closer to standards), then SM ring
    if (kitRFNodes.length > 0) outerRings.push(kitRFNodes);
    if (smRFNodes.length > 0)  outerRings.push(smRFNodes);

    if (outerRings.length > 0) {
      const { nodes: layoutedNodes, edges: layoutedEdges } = getMultiRingLayoutedElements(
        reactFlowNodes,
        outerRings,
        [...reactFlowEdges, ...allExtraEdges]
      );
      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    } else {
      const { nodes: layoutedNodes, edges: layoutedEdges } = getForceLayoutedElements(
        reactFlowNodes,
        reactFlowEdges
      );
      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    }
  }, [graphData, filteredCategories, searchTerm, selectedTags, selectedCommittees, selectedExpertGroups, filterDeprecatedModels, showSemanticModels, showKits, ownerData, colorMode, currentVersion, latestVersion, baseUrl]);

  // Focus impact analysis — driven by click (pinned)
  useEffect(() => {
    if (!graphData.edges) return;

    const connectedNodeIds = new Set();
    if (selectedNodeId) {
      connectedNodeIds.add(selectedNodeId);
      // Standard ↔ standard edges (from JSON)
      for (const edge of graphData.edges) {
        if (edge.source === selectedNodeId) connectedNodeIds.add(edge.target);
        if (edge.target === selectedNodeId) connectedNodeIds.add(edge.source);
      }
      // Standard ↔ semantic-model edges (generated at layout time)
      for (const edge of smEdgesRef.current) {
        if (edge.source === selectedNodeId) connectedNodeIds.add(edge.target);
        if (edge.target === selectedNodeId) connectedNodeIds.add(edge.source);
      }
      // KIT ↔ standard edges (generated at layout time)
      for (const edge of kitEdgesRef.current) {
        if (edge.source === selectedNodeId) connectedNodeIds.add(edge.target);
        if (edge.target === selectedNodeId) connectedNodeIds.add(edge.source);
      }
    }

    setNodes(nds =>
      nds.map(node => ({
        ...node,
        style: {
          ...node.style,
          opacity: selectedNodeId && !connectedNodeIds.has(node.id) ? 0.2 : 1,
        },
      }))
    );

    setEdges(eds =>
      eds.map(edge => {
        const isConnected =
          selectedNodeId &&
          (edge.source === selectedNodeId || edge.target === selectedNodeId);
        return {
          ...edge,
          style: {
            ...edge.style,
            opacity: selectedNodeId && !isConnected ? 0.1 : (edge.style?.opacity ?? 1),
            strokeWidth: isConnected ? 5 : (edge.style?.strokeWidth ?? 3),
          },
        };
      })
    );
  }, [selectedNodeId, graphData.edges, showSemanticModels, showKits]);

  const handleCategoryFilterChange = useCallback(categories => {
    setFilteredCategories(categories);
  }, []);

  const handleSearchChange = useCallback(term => {
    setSearchTerm(term);
  }, []);

  const handleTagFilterChange = useCallback(tags => {
    setSelectedTags(tags);
  }, []);

  const handleCommitteeFilterChange = useCallback(committees => {
    setSelectedCommittees(committees);
  }, []);

  const handleExpertGroupFilterChange = useCallback(expertGroups => {
    setSelectedExpertGroups(expertGroups);
  }, []);

  const handleFilterDeprecatedModelsChange = useCallback(value => {
    setFilterDeprecatedModels(value);
  }, []);

  const handleShowSemanticModelsChange = useCallback(value => {
    setShowSemanticModels(value);
  }, []);

  const handleShowKitsChange = useCallback(value => {
    setShowKits(value);
  }, []);

  const onNodeClick = useCallback((_, node) => {
    setSelectedNodeId(prev => (prev === node.id ? null : node.id));
  }, []);

  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null);
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Loading Standards Graph...</p>
      </div>
    );
  }

  if (graphData.nodes.length === 0) {
    return (
      <div className={styles.error}>
        <p>No standards data found for this version.</p>
      </div>
    );
  }

  const availableCategories = [...new Set(graphData.nodes.map(n => n.category))];
  const availableTags = [...new Set(graphData.nodes.flatMap(n => n.tags || []))].sort();

  // Derive available committees/expert-groups from nodes present in the current graph
  const availableCommittees = ownerData
    ? [...new Set(
        graphData.nodes
          .map(n => ownerData.standards?.[n.number]?.committeeId)
          .filter(Boolean)
      )].sort()
    : [];
  const availableExpertGroups = ownerData
    ? [...new Set(
        graphData.nodes
          .map(n => ownerData.standards?.[n.number]?.expertGroupId)
          .filter(Boolean)
      )].sort()
    : [];

  return (
    <div className={styles.container}>
      <GraphControls
        availableCategories={availableCategories}
        selectedCategories={filteredCategories}
        onCategoryFilterChange={handleCategoryFilterChange}
        onSearchChange={handleSearchChange}
        allVersions={allVersions}
        currentVersion={currentVersion}
        onVersionChange={handleVersionChange}
        availableTags={availableTags}
        selectedTags={selectedTags}
        onTagFilterChange={handleTagFilterChange}
        ownerData={ownerData}
        availableCommittees={availableCommittees}
        selectedCommittees={selectedCommittees}
        onCommitteeFilterChange={handleCommitteeFilterChange}
        availableExpertGroups={availableExpertGroups}
        selectedExpertGroups={selectedExpertGroups}
        onExpertGroupFilterChange={handleExpertGroupFilterChange}
        filterDeprecatedModels={filterDeprecatedModels}
        onFilterDeprecatedModelsChange={handleFilterDeprecatedModelsChange}
        showSemanticModels={showSemanticModels}
        onShowSemanticModelsChange={handleShowSemanticModelsChange}
        hasSemanticModelData={!!graphData.semanticModelIndex}
        showKits={showKits}
        onShowKitsChange={handleShowKitsChange}
        hasKitData={!!graphData.kitIndex}
      />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.1}
        maxZoom={2}
        className={styles.reactFlow}
      >
        <Background color={colorMode === 'dark' ? '#333' : '#aaa'} gap={16} />
        <Controls />
        <MiniMap
          nodeColor={node => {
            if (node.type === 'semanticModel') {
              return colorMode === 'dark' ? '#26C6DA' : '#0097A7';
            }
            if (node.type === 'kit') {
              return colorMode === 'dark' ? KIT_NODE_COLOR.dark : KIT_NODE_COLOR.light;
            }
            const colors = CATEGORY_COLORS[node.data?.category] || CATEGORY_COLORS.component;
            return colorMode === 'dark' ? colors.dark : colors.light;
          }}
          maskColor={
            colorMode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'
          }
        />
      </ReactFlow>
      <NodeInfoPanel
        selectedNodeId={selectedNodeId}
        graphData={graphData}
        currentVersion={currentVersion}
        onSelectNode={setSelectedNodeId}
        ownerData={ownerData}
      />
    </div>
  );
}

