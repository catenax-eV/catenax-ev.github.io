/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type TagProps = {
  permalink: string;
  label: string;
  count?: number;
  description?: string;
  type?: string;
};

function getStyleTagByType(str: string): string | undefined {
  switch (str) {
    case 'CAT':
      return styles.tagCAT;
    case 'UC':
      return styles.tagUC;
    default:
      return undefined;
  }
}

function getTagType(str: string): string {
  const separatorIndex = str.indexOf('/');
  return separatorIndex === -1 ? '' : str.substring(0, separatorIndex);
}

function getCleanedTag(str: string): string {
  return str.split('/').pop() ?? str;
}

export default function Tag({permalink, label, count, description, type}: TagProps): ReactNode {

  // if type of tag is empty, then assign type
  type = type ? type : getTagType(label);
  label = getCleanedTag(label);

  return (
    <Link
      href={permalink}
      title={description}
      className={clsx(
        styles.tag,
        count ? styles.tagWithCount : styles.tagRegular,
        getStyleTagByType(type)
      )}>
      {label}
      {count && <span>{count}</span>}
    </Link>
  );
}
