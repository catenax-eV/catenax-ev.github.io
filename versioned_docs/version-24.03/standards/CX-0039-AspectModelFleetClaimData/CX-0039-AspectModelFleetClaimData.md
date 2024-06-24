
# CX-0039 Aspect Model: Fleet Claim Data v1.0.1

## 1. Introduction

This document describes the semantic model "Fleet Claim Data" used in
the Catena-X network.

### 1.1 Audience & Scope

> *This section is non-normative*

The described semantic model is relevant for :

- Data Provider / Consumer
- Business Application Provider

### 1.2 Context

> *This section is non-normative*

The Catena-X use case Live Quality Loops (QAX) uses multiple data models
to exchange data between automotive manufacturer (OEM) and component
supplier (TIER1). Each of these data models can be supplied
independently.

The Fleet.ClaimData model is used to exchange customer complaints that
are recorded in a workshop: If a customer has a complaint with his car
during the warranty period he goes to the workshop and wants the issue
to be fixed. The data model Fleet.ClaimData allows to exchange multiple
complaints with a component manufacturer at once.

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
criteria mentioned in chapter [Normative criteria for Data
Provider](#22-normative-criteria).

There is no proof of conformity necessary for Data Consumer.

For Business Application Provider: To prove conformity you have to
fulfill all MUST criteria mentioned in chapter [Normative criteria for
Business Application Provider](#222-normative-criteria-for-business-application-provider).\
\
A model validator needs to be created, to proof the correctness of the
data model. A generic test set created for the model needs to proof the
expected results

### 1.5 Examples

Example payload in JSON format:

```json
{
   "listOfClaims":[
      {
         "damageCode":"Lenkmuffe",
         "vehicleIdentifiers":{
            "anonymizedVIN":"ABC20654378784512",
            "vehicleCatenaXId":"580d3adf-1981-44a0-a214"
         },
         "listOfDiagnosticSessionId":[
            "20221205-04"
         ],
         "customerComment":"Lenkung ist defekt",
         "qualityTaskId":"BPN-811_2022_000001",
         "technicianComment":"Lenkung ist defekt",
         "repairMileage":10251,
         "claimId":"a214-13d6",
         "listOfParts":{
            "isPartCausal":true,
            "sparePart":{
               "name":"Getriebe",
               "number":"FZ206460050202212",
               "catenaXId":"580d3adf-1981-44a0-a214-13d6ceed9379",
               "serialNumber":"ECU20646005020221",
               "supplierId":"ZF2064600502"
            },
            "replacedPart":{
               "name":"Getriebe",
               "number":"FZ206460050202212",
               "catenaXId":"580d3adf-1981-44a0-a214-13d6ceed9379",
               "serialNumber":"ECU20646005020221",
               "supplierId":"ZF2064600502"
            },
            "isPartReplaced":true,
            "amountOfReplacedParts":2
         },
         "repairDate":"2022-02-04T14:48:54"
      }
   ]
}
```

### 1.6 Terminology

> *This section is non-normative*

**Business Partner Number (BPN)**

A BPN is the unique identifier of a partner within Catena-x.

## 2. Aspect Model Fleet Claim Data

### 2.1 Introduction

Catena-X use case "Live Quality Loops"(QAX) uses several Catena-X
standardized data models to exchange data:

![Hierarchy of Catena-X data models used in QAX](./assets/CX-0039-hierarchy-of-CX-data-models-used-in-QAX.jpg)

***Figure 1: Hierarchy of Catena-X data models used in QAX***

Data models in QAX and their content:

- QualityTask is the root element and describes why companies are working together on a quality topic and what they want to do. All involved companies and their contact people are named. In addition, a flag tells what should be done with exchanged data after a QualityTask is closed.
- Vehicle.ProductDescription: This data model is a representation of one vehicle affected by this QualityTask. The model represents the vehicle when it was sold to the end-customers from an end-customers point of view: Which standard equipment was installed in the vehicle and which extra equipment was installed in the vehicle.
- Fleet.DiagnosticData: Diagnostic data coming from multiple vehicles that are affected by this QualityTask + Diagnostic data from similar vehicles that are not affected by this QualityTask.
- Fleet.ClaimData: Customer complaints that are linked to this QualityTask + Data about the exchange of potentially faulty parts
- ManufacturedPartsQualityInformation: A selection of manufacturing-related parameters that help to solve the QualtiyTask
- PartsAnalyses: Analyses results of replaced and potentially faulty parts that are linked to this QualityTask

### 2.2 Normative Criteria

The usage of the described semantic model "Fleet Claim Data" is a MUST
for Data Provider and Data Consumer that want to work together on a
quality topic over Catena-X automotive network.

#### 2.2.1 Normative criteria for Data Provider

Every data provider MUST provide the data conformant to the semantic
model specified in CX-0039.

It is a MUST to provide a unique claimId. This claimId MUST be unique in
the data provider's company.

It is a MUST to provide the property "anonymizedVIN". "anonymizedVIN"
MUST match with "anonymizedVIN" property of Vehicle Product Description
in CX -- 0037 for the same vehicle.

It is a MUST to provide the property qualityTaskId. qualityTaskId MUST
match with qualityTaskId property of Quality Task in CX -- 0036.

If available vehicleCatenaXId of entity vehicleIdentifiers SHOULD be
provided.

In the Catena-X data space "Fleet Claim Data" MUST be exchanged via
Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002.

It is RECOMMEND to use Apache parquet[^3] file format together with EDC
S3 data plane for file data exchange of "Fleet Claim Data".

#### 2.2.2 Normative criteria for Business Application Provider

It is a MUST for Business Application Provider to support at least 2
standardized Catena-X QAX aspect models from Catena-X Release 3.0 (2 out
of Catena-X standards CX -- 0036, CX -- 0037, CX -- 0038, CX -- 0039, CX
-- 0040, CX -- 0041) to get the label "Catena-X Certified Solution" for
their quality application.

It is RECOMMEND to be able to read the semantic model "Fleet Claim
Data".

### 2.3 License

This Catena-X data model is an outcome of Catena-X use case group Live
Quality Loops (QAX). This Catena-X data model is made available under
the terms of the Creative Commons Attribution 4.0 International
(CC-BY-4.0) license, which is available at Creative Commons[^4].

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

### 2.4 Identifer of Semantic Model

This semantic model has the unique identifier

urn:bamm:io.catenax.fleet.claim_data:1.0.0

### 2.5 Formats of Semantic Model

#### 2.5.1 RDF Turtle

The rdf turtle file, adhering to the Semantic Aspect Meta Model, is the
master for generating additional file formats and serializations. It is
provided here:

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.claim_data/1.0.0

The open source command line tool of the Eclipse Semantic Modeling
Framework[^5] is used for generation of other file formats like
for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file using the
Eclipse ESMF tooling. The JSON Schema defines the Value-Only payload of
the Asset Administration Shell for the API operation \"GetSubmodel\".

If present, example JSON-payloads MUST validate against the generated
JSON schema.

## 3. References

### 3.1 Normative References

- CX-0003 SEMANTIC ASPECT META MODEL  
- CX-0004 GOVERNANCE PROCESS FOR SEMANTIC MODELS  
- CX-0018 ECLPISE DATA SPACE CONNECTOR (EDC)

[^3]: https://parquet.apache.org/

[^4]: https://creativecommons.org/licenses/by/4.0/legalcode

[^5]: https://github.com/eclipse-esmf/esmf-sdk

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
