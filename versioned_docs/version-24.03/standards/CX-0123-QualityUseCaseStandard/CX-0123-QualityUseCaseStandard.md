
# CX-0123 Quality Use Case Standard v1.0.0

## ABSTRACT

```text
    The Catena-X use case "Quality" (QAX) provides the ability to detect
    quality issues the earliest possible to start root cause analyses and/or to enable
    an early warning feature for new quality topics. In subsequent steps, counter
    measures can also be defined earlier and monitored. In sum, this reduces the
    number of vehicles affected by quality issues and increases the availability of the
    vehicle and built-in components. Catena-X use case "Quality" is powered
    by Catena-X standard core components to share data from OEM and suppliers
    based on data sharing agreements and usage policies.
```

## FOR WHOM IS THE STANDARD DESIGNED

```text
    See section Audience & Scope
```

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

```text
    This is the initial version of the standard
```

## 1 INTRODUCTION

```text
    The Catena-X use case "Quality" (QAX) uses multiple data models to
    exchange data between automotive manufacturer (OEM) and component supplier
    (TIER1). Each of these data models can be supplied independently.
    The QualityTask data model defines the root element for Catena-X-based quality
    work. It describes the quality task and why two companies want to work
    collaboratively on a quality topic.
```

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

```text
    The standard is relevant for the following roles within the scope of the Use Case "Quality"
        * Data Provider/Consumer
        * Business Application Provider
    
    In scope:
    
    - Data sharing between OEM, Tier1 and Tier n
    - Earliest possible detection of potential issues with products and vehicles in usage
    - Understanding of the root cause of the detected issues to enable earliest possible counter measure implementation
```

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

```text
For all participants of the Use Case "Quality" it is necessary to provide and consume the data in accordance to the standardized semantic data models in section [3 Aspect Models](#3-aspect-mordels) to ensure the defined interoperability requirement "free of choice application" to be able to use the established inhouse tool set for analysis.

Catena-X use case "Quality" data flow: Data is exported from existing backend systems and mapped to Catena-X aspect models - see list of relevant Catena-X aspect models for use case "Quality" in section [3 Aspect Models](#3-aspect-mordels)
The so generated files are transferred between different Catena-X participants using Catena-X' Eclipse Dataspace Connector (EDC).

In order to participate in the Catena-X use case "Quality" the following single standards **MUST** be fulfilled by all participants:

CX - 0018 Eclipse Data Connector (EDC) v2.1.0  

As OEM data provider I **MUST** align to the following aspect models in the corresponding data exchange:

Aspect Model QualityTask  v1.0.0
Aspect Model VehicleProductDescription  v3.0.0
Aspect Model FleetDiagnosticData  v1.0.0
Aspect Model FleetClaimData  v1.0.0
Aspect Model FleetVehicles v1.0.0
Aspect Model QualityTaskAttachment v1.0.0

As Supplier data provider I **MUST** align to the following aspect models in the corresponding data exchange:

Aspect Model QualityTask  v1.0.0
Aspect Model PartAnalyses  v2.0.0
Aspect Model ManufacturedPartsQualityInformation  v1.0.0
Aspect Model QualityTaskAttachment v1.0.0

- Data provisioning and consuming **MUST** be done according the standardized semantic data models.
- The data provider defines the data content that will be provided. Provided data assets are defined in data sharing agreements and/or data usage policies.

As Business Application Provider I **MUST** support at least 2 aspect models (minimum standard): One from OEM data provider aspect model list and one from Supplier data provider aspect model list.

```

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

```text
    As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
    in this specification are non-normative. Everything else in this specification is normative.

    The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
    and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
    when, and only when, they appear in all capitals, as shown here.

    All participants and their solutions will need to prove, that they are conform with the Catena-X standards.
    To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
    
    Since this Use Case Quality Standard describes a set of standards to be fulfilled, participants MUST fulfill all
    mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in
    this document.
    
    The specific criteria described in this document are describing the usage of the central tools as well as common tools
    described in the linked standardization documents and therefore compliance should be checked with the tools provided
    for these components.
```

### 1.4 EXAMPLES

### 1.5 TERMINOLOGY

> *This section is non-normative*

