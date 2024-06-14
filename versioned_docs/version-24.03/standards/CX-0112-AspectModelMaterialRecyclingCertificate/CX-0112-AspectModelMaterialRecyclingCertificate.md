# CX-0112-AspectModelMaterialRecyclingCertificate-v1.0.0.md

## ABSTRACT

 In the context of a circular economy, a simplified life cycle model of a physical asset comprises the design, production, use and end of life (EoL) phases. Certificates define the beginning and end of each phase. In the context of a circular economy, the EoL phase serves as a link to a new life.  

The Material Recycling Certificate denotes the moment or status update when an economic asset transitions into a new state by being transferred to an authorized business partner. In the case of the Material-Recycling Certificate, it signifies the point at which, following the decision to employ the "Recycling" strategy (R-strategy), the material is handed over to a downstream economic actor tasked with material recycling. Typically, the authorized partner is a shredding company and/or a recycler.

The certificate contains information about what, when, and by whom it was issued. Other aspects, such as ownership, status, and so on, are not considered via this certificate.

## 1 INTRODUCTION

This document describes a semantic model used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

This Standard focuses on the Circular Economy Use Case. List for which roles the standard is relevant. This includes relevant requirements for:

- Data Provider, that want to provide / end-of-life data within a circular economy via Catena-X
- Data Consumer, who wish to obtain status information about an asset/component/vehicle/liquid/material
- Business Application Provider / developer supporting the provisioning and consuming of circular economy information

### 1.2 CONTEXT AND ARCHITECTURE FIT

Certificates, as defined in the context of End of Life (EoL), serve as attestations that describe the status or condition of a vehicle or component.
Specifically, the Material-Recycling Certificate signifies the moment or status update when an asset undergoes an irreversible transition to a new state through transfer to an authorized business partner. In most cases, this partner is a shredding company and/or a recycler. The EoL-phase concludes, and a new product life cycle commences.

Each certificate is subject to withdrawal by the issuer within a specified time window without the need for justification. In Catena-X, this time frame is fixed at 7 calendar days.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative. The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in BCP 14 RFC2119] RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).  

Please refer to: https://catena-x.net/en/catena-x-introduce-implement/certification for the process of conformity assessment and certification. Since this Certificate describes a standard, participants MUST fulfill respective conformity assessment criteria in addition to the specific criteria mentioned in this document. The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.  

The allocation of dismantler role in Catena-X is part of a separate authorization and onboarding process.

The Material-Recycling-Certificate in Catena-X **MUST** be issued by an authorized business partner with the verifiable CX credential "dismantler".

### 1.4 EXAMPLES

### 1.5 TERMINOLOGY

*This section is non-normative.*

The following terms are especially relevant for the understanding of the standard:  

**Material-Recycling-Certificate:** Aspect model to describe the point in time when an asset irrevocably enters a new status through transferring to an authorized business partner. In most cases the authorized partner is a shredder company and/or a recycler.

**Dismantler:** Certified identity of dismantler, which needs a registration within Catena-X.

**Article Number:** Unique identification assigned by the dismantler for internal referencing.

**VIN:** Vehicle Identification Number. Remark: this should be deducted from a reference to the vehicle TWIN.

**OE number:** original equipment number.

**CatenaXId Previous Life (UUID):** The Digital Twin identification of the recycled object in previous life.

**CatenaXID (UUID):** The Digital Twin identification of the recycled object.

**issueDate (Date):** The date when the item has been decommissioned by the issuer.

**Supplier (Business Partner Number BPN):** Issuer Supplier is the business partner who creates the certificate, for vehicles only authorized dismantler. The issuer is identified via the BPN, which is the unique identifier of a partner within Catena-x.  

**revocationDate (Date):** The date when the certificate is revoked by the issuer. This only happens in exceptional cases when an asset has been marked as recycled by error or any other error is made in the issuance of the certificate.

**SerialNumber (String):** "real-world" identification of the catenaXId (UUID) which is bound to be reused. For example, the VAN in case of a complete vehicle.  

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 ASPECT MODEL “Material-Recycling Certificate”

- Every data provider of Material-Recycling Certificate data MUST provide the data conformant to the semantic model specified in this document.
- The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred.
- Every certified business application relying on Material-Recycling Certificate data MUST be able to consume data conformant to the semantic model specified in this document.
- This semantic model MUST be made available in the central Semantic Hub.
- Data consumers and data provider MUST comply with the license of the semantic model.
- In the Catena-X data space Material-Recycling Certificate data MUST be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002.
- Data providers MUST provide the data as part of a digital twin of a material/part level.
- The JSON Payload of data providers MUST be conformant to the JSON Schema as specified in this document.
- The Material-Recycling-Certificate in Catena-X MUST be issued by an authorized business partner with the verifiable CX credential "dismantler".

### 2.1 INTRODUCTION

The adequate disposal of assets is regulated by law at European and national level, for example in Germany via the end-of-life vehicle regulation, the recycling law (KrWG) and others.

In this context, the Material-Recycling Certificate aspect model provides digitally the point in time at which the part or component starts a new life. In that case, the EoL phase is completed.

It thus forms a defined, structural milestone in the assets life cycle with significance for a wide range of application scenarios such as:

- automation of current and future digitized reporting processes.

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

> urn:samm:io.catenax.material_recycling_certificate:1.0.0#

### 2.5 FORMATS OF SEMANTIC MODEL

### 2.5.1 RDF Turtle

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.material_recycling_certificate/1.0.0/MaterialRecyclingCertificate.ttl

### 2.5.2. JSON Schema

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.material_recycling_certificate/1.0.0/gen/MaterialRecyclingCertificate-schema.json

### 2.5.3 AASX

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.material_recycling_certificate/1.0.0/gen/MaterialRecyclingCertificate.aasx

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.material_recycling_certificate/1.0.0/gen/MaterialRecyclingCertificate-aas.xml

## 3 REFERENCES

### 3.1 Non-normative References

EU: [End-of-life vehicles – revision of EU rules](https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/12633-End-of-life-vehicles-revision-of-EU-rules_en)

GER: [End-of-life vehicle regulation - AltfahrzeugV](https://www.gesetze-im-internet.de/altautov/)

### ANNEXES

N/A
