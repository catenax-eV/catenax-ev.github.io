"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[927],{29887:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=i(74848),a=i(28453);const s={tags:["CAT/Business Application Provider","UC/Behaviroal Twin"]},r="CX-0141 Use Case Behaviour Twin Health Indicator v1.0.0",o={id:"standards/CX-0141-HealthIndicatorUseCase/CX-0141-HealthIndicatorUseCase",title:"CX-0141 Use Case Behaviour Twin Health Indicator v1.0.0",description:"ABSTRACT",source:"@site/docs/standards/CX-0141-HealthIndicatorUseCase/CX-0141-HealthIndicatorUseCase.md",sourceDirName:"standards/CX-0141-HealthIndicatorUseCase",slug:"/standards/CX-0141-HealthIndicatorUseCase/",permalink:"/docs/next/standards/CX-0141-HealthIndicatorUseCase/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"CAT/Business Application Provider",permalink:"/docs/next/tags/cat-business-application-provider"},{inline:!0,label:"UC/Behaviroal Twin",permalink:"/docs/next/tags/uc-behaviroal-twin"}],version:"current",frontMatter:{tags:["CAT/Business Application Provider","UC/Behaviroal Twin"]},sidebar:"sidebar_standards",previous:{title:"CX-0139 Information as a Service - External Data Provider  v1.0.0",permalink:"/docs/next/standards/CX-0139-InformationasaServiceExternalDataProvider/"},next:{title:"CX-0142 Shop Floor Information Service v1.0.0",permalink:"/docs/next/standards/CX-0142-ShopFloorInformationService/"}},d={},l=[{value:"ABSTRACT",id:"abstract",level:2},{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2 RELEVANT PARTS OF THE STANDARD &quot;Use Case Behaviour Twin Health Indicator&quot;",id:"2-relevant-parts-of-the-standard-use-case-behaviour-twin-health-indicator",level:2},{value:"2.1 STANDARDS FOR &quot;Use Case Behaviour Twin Health Indicator&quot;",id:"21-standards-for-use-case-behaviour-twin-health-indicator",level:3},{value:"2.1.1 LIST OF STANDALONE STANDARDS",id:"211-list-of-standalone-standards",level:4},{value:"2.1.2 DATA REQUIRED",id:"212-data-required",level:4},{value:"2.1.3 ADDITIONAL REQUIREMENTS",id:"213-additional-requirements",level:4},{value:"KNOWLEDGE AGENT SPECIFIC REQUIREMENTS",id:"knowledge-agent-specific-requirements",level:5},{value:"Conventions for Use Case Policy in context data exchange",id:"conventions-for-use-case-policy-in-context-data-exchange",level:5},{value:"Additional details regarding Access Policies",id:"additional-details-regarding-access-policies",level:5},{value:"Additional Details regarding Usage Policies",id:"additional-details-regarding-usage-policies",level:5},{value:"Versioning",id:"versioning",level:5},{value:"3 ASPECT MODELS",id:"3-aspect-models",level:2},{value:"4 APPLICATION PROGRAMMING INTERFACES",id:"4-application-programming-interfaces",level:2},{value:"5 REFERENCES",id:"5-references",level:2},{value:"5.1 NORMATIVE REFERENCES",id:"51-normative-references",level:3},{value:"5.2 NON-NORMATIVE REFERENCES",id:"52-non-normative-references",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cx-0141-use-case-behaviour-twin-health-indicator-v100",children:"CX-0141 Use Case Behaviour Twin Health Indicator v1.0.0"}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"Behavioral product models, built on a consistent architecture of reusable functional components within ecosystems like Catena-X, unlock a wide range of innovative business ideas and digital services."}),"\n",(0,t.jsx)(n.p,{children:"The focus of the 'data-centric and model-centric development and operational support' revolves around the 'digital behaviour twin'. This concept maps products, their functions, attributes, and business metrics using a shared data model."}),"\n",(0,t.jsx)(n.p,{children:"Part of this digital twin involves dynamic services providing real-time information about existing or planned vehicles. Stakeholders like automobile clubs or recycler seek specific details, such as a component's expected lifespan. This information is crucial for determining the viability of recycling components."}),"\n",(0,t.jsx)(n.p,{children:"This standard focuses on the Health Indicator Use Case. The Health Indicator recieves dynamic input data, that has been recorded in the vehicle, through the Catena-X network. The input data, combined with additional product knowledge by the service provider, is used to calculate precise health indicator values for specific components."}),"\n",(0,t.jsx)(n.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,t.jsx)(n.p,{children:"The standard is relevant for the following roles within the scope of the Health Indicator:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"data & service provider/consumer"}),"\n",(0,t.jsx)(n.li,{children:"business application provider"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:'This document acts as a umbrella for single standards required to request "Health Indicator" data as well as providing a service for its calculation at a component level.'}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The standard is relevant for the following roles within the scope of a Health Indicator service"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"data provider/consumer"}),"\n",(0,t.jsx)(n.li,{children:"business application provider"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"NOTE: Fulfilling a use case standard by a data provider/consumer can be done in two ways: A) Purchase a certified app for the\nuse case. In this case the data provider/consumer does not need to proof conformity again and B) Data provisioning/consumption without a certified app for the use case. In this case the data provider/consumer needs to proof conformity with\nall single standards listed in this document."}),"\n",(0,t.jsx)(n.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This graphic illustrates the principles architecture of the Health Indicator use case."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"architecture overview",src:i(85553).A+"",width:"831",height:"651"})}),"\n",(0,t.jsx)(n.p,{children:"Since Data Transfer in Catena-X requires IDSA compliance, both parties involved must use an IDSA compliant connector and\nprovision the API endpoints as specific data assets in those connectors."}),"\n",(0,t.jsxs)(n.p,{children:["The Knowledge Agent functionality for the Dataspace Connector is required. This is defined in CX-0084",":v1",".2 Federated Queries in Data Spaces."]}),"\n",(0,t.jsx)(n.p,{children:"A standard for a semantic-driven and state-of-the-art compute-to-data architecture for Catena-X is the so-called Knowledge Agents (KA) approach. It builds on well-established W3C-standards of the semantic web."}),"\n",(0,t.jsx)(n.p,{children:"Depending on your role, you must provide the following parts of this standard:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"all"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"running Knowledge Agent Dataspace Connector extensions"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"data provider"})," and ",(0,t.jsx)(n.strong,{children:"service requester"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["bindings for load spectra to the knowledge graph, ideally by using a binding agent (see Binding Layer and related examples in CX-0084",":v1",".2)"]}),"\n",(0,t.jsx)(n.li,{children:"graph asset, which describes and offers the data bindings in a Knowledge Agent compatible way (policies may also be required)"}),"\n",(0,t.jsx)(n.li,{children:"an own HI skill or a access to a remote skill"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"service provider"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["bindings for a health indicator service (see cx-behaviour",":VehicleHealth"," within the ",(0,t.jsx)(n.a,{href:"https://w3id.org/catenax/ontology/behaviour",children:"behaviour ontology"}),") to the knowledge graph, ideally by using a binding agent"]}),"\n",(0,t.jsx)(n.li,{children:"graph asset, which describes and offers the service bindings in a Knowledge Agent compatible way (policies may also be required)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If the service requester requests HI values, he invokes the HI skill and provides a vehicle identification number to it. This can also be done for multiple vehicles at once in a batch mode. The data bindings and the service provider are resolved by the Knowledge Agent. Then, the data are transferred to the service provider via Knowledge Agent. There, the HI values are calculated and passed back to the requester."}),"\n",(0,t.jsx)(n.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).\nSince this document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and\nthe respective conformity assessment criteria in addition to the specific criteria mentioned in this document.\nThe specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.\nThe Tractus-X EDC (Eclipse Dataspace Connector) is RECOMMENDED to be used as an IDSA compliant connector, as it is the current\nreference implementation of the IDSA protocol."}),"\n",(0,t.jsx)(n.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,t.jsx)(n.p,{children:"The Health Indicator can be used in many different contexts."}),"\n",(0,t.jsx)(n.p,{children:"OEM, TIER-X: During the usage phase, health indicators provide a continuous and comprehensive view of the condition of products in the field. Abnormalities, possible defects or failures can be detected reliably and early on. This provides the time advantage to initiate countermeasures in good time. During development phase, health indicators can be used to bring more mature products into series production."}),"\n",(0,t.jsx)(n.p,{children:"TIER-X: The overall product range becomes more attractive in the offer phase, when the definition of health indicators as a product-related service is included."}),"\n",(0,t.jsx)(n.p,{children:"Workshops: In case of failure analysis and repair, workshops benefit from an extended range of data on vehicle condition and its components. In return, service providers can standardize and facilitate access to the OEM."}),"\n",(0,t.jsx)(n.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Business Partner Number (BPN):"})," A BPN is the unique identifier of a partner within Catena-X"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tractus-X EDC (Eclipse Dataspace Connector):"})," The Tractus-X EDC is a reference implementation of a connector for IDSA conform sovereign data exchange"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Behaviour Twin:"})," Behavioral product models, based on a structured and consistent architecture of reusable and standard functional components and applied in a common ecosystem."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Knowledge Agent (KA):"})," The so-called Knowledge Agents (KA) approach. It builds on well-established W3C-standards of the semantic web, such as OWL, SPARQL, SHACL, RDF etc. and makes these protocols usable to formulate powerful queries to the data space. Those queries can be used to answer business questions directly (comparable to a search engine) or they can be embedded in apps to include query results into workflows with more advanced visualization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Matchmaking Agent:"})," This component supports SparQL to traverse the federated data space as a large data structure. It interacts with the Dataspace Connector.\nThe provider's Matchmaking Agent will be activated by its Dataspace Connector. Therefore, the Dataspace Connector must offer a Graph Asset (variant of ordinary data assets in the Catena-X Dataspace Connectivity standard).\nThe consumer's Matchmaking Agent interacts with its Dataspace Connector to negotiate and perform the transfer of Sub-Skills to other dataspace participants.\nThe Matchmaking Agents are matching the (sub)graphs and negotiate appropriated graph assets with the partner Dataspace Connectors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Binding Agent:"})," The Binding Agent is a restricted version of the Matchmaking Agent (subset of OWL/SparQL, e.g., without federation) which is just focused on translating Sub-Skills of a particular business domain (Bill-Of-Material, Chemical Materials, Production Sites, etc.) into proper SQL- or REST based backend system calls. Implementation details: For data bindings, OnTop is used. For service bindings, RDF4J is used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ontology:"})," The ontology is a formal representation of knowledge that captures concepts, relationships, and properties. It allows a shared understanding and reasoning about the respective domain. It must be hosted in a way that all participants can access it. Currently, the ontology is hosted at GitHub."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2-relevant-parts-of-the-standard-use-case-behaviour-twin-health-indicator",children:'2 RELEVANT PARTS OF THE STANDARD "Use Case Behaviour Twin Health Indicator"'}),"\n",(0,t.jsx)(n.h3,{id:"21-standards-for-use-case-behaviour-twin-health-indicator",children:'2.1 STANDARDS FOR "Use Case Behaviour Twin Health Indicator"'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"211-list-of-standalone-standards",children:"2.1.1 LIST OF STANDALONE STANDARDS"}),"\n",(0,t.jsx)(n.p,{children:"To participate in the Use Case Behaviour Twin Health Indicator, the following single standards MUST be fulfilled:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["CX-0018",":v3",".0 Dataspace Connectivity"]}),"\n",(0,t.jsxs)(n.li,{children:["CX-0067",":v1",".1 Ontology Models to realize federated query in Catena-X (only if using the Knowledge Agent)"]}),"\n",(0,t.jsxs)(n.li,{children:["CX-0084",":v1",".2 Federated Queries in Data Spaces (only if using the Knowledge Agent)"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"212-data-required",children:"2.1.2 DATA REQUIRED"}),"\n",(0,t.jsx)(n.p,{children:"As a service requester or service requester application I MUST provide Health Indicator Input data (bound to the knowledge graph).\nAs a Service Provider I MUST provide Health indicator output information (service, bound to the knowledge graph)."}),"\n",(0,t.jsx)(n.h4,{id:"213-additional-requirements",children:"2.1.3 ADDITIONAL REQUIREMENTS"}),"\n",(0,t.jsx)(n.h5,{id:"knowledge-agent-specific-requirements",children:"KNOWLEDGE AGENT SPECIFIC REQUIREMENTS"}),"\n",(0,t.jsx)(n.p,{children:"If you are engaged as a data provider, you MUST mount your data source to the federated knowledge graph as Graph Asset. Beside the policy and contract definition, a Graph Asset registration is needed.\nAs a service provider you MUST make the service available as part of the federated knowledge graph, a Graph Asset pointing to your Remoting Agent endpoint is needed."}),"\n",(0,t.jsx)(n.h5,{id:"conventions-for-use-case-policy-in-context-data-exchange",children:"Conventions for Use Case Policy in context data exchange"}),"\n",(0,t.jsx)(n.p,{children:"In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined. A set of specific policies on data offering and data usage level detail the conditions under which data may be accessed, shared, and used, ensuring compliance with legal standards."}),"\n",(0,t.jsx)(n.p,{children:"For a comprehensive understanding of the rights, restrictions, and obligations associated with data usage in the Catena-X ecosystem, we refer users to"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the detailed ODRL policy repository. This document provides in-depth explanations of the terms and conditions applied to data access and utilization, ensuring that all engagement with our data is conducted responsibly and in accordance with established guidelines."}),"\n",(0,t.jsx)(n.li,{children:"the ODRL schema template. This defines how policies used for data sharing/usage should get defined. Those schemas MUST be followed when providing services or apps for data sharing/consuming."}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"additional-details-regarding-access-policies",children:"Additional details regarding Access Policies"}),"\n",(0,t.jsx)(n.p,{children:'A Data Provider may tie certain access authorizations ("Access Policies") to its data offers for members of Catena-X and one or several Data Consumers. By limiting access to certain Participants, Data Provider maintains control over its anti-trust obligations when sharing certain data. In particular, Data Provider may apply Access Policies to restrict access to a particular data offer for only one Participant identified by a specific business partner number.'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Membership"}),"\n",(0,t.jsx)(n.li,{children:"BPNL"}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"additional-details-regarding-usage-policies",children:"Additional Details regarding Usage Policies"}),"\n",(0,t.jsx)(n.p,{children:'In the context of data usage policies ("Usage Policies"), Participants and related services MUST use the following policy rules:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Use Case Framework ("FrameworkAgreement")'}),"\n",(0,t.jsx)(n.li,{children:'at least one use case purpose ("UsagePurpose") from the above mentioned ODRL policy repository.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Additionally, respective usage policies MAY include the following policy rule:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Reference Contract ("ContractReference").'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Details on namespaces and ODRL policy rule values to be used for the above-mentioned types are provided via the ODRL policy repository."}),"\n",(0,t.jsx)(n.h5,{id:"versioning",children:"Versioning"}),"\n",(0,t.jsx)(n.p,{children:"Note: Data Assets differentiated only by major version MUST be offered in parallel. The current standard and API versions mark the start of Life Cycle Management in Catena-X operations. Previous versions are dismissed."}),"\n",(0,t.jsxs)(n.p,{children:["The API version described in this standard document MUST be published in the property ",(0,t.jsx)(n.a,{href:"https://w3id.org/catenax/ontology/common#version",children:"https://w3id.org/catenax/ontology/common#version"})," as version X.Y in dcat",":Dataset"," (",(0,t.jsx)(n.a,{href:"http://www.w3.org/ns/dcat#",children:"http://www.w3.org/ns/dcat#"}),"). The requester of an asset MUST be able to handle multiple assets for this endpoint, being differentiated only by the version. The requester SHOULD choose the asset with the highest compatible version number implemented by themselves.\nIf the requester cannot find a compatible version with their own, the requester MUST terminate the data transfer."]}),"\n",(0,t.jsx)(n.h2,{id:"3-aspect-models",children:"3 ASPECT MODELS"}),"\n",(0,t.jsx)(n.p,{children:"In this standard, there are no use case specific Aspect Models required."}),"\n",(0,t.jsx)(n.h2,{id:"4-application-programming-interfaces",children:"4 APPLICATION PROGRAMMING INTERFACES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As the Health Indicator use case is using the Knowledge Agent technology, it provides no onw APIs. Instead, the APIs of the Knowledge Agent are used. Therefore, see CX-0084 Federated Queries in Data Spaces."}),"\n",(0,t.jsx)(n.h2,{id:"5-references",children:"5 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"51-normative-references",children:"5.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["CX-0018",":v3",".0 Dataspace Connectivity"]}),"\n",(0,t.jsxs)(n.li,{children:["CX-0067",":v1",".1 Ontology Models to realize federated query in Catena-X (only if using the Knowledge Agent)"]}),"\n",(0,t.jsxs)(n.li,{children:["CX-0084",":v1",".2 Federated Queries in Data Spaces (Knowledge Agent)"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"52-non-normative-references",children:"5.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},85553:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/architecture_overview_knowledge_agent.drawio-773de837318176804ab10d2ca7bbb0aa.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);