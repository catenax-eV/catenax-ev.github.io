"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[32],{22704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(74848),a=t(28453);const i={},o="CX-0055 Data Processing Patterns for IT System Integration v1.1.0",r={id:"standards/CX-0055-DataProcessingPatternsforITSystemIntegration/CX-0055-DataProcessingPatternsforITSystemIntegration",title:"CX-0055 Data Processing Patterns for IT System Integration v1.1.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0055-DataProcessingPatternsforITSystemIntegration/CX-0055-DataProcessingPatternsforITSystemIntegration.md",sourceDirName:"standards/CX-0055-DataProcessingPatternsforITSystemIntegration",slug:"/standards/CX-0055-DataProcessingPatternsforITSystemIntegration/",permalink:"/docs/standards/CX-0055-DataProcessingPatternsforITSystemIntegration/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0054 Application Service Release v1.0.1",permalink:"/docs/standards/CX-0054-ApplicationServiceRelease/"},next:{title:"CX-0056 Semantic Model: Classified Load Spectrum v1.0.0",permalink:"/docs/standards/CX-0056-SemanticModelClassifiedLoadSpectrum/"}},c={},d=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 ARCHITECTURE OVERVIEW",id:"13-architecture-overview",level:3},{value:"1.4 CONFORMANCE",id:"14-conformance",level:3},{value:"1.5 PROOF OF CONFORMITY",id:"15-proof-of-conformity",level:3},{value:"2. STANDARDS FOR DATA PROCESSING PATTERNS",id:"2-standards-for-data-processing-patterns",level:2},{value:"2.1 LIST OF STANDALONE STANDARDS",id:"21-list-of-standalone-standards",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"Legal",id:"legal",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"cx-0055-data-processing-patterns-for-it-system-integration-v110",children:"CX-0055 Data Processing Patterns for IT System Integration v1.1.0"})}),"\n",(0,s.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,s.jsx)(n.p,{children:"This document provides specific conformity assessment criteria for IT-System Integration solutions that\nconnect arbitrary backend applications to Catena-X for both, data provisioning and data consumption.\nDepending on the use-case, different standards must be fulfilled for data provisioning and consumption.\nThus, this document is modular and describes criteria for different schemes of data provisioning\nand consumption (so called data processing patterns) in order to enable use case agnostic certification\nof IT-system integration solutions.\nData Providers and Consumers can either implement the set of relevant standard themselves,\nor use a managed solution that implements the standards.\nThis standard is particularly addressing the second case."}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,s.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This document is relevant for:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Enablement Service Provider"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This document is in particular relevant for enablement service providers who are offering a (managed) solution for IT-system integration.\nThose solutions offer the capability to provide data to Catena-X (or consume Catena-X data vice versa) by offering automated data pipelines.\nThis very basic capability provides a cornerstone for different Catena-X use cases."}),"\n",(0,s.jsx)(n.p,{children:"This standard addresses in particular the interfaces which IT-System Integration Solutions expose\nto exchange data with Catena-X.\nFor this standard, offered interfaces need to be compliant to technical standards that are used\nby Catena-X to manage data processing (e.g. EDC, AAS or SAMM).\nThe IT-System Integration Solution itself is out of scope."}),"\n",(0,s.jsx)(n.p,{children:"Furthermore, the document can be used as a guideline for data providers/consumers who want to connect\nbackend systems/middlewares etc.\nwith Catena-X via a custom build setup (without the need of certification in this case)."}),"\n",(0,s.jsx)(n.p,{children:'Out of scope for this document are small scale data provisioning solutions suiting the particular\nneeds of SME (e.g. working with exchange formats only, such as "Simple Data Exchanger").\nRefer to CX-0007 for a certification of minimal data provider service offerings.'}),"\n",(0,s.jsx)(n.p,{children:"This document does not contain references to external standards and Catena-X guardrails\nthat need to be fulfilled for the listing of apps into the Catena-X marketplace such as an ISO27001\ncertification or the passing of certain penetration tests.\nNevertheless, IT-System Integration solutions will also need to pass those conformity assessments."}),"\n",(0,s.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Data provisioning/consumption in Catena-X can be done in multiple ways.\nThere are i.e. simple upload tools for SMEs which only need to provide data in small batches upon request.\nFor a steady supply of data however, different solutions are necessary.\nConnecting backend systems, transforming semantic models and finally providing data\nin the right format and via the right channels (IDS Protocol) are some of the tasks that need to be done.\nIT-System Integration Solutions support companies with this task."}),"\n",(0,s.jsx)(n.p,{children:'Depending on the Catena-X use case, there may be different sets of standards required to specify data exchange.\nOne Catena-X use case may require a combination of EDC, AAS and SAMM\nwhile another Catena-X use case may only utilize EDC to handle data exchange between companies.\nThose alternative combinations of standards for data processing are defined as "data processing patterns" in the scope of this document.'}),"\n",(0,s.jsx)(n.p,{children:"Enablement Service Providers need to show compliance of System Integration Solutions to data processing patterns in order to receive certification for Catena-X use cases (that utilize respective patterns)."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use case A (e.g. Circular Economy - Dismantler Dashboard) and use case B (e.g. Sustainability - CO2 Footprint) utilize Data Processing Pattern 1 (e.g. combination of EDC, SAMM and AAS)"}),"\n",(0,s.jsx)(n.li,{children:"a Backend Integration Solution X is certified against Data Processing Pattern 1"}),"\n",(0,s.jsx)(n.li,{children:"As a result of the certification, Backend Integration Solution X  can be utilized for use cases A and B."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Except those patterns, interfaces provided by IT-System Integration Solutions are agnostic for Catena-X use-cases in a sense,\nthat they don't contain any use-case specific business logic.  Thus, an IT-System Integration solution can be certified for being utilized across different use cases (without considering additional use-case specific standards)."}),"\n",(0,s.jsx)(n.h3,{id:"13-architecture-overview",children:"1.3 ARCHITECTURE OVERVIEW"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Figure 1 gives an idea about the scope of conformity assessment for IT-System Integration solutions in Catena-X. The data source/sink refers to a company IT landscape.\nThus, it can comprise one IT-system, (such as ERP or PLM) or multiple systems, data lakes etc.\nTo make this data accessible for Catena-X (or vice versa to write Catena-X data into backend systems)\na dedicated tool or toolchain is necessary.\nSince IT-architectures and IT-System Integration solutions vary significantly between different companies,\nno standard can be applied here (see also ",(0,s.jsx)(n.em,{children:"Data Integration Patterns Guide"})," on Catena-X website for further information).\nThus, conformity assessment for IT-System Integration solutions focuses on requirements for data formats, and data transfer protocols (Catena-X interface, see Figure 1 marked in blue).\nThe IT-System Integration solution itself is out of scope for this standard."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"backend-solutions-arch.png",src:t(70399).A+"",width:"614",height:"206"})}),"\n",(0,s.jsx)(n.p,{children:"Figure 1: Scope of conformity assessment - Catena-X interface for IT-System Integration solutions"}),"\n",(0,s.jsx)(n.h3,{id:"14-conformance",children:"1.4 CONFORMANCE"}),"\n",(0,s.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes\nin this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,s.jsxs)(n.p,{children:["The key words ",(0,s.jsx)(n.strong,{children:"MAY"}),", ",(0,s.jsx)(n.strong,{children:"MUST"}),", ",(0,s.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,s.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,s.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,s.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,s.jsx)(n.strong,{children:"SHOULD"}),"\nand ",(0,s.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]\nwhen, and only when, they appear in all capitals, as shown here."]}),"\n",(0,s.jsx)(n.h3,{id:"15-proof-of-conformity",children:"1.5 PROOF OF CONFORMITY"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are conform with the Catena-X standards.\nTo validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).\nPlease refer to the association homepage for the process of conformity assessment and certification."}),"\n",(0,s.jsx)(n.p,{children:"To proof the overall conformity of an IT-System Integration solution for Catena-X use-cases,\na proof of conformity for standards belonging to a specific Data Processing Pattern (listed in section 2) has to be obtained."}),"\n",(0,s.jsx)(n.h2,{id:"2-standards-for-data-processing-patterns",children:"2. STANDARDS FOR DATA PROCESSING PATTERNS"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This chapter describes possible ways for providing data for Catena-X (and to consume it respectively). IT-System Integration solutions MUST fulfill the standards for at least one Data Processing Pattern in order to obtain a certificate for this standard.\nThe certificate issued by CAB MUST specify for which data processing pattern(s) the IT-System Integration solution was succesfully evaluated in the certification process. The IT-System Integration solution can then only be utilized for Catena-X use case applications that make use of the specific Data Processing Patterns that were in scope of certification."}),"\n",(0,s.jsx)(n.p,{children:"The following list of Data Processing Patterns will be extended as soon as new patterns emerge\nand respective Catena-X standards are available."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All solutions in this chapter MUST implement the standard CX \u2013 0018 Sovereign Data Exchange v 1.0.1"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"21-list-of-standalone-standards",children:"2.1 LIST OF STANDALONE STANDARDS"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data Processing Pattern 1"})," (SAMM and AAS): All solutions that shall be used for data provisioning/data consumption for use-cases using SAMM and AAS MUST implement the following standards:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CX-0002 Digital Twins in Catena - X v 1.0.2"}),"\n",(0,s.jsx)(n.li,{children:"CX-0003 SAMM Aspect Meta Model v 1.0.2"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This includes, but is not limited to the following use-cases:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Traceability"}),"\n",(0,s.jsx)(n.li,{children:"Circular Economy"}),"\n",(0,s.jsx)(n.li,{children:"Sustainability"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data Processing Pattern 2"})," (Knowledge Agents): All solutions that shall be used for data provisioning/data consumption for use-cases using Knowledge Agents MUST implement the following standards:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CX-0084 Federated Queries in Data Spaces (Knowledge Agents) v1.0.0"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This includes, but is not limited to the following use-cases:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Behaviour Twin"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Note: It is up to the data provider to provide the data\nin the correct semantic models for a specific use-case.\nThose models can be found in the specific use-case standards.\nThe IT-System Integration solution only needs to proof that it enables\nthe data provider to provide the data in the correct semantic modelling language."}),"\n",(0,s.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,s.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CX\u20130018 Sovereign Data Exchange v 1.0.1"}),"\n",(0,s.jsx)(n.li,{children:"CX-0002 Digital Twins in Catena-X v 1.0.2"}),"\n",(0,s.jsx)(n.li,{children:"CX-0003 SAMM Aspect Meta Model v 1.0.2"}),"\n",(0,s.jsx)(n.li,{children:"CX-0084 Federated Queries in Data Spaces (Knowledge Agents) v1.0.0"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,s.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,s.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,s.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},70399:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/backend-solutions-arch-b7ccc942fe46d8c2fae083125fef66c1.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);