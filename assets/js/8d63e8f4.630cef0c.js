"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[9719],{93355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=t(74848),a=t(28453);const r={tags:["CAT/BPDM","CAT/Core Service Provider","CAT/Sandbox Services (Beta)","CAT/Sandbox Service Provider"]},i="CX-0011 Issuing Agency v1.0.1",o={id:"standards/CX-0011-IssuingAgency/CX-0011-IssuingAgency",title:"CX-0011 Issuing Agency v1.0.1",description:"ABSTRACT",source:"@site/docs/standards/CX-0011-IssuingAgency/CX-0011-IssuingAgency.md",sourceDirName:"standards/CX-0011-IssuingAgency",slug:"/standards/CX-0011-IssuingAgency/",permalink:"/docs/next/standards/CX-0011-IssuingAgency/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"CAT/BPDM",permalink:"/docs/next/tags/cat-bpdm"},{inline:!0,label:"CAT/Core Service Provider",permalink:"/docs/next/tags/cat-core-service-provider"},{inline:!0,label:"CAT/Sandbox Services (Beta)",permalink:"/docs/next/tags/cat-sandbox-services-beta"},{inline:!0,label:"CAT/Sandbox Service Provider",permalink:"/docs/next/tags/cat-sandbox-service-provider"}],version:"current",frontMatter:{tags:["CAT/BPDM","CAT/Core Service Provider","CAT/Sandbox Services (Beta)","CAT/Sandbox Service Provider"]},sidebar:"sidebar_standards",previous:{title:"CX-0010 Business Partner Number v2.0.0",permalink:"/docs/next/standards/CX-0010-BusinessPartnerNumber/"},next:{title:"CX-0012 Business Partner Data Pool API v4.0.0",permalink:"/docs/next/standards/CX-0012-BusinessPartnerDataPoolAPI/"}},c={},h=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Audience &amp; Scope",id:"11-audience--scope",level:3},{value:"1.2 Context",id:"12-context",level:3},{value:"1.3 Architecture Overview",id:"13-architecture-overview",level:3},{value:"1.4 Conformance",id:"14-conformance",level:3},{value:"1.5 Proof of conformity",id:"15-proof-of-conformity",level:3},{value:"1.6 Examples",id:"16-examples",level:3},{value:"1.7 Terminology",id:"17-terminology",level:3},{value:"2. Issuing",id:"2-issuing",level:2},{value:"3. References",id:"3-references",level:2},{value:"3.1 Normative References",id:"31-normative-references",level:3},{value:"3.2 Non-Normative References",id:"32-non-normative-references",level:3},{value:"Legal",id:"legal",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"cx-0011-issuing-agency-v101",children:"CX-0011 Issuing Agency v1.0.1"})}),"\n",(0,s.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,s.jsxs)(n.p,{children:["The issuing agency is a technical mechanism that centrally creates and\nassigns business partner numbers (BPNs) for a data set of a business\npartner. The issuing agency is specified in the prefix of the BPN\naccording to\xa0",(0,s.jsx)(n.a,{href:"https://www.iso.org/standard/54779.html",children:"ISO/IEC 15459"}),".\nIt ensures that a data set maps to a unique identifier and contributes\nto the sharing process of business partner data."]}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,s.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 Audience & Scope"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This standard is relevant for:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Core Service Provider"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This document is focusing on the issuing agency component that is part\nof the business partner data management (BPDM) use case described on\nthe\xa0",(0,s.jsx)(n.a,{href:"https://catena-x.net/en/angebote/bpdm",children:"BPDM Catena-X Website"}),". It\nis relevant when the creation of business partner numbers for the data\nsharing process and golden record process to ensure the highest data\nquality is needed. It is also relevant to get an understanding on how\nthe mechanism works to build and maintain the issuing agency as a core\nservice component."]}),"\n",(0,s.jsxs)(n.p,{children:["Not in scope is the logic of the business partner number itself. There\nis a separate standard for this:\xa0",(0,s.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"Business Partner Number\nStandard"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This is not relevant for consuming data sets or BPNS for another service\nor application in the Catena-X network."}),"\n",(0,s.jsx)(n.p,{children:"This is not relevant for sharing data or sharing member to hand over\ndata into the golden record process to improve the data quality of\nbusiness partner data."}),"\n",(0,s.jsx)(n.h3,{id:"12-context",children:"1.2 Context"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In general, the issuing agency is important for business partner data\nmanagement in Catena-X because it is responsible for creating the unique\nidentifier that identifies a legal entity in the network. By having a\ncentralized and responsible agency in charge of business partner data\nmanagement, Catena-X and its network participants can improve the\nquality and reliability of its data and support its goals of operational\nefficiency and higher data quality."}),"\n",(0,s.jsx)(n.p,{children:"The issuing agency is part of the whole sharing / golden record process\nand will not work outstanding on its own. It is one component that is\nmandatory to make the use case work."}),"\n",(0,s.jsx)(n.h3,{id:"13-architecture-overview",children:"1.3 Architecture Overview"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This runtime view illustrates on a high level how the data sharing\nmechanism between a sharing member, a SaaS component, including the BPN\nissuing by the BPN Generator works."}),"\n",(0,s.jsx)(n.p,{children:"An actor can be any sharing member (company) that shares data with\nCatena-X. The new business partner data object is transferred from the\nenterprise layer of the sharing member to the Catena-X gate, this gate\ninteracts with the API of the SaaS component. The SaaS component fetches\ninformation about their synchronization process and receives the new\ndata objects in response. The issuing agency that is in focus of this\nstandard creates a BPN and the data objects are changed accordingly. The\nSaaS adapter polls the changed data and mirrors it back to the sharing\nmember via the SaaS component."}),"\n",(0,s.jsx)(n.p,{children:"With the initial process of sharing data, the sharing member receives an\noptimized business partner data object with a business partner number.\nAfter the first sharing of the data the data gets updated automatically\nwith the same BPN."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ProcessDataSharing_1.jpg",src:t(4372).A+"",width:"1378",height:"760"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Figure 1: Process data sharing"})})}),"\n",(0,s.jsx)(n.h3,{id:"14-conformance",children:"1.4 Conformance"}),"\n",(0,s.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines,\ndiagrams, examples, and notes in this specification are non-normative.\nEverything else in this specification is normative."}),"\n",(0,s.jsxs)(n.p,{children:["The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,\nSHOULD and SHOULD NOT in this document are to be interpreted as\ndescribed in\xa0",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"BCP\n14"}),"\xa0[",(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",children:"RFC2119"}),"]\n[",(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",children:"RFC8174"}),"] when, and\nonly when, they appear in all capitals, as shown here."]}),"\n",(0,s.jsx)(n.h3,{id:"15-proof-of-conformity",children:"1.5 Proof of conformity"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are\nconform with the Catena-X standards. To validate that the standards are\napplied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,s.jsxs)(n.p,{children:["To proof conformity of the issuing agency usage for the business partner\ndata management usage an operations concept must be available. The\nissuing agency must be aligned with the relevant components to create a\nunique identifier called BPN. In addition to that, created numbers must\nfollow the\xa0",(0,s.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"business partner number\nstandard"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Another valid point to proof the conformity is to show a license that\nwas handed out by the\xa0",(0,s.jsx)(n.a,{href:"https://catena-x.net/",children:"Catena-X e.V."})]}),"\n",(0,s.jsx)(n.h3,{id:"16-examples",children:"1.6 Examples"}),"\n",(0,s.jsx)(n.p,{children:"Company A transfers a new business partner data object of a legal entity\nfrom their internal master data management system into the sharing\nprocess to improve the data quality of this data object (e.g. get the\naddress of this business partner) and to get the BPNL for this data\nobject back into their internal system for the usage of other use cases\nwhere they need the BPN (e.g. demand and capacity management to identify\nsupplier of parts in the network)."}),"\n",(0,s.jsx)(n.h3,{id:"17-terminology",children:"1.7 Terminology"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BPDM:"}),"\xa0Business Partner Data Management is the domain and use case\ninside Catena-X. This domain is responsible for the logic of the\nbusiness partner number, the creation of the number, the sharing process\nof business partner data, the technological realization and other\nservices that are built up on this component."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BPN:"}),"\xa0Business partner number is the unique identifier for companies."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BPNL"}),"\xa0Is the business partner number of a legal entity."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BPNS"}),"\xa0Is the business partner number for a site of the legal entity."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BPNA"}),"\xa0Is the business partner number for the address of a site or a\nlegal entity."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sharing Member:"}),"\xa0Sharing members is every company that shares their\nexisting data objects of their business partners into the sharing\nprocess."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sharing Process:"}),"\xa0Sharing process is the process that enables the\nsharing member to share their data and to proceed the data to get the\ndata linked, harmonized. In this process the BPN will be attached to the\ndata and the golden record is created."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Golden Record:"}),"\xa0Is the concept of high-quality business partner data."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SaaS:"}),"\xa0Means software as a service. In this context the SaaS\ncomponent is part of the sharing process to create the golden records\nand takes care that duplicates are removed, the linkage and\nharmonization of the data."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BPDM Gate"}),"\xa0It\xb4s an API that can be used to put data to the sharing\nprocess and to get the relevant data back from the process."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BPN Generator:"}),"\xa0This is another wording for the issuing agency."]}),"\n",(0,s.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the\nglossary on the association homepage."}),"\n",(0,s.jsx)(n.h2,{id:"2-issuing",children:"2. Issuing"}),"\n",(0,s.jsxs)(n.p,{children:["In Catena-X the BPN is the unique identifier for business partners\nand\xa0MUST\xa0be issued by a central component that has the license by\nthe\xa0",(0,s.jsx)(n.a,{href:"https://catena-x.net/",children:"Catena-X e.V."}),"\xa0to issue business partner\nnumbers."]}),"\n",(0,s.jsxs)(n.p,{children:["The issuing agency\xa0MUST\xa0create BPNs for legal entities (BPNL), sites\n(BPNS) and addresses (BPNA). And each BPN that will be created\xa0MUST\xa0be\nunique and\xa0MUST\xa0follow the logic of the\xa0",(0,s.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"business partner number\nstandard"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"A location\xa0MUST\xa0always have at least one address with a corresponding\nBPN. If this is not the case, no number will be created and data set\nwill be rejected by the BPDM Generator. Further additional\naddress\xa0MAY\xa0be added."}),"\n",(0,s.jsxs)(n.p,{children:["The prefix of the BPN\xa0MUST\xa0follow to\xa0",(0,s.jsx)(n.a,{href:"https://www.iso.org/standard/54779.html",children:"ISO/IEC\n15459"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The issuing agency\xa0SHOULD be able to receive data sets and to poll them\nback."}),"\n",(0,s.jsx)(n.h2,{id:"3-references",children:"3. References"}),"\n",(0,s.jsx)(n.h3,{id:"31-normative-references",children:"3.1 Normative References"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"CX - 0010 Business Partner Number (BPN)"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.iso.org/standard/54779.html",children:"ISO/IEC 15459"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 Non-Normative References"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/bpdm/blob/main/docs/arc42/architecture-documentation.adoc",children:"BPDM architecture\ndocumentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://catena-x.net/en/angebote/bpdm",children:"BPDM use case on Catena-X\nWebsite"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,s.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,s.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4372:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/CX-0011-process-data-sharing-1-6e49187c1d581878f32579b39baf2cd7.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);