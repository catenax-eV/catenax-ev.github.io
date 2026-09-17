---
tags:
  - CAT/Data Provider & Consumer
  - CAT/Business Application Provider
  - UC/Quality
---

# CX-0123 Field Quality Standard v4.0.0

## ABSTRACT

The Catena-X use case "Field Quality" provides the ability to detect automotive quality issues based on data from vehicles.
This capability enables the earliest possible detection of quality issues to start root cause analyses and/or to set up
an early warning feature to detect new quality topics or to monitor countermeasures of recent quality issues.
In sum, this reduces the number of vehicles affected by field quality issues. The advantage:

- Decreased costs for field quality issues and for analysis of potentially bad components
- Ability to closely monitor the launch of new components
- Increase of vehicle end-customer satisfaction due to faster response to quality issues or even avoidance/limiting number of affected vehicle end-customer

## FOR WHOM IS THE STANDARD DESIGNED

```text
  see section Audience & Scope
```

## 1 INTRODUCTION

The Catena-X use case "Field Quality" uses multiple data models to exchange data between vehicle manufacturer(OEM) and component supplier
(TIER 1) or along the supply chain between TIER N and TIER N + 1 supplier.
Depending what you would like to achieve, different data models are used in combination. The data models are created in such way that each data model covers one kind of data source.

The QualityTask data model is the root element for Catena-X-based field quality
work. It describes what should be done, the affected component and which companies work collaboratively together on a quality topic.
Other field quality data models have a reference to the created QualityTask via a unique identifier.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following roles within the scope of "Field Quality" use case:

- Data Provider/Data Consumer
- Business Application Provider

In scope:

- Data sharing between vehicle manufacturer(OEM) and component supplier on TIER 1 to TIER N level
- Earliest possible detection of potential field quality issues
- Understanding the root cause of the detected quality issues to enable earliest possible counter measure implementation and monitoring the effectiveness
- Prevention of no-trouble-found component analysis for known quality issues
- Safe market launch of new components

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

