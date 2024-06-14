"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[9670],{84802:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var a=r(74848),t=r(28453);const s={},i="CX-0100 Triangle for Secondary Marketplace v1.0.0",d={id:"standards/CX-0100-TriangleForSecondaryMarketplace/CX-0100-TriangleForSecondaryMarketplace",title:"CX-0100 Triangle for Secondary Marketplace v1.0.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0100-TriangleForSecondaryMarketplace/CX-0100-TriangleForSecondaryMarketplace.md",sourceDirName:"standards/CX-0100-TriangleForSecondaryMarketplace",slug:"/standards/CX-0100-TriangleForSecondaryMarketplace/",permalink:"/docs/standards/CX-0100-TriangleForSecondaryMarketplace/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0099 Data Model: Certificate of Decommissioning v1.0.0",permalink:"/docs/standards/CX-0099-DataModelCertificateofDecommissioning/"},next:{title:"CX-0102 Functional Mock Up v.1.0.0",permalink:"/docs/standards/CX-0102-Functional-Mock-Up/"}},l={},o=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 ARCHITECTURE OVERVIEW",id:"13-architecture-overview",level:3},{value:"1.4 CONFORMANCE",id:"14-conformance",level:3},{value:"1.5 PROOF OF CONFORMITY",id:"15-proof-of-conformity",level:3},{value:"1.6 EXAMPLES",id:"16-examples",level:3},{value:"1.7 TERMINOLOGY",id:"17-terminology",level:3},{value:"2. STANDARDS FOR &quot;TRIANGLE FOR MARKETPLACE&quot;",id:"2-standards-for-triangle-for-marketplace",level:2},{value:"2.1 LIST OF STANDALONE STANDARDS",id:"21-list-of-standalone-standards",level:3},{value:"2.2 ADDITIONAL REQUIREMENTS",id:"22-additional-requirements",level:3},{value:"2.2.1 EDC Policy Structure",id:"221-edc-policy-structure",level:4},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"cx-0100-triangle-for-secondary-marketplace-v100",children:"CX-0100 Triangle for Secondary Marketplace v1.0.0"}),"\n",(0,a.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,a.jsx)(n.p,{children:"This standard focuses on the Secondary Marketplace use case. This includes relevant requirements for"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"data provider, that want to provide relevant data for a Marketplace Offer through Catena-X,"}),"\n",(0,a.jsx)(n.li,{children:"data consumer, that are searching for detailed product informations in Catena-X and"}),"\n",(0,a.jsx)(n.li,{children:"Application developer/provider supporting the consuming data for detialed infromations of product\r\nin the markertplace of battery passports."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In the first version the Marketplace just consume data for offered Batteries.\r\nTherefore the application use the BatteryPassport data model."}),"\n",(0,a.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,a.jsxs)(n.p,{children:["This document defines the so-called ",(0,a.jsx)(n.em,{children:"standardization triangle"})," for the Secondary Marketplace use case.\r\nStandardization triangle hereby means the mandatory components, data models, APIs etc. that are\r\nrequired to enable the Marketplace use case. Additionally, search objects as well as procedures to\r\nregistering/providing and consuming the data will be defined."]}),"\n",(0,a.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,a.jsx)(n.p,{children:"This document is meant for the following roles:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,a.jsx)(n.li,{children:"Business Application Provider"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,a.jsxs)(n.p,{children:["For release 3.2, the secondary marketplace will be displaying additional information on the products,\r\nspecifically batteries. In order to offer additional information about the battery to potential buyers,\r\nthe marketplace uses the BatteryPass sub-model. This allows buyers to access real data\r\n(detailed content see ",(0,a.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-00034"}),")"]}),"\n",(0,a.jsx)(n.h3,{id:"13-architecture-overview",children:"1.3 ARCHITECTURE OVERVIEW"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Eclipse Data Space Connector (EDC) or equivalent components in compliance with the standard ",(0,a.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-0018"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Usage of the Discovery Finder to find relevant BPN Discovery Endpoint(s) following the Catena-X Standard ",(0,a.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-0002"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Usage of the BPN Discovery Services to find relevant BPN-L(s) following the Catena-X Standard ",(0,a.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-0002"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["To find relevant EDC Endpoints the BPN Discovery Service is used following the CX-Standard ",(0,a.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-0001"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Usage of dencentralized digital twin registry to provide twins of products following the the CX-Standard ",(0,a.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-0002"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["To find relevant EDC Endpoints the BPN Discovery Service is used following the CX-Standard ",(0,a.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-0001"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["connections to components for authenticate as a data provider or consumer following the onboarding\r\nStandard ",(0,a.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-0006"})," and the ",(0,a.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"identity and access management standards"})," (",(0,a.jsx)(n.strong,{children:"CX-0013-0017"}),")"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"14-conformance",children:"1.4 CONFORMANCE"}),"\n",(0,a.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes\r\nin this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,a.jsxs)(n.p,{children:["The key words ",(0,a.jsx)(n.strong,{children:"MAY"}),", ",(0,a.jsx)(n.strong,{children:"MUST"}),", ",(0,a.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,a.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,a.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,a.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,a.jsx)(n.strong,{children:"SHOULD"}),"\r\nand ",(0,a.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]\r\nwhen, and only when, they appear in all capitals, as shown here."]}),"\n",(0,a.jsx)(n.h3,{id:"15-proof-of-conformity",children:"1.5 PROOF OF CONFORMITY"}),"\n",(0,a.jsx)(n.p,{children:"All participants and their solutions will need to prove, that they are conform with the Catena-X standards.\r\nTo validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,a.jsx)(n.p,{children:"To prove conformity with the use case marketplace standard standard as a data consumer or app provider\r\ndemonstrate that you"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"can find battery twins"}),"\n",(0,a.jsx)(n.li,{children:"can distinguish the battery passport information from other submodels"}),"\n",(0,a.jsx)(n.li,{children:"can visualize battery passports."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To prove conformity with the use case Marketplace standard as ",(0,a.jsx)(n.strong,{children:"data provider"})," you MUST show that\r\nyou follow the standards listed under ",(0,a.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"2.1 List of Standalone Standards"})]}),"\n",(0,a.jsxs)(n.p,{children:["To prove conformity with the use case Marketplace standard as ",(0,a.jsx)(n.strong,{children:"app provider"})," you MUST show that\r\nyou follow the standards listed under ",(0,a.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"2.1 List of Standalone Standards"})]}),"\n",(0,a.jsx)(n.h3,{id:"16-examples",children:"1.6 EXAMPLES"}),"\n",(0,a.jsx)(n.p,{children:"No Example provided."}),"\n",(0,a.jsx)(n.h3,{id:"17-terminology",children:"1.7 TERMINOLOGY"}),"\n",(0,a.jsx)(n.p,{children:"The following terms are especially relevant for the understanding of the standard:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Asset Administration Shell (AAS): The AAS is chosen standard in Catena-X to define Digital Twins\r\nof an asset (e.g. a battery or a full vehicle)."}),"\n",(0,a.jsx)(n.li,{children:"Business Partner Number (BPN): A BPN is the unique identifier of a partner within Catena-x."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the glossary on the association homepage."}),"\n",(0,a.jsx)(n.h2,{id:"2-standards-for-triangle-for-marketplace",children:'2. STANDARDS FOR "TRIANGLE FOR MARKETPLACE"'}),"\n",(0,a.jsx)(n.h3,{id:"21-list-of-standalone-standards",children:"2.1 LIST OF STANDALONE STANDARDS"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"NOTE"}),'\r\nNot all standard documents are allready published. The links must be inserted by the association\r\nonce the standards have been published! These Links are marked with "',(0,a.jsx)(n.strong,{children:"NeedtobeaddedbyAccociation"}),'".']}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"To participate in the  use-case, the following single standards MUST be fulfilled by all\r\nparticipants for which the standard is relevant:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0001-EDCDiscoveryAPI"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0002-DigitalTwininsInCX"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0003-SAMMSemanticAspectMetaModel"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0006-RegistrationAndInitialOnBoarding"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0013 Identity of Member Companies"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0014 Employees and Technical Users"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0015 IAM & Access Control Paradigm"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0016 Company Attribute Verification"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0017 Company Role by the Connector"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0018-SovereignDataExchange"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0034-DataModelBatteryPass"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0049-DID Document Schema"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0050-Framework Agreement Credential"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0051-Summary Credential"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"22-additional-requirements",children:"2.2 ADDITIONAL REQUIREMENTS"}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0096"})," for the Discovery process and EDC policy\r\nusage for Battery Passes."]}),"\n",(0,a.jsx)(n.h4,{id:"221-edc-policy-structure",children:"2.2.1 EDC Policy Structure"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"NOTE"}),'\r\nNot all framework agreements are allready published. The links must be inserted by the association\r\nonce the agreements have been published! These Links are marked with "',(0,a.jsx)(n.strong,{children:"Linkmustbeaddedmyassociation"}),'".']}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["A paticipant mantioned under ",(0,a.jsx)(n.a,{href:"#11-audience--scope",children:"1.1"})," MUST sign the overall\r\n",(0,a.jsx)(n.a,{href:"https://catena-x.net/de/catena-x-einfuehren-umsetzen/governance-framework-fuer-datenraum-betrieb",children:"Catena-X Terms and Condition"}),"\r\nas well as the sustainability agreement ",(0,a.jsx)(n.a,{href:"https://catena-x.net/de/catena-x-einfuehren-umsetzen/governance-framework-fuer-datenraum-betrieb",children:"framework agreements"}),".\r\nThis follows the first SSI setup following the ",(0,a.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"IAM Standards CX-0049-0051"}),"\r\nin CX covering the new SSI infrastructure, which will released with R 3.2. Have a look at example polcies\r\n",(0,a.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/ssi-docu/blob/main/docs/architecture/cx-3-2/edc/policy.definitions.md",children:"here"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"At least the policy shown below MUST be added to a asset:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'\r\n{\r\n  "@context": [\r\n    "https://www.w3.org/ns/odrl.jsonld",\r\n    {\r\n      "cx": "https://w3id.org/catenax/v0.0.1/ns/"\r\n    }\r\n  ],\r\n  "@type": "Offer",\r\n  "@id": "a343fcbf-99fc-4ce8-8e9b-148c97605aab",\r\n  "permission": [\r\n    {\r\n      "action": "use",\r\n      "constraint": {\r\n        "and": [\r\n          {\r\n            "leftOperand": "Membership",\r\n            "operator": "eq",\r\n            "rightOperand": "active"\r\n          },\r\n          {\r\n            "leftOperand": "FrameworkAgreement.sustainability",\r\n            "operator": "eq",\r\n            "rightOperand": "active"\r\n          }\r\n        ]\r\n      }\r\n    }\r\n  ]\r\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,a.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,a.jsxs)(n.p,{children:["see ",(0,a.jsx)(n.a,{href:"#2-standards-for-triangle-for-marketplace",children:"2.1"})]}),"\n",(0,a.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,a.jsx)(n.p,{children:"No further references."}),"\n",(0,a.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,a.jsx)(n.p,{children:"No reference implementation at the moment."}),"\n",(0,a.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,a.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,a.jsx)(n.h3,{id:"tables",children:"TABLES"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var a=r(96540);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);