"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[46500],{26209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard/CX-0143-API","title":"3. Application Programming Interfaces","description":"This section is normantive","source":"@site/docs/standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard/CX-0143-API.md","sourceDirName":"standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard","slug":"/standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard/CX-0143-API","permalink":"/docs/next/standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard/CX-0143-API","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"sidebar_standards","previous":{"title":"2. Aspect Models","permalink":"/docs/next/standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard/CX-0143-SEM"},"next":{"title":"4. Processes","permalink":"/docs/next/standards/CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard/CX-0143-PROCESS"}}');var i=t(74848),a=t(28453);const r={sidebar_position:4},o="3. Application Programming Interfaces",c={},d=[{value:"3.1 EDC DATA ASSET STRUCTURE",id:"31-edc-data-asset-structure",level:2},{value:"3.1.1 EDC Data Asset",id:"311-edc-data-asset",level:3},{value:"3.1.2 EDC Policy Structure",id:"312-edc-policy-structure",level:3},{value:"3.1.2.1 Conventions for Use Case Policy in context data exchange",id:"3121-conventions-for-use-case-policy-in-context-data-exchange",level:4},{value:"3.1.2.2 Additional Details regarding Access Policies",id:"3122-additional-details-regarding-access-policies",level:4},{value:"3.1.2.3 Additional Details regarding Usage Policies",id:"3123-additional-details-regarding-usage-policies",level:4},{value:"3.1.3 Contract Definition",id:"313-contract-definition",level:4},{value:"Legal",id:"legal",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"3-application-programming-interfaces",children:"3. Application Programming Interfaces"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is normantive"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"31-edc-data-asset-structure",children:"3.1 EDC DATA ASSET STRUCTURE"}),"\n",(0,i.jsxs)(n.p,{children:["The general asset structure ",(0,i.jsx)(n.strong,{children:"MUST"})," follow the ",(0,i.jsx)(n.a,{href:"#211-list-of-standalone-standards",children:"CX-0018"}),".\nExamples are in the official ",(0,i.jsx)(n.a,{href:"https://eclipse-tractusx.github.io/docs-kits/kits/Connector%20Kit/Adoption%20View/connector_kit_adoption_view",children:"Connector Kit"}),".\nThe following subchapters define the specifics for this standard."]}),"\n",(0,i.jsx)(n.h3,{id:"311-edc-data-asset",children:"3.1.1 EDC Data Asset"}),"\n",(0,i.jsxs)(n.p,{children:["The EDC assets for product passports ",(0,i.jsx)(n.strong,{children:"MUST"})," follow the JSON."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "cx-common": "https://w3id.org/catenax/ontology/common#",\n    "cx-taxo": "https://w3id.org/catenax/taxonomy#",\n    "dct": "https://purl.org/dc/terms/"\n  },\n  "@type": "Asset",\n  "@id": "{{assetId}}",\n  "properties": {\n    "type": {\n      "@id": "Asset"\n    },\n    "name": "{{asset-name}}",\n    "description": "{{Description}}",\n    "contenttype": "{{type}}"\n  },\n  "dataAddress": {\n    "@type": "DataAddress",\n    "type": "HttpData",\n    "baseUrl": "{{submodel.server.endpoint}}",\n    "proxyQueryParams": "true",\n    "proxyPath": "true",\n    "proxyMethod": "true",\n    "proxyBody": "true"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"312-edc-policy-structure",children:"3.1.2 EDC Policy Structure"}),"\n",(0,i.jsxs)(n.p,{children:["A participant mentioned under ",(0,i.jsx)(n.a,{href:"#11-audience--scope",children:"1.1"})," ",(0,i.jsx)(n.strong,{children:"MUST"})," agree to the overall\n",(0,i.jsx)(n.a,{href:"https://catenax-ev.github.io/docs/regulatory-framework/governance-framework",children:"Catena-X Terms and Condition"})," as well as the general FrameworkAgreement\n",(0,i.jsx)(n.a,{href:"https://catenax-ev.github.io/docs/next/regulatory-framework/20000ft/Data%20Exchange%20Governance",children:"DataExchangeGovernance:1.0"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Have a look at example policies ",(0,i.jsx)(n.a,{href:"https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/example_usage_policy.json",children:"here"}),". A guideline for different use cases profiles has been provided ",(0,i.jsx)(n.a,{href:"https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/profile.md",children:"here"})]}),"\n",(0,i.jsx)(n.h4,{id:"3121-conventions-for-use-case-policy-in-context-data-exchange",children:"3.1.2.1 Conventions for Use Case Policy in context data exchange"}),"\n",(0,i.jsx)(n.p,{children:"In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined. A set of specific policies on data offering and data usage level detail the conditions under which data may be accessed, shared, and used, ensuring compliance with legal standards."}),"\n",(0,i.jsx)(n.p,{children:"For a comprehensive understanding of the rights, restrictions, and obligations associated with data usage in the Catena-X ecosystem, we refer users to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the detailed ",(0,i.jsx)(n.a,{href:"https://github.com/catenax-eV/cx-odrl-profile",children:"ODRL policy repository"}),". This document provides in-depth explanations of the terms and conditions applied to data access and utilization, ensuring that all engagement with our data is conducted responsibly and in accordance with established guidelines."]}),"\n",(0,i.jsxs)(n.li,{children:["the ODRL schema template. This defines how policies used for data sharing/usage should get defined. Those schemas ",(0,i.jsx)(n.strong,{children:"MUST"})," be followed when providing services or apps for data sharing/consuming."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"3122-additional-details-regarding-access-policies",children:"3.1.2.2 Additional Details regarding Access Policies"}),"\n",(0,i.jsx)(n.p,{children:'A Data Provider may tie certain access authorizations ("Access Policies") to its data offers for members of Catena-X  and one or several Data Consumers. By limiting access to certain Participants, Data Provider maintains control over its anti-trust obligations when sharing certain data. In particular, Data Provider may apply Access Policies to restrict access to a particular data offer for only one Participant identified by a specific business partner number:'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Membership"}),"\n",(0,i.jsx)(n.li,{children:"BPNL"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"3123-additional-details-regarding-usage-policies",children:"3.1.2.3 Additional Details regarding Usage Policies"}),"\n",(0,i.jsxs)(n.p,{children:["In the context of data usage policies (\u201cUsage Policies\u201d), Participants and related services ",(0,i.jsx)(n.strong,{children:"MUST"})," use the following policy rules:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use Case Framework (\u201cFrameworkAgreement\u201d), for the Digital Product Pass ",(0,i.jsx)(n.strong,{children:"MUST"})," be the ",(0,i.jsx)(n.code,{children:"DataExchangeGovernance:1.0"})," framework agreement provided in the profiles ",(0,i.jsx)(n.a,{href:"https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/profile.md#frameworkagreement",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["for the Digital Product Passport, Battery Passport and other passports the latest (\u201cUsagePurpose\u201d) for circular economy ",(0,i.jsx)(n.code,{children:"cx.circular.dpp:1"})," ",(0,i.jsx)(n.strong,{children:"MUST"})," be used. It is defined ",(0,i.jsx)(n.a,{href:"https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/profile.md#usagepurpose",children:"here"})," in the latest policy profile contraints."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, respective usage policies ",(0,i.jsx)(n.strong,{children:"MAY"})," include the following policy rule:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Reference Contract (\u201cContractReference\u201d)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Details on  namespaces and ODLR policy rule values to be used for the above-mentioned types are provided via the ",(0,i.jsx)(n.a,{href:"https://github.com/catenax-eV/cx-odrl-profile",children:"ODRL policy repository"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"313-contract-definition",children:"3.1.3 Contract Definition"}),"\n",(0,i.jsxs)(n.p,{children:["Contract definitions of data providers ",(0,i.jsx)(n.strong,{children:"MUST"})," follow this structure (also defined in ",(0,i.jsx)(n.a,{href:"#211-list-of-standalone-standards",children:"CX-0018"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://w3id.org/edc/v0.0.1/ns/"\n  },\n  "@id": "{{ContractDefinitionId}}",\n  "@type": "ContractDefinition",\n  "accessPolicyId": "{{AccessPolicyId}}",\n  "contractPolicyId": "{{ContractPolicyId}}",\n  "assetsSelector": {\n    "@type": "CriterionDto",\n    "operandLeft": "https://w3id.org/edc/v0.0.1/ns/id",\n    "operator": "=",\n    "operandRight": "{{AssetId}}"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,i.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,i.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);