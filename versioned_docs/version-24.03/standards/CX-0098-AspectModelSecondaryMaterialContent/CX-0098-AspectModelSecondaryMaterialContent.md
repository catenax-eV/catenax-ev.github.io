
# CX-0098 Aspect Model Secondary Material Content v2.0.0

## FOR WHOM IS THE STANDARD DESIGNED

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

- Differentiate between calculation and verfication of Secondary Material Content.
- Added attributes to the datamodel itself see [chapter 3](#3-references)

## ABSTRACT

The secondary material content (SMC) is a crucial aspect of the automotive industry in the pursuit towards a circular economy. Maximizing the percentage of secondary material not only helps to conserve natural resources but also reduces the environmental impact of the industry. Furthermore, it can also lead to cost savings for companies by reducing the need for virgin materials and improving supply chain resilience. This datamodel describes what material is contained in a part and how big the share of secondary material is. This enables more efficient SMC procceses based on Catena-X.

## 1 INTRODUCTION

This document describes a semantic model used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

This standard is relevant for the following roles:

- Core Service Provider

- Data Provider / Consumer

- Business Application Provider

Scope of this document is to provide guidance about the structure of the data model which is used for the SMC Use case.

### 1.2 CONTEXT AND ARCHITECTURE FIT

In order to effectively manage SMC along the supply chain, a standardized approach to capturing and exchanging SMC data is essential.
A standardized SMC data model provides a structured framework for collecting, organizing, and sharing SMC information across industries and stakeholders. It also increases the comparability across companies and decreases the chance of misunderstandings thereby leveraging data quality.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

As well as sections marked as non-normative, all authoring guidelines,
diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,
SHOULD and SHOULD NOT in this document are to be interpreted as
described in [BCP
14](https://datatracker.ietf.org/doc/html/bcp14) \[[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)\]
\[[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)\] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform
with the Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs).

The prove of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.  

### 1.4 TERMINOLOGY

Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.  
  
: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

SMC
: SMC is the abbreviation of secondary material content. In German this is also known as "Sekundärrohstoffquote" or "SRQ".

Additional terminology used in this standard can be looked up in the glossary on the association homepage (e.g. 'Cirularity Kit').

## 2 ASPECT MODEL “Secondary Material Content”

> *This section is normative*

This submodel template or aspect model is required to denote information about the secondary material content of a given part, component or batch. This aspect model will be provided as an AAS-submodel of a digital twin of a part, component or batch.

### 2.1 INTRODUCTION

Every data provider **MUST** provide the data conformant to the semantic model specified in this document.

This semantic model **MUST** be made available in the central Semantic Hub.

Data consumers and data provider **MUST** comply with the license of the
semantic model.

The submodel data **MUST** be transferred using the IDS Protocol as described in CX-0018 and CX-0002.

Data providers **MUST** provide the data as part of a digital twin of the asset for parts, components or batches conformant to CX–0002 DIGITAL TWINS IN CATENA-X.

Every certified business application relying on SMC data **MUST** be able to consume data conformant to the semantic model specified in this document.

Data consumers and data provider **MUST** comply with the license of the semantic model.

The JSON Payload of data providers **MUST** be conformant to the JSON Schema as specified in this document.

The utilization of the of the three secondary material aspect models varies dependent on the usage intention:

- SecondaryMaterialContentCalculated **SHOULD** be used for sharing a calculation of SMC.
- SecondaryMaterialContentVerifiable  **SHOULD** be used for actual built components where the SMC is measured and could be verified.
- SecondaryMaterialContent submodel **SHOULD NOT** be used, it is only for data modelling purposes.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to [CX-0003](#3-references).

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model includes three submodels with corresponding unique identifiers

```txt
<urn:samm:io.catenax.shared.secondary_material_content:2.0.0#> 
```

```txt
<urn:samm:io.catenax.secondary_material_content_calculated:1.0.0#> 
```

```txt
<urn:samm:io.catenax.secondary_material_content_verifiable:1.0.0#>
```

### 2.5 FORMATS OF SEMANTIC MODEL

All different formats of the semantic model can be found in the github repository.

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.shared.secondary_material_content/2.0.0
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.secondary_material_content_calculated/1.0.0
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.secondary_material_content_verifiable/1.0.0
```

#### 2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.shared.secondary_material_content/2.0.0/SecondaryMaterialContent.ttl
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.secondary_material_content_calculated/1.0.0/SecondaryMaterialContentCalculated.ttl
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.secondary_material_content_verifiable/1.0.0/SecondaryMaterialContentVerifiable.ttl
```

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.shared.secondary_material_content/2.0.0/gen
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.secondary_material_content_calculated/1.0.0/gen
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.secondary_material_content_verifiable/1.0.0/gen
```

#### 2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.shared.secondary_material_content/2.0.0/gen/SecondaryMaterialContent-schema.json
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.secondary_material_content_calculated/1.0.0/SecondaryMaterialContentCalculated-schema.json
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.secondary_material_content_verifiable/1.0.0/SecondaryMaterialContentVerifiable-schema.json
```

#### 2.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#32-non-normative-references)].

Note: As soon as the specification V3.0 of the Asset Administration Shell specification is available
an update will be provided.

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.shared.secondary_material_content/2.0.0/gen/SecondaryMaterialContent.aasx
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.secondary_material_content_calculated/1.0.0/gen/SecondaryMaterialContentCalculated.aasx
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.secondary_material_content_verifiable/1.0.0/gen/SecondaryMaterialContentVerifiable.aasx
```

### 2.6 SEMANTIC MODEL

The data model is described in SAMM. A html documentation can be generated from the rdf turtle
file.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

[CX - 0003 SAMM Aspect Meta Model v1.0.2](https://catena-x.net/de/standard-library)

[CX - 0004 Governance Process v1.0.1](https://catena-x.net/de/standard-library)

[CX - 0018 Eclipse Data Space Connector (EDC) v2.0.1](https://catena-x.net/de/standard-library)

### 3.2 NON-NORMATIVE REFERENCES

[SMT] How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## ANNEXES

### FIGURES

### TABLES

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
