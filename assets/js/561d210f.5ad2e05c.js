"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[6104],{288:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(74848),a=i(28453);const s={},o="CX-0057 Semantic Model: Remaining Useful Life v1.0.0",r={id:"standards/CX-0057-SemanticModelRemainingUsefulLife/CX-0057-SemanticModelRemainingUsefulLife",title:"CX-0057 Semantic Model: Remaining Useful Life v1.0.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0057-SemanticModelRemainingUsefulLife/CX-0057-SemanticModelRemainingUsefulLife.md",sourceDirName:"standards/CX-0057-SemanticModelRemainingUsefulLife",slug:"/standards/CX-0057-SemanticModelRemainingUsefulLife/",permalink:"/docs/standards/CX-0057-SemanticModelRemainingUsefulLife/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0056 Semantic Model: Classified Load Spectrum v1.0.0",permalink:"/docs/standards/CX-0056-SemanticModelClassifiedLoadSpectrum/"},next:{title:"CX-0058 API: Endurance Predictor v1.0.0",permalink:"/docs/standards/CX-0058-APIEndurancePredictor/"}},l={},d=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 CONFORMANCE",id:"13-conformance",level:3},{value:"1.4 PROOF OF CONFORMITY",id:"14-proof-of-conformity",level:3},{value:"1.5 EXAMPLES",id:"15-examples",level:3},{value:"1.6 TERMINOLOGY",id:"16-terminology",level:3},{value:"2 ASPECT MODEL \u201cREMAINING USEFUL LIFE\u201d",id:"2-aspect-model-remaining-useful-life",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 SPECIFICATION ARTIFACTS",id:"22-specification-artifacts",level:3},{value:"2.3 LICENSE",id:"23-license",level:3},{value:"2.4 IDENTIFER OF SEMANTIC MODEL",id:"24-identifer-of-semantic-model",level:3},{value:"2.5 FORMATS OF SEMANTIC MODEL",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF Turtle",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON Schema",id:"252-json-schema",level:4},{value:"2.5.3 aasx",id:"253-aasx",level:4},{value:"2.6 SEMANTIC MODEL",id:"26-semantic-model",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cx-0057-semantic-model-remaining-useful-life-v100",children:"CX-0057 Semantic Model: Remaining Useful Life v1.0.0"})}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"The data model Remaining Useful Life contains the two relevant values to describe the expected remaining life of a vehicle, remaining running distance and remaining operating hours."}),"\n",(0,t.jsx)(n.p,{children:"The data model is used for vehicle parts and vehicle components which cannot be visually assessed but need the loading information combined with a damage model to estimate the health of the component."}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"This document describes one semantic model used in the Catena-X network."}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The standard is relevant for the following roles:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,t.jsx)(n.li,{children:"Business Application Provider"}),"\n",(0,t.jsx)(n.li,{children:"Enablement Service Provider"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The standard \u201cRemaining Useful Life\u201d is the result of a service. It is meant as a short-term property of the vehicle component. The remaining life is given as \u201cremaining running distance\u201d and \u201cremaining operating hours\u201d, this is in accordance with vehicle life. The standard is not valid for non-vehicle components."}),"\n",(0,t.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Remaining useful Life is describing the actual health of a vehicle component. Remaining useful Life is defined for vehicle and vehicle components; the values are \u201cremaining running distance\u201d and \u201cremaining operating hours\u201d. As it is a short-term property, the status of determination is part of the standard. Remaining useful Life is the result of a service determining the health of a vehicle component from the loading the component was subjected to. This loading might before example measured, simulate or estimated, this information on the origin of the loading is part of the standard."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"remaining_useful_life.png",src:i(4352).A+"",width:"1521",height:"1395"}),"\n",(0,t.jsx)(n.em,{children:"Figure 1: Overview"})]}),"\n",(0,t.jsx)(n.h3,{id:"13-conformance",children:"1.3 CONFORMANCE"}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams,\nexamples, and notes in this specification are non-normative. Everything else in\nthis specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words ",(0,t.jsx)(n.strong,{children:"MAY"}),", ",(0,t.jsx)(n.strong,{children:"MUST"}),", ",(0,t.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"}),",\n",(0,t.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(n.strong,{children:"SHOULD"})," and ",(0,t.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be\ninterpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they\nappear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"14-proof-of-conformity",children:"1.4 PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All participants and their solutions will need to prove, that they are conform\nwith the Catena-X standards. To validate that the standards are applied\ncorrectly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,t.jsx)(n.p,{children:"The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data."}),"\n",(0,t.jsx)(n.h3,{id:"15-examples",children:"1.5 EXAMPLES"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{ \n\u202f "remainingOperatingHours": 2500, \n\u202f "remainingRunningDistance": 150000, \n\u202f "determinationStatus": { \n\u202f \u202f "date": "2022-06-15T14:23:56Z", \n\u202f \u202f "operatingHours": 3456.7, \n\u202f \u202f "mileage": 204000 \n\u202f }, \n\u202f "determinationLoaddataSource": { \n\u202f \u202f "informationOriginLoadSpectrum": "loggedOEM" \n\u202f } \n} \n'})}),"\n",(0,t.jsx)(n.h3,{id:"16-terminology",children:"1.6 TERMINOLOGY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Aspect Model\n: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect."}),"\n",(0,t.jsx)(n.p,{children:": Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model."}),"\n",(0,t.jsx)(n.p,{children:": Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"[Source: Catena-X, CX-0002, note 3 removed]"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"RemainingRunningDistance:  The estimated number of kilometers, the vehicle can drive without expectable failure of the component. This is an integer number, the unit is [km]."}),"\n",(0,t.jsx)(n.li,{children:"Remaining operating hours: Estimated number of operating hours of the vehicle without expectable failure of the component. Floating number, unit is [h]."}),"\n",(0,t.jsx)(n.li,{children:"determinationLoaddataSource:  The remaining life is estimated from the loading the component was subjected to. The loading of the component might be logged during vehicle life or simulated or estimated: this information on the origin is stored here. If available, the URL of the loadspectrum can be stored here."}),"\n",(0,t.jsx)(n.li,{children:"determinationStatus :  Comprising \u201cdate\u201d, \u201cmileage\u201d, \u201coperatingHours\u201d, the timestamp the remainingUsefulLife was calculated and the according mileage and operating  hours of the vehicle."}),"\n",(0,t.jsx)(n.li,{children:"sourceLoadSpectrum:  if available, the URL of the used load spectrum"}),"\n",(0,t.jsxs)(n.li,{children:["informationOriginLoadSpectrum:  enumeration of possible loaddata sources:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"loggedOEM":  the data are collected during usage and provided on OEM side'}),"\n",(0,t.jsx)(n.li,{children:'"measuredOEM": load data are measured on OEM side'}),"\n",(0,t.jsx)(n.li,{children:'"simulatedOEM": load data are simulated on OEM side'}),"\n",(0,t.jsx)(n.li,{children:'"loggedSupplier":  the data are collected during usage and provided on supplier side'}),"\n",(0,t.jsx)(n.li,{children:'"measuredSupplier": load data are measured on supplier side'}),"\n",(0,t.jsx)(n.li,{children:'"simulatedSupplier": load data are simulated on supplier side'}),"\n",(0,t.jsx)(n.li,{children:'"otherOrigin": any other origin of load data, may be not even a load spectrum'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the glossary on the association homepage."}),"\n",(0,t.jsx)(n.h2,{id:"2-aspect-model-remaining-useful-life",children:"2 ASPECT MODEL \u201cREMAINING USEFUL LIFE\u201d"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"Remaining Useful Life is a set of values (remaining running distance, remining operating hours) to describing the expected further lifetime of a component or assembly in a vehicle."}),"\n",(0,t.jsx)(n.p,{children:"The standard is needed to evaluate the further usage."}),"\n",(0,t.jsx)(n.h3,{id:"22-specification-artifacts",children:"2.2 SPECIFICATION ARTIFACTS"}),"\n",(0,t.jsxs)(n.p,{children:['The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification ',(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003\nas input for the semantic deriven workflow."}),"\n",(0,t.jsx)(n.p,{children:"Like all Catena-X data models, this model is available in a machine-readable format on GitHub\nconformant to CX-0003."}),"\n",(0,t.jsx)(n.p,{children:"To proof conformity with the RemainingUsefulLife Semantic Model Standard check your json file against the json schema."}),"\n",(0,t.jsx)(n.p,{children:"Every data provider of  RemainingUsefulLife data MUST provide the data conformant to the semantic model specified in this document."}),"\n",(0,t.jsx)(n.p,{children:"The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred."}),"\n",(0,t.jsx)(n.p,{children:"Every certified business application relying on RemainingUsefulLife data MUST be able to consume data conformant to the semantic model specified in this document."}),"\n",(0,t.jsx)(n.p,{children:"This semantic model MUST be made available in the central Semantic Hub."}),"\n",(0,t.jsx)(n.p,{children:"Data consumers and data provider MUST comply with the license of the semantic model."}),"\n",(0,t.jsxs)(n.p,{children:["In the Catena-X data space ",(0,t.jsxs)(n.strong,{children:["urn:bamm",":io",".catenax.rul:1.0.0##RemainingUsefulLife"]})," data MUST be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002."]}),"\n",(0,t.jsx)(n.h3,{id:"23-license",children:"2.3 LICENSE"}),"\n",(0,t.jsx)(n.p,{children:"This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons."}),"\n",(0,t.jsx)(n.h3,{id:"24-identifer-of-semantic-model",children:"2.4 IDENTIFER OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"The semantic model has the unique identifier:"}),"\n",(0,t.jsxs)(n.p,{children:["urn:bamm",":io",".catenax.rul:1.0.0##RemainingUsefulLife"]}),"\n",(0,t.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 FORMATS OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF Turtle"}),"\n",(0,t.jsx)(n.p,{children:"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations."}),"\n",(0,t.jsx)(n.p,{children:"The ttl file can be found here:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.rul/1.0.0/RemainingUsefulLife.ttl",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.rul/1.0.0/RemainingUsefulLife.ttl"})}),"\n",(0,t.jsx)(n.p,{children:"The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation\nof other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel\nTemplate or a HTML documentation."}),"\n",(0,t.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON Schema"}),"\n",(0,t.jsx)(n.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only\npayload of the Asset Administration Shell for the API operation "GetSubmodel".'}),"\n",(0,t.jsx)(n.h4,{id:"253-aasx",children:"2.5.3 aasx"}),"\n",(0,t.jsxs)(n.p,{children:["An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested\nartifacts for a Submodel Template Specification conformant to [",(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"]."]}),"\n",(0,t.jsx)(n.p,{children:"Note: As soon as the specification V3.0 of the Asset Administration Shell specfication is available\nan update will be provided."}),"\n",(0,t.jsx)(n.h3,{id:"26-semantic-model",children:"2.6 SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"The data model is described in SAMM6. A html documentation can be generated from the rdf turtle file."}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CX-0018 Eclipse Data Space Connector (EDC)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CX-0003 SAMM Aspect Meta Model"}),"\n",(0,t.jsx)(n.li,{children:"CX-0004 Governance Process for Semantic Models"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,t.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"    [OPTIONAL] Add figures here if necessary\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"    [OPTIONAL] Add Tables here if necessary\n"})}),"\n",(0,t.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4352:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/remaing_useful_life-6e60ca9aa363cdca22e3dd3e6828cd99.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(96540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);