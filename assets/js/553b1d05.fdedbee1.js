"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[7600],{76390:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=n(74848),s=n(28453);const a={},o="CX-0099 Data Model: Certificate of Decommissioning v1.0.0",r={id:"standards/CX-0099-DataModelCertificateofDecommissioning/CX-0099-DataModelCertificateofDecommissioning",title:"CX-0099 Data Model: Certificate of Decommissioning v1.0.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0099-DataModelCertificateofDecommissioning/CX-0099-DataModelCertificateofDecommissioning.md",sourceDirName:"standards/CX-0099-DataModelCertificateofDecommissioning",slug:"/standards/CX-0099-DataModelCertificateofDecommissioning/",permalink:"/docs/standards/CX-0099-DataModelCertificateofDecommissioning/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0098 Aspect Model Secondary Material Content v.2.0.0",permalink:"/docs/standards/CX-0098-AspectModelSecondaryMaterialContent/"},next:{title:"CX-0100 Triangle for Secondary Marketplace v1.0.0",permalink:"/docs/standards/CX-0100-TriangleForSecondaryMarketplace/"}},c={},d=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 CONFORMANCE",id:"13-conformance",level:3},{value:"1.4 PROOF OF CONFORMITY",id:"14-proof-of-conformity",level:3},{value:"1.5 EXAMPLE",id:"15-example",level:3},{value:"1.6 TERMINOLOGY",id:"16-terminology",level:3},{value:"2 ASPECT MODEL &quot;Certificate of Decommissioning&quot;",id:"2-aspect-model-certificate-of-decommissioning",level:2},{value:"2.1 INTRODUCTION",id:"21-introduction",level:3},{value:"2.2 SPECIFICATION ARTIFACTS",id:"22-specification-artifacts",level:2},{value:"2.3 LICENSE",id:"23-license",level:3},{value:"2.4 IDENTIFIER OF SEMANTIC MODEL",id:"24-identifier-of-semantic-model",level:3},{value:"2.5 FORMATS OF SEMANTIC MODEL",id:"25-formats-of-semantic-model",level:3},{value:"2.5.1 RDF Turtle",id:"251-rdf-turtle",level:4},{value:"2.5.2 JSON schema",id:"252-json-schema",level:4},{value:"2.5.3 AASX",id:"253-aasx",level:4},{value:"3. References",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"cx-0099-data-model-certificate-of-decommissioning-v100",children:"CX-0099 Data Model: Certificate of Decommissioning v1.0.0"}),"\n",(0,t.jsx)(i.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(i.p,{children:"In the context of a circular economy, a simplified lifecycle model of a physical asset includes the lifecycle phases design, production, use, and end of life (EoL). Start and end of the individual phases are defined by certificates. In the sense of circularity, the EoL phase is the link towards a new life."}),"\n",(0,t.jsx)(i.p,{children:"The Certificate of Decommissioning (CoDM) is the certificate that describes the point in time at which an asset is permanently decommissioned. The use phase is completed, and the end-of-life (EoL) phase starts."}),"\n",(0,t.jsx)(i.p,{children:"The certificate contains information about what, when, and by whom it was decommissioned. Other aspects, such as ownership, status, and so on, are not considered via this CoDM certificate."}),"\n",(0,t.jsx)(i.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,t.jsx)(i.p,{children:"This document describes a semantic model used in the Catena-X network."}),"\n",(0,t.jsx)(i.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,t.jsx)(i.p,{children:"List for which roles the standard is relevant:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Data Provider / Consumer"}),"\n",(0,t.jsx)(i.li,{children:"Business Application Provider"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Scope of this document is to provide guidance about the structure of the\ndata model which is used for the PCF Value exchange. The used REST API\nis not part of this document and is described in a separate document."}),"\n",(0,t.jsx)(i.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,t.jsx)(i.p,{children:'"Certificates" are attestations to make a condition or situation determinable.\nIn this sense, the Certificate of Decommissioning (CoDM) describes the point in time of the life cycle of an asset at which it is irrevocably decommissioned. The usage phase is completed, and the end-of-live (EoL) phase is starting.\nWith the loss of the purpose of the assets, e.g., car, all sub-components are also transferred in the realization phase.\nThe certificate can be withdrawn by the issuer within a time window without giving reasons. In Catena-X it is fixed at 7 calendar days.\nThe certificate is only awarded once in a life cycle of an asset.'}),"\n",(0,t.jsx)(i.h3,{id:"13-conformance",children:"1.3 CONFORMANCE"}),"\n",(0,t.jsx)(i.p,{children:"As well as sections marked as non-normative, all authoring guidelines,\ndiagrams, examples, and notes in this specification are non-normative.\nEverything else in this specification is normative."}),"\n",(0,t.jsxs)(i.p,{children:["The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,\nSHOULD and SHOULD NOT in this document are to be interpreted as\ndescribed in\xa0",(0,t.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"BCP\n14"}),"\xa0[",(0,t.jsx)(i.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",children:"RFC2119"}),"]\n[",(0,t.jsx)(i.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",children:"RFC8174"}),"] when, and\nonly when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(i.h3,{id:"14-proof-of-conformity",children:"1.4 PROOF OF CONFORMITY"}),"\n",(0,t.jsx)(i.p,{children:"All participants and their solutions will need to prove that they conform\nwith the Catena-X standards. To validate that the standards are applied\ncorrectly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,t.jsx)(i.h3,{id:"15-example",children:"1.5 EXAMPLE"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  "revocationDate" : "2002-09-24-06:00",\n  "catenaXId" : "13172f88-b228-4501-a2c9-f0a038eb85ca",\n  "serialNumber" : "qwertzuiop",\n  "issueDate" : "2002-09-24-06:00",\n  "issuer" : "BPNLBMW000000001"\n}\n'})}),"\n",(0,t.jsx)(i.h3,{id:"16-terminology",children:"1.6 TERMINOLOGY"}),"\n",(0,t.jsx)(i.p,{children:"Decommissioning Certificate: Certificate of Decommissioning (CoDM): Aspect model to describe the point in time when an asset gets unreversible decommissioned and the End of Live starts"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"catenaXId (UUID):"})," The Digital Twin identification of the decommissioned object"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"issueDate (Date):"})," The date when the item has been decommissioned by the issuer"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Issuer (Business Partner Number BPN)"}),": Issuer is the business partner who creates the certificate, for vehicles only authorized dismantler. The issuer is identified via the BPN, which is the unique identifier of a partner within Catena-x."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"revocationDate (Date):"})," The date when the certificate is revoked by the issuer. This only happens in exceptional cases when a vehicle has been marked as decommissioned by error or any other error is made in the issuance of the certificate."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"serialNumber (String):"}),' "real-world" identification of the catenaXId (UUID) which is bound to be destructed. For example, the VAN in case of a complete vehicle.']}),"\n",(0,t.jsx)(i.h2,{id:"2-aspect-model-certificate-of-decommissioning",children:'2 ASPECT MODEL "Certificate of Decommissioning"'}),"\n",(0,t.jsx)(i.h3,{id:"21-introduction",children:"2.1 INTRODUCTION"}),"\n",(0,t.jsx)(i.p,{children:"The adequate disposal of assets is regulated by law at European and national level, for example in Germany via the end-of-life vehicle regulation, the recycling law (KrWG) and others."}),"\n",(0,t.jsx)(i.p,{children:"In this context, the CoDM aspect model provides digitally the point in time at which proper disposal started by an authorized company.\nIt thus forms a defined, structural milestone in the asset life cycle with significance for a wide range of application scenarios such as:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Automation of current and future digitized reporting processes"}),"\n",(0,t.jsx)(i.li,{children:"Calculation and reporting of comparable recycling quotas, product carbon footprint determination etc."}),"\n",(0,t.jsx)(i.li,{children:"Allocation of R-strategies incentives"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The participant as listed under ",(0,t.jsx)(i.a,{href:"#11-audience--scope",children:"1.1"})," ",(0,t.jsx)(i.strong,{children:"MUST"})," provide a positive E2E\ntest result in order to show that the provided CoDM data follows the logic\ndescribed under ",(0,t.jsx)(i.a,{href:"#2-aspect-model-certificate-of-decommissioning",children:"2."})]}),"\n",(0,t.jsxs)(i.p,{children:["A model validator ",(0,t.jsx)(i.strong,{children:"MUST"})," be created in order to prove the correctness of the data\nmodel. A generic test set created for the model ",(0,t.jsx)(i.strong,{children:"MUST"})," prove the expected\nresults."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"The unique identifier of the semantic model specified in this document\nMUST be used by the data provider to define the semantics of the data\nbeing transferred."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:'A CoDM in Catena-X can only be issued by an authorized business partner with the role "dismantler".'}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Every certified business application relying on certificate of decommissioning data MUST be able to consume data conformant to the data model specified in this document."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Data consumers and data providers ",(0,t.jsx)(i.strong,{children:"MUST"})," comply with the license of the data model."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["In the Catena-X data space certificate of decommissioning  data ",(0,t.jsx)(i.strong,{children:"MUST"})," be requested and\nexchanged via Eclipse Dataspace Connector (EDC) conformant to ",(0,t.jsx)(i.a,{href:"#31-normative-references",children:"CX-0018"}),"\nand ",(0,t.jsx)(i.a,{href:"#31-normative-references",children:"CX-0002"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"22-specification-artifacts",children:"2.2 SPECIFICATION ARTIFACTS"}),"\n",(0,t.jsxs)(i.p,{children:['The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification ',(0,t.jsx)(i.a,{href:"#32-non-normative-references",children:"SMT"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["This PCF aspect model is written in SAMM 2.0.0 as a modeling language conformant to ",(0,t.jsx)(i.a,{href:"#3-references",children:"CX-0003"})," as input for the semantic driven workflow."]}),"\n",(0,t.jsxs)(i.p,{children:["Like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F conformant to ",(0,t.jsx)(i.a,{href:"#3-references",children:"CX-0003"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"23-license",children:"2.3 LICENSE"}),"\n",(0,t.jsx)(i.p,{children:"This Catena-X data model is an outcome of Catena-X use case group Live Quality Loops (QAX). This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F ."}),"\n",(0,t.jsx)(i.p,{children:"The license information is available in github."}),"\n",(0,t.jsx)(i.p,{children:"In case of doubt the license, copyright and authors information in github overwrites the information in this specification document"}),"\n",(0,t.jsx)(i.h3,{id:"24-identifier-of-semantic-model",children:"2.4 IDENTIFIER OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(i.p,{children:"The semantic model has the unique identifier:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-txt",children:"urn:bamm:io.catenax.decomissioning_certificate:1.0.0\n"})}),"\n",(0,t.jsx)(i.h3,{id:"25-formats-of-semantic-model",children:"2.5 FORMATS OF SEMANTIC MODEL"}),"\n",(0,t.jsx)(i.p,{children:"All different formats of the semantic model can be found in the github repository."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-txt",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.decomissioning_certificate/1.0.0\n"})}),"\n",(0,t.jsx)(i.h4,{id:"251-rdf-turtle",children:"2.5.1 RDF Turtle"}),"\n",(0,t.jsx)(i.p,{children:"The RDF Turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be accessed via github:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-txt",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.decomissioning_certificate/1.0.0/DecommissioningCertificate.ttl\n"})}),"\n",(0,t.jsx)(i.p,{children:'The open source command line tool of the Eclipse Semantic Modeling Framework is used for generation of other file formats like for example a JSON schema, AASX for Asset Administration Shell Submodel Template or a HTML documentation. These other formats are saved in the "gen" folder in github:'}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-txt",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.decomissioning_certificate/1.0.0/gen\n"})}),"\n",(0,t.jsx)(i.h4,{id:"252-json-schema",children:"2.5.2 JSON schema"}),"\n",(0,t.jsx)(i.p,{children:'A JSON schema can be generated from the RDF Turtle file. The JSON schema defines the value-only payload of the Asset Administration Shell for the API operation "GetSubmodel".'}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-txt",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.decomissioning_certificate/1.0.0/gen/DecommissioningCertificate-schema.json\n"})}),"\n",(0,t.jsx)(i.h4,{id:"253-aasx",children:"2.5.3 AASX"}),"\n",(0,t.jsxs)(i.p,{children:["An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a submodel template specification conformant to [",(0,t.jsx)(i.a,{href:"#32-non-normative-references",children:"SMT"}),"]."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-text",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.decomissioning_certificate/1.0.0/gen/DecommissioningCertificate.aasx\n"})}),"\n",(0,t.jsx)(i.p,{children:"Note: As soon as the specification V3.0 of the Asset Administration Shell specification is available\nan update will be provided."}),"\n",(0,t.jsx)(i.h2,{id:"3-references",children:"3. References"}),"\n",(0,t.jsx)(i.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0003 BAMM Aspect Meta Model v1.0.2"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0002 Digital Twins in Catena - X v2.0.0"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0018 Sovereign Data Exchange (EDC) v2.0.1"})}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf",children:"SMT- How to create submodel template specification"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var t=n(96540);const s={},a=t.createContext(s);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);