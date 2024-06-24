# CX - 0104 Aspect Model AssetTrackerLinks v1.0.0

## FOR WHOM IS THE STANDARD DESIGNED

Please refer to: AUDIENCE & SCOPE.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

This is the initial version of the standard.

## ABSTRACT

The asset tracking use case aims to design a standard solution how diverse IoT solutions, available on the free market, can be incorporated into the Catena-X network keeping the interoperability and data sovereignty requirements respected. Although the main goal was always to track company assets with the various IoT devices, based on the set of standards designed by asset tracking use case team, there is a potential to fully use these in any use case in the Catena-X environment and beyond. The model opens the door for any IoT device manufacturer and any network provider to be part of the Catena-X network.

The data model “AssetTrackerLinks” represents a link between an asset and IoT sensor device via their corresponding unique Catena-X Identifiers. It contains information about the timestamps of pairing and unpairing. The link between asset and IoT sensor devices has critical importance, else the data collected from IoT sensor devices cannot be interpreted. The IoT sensor data gain on business value only when those are related to an asset.

## 1 INTRODUCTION

This document describes a semantic model used in the Catena-X network which is used by the Asset Tracking Application to create a link between an individual asset and individual IoT sensor device.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

The standard is relevant for the following roles:

- Data Provider / Consumer
- Business Application Provider

The data model "AssetTrackerLinks" represents a link between an individual asset and individual IoT sensor device with timestamps of pairing and unpairing.
In the moment, when an Individual IoT sensor device is attached to an Individual asset, pairing happens and this moment can be described with a timestamp - Paired.
Opposite way around, when tracking lifecycle ends, unpairing happens and this moment can be described with a timestamp - Unpaired.

To enable easy control about the status of an asset a status check: paired- true/false is integrated in the model.
It is planned the digital twins to store only the last valid sensor information for a pair of “individual asset - individual IoT sensor device”, and that's why the model provides a path /endpoint to reach the historical data for the connection.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The purpose of the Asset Tracking Solution is to track Individual assets with Various IoT sensor devices. The data model “AssetTrackerLinks” represents a link between an individual asset and individual IoT sensor device. Assets can be tracked with one IoT sensor device for short period – only for a single event or for longer period – eventually the whole asset life. Hence it is important to know at which moment of time which IoT sensor device was attached to the individual asset.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams,
examples, and notes in this specification are non-normative. Everything else in
this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**,
**REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be
interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they
appear in all capitals, as shown here.

All participants and their solutions **MUST** proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).  

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

### 1.4 EXAMPLES

```json
{
  "catenaXId" : "urn:uuid:ed85f17e-29dd-473c-9cb8-d7ad1dc44d2f",
  "childItems" : [ {
    "historicalData" : "https://mycompany.s3.amazonaws.com/historicalsensordata",
    "catenaXId" : "urn:uuid:ed85f17e-29dd-473c-9cb8-d7ad1dc44d2f",
    "pairedOn" : "2023-02-03T14:48:54.709Z",
    "unpairedOn" : "2023-02-04T14:48:54.709Z",
    "paired" : false
  } ]
}
```

### 1.5 TERMINOLOGY

> *This section is non-normative*

**catenaXId:**
The Catena-X identifier of the given asset or device, valid for the Catena-X dataspace.

**childItems:**
Set of child items, of which the given parent object consist of.

**historicalData:**
Describes the location where the historical sensor data can be found.

**pairedOn:**
Timestamp of pairing of an IoT Device to an Asset.

**unpairedOn:**
Timestamp of the unpairing of an IoT Device from an Asset.

**paired:**
Asset and device are curently paired when set to true.

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 ASPECT MODEL “AssetTrackerLinks v2.0.0”

> *This section is normative*

### 2.1 INTRODUCTION

The purpose of the Asset Tracking product is to track Individual assets with Various IoT sensor devices.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf).

This aspect model is written in SAMM as a modeling language and like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F conformant to CX-0003.

### 2.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group Circular Economy - Asset Tracking (CAT).
This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier

**urn:samm:io.catenax.asset_tracker_links:2.0.0**

### 2.5 FORMATS OF SEMANTIC MODEL

#### 2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.asset_tracker_links/2.0.0/AssetTrackerLinks.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

#### 2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.asset_tracker_links/2.0.0/gen/AssetTrackerLinks-schema.json

#### 2.5.3 AASX

A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification conformant to \[[SMT](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf)].

### 2.6 SEMANTIC MODEL

The data model is described in SAMM. The generated documenattion can be found here: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.asset_tracker_links/2.0.0/gen

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

The data model follows the Standard [CX - 0045 Aspect Model Data Chain Template](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Archiv/Update_Juli_23_R_3.2/CX-0045-AspectModelDataChainTemplate-v1.1.1.pdf)

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

[SMT] How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## ANNEXES

### FIGURES

> *This section is non-normative*

![Alt text](./assets/AssetTrackerLinks.png)

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
