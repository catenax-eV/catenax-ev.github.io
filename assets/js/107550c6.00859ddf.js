"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[11592],{83475:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"standards/CX-0135-CompanyCertificateManagement/CX-0135-CompanyCertificateManagement","title":"CX-0135 BP Company Certificate Management v2.1.1","description":"ABSTRACT","source":"@site/docs/standards/CX-0135-CompanyCertificateManagement/CX-0135-CompanyCertificateManagement.md","sourceDirName":"standards/CX-0135-CompanyCertificateManagement","slug":"/standards/CX-0135-CompanyCertificateManagement/","permalink":"/docs/next/standards/CX-0135-CompanyCertificateManagement/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"CAT/Value Added Services","permalink":"/docs/next/tags/cat-value-added-services"}],"version":"current","frontMatter":{"tags":["CAT/Value Added Services"]},"sidebar":"sidebar_standards","previous":{"title":"CX-0133 Online Control and Simulation 2.0.0","permalink":"/docs/next/standards/CX-0133-OnlineControlandSimulation/"},"next":{"title":"CX-0136 Use Case PCF 2.0.0","permalink":"/docs/next/standards/CX-0136-UseCasePCF/"}}');var a=t(74848),s=t(28453);const r={tags:["CAT/Value Added Services"]},o="CX-0135 BP Company Certificate Management v2.1.1",d={},c=[{value:"ABSTRACT",id:"abstract",level:2},{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"1.5.1 BPNL BUSINESS PARTNER NUMBER LEGAL ENTITY",id:"151-bpnl-business-partner-number-legal-entity",level:4},{value:"1.5.2 CERTIFICATE TYPE",id:"152-certificate-type",level:4},{value:"1.5.3 REGISTRATION AND ISSUING",id:"153-registration-and-issuing",level:4},{value:"1.5.4 AREA OF APPLICATION",id:"154-area-of-application",level:4},{value:"1.5.5 ENCLOSED SITES / ADDRESSES",id:"155-enclosed-sites--addresses",level:4},{value:"1.5.6 VALIDITY",id:"156-validity",level:4},{value:"1.5.7 TRUST LEVEL",id:"157-trust-level",level:4},{value:"1.5.8 VALIDATOR",id:"158-validator",level:4},{value:"1.5.9 CERTIFICATE UPLOADER",id:"159-certificate-uploader",level:4},{value:"1.5.10 ID",id:"1510-id",level:4},{value:"2 ASPECT MODELS",id:"2-aspect-models",level:2},{value:"2.1 ASPECT MODEL &quot;BusinessPartnerCertificate&quot;",id:"21-aspect-model-businesspartnercertificate",level:3},{value:"2.1.1 LICENSE",id:"211-license",level:4},{value:"2.1.2 IDENTIFIER OF SEMANTIC MODEL",id:"212-identifier-of-semantic-model",level:4},{value:"2.1.3 FORMATS OF SEMANTIC MODEL",id:"213-formats-of-semantic-model",level:4},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function l(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"cx-0135-bp-company-certificate-management-v211",children:"CX-0135 BP Company Certificate Management v2.1.1"})}),"\n",(0,a.jsx)(i.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,a.jsx)(i.p,{children:"In the world of business, company certificates are often mandatory for conducting transactions between two companies. However, the process of provisioning, maintaining, and validating these certificates can be a major challenge. For example, if a company has 100 customers, they may need to provide their company certificates in 100 different ways and maintain them at 100 different points."}),"\n",(0,a.jsx)(i.p,{children:"To address this issue, a use case has been developed that provides a standardized but generic data model for company certificates. This allows companies to provide and exchange certificates on a defined standard within the scope of the Catena-X data space."}),"\n",(0,a.jsx)(i.p,{children:"This standard is intended for participants in the data space who wish to provide their company certificates as a digital asset that can be exchanged via the Eclipse Data Space Connector. By adhering to this standard, companies can ensure the secure and efficient sharing of their certificates within the data space."}),"\n",(0,a.jsx)(i.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,a.jsx)(i.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,a.jsx)(i.p,{children:"The previous version of the standard was designed for an API. This standard has been updated to a semantic data model."}),"\n",(0,a.jsx)(i.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,a.jsx)(i.p,{children:"This component is used to standardize the way in which a semantic model for certificate management should be designed. This ensures that services and products consuming data can function effectively and enabling interoperability."}),"\n",(0,a.jsx)(i.p,{children:"This standard is crucial for data providers and consumers who want to exchange company certificates through the Catena-X data space. By complying with this standard, companies can ensure seamless certificate management, thereby streamlining their overall operations."}),"\n",(0,a.jsx)(i.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"List for which roles the standard is relevant:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Data Provider and Consumer"}),"\n",(0,a.jsx)(i.li,{children:"Business Application Provider"}),"\n",(0,a.jsx)(i.li,{children:"Enablement Service Provider"}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"This standard applies to business application providers and enablement service providers who aim to offer a solution for managing and exchanging company certificates, and returning them to customers. It is also important for data providers and consumers who need to manage and exchange certificates through a solution provider."}),"\n",(0,a.jsx)(i.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"The establishment of various industry networks, such as Catena-X, has significantly increased the need for data standards across the entire automotive value chain. To promote industry-wide, international data exchange and facilitate networking between OEMs, suppliers, customers, and industrial partners, it is essential to define and introduce a cross-industry standard for the provisioning, exchanging and maintenance, of company certificates. This standard ensures interoperability and data sovereignty, while also increasing trust in certificates."}),"\n",(0,a.jsx)(i.p,{children:"By implementing this standard, companies can streamline the process of managing and exchanging certificates, reducing the burden of maintaining multiple certificates for different customers. Additionally, the standard ensures that certificates are exchanged in a secure and reliable manner, enhancing trust and confidence in the data exchange process. Overall, the introduction of a cross-industry standard for company certificates is a crucial step towards achieving seamless and secure data exchange across the automotive industry."}),"\n",(0,a.jsxs)(i.p,{children:["This aspect model is written in SAMM 2.1.0 as a modeling language conformant to ",(0,a.jsx)(i.a,{href:"/docs/next/standards/CX-0003-SAMMSemanticAspectMetaModel/",children:"CX-0003:1.1 SAMM Semantic Aspect Meta Model"}),"."]}),"\n",(0,a.jsx)(i.p,{children:"SAMM is used to create data models, which are attached to e.g. digital twins in the form of an Asset Administration Shell (AAS) submodel or exchanged as JSON-File."}),"\n",(0,a.jsxs)(i.p,{children:["All submodels in Catena-X are managed in the ",(0,a.jsx)(i.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.shared.business_partner_certificate",children:"Tractus-X GitHub repository"}),". A data model is requested and exchanged via Catena-X using an Eclipse Dataspace Connector (CX-0001:1.0 EDC Discovery API), which is a separate Catena-X standard."]}),"\n",(0,a.jsx)(i.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,a.jsxs)(i.p,{children:["The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in ",(0,a.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"BCP 14"})," [",(0,a.jsx)(i.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",title:"Key words for use in RFCs to Indicate Requirement Levels",children:"RFC2119"}),"] [",(0,a.jsx)(i.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",title:"Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words",children:"RFC8174"}),"] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,a.jsx)(i.p,{children:"All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,a.jsx)(i.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,a.jsx)(i.p,{children:"A company that has 100 customers, they may need to provide their company certificates in up to 100 different ways and maintain them manually at 100 different points (typically proprietary customer portals). A company has 100 customers, that provide different certificates, from different countries and they need to validate them."}),"\n",(0,a.jsx)(i.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.em,{children:"This section is non-normative."})}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"In this section the different parts of the data model are explained."}),"\n",(0,a.jsx)(i.h4,{id:"151-bpnl-business-partner-number-legal-entity",children:"1.5.1 BPNL BUSINESS PARTNER NUMBER LEGAL ENTITY"}),"\n",(0,a.jsxs)(i.p,{children:["A ",(0,a.jsx)(i.em,{children:"Business Partner Number Legal Entity"})," (BPNL) represents and uniquely identifies a Legal Entity, which is defined by its legal name (including Legal Form, if registered), legal Address and Tax Number. For further details on BPNLs please see standard CX-0010:2.0 Business Partner Number."]}),"\n",(0,a.jsx)(i.p,{children:"For this standard and the data model the BPNL is the BPN id of the certified legal entity."}),"\n",(0,a.jsx)(i.p,{children:"Attribute: businessPartnerNumber"}),"\n",(0,a.jsx)(i.h4,{id:"152-certificate-type",children:"1.5.2 CERTIFICATE TYPE"}),"\n",(0,a.jsxs)(i.p,{children:["The attribute ",(0,a.jsx)(i.em,{children:"CertificationType"})," refers to the type of the certificate the BPN is certified for. This data model is generic and currently supports, but is not limited to, the following list of certificate types. Additional certificate types will be validated in the future, and others may already be compatible with this generic model:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"IATF 16949 (International Automotive Task Force) is a standard that defines the requirements for a quality management system in the automotive industry."}),"\n",(0,a.jsx)(i.li,{children:"ISO 14001 is a standard that outlines the requirements for an environmental management system to help organizations minimize their impact on the environment."}),"\n",(0,a.jsx)(i.li,{children:"ISO 9001 is a standard that sets out the requirements for a quality management system to help organizations consistently provide products and services that meet customer and regulatory requirements."}),"\n",(0,a.jsx)(i.li,{children:"ISO 45001, OHSAS 18001 or national certification are occupational health and safety management system standards that help companies identify and manage workplace hazards to prevent accidents and injuries."}),"\n",(0,a.jsx)(i.li,{children:"ISO/IEC 27001 is an information security management system standard that provides a framework for companies to manage and protect their sensitive information."}),"\n",(0,a.jsx)(i.li,{children:"ISO 50001 or national certification is an energy management system standard that helps companies improve energy efficiency and reduce costs."}),"\n",(0,a.jsx)(i.li,{children:"ISO/IEC 17025 is a laboratory accreditation standard that ensures the accuracy and reliability of testing and calibration results."}),"\n",(0,a.jsx)(i.li,{children:"ISO 15504 (SPICE) is a process assessment model that helps companies improve the quality and efficiency of their software development processes."}),"\n",(0,a.jsx)(i.li,{children:"ISO 20000 is an IT service management system standard that helps companies deliver high-quality IT services to their customers."}),"\n",(0,a.jsx)(i.li,{children:"ISO 22301 is a business continuity management system standard that helps companies prepare for and respond to unexpected disruptions to their operations."}),"\n",(0,a.jsx)(i.li,{children:"AEO (Authorized Economic Operator), CTPAT (Customs-Trade Partnership Against Terrorism), Security Declaration is an internationally recognized certificate that confirms a company's compliance with customs regulations and supply chain security standards. CTPAT (Customs-Trade Partnership Against Terrorism) is a voluntary program that promotes supply chain security and trade compliance with U.S. Customs and Border Protection. Security Declaration is a document that outlines a company's security measures and procedures for the transportation of goods."}),"\n",(0,a.jsx)(i.li,{children:"VDA6.4 is a standard that defines the requirements for a quality management system in the automotive industry, with a focus on process auditing."}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.em,{children:"Note"}),": The spelling of the certificate type may vary slightly on the user interface or within the data model."]}),"\n",(0,a.jsx)(i.h4,{id:"153-registration-and-issuing",children:"1.5.3 REGISTRATION AND ISSUING"}),"\n",(0,a.jsx)(i.p,{children:"The issuing authority is the authority that issues a certificate - e.g. TUEV Sued. The registration number is the unique identifier of the certificate at the certification authority / issuing body."}),"\n",(0,a.jsx)(i.p,{children:"Example: ISO 9001 certificate is issued by TUEV S\xfcd, which is the certification authority."}),"\n",(0,a.jsx)(i.h4,{id:"154-area-of-application",children:"1.5.4 AREA OF APPLICATION"}),"\n",(0,a.jsxs)(i.p,{children:["The attribute ",(0,a.jsx)(i.em,{children:"areaOfApplication"})," refers the area of applications for the given certification i.e. additional details."]}),"\n",(0,a.jsx)(i.h4,{id:"155-enclosed-sites--addresses",children:"1.5.5 ENCLOSED SITES / ADDRESSES"}),"\n",(0,a.jsxs)(i.p,{children:["This attribute ",(0,a.jsx)(i.em,{children:"enclosedSites"})," is closely linked to the ",(0,a.jsx)(i.em,{children:"Business Partner Number"})," (BPN) and indicates additional sites, such as production or engineering sites, that are covered by the certificate. In other words, the certificate is valid not only for the primary BPN, but also for any associated sites (BPNS). This attribute is particularly useful for companies with multiple locations or business units, as it allows them to manage certificates more efficiently and ensures that all relevant sites are covered by the certificate."]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.em,{children:"Note"}),": If no BPNS is available, the use of the ",(0,a.jsx)(i.em,{children:"Business Partner Number Address"})," (BPNA) is also allowed within this attribute."]}),"\n",(0,a.jsx)(i.h4,{id:"156-validity",children:"1.5.6 VALIDITY"}),"\n",(0,a.jsxs)(i.p,{children:["The attribute ",(0,a.jsx)(i.em,{children:"validity"})," refers to the date from which the certificate is valid. If it is not defined, it is recommended to use the date of issue/signature of the document. In connection with the valid-from date, there is the valid-to date for a certificate - 31.12.9999 for no expiration date."]}),"\n",(0,a.jsx)(i.h4,{id:"157-trust-level",children:"1.5.7 TRUST LEVEL"}),"\n",(0,a.jsx)(i.p,{children:"This data object defines the trust level of the certificate."}),"\n",(0,a.jsx)(i.p,{children:"The certificates are provided in the business context by the company itself - they are showing their certificates to other companies. Not every certificate can be directly validated by the issuing authority. That is why there are different trust levels defined: none / low / high / trusted."}),"\n",(0,a.jsx)(i.p,{children:"None: no validation check at all, just uploaded / provided by the company\nLow: manual validation check done by human after upload\nMedium: certificate provided by trusted issuer and manually checked (as low)\nHigh: automated cross check via some database (e.g. T\xdcV, IATF)\nTrusted: directly provided by issuer (e.g. T\xdcV)"}),"\n",(0,a.jsx)(i.h4,{id:"158-validator",children:"1.5.8 VALIDATOR"}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.em,{children:"validator"})," is the one who can validate certificate information. In the best way it is the authority that is issuing the certificates but there can be other validators. This attribute has a relation to the trust level."]}),"\n",(0,a.jsx)(i.p,{children:"E.g. Business service providers that offer a validation service for company certificates."}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.em,{children:"Note"}),": The property ",(0,a.jsx)(i.em,{children:"validatorBpn"})," expects the BPNL as the default. However, if deemed necessary, this property can be used as a free text field (string)."]}),"\n",(0,a.jsx)(i.h4,{id:"159-certificate-uploader",children:"1.5.9 CERTIFICATE UPLOADER"}),"\n",(0,a.jsxs)(i.p,{children:["The attribute ",(0,a.jsx)(i.em,{children:"uploader"})," defines the company (uploader) who originally provided the given certificate (e.g. company A provided it to business application provider B, business application provider B is a trusted validator). This company is also identified by a BPN."]}),"\n",(0,a.jsx)(i.h4,{id:"1510-id",children:"1.5.10 ID"}),"\n",(0,a.jsx)(i.p,{children:"The internal reference id to request a certificate document."}),"\n",(0,a.jsx)(i.h2,{id:"2-aspect-models",children:"2 ASPECT MODELS"}),"\n",(0,a.jsx)(i.h3,{id:"21-aspect-model-businesspartnercertificate",children:'2.1 ASPECT MODEL "BusinessPartnerCertificate"'}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"This aspect model is written in SAMM 2.1.0 as a modeling language conformant to [CX-0003:1.1] as input for the semantic driven workflow."}),"\n",(0,a.jsx)(i.p,{children:"Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to [CX-0003:1.1]."}),"\n",(0,a.jsx)(i.h4,{id:"211-license",children:"2.1.1 LICENSE"}),"\n",(0,a.jsx)(i.p,{children:"This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons."}),"\n",(0,a.jsx)(i.h4,{id:"212-identifier-of-semantic-model",children:"2.1.2 IDENTIFIER OF SEMANTIC MODEL"}),"\n",(0,a.jsx)(i.p,{children:"The semantic model has the unique identifier"}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsxs)(i.p,{children:["urn:samm",":io",".catenax.business_partner_certificate:1.0.0"]}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:["This identifier ",(0,a.jsx)(i.strong,{children:"MUST"})," be used by the data provider to define the semantics of the data being transferred."]}),"\n",(0,a.jsx)(i.h4,{id:"213-formats-of-semantic-model",children:"2.1.3 FORMATS OF SEMANTIC MODEL"}),"\n",(0,a.jsx)(i.p,{children:"The RDF turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/1ac8967e89074e42446727303033d86506bad85b/io.catenax.shared.business_partner_certificate/1.0.0/BusinessPartnerCertificate.ttl",children:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/1ac8967e89074e42446727303033d86506bad85b/io.catenax.shared.business_partner_certificate/1.0.0/BusinessPartnerCertificate.ttl"})}),"\n",(0,a.jsxs)(i.admonition,{type:"info",children:[(0,a.jsx)(i.p,{children:"The Aspect Model will be updated to version 3.0.0 within the next release (CX-Io):"}),(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsxs)(i.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/6cdb6b9e889b0bd9b9a168c3596733c585c561e5/io.catenax.shared.business_partner_certificate/3.0.0/BusinessPartnerCertificate.ttl",children:["urn:samm",":io",".catenax.business_partner_certificate:3.0.0"]})}),"\n"]}),(0,a.jsx)(i.p,{children:"it is strongly RECOMMENDED to apply the version 3.0.0 (or higher) for the certification as version 1.0.0 will be deprecated."})]}),"\n",(0,a.jsx)(i.p,{children:"The open source command line tool of the Eclipse Semantic Modeling Framework is used for generation of other file formats like for example a JSON Schema, AASX for Asset Administration Shell Submodel Template or a HTML documentation."}),"\n",(0,a.jsx)(i.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,a.jsx)(i.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"CX-0003:1.1 SAMM Aspect Meta Model"}),"\n",(0,a.jsx)(i.li,{children:"CX-0010:2.0 Business Partner Number"}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"CX-0001:1.0 EDC Discovery API"}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"not applicable"}),"\n",(0,a.jsx)(i.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,a.jsx)(i.h3,{id:"figures",children:"FIGURES"}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"not applicable"}),"\n",(0,a.jsx)(i.h3,{id:"tables",children:"TABLES"}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"not applicable"}),"\n",(0,a.jsx)(i.h2,{id:"legal",children:"Legal"}),"\n",(0,a.jsxs)(i.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,a.jsx)(i.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>o});var n=t(96540);const a={},s=n.createContext(a);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);