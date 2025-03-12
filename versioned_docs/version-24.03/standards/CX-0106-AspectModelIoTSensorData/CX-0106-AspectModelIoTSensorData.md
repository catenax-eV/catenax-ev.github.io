# CX-0106 Aspect Model IotSensorData v1.0.0

## FOR WHOM IS THE STANDARD DESIGNED

Please refer to AUDIENCE & SCOPE.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

This is the initial version of the standard.

## ABSTRACT

The asset tracking use case aims to design a standard solution how diverse IoT solutions, available on the free market, can be incorporated into the Catena-X network keeping the interoperability and data souvereignty requirements respected. Although the main goal was always to track company assets with the various IoT devices, based on the set of standards designed by asset tracking use case team, there is a potential to fully use these in any use case in the Catena-X environment and beyond. The model opens the door for any IoT device manufacturer and any network provider to be part of the Catena-X network.

The data model “IotSensorData” represents a set of data collected from IoT sensor devices. The definition of IoT Sensor Devices is provided in a separate data model “IotSensorDeviceDefinition”. The sensor values have a normalized format independently from the origin network. The sensor data is the output of a device that detects and responds to some type of input from the physical environment (temperature, light, humidity, movement, etc.). The output may be used to provide input information to another system (e.g. an application to track assests) or to guide a process (e.g. support root cause analysis for quality issues with the tracked assets).

## 1 INTRODUCTION

This document describes a semantic model to support the exchange of IoT sensor data between different companies via Catena-X network. The Asset Tracking Platform receives data from IoT networks, and transforms it to this semantic model.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

The standard is relevant for the following roles:

- Data Provider / Consumer
- Business Application Provider

The data model “IotSensorData” represents a set of data collected from IoT sensor devices. The sensor data is the output of a device that detects and responds to some type of input from the physical environment  (temperature, light, humidity, movement, etc.). The output may be used to provide input information to another system (e.g. an application to track assests) or to guide a process (e.g. support root cause analysis for quality issues with the tracked assets).

The model counts with various transmission methods how data can be collected from sensors, e.g. LPWAN, WiFi, Cellular/Satellite, Bluetooth, Zigbee, W-Wave,etc.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The purpose of the Asset Tracking product is to track individual assets with various IoT sensor devices. The data model “IotSensorData” represents a set of data collected from IoT sensor devices. The sensor values are interpretable only in relation to the assets which they are attached to.

The challenge is to cover various network solutions used by sensors to provide data, like LPWAN, WiFi, Cellular/Satellite, Bluetooth, Zigbee, W-Wave, etc.

One of the important sensor values represent the GPS coordinates, which allows to locate assets in real time. The traceability of assets allows to improve business planning processes, e.g. geographical location of a returnable container allows production planners to better estimate arrival time of raw materials.

Beside of the geographical location another sensor values, like humidity, light conditions, filling level, acceleration, etc. are playing key role to improve supply chain processes. Sensor value-based documentation of the asset lifecycle supports complaint management, e.g. proven shock can impact the functionality or quality of an asset; extreme weather conditions during transportation can damage material quality in returnable containers, what should be reflected in the product shelf-life, etc.

The huge volume of data produced and transmitted from sensor devices provides a lot of information that is often critical to enterprise decision-making.

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
  "sensorRuntimeData" : [ {
    "sensorData" : [ {
      "sensorValue" : 32.00,
      "sensorUnit" : "unit:Celsius",
      "sensorType" : "Temperature"
    } ],
    "sensorGeoLocation" : {
      "altitude" : 280.20,
      "geoDataTimestamp" : "2023-02-04T14:48:54",
      "latitude" : 40.20361,
      "longitude" : 11.3102
    },
    "batteryLevel" : 50.00,
    "timestamp" : "2023-02-04T14:48:54",
    "transmissionMethod" : "LoRaWAN"
  } ],
  "catenaXId" : "urn:uuid:ed85f17e-29dd-473c-9cb8-d7ad1dc44d2f"
}
```

### 1.5 TERMINOLOGY

> *This section is non-normative*

**catenaXId:**
The fully anonymous Catena-X ID of the device, valid for the Catena-X dataspace.

**sensorRuntimeData:**
The information collected by a Sensor device at an instance in time.

**sensorData:**
The data collected by an IoT Sensor Device.

**sensorType:**
Different types of sensors that are commonly used in various applications, measuring one of the physical properties like Temperature, Pressure,  Resistance, Shock, Conduction, Heat Transfer etc.

**sensorValue:**
The measured value of the sensor type.

**sensorUnit:**
Contains a reference to one of the units in the Unit Catalog.

**sensorGeoLocation:**
Geodata, geographic data or geospatial data, refers to data and information that has explicit or implicit association with a location relative to Earth.

**altitude:**
Antenna Altitude above/below mean-sea-level (geoid).

**geoDataTimestamp:**
The timestamp of the latest sensor reading of the geo data.

**latitude:**
The angle between zenith and a plane parallel to the equator.

**longitude:**
Geographic coordinate that specifies the east-west position of a point on the Earth's surface.

**timestamp:**
The timestamp of the latest sensor reading of the geo data.

**batteryLevel:**
The battery level displays how much charge of the battery has been left.

**transmissionMethod:**
The method under which the sensing data is transmitted from the source to the remote node.

Additional terminology used in this standard can be looked up in the glossary on
the association homepage.

## 2 ASPECT MODEL "IotSensorData v2.0.0"

> *This section is normative*

### 2.1 INTRODUCTION

The purpose of the Asset Tracking product is to track Individual assets with Various IoT sensor devices. The data model “IotSensorData” represents a set of data collected from IoT sensor devices. The sensor values are interpretable only in relation to the assets which they are attached to.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in
accordance to the "semantic driven workflow" to create a submodel template
specification [SMT](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf)

This aspect model is written SAMM as a modeling language and like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F
conformant to CX-0003.

### 2.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group Circular Economy - Asset Tracking (CAT).
This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier

**urn:samm:io.catenax.iot_sensor_data:2.0.0**

### 2.5 FORMATS OF SEMANTIC MODEL

#### 2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating
additional file formats and serializations.

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.iot_sensor_data/2.0.0/IotSensorData.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.iot_sensor_data/2.0.0/gen/IotSensorData-schema.json

#### 2.5.3 AASX

A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT][(https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf)].

### 2.6 SEMANTIC MODEL

The data model is described in SAMM.
The generated documentation can be found here:

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.iot_sensor_data/2.0.0/gen

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

![Alt text](./assets/iotsensordata.png)

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
