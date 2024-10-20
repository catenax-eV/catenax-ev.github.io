"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[6279],{43790:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(74848),s=i(28453);const a={},r="CX-0072 OSim Process & Core Business Logic v1.0.0",o={id:"standards/CX-0072-OSimProcessAndCoreBusinessLogic/CX-0072-OSimProcessAndCoreBusinessLogic",title:"CX-0072 OSim Process & Core Business Logic v1.0.0",description:"DISCLAIMER REGARDING ONLINE CONTROL AND SIMULATION DATA EXCHANGE",source:"@site/versioned_docs/version-24.03/standards/CX-0072-OSimProcessAndCoreBusinessLogic/CX-0072-OSimProcessAndCoreBusinessLogic.md",sourceDirName:"standards/CX-0072-OSimProcessAndCoreBusinessLogic",slug:"/standards/CX-0072-OSimProcessAndCoreBusinessLogic/",permalink:"/docs/standards/CX-0072-OSimProcessAndCoreBusinessLogic/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0071 Triangle Quality Early Warning Field and Root Cause v2.0.0",permalink:"/docs/standards/CX-0071-TriangleQualityEarlyWarningFieldandRootCause/"},next:{title:"CX-0073 OSim API v1.0.0",permalink:"/docs/standards/CX-0073-OSimAPI/"}},l={},d=[{value:"DISCLAIMER REGARDING ONLINE CONTROL AND SIMULATION DATA EXCHANGE",id:"disclaimer-regarding-online-control-and-simulation-data-exchange",level:2},{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 ARCHITECTURE OVERVIEW",id:"13-architecture-overview",level:3},{value:"1.4 CONFORMANCE",id:"14-conformance",level:3},{value:"1.5 PROOF OF CONFORMITY",id:"15-proof-of-conformity",level:3},{value:"1.6 EXAMPLES",id:"16-examples",level:3},{value:"1.7 TERMINOLOGY",id:"17-terminology",level:3},{value:"2 MAIN CONTENT",id:"2-main-content",level:2},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cx-0072-osim-process--core-business-logic-v100",children:"CX-0072 OSim Process & Core Business Logic v1.0.0"})}),"\n",(0,t.jsx)(n.h2,{id:"disclaimer-regarding-online-control-and-simulation-data-exchange",children:"DISCLAIMER REGARDING ONLINE CONTROL AND SIMULATION DATA EXCHANGE"}),"\n",(0,t.jsx)(n.p,{children:"This document describes and standardizes certain data exchange business processes, data models and/or APIs in connection with Online Control and Simulation (OSim) solution based on the Catena-X data ecosystem. Nothing in this document is meant to determine the contractual terms and conditions for the purchase, supply, delivery or licensing of any products or services among the participants of the OSim data exchange. These terms and conditions are separately negotiated and agreed among suppliers and customers in individual purchase, supply or license agreements. In case of any inconsistencies with the content of this document, the provisions of individual agreements among the participants shall prevail over the content of this document."}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"The simulation results of the Catena-X partners on the lower tier level and logistics, together with data of the company's own operations are fed into the individual simulation model as input. Considering both, plannable and unforeseeable influencing factors, this simulation model is iterated through as often as necessary until an optimal production schedule is reached and a simulation result is created. Sharing of simulation results to the next tier level is the base of the collaborative simulation approach in a short-term horizon, across the complete supply chain."}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This standard is relevant for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Business Application Provider"}),"\n",(0,t.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The MaterialFlowSimulationResult object (see the data model description in OSim Data Model Materialflow Simulation Result) will be sent by OSim partner to another OSim partner on a higher tier level. OSim partner can be a producing company as well as a logistics company.\nEvery MaterialFlowSimulationResult includes information about delivery readiness of packaged material goods, like material identifier, amount, delivery time and destination.\nThe data provider needs to be able to create MaterialFlowSimulationResult and the receiver need to be able to interpret them. The data receiver needs to be able to use the MaterialFlowSimulationResult of lower tier partners as input for its own simulation."}),"\n",(0,t.jsx)(n.p,{children:"This document only describes the structure of the data model in order to exchange simulation result information. Further information regarding processing or the interface will be described in OSim API."}),"\n",(0,t.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Simulation is an important aspect of Supply Chain Management, as it allows a better precision of significance for the ability to deliver. OSim enables the exchange of simulation results between the partners extending the today\u2019s scope of siloed simulations."}),"\n",(0,t.jsx)(n.p,{children:"The core business logic described in this document enables companies to share data in a sovereign way as well as to utilize a common process understanding, ensuring interoperability and enabling the involved parties to achieve the following goals:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Collaborative simulation over the supply chain"}),"\n",(0,t.jsx)(n.li,{children:"Early reaction to delivery problems"}),"\n",(0,t.jsx)(n.li,{children:"Early response to changes in customer requirements"}),"\n",(0,t.jsx)(n.li,{children:"Early consideration of external disturbances/events on the process"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The underlying data model is described and standardized in OSim Data Model Materialflow Simulation Result."}),"\n",(0,t.jsx)(n.h3,{id:"13-architecture-overview",children:"1.3 ARCHITECTURE OVERVIEW"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Architecture Overview",src:i(34127).A+"",width:"902",height:"386"})}),"\n",(0,t.jsx)(n.h3,{id:"14-conformance",children:"1.4 CONFORMANCE"}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams,\nexamples, and notes in this specification are non-normative. Everything else in\nthis specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words ",(0,t.jsx)(n.strong,{children:"MAY"}),", ",(0,t.jsx)(n.strong,{children:"MUST"}),", ",(0,t.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"}),",\n",(0,t.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(n.strong,{children:"SHOULD"})," and ",(0,t.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be\ninterpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they\nappear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"15-proof-of-conformity",children:"1.5 PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are conform\nwith the Catena-X standards. To validate that the standards are applied\ncorrectly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,t.jsx)(n.p,{children:"Any actor participating in the Catena-X OSim use case, MUST implement, and follow the following standards:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The OSim core business logic \u2013 described in this document"}),"\n",(0,t.jsx)(n.li,{children:"The OSim standardized API \u2013 described in the document OSim API"}),"\n",(0,t.jsx)(n.li,{children:"The OSim standardized Data Model \u2013 described in the document OSim Data Model Materialflow Simulation Result"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"16-examples",children:"1.6 EXAMPLES"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Simulationsnetzwerk aus der Perspektive des Unternehmens \u201eWerk-76\u201c",src:i(58118).A+"",width:"977",height:"543"})}),"\n",(0,t.jsx)(n.p,{children:"The example above shows a basic exchange of simulation results in the OSim partner network of the manufacturing company Werk-76."}),"\n",(0,t.jsx)(n.p,{children:"A request is made from Werk-76 to the logistics company Log-07 as to whether a newer simulation result is available. The logistics company Log-07 then transmits directly its latest simulation results to the data recipient Werk-76, filtered to the records relevant to Werk-76. In case no simulation result is currently available, Log-07 sends a dedicated return value to the data consumer."}),"\n",(0,t.jsx)(n.p,{children:"Note: Generally, it is up to the data provider to decide when its own simulation will be run, and with this a new simulation result will be generated. Accordingly, it is always in the hands of data consumer to ask for newer simulation results using the API described in OSim API"}),"\n",(0,t.jsx)(n.p,{children:"Now, taking into account the values received from the direct partners (including the simulation results from LOG-07), the company Werk-76 can run a material flow simulation of its own production, check the results and repeat the simulation if necessary. Subsequently, Werk-76 releases its own simulation results so that they can be queried by the partners of the higher tier level in the supply-chain."}),"\n",(0,t.jsx)(n.h3,{id:"17-terminology",children:"1.7 TERMINOLOGY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Business Partner Number (BPN)\n: A BPN is the unique identifier of a partner within Catena-x"}),"\n",(0,t.jsx)(n.p,{children:"Business Partner Number (BPNL)\n: A BPNL is the unique identifier of a partner within Catena-X, e.g. a company."}),"\n",(0,t.jsx)(n.p,{children:"Business Partner Number (BPNS)\n: A BPNS is the unique identifier of a partner location within Catena-X, e.g. a specific factory of a company."}),"\n",(0,t.jsx)(n.p,{children:"OSim Process & Core Business Logic\n: Shorthand name for the Catena-X Standard: CX-0072  \u2013  OSIM Process & Core Business Logic"}),"\n",(0,t.jsx)(n.p,{children:"OSim Data Model Materialflow Simulation Result\n: Shorthand name for the Catena-X Standard: CX-0087 \u2013 OSim Data Model Materialflow Simulation Result."}),"\n",(0,t.jsx)(n.p,{children:"OSim API\n: Shorthand name for the Catena-X Standard: CX-0073 \u2013 OSim API."}),"\n",(0,t.jsx)(n.p,{children:"Online Control and Simulation (OSim)\n: OSim is a Use Case in Catena-X eco system."}),"\n",(0,t.jsx)(n.p,{children:"MaterialFlowSimulationResult\n: The MaterialFlowSimulationResult is the data model, which describes the structure of the simulation result data exchanged between OSim partners."}),"\n",(0,t.jsx)(n.p,{children:"Note: Typically there is not only one own simulation result available in the single systems of suppliers or logisticians. For this it is RECOMMENDED to introduce in the single systems a state machine, allowing to identify the for publishing relevant status. For example:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Material Flow Simulation Result: State Machine",src:i(66167).A+"",width:"356",height:"204"})}),"\n",(0,t.jsx)(n.p,{children:"Supplier\n: In the context of OSim the Supplier is the producer of goods"}),"\n",(0,t.jsx)(n.p,{children:"Customer\n: In the context of OSim the Customer is the receiver of produced goods by supplier"}),"\n",(0,t.jsx)(n.p,{children:"Logistician\n: In the context of OSim the Logistician transports the produced goods from supplier to the customer"}),"\n",(0,t.jsx)(n.p,{children:"OSim-Network construction and Tier-Levels\n: The following picture depicts a principal construction of a OSim Network from a global perspective (not to be confused with a participant perspective, which is always a limited view to the one-up and one-down levels, logistician disregarded)."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"OSim-Network construction and Tier-Levels",src:i(59551).A+"",width:"949",height:"356"}),"\nIt consists of many tier companies (e.g. S1..S7) on different levels (e.g. Tier-1, Tier-2, Tier-n, Tier-n+1) with logistician companies in between (e.g. L1..L8). Depend on the complexity of the logistics between two producers it is not excluded that more than one logistician are in the chain (e.g. L1 -> L2 or L1 -> L3 -> L4)"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['"Lower tier level" means direction in the network to the left and with this to the suppliers of the raw materials. The following terms are synonymously used with "Lower tier level":',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"Previous level"'}),"\n",(0,t.jsx)(n.li,{children:'"Previous tier level"'}),"\n",(0,t.jsx)(n.li,{children:'"Lower level"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['"Higher tier level" means direction to the OEM. Tier-1 is the highest tier level followed by the OEM. The following terms are synonymously used with "Higher tier level":',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"Next level"'}),"\n",(0,t.jsx)(n.li,{children:'"Next tier level"'}),"\n",(0,t.jsx)(n.li,{children:'"Higher level"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"simulationRunID\n: The simulationRunID is the unique identifier of a simulation result"}),"\n",(0,t.jsx)(n.p,{children:"Aspect Model\n: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from\nan Aspect."}),"\n",(0,t.jsx)(n.p,{children:": Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model."}),"\n",(0,t.jsx)(n.p,{children:": Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing)."}),"\n",(0,t.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the glossary on the association homepage."}),"\n",(0,t.jsx)(n.h2,{id:"2-main-content",children:"2 MAIN CONTENT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Any ",(0,t.jsx)(n.strong,{children:"application provider"})," that develops OSim solutions has to grant the fulfillment of these requirements:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The solution MUST be designed to require a contractual agreement in compliance with antitrust requirements in the usage environment (e.g. data contracts as a prerequisite for carrying out a data exchange). For reference see Chapter 8 and follow EDC (CX-0018) guidelines."}),"\n",(0,t.jsx)(n.li,{children:"The solution MUST be designed to limit visibility and/or access to concrete data content as much as necessary (e.g. data offer does not yet allow data access)."}),"\n",(0,t.jsx)(n.li,{children:"The solution MUST be designed to require the implementation of notice and/or acknowledgement concepts to raise awareness of antitrust issues during use (e.g. helpdesk or pop-up info)."}),"\n",(0,t.jsx)(n.li,{children:"The solution MUST be designed to ensure traceability/reconstructability of processes through appropriate documentation and at the same time data sovereignty over concrete data content (e.g. through access, deletion or destination rights)."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Any ",(0,t.jsx)(n.strong,{children:"customer, supplier and logistician"})," (in following called with \u201call parties\u201d) ",(0,t.jsx)(n.strong,{children:"in the OSim process"})," (i.e. data provider and/or data consumer) MUST fulfil following requirements:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"All parties are in a contractual relationship with parties in the next higher and lower tier levels that they want to exchange data and MUST agree to share data related to OSim."}),"\n",(0,t.jsx)(n.li,{children:"All parties MUST manage the access authorization to a OSim solution and to its related data."}),"\n",(0,t.jsx)(n.li,{children:"All parties in the role of data provider MUST be able to generate (e.g. with simulation tool), and release simulation results."}),"\n",(0,t.jsx)(n.li,{children:"Each data provider MUST have maximum one released simulation result at time"}),"\n",(0,t.jsx)(n.li,{children:"Data providers released simulation results MUST be made accessible by authorized data consumers (e.g. logisticians or customers) of an upper level in the supply chain."}),"\n",(0,t.jsx)(n.li,{children:"All parties in the role of data provider MUST ensure, the authorized data consumers will get data directly relevant to him only."}),"\n",(0,t.jsx)(n.li,{children:"All parties in the role of data consumer MUST be able to request and receive simulation results form the next lower level in the supply chain."}),"\n",(0,t.jsx)(n.li,{children:"The parties SHOULD use received simulation results from lower partners for the own material flow simulation."}),"\n",(0,t.jsx)(n.li,{children:"It is RECOMMENDED to share simulation results of a time window of 2 to 4 weeks, as the aim of OSim is to optimize the short-term simulation."}),"\n",(0,t.jsx)(n.li,{children:"It is RECOMMENDED that each partner uses a professional simulation tool to generate the simulation results, so that the overall data quality can be increased."}),"\n",(0,t.jsx)(n.li,{children:"Alternatively, the OSim partner MAY build simulation results out of detailed planning data (e.g. generate them manually), instead of using simulation tools."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsx)(n.p,{children:"CX-0002 Digital Twins in Catena-X"}),"\n",(0,t.jsx)(n.p,{children:"CX-0003 Semantic Aspect Meta Model"}),"\n",(0,t.jsx)(n.p,{children:"CX-0004 Governance Process for Semantic Models"}),"\n",(0,t.jsx)(n.p,{children:"CX-0018 Eclipse Data Space Connector (EDC)"}),"\n",(0,t.jsx)(n.p,{children:"CX-0001 EDC Discovery API, Version 1.1"}),"\n",(0,t.jsx)(n.p,{children:"CX-0087 OSim Data Model Materialflow Simulation Result"}),"\n",(0,t.jsx)(n.p,{children:"CX-0073 OSim API"}),"\n",(0,t.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"n.a."}),"\n",(0,t.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"n.a."}),"\n",(0,t.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,t.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},66167:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/MaterialFlowSimulationResult-a78d3c481ee5788d1763d1b7dc2861b5.png"},59551:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/TierLevels-7ab419078a9ff762790ce47d9410864b.png"},34127:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/architecture-6a44ff50461429232b735211ddb22808.png"},58118:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/example-3bd1571a5501e5ade4d3bc44b5645179.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);