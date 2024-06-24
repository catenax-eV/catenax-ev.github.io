# CX-0109 Aspect Model Refurbishing Certificate v1.0.0

## ABSTRACT

In the context of a circular economy, a simplified lifecycle model of a physical asset includes the lifecycle phases design, production, use, and end of life (EoL). Start and end of the individual phases are defined by certificates. In the sense of circularity, the EoL phase is the link towards a new life.  

The Refurbishing-Certificate marks the point in time respectively status update at which an asset irrevocably enters a new life under the following definition made by the EU in the proposal 2023/0284 (2023/07/13): ‘refurbishment’ means actions carried out to prepare, clean, test and, where necessary, repair a part or component that is removed from vehicles or end-of-life vehicles in order to restore the performance or functionality of that part or component within the intended use and range of performance originally conceived at the design stage applicable at the time of its placing on the market. The EoL (end of life) phase is completed and a new product life cycle is started.  

The certificate contains information about what, when, and by whom it was issued. Other aspects, such as ownership, status, and so on, are not considered via this Refurbishing-Certificate.

## 1 INTRODUCTION

This document describes a semantic model used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

This Standard focuses on the Circular Economy Use Case. List for which roles the standard is relevant. This includes relevant requirements for:

- Data Provider, that want to provide / end-of-life data within a circular economy via Catena-X
- Data Consumer, who wish to obtain status information about an asset/component/material
- Business Application Provider / developer supporting the provisioning and consuming of circular economy information

### 1.2 CONTEXT AND ARCHITECTURE FIT

"Certificates" are attestations to make a condition or situation determinable.

In this sense, the Refurbishing-Certificate marks the point in time respectively status update at which an asset enters a new life under the following definition made by the EU in the proposal 2023/0284 (2023/07/13): ‘refurbishment’ means actions carried out to prepare, clean, test and, where necessary, repair a part or component that is removed from vehicles or end-of-life vehicles in order to restore the performance or functionality of that part or component within the intended use and range of performance originally conceived at the design stage applicable at the time of its placing on the market. The EoL (end of life) phase is completed, and a new product life cycle is started.  

Each certificate can be withdrawn by the issuer within a specified time window without the need for justification. In Catena-X, this time frame is fixed at 7 calendar days.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative. The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in BCP 14 RFC2119] RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).  

Please refer to: https://catena-x.net/en/catena-x-introduce-implement/certification for the process of conformity assessment and certification. Since this Certificate describes a standard, participants MUST fulfill respective conformity assessment criteria in addition to the specific criteria mentioned in this document. The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.  

The allocation of dismantler role in Catena-X is part of a separate authorization and onboarding process.

The Refurbishing-Certificate in Catena-X **MUST** be issued by an authorized business partner with the verifiable CX credential "dismantler".

### 1.4 EXAMPLES

### 1.5 TERMINOLOGY

<!-- *This section is non-normative.* -->

The following terms are especially relevant for the understanding of the standard:  

**Refurbishing-Certificate:** Aspect model to describe the point in time when an asset gets refurbished and set into a new asset.

**Dismantler:** Certified identity of dismantler, which needs a registration within Catena-X.

**Article Number:** Unique identification assigned by the dismantler for internal referencing.

**VIN:** Vehicle Identification Number. Remark: this should be deducted from a reference to the vehicle TWIN.

**OE number:** original equipment number.

**CatenaXId Previous Life (UUID):** The Digital Twin identification of the refurbished object in previous life.

**CatenaXID (UUID):** The Digital Twin identification of the refurbished object.

**issueDate (Date):** The date when the item has been decommissioned by the issuer.

**Supplier (Business Partner Number BPN):** Issuer Supplier is the business partner who creates the certificate, for vehicles only authorized dismantler. The issuer is identified via the BPN, which is the unique identifier of a partner within Catena-x.  

**revocationDate (Date):** The date when the certificate is revoked by the issuer. This only happens in exceptional cases when an asset has been marked as refurbished by error or any other error is made in the issuance of the certificate.

**SerialNumber (String):** "real-world" identification of the catenaXId (UUID) which is bound to be reused. For example, the VAN in case of a complete vehicle.  

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 ASPECT MODEL Refurbishing-Certificate”

- Every data provider of Refurbishing-Certificate data MUST provide the data conformant to the semantic model specified in this document.
- The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred.
- Every certified business application relying on Refurbishing-Certificate data MUST be able to consume data conformant to the semantic model specified in this document.
- This semantic model MUST be made available in the central Semantic Hub.
- Data consumers and data provider MUST comply with the license of the semantic model.
- In the Catena-X data space Refurbishing-Certificate data MUST be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002.
- Data providers MUST provide the data as part of a digital twin of a material/part level.
- The JSON Payload of data providers MUST be conformant to the JSON Schema as specified in this document.
- The Refurbishing-Certificate in Catena-X MUST be issued by an authorized business partner with the verifiable CX credential "dismantler".

### 2.1 INTRODUCTION

The adequate disposal of assets is regulated by law at European and national level, for example in Germany via the end-of-life vehicle regulation, the recycling law (KrWG) and others.

In this context, the Refurbishing aspect model provides digitally the point in time at which the part or component starts a new life. In that case, the EoL phase is completed.

It thus forms a defined, structural milestone in the assets life cycle with significance for a wide range of application scenarios such as:

- automation of current and future digitized reporting processes

- calculation and reporting of comparable recycling quotas, product carbon footprint determination etc.

- allocation of R-strategies incentives.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#31-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

The license information is available in github.  

In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

### 2.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier:

> urn:samm:io.catenax.refurbishing_certificate:2.0.0#

### 2.5 FORMATS OF SEMANTIC MODEL

### 2.5.1 RDF Turtle

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.refurbishing_certificate/2.0.0/RefurbishingCertificate.ttl

### 2.5.2. JSON Schema

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.refurbishing_certificate/2.0.0/gen/RefurbishingCertificate-schema.json

### 2.5.3 AASX

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.refurbishing_certificate/2.0.0/gen/RefurbishingCertificate.aasx

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.refurbishing_certificate/2.0.0/gen/RefurbishingCertificate-aas.xml

## 3 REFERENCES

### 3.1 Non-normative References

EU: [End-of-life vehicles – revision of EU rules](https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/12633-End-of-life-vehicles-revision-of-EU-rules_en)

GER: [End-of-life vehicle regulation - AltfahrzeugV](https://www.gesetze-im-internet.de/altautov/)

### ANNEXES

N/A

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
