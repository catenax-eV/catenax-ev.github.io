import React, { useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useVersions } from '@docusaurus/plugin-content-docs/client';
import styles from './StandardsGraph.module.css';

const CATEGORY_CONFIG = {
  usecase: { label: 'Use Case', color: '#27AE60' },
  component: { label: 'Component', color: '#386FB3' },
};

export default function NodeInfoPanel({
  selectedNodeId,
  graphData,
  currentVersion,
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const baseUrl = useBaseUrl('/');
  const allVersions = useVersions('default');
  const latestVersion = allVersions.find(v => v.isLast)?.name ?? null;

  const selectedNode = useMemo(
    () => (graphData.nodes || []).find(n => n.id === selectedNodeId),
    [graphData.nodes, selectedNodeId]
  );

  const buildPath = node => {
    if (currentVersion === 'current') return `${baseUrl}docs/next${node.path}`;
    if (currentVersion === latestVersion) return `${baseUrl}docs${node.path}`;
    return `${baseUrl}docs/${currentVersion}${node.path}`;
  };

  const { references, referencedBy } = useMemo(() => {
    if (!selectedNodeId || !graphData.edges) return { references: [], referencedBy: [] };

    const nodeMap = Object.fromEntries((graphData.nodes || []).map(n => [n.id, n]));

    return {
      references: graphData.edges
        .filter(e => e.source === selectedNodeId)
        .map(e => nodeMap[e.target])
        .filter(Boolean),
      referencedBy: graphData.edges
        .filter(e => e.target === selectedNodeId)
        .map(e => nodeMap[e.source])
        .filter(Boolean),
    };
  }, [selectedNodeId, graphData]);

  if (!selectedNodeId || !selectedNode) return null;

  const categoryConfig = CATEGORY_CONFIG[selectedNode.category] || { label: selectedNode.category, color: '#666' };

  return (
    <div className={styles.nodeInfoPanel}>
      <div className={styles.panelHeader}>
        <div className={styles.panelTitle}>
          <h2>
            <a href={buildPath(selectedNode)} className={styles.panelTitleLink}>
              CX-{selectedNode.number}
            </a>
          </h2>
          <p>{selectedNode.title}</p>
        </div>
        <button
          className={styles.toggleButton}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Toggle info panel"
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {isExpanded && (
        <div className={styles.controlsContent}>
          <div className={styles.controlSection}>
            <label className={styles.controlLabel}>Category</label>
            <span
              className={styles.categoryBadge}
              style={{ background: categoryConfig.color }}
            >
              {categoryConfig.label}
            </span>
          </div>

          {selectedNode.tags && selectedNode.tags.length > 0 && (
            <div className={styles.controlSection}>
              <label className={styles.controlLabel}>Tags</label>
              <div className={styles.tagsList}>
                {selectedNode.tags.map(tag => {
                  const slashIdx = tag.indexOf('/');
                  const label = slashIdx !== -1 ? tag.slice(slashIdx + 1) : tag;
                  return (
                    <span key={tag} className={styles.tagPill}>{label}</span>
                  );
                })}
              </div>
            </div>
          )}

          <div className={styles.controlSection}>
            <label className={styles.controlLabel}>
              References ({references.length})
            </label>
            {references.length === 0 ? (
              <p className={styles.emptyList}>None</p>
            ) : (
              <ul className={styles.nodeList}>
                {references.map(node => (
                  <li key={node.id}>
                    <a href={buildPath(node)} className={styles.nodeListLink}>
                      <span className={styles.nodeListNumber}>CX-{node.number}</span>
                      <span className={styles.nodeListTitle}>{node.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.controlSection}>
            <label className={styles.controlLabel}>
              Is Referenced By ({referencedBy.length})
            </label>
            {referencedBy.length === 0 ? (
              <p className={styles.emptyList}>None</p>
            ) : (
              <ul className={styles.nodeList}>
                {referencedBy.map(node => (
                  <li key={node.id}>
                    <a href={buildPath(node)} className={styles.nodeListLink}>
                      <span className={styles.nodeListNumber}>CX-{node.number}</span>
                      <span className={styles.nodeListTitle}>{node.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
