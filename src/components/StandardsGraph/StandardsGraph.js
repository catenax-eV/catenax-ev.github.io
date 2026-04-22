import { useEffect, useState, useCallback } from 'react';
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
import GraphControls from './GraphControls';
import styles from './StandardsGraph.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';
import { useVersions, useDocsPreferredVersion } from '@docusaurus/plugin-content-docs/client';

const nodeTypes = {
  custom: CustomNode,
};

// Category colors
const CATEGORY_COLORS = {
  usecase: { light: '#27AE60', dark: '#2ECC71' },
  component: { light: '#386FB3', dark: '#4a7bc8' },
};

// Circular force-directed layout
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

// Calculate bubble diameter based on incoming reference count
const getBubbleDimensions = (referenceCount) => {
  const baseDiameter = 200;
  const maxDiameter = 320;
  const diameter = Math.min(baseDiameter + referenceCount * 50, maxDiameter);
  return { width: diameter, height: diameter };
};

export default function StandardsGraph() {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [filteredCategories, setFilteredCategories] = useState(['usecase', 'component']);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentVersion, setCurrentVersion] = useState(null);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const { colorMode } = useColorMode();
  const location = useLocation();

  const baseUrl = useBaseUrl('/');

  // Get versions and user preference from Docusaurus plugin
  const allVersions = useVersions('default');
  const latestReleasedVersion = allVersions.find(v => v.isLast);
  const latestVersion = latestReleasedVersion ? latestReleasedVersion.name : null;

  const { preferredVersion } = useDocsPreferredVersion('default');

  // Determine which version's graph data to load
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const versionParam = params.get('version');
    if (versionParam) {
      setCurrentVersion(versionParam);
      return;
    }
    setCurrentVersion(preferredVersion ? preferredVersion.name : 'current');
  }, [location.search, preferredVersion]);

  // Load graph data based on docs version
  useEffect(() => {
    if (currentVersion === null) return;

    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);

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

  // Process and layout graph data
  useEffect(() => {
    if (!graphData.nodes || graphData.nodes.length === 0) return;

    const filteredNodes = graphData.nodes.filter(node => {
      const categoryMatch = filteredCategories.includes(node.category);
      const searchMatch =
        searchTerm === '' ||
        node.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        node.number.includes(searchTerm);
      return categoryMatch && searchMatch;
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

    const { nodes: layoutedNodes, edges: layoutedEdges } = getForceLayoutedElements(
      reactFlowNodes,
      reactFlowEdges
    );

    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [graphData, filteredCategories, searchTerm, colorMode, currentVersion, latestVersion, baseUrl]);

  // Hover impact analysis — lightweight style-only update
  useEffect(() => {
    if (!graphData.edges) return;

    const connectedNodeIds = new Set();
    if (hoveredNodeId) {
      connectedNodeIds.add(hoveredNodeId);
      for (const edge of graphData.edges) {
        if (edge.source === hoveredNodeId) connectedNodeIds.add(edge.target);
        if (edge.target === hoveredNodeId) connectedNodeIds.add(edge.source);
      }
    }

    setNodes(nds =>
      nds.map(node => ({
        ...node,
        style: {
          ...node.style,
          opacity: hoveredNodeId && !connectedNodeIds.has(node.id) ? 0.2 : 1,
        },
      }))
    );

    setEdges(eds =>
      eds.map(edge => {
        const isConnected =
          hoveredNodeId &&
          (edge.source === hoveredNodeId || edge.target === hoveredNodeId);
        return {
          ...edge,
          style: {
            ...edge.style,
            opacity: hoveredNodeId && !isConnected ? 0.1 : 1,
            strokeWidth: isConnected ? 5 : 3,
          },
        };
      })
    );
  }, [hoveredNodeId, graphData.edges]);

  const handleCategoryFilterChange = useCallback(categories => {
    setFilteredCategories(categories);
  }, []);

  const handleSearchChange = useCallback(term => {
    setSearchTerm(term);
  }, []);

  const onNodeMouseEnter = useCallback((_, node) => {
    setHoveredNodeId(node.id);
  }, []);

  const onNodeMouseLeave = useCallback(() => {
    setHoveredNodeId(null);
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

  return (
    <div className={styles.container}>
      <GraphControls
        availableCategories={availableCategories}
        selectedCategories={filteredCategories}
        onCategoryFilterChange={handleCategoryFilterChange}
        onSearchChange={handleSearchChange}
      />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
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
            const colors = CATEGORY_COLORS[node.data.category] || CATEGORY_COLORS.component;
            return colorMode === 'dark' ? colors.dark : colors.light;
          }}
          maskColor={
            colorMode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'
          }
        />
      </ReactFlow>
    </div>
  );
}
