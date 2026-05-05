import React, { useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useVersions } from '@docusaurus/plugin-content-docs/client';
import styles from './StandardsGraph.module.css';

function SemanticModelStatusBadge({ status }) {
  if (status === 'release') {
    return <span className={styles.smStatusRelease}>release</span>;
  }
  if (status === 'deprecated') {
    return <span className={styles.smStatusDeprecated}>deprecated</span>;
  }
  return <span className={styles.smStatusUnknown}>{status || 'unknown'}</span>;
}

function SemanticModelsSection({ semanticModels }) {
  if (!semanticModels || semanticModels.length === 0) return null;

  const hasDeprecated = semanticModels.some(m => m.status === 'deprecated');

  return (
    <div className={styles.controlSection}>
      <label className={styles.controlLabel}>
        Semantic Models ({semanticModels.length})
        {hasDeprecated && (
          <span className={styles.smDeprecatedAlert} title="This standard references deprecated model versions">
            ⚠ deprecated
          </span>
        )}
      </label>
      <ul className={styles.smList}>
        {semanticModels.map(m => {
          const isDeprecated = m.status === 'deprecated';
          const hasNewer = m.latestVersion && m.referencedVersion !== m.latestVersion;
          return (
            <li key={m.urn} className={`${styles.smItem} ${isDeprecated ? styles.smItemDeprecated : ''}`}>
              <div className={styles.smHeader}>
                {m.githubUrl ? (
                  <a
                    href={m.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.smModelName}
                    title={`Open ${m.modelName} v${m.referencedVersion} on GitHub`}
                  >
                    {m.modelName}
                  </a>
                ) : (
                  <span className={styles.smModelName}>{m.modelName}</span>
                )}
                <SemanticModelStatusBadge status={m.status} />
              </div>
              <div className={styles.smMeta}>
                <span className={styles.smVersion}>v{m.referencedVersion}</span>
                {hasNewer && (
                  <span className={styles.smNewerHint}>
                    {' '}⬆{' '}
                    {m.latestGithubUrl ? (
                      <a
                        href={m.latestGithubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.smNewerLink}
                      >
                        v{m.latestVersion}
                      </a>
                    ) : (
                      <span>v{m.latestVersion}</span>
                    )}
                    {' '}available
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ── Semantic Model detail panel (shown when a diamond node is clicked) ────

function compareSemverDesc([a], [b]) {
  const [aMaj, aMin, aPat] = a.split('.').map(Number);
  const [bMaj, bMin, bPat] = b.split('.').map(Number);
  return (bMaj - aMaj) || (bMin - aMin) || (bPat - aPat);
}

function SmNodePanel({ modelName, meta, graphData, onSelectNode }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const shortName = modelName.replace(/^io\.catenax\./, '');
  const ghBase = `https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/${modelName}`;

  const sortedVersions = Object.entries(meta.versions || {}).sort(compareSemverDesc);

  const stdNodes = (meta.referencedByStandards || [])
    .map(id => graphData.nodes.find(n => n.id === id))
    .filter(Boolean)
    .sort((a, b) => (a.number || '').localeCompare(b.number || '', undefined, { numeric: true }));

  return (
    <div className={styles.nodeInfoPanel}>
      <div className={styles.panelHeader}>
        <div className={styles.panelTitle}>
          <h2>
            <a href={ghBase} target="_blank" rel="noopener noreferrer" className={styles.panelTitleLink}>
              {shortName}
            </a>
          </h2>
          <p className={styles.smPanelModelName}>{modelName}</p>
        </div>
        <button
          className={styles.toggleButton}
          onClick={() => setIsExpanded(v => !v)}
          aria-label="Toggle info panel"
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {isExpanded && (
        <div className={styles.controlsContent}>
          {/* Latest version */}
          <div className={styles.controlSection}>
            <label className={styles.controlLabel}>Latest Version</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <a
                href={`${ghBase}/${meta.latestVersion}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.smVersionLink}
              >
                v{meta.latestVersion}
              </a>
              <SemanticModelStatusBadge status={meta.latestStatus} />
            </div>
          </div>

          {/* All known versions */}
          {sortedVersions.length > 0 && (
            <div className={styles.controlSection}>
              <label className={styles.controlLabel}>All Versions</label>
              <div className={styles.smVersionList}>
                {sortedVersions.map(([ver, status]) => (
                  <div key={ver} className={styles.smVersionRow}>
                    <a
                      href={`${ghBase}/${ver}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.smVersionLink}
                    >
                      v{ver}
                    </a>
                    <SemanticModelStatusBadge status={status} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Standards that reference this model */}
          <div className={styles.controlSection}>
            <label className={styles.controlLabel}>
              Used by {stdNodes.length} Standard{stdNodes.length !== 1 ? 's' : ''}
            </label>
            {stdNodes.length === 0 ? (
              <p className={styles.emptyList}>None in current view</p>
            ) : (
              <ul className={styles.nodeList}>
                {stdNodes.map(node => (
                  <li key={node.id}>
                    <div
                      className={styles.nodeListItem}
                      onClick={() => onSelectNode && onSelectNode(node.id)}
                      title="Click to select this standard in the graph"
                    >
                      <CategoryPillar category={node.category} />
                      <span className={styles.nodeListNumber}>CX-{node.number}</span>
                      <span className={styles.nodeListTitle}>{node.title}</span>
                    </div>
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

// ── Standard node category badge ──────────────────────────────────────────

const CATEGORY_CONFIG = {
  usecase: { label: 'Use Case', color: '#27AE60' },
  component: { label: 'Component', color: '#386FB3' },
};

function CategoryPillar({ category }) {
  const cfg = CATEGORY_CONFIG[category] || { label: category || 'Unknown', color: '#666' };
  return (
    <span
      className={styles.nodeListCategoryIndicator}
      style={{ background: cfg.color }}
      aria-hidden="true"
    >
      {cfg.label}
    </span>
  );
}

// ── Main panel ────────────────────────────────────────────────────────────

export default function NodeInfoPanel({
  selectedNodeId,
  graphData,
  currentVersion,
  onSelectNode,
  ownerData = null,
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const baseUrl = useBaseUrl('/');
  const allVersions = useVersions('default');
  const latestVersion = allVersions.find(v => v.isLast)?.name ?? null;

  // Detect semantic model node selection (IDs start with "sm:")
  const isSmNode = selectedNodeId?.startsWith('sm:');
  const smModelName = isSmNode ? selectedNodeId.slice(3) : null;
  const smIndexEntry = smModelName ? (graphData.semanticModelIndex?.[smModelName] || null) : null;

  const selectedNode = useMemo(
    () => isSmNode ? null : (graphData.nodes || []).find(n => n.id === selectedNodeId),
    [graphData.nodes, selectedNodeId, isSmNode]
  );

  const buildPath = node => {
    if (currentVersion === 'current') return `${baseUrl}docs/next${node.path}`;
    if (currentVersion === latestVersion) return `${baseUrl}docs${node.path}`;
    return `${baseUrl}docs/${currentVersion}${node.path}`;
  };

  const { references, referencedBy } = useMemo(() => {
    if (!selectedNodeId || !graphData.edges || isSmNode) return { references: [], referencedBy: [] };

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
  }, [selectedNodeId, graphData, isSmNode]);

  // ── Semantic model node selected → show model detail panel ───────────
  if (isSmNode && smIndexEntry) {
    return (
      <SmNodePanel
        modelName={smModelName}
        meta={smIndexEntry}
        graphData={graphData}
        onSelectNode={onSelectNode}
      />
    );
  }

  // ── No standard node selected → show full list ───────────────────────
  if (!selectedNodeId || !selectedNode) {
    const allNodes = [...(graphData.nodes || [])].sort((a, b) =>
      (a.number || '').localeCompare(b.number || '', undefined, { numeric: true })
    );

    return (
      <div className={styles.nodeInfoPanel}>
        <div className={styles.panelHeader}>
          <div className={styles.panelTitle}>
            <h2 className={styles.panelTitleEmpty}>No standard selected</h2>
            <p>Click a node in the graph or select one below</p>
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
              <label className={styles.controlLabel}>
                All Standards ({allNodes.length})
              </label>
              <ul className={styles.nodeList}>
                {allNodes.map(node => (
                  <li key={node.id}>
                    <div
                      className={styles.nodeListItem}
                      onClick={() => onSelectNode && onSelectNode(node.id)}
                      title="Click to select this node in the graph"
                    >
                      <CategoryPillar category={node.category} />
                      <a
                        href={buildPath(node)}
                        className={styles.nodeListNumber}
                        onClick={e => e.stopPropagation()}
                        title="Open standard document"
                      >
                        CX-{node.number}
                      </a>
                      <span className={styles.nodeListTitle}>{node.title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── Standard node selected ────────────────────────────────────────────
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

          {ownerData && (() => {
            const owner = ownerData.standards?.[selectedNode.number];
            if (!owner) return null;
            const committee = owner.committeeId ? ownerData.committees?.[owner.committeeId] : null;
            const expertGroup = owner.expertGroupId ? ownerData.expertGroups?.[owner.expertGroupId] : null;
            return (
              <>
                <div className={styles.controlSection}>
                  <label className={styles.controlLabel}>Committee</label>
                  {committee ? (
                    committee.url ? (
                      <a href={committee.url} target="_blank" rel="noopener noreferrer" className={styles.ownerLink}>
                        {committee.label}
                      </a>
                    ) : (
                      <span className={styles.ownerLabel}>{committee.label}</span>
                    )
                  ) : (
                    <span className={styles.ownerNone}>—</span>
                  )}
                </div>
                <div className={styles.controlSection}>
                  <label className={styles.controlLabel}>Expert Group</label>
                  {expertGroup ? (
                    expertGroup.url ? (
                      <a href={expertGroup.url} target="_blank" rel="noopener noreferrer" className={styles.ownerLink}>
                        {expertGroup.label}
                      </a>
                    ) : (
                      <span className={styles.ownerLabel}>{expertGroup.label}</span>
                    )
                  ) : owner.expertGroupNote ? (
                    <span className={styles.ownerNote}>{owner.expertGroupNote}</span>
                  ) : (
                    <span className={styles.ownerNone}>—</span>
                  )}
                </div>
              </>
            );
          })()}

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
                    <div
                      className={styles.nodeListItem}
                      onClick={() => onSelectNode && onSelectNode(node.id)}
                      title="Click to select this node in the graph"
                    >
                      <CategoryPillar category={node.category} />
                      <a
                        href={buildPath(node)}
                        className={styles.nodeListNumber}
                        onClick={e => e.stopPropagation()}
                        title="Open standard document"
                      >
                        CX-{node.number}
                      </a>
                      <span className={styles.nodeListTitle}>{node.title}</span>
                    </div>
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
                    <div
                      className={styles.nodeListItem}
                      onClick={() => onSelectNode && onSelectNode(node.id)}
                      title="Click to select this node in the graph"
                    >
                      <CategoryPillar category={node.category} />
                      <a
                        href={buildPath(node)}
                        className={styles.nodeListNumber}
                        onClick={e => e.stopPropagation()}
                        title="Open standard document"
                      >
                        CX-{node.number}
                      </a>
                      <span className={styles.nodeListTitle}>{node.title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <SemanticModelsSection semanticModels={selectedNode.semanticModels} />
        </div>
      )}
    </div>
  );
}


function SemanticModelStatusBadge({ status }) {
  if (status === 'release') {
    return <span className={styles.smStatusRelease}>release</span>;
  }
  if (status === 'deprecated') {
    return <span className={styles.smStatusDeprecated}>deprecated</span>;
  }
  return <span className={styles.smStatusUnknown}>{status || 'unknown'}</span>;
}

function SemanticModelsSection({ semanticModels }) {
  if (!semanticModels || semanticModels.length === 0) return null;

  const hasDeprecated = semanticModels.some(m => m.status === 'deprecated');

  return (
    <div className={styles.controlSection}>
      <label className={styles.controlLabel}>
        Semantic Models ({semanticModels.length})
        {hasDeprecated && (
          <span className={styles.smDeprecatedAlert} title="This standard references deprecated model versions">
            ⚠ deprecated
          </span>
        )}
      </label>
      <ul className={styles.smList}>
        {semanticModels.map(m => {
          const isDeprecated = m.status === 'deprecated';
          const hasNewer = m.latestVersion && m.referencedVersion !== m.latestVersion;
          return (
            <li key={m.urn} className={`${styles.smItem} ${isDeprecated ? styles.smItemDeprecated : ''}`}>
              <div className={styles.smHeader}>
                {m.githubUrl ? (
                  <a
                    href={m.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.smModelName}
                    title={`Open ${m.modelName} v${m.referencedVersion} on GitHub`}
                  >
                    {m.modelName}
                  </a>
                ) : (
                  <span className={styles.smModelName}>{m.modelName}</span>
                )}
                <SemanticModelStatusBadge status={m.status} />
              </div>
              <div className={styles.smMeta}>
                <span className={styles.smVersion}>v{m.referencedVersion}</span>
                {hasNewer && (
                  <span className={styles.smNewerHint}>
                    {' '}⬆{' '}
                    {m.latestGithubUrl ? (
                      <a
                        href={m.latestGithubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.smNewerLink}
                      >
                        v{m.latestVersion}
                      </a>
                    ) : (
                      <span>v{m.latestVersion}</span>
                    )}
                    {' '}available
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const CATEGORY_CONFIG = {
  usecase: { label: 'Use Case', color: '#27AE60' },
  component: { label: 'Component', color: '#386FB3' },
};

function CategoryPillar({ category }) {
  const cfg = CATEGORY_CONFIG[category] || { label: category || 'Unknown', color: '#666' };
  return (
    <span
      className={styles.nodeListCategoryIndicator}
      style={{ background: cfg.color }}
      aria-hidden="true"
    >
      {cfg.label}
    </span>
  );
}

export default function NodeInfoPanel({
  selectedNodeId,
  graphData,
  currentVersion,
  onSelectNode,
  ownerData = null,
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

  if (!selectedNodeId || !selectedNode) {
    const allNodes = [...(graphData.nodes || [])].sort((a, b) =>
      (a.number || '').localeCompare(b.number || '', undefined, { numeric: true })
    );

    return (
      <div className={styles.nodeInfoPanel}>
        <div className={styles.panelHeader}>
          <div className={styles.panelTitle}>
            <h2 className={styles.panelTitleEmpty}>No standard selected</h2>
            <p>Click a node in the graph or select one below</p>
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
              <label className={styles.controlLabel}>
                All Standards ({allNodes.length})
              </label>
              <ul className={styles.nodeList}>
                {allNodes.map(node => (
                  <li key={node.id}>
                    <div
                      className={styles.nodeListItem}
                      onClick={() => onSelectNode && onSelectNode(node.id)}
                      title="Click to select this node in the graph"
                    >
                      <CategoryPillar category={node.category} />
                      <a
                        href={buildPath(node)}
                        className={styles.nodeListNumber}
                        onClick={e => e.stopPropagation()}
                        title="Open standard document"
                      >
                        CX-{node.number}
                      </a>
                      <span className={styles.nodeListTitle}>{node.title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }

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

          {ownerData && (() => {
            const owner = ownerData.standards?.[selectedNode.number];
            if (!owner) return null;
            const committee = owner.committeeId ? ownerData.committees?.[owner.committeeId] : null;
            const expertGroup = owner.expertGroupId ? ownerData.expertGroups?.[owner.expertGroupId] : null;
            return (
              <>
                <div className={styles.controlSection}>
                  <label className={styles.controlLabel}>Committee</label>
                  {committee ? (
                    committee.url ? (
                      <a href={committee.url} target="_blank" rel="noopener noreferrer" className={styles.ownerLink}>
                        {committee.label}
                      </a>
                    ) : (
                      <span className={styles.ownerLabel}>{committee.label}</span>
                    )
                  ) : (
                    <span className={styles.ownerNone}>—</span>
                  )}
                </div>
                <div className={styles.controlSection}>
                  <label className={styles.controlLabel}>Expert Group</label>
                  {expertGroup ? (
                    expertGroup.url ? (
                      <a href={expertGroup.url} target="_blank" rel="noopener noreferrer" className={styles.ownerLink}>
                        {expertGroup.label}
                      </a>
                    ) : (
                      <span className={styles.ownerLabel}>{expertGroup.label}</span>
                    )
                  ) : owner.expertGroupNote ? (
                    <span className={styles.ownerNote}>{owner.expertGroupNote}</span>
                  ) : (
                    <span className={styles.ownerNone}>—</span>
                  )}
                </div>
              </>
            );
          })()}

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
                    <div
                      className={styles.nodeListItem}
                      onClick={() => onSelectNode && onSelectNode(node.id)}
                      title="Click to select this node in the graph"
                    >
                      <CategoryPillar category={node.category} />
                      <a
                        href={buildPath(node)}
                        className={styles.nodeListNumber}
                        onClick={e => e.stopPropagation()}
                        title="Open standard document"
                      >
                        CX-{node.number}
                      </a>
                      <span className={styles.nodeListTitle}>{node.title}</span>
                    </div>
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
                    <div
                      className={styles.nodeListItem}
                      onClick={() => onSelectNode && onSelectNode(node.id)}
                      title="Click to select this node in the graph"
                    >
                      <CategoryPillar category={node.category} />
                      <a
                        href={buildPath(node)}
                        className={styles.nodeListNumber}
                        onClick={e => e.stopPropagation()}
                        title="Open standard document"
                      >
                        CX-{node.number}
                      </a>
                      <span className={styles.nodeListTitle}>{node.title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <SemanticModelsSection semanticModels={selectedNode.semanticModels} />
        </div>
      )}
    </div>
  );
}
