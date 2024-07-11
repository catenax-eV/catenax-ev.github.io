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
  switch(str.substring(0, str.indexOf("/"))){
    case "CAT": return styles.tagCAT;
    case "UC": return styles.tagUC;
    default: return;
  }
}

function getCleanedTag(str){
  return str.split('/').pop();
}

export default function Tag({permalink, label, count, description}) {
  return (
    <Link
      href={permalink}
      title={description}
      className={clsx(
        styles.tag,
        count ? styles.tagWithCount : styles.tagRegular,
        getTagType(label)
      )}>
      {getCleanedTag(label)}
      {count && <span>{count}</span>}
    </Link>
  );
}
