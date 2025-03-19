
# CX-0099 Data Model: Certificate of Decommissioning v1.0.0

## ABSTRACT

In the context of a circular economy, a simplified lifecycle model of a physical asset includes the lifecycle phases design, production, use, and end of life (EoL). Start and end of the individual phases are defined by certificates. In the sense of circularity, the EoL phase is the link towards a new life.

The Certificate of Decommissioning (CoDM) is the certificate that describes the point in time at which an asset is permanently decommissioned. The use phase is completed, and the end-of-life (EoL) phase starts.

The certificate contains information about what, when, and by whom it was decommissioned. Other aspects, such as ownership, status, and so on, are not considered via this CoDM certificate.

## 1. INTRODUCTION

This document describes a semantic model used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

List for which roles the standard is relevant:

- Data Provider / Consumer
- Business Application Provider

Scope of this document is to provide guidance about the structure of the
data model which is used for the PCF Value exchange. The used REST API
is not part of this document and is described in a separate document.

### 1.2 CONTEXT

"Certificates" are attestations to make a condition or situation determinable.
In this sense, the Certificate of Decommissioning (CoDM) describes the point in time of the life cycle of an asset at which it is irrevocably decommissioned. The usage phase is completed, and the end-of-live (EoL) phase is starting.
With the loss of the purpose of the assets, e.g., car, all sub-components are also transferred in the realization phase.
The certificate can be withdrawn by the issuer within a time window without giving reasons. In Catena-X it is fixed at 7 calendar days.
The certificate is only awarded once in a life cycle of an asset.

### 1.3 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines,
diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,
SHOULD and SHOULD NOT in this document are to be interpreted as
described in [BCP
14](https://datatracker.ietf.org/doc/html/bcp14) \[[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)\]
\[[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)\] when, and
only when, they appear in all capitals, as shown here.

### 1.4 PROOF OF CONFORMITY

All participants and their solutions will need to prove that they conform
with the Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs).

### 1.5 EXAMPLE

```json
{
  "revocationDate" : "2002-09-24-06:00",
  "catenaXId" : "13172f88-b228-4501-a2c9-f0a038eb85ca",
  "serialNumber" : "qwertzuiop",
  "issueDate" : "2002-09-24-06:00",
  "issuer" : "BPNLBMW000000001"
}
```

### 1.6 TERMINOLOGY

Decommissioning Certificate: Certificate of Decommissioning (CoDM): Aspect model to describe the point in time when an asset gets unreversible decommissioned and the End of Live starts

**catenaXId (UUID):** The Digital Twin identification of the decommissioned object

**issueDate (Date):** The date when the item has been decommissioned by the issuer

**Issuer (Business Partner Number BPN)**: Issuer is the business partner who creates the certificate, for vehicles only authorized dismantler. The issuer is identified via the BPN, which is the unique identifier of a partner within Catena-x.

**revocationDate (Date):** The date when the certificate is revoked by the issuer. This only happens in exceptional cases when a vehicle has been marked as decommissioned by error or any other error is made in the issuance of the certificate.

**serialNumber (String):** "real-world" identification of the catenaXId (UUID) which is bound to be destructed. For example, the VAN in case of a complete vehicle.

## 2 ASPECT MODEL "Certificate of Decommissioning"

### 2.1 INTRODUCTION

The adequate disposal of assets is regulated by law at European and national level, for example in Germany via the end-of-life vehicle regulation, the recycling law (KrWG) and others.

In this context, the CoDM aspect model provides digitally the point in time at which proper disposal started by an authorized company.
It thus forms a defined, structural milestone in the asset life cycle with significance for a wide range of application scenarios such as:

- Automation of current and future digitized reporting processes
- Calculation and reporting of comparable recycling quotas, product carbon footprint determination etc.
- Allocation of R-strategies incentives

The participant as listed under [1.1](#11-audience--scope) **MUST** provide a positive E2E
test result in order to show that the provided CoDM data follows the logic
described under [2.](#2-aspect-model-certificate-of-decommissioning)

A model validator **MUST** be created in order to prove the correctness of the data
model. A generic test set created for the model **MUST** prove the expected
results.

- The unique identifier of the semantic model specified in this document
  MUST be used by the data provider to define the semantics of the data
  being transferred.

- A CoDM in Catena-X can only be issued by an authorized business partner with the role "dismantler".

- Every certified business application relying on certificate of decommissioning data MUST be able to consume data conformant to the data model specified in this document.

- Data consumers and data providers **MUST** comply with the license of the data model.

- In the Catena-X data space certificate of decommissioning  data **MUST** be requested and
exchanged via Eclipse Dataspace Connector (EDC) conformant to [CX-0018](#31-normative-references)
and [CX-0002](#31-normative-references).

## 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This PCF aspect model is written in SAMM 2.0.0 as a modeling language conformant to [CX-0003](#3-references) as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F conformant to [CX-0003](#3-references).

### 2.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group Live Quality Loops (QAX). This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F .

The license information is available in github.

In case of doubt the license, copyright and authors information in github overwrites the information in this specification document

### 2.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier:

```txt
urn:bamm:io.catenax.decomissioning_certificate:1.0.0
```

### 2.5 FORMATS OF SEMANTIC MODEL

All different formats of the semantic model can be found in the github repository.

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.decomissioning_certificate/1.0.0
```

#### 2.5.1 RDF Turtle

The RDF Turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be accessed via github:

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.decomissioning_certificate/1.0.0/DecommissioningCertificate.ttl
```

The open source command line tool of the Eclipse Semantic Modeling Framework is used for generation of other file formats like for example a JSON schema, AASX for Asset Administration Shell Submodel Template or a HTML documentation. These other formats are saved in the "gen" folder in github:

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.decomissioning_certificate/1.0.0/gen
```

#### 2.5.2 JSON schema

A JSON schema can be generated from the RDF Turtle file. The JSON schema defines the value-only payload of the Asset Administration Shell for the API operation "GetSubmodel".

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.decomissioning_certificate/1.0.0/gen/DecommissioningCertificate-schema.json
```

#### 2.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a submodel template specification conformant to \[[SMT](#32-non-normative-references)].

```text
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.decomissioning_certificate/1.0.0/gen/DecommissioningCertificate.aasx
```

Note: As soon as the specification V3.0 of the Asset Administration Shell specification is available
an update will be provided.

## 3. References

### 3.1 NORMATIVE REFERENCES

- [CX-0003 BAMM Aspect Meta Model v1.0.2](https://catena-x.net/de/standard-library)
- [CX-0002 Digital Twins in Catena - X v2.0.0](https://catena-x.net/de/standard-library)
- [CX-0018 Sovereign Data Exchange (EDC) v2.0.1](https://catena-x.net/de/standard-library)

### 3.2 NON-NORMATIVE REFERENCES

- [SMT- How to create submodel template specification](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf)

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
