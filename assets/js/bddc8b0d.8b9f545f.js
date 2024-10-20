"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[8360],{69454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=t(74848),a=t(28453);const r={},s="CX-0063 Triangle for Product Carbon Footprint Request v2.1.0",d={id:"standards/CX-0063-TriangleForProductCarbonFootprintRequest/CX-0063-TriangleForProductCarbonFootprintRequest",title:"CX-0063 Triangle for Product Carbon Footprint Request v2.1.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0063-TriangleForProductCarbonFootprintRequest/CX-0063-TriangleForProductCarbonFootprintRequest.md",sourceDirName:"standards/CX-0063-TriangleForProductCarbonFootprintRequest",slug:"/standards/CX-0063-TriangleForProductCarbonFootprintRequest/",permalink:"/docs/standards/CX-0063-TriangleForProductCarbonFootprintRequest/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX - 0062 Triangle Traceability Notifications v1.0.0",permalink:"/docs/standards/CX-0062-TriangleTraceabilityNotifications/"},next:{title:"CX-0065 Triangle for Dismantling Service v1.0.0",permalink:"/docs/standards/CX-0065-TriangleForDismantlingService/"}},o={},l=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 ARCHITECTURE OVERVIEW",id:"13-architecture-overview",level:3},{value:"1.4 CONFORMANCE",id:"14-conformance",level:3},{value:"1.5 PROOF OF CONFORMITY",id:"15-proof-of-conformity",level:3},{value:"1.6 EXAMPLES",id:"16-examples",level:3},{value:"1.6.1 Request PCF Data (with existing material Twin incl. PCF submodel)",id:"161-request-pcf-data-with-existing-material-twin-incl-pcf-submodel",level:4},{value:"1.6.2 Request PCF Data (without existing material Twin or PCF submodel)",id:"162-request-pcf-data-without-existing-material-twin-or-pcf-submodel",level:4},{value:"1.6.3 Response PCF Data",id:"163-response-pcf-data",level:4},{value:"1.6.4 Update PCF Data",id:"164-update-pcf-data",level:4},{value:"1.7 TERMINOLOGY",id:"17-terminology",level:3},{value:"2. STANDARDS FOR &quot;PCF Exchange&quot;",id:"2-standards-for-pcf-exchange",level:2},{value:"2.1 LIST OF STANDALONE STANDARDS",id:"21-list-of-standalone-standards",level:3},{value:"2.2 ADDITIONAL REQUIREMENTS",id:"22-additional-requirements",level:4},{value:"2.2.1 On Boarding and IAM",id:"221-on-boarding-and-iam",level:4},{value:"2.2.2 Fetching EDC Endpoints",id:"222-fetching-edc-endpoints",level:4},{value:"2.2.3 Searching for decentralized Digital Twin Registries",id:"223-searching-for-decentralized-digital-twin-registries",level:4},{value:"2.2.4 Registration at the BPN Discovery Service",id:"224-registration-at-the-bpn-discovery-service",level:4},{value:"2.2.5 Registration of the Digital Twin and the PCF Submodel in the Digital Twin Registry",id:"225-registration-of-the-digital-twin-and-the-pcf-submodel-in-the-digital-twin-registry",level:4},{value:"2.2.6 Requesting a PCF without an existing Digital Twin or PCF Submodel",id:"226-requesting-a-pcf-without-an-existing-digital-twin-or-pcf-submodel",level:4},{value:"2.2.7 EDC Data Asset Structure",id:"227-edc-data-asset-structure",level:4},{value:"2.2.7.1 EDC Data Asset",id:"2271-edc-data-asset",level:5},{value:"2.2.7.2 EDC Policy Structure",id:"2272-edc-policy-structure",level:5},{value:"2.2.7.3 Contract Definition",id:"2273-contract-definition",level:5},{value:"2.2.8 Data Exchange",id:"228-data-exchange",level:4},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cx-0063-triangle-for-product-carbon-footprint-request-v210",children:"CX-0063 Triangle for Product Carbon Footprint Request v2.1.0"})}),"\n",(0,i.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,i.jsx)(n.p,{children:"This standard focuses on the pcf exchange use case. This includes relevant requirements for:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"data provider, that want to provide pcf data through Catena-X,"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"data consumer, that are want to consume pcf values in Catena-X and"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Application developer/provider supporting the provisioning and consuming of pcf values.\nIt will provide information about the used core components as well as the structure of the Digital\nTwin Registry entry and the EDC data structure."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. INTRODUCTION"}),"\n",(0,i.jsx)(n.p,{children:"In an increasingly environmentally conscious world, the standardized exchange of\nproduct carbon footprint data is becoming increasingly important.\nThe PCF refers to the amount of greenhouse gas emissions generated during the manufacture,\nuse and disposal of a product.\nThe exchange of data between companies in Catena X makes it possible to measure, compare and reduce\nthe environmental impact of products.\nA standardized exchange of PCF data is therefore of great importance to promote more sustainable and\nenvironmentally friendly production and consumption"}),"\n",(0,i.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,i.jsx)(n.p,{children:"List for which roles the standard is relevant:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Data Provider / Consumer"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Business Application Provider"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This documents shows how the pcf exchange in Catena X takes place and which standards needs to\nfulfill to be interoperable in the Catena X Network."}),"\n",(0,i.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,i.jsxs)(n.p,{children:["This document defines the so-called ",(0,i.jsx)(n.em,{children:"standardization triangle"})," for the pcf exchange use case.\nStandardization triangle hereby means the mandatory components, data models, APIs etc. that are\nrequired to enable the pcf exchange use case.\nAdditionally, search objects as well as procedures to registering/providing and consuming\nthe data will be defined."]}),"\n",(0,i.jsx)(n.h3,{id:"13-architecture-overview",children:"1.3 ARCHITECTURE OVERVIEW"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Architecture Overview",src:t(21566).A+"",width:"3100",height:"2115"})}),"\n",(0,i.jsx)(n.h3,{id:"14-conformance",children:"1.4 CONFORMANCE"}),"\n",(0,i.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes\nin this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,i.jsxs)(n.p,{children:["The key words ",(0,i.jsx)(n.strong,{children:"MAY"}),", ",(0,i.jsx)(n.strong,{children:"MUST"}),", ",(0,i.jsx)(n.strong,{children:"MUST NOT"}),", ",(0,i.jsx)(n.strong,{children:"OPTIONAL"}),", ",(0,i.jsx)(n.strong,{children:"RECOMMENDED"}),", ",(0,i.jsx)(n.strong,{children:"REQUIRED"}),", ",(0,i.jsx)(n.strong,{children:"SHOULD"}),"\nand ",(0,i.jsx)(n.strong,{children:"SHOULD NOT"})," in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]\nwhen, and only when, they appear in all capitals, as shown here."]}),"\n",(0,i.jsx)(n.h3,{id:"15-proof-of-conformity",children:"1.5 PROOF OF CONFORMITY"}),"\n",(0,i.jsx)(n.p,{children:"All participants and their solutions will need to prove, that they are conform with the Catena-X standards.\nTo validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All participants mentioned under ",(0,i.jsx)(n.a,{href:"#11-audience--scope",children:"1.1"})," MUST follow the defined requirements\nunder ",(0,i.jsx)(n.a,{href:"#22-additional-requirements",children:"2.2"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"16-examples",children:"1.6 EXAMPLES"}),"\n",(0,i.jsx)(n.h4,{id:"161-request-pcf-data-with-existing-material-twin-incl-pcf-submodel",children:"1.6.1 Request PCF Data (with existing material Twin incl. PCF submodel)"}),"\n",(0,i.jsxs)(n.p,{children:["Have a look at the related ",(0,i.jsx)(n.a,{href:"https://eclipse-tractusx.github.io/docs-kits/category/pcf-exchange-kit",children:"KIT"})]}),"\n",(0,i.jsx)(n.h4,{id:"162-request-pcf-data-without-existing-material-twin-or-pcf-submodel",children:"1.6.2 Request PCF Data (without existing material Twin or PCF submodel)"}),"\n",(0,i.jsxs)(n.p,{children:["Have a look at the related ",(0,i.jsx)(n.a,{href:"https://eclipse-tractusx.github.io/docs-kits/category/pcf-exchange-kit",children:"KIT"})]}),"\n",(0,i.jsx)(n.h4,{id:"163-response-pcf-data",children:"1.6.3 Response PCF Data"}),"\n",(0,i.jsxs)(n.p,{children:["Have a look at the related ",(0,i.jsx)(n.a,{href:"https://eclipse-tractusx.github.io/docs-kits/category/pcf-exchange-kit",children:"KIT"})]}),"\n",(0,i.jsx)(n.h4,{id:"164-update-pcf-data",children:"1.6.4 Update PCF Data"}),"\n",(0,i.jsxs)(n.p,{children:["Have a look at the related ",(0,i.jsx)(n.a,{href:"https://eclipse-tractusx.github.io/docs-kits/category/pcf-exchange-kit",children:"KIT"})]}),"\n",(0,i.jsx)(n.h3,{id:"17-terminology",children:"1.7 TERMINOLOGY"}),"\n",(0,i.jsx)(n.p,{children:"The following terms are especially relevant for the understanding of the standard:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Product Carbon Footprint (PCF)"}),"\nThe balance of greenhouse gas emissions along the entire life cycle of a product in a defined\napplication and in relation to a defined unit of use."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Business Partner Number (BPN)"}),"\n: A BPN is the unique identifier of a partner within Catena-x\nAdditional terminology used in this standard can be looked up in the glossary on the association homepage."]}),"\n",(0,i.jsx)(n.h2,{id:"2-standards-for-pcf-exchange",children:'2. STANDARDS FOR "PCF Exchange"'}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"This section is normative"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"21-list-of-standalone-standards",children:"2.1 LIST OF STANDALONE STANDARDS"}),"\n",(0,i.jsx)(n.p,{children:"To participate in the CO2 use-case, the following single standards MUST be fulfilled:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0001 EDC Discovery API - X v1.0.2"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0002 Digital Twins in Catena - X v2.2.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0003 SAMMSemanticAspectMetaModel v1.0.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0006 RegistrationAndInitialOnBoarding v1.1.3"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0013 Identity of Member Companies v1.1.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0014 Employees and Technical Users v1.0.1"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0016 Company Attribute Verification v1.1.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0017 Company Role by the Connector v1.1.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0018 Eclipse Data Space Connector (EDC) v2.1.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0026 Product Carbon Footprint Data Model v2.0.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0028 Product Carbon Footprint Request API v2.0.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0049-DID Document Schema"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0050-Framework Agreement Credential v1.0.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0051-Summary Credential v1.0.0"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"22-additional-requirements",children:"2.2 ADDITIONAL REQUIREMENTS"}),"\n",(0,i.jsx)(n.h4,{id:"221-on-boarding-and-iam",children:"2.2.1 On Boarding and IAM"}),"\n",(0,i.jsxs)(n.p,{children:["All participant mentioned under ",(0,i.jsx)(n.a,{href:"#11-audience--scope",children:"1.1"})," MUST follow the CX Standards ",(0,i.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-0006 RegistrationAndInitialOnBoarding, CX-0013 Identity of Member Companies, CX-0014 Employees and Technical Users, CX-0016 Company Attribute Verification, CX-0017 Company Role by the Connector"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"222-fetching-edc-endpoints",children:"2.2.2 Fetching EDC Endpoints"}),"\n",(0,i.jsxs)(n.p,{children:["To find the EDC Endpoint addresses of related parties in Catena-X, App Provider MUST follow the\n",(0,i.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-0001 EDC Discovery API"})," Standard."]}),"\n",(0,i.jsx)(n.h4,{id:"223-searching-for-decentralized-digital-twin-registries",children:"2.2.3 Searching for decentralized Digital Twin Registries"}),"\n",(0,i.jsxs)(n.p,{children:["To find decentralized Digital Twin Registries of related parties in Catena-X, App Provider MUST\nfollow the\n",(0,i.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-0002 Digital Twins in Catena"})," Standard."]}),"\n",(0,i.jsx)(n.h4,{id:"224-registration-at-the-bpn-discovery-service",children:"2.2.4 Registration at the BPN Discovery Service"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),"\nNot needed for PCF as the BPN is known by the Application"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"225-registration-of-the-digital-twin-and-the-pcf-submodel-in-the-digital-twin-registry",children:"2.2.5 Registration of the Digital Twin and the PCF Submodel in the Digital Twin Registry"}),"\n",(0,i.jsxs)(n.p,{children:["With Release 23-09 the PCF use case changed to the AAS logic.\nTherefore Digital Twins SHOULD be registered in the decentralized digital twin registry.\nFor looking up the twin ID the data provider MUST register the twins\nwith the specificAssetIds ",(0,i.jsx)(n.code,{children:"manufacturerPartId"})," and ",(0,i.jsx)(n.code,{children:"assetLifecyclePhase=AsPlanned"}),". In addition the specificAssetId ",(0,i.jsx)(n.code,{children:"digitalTwinType=PartType"})," SHOULD be registered to prepare compatibility with future versions. Be aware that the use of ",(0,i.jsx)(n.code,{children:"assetLifecyclePhase=AsPlanned"})," will be removed in future versions and usage of ",(0,i.jsx)(n.code,{children:"digitalTwinType=PartType"})," will become mandatory instead."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'    "specificAssetIds": [\n        {\n            "key": "manufacturerPartId",\n            "value": "%%PART-ID%%"\n        },\n        {\n            "key": "assetLifecyclePhase",\n            "value": "AsPlanned"\n        },\n        {\n            "key": "digitalTwinType",\n            "value": "PartType"\n        }\n    ],\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The data provider also MUST provide a API Endpoint following the ",(0,i.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-0002 Digital Twins in Catena"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Data provider MUST register the related pcf sub-model as shown in the ",(0,i.jsx)(n.a,{href:"#224-registration-at-the-bpn-discovery-service",children:"example"})," below."]}),"\n",(0,i.jsxs)(n.li,{children:["The sub model MUST be registered with the ",(0,i.jsx)(n.code,{children:'"idShort": "PCFExchangeEndpoint"'})]}),"\n",(0,i.jsxs)(n.li,{children:["For Release 3.2 the subprotocolBody for pcf exchange MUST be defined  like the following description ",(0,i.jsx)(n.code,{children:'"subprotocolBody": "id=AssetId_of_EDCasset;dspEndpoint=https://some.controlplane.url:7173"'})]}),"\n",(0,i.jsx)(n.li,{children:"The id added to the subprotocolBody SHOULD be a UUIDv4"}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"href"})," definition follows ",(0,i.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-0002 CX-0002 Digital Twins in Catena"}),' and MUST have the following structure: "',(0,i.jsx)(n.a,{href:"https://edc.data.plane/productIds/mat345",children:"https://edc.data.plane/productIds/mat345"}),'" (URL to use via EDC Proxy Call to request PCF).']}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'NOTE\nReplace "edc.data.plane" with the locally needed URL parts to do a EDC proxy call.'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "description": [\n        {\n            "language": "en",\n            "text": "PCF endpoint for material \'mat345\'"\n        }\n    ],\n    "idShort": "PCFExchangeEndpoint",\n    "identification": "urn:uuid:205cf8d1-8f07-483c-9c5b-c8d706c7d05d",\n    "semanticId": {\n        "value": [\n            "urn:samm:io.catenax.pcf:5.0.0#Pcf"\n        ]\n    },\n    "endpoints": [\n        {\n            "interface": "PCF-1.0.0",\n            "protocolInformation": {\n                "href": "https://edc.data.plane/productIds/mat345",\n                "endpointProtocol": "HTTP",\n                "endpointProtocolVersion": ["1.1"],\n                "subprotocol": "DSP",\n                "subprotocolBody": "id=c34018ab-5820-4065-9087-416d78e1ab60;dspEndpoint=https://some.controlplane.url:7173",\n                "subprotocolBodyEncoding": "plain"\n            }\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"226-requesting-a-pcf-without-an-existing-digital-twin-or-pcf-submodel",children:"2.2.6 Requesting a PCF without an existing Digital Twin or PCF Submodel"}),"\n",(0,i.jsxs)(n.p,{children:["In case no Digital Twin or PCF Submodel is registered (yet), the asset to use is identified by its type (",(0,i.jsx)(n.code,{children:"data.pcf.exchangeEndpoint"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"227-edc-data-asset-structure",children:"2.2.7 EDC Data Asset Structure"}),"\n",(0,i.jsx)(n.h5,{id:"2271-edc-data-asset",children:"2.2.7.1 EDC Data Asset"}),"\n",(0,i.jsx)(n.p,{children:"The PCF asset MUST be registered with as defined below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@type": "edc:AssetEntryDto",\n  "edc:asset": {\n    "@id": "c34018ab-5820-4065-9087-416d78e1ab60",\n    "edc:properties": {\n      "rdfs:label": "PCF Data",\n      "rdfs:comment": "Endpoint for PCF data",\n      "dcat:version": "1.0.0", \n      "cx-common:version": "1.0.0", \n      "aas-semantics:semanticId": "urn:samm:io.catenax.pcf:5.0.0#Pcf",\n      "edc:contentType": "application/json",\n      "edc:type": "data.pcf.exchangeEndpoint", \n      "dct:type": {"@id":"cx-taxo:data.pcf.exchangeEndpoint"}\n    },\n    "edc:privateProperties": null,\n     \n  "edc:dataAddress": {\n    "edc:type": "edc:HttpData",\n    "edc:baseUrl": "https://some.url/service",\n    "edc:proxyBody": "true",\n    "edc:proxyPath": "true",\n    "edc:proxyQueryParams": "true",\n    "edc:proxyMethod": "true",\n    "edc:contentType": "application/json"\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The following attributes are now ",(0,i.jsx)(n.em,{children:"deprecated"})," and will be removed within release 23.05:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"dcat:version"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"edc:type"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The following attributes are now ",(0,i.jsx)(n.em,{children:"optional"})," and will become ",(0,i.jsx)(n.em,{children:"mandatory"})," within release 23.05:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cx-common:version"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"dct:type"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following values MUST be present as EDC Asset properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aas-semantics:semanticId"}),": MUST contain the value: ",(0,i.jsx)(n.code,{children:'"urn:samm:io.catenax.pcf:5.0.0#Pcf"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dcat:version"}),": MUST contain the value: ",(0,i.jsx)(n.code,{children:'"1.0.0"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"edc:type"}),": MUST follow the schema: ",(0,i.jsx)(n.code,{children:'"data.pcf.exchangeEndPoint"'})]}),"\n",(0,i.jsxs)(n.li,{children:["If present, ",(0,i.jsx)(n.code,{children:"cx-common:version"}),": MUST contain the value: ",(0,i.jsx)(n.code,{children:'"1.0.0"'})]}),"\n",(0,i.jsxs)(n.li,{children:["If present, ",(0,i.jsx)(n.code,{children:"dct:type"}),": MUST follow the schema: ",(0,i.jsx)(n.code,{children:'{"@id":"cx-taxo:data.pcf.exchangeEndpoint"}'})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The following attributes MUST be set within the ",(0,i.jsx)(n.code,{children:"edc:dataAddress"})," section:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"edc:type"}),": MUST contain the value: ",(0,i.jsx)(n.code,{children:'"edc:HttpData"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"edc:proxyBody"}),": MUST contain the value: ",(0,i.jsx)(n.code,{children:'"true"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"edc:proxyPath"}),": MUST contain the value: ",(0,i.jsx)(n.code,{children:'"true"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"edc:proxyQueryParams"}),": MUST contain the value: ",(0,i.jsx)(n.code,{children:'"true"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"edc:proxyMethod"}),": MUST contain the value: ",(0,i.jsx)(n.code,{children:'"true"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"edc:contentType"}),": MUST contain the value: ",(0,i.jsx)(n.code,{children:'"application/json"'})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"2272-edc-policy-structure",children:"2.2.7.2 EDC Policy Structure"}),"\n",(0,i.jsxs)(n.p,{children:["A participant mentioned under ",(0,i.jsx)(n.a,{href:"#11-audience--scope",children:"1.1"})," MUST sign the overall\n",(0,i.jsx)(n.a,{href:"https://catena-x.net/de/catena-x-einfuehren-umsetzen/governance-framework-fuer-datenraum-betrieb",children:"Catena-X Terms and Condition"}),"\nas well as the ",(0,i.jsx)(n.a,{href:"https://catena-x.net/de/catena-x-einfuehren-umsetzen/governance-framework-fuer-datenraum-betrieb",children:"pcf framework agreement"}),"\nThis follows the first SSI setup following the ",(0,i.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"IAM Standards"})," in\nCX covering the new SSI infrastructure which will released with R 3.2."]}),"\n",(0,i.jsxs)(n.p,{children:["The minimum set of ",(0,i.jsx)(n.strong,{children:"membership"})," and  the ",(0,i.jsx)(n.strong,{children:"pcf frameworkagreement"}),"\nMUST to be added to the asset:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "@context": {\n        "odrl": "http://www.w3.org/ns/odrl/2/"\n    },\n    "@type": "PolicyDefinitionRequestDto",\n    "@id": "{{POLICY_ID}}",\n    "policy": {\n        "@type": "Policy",\n        "odrl:permission": [\n            {\n                "odrl:action": "USE",\n                "odrl:constraint": {\n                    "@type": "LogicalConstraint",\n                    "odrl:and": [\n                        {\n                            "@type": "Constraint",\n                            "odrl:leftOperand": "Membership", \n                            "odrl:operator": {\n                                "@id": "odrl:eq"\n                            },\n                            "odrl:rightOperand": "active"\n                        },\n                        {\n                            "@type": "Constraint",\n                            "odrl:leftOperand": "FrameworkAgreement.pcf",\n                            "odrl:operator": {\n                                "@id": "odrl:eq"\n                            },\n                            "odrl:rightOperand": "active"\n                        }\n                    ]\n                }\n            }\n        ]\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For more examples have a look ",(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/ssi-docu/blob/main/docs/architecture/cx-3-2/edc/policy.definitions.md",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"2273-contract-definition",children:"2.2.7.3 Contract Definition"}),"\n",(0,i.jsxs)(n.p,{children:["Contract definitions of data providers MUST follow the structure below (also defined in ",(0,i.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"CX-0018 Eclipse Data Space Connector (EDC)"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "@id": "54ef3326-42b2-4221-8c5a-3a6270d54db8",\n    "edc:accessPolicyId": "a343fcbf-99fc-4ce8-8e9b-148c97605aab",\n    "edc:contractPolicyId": "a343fcbf-99fc-4ce8-8e9b-148c97605aab",\n    "edc:assetsSelector":[\n        {\n            "@type": "Criterion",\n            "edc:operandLeft": "@id",\n            "edc:operator": "=",\n            "edc:operandRight": "c34018ab-5820-4065-9087-416d78e1ab60"\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"228-data-exchange",children:"2.2.8 Data Exchange"}),"\n",(0,i.jsxs)(n.p,{children:["As the pcf usage case currently support only asynchronous data exchange, App Provider MUST follow\nthe API definition ",(0,i.jsx)(n.a,{href:"#2-standards-for-pcf-exchange",children:"CX-0028 Product Carbon Footprint Request API"}),". The exchanged data follows the standardized\ndata model ",(0,i.jsx)(n.a,{href:"#2-standards-for-pcf-exchange",children:"CX-0026 Product Carbon Footprint Data Model"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,i.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,i.jsxs)(n.p,{children:["see ",(0,i.jsx)(n.a,{href:"#21-list-of-standalone-standards",children:"2.1"})]}),"\n",(0,i.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,i.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,i.jsx)(n.p,{children:"Currently the reference implementation is no FOSS application. It was implemented by the following COTS applications:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.siemens.com/de/de/unternehmen/themenfelder/product-carbon-footprint.html",children:"SiGREEN (Siemens)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.sap.com/sustainability/climate-action.html",children:"SDX (SAP)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.supplyon.com/de/product-footprint",children:"SPF (SupplyOn)"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,i.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(1234).A+"",children:"Architectural Overview"})}),"\n",(0,i.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,i.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,i.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,i.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1234:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/files/ArchitecturalOverview-35c18f71c1b39590544ca9c17e0e430c.png"},21566:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ArchitecturalOverview-35c18f71c1b39590544ca9c17e0e430c.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(96540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);