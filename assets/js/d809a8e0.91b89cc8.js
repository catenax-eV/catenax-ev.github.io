"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[5198],{92646:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(74848),s=i(28453);const r={},a="CX-0013 Identity of Member Companies  v1.1.0",o={id:"standards/CX-0013-IdentityOfMemberCompanies/CX-0013-IdentityofMemberCompanies",title:"CX-0013 Identity of Member Companies  v1.1.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0013-IdentityOfMemberCompanies/CX-0013-IdentityofMemberCompanies.md",sourceDirName:"standards/CX-0013-IdentityOfMemberCompanies",slug:"/standards/CX-0013-IdentityOfMemberCompanies/",permalink:"/docs/standards/CX-0013-IdentityOfMemberCompanies/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0012 Business Partner Data Pool API v3.0.0",permalink:"/docs/standards/CX-0012-BusinessPartnerDataPoolAPI/"},next:{title:"CX-0014 Employees and Technical Users v1.0.1",permalink:"/docs/standards/CX-0014-EmployeesAndTechnicalUsers/"}},d={},l=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 ARCHITECTURE OVERVIEW",id:"13-architecture-overview",level:3},{value:"1.4 CONFORMANCE",id:"14-conformance",level:3},{value:"1.5 PROOF OF CONFORMITY",id:"15-proof-of-conformity",level:3},{value:"2. SELF SOVEREIGN IDENTITY",id:"2-self-sovereign-identity",level:2},{value:"2.1 MANAGED IDENTITY WALLET",id:"21-managed-identity-wallet",level:3},{value:"2.2 DID METHOD",id:"22-did-method",level:3},{value:"2.3 REGISTRATION PROCESS",id:"23-registration-process",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"Self Sovereign Identity",id:"self-sovereign-identity",level:3},{value:"Legal",id:"legal",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"cx-0013-identity-of-member-companies--v110",children:"CX-0013 Identity of Member Companies  v1.1.0"})}),"\n",(0,n.jsx)(t.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,n.jsx)(t.p,{children:"Identity and Access management (IAM) enables any non-anonymous interactions, meaning independent identification and description of the actors in a verifiable and reliable way. The identification of assets or digital twins is not in the scope of IAM. A company in the context of IAM is a digital identity matched to a respective participant of Catena-X. The digital identities of employees and technical users are always tied to the company for which he or she acts. This standard documentation defines the technical foundation and the structure used for the identity of the company participating in Catena-X ."}),"\n",(0,n.jsx)(t.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,n.jsx)(t.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"List for which roles the standard is relevant. Possible options, please delete the roles for which the standard isn\u2019t relevant."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Core Service Provider"}),"\n",(0,n.jsx)(t.li,{children:"Data Provider / Consumer"}),"\n",(0,n.jsx)(t.li,{children:"Onboarding Service Provider"}),"\n",(0,n.jsx)(t.li,{children:"Consulting Services Provider"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This document focuses on the handling and format of verifiable credential for unified verifiable attribute description of participant."}),"\n",(0,n.jsx)(t.p,{children:"This document is relevant for core service providers who maintain the issuance of verifiable credentials for specific company attributes."}),"\n",(0,n.jsx)(t.p,{children:"For Data Provider it is relevant in case they are providing data in the context of a use case for which a specific company attribute the a critiria for granting appropriate access rights to specific data."}),"\n",(0,n.jsx)(t.p,{children:"For the Data Consumer it is relevant to be able to present the according company attribute to be able to consume data based on the appropriate company attribute."}),"\n",(0,n.jsx)(t.p,{children:"For an Onboarding Service Provider this standard is relavant due to the fact, that verifiable credentials containing and approving specific company attributes need to be issued at the moment of onboarding."}),"\n",(0,n.jsx)(t.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Identity and Access Management (IAM) is a mandatory basic infrastructure for every IT-System. The identity of any entity and actor (company, user, or technical client/connector) is the summary of the describing attributes (e.g., Company Name, Address, Tax Number, etc.). Catena-X is intended to be a network-of-networks which consequently means that there cannot be a single Identity Provider (IdP) for the company identities nested in one network. The company must be identifiable in an independent way and interoperable in all networks. The identity of users (employees of a company) and technical users (e.g., EDC) in Catena-X, must be bound to the company they are acting on behalf of."}),"\n",(0,n.jsx)(t.p,{children:"The purpose of this standardization request is to unify the Digital Company Identity in a self-sovereign manner. The digital identity of a Catena-X partner is the basis of any interaction with other partners. To ensure independence and data sovereignty from one identity provider this identity - as the summary of the describing attributes - must be under the sovereignty of the respective partner company."}),"\n",(0,n.jsx)(t.h3,{id:"13-architecture-overview",children:"1.3 ARCHITECTURE OVERVIEW"}),"\n",(0,n.jsx)(t.p,{children:"Not applicable for this standard in this version"}),"\n",(0,n.jsx)(t.h3,{id:"14-conformance",children:"1.4 CONFORMANCE"}),"\n",(0,n.jsx)(t.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,n.jsxs)(t.p,{children:["The key words ",(0,n.jsx)(t.strong,{children:"MAY"}),", ",(0,n.jsx)(t.strong,{children:"MUST"}),", ",(0,n.jsx)(t.strong,{children:"MUST NOT"}),", ",(0,n.jsx)(t.strong,{children:"OPTIONAL"}),", ",(0,n.jsx)(t.strong,{children:"RECOMMENDED"}),", ",(0,n.jsx)(t.strong,{children:"REQUIRED"}),", ",(0,n.jsx)(t.strong,{children:"SHOULD"})," and ",(0,n.jsx)(t.strong,{children:"SHOULD NOT"})," in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,n.jsx)(t.h3,{id:"15-proof-of-conformity",children:"1.5 PROOF OF CONFORMITY"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["All participants MUST provide evidence of possessing an identity wallet for a DID based on the W3C Standard for Self Sovereign Identity (",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/did-core/",children:"Decentralized Identifier (DIDs) v1.0 (w3.org)"}),"). This is necessary to:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Receive verifiable credentials for the BPN issued by the agency described in the standard CX-0011 Issuing Agency."}),"\n",(0,n.jsx)(t.li,{children:"Receive verifiable credentials in verifiable presentations to proof attributes of other partners"}),"\n",(0,n.jsx)(t.li,{children:"Provide verifiable credentials in verifiable presentations to other partners, allowing proof of their own attributes."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"Disclaimer:\r\n\xa0\r\nIn future releases it will be possible for every participant to operate the identity wallet\r\neither by itself or by a 3rd party provider (Wallet Hosting Provider).\r\nAn appropriate migration process from the MIW to a self-hosted or 3rd party Wallet will be described.\n"})}),"\n",(0,n.jsxs)(t.p,{children:["A Core Service Provider MUST ensure that all dataspace participants are able to have an identity wallet.\r\nA Core Service Provider CAN provide such a wallet hosting service to the participant. The wallet software which is used for the wallet hosting service CAN be the reference implementation of the ",(0,n.jsx)(t.strong,{children:"M"}),"anaged ",(0,n.jsx)(t.strong,{children:"I"}),"dentity ",(0,n.jsx)(t.strong,{children:"W"}),"allet (MIW) at ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.a,{href:"https://github.com/eclipse-tractusx/managed-identity-wallet",children:"https://github.com/eclipse-tractusx/managed-identity-wallet"})}),".\r\nIf a Core Service Provider chooses to implement an own managed wallet solution to provide a wallet hosting service, the implementation MUST meet the following requirements:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The wallet MUST follow the W3C Standard for Self Sovereign Identity (",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/did-core/",children:"Decentralized Identifiers (DIDs) v1.0 (w3.org)"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["The wallet MUST have an appropriate access management for the functionalities of the wallet to prevent misuse of the partner identities described in ",(0,n.jsx)(t.strong,{children:"CX - 0015 IAM & ACCESS CONTROL PARADIGM FOR USERS AND CLIENTS"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Furthermore the wallet MUST implement at least the following functionalities:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Issuance of Verifiable Credentials"}),"\n",(0,n.jsx)(t.li,{children:"Verification of Verifiable Credentials"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"To validate these criteria for an own managed wallet implementation of the Core Service Provider please collect the following documents:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Arch42 Documentation explaining the architecture, access management and process flows of the implementation"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Hand this documentation to the conformity assessment body."}),"\n",(0,n.jsx)(t.h2,{id:"2-self-sovereign-identity",children:"2. SELF SOVEREIGN IDENTITY"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"#annexes",children:"ANNEXES"})," ",(0,n.jsx)(t.a,{href:"#self-sovereign-identity",children:"Self Sovereign Identity"})]}),"\n",(0,n.jsx)(t.h3,{id:"21-managed-identity-wallet",children:"2.1 MANAGED IDENTITY WALLET"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"SSI will be an integral part of Catena-X. This requires a wallet for each company to store their private keys to issue verifiable credentials. Therefore, during onboarding, each company must receive an instance of the MIW to store credentials until it has its own truly decentral company wallet."}),"\n",(0,n.jsx)(t.p,{children:"To ensure the processes needed for data exchange the MIW provides the following core functionalities:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Issuance of Verifiable Credentials"}),"\n",(0,n.jsx)(t.li,{children:"Verification of Verifiable Credentials"}),"\n",(0,n.jsx)(t.li,{children:"User Access Management to the wallet functionalities"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The Managed Identity Wallets (MIW) service implements the Self-Sovereign-Identity (SSI) readiness by providing a wallet hosting platform including a DID resolver, service endpoints and the company wallets itself."}),"\n",(0,n.jsxs)(t.p,{children:["A detailed description is available on GitHub: ",(0,n.jsx)(t.a,{href:"https://github.com/eclipse-tractusx/ssi-docu/blob/main/docs/architecture/cx-3-2/2.%20Managed%20Identity%20Wallet/MiW.md",children:"https://github.com/eclipse-tractusx/ssi-docu/blob/main/docs/architecture/cx-3-2/2.%20Managed%20Identity%20Wallet/MiW.md"})]}),"\n",(0,n.jsx)(t.h3,{id:"22-did-method",children:"2.2 DID METHOD"}),"\n",(0,n.jsxs)(t.p,{children:['The DID method describes the implementation of a DID network, which includes the type of the anchoring of the DIDs and the Verifiable Data Registry. It is used for the resolving of the DID with the goal to receive the DID Document done with a resolver. A reference implementation of a DID resolver beeing able to resolve multiple DID methods is the "universal resolver" which  can be found here ',(0,n.jsx)(t.a,{href:"https://github.com/decentralized-identity/universal-resolver",children:"https://github.com/decentralized-identity/universal-resolver"})]}),"\n",(0,n.jsxs)(t.p,{children:["The DIDs for the participants, generated by the Onboarding Provider at the moment of registration and managed by the Managed Identity Wallet, are based in the DID method did",":web",", which is specified here: ",(0,n.jsx)(t.a,{href:"https://w3c-ccg.github.io/did-method-web/",children:"https://w3c-ccg.github.io/did-method-web/"})]}),"\n",(0,n.jsx)(t.h3,{id:"23-registration-process",children:"2.3 REGISTRATION PROCESS"}),"\n",(0,n.jsx)(t.p,{children:"To ensure that every participant of Catena-X has a valid DID, a new participating company will be provided a tenant in the Managed Identity at the moment of registration to become an official Catena-X partner."}),"\n",(0,n.jsx)(t.p,{children:"The required company information for the registration process needs to be provided by the participant and validated by the Onboarding Service Provider. After successful registration, the Catena-X specific Business Partner Number (BPN) VC and Catena-X specific Membership VC get available in the Managed Identity Wallet."}),"\n",(0,n.jsx)(t.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,n.jsx)(t.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"CX-0015 IAM & ACCESS CONTROL PARADIGM"}),"\n",(0,n.jsx)(t.li,{children:"CX-0011 ISSUING AGENCY"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Managed Identity Wallet which supports the ",(0,n.jsxs)(t.strong,{children:["did",":web"]})," method: ",(0,n.jsx)(t.a,{href:"https://github.com/catenax-ng/tx-managed-identity-wallets/tree/features/java-did-web",children:"https://github.com/catenax-ng/tx-managed-identity-wallets/tree/features/java-did-web"})]}),"\n",(0,n.jsx)(t.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,n.jsx)(t.h3,{id:"self-sovereign-identity",children:"Self Sovereign Identity"}),"\n",(0,n.jsx)(t.p,{children:"Self Sovereign Identity (SSI) is a loose concept and approach to digital identity that gives individuals control over the information they use to prove identity. It can be defined as the following:"}),"\n",(0,n.jsx)(t.p,{children:"Self-Sovereign Identity (SSI) is the next step beyond user-centric identity and that means it begins at the same place: the user must be central to the administration of identity. That requires not just the interoperability of a user\u2019s identity across multiple locations, with the user\u2019s consent, but also true user control of that digital identity, creating user autonomy. To accomplish this, a self-sovereign identity must be transportable and cannot be tide to one site or locale."}),"\n",(0,n.jsx)(t.p,{children:"A self-sovereign identity must also allow ordinary users to make claims, which could include personally identifying information or facts about personal capability or group membership. It can even contain information about the user that was asserted by other persons or groups."}),"\n",(0,n.jsx)(t.p,{children:"Self Sovereign Identity is based on the following ten principles:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Existence"}),": Users must have an independent existence. Any self-sovereign identity is based on the ineffable \u201cI\u201d that is the foundation of identity. It can never exist fully in digital form. This must be the kernel of self that is upheld and supported. A self-sovereign identity simply makes public and accessible some limited aspects of the \u201cI\u201d that already exists."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Control"}),": Users must control their identities. Subject to well-understood and secure algorithms that ensure the continued validity of an identity and its claims, the user is the ultimate authority on their identity. They should always be able to refer to it, update it, or hide it. This does not mean that a user controls all of the claims on their identity: other users may make claims about a user, but they should not be central to the identity itself."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Access"}),": Users must have access to their own data. A user must always be able to easily retrieve all the claims and other data within his identity. There must be no hidden data and no gatekeepers. This does not mean that a user can necessarily modify all the claims associated with his identity, but it does mean they should be aware of them. It also does not mean that users have equal access to others\u2019 data, only to their own."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Transparency"}),": Systems and algorithms must be transparent. The systems used to administer and operate a network of identities must be open, both in how they function and in how they are managed and updated. The algorithms should be free open-source well-known, and as independent as possible of any architecture; anyone should be able to examine how they work."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Persistence"}),": Identities must be long-lived Though private keys might need to be rotated and data might need to be changed, the identity remains. However, a user should be able to dispose of an identity if he wishes and claims should be modified or removed as appropriate over time."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Portability"}),": Information and services about identity must be transportable. Identities must not be held by a singular third-party entity, even if it is a trusted entity that is expected to work in the best interest of the user. Transportable identities ensure that the user remains in control of his identity no matter what and can also improve an identity\u2019s persistence over time."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Interoperability"}),": Identities should be as widely usable as possible. Identities are of little value if they only work in limited niches. The goal of a digital identity system is to make identity information widely available, crossing international boundaries to create global identities, without losing user control."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Consent"}),": Users must agree to the use of their identity. Any identity system is built  around sharing that identity and its claims, and an interoperable system increases the amount of sharing that occurs. However, sharing of data must only occur with the consent of the user."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Minimalization"}),": Disclosure of claims must be minimized. When data is disclosed, that disclosure should involve the minimum amount of data necessary to accomplish the task at hand."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Protection"}),": The rights of users must be protected. When there is a conflict between the needs of the identity network and the rights of individual users, then the network should err on the side of preserving the freedoms and rights of the individuals over the needs of the network. To ensure this, identity authentication must occur through independent algorithms that are censorship-resistant and force-resilient and that are run in a decentralized manner."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The leading technical implementation of SSI evolves around the open standards of Decentralized Identifiers (DIDs), Decentralized Public Key Infrastructure (DPKI) and Verifiable Credentials."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"summary_flow",src:i(75591).A+"",width:"758",height:"347"})}),"\n",(0,n.jsx)(t.p,{children:"Figure 1: Overview of Open Standards for SSI"}),"\n",(0,n.jsxs)(t.p,{children:["Source: ",(0,n.jsx)(t.a,{href:"http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html",children:"http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html"})]}),"\n",(0,n.jsx)(t.h2,{id:"legal",children:"Legal"}),"\n",(0,n.jsxs)(t.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,n.jsx)(t.a,{href:"/copyright",children:"here"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},75591:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/open-standards-for-ssi-2c53eaf162fdf699daeafb89c8fbde5a.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);