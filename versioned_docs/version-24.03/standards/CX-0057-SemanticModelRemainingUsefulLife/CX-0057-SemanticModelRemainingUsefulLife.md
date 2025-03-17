
# CX-0057 Semantic Model: Remaining Useful Life v1.0.0

## ABSTRACT

The data model Remaining Useful Life contains the two relevant values to describe the expected remaining life of a vehicle, remaining running distance and remaining operating hours.  

The data model is used for vehicle parts and vehicle components which cannot be visually assessed but need the loading information combined with a damage model to estimate the health of the component.  

## 1. INTRODUCTION

This document describes one semantic model used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

The standard is relevant for the following roles:

- Data Provider / Consumer
- Business Application Provider
- Enablement Service Provider

The standard “Remaining Useful Life” is the result of a service. It is meant as a short-term property of the vehicle component. The remaining life is given as “remaining running distance” and “remaining operating hours”, this is in accordance with vehicle life. The standard is not valid for non-vehicle components.

### 1.2 CONTEXT

> *This section is non-normative*

Remaining useful Life is describing the actual health of a vehicle component. Remaining useful Life is defined for vehicle and vehicle components; the values are “remaining running distance” and “remaining operating hours”. As it is a short-term property, the status of determination is part of the standard. Remaining useful Life is the result of a service determining the health of a vehicle component from the loading the component was subjected to. This loading might before example measured, simulate or estimated, this information on the origin of the loading is part of the standard.

![remaining_useful_life.png](./assets/remaing_useful_life.png)
*Figure 1: Overview*

### 1.3 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams,
examples, and notes in this specification are non-normative. Everything else in
this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**,
**REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be
interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they
appear in all capitals, as shown here.

### 1.4 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to prove, that they are conform
with the Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs).

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

### 1.5 EXAMPLES

```json
{ 
  "remainingOperatingHours": 2500, 
  "remainingRunningDistance": 150000, 
  "determinationStatus": { 
    "date": "2022-06-15T14:23:56Z", 
    "operatingHours": 3456.7, 
    "mileage": 204000 
  }, 
  "determinationLoaddataSource": { 
    "informationOriginLoadSpectrum": "loggedOEM" 
  } 
} 
```

### 1.6 TERMINOLOGY

> *This section is non-normative*
>
Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.  

: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

*[Source: Catena-X, CX-0002, note 3 removed]*

- RemainingRunningDistance:  The estimated number of kilometers, the vehicle can drive without expectable failure of the component. This is an integer number, the unit is [km].
- Remaining operating hours: Estimated number of operating hours of the vehicle without expectable failure of the component. Floating number, unit is [h].
- determinationLoaddataSource:  The remaining life is estimated from the loading the component was subjected to. The loading of the component might be logged during vehicle life or simulated or estimated: this information on the origin is stored here. If available, the URL of the loadspectrum can be stored here.
- determinationStatus :  Comprising “date”, “mileage”, “operatingHours”, the timestamp the remainingUsefulLife was calculated and the according mileage and operating  hours of the vehicle.
- sourceLoadSpectrum:  if available, the URL of the used load spectrum
- informationOriginLoadSpectrum:  enumeration of possible loaddata sources:
  - "loggedOEM":  the data are collected during usage and provided on OEM side
  - "measuredOEM": load data are measured on OEM side
  - "simulatedOEM": load data are simulated on OEM side
  - "loggedSupplier":  the data are collected during usage and provided on supplier side
  - "measuredSupplier": load data are measured on supplier side
  - "simulatedSupplier": load data are simulated on supplier side
  - "otherOrigin": any other origin of load data, may be not even a load spectrum

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 ASPECT MODEL “REMAINING USEFUL LIFE”

> *This section is normative*

### 2.1 INTRODUCTION

Remaining Useful Life is a set of values (remaining running distance, remining operating hours) to describing the expected further lifetime of a component or assembly in a vehicle.

The standard is needed to evaluate the further usage.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

To proof conformity with the RemainingUsefulLife Semantic Model Standard check your json file against the json schema.

Every data provider of  RemainingUsefulLife data MUST provide the data conformant to the semantic model specified in this document.

The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred.

Every certified business application relying on RemainingUsefulLife data MUST be able to consume data conformant to the semantic model specified in this document.

This semantic model MUST be made available in the central Semantic Hub.

Data consumers and data provider MUST comply with the license of the semantic model.

In the Catena-X data space **urn:bamm:io.catenax.rul:1.0.0##RemainingUsefulLife** data MUST be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002.

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier:

urn:bamm:io.catenax.rul:1.0.0##RemainingUsefulLife

### 2.5 FORMATS OF SEMANTIC MODEL

#### 2.5.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

The ttl file can be found here:

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.rul/1.0.0/RemainingUsefulLife.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 2.5.3 aasx

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#32-non-normative-references)].

Note: As soon as the specification V3.0 of the Asset Administration Shell specfication is available
an update will be provided.

### 2.6 SEMANTIC MODEL

The data model is described in SAMM6. A html documentation can be generated from the rdf turtle file.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX-0018 Eclipse Data Space Connector (EDC)

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

- CX-0003 SAMM Aspect Meta Model
- CX-0004 Governance Process for Semantic Models

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

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

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
