
# CX-0105 Asset Tracking: Triangle Document 1.0.0

## ABSTRACT

The asset tracking use case aims to design a standard solution how diverse IoT solutions, available on the free market, can be incorporated into the Catena-X network keeping the interoperability and data sovereignty requirements respected. Although the main goal was always to track company assets with the various IoT devices, based on the set of standards designed by asset tracking use case team, there is a potential to fully use these in any use case in the Catena-X environment and beyond. The model opens the door for any IoT device manufacturer and any network provider to be part of the Catena-X network.

This standard focuses on the Asset Tracking Use Case. It includes relevant requirements for

- ATP (Asset Tracking Platform) as sensor data provider - standardized tool, please refer to standardization document "CX - 0070 Asset Tracking Platform API Standardization 1.0.0"
- Application/Dashboard as data consumer - non standardized tool

## FOR WHOM IS THE STANDARD DESIGNED

Please refer to: AUDIENCE & SCOPE.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

This is the initial version of the standard.

## 1 INTRODUCTION

This document defines the so-called standardization triangle for the asset tracking use case.
Standardization triangle hereby means the mandatory components, data models, and APIs that are required to enable the asset tracking use case.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This document is meant for the following roles:

- Data Provider / Consumer
- Business Application Provider

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The Asset Tracking Platform aims to bring different IoT sensor networks to a standard Catena-X network and use sensor data for a variety of use cases, like:

- Logistics teams can track their returnable packages and assets at any time using geo data
- Use of automatic filling level measurements to drive efficient vendor-managed inventories
- Users (Tier suppliers, customers, carriers, insurers, etc.) are encouraged to monitor the quality of critical materials at any time during transportation

## Asset Tracking Platform- Component Overview

![Component Overview](./assets/ATP_Architecture_overview.png)

## Asset Tracking Platform- Process Flow Diagram

![ATP Architecture](./assets/ATP_Architecture.png)

**Components:**

**Asset Tracking Platform (Data Provider)**

The Asset Tracking Platform can be understood as a Hub that accepts data from IoT Networks, standardizes it, and enables it for Catena-X Components, Services, and Applications.

**Dashboard/Application (Data Consumer)**

A Dashboard/an Application can be used in the Catena-X Network to visualize sensor data from diverse IoT sensors.

It enables users to search & manage assets, devices, pairs & real-time tracking of assets using geo data sensors, optimizing vendor-managed inventories through automatic filling level measurements, allowing stakeholders Tiers, customers, carriers, insurers, etc.

**Networks**:

The Asset Tracking Platform can be understood as a Hub that accepts data from IoT Networks, standardizes it, and enables it for Catena-X Components, Services, and Applications.

**Business Partners**:

These are external entities, possibly suppliers, manufacturers, carriers, or other stakeholders, who are a part of the Catena-X network. They interact with the system to exchange data related to assets.

**EDC (Eclipse Dataspace Connector)**:

It's the central communication component for Catena-X that acts as a bridge between different data providers and consumers within the Catena-X ecosystem to implement a framework agreement for sovereign, cross-organizational data exchange. It ensures secure and standardized data exchange.

**dDTR (Decentralized Digital Twin registry)**:

It's a decentralized registry that lists all digital twins and references including information about the underlying asset, asset manufacturer, and access options, like aspect endpoints. Moreover, the dDTR is used to register and find data related to DTs.

**AAS (Asset Administration Shell) storage**:

It acts as a database for storing standardized device and sensor data. Devices that are paired/active can send their data to the ATP for standardization. The standardized data will be appended as a Submodel to the AAS of the parent IoT Device. The ATP normalizes the sensor data received from various IoT networks, creates an AAS model, and stores it in the AAS Storage component. It is used to describe an asset electronically in a standardized manner.

**Service discovery:**

It has the ability to map an EDC connector endpoint to a BPN.

**BPN Discovery Service:**

BPN discovery services help to restrict the number of EDCs to be accessed & it maps certain information to a business partner number (BPN). It helps the business application provider to identify the BPN of the data asset under consideration. e.g. to discover available EDC connectors.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to proof, that they conform to the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

#### 1.3.1 PROOF OF CONFORMITY

> *This section is normative*

To proof conformity with the use case Asset Tracking:

