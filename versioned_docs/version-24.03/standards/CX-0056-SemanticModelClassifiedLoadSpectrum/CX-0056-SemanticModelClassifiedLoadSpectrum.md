# CX-0056 Semantic Model: Classified Load Spectrum v1.0.0

## ABSTRACT

The data model “ClassifiedLoadSpectrum” represents the load data of a vehicle component.
The load spectrum is a data set that represents the aggregated loading of a component.
Any kind of loading is covered: loading can be force or torque or revolutions or temperature or event or similar. The load data is classified and counted with specific counting methods.

This standard defines the format for the counted load data, so that the exchange of load data between different partners is possible.

## 1. INTRODUCTION

This document describes one semantic model used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

The standard is relevant for the following roles:

- Data Provider / Consumer
- Business Application Provider
- Enablement Service Provider

The data model “ClassifiedLoadSpectrum” represents the load data of a vehicle component. Loading can be force or torque or revolutions or temperature or event or similar. The load data is counted, all usual counting methods are included like Time-At-Level, Rainflow, Load-Revolution-Counting, Range-Pair, etc. The classification is comprised in the header-section while the data are stored in the body-section. In case of rainflow counted spectra, a residuum is optional. Additional a metadata section comprises information about the component, source, vehicle and vehicle status. The target Component ID identifies the CX ID of component or assembly for which the loading is provided.

Only classified load data is covered by the standard, time-history series are not included.

### 1.2 CONTEXT

> *This section is non-normative*

The „ClassifiedLoadSpectrum“ contains load data, metadata to interpret this load data and the CX ID of the assembly or component these load data are valid for.

Load spectra counts the loading of a component in classes. Loading can be a change of a state like gearshift, a temperature distribution or the torque acting at a shaft or anything else. In a load spectrum, these loads are classified. The torque acting at a shaft, for example, has an upper and a lower limit: this interval is divided in a number smaller intervals, the classes and torque is sorted is this classes. The counting may be the time the shaft is subjected to the torque or the number of changes of torque classes.

In the standard, arbitrary number of load channels are possible, but only one counting. For each load channel a vector with the acting load classes must be provided. The first entry in the counts vector is the counting of the combination of loads given in the first entries of the load channel vectors. Only load combinations which occur are stored. So the number of data is minimized.

All kinds of load data and events can be covered with the standard. The counting might be time or any kind of numbering like number of events or revolutions.

The metadata block is used to identify the right component in order to interpret the load spectrum. A component is designed for a specific application with a specific loading. To estimate the damage respectively the health of a component, a lifetime model is combined with the load data. The lifetime model is in general property of the component producer. Load data might be measured, simulated or logged during component usage.

The standard covers all classified load spectra, independent of the origin. The origin is stored in the standard.

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

All participants and their solutions **MUST** prove they conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

### 1.5 EXAMPLES

```json
{ 
    "targetComponentID": "urn:uuid:1d161134-8bd4-4253-8735-304852d1d17b", 
    "metadata": { 
        "projectDescription": "projectnumber Stadt", 
        "componentDescription": "GearOil", 
        "routeDescription": "logged", 
        "status": { 
          "date": "2022-08-11T10:42:14.213+01:00", 
          "operatingHours": 3213.9, 
          "mileage": 65432 
       
        } 
    }, 
      "header": { 
        "countingMethod": "TimeAtLevel", 
        "channels": [ 
            { 
                "channelName": "TC_SU", 
                "unit": "unit:degreeCelsius", 
                "lowerLimit": 0.0, 
                "upperLimit": 640.0, 
                "numberOfBins": 128          
            } 
        ], 
        "countingValue": "Time", 
        "countingUnit": "unit:secondUnitOfTime"
    }, 
    "body": {
        "classes": [  
        {
                "className": "TC_SU-class",
                "classList": [
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22 
                ]
            }
        ],
        "counts": { 
        "countsName": "Time",
            "countsList": [
                34968.93, 
                73972.51, 
                401315.15, 
                4675505.56, 
                2526898.35, 
                864975.95, 
                938365.35, 
                1918920.77, 
                135387.54 
            ]
        } 
    }
```

### 1.6 TERMINOLOGY

> *This section is non-normative*

Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.

: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

*[Source: Catena-X, CX-0002, note 3 removed]*

- “Classified Load Spectrum”: Aspect model
- “targetComponentID”: CX -ID of the assembly or component for which the load spectrum is valid for. It is necessary to identify the specific component.
- “metadata”/”Metadata”: property/entity; Information on component, vehicle, load data origin and vehicle status
- “componentDescription”: property; identifier, might be used to find the right lifetime model
- “projectDescription”: property; identifier, might be used for information on specific vehicle
- “routeDescription”: property; identifier, might be used for information on specific application
- “status”/”StatusEntity”: property/entity; actual vehicle status
- “date”: property; actual date at which the load spectrum is provided
- “mileage”: property; mileage which the load spectrum covers, the unit is [km]
- “operatingHours”: property; number of operating hours which the load spectrum covers

- “header”/”HeaderEntity”: property/entity; classification information
- “countingMethod”: property; enumeration describing the kind of counting: “Rainflow”, “LRD”, “EventCount”, “TimeAtLevel”, “RangeCount”, “PeakCount”, “MaximumCount”.
- “countingValue”: property; optional, for example “Time”, if time is counted.
- “countingUnit” : property; dependent on counting value “unit: s” for time
- “channels”/”LoadChannelEntity” property/entity; list of load channels. Each list entry contains
- “channelName”: property; identifier of channel
- “unit”: property; unit of the load, for example “unit: degreeCelsius” or “unit: Nm”
- “lowerLimit”: property; lower limit of the load value
- “upperLimit”: property; upper limit of the load value
- “numerOfBins”: property; number of load classes
- “binLimits”: property; optional, if a non-equidistant divisio

- “body”/”BodySets”: property/entity; lists of load dat
- “classes”/”ClassListEntity”: property/entity; list of load channels, each entry in the list contains
- “className” : here the channel is characterized by channel name. The name ics extended by “-class”. For a rainflow counting, a load channel has two class lists, the channel name must be extended with “_from-class” and “_to-class”
- “classList”: list of the load data
- “counts”/”CountsEntity”: property/entity; counts name and list
- “countsName”: Name of counting, for example “NumberOfRevolutions” or just “Counts”
- “countsList”: property; list of the counting according to the classes in same position in “classList”

- “residuum”/”ResiduumEntity”: property/entity; for rainflow counted load spectra, a residuum stores the unclosed hysteresis loops.
- “residuumClassName”: property; the name is according to the load channel name
- “residuumClassList”: property; the list of turning point classes belonging to unclosed hysteresis loops

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 ASPECT MODEL “CLASSIFIED LOAD SPECTRUM”

> *This section is normative*

### 2.1 INTRODUCTION

ClassifiedLoadSpectrum is a standard to describe counted load data for specified component. Load spectra are used to estimate the lifetime. The standard is needed to exchange load data.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier:

> urn:bamm:io.catenax.classified_load_spectrum:1.0.0

This identifier **MUST** be used by the data provider to define the semantics of the data being transferred.

### 2.5 FORMATS OF SEMANTIC MODEL

#### 2.5.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. The file can be found here:

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.classified_load_spectrum/1.0.0/ClassifiedLoadSpectrum.ttl

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

The data model is described in SAMM. A html documentation can be generated from the rdf turtle file

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

> *This section is normative*

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

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
