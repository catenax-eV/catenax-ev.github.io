# CX-0166 Zero Km Failure v.1.0.0

## ABSTRACT

This standard defines the interoperable data exchange for the Zero Km Failure use case in Catena-X.

The standard focuses on quality issues detected during assembly before vehicles enter field operation. It specifies how participants identify and exchange Zero Km Failure information using Digital Twins, semantic models, and sovereign data exchange.

The standard is aligned with CX-0002 Digital Twins in Catena-X, CX-0126 Industry Core: Part Type, and CX-0127 Industry Core: Part Instance. It reuses notification and event patterns where relevant for Digital Twin lifecycle communication.

## FOR WHOM IS THE STANDARD DESIGNED

This standard is relevant for:

- Data Providers who publish Zero Km Failure data.
- Data Consumers who retrieve and process Zero Km Failure data.
- Business Application Providers implementing Zero Km Failure workflows.
- Enablement Service Providers operating connector and Digital Twin infrastructure.
- Conformity Assessment Bodies evaluating conformance.

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

#### AUDIENCE

This standard is relevant for:

- Data Provider / Consumer
- Business Application Provider
- Enablement Service Provider

#### SCOPE

This document covers:

- The use-case specific handling of quality issues detected at zero mileage.
- The use of Digital Twin qualityTask as use-case anchor for issue-centric data exchange.
- Data provisioning and consumption of the semantic model `ZeroKmFailure`.
- Notification and event usage for partner synchronization in the use case context.
- Conformance requirements for payloads, identifiers, and connector-based exchange.

This document does not cover:

- Block Notification standardization. Block Notification is a separate standard.
- Generic quality management outside the Zero Km Failure use case.

Note: Fulfilling this use case standard by a data provider / consumer can be done in two ways:

1. Purchase a certified app for the use case.
2. Data provisioning / consumption without a certified app.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

Zero Km Failure addresses defects that are detected during assembly or end-of-line tests before handover to vehicle operation. Typical triggers are diagnostic trouble codes (DTCs), failed initialization, or anomalous behavior of installed parts.

The use case is centered around a Digital Twin representing the quality issue (`qualityTask`). Data providers make issue-specific data available through standardized semantic models and endpoint registrations. Data consumers can retrieve and correlate these data to accelerate root cause analysis and targeted containment.

The overall architecture uses:

- A Digital Twin Registry landscape as defined by CX-0002.
- Submodel provisioning through CX-0018-compliant connector flows.
- Industry Core identifiers and structures from CX-0126 and CX-0127.
- Submodel Update events for participant synchronization and pull-triggering.

The standardized exchange supports faster cross-company triage, reduced spread of potentially affected parts, and improved traceability precision.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 RFC2119 and RFC8174 when, and only when, they appear in all capitals.

All participants and their solutions MUST prove conformance with this standard and with all referenced standards.

To prove conformance, participants MUST provide:

- Evidence of compliant Digital Twin registration and Submodel endpoint publication.
- Example payloads for required message and submodel structures.
- Evidence of connector-based exchange according to CX-0018.
- A completed self-assessment against the Conformity Assessment Criteria.

### 1.4 EXAMPLES

> *This section is non-normative*

#### Example: Digital Twin Event for Submodel Update

```json
{
  "header": {
    "messageId": "urn:uuid:871e676d-7ee5-4426-9e6f-2e7b76206981",
    "context": "IndustryCore-DigitalTwinEventAPI-SubmodelUpdate:3.0.0",
    "sentDateTime": "2025-06-11T10:28:38Z",
    "senderBpn": "BPNL000000000ISY",
    "receiverBpn": "BPNL00000000043D",
    "senderFeedbackUrl": "",
    "version": "3.0.0"
  },
  "content": {
    "information": "List of events about the creation, update, or deletion of submodels of digital twins.",
    "listOfEvents": [
      {
        "eventType": "CreateSubmodel",
        "catenaXId": "urn:uuid:cf69ed17-1f49-48e0-8211-51955f861b16",
        "submodelSemanticId": "urn:samm:io.catenax.quality_task:2.0.0#QualityTask"
      },
      {
        "eventType": "CreateSubmodel",
        "catenaXId": "urn:uuid:cf69ed17-1f49-48e0-8211-51955f861b16",
        "submodelSemanticId": "urn:samm:io.catenax.zero_km_failure:1.0.0#ZeroKmFailure"
      }
    ]
  }
}
```

