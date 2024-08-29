"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[9885],{42074:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(74848),s=i(28453);const a={},r="CX - 0062 Triangle Traceability Notifications v1.0.0",o={id:"standards/CX-0062-TriangleTraceabilityNotifications/CX-0062-TriangleTraceabilityNotifications",title:"CX - 0062 Triangle Traceability Notifications v1.0.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0062-TriangleTraceabilityNotifications/CX-0062-TriangleTraceabilityNotifications.md",sourceDirName:"standards/CX-0062-TriangleTraceabilityNotifications",slug:"/standards/CX-0062-TriangleTraceabilityNotifications/",permalink:"/docs/standards/CX-0062-TriangleTraceabilityNotifications/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0061 Triangle Traceability Data Provisioning Digital Twin As Planned v1.1.0",permalink:"/docs/standards/CX-0061-TriangleTraceabilityDataProvisioningDigitalTwinAsPlanned/"},next:{title:"CX-0063 Triangle for Product Carbon Footprint Request v2.1.0",permalink:"/docs/standards/CX-0063-TriangleForProductCarbonFootprintRequest/"}},l={},c=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 ARCHITECTURE OVERVIEW",id:"13-architecture-overview",level:3},{value:"1.4 CONFORMANCE",id:"14-conformance",level:3},{value:"1.5 PROOF OF CONFORMITY",id:"15-proof-of-conformity",level:3},{value:"1.6 EXAMPLES",id:"16-examples",level:3},{value:"1.7 TERMINOLOGY",id:"17-terminology",level:3},{value:"2. Standards for Notifications Triangle",id:"2-standards-for-notifications-triangle",level:2},{value:"2.1 LIST OF STANDALONE STANDARDS",id:"21-list-of-standalone-standards",level:3},{value:"2.2 ADDITIONAL REQUIREMENTS",id:"22-additional-requirements",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cx---0062-triangle-traceability-notifications-v100",children:"CX - 0062 Triangle Traceability Notifications v1.0.0"})}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"The Traceability Notifications Triangle describes and collects necessary standards for applications that enable the exchange of Quality Alert and Quality Investigation Requests in Catena-X. Quality Investigation refer to sending standardised notifications to your supplier (top-down) while Quality Alerts refer to sending notifications to your customer (bottom-up). Those notifications will enable the industry to exchange and act upon quality issues in a more standardised, integrated, accelerated and precise manner."}),"\n",(0,t.jsx)(n.p,{children:"It is tightly bound to the BomAsBuilt Triangle, as Quality Alerts and Quality Investigation Requests should reference batches and/or serialized part instances as described in the respective standards."}),"\n",(0,t.jsx)(n.p,{children:"Traceability and especially the BomAsBuilt Triangle serves as an enabler for the standardized exchange of Quality Alerts and Investigation requests by introducing network-wide unique identifiers for serialized parts or batches. Its linked standards are to be used in order to be interoperable."}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"This document summarizes standards to be supported by a network participants IT infrastructure to cater for the Traceability Notifications (sub-)Use-Case. This involves protocols, APIs, processes and platform capabilities to be used."}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This document is targeting subsets of the following roles:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,t.jsx)(n.li,{children:"Business Application Provider"}),"\n",(0,t.jsx)(n.li,{children:"Enablement Service Provider"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"NOTE: Fulfilling a use-case standard by a data provider / consumer can be done in two ways: A) Purchase a certified app for the use-case. In this case the data provider / consumer does not need to proof conformity again and B) Data Provisioning / Consumption without a certified app for the use-case. In this case the data provider / consumer needs to proof conformity with all single standards listed in this document."}),"\n",(0,t.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Standardized Quality Alerts and Quality Investigation Requests enabled by digital twins based on the BoM as built (see BoMasBuiltTriangle) allow fast reactions to quality issues within the Catena-X network."}),"\n",(0,t.jsx)(n.h3,{id:"13-architecture-overview",children:"1.3 ARCHITECTURE OVERVIEW"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"archOverview.png",src:i(77576).A+"",width:"451",height:"255"}),"\n",(0,t.jsx)(n.em,{children:"Figure 1: Architecture Overview"})]}),"\n",(0,t.jsx)(n.h3,{id:"14-conformance",children:"1.4 CONFORMANCE"}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words ",(0,t.jsx)(n.strong,{children:"MAY"}),", ",(0,t.jsx)(n.strong,{children:"MUST"}),", ",(0,t.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,t.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(n.strong,{children:"SHOULD"})," and ",(0,t.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"15-proof-of-conformity",children:"1.5 PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All participants and their solutions will need to proof, that they are conform with the Catena-X standards.\nTo validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).\nPlease refer to: ",(0,t.jsx)(n.em,{children:"[!LINK Conformity Assessment]"})," for the process of conformity assessment and certification."]}),"\n",(0,t.jsxs)(n.p,{children:["Since this Triangle document describes a set of standards to be fulfilled, participants ",(0,t.jsx)(n.strong,{children:"MUST"})," fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document."]}),"\n",(0,t.jsx)(n.p,{children:"The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked using the tools and criteria provided for these components."}),"\n",(0,t.jsx)(n.h3,{id:"16-examples",children:"1.6 EXAMPLES"}),"\n",(0,t.jsx)(n.h3,{id:"17-terminology",children:"1.7 TERMINOLOGY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Business Partner Number (BPN)"})}),"\n",(0,t.jsx)(n.p,{children:"A BPN is the unique identifier of a partner within Catena-X."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"International Data Space (IDS)"}),"\nInternational Data Space and its protocol for data exchange foresees an compliant connector handling contract negotiation before each data transfer and defines a general architecture for data exchange."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Eclipse Dataspace Connector (EDC)"}),"\nThe EDC is a reference implementation for an IDS compliant connector currently acting as a de-facto standard and/or reference Implementation within Catena-X."]}),"\n",(0,t.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the glossary on the association homepage."}),"\n",(0,t.jsx)(n.h2,{id:"2-standards-for-notifications-triangle",children:"2. Standards for Notifications Triangle"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"21-list-of-standalone-standards",children:"2.1 LIST OF STANDALONE STANDARDS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To participate in Notifications, the following standards ",(0,t.jsx)(n.strong,{children:"MUST"})," be fulfilled by all participants for which the standard is relevant:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CX - 0022 Notification Process"}),"\n",(0,t.jsx)(n.li,{children:"CX - 0023 Notification API"}),"\n",(0,t.jsx)(n.li,{children:"CX \u2013 0018 Sovereign Data Exchange"}),"\n",(0,t.jsx)(n.li,{children:"CX - 0060 Traceability BomAsBuilt Triangle"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The Notification Process described in CX-0022 ",(0,t.jsx)(n.strong,{children:"MUST"})," be supported.\nThe Notification API described in CX-0023 ",(0,t.jsx)(n.strong,{children:"MUST"})," be provisioned in order to receive Quality Alerts or Quality Investigation Requests.\nThe IDS protocol as described in CX-0018 ",(0,t.jsx)(n.strong,{children:"MUST"})," be followed in the data exchange.\nThe Eclipse Dataspace Connector as a reference implementation is ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"})," to be used as an IDS compliant connector.\nThe BomAsBuilt Triangle ",(0,t.jsx)(n.strong,{children:"MUST"})," be used as the basis for the Quality Alerts and Quality Investigation Request."]}),"\n",(0,t.jsx)(n.h3,{id:"22-additional-requirements",children:"2.2 ADDITIONAL REQUIREMENTS"}),"\n",(0,t.jsxs)(n.p,{children:["As the IDS protocol is being used, data ",(0,t.jsx)(n.strong,{children:"MUST NOT"})," be transferred before a corresponding contract negotiation has been successfully passed by the participants of the data exchange and a valid contract is present as described in CX-0018.\nThe required data offers for Quality Alerts and Quality Investigation Requests ",(0,t.jsx)(n.strong,{children:"MUST"})," be created and linked to the described APIs as described in CX-0023.\nThe process and especially status schema depicted in CX-0022 ",(0,t.jsx)(n.strong,{children:"MUST"})," be supported."]}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CX - 0022 Notification Process"}),"\n",(0,t.jsx)(n.li,{children:"CX - 0023 Notification API"}),"\n",(0,t.jsx)(n.li,{children:"CX - 0018 Sovereign Data Exchange"}),"\n",(0,t.jsx)(n.li,{children:"CX - 0060 Traceability BomAsBuilt Triangle"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The traceability KIT and sub-KITs will include further information on EDC data asset structures, Digital Twin Submodel examples and API calls to be made."}),"\n",(0,t.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},77576:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/archOverview-48c906521946efcaad6c5d597fd7e038.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);