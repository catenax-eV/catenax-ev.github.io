# CX-0083 Aspect Model IotSensorDeviceDefinition v1.0.0

## FOR WHOM IS THE STANDARD DESIGNED

Please refer to: AUDIENCE & SCOPE.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

This is the initial version of the standard.

## ABSTRACT

The asset tracking use case aims to design a standard solution how diverse IoT solutions, available on the free market, can be incorporated into the Catena-X network keeping the interoperability and data sovereignty requirements respected. Although the main goal was always to track company assets with the various IoT devices, based on the set of standards designed by asset tracking use case team, there is a potential to fully use these in any use case in the Catena-X environment and beyond. The model opens the door for any IoT device manufacturer and any network provider to be part of the Catena-X network.

The data model “IotSensorDeviceDefinition” represents a set of data including an identifier which describes an individual IoT Sensor Device. This allows to differentiate individual IoT Sensor Devices from each other based on the manufacturer, serial number, sensor device type and device ownership (BPNL).

## 1 INTRODUCTION

This document describes a semantic model which is needed for the onboarding process of an IoT Sensor Device for the registration in Catena-X network. The onboarding process is done via the Asset Tracking Platform (ATP).

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

The standard is relevant for the following roles:

- Data Provider / Consumer
- Business Application Provider

The data model “IotSensorDeviceDefinition” represents a set of data including an identifier which describes an individual IoT Sensor Device. This allows to differentiate individual IoT Sensor Devices from each other based on the manufacturer, serial number, sensor device type and device ownership (BPNL).

The manufacturer, serial number and device types are fixed parameters while the ownership of the IoT Sensor Device might change in the time.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The data model “IotSensorDeviceDefinition” contains specification of IoT Sensor devices related to a Unique Catena-X Identifier.
IoT sensors are pieces of hardware that detect changes in an environment to collect data. Example of such data can be the geo location, temperature, light condition, humidity, speed/acceleration, etc. IoT sensor devices are physical objects where IoT sensors are installed, that connect wirelessly to a network and can transmit data. One sensor device can dispose of several different sensors installed.

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
  "catenaXId" : "urn:uuid:7a6a8376-1783-4926-9be0-5d946622b2e2",
  "serialNumber" : "123-0740-3434-A",
  "type" : "TRACK02839",
  "ownerID" : "BPNL00000003ABCD",
  "manufacturer" : "Company X"
}
```

### 1.5 TERMINOLOGY

> *This section is non-normative*

**catenaXId:**
The fully anonymous Catena-X identifier of the serialized part, valid for the Catena-X dataspace.

**serialNumber:**
The serial number of the IoT sensor device, as assigned by the manufacturer of the device.

**type:**
The type of the IoT sensor device.

**ownerID:**
The Catena-X BPN(L) of the device owner.

**manufacturer:**
Manufacturer of the IoT sensor device.

**Business Partner Number (BPN):**
A BPN is the unique identifier of a partner within Catena-X

Additional terminology used in this standard can be looked up in the glossary on
the association homepage.

## 2 ASPECT MODEL “IotSensorDeviceDefinition v2.0.0”

> *This section is normative*

### 2.1 INTRODUCTION

The data model “IotSensorDeviceDefinition” represents a set of data including an identifier which describes an individual IoT Sensor Device, which is required for the onboarding process of the device in the Asset Tracking Platform and potentially in a business application.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in
accordance to the "semantic driven workflow" to create a submodel template
specification [SMT](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf ).

The data model is described in SAMM and like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F
conformant to CX-0003.

### 2.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group Circular Economy - Asset Tracking (CAT).
This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier
  
**urn:samm:io.catenax.iot_sensor_device_definition:2.0.0**

### 2.5 FORMATS OF SEMANTIC MODEL

#### 2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating
additional file formats and serializations.

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.iot_sensor_device_definition/2.0.0/IotSensorDeviceDefinition.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.iot_sensor_device_definition/2.0.0/gen/IotSensorDeviceDefinition-schema.json

#### 2.5.3 AASX

A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf)].

### 2.6 SEMANTIC MODEL

The data model is described in SAMM. The generated documentation can be found here:
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.iot_sensor_device_definition/2.0.0/gen

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

[SMT] How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## ANNEXES

### FIGURES

> *This section is non-normative*

![Alt text](./assets/devicedefinition.png)

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