#### Example: qualityTask Submodel

```json
{
  "metaInformation": {
    "selectionCriteria": "Quality task for 0km failure investigation on control module between BMW and Bosch",
    "selectionStart": "2026-04-01T00:00:00",
    "selectionEnd": "2026-12-31T23:59:59"
  },
  "listOfQualityTasks": [
    {
      "qualityTaskId": "BMW-QT-2026-0km-00001",
      "recordStatus": "new",
      "creationDate": "2026-04-01",
      "title": "0km Failure: control module stuck in bootstrap mode - BMW G26 Line 6",
      "status": "new",
      "dataDeletion": "delete-data-after-closing"
    }
  ]
}
```

#### Example: ZeroKmFailure Submodel

```json
{
  "defect": {
    "description": {
      "en": "Control module stuck in bootstrap mode."
    },
    "parentItems": [
      "urn:uuid:cdc8b050-ee17-432e-9ca6-b85d8017811d"
    ],
    "dtcs": [
      {
        "fullName": "P0573-00",
        "type": "Error",
        "state": "permanent",
        "isMilOn": true
      }
    ]
  },
  "partInformation": {
    "catenaXId": "urn:uuid:70671a99-5a40-4f0f-a678-81d53f5f0496",
    "customerPartId": "5A9E960"
  },
  "plantInformation": {
    "siteIdentifier": "BPNS0000000ISY06",
    "assemblyLineName": "Line 6 - BMW Plant Dingolfing"
  },
  "vehicle": {
    "anonymizedVIN": "WBA2026G26ANON001",
    "modelIdentifier": "G26-430i"
  }
}
```

### 1.5 TERMINOLOGY

> *This section is non-normative*

| Term | Description |
| --- | --- |
| Zero Km Failure | A defect case detected during assembly or end-of-line before field usage. |
| qualityTask | A Digital Twin representing the quality issue itself, not a physical asset twin. |
| ZeroKmFailure | Semantic model for issue-specific defect, part, plant, and vehicle information. |
| Submodel Update Event | Event indicating creation, update, or deletion of submodels for a Digital Twin. |

## 2 RELEVANT PARTS OF THE STANDARD FOR SPECIFIC USE CASES

> *This section is normative*

### 2.1 DATA EXCHANGE FOR ZERO KM FAILURE

#### 2.1.1 LIST OF STANDALONE STANDARDS

To participate in this use case, the following standards MUST be fulfilled:

- CX-0002 Digital Twins in Catena-X
- CX-0018 Dataspace Connectivity
- CX-0126 Industry Core: Part Type
- CX-0127 Industry Core: Part Instance
- CX-0152 Policy Constraints for Data Exchange

#### 2.1.2 DATA REQUIRED

Data Providers MUST provide Zero Km Failure data via Digital Twins and submodels in a connector-based exchange.

A Digital Twin `qualityTask` MUST be created for each quality issue case participating in this use case.

The semantic model `urn:samm:io.catenax.zero_km_failure:1.0.0#ZeroKmFailure` MUST be used when providing Zero Km Failure payloads.

The following data blocks MUST be supported in ZeroKmFailure payloads:

- `defect`
- `partInformation`
- `plantInformation`
- `vehicle`

The exchange of submodel payloads MUST occur using the IDS / DSP mechanism as defined by CX-0018.

#### 2.1.3 ADDITIONAL REQUIREMENTS

Data MUST NOT be transferred before successful contract negotiation and a valid contract according to CX-0018.

Data offers for required submodels MUST be discoverable through Digital Twin Registry entries and endpoint references.

When using message-based synchronization, the standardized header structure and context semantics MUST be applied consistently.

#### 2.1.4 DIGITAL TWINS AND SPECIFIC ASSET IDS

The `qualityTask` Digital Twin MUST provide `specificAssetIds` that enable deterministic discovery and partner-level correlation.

