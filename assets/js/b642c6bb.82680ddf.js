"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[9902],{36750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(74848),a=n(28453);const s={},r="CX-0034 Data Model Battery Pass v2.0.0",o={id:"standards/CX-0034-DataModelBatteryPass/CX-0034-DataModelBatteryPass",title:"CX-0034 Data Model Battery Pass v2.0.0",description:"FOR WHOM IS THE STANDARD DESIGNED",source:"@site/versioned_docs/version-24.03/standards/CX-0034-DataModelBatteryPass/CX-0034-DataModelBatteryPass.md",sourceDirName:"standards/CX-0034-DataModelBatteryPass",slug:"/standards/CX-0034-DataModelBatteryPass/",permalink:"/docs/standards/CX-0034-DataModelBatteryPass/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0033 Data Model: Return Request v1.0.1",permalink:"/docs/standards/CX-0033-DataModelReturnRequest/"},next:{title:"CX-0035 Data Model: Marketplace offer v1.0.0",permalink:"/docs/standards/CX-0035-DataModelMarketplaceoffer/"}},d={},l=[{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"ABSTRACT",id:"abstract",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2 ASPECT MODEL \u201cBattery Pass\u201d",id:"2-aspect-model-battery-pass",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 SPECIFICATION ARTIFACTS",id:"22-specification-artifacts",level:3},{value:"2.3 LICENSE",id:"23-license",level:3},{value:"2.4 IDENTIFIER OF SEMANTIC MODEL",id:"24-identifier-of-semantic-model",level:3},{value:"2.5 FORMATS OF SEMANTIC MODEL",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF TURTLE",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON SCHEMA",id:"252-json-schema",level:4},{value:"2.5.3 AASX",id:"253-aasx",level:4},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"cx-0034-data-model-battery-pass-v200",children:"CX-0034 Data Model Battery Pass v2.0.0"})}),"\n",(0,i.jsx)(t.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,i.jsxs)(t.p,{children:["The stand will be used by interested data providers and application developers who want to communicate the Digital Product Passport. A Digital Product Passport is a digital document that contains comprehensive information about a product throughout its lifecycle.\nSee additionally chapter ",(0,i.jsx)(t.a,{href:"#11-audience--scope",children:"1.1"})]}),"\n",(0,i.jsx)(t.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,i.jsxs)(t.p,{children:["The battery passport aspect model has undergone a comprehensive transformation, marked by fundamental content and structural changes. This update represents a significant leap forward to reflect the latest battery regulation: Regulation (EU) 2023/1542 of the European Parliament and of the Council of 12 July 2023 concerning batteries and waste batteries, amending Directive 2008/98/EC and Regulation (EU) 2019/1020 and repealing Directive 2006/66/EC. It can be found under: ",(0,i.jsx)(t.a,{href:"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1542&qid=1702049049074",children:"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1542&qid=1702049049074"})]}),"\n",(0,i.jsx)(t.p,{children:"A significant change involves the introduction of the Digital Product Passport through an import as a shared model. In the regulation, Chapter IX is dedicated to the Digital Battery Passport, encompassing details about the requirements, technical design, and operations. The details to be included in the Battery Passport are listed in Annex XIII."}),"\n",(0,i.jsx)(t.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,i.jsx)(t.p,{children:"Due to requirements of the new regulation for batteries and waste batteries, a data model for Battery Passport was created, which increases efficiency of circular economy ecosystems of all partners in the value network. The Passport itself is defined by the usage of Catena-X shared services, a standardized data model and an application which will enable stakeholders to access the relevant data.\nThe battery passport is a tool for the exchange of information, enables tracking and tracing of batteries and provides information about the carbon intensity of their manufacturing processes as well as the origin of the materials used, about composition of batteries, including raw materials and hazardous chemicals, about repair, repurposing and dismantling operations and possibilities, and about the treatment, recycling and recovery processes to which the batteries could be subject to at the end of their lifetime.\nThe battery passport provides information about batteries placed on the market and their sustainability requirements. It contains information relating to the battery model and information specific to the individual battery, including details resulting from the use of the battery."}),"\n",(0,i.jsx)(t.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,i.jsx)(t.p,{children:"This document describes one semantic model used in the Catena-X network."}),"\n",(0,i.jsx)(t.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The purpose of this document is the description of the Asset Administration Shell model Digital Product Passport. It defines the product identity and all relevant attributes as required from the regulation. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships."}),"\n",(0,i.jsx)(t.p,{children:"This standard is relevant for following roles:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Data Provider / Consumer"}),"\n",(0,i.jsx)(t.li,{children:"Business Application Provider"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The Battery Pass provides foundations for digital infrastructures for its documentation, the exchange of basic information and update-relevant technical data \u2013 in particular, data that comprehensively describes supply-chain accountability, such as greenhouse gas footprint, working conditions in raw material extraction, or the determination of battery conditions. To participate, parts of the standard of the Digital Product Passport ",(0,i.jsx)(t.a,{href:"#31-normative-references",children:"CX-0103"})," must be fulfilled, as the Battery Passport incorporates various modeling components into its structure. Whenever the shared model of the Digital Product Passport is utilized, it signifies a match between the two regulations. This demonstrates the seamless integration of the Digital Product Passport's regulations within the regulatory framework of the battery."]}),"\n",(0,i.jsx)(t.p,{children:"The Battery Passport is defined by the usage of Catena-X shared services, a standardized data model and an application which will enable stakeholders to access the relevant data. This version of the Battery Passport Data Model 4.0.0 consists out of the following information:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Passport Metadata"}),"\n",(0,i.jsx)(t.li,{children:"Product Identification (identifiers and typology)"}),"\n",(0,i.jsx)(t.li,{children:"General Information (manufacturing information)"}),"\n",(0,i.jsx)(t.li,{children:"Physical Dimensions"}),"\n",(0,i.jsx)(t.li,{children:"Chemical Materials (active, critical and hazardous material)"}),"\n",(0,i.jsx)(t.li,{children:"Circularity (carbon footprint, spare parts and sustainability documents)"}),"\n",(0,i.jsx)(t.li,{children:"Battery Performance (rated and dynamic values)"}),"\n",(0,i.jsx)(t.li,{children:"Conformity Documents"}),"\n",(0,i.jsx)(t.li,{children:"Safety Documents"}),"\n",(0,i.jsx)(t.li,{children:"Optional Other Sources"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,i.jsxs)(t.p,{children:["The key words ",(0,i.jsx)(t.strong,{children:"MAY"}),", ",(0,i.jsx)(t.strong,{children:"MUST"}),", ",(0,i.jsx)(t.strong,{children:"MUST NOT"}),", ",(0,i.jsx)(t.strong,{children:"OPTIONAL"}),", ",(0,i.jsx)(t.strong,{children:"RECOMMENDED"}),", ",(0,i.jsx)(t.strong,{children:"REQUIRED"}),", ",(0,i.jsx)(t.strong,{children:"SHOULD"})," and ",(0,i.jsx)(t.strong,{children:"SHOULD NOT"})," in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,i.jsx)(t.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,i.jsx)(t.p,{children:'The JSON example can be generated from the SAMM.ttl file or be found in the current version 4.0.0 in the "gen" folder github repository.'}),"\n",(0,i.jsx)(t.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"EoL"}),"\n: End of life"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"OEM"}),"\n: Original Equipment Manufacturer"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Business Partner Number (BPN)"}),"\n: BPN is the unique identifier of a partner within Catena-x."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Aspect Model"}),"\n: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect."]}),"\n",(0,i.jsx)(t.p,{children:": Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model."}),"\n",(0,i.jsx)(t.p,{children:": Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing)."}),"\n",(0,i.jsx)(t.h2,{id:"2-aspect-model-battery-pass",children:"2 ASPECT MODEL \u201cBattery Pass\u201d"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'The battery accounts for about 40% of the added value in electric cars. It is therefore very important for sustainability and working standards in the automotive industry. The "Battery Passport" project by partners from industry and research therefore wants to design content and technical standards for a battery pass and show them in a pilot project. In this way, consumers can see at a glance what kind of batteries are installed, how they were manufactured and how sustainable they are.'}),"\n",(0,i.jsx)(t.p,{children:"The purpose of this document is the description of the Asset Administration Shell submodel Battery Pass. It defines the battery identity and all relevant attributes. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships."}),"\n",(0,i.jsx)(t.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,i.jsx)(t.p,{children:"The purpose of this document is the description of the Asset Administration Shell model Battery Pass. It defines the product identity and all relevant attributes. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships."}),"\n",(0,i.jsxs)(t.p,{children:["Every data provider ",(0,i.jsx)(t.strong,{children:"MUST"})," provide the data conformant to the semantic model specified in this document.\nThe unique identifier of the semantic model specified in this document ",(0,i.jsx)(t.strong,{children:"MUST"})," be used by the data provider to define the semantics of the data being transferred.\nEvery certified business application using the Single Level BoM As Specified data ",(0,i.jsx)(t.strong,{children:"MUST"})," be able to consume data conformant to the semantic model specified in this document.\nThis semantic model ",(0,i.jsx)(t.strong,{children:"MUST"})," be made available in the central Semantic Hub.\nData consumers and data provider ",(0,i.jsx)(t.strong,{children:"MUST"})," comply with the license of the semantic model."]}),"\n",(0,i.jsxs)(t.p,{children:["In the Catena-X data space Digital Passport data ",(0,i.jsx)(t.strong,{children:"MUST"})," be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Technical communication due to Data Sovereignty requirements via ",(0,i.jsx)(t.a,{href:"#31-normative-references",children:"CX-0018"})]}),"\n",(0,i.jsxs)(t.li,{children:["Exchange of data via digital twins as outlines in ",(0,i.jsx)(t.a,{href:"#31-normative-references",children:"CX-0003"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The JSON Payload of data providers ",(0,i.jsx)(t.strong,{children:"MUST"})," be conformant to the JSON Schema as specified in this document."]}),"\n",(0,i.jsx)(t.h3,{id:"22-specification-artifacts",children:"2.2 SPECIFICATION ARTIFACTS"}),"\n",(0,i.jsxs)(t.p,{children:['The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification ',(0,i.jsx)(t.a,{href:"#32-non-normative-references",children:"SMT"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["This aspect model is written in SAMM 2.0.0 as a modeling language conformant to ",(0,i.jsx)(t.a,{href:"#31-normative-references",children:"CX-0003"})," as input for the semantic driven workflow."]}),"\n",(0,i.jsxs)(t.p,{children:["Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to ",(0,i.jsx)(t.a,{href:"#31-normative-references",children:"CX-0003"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"23-license",children:"2.3 LICENSE"}),"\n",(0,i.jsx)(t.p,{children:"This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons."}),"\n",(0,i.jsx)(t.h3,{id:"24-identifier-of-semantic-model",children:"2.4 IDENTIFIER OF SEMANTIC MODEL"}),"\n",(0,i.jsx)(t.p,{children:"The semantic model has the unique identifier"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"    <urn:samm:io.catenax.battery.battery_pass:4.0.0#> \n"})}),"\n",(0,i.jsxs)(t.p,{children:["This identifier ",(0,i.jsx)(t.strong,{children:"MUST"})," be used by the data provider to define the semantics of the data being transferred."]}),"\n",(0,i.jsx)(t.h3,{id:"25-formats-of-semantic-model",children:"2.5 FORMATS OF SEMANTIC MODEL"}),"\n",(0,i.jsx)(t.p,{children:"All formats can be generated through the turtle file and the SAMM cli."}),"\n",(0,i.jsx)(t.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF TURTLE"}),"\n",(0,i.jsx)(t.p,{children:"he rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.\nIt can be found in the current version 2.0.0 in the github repository."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.battery_pass/4.0.0/BatteryPass.ttl\n"})}),"\n",(0,i.jsx)(t.p,{children:"The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation."}),"\n",(0,i.jsx)(t.h4,{id:"252-json-schema",children:"2.5.2 JSON SCHEMA"}),"\n",(0,i.jsx)(t.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only\npayload of the Asset Administration Shell for the API operation "GetSubmodel" (see CX-0002).'}),"\n",(0,i.jsx)(t.h4,{id:"253-aasx",children:"2.5.3 AASX"}),"\n",(0,i.jsx)(t.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".\nIt can be found in the current version 2.0.0 in the "gen" folder github repository.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-txt",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.battery_pass/4.0.0/BatteryPass.json\n"})}),"\n",(0,i.jsx)(t.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,i.jsx)(t.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0002 Digital Twins in Catena - X v2.0.0"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0003 SAMM Aspect Meta Model v1.0.2"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0004 Governance Process v1.0.1"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0018 Eclipse Data Space Connector (EDC) v2.0.1"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0010 Business Partner Number v2.0.0"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["[SMT] How to create a submodel template specification. Guideline. Download from: ",(0,i.jsx)(t.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf"})]}),"\n",(0,i.jsx)(t.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A reference implementation of an application using or providing data conformant to this aspect model can be found in a beta environment available on request."}),"\n",(0,i.jsx)(t.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,i.jsx)(t.h3,{id:"figures",children:"FIGURES"}),"\n",(0,i.jsx)(t.h3,{id:"tables",children:"TABLES"}),"\n",(0,i.jsx)(t.h2,{id:"legal",children:"Legal"}),"\n",(0,i.jsxs)(t.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,i.jsx)(t.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);