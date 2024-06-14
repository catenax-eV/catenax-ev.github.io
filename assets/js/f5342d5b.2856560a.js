"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[9218],{95010:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=i(74848),s=i(28453);const a={},r="CX-0103 Digital Product Passport v.1.1.0",o={id:"standards/CX-0103-AspectModelDigitalProductPassport/CX-0103-AspectModelDigitalProductPassport",title:"CX-0103 Digital Product Passport v.1.1.0",description:"FOR WHOM IS THE STANDARD DESIGNED",source:"@site/versioned_docs/version-24.03/standards/CX-0103-AspectModelDigitalProductPassport/CX-0103-AspectModelDigitalProductPassport.md",sourceDirName:"standards/CX-0103-AspectModelDigitalProductPassport",slug:"/standards/CX-0103-AspectModelDigitalProductPassport/",permalink:"/docs/standards/CX-0103-AspectModelDigitalProductPassport/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0102 Functional Mock Up v.1.0.0",permalink:"/docs/standards/CX-0102-Functional-Mock-Up/"},next:{title:"CX - 0104 Aspect Model AssetTrackerLinks v.1.0.0",permalink:"/docs/standards/CX-0104-AspectModelAssetTrackerLinks/"}},d={},l=[{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"ABSTRACT",id:"abstract",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2 ASPECT MODEL \u201cDigital Product Passport\u201d",id:"2-aspect-model-digital-product-passport",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 SPECIFICATION ARTIFACTS",id:"22-specification-artifacts",level:3},{value:"2.3 LICENSE",id:"23-license",level:3},{value:"2.4 IDENTIFIER OF SEMANTIC MODEL",id:"24-identifier-of-semantic-model",level:3},{value:"2.5 FORMATS OF SEMANTIC MODEL",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF TURTLE",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON SCHEMA",id:"252-json-schema",level:4},{value:"2.5.3 AASX",id:"253-aasx",level:4},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cx-0103-digital-product-passport-v110",children:"CX-0103 Digital Product Passport v.1.1.0"}),"\n",(0,t.jsx)(n.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,t.jsxs)(n.p,{children:["See chapter ",(0,t.jsx)(n.a,{href:"#11-audience--scope",children:"1.1"})]}),"\n",(0,t.jsx)(n.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,t.jsx)(n.p,{children:"The changes to the Digital Product Passport mainly involve adjustments to make the model more compatible with other models, achieved by importing several shared models. The shared models are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["urn:samm",":io",".catenax.shared.address_characteristic:3.0.0#"]}),"\n",(0,t.jsxs)(n.li,{children:["urn:samm",":io",".catenax.shared.contact_information:3.0.0#"]}),"\n",(0,t.jsxs)(n.li,{children:["urn:samm",":io",".catenax.shared.business_partner_number:1.0.0#"]}),"\n",(0,t.jsxs)(n.li,{children:["urn:samm",":io",".catenax.shared.quantity:1.0.0#"]}),"\n",(0,t.jsxs)(n.li,{children:["urn:samm",":io",".catenax.shared.uuid:1.0.0#"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'To make the model more flexible and suitable for the use outside of catena-x several "either-or" possibilities are implemented.\nFor Addresses following changes are made:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"All company identifiers can be a company name, full address and contact or a simple identifier with a type. This identifier can be a BPNL."}),"\n",(0,t.jsx)(n.li,{children:"The BPNL is referenced from the shared model."}),"\n",(0,t.jsx)(n.li,{children:"All site identifiers can be a name and full address or a simple identifier. This identifier can be a BPNA."}),"\n",(0,t.jsx)(n.li,{children:"The BPNA is referenced from the shared model."}),"\n",(0,t.jsx)(n.li,{children:"The contact and address information in both cases are referenced from their respective shared models."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For the passport identifier following changes are made:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The attribute passportIdentifier is added which can be a UUID in the case of catena-X, or any other type of identifier."}),"\n",(0,t.jsx)(n.li,{children:"The UUID is referenced from the shared model."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Additions to the model"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Carbon and environmental footprint have new properties "performance class", "manufacturing plant" and "declaration"'}),"\n",(0,t.jsx)(n.li,{children:"A hazard class was added voluntary"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Smaller changes in the model:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Physical dimensions are linked to the shared model quantity without doing structural changes."}),"\n",(0,t.jsx)(n.li,{children:"State has a more defined enumeration with the values original, repurposed, re-used, remanufactured or waste."}),"\n",(0,t.jsx)(n.li,{children:"Renewable and recycled content are identified trough a share instead of being flagged"}),"\n",(0,t.jsx)(n.li,{children:"A list of identifiers can be provided instead of only one"}),"\n",(0,t.jsx)(n.li,{children:"Manufacturing date is mandatory"}),"\n",(0,t.jsx)(n.li,{children:"Naming of the spare part producers changed to spare part sources"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"Digital Product Passports addresses three needs by the industry: First, they gather all relevant information about a product in a single, machine-readable document. Second, digital product passports answer increasing regulatory requirements and demand for sustainability information along the value chain of a product. And third, Digital Product Passports are an important enabler for a circular economy. The collected data is defined via standards specified by the Catena-X network and obtained from the industry. Content of the Product Passport is product-related information that is useful and necessary for the data consumer and is limited to the required minimum of necessary information."}),"\n",(0,t.jsxs)(n.p,{children:['The data model "DigitalProductPassport" in the version 3.0.0 corresponds to the Digital Product Passport information required by the proposed Ecodesign Regulation (',(0,t.jsx)(n.a,{href:"https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/sustainable-products/ecodesign-sustainable-products_en",children:"ESPR-2022"}),') from March 30th, 2022 and describes the data that is collected and available during the lifespan of a product. The vision of the project "Digital Product Pass" is to achieve 100% material circularity, a trusted, transparent, traceable, standardized, and automatic digital supply chain to holistically enable material circularity.']}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"This document describes a semantic model used in the Catena-X network."}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The purpose of this document is the description of the Asset Administration Shell model Digital Product Passport. It defines the product identity and all relevant attributes as required from the regulation. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships."}),"\n",(0,t.jsx)(n.p,{children:"This standard is relevant for following roles:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,t.jsx)(n.li,{children:"Business Application Provider"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The Digital Product Passport establishes a set of data requirements for different product groups. The parameters will contribute to a more transparent and circular economy within the European Union. The detailed description is given in the Ecodesign for Sustainable Products Regulation Proposal (",(0,t.jsx)(n.a,{href:"https://environment.ec.europa.eu/publications/proposal-ecodesign-sustainable-products-regulation_en",children:"ESPR"}),"). From these regulations, content clusters for circularity were identified, and concrete circularity parameters for the Product Passport derived. The data sets also contain information, which are relevant for closed and open loop business models. It is important to note that the data model contains information / data fields, which are optional and mandatory for regulation fulfillment. It is also worth mentioning that sharing information within the network is based on decentralized technologies and is always based on the individual decision by each provider."]}),"\n",(0,t.jsx)(n.p,{children:"The Digital Product Passport is the core model and can be used as the root class for other, specific, product models. The Passport itself is defined by the usage of Catena-X shared services, a standardized data model and an application which will enable stakeholders to access the relevant data. The first version of the Product Passport model consists out of the following information:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Passport Metadata"}),"\n",(0,t.jsx)(n.li,{children:"Product Identification"}),"\n",(0,t.jsx)(n.li,{children:"Product Typology"}),"\n",(0,t.jsx)(n.li,{children:"Product Characteristics"}),"\n",(0,t.jsx)(n.li,{children:"Sustainability Information"}),"\n",(0,t.jsx)(n.li,{children:"Commercial Information"}),"\n",(0,t.jsx)(n.li,{children:"Operational Information"}),"\n",(0,t.jsx)(n.li,{children:"Sources"}),"\n",(0,t.jsx)(n.li,{children:"Additional Data"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This data model is based on the new proposed Ecodesign Regulation (",(0,t.jsx)(n.a,{href:"https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/sustainable-products/ecodesign-sustainable-products_en",children:"ESPR-2022"}),") from March 30th, 2022 and is continuously adapted to the basic conditions over time. Amendments to this regulation came from the Council of the European Union (",(0,t.jsx)(n.a,{href:"https://data.consilium.europa.eu/doc/document/ST-9014-2023-INIT/en/pdf",children:"Council Amendment"}),") from May 15th, 2023 and the European Parliament (",(0,t.jsx)(n.a,{href:"https://www.europarl.europa.eu/doceo/document/TA-9-2023-0272_EN.html",children:"Parliament Amendment"}),") from July 12th, 2023 and is shown at specific points in the model. However, the main basis remains the version from the Committee."]}),"\n",(0,t.jsx)(n.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words ",(0,t.jsx)(n.strong,{children:"MAY"}),", ",(0,t.jsx)(n.strong,{children:"MUST"}),", ",(0,t.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,t.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,t.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,t.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,t.jsx)(n.strong,{children:"SHOULD"})," and ",(0,t.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,t.jsx)(n.p,{children:'The JSON example can be generated from the SAMM.ttl file or be found in the current version 3.0.0 in the "gen" folder github repository.'}),"\n",(0,t.jsx)(n.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Ecodesign for Sustainable Products regulation (ESPR)"}),"\n: The proposal establishes a framework to set ecodesign requirements for specific product groups to significantly improve their circularity, energy performance and other environmental sustainability aspects."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Aspect Model"}),"\n: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect."]}),"\n",(0,t.jsx)(n.p,{children:": Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model."}),"\n",(0,t.jsx)(n.p,{children:": Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing)."}),"\n",(0,t.jsx)(n.h2,{id:"2-aspect-model-digital-product-passport",children:"2 ASPECT MODEL \u201cDigital Product Passport\u201d"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The Digital Product Passport model is a data model that summarizes the components, materials and chemical substances or information on repairability, spare parts or professional disposal for a product. The data comes from all phases of the product life cycle and can be used for various purposes in all these phases (design, production, use, disposal). This data model is based on the new proposed Ecodesign Regulation from 2022."}),"\n",(0,t.jsx)(n.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,t.jsx)(n.p,{children:"The purpose of this document is the description of the Asset Administration Shell model Product Passport. It defines the product identity and all relevant attributes. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships."}),"\n",(0,t.jsxs)(n.p,{children:["Every data provider ",(0,t.jsx)(n.strong,{children:"MUST"})," provide the data conformant to the semantic model specified in this document."]}),"\n",(0,t.jsxs)(n.p,{children:["The unique identifier of the semantic model specified in this document ",(0,t.jsx)(n.strong,{children:"MUST"})," be used by the data provider to define the semantics of the data being transferred."]}),"\n",(0,t.jsxs)(n.p,{children:["Every certified business application using the Single Level BoM As Specified data ",(0,t.jsx)(n.strong,{children:"MUST"})," be able to consume data conformant to the semantic model specified in this document."]}),"\n",(0,t.jsxs)(n.p,{children:["This semantic model ",(0,t.jsx)(n.strong,{children:"MUST"})," be made available in the central Semantic Hub."]}),"\n",(0,t.jsxs)(n.p,{children:["Data consumers and data provider ",(0,t.jsx)(n.strong,{children:"MUST"})," comply with the license of the semantic model."]}),"\n",(0,t.jsxs)(n.p,{children:["In the Catena-X data space Digital Passport data ",(0,t.jsx)(n.strong,{children:"MUST"})," be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to ",(0,t.jsx)(n.a,{href:"#31-normative-references",children:"CX-0018"})," and ",(0,t.jsx)(n.a,{href:"#31-normative-references",children:"CX-0002"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The JSON Payload of data providers ",(0,t.jsx)(n.strong,{children:"MUST"})," be conformant to the JSON Schema as specified in this document."]}),"\n",(0,t.jsx)(n.h3,{id:"22-specification-artifacts",children:"2.2 SPECIFICATION ARTIFACTS"}),"\n",(0,t.jsxs)(n.p,{children:['The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification ',(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This aspect model is written in SAMM 2.0.0 as a modeling language conformant to ",(0,t.jsx)(n.a,{href:"#31-normative-references",children:"CX-0003"})," as input for the semantic driven workflow."]}),"\n",(0,t.jsxs)(n.p,{children:["Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to ",(0,t.jsx)(n.a,{href:"#31-normative-references",children:"CX-0003"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"23-license",children:"2.3 LICENSE"}),"\n",(0,t.jsx)(n.p,{children:"This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons."}),"\n",(0,t.jsx)(n.h3,{id:"24-identifier-of-semantic-model",children:"2.4 IDENTIFIER OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"The semantic model has the unique identifier"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"    <urn:samm:io.catenax.generic.digital_product_passport:3.0.0#> \n"})}),"\n",(0,t.jsxs)(n.p,{children:["This identifier ",(0,t.jsx)(n.strong,{children:"MUST"})," be used by the data provider to define the semantics of the data being transferred."]}),"\n",(0,t.jsx)(n.h3,{id:"25-formats-of-semantic-model",children:"2.5 FORMATS OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(n.p,{children:"All formats can be generated through the turtle file and the SAMM cli."}),"\n",(0,t.jsx)(n.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF TURTLE"}),"\n",(0,t.jsx)(n.p,{children:"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.\nIt can be found in the current version 2.0.0 in the github repository."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.generic.digital_product_passport/3.0.0/DigitalProductPassport.ttl\n"})}),"\n",(0,t.jsx)(n.p,{children:"The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation."}),"\n",(0,t.jsx)(n.h4,{id:"252-json-schema",children:"2.5.2 JSON SCHEMA"}),"\n",(0,t.jsx)(n.p,{children:'A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".\nIt can be found in the current version 2.0.0 in the "gen" folder github repository.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.generic.digital_product_passport/3.0.0/gen/DigitalProductPassport.json\n"})}),"\n",(0,t.jsx)(n.h4,{id:"253-aasx",children:"2.5.3 AASX"}),"\n",(0,t.jsxs)(n.p,{children:["An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification conformant to ",(0,t.jsx)(n.a,{href:"#32-non-normative-references",children:"SMT"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0002 Digital Twins in Catena - X v2.0.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX - 0003 SAMM Aspect Meta Model v1.0.2"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX - 0004 Governance Process v1.0.1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX - 0018 Eclipse Data Space Connector (EDC) v2.0.1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX - 0010 Business Partner Number v2.0.0"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["[SMT] How to create a submodel template specification. Guideline. Download from: ",(0,t.jsx)(n.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf"})]}),"\n",(0,t.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A reference implementation of an application using or providing data conformant to this aspect model can be found in a beta environment available on request."}),"\n",(0,t.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,t.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,t.jsx)(n.h3,{id:"tables",children:"TABLES"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);