
# CX-0040 Aspect Model: Part Analyses v2.0.1

## 1. Introduction

This document describes the semantic model "Parts Analyses" used in the
Catena-X network.

### 1.1 Audience & Scope

> *This section is non-normative*

The described semantic model is relevant for:

- Data Provider / Consumer
- Business Application Provider

### 1.2 Context

> *This section is non-normative*

The Catena-X use case Quality (QAX) uses multiple data models
to exchange data between automotive manufacturer (OEM) and component
supplier (TIER1). Each of these data models can be supplied
independently.

The PartsAnalyses data model is used to exchange information about
analyzed parts that were send back from the automotive manufacturer
(OEM) to the part manufacturer. These analyses and their results are
related to one or more quality tasks.

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

All participants and their solutions will need to proof, that they are
conform with the Catena-X standards. To validate that the standards are
applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

For Data Provider: To prove conformity you have to fulfill all MUST
criteria mentioned in chapter  [Normative criteria for data provider](#221-normative-criteria-for-data-provider).

There is no proof of conformity necessary for Data Consumer.

For Business Application Provider: To prove conformity you have to
fulfill all MUST criteria mentioned in chapter [Normative criteria for Business Application Provider](#222-normative-criteria-for-business-application-provider).

A model validator needs to be created, to proof the correctness of the
data model. A generic test set created for the model needs to proof the
expected results.

### 1.5 Examples

Example payload in JSON format:

```json
{
  "listOfPartAnalyses" : [ {
    "catenaXPartId" : "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9000",
    "resultsDescription" : "Corrossion on component xyz in steering motor",
    "customerPartNumber" : "OE-PRT-12345",
    "qualityTaskId" : "BPN-811_2022_000001",
    "manufacturerSerialPartNumber" : "436347347.4343884384.FTG.538348",
    "isDefect" : true,
    "manufacturerAnalysisID" : "TIER-647439403403",
    "anonymizedVin" : "3747429FGH382923974682",
    "manufacturerPartNumber" : "123-0.740-3434-A",
    "customerAnalysisID" : "OE-43673473438",
    "manufacturerPartName" : "Steering assembly",
    "addtionalInformation" : {
      "keys" : [ "Steel quality" ],
      "values" : [ "Stainless steel" ]
    },
    "status" : "new"
  } ]
}
```

### 1.6 Terminology

> *This section is non-normative*

**Business Partner Number (BPN)**

A BPN is the unique identifier of a partner within Catena-x.

## 2. Aspect Model Part Analyses

### 2.1 Introduction

Catena-X use case "Quality"(QAX) uses several Catena-X
standardized data models to exchange data:

[Aspect models used in QAX](./assets/QaxSemanticModelOverview.jpg)

***Figure 1: Hierarchy of Catena-X data models used in QAX***

Data models in QAX and their content:

- QualityTask is the root element and describes why companies are
    working together on a quality topic and what they want to do. All
    involved companies and their contact people are named. In addition,
    a flag tells what should be done with exchanged data after a
    QualityTask is closed.

- Vehicle.ProductDescription: This data model is a representation of
    one vehicle affected by this QualityTask. The model represents the
    vehicle when it was sold to the end-customers from an end-customers
    point of view: Which standard equipment was installed in the vehicle
    and which extra equipment was installed in the vehicle.

- Fleet.DiagnosticData: Diagnostic data coming from multiple vehicles
    that are affected by this QualityTask + Diagnostic data from similar
    vehicles that are not affected by this QualityTask.

- Fleet.ClaimData: Customer complaints that are linked to this
    QualityTask + Data about the exchange of potentially faulty parts

- ManufacturedPartsQualityInformation: A selection of
    manufacturing-related parameters that help to solve the QualityTask

- PartsAnalyses: Analyses results of replaced and potentially faulty
    parts that are linked to this QualityTask

### 2.2 Normative Criteria

The usage of the described semantic model "Parts Analyses" is a MUST for
Data Provider and Data Consumer that want to work together on a quality
topic over Catena-X automotive network.

#### 2.2.1 Normative criteria for Data Provider

Every data provider of "Parts Analyses" MUST provide the data conformant
to the semantic model specified in CX-0040.

If available a data provider of "Parts Analyses" MUST provide property
manufacturerSerialPartNumber for serial parts.

If available a data provider of "Parts Analyses" MUST provide
manufacturerPartIdentifier for non-serial parts.

It is a MUST for data providers of "Parts Analyses" to provide the
property qualityTaskId. qualityTaskId MUST match with qualityTaskId
property of "Quality Task" data specified in CX - 0036.

If available catenaXIdentifier of the analyzed parts SHOULD be provided
by the data provider.

In the Catena-X data space "Parts Analyses" data MUST be exchanged via
Eclipse Dataspace Connector (EDC) conformant to CX - 0018.

It is RECOMMENDED to use Apache parquet[^3] file format together with EDC
S3 data plane for file data exchange for "Parts Analyses".

#### 2.2.2 Normative criteria for Business Application Provider

It is a MUST for Business Application Provider to support at least 2 standardized Catena-X QAX aspect models from Catena-X Release 3.2 (2 out of Catena-X standards CX – 0036, CX – 0037, CX – 0038, CX – 0039, CX – 0040, CX – 0041, CX - 0091) to get the label “Catena-X Certified Solution” for their quality application.

It is RECOMMENDED for Business Application Provider to be able to read the semantic model “Parts Analyses”.

### 2.3 License

This Catena-X data model is an outcome of Catena-X use case group Live
Quality Loops (QAX). This Catena-X data model is made available under
the terms of the Creative Commons Attribution 4.0 International
(CC-BY-4.0) license, which is available at Creative Commons[^4].

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

### 2.4 Identifier of Semantic Model

This semantic model has the unique identifier

urn:samm:io.catenax.parts_analyses:2.0.0

### 2.5 Formats of Semantic Model

#### 2.5.1 RDF Turtle

The rdf turtle file, adhering to the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It is provided here:

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.parts_analyses/2.0.0

The open source command line tool of the Eclipse Semantic Modeling
Framework[^5] is used for generation of other file formats like
for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON Schema

A JSON Schemaas well as an example JSON payload can be generated from the RDF Turtle file using the
Eclipse ESMF tooling.

If present, example JSON-payloads MUST validate against the generated
JSON schema.

## 3. References

### 3.1 Normative References

CX - 0018 EclipseDataConnector(EDC)  
CX - 0036 Aspect Model: QualityTask  
CX - 0037 Aspect Model: Vehicle.ProductionData  
CX - 0038 Aspect Model: Fleet.DiagnosticData  
CX - 0039 Aspect Model: Fleet.ClaimData  
CX - 0040-Aspect Model: PartAnalyses  
CX - 0041-Aspect Model: ManufacturedPartsQualityInformation  
CX - 0091 Aspect Model: Fleet.Vehicles  
CX - 0092 Aspect Model: QualityTaskAttachment  

[^3]: https://parquet.apache.org/

[^4]: https://creativecommons.org/licenses/by/4.0/legalcode

[^5]: https://github.com/eclipse-esmf/esmf-sdk#samm-cli
