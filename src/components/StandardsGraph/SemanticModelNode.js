import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import styles from './StandardsGraph.module.css';

function SemanticModelNode({ data }) {
  const { modelName, latestVersion, bgColor } = data;
  // Strip the common "io.catenax." prefix so the label fits inside the diamond
  const shortName = modelName.replace(/^io\.catenax\./, '');

  return (
    <div className={styles.smNodeWrapper}>
      {/* Rotated inner square that forms the diamond shape */}
      <div className={styles.smNodeDiamond} style={{ background: bgColor }} />

      {/* Text content sits above the rotated square (z-index 1, not rotated) */}
      <div className={styles.smNodeContent}>
        <div className={styles.smNodeName} title={modelName}>
          {shortName}
        </div>
        {latestVersion && (
          <div className={styles.smNodeVersion}>v{latestVersion}</div>
        )}
      </div>

      {/* Handles at the four midpoints of the wrapper box = the four diamond tips */}
      <Handle type="target" position={Position.Top} className={styles.smHandle} />
      <Handle type="target" position={Position.Left} className={styles.smHandle} />
      <Handle type="source" position={Position.Bottom} className={styles.smHandle} />
      <Handle type="source" position={Position.Right} className={styles.smHandle} />
    </div>
  );
}

export default memo(SemanticModelNode);