```text
    Business Partner Number (BPN)
    : A BPN is the unique identifier of a partner within Catena-x

    Additional terminology used in this standard can be looked up in the glossary on the association homepage.

    Eclipse Dataspace Connector (EDC)
    : The EDC is a reference implementation of a connector for IDSA conform sovereign data exchange

    Additional terminology used in this standard can be looked up in the glossary on the association homepage.
```

## 2 RELEVANT PARTS OF THE STANDARD FOR SPECIFIC USE CASES

> *This section is normative*

### 2.1 "DATA SHARING RULES"

#### 2.1.1 LIST OF STANDALONE STANDARDS

#### 2.1.2 DATA REQUIRED

#### 2.1.3 ADDITIONAL REQUIREMENTS

```text
Asset File type
It is recommended to create and transfer the files in the type parquet. Only attachments for the Quality task (Quality Task Attachment) should be created in ZIP format.

Asset Transfers via EDC
File transfer is recommended to be done via EDC S3 plane, The transfer via EDC http data plane is not recommended due to the big data size.
has context menu
```

#### 2.1.4 DIGITAL TWINS AND SPECIFIC ASSET IDs

## 3 ASPECT MODELS

> *This section is normative*

### 3.1 ASPECT MODEL "QUALITY TASK"

#### 3.1.1 INTRODUCTION

QualityTask is the root element and describes why companies are
working together on a quality topic and what they want to do. All
involved companies and their contact people are named. In addition,
a flag tells what should be done with exchanged data after a
QualityTask is closed.

#### 3.1.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in BAMM 2.0.0 as a modeling language conformant to CX-0003

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.1.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case
Quality (QAX). This Catena-X data model is made available under
the terms of the Creative Commons Attribution 4.0 International
(CC-BY-4.0) license, which is available at Creative Commons.

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

#### 3.1.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model "Qualtiy Task" has the unique identifier

urn:bamm:io.catenax.quality_task:1.0.0

#### 3.1.5 FORMATS OF SEMANTIC MODEL

##### 3.1.5.1 RDF TURTLE

The rdf turtle file, adhering to the Semantic Aspect Meta Model, is the
master for generating additional file formats and serializations. It is
provided here:

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.quality_task/1.0.0

The open source command line tool of the Eclipse Semantic Modeling
Framework is used for generation of other file formats like
for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

##### 3.1.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file using the
Eclipse ESMF tooling. The JSON Schema defines the Value-Only payload of
the Asset Administration Shell for the API operation \"GetSubmodel\".

If present, example JSON-payloads MUST validate against the generated
JSON schema.

##### 3.1.5.3 AASX

### 3.2 ASPECT MODEL "VEHICLE PRODUCT DESCRIPTION"

#### 3.2.1 INTRODUCTION

The VehicleProductDescription data model is a representation of
one vehicle affected by this QualityTask. The model represents the
vehicle when it was sold to the end-customers from an end-customers
point of view: Which standard equipment was installed in the vehicle
and which extra equipment was installed in the vehicle.

#### 3.2.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.2.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case
Quality (QAX). This Catena-X data model is made available under
the terms of the Creative Commons Attribution 4.0 International
(CC-BY-4.0) license, which is available at Creative Commons.

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

#### 3.2.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier

urn:samm:io.catenax.vehicle.product_description:3.0.0

#### 3.2.5 FORMATS OF SEMANTIC MODEL

##### 3.2.5.1 RDF TURTLE

The rdf turtle file, adhering to the Semantic Aspect Meta Model, is the
master for generating additional file formats and serializations. It is
provided here:

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.vehicle.product_description/3.0.0

The open source command line tool of the Eclipse Semantic Modeling
Framework is used for generation of other file formats like
for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

##### 3.2.5.2 JSON SCHEMA

A JSON Schema as well as an example JSON payload can be generated from the RDF Turtle file using the
Eclipse ESMF tooling.

If present, example JSON-payloads MUST validate against the generated
JSON schema.

##### 3.2.5.3 AASX

### 3.3 ASPECT MODEL "FLEET DIAGNOSTIC DATA"

#### 3.3.1 INTRODUCTION

The FleetDiagnosticData model is used to exchange vehicle diagnostic data coming from multiple vehicles that are affected by a Catena-X QualityTask. For investigation also diagnostic data from similar vehicles that are not affected by a Catena-X QualityTask is exchanged.

