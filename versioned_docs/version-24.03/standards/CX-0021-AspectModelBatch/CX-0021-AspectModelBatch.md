# CX-0021 Aspect Model: Batch v1.0.1

## ABSTRACT

A batch is a quantity of (semi-) finished products or (raw) material
product that have been produced under the same circumstances (e.g., same
production location), as specified groups or amounts, within a certain
time frame. Every batch can differ in the number or amount of products.
Different batches can have varied specifications, e.g., different
colors, quality, etc. A batch is identified via a Batch ID.

## 1. Introduction

This standardization introduces the standardized aspect model for batch
with corresponding JSON schemas and payloads for guidance and
orientation on how to provision and exchange the corresponding data
within Catena-X.

Note: The presented aspect model is in version 1.0.2.

### 1.1 Audience & Scope

> *This section is non-normative*

This standard applies to the roles:

- Data Provider / Consumer
- Business Application Provider

The described semantic model or submodel template MUST be provided by
Traceability applications provisioning data as well as all data
providers in the traceability use-case.

### 1.2 Context

> *This section is non-normative*

This submodel template or aspect model is required to identify a batch of materials/parts within Catena-X.

It links local identifiers like to the actual Catena-X ID.

Therefore by accessing this aspect you can link a batch of physical parts to their representation within the Traceability Use-Case in Catena-X.

### 1.3 Conformance

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,
SHOULD and SHOULD NOT in this document are to be interpreted as
described in [BCP
14](https://datatracker.ietf.org/doc/html/bcp14) \[[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)\]
\[[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)\] when, and
only when, they appear in all capitals, as shown here.

### 1.5 Proof of conformity

> *This section is non-normative*

All participants and their solutions MUST prove they conform with the
Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs).

A model validator MUST be created, to prove the correctness of the data
model. A generic test set created for the model MUST prove the expected
results. in the results to the CAB.

### 1.6 Examples

Example JSON payload:

```json
{
   "localIdentifiers":[
      {
         "value":"BID12345678",
         "key":"BatchID"
      }
   ],
   "manufacturingInformation":{
      "date":"2022-02-04T14:48:54",
      "country":"HUR"
   },
   "catenaXId":"580d3adf-1981-44a0-a214-13d6ceed9379",
   "partTypeInformation":{
      "manufacturerPartId":"123-0.740-3434-A",
      "customerPartId":"PRT-12345",
      "classification":"product",
      "nameAtManufacturer":"Mirror left",
      "nameAtCustomer":"side element A"
}
```

### 1.7 Terminology

> *This section is non-normative*

**Business Partner Number (BPN)**

A BPN is the unique identifier of a partner within Catena-x.

**Aspect Model**

a formal, machine-readable semantic description (expressed with
RDF/turtle) of data accessible from an **Aspect.**

Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.

Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing)​.

*\[Source: Catena-X, SEM-002, note 3 removed\]*

Additional terminology used in this standard can be looked up in the
glossary on the association homepage.

## 2. Aspect Model BATCH

### 2.1 Introduction

This submodel template or aspect model is required to identify a batch of materials within Traceability in Catena-X.

It links local identifiers like manufacturerPartId, CustomerPartId to the actual Catena-X ID.

This allows decoupling of the Catena-X identifiers from the actual business process.

By accessing this aspect you can link a physical batch of parts to its representation within the Traceability Use-Case in Catena-X.

Every data provider of batch data MUST provide the data conformant to the semantic model specified in this document.

The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred.

Every certified business application relying on batch data MUST be able to consume data conformant to the semantic model specified in this document.

This semantic model MUST be made available in the central Semantic Hub.

Data consumers and data provider MUST comply with the license of the semantic model.

In the Catena-X data space batch data MUST be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002.

Data providers MUST provide the data as part of a digital twin of the asset for batches conformant to CX-0002.

The JSON Payload of data providers MUST be conformant to the JSON Schema as specified in this document.

### 2.2 Specification Artifacts

The modeling of the semantic model specified in this document was done
in accordance to the \"semantic driven workflow\" to create a submodel
template specification \[SMT\].

This aspect model is written in SAMM 2.0.0 as a modeling language
conformant to CX-0003 as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a
machine-readable format on GitHub[^3] conformant to CX-0003.

### 2.3 License

This Catena-X data model is an outcome of Catena-X use case group
Traceability. This Catena-X data model is made available under the terms
of the Creative Commons Attribution 4.0 International (CC-BY-4.0)
license, which is available at Creative Commons[^4].

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

## Identifer of Semantic Model

The semantic model has the unique identifier

**urn:bamm:com.catenax.batch:1.0.2#Batch**

### 2.4 Formats of Semantic Model

#### 2.4.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is
the master for generating additional file formats and serializations.

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.batch/1.0.2/Batch.ttl

The open source command line tool of the Eclipse Semantic Modeling
Framework[^5] is used for generation of other file formats like for
example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.4.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema
defines the Value-Only payload of the Asset Administration Shell for the
API operation \"GetSubmodel\".

#### 2.4.3 aasx

A AASX file can be generated from the RDF Turtle file. The AASX file
defines one of the requested artifacts for a Submodel Template
Specification conformant to \[SMT\].

Note: As soon as the specification V3.0 of the Asset Administration
Shell specfication is available and update will be provided.

## 3. References

### 3.1 Normative References

- CX-0002 DIGITAL TWINS IN CATENA-X
- CX-0003 SEMANTIC ASPECT META MODEL
- CX-0004 GOVERNANCE PROCESS FOR SEMANTIC MODELS
- CX-0018 ECLIPSE DATA SPACE CONNECTOR (EDC)
- CX-0001 EDC DISCOVERY API

### 3.2 Non-Normative References

> *This section is non-normative*

\[SMT\] How to create a submodel template specification. Guideline.
Download from:
https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

[^3]: https://github.com/eclipse-tractusx/sldt-semantic-models

[^4]: https://creativecommons.org/licenses/by/4.0/legalcode

[^5]: https://github.com/eclipse-esmf/esmf-sdk

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
