"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[118],{75203:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var s=i(74848),r=i(28453);const t={tags:["CAT/Portal","CAT/Core Service Provider","CAT/Sandbox Services (Beta)","CAT/BPDM"]},o="CX-0053 Discovery Finder and BPN Discovery Service APIs v1.1.1",a={id:"standards/CX-0053-BPNDiscoveryServiceAPIs/CX-0053-BPNDiscoveryServiceAPIs",title:"CX-0053 Discovery Finder and BPN Discovery Service APIs v1.1.1",description:"ABSTRACT",source:"@site/docs/standards/CX-0053-BPNDiscoveryServiceAPIs/CX-0053-BPNDiscoveryServiceAPIs.md",sourceDirName:"standards/CX-0053-BPNDiscoveryServiceAPIs",slug:"/standards/CX-0053-BPNDiscoveryServiceAPIs/",permalink:"/docs/next/standards/CX-0053-BPNDiscoveryServiceAPIs/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"CAT/Portal",permalink:"/docs/next/tags/cat-portal"},{inline:!0,label:"CAT/Core Service Provider",permalink:"/docs/next/tags/cat-core-service-provider"},{inline:!0,label:"CAT/Sandbox Services (Beta)",permalink:"/docs/next/tags/cat-sandbox-services-beta"},{inline:!0,label:"CAT/BPDM",permalink:"/docs/next/tags/cat-bpdm"}],version:"current",frontMatter:{tags:["CAT/Portal","CAT/Core Service Provider","CAT/Sandbox Services (Beta)","CAT/BPDM"]},sidebar:"sidebar_standards",previous:{title:"CX - 0050 Framework Agreement Credential v.2.1.0",permalink:"/docs/next/standards/CX-0050-FrameworkAgreementCredential/"},next:{title:"CX-0054 Application Service Release v1.0.1",permalink:"/docs/next/standards/CX-0054-ApplicationServiceRelease/"}},d={},c=[{value:"ABSTRACT",id:"abstract",level:2},{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"Context",id:"context",level:4},{value:"ARCHITECTURE OVERVIEW",id:"architecture-overview",level:4},{value:"1.3 Conformance and Proof of Conformity",id:"13-conformance-and-proof-of-conformity",level:3},{value:"CONFORMANCE",id:"conformance",level:4},{value:"PROOF OF CONFORMITY",id:"proof-of-conformity",level:4},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2. DISCOVERY FINDER API",id:"2-discovery-finder-api",level:2},{value:"2.1 PRECONDITIONS AND DEPENDENCIES",id:"21-preconditions-and-dependencies",level:2},{value:"2.2 API SPECIFICATION",id:"22-api-specification",level:2},{value:"2.2.1 API Endpoints &amp; resources",id:"221-api-endpoints--resources",level:3},{value:"2.2.2 Available Data Types",id:"222-available-data-types",level:3},{value:"2.2.3 EDC Data Asset Structure",id:"223-edc-data-asset-structure",level:3},{value:"2.2.4 Error Handling",id:"224-error-handling",level:3},{value:"3. BPN DISCOVERY API",id:"3-bpn-discovery-api",level:2},{value:"3.1 PRECONDITIONS AND DEPENDENCIES",id:"31-preconditions-and-dependencies",level:3},{value:"3.2 API SPECIFICATION",id:"32-api-specification",level:3},{value:"3.2.1 API Endpoints &amp; Resources",id:"321-api-endpoints--resources",level:4},{value:"3.2.2 Available Data Types",id:"322-available-data-types",level:4},{value:"3.2.3 Error Handling",id:"323-error-handling",level:4},{value:"4. REFERENCES",id:"4-references",level:2},{value:"4.1 NORMATIVE REFERENCES",id:"41-normative-references",level:3},{value:"4.2 NON-NORMATIVE REFERENCES",id:"42-non-normative-references",level:3},{value:"4.3 REFERENCE IMPLEMENTATIONS",id:"43-reference-implementations",level:3},{value:"Legal",id:"legal",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"cx-0053-discovery-finder-and-bpn-discovery-service-apis-v111",children:"CX-0053 Discovery Finder and BPN Discovery Service APIs v1.1.1"})}),"\n",(0,s.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,s.jsx)(n.p,{children:"The EDC discovery service as defined in CX-0001 supports to find EDC endpoints of participants of\nthe data space via Business Partner Numbers (BPN). In some use cases the BPN needed to access an\nEDC data asset is not known. This means that all EDCs in the data space need to be accessed to find\na specific EDC asset under consideration. This broadcasting has very low performance and produces\na high access load to the EDCs."}),"\n",(0,s.jsx)(n.p,{children:"BPN discovery services help to restrict the number of EDCs to be accessed. Prerequisite is that the\nbusiness application has some other identifying information and a corresponding BPN discovery service\nsupports the search for the BPN for this kind of identifying information."}),"\n",(0,s.jsx)(n.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,s.jsx)(n.p,{children:"This standard is designed for data discovery in Catena-X."}),"\n",(0,s.jsx)(n.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,s.jsx)(n.p,{children:"Changes compared to V1.0.1 of CX-0053:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"added links to openAPI and documentation in Tractus-X instead of specification in document itself"}),"\n",(0,s.jsx)(n.li,{children:"updated API endpoints and resources"}),"\n",(0,s.jsx)(n.li,{children:"added reference implementations"}),"\n",(0,s.jsx)(n.li,{children:"only CX-0010 normative reference, all other normative references now in chapter for non-normative references"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,s.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This standard is relevant for a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Business Application Provider"}),"\n",(0,s.jsx)(n.li,{children:"Enablement Service Provider"}),"\n",(0,s.jsx)(n.li,{children:"Core Service Provider"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The standard is relevant for the roles in the following cases:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Business Application Provider who does not know the BPN of the data asset under consideration,\nbut needs to know it, e.g. to discover available EDC connectors"}),"\n",(0,s.jsx)(n.li,{children:"Enablement Service Provider who wants to provide BPN discovery services"}),"\n",(0,s.jsx)(n.li,{children:"Core Service Provider who wants to provide the Discovery Finder service"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"context",children:"Context"}),"\n",(0,s.jsx)(n.p,{children:"The EDC discovery service as defined in CX-0001 supports to find EDC endpoints of participants of\nthe data space via BPNs, CX-0010. In some use cases the BPN is not known at the start of the process.\nThis means that all EDCs in the data space need to be accessed to find a specific EDC data asset under consideration. This broadcasting has very low performance and produces a high access load on the EDCs."}),"\n",(0,s.jsx)(n.p,{children:"BPN discovery services help to restrict the number of EDCs to be accessed. Prerequisite is that the\nbusiness application provider or data consumer has some additional information,\ne.g. the Original Equipment Number."}),"\n",(0,s.jsx)(n.h4,{id:"architecture-overview",children:"ARCHITECTURE OVERVIEW"}),"\n",(0,s.jsx)(n.p,{children:"Figure 1 gives a rough overview of the architecture. A Data Consuming Application uses the discovery\nservices to find the Eclipse Dataspace Connector (EDC),  CX-0018, that most probably provides the data\nneeded.\nThe starting point for most applications to find data is a corresponding lookup in the Digital Twin\nRegistry CX-0002. Based on specific asset IDs the Digital Twin Registry enables the lookup of digital\ntwins and the endpoints to the data they provide.\nIn this architecture the Digital Twin Registry is decentralized and is accessed via the EDC of the\ndata provider. This means that the data consuming application needs to know the endpoint of this EDC.\nThe lookup of EDC endpoints is done via the BPN using the EDC Discovery service CX-0001.\nDepending on the context the BPN might not be known for a product under consideration.\nIn this case BPN Discovery services can be used. Since there might be more than one BPN Discovery Service\na Discovery Finder service enables the lookup of the suitable BPN Discovery services."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Discovery_Services_in_the_C-X_Architecture",src:i(22632).A+"",width:"1290",height:"903"})}),"\n",(0,s.jsx)(n.p,{children:"Figure 1 Discovery Services in the Catena-X Architecture"}),"\n",(0,s.jsx)(n.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 Conformance and Proof of Conformity"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"conformance",children:"CONFORMANCE"}),"\n",(0,s.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes\nin this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,s.jsxs)(n.p,{children:["The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in\xa0[",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"BCP 14"}),"],\xa0[",(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",children:"RFC2119"}),"], [",(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",children:"RFC8174"}),"] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,s.jsx)(n.h4,{id:"proof-of-conformity",children:"PROOF OF CONFORMITY"}),"\n",(0,s.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are conform\nwith the Catena-X standards. To validate that the standards are applied\ncorrectly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,s.jsx)(n.p,{children:"The central operating company MUST provide the central Discovery Finder service conformant to the API specified in this standard."}),"\n",(0,s.jsx)(n.p,{children:"Any operating company MAY provide BPN Discovery services conformant to the API specified in this standard."}),"\n",(0,s.jsx)(n.p,{children:"The central operating company MUST ensure that there is at least one BPN Discovery service provided\nper demand of a KIT. The BPN Discovery API as specified in the standard is generic. Which keys MUST\nbe supported is specified in the corresponding use case specific standards."}),"\n",(0,s.jsx)(n.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,s.jsx)(n.p,{children:"For examples see the different payload examples in the documentation of the API normative parts."}),"\n",(0,s.jsx)(n.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Business Partner Number (BPN)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A BPN is the unique identifier of a partner within Catena-x."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the glossary on\nthe association homepage."}),"\n",(0,s.jsx)(n.h2,{id:"2-discovery-finder-api",children:"2. DISCOVERY FINDER API"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"21-preconditions-and-dependencies",children:"2.1 PRECONDITIONS AND DEPENDENCIES"}),"\n",(0,s.jsx)(n.p,{children:"This service is a prerequisite to find the available BPN Discovery Services."}),"\n",(0,s.jsx)(n.h2,{id:"22-api-specification",children:"2.2 API SPECIFICATION"}),"\n",(0,s.jsx)(n.h3,{id:"221-api-endpoints--resources",children:"2.2.1 API Endpoints & resources"}),"\n",(0,s.jsxs)(n.p,{children:["The API endpoints MUST be implemented conformant to the ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(35275).A+"",children:"openAPI specification"})," for the discovery finder service."]}),"\n",(0,s.jsxs)(n.p,{children:["For further information on the discovery finder service see its ",(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-discovery-finder/blob/main/docs/documentation.md",children:"documentation"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"222-available-data-types",children:"2.2.2 Available Data Types"}),"\n",(0,s.jsx)(n.p,{children:"The API MUST use JSON as the payload transported via HTTP."}),"\n",(0,s.jsx)(n.h3,{id:"223-edc-data-asset-structure",children:"2.2.3 EDC Data Asset Structure"}),"\n",(0,s.jsx)(n.p,{children:"As the services specified by this standard run without shielding by an EDC, definition of a Data Asset Structure is obsolete."}),"\n",(0,s.jsx)(n.h3,{id:"224-error-handling",children:"2.2.4 Error Handling"}),"\n",(0,s.jsx)(n.p,{children:"See API Endpoints & resources for the http response codes that MUST be defined for HTTP POST endpoints."}),"\n",(0,s.jsx)(n.h2,{id:"3-bpn-discovery-api",children:"3. BPN DISCOVERY API"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"31-preconditions-and-dependencies",children:"3.1 PRECONDITIONS AND DEPENDENCIES"}),"\n",(0,s.jsx)(n.p,{children:"A Discovery Finder service is a prerequisite to find the available BPN Discovery Services."}),"\n",(0,s.jsx)(n.h3,{id:"32-api-specification",children:"3.2 API SPECIFICATION"}),"\n",(0,s.jsx)(n.h4,{id:"321-api-endpoints--resources",children:"3.2.1 API Endpoints & Resources"}),"\n",(0,s.jsxs)(n.p,{children:["The API endpoints MUST be implemented conformant to the the ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(45423).A+"",children:"openAPI specification"})," for the BPN discovery service."]}),"\n",(0,s.jsxs)(n.p,{children:["For further information on the service see its ",(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-bpn-discovery/blob/0ee7074af5aa039bf68f1a1b312aa20ffc70f204/docs/documentation.md",children:"documentation"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"322-available-data-types",children:"3.2.2 Available Data Types"}),"\n",(0,s.jsx)(n.p,{children:"The API MUST use JSON as the payload transported via HTTP."}),"\n",(0,s.jsx)(n.h4,{id:"323-error-handling",children:"3.2.3 Error Handling"}),"\n",(0,s.jsx)(n.p,{children:"See API Endpoints & resources for the http response codes that MUST be defined for HTTP POST endpoints."}),"\n",(0,s.jsx)(n.h2,{id:"4-references",children:"4. REFERENCES"}),"\n",(0,s.jsx)(n.h3,{id:"41-normative-references",children:"4.1 NORMATIVE REFERENCES"}),"\n",(0,s.jsx)(n.p,{children:"CX-0010 Business Partner Number (BPN)"}),"\n",(0,s.jsx)(n.h3,{id:"42-non-normative-references",children:"4.2 NON-NORMATIVE REFERENCES"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"CX-0001 EDC Discovery API"}),"\n",(0,s.jsx)(n.p,{children:"CX-0002 Digital Twins in Catena-X"}),"\n",(0,s.jsx)(n.p,{children:"CX-0012 Business Partner Data Pool"}),"\n",(0,s.jsx)(n.p,{children:"CX-0018 Eclipse Data Space Connector"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://catenax-ev.github.io/docs/next/operating-model/why-introduction",children:"Catena-X Operating Model v3.0"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"43-reference-implementations",children:"4.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This is a reference implementation for the Discovery Finder Service:\n",(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-discovery-finder",children:"https://github.com/eclipse-tractusx/sldt-discovery-finder"})]}),"\n",(0,s.jsxs)(n.p,{children:["This is a reference implementation for the BPN Discovery Service:\n",(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-bpn-discovery",children:"https://github.com/eclipse-tractusx/sldt-bpn-discovery"})]}),"\n",(0,s.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,s.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,s.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},45423:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/files/bpn-discovery-service-openapi-8cdd40bc28e8960fcc89555d4abe33a5.yaml"},35275:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/files/discovery-finder-openapi-bd90c7e0ee4918106d9bb725127bc853.yaml"},22632:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/discovery-services-in-the-CX-architecture-f05e95f7ae095249ae4c737a6b4d2c56.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);