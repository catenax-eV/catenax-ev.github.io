# CX-0088 Aspect Model: User Estimated Loading v1.0.0

## ABSTRACT

[Mandatory] - Please provide a high-level (management) summary of the standard.

The semantic model described below is the structured input for the Endurance Estimator Service.  This Service should be used by normal customer without special knowledge of technical datails of the car or access to ECU data. The input is basic data about the vehicle and information about the usage, previous usage as well as future usage.

## 1. INTRODUCTION

This document describes the semantic model "User Estimated Loading" used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*
  
This standard is relevant for the following roles:

- Data Provider / Consumer
- Business Application Provider

The standard "User Estimated Loading" is describing input to a service. It is only used as input and not stored.

### 1.2 CONTEXT

> *This section is non-normative*

"User estimated loading" is describing the vehicle and the usage of the vehicle. As named, the loading will be estimated from the usage in order to assess the remaining useful life of vehicle respectively the vehicle components.

The usage as well as the vehicle data are general information not specified for a specific component. Previous usage as well as future application are included.

### 1.3 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams,
examples, and notes in this specification are non-normative. Everything else in
this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**,
**REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be
interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they
appear in all capitals, as shown here.

### 1.4 PROOF OF CONFORMITY

> *This section is normative*

All participants and their solutions **MUST** prove, that they are conform
with the Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs).
  
For Data Provider: To prove conformity you have to fulfill all **MUST**
criteria mentioned in chapter Normative criteria for Data
Provider.

There is no proof of conformity necessary for Data Consumer.

For Business Application Provider: To prove conformity you have to
fulfill all **MUST** criteria mentioned in chapter Normative criteria for
Business Application Provider.

A model validator must be created, to prove the correctness of the data
model. A generic test set created for the model **MUST** prove the expected
results.

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

### 1.5 EXAMPLES

Example payload in JSON format:

```json
{
    "vehicleStatus": {
        "milage": 123456                      
    },
    "vehicleData": {                                                   
        "grossVehicleWeightKG": 1998,              
        "powerKW": 300,                          
        "energySourceCode": "0008",  
        "vehicleType": "limousine",                   
        "numberOfPoweredAxles": 2                  
    },

    "history": [
        {
            "percentage": 25,
            "drivingStyle": 80,
            "trailerUse": false,
            "cityDriving": false,
            "hilliness": 80,
            "curviness": 60
        },
        {
            "percentage": 75,
            "drivingStyle": 40,
            "trailerUse": false,
            "cityDriving": true,
            "hilliness": 30,
            "curviness": 50
        }
    ],
      "future": [
        {
            "futureScenarioId": 1,
            "futureScenario": [
                {
                    "percentage": 90.0,
                    "drivingStyle": 30,
                    "trailerUse": false,
                    "cityDriving": true,
                    "hilliness": 10,
                    "curviness": 50
                },
                {
                    "percentage": 10.0,
                    "drivingStyle": 20,
                    "trailerUse": true,
                    "cityDriving": true,
                    "hilliness": 10,
                    "curviness": 50
                }
            ]
        },
        {
            "futureScenarioId": 2,
            "futureScenario": [
                {
                    "percentage": 100,
                    "drivingStyle": 20,
                    "hilliness": 30,
                    "curviness": 20,
                    "trailerUse": true,
                    "cityDriving": false
                }
            ]
        }
    ]
}
```

### 1.6 TERMINOLOGY

> *This section is non-normative*

```text
    [Mandatory] The following terms are especially relevant for the understanding
    of the standard:
```

Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.  

: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

*[Source: Catena-X, CX-0002, note 3 removed]*

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 ASPECT MODEL "UserEstimatedLoading"

> *This section is normative*

```text
    [Mandatory] – This chapter (and maybe following chapters) describe the 
    NORMATIVE part of the standard for an aspect model. 

    Use the keywords to indicate Conformity Assessment Criteria

    Note: If parts of the standard only apply to certain roles, this must be 
    marked either in the normative statement, if only the normative statement
    applies to a certain role, or as the intro to a paragraph if the whole 
    paragraph applies to a certain role. 
```

### 2.1 INTRODUCTION

The aspect model comprises basic vehicle data, vehicle status information, previous usage information and future usage information in a structured form in order to estimate the remaining useful life.

Every data provider of userEstimatedLoading data MUST provide the data conformant to the semantic model specified in this document. The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred. Every certified business application relying on userEstimatedLoading data MUST be able to consume data conformant to the semantic model specified in this document. This semantic model MUST be made available in the central Semantic Hub. Data consumers and data provider MUST comply with the license of the semantic model.

In the Catena-X data space userEstimatedLoading data MUST be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX – 0018 ECLIPSE DATA SPACE CONNECTOR (EDC). The JSON Payload of data providers MUST be conformant to the JSON Schema as specified in this document.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in BAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.4 IDENTIFER OF SEMANTIC MODEL

```text
    [Mandatory] 
```

The semantic model has the unique identifier

**urn:bamm:io.catenax.user_estimated_loading_data:1.0.0**

This identifier MUST be used by the data provider to define the semantics of the data being transferred.

### 2.5 FORMATS OF SEMANTIC MODEL

```text
    [Mandatory] 
```

#### 2.5.1 RDF Turtle

```text
    [Mandatory] 
```

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.user_estimated_loading/1.0.0/UserEstimatedLoading.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 2.5.3 aasx

```text
    [Mandatory] 
```

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#32-non-normative-references)].

Note: As soon as the specification V3.0 of the Asset Administration Shell specfication is available
an update will be provided.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

```text
    [Optional] - Links to related Catena-X or external standards that need to be
    meet in order to fulfil this standard. If no external standards need to be
    met, leave empty.
```

CX-0003 SAMM Aspect Meta Model, Version 1.0.1
CX-0004 Governance Process for Semantic Models, Version 1.0.1
CX–0018 ECLIPSE DATA SPACE CONNECTOR (EDC), Version 2.0.0

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

```text
    [Optional] – Links to further documentation that may help to understand the 
    standard but isn’t relevant for conformity assessment
```

[SMT] How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

```text
    [Optional] - List reference implementations that implement the standard. 
    
    Example: a reference implementation of an application using or providing data conformant to this aspect model can be found here: <link to code>
```

## ANNEXES

### FIGURES

> *This section is non-normative*

```text
    [OPTIONAL] Add figures here if necessary
```

### TABLES

> *This section is non-normative*

```text
    [OPTIONAL] Add Tables here if necessary
```

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
