import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import styles from './StandardsGraph.module.css';

function CustomNode({ data }) {
  const { number, title, isHighlighted } = data;

  return (
    <div className={`${styles.bubbleNode} ${isHighlighted ? styles.highlighted : ''}`}>
      <Handle type="target" position={Position.Top} className={styles.handle} />
      <Handle type="target" position={Position.Left} className={styles.handle} />
      <Handle type="target" position={Position.Right} className={styles.handle} />

      <div className={styles.bubbleContent} title={title}>
        <div className={styles.bubbleCenter}>
          <div className={styles.cxNumberBubble}>
            CX-{number}
          </div>
        </div>
        <div className={styles.bubbleTitle}>
          {title}
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} className={styles.handle} />
      <Handle type="source" position={Position.Left} className={styles.handle} />
      <Handle type="source" position={Position.Right} className={styles.handle} />
    </div>
  );
}

export default memo(CustomNode);