For all participants of the Use Case "Field Quality" it is necessary to provide and consume the data in accordance to the standardized semantic data models in section [3 Aspect Models](#3-aspect-models) to ensure the defined interoperability requirement "free of choice application" to be able to use the established in-house tool set for analysis.

The data exchange between different Catena-X participants uses the standardized connector conformant to [CX-0018].

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

Please refer to: https://catena-x.net/en/catena-x-introduce-implement/certification for the process of conformity assessment and certification.
  
Since this document describes a set of standards to be fulfilled, all participants mentioned MUST fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.

### 1.4 EXAMPLES

> *This section is non-normative*

### 1.5 TERMINOLOGY

> *This section is non-normative*

Business Partner Number (BPNL)
: A BPNL is the unique identifier of a legal entity of a business partner within Catena-X

Connector: Connector conformant to [CX-0018]

SAMM CLI tool
: A command line tool that allows the generation of different formats from a semantic modelling ttl file.
see `https://eclipse-esmf.github.io/esmf-developer-guide/tooling-guide/samm-cli.html`

Additional terminology used in this standard can be looked up in the glossary on the Catena-X association homepage.

## 2 RELEVANT PARTS OF THE STANDARD FOR SPECIFIC USE CASES

> *This section is normative*

### 2.1 "DATA SHARING RULES"

#### 2.1.1 LIST OF STANDALONE STANDARDS

The "Field Quality" use case does not implement standalone standards from outside Catena-X.

#### 2.1.2 Required data

To transfer data properly, the following data models MUST be used by the data provider:

- io.catenax.quality_task:3.0.0
- io.catenax.fleet.diagnostic_data:3.0.0
- io.catenax.fleet.claim_data:3.0.0
- io.catenax.parts_analyses:4.0.0
- io.catenax.manufactured_parts_quality_information:3.0.0
- io.catenax.fleet.vehicles:4.0.0
- io.catenax.quality_task_attachment:3.0.0
- io.catenax.failure_pattern:1.0.0
- io.catenax.early_warning_notification:1.0.0
- io.catenax.warranty_claim_request:1.0.0
- io.catenax.warranty_claim_request_verification:1.0.0

Each data model has mandatory and optional properties. The data provider **MUST** provide the properties that are flagged as mandatory in the data model.
Some data sets might not have all required mandatory properties - one reason could be data inconsistency. For these cases, the data provider **MUST** use "n/a" for mandatory string properties or "1970-01-01" - respective "1970-01-01T00:00:00Z" for mandatory timestamp properties.

Provided data assets are defined in data sharing agreements and/or data usage policies between data provider and data consumer.

A Business Application Provider **MUST** support following aspect models:

- io.catenax.quality_task:3.0.0
- io.catenax.fleet.diagnostic_data:3.0.0
- io.catenax.fleet.claim_data:3.0.0
- io.catenax.parts_analyses:4.0.0
- io.catenax.manufactured_parts_quality_information:3.0.0
- io.catenax.fleet.vehicles:4.0.0
- io.catenax.quality_task_attachment:3.0.0

A Business Application Provider **MAY** support following additional aspect models to provide enhanced app capabilities:

- io.catenax.failure_pattern:1.0.0
- io.catenax.early_warning_notification:1.0.0
- io.catenax.warranty_claim_request:1.0.0
- io.catenax.warranty_claim_request_verification:1.0.0

#### 2.1.3 ADDITIONAL REQUIREMENTS

##### 2.1.3.1 Transfer of data assets/data exchange pattern

In general, "Field Quality" uses standardized Catena-X file-baesd data exchange pattern like file-push.
Data provider and data consumer decide, how the data exchange is organized in detail.
See following list of recommendations:

- io.catenax.quality_task v3.0.0: data **SHOULD** be exchanged using Apache Parquet format with Catena-X file-based data transfer mode between data provider and data consumer, this data asset **MAY** be provided also via digital-twin-based data transfer, an app provider **MUST** support to read data from Apache Parquet format
- io.catenax.fleet.claim_data:3.0.0: **SHOULD** be exchanged using Apache Parquet format with Catena-X file-based data transfer mode between data provider and data consumer, an app provider **MUST** support to read data from Apache Parquet format
- io.catenax.fleet.diagnostic_data:3.0.0: **SHOULD** be exchanged using Apache Parquet format with Catena-X file-based data transfer mode between data provider and data consumer, an app provider **MUST** support to read data from Apache Parquet format
- io.catenax.fleet.vehicles:4.0.0: **SHOULD** be exchanged using Apache Parquet format with Catena-X file-based data transfer mode between data provider and data consumer, an app provider **MUST** support to read data from Apache Parquet format
- io.catenax.manufactured_parts_quality_information:3.0.0: **SHOULD** be exchanged using Apache Parquet format with Catena-X file-based data transfer mode between data provider and data consumer, an app provider **MUST** support to read data from Apache Parquet format
- io.catenax.parts_analyses:4.0.0: **SHOULD** be exchanged using Apache Parquet format with Catena-X file-based data transfer mode between data provider and data consumer, an app provider **MUST** support to read data from Apache Parquet format
- io.catenax.quality_task_attachment:3.0.0: **SHOULD** be exchanged using gzip format with Catena-X file-based data transfer mode between data provider and data consumer, an app provider **MUST** support to read data from gzip format
- io.catenax.failure_pattern:1.0.0: **SHOULD** be exchanged using json format with Catena-X http-based data transfer mode, an app provider **MAY** support to read this data asset
- io.catenax.early_warning_notification:1.0.0: **SHOULD** be exchanged using json format with Catena-X http-based data transfer mode, an app provider **MAY** support to read this data asset
- io.catenax.warranty_claim_request:1.0.0: **SHOULD** be exchanged using json format with Catena-X http-based data transfer mode, an app provider **MAY** support to read this data asset
- io.catenax.warranty_claim_request_verification:1.0.0: **SHOULD** be exchanged using json format with Catena-X http-based data transfer mode, an app provider **MAY** support to read this data asset

##### 2.1.3.2 Dataset Properties for file-based data transfer

The following table shows a list of connector catalogue properties. As a data provider, I **MUST** provide these connector catalogue properties for file-based data transfer. These properties are used by data consumer to filter for a specific data asset. In addition, these properties help to correctly use and interpret the file-based data assets on consumer side.

|Property                                      |Value                              |Description                                    |
|----------------------------------------------|-----------------------------------|-----------------------------------------------|
|"@id"|"430f56d3-1234-1234-1234-abc123456789__io.catenax_fleet.claim_data__3.0.0.parquet"| Each catalogue entry needs a unique id. You can use a UUID v4 or a human readable id. **RECOMMENDED** human readable id follows the pattern `<catenaXQualityTaskId>__<SemanticModel>__<model_version>.parquet`. Separator are two underscores: `__`|
|`"http://purl.org/dc/terms/conformsTo"`| "@id": "urn:samm:io.catenax.fleet.claim_data:3.0.0"|This property is QM-specific and a **MUST**. It holds the aspect-model-URN(without # at the end) that defines used aspect model and version.|
|`"http://purl.org/dc/terms/format"`|"application/octet-stream;type=parquet-snappy"|This property is QM-specific and a **MUST**. It indicates the format of the data asset. Supported formats for file-based data transfer are "application/octet-stream;type=parquet-snappy", "application/octet-stream;type=gzip", "text/richtext;type=json". See `https://www.iana.org/assignments/media-types-parameters/media-types-parameters.xhtml`|
|"dcat:qualifiedRelation"|`"{http://purl.org/dc/terms/isPartOf": {"@id": "430f56d3-1234-1234-1234-abc123456789"}}` |This is QM-specific and a **MUST**. `{"isPartOf": {"@id": "<corresponding catenaXQualityTaskId>"}}`. Allows to filter for all file-based data assets that belong to one Catena-X Quality Task ID.|

##### 2.1.3.3 Apache parquet format

Apache parquet format in version 2.10.0 or higher **MUST** be used (see `https://parquet.apache.org/` ).
Apache Parquet files **MAY** be compressed using parquet snappy compression.

##### 2.1.3.4 Type mapping from Eclipse semantic modelling framework data types(samm) to Apache Parquet data types

The following mappings **MUST** be used when using parquet format for Catena-X use case quality:

|samm data type     | Apache Parquet data type                |
|-------------------|-----------------------------------------|
|boolean            |BOOLEAN: 1 bit boolean                   |
|float              |FLOAT: IEEE 32-bit floating point values |
|double             |DOUBLE: IEEE 64-bit floating point values|
|int                |INT32: 32-bit signed int                 |
|long               |INT64: 64-bit signed int                 |
|date               |date as INT32                            |
|timestamp          |milliseconds as INT64                    |
|string             |BYTE_Array, strings must be UTF8 encoded |

It is **RECOMMENDED** to use SAMM CLI tool to generate resulting parquet structure from semantic modelling ttl file which will ensure that the right Apache Parquet data type will be used.

##### 2.1.3.5 Flattening from hierarchical Eclipse semantic modelling framework structure(samm) to flat Apache Parquet structure

Apache parquet is a tabular flat format. Catena-X semantic models are hierarchically structured. The hierarchical structure **MUST** be transferred into a flat table structure using following convention. To generate the table structure use following approach:
It is **RECOMMENDED** to use SAMM CLI tool to generate resulting parquet structure from semantic modelling ttl file.

How to provide data in tabular parquet structure:

Hierarchical json example:

```json
{
 "qualityTasks": [
  {
   "recordStatus": "new",
   "creationDate": "2023-11-11",
   "partName": "ABS",
   "dataDeletion": "delete-data-after-closing",
   "description": "Early Warning of vehicle model A with component ABS.",
   "qualityTaskId": "430f56d3-1234-1234-1234-abc123456789",
   "status": "new",
   "title": "Early Warning A",
   "companies": [
    {
     "bpnlProperty": "BPNL000000000123",
     "name": "testCompanyA"
    },
    {
     "bpnlProperty": "BPNL000000000124",
     "name": "testCompanyB"
    }
   ]
  }
 ]
}
```

Resulting parquet table:

|qualityTasks_recordStatus|qualityTasks_creationDate|qualityTasks_partName|qualityTasks_dataDeletion|qualityTasks_description|qualityTasks_qualityTaskId|qualityTasks_status|qualityTasks_title|qualityTasks_companies_bpnlProperty|qualityTasks_companies_name|
|------|----|------|------|------|------|------|------|------|------|
|new|2023-11-11|ABS|delete-data-after-closing|Early Warning of vehicle model A with component ABS.|430f56d3-1234-1234-1234-abc123456789|new|Early Warning A|BPNL000000000123|testCompanyA|
|new|2023-11-11|ABS|delete-data-after-closing|Early Warning of vehicle model A with component ABS.|430f56d3-1234-1234-1234-abc123456789|new|Early Warning A|BPNL000000000124|testCompanyB|

### 2.1.4 POLICY CONSTRAINTS FOR DATA EXCHANGE

In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined.  As part of this data sovereignty framework, conventions for access policies, for usage policies and for the constraints contained in the policies have been specified in standard 'CX-0152 Policy Constraints for Data Exchange'. This standard document CX-0152 **MUST** be followed when providing services or apps for data sharing/consuming and when sharing or consuming data in the Catena-X ecosystem. What conventions are relevant for what roles named in [1.1 AUDIENCE & SCOPE](#11-audience--scope) is specified in the CX-0152 standard document as well. CX-0152 can be found in the [standard library](https://catenax-ev.github.io/docs/standards/overview).

#### 2.1.5 DIGITAL TWINS AND SPECIFIC ASSET IDs

## 3 ASPECT MODELS

Common to all data models:

- Different file formats, like json, json-schema, parquet, aasx and html documentation can be generated from the turtle file (*.ttl file) and the SAMM CLI tool
- Already generated file formats can be found in the gen subfolder of the respective model on eclipse-tractusx

### 3.1 ASPECT MODEL "QUALITY TASK"

#### 3.1.1 INTRODUCTION

The "Quality Task" data model is the root element for Catena-X-based quality work. It is a model that can be created by vehicle manufacturer or supplier and describes why data is exchanged over Catena-X network between two companies(purpose) and what should happen with transferred data after completion of this "Quality Task".

For data providers:
Each "Quality Task" **MUST** have a unique qualityTaskId conformant to the semantic model.

#### 3.1.2 IDENTIFIER OF SEMANTIC MODEL

This semantic model "Quality Task" has the unique identifier qualityTaskId which is a UUID v4 identifier.

```text
<urn:samm:io.catenax.quality_task:3.0.0#>
````

##### 3.1.3 RDF TURTLE

The rdf turtle file is the master for generating additional file formats and serializations.
It can be found on github repository.

```text
[https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.quality_task/3.0.0/QualityTask.ttl]
```

### 3.2 ASPECT MODEL "FLEET DIAGNOSTIC DATA"

#### 3.2.1 INTRODUCTION

The purpose of this section is the description of the "Fleet Diagnostic Data" semantic data model.

The "Fleet Diagnostic Data" semantic data model consists of a list of diagnostic sessions..
Each diagnostic session contains a vehicle diagnostic that was performed either in a repair shop or over-the-air.

The target is to provide diagnostic data that can be used for the purpose of early warning or root cause analysis.

The "Fleet Diagnostic Data" semantic data model is provided by a vehicle manufacturer.

Each "Fleet Diagnostic Data" **MUST** contain an unique sessionId and a unique anonymizedVIN conformant to the semantic model.

#### 3.2.2 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
<urn:samm:io.catenax.fleet.diagnostic_data:3.0.0#>
```

##### 3.2.3 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.
It can be found in the current version 3.0.0 on the GitHub repository.

```text
[https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.fleet.diagnostic_data/3.0.0/DiagnosticData.ttl]
```

### 3.3 ASPECT MODEL "FLEET CLAIM DATA"

#### 3.3.1 INTRODUCTION

The purpose of this section is the description of the "Fleet Claim Data" semantic data model.

The "Fleet Claim Data" semantic data model is a list of customer complaints(=claim) that are linked to the same or different "Quality Tasks".
One claim: A customer is coming to the repair shop and is indicating a potential malfunction in his car during warranty period. The repair shop tries to fix the problem - by exchanging a potential faulty component by a spare part, by a software update, ...

The "Fleet Claim Data" semantic data model is provided by an vehicle manufacturer.

Each "Fleet Claim Data" **MUST** contain an unique claimId and a unique anonymizedVIN conformant to the semantic model.

#### 3.3.2 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
<urn:samm:io.catenax.fleet.claim_data:3.0.0#>
```

##### 3.3.3 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.
It can be found in the current version on the GitHub repository.

```text
[https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.fleet.claim_data/3.0.0/ClaimData.ttl]
```

### 3.4 ASPECT MODEL "PARTS ANALYSES"

#### 3.4.1 INTRODUCTION

The purpose of this section is the description of the "Parts Analyses" semantic data model.

The "Parts Analyses" semantic data model is a list of analysed parts that were sent back to the component manufacturer (=supplier of the component).
Each part analysis is linked to one or more quality tasks.

The "Parts Analyses" semantic data model is provided by a component supplier.

Each dataset in "Parts Analyses" **MUST** contain a unique componentManufacturerAnalysisID and a unique anonymizedVIN conformant to the semantic model.

#### 3.4.2 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
<urn:samm:io.catenax.parts_analyses:4.0.0#>
```

##### 3.4.3 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.
It can be found in the current version 3.0.0 on the GitHub repository.

```text
[https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.parts_analyses/4.0.0/PartsAnalyses.ttl]
```

### 3.5 ASPECT MODEL "MANUFACTURED PARTS QUALITY INFORMATION"

#### 3.5.1 INTRODUCTION

The purpose of this section is the description of the "Manufactured Parts Quality Information" semantic data model.

The "Manufactured Parts Quality Information" semantic data model is a list of manufactured parts that are involved in one or more quality tasks.

The "Manufactured Parts Quality Information" semantic data model is provided by a component supplier.

Each dataset in "Manufactured Parts Quality Information" **MUST** contain at least one part identifier: This can be manufacturerSerialNumber for serial parts or manufacturerPartNumber for non-serial parts.

#### 3.5.2 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
<urn:samm:io.catenax.manufactured_parts_quality_information:3.0.0#>
```

##### 3.5.3 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.
It can be found in the current version 3.0.0 on the GitHub repository.

```text
[https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.manufactured_parts_quality_information/3.0.0/ManufacturedPartsQualityInformation.ttl]
```

### 3.6 ASPECT MODEL "FLEET VEHICLES"

#### 3.6.1 INTRODUCTION

The purpose of this section is the description of the "Fleet Vehicles" semantic data model.

The "Fleet Vehicles" semantic data model is a list of vehicles that are involved in one or more quality tasks. Each data set is a representation of a vehicle  when it was sold to the end-customer: Which equipments was installed in the vehicle, which engine(s) were installed in the vehicle, where was it built and sold.

The "Fleet Vehicles" semantic data model is provided by an automotive manufacturer.

Each dataset in "Fleet Vehicles" **MUST** contain an unique anonymizedVIN conformant to the semantic model.

#### 3.6.2 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
<urn:samm:io.catenax.fleet.vehicles:4.0.0#>
```

##### 3.6.3 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.
It can be found in the current version 4.0.0 on the GitHub repository.

```text
[https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.fleet.vehicles/4.0.0/Vehicles.ttl]
```

### 3.7 ASPECT MODEL "QUALITY TASK ATTACHMENT"

#### 3.7.1 INTRODUCTION

The QualityTaskAttachment data model describes a way to exchange data and files, which are not available in the existing data models, in the context of a QualityTask.
In order to make the non-standardized data and files machine understandable, they are described using the "Quality Task Attachment" model.

#### 3.7.2 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
<urn:samm:io.catenax.quality_task_attachment:3.0.0#>
```

##### 3.7.3 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.
It can be found in the current version on the GitHub repository.

```text
[https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.quality_task_attachment/3.0.0/QualityTaskAttachment.ttl]
```

### 3.8 ASPECT MODEL "EARLY WARNING NOTIFICATION"

#### 3.8.1 INTRODUCTION

The data model "Early Warning Notification" describes the payload of a notification used in case of an early warning. An early warning represents an anomaly that is found in the shared data. This notification is used to inform the partner company and initiate further analyses steps.

#### 3.8.2 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
<urn:samm:io.catenax.early_warning_notification:1.0.0#>
```

##### 3.8.3 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.
It can be found in the current version on the GitHub repository.

```text
[https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.early_warning_notification/1.0.0/EarlyWarningNotification.ttl]
```

### 3.9 ASPECT MODEL "FAILURE PATTERN"

#### 3.9.1 INTRODUCTION

The Failure Pattern data model provides the option to identify one specific hardware or software failure in a vehicle, system or product based on a data signature without analysing the faulty hardware.
The utilisation of a failure pattern is divided into two phases. In a first step, the pattern must be derived. Unique identified root causes from e.g. physical analyses of products serve as a database.
Data in a temporal context, such as failure codes from electronic control units, are analysed using e.g. machine learning algorithms.
Afterwards data patterns are derived that differentiate between the occurrence and non-occurrence of an error. Failure patterns can then be used to check e.g. the effectiveness of quality measures.

#### 3.9.2 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
<urn:samm:io.catenax.failure_pattern:1.0.0#>
```

##### 3.9.3 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.
It can be found in the current version on the GitHub repository.

```text
[https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.failure_pattern/1.0.0/FailurePattern.ttl]
```

### 3.10 ASPECT MODEL "Warranty Claim Request"

#### 3.10.1 INTRODUCTION

The Warranty Claim Request data model encompasses all relevant warranty claim information typically transmitted from a customer to a supplier. This model includes detailed data about the repair performed, the time and materials consumed, and the associated monetary values for the claim.

#### 3.10.2 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
<urn:samm:io.catenax.warranty_claim_request:1.0.0>
```

##### 3.10.3 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.
It can be found in the current version on the GitHub repository.

```text
[https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.warranty_claim_request/1.0.0/WarrantyClaimRequest.ttl]
```

### 3.11 ASPECT MODEL "Warranty Claim Request Verification"

#### 3.11.1 INTRODUCTION

The Warranty claim Request Verification data model is the supplier´s response to the claimant (customer). The claim verification provides information about the evaluation and accepted quota (percentage of accepted responsibility) in regards to a claim.

#### 3.11.2 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
<urn:samm:io.catenax.warranty_claim_request_verification:1.0.0>
```

##### 3.11.3 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.
It can be found in the current version on the GitHub repository.

```text
[https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.warranty_claim_request_verification/1.0.0/WarrantyClaimRequestVerification.ttl]
```

## 4 APPLICATION PROGRAMMING INTERFACES

> *This section is normative*

### 4.1 NOTIFICATION API

Notifications are - in contrast to classical data offers in Catena-X - a way to push data from a sender to a receiver. For now, this notification API is limited to the sending and receiving of early warning notifications as well as the update of the notification status (following a predefined [State Model](#5121-notification-state-model)).

The API is used as part of the notification process of quality management. It is important to note that this API is designed such that it is based on and extends the QUALITY NOTIFICATION API defined in [CX - 0125 TRACEABILITY USE CASE]. Both may be merged in a future version.

In this regard it is important to mention, that the API standardized here is not a central API, but an API to be implemented into each participant's quality or traceability solution or solution stack in order to be able to receive information related to early warning and/or quality issues and notifications in the first place.

So, this chapter describes this early warning notification API with its relevant API endpoints to be created by each supporting quality or traceability solution or solution stack. On top this chapter describes the Data Asset Structure within the participant who wants to be able to receive notifications and/or updates to notifications. As the notification process includes bi-directional status communication, both entities in a process **MUST** provide these Data Assets and a linkage to corresponding APIs. Furthermore there is also a description of the payload of the notifications for early warning.

#### 4.1.1 PRECONDITIONS AND DEPENDENCIES

Application providers **MUST** prove their conformity by providing:

- An openAPI specification of the endpoints described

The Early Warning Notification API **MUST** be published towards the network using a Data Asset/Contract Definition in terms of the IDSA Protocol as described by the reference implementation [CX - 0018 DATASPACE CONNECTIVITY].

The dataspace connector as a reference implementation **SHOULD** BE used and is referenced in this document. Other connectors fulfilling the same standards towards Catena-X **MAY** be leveraged as well.

It is of importance to mention, that there **MUST** be an API available behind each of the data offers described in the dataspace connector, which works according to the openAPI specifications description.

Nevertheless, the APIs are **OPTIONAL** to follow the same structure, as there could even be APIs taking over the job of several of the endpoints mentioned.

The dataspace connector **SHOULD** act as a reverse proxy towards those APIs, as it holds the Data Offers linked to the respective implemented endpoints.

#### 4.1.2 API SPECIFICATION

##### 4.1.2.1 API-ENDPOINTS

The quality notification API **MUST** be implemented as specified in the [openAPI](./assets/earlywarningnotification-1-0-0.yaml) documentation.

In fact, it is **OPTIONAL** to implement the endpoint paths exactly as described in the [openAPI](./assets/earlywarningnotification-1-0-0.yaml)). The reason is that those endpoints are not called from any supply chain partner directly. Rather, they are called from the dataspace connector as part of data assets. In that sense, it is just important to implement endpoints that can process the defined request body and respond with the HTTP status codes and - if required - reply with the defined response body.

The data assets will act similar to a reverse proxy for the notification endpoints, therefore rather the data assets are of significance, which **SHOULD** be exposed towards Catena-X through the Data Offer Catalogues in the dataspace connector or any other CX-0018 compliant connector.

##### 4.1.2.2 AVAILABLE DATA TYPES

The quality notification API **MUST** use JSON as the payload transported via HTTP.

##### 4.1.2.3 API RESOURCES & ENDPOINTS

The HTTP POST endpoints introduced in this standard **MUST** be called via Data Space Protocol.

The sending and receiving of notifications **MUST** be built on the basis of HTTP POST endpoints.

#### 4.1.3 DATA ASSET STRUCTURE

##### 4.1.3.1 DATA ASSET FOR NOTIFICATION RECEIVE ENDPOINT FOR EARLY WARNING NOTIFICATION RECEIPT

When using the dataspace connector, the following asset **MUST** be registered. Other connectors implementing the IDSA Protocol require a similar data asset with the same structure and provisioning towards Catena-X.

```json  
{
  "@context": {
      "cx-common": "https://w3id.org/catenax/ontology/common#",
      "cx-taxo": "https://w3id.org/catenax/taxonomy#",
      "dct": "http://purl.org/dc/terms/"
  },
  "@type": "Asset",
  "@id": "earlywarningnotificationnotification-receive",
  "properties": {
      "dct:type": {
          "@id": "cx-taxo:ReceiveEarlyWarningNotification"
      },
      "cx-common:version": "1.2"
  },
  "dataAddress": {
      ...
  }
}  
```

The variable \{\{httpServerWhichOffersTheHttpEndpoint\}\} **MUST** be set to the HTTP server that offers the endpoint. The path /qualityinvestigations/receive **MAY** align with the HTTP POST path as stated in Section 4.1.2.1. In that sense it can change dependent on the quality or traceability application.

##### 4.1.3.2 DATA ASSET FOR NOTIFICATION UPDATE ENDPOINT FOR EARLY WARNING NOTIFICATION UPDATE

When using an endpoint for early warning the following asset **MUST** be registered.

```json
{
  "@context": {
      "cx-common": "https://w3id.org/catenax/ontology/common#",
      "cx-taxo": "https://w3id.org/catenax/taxonomy#",
      "dct": "http://purl.org/dc/terms/"
  },
  "@type": "Asset",
  "@id": "earlywarningnotification-update",
  "properties": {
      "dct:type": {
          "@id": "cx-taxo:UpdateEarlyWarningNotification"
      },
      "cx-common:version": "1.2"
  },
  "dataAddress": {
      ...
  }
}   
```

The variable \{\{httpServerWhichOffersTheHttpEndpoint\}\} **MUST** be set to the HTTP server that offers the endpoint. The path /qualityinvestigations/update **MAY** align with the HTTP POST path as stated in Section 4.1.2.1. In that sense it can change dependent on the quality or traceability application.

### 4.1.4 VERSIONING

The API version described in this standard document **MUST** be published in the property [https://w3id.org/catenax/ontology/common#version](https://w3id.org/catenax/ontology/common#version) as version 2.0 in dcat:Dataset ([http://www.w3.org/ns/dcat#](http://www.w3.org/ns/dcat#)).

### 4.1.5 EXAMPLES

Example 1: Early Warning Notification

```text
I as a partner in an Early Warning project discover a potential quality issue while analysing the common quality data set that was exchanged previously. I want to inform my partner to perform a verification on his side and want to communicate this data securely and sovereign to him.
```

## 5 PROCESSES

> *This section is normative*

### 5.1 NOTIFICATION PROCESS

This chapter describes the minimum requirements for the notification process and does not go beyond the sending and receiving of early warning notifications. It also illustrates common practices for identifying the correct receiving endpoint when sending a notification. For this purpose, a protocol is described that will be exchanged between quality applications or application
stacks leveraging dataspace connector or any other CX-0018 compliant connector on both ends.

The notification process therefore takes place between quality or traceability applications or application stacks, and the focus is on minimal interaction, which **MUST** be supported by all applications participating in an early warning notification scenario.

Application internals like user journeys, process steps or workflows in an application are not standardized within Catena-X, and therefore omitted.

Note that the process described here is same as the one described for Quality Notification defined in [CX - 0125 TRACEABILITY USE CASE]

#### 5.1.1 ACTORS AND ROLES

Catena-X does not standardize user-roles at the moment. The actors are quality applications of the companies in a supply chain.

#### 5.1.2 PROCESS REPRESENTATION

The exchange of notifications follows the IDSA protocol.

On top, a notification state model has been described.

##### 5.1.2.1 NOTIFICATION STATE MODEL

The notification itself has various states. The states and their cycle are described in the following figure:

![CX0125_Notification-State-Model.png](./assets/CX0125_Notification-State-Model.png)

***Figure 1: Description of Process***

The state of a notification MUST be exchanged via the [4.1. EARLY WARNING Notification API](#41-notification-api).

##### 5.1.2.2 PROCESSES FOR SENDING AND UPDATING EARLY WARNING NOTIFICATIONS

Below the sequence for sending and updating of notifications
between (quality or traceability) applications is shown in UML sequence diagrams
In all cases, HTTP POST requests **MUST** be used. The corresponding HTTP
endpoints are described in chapter [4.1 EARLY WARNING Notification API](#41-notification-api).

To read the UML sequence diagrams correctly, some remarks below:

- The shown Notification dataspace connector Adapter is **OPTIONAL**. It is just one
  option to send a notification via the dataspace connector control and data plane. It
  is important, that a similar functionality **MUST** be
  provided/implemented by the (quality or traceability) application vendor. The
  Notification dataspace connector Adapter or a similar component / functionality will
  not be provided as a central service from Catena-X.

- To discover where a notification **MUST** be sent to, the (quality or traceability)
  application **MUST** resolve the BPN of the receiver. This can either
  happen through the (quality or traceability) application holding this
  information in its data model, or it could - alternatively - also be
  resolved e.g. via a lookup of the digital twin in the central asset
  administration shell (AAS) registry or by using services from the
  BPDM use case.

- In each UML sequence diagram the step \[01\] describes the
  publishing of the notification endpoints as described in the above
  sections.

###### 5.1.2.2.1  SENDING AND RECEIVING OF AN EARLY WARNING NOTIFICATION OR A QUALITY INVESTIGATION

Below, the UML sequence diagram to send and receive an early warning notification is depicted. This is the same as sending and receiving a quality notification.

In addition to the above-mentioned general remarks, the following remark
has to be mentioned:

- The status transition from SENT to RECEIVED **MUST** be done by the

> sender once it received the Http status code 201 from the receiver. This status is not communicated from the sender to the receiver.

![CX0125_SendAndReceive_2.png](./assets/CX0125_SendAndReceive_2.png)

***Figure 2: Send and Receive Early Warning or Quality Notification***

###### 5.1.2.2.2 UPDATE OF AN EARLY WARNING NOTIFICATION OR A QUALITY INVESTIGATION

Below, the UML sequence diagram to update an early warning notification is
depicted. This is the same as updating a quality notification.

![CX0125_UpdateQuality_4.png](./assets/CX0125_UpdateQuality_4.png)

***Figure 3: Update Early Warning or Quality Investigation***

## 6 REFERENCES

### 6.1 NORMATIVE REFERENCES

> *This section is normative*

- CX-0018 Dataspace Connectivity v4.1.0
- CX-0152 Policy Constraints For Data Exchange v1.0.0

### 6.2 NON-NORMATIVE REFERENCES

Not applicable.

### 6.3 REFERENCE IMPLEMENTATIONS

Not applicable.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