1. An Asset Tracking Platform as a (sensor) data provider:

   - **MUST** be able to convert the device and received network data in standardized semantic data models (IotSensorData and IotSensorDeviceDefinition).
   - **MUST** register Digital Twins for IoT Sensor Devices with specific asset IDs (refer to 2.2 ADDITIONAL REQUIREMENTS)

2. For an Asset Tracking Application as a data consumer:

   - **MUST** be able to link the digital twins of asset with one or multiple devices.
   - The consumption of standardized data **MUST** be done via the EDC.

### 1.4 EXAMPLES

### 1.5 TERMINOLOGY

> *This section is non-normative*

**ATP:**
Asset Tracking Platform

**EDC:**
Eclipse Dataspace Connector

**dDTR:**
Decentral Digital Twin Registry

**Business Partner Number (BPN):**
A BPN is the unique identifier of a partner within Catena-x

**AAS:**
Asset Administration Shell

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 RELEVANT PARTS OF THE STANDARD FOR SPECIFIC USE CASES

> *This section is normative*

### 2.1 "Asset Tracking: Triangle Document"

#### 2.1.1 LIST OF STANDALONE STANDARDS

To participate in the Asset Tracking use case, the following single standards MUST be fulfilled by all participants for which the standard is relevant:

CX-0002 Digital Twins in Catena-X v2.0.0

CX-0018 Eclipse Data Space Connector (EDC) v2.1.0

CX-0045 Aspect Model Data Chain Template v1.1.1

CX-0083 Aspect Model IoTSensorDeviceDefinition v1.0.0

CX-0106 Aspect Model IoTSensorData v1.0.0

CX-0104 Aspect Model AssetTrackerLinks v1.0.0

CX-0070 Asset Tracking Platform API Standardization v1.0.0

#### 2.1.2 DATA REQUIRED

#### 2.1.3 ADDITIONAL REQUIREMENTS

#### 2.1.4 DIGITAL TWINS AND SPECIFIC ASSET IDs

The Asset Tracking Platform as a sensor data provider MUST register the  Digital Twins for IoT Sensor Devices with the BPNL for ownerID, device serial number, device type, and name of manufacturer.
ex:

```json

{
    "description": [],
    "globalAssetId": {
        "value": [
            "b77383db-b9ab-48fd-ae43-d44f356d7898"
        ]
    },
    "idShort": "IoTDevice_123-0740-3434-A",
    "identification": "b77383db-b9ab-48fd-ae43-d44f356d7898",
    "specificAssetIds": [
          {
            "value": "BPNL00000003ABXD",
            "key": "ownerID"
        },
        {
            "value": "15698-0740-3434-A",
            "key": "serialNumber"
        },
        {
            "value": "TRACK01111",
            "key": "type"
        },
        {
            "value": "Company A",
            "key": "manufacturer"
        }
    ],
    "submodelDescriptors": [
        {
            "description": [
                {
                    "language": "en",
                    "text": "The Shell for IoT Sensor Device"
                }
            ],
            "idShort": "IotSensorDeviceDefinition",
            "identification": "8c73e97a-62a9-4b29-b33a-e55cfbf5f342",
            "semanticId": {
                "value": [
                    "urn:samm:io.catenax.iot_sensor_device_definition:2.0.0#IotSensorDeviceDefinition"
                ]
            },
            "endpoints": [
                {
                    "interface": "EDC",
                    "protocolInformation": {
                        "endpointAddress": "https://{company_edc}/edcs/19b22764-032d-4625-a9db-cbaa695e5cfa/assets/b77383db-b9ab-48fd-ae43-d44f356d7898",
                        "endpointProtocol": "IDS/ECLIPSE DATASPACE CONNECTOR",
                        "endpointProtocolVersion": "0.0.1-SNAPSHOT"
                    }
                }
            ]
        }
    ]
}

```

## 3 ASPECT MODELS

> *This section is normative*

### 3.1 ASPECT MODEL "IotSensorDeviceDefinition v2.0.0"

#### 3.1.1 INTRODUCTION

This aspect model is needed for the onboarding process of an IoT Sensor Device for the registration in Catena-X network. The onboarding process is done via the Asset Tracking Platform (ATP).

#### 3.1.2 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf).
The data model is described in SAMM and like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F conformant to CX-0003.

#### 3.1.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group Circular Economy - Asset Tracking (CAT). This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F.

