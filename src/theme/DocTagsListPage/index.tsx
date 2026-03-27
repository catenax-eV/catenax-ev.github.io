/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import TagsListByLetter from '@theme/TagsListByLetter';
import SearchMetadata from '@theme/SearchMetadata';
import Heading from '@theme/Heading';
import type {Props} from '@theme/DocTagsListPage';

type TagListItem = Props['tags'][number] & {type?: string};
type CustomProps = Omit<Props, 'tags'> & {tags: TagListItem[]};

function getTagType(str: string): string {
  const separatorIndex = str.indexOf('/');
  return separatorIndex === -1 ? '' : str.substring(0, separatorIndex);
}

function getCleanedTag(str: string): string {
  return str.split('/').pop() ?? str;
}

function DocTagsListPageMetadata({title}: Props & {title: string}): ReactNode {
  return (
    <>
      <PageMetadata title={title} />
      <SearchMetadata tag="doc_tags_list" />
    </>
  );
}
function DocTagsListPageContent({tags, title}: CustomProps & {title: string}): ReactNode {

  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.page.docsTagsListPage)}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main>
            <Heading as="h1">{title}</Heading>
            <TagsListByLetter tags={tags} />
          </main>
        </div>
      </div>
    </HtmlClassNameProvider>
  );
}
export default function DocTagsListPage(props: Props): ReactNode {
  const tags: TagListItem[] = props.tags.map((tag) => ({
    ...tag,
    type: getTagType(tag.label),
    label: getCleanedTag(tag.label),
  }));

  const title = translateTagsPageTitle();
  return (
    <>
      <DocTagsListPageMetadata {...props} title={title} />
      <DocTagsListPageContent {...props} tags={tags} title={title} />
    </>
  );
}
