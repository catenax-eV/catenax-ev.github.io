
# CX-0043 Aspect Model: Part As Planned v1.0.1

## ABSTRACT

A serialized part is an instance of a (design-) part, where the
particular instance can be uniquely identified by means of a serial
number or a similar identifier (e.g. VAN) or a combination of multiple
identifiers (e.g. combination of manufacturer, date and number).

The aspect will be attached to a material-level digital twin and links
the physical part and its identification to its IDs within Catena-X.

## 1. Introduction

This semantic model describes a Part/Material as it was planned. The
original intent is to attach this aspect to a material-specific twin in
an Asset Administration Shell but is not limited to that use case. The
aspect allows several identifications: of a component from a
manufacturer ID and/or part type and optionally a validity period in
order to determine the unique ID with which the part is identified
within Catena-X at a given time.

Note: The presented aspect model is in version 1.0.0.

### 1.1 Audience & Scope

> *This section is non-normative*

This standard applies to the roles:

- Data Provider / Consumer
- Business Application Provider

The described semantic model or submodel template MUST be followed for
applications that want to participate in the BomAsPlanned lifecycle phases within Catena-X.

### 1.2 Context

> *This section is non-normative*

This submodel template or aspect model is required to identify a
part/material within Catena-X.

It links the manufacturer part identification to the actual Catena-X ID.

Therefore by accessing this aspect you can link an internal material
number to its representation within the BomAsPlanned-lifecycle in
Catena-X.

### 1.3 Conformance

As well as sections marked as non-normative, all authoring guidelines,
diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,
SHOULD and SHOULD NOT in this document are to be interpreted as
described in [BCP
14](https://datatracker.ietf.org/doc/html/bcp14) \[[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)\]
\[[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)\] when, and
only when, they appear in all capitals, as shown here.

### 1.4 Proof of conformity

> *This section is non-normative*

All participants and their solutions must prove they conform with the
Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs).

A model validator must be created, to prove the correctness of the data
model. A generic test set created for the model needs to prove the
expected results.

### 1.5 Examples

Example JSON payload:

```json
{
   "partTypeInformation":{
      "classification":"product",
      "manufacturerPartId":"123-0.740-3434-A",
      "nameAtManufacturer":"Mirror left"
   },
   "validityPeriod":{
      "validFrom":"2023-02-10T15:18:13.815Z",
      "validTo":"2023-02-10T15:18:13.815Z"
   },
   "catenaXId":"580d3adf-1981-44a0-a214-13d6ceed9379"
}
```

### 1.6 Terminology

> *This section is non-normative*

The following terms are especially relevant for the understanding of the
standard:

EXAMPLE:

**Business Partner Number (BPN)**

A BPN is the unique identifier of a partner within Catena-x.

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

## 2. Aspect Model SerialPartTypization

### 2.1 Introduction

This submodel template or aspect model is required to identify a
part/material within Traceability in Catena-X.

It links manufacturerPartId to the Catena-X identifier.

This allows decoupling of the Catena-X identifiers from the actual
business process.

By accessing this aspect you can link a material/part to its
representation within the BomAsPlanned lifecycle in Catena-X.

Every data provider of partAsplanned data MUST provide the data
conformant to the semantic model specified in this document.

The unique identifier of the semantic model specified in this document
MUST be used by the data provider to define the semantics of the data
being transferred.

Every certified business application relying on partAsPlanned data MUST
be able to consume data conformant to the semantic model specified in
this document.

This semantic model MUST be made available in the central Semantic Hub.

Data consumers and data provider MUST comply with the license of the
semantic model.

In the Catena-X data space partAsPlanned data MUST be requested and
exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018
and CX-0002.

Data providers MUST provide the data as part of a digital twin of a
material/part level.

The JSON Payload of data providers MUST be conformant to the JSON Schema
as specified in this document.

### 2.2 Specification Artifacts

The modeling of the semantic model specified in this document was done
in accordance to the \"semantic driven workflow\" to create a submodel
template specification \[SMT\].

This aspect model is written in SAMM 2.0.0 as a modeling language
conformant to CX-0003 as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a
machine-readable format on GitHub[^3] c conformant to CX-0003.

### 2.3 License

This Catena-X data model is an outcome of Catena-X use case group
Traceability. This Catena-X data model is made available under the terms
of the Creative Commons Attribution 4.0 International (CC-BY-4.0)
license, which is available at Creative Commons[^4].

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

### 2.4 Identified of Semantic Model

The semantic model has the unique identifier

**urn:bamm:io.catenax.part_as_planned:1.0.0**

### 2.5 Formats of Semantic Model

#### 2.5.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_as_planned/1.0.0/PartAsPlanned.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework[^5]  is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

#### 2.5.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema
defines the Value-Only payload of the Asset Administration Shell for the
API operation \"GetSubmodel\".

#### 2.5.3 aasx

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
- CX-0018 ECLPISE DATA SPACE CONNECTOR (EDC)
- CX-0001 EDC DISCOVERY API

### 3.2 Non-Normative References

> *This section is non-normative*

- \[SMT\] How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

[^3]: https://github.com/eclipse-tractusx/sldt-semantic-models

[^4]: https://creativecommons.org/licenses/by/4.0/legalcode

[^5]: https://github.com/eclipse-esmf/esmf-sdk
