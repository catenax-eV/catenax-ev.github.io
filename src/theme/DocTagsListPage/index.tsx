/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
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

function getTagType(str){
  return str.substring(0, str.indexOf("/"));
}

function getCleanedTag(str){
  return str.split('/').pop();
}

function DocTagsListPageMetadata({title}) {
  return (
    <>
      <PageMetadata title={title} />
      <SearchMetadata tag="doc_tags_list" />
    </>
  );
}
function DocTagsListPageContent({tags, title}) {

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
export default function DocTagsListPage(props) {

  // Custom Code: Remove Category from Label and write it in "type"
  for (const [key, value] of Object.entries(props.tags)) {
    props.tags[key]['type'] = getTagType(props.tags[key]['label']);
    props.tags[key]['label'] = getCleanedTag(props.tags[key]['label']);
  };

  const title = translateTagsPageTitle();
  return (
    <>
      <DocTagsListPageMetadata {...props} title={title} />
      <DocTagsListPageContent {...props} title={title} />
    </>
  );
}
