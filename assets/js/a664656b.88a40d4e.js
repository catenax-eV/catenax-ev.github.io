"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[3575],{93327:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(74848),a=i(28453);const s={},r="CX-0094 Aspect Model: Part Site In Formation As Planned v1.0.0",o={id:"standards/CX-0094-AspectModelPartSiteInformationAsPlanned/CX-0094-AspectModelPartSiteInformationAsPlanned",title:"CX-0094 Aspect Model: Part Site In Formation As Planned v1.0.0",description:"ABSTRACT",source:"@site/docs/standards/CX-0094-AspectModelPartSiteInformationAsPlanned/CX-0094-AspectModelPartSiteInformationAsPlanned.md",sourceDirName:"standards/CX-0094-AspectModelPartSiteInformationAsPlanned",slug:"/standards/CX-0094-AspectModelPartSiteInformationAsPlanned/",permalink:"/docs/next/standards/CX-0094-AspectModelPartSiteInformationAsPlanned/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0084 Federated Queries in Data Spaces v1.2.0",permalink:"/docs/next/standards/CX-0084-FederatedQueriesInDataSpaces/"},next:{title:"CX-0102 Functional Mock Up v1.0.0",permalink:"/docs/next/standards/CX-0102-Functional-Mock-Up/"}},l={},d=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 ARCHITECTURE OVERVIEW",id:"13-architecture-overview",level:3},{value:"1.4 CONFORMANCE",id:"14-conformance",level:3},{value:"1.5 PROOF OF CONFORMITY",id:"15-proof-of-conformity",level:3},{value:"1.6 EXAMPLES",id:"16-examples",level:3},{value:"1.7 TERMINOLOGY",id:"17-terminology",level:3},{value:"2 ASPECT MODEL \u201cPartSiteInformationAsPlanned\u201d",id:"2-aspect-model-partsiteinformationasplanned",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 SPECIFICATION ARTIFACTS",id:"22-specification-artifacts",level:3},{value:"2.3 LICENSE",id:"23-license",level:3},{value:"2.4 IDENTIFER OF SEMANTIC MODEL",id:"24-identifer-of-semantic-model",level:3},{value:"2.5 FORMATS OF SEMANTIC MODEL",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF Turtle",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON Schema",id:"252-json-schema",level:4},{value:"2.5.3 aasx",id:"253-aasx",level:4},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cx-0094-aspect-model-part-site-in-formation-as-planned-v100",children:"CX-0094 Aspect Model: Part Site In Formation As Planned v1.0.0"})}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"The semantic model described below describes a submodel for a digital twin on material or part level providing site related information. A site is a delimited geographical area where a legal entity does business. In the Digital Twin as planned lifecycle stage all potentially related sites are listed including all sites where e.g. production of this material or part is planned."}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:'The aspect PartSiteInformationAsPlanned provides site related information for a given as planned item (i.e. a part type that is uniquely identifiable within Catena-X via its Catena-X ID). A site is a delimited geographical area where a legal entity does business. In the "as planned" lifecycle context all potentially related sites are listed including all sites where e.g. production of this part is planned.'}),"\n",(0,t.jsx)(n.p,{children:"Note: The presented aspect model is in version 1.0.0"}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This standard applies to the roles:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,t.jsx)(n.li,{children:"Business Application Provider"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The described semantic model or submodel template must be provided by applications provisioning data for the Digital Twin AsPlanned lifecycle as well as all data providers in the Digital Twin AsPlanned lifecycle."}),"\n",(0,t.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This submodel template or aspect model is required to give site related information for a given part."}),"\n",(0,t.jsx)(n.p,{children:"Therefore this aspect contains information at which different locations (sites) a planned part is processed, e.g. from design to production of a part."}),"\n",(0,t.jsx)(n.h3,{id:"13-architecture-overview",children:"1.3 ARCHITECTURE OVERVIEW"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"14-conformance",children:"1.4 CONFORMANCE"}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams,\nexamples, and notes in this specification are non-normative. Everything else in\nthis specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words ",(0,t.jsx)(n.strong,{children:"MAY"}),", ",(0,t.jsx)(n.strong,{children:"MUST"}),", ",(0,t.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"}),",\n",(0,t.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(n.strong,{children:"SHOULD"})," and ",(0,t.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be\ninterpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they\nappear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"15-proof-of-conformity",children:"1.5 PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All participants* and their solutions must prove they conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,t.jsx)(n.p,{children:"The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data."}),"\n",(0,t.jsxs)(n.p,{children:["*",(0,t.jsx)(n.em,{children:"Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"16-examples",children:"1.6 EXAMPLES"}),"\n",(0,t.jsx)(n.p,{children:'Example JSON payload: Submodel "PartSiteInformationAsPlanned" for a component that is produced at the given site'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",\n  "sites": [\n    {\n      "catenaXSiteId": "BPNS1234567890ZZ",\n      "functionValidUntil": "2025-11-21T11:14:30.825+01:00",\n      "function": "production",\n      "functionValidFrom": "2022-11-21T11:14:30.825+01:00"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"17-terminology",children:"1.7 TERMINOLOGY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Aspect Model\n: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:": Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model."}),"\n",(0,t.jsx)(n.p,{children:": Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"[Source: Catena-X, CX-0002, note 3 removed]"})}),"\n",(0,t.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the glossary on the association homepage."}),"\n",(0,t.jsx)(n.h2,{id:"2-aspect-model-partsiteinformationasplanned",children:"2 ASPECT MODEL \u201cPartSiteInformationAsPlanned\u201d"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This semantic model contains information at which locations (sites) a planned part will be processed. For representing sites only BusinessPartnerNumberSites may only be used. The original intent is to attach this aspect to a material specific twin in an Asset Administration Shell but is not limited to that use case."}),"\n",(0,t.jsx)(n.p,{children:'This aspect may only contain BusinessPartnerNumberSites. In the As-Planned lifecycle state all variants are covered ("120% BOM").'}),"\n",(0,t.jsx)(n.p,{children:"Every data provider of partSiteInformationAsPlanned data MUST provide the data conformant to the semantic model specified in this document."}),"\n",(0,t.jsx)(n.p,{children:"The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred."}),"\n",(0,t.jsx)(n.p,{children:"Every certified business application relying on partSiteInformationAsPlanned data MUST be able to consume data conformant to the semantic model specified in this document."}),"\n",(0,t.jsxs)(n.p,{children:["This semantic model ",(0,t.jsx)(n.strong,{children:"MUST"})," be made available in the central Semantic Hub."]}),"\n",(0,t.jsxs)(n.p,{children:["Data consumers and data provider ",(0,t.jsx)(n.strong,{children:"MUST"})," comply with the license of the semantic model."]}),"\n",(0,t.jsxs)(n.p,{children:["The submodel data ",(0,t.jsx)(n.strong,{children:"MUST"})," be transferred using the IDS Protocol as described in CX-0018 and CX-0002."]}),"\n",(0,t.jsxs)(n.p,{children:["Data providers ",(0,t.jsx)(n.strong,{children:"MUST"})," provide the data as part of a digital twin of the asset for a material/plant conformant to CX-0002."]}),"\n",(0,t.jsxs)(n.p,{children:["The JSON Payload of data providers ",(0,t.jsx)(n.strong,{children:"MUST"})," be conformant to the JSON Schema as specified in this document."]}),"\n",(0,t.jsx)(n.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:'The aspect PartSiteInformationAsPlanned provides site related information for a given as planned item (i.e. a part type that is uniquely identifiable within Catena-X via its Catena-X ID). A site is a delimited geographical area where a legal entity does business. In the "as planned" lifecycle context all potentially related sites are listed including all sites where e.g. production of this part is planned.'}),"\n",(0,t.jsx)(n.p,{children:"Note: The presented aspect model is in version 1.0.0"}),"\n",(0,t.jsx)(n.h3,{id:"22-specification-artifacts",children:"2.2 SPECIFICATION ARTIFACTS"}),"\n",(0,t.jsxs)(n.p,{children:['The modeling of the semantic model specified in this document was done in\naccordance to the "semantic driven workflow" to create a submodel template\nspecification ',(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003\nas input for the semantic deriven workflow."}),"\n",(0,t.jsx)(n.p,{children:"Like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F\nconformant to CX-0003."}),"\n",(0,t.jsx)(n.h3,{id:"23-license",children:"2.3 LICENSE"}),"\n",(0,t.jsx)(n.p,{children:"This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons."}),"\n",(0,t.jsx)(n.h3,{id:"24-identifer-of-semantic-model",children:"2.4 IDENTIFER OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"The semantic model has the unique identifier:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"urn:bamm:io.catenax.part_site_information_as_planned:1.0.0\n"})}),"\n",(0,t.jsx)(n.p,{children:"This identifier MUST be used by the data provider to define the semantics of the data being transferred."}),"\n",(0,t.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 FORMATS OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF Turtle"}),"\n",(0,t.jsx)(n.p,{children:"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating\nadditional file formats and serializations."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_site_information_as_planned/1.0.0/PartSiteInformationAsPlanned.ttl \n"})}),"\n",(0,t.jsx)(n.p,{children:"The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation\nof other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel\nTemplate or a HTML documentation."}),"\n",(0,t.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON Schema"}),"\n",(0,t.jsx)(n.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only\npayload of the Asset Administration Shell for the API operation "GetSubmodel".'}),"\n",(0,t.jsx)(n.h4,{id:"253-aasx",children:"2.5.3 aasx"}),"\n",(0,t.jsxs)(n.p,{children:["A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested\nartifacts for a Submodel Template Specification conformant to [",(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"]."]}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsx)(n.p,{children:"CX-0002 DIGITAL TWINS IN CATENA-X"}),"\n",(0,t.jsx)(n.p,{children:"CX-0003 BAMM Aspect Meta Model"}),"\n",(0,t.jsx)(n.p,{children:"CX-0004 GOVERNANCE PROCESS"}),"\n",(0,t.jsx)(n.p,{children:"CX-0018 ECLPISE DATA SPACE CONNECTOR (EDC)"}),"\n",(0,t.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["[SMT] How to create a submodel template specification. Guideline. Download from: ",(0,t.jsx)(n.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf"})]}),"\n",(0,t.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,t.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"    [OPTIONAL] Add figures here if nececarry\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"    [OPTIONAL] Add Tables here here if nececarry\n"})}),"\n",(0,t.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);