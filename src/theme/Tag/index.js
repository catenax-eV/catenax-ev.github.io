/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function getTagType(str){
  switch(str){
    case "CAT": return styles.tagCAT;
    case "UC": return styles.tagUC;
    default: return;
  }
}

export default function Tag({permalink, label, count, description, type}) {

  return (
    <Link
      href={permalink}
      title={description}
      className={clsx(
        styles.tag,
        count ? styles.tagWithCount : styles.tagRegular,
        getTagType(type)
      )}>
      {label}
      {count && <span>{count}</span>}
    </Link>
  );
}
