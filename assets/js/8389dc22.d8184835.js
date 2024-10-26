"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[94],{75206:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(74848),i=a(28453);const s={sidebar_position:1},r="How: Data Space Operations",o={id:"operating-model/how-data-space-operations/how-data-space-operations",title:"How: Data Space Operations",description:"This chapter provides an overview of the key processes and compliance requirements for onboarding to the Catena-X data space. It covers the data exchange process based on Self Sovereign Identities (SSI) for offering, exchanging, and using data. Finally, guidelines and support options for the use of connectors are described.",source:"@site/docs/operating-model/how-data-space-operations/how-data-space-operations.md",sourceDirName:"operating-model/how-data-space-operations",slug:"/operating-model/how-data-space-operations/",permalink:"/docs/next/operating-model/how-data-space-operations/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar_op_model",previous:{title:"What: Service Map",permalink:"/docs/next/operating-model/what-service-map/"},next:{title:"How: Data Space Governance",permalink:"/docs/next/operating-model/how-data-space-governance/"}},c={},d=[{value:"Onboarding Process",id:"onboarding-process",level:2},{value:"Registration",id:"registration",level:3},{value:"Registration Approval",id:"registration-approval",level:3},{value:"Technical Integration",id:"technical-integration",level:3},{value:"Managing Company Hierarchies",id:"managing-company-hierarchies",level:3},{value:"Gaia-X Compliance",id:"gaia-x-compliance",level:2},{value:"Implementation of the Self Sovereign Identity Concept",id:"implementation-of-the-self-sovereign-identity-concept",level:2},{value:"Data Exchange based on SSI",id:"data-exchange-based-on-ssi",level:2},{value:"EDC Deployment and Usage Premises",id:"edc-deployment-and-usage-premises",level:2},{value:"Supply Chain Visibility (BETA)",id:"supply-chain-visibility-beta",level:2},{value:"Part-based visibility",id:"part-based-visibility",level:3},{value:"Entity-based visibility",id:"entity-based-visibility",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-data-space-operations",children:"How: Data Space Operations"})}),"\n",(0,n.jsx)(t.p,{children:"This chapter provides an overview of the key processes and compliance requirements for onboarding to the Catena-X data space. It covers the data exchange process based on Self Sovereign Identities (SSI) for offering, exchanging, and using data. Finally, guidelines and support options for the use of connectors are described."}),"\n",(0,n.jsx)(t.h2,{id:"onboarding-process",children:"Onboarding Process"}),"\n",(0,n.jsxs)(t.p,{children:["The onboarding process consists of the (i) registration process and (ii) registration approval process and can be extended by the (iii) technical integration process in accordance with the CX-0006 standard (see Figure ",(0,n.jsx)(t.a,{href:"/docs/next/operating-model/how-data-space-operations/#general-onboarding",children:"Onboarding Process"}),"). To join the data space, all participants must complete the registration process. To exchange data with partners, participants must also complete the technical integration process and sign the General Data Exchange Framework."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Onboarding Process",src:a(72575).A+"",width:"4812",height:"2131"}),"\n",(0,n.jsx)(t.em,{children:"Onboarding Process"})]}),"\n",(0,n.jsx)(t.h3,{id:"registration",children:"Registration"}),"\n",(0,n.jsxs)(t.p,{children:["During the registration process, all participants must add their company data, select their company role(s), and submit their registration via the registration service of the CSP-B or one of the OSPs (see Chapter ",(0,n.jsx)(t.a,{href:"/docs/next/operating-model/who-roles-in-the-catena-x-ecosystem/#onboarding-service-provider",children:"Onboarding Service Provider"}),"). The registration service of the OSP is integrated into the general registration service of the CSP-B, e.g. using the registration API (CX-0009) and the IAM & Access Control for Single Sign-On (SSO). Subsequently, all participants must confirm their selected company role(s) and the regulatory framework including role-specific terms and conditions via the CSP-B registration service."]}),"\n",(0,n.jsx)(t.h3,{id:"registration-approval",children:"Registration Approval"}),"\n",(0,n.jsxs)(t.p,{children:['After confirmation, a BPNL (if not yet available) and an identity wallet with the "BPNL" and "Catena-X Membership" credentials are created by the CSP-B as part of the registration approval step. Each participant can collect their proof of identity, credentials and other verifiable information (e.g., roles, rights, services) in their identity wallet. The self-descriptions (SD) of newly registered legal entities and connectors are validated by the GXDCH (see Chapter ',(0,n.jsx)(t.a,{href:"/docs/next/operating-model/how-data-space-operations/#gaia-x-compliance",children:"Gaia-X Compliance"}),"). This includes the signing and issuing of credentials to the identity wallet of a DPC, providing proof of Gaia-X compliance and notarization of the legal entity."]}),"\n",(0,n.jsx)(t.h3,{id:"technical-integration",children:"Technical Integration"}),"\n",(0,n.jsx)(t.p,{children:"After registration, participants can start the technical integration process (e.g., create technical users, regsiter connectors) to enable technical interaction with other participants. The technical user enables a company to link their connectors to its identity wallet. The connector registration is required to ensure that a connector can be searched and discoverd by other participants within the data space."}),"\n",(0,n.jsx)(t.h3,{id:"managing-company-hierarchies",children:"Managing Company Hierarchies"}),"\n",(0,n.jsxs)(t.p,{children:["After successful registration, participants can create and manage their company hierarchies. With release 24.08, Catena-X Business Partner Data Management allows you to create and manage sites and additional addresses for your legal entities. In a future version, it will also be possible to create and manage relationships between two legal entities (e.g., subsidiaries). This is relevant, for example, for the various connector usage scenarios as described ",(0,n.jsx)(t.a,{href:"/docs/next/operating-model/how-data-space-operations/#edc-deployment-and-usage-premises",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"gaia-x-compliance",children:"Gaia-X Compliance"}),"\n",(0,n.jsx)(t.p,{children:"The Gaia-X Digital Clearing House (GXDCH) is an external service that maximizes trust within the Catena-X data space, and data space interoperability with other initiatives based on the Gaia-X Trust Framework. The GXDCH enables the validation of legal entities, ensures Gaia-X compliance, and creates an eIDAS conform digital signature (self-description) for all data space participants. There is one GXDCH provider for the Catena-X data space, which is nominated and managed by the Catena-X Association. To ensure compliance with the Catena-X onboarding process, the CSP-B must connect to the GXDCH."}),"\n",(0,n.jsx)(t.h2,{id:"implementation-of-the-self-sovereign-identity-concept",children:"Implementation of the Self Sovereign Identity Concept"}),"\n",(0,n.jsxs)(t.p,{children:["Self-Sovereign Identity (SSI) is the next step beyond user-centric identity, and that means it begins at the same place: the user must be central to the administration of identity. That requires not just the interoperability of a user\u2019s identity across multiple locations, with the user\u2019s consent, but also true user control of that digital identity, creating user autonomy. In Catena-X there are several different components to implement the SSI approach. This includes the Issuer Component and the BPN DID Resolution Service (BDRS) which is currently classified as Core Service B due to the current state of our technical architecture, and is accordingly also managed by the CSP-B. In addition to the Issuer Component, the CSP-B also operates an Identity Wallet and the Authority Schema Registry. The Authority Schema Registry is managed by the Catena-X Association, which has nominated and commissioned the CSP-B to operate this service. To enable a stable and secure operation, the CSP-B can put the schemas in a dedicated repository. The CSP-B must use the currently operational version in the Catena-X data space. All the components can be seen in the Service Map (see Chapter ",(0,n.jsx)(t.a,{href:"/docs/next/operating-model/what-service-map/",children:"What: Service Map"}),") This concept will evolve in future releases, the details of which can be found in Chapter ",(0,n.jsx)(t.a,{href:"/docs/next/operating-model/outlook/#further-integration-of-ssi-technologies",children:"Further Integration of SSI Technologies"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"data-exchange-based-on-ssi",children:"Data Exchange based on SSI"}),"\n",(0,n.jsxs)(t.p,{children:["With the latest Catena-X release the processes to participate in a use case as well as to offer, exchange, and use data are updated as follows (see Figure ",(0,n.jsx)(t.a,{href:"/docs/next/operating-model/how-data-space-operations/#data-exchange-based-on-ssi",children:"Data Exchange Process"}),"):"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Data Exchange Process",src:a(66244).A+"",width:"1337",height:"955"}),"\n",(0,n.jsx)(t.em,{children:"Data Exchange Process"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Note: the flow is a comprehensive picture of the actual interactions taking place. It covers the presentation flow. The issuance flow is not visualized."}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Initiate Secure Token Creation"})}),"\n",(0,n.jsx)(t.p,{children:"Retrieve a One-Time-Token (OTT) to allow the provider to request Verifiable Presentations (VP) within a pre-defined, authorized scope."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Query catalog/offers"})}),"\n",(0,n.jsx)(t.p,{children:"With the query of the data provider catalog, the consumer EDC submits the previously generated one-time token to allow the provider to call the VP under #3."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Query VP"})}),"\n",(0,n.jsx)(t.p,{children:"The provider calls the consumer wallet with the provided One-Time-Pad (OTP). The consumer wallet validates the (One-Time-Token) OTT and if successful, submits the VP."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Validate VP"})}),"\n",(0,n.jsx)(t.p,{children:"The provider connector validates the VP and matches the consumer VP scope with the available data offer policy rules configured."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Submit catalog"})}),"\n",(0,n.jsxs)(t.p,{children:["Upon successful validation (by the provider EDC), all data offers, where the data access policies set by the provider match the verified credentials owned by the data consumer, are sent to the customer. Any data offers that require verified credentials that the data consumer does not have will not be sent/published to the data consumer. Participation in a Catena-X Use Case requires the selection of at least one standardized purpose. The list of standardized Catena-X purposes can be found in the official ",(0,n.jsx)(t.a,{href:"https://github.com/catenax-eV/cx-odrl-profile",children:"Catena-X Open Digital Rights Language (ODRL) profile"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Manual checking of data offering policies"})}),"\n",(0,n.jsx)(t.p,{children:"Configured data offer policies must be manually checked by the data consumer."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If a purpose is specified, the purpose must be validated internally by the data consumer. The purpose may refer to an individual contract concluded between the data consumer and the data provider. The data consumer must review the contract and decide whether the policies are acceptable for the specific data offering based on the established policies (see next step 7)."}),"\n",(0,n.jsx)(t.li,{children:"If no purpose is specified, the negotiation can start immediately, as the access and usage policies are automatically technically enforced and validated by the connectors."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Decision on the purpose of the data offer"})}),"\n",(0,n.jsx)(t.p,{children:"Based on step 6 individual data contract validation, the data consumer must decide whether to proceed with the negotiation or whether to disagree with the individual purpose. If there is disagreement, the negotiation should not be started. If there is consent, the data consumer can start the negotiation."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Contract negotiation"})}),"\n",(0,n.jsx)(t.p,{children:"The data consumer starts the contract negotiation by sending a request for an agreement/contract."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Contract conclusion/success"})}),"\n",(0,n.jsx)(t.p,{children:"The connector of the data provider receives the negotiation requests, validates the access and usage policies of the specific data offer requested by the data provider, and matches it with the VP of the data consumer. If the data consumer has all relevant credentials, the agreement is successfully concluded, and an agreement log is stored in both connectors."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Data transfer"})}),"\n",(0,n.jsx)(t.p,{children:"Data transmission/access by the data consumer can take place as long as the contract is active."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"edc-deployment-and-usage-premises",children:"EDC Deployment and Usage Premises"}),"\n",(0,n.jsx)(t.p,{children:"Each data space participant has its own organizational structure, consisting of different legal entities and/or subsidiaries. Depending on the organizational structures, data space participants must consider how to organize the representation of their organization in the Catena-X data space. This includes considerations for setting up connector instances regarding organizational, technical, and legal conditions. The following premises apply:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The data exchange always takes place between two legal entities, as only their representatives can sign legally binding contracts."}),"\n",(0,n.jsx)(t.li,{children:"Legal entities must be registered and known in the data space."}),"\n",(0,n.jsx)(t.li,{children:"To represent a legal entity in the data space, an associated business partner number (BPNL) is required."}),"\n",(0,n.jsx)(t.li,{children:"The deployment and use of at least one connector (e.g., EDC) per company (i.e. legal entity) for data exchange is mandatory."}),"\n",(0,n.jsx)(t.li,{children:"To minimize effort and costs, it is recommended that a parent company provides a connector that can also be used by subsidiaries. A technical description of this will follow soon."}),"\n",(0,n.jsx)(t.li,{children:"The connector negotiates data usage between endpoints (data plane) by synchronizing access and usage policies between data providers and data consumers."}),"\n",(0,n.jsx)(t.li,{children:"There is no data processing or reviewing of data within the connector itself."}),"\n",(0,n.jsx)(t.li,{children:"Data usage takes place instead at the endpoints of the data providers or data consumers, respectively."}),"\n",(0,n.jsx)(t.li,{children:"Data usage with respect to location and assignment to computer instances/platforms is independent of the runtime environment of the connector itself."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["There are various options for organizational structures and data exchange scenarios such as \u201cone legal entity and one site in one country\u201d, \u201cone legal entity and multiple sites in one country\u201d or \u201cone legal entity and multiple sites in different countries\u201d.\nFor more details on possible connector usage scenarios, please refer to our ",(0,n.jsx)(t.a,{href:"https://catena-x.net/fileadmin/user_upload/04_Einfuehren_und_umsetzen/Onboarding/OnboardingGuide_LargeEnterprises_V1.1.pdf",children:"Onboarding Guide"}),". This includes also the different options to obtain a connector, e.g., it can be acquired via an ESP, it can be self-developed or adapted from open-source, or it can be part of a business application from a BAP. If the data exchange does not take place between several legal entities within Catena-X as defined above, no EDC is required. An example would be the connection of the CSP-B to the GXDCH. For this connection no connector is needed, because this is not an exchange of data between two legal entities within Catena-X."]}),"\n",(0,n.jsx)(t.h2,{id:"supply-chain-visibility-beta",children:"Supply Chain Visibility (BETA)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"This chapter is released as beta, which therefore is as of now not normative and may change significantly in subsequent iterations. The aim is to provide a definition and a guideline for 1U1D. \xa0In doing so, we want to start the review of the definition - so that we have long-term an overview of which use case has which requirement."})}),"\n",(0,n.jsx)(t.p,{children:"Catena-X is committed to making sovereign data exchange easy to use. This includes not just technical aspects but also support compliance scenarios, for example in terms of anti-trust legislation, confidentiality clauses in supply contracts, etc.."}),"\n",(0,n.jsx)(t.p,{children:"The resulting guideline for supply chain visibility in Catena-X data space is known as the \u201cOne Up / One Down Rule\u201d (1U1D-Rule). This means that each company in the supply chain can only use and share data with its direct suppliers (One Down / N+1) and customers (One Up / N-1). It ensures that companies receive enough information to fulfill their specific tasks and to enable Catena-X to fulfill use cases throughout the entire value chain, but at the same time retain control over access to sensitive data."}),"\n",(0,n.jsx)(t.p,{children:"In practice, the situation is more complex. For example, a legal entity may have other subsidiaries that are part of the same value chain or there may be various assembly steps before a product is handed over to the customer. Therefore, there are two possibilities in Catena-X to apply the 1U1D rule in this case, part-based visibility and entity-based visibility."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Data Exchange Process",src:a(93790).A+"",width:"1754",height:"1017"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.em,{children:"1U1D visibility"})]}),"\n",(0,n.jsx)(t.p,{children:"The figure shows a generic section of the value chain. The basic principle - one up (N-1) exchange data with the customer and one down (N+1) exchange data with the supplier is generally valid. The number of external legal entities depends on the respective business relationships starting from the Tier-N. The orange box represents the Tier-N, including all internal value creation processes and all internal subsidiaries. The individual parts show the process by which they are sourced from different suppliers and assembled into a new product. The green box shows which information can be used by the external parties."}),"\n",(0,n.jsx)(t.p,{children:"Besides this implementation suppliers and customers have to agree on how the 1U1D-Rule applies to their specific contractual agreement and use case. For example, if there are agreements in place to handle directed parts or ad-hoc agreements to handle a critical supply situation, supply chain visibility may be extended."}),"\n",(0,n.jsxs)(t.p,{children:["The default standard for part relationships is defined in Catena-X Standards ",(0,n.jsx)(t.a,{href:"/docs/next/standards/CX-0126-IndustryCorePartType/",children:"CX-0126"})," and ",(0,n.jsx)(t.a,{href:"/docs/next/standards/CX-0127-IndustryCorePartInstance/",children:"CX-0127"}),". An overarching explanation can be found in the ",(0,n.jsx)(t.a,{href:"https://eclipse-tractusx.github.io/docs-kits/kits/Industry%20Core%20Kit/Business%20View%20Industry%20Core%20Kit",children:"Tractus-X KITS"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"part-based-visibility",children:"Part-based visibility"}),"\n",(0,n.jsx)(t.p,{children:"Part-based visibility makes a more granular distinction in data exchange than the entity-based approach, as it differentiates between the individual components. For example, only data about the part that is directly related to an external legal entity is provided or requested. This means that the entire value chain is not transparent. For the functionality of the use cases in Catena-X, the relationship between the various parts must still be known, even if not all of them are provided. In this figure, data is exchanged with Tier-X-1 (1Up) only via the part that has a direct relationship with it."}),"\n",(0,n.jsx)(t.h3,{id:"entity-based-visibility",children:"Entity-based visibility"}),"\n",(0,n.jsx)(t.p,{children:"In comparison to part-based visibility, entity-based visibility does not differentiate between the individual subcomponents or the assemblies. This means that all subparts and process steps of the respective other legal entity (One Up / N-1) or (One Down / N+1) are provided. In this figure, data is exchanged with Tier-X-1 (1Up) about the part that has a direct relationship with it and the assemblies. It is recommended that supply chain visibility respects symmetrical relationships where granularity of data visibility is equivalent on supplier and customer side."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},93790:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/1U1D_Visibility-53c5787dd7286a2147d84d3cfd25646c.png"},66244:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/data-exchange-process-0c26f6d789fd2ede113151ae5879ee5d.png"},72575:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/onboarding-process-058f2fa29ee13d3475cf59be12fb69ca.png"},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var n=a(96540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);