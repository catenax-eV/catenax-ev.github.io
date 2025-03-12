
# CX-0033 Data Model: Return Request v1.0.1

## 1. Introduction

This document describes semantic model ReturnRequest (see also 2.7) used
in the Catena-X network.

### 1.1 Audience & Scope

> *This section is non-normative*

List for which roles the standard is relevant:

- Data Provider / Consumer
- Business Application Provider

### 1.2 Context

> *This section is non-normative*

To enable Circular Economy it is important for part manufacturers to
indicate their interest to receive the parts back. In addition,
workshops can indicate their interest for used parts. This can increase
the rate of reuse, remanufacturing, refurbishing and repair of
components. This information is very valuable for the dismantlers and
workshops as that way they can evaluate if there is a request from the
market to receive the part back.

### 1.3 Architecture Overview

> *This section is non-normative*

Compliant with AAS standard model.

### 1.4 Conformance

As well as sections marked as non-normative, all authoring guidelines,
diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,
SHOULD and SHOULD NOT in this document are to be interpreted as
described in [BCP
14](https://datatracker.ietf.org/doc/html/bcp14) \[[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)\]
\[[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)\] when, and
only when, they appear in all capitals, as shown here.

### 1.5 Proof of conformity

> *This section is non-normative*

All participants and their solutions will need to prove they conform
with the Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs).

A model validator MUST to be created, to prove the correctness of the
data model. A generic test set created for the model MUST to prove the
expected results.

### 1.6 Examples

```json
{
   "requestDate":"2022-01-01",
   "productConditions":"at least 1990 model",
   "desiredPrice":{
      "currency":"EUR",
      "cost":5123.23
   },
   "returnConditions":"Wishes to buy",
   "needsReturn":true,
   "latestReturnDate":"2025-01-01"
}
```

### 1.7 Terminology

> *This section is non-normative*

**Aspect Model**

a formal, machine-readable semantic description (expressed with
RDF/turtle) of data accessible from an **Aspect.**

```
Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta
Model (SAMM), i.e., it utilizes elements and relations defined in the
Semantic Aspect Meta Model and is compliant to the validity rules
defined by the Semantic Aspect Meta Model. 

Note 2 to entry: Aspect model are logical data models which can be used
to detail a conceptual model in order to describe the semantics of
runtime data related to a concept. Further, elements of an Aspect model
can/should refer to terms of a standardized Business Glossary (if
existing)​.
```

*\[Source: Catena-X, SEM-002, note 3 removed\]*

Additional terminology used in this standard can be looked up in the
glossary on the association homepage.

## 2 Data Model Return Request \[Normative\]

### 2.1 Introduction

The Return Request data model is used to flag a component and/or product
to indicate that there is a demand or a request for return. Through this
aspect, the part producer of a part specifies whether and why a he wants
to receive it back.

### 2.2 Normative Criteria

To proof conformity, End-to-End test should be performed. Scope of this
End-to-End test is to verify whether the endpoints can successfully
retrieve and read the data. Those End-to-End test are already in place
and are performed before each release.

Every data provider of ReturnRequest data MUST provide the data
conformant to the semantic model specified in this document.

The unique identifier of the semantic model specified in this document
MUST be used by the data provider to define the semantics of the data
being transferred.

Every certified business application relying on ReturnRequest data MUST
be able to consume data conformant to the semantic model specified in
this document.

This semantic model MUST be made available in the central Semantic Hub.

Data consumers and data provider MUST comply with the license of the
semantic model.

In the Catena-X data space ReturnRequest data MUST be requested and
exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002 .

If applicable, Data providers MUST provide the data as part of a digital
twin of the asset (part/component) conformant to CX-0002.

The JSON Payload of data providers MUST be conformant to the JSON Schema
as specified CX-0033.

### 2.3 Specification Artifacts

The modeling of the semantic model specified in this document was done
in accordance to the \"semantic driven workflow\" to create a submodel
template specification [SMT].

This aspect model is written in SAMM 2.0.0 as a modeling language
conformant to CX-0003 as input for the semantic deriven
workflow.

Like all Catena-X data models, this model is available in a
machine-readable format on GitHub[^3] conformant to CX-0003.

### 2.4 License

This Catena-X data model is an outcome of Catena-X use case group Live
Quality Loops (QAX). This Catena-X data model is made available under
the terms of the Creative Commons Attribution 4.0 International
(CC-BY-4.0) license, which is available at Creative Commons[^4].

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

### 2.5 Identifer of Semantic Model

The semantic model has the unique identifier

urn:bamm:io.catenax.return_request:1.0.1#ReturnRequest

### 2.6 Formats of Semantic Model

#### 2.6.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is
the master for generating additional file formats and serializations.

The open source command line tool of the Eclipse Semantic Modeling
Framework[^5] is used for generation of other file formats like for
example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.6.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 2.6.3 aasx

A AASX file can be generated from the RDF Turtle file. The AASX file
defines one of the requested artifacts for a Submodel Template
Specification conformant to Template Specification conformant to [SMT].

Note: As soon as the specification V3.0 of the Asset Administration
Shell specfication is available and update will be provided.

### 2.7 Semantic Model

The semantic model can be visualized by using the RDF Turtle file which
is uploaded on GitHub.

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.return_request/1.1.1

The data model is described in SAMM (SAMM was named BAMM until end of year 2022). A html documentation can be generated from the rdf turtle file from which the following description originates.

## 3. References

### 3.1 Normative references

The following references refer to related Catena-X reference implementations and external standards. This is intended to place the present reference implementation in the context of existing references.

- CX-0002 DIGITAL TWINS IN CATENA-X
- CX-0003 SEMANTIC ASPECT META MODEL
- CX-0004 GOVERNANCE PROCESS FOR SEMANTIC MODELS
- CX-0018 ECLIPSE DATA SPACE CONNECTOR (EDC)
- CX-0033 DATA MODEL RETURN REQUEST

### 3.2 Non-normative references

> *This section is non-normative*

- \[IDSA\] [[IDS Officially a Standard: DIN SPEC 27070 is Published - International Data Spaces]\{.underline\}](https://internationaldataspaces.org/ids-officially-a-standard-din-spec-27070-is-published/)

- \[SMT\] How to create a submodel template specification. Guideline. Download from:https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

[^3]: https://github.com/eclipse-tractusx/sldt-semantic-models

[^4]: https://creativecommons.org/licenses/by/4.0/legalcode

[^5]: https://github.com/eclipse-esmf/esmf-sdk

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
