"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[8652],{89411:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(74848),r=i(28453);const s={tags:["CAT/Enablement Service Provider","CAT/SSI","CAT/Core Service Provider","CAT/Identity Wallet","CAT/Sandbox Services (Beta)"]},a="CX-0013 Identity of Member Company v2.0.0",o={id:"standards/CX-0013-IdentityOfMemberCompanies/CX-0013-IdentityofMemberCompanies",title:"CX-0013 Identity of Member Company v2.0.0",description:"ABSTRACT",source:"@site/docs/standards/CX-0013-IdentityOfMemberCompanies/CX-0013-IdentityofMemberCompanies.md",sourceDirName:"standards/CX-0013-IdentityOfMemberCompanies",slug:"/standards/CX-0013-IdentityOfMemberCompanies/",permalink:"/docs/next/standards/CX-0013-IdentityOfMemberCompanies/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"CAT/Enablement Service Provider",permalink:"/docs/next/tags/cat-enablement-service-provider"},{inline:!0,label:"CAT/SSI",permalink:"/docs/next/tags/cat-ssi"},{inline:!0,label:"CAT/Core Service Provider",permalink:"/docs/next/tags/cat-core-service-provider"},{inline:!0,label:"CAT/Identity Wallet",permalink:"/docs/next/tags/cat-identity-wallet"},{inline:!0,label:"CAT/Sandbox Services (Beta)",permalink:"/docs/next/tags/cat-sandbox-services-beta"}],version:"current",frontMatter:{tags:["CAT/Enablement Service Provider","CAT/SSI","CAT/Core Service Provider","CAT/Identity Wallet","CAT/Sandbox Services (Beta)"]},sidebar:"sidebar_standards",previous:{title:"CX-0012 Business Partner Data Pool API v4.0.0",permalink:"/docs/next/standards/CX-0012-BusinessPartnerDataPoolAPI/"},next:{title:"CX-0014 Employees and Technical Users v1.0.1",permalink:"/docs/next/standards/CX-0014-EmployeesAndTechnicalUsers/"}},d={},c=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"AUDIENCE",id:"audience",level:4},{value:"SCOPE",id:"scope",level:4},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 ARCHITECTURE OVERVIEW",id:"13-architecture-overview",level:3},{value:"1.4 CONFORMANCE",id:"14-conformance",level:3},{value:"1.5 PROOF OF CONFORMITY",id:"15-proof-of-conformity",level:3},{value:"1.6 EXAMPLES",id:"16-examples",level:3},{value:"1.7 TERMINOLOGY",id:"17-terminology",level:3},{value:"2. DECENTRALIZED IDENTIFIER",id:"2-decentralized-identifier",level:2},{value:"2.2 WALLET SERVICE",id:"22-wallet-service",level:3},{value:"2.3 DID METHOD",id:"23-did-method",level:3},{value:"2.3 REGISTRATION PROCESS",id:"23-registration-process",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cx-0013-identity-of-member-company-v200",children:"CX-0013 Identity of Member Company v2.0.0"}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"Identity and Access management (IAM) enables any non-anonymous interactions, meaning independent identification and description of the actors in a verifiable and reliable way. The identification of assets\r\nor digital twins is not in the scope of IAM.\r\nA company in the context of IAM is a digital identity matched to a respective participant of Catena-X.\r\nThe digital identities of employees and technical users are always tied to the company for which he or she\r\nacts.\r\nThis standard documentation defines the technical foundation and the structure used for the identity of the company participating in Catena-X."}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"Identity and Access Management (IAM) is a mandatory basic infrastructure for every IT-System. The identity of any entity and actor (company, user, or technical client/connector) is the summary of the describing attributes (e.g., Company Name, Address, Tax Number, etc.). Catena-X is intended to be a network-of-networks which consequently means that there cannot be a single Identity Provider (IdP) for the company identities nested in one network. The company must be identifiable in an independent way and interoperable in all networks. The identity of users (employees of a company) and technical users (e.g., the Connector) in Catena-X, must be bound to the company they are acting on behalf of."}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsx)(n.h4,{id:"audience",children:"AUDIENCE"}),"\n",(0,t.jsx)(n.p,{children:"The purpose of this standardization request is to unify the Digital Company Identity.\r\nThis document is relevant for the following roles, as the must be certified against it:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Core Service Providers as they offer the registration to the Catena-X network"}),"\n",(0,t.jsx)(n.li,{children:"Enablement Service Providers which offer Wallet Services to the Core Service Providers"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"scope",children:"SCOPE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative."})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This document covers the requirements for the participant's identity and the according technical solution to that, in this case the identity Wallet. It describes the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The basic definition of the usage of Decentralized Identifiers"}),"\n",(0,t.jsx)(n.li,{children:"The fundamentals of a Wallet service"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative."})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The purpose of this standardization request is to unify the Digital Company Identity in a self-sovereign manner. The digital identity of a participant is the basis of any interaction with other partners. To ensure independence and data sovereignty from one identity provider this identity - as the summary of the describing attributes - must be under the sovereignty of the respective partner company."}),"\n",(0,t.jsx)(n.p,{children:"Self-Sovereign identity (SSI) is a concept that gives individuals and organizations control over their own digital identity and the information required for identity verification, through principles such as user control, transparency, access to data, and transportability. SSI is implemented using open standards like Decentralized Identifiers (DIDs), Decentralized Public Key Infrastructure (DPKI), and Verifiable Credentials."}),"\n",(0,t.jsx)(n.p,{children:"This approach serves and ensure interoperability as well as data sovereignty."}),"\n",(0,t.jsx)(n.h3,{id:"13-architecture-overview",children:"1.3 ARCHITECTURE OVERVIEW"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative."})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Not applicable."}),"\n",(0,t.jsx)(n.h3,{id:"14-conformance",children:"1.4 CONFORMANCE"}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes\r\nin this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words ",(0,t.jsx)(n.strong,{children:"MAY"}),", ",(0,t.jsx)(n.strong,{children:"MUST"}),", ",(0,t.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,t.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(n.strong,{children:"SHOULD"}),"\r\nand ",(0,t.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]\r\nwhen, and only when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"15-proof-of-conformity",children:"1.5 PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative."})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Core Service Provider"})}),"\n",(0,t.jsxs)(n.p,{children:["All Core Service Providers ",(0,t.jsx)(n.strong,{children:"MUST"})," ensure, that the created DID document for the participant follow the ",(0,t.jsx)(n.code,{children:"did:web"})," standard described here ",(0,t.jsx)(n.a,{href:"https://w3c-ccg.github.io/did-method-web/",children:"https://w3c-ccg.github.io/did-method-web/"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To validate these criteria of conformance to the Use Case Framework Agreements please collect the following documents:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Arch42 Documentation explaining the architecture, process flows and data structures of the implementation."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Hand this documentation to the conformity assessment body"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Enablement Service Provider"})}),"\n",(0,t.jsxs)(n.p,{children:["All Core Service Providers ",(0,t.jsx)(n.strong,{children:"MUST"})," ensure, that the Wallet service they offer create DID documents for the participants following the ",(0,t.jsx)(n.code,{children:"did:web"})," standard described here ",(0,t.jsx)(n.a,{href:"https://w3c-ccg.github.io/did-method-web/",children:"https://w3c-ccg.github.io/did-method-web/"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To validate these criteria of conformance to the Use Case Framework Agreements please collect the following documents:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Arch42 Documentation explaining the architecture, process flows and data structures of the implementation."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Hand this documentation to the conformity assessment body"}),"\n",(0,t.jsx)(n.h3,{id:"16-examples",children:"1.6 EXAMPLES"}),"\n",(0,t.jsx)(n.p,{children:"Not applicable."}),"\n",(0,t.jsx)(n.h3,{id:"17-terminology",children:"1.7 TERMINOLOGY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative."})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Not applicable."}),"\n",(0,t.jsx)(n.h2,{id:"2-decentralized-identifier",children:"2. DECENTRALIZED IDENTIFIER"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative."})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Decentralized Identifier as a technological approach to form a Self-Sovereign Identity is based on cryptographic technologies which provide the ability to exchange identity information in a secure way.",(0,t.jsx)(n.br,{}),"\n","Based on open standards of the W3C ",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/",children:"https://www.w3.org/TR/did-core/"})," a DID also ensures interoperability while also ensuring data sovereignty according to the identity data of the participant."]}),"\n",(0,t.jsx)(n.p,{children:"To manage a DID a Wallet is used."}),"\n",(0,t.jsx)(n.h3,{id:"22-wallet-service",children:"2.2 WALLET SERVICE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"SSI will be an integral part of Catena-X. This requires a wallet for each participant to store his private keys to issue verifiable credentials and to receive Verifiable Credentials issued for him. Therefore, in the course of registration, each participant must be equipped with an instance of the Wallet to store credentials."}),"\n",(0,t.jsxs)(n.p,{children:["To ensure the processes needed for data exchange the Wallet service provides the following core functionalities described in ",(0,t.jsx)(n.code,{children:"CX-0149 VERIFIED COMPANY IDENTITY v1.1.0"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"23-did-method",children:"2.3 DID METHOD"}),"\n",(0,t.jsxs)(n.p,{children:["The DID method describes the implementation of a DID network, which includes the type of the anchoring of the DIDs and the Verifiable Data Registry.\r\nIt is used for resolution of the DID with the goal to receive the DID Document, described in ",(0,t.jsx)(n.code,{children:"CX-0049"}),' v2.0.0, done with a resolver. A reference implementation of a DID resolver being able to resolve multiple DID methods is the "universal resolver" which  can be found here\r\n',(0,t.jsx)(n.a,{href:"https://github.com/decentralized-identity/universal-resolver",children:"https://github.com/decentralized-identity/universal-resolver"})]}),"\n",(0,t.jsxs)(n.p,{children:["The DIDs for the participants, created by the Core Service Provider at the moment of registration and managed by the Wallet service, are based in the DID method ",(0,t.jsx)(n.code,{children:"did:web"}),", specified here:\r\n",(0,t.jsx)(n.a,{href:"https://w3c-ccg.github.io/did-method-web/",children:"https://w3c-ccg.github.io/did-method-web/"})]}),"\n",(0,t.jsx)(n.h3,{id:"23-registration-process",children:"2.3 REGISTRATION PROCESS"}),"\n",(0,t.jsx)(n.p,{children:"To ensure that every participant of Catena-X has a valid DID, a new participating company will be provided a tenant in the Wallet service at the moment of registration to become an official Catena-X partner."}),"\n",(0,t.jsx)(n.p,{children:"The required company information for the registration process needs to be provided by the participant and validated by the Core Service Provider.\r\nAfter successful registration, the Catena-X specific Business Partner Number (BPN) VC and Catena-X specific Membership VC will be issued to the Wallet tenant of the participant."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"The registration process is described in detail in CX-0149:1.0 DATA SPACE IDENTITY AND IDENTIFICATION following the definition of the Identity and Trust Protocol (IATP) .\n"})}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative."})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CX-0049:2.0 DID Document Schema"}),"\n",(0,t.jsx)(n.li,{children:"CX-0149:1.0 Verfified Company Identity"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative."})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative."})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Not applicable."}),"\n",(0,t.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,t.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative."})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Not applicable."}),"\n",(0,t.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Not applicable."}),"\n",(0,t.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);