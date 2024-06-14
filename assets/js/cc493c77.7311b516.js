"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[1256],{68674:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(74848),i=t(28453);const r={},o="CX-0039 Aspect Model: Fleet Claim Data v1.0.1",s={id:"standards/CX-0039-AspectModelFleetClaimData/CX-0039-AspectModelFleetClaimData",title:"CX-0039 Aspect Model: Fleet Claim Data v1.0.1",description:"1. Introduction",source:"@site/versioned_docs/version-24.03/standards/CX-0039-AspectModelFleetClaimData/CX-0039-AspectModelFleetClaimData.md",sourceDirName:"standards/CX-0039-AspectModelFleetClaimData",slug:"/standards/CX-0039-AspectModelFleetClaimData/",permalink:"/docs/standards/CX-0039-AspectModelFleetClaimData/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0038 Aspect Model: Fleet Diagnostic Data v1.0.2",permalink:"/docs/standards/CX-0038-AspectModelFleetDiagnosticData/"},next:{title:"CX-0040 Aspect Model: Part Analyses v2.0.1",permalink:"/docs/standards/CX-0040-AspectModelPartAnalyses/"}},l={},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Audience &amp; Scope",id:"11-audience--scope",level:3},{value:"1.2 Context",id:"12-context",level:3},{value:"1.3 Conformance",id:"13-conformance",level:3},{value:"1.4 Proof of conformity",id:"14-proof-of-conformity",level:3},{value:"1.5 Examples",id:"15-examples",level:3},{value:"1.6 Terminology",id:"16-terminology",level:3},{value:"2. Aspect Model Fleet Claim Data",id:"2-aspect-model-fleet-claim-data",level:2},{value:"2.1 Introduction",id:"21-introduction",level:3},{value:"2.2 Normative Criteria",id:"22-normative-criteria",level:3},{value:"2.2.1 Normative criteria for Data Provider",id:"221-normative-criteria-for-data-provider",level:4},{value:"2.2.2 Normative criteria for Business Application Provider",id:"222-normative-criteria-for-business-application-provider",level:4},{value:"2.3 License",id:"23-license",level:3},{value:"2.4 Identifer of Semantic Model",id:"24-identifer-of-semantic-model",level:3},{value:"2.5 Formats of Semantic Model",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF Turtle",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON Schema",id:"252-json-schema",level:4},{value:"3. References",id:"3-references",level:2},{value:"3.1 Normative References",id:"31-normative-references",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"cx-0039-aspect-model-fleet-claim-data-v101",children:"CX-0039 Aspect Model: Fleet Claim Data v1.0.1"}),"\n",(0,a.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,a.jsx)(n.p,{children:'This document describes the semantic model "Fleet Claim Data" used in\nthe Catena-X network.'}),"\n",(0,a.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 Audience & Scope"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The described semantic model is relevant for :"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,a.jsx)(n.li,{children:"Business Application Provider"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"12-context",children:"1.2 Context"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The Catena-X use case Live Quality Loops (QAX) uses multiple data models\nto exchange data between automotive manufacturer (OEM) and component\nsupplier (TIER1). Each of these data models can be supplied\nindependently."}),"\n",(0,a.jsx)(n.p,{children:"The Fleet.ClaimData model is used to exchange customer complaints that\nare recorded in a workshop: If a customer has a complaint with his car\nduring the warranty period he goes to the workshop and wants the issue\nto be fixed. The data model Fleet.ClaimData allows to exchange multiple\ncomplaints with a component manufacturer at once."}),"\n",(0,a.jsx)(n.h3,{id:"13-conformance",children:"1.3 Conformance"}),"\n",(0,a.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines,\ndiagrams, examples, and notes in this specification are non-normative.\nEverything else in this specification is normative."}),"\n",(0,a.jsxs)(n.p,{children:["The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,\nSHOULD and SHOULD NOT in this document are to be interpreted as\ndescribed in\xa0",(0,a.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"BCP\n14"}),"\xa0[",(0,a.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",children:"RFC2119"}),"]\n[",(0,a.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",children:"RFC8174"}),"] when, and\nonly when, they appear in all capitals, as shown here."]}),"\n",(0,a.jsx)(n.h3,{id:"14-proof-of-conformity",children:"1.4 Proof of conformity"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are\nconform with the Catena-X standards. To validate that the standards are\napplied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,a.jsxs)(n.p,{children:["For Data Provider: To prove conformity you have to fulfill all MUST\ncriteria mentioned in chapter ",(0,a.jsx)(n.a,{href:"#22-normative-criteria",children:"Normative criteria for Data\nProvider"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"There is no proof of conformity necessary for Data Consumer."}),"\n",(0,a.jsxs)(n.p,{children:["For Business Application Provider: To prove conformity you have to\nfulfill all MUST criteria mentioned in chapter ",(0,a.jsx)(n.a,{href:"#222-normative-criteria-for-business-application-provider",children:"Normative criteria for\nBusiness Application Provider"}),".",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.br,{}),"\n","A model validator needs to be created, to proof the correctness of the\ndata model. A generic test set created for the model needs to proof the\nexpected results"]}),"\n",(0,a.jsx)(n.h3,{id:"15-examples",children:"1.5 Examples"}),"\n",(0,a.jsx)(n.p,{children:"Example payload in JSON format:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n   "listOfClaims":[\n      {\n         "damageCode":"Lenkmuffe",\n         "vehicleIdentifiers":{\n            "anonymizedVIN":"ABC20654378784512",\n            "vehicleCatenaXId":"580d3adf-1981-44a0-a214"\n         },\n         "listOfDiagnosticSessionId":[\n            "20221205-04"\n         ],\n         "customerComment":"Lenkung ist defekt",\n         "qualityTaskId":"BPN-811_2022_000001",\n         "technicianComment":"Lenkung ist defekt",\n         "repairMileage":10251,\n         "claimId":"a214-13d6",\n         "listOfParts":{\n            "isPartCausal":true,\n            "sparePart":{\n               "name":"Getriebe",\n               "number":"FZ206460050202212",\n               "catenaXId":"580d3adf-1981-44a0-a214-13d6ceed9379",\n               "serialNumber":"ECU20646005020221",\n               "supplierId":"ZF2064600502"\n            },\n            "replacedPart":{\n               "name":"Getriebe",\n               "number":"FZ206460050202212",\n               "catenaXId":"580d3adf-1981-44a0-a214-13d6ceed9379",\n               "serialNumber":"ECU20646005020221",\n               "supplierId":"ZF2064600502"\n            },\n            "isPartReplaced":true,\n            "amountOfReplacedParts":2\n         },\n         "repairDate":"2022-02-04T14:48:54"\n      }\n   ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"16-terminology",children:"1.6 Terminology"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Business Partner Number (BPN)"})}),"\n",(0,a.jsx)(n.p,{children:"A BPN is the unique identifier of a partner within Catena-x."}),"\n",(0,a.jsx)(n.h2,{id:"2-aspect-model-fleet-claim-data",children:"2. Aspect Model Fleet Claim Data"}),"\n",(0,a.jsx)(n.h3,{id:"21-introduction",children:"2.1 Introduction"}),"\n",(0,a.jsx)(n.p,{children:'Catena-X use case "Live Quality Loops"(QAX) uses several Catena-X\nstandardized data models to exchange data:'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Hierarchy of Catena-X data models\xa0used in QAX",src:t(6622).A+"",width:"751",height:"247"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Figure 1: Hierarchy of Catena-X data models\xa0used in QAX"})})}),"\n",(0,a.jsx)(n.p,{children:"Data models in QAX and their content:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"QualityTask is the root element and describes why companies are working together on a quality topic and what they want to do. All involved companies and their contact people are named. In addition, a flag tells what should be done with exchanged data after a QualityTask is closed."}),"\n",(0,a.jsx)(n.li,{children:"Vehicle.ProductDescription: This data model is a representation of one vehicle affected by this QualityTask. The model represents the vehicle when it was sold to the end-customers from an end-customers point of view: Which standard equipment was installed in the vehicle and which extra equipment was installed in the vehicle."}),"\n",(0,a.jsx)(n.li,{children:"Fleet.DiagnosticData: Diagnostic data coming from multiple vehicles that are affected by this QualityTask + Diagnostic data from similar vehicles that are not affected by this QualityTask."}),"\n",(0,a.jsx)(n.li,{children:"Fleet.ClaimData: Customer complaints that are linked to this QualityTask + Data about the exchange of potentially faulty parts"}),"\n",(0,a.jsx)(n.li,{children:"ManufacturedPartsQualityInformation: A selection of manufacturing-related parameters that help to solve the QualtiyTask"}),"\n",(0,a.jsx)(n.li,{children:"PartsAnalyses: Analyses results of replaced and potentially faulty parts that are linked to this QualityTask"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"22-normative-criteria",children:"2.2 Normative Criteria"}),"\n",(0,a.jsx)(n.p,{children:'The usage of the described semantic model "Fleet Claim Data" is a MUST\nfor Data Provider and Data Consumer that want to work together on a\nquality topic over Catena-X automotive network.'}),"\n",(0,a.jsx)(n.h4,{id:"221-normative-criteria-for-data-provider",children:"2.2.1 Normative criteria for Data Provider"}),"\n",(0,a.jsx)(n.p,{children:"Every data provider MUST provide the data conformant to the semantic\nmodel specified in CX-0039."}),"\n",(0,a.jsx)(n.p,{children:"It is a MUST to provide a unique claimId. This claimId MUST be unique in\nthe data provider's company."}),"\n",(0,a.jsx)(n.p,{children:'It is a MUST to provide the property "anonymizedVIN". "anonymizedVIN"\nMUST match with "anonymizedVIN" property of Vehicle Product Description\nin CX -- 0037 for the same vehicle.'}),"\n",(0,a.jsx)(n.p,{children:"It is a MUST to provide the property qualityTaskId. qualityTaskId MUST\nmatch with qualityTaskId property of Quality Task in CX -- 0036."}),"\n",(0,a.jsx)(n.p,{children:"If available vehicleCatenaXId of entity vehicleIdentifiers SHOULD be\nprovided."}),"\n",(0,a.jsx)(n.p,{children:'In the Catena-X data space "Fleet Claim Data" MUST be exchanged via\nEclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002.'}),"\n",(0,a.jsxs)(n.p,{children:["It is RECOMMEND to use Apache parquet",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),' file format together with EDC\nS3 data plane for file data exchange of "Fleet Claim Data".']}),"\n",(0,a.jsx)(n.h4,{id:"222-normative-criteria-for-business-application-provider",children:"2.2.2 Normative criteria for Business Application Provider"}),"\n",(0,a.jsx)(n.p,{children:'It is a MUST for Business Application Provider to support at least 2\nstandardized Catena-X QAX aspect models from Catena-X Release 3.0 (2 out\nof Catena-X standards CX -- 0036, CX -- 0037, CX -- 0038, CX -- 0039, CX\n-- 0040, CX -- 0041) to get the label "Catena-X Certified Solution" for\ntheir quality application.'}),"\n",(0,a.jsx)(n.p,{children:'It is RECOMMEND to be able to read the semantic model "Fleet Claim\nData".'}),"\n",(0,a.jsx)(n.h3,{id:"23-license",children:"2.3 License"}),"\n",(0,a.jsxs)(n.p,{children:["This Catena-X data model is an outcome of Catena-X use case group Live\nQuality Loops (QAX). This Catena-X data model is made available under\nthe terms of the Creative Commons Attribution 4.0 International\n(CC-BY-4.0) license, which is available at Creative Commons",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The license information is available in github."}),"\n",(0,a.jsx)(n.p,{children:"In case of doubt the license, copyright and authors information in\ngithub overwrites the information in this specification document."}),"\n",(0,a.jsx)(n.h3,{id:"24-identifer-of-semantic-model",children:"2.4 Identifer of Semantic Model"}),"\n",(0,a.jsx)(n.p,{children:"This semantic model has the unique identifier"}),"\n",(0,a.jsxs)(n.p,{children:["urn:bamm",":io",".catenax.fleet.claim_data:1.0.0"]}),"\n",(0,a.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 Formats of Semantic Model"}),"\n",(0,a.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF Turtle"}),"\n",(0,a.jsx)(n.p,{children:"The rdf turtle file, adhering to the Semantic Aspect Meta Model, is the\nmaster for generating additional file formats and serializations. It is\nprovided here:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.claim_data/1.0.0",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.claim_data/1.0.0"})}),"\n",(0,a.jsxs)(n.p,{children:["The open source command line tool of the Eclipse Semantic Modeling\nFramework",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})," is used for generation of other file formats like\nfor example a JSON Schema, aasx for Asset Administration Shell Submodel\nTemplate or a HTML documentation."]}),"\n",(0,a.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON Schema"}),"\n",(0,a.jsx)(n.p,{children:'A JSON Schema can be generated from the RDF Turtle file using the\nEclipse ESMF tooling. The JSON Schema defines the Value-Only payload of\nthe Asset Administration Shell for the API operation "GetSubmodel".'}),"\n",(0,a.jsx)(n.p,{children:"If present, example JSON-payloads MUST validate against the generated\nJSON schema."}),"\n",(0,a.jsx)(n.h2,{id:"3-references",children:"3. References"}),"\n",(0,a.jsx)(n.h3,{id:"31-normative-references",children:"3.1 Normative References"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"CX-0003 SEMANTIC ASPECT META MODEL\xa0\xa0"}),"\n",(0,a.jsx)(n.li,{children:"CX-0004 GOVERNANCE PROCESS FOR SEMANTIC MODELS\xa0\xa0"}),"\n",(0,a.jsx)(n.li,{children:"CX-0018 ECLPISE DATA SPACE CONNECTOR (EDC)"}),"\n"]}),"\n","\n",(0,a.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,a.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{id:"user-content-fn-3",children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://parquet.apache.org/",children:"https://parquet.apache.org/"})," ",(0,a.jsx)(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{id:"user-content-fn-4",children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://creativecommons.org/licenses/by/4.0/legalcode",children:"https://creativecommons.org/licenses/by/4.0/legalcode"})," ",(0,a.jsx)(n.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{id:"user-content-fn-5",children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/eclipse-esmf/esmf-sdk",children:"https://github.com/eclipse-esmf/esmf-sdk"})," ",(0,a.jsx)(n.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},6622:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/CX-0039-hierarchy-of-CX-data-models-used-in-QAX-421ee0a4105c33be7eba46e8bc2cdf5c.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);