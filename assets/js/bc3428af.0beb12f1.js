"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[13140],{61502:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"standards/CX-0051-SummaryCredential/CX-0051-SummaryCredential","title":"CX-0051 Summary Credential v1.0.0","description":"ABSTRACT","source":"@site/versioned_docs/version-24.03/standards/CX-0051-SummaryCredential/CX-0051-SummaryCredential.md","sourceDirName":"standards/CX-0051-SummaryCredential","slug":"/standards/CX-0051-SummaryCredential/","permalink":"/docs/24.03/standards/CX-0051-SummaryCredential/","draft":false,"unlisted":false,"tags":[],"version":"24.03","frontMatter":{},"sidebar":"sidebar_standards","previous":{"title":"CX - 0050 Framework Agreement Credential v1.0.0","permalink":"/docs/24.03/standards/CX-0050-FrameworkAgreementCredential/"},"next":{"title":"CX - 0052 Aspect Model \\"ManufacturingCapability\\" v1.0.0","permalink":"/docs/24.03/standards/CX-0052-AspectModelManufacturingCapability/"}}');var t=i(74848),a=i(28453);const s={},l="CX-0051 Summary Credential v1.0.0",d={},c=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 ARCHITECTURE OVERVIEW",id:"13-architecture-overview",level:3},{value:"1.4 CONFORMANCE",id:"14-conformance",level:3},{value:"1.5 PROOF OF CONFORMITY",id:"15-proof-of-conformity",level:3},{value:"1.6 EXAMPLES",id:"16-examples",level:3},{value:"1.7 TERMINOLOGY",id:"17-terminology",level:3},{value:"2. Summary Credential",id:"2-summary-credential",level:2},{value:"2.1 Summary Credential Content",id:"21-summary-credential-content",level:3},{value:"2.2 Summary Credential Structure",id:"22-summary-credential-structure",level:3},{value:"2.3 Summary Credential Field Details",id:"23-summary-credential-field-details",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cx-0051-summary-credential-v100",children:"CX-0051 Summary Credential v1.0.0"})}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"The Summary Credential is a Verifiable Credential collecting multiple attributes of a participant. The following represents the technical documentation for the Summary Credential in the Platform Capability Identity and Access Management. This standard documentation defines the structure of the Summary Credential."}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"List for which roles the standard is relevant. Possible options, please delete the roles for which the standard isn\u2019t relevant."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Core Service Provider"}),"\n",(0,t.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,t.jsx)(n.li,{children:"Onboarding Service Provider"}),"\n",(0,t.jsx)(n.li,{children:"Consulting Services Provider"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This document focuses on the schema of the Summary Credential based on the W3C Standard for Verifiable Credentials [W3C Verifiable Credential Data Model v1.1] (",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/vc-data-model/",children:"https://www.w3.org/TR/vc-data-model/"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"This document is relevant for core service providers who maintain the issuance of verifiable  credentials for specific company attributes."}),"\n",(0,t.jsx)(n.p,{children:"It is also relevant for onboarding service providers as they need to be able to issue verifiable credentials of specific attributes describing the onboarded participant."}),"\n",(0,t.jsx)(n.p,{children:"For Data Provider it is relevant due to the fact that data provision and consumption can have an access control that is based on the roles as attribute of the consuming participant. On the other hand a Data Consumer must be able to validate the identity and role of the providing  participant."}),"\n",(0,t.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The Summary Credential is issued by the Onboarding Service Provider to the Wallet of the participant and is exchanged by the connectors as a Verifiable Presentation in the course of data exchange. As the mentioned attributes include also use case specific roles, it is used to manage access to the requested data."}),"\n",(0,t.jsx)(n.p,{children:"According to the roles a participant has in a specific data exchange scenario, different data sets are accessible for this participant as a Data Consumer. For a Data Provider the knowledge of the use case specific -or data exchange scenario specific- roles a Data Consumer has is a key feature for managing access to specific data. Based on the role of the Data Consumer the Data Provider is able to grant or deny access to the requested data. As the data exchange is done using the connector this access management is part the policies interpreted by the connector."}),"\n",(0,t.jsx)(n.h3,{id:"13-architecture-overview",children:"1.3 ARCHITECTURE OVERVIEW"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"This section is not applicable for this standards in this version.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"14-conformance",children:"1.4 CONFORMANCE"}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes\r\nin this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words ",(0,t.jsx)(n.strong,{children:"MAY"}),", ",(0,t.jsx)(n.strong,{children:"MUST"}),", ",(0,t.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,t.jsx)(n.strong,{children:"REQUIRED"}),",  ",(0,t.jsx)(n.strong,{children:"SHOULD"})," and ",(0,t.jsx)(n.strong,{children:"SHOULD NOT"})," in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"15-proof-of-conformity",children:"1.5 PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,t.jsxs)(n.p,{children:["All Core Service Providers providing the issuance of a Summary Credential must ensure that this credential follows the structure described in section ",(0,t.jsx)(n.a,{href:"#22-summary-credential-structure",children:"2.2 SUMMARY CREDENTIAL STRUCTURE"})," and contain the appropriate fields (described in section ",(0,t.jsx)(n.a,{href:"#23-summary-credential-field-details",children:"2.3 SUMMARY CREDENTIAL FIELD DETAILS"})," of this document) for the participant the Summary Credential is issued for."]}),"\n",(0,t.jsx)(n.p,{children:"To validate these criteria of conformance to the Summary Credential please collect the following cocuments:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Arch42 Documentation explaining the architecture, process flows and data structures of the implementation."}),"\n",(0,t.jsx)(n.li,{children:"The validation / control process of the  participant roles."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Hand this documentation to the conformity assessment body"}),"\n",(0,t.jsx)(n.h3,{id:"16-examples",children:"1.6 EXAMPLES"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"This section is not applicable for this standards in this version.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"17-terminology",children:"1.7 TERMINOLOGY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the glossary on the association homepage."}),"\n",(0,t.jsx)(n.h2,{id:"2-summary-credential",children:"2. Summary Credential"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"21-summary-credential-content",children:"2.1 Summary Credential Content"}),"\n",(0,t.jsxs)(n.p,{children:["The Summary Credential is a single credential including several attributes of the described participant. It is used as a certificate of the existence of verifiable credentials for the included attributes.\r\nThe attributes that can be listed in the summary credentials ",(0,t.jsx)(n.strong,{children:"if applicable to the participant"})," are the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"MembershipCredential",'}),"\n",(0,t.jsx)(n.li,{children:'"DismantlerCredential",'}),"\n",(0,t.jsx)(n.li,{children:'"PcfCredential",'}),"\n",(0,t.jsx)(n.li,{children:'"SustainabilityCredential",'}),"\n",(0,t.jsx)(n.li,{children:'"QualityCredential",'}),"\n",(0,t.jsx)(n.li,{children:'"TraceabilityCredential",'}),"\n",(0,t.jsx)(n.li,{children:'"BehaviorTwinCredential",'}),"\n",(0,t.jsx)(n.li,{children:'"BpnCredential"'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"22-summary-credential-structure",children:"2.2 Summary Credential Structure"}),"\n",(0,t.jsx)(n.p,{children:"The structure of the summary credential is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:' {\r\n  "@context": [\r\n    "https://w3id.org/2023/catenax/credentials/summary/v1"\r\n  ],\r\n  "id": "<credential uid>",\r\n  "type": [\r\n    "VerifiableCredential",\r\n    "SummaryCredential"\r\n  ],\r\n  "issuer": "<did:web:issuer>",\r\n  "issuanceDate": "2023-06-02T12:00:00Z",\r\n  "expirationDate": "2022-06-16T18:56:59Z",\r\n  "credentialSubject": {\r\n    "id": "<did:web:subject>",\r\n    "holderIdentifier": "<BPN>",\r\n    "items": [\r\n      "MembershipCredential",\r\n      "DismantlerCredential",\r\n      "PcfCredential",\r\n      "SustainabilityCredential",\r\n      "QualityCredential",\r\n      "TraceabilityCredential",\r\n      "BehaviorTwinCredential",\r\n      "BpnCredential"\r\n    ],\r\n    "contractTemplates": "https://public.catena-x.org/contracts/"\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"23-summary-credential-field-details",children:"2.3 Summary Credential Field Details"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"id": The unique identifier of the credential.'}),"\n",(0,t.jsx)(n.li,{children:'"type": The type of the Verifiable Credential. In this case "VerifiableCredential", "SummaryCredential"'}),"\n",(0,t.jsx)(n.li,{children:'"issuer": The did of the issuer of this credential. In this case the core service provider or the onboarding service provider'}),"\n",(0,t.jsx)(n.li,{children:'"issuanceDate": Date of issuance'}),"\n",(0,t.jsx)(n.li,{children:'"expirationDate": Date of expiration'}),"\n",(0,t.jsxs)(n.li,{children:['"credentialSubject": Data about the participant the credential is issued for',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"id": The did of the participant'}),"\n",(0,t.jsx)(n.li,{children:'"holderIdentifier": The Busines Partner Number of the participant'}),"\n",(0,t.jsxs)(n.li,{children:['"items": The list of available Verifiable Credentials for the participant. This can be from the follwing list:',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"MembershipCredential",'}),"\n",(0,t.jsx)(n.li,{children:'"DismantlerCredential",'}),"\n",(0,t.jsx)(n.li,{children:'"PcfCredential",'}),"\n",(0,t.jsxs)(n.li,{children:['"SustainabilityCredential",',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"QualityCredential",'}),"\n",(0,t.jsx)(n.li,{children:'"TraceabilityCredential",'}),"\n",(0,t.jsx)(n.li,{children:'"BehaviorTwinCredential",'}),"\n",(0,t.jsx)(n.li,{children:'"BpnCredential"'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:'"contractTemplates": The ULR of the location of the Framework Agreements described in CX-0020 and mentioned in the credentialSubject'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"This section is not applicable for this standard in this version.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"This section is not applicable for this standard in this version.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"This section is not applicable for this standard in this version.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,t.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"This section is not applicable for this standard in this version.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"This section is not applicable for this standard in this version.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var r=i(96540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);