#### 3.1.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier
**urn:samm:io.catenax.iot_sensor_device_definition:2.0.0**

#### 3.1.5 FORMATS OF SEMANTIC MODEL

The data model is described in SAMM. The generated documentation can be found here:
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.iot_sensor_device_definition/2.0.0/gen

##### 3.1.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating
additional file formats and serializations.

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.iot_sensor_device_definition/2.0.0/IotSensorDeviceDefinition.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

##### 3.1.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.iot_sensor_device_definition/2.0.0/gen/IotSensorDeviceDefinition-schema.json

##### 3.1.5.3 AASX

A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf)].

### 3.2 ASPECT MODEL "IotSensorData v2.0.0"

#### 3.2.1 INTRODUCTION

The aspect model “IotSensorData” represents a set of data collected from IoT sensor devices. The sensor values are interpretable only in relation to the assets which they are attached to.

#### 3.2.2 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in
accordance to the "semantic driven workflow" to create a submodel template
specification [SMT](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf).

This aspect model is written SAMM as a modeling language and like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F
conformant to CX-0003.

#### 3.2.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group Circular Economy - Asset Tracking (CAT).
This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F.

#### 3.2.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

**urn:samm:io.catenax.iot_sensor_data:2.0.0**

#### 3.2.5 FORMATS OF SEMANTIC MODEL

The data model is described in SAMM.
The generated documentation can be found here:
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.iot_sensor_data/2.0.0/gen

##### 3.2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating
additional file formats and serializations.

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.iot_sensor_data/2.0.0/IotSensorData.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

##### 3.2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.iot_sensor_data/2.0.0/gen/IotSensorData-schema.json

##### 3.2.5.3 AASX

A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf)].

### 3.3 ASPECT MODEL "AssetTrackerLinks v2.0.0"

#### 3.3.1 INTRODUCTION

The aspect model “AssetTrackerLinks” is used by the Asset Tracking Application to create a link between an individual asset and individual IoT sensor device.

#### 3.3.2 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf).

This aspect model is written in SAMM as a modeling language and like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F conformant to CX-0003.

#### 3.3.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group Circular Economy - Asset Tracking (CAT). This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F.

#### 3.3.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

  **urn:samm:io.catenax.asset_tracker_links:2.0.0**

#### 3.3.5 FORMATS OF SEMANTIC MODEL

The data model is described in SAMM. The generated documenattion can be found here: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.asset_tracker_links/2.0.0/gen

##### 3.3.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.asset_tracker_links/2.0.0/AssetTrackerLinks.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

##### 3.3.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.asset_tracker_links/2.0.0/gen/AssetTrackerLinks-schema.json

##### 3.3.5.3 AASX

A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf).

## 4 APPLICATION PROGRAMMING INTERFACES

> *This section is normative*

### 4.1 ASSET TRACKING PLATFORM API

#### 4.1.1 PRECONDITIONS AND DEPENDENCIES

In order to persist the necessary data, a persistence module, specifically a database, is REQUIRED by the ATP. In there, the ATP stores the API Keys and Device Registry Entries that help with associating a devices network and Catena-X information.

Communication with an IoT network is established via HTTP requests. By doing so, users can request non-standardized data from the respective network.

All standardized data, including the digital representation of an IoT device (Digital Twins, Shell Descriptors) and its data, is provided as a submodel via a submodel server. This data is accessible via an EDC. Therefore, when providing and exchanging data to the Catena-X network, an EDC is REQUIRED. The same is applicable for consuming the data, as access to the provided data is also granted via an EDC. Therefore, when consuming data from the ATP, an EDC is also REQUIRED.

To make the data discoverable in the Catena-X network, a Shell Descriptor MUST be created. Therefore, a decentralized DTR instance is REQUIRED.

#### 4.1.2 API SPECIFICATION

For the complete API Specification please refer to CX-0070-Asset-Tracking-Platform-API-Standardization-1.0.0.

#### 4.1.3 EDC DATA ASSET STRUCTURE

ATP provides the specific data objects as data assets via an EDC.

There are two relevant data models provided as a data asset:

**IoT Sensor Device Definition**

```json
{
    "catenaXId" : "0e2187dc-a12b-1234-bfb6-5e7db92f7b68",
    "serialNumber" : "some-1234-serial-5678-number",
    "type" : "some-device-type",
    "ownerID" : "BPN0000000001",
    "manufacturer" : "some-manufacturer-name"
}
```

