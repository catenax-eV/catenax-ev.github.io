"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[6655],{39834:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=n(74848),a=n(28453);const s={},l="CX-0087 OSim Data Model: Materialflow Simulation Result v1.0.0",o={id:"standards/CX-0087-OSimDataModelMaterialFlowSimulationResult/CX-0087-OSimDataModelMaterialFlowSimulationResult",title:"CX-0087 OSim Data Model: Materialflow Simulation Result v1.0.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0087-OSimDataModelMaterialFlowSimulationResult/CX-0087-OSimDataModelMaterialFlowSimulationResult.md",sourceDirName:"standards/CX-0087-OSimDataModelMaterialFlowSimulationResult",slug:"/standards/CX-0087-OSimDataModelMaterialFlowSimulationResult/",permalink:"/docs/standards/CX-0087-OSimDataModelMaterialFlowSimulationResult/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0086 PURIS Product Stock Exchange API v1.0.0",permalink:"/docs/standards/CX-0086-PurisProductStockExchangeAPI/"},next:{title:"CX-0088 Aspect Model: User Estimated Loading v1.0.0",permalink:"/docs/standards/CX-0088-AspectModelUserEstimatedLoading/"}},r={},d=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 ARCHITECTURE OVERVIEW",id:"13-architecture-overview",level:3},{value:"1.4 CONFORMANCE",id:"14-conformance",level:3},{value:"1.5 PROOF OF CONFORMITY",id:"15-proof-of-conformity",level:3},{value:"1.6 EXAMPLES",id:"16-examples",level:3},{value:"1.6 TERMINOLOGY",id:"16-terminology",level:3},{value:"2 ASPECT MODEL \u201cMaterialFlowSimulationResult\u201d",id:"2-aspect-model-materialflowsimulationresult",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 NORMATIVE CRITERIA",id:"22-normative-criteria",level:3},{value:"2.3 SPECIFICATION ARTIFACTS",id:"23-specification-artifacts",level:3},{value:"2.4 LICENSE",id:"24-license",level:3},{value:"2.5 IDENTIFER OF SEMANTIC MODEL",id:"25-identifer-of-semantic-model",level:3},{value:"2.6 FORMATS OF SEMANTIC MODEL",id:"26-formats-of-semantic-model",level:3},{value:"2.6.1 RDF Turtle",id:"261-rdf-turtle",level:4},{value:"2.6.2 JSON Schema",id:"262-json-schema",level:4},{value:"2.6.3 aasx",id:"263-aasx",level:4},{value:"2.7 SEMANTIC MODEL",id:"27-semantic-model",level:3},{value:"2.8 EDC DATA ASSET STRUCTURE",id:"28-edc-data-asset-structure",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"cx-0087-osim-data-model-materialflow-simulation-result-v100",children:"CX-0087 OSim Data Model: Materialflow Simulation Result v1.0.0"})}),"\n",(0,t.jsx)(i.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(i.p,{children:"The simulation results of the Catena-X partners on the lower tier level and logistics, together with data of the company's own operations are fed into the individual simulation model as input. Considering both, plannable and unforeseeable influencing factors, this simulation model is iterated through as often as necessary until an optimal production schedule is reached and a simulation result is created. Sharing of simulation results to the next tier level is the base of the collaborative simulation approach in a short-term horizon, across the complete supply chain."}),"\n",(0,t.jsx)(i.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,t.jsx)(i.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This standard is relevant for:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Business Application Provider"}),"\n",(0,t.jsx)(i.li,{children:"Data Provider / Consumer"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The MaterialFlowSimulationResult object will be send by OSim partner to another OSim partner on a higher tier level. OSim partner can be a producing company as well as a logistics company.\nEvery MaterialFlowSimulationResult includes information about delivery readiness of packaged material goods, like material identifier, amount, delivery time and destination.\nThe data provider needs to be able to create MaterialFlowSimulationResult and the receiver need to be able to interpret them. The data receiver needs to be able to use the MaterialFlowSimulationResult of lower tier partners as input for its own simulation."}),"\n",(0,t.jsx)(i.p,{children:"The underlying business process is described and standardized in OSim Process & Core Business Logic."}),"\n",(0,t.jsx)(i.p,{children:"This document only describes the structure of the data model in order to exchange simulation result information. Further information regarding processing or the interface will be described in OSim API."}),"\n",(0,t.jsx)(i.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This standardization defines the MaterialFlowSimulationResult data model for the Catena-X network. This standard ensures that the MaterialFlowSimulationResult information can be consumed through the Catena-X network by all OSim partners and ensures, that the data objects from different OSim partner can be handled and interpreted in an identical manner."}),"\n",(0,t.jsx)(i.p,{children:"In this document the MaterialFlowSimulationResult data model is described and standardized to ensure a consistent data exchange structure within the OSim participants. Thereby an identical interpretation of the data across companies is ensured."}),"\n",(0,t.jsx)(i.p,{children:"The underlying business process is described and standardized in OSim Process & Core Business Logic."}),"\n",(0,t.jsx)(i.h3,{id:"13-architecture-overview",children:"1.3 ARCHITECTURE OVERVIEW"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Architecture Overview",src:n(11917).A+"",width:"902",height:"386"})}),"\n",(0,t.jsx)(i.p,{children:"The MaterialFlowSimulationResult is a JSON string which is send trough EDC."}),"\n",(0,t.jsx)(i.h3,{id:"14-conformance",children:"1.4 CONFORMANCE"}),"\n",(0,t.jsx)(i.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams,\nexamples, and notes in this specification are non-normative. Everything else in\nthis specification is normative."}),"\n",(0,t.jsxs)(i.p,{children:["The key words ",(0,t.jsx)(i.strong,{children:"MAY"}),", ",(0,t.jsx)(i.strong,{children:"MUST"}),", ",(0,t.jsx)(i.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(i.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(i.strong,{children:"RECOMMENDED"}),",\n",(0,t.jsx)(i.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(i.strong,{children:"SHOULD"})," and ",(0,t.jsx)(i.strong,{children:"SHOULD NOT"})," in this document document are to be\ninterpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they\nappear in all capitals, as shown here."]}),"\n",(0,t.jsx)(i.h3,{id:"15-proof-of-conformity",children:"1.5 PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"All participants and their solutions will need to prove, that they are conform\nwith the Catena-X standards. To validate that the standards are applied\ncorrectly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,t.jsx)(i.p,{children:"The proof of conformity for a single semantic model is done according to the general rules for\nproving the conformity of data provided to a semantic model or the ability to consume the\ncorresponding data."}),"\n",(0,t.jsx)(i.h3,{id:"16-examples",children:"1.6 EXAMPLES"}),"\n",(0,t.jsx)(i.p,{children:"In this chapter, examples for the MaterialFlowSimulationResult JSON are listed for reference."}),"\n",(0,t.jsx)(i.p,{children:"The following data set shows an example for a MaterialFlowSimulationResult which will be sent to the endpoint receiveLatestSimulationResult."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  "owner": { "id": "BPNL00000007OTZ3" },\n  "dataQuality": 1,\n  "description": "Daily standard simulation",\n  "comment": "successful simulation",\n  "expirationTimestamp": "2023-03-24T09:15:24.000Z",\n  "runId": "0fece48b-c8d1-4180-1a9caca6d67e",\n  "shipments": [\n    {\n      "handlingUnits": [\n        {\n          "name": "Palette",\n          "volume": 1,\n          "weight": 189,\n          "batches": [\n            {\n              "unitOfMeasurement": "KG",\n              "materialName": "KK1000GR-Geh\xe4use-Rot",\n              "quantity": 50,\n              "materialNumber": "KK1000GR",\n              "batchOrderId": "Order-0001",\n              "batchId": "Batch_1",\n              "hazardousGoods": false,\n              "batchExpirationTimestamp": "2023-08-22T16:00:00.000Z",\n              "batchNumber": "45"\n            }\n          ],\n          "handlingUnitId": "HUT_1",\n          "amount": 1\n        }\n      ],\n      "shipmentId": "DE51515151",\n      "recipientTimestampPlanned": "2023-04-19T09:00:00.000Z",\n      "destination": { "id": "BPNL00000007OTZ3" },\n      "recipient": { "id": "BPNL00000007OTZ4" },\n      "logistics": { "id": "BPNL00000007OS0H" },\n      "preceding": {},\n      "splittingAllowed": true,\n      "destinationTimestamp": "2023-03-19T09:00:00.000Z"\n    }\n  ],\n  "timestamp": "2023-03-09T14:13:42.806Z"\n}\n'})}),"\n",(0,t.jsx)(i.h3,{id:"16-terminology",children:"1.6 TERMINOLOGY"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Business Partner Number (BPN)\n: A BPN is the unique identifier of a partner within Catena-x"}),"\n",(0,t.jsx)(i.p,{children:"Business Partner Number (BPNL)\n: A BPNL is the unique identifier of a partner within Catena-X, e.g. a company."}),"\n",(0,t.jsx)(i.p,{children:"Business Partner Number (BPNS)\n: A BPNS is the unique identifier of a partner location within Catena-X, e.g. a specific factory of a company."}),"\n",(0,t.jsx)(i.p,{children:"OSim Process & Core Business Logic\n: Shorthand name for the Catena-X Standard: CX-0072  \u2013  OSIM Process & Core Business Logic"}),"\n",(0,t.jsx)(i.p,{children:"OSim Data Model Materialflow Simulation Result\n: Shorthand name for the Catena-X Standard: CX-0087 \u2013 OSim Data Model Materialflow Simulation Result."}),"\n",(0,t.jsx)(i.p,{children:"OSim API\n: Shorthand name for the Catena-X Standard: CX-0073 \u2013 OSim API."}),"\n",(0,t.jsx)(i.p,{children:"Online Control and Simulation (OSim)\n: OSim is a Use Case in Catena-X eco system."}),"\n",(0,t.jsx)(i.p,{children:"MaterialFlowSimulationResult\n: The MaterialFlowSimulationResult is the data model, which describes the structure of the simulation result data exchanged between OSim partners."}),"\n",(0,t.jsx)(i.p,{children:"Note: Typically there is not only one own simulation result available in the single systems of suppliers or logisticians. For this it is RECOMMENDED to introduce in the single systems a state machine, allowing to identify the for publishing relevant status. For example:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Material Flow Simulation Result: State Machine",src:n(60976).A+"",width:"356",height:"204"})}),"\n",(0,t.jsx)(i.p,{children:"Supplier\n: In the context of OSim the Supplier is the producer of goods"}),"\n",(0,t.jsx)(i.p,{children:"Customer\n: In the context of OSim the Customer is the receiver of produced goods by supplier"}),"\n",(0,t.jsx)(i.p,{children:"Logistician\n: In the context of OSim the Logistician transports the produced goods from supplier to the customer"}),"\n",(0,t.jsx)(i.p,{children:"OSim-Network construction and Tier-Levels\n: The following picture depicts a principal construction of a OSim Network from a global perspective (not to be confused with a participant perspective, which is always a limited view to the one-up and one-down levels, logistician disregarded)."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"OSim-Network construction and Tier-Levels",src:n(27376).A+"",width:"949",height:"356"}),"\nIt consists of many tier companies (e.g. S1..S7) on different levels (e.g. Tier-1, Tier-2, Tier-n, Tier-n+1) with logistician companies in between (e.g. L1..L8). Depend on the complexity of the logistics between two producers it is not excluded that more than one logistician are in the chain (e.g. L1 -> L2 or L1 -> L3 -> L4)"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:['"Lower tier level" means direction in the network to the left and with this to the suppliers of the raw materials. The following terms are synonymously used with "Lower tier level":',"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'"Previous level"'}),"\n",(0,t.jsx)(i.li,{children:'"Previous tier level"'}),"\n",(0,t.jsx)(i.li,{children:'"Lower level"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:['"Higher tier level" means direction to the OEM. Tier-1 is the highest tier level followed by the OEM. The following terms are synonymously used with "Higher tier level":',"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'"Next level"'}),"\n",(0,t.jsx)(i.li,{children:'"Next tier level"'}),"\n",(0,t.jsx)(i.li,{children:'"Higher level"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"simulationRunID\n: The simulationRunID is the unique identifier of a simulation result"}),"\n",(0,t.jsx)(i.p,{children:"Aspect Model\n: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from\nan Aspect."}),"\n",(0,t.jsx)(i.p,{children:": Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model."}),"\n",(0,t.jsx)(i.p,{children:": Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing)."}),"\n",(0,t.jsx)(i.p,{children:"Additional terminology used in this standard can be looked up in the glossary on the association homepage."}),"\n",(0,t.jsx)(i.h2,{id:"2-aspect-model-materialflowsimulationresult",children:"2 ASPECT MODEL \u201cMaterialFlowSimulationResult\u201d"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The MaterialFlowSimulationResult information MUST be sent between OSim participants by EDC.\nThe data format described here MUST be followed."}),"\n",(0,t.jsx)(i.p,{children:"The MaterialFlowSimulationResult data model MUST be implemented by all participants who wish to participate in the Catena-X OSim network as a customer, supplier or logistician."}),"\n",(0,t.jsx)(i.p,{children:"Companies, who participate in the Catena-X OSim Network as a supplier MUST be able to send MaterialFlowSimulationResult information."}),"\n",(0,t.jsx)(i.p,{children:"Companies, who participate in the Catena-X OSim Network as a customer MUST be able to receive MaterialFlowSimulationResult information."}),"\n",(0,t.jsx)(i.p,{children:"Companies who participate in the Catena-X Network as a supplier and as a customer MUST be able to receive and send MaterialFlowSimulationResult information."}),"\n",(0,t.jsx)(i.p,{children:"Companies who participate in the Catena-X Network as a logistician MUST be able to receive and send MaterialFlowSimulationResult information."}),"\n",(0,t.jsx)(i.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,t.jsx)(i.h3,{id:"22-normative-criteria",children:"2.2 NORMATIVE CRITERIA"}),"\n",(0,t.jsx)(i.p,{children:"Every data provider of simulation result data MUST provide the data conforming to the semantic model specified in this document."}),"\n",(0,t.jsx)(i.p,{children:"The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred."}),"\n",(0,t.jsx)(i.p,{children:"Every certified business application relying on simulation result data MUST be able to consume data conformant to the semantic model specified in this document."}),"\n",(0,t.jsx)(i.p,{children:"Data consumers and data provider MUST comply with the license of the semantic model."}),"\n",(0,t.jsx)(i.p,{children:"In the Catena-X data space simulation result data MUST be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002."}),"\n",(0,t.jsx)(i.p,{children:"The JSON Payload of data providers MUST be conformant to the JSON Schema as specified in this document."}),"\n",(0,t.jsx)(i.h3,{id:"23-specification-artifacts",children:"2.3 SPECIFICATION ARTIFACTS"}),"\n",(0,t.jsxs)(i.p,{children:['The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification ',(0,t.jsx)(i.a,{href:"#32-non-normative-references",children:"SMT"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003\nas input for the semantic deriven workflow."}),"\n",(0,t.jsx)(i.p,{children:"Like all Catena-X data models, this model is available in a machine-readable format on GitHub\nconformant to CX-0003."}),"\n",(0,t.jsx)(i.h3,{id:"24-license",children:"2.4 LICENSE"}),"\n",(0,t.jsx)(i.p,{children:"This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0\nInternational (CC-BY-4.0) license, which is available at Creative Commons."}),"\n",(0,t.jsx)(i.h3,{id:"25-identifer-of-semantic-model",children:"2.5 IDENTIFER OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(i.p,{children:"The semantic model has the unique identifier"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-text",children:"    urn:bamm.io.catenax.material_flow_simulation_result:1.0.0\n"})}),"\n",(0,t.jsx)(i.p,{children:"This identifier MUST be used by the data provider to define the semantics of the data being transferred."}),"\n",(0,t.jsx)(i.h3,{id:"26-formats-of-semantic-model",children:"2.6 FORMATS OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(i.h4,{id:"261-rdf-turtle",children:"2.6.1 RDF Turtle"}),"\n",(0,t.jsx)(i.p,{children:"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating\nadditional file formats and serializations."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-text",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.material_flow_simulation_result/1.0.0/MaterialFlowSimulationResult.ttl\n"})}),"\n",(0,t.jsx)(i.p,{children:"The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation\nof other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel\nTemplate or a HTML documentation."}),"\n",(0,t.jsx)(i.h4,{id:"262-json-schema",children:"2.6.2 JSON Schema"}),"\n",(0,t.jsx)(i.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only\npayload of the Asset Administration Shell for the API operation "GetSubmodel".'}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-text",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.material_flow_simulation_result/1.0.0/gen/MaterialFlowSimulationResult-schema.json\n"})}),"\n",(0,t.jsx)(i.h4,{id:"263-aasx",children:"2.6.3 aasx"}),"\n",(0,t.jsxs)(i.p,{children:["An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested\nartifacts for a Submodel Template Specification conformant to [",(0,t.jsx)(i.a,{href:"#32-non-normative-references",children:"SMT"}),"]."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-text",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.material_flow_simulation_result/1.0.0/gen/MaterialFlowSimulationResult.aasx\n"})}),"\n",(0,t.jsx)(i.h3,{id:"27-semantic-model",children:"2.7 SEMANTIC MODEL"}),"\n",(0,t.jsx)(i.p,{children:"For properties see the schema description of the model."}),"\n",(0,t.jsx)(i.h3,{id:"28-edc-data-asset-structure",children:"2.8 EDC DATA ASSET STRUCTURE"}),"\n",(0,t.jsx)(i.p,{children:"The EDC Policies for the MaterialFlowSimulationResult are standardize in the standard CX-OSIM-PROCESS. The rules in that standard MUST be observed."}),"\n",(0,t.jsx)(i.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(i.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsx)(i.p,{children:"CX-0002 Digital Twins in Catena-X"}),"\n",(0,t.jsx)(i.p,{children:"CX-0003 Semantic Aspect Meta Model"}),"\n",(0,t.jsx)(i.p,{children:"CX-0004 Governance Process for Semantic Models"}),"\n",(0,t.jsx)(i.p,{children:"CX-0018 Eclipse Data Space Connector (EDC)"}),"\n",(0,t.jsx)(i.p,{children:"CX-0001 EDC Discovery API, Version 1.1"}),"\n",(0,t.jsx)(i.p,{children:"CX-0072 OSim Process & Core Business Logic"}),"\n",(0,t.jsx)(i.p,{children:"CX-0073 OSim API"}),"\n",(0,t.jsx)(i.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["[SMT]  How to create a submodel template specification. Guideline. Download from: ",(0,t.jsx)(i.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf"})]}),"\n",(0,t.jsx)(i.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,t.jsx)(i.h3,{id:"figures",children:"FIGURES"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"tables",children:"TABLES"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(i.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(i.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},60976:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/MaterialFlowSimulationResult-a78d3c481ee5788d1763d1b7dc2861b5.png"},27376:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/TierLevels-7ab419078a9ff762790ce47d9410864b.png"},11917:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/architectureOverview-6a44ff50461429232b735211ddb22808.png"},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var t=n(96540);const a={},s=t.createContext(a);function l(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);