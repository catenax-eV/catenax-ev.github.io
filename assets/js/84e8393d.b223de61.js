"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[7801],{55150:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(74848),s=t(28453);const a={},r="CX-0107-AspectModelReuseCertificate v.1.0.0",o={id:"standards/CX-0107-AspectModelReuseCertificate/CX-0107-AspectModelReuseCertificate",title:"CX-0107-AspectModelReuseCertificate v.1.0.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0107-AspectModelReuseCertificate/CX-0107-AspectModelReuseCertificate.md",sourceDirName:"standards/CX-0107-AspectModelReuseCertificate",slug:"/standards/CX-0107-AspectModelReuseCertificate/",permalink:"/docs/standards/CX-0107-AspectModelReuseCertificate/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX - 0106 Aspect Model IotSensorData v.1.0.0",permalink:"/docs/standards/CX-0106-AspectModelIoTSensorData/CX-0106-AspectModelIoTSensorData-1.0.0"},next:{title:"CX - 0108 Waste Certificate v.1.0.0",permalink:"/docs/standards/CX-0108-AspectModelWasteCertificate/"}},c={},l=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2 ASPECT MODEL \u201cReuse-Certificate\u201d",id:"2-aspect-model-reuse-certificate",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 SPECIFICATION ARTIFACTS",id:"22-specification-artifacts",level:3},{value:"2.3 LICENSE",id:"23-license",level:3},{value:"2.4 IDENTIFIER OF SEMANTIC MODEL",id:"24-identifier-of-semantic-model",level:3},{value:"2.5 FORMATS OF SEMANTIC MODEL",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF Turtle",id:"251-rdf-turtle",level:3},{value:"2.5.2. JSON Schema",id:"252-json-schema",level:3},{value:"2.5.3 AASX",id:"253-aasx",level:3},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 Non-normative References",id:"31-non-normative-references",level:3},{value:"ANNEXES",id:"annexes",level:3}];function d(e){const i={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"cx-0107-aspectmodelreusecertificate-v100",children:"CX-0107-AspectModelReuseCertificate v.1.0.0"}),"\n",(0,n.jsx)(i.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,n.jsx)(i.p,{children:"In the context of a circular economy, a simplified life cycle model of a physical asset comprises the design, production, use and end of life (EoL) phases. Certificates define the beginning and end of each phase. In the context of a circular economy, the EoL phase serves as a link to a new life."}),"\n",(0,n.jsx)(i.p,{children:"The Reuse-Certificate denotes the moment or status update when an economic asset transitions into a new state under the following definition made by the EU in the proposal 2023/0284 (2023/07/13): \u2018reuse\u2019 means any operation by which parts or components of end-of life vehicles are used for the same purpose for which they were conceived. The EoL (end of life) phase is completed, and a new product life cycle is started."}),"\n",(0,n.jsx)(i.p,{children:"The certificate contains information about what, when, and by whom it was issued. Other aspects, such as ownership, status, and so on, are not considered via this certificate."}),"\n",(0,n.jsx)(i.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,n.jsx)(i.p,{children:"This document describes a semantic model used in the Catena-X network."}),"\n",(0,n.jsx)(i.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,n.jsx)(i.p,{children:"This Standard focuses on the Circular Economy Use Case. List for which roles the standard is relevant. This includes relevant requirements for:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Data Provider, that want to provide / end-of-life data within a circular economy via Catena-X"}),"\n",(0,n.jsx)(i.li,{children:"Data Consumer, who wish to obtain status information about an asset/component/liquid/material"}),"\n",(0,n.jsx)(i.li,{children:"Business Application Provider / developer supporting the provisioning and consuming of circular economy information"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,n.jsx)(i.p,{children:"Certificates, as defined in the context of End of Life (EoL), serve as attestations that describe the status or current life cycle phase of a vehicle or component."}),"\n",(0,n.jsx)(i.p,{children:'The reuse certificate describes the time at which a component begins a new life cycle phase.. In the case of the Reuse Certificate, it refers to the moment when a component is sold to a customer after the decision for the "Reuse" strategy has been made, and the customer is pursuing the purpose of direct reuse.The EoL-phase concludes, and a new product life cycle commences.'}),"\n",(0,n.jsx)(i.p,{children:"Each certificate can be withdrawn by the issuer within a time window without giving reasons. In Catena-X it is fixed at 7 calendar days."}),"\n",(0,n.jsx)(i.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,n.jsx)(i.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative.\nEverything else in this specification is normative. The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in BCP [14 RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here."}),"\n",(0,n.jsx)(i.p,{children:"All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,n.jsxs)(i.p,{children:["Please refer to: ",(0,n.jsx)(i.a,{href:"https://catenax.net/en/catena-x-introduce-implement/certification",children:"https://catenax.net/en/catena-x-introduce-implement/certification"})," for the process of conformity assessment and certification. Since this Certificate describes a standard, participants MUST fulfill respective conformity assessment criteria in addition to the specific criteria mentioned in this document. The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components."]}),"\n",(0,n.jsx)(i.p,{children:"The allocation of dismantler role in Catena-X is part of a separate authorization and onboarding process."}),"\n",(0,n.jsxs)(i.p,{children:["The Reuse-Certificate in Catena-X ",(0,n.jsx)(i.strong,{children:"MUST"}),' be issued by an authorized business partner with the verifiable CX credential "dismantler".']}),"\n",(0,n.jsx)(i.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,n.jsx)(i.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,n.jsx)(i.p,{children:"The following terms are especially relevant for the understanding of the standard:"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Reuse-Certificate:"}),' Aspect model to describe the point in time at which an asset enters the "reuse" life cycle phase']}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Dismantler:"})," Certified identity of dismantler, which needs a registration within Catena-X."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Article Number:"})," Unique identification assigned by the dismantler for internal referencing."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"VIN:"})," Vehicle Identification Number. Remark: this should be deducted from a reference to the vehicle TWIN."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"OE number:"})," original equipment number."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"CatenaXId Previous Life (UUID):"})," The Digital Twin identification of the reused object in previous life."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"CatenaXID (UUID):"})," The Digital Twin identification of the reused object."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"issueDate (Date):"})," The date when the item has been decommissioned by the issuer."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Supplier (Business Partner Number BPN):"})," Issuer Supplier is the business partner who creates the certificate, for vehicles only authorized dismantler. The issuer is identified via the BPN, which is the unique identifier of a partner within Catena-x."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"revocationDate (Date):"})," The date when the\u202fcertificate is revoked by the issuer. This only happens in exceptional cases when an asset has been marked as reused by error or any other error is made in the issuance of the certificate."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"SerialNumber (String):"}),' "real-world" identification of the catenaXId (UUID) which is bound to be reused. For example, the VAN in case of a complete vehicle.']}),"\n",(0,n.jsx)(i.p,{children:"Additional terminology used in this standard can be looked up in the glossary on the association homepage."}),"\n",(0,n.jsx)(i.h2,{id:"2-aspect-model-reuse-certificate",children:"2 ASPECT MODEL \u201cReuse-Certificate\u201d"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Every data provider of Reuse-Certificate data MUST provide the data conformant to the semantic model specified in this document."}),"\n",(0,n.jsx)(i.li,{children:"The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred."}),"\n",(0,n.jsx)(i.li,{children:"Every certified business application relying on Reuse-Certificate data MUST be able to consume data conformant to the semantic model specified in this document."}),"\n",(0,n.jsx)(i.li,{children:"This semantic model MUST be made available in the central Semantic Hub."}),"\n",(0,n.jsx)(i.li,{children:"Data consumers and data provider MUST comply with the license of the semantic model."}),"\n",(0,n.jsx)(i.li,{children:"In the Catena-X data space Reuse-Certificate data MUST be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002."}),"\n",(0,n.jsx)(i.li,{children:"Data providers MUST provide the data as part of a digital twin of a material/part level."}),"\n",(0,n.jsx)(i.li,{children:"The JSON Payload of data providers MUST be conformant to the JSON Schema as specified in this document."}),"\n",(0,n.jsx)(i.li,{children:'The Reuse-Certificate in Catena-X MUST be issued by an authorized business partner with the verifiable CX credential "dismantler".'}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,n.jsx)(i.p,{children:"The adequate disposal of assets is regulated by law at European and national level, for example in Germany via the end-of-life vehicle regulation, the recycling law (KrWG) and others."}),"\n",(0,n.jsx)(i.p,{children:"In this context, the Reuse aspect model provides digitally the point in time at which the part or component starts a new life. In that case, the EoL phase is completed."}),"\n",(0,n.jsx)(i.p,{children:"It thus forms a defined, structural milestone in the assets life cycle with significance for a wide range of application scenarios such as:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"automation of current and future digitized reporting processes."}),"\n",(0,n.jsx)(i.li,{children:"calculation and reporting of comparable recycling quotas, product carbon footprint determination etc."}),"\n",(0,n.jsx)(i.li,{children:"allocation of R-strategies incentives."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"22-specification-artifacts",children:"2.2 SPECIFICATION ARTIFACTS"}),"\n",(0,n.jsxs)(i.p,{children:['The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification ',(0,n.jsx)(i.a,{href:"#31-non-normative-references",children:"SMT"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003\nas input for the semantic deriven workflow."}),"\n",(0,n.jsx)(i.p,{children:"Like all Catena-X data models, this model is available in a machine-readable format on GitHub\nconformant to CX-0003."}),"\n",(0,n.jsx)(i.h3,{id:"23-license",children:"2.3 LICENSE"}),"\n",(0,n.jsx)(i.p,{children:"This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons."}),"\n",(0,n.jsx)(i.p,{children:"The license information is available in github."}),"\n",(0,n.jsx)(i.p,{children:"In case of doubt the license, copyright and authors information in github overwrites the information in this specification document."}),"\n",(0,n.jsx)(i.h3,{id:"24-identifier-of-semantic-model",children:"2.4 IDENTIFIER OF SEMANTIC MODEL"}),"\n",(0,n.jsx)(i.p,{children:"The semantic model has the unique identifier:"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["urn:samm",":io",".catenax.reuse_certificate:2.0.0#"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"25-formats-of-semantic-model",children:"2.5 FORMATS OF SEMANTIC MODEL"}),"\n",(0,n.jsx)(i.h3,{id:"251-rdf-turtle",children:"2.5.1 RDF Turtle"}),"\n",(0,n.jsx)(i.p,{children:"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be viewed by the following link:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.reuse_certificate/2.0.0/ReuseCertificate.ttl",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.reuse_certificate/2.0.0/ReuseCertificate.ttl"})}),"\n",(0,n.jsx)(i.h3,{id:"252-json-schema",children:"2.5.2. JSON Schema"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.reuse_certificate/2.0.0/gen/ReuseCertificate-schema.json",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.reuse_certificate/2.0.0/gen/ReuseCertificate-schema.json"})}),"\n",(0,n.jsx)(i.h3,{id:"253-aasx",children:"2.5.3 AASX"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.reuse_certificate/2.0.0/gen/ReuseCertificate-aas.xml",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.reuse_certificate/2.0.0/gen/ReuseCertificate-aas.xml"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.reuse_certificate/2.0.0/gen/ReuseCertificate.aasx",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.reuse_certificate/2.0.0/gen/ReuseCertificate.aasx"})}),"\n",(0,n.jsx)(i.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,n.jsx)(i.h3,{id:"31-non-normative-references",children:"3.1 Non-normative References"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"SMT- How to create submodel template specification"})}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["EU: ",(0,n.jsx)(i.a,{href:"https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/12633-End-of-life-vehicles-revision-of-EU-rules_en",children:"End-of-life vehicles \u2013 revision of EU rules"})]}),"\n",(0,n.jsxs)(i.p,{children:["GER: ",(0,n.jsx)(i.a,{href:"https://www.gesetze-im-internet.de/altautov/",children:"End-of-life vehicle regulation - AltfahrzeugV"})]}),"\n",(0,n.jsx)(i.h3,{id:"annexes",children:"ANNEXES"}),"\n",(0,n.jsx)(i.p,{children:"N/A"})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function r(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);