#### 3.3.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in BAMM 2.0.0 as a modeling language conformant to CX-0003

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.3.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case
Quality (QAX). This Catena-X data model is made available under
the terms of the Creative Commons Attribution 4.0 International
(CC-BY-4.0) license, which is available at Creative Commons.

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

#### 3.3.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier

urn:bamm:io.catenax.fleet.diagnostic_data:1.0.0

#### 3.3.5 FORMATS OF SEMANTIC MODEL

##### 3.3.5.1 RDF TURTLE

The rdf turtle file, adhering to the Semantic Aspect Meta Model, is the
master for generating additional file formats and serializations. It is
provided here:

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.diagnostic_data/1.0.0

The open source command line tool of the Eclipse Semantic Modeling
Framework[^5] is used for generation of other file formats like
for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

##### 3.3.5.2 JSON SCHEMA

A JSON Schema as well as an example JSON payload can be generated from the RDF Turtle file using the
Eclipse ESMF tooling.

If present, example JSON-payloads MUST validate against the generated
JSON schema.

##### 3.3.5.3 AASX

### 3.4 ASPECT MODEL "FLEET CLAIM DATA"

#### 3.4.1 INTRODUCTION

The FleetClaimData model is used to exchange customer complaints that are recorded in a workshop: If a customer has a complaint with his car during the warranty period he goes to the workshop and wants the issue to be fixed.
The data model Fleet.ClaimData allows to exchange multiple complaints with a component manufacturer at once.

#### 3.4.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in BAMM 2.0.0 as a modeling language conformant to CX-0003

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.4.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case Quality (QAX).
This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

#### 3.4.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier

urn:bamm:io.catenax.fleet.claim_data:1.0.0

#### 3.4.5 FORMATS OF SEMANTIC MODEL

##### 3.4.5.1 RDF TURTLE

The rdf turtle file, adhering to the Semantic Aspect Meta Model, is the
master for generating additional file formats and serializations. It is
provided here:

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.claim_data/1.0.0

The open source command line tool of the Eclipse Semantic Modeling
Framework is used for generation of other file formats like
for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

##### 3.4.5.2 JSON SCHEMA

A JSON Schema as well as an example JSON payload can be generated from the RDF Turtle file using the
Eclipse ESMF tooling.

If present, example JSON-payloads MUST validate against the generated
JSON schema.

##### 3.4.5.3 AASX

### 3.5 ASPECT MODEL "PART ANALYSES"

#### 3.5.1 INTRODUCTION

The PartsAnalyses data model is used to exchange information about analyzed parts that were send back from the automotive manufacturer (OEM) to the part manufacturer.
These analyses and their results are related to one or more quality tasks.

#### 3.5.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to CX-0003.

#### 3.5.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case Quality (QAX).
This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

The license information is available in github.

In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

#### 3.5.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier

urn:samm:io.catenax.parts_analyses:2.0.0

#### 3.5.5 FORMATS OF SEMANTIC MODEL

##### 3.5.5.1 RDF TURTLE

The rdf turtle file, adhering to the Semantic Aspect Meta Model, is the
master for generating additional file formats and serializations. It is
provided here:

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.parts_analyses/2.0.0

The open source command line tool of the Eclipse Semantic Modeling
Framework is used for generation of other file formats like
for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

##### 3.5.5.2 JSON SCHEMA

A JSON Schema as well as an example JSON payload can be generated from the RDF Turtle file using the
Eclipse ESMF tooling.

If present, example JSON-payloads MUST validate against the generated
JSON schema.

##### 3.5.5.3 AASX

### 3.6 ASPECT MODEL "MANUFACTURED PARTS QUALITY INFORMATION"

#### 3.6.1 INTRODUCTION

The data model ManufacturedPartsQualityInformation is a set of manufacturing-related properties of a produced part/component that could be relevant to solve a quality task.

#### 3.6.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in BAMM 2.0.0 as a modeling language conformant to CX-0003

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to CX-0003.

#### 3.6.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case Quality (QAX).
This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

The license information is available in github.

In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

#### 3.6.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier

urn:bamm:io.catenax.manufactured_parts_quality_information:1.0.0

#### 3.6.5 FORMATS OF SEMANTIC MODEL

##### 3.6.5.1 RDF TURTLE

