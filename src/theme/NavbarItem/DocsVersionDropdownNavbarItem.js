import React from "react";
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import { useLocation }  from '@docusaurus/router';

export default function DocsVersionDropdownNavbarItemWrapper(props) {
  // const { docsPluginId, className, type } = props
  const { pathname } = useLocation()
 
  const doesPathnameContainDocsPluginId = pathname.includes("/docs/")
  if (!doesPathnameContainDocsPluginId) {
    return null
  }
  return <DocsVersionDropdownNavbarItem {...props} />;
}