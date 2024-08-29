"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[1651],{82468:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=i(74848),a=i(28453);const s={},r="CX-0032 Data Model: Part As Specified v1.0.1",o={id:"standards/CX-0032-DataModelPartAsSpecified/CX-0032-DataModelPartAsSpecified",title:"CX-0032 Data Model: Part As Specified v1.0.1",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0032-DataModelPartAsSpecified/CX-0032-DataModelPartAsSpecified.md",sourceDirName:"standards/CX-0032-DataModelPartAsSpecified",slug:"/standards/CX-0032-DataModelPartAsSpecified/",permalink:"/docs/standards/CX-0032-DataModelPartAsSpecified/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0031 Data Model: Material For Homologation v1.1.1",permalink:"/docs/standards/CX-0031-DataModelMaterialForHomologation/"},next:{title:"CX-0033 Data Model: Return Request v1.0.1",permalink:"/docs/standards/CX-0033-DataModelReturnRequest/"}},d={},l=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1.INTRODUCTION",id:"1introduction",level:2},{value:"1.1 PURPOSE OF THE DOCUMENT",id:"11-purpose-of-the-document",level:3},{value:"1.2 SCOPE OF THE IMPLEMENTATION",id:"12-scope-of-the-implementation",level:3},{value:"1.3 PRECONDITIONS AND DEPENDENCIES",id:"13-preconditions-and-dependencies",level:3},{value:"1.4 CONSTRAINTS AND LIMITATIONS",id:"14-constraints-and-limitations",level:3},{value:"1.5 CONFORMANCE",id:"15-conformance",level:3},{value:"1.6 PROOF OF CONFORMITY",id:"16-proof-of-conformity",level:3},{value:"1.7 EXAMPLE",id:"17-example",level:3},{value:"1.8 TERMINOLOGY",id:"18-terminology",level:3},{value:"2 ASPECT MODEL &quot;&quot;PartAsSpecified&quot;&quot;",id:"2-aspect-model-partasspecified",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 SPECIFICATION ARTIFACTS",id:"22-specification-artifacts",level:3},{value:"2.3 LICENSE",id:"23-license",level:3},{value:"2.4 IDENTIFIER OF SEMANTIC MODEL",id:"24-identifier-of-semantic-model",level:3},{value:"2.5 FORMATS OF SEMANTIC MODEL",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF Turtle",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON Schema",id:"252-json-schema",level:4},{value:"2.5.3 aasx",id:"253-aasx",level:4},{value:"2.6 SEMANTIC MODEL",id:"26-semantic-model",level:3},{value:"3. References",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cx-0032-data-model-part-as-specified-v101",children:"CX-0032 Data Model: Part As Specified v1.0.1"})}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"A core problem of the circular economy is making the right decisions. These strategies include Rethink, Refuse, Reduce, Reuse, Refurbish, Redesign, Recycle, Recover and Rot.\r\nIn particular, the end of life (EoL) decisions are a challenge. In order for a circular economy to scale, however, these must be supported in a standardized way. The present data model is used for this purpose. This supports the products R-Strategy Assistant & Circularity Dashboard to provide decision support for its users. In this first scope, the model should support the EoL decisions in particular.\r\nThe data provided by the data provider allows relevant decisions to be derived. This leads to higher reuse and recycling rates, an economically and ecologically balanced decision-making process and a scaled circular economy."}),"\n",(0,t.jsx)(n.h2,{id:"1introduction",children:"1.INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"The aspect model PartAsSpecified belongs to the part catalogue. A PartAsSpecified represents a certain OEM catalog part on part number level, providing a digital representation of the part as specified by the OEM. The link to the serialized part is done via the partId, this can only be done if the respective digital twins were provided by the supplier within the value chain."}),"\n",(0,t.jsx)(n.h3,{id:"11-purpose-of-the-document",children:"1.1 PURPOSE OF THE DOCUMENT"}),"\n",(0,t.jsx)(n.p,{children:"The purpose of this document is the description of the Asset Administration Shell submodel bill of material (BoM) as specified. It defines the view of the producing company of the produced product. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships."}),"\n",(0,t.jsx)(n.h3,{id:"12-scope-of-the-implementation",children:"1.2 SCOPE OF THE IMPLEMENTATION"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This chapter serves to situate the given reference implementation, to outline its prerequisites and to point out its limitations."}),"\n",(0,t.jsx)(n.h3,{id:"13-preconditions-and-dependencies",children:"1.3 PRECONDITIONS AND DEPENDENCIES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Like all Catena-X data models, this model will be available in a machine-readable format on GitHub. This aspect model is written in BAMM 2.0 as a modeling language, which is a separate industry standard from the open manufacturing platform, see Open Manufacturing. The data contained in this Catena-X data model is requested and exchanged via Catena-X using an Eclipse Dataspace Connector (EDC), which is a separate Catena-X standard and an implementation of the IDSA standard."}),"\n",(0,t.jsx)(n.h3,{id:"14-constraints-and-limitations",children:"1.4 CONSTRAINTS AND LIMITATIONS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"There are no constraints and limitations to this reference implementation document."}),"\n",(0,t.jsx)(n.h3,{id:"15-conformance",children:"1.5 CONFORMANCE"}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words ",(0,t.jsx)(n.strong,{children:"MAY"}),", ",(0,t.jsx)(n.strong,{children:"MUST"}),", ",(0,t.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,t.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(n.strong,{children:"SHOULD"})," and ",(0,t.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"16-proof-of-conformity",children:"1.6 PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All participants and their solutions will MUST to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,t.jsx)(n.h3,{id:"17-example",children:"1.7 EXAMPLE"}),"\n",(0,t.jsx)(n.p,{children:"The following json gives an overview of the data model."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n    "partTypeInformation": {\r\n        "partClassification": [{\r\n                "value": "STEEWHL",\r\n                "key": "BMW:PartFamily"\r\n            }\r\n        ],\r\n        "ownerPartId": "94A2032",\r\n        "partVersion": "05",\r\n        "itemCategory": "component",\r\n        "nameAtOwner": "Steering Wheel",\r\n        "partDescription": "The steering wheel is nice and round"\r\n    },\r\n    "validityPeriod": {\r\n        "validFrom": "2023-02-10T07:17:52.396Z",\r\n        "validTo": "2023-02-10T07:17:52.396Z"\r\n    },\r\n    "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379"\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"18-terminology",children:"1.8 TERMINOLOGY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following terms are especially relevant for the understanding of the standard:"}),"\n",(0,t.jsx)(n.p,{children:"Business Partner Number (BPN)\r\n: A BPN is the unique identifier of a partner within Catena-x"}),"\n",(0,t.jsx)(n.p,{children:"End of life vehicle (EoL vehicle)\r\n: 'End-of life vehicle' means a vehicle which is waste within the meaning of Article 1(a) of Directive 75/442/EEC on waste (waste means any substance or object which the holder disposes of or is required to dispose of pursuant to the provisions of national law in force)."}),"\n",(0,t.jsxs)(n.p,{children:["Original Equipment Manufacturer (OEM)\r\n",":An"," original equipment manufacturer (OEM) is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer."]}),"\n",(0,t.jsxs)(n.p,{children:["Bill of material (BOM)\r\n",":A"," bill of material is a list of the raw materials, sub-assemblies, intermediate assemblies, sub-components, parts, and the quantities of each needed to manufacture an end product."]}),"\n",(0,t.jsxs)(n.p,{children:["Eclipse Dataspace Connector (EDC)\r\n",":The"," Eclipse Dataspace Connector provides a framework for sovereign, inter-organizational data exchange."]}),"\n",(0,t.jsx)(n.h2,{id:"2-aspect-model-partasspecified",children:'2 ASPECT MODEL ""PartAsSpecified""'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"The purpose of this document is the description of the Asset Administration Shell submodel PartAsSpecified. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships."}),"\n",(0,t.jsx)(n.p,{children:"Every data provider MUST provide the data\r\nconformant to the semantic model specified in this document."}),"\n",(0,t.jsxs)(n.p,{children:["The unique identifier of the semantic model specified in this document\r\n",(0,t.jsx)(n.strong,{children:"MUST"})," be used by the data provider to define the semantics of the data\r\nbeing transferred."]}),"\n",(0,t.jsxs)(n.p,{children:["Every certified business application using the PartAsSpecified data ",(0,t.jsx)(n.strong,{children:"MUST"}),"\r\nbe able to consume data conformant to the semantic model specified in\r\nthis document."]}),"\n",(0,t.jsxs)(n.p,{children:["This semantic model ",(0,t.jsx)(n.strong,{children:"MUST"})," be made available in the central Semantic Hub."]}),"\n",(0,t.jsxs)(n.p,{children:["Data consumers and data provider ",(0,t.jsx)(n.strong,{children:"MUST"})," comply with the license of the\r\nsemantic model."]}),"\n",(0,t.jsxs)(n.p,{children:["In the Catena-X data space PartAsSpecified data MUST be requested and\r\nexchanged via Eclipse Dataspace Connector (EDC) conformant to ",(0,t.jsx)(n.a,{href:"#3-references",children:"CX-0018"}),"\r\nand ",(0,t.jsx)(n.a,{href:"#31-normative-references",children:"CX-0002"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The JSON Payload of data providers MUST be conformant to the JSON Schema\r\nas specified in this document."}),"\n",(0,t.jsx)(n.h3,{id:"22-specification-artifacts",children:"2.2 SPECIFICATION ARTIFACTS"}),"\n",(0,t.jsxs)(n.p,{children:['The modelling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification ',(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This aspect model is written in BAMM 2.0.0 as a modeling language conformant to ",(0,t.jsx)(n.a,{href:"#31-normative-references",children:"CX-0003"})," as input for the semantic deriven workflow."]}),"\n",(0,t.jsxs)(n.p,{children:["Like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F conformant to ",(0,t.jsx)(n.a,{href:"#31-normative-references",children:"CX-0003"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"23-license",children:"2.3 LICENSE"}),"\n",(0,t.jsx)(n.p,{children:"This Catena-X data model is an outcome of Catena-X use case group Digital Product Pass (DPP).This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F."}),"\n",(0,t.jsx)(n.h3,{id:"24-identifier-of-semantic-model",children:"2.4 IDENTIFIER OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"The semantic model has the unique identifier:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"urn:bamm:io.catenax.bom_as_specified:2.0.0#PartAsSpecified\n"})}),"\n",(0,t.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 FORMATS OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"All different formats of the semantic model can be found in the github repository."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.part_as_specified/2.0.0\n"})}),"\n",(0,t.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF Turtle"}),"\n",(0,t.jsx)(n.p,{children:"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be accessed via github:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_as_specified/2.0.0/PartAsSpecified.ttl\n"})}),"\n",(0,t.jsx)(n.p,{children:'The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation. These other formats are saved in the "gen" folder in github:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.part_as_specified/2.0.0/gen\n"})}),"\n",(0,t.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON Schema"}),"\n",(0,t.jsx)(n.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_as_specified/2.0.0/gen/PartAsSpecified-schema.json\n"})}),"\n",(0,t.jsx)(n.h4,{id:"253-aasx",children:"2.5.3 aasx"}),"\n",(0,t.jsxs)(n.p,{children:["A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification conformant to [",(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"]."]}),"\n",(0,t.jsx)(n.p,{children:"Note: As soon as the specification V3.0 of the Asset Administration Shell specification is available\r\nand update will be provided."}),"\n",(0,t.jsx)(n.h3,{id:"26-semantic-model",children:"2.6 SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"The data model is described in BAMM 2.0.0. A html documentation can be generated from the rdf turtle file."}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3. References"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0003 BAMM Aspect Meta Model v1.0.2"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0002 Digital Twins in Catena - X v2.0.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0018 Sovereign Data Exchange (EDC) v2.0.1"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"SMT- How to create submodel template specification"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,t.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"PartAsSpecified",src:i(16656).A+"",width:"2057",height:"1604"})}),"\n",(0,t.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,t.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,t.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},16656:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-d516632c4a28e9af396e3b3f8e3f6fde.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);