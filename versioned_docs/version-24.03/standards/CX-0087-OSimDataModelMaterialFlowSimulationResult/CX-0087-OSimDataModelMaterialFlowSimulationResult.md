# CX-0087 OSim Data Model: Materialflow Simulation Result v1.0.0

## ABSTRACT

The simulation results of the Catena-X partners on the lower tier level and logistics, together with data of the company's own operations are fed into the individual simulation model as input. Considering both, plannable and unforeseeable influencing factors, this simulation model is iterated through as often as necessary until an optimal production schedule is reached and a simulation result is created. Sharing of simulation results to the next tier level is the base of the collaborative simulation approach in a short-term horizon, across the complete supply chain.

## 1. INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for:

- Business Application Provider
- Data Provider / Consumer

The MaterialFlowSimulationResult object will be send by OSim partner to another OSim partner on a higher tier level. OSim partner can be a producing company as well as a logistics company.
Every MaterialFlowSimulationResult includes information about delivery readiness of packaged material goods, like material identifier, amount, delivery time and destination.
The data provider needs to be able to create MaterialFlowSimulationResult and the receiver need to be able to interpret them. The data receiver needs to be able to use the MaterialFlowSimulationResult of lower tier partners as input for its own simulation.

The underlying business process is described and standardized in OSim Process & Core Business Logic.

This document only describes the structure of the data model in order to exchange simulation result information. Further information regarding processing or the interface will be described in OSim API.

### 1.2 CONTEXT

> *This section is non-normative*

This standardization defines the MaterialFlowSimulationResult data model for the Catena-X network. This standard ensures that the MaterialFlowSimulationResult information can be consumed through the Catena-X network by all OSim partners and ensures, that the data objects from different OSim partner can be handled and interpreted in an identical manner.

In this document the MaterialFlowSimulationResult data model is described and standardized to ensure a consistent data exchange structure within the OSim participants. Thereby an identical interpretation of the data across companies is ensured.

The underlying business process is described and standardized in OSim Process & Core Business Logic.

### 1.3 ARCHITECTURE OVERVIEW

![Architecture Overview](./assets/architectureOverview.png)

The MaterialFlowSimulationResult is a JSON string which is send trough EDC.

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams,
examples, and notes in this specification are non-normative. Everything else in
this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**,
**REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be
interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they
appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to prove, that they are conform
with the Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs).

The proof of conformity for a single semantic model is done according to the general rules for
proving the conformity of data provided to a semantic model or the ability to consume the
corresponding data.

### 1.6 EXAMPLES

In this chapter, examples for the MaterialFlowSimulationResult JSON are listed for reference.

The following data set shows an example for a MaterialFlowSimulationResult which will be sent to the endpoint receiveLatestSimulationResult.

```json
{
  "owner": { "id": "BPNL00000007OTZ3" },
  "dataQuality": 1,
  "description": "Daily standard simulation",
  "comment": "successful simulation",
  "expirationTimestamp": "2023-03-24T09:15:24.000Z",
  "runId": "0fece48b-c8d1-4180-1a9caca6d67e",
  "shipments": [
    {
      "handlingUnits": [
        {
          "name": "Palette",
          "volume": 1,
          "weight": 189,
          "batches": [
            {
              "unitOfMeasurement": "KG",
              "materialName": "KK1000GR-Gehäuse-Rot",
              "quantity": 50,
              "materialNumber": "KK1000GR",
              "batchOrderId": "Order-0001",
              "batchId": "Batch_1",
              "hazardousGoods": false,
              "batchExpirationTimestamp": "2023-08-22T16:00:00.000Z",
              "batchNumber": "45"
            }
          ],
          "handlingUnitId": "HUT_1",
          "amount": 1
        }
      ],
      "shipmentId": "DE51515151",
      "recipientTimestampPlanned": "2023-04-19T09:00:00.000Z",
      "destination": { "id": "BPNL00000007OTZ3" },
      "recipient": { "id": "BPNL00000007OTZ4" },
      "logistics": { "id": "BPNL00000007OS0H" },
      "preceding": {},
      "splittingAllowed": true,
      "destinationTimestamp": "2023-03-19T09:00:00.000Z"
    }
  ],
  "timestamp": "2023-03-09T14:13:42.806Z"
}
```

### 1.6 TERMINOLOGY

> *This section is non-normative*

Business Partner Number (BPN)
: A BPN is the unique identifier of a partner within Catena-x

Business Partner Number (BPNL)
: A BPNL is the unique identifier of a partner within Catena-X, e.g. a company.

Business Partner Number (BPNS)
: A BPNS is the unique identifier of a partner location within Catena-X, e.g. a specific factory of a company.

OSim Process & Core Business Logic
: Shorthand name for the Catena-X Standard: CX-0072  –  OSIM Process & Core Business Logic

