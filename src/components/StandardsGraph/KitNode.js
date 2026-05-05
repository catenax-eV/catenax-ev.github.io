import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import styles from './StandardsGraph.module.css';

function KitNode({ data }) {
  const { kitName, bgColor } = data;

  return (
    <div className={styles.kitNodeWrapper}>
      {/* Hexagonal background shape */}
      <div className={styles.kitNodeHexagon} style={{ background: bgColor }} />

      {/* Text content, layered above the hexagon */}
      <div className={styles.kitNodeContent}>
        <div className={styles.kitNodeName} title={kitName}>
          {kitName}
        </div>
        <div className={styles.kitNodeLabel}>KIT</div>
      </div>

      {/* Handles at the four cardinal midpoints of the wrapper */}
      <Handle type="source" position={Position.Top}    className={styles.kitHandle} />
      <Handle type="source" position={Position.Left}   className={styles.kitHandle} />
      <Handle type="target" position={Position.Bottom} className={styles.kitHandle} />
      <Handle type="target" position={Position.Right}  className={styles.kitHandle} />
    </div>
  );
}

export default memo(KitNode);