The rdf turtle file, adhering to the Semantic Aspect Meta Model, is the
master for generating additional file formats and serializations. It is
provided here:

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.manufactured_parts_quality_information/1.0.0

The open source command line tool of the Eclipse Semantic Modeling
Framework is used for generation of other file formats like
for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

##### 3.6.5.2 JSON SCHEMA

A JSON Schema as well as an example JSON payload can be generated from the RDF Turtle file using the
Eclipse ESMF tooling.

If present, example JSON-payloads MUST validate against the generated
JSON schema.

##### 3.6.5.3 AASX

### 3.7 ASPECT MODEL "FLEET VEHICLES"

#### 3.7.1 INTRODUCTION

The FleetVehicles data model is a representation of vehicle fleet affected by one or more QualityTasks. The data model represents the vehicles when they was sold to the end-customers from an end-customers point of view: Which standard equipment was installed in the vehicle and which extra equipment was installed in the vehicle.

#### 3.7.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in BAMM 2.0.0 as a modeling language conformant to CX-0003

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.7.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case Quality (QAX).
This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

The license information is available in github.

In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

#### 3.7.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier:

urn:samm:io.catenax.fleet.vehicles:1.0.0

This model has an external reference to Aspect Model Vehicle Product Description v3.0.0 with unique identifier urn:samm:io.catenax.vehicle.product_description:3.0.0

#### 3.7.5 FORMATS OF SEMANTIC MODEL

##### 3.7.5.1 RDF TURTLE

The rdf turtle file, adhering to the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It is provided here:
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.vehicles/1.0.0

The referenced aspect model is provided here:
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.vehicle.product_description/3.0.0

The open source command line tool of the Eclipse Semantic Modeling Framework is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

##### 3.7.5.2 JSON SCHEMA

A JSON Schema as well as an example JSON payload can be generated from the RDF Turtle file using the
Eclipse ESMF tooling.

If present, example JSON-payloads MUST validate against the generated
JSON schema.

##### 3.7.5.3 AASX

### 3.8 ASPECT MODEL "QUALITY TASK ATTACHMENT"

#### 3.8.1 INTRODUCTION

The QualityTaskAttachment data model describes a way to exchange data and files, which are not available in the existing data models, in the context of a QualityTask.
In order to make the non-standardized data and files machine understandable, they are described using the "Quality Task Attachment" model.

#### 3.8.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.8.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case Quality (QAX).
This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

The license information is available in github.

In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

#### 3.8.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier

urn:samm:io.catenax.quality_task_attachment:1.0.0

#### 3.8.5 FORMATS OF SEMANTIC MODEL

##### 3.8.5.1 RDF TURTLE

The rdf turtle file, adhering to the Semantic Aspect Meta Model, is the
master for generating additional file formats and serializations. It is
provided here:

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.quality_task_attachment/1.0.0

The open source command line tool of the Eclipse Semantic Modeling
Framework is used for generation of other file formats like
for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

##### 3.8.5.2 JSON SCHEMA

A JSON Schema as well as an example JSON payload can be generated from the RDF Turtle file using the Eclipse ESMF tooling.

If present, example JSON-payloads MUST validate against the generated JSON schema.

##### 3.8.5.3 AASX

## 4 APPLICATION PROGRAMMING INTERFACES

> *This section is normative*

*The headings below should only be understood as a suggestion*

```text
not applicable
```

### 4.1 NOTIFICATION API

#### 4.1.1 PRECONDITIONS AND DEPENDENCIES

#### 4.1.2 API SPECIFICATION

#### 4.1.3 EDC DATA ASSET STRUCTURE

#### 4.1.4 ERROR HANDLING

## 5 PROCESSES

> *This section is normative*

*The headings below should only be understood as a suggestion*

```text
not applicable
```

### 5.1 NOTIFICATION PROCESS

#### 5.1.1 ACTORS AND ROLES

#### 5.1.2 PROCESS REPRESENTATION

## 6 REFERENCES

### 6.1 NORMATIVE REFERENCES

> *This section is normative*

```text
    CX - 0018 EclipseDataConnector (EDC)  v2.1.0
```

### 6.2 NON-NORMATIVE REFERENCES

### 6.3 REFERENCE IMPLEMENTATIONS

## ANNEXES

### FIGURES

### TABLES

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
