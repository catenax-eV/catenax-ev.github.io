"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[9673],{40809:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=s(74848),i=s(28453);const a={},o="CX-0055 Data Processing Patterns for IT System Integration v1.2.0",r={id:"standards/CX-0055-DataProcessingPatternsforITSystemIntegration/CX-0055-DataProcessingPatternsforITSystemIntegration",title:"CX-0055 Data Processing Patterns for IT System Integration v1.2.0",description:"ABSTRACT",source:"@site/docs/standards/CX-0055-DataProcessingPatternsforITSystemIntegration/CX-0055-DataProcessingPatternsforITSystemIntegration.md",sourceDirName:"standards/CX-0055-DataProcessingPatternsforITSystemIntegration",slug:"/standards/CX-0055-DataProcessingPatternsforITSystemIntegration/",permalink:"/docs/next/standards/CX-0055-DataProcessingPatternsforITSystemIntegration/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0054 Application Service Release v1.0.1",permalink:"/docs/next/standards/CX-0054-ApplicationServiceRelease/"},next:{title:"CX-0059 Use Case Behaviour Twin Endurance Predictor v2.0.0",permalink:"/docs/next/standards/CX-0059-UseCaseBehaviourTwinEndurancePredictor/"}},c={},d=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 ARCHITECTURE OVERVIEW",id:"13-architecture-overview",level:3},{value:"1.4 CONFORMANCE",id:"14-conformance",level:3},{value:"1.5 PROOF OF CONFORMITY",id:"15-proof-of-conformity",level:3},{value:"2. STANDARDS FOR DATA PROCESSING PATTERNS",id:"2-standards-for-data-processing-patterns",level:2},{value:"2.1 LIST OF STANDALONE STANDARDS",id:"21-list-of-standalone-standards",level:3},{value:"2.2 Implications for certification",id:"22-implications-for-certification",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"ANNEXES",id:"annexes",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cx-0055-data-processing-patterns-for-it-system-integration-v120",children:"CX-0055 Data Processing Patterns for IT System Integration v1.2.0"}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"This document provides specific conformity assessment criteria for IT-System Integration solutions that\nconnect arbitrary backend applications to Catena-X for both, data provisioning and data consumption.\nDepending on the use-case, different standards must be fulfilled for data provisioning and consumption.\nThus, this document is modular and describes criteria for different schemes of data provisioning\nand consumption (so called data processing patterns) in order to enable use case agnostic certification\nof IT-system integration solutions.\nData Providers and Consumers can either implement the set of relevant standard themselves,\nor use a managed solution that implements the standards.\nThis standard is particularly addressing the second case."}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This document is relevant for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enablement Service Provider"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This document is in particular relevant for enablement service providers who are offering a (managed) solution for IT-system integration.\nThose solutions offer the capability to provide data to Catena-X (or consume Catena-X data vice versa) by offering automated data pipelines.\nThis very basic capability provides a cornerstone for different Catena-X use cases."}),"\n",(0,t.jsx)(n.p,{children:"This standard addresses in particular the interfaces which IT-System Integration Solutions expose\nto exchange data with Catena-X.\nFor this standard, offered interfaces need to be compliant to technical standards that are used\nby Catena-X to manage data processing (e.g. EDC, AAS or SAMM).\nThe IT-System Integration Solution itself is out of scope."}),"\n",(0,t.jsx)(n.p,{children:"Furthermore, the document can be used as a guideline for data providers/consumers who want to connect\nbackend systems/middlewares etc.\nwith Catena-X via a custom build setup (without the need of certification in this case)."}),"\n",(0,t.jsx)(n.p,{children:"This document does not contain references to external standards and Catena-X guardrails\nthat need to be fulfilled for the listing of apps into the Catena-X marketplace such as an ISO27001\ncertification or the passing of certain penetration tests.\nNevertheless, IT-System Integration solutions will also need to pass those conformity assessments."}),"\n",(0,t.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Solutions for IT-system integration"})}),"\n",(0,t.jsxs)(n.p,{children:["IT-system integration is one of the major preconditions that companies need to achieve to provide and consume data within the Catena-X ecosystem. Solutions for IT-system integration are pieces of software that help companies to realize the dataflow between company IT-systems and Catena-X, usually by offering support of a wide range of protocols, multiple configuration options and a high degree of automation. To be more precise those solutions in particular address the following capabilities (see ",(0,t.jsx)(n.a,{href:"https://catena-x.net/en/catena-x-introduce-implement/onboarding",children:"Data Integration Pattern Guide"}),"):"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"ETL (e.g. extract, transform and load data from/into backend system)"})}),"\n",(0,t.jsx)(n.li,{children:"Data Persistence (e.g. store data in a data storage solution; Not necessary for architectures based on data virtualization, such as Data Fabric)"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Data Governance (e.g. manage data offers, policies, auditing)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Data Exchange (e.g. provide, discover and consume data)"})}),"\n",(0,t.jsx)(n.li,{children:"Data Exploration & Analysis (e.g. data visualization)"}),"\n",(0,t.jsx)(n.li,{children:"Support capabilities (e.g. monitoring, logging)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Solutions for IT-system integration may comprise all of those capabilities or a subset. However, the capabilities marked as bold constitute the core functions to achieve a working data integration.\nSince it is now clarified how \u201csolutions for IT-system integrations\u201d are defined in this document it will now be highlighted in which scenarios for technical onboarding those services can be used."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Technical onboarding scenarios addressed in this standard"})}),"\n",(0,t.jsx)(n.p,{children:"Data exchange in Catena-X can be done in multiple ways with different implications on IT-System Integration Solutions and certification. Figure 1 gives a good starting point for this analysis. It depicts an extract of official onboarding guidance of Catena-X e.V.  which introduces four scenarios for data exchange:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Slide1.jpg",src:s(51894).A+"",width:"1280",height:"720"})}),"\n",(0,t.jsxs)(n.p,{children:["Figure 1: ",(0,t.jsx)(n.a,{href:"https://catena-x.net/en/catena-x-introduce-implement/onboarding",children:"Technical onboarding scenarios"})]}),"\n",(0,t.jsx)(n.p,{children:"Scenario 1 (\u201cBusiness App\u201d) assumes that companies want to take part in Catena-X use-cases via utilizing specific apps of an app provider. Those apps provide comprehensive business functions, e.g. for visualization, user-guidance (wizards etc.) or reporting. Those apps either provide their own IT-System Integration Solution or can be combined with a solution offered by a third party. E.g. a product passport app that provides a frontend for visualizing the passport data model is combined with an IT-System Integration Solution to extract the pass data from various backend systems, such as ERP, PLM etc.."}),"\n",(0,t.jsx)(n.p,{children:"Scenario 2 (\u201cUC-Integrated\u201d) also targets participating in a Catena-X use case but without using a business app. In this case the solution for IT-system integration is used to create data offers and to consume data according to the applicable standards of the Catena-X use case.  No additional use-case specific business logic and/or frontend is provided."}),"\n",(0,t.jsx)(n.p,{children:"Scenario 3 (\u201cFile Based\u201d) equals Scenario 2 with the exception that the data doesn\u2019t come directly from company IT-systems. In this case data is provided via files that adhere to the format of given use-case specific semantic models. Solutions for IT-system integration may also provide this function as an additional way to provide data."}),"\n",(0,t.jsx)(n.p,{children:"Scenario 4 (\u201cSelf P2P\u201d) is a custom bilateral data exchange scenario with no standardized semantics or reference to an existing use case. In this case companies are free to choose which standards and capabilities of Catena-X they use. Depending on the concrete data exchange scenario and the standards to be used, Solutions for IT-system integration may be beneficial (by keeping in mind that custom use cases are not certifiable)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Catena-X Data Processing Patterns"})}),"\n",(0,t.jsx)(n.p,{children:"The last paragraph showed the wide range of scenarios how IT-system integration solutions can be used. One particular challenge in this context is to bridge the heterogenous standards that are used by the different Catena-X use cases. From the perspective of companies participating in the network this complexity should be shielded away as far as possible to allow better uptake (in particular for SME)."}),"\n",(0,t.jsx)(n.p,{children:'To achieve a better overview how different use cases organize data transfer they can be clustered into groups. One Catena-X use case may require a combination of EDC, AAS and SAMM while another Catena-X use case may only utilize EDC or Knowledge Agents to handle data exchange between companies. Those alternative combinations of standards for data processing are defined as "Data Processing Patterns" in the scope of this document.'}),"\n",(0,t.jsx)(n.p,{children:"If IT-system integration solutions address these patterns they can be considered as use case agnostic for the specific patterns they are certified against. This means from a technical viewpoint, by looking at the most fundamental functions of data provisioning or consumption, it doesn\u2019t make a difference if for example a battery pass or some specific BOM or part information is exchanged. If the underlying data processing pattern is the same, the only difference between use cases is the type of semantic model used for standardizing the data to be shared. To make sure that the correct model is utilized, enablement service providers typically provide exhaustive functions for semantic model management that allow importing or automatically import Catena-X semantic models."}),"\n",(0,t.jsx)(n.p,{children:"In some examples use cases deviate from the pattern logic by introducing use case APIs (e.g. request/response API for Product Carbon Footprint exchange use case). Those use cases will require additional effort for certification as app provider. However, also in this case a certification against the standard described in this document (CX0055) should be highly useful as it already proves standards that are part of certification of every business app. That means the delta to certify as app provider becomes smaller by only proving use-case specific standards on top of this certification."}),"\n",(0,t.jsx)(n.h3,{id:"13-architecture-overview",children:"1.3 ARCHITECTURE OVERVIEW"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Figure 2 gives an idea about the scope of conformity assessment for IT-System Integration solutions in Catena-X. The data source/sink refers to a company IT landscape.\nThus, it can comprise one IT-system, (such as ERP or PLM) or multiple systems, data lakes etc.\nTo make this data accessible for Catena-X (or vice versa to write Catena-X data into backend systems)\na dedicated tool or toolchain is necessary.\nSince IT-architectures and IT-System Integration solutions vary significantly between different companies,\nno standard can be applied here (see also ",(0,t.jsx)(n.a,{href:"https://catena-x.net/en/catena-x-introduce-implement/onboarding",children:"Data Integration Pattern Guide"})," on Catena-X website for further information).\nThus, conformity assessment for IT-System Integration solutions focuses on requirements for data formats, and data transfer protocols (Catena-X interface, see Figure 2 marked in blue).\nThe IT-System Integration solution itself is out of scope for this standard."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"backend-solutions-arch.png",src:s(55366).A+"",width:"614",height:"206"})}),"\n",(0,t.jsx)(n.p,{children:"Figure 2: Scope of conformity assessment - Catena-X interface for IT-System Integration solutions"}),"\n",(0,t.jsx)(n.h3,{id:"14-conformance",children:"1.4 CONFORMANCE"}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes\nin this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words ",(0,t.jsx)(n.strong,{children:"MAY"}),", ",(0,t.jsx)(n.strong,{children:"MUST"}),", ",(0,t.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,t.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(n.strong,{children:"SHOULD"}),"\nand ",(0,t.jsx)(n.strong,{children:"SHOULD NOT"})," in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]\nwhen, and only when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"15-proof-of-conformity",children:"1.5 PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are conform with the Catena-X standards.\nTo validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).\nPlease refer to the association homepage for the process of conformity assessment and certification."}),"\n",(0,t.jsx)(n.p,{children:"Enablement Service Providers need to show compliance of System Integration Solutions to data processing patterns in order to receive certification for Catena-X use cases (that utilize respective patterns)."}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use case A (e.g. Eco Pass) and use case B (e.g. Circularity -  CE Assistant) utilize Data Processing Pattern 1 (e.g.  combination of EDC, SAMM and AAS)"}),"\n",(0,t.jsx)(n.li,{children:"IT-System Integration Solution X is certified against Data Processing Pattern 1"}),"\n",(0,t.jsx)(n.li,{children:"As a result of the certification, Backend Integration Solution X can be utilized for use cases A and B."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To proof the overall conformity of an IT-System Integration solution for Catena-X use-cases, a proof of conformity for standards belonging to a specific Data Processing Pattern (listed in section 2) has to be obtained."}),"\n",(0,t.jsx)(n.h2,{id:"2-standards-for-data-processing-patterns",children:"2. STANDARDS FOR DATA PROCESSING PATTERNS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This chapter describes possible ways for providing data for Catena-X (and to consume it respectively).\nIT-System Integration solutions MUST fulfill the standards for at least one Data Processing Pattern in order to obtain a certificate for this standard.\nThe certificate issued by CAB MUST specify for which data processing pattern(s) the IT-System Integration solution was successfully evaluated in the certification process. The IT-System Integration solution can then only be utilized for Catena-X use case applications that make use of the specific Data Processing Patterns that were in scope of certification."}),"\n",(0,t.jsx)(n.p,{children:"Figure 3 gives an overview about currently available Data Processing Patterns. The following section introduces each pattern and corresponding standards to be considered. This list will be extended as soon as new patterns emerge and respective Catena-X standards are available."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Overview Patterns",src:s(81465).A+"",width:"3779",height:"3463"}),"\nFigure 3: Catena-X Data Processing Patterns - Overview"]}),"\n",(0,t.jsx)(n.h3,{id:"21-list-of-standalone-standards",children:"2.1 LIST OF STANDALONE STANDARDS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normantive"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Data Processing Pattern 0 (File-based, EDC-only)"}),": All solutions that shall be used for data provisioning/data consumption for use-cases using only use EDC MUST implement the following standards:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CX-0001 EDC Discovery API"}),"\n",(0,t.jsx)(n.li,{children:"CX-0003 SAMM Aspect Meta Model"}),"\n",(0,t.jsx)(n.li,{children:"CX-0018 Dataspace Connectivity"}),"\n",(0,t.jsx)(n.li,{children:"CX-0050 Framework Agreement Credential"}),"\n",(0,t.jsx)(n.li,{children:"CX-0053 BPN Discovery Services"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This includes, but is not limited to the following use-cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Quality"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Data Processing Pattern 1 (Asset Administration Shell)"}),": All solutions that shall be used for data provisioning/data consumption for use-cases using SAMM and AAS MUST implement the following standards:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CX-0001 EDC Discovery API"}),"\n",(0,t.jsx)(n.li,{children:"CX-0002 Digital Twins in Catena-X"}),"\n",(0,t.jsx)(n.li,{children:"CX-0003 SAMM Aspect Meta Model"}),"\n",(0,t.jsx)(n.li,{children:"CX-0012 Business Partner Data Pool API"}),"\n",(0,t.jsx)(n.li,{children:"CX-0018 Dataspace Connectivity"}),"\n",(0,t.jsx)(n.li,{children:"CX-0050 Framework Agreement Credential"}),"\n",(0,t.jsx)(n.li,{children:"CX-0053 BPN Discovery Services"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This includes, but is not limited to the following use cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Industry Core \u2013 Part Type/Part Instance"}),"\n",(0,t.jsx)(n.li,{children:"Circularity \u2013 CE Assistant"}),"\n",(0,t.jsx)(n.li,{children:"Circularity \u2013 Secondary Material Content"}),"\n",(0,t.jsx)(n.li,{children:"Circularity \u2013 EOL/ Dismantling Services"}),"\n",(0,t.jsx)(n.li,{children:"PURIS"}),"\n",(0,t.jsx)(n.li,{children:"Eco Pass"}),"\n",(0,t.jsx)(n.li,{children:"Demand and Capacity Management (AAS API)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note: As Data Processing Pattern 1 contains all standards of Data Processing Pattern 0, solutions are automatically certified for both patterns if Data Processing Pattern 1 is certified."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Data Processing Pattern 2 (Knowledge Agents)"}),": All solutions that shall be used for data provisioning/data consumption for use-cases using Knowledge Agents MUST implement the following standards:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CX-0001 EDC Discovery API"}),"\n",(0,t.jsx)(n.li,{children:"CX-0012 Business Partner Data Pool API"}),"\n",(0,t.jsx)(n.li,{children:"CX-0018 Dataspace Connectivity"}),"\n",(0,t.jsx)(n.li,{children:"CX-0050 Framework Agreement Credential"}),"\n",(0,t.jsx)(n.li,{children:"CX-0053 BPN Discovery Services"}),"\n",(0,t.jsx)(n.li,{children:"CX-0067 Ontology Models to realize federated query in Catena-X"}),"\n",(0,t.jsx)(n.li,{children:"CX-0084 Federated Queries in Data Spaces"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This includes, but is not limited to the following use-cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Behavior Twin (Remaining Useful Life, Health Indicator, Endurance Predictor)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Data Processing Pattern 3 (Use Case-specific API)"}),": Some use cases specify individual APIs that are used for data transfer. Those individual use case implementations are out of scope for this standard. However, since some API-based use cases are based on Data Processing Patterns 0 and 1, certification against those patterns decreases effort for certification as Business Application Provider."]}),"\n",(0,t.jsx)(n.p,{children:"This includes, but is not limited to the following use-cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Traceability (if Notification API shall be used)"}),"\n",(0,t.jsx)(n.li,{children:"Sustainability PCF (combination with Data Processing Pattern 1)"}),"\n",(0,t.jsx)(n.li,{children:"Circularity \u2013 Asset Tracking"}),"\n",(0,t.jsx)(n.li,{children:"OSIM"}),"\n",(0,t.jsx)(n.li,{children:"MAAS"}),"\n",(0,t.jsx)(n.li,{children:"Modular Production"}),"\n",(0,t.jsx)(n.li,{children:"Endurance Estimator"}),"\n",(0,t.jsx)(n.li,{children:"Demand and Capacity Management (if not choosing AAS API)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"22-implications-for-certification",children:"2.2 Implications for certification"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Data Processing Patterns 0-2 address use case agnostic standards. Therefore, those patterns and use cases that are powered by these patterns MAY be covered in a generic way by IT-System integration solutions (e.g via providing functions for data provisioning and data consumption) without the necessity of a dedicated business app and additional individual certification for this use case (onboarding scenarios 2-4, see Figure 1)."}),"\n",(0,t.jsx)(n.p,{children:"Data Processing Pattern 3 addresses use case specific APIs and therefore MUST be certified for each use case as \u201cBusiness Application Provider\u201d (onboarding scenario 1, see Figure 1)."}),"\n",(0,t.jsx)(n.p,{children:"In general, Data Processing Patterns focus on distinguishing repetitive, use case agnostic schemes from use case specific implementations. This is also true for semantics which are generically defined via semantic modelling standards."}),"\n",(0,t.jsx)(n.p,{children:"Providers of solutions for IT-System integration MUST prove that they are able to automatically import semantic models based on the standards CX-0003 or CX-0067 (depending on considered pattern), e.g. via a dedicated model management function. In this case the user is responsible to select the correct model that fits to the current release of a use case. If this is proven, a dedicated content-wise evaluation of semantic models by CAB for each use case is therefore NOT REQUIRED."}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CX-0001 EDC Discovery API v.1.0.2"}),"\n",(0,t.jsx)(n.li,{children:"CX-0002 Digital Twins in Catena-X v.2.0.0"}),"\n",(0,t.jsx)(n.li,{children:"CX-0003 SAMM Aspect Meta Model v.1.1.0"}),"\n",(0,t.jsx)(n.li,{children:"CX-0012 Business Partner Data Pool API v.4.0.0"}),"\n",(0,t.jsx)(n.li,{children:"CX-0018 Dataspace Connectivity v.3.1.0"}),"\n",(0,t.jsx)(n.li,{children:"CX-0050 Framework Agreement Credential 2.1.0"}),"\n",(0,t.jsx)(n.li,{children:"CX-0053 BPN Discovery Services v.1.1.0"}),"\n",(0,t.jsx)(n.li,{children:"CX-0067 Ontology Models to realize federated query in Catena-X v.1.1.0"}),"\n",(0,t.jsx)(n.li,{children:"CX-0084 Federated Queries in Data Spaces v1.2.0"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"annexes",children:"ANNEXES"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},81465:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Overview_Patterns-cfd0d6f0534c923fc9f55c7c7eff134d.png"},51894:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Slide1-0c8454d58fd38e1711996715937afe99.jpg"},55366:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/backend-solutions-arch-b7ccc942fe46d8c2fae083125fef66c1.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(96540);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);