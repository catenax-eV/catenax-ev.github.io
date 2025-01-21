"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[86148],{29361:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"standards/CX-0038-AspectModelFleetDiagnosticData/CX-0038-AspectModelFleetDiagnosticData","title":"CX-0038 Aspect Model: Fleet Diagnostic Data v1.0.2","description":"1. Introduction","source":"@site/versioned_docs/version-24.03/standards/CX-0038-AspectModelFleetDiagnosticData/CX-0038-AspectModelFleetDiagnosticData.md","sourceDirName":"standards/CX-0038-AspectModelFleetDiagnosticData","slug":"/standards/CX-0038-AspectModelFleetDiagnosticData/","permalink":"/docs/24.03/standards/CX-0038-AspectModelFleetDiagnosticData/","draft":false,"unlisted":false,"tags":[],"version":"24.03","frontMatter":{},"sidebar":"sidebar_standards","previous":{"title":"CX-0037 Aspect Model: Vehicle Product Description v2.0.1","permalink":"/docs/24.03/standards/CX-0037-AspectModelVehicleProductDescription/"},"next":{"title":"CX-0039 Aspect Model: Fleet Claim Data v1.0.1","permalink":"/docs/24.03/standards/CX-0039-AspectModelFleetClaimData/"}}');var i=t(74848),o=t(28453);const s={},r="CX-0038 Aspect Model: Fleet Diagnostic Data v1.0.2",l={},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Audience &amp; Scope",id:"11-audience--scope",level:3},{value:"1.2 Context",id:"12-context",level:3},{value:"1.3 Conformance",id:"13-conformance",level:3},{value:"1.4 Proof of conformity",id:"14-proof-of-conformity",level:3},{value:"1.5 Terminology",id:"15-terminology",level:3},{value:"2. Aspect Model Fleet Diagnostic Data",id:"2-aspect-model-fleet-diagnostic-data",level:2},{value:"2.1 Introduction",id:"21-introduction",level:3},{value:"2.2 Normative Criteria",id:"22-normative-criteria",level:3},{value:"2.2.1 Normative criteria for Data Provider",id:"221-normative-criteria-for-data-provider",level:4},{value:"2.2.2 Normative criteria for Business Application Provider",id:"222-normative-criteria-for-business-application-provider",level:4},{value:"2.3 License",id:"23-license",level:3},{value:"2.4 Identifer of Semantic Model",id:"24-identifer-of-semantic-model",level:3},{value:"2.5 Formats of Semantic Model",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF Turtle",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON Schema",id:"252-json-schema",level:4},{value:"3. References",id:"3-references",level:2},{value:"3.1 Normative References\xa0\xa0",id:"31-normative-references",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cx-0038-aspect-model-fleet-diagnostic-data-v102",children:"CX-0038 Aspect Model: Fleet Diagnostic Data v1.0.2"})}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsx)(n.p,{children:'This document describes the semantic model "Fleet Diagnostic Data" used\nin the Catena-X network.'}),"\n",(0,i.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 Audience & Scope"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The described semantic model is relevant for:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,i.jsx)(n.li,{children:"Business Application Provider"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"12-context",children:"1.2 Context"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The Catena-X use case Live Quality Loops (QAX) uses multiple data models\nto exchange data between automotive manufacturer (OEM) and component\nsupplier (TIER1). Each of these data models can be supplied\nindependently."}),"\n",(0,i.jsx)(n.p,{children:"The Fleet.DiagnosticData model is used to exchange vehicle diagnostic\ndata coming from multiple vehicles that are affected by a Catena-X\nQualityTask. For investigation also diagnostic data from similar\nvehicles that are not affected by a Catena-X QualityTask\nis exchanged."}),"\n",(0,i.jsx)(n.h3,{id:"13-conformance",children:"1.3 Conformance"}),"\n",(0,i.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams,\nexamples, and notes in this specification are non-normative. Everything else in\nthis specification is normative."}),"\n",(0,i.jsxs)(n.p,{children:["The key words ",(0,i.jsx)(n.strong,{children:"MAY"}),", ",(0,i.jsx)(n.strong,{children:"MUST"}),", ",(0,i.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,i.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,i.jsx)(n.strong,{children:"RECOMMENDED"}),",\n",(0,i.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,i.jsx)(n.strong,{children:"SHOULD"})," and ",(0,i.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be\ninterpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they\nappear in all capitals, as shown here."]}),"\n",(0,i.jsx)(n.h3,{id:"14-proof-of-conformity",children:"1.4 Proof of conformity"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All participants and their solutions will need to prove they conform\nwith the Catena-X standards. To validate that the standards are applied\ncorrectly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,i.jsxs)(n.p,{children:["A model validator must be created, to prove the correctness of the data\nmodel. A generic test set created for the model must prove the expected\nresults",(0,i.jsx)(n.br,{}),"\n","Examples"]}),"\n",(0,i.jsx)(n.p,{children:"Example payload in JSON format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "diagnosticSessions":[\n      {\n         "eventList":[\n            {\n               "eventDescription":"Calibration of ABS ecu with calib file - see value",\n               "eventId":"ABS_CAL1234",\n               "ecuSerialPartNumber":"74343070GHKER73727",\n               "eventValue":"CAL366474-4848",\n               "dtcHexValue":"4337499FF",\n               "eventCreationDate":"2022-01-30T14:00:00"\n            }\n         ],\n         "envConditionList":[\n            {\n               "ecuSerialPartNumber":"74343070GHKER73727",\n               "conditionId":"DTC1_EnvCond1",\n               "conditionCreationDate":"2022-01-28T14:48:54",\n               "dtcHexValue":"4337499FF",\n               "conditionValue":2000.0,\n               "conditionDescription":"RPM",\n               "measurementUnit":"rpm"\n            }\n         ],\n         "qualityTaskId":"BPN-811_2022_000001",\n         "countryCode":"DEU",\n         "workshop":{\n            "catenaXId":"urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",\n            "workShopId":"4563328",\n            "latitude":9.19968,\n            "longitude":48.77765\n         },\n         "dtcList":[\n            {\n               "ecuSerialPartNumber":"74343070GHKER73727",\n               "dtcHexValue":"4337499FF",\n               "faultPath":"1000761",\n               "occurenceDateTime":"2022-01-30T14:48:54",\n               "fullName":"P0573-00",\n               "faultPathDescription":"shortage to plus",\n               "fullDescription":"Brake Switch \\"A\\" Circuit High-no sub type information",\n               "type":"Error",\n               "occurenceMileage":15000,\n               "state":"permanent",\n               "occurenceCounterTotal":10,\n               "freezeFrame":"100148340349340",\n               "isMilOn":true\n            }\n         ],\n         "sessionId":"3747429FGH382923974682",\n         "creationDate":"2022-02-04T14:48:54",\n         "mileage":23500,\n         "vehicle":{\n            "catenaXId":"urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",\n            "anonymizedVIN":"3747429FGH382923974682",\n            "softwareCategory":"TZGH64738",\n            "softwareVersion":"3.5.0001.001"\n         },\n         "ecuList":[\n            {\n               "catenaXId":"urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",\n               "ecuSerialPartNumber":"74343070GHKER73727",\n               "swVersion":"0001",\n               "swPartNumber":"04C906026BH",\n               "assemblyPartNumber":"V03935278E",\n               "assemblyPartNumberVersion":"0001",\n               "name":"ABS",\n               "description":"Anti blocking control unit",\n               "hwPartNumber":"04C907309AE",\n               "readOutDate":"2022-01-30T14:45:54",\n               "hwVersion":"0556A"\n            }\n         ]\n      }\n   ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"15-terminology",children:"1.5 Terminology"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Business Partner Number (BPN)"})}),"\n",(0,i.jsx)(n.p,{children:"A BPN is the unique identifier of a partner within Catena-x."}),"\n",(0,i.jsx)(n.h2,{id:"2-aspect-model-fleet-diagnostic-data",children:"2. Aspect Model Fleet Diagnostic Data"}),"\n",(0,i.jsx)(n.h3,{id:"21-introduction",children:"2.1 Introduction"}),"\n",(0,i.jsx)(n.p,{children:'Catena-X use case "Live Quality Loops"(QAX) uses several Catena-X\nstandardized data models to exchange data:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Hierarchy of Catena-X data models\xa0used in QAX",src:t(48215).A+"",width:"751",height:"247"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Figure 1: Hierarchy of Catena-X data models\xa0used in QAX"})})}),"\n",(0,i.jsx)(n.p,{children:"Data models in QAX and their content:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"QualityTask is the root element and describes why companies are working together on a quality topic and what they want to do. All involved companies and their contact people are named. In addition, a flag tells what should be done with exchanged data after a QualityTask is closed."}),"\n",(0,i.jsx)(n.li,{children:"Vehicle.ProductDescription: This data model is a representation of one vehicle affected by this QualityTask. The model represents the vehicle when it was sold to the end-customers from an end-customers point of view: Which standard equipment was installed in the vehicle and which extra equipment was installed in the vehicle."}),"\n",(0,i.jsx)(n.li,{children:"Fleet.DiagnosticData: Diagnostic data coming from multiple vehicles that are affected by this QualityTask + Diagnostic data from similar vehicles that are not affected by this QualityTask."}),"\n",(0,i.jsx)(n.li,{children:"Fleet.ClaimData: Customer complaints that are linked to this QualityTask + Data about the exchange of potentially faulty parts"}),"\n",(0,i.jsx)(n.li,{children:"ManufacturedPartsQualityInformation: A selection of manufacturing-related parameters that help to solve the QualtiyTask"}),"\n",(0,i.jsx)(n.li,{children:"PartsAnalyses: Analyses results of replaced and potentially faulty parts that are linked to this QualityTask"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"22-normative-criteria",children:"2.2 Normative Criteria"}),"\n",(0,i.jsx)(n.p,{children:'The usage of the described semantic model "Fleet Diagnostic Data" is a\nMUST for Data Provider and Data Consumer that want to work together on a\nquality topic over Catena-X automotive network.'}),"\n",(0,i.jsx)(n.h4,{id:"221-normative-criteria-for-data-provider",children:"2.2.1 Normative criteria for Data Provider"}),"\n",(0,i.jsx)(n.p,{children:"Every data provider MUST provide the data conformant to the semantic\nmodel specified in CX-0038."}),"\n",(0,i.jsx)(n.p,{children:"It is a MUST to provide a unique sessionId. This sessionId MUST be\nunique in the data provider's company."}),"\n",(0,i.jsx)(n.p,{children:'It is a MUST to provide the property "anonymizedVIN". anonymizedVIN MUST\nmatch with anonymizedVIN property of Vehicle Product Description in CX\n-- 0037.'}),"\n",(0,i.jsx)(n.p,{children:'It is a MUST to provide the property "qualityTaskId". qualityTaskId MUST\nmatch with qualityTaskId property of Quality Task in CX -- 0036.'}),"\n",(0,i.jsx)(n.p,{children:"If available property catenaXId of entity ECU and property catenaXId of\nentity Vehicle SHOULD be provided."}),"\n",(0,i.jsx)(n.p,{children:'In the Catena-X data space "Fleet Diagnostic Data" MUST be exchanged via\nEclipse Dataspace Connector (EDC) conformant to CX-0018.'}),"\n",(0,i.jsxs)(n.p,{children:["It is RECOMMEND to use Apache parquet",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),' file format together with EDC\nS3 data plane for file data exchange "Fleet Diagnostic Data".']}),"\n",(0,i.jsx)(n.h4,{id:"222-normative-criteria-for-business-application-provider",children:"2.2.2 Normative criteria for Business Application Provider"}),"\n",(0,i.jsx)(n.p,{children:'It is a MUST for Business Application Provider to support at least 2\nstandardized Catena-X QAX aspect models from Catena-X Release 3.0 (2 out\nof Catena-X standards CX -- 0036, CX -- 0037, CX -- 0038, CX -- 0039, CX\n-- 0040, CX -- 0041) to get the label "Catena-X Certified Solution" for\ntheir quality application.'}),"\n",(0,i.jsx)(n.p,{children:'It is RECOMMEND for Business Application Provider to be able to read the\nsemantic model "Fleet Diagnostic Data".'}),"\n",(0,i.jsx)(n.h3,{id:"23-license",children:"2.3 License"}),"\n",(0,i.jsxs)(n.p,{children:["This Catena-X data model is an outcome of Catena-X use case group Live\nQuality Loops (QAX). This Catena-X data model is made available under\nthe terms of the Creative Commons Attribution 4.0 International\n(CC-BY-4.0) license, which is available at Creative Commons",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The license information is available in github."}),"\n",(0,i.jsx)(n.p,{children:"In case of doubt the license, copyright and authors information in\ngithub overwrites the information in this specification document."}),"\n",(0,i.jsx)(n.h3,{id:"24-identifer-of-semantic-model",children:"2.4 Identifer of Semantic Model"}),"\n",(0,i.jsx)(n.p,{children:"This semantic model has the unique identifier"}),"\n",(0,i.jsxs)(n.p,{children:["urn:bamm",":io",".catenax.fleet.diagnostic_data:1.0.0"]}),"\n",(0,i.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 Formats of Semantic Model"}),"\n",(0,i.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF Turtle"}),"\n",(0,i.jsx)(n.p,{children:"The rdf turtle file, adhering to the Semantic Aspect Meta Model, is the\nmaster for generating additional file formats and serializations. It is\nprovided here:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.diagnostic_data/1.0.0",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.diagnostic_data/1.0.0"})}),"\n",(0,i.jsxs)(n.p,{children:["The open source command line tool of the Eclipse Semantic Modeling\nFramework",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})," is used for generation of other file formats like\nfor example a JSON Schema, aasx for Asset Administration Shell Submodel\nTemplate or a HTML documentation."]}),"\n",(0,i.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON Schema"}),"\n",(0,i.jsx)(n.p,{children:'A JSON Schema can be generated from the RDF Turtle file using the\nEclipse ESMF tooling. The JSON Schema defines the Value-Only payload of\nthe Asset Administration Shell for the API operation "GetSubmodel".'}),"\n",(0,i.jsx)(n.p,{children:"If present, example JSON-payloads MUST validate against the generated\nJSON schema."}),"\n",(0,i.jsx)(n.h2,{id:"3-references",children:"3. References"}),"\n",(0,i.jsx)(n.h3,{id:"31-normative-references",children:"3.1 Normative References\xa0\xa0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CX-0003 SEMANTIC ASPECT META MODEL\xa0\xa0"}),"\n",(0,i.jsx)(n.li,{children:"CX-0004 GOVERNANCE PROCESS FOR SEMANTIC MODELS\xa0\xa0"}),"\n",(0,i.jsx)(n.li,{children:"CX-0018 ECLPISE DATA SPACE CONNECTOR (EDC)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,i.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,i.jsx)(n.a,{href:"/copyright",children:"here"}),"."]}),"\n","\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-3",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://parquet.apache.org/",children:"https://parquet.apache.org/"})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-4",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://creativecommons.org/licenses/by/4.0/legalcode",children:"https://creativecommons.org/licenses/by/4.0/legalcode"})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-5",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/eclipse-esmf/esmf-sdk",children:"https://github.com/eclipse-esmf/esmf-sdk"})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},48215:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/CX-0038-hierarchy-of-CX-data-models-used-in-QAX-5996d10bbe9cc477323d964cac342dc8.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(96540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);