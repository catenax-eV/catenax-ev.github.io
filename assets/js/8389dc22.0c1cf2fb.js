"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[94],{5206:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(4848),i=t(8453);const s={sidebar_position:1},o="How: Data Space Operations",r={id:"operating-model/how-data-space-operations/how-data-space-operations",title:"How: Data Space Operations",description:"This chapter outlines the overarching processes and premises to onboard and exchange",source:"@site/docs/operating-model/how-data-space-operations/how-data-space-operations.md",sourceDirName:"operating-model/how-data-space-operations",slug:"/operating-model/how-data-space-operations/",permalink:"/docs/next/operating-model/how-data-space-operations/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar_op_model",previous:{title:"What: Service Map",permalink:"/docs/next/operating-model/what-service-map/"},next:{title:"How: Data Space Governance",permalink:"/docs/next/operating-model/how-data-space-governance/"}},c={},d=[{value:"General Onboarding",id:"general-onboarding",level:2},{value:"Gaia-X Compliance",id:"gaia-x-compliance",level:2},{value:"SSI Issuer Concept",id:"ssi-issuer-concept",level:2},{value:"Data Exchange based on SSI",id:"data-exchange-based-on-ssi",level:2},{value:"EDC Deployment and Usage Premises",id:"edc-deployment-and-usage-premises",level:2}];function l(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-data-space-operations",children:"How: Data Space Operations"}),"\n",(0,a.jsx)(n.p,{children:"This chapter outlines the overarching processes and premises to onboard and exchange\ndata in the Catena-X data space. This includes the general onboarding process that all\nparticipants must complete to join the Catena-X data space. It involves registration and\ntechnical integration, as well as compliance with the regulatory framework and verification\nthrough the Gaia-X Digital Clearing House. The introduction of Self Sovereign Identities (SSI)\nin Tractus-X Release 23.09 updates the process for offering, exchanging, and using data,\nwhile the chapter also covers EDC deployment and usage premises and available support\noptions for participants."}),"\n",(0,a.jsx)(n.h2,{id:"general-onboarding",children:"General Onboarding"}),"\n",(0,a.jsxs)(n.p,{children:["To participate in the data space, all participants must complete the general registration process, which involves registration and can be extended by the technical integration (see Figure ",(0,a.jsx)(n.a,{href:"/docs/next/operating-model/how-data-space-operations/#general-onboarding",children:"General Onboarding Process"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"General Onboarding Process",src:t(6914).A+"",width:"1465",height:"692"}),"\n",(0,a.jsx)(n.em,{children:"General Onboarding Process"})]}),"\n",(0,a.jsxs)(n.p,{children:["During ",(0,a.jsx)(n.strong,{children:"registration"}),", all participants must fill out their company data, select their data space role, and agree to the regulatory framework via one of the OSPs (see Chapter ",(0,a.jsx)(n.a,{href:"/docs/next/operating-model/who-roles-in-the-catena-x-ecosystem/#onboarding-service-provider",children:"Onboarding Service Provider"}),"). A BPNL (if not yet existing) as well as a Managed Wallet Tenant with BPNL Credential and CX membership Credential are created as part of the registration approval process, which is owned/managed by the operation company. Each participant can collect their identity proofs, certificates and other verifiable information, rights, or services in its identity wallet."]}),"\n",(0,a.jsxs)(n.p,{children:["During ",(0,a.jsx)(n.strong,{children:"technical integration"}),", the technical user creation and registration of the connectors are essential to enable the company communication with the data space. The technical user enables the customer company to connect the connector with the wallet and the connector registration is needed to ensure that the connector can get found by other data space members."]}),"\n",(0,a.jsxs)(n.p,{children:["The self-descriptions of newly registered legal entities and connectors are validated by the GXDCH (see Chapter ",(0,a.jsx)(n.a,{href:"/docs/next/operating-model/how-data-space-operations/#gaia-x-compliance",children:"Gaia-X Compliance"}),"). This involves signing and issuing credentials to the identity wallet of a DPC, providing proof of Gaia-X compliance and legal entity notarization. Detailed information about the Standard CX-0006 in the ",(0,a.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"Standard Library"})," of the Catena-X Association."]}),"\n",(0,a.jsx)(n.h2,{id:"gaia-x-compliance",children:"Gaia-X Compliance"}),"\n",(0,a.jsx)(n.p,{children:"The Gaia-X Digital Clearing House (GXDCH) is an external service that maximizes trust within the Catena-X data space and interoperability with other data space initiatives based on the Gaia-X Trust Framework. The GXDCH enables the validation of legal entities, ensures Gaia-X compliance, and creates an eIDAS conform digital signature (SelfDescription) for all data space participants. There is one GXDCH provider for the Catena-X data space, which is nominated and managed by the Catena-X Association. To ensure compliance with the Catena-X onboarding process, every OSP must connect to the GXDCH. OSP candidates can request more information during conformity assessment."}),"\n",(0,a.jsx)(n.h2,{id:"ssi-issuer-concept",children:"SSI Issuer Concept"}),"\n",(0,a.jsxs)(n.p,{children:["The Tractus-X Release 23.09 initiates the introduction of Self Sovereign Identities (SSI), replacing the Dynamic Attribute Provisioning Service (DAPS). The current release and version of SSI allows only one issuer and one centrally managed identity wallet operated by the CSP-B (see Chapter ",(0,a.jsx)(n.a,{href:"/docs/next/operating-model/what-service-map/",children:"What: Service Map"}),"). This also includes the revocation of issued certificates. This is done in cooperation with the Catena-X Association e.g., in case of conscious violation of legal and technical framework. With the 23.09. Release the CSP-B is the single issuer authority of Catena-X credentials. Multi-issuer concept is planned in the following releases. The BPNL can be found on the Catena-X Association website and the portal of the CSP-B. This concept will evolve in future releases, the details of which can be found in Chapter ",(0,a.jsx)(n.a,{href:"/docs/next/operating-model/outlook/#further-integration-of-ssi-technologies",children:"Further Integration of SSI Technologies"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"data-exchange-based-on-ssi",children:"Data Exchange based on SSI"}),"\n",(0,a.jsxs)(n.p,{children:["With the introduction of Self Sovereign Identities (SSI) in the Tractus-X Release 23.09, the processes to participate in a use case as well as offer, exchange, and use data are updated as follows (see Figure ",(0,a.jsx)(n.a,{href:"/docs/next/operating-model/how-data-space-operations/#data-exchange-based-on-ssi",children:"Data Exchange Process"}),"):"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"Data Exchange Process",src:t(6244).A+"",width:"1037",height:"781"}),"\n",(0,a.jsx)(n.em,{children:"Data Exchange Process"})]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Participant signs pre-defined use case framework conditions and requests credential via CSP-B"})}),"\n",(0,a.jsx)(n.p,{children:"The data consumer must sign and upload the respective use case framework conditions to request the use case participation credential."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Issuer validates request and issues credential"})}),"\n",(0,a.jsx)(n.p,{children:"The request from the participant (e.g., data consumer) is sent to the issuer (operator) for validation (frame version and existing signature) and confirmation, which triggers the creation of the VC."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Requests credential"})}),"\n",(0,a.jsx)(n.p,{children:"The customer EDC calls the MIW to retrieve the verified summary credentials, requests the signature and retrieves the verified presentation with the summary credential."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Query catalogue/offers"})}),"\n",(0,a.jsx)(n.p,{children:"With the query of the data provider catalog, the consumer EDC submits the request with the VP in the request header. Upon successful validation, the issuer generates the verified credential using the MIW component and stores it in the wallet tenant of the customer company wallet. is recreated containing both the previous credentials and the newly added credential."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Submit catalog"})}),"\n",(0,a.jsx)(n.p,{children:"The received offer catalog request and the submitted customer VP are validated by the provider EDC. All data offers where the data access policies set by the provider match the verified credentials owned by the data consumer are sent to the customer. Any data offers that require verified credentials that the data consumer does not have will not be sent/published to the data consumer."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Manual checking of data offering policies"})}),"\n",(0,a.jsx)(n.p,{children:"Configured data offer policies must be manually checked by the data consumer."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If a purpose is specified, the purpose must be validated internally by the data consumer. The purpose may refer to an individual contract concluded between the data consumer and the data provider. The data consumer must review the contract and decide whether the policies are acceptable for the specific data offering based on the established policies (see next step 7)."}),"\n",(0,a.jsx)(n.li,{children:"If no purpose is specified, the negotiation can start immediately, as the access and usage policies are automatically technically enforced and validated by the EDCs."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Decision on the purpose of the data offer"})}),"\n",(0,a.jsx)(n.p,{children:"Based on step 6 individual data contract validation, the data consumer must decide whether to proceed with the negotiation or whether to disagree with the individual purpose. If there is disagreement, the negotiation should not be started. If there is consent, the data consumer can start the negotiation."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Contract negotiation"})}),"\n",(0,a.jsx)(n.p,{children:"The data consumer starts the contract negotiation by sending a request for an agreement/contract"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Contract conclusion/success"})}),"\n",(0,a.jsx)(n.p,{children:"The EDC of the data provider receives the negotiation requests, validates the access and usage policies of the specific data offer requested by the data provider, and matches it with the VP of the data consumer. If the data consumer has all relevant credentials, the agreement is successfully concluded, and an agreement log is stored in both EDCs."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Data transfer"})}),"\n",(0,a.jsx)(n.p,{children:"Data transmission/access by the data consumer can take place as long as the contract is active."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"edc-deployment-and-usage-premises",children:"EDC Deployment and Usage Premises"}),"\n",(0,a.jsx)(n.p,{children:"Each data space participant has its own organizational structure, consisting of different legal entities and/or subsidiaries. Depending on the organizational structures, data space participants must consider how to organize the representation of their organization in the Catena-X data space. This includes considerations for setting up connector instances regarding organizational, technical, and legal conditions. The following premises apply:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The data exchange always takes place between two legal entities, as only their representatives can sign legally binding contracts."}),"\n",(0,a.jsx)(n.li,{children:"Legal entities must be registered and known in the data space."}),"\n",(0,a.jsx)(n.li,{children:"To represent a legal entity in the data space, an associated business partner number (BPNL) is required."}),"\n",(0,a.jsx)(n.li,{children:"The deployment and use of at least one connector (e.g., EDC) per legal entity for data exchange is mandatory."}),"\n",(0,a.jsx)(n.li,{children:"The connector negotiates data usage between endpoints (data plane) by synchronizing access and usage policies between data providers and data consumers."}),"\n",(0,a.jsx)(n.li,{children:"There is no data processing or reviewing of data within the connector itself."}),"\n",(0,a.jsx)(n.li,{children:"Data usage takes place instead at the endpoints of the data providers or data consumers, respectively."}),"\n",(0,a.jsx)(n.li,{children:"Data usage with respect to location and assignment to computer instances/platforms is independent of the runtime environment of the connector itself."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["There are various options for organizational structures and data exchange scenarios such as \u201cone legal entity and one site in one country\u201d, \u201cone legal entity and multiple sites in one country\u201d or \u201cone legal entity and multiple sites in different countries\u201d. For more details on possible connector usage scenarios, please refer to our ",(0,a.jsx)(n.a,{href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/6_Onboarding/CX_-_0006_Registration_and_Initial_Onboarding_v_1.1.1.pdf",children:"Initial Onboarding Guide"}),". This includes also the different options to obtain a connector, e.g., it can be acquired via an ESP, it can be self-developed or adapted from open-source, or it can be part of a business application from a BAP. If the data exchange does not take place between several legal entities within Catena-X as defined above, no EDC is required. An example would be the connection of the OSP to the GXDCH. For this connection no connector is needed, because this is not an exchange of data between two legal entities within Catena-X."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},6244:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/data-exchange-process-2de9e4cb18ad9602cb2ba975287579f6.png"},6914:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/general-onboarding-process-756b55f51977bf98f2df2d9957704e90.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(6540);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);