"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[8010],{93894:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"standards/CX-0050-FrameworkAgreementCredential/CX-0050-FrameworkAgreementCredential","title":"CX-0050 Framework Agreement Credential v.2.1.0","description":"REVISIONS & UPDATE","source":"@site/docs/standards/CX-0050-FrameworkAgreementCredential/CX-0050-FrameworkAgreementCredential.md","sourceDirName":"standards/CX-0050-FrameworkAgreementCredential","slug":"/standards/CX-0050-FrameworkAgreementCredential/","permalink":"/docs/next/standards/CX-0050-FrameworkAgreementCredential/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"CAT/Enablement Service Provider","permalink":"/docs/next/tags/cat-enablement-service-provider"},{"inline":true,"label":"CAT/SSI","permalink":"/docs/next/tags/cat-ssi"},{"inline":true,"label":"CAT/Core Service Provider","permalink":"/docs/next/tags/cat-core-service-provider"},{"inline":true,"label":"CAT/Identity Wallet","permalink":"/docs/next/tags/cat-identity-wallet"},{"inline":true,"label":"CAT/Sandbox Services (Beta)","permalink":"/docs/next/tags/cat-sandbox-services-beta"}],"version":"current","frontMatter":{"tags":["CAT/Enablement Service Provider","CAT/SSI","CAT/Core Service Provider","CAT/Identity Wallet","CAT/Sandbox Services (Beta)"]},"sidebar":"sidebar_standards","previous":{"title":"CX-0049 DID Document v2.0.0","permalink":"/docs/next/standards/CX-0049-DIDDocumentSchema/"},"next":{"title":"CX-0053 Discovery Finder and BPN Discovery Service APIs v1.1.1","permalink":"/docs/next/standards/CX-0053-BPNDiscoveryServiceAPIs/"}}');var t=r(74848),a=r(28453);const s={tags:["CAT/Enablement Service Provider","CAT/SSI","CAT/Core Service Provider","CAT/Identity Wallet","CAT/Sandbox Services (Beta)"]},o="CX-0050 Framework Agreement Credential v.2.1.0",d={},c=[{value:"REVISIONS &amp; UPDATE",id:"revisions--update",level:2},{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"AUDIENCE",id:"audience",level:4},{value:"SCOPE",id:"scope",level:4},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2. FRAMEWORK AGREEMENT CREDENTIAL",id:"2-framework-agreement-credential",level:2},{value:"2.1 Framework Agreement Credential Definition",id:"21-framework-agreement-credential-definition",level:3},{value:"2.2 Framework Agreement Credential Data Exchange Governance",id:"22-framework-agreement-credential-data-exchange-governance",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cx-0050-framework-agreement-credential-v210",children:"CX-0050 Framework Agreement Credential v.2.1.0"})}),"\n",(0,t.jsx)(n.h2,{id:"revisions--update",children:"REVISIONS & UPDATE"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Re-definition of the Framework Agreement structure"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:'The Framework Agreement Credential is a Verifiable Credential which confirms that a participant has agreed to the Use Case Framework document (short "Framework"). The following chapters specify the technical documentation and the structure of the Framework Agreement Credential.'}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:'The data exchange between two participants needs to be legally agreed between them. This is done based on the "Framework" which defines the basic rules for data consumption, storage, transfer and re-usage. Using Decentralized Identifiers for a Self-Sovereign Identity, Verifiable Credentials are used to confirm a participant that he has accepted the "Framework".'}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsx)(n.h4,{id:"audience",children:"AUDIENCE"}),"\n",(0,t.jsx)(n.p,{children:"The standard is relevant for the following roles:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Core Service Provider as this is the entity being able to issue Framework Agreement Credentials"}),"\n",(0,t.jsx)(n.li,{children:'Data Provider / Data Consumer as they exchange these Framework Agreement Credential to prove consent to the "Framework"'}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"scope",children:"SCOPE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This document covers the specification of the Framework Agreement Credential. It describes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the structure of the framework agreement credential"}),"\n",(0,t.jsx)(n.li,{children:"the content of the framework agreement credential"}),"\n",(0,t.jsx)(n.li,{children:"the field details of the framework agreement credential"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["What is ",(0,t.jsx)(n.strong,{children:"not"}),' in scope is the description or the definition of the "Framework" itself.']}),"\n",(0,t.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'The Framework Agreement Credential is issued by the Core Service Provider to the wallet of the participant and is exchanged by the dataspace client in the course of data exchange. It is an attribute of a participant 1 which presents to another participant 2 that the "Framework" is accepted by participant 1.'}),"\n",(0,t.jsx)(n.p,{children:'The "Framework" document defines the conditions for data exchange. Having agreed to this "Framework" is proved by a verifiable credential issued to this participant. This is done by the Core Service Provider after an appropriate check of the approval of the participant to the "Framework". The exchange of this credential allows participants to validate each other that they have agreed to the conditions defined in the "Framework". The Data Provider can validate that the Data Consumer has agreed to the "Framework".'}),"\n",(0,t.jsx)(n.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words ",(0,t.jsx)(n.strong,{children:"MAY"}),", ",(0,t.jsx)(n.strong,{children:"MUST"}),", ",(0,t.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,t.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(n.strong,{children:"SHOULD"})," and ",(0,t.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Core Service Provider"})}),"\n",(0,t.jsxs)(n.p,{children:["All Core Service Providers providing the issuance of Framework Agreement Credentials ",(0,t.jsx)(n.strong,{children:"MUST"})," ensure that these credentials follow the structure described in section ",(0,t.jsx)(n.a,{href:"#22-framework-agreement-credential-data-exchange-governance",children:"2.2 Framework Agreement Credential Structure"})," and contain the data according to the linked verifiable credential in section ",(0,t.jsx)(n.a,{href:"#22-framework-agreement-credential-data-exchange-governance",children:"2.2 Framework Agreement Credential Data Exchange Governance"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["All Core Service Providers providing the issuance of Framework Agreement Credentials ",(0,t.jsx)(n.strong,{children:"MUST"}),' ensure that the "Framework" document have been agreed correctly by the participants.']}),"\n",(0,t.jsxs)(n.p,{children:['To validate these criteria of conformance to the "Framework" the following information ',(0,t.jsx)(n.strong,{children:"MUST"})," be handed to the Conformity Assessment Body by the Core Service Provider:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the validation / control process of the participants agreement,"}),"\n",(0,t.jsx)(n.li,{children:"a documentation (e.g. based on Arc42) explaining the architecture, process flows and data structures of the implementation."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,t.jsx)(n.p,{children:"Not applicable."}),"\n",(0,t.jsx)(n.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Not applicable."}),"\n",(0,t.jsx)(n.h2,{id:"2-framework-agreement-credential",children:"2. FRAMEWORK AGREEMENT CREDENTIAL"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"21-framework-agreement-credential-definition",children:"2.1 Framework Agreement Credential Definition"}),"\n",(0,t.jsxs)(n.p,{children:['The Framework Agreement Credential is a verifiable credential proving that the holder of the credential has agreed to the "Framework" document.',(0,t.jsx)(n.br,{}),"\n",'It contains the name of the "Framework", a link to "Framework" document and the version of the "Framework" document.']}),"\n",(0,t.jsx)(n.h3,{id:"22-framework-agreement-credential-data-exchange-governance",children:"2.2 Framework Agreement Credential Data Exchange Governance"}),"\n",(0,t.jsx)(n.p,{children:"The Framework Agreement Credential Data Exchange Governance is shown and explained in the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n    "id": "uuid",\r\n    "@context": [\r\n        "https://www.w3.org/2018/credentials/v1",\r\n        "https://w3id.org/catenax/credentials/v1.0.0"\r\n        ],\r\n    "type": ["VerifiableCredential", "DataExchangeGovernanceCredential"],\r\n    "issuanceDate": "{issuance date - format: 2024-10-16T00:00:00Z}",\r\n    "expirationDate": "{expiration date - format: 2025-10-15T00:00:00Z}",\r\n    "issuer": "{did issuer}",\r\n    "credentialSubject": {\r\n        "id": "{did holder}",\r\n        "holderIdentifier": "{bpn}",\r\n        "group": "UseCaseFramework",\r\n        "useCase": "DataExchangeGovernance",\r\n        "contractTemplate": "{URL OF AGREEMENT/CONTRACT TEMPLATE}",\r\n        "contractVersion": "{VERSION OF THE AGREEMENT TEMPLATE; format: x.x}"\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Explanation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"id"})," is the uuid of the newly created credential - the uuid is defined by the issuer component"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"context"}),' is fix defined for the current used schema - we should already consider that the schema might get updated in future. Ideally we are flexible to have this scenario that the old schema is set to "INACTIVE" and a new schema is used for new created credentials']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"type"})," is fix defined for this specific credential"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"issuanceDate"})," calculated on runtime"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expirationDate"})," calculated by the issuer component based on defined credential static data expiry date => always not > 12 month"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"issuer"})," holds the issuer did"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"credentialSubject"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"})," holds the customer/holder did"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"holderIdentifier"})," BPN number of the holder"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"group"}),' groupType - fix value "UseCaseFramework"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"useCase"})," the linked useCase - in this case Data Exchange Governance Framework agreement is valid for all Catena-X use cases"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"contractTemplate"})," contractTemplateDocument of the Framework"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"contractVersion"})," Framework version - important since you can hold the same credential for multiple versions"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Not applicable."}),"\n",(0,t.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Not applicable."}),"\n",(0,t.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,t.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Not applicable."}),"\n",(0,t.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Not applicable."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var i=r(96540);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);