/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="react" />
import type {ReactNode} from 'react';
type Props = {
  permalink: string;
  label: string;
  count?: number;
  description?: string;
  type?: string;
};
export default function Tag({ permalink, label, count, description, type, }: Props): ReactNode;