OSim Data Model Materialflow Simulation Result
: Shorthand name for the Catena-X Standard: CX-0087 – OSim Data Model Materialflow Simulation Result.

OSim API
: Shorthand name for the Catena-X Standard: CX-0073 – OSim API.

Online Control and Simulation (OSim)
: OSim is a Use Case in Catena-X eco system.

MaterialFlowSimulationResult
: The MaterialFlowSimulationResult is the data model, which describes the structure of the simulation result data exchanged between OSim partners.

Note: Typically there is not only one own simulation result available in the single systems of suppliers or logisticians. For this it is RECOMMENDED to introduce in the single systems a state machine, allowing to identify the for publishing relevant status. For example:

![Material Flow Simulation Result: State Machine](./assets/MaterialFlowSimulationResult.png)

Supplier
: In the context of OSim the Supplier is the producer of goods

Customer
: In the context of OSim the Customer is the receiver of produced goods by supplier

Logistician
: In the context of OSim the Logistician transports the produced goods from supplier to the customer

OSim-Network construction and Tier-Levels
: The following picture depicts a principal construction of a OSim Network from a global perspective (not to be confused with a participant perspective, which is always a limited view to the one-up and one-down levels, logistician disregarded).

![OSim-Network construction and Tier-Levels](./assets/TierLevels.png)
It consists of many tier companies (e.g. S1..S7) on different levels (e.g. Tier-1, Tier-2, Tier-n, Tier-n+1) with logistician companies in between (e.g. L1..L8). Depend on the complexity of the logistics between two producers it is not excluded that more than one logistician are in the chain (e.g. L1 -> L2 or L1 -> L3 -> L4)

- "Lower tier level" means direction in the network to the left and with this to the suppliers of the raw materials. The following terms are synonymously used with "Lower tier level":
  - "Previous level"
  - "Previous tier level"
  - "Lower level"
>
- "Higher tier level" means direction to the OEM. Tier-1 is the highest tier level followed by the OEM. The following terms are synonymously used with "Higher tier level":
  - "Next level"
  - "Next tier level"
  - "Higher level"

simulationRunID
: The simulationRunID is the unique identifier of a simulation result

Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from
    an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.

: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 ASPECT MODEL “MaterialFlowSimulationResult”

> *This section is normative*

The MaterialFlowSimulationResult information MUST be sent between OSim participants by EDC.
The data format described here MUST be followed.

The MaterialFlowSimulationResult data model MUST be implemented by all participants who wish to participate in the Catena-X OSim network as a customer, supplier or logistician.

Companies, who participate in the Catena-X OSim Network as a supplier MUST be able to send MaterialFlowSimulationResult information.

Companies, who participate in the Catena-X OSim Network as a customer MUST be able to receive MaterialFlowSimulationResult information.

Companies who participate in the Catena-X Network as a supplier and as a customer MUST be able to receive and send MaterialFlowSimulationResult information.

Companies who participate in the Catena-X Network as a logistician MUST be able to receive and send MaterialFlowSimulationResult information.

### 2.1 INTRODUCTION

### 2.2 NORMATIVE CRITERIA

Every data provider of simulation result data MUST provide the data conforming to the semantic model specified in this document.

The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred.

Every certified business application relying on simulation result data MUST be able to consume data conformant to the semantic model specified in this document.

Data consumers and data provider MUST comply with the license of the semantic model.

In the Catena-X data space simulation result data MUST be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002.

The JSON Payload of data providers MUST be conformant to the JSON Schema as specified in this document.

### 2.3 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

### 2.4 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0
International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.5 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
    urn:bamm.io.catenax.material_flow_simulation_result:1.0.0
```

This identifier MUST be used by the data provider to define the semantics of the data being transferred.

### 2.6 FORMATS OF SEMANTIC MODEL

#### 2.6.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating
additional file formats and serializations.

```text
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.material_flow_simulation_result/1.0.0/MaterialFlowSimulationResult.ttl
```

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.6.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

```text
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.material_flow_simulation_result/1.0.0/gen/MaterialFlowSimulationResult-schema.json
```

#### 2.6.3 aasx

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#32-non-normative-references)].

```text
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.material_flow_simulation_result/1.0.0/gen/MaterialFlowSimulationResult.aasx
```

### 2.7 SEMANTIC MODEL

For properties see the schema description of the model.

### 2.8 EDC DATA ASSET STRUCTURE

The EDC Policies for the MaterialFlowSimulationResult are standardize in the standard CX-OSIM-PROCESS. The rules in that standard MUST be observed.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

CX-0002 Digital Twins in Catena-X

CX-0003 Semantic Aspect Meta Model

CX-0004 Governance Process for Semantic Models

CX-0018 Eclipse Data Space Connector (EDC)

CX-0001 EDC Discovery API, Version 1.1

CX-0072 OSim Process & Core Business Logic

CX-0073 OSim API

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

[SMT]  How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
