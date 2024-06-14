"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[437],{11372:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=s(74848),t=s(28453);const a={},r="CX - 0104 Aspect Model AssetTrackerLinks v.1.0.0",o={id:"standards/CX-0104-AspectModelAssetTrackerLinks/CX-0104-AspectModelAssetTrackerLinks",title:"CX - 0104 Aspect Model AssetTrackerLinks v.1.0.0",description:"FOR WHOM IS THE STANDARD DESIGNED",source:"@site/versioned_docs/version-24.03/standards/CX-0104-AspectModelAssetTrackerLinks/CX-0104-AspectModelAssetTrackerLinks.md",sourceDirName:"standards/CX-0104-AspectModelAssetTrackerLinks",slug:"/standards/CX-0104-AspectModelAssetTrackerLinks/",permalink:"/docs/standards/CX-0104-AspectModelAssetTrackerLinks/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0103 Digital Product Passport v.1.1.0",permalink:"/docs/standards/CX-0103-AspectModelDigitalProductPassport/"},next:{title:"CX-0105 Asset Tracking: Triangle Document 1.0.0",permalink:"/docs/standards/CX-0105-AssetTrackingTriangleDocument/"}},d={},l=[{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"ABSTRACT",id:"abstract",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2 ASPECT MODEL \u201cAssetTrackerLinks v.2.0.0\u201d",id:"2-aspect-model-assettrackerlinks-v200",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 SPECIFICATION ARTIFACTS",id:"22-specification-artifacts",level:3},{value:"2.3 LICENSE",id:"23-license",level:3},{value:"2.4 IDENTIFER OF SEMANTIC MODEL",id:"24-identifer-of-semantic-model",level:3},{value:"2.5 FORMATS OF SEMANTIC MODEL",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF TURTLE",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON SCHEMA",id:"252-json-schema",level:4},{value:"2.5.3 AASX",id:"253-aasx",level:4},{value:"2.6 SEMANTIC MODEL",id:"26-semantic-model",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cx---0104-aspect-model-assettrackerlinks-v100",children:"CX - 0104 Aspect Model AssetTrackerLinks v.1.0.0"}),"\n",(0,i.jsx)(n.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,i.jsx)(n.p,{children:"Please refer to: AUDIENCE & SCOPE."}),"\n",(0,i.jsx)(n.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,i.jsx)(n.p,{children:"This is the initial version of the standard."}),"\n",(0,i.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,i.jsx)(n.p,{children:"The asset tracking use case aims to design a standard solution how diverse IoT solutions, available on the free market, can be incorporated into the Catena-X network keeping the interoperability and data sovereignty requirements respected. Although the main goal was always to track company assets with the various IoT devices, based on the set of standards designed by asset tracking use case team, there is a potential to fully use these in any use case in the Catena-X environment and beyond. The model opens the door for any IoT device manufacturer and any network provider to be part of the Catena-X network."}),"\n",(0,i.jsx)(n.p,{children:"The data model \u201cAssetTrackerLinks\u201d represents a link between an asset and IoT sensor device via their corresponding unique Catena-X Identifiers. It contains information about the timestamps of pairing and unpairing. The link between asset and IoT sensor devices has critical importance, else the data collected from IoT sensor devices cannot be interpreted. The IoT sensor data gain on business value only when those are related to an asset."}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,i.jsx)(n.p,{children:"This document describes a semantic model used in the Catena-X network which is used by the Asset Tracking Application to create a link between an individual asset and individual IoT sensor device."}),"\n",(0,i.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The standard is relevant for the following roles:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,i.jsx)(n.li,{children:"Business Application Provider"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'The data model "AssetTrackerLinks" represents a link between an individual asset and individual IoT sensor device with timestamps of pairing and unpairing.\nIn the moment, when an Individual IoT sensor device is attached to an Individual asset, pairing happens and this moment can be described with a timestamp - Paired.\nOpposite way around, when tracking lifecycle ends, unpairing happens and this moment can be described with a timestamp - Unpaired.'}),"\n",(0,i.jsx)(n.p,{children:"To enable easy control about the status of an asset a status check: paired- true/false is integrated in the model.\nIt is planned the digital twins to store only the last valid sensor information for a pair of \u201cindividual asset - individual IoT sensor device\u201d, and that's why the model provides a path /endpoint to reach the historical data for the connection."}),"\n",(0,i.jsx)(n.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The purpose of the Asset Tracking Solution is to track Individual assets with Various IoT sensor devices. The data model \u201cAssetTrackerLinks\u201d represents a link between an individual asset and individual IoT sensor device. Assets can be tracked with one IoT sensor device for short period \u2013 only for a single event or for longer period \u2013 eventually the whole asset life. Hence it is important to know at which moment of time which IoT sensor device was attached to the individual asset."}),"\n",(0,i.jsx)(n.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams,\nexamples, and notes in this specification are non-normative. Everything else in\nthis specification is normative."}),"\n",(0,i.jsxs)(n.p,{children:["The key words ",(0,i.jsx)(n.strong,{children:"MAY"}),", ",(0,i.jsx)(n.strong,{children:"MUST"}),", ",(0,i.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,i.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,i.jsx)(n.strong,{children:"RECOMMENDED"}),",\n",(0,i.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,i.jsx)(n.strong,{children:"SHOULD"})," and ",(0,i.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be\ninterpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they\nappear in all capitals, as shown here."]}),"\n",(0,i.jsxs)(n.p,{children:["All participants and their solutions ",(0,i.jsx)(n.strong,{children:"MUST"})," proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."]}),"\n",(0,i.jsx)(n.p,{children:"The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data."}),"\n",(0,i.jsx)(n.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "catenaXId" : "urn:uuid:ed85f17e-29dd-473c-9cb8-d7ad1dc44d2f",\n  "childItems" : [ {\n    "historicalData" : "https://mycompany.s3.amazonaws.com/historicalsensordata",\n    "catenaXId" : "urn:uuid:ed85f17e-29dd-473c-9cb8-d7ad1dc44d2f",\n    "pairedOn" : "2023-02-03T14:48:54.709Z",\n    "unpairedOn" : "2023-02-04T14:48:54.709Z",\n    "paired" : false\n  } ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"catenaXId:"}),"\nThe Catena-X identifier of the given asset or device, valid for the Catena-X dataspace."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"childItems:"}),"\nSet of child items, of which the given parent object consist of."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"historicalData:"}),"\nDescribes the location where the historical sensor data can be found."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"pairedOn:"}),"\nTimestamp of pairing of an IoT Device to an Asset."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"unpairedOn:"}),"\nTimestamp of the unpairing of an IoT Device from an Asset."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"paired:"}),"\nAsset and device are curently paired when set to true."]}),"\n",(0,i.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the glossary on the association homepage."}),"\n",(0,i.jsx)(n.h2,{id:"2-aspect-model-assettrackerlinks-v200",children:"2 ASPECT MODEL \u201cAssetTrackerLinks v.2.0.0\u201d"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,i.jsx)(n.p,{children:"The purpose of the Asset Tracking product is to track Individual assets with Various IoT sensor devices."}),"\n",(0,i.jsx)(n.h3,{id:"22-specification-artifacts",children:"2.2 SPECIFICATION ARTIFACTS"}),"\n",(0,i.jsxs)(n.p,{children:['The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification ',(0,i.jsx)(n.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"SMT"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This aspect model is written in SAMM as a modeling language and like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F conformant to CX-0003."}),"\n",(0,i.jsx)(n.h3,{id:"23-license",children:"2.3 LICENSE"}),"\n",(0,i.jsx)(n.p,{children:"This Catena-X data model is an outcome of Catena-X use case group Circular Economy - Asset Tracking (CAT).\nThis Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F."}),"\n",(0,i.jsx)(n.h3,{id:"24-identifer-of-semantic-model",children:"2.4 IDENTIFER OF SEMANTIC MODEL"}),"\n",(0,i.jsx)(n.p,{children:"The semantic model has the unique identifier"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["urn:samm",":io",".catenax.asset_tracker_links:2.0.0"]})}),"\n",(0,i.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 FORMATS OF SEMANTIC MODEL"}),"\n",(0,i.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF TURTLE"}),"\n",(0,i.jsx)(n.p,{children:"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.asset_tracker_links/2.0.0/AssetTrackerLinks.ttl",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.asset_tracker_links/2.0.0/AssetTrackerLinks.ttl"})}),"\n",(0,i.jsx)(n.p,{children:"The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation."}),"\n",(0,i.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON SCHEMA"}),"\n",(0,i.jsx)(n.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.asset_tracker_links/2.0.0/gen/AssetTrackerLinks-schema.json",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.asset_tracker_links/2.0.0/gen/AssetTrackerLinks-schema.json"})}),"\n",(0,i.jsx)(n.h4,{id:"253-aasx",children:"2.5.3 AASX"}),"\n",(0,i.jsxs)(n.p,{children:["A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification conformant to [",(0,i.jsx)(n.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"SMT"}),"]."]}),"\n",(0,i.jsx)(n.h3,{id:"26-semantic-model",children:"2.6 SEMANTIC MODEL"}),"\n",(0,i.jsxs)(n.p,{children:["The data model is described in SAMM. The generated documenattion can be found here: ",(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.asset_tracker_links/2.0.0/gen",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.asset_tracker_links/2.0.0/gen"})]}),"\n",(0,i.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,i.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,i.jsxs)(n.p,{children:["The data model follows the Standard ",(0,i.jsx)(n.a,{href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Archiv/Update_Juli_23_R_3.2/CX-0045-AspectModelDataChainTemplate-v1.1.1.pdf",children:"CX - 0045 Aspect Model Data Chain Template"})]}),"\n",(0,i.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["[SMT] How to create a submodel template specification. Guideline. Download from: ",(0,i.jsx)(n.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf"})]}),"\n",(0,i.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,i.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Alt text",src:s(43030).A+"",width:"1222",height:"923"})}),"\n",(0,i.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},43030:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/AssetTrackerLinks-0a45e948a4009149f5f6e3c29632e054.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(96540);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);