`digitalTwinType` is a special, mandatory `specificAssetId` and MUST be set to `qualityTask`.

For this special `specificAssetId` (`digitalTwinType`), the following requirement MUST be fulfilled:

| Key | Availability | Description | Type |
| --- | --- | --- | --- |
| digitalTwinType | Mandatory | Must indicate `qualityTask` in use-case context | String |

In addition to `digitalTwinType`, at minimum, the following `specificAssetIds` keys MUST be supported:

| Key | Availability | Description | Type |
| --- | --- | --- | --- |
| manufacturerId | Mandatory | Business Partner Number of the qualityTask creator | BPNL |
| customerId | Mandatory | Business Partner Number of the affected customer | BPNA |
| globalAssetID | Mandatory | Global unique identifier of the qualityTask twin | UUID |
| qualityTaskID | Optional | Domain-specific issue reference | String |
| ManufacturerQualityTaskNumber | Optional | Internal creator case number | String |
| CustomerProblemID | Optional | Internal customer case number | String |

## 3 ASPECT MODELS

> *This section is normative*

### 3.1 ASPECT MODEL `ZeroKmFailure`

#### 3.1.1 INTRODUCTION

`ZeroKmFailure` captures issue-centric quality data for failures detected before field operation. It supports cross-company root cause analysis by combining defect details, technical diagnostics, and production context.

#### 3.1.2 SPECIFICATIONS ARTIFACTS

The semantic model is modeled in SAMM and MUST be used in a machine-readable form for interoperable exchange.

#### 3.1.3 LICENSE

Data model usage MUST comply with the applicable Catena-X semantic model license terms.

#### 3.1.4 IDENTIFIER OF SEMANTIC MODEL

The semantic identifier is:

`urn:samm:io.catenax.zero_km_failure:1.0.0#ZeroKmFailure`

#### 3.1.5 FORMATS OF SEMANTIC MODEL

##### 3.1.5.1 RDF TURTLE

The RDF Turtle file is the master artifact of the semantic model.

##### 3.1.5.2 JSON SCHEMA

A JSON Schema representation MUST be used to validate value-only payload conformance.

##### 3.1.5.3 AASX

An AASX representation MAY be used for template and interoperability tooling.

## 4 APPLICATION PROGRAMMING INTERFACES

> *This section is normative*

### 4.1 DIGITAL TWIN EVENT API USAGE FOR SUBMODEL SYNCHRONIZATION

#### 4.1.1 PRECONDITIONS AND DEPENDENCIES

Participants implementing Submodel Update synchronization messages MUST provide connector-based assets and endpoints according to CX-0018.

#### 4.1.2 API SPECIFICATION

If Submodel Update events are used, implementations MUST support HTTP POST-based event processing and standardized message header usage.

The context `IndustryCore-DigitalTwinEventAPI-SubmodelUpdate:3.0.0` SHOULD be used for interoperability.

#### 4.1.3 DATA ASSET STRUCTURE

A suitable connector asset MUST be published for each supported major API version. Asset metadata MUST include taxonomy-compatible type and version information.

#### 4.1.4 ERROR HANDLING

Implementations MUST return HTTP status codes consistent with request validity and processing result.

#### 4.1.5 DATA TYPES

Payloads MUST use `application/json`.

## 5 PROCESSES

> *This section is normative*

### 5.1 ZERO KM FAILURE DATA EXCHANGE PROCESS

The interoperable process MUST include:

1. Creation of a `qualityTask` twin by the initiating participant.
2. Partner synchronization of relevant submodel lifecycle changes via Submodel Update events.
3. Provisioning of `ZeroKmFailure` submodel data by the data provider.
4. Connector-based data pull by authorized data consumers.
5. Iterative data refinement until issue isolation is possible.

## 6 REFERENCES

### 6.1 NORMATIVE REFERENCES

- CX-0002 Digital Twins in Catena-X
- CX-0018 Dataspace Connectivity
- CX-0126 Industry Core: Part Type
- CX-0127 Industry Core: Part Instance
- CX-0152 Policy Constraints for Data Exchange

### 6.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

### 6.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

No reference implementation is designated in this draft.

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*

This section is intentionally left empty.

## Legal

Copyright (c) 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