| **Key**               | **Value Type**    | **Description**   |
|-----------------------|-------------------|-------------------|
| catenaXId             | string            | UUID of the devices digital twin |
| serialNumber          | string            | Serial number of the device |
| type                  | string            | Device Type |
| ownerID               | string            | BPN of the device owner |
| manufacturer          | string            | Manufacturer of the device |

**IoT Sensor Data**

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

| **Key**               | **Value Type**    | **Description**   |
|-----------------------|-------------------|-------------------|
| catenaXId             | string            | UUID of the devices digital twin the data was sent from |
| sensorRuntimeData     | object            |The information collected by a Sensor device at an instance in time. |
| sensorData             |object            |The data collected by an IoT Sensor Device.|
| sensorType             | string  | Different types of sensors that are commonly used in various applications, measuring one of the physical properties like Temperature, Pressure, Resistance, Shock, Conduction, Heat Transfer etc. |
| sensorValue               | string            | The measured value of the sensor type. |
| sensorUnit              | string   |Contains a reference to one of the units in the Unit Catalog.|
| timestamp              | string            | Timestamp of the sensoric values |
| sensorGeoLocation      | object            | Geodata, geographic data or geospatial data, refers to data and information that has explicit or implicit association with a location relative to Earth. |
| altitude              | number (double)   |Antenna Altitude above/below mean-sea-level (geoid). |
| latitude              | number (double)   | Latitude value. The angle between zenith and a plane parallel to the equator. |
| longitude             | number (double)   | Longitude value. Geographic coordinate that specifies the east-west position of a point on the Earth's surface. |
| geoDataTimestamp       |string | geoDataTimestamp | The timestamp of the latest sensor reading of the geo data.|
| batteryLevel          |  integer          | The battery level displays how much charge of the battery has been left. |
| transmissionMethod    | string            | The method under which the sensing data is transmitted from the source to the remote node. |

#### 4.1.4 ERROR HANDLING

The API provides specific responses for successful and unsuccessful requests.

**HttpStatusCode**

| Code | Meaning               |
|------|-----------------------|
| 200  | OK                    |
| 201  | Created               |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 409  | Conflict              |
| 500  | Internal Server Error |

In case of an error, one of the following responses can occur:

| Reason                          | Cause                                                                                         | Response Code |
|---------------------------------|-----------------------------------------------------------------------------------------------|---------------|
| Network not in path             | Network parameter was not given                                                               | 400           |
| Device Identifier not in path   | Device identifier parameter was not given                                                     | 400           |
| Device not found                | Device was not found in its network or in the Device Registry                                 | 400           |
| Device already onboarded        | A device for which the creation of a DT was requested is already saved in the Device Registry | 409           |
| Device not paired               | IoT Data for a device was received but it is not paired                                       | 409           |
| Owner not specified             | Owner was not specified in the request                                                        | 400           |
| Missing Submodel                | Received IoT data but could not find a submodel to attach it to                               | 500           |
| Submodel Server Exception       | Something went wrong while requesting something from the Submodel Server                      | 500           |

## 5 REFERENCES

### 5.1 NORMATIVE REFERENCES

> *This section is normative*

CX-0002 Digital Twins in Catena-X v2.0.0

CX-0018 Eclipse Data Space Connector (EDC) v2.1.0

CX-0045 Aspect Model Data Chain Template v1.1.1

CX-0083 Aspect Model IoTSensorDeviceDefinition v1.0.0

CX-0106 Aspect Model IoTSensorData v1.0.0

CX-0104 Aspect Model AssetTrackerLinks v1.0.0

CX-0070 Asset Tracking Platform API Standardization v1.0.0

### 5.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

### 5.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## ANNEXES

### FIGURES

> *This section is non-normative*

## Onboarding Process Of IoT Sensor Devices

![Device Onboarding](./assets/OnboardingProcessOfIoTSensorDevice.png)

## Receive IoT Sensor Data from the network in ATP

![Receive IoT data from Network](./assets/ReceiveIoTSensorDataFromNetworkInAtp.png)

## Pair / Unpair IoT Device from an Asset

![Pair / Unpair IoT Device from an Asset ](./assets/pair_unpair_device.png)

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
