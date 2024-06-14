"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[7169],{57330:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(74848),r=i(28453);const s={},a="CX-0001 EDC Discovery API v.1.0.2",o={id:"standards/CX-0001-EDCDiscoveryAPI/CX-0001-EDCDiscoveryAPI",title:"CX-0001 EDC Discovery API v.1.0.2",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0001-EDCDiscoveryAPI/CX-0001-EDCDiscoveryAPI.md",sourceDirName:"standards/CX-0001-EDCDiscoveryAPI",slug:"/standards/CX-0001-EDCDiscoveryAPI/",permalink:"/docs/standards/CX-0001-EDCDiscoveryAPI/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"Overview Standards",permalink:"/docs/standards/overview"},next:{title:"CX-0002 Digital Twings in Catena-X v.2.1.0",permalink:"/docs/standards/CX-0002-DigitalTwinsInCatenaX/"}},d={},c=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Audience &amp; Scope",id:"11-audience--scope",level:3},{value:"1.2 Context",id:"12-context",level:3},{value:"1.3 Architecture Overview",id:"13-architecture-overview",level:3},{value:"1.4 Conformance",id:"14-conformance",level:3},{value:"1.5 Proof of conformity",id:"15-proof-of-conformity",level:3},{value:"1.6 Examples",id:"16-examples",level:3},{value:"1.7 Terminology",id:"17-terminology",level:3},{value:"2 EDC Discovery API",id:"2-edc-discovery-api",level:2},{value:"2.1 Preconditions and dependencies",id:"21-preconditions-and-dependencies",level:2},{value:"2.2 API Specification",id:"22-api-specification",level:2},{value:"2.2.1 API Endpoints &amp; resources",id:"221-api-endpoints--resources",level:3},{value:"2.2.2 Available Data Types",id:"222-available-data-types",level:3},{value:"2.2.3 EDC Data Asset Structure",id:"223-edc-data-asset-structure",level:3},{value:"2.2.4 Error Handling",id:"224-error-handling",level:3},{value:"2.2.4.1 Error Messages &amp; Explanation",id:"2241-error-messages--explanation",level:4},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 Normative References",id:"31-normative-references",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cx-0001-edc-discovery-api-v102",children:"CX-0001 EDC Discovery API v.1.0.2"}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,t.jsx)(n.p,{children:"The definition and introduction of a cross-industry standard for the discovering of EDC instances is crucial for the  networking of OEMs, suppliers, consumers, and industrial partners to automatically look up services and data. In a high competing eco systems data are the new oil. Even meta data on data offerings can provide business sensitive information. Hence even meta data for data offerings will be secured via an EDC endpoint."}),"\n",(0,t.jsx)(n.p,{children:"As the Catena-X network expands, a sizable amount of data assets will be available via EDC connection technology. It could be difficult toefficiently identify the proper EDC endpoint within the network."}),"\n",(0,t.jsx)(n.p,{children:"To be GAIA-X compliant each EDC endpoint must provide a Self Description (SD) of type ServiceOffering. Based on these SD a Data & Service Discovery Service must be provided to easily look up suitable EDC instances to query data offerings efficiently."}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Participants do not want their personal information made public. As a result, these may only be searched indirectly, which necessitates knowing or establishing who the data should be obtained from. Because no one wants to examine every EDC instance (load of the net, latency becomes ever larger with increasing number of participants, procedure does not scale thus). As a result, the number of EDC instances requested must be limited by suitable filters. As a result, subscribers must first determine who may have the data depending on their specific circumstances. This is performed by utilizing the EDC discovery service. The Business Partner Number (BPN) is currently the only criterion provided for restricting the EDC instances in question."}),"\n",(0,t.jsx)(n.p,{children:"This standard has not the scope and intention to be a general solution pattern to search and discover any service and data offer. It is limited to look up the EDC instance in front of these service and data offerings."}),"\n",(0,t.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 Audience & Scope"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This standard is relevant for the following roles:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,t.jsx)(n.li,{children:"Business Application Provider"}),"\n",(0,t.jsx)(n.li,{children:"Core Service Provider"}),"\n",(0,t.jsx)(n.li,{children:"Onboarding Service Provider"}),"\n",(0,t.jsx)(n.li,{children:"Enablement Service Provider"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For now, the EDC Discovery API is limited to filter suitable EDC instances based on BPN number providing data and service offerings. This document describes the relevant API endpoint to be created by an operating company to enable EDC discovery by supported criterions (currently on the BPN number)."}),"\n",(0,t.jsx)(n.h3,{id:"12-context",children:"1.2 Context"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The EDC Discovery API is used to search and find service and data offerings. In a network of network this is the most crucial topic to build value added data services and data chains."}),"\n",(0,t.jsx)(n.h3,{id:"13-architecture-overview",children:"1.3 Architecture Overview"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CX-0001-main-components.png",src:i(14733).A+"",width:"951",height:"771"})}),"\n",(0,t.jsx)(n.p,{children:"Figure 2 Main Components"}),"\n",(0,t.jsx)(n.p,{children:"In Figure 2 a high-level overview of the EDC Discovery Service workflow is sketched. Both connectors must be registered within an identity provider providing Verifiable Credentials (VC) to prove their identity by e.g. a Managed Identity Wallet (MIW). Any data provider can register assets and expose them to a metadata broker (Federated Catalog) for other consuming connectors to find. For registration Self Descriptions of Type LegalPerson and ServiceOffering for the providing EDC instance must be registered at the federated catalog. Via EDC Discovery Service the EDC instance can be queried via BPN number, which is part of the SD artifacts. Finally, the consumer can obtain contract offers from the provider and begin contract negotiations."}),"\n",(0,t.jsx)(n.p,{children:"The federated Catalog will be the storage of SD and the EDC Discovery Service the query API to retrieve URL of EDC instance of interest. There is no longer a central Digital Twin Registry (DTR) available from core service, but decentral instances (DDTR) hidden behind a data providing EDC. Hence any consumer has to identify the providing EDC to get access to the DDTR behind that EDC."}),"\n",(0,t.jsx)(n.h3,{id:"14-conformance",children:"1.4 Conformance"}),"\n",(0,t.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,t.jsxs)(n.p,{children:["The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in\xa0",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"BCP 14"}),"\xa0[",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",children:"RFC2119"}),"] [",(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",children:"RFC8174"}),"] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,t.jsx)(n.h3,{id:"15-proof-of-conformity",children:"1.5 Proof of conformity"}),"\n",(0,t.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are\nconform with the Catena-X standards. To validate that the standards are\napplied correctly, Catena-X employs Conformity Assessment Bodies\n(CABs)."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The Service Operator ",(0,t.jsx)(n.strong,{children:"MUST"})," provide an onboarding process for participants and EDC instances. According to CX - 0006 Registration and initial onboarding"]}),"\n",(0,t.jsxs)(n.li,{children:["The implemented service ",(0,t.jsx)(n.strong,{children:"MUST"})," use an SD storage like SD-Hub or Federated Catalogue for storing the SD documents provided during the onboarding process."]}),"\n",(0,t.jsxs)(n.li,{children:["The provided SD documents ",(0,t.jsx)(n.strong,{children:"MUST"})," be GAIA-X compliant, i.e. ",(0,t.jsx)(n.strong,{children:"MUST"})," provide a compliance credential issued from GAIA-X AIBSL."]}),"\n",(0,t.jsxs)(n.li,{children:["The implemented service ",(0,t.jsx)(n.strong,{children:"SHOULD"})," use the SD storage as source of truth."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A test case could be, that an EDC instance has to be onboarded for a specific participant identified by a BPN. The SD for the EDC has to be visible in the supported SD storage (currently central hosted by the Core Service Provider).  The SD documents has to be accessible by the dataspace participants."}),"\n",(0,t.jsx)(n.h3,{id:"16-examples",children:"1.6 Examples"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"SD for Legal Person"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'\n{\n\n\\"id\\": <https://compliance.gaia-x.eu/.well-known/participant.json>,\n\n\\"@context\\": \\[\n\n<https://www.w3.org/2018/credentials/v1>,\n\n<https://registry.gaia-x.eu/v2206/api/shape/files?file=participant&type=jsonld>,\n\n<https://raw.githubusercontent.com/eclipse-tractusx/sd-factory/main/src/main/resources/verifiablecredentials.jsonld/sd-document-v22.10.jsonld>,\n\n<https://w3id.org/vc/status-list/2021/v1>\n\n\\],\n\n\\"type\\": \\[\n\n\\"VerifiableCredential\\",\n\n\\"LegalPerson\\"\n\n\\],\n\n\\"issuer\\": \\"did:sov:Bq3Nk9Z7sT8KeqNCnG4PrB\\",\n\n\\"issuanceDate\\": \\"2022-09-23T23:23:23.235Z\\",\n\n\\"credentialSubject\\": {\n\n\\"ctxsd:bpn\\": \\"1234\\",\n\n\\"id\\": \\"did:web:compliance.gaia-x.eu\\",\n\n\\"gx-participant:name\\": \\"Gaia-X AISBL\\",\n\n\\"gx-participant:legalName\\": \\"Gaia-X European Association for Data and\nCloud AISBL\\",\n\n\\"gx-participant:registrationNumber\\": {\n\n\\"gx-participant:registrationNumberType\\": \\"local\\",\n\n\\"gx-participant:registrationNumberNumber\\": \\"0762747721\\"\n\n},\n\n\\"gx-participant:headquarterAddress\\": {\n\n\\"gx-participant:addressCountryCode\\": \\"BE\\",\n\n\\"gx-participant:addressCode\\": \\"BE-BRU\\",\n\n\\"gx-participant:streetAddress\\": \\"Avenue des Arts 6-9\\",\n\n\\"gx-participant:postalCode\\": \\"1210\\"\n\n},\n\n\\"gx-participant:legalAddress\\": {\n\n\\"gx-participant:addressCountryCode\\": \\"BE\\",\n\n\\"gx-participant:addressCode\\": \\"BE-BRU\\",\n\n\\"gx-participant:streetAddress\\": \\"Avenue des Arts 6-9\\",\n\n\\"gx-participant:postalCode\\": \\"1210\\"\n\n},\n\n\\"gx-participant:termsAndConditions\\":\n\\"70c1d713215f95191a11d38fe2341faed27d19e083917bc8732ca4fea4976700\\"\n\n},\n\n\\"credentialStatus\\": {\n\n\\"id\\":\n<https://managed-identity-wallets.int.demo.catena-x.net/api/credentials/status/315de87e-713c-4bd8-aa58-a31a4189b71f#7>,\n\n\\"type\\": \\"StatusList2021Entry\\",\n\n\\"statusPurpose\\": \\"revocation\\",\n\n\\"statusListIndex\\": \\"7\\",\n\n\\"statusListCredential\\":\n<https://managed-identity-wallets.int.demo.catena-x.net/api/credentials/status/315de87e-713c-4bd8-aa58-a31a4189b71f>\n\n},\n\n\\"proof\\": {\n\n\\"type\\": \\"Ed25519Signature2018\\",\n\n\\"created\\": \\"2023-02-08T14:12:12Z\\",\n\n\\"proofPurpose\\": \\"assertionMethod\\",\n\n\\"verificationMethod\\": \\"did:sov:Bq3Nk9Z7sT8KeqNCnG4PrB#key-1\\",\n\n\\"jws\\":\n\\"eyJhbGciOiAiRWREU0EiLCAiYjY0IjogZmFsc2UsICJjcml0IjogWyJiNjQiXX0..E4x-UYAS6d4UqK6cuaRLzJ4ZgZxUZL6NrMZePmqPZjt5XckcYU7HK1iTV9OuBJxj8YkeZxWCYsC4E5QkeliOCg\\"\n\n},\n\n> {\\\n> \\"complianceCredential\\": {\\\n> \\"@context\\": \\[\\"https://www.w3.org/2018/credentials/v1\\"\\],\\\n> \\"type\\": \\[\\"VerifiableCredential\\", \\"ParticipantCredential\\"\\],\\\n> \\"id\\":\n> \\"https://catalogue.gaia-x.eu/credentials/ParticipantCredential/1664629337488\\",\\\n> \\"issuer\\": \\"did:web:compliance.gaia-x.eu\\",\\\n> \\"issuanceDate\\": \\"2022-10-01T13:02:17.489Z\\",\\\n> \\"credentialSubject\\": {\\\n> \\"id\\": \\"did:web:compliance.gaia-x.eu\\",\\\n> \\"hash\\":\n> \\"3280866b1b8509ce287850fb113dc76d1334959c759f82a57415164d7a3a4026\\"\\\n> },\\\n> \\"proof\\": {\\\n> \\"type\\": \\"JsonWebSignature2020\\",\\\n> \\"created\\": \\"2022-10-01T13:02:17.489Z\\",\\\n> \\"proofPurpose\\": \\"assertionMethod\\",\\\n> \\"jws\\":\n> \\"eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YQAIjkqX6OL4U3efV0zumn8-l8c4wQo98SOSlzt53HOR8qlLu5L5lmwZJnAsR7gKW-6jv5GBT0X4ORQ1ozLvihFj6eaxxJNgzLFPoH5w9UEaEIO8mMGyeQ-YQYWBbET3IK1mcHm2VskEsvpLvQGnk6kYJCXJzmaHMRSF3WOjNq_JWN8g-SldiGhgfKsJvIkjCeRm3kCt_UVeHMX6SoLMFDjI8JVxD9d5AG-kbK-xb13mTMdtbcyBtBJ_ahQcbNaxH-CfSDTSN51szLJBG-Ok-OlMagHY_1dqViXAKl4T5ShoS9fjxQItJvFPGA14axkY6s00xKVCUusi31se6rxC9g\\",\\\n> \\"verificationMethod\\": \\"did:web:compliance.gaia-x.eu\\"\\\n> }\\\n> }\\\n> }\n\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"SD for ServiceOffering"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"**"{\n   "**\\\n**\\""selfDescriptionCredential\\": {**\\\n**\\"@context\\": \\[**\\\n**\\"https://www.w3.org/2018/credentials/v1\\",**\\\n**\\"https://registry.gaia-x.eu/v2206/api/shape\\"**\\\n**\\],**\\\n**\\"type\\": \\[**\\\n**\\"VerifiableCredential\\",**\\\n**\\"ServiceOfferingExperimental\\"**\\\n**\\],**\\\n**\\"id\\":\n\\"https://compliance.gaia-x.eu/.well-known/serviceComplianceService.json\\",**\\\n**\\"issuer\\": \\"did:web:delta-dao.com\\",**\\\n**\\"issuanceDate\\": \\"2022-09-25T23:23:23.235Z\\",**\\\n**\\"credentialSubject\\": {**\\\n**\\"id\\":\n\\"https://compliance.gaia-x.eu/.well-known/serviceComplianceService.json\\",**\\\n**\\"gx-service-offering:providedBy\\":\n\\"https://compliance.gaia-x.eu/.well-known/participant.json\\",**\\\n**\\"gx-service-offering:name\\": \\"Gaia-X Lab Compliance Service\\",**\\\n**\\"gx-service-offering:description\\": \\"The Compliance Service will\nvalidate the shape and content of Self Descriptions. Required fields and\nconsistency rules are defined in the Gaia-X Trust Framework.\\",**\\\n**\\"gx-service-offering:webAddress\\":\n\\"https://compliance.gaia-x.eu/\\",**\\\n**\\"gx-service-offering:termsAndConditions\\": \\[**\\\n**{**\\\n**\\"gx-service-offering:url\\":\n\\"https://compliance.gaia-x.eu/terms\\",**\\\n**\\"gx-service-offering:hash\\": \\"myrandomhash\\"**\\\n**}**\\\n**\\],**\\\n**\\"gx-service-offering:gdpr\\": \\[**\\\n**{**\\\n**\\"gx-service-offering:imprint\\": \\"https://gaia-x.eu/imprint/\\"**\\\n**},**\\\n**{**\\\n**\\"gx-service-offering:privacyPolicy\\":\n\\"https://gaia-x.eu/privacy-policy/\\"**\\\n**}**\\\n**\\],**\\\n**\\"gx-service-offering:dataProtectionRegime\\": \\[**\\\n**\\"GDPR2016\\"**\\\n**\\],**\\\n**\\"gx-service-offering:dataExport\\": \\[**\\\n**{**\\\n**\\"gx-service-offering:requestType\\": \\"email\\",**\\\n**\\"gx-service-offering:accessType\\": \\"digital\\",**\\\n**\\"gx-service-offering:formatType\\": \\"mime/png\\"**\\\n**}**\\\n**\\],**\\\n**\\"gx-service-offering:dependsOn\\": \\[**\\\n**\\"https://compliance.gaia-x.eu/.well-known/serviceManagedPostgreSQLOVH.json\\",**\\\n**\\"https://compliance.gaia-x.eu/.well-known/serviceManagedK8sOVH.json\\"**\\\n**\\],**\n\n**""ctxsd":"connector-url\\"": ""https":"\\"**\\\n**},**\\\n**\\"proof\\": {**\\\n**\\"type\\": \\"JsonWebSignature2020\\",**\\\n**\\"created\\": \\"2022-09-25T22:36:50.274Z\\",**\\\n**\\"proofPurpose\\": \\"assertionMethod\\",**\\\n**\\"verificationMethod\\": \\"did:web:compliance.gaia-x.eu\\",**\\\n**\\"jws\\":\n\\"eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Chbzpl0-4S3sobkKXyBjfx6pm74xLHInOmruHUmO\\--3HpMcrfKldeJQPYLrUWsEJ1HIjMUqxE6QymZRxXfuRlAJKy2nwyM3S5sFX9YJ8bepBcf6q-nWGTDX-jh8wuyX3lwrG94aJnTBByKPLCovSiZ9BURR3cwiSHczBlM7iP90ee5roHOtI-eoqSBYrYaynTaK5eQaWfT-2OdXYgqVPSRJAK2KD5AqEM8KU7x6nnP6-shgSNBIEC1fAOTfAEUYkcrK8Tn4BTaH02HnO3B90S1MWyAWwBzrnmS915CFY4BiHsp9Tz7pt016c8HB8HE7gqoXndk7DUhzgNE2mRbHuLg\\"**\\\n**}**\\\n**},**\\\n**\\"complianceCredential\\": {**\\\n**\\"@context\\": \\[**\\\n**\\"https://www.w3.org/2018/credentials/v1\\"**\\\n**\\],**\\\n**\\"type\\": \\[**\\\n**\\"VerifiableCredential\\",**\\\n**\\"ServiceOfferingCredentialExperimental\\"**\\\n**\\],**\\\n**\\"id\\":\n\\"https://catalogue.gaia-x.eu/credentials/ServiceOfferingCredentialExperimental/1664145414932\\",**\\\n**\\"issuer\\": \\"did:web:compliance.gaia-x.eu\\",**\\\n**\\"issuanceDate\\": \\"2022-09-25T22:36:54.932Z\\",**\\\n**\\"credentialSubject\\": {**\\\n**\\"id\\":\n\\"https://compliance.gaia-x.eu/.well-known/serviceComplianceService.json\\",**\\\n**\\"hash\\":\n\\"eeac8a9b5b6750f13fbc548299b22b73d6beea13f19e71856d0027b5cd42069c\\"**\\\n**},**\\\n**\\"proof\\": {**\\\n**\\"type\\": \\"JsonWebSignature2020\\",**\\\n**\\"created\\": \\"2022-09-25T22:36:54.932Z\\",**\\\n**\\"proofPurpose\\": \\"assertionMethod\\",**\\\n**\\"jws\\":\n\\"eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..SibPFxPtfsKP439SjoKo5VtmU_EpgsfuEjghCt_8sG2fUYT6s9CTY8jyEniGUkk7BIWnIYNsuuKudlNBD27kwzdTy6bZX9Jq0OaAaCpgZAZ9vlp7oFZF3ysLcERmBAixzGUjL0sny06Mu7IRCcDYVhLyd6flOvUGtH2I6T9u6UZL8cN1advRYKd4BSumAp5d4cCG-7cg7DCqPXk_M8cTvU8mDeXvXfciv7sIqvkwqd2L-T4kbxmPTCY3r3wPoVHGBDa3Gnntwkz3_aVInjbztchH-WmlDpCPv1hTv4uZNenNZVw7xsx1_o0voJJLSGtlYNhW4rk2oDxr4qie3S-Zgw\\",**\\\n**\\"verificationMethod\\": \\"did:web:compliance.gaia-x.eu\\"**\\\n**}**\\\n**}**\\\n**}**"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"17-terminology",children:"1.7 Terminology"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following terms are especially relevant for the understanding of the\nstandard:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Business Partner Number (BPN)"})}),"\n",(0,t.jsx)(n.p,{children:"A BPN is the unique identifier of a partner within Catena-X."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Self Description (SD)"})}),"\n",(0,t.jsx)(n.p,{children:"Gaia-X requires all providers to describe themselves and their service\nofferings using standardized, machine-readable metadata called\nSelf-Descriptions. Such Self-Descriptions will for example include\ninformation like the address of a company, a specific service\ndescription or certificates and labels."}),"\n",(0,t.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the\nglossary on the association homepage."}),"\n",(0,t.jsx)(n.h2,{id:"2-edc-discovery-api",children:"2 EDC Discovery API"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The EDC discovery service ",(0,t.jsx)(n.strong,{children:"MUST"})," be offered as central available endpoint by the Core Service Provider.\nEvery EDC registered in the network ",(0,t.jsx)(n.strong,{children:"MUST"})," be registered in the EDC discovery service. Therefore the needed workflows/processes (as defined in CX - 0006 Registration and initial onboarding) ",(0,t.jsx)(n.strong,{children:"MUST"})," be followed/implemented."]}),"\n",(0,t.jsx)(n.p,{children:"The EDC discovery endpoint can get triggered via technical as well as\nreal users, if relevant roles are available."}),"\n",(0,t.jsx)(n.p,{children:"For technical user, a company can request the user creation with the\ntechnical user creation feature inside the portal."}),"\n",(0,t.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are\nconform with the Catena-X standards. To validate that the standards are\napplied correctly, Catena-X employs Conformity Assessment Bodies\n(CABs)."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The Core Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," offer a process/workflow to register dataspace connectors (as defined in CX - 0006 Registration and initial onboarding); Enablement Service Provider as well as Application Service Provider ",(0,t.jsx)(n.strong,{children:"MUST"})," run the connector registration for their service customers."]}),"\n",(0,t.jsxs)(n.li,{children:["SD documents ",(0,t.jsx)(n.strong,{children:"MUST"})," be created for every Connector registered and stored by the Participants. The Core Service Provide make them available."]}),"\n",(0,t.jsxs)(n.li,{children:["The provided SD documents ",(0,t.jsx)(n.strong,{children:"MUST"})," be GAIA-X compliant, i.e. ",(0,t.jsx)(n.strong,{children:"MUST"})," provide a compliance credential issued from GAIA-X AIBSL."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A test case will be, that an EDC instance has to be onboarded for a specific participant identified by a BPN. The SD for the EDC has to be visible in the supported SD storage. The query against this new registered EDC instance for the given BPN ",(0,t.jsx)(n.strong,{children:"SHOULD"})," provide the connector url as stated in the SD document."]}),"\n",(0,t.jsx)(n.h2,{id:"21-preconditions-and-dependencies",children:"2.1 Preconditions and dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["The self-description documents used as data source ",(0,t.jsx)(n.strong,{children:"MUST"})," be GAIA-X compliant, i.e. adhering to the GAIA-X Trustframework in the currently supported version in Catena-X (usually the latest published version and the version before). In addition, these SD documents ",(0,t.jsx)(n.strong,{children:"MUST"})," be registered at an SD storage like SD-Hub or Federated Catalogue."]}),"\n",(0,t.jsx)(n.h2,{id:"22-api-specification",children:"2.2 API Specification"}),"\n",(0,t.jsx)(n.h3,{id:"221-api-endpoints--resources",children:"2.2.1 API Endpoints & resources"}),"\n",(0,t.jsxs)(n.p,{children:["The EDC Discovery API ",(0,t.jsx)(n.strong,{children:"MUST"})," be implemented as specified in the openAPI documentation as stated here: https://...."]}),"\n",(0,t.jsx)(n.p,{children:"Endpoint: POST: /api/administration/connectors/discovery"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request body"})}),"\n",(0,t.jsx)(n.p,{children:"the request body can be kept empty (to retrieve a complete list of registered connectors) or be filled with one or multiple BPNs to retrieve a list of registered EDC endpoints for the giving BPNs."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'\n*\\[*\n\n*"BPNL\\...\\...",*\n\n*"BPNL\\...."*\n\n*\\]*\n\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Response structure"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'\n\\[\n\n{\n\n"bpn : "BPNL\\...\\..."\n\n"connectorEndpoint":\n\n\\[\n\n"http://some.example.url",\n\n"http://some.other-example.url"\n\n\\]\n\n},\n\n{\n\n"bpn : "BPNL\\...\\..."\n\n"connectorEndpoint": "http://some.example.url"\n\n}\n\n\\]\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"For each bpn an own response object is provided. In case of multiple EDC instances for one bpn an array is returned (first result set) otherwise a single value (second result set)"}),"\n",(0,t.jsx)(n.h3,{id:"222-available-data-types",children:"2.2.2 Available Data Types"}),"\n",(0,t.jsx)(n.p,{children:"The API MUST use JSON as the payload transported via HTTP."}),"\n",(0,t.jsx)(n.h3,{id:"223-edc-data-asset-structure",children:"2.2.3 EDC Data Asset Structure"}),"\n",(0,t.jsx)(n.p,{children:"This API do not have to be accessed via an EDC instance but can be queried from any authorized participant or service directly."}),"\n",(0,t.jsx)(n.h3,{id:"224-error-handling",children:"2.2.4 Error Handling"}),"\n",(0,t.jsx)(n.p,{children:"HTTP standard response codes that MUST be used."}),"\n",(0,t.jsx)(n.h4,{id:"2241-error-messages--explanation",children:"2.2.4.1 Error Messages & Explanation"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"200"}),(0,t.jsx)(n.td,{children:"Discovery request finished successfully"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"400"}),(0,t.jsx)(n.td,{children:"Request body was malformed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"401"}),(0,t.jsx)(n.td,{children:"Not authorized"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"403"}),(0,t.jsx)(n.td,{children:"Forbidden"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"405"}),(0,t.jsx)(n.td,{children:"Method not allowed"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,t.jsx)(n.h3,{id:"31-normative-references",children:"3.1 Normative References"}),"\n",(0,t.jsx)(n.p,{children:"Following Standards are used within this standard:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["GAIA-X Trustframework: ",(0,t.jsx)(n.a,{href:"https://gaia-x.eu/wp-content/uploads/2022/05/Gaia-X-Trust-Framework-22.04.pdf",children:"https://gaia-x.eu/wp-content/uploads/2022/05/Gaia-X-Trust-Framework-22.04.pdf"})]}),"\n",(0,t.jsx)(n.li,{children:"CX - 0006 Registration and initial onboarding"}),"\n",(0,t.jsx)(n.li,{children:"CX - 0010 Business Partner Number"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},14733:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/CX-0001-main-components-99c99a12b3c47a37197185ad52cbca27.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);