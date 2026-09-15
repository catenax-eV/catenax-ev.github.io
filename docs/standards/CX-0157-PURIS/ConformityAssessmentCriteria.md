# Conformity Assessment Criteria

## General Information

- cxId: CX-0157
- name: Predictive Unit Real-Time Information Service (PURIS)
- capability: Supply Security
- version: 1.1.0
- release: CX-Neptune

## Table of Contents

- [Conformity Assessment Criteria](#conformity-assessment-criteria)
  - [General Information](#general-information)
  - [Table of Contents](#table-of-contents)
  - [Reading Guide](#reading-guide)
  - [CX-0157-SC-01 Delivery Information Exchange](#cx-0157-sc-01-delivery-information-exchange)
    - [Reperformance walkthrough](#reperformance-walkthrough)
    - [CX-0157-SC-01-CAC-001 — Customer provides Delivery Information](#cx-0157-sc-01-cac-001--customer-provides-delivery-information)
      - [Requirement](#requirement)
      - [Proof of Conformity](#proof-of-conformity)
      - [Additional Information](#additional-information)
    - [CX-0157-SC-01-CAC-002 — Supplier consumes Delivery Information](#cx-0157-sc-01-cac-002--supplier-consumes-delivery-information)
      - [Requirement](#requirement-1)
      - [Proof of Conformity](#proof-of-conformity-1)
      - [Additional Information](#additional-information-1)
    - [CX-0157-SC-01-CAC-003 — Supplier provides Delivery Information](#cx-0157-sc-01-cac-003--supplier-provides-delivery-information)
      - [Requirement](#requirement-2)
      - [Proof of Conformity](#proof-of-conformity-2)
      - [Additional Information](#additional-information-2)
    - [CX-0157-SC-01-CAC-004 — Customer consumes Delivery Information](#cx-0157-sc-01-cac-004--customer-consumes-delivery-information)
      - [Requirement](#requirement-3)
      - [Proof of Conformity](#proof-of-conformity-3)
      - [Additional Information](#additional-information-3)
    - [CX-0157-SC-01-CAC-005 — Semantic model identity](#cx-0157-sc-01-cac-005--semantic-model-identity)
      - [Requirement](#requirement-4)
      - [Proof of Conformity](#proof-of-conformity-4)
      - [Additional Information](#additional-information-4)
    - [CX-0157-SC-01-CAC-006 — JSON schema validation](#cx-0157-sc-01-cac-006--json-schema-validation)
      - [Requirement](#requirement-5)
      - [Proof of Conformity](#proof-of-conformity-5)
      - [Additional Information](#additional-information-5)
    - [CX-0157-SC-01-CAC-007 — Contract policy](#cx-0157-sc-01-cac-007--contract-policy)
      - [Requirement](#requirement-6)
      - [Proof of Conformity](#proof-of-conformity-6)
      - [Additional Information](#additional-information-6)
    - [CX-0157-SC-01-CAC-008 — API implementation](#cx-0157-sc-01-cac-008--api-implementation)
      - [Requirement](#requirement-7)
      - [Proof of Conformity](#proof-of-conformity-7)
      - [Additional Information](#additional-information-7)
    - [CX-0157-SC-01-CAC-009 — No horizontal exchange (MUST NOT)](#cx-0157-sc-01-cac-009--no-horizontal-exchange-must-not)
      - [Requirement](#requirement-8)
      - [Proof of Conformity](#proof-of-conformity-8)
      - [Additional Information](#additional-information-8)
    - [CX-0157-SC-01-CAC-010 — Customer responsibility](#cx-0157-sc-01-cac-010--customer-responsibility)
      - [Requirement](#requirement-9)
      - [Proof of Conformity](#proof-of-conformity-9)
      - [Additional Information](#additional-information-9)
    - [CX-0157-SC-01-CAC-011 — Supplier responsibility](#cx-0157-sc-01-cac-011--supplier-responsibility)
      - [Requirement](#requirement-10)
      - [Proof of Conformity](#proof-of-conformity-10)
      - [Additional Information](#additional-information-10)
    - [CX-0157-SC-01-CAC-012 — Split responsibility](#cx-0157-sc-01-cac-012--split-responsibility)
      - [Requirement](#requirement-11)
      - [Proof of Conformity](#proof-of-conformity-11)
      - [Additional Information](#additional-information-11)
  - [CX-0157-SC-02 Short-Term Material Demand Exchange](#cx-0157-sc-02-short-term-material-demand-exchange)
    - [Reperformance walkthrough](#reperformance-walkthrough-1)
    - [CX-0157-SC-02-CAC-001 — Customer provides Short-Term Material Demand](#cx-0157-sc-02-cac-001--customer-provides-short-term-material-demand)
      - [Requirement](#requirement-12)
      - [Proof of Conformity](#proof-of-conformity-12)
      - [Additional Information](#additional-information-12)
    - [CX-0157-SC-02-CAC-002 — Supplier consumes Short-Term Material Demand](#cx-0157-sc-02-cac-002--supplier-consumes-short-term-material-demand)
      - [Requirement](#requirement-13)
      - [Proof of Conformity](#proof-of-conformity-13)
      - [Additional Information](#additional-information-13)
    - [CX-0157-SC-02-CAC-003 — Semantic model identity](#cx-0157-sc-02-cac-003--semantic-model-identity)
      - [Requirement](#requirement-14)
      - [Proof of Conformity](#proof-of-conformity-14)
      - [Additional Information](#additional-information-14)
    - [CX-0157-SC-02-CAC-004 — JSON schema validation](#cx-0157-sc-02-cac-004--json-schema-validation)
      - [Requirement](#requirement-15)
      - [Proof of Conformity](#proof-of-conformity-15)
      - [Additional Information](#additional-information-15)
    - [CX-0157-SC-02-CAC-005 — Contract policy](#cx-0157-sc-02-cac-005--contract-policy)
      - [Requirement](#requirement-16)
      - [Proof of Conformity](#proof-of-conformity-16)
      - [Additional Information](#additional-information-16)
    - [CX-0157-SC-02-CAC-006 — API implementation](#cx-0157-sc-02-cac-006--api-implementation)
      - [Requirement](#requirement-17)
      - [Proof of Conformity](#proof-of-conformity-17)
      - [Additional Information](#additional-information-17)
    - [CX-0157-SC-02-CAC-007 — No horizontal exchange (MUST NOT)](#cx-0157-sc-02-cac-007--no-horizontal-exchange-must-not)
      - [Requirement](#requirement-18)
      - [Proof of Conformity](#proof-of-conformity-18)
      - [Additional Information](#additional-information-18)
    - [CX-0157-SC-02-CAC-008 — Demand categories](#cx-0157-sc-02-cac-008--demand-categories)
      - [Requirement](#requirement-19)
      - [Proof of Conformity](#proof-of-conformity-19)
      - [Additional Information](#additional-information-19)
  - [CX-0157-SC-03 Planned Production Output Exchange](#cx-0157-sc-03-planned-production-output-exchange)
    - [Reperformance walkthrough](#reperformance-walkthrough-2)
    - [CX-0157-SC-03-CAC-001 — Supplier provides Planned Production Output](#cx-0157-sc-03-cac-001--supplier-provides-planned-production-output)
      - [Requirement](#requirement-20)
      - [Proof of Conformity](#proof-of-conformity-20)
      - [Additional Information](#additional-information-20)
    - [CX-0157-SC-03-CAC-002 — Customer consumes Planned Production Output](#cx-0157-sc-03-cac-002--customer-consumes-planned-production-output)
      - [Requirement](#requirement-21)
      - [Proof of Conformity](#proof-of-conformity-21)
      - [Additional Information](#additional-information-21)
    - [CX-0157-SC-03-CAC-003 — Semantic model identity](#cx-0157-sc-03-cac-003--semantic-model-identity)
      - [Requirement](#requirement-22)
      - [Proof of Conformity](#proof-of-conformity-22)
      - [Additional Information](#additional-information-22)
    - [CX-0157-SC-03-CAC-004 — JSON schema validation](#cx-0157-sc-03-cac-004--json-schema-validation)
      - [Requirement](#requirement-23)
      - [Proof of Conformity](#proof-of-conformity-23)
      - [Additional Information](#additional-information-23)
    - [CX-0157-SC-03-CAC-005 — Contract policy](#cx-0157-sc-03-cac-005--contract-policy)
      - [Requirement](#requirement-24)
      - [Proof of Conformity](#proof-of-conformity-24)
      - [Additional Information](#additional-information-24)
    - [CX-0157-SC-03-CAC-006 — API implementation](#cx-0157-sc-03-cac-006--api-implementation)
      - [Requirement](#requirement-25)
      - [Proof of Conformity](#proof-of-conformity-25)
      - [Additional Information](#additional-information-25)
    - [CX-0157-SC-03-CAC-007 — No competitor conclusions (MUST NOT)](#cx-0157-sc-03-cac-007--no-competitor-conclusions-must-not)
      - [Requirement](#requirement-26)
      - [Proof of Conformity](#proof-of-conformity-26)
      - [Additional Information](#additional-information-26)
  - [CX-0157-SC-04 Item Stock Exchange](#cx-0157-sc-04-item-stock-exchange)
    - [Reperformance walkthrough](#reperformance-walkthrough-3)
    - [CX-0157-SC-04-CAC-001 — Customer provides Item Stock (inbound)](#cx-0157-sc-04-cac-001--customer-provides-item-stock-inbound)
      - [Requirement](#requirement-27)
      - [Proof of Conformity](#proof-of-conformity-27)
      - [Additional Information](#additional-information-27)
    - [CX-0157-SC-04-CAC-002 — Supplier consumes Item Stock](#cx-0157-sc-04-cac-002--supplier-consumes-item-stock)
      - [Requirement](#requirement-28)
      - [Proof of Conformity](#proof-of-conformity-28)
      - [Additional Information](#additional-information-28)
    - [CX-0157-SC-04-CAC-003 — Supplier provides Item Stock (outbound)](#cx-0157-sc-04-cac-003--supplier-provides-item-stock-outbound)
      - [Requirement](#requirement-29)
      - [Proof of Conformity](#proof-of-conformity-29)
      - [Additional Information](#additional-information-29)
    - [CX-0157-SC-04-CAC-004 — Customer consumes Item Stock](#cx-0157-sc-04-cac-004--customer-consumes-item-stock)
      - [Requirement](#requirement-30)
      - [Proof of Conformity](#proof-of-conformity-30)
      - [Additional Information](#additional-information-30)
    - [CX-0157-SC-04-CAC-005 — Semantic model identity](#cx-0157-sc-04-cac-005--semantic-model-identity)
      - [Requirement](#requirement-31)
      - [Proof of Conformity](#proof-of-conformity-31)
      - [Additional Information](#additional-information-31)
    - [CX-0157-SC-04-CAC-006 — JSON schema validation](#cx-0157-sc-04-cac-006--json-schema-validation)
      - [Requirement](#requirement-32)
      - [Proof of Conformity](#proof-of-conformity-32)
      - [Additional Information](#additional-information-32)
    - [CX-0157-SC-04-CAC-007 — Contract policy](#cx-0157-sc-04-cac-007--contract-policy)
      - [Requirement](#requirement-33)
      - [Proof of Conformity](#proof-of-conformity-33)
      - [Additional Information](#additional-information-33)
    - [CX-0157-SC-04-CAC-008 — API implementation](#cx-0157-sc-04-cac-008--api-implementation)
      - [Requirement](#requirement-34)
      - [Proof of Conformity](#proof-of-conformity-34)
      - [Additional Information](#additional-information-34)
    - [CX-0157-SC-04-CAC-009 — No horizontal exchange (MUST NOT)](#cx-0157-sc-04-cac-009--no-horizontal-exchange-must-not)
      - [Requirement](#requirement-35)
      - [Proof of Conformity](#proof-of-conformity-35)
      - [Additional Information](#additional-information-35)
    - [CX-0157-SC-04-CAC-010 — Stock direction](#cx-0157-sc-04-cac-010--stock-direction)
      - [Requirement](#requirement-36)
      - [Proof of Conformity](#proof-of-conformity-36)
      - [Additional Information](#additional-information-36)
  - [CX-0157-SC-05 Days of Supply Exchange](#cx-0157-sc-05-days-of-supply-exchange)
    - [Reperformance walkthrough](#reperformance-walkthrough-4)
    - [CX-0157-SC-05-CAC-001 — Customer provides Days of Supply (inbound)](#cx-0157-sc-05-cac-001--customer-provides-days-of-supply-inbound)
      - [Requirement](#requirement-37)
      - [Proof of Conformity](#proof-of-conformity-37)
      - [Additional Information](#additional-information-37)
    - [CX-0157-SC-05-CAC-002 — Supplier consumes Days of Supply](#cx-0157-sc-05-cac-002--supplier-consumes-days-of-supply)
      - [Requirement](#requirement-38)
      - [Proof of Conformity](#proof-of-conformity-38)
      - [Additional Information](#additional-information-38)
    - [CX-0157-SC-05-CAC-003 — Supplier provides Days of Supply (outbound)](#cx-0157-sc-05-cac-003--supplier-provides-days-of-supply-outbound)
      - [Requirement](#requirement-39)
      - [Proof of Conformity](#proof-of-conformity-39)
      - [Additional Information](#additional-information-39)
    - [CX-0157-SC-05-CAC-004 — Customer consumes Days of Supply](#cx-0157-sc-05-cac-004--customer-consumes-days-of-supply)
      - [Requirement](#requirement-40)
      - [Proof of Conformity](#proof-of-conformity-40)
      - [Additional Information](#additional-information-40)
    - [CX-0157-SC-05-CAC-005 — Semantic model identity](#cx-0157-sc-05-cac-005--semantic-model-identity)
      - [Requirement](#requirement-41)
      - [Proof of Conformity](#proof-of-conformity-41)
      - [Additional Information](#additional-information-41)
    - [CX-0157-SC-05-CAC-006 — JSON schema validation](#cx-0157-sc-05-cac-006--json-schema-validation)
      - [Requirement](#requirement-42)
      - [Proof of Conformity](#proof-of-conformity-42)
      - [Additional Information](#additional-information-42)
    - [CX-0157-SC-05-CAC-007 — Contract policy](#cx-0157-sc-05-cac-007--contract-policy)
      - [Requirement](#requirement-43)
      - [Proof of Conformity](#proof-of-conformity-43)
      - [Additional Information](#additional-information-43)
    - [CX-0157-SC-05-CAC-008 — API implementation](#cx-0157-sc-05-cac-008--api-implementation)
      - [Requirement](#requirement-44)
      - [Proof of Conformity](#proof-of-conformity-44)
      - [Additional Information](#additional-information-44)
    - [CX-0157-SC-05-CAC-009 — No horizontal exchange (MUST NOT)](#cx-0157-sc-05-cac-009--no-horizontal-exchange-must-not)
      - [Requirement](#requirement-45)
      - [Proof of Conformity](#proof-of-conformity-45)
      - [Additional Information](#additional-information-45)
    - [CX-0157-SC-05-CAC-010 — Multi-sourcing allocation](#cx-0157-sc-05-cac-010--multi-sourcing-allocation)
      - [Requirement](#requirement-46)
      - [Proof of Conformity](#proof-of-conformity-46)
      - [Additional Information](#additional-information-46)
    - [CX-0157-SC-05-CAC-011 — Multi-customer allocation](#cx-0157-sc-05-cac-011--multi-customer-allocation)
      - [Requirement](#requirement-47)
      - [Proof of Conformity](#proof-of-conformity-47)
      - [Additional Information](#additional-information-47)
    - [CX-0157-SC-05-CAC-012 — Customer Days of Supply calculation](#cx-0157-sc-05-cac-012--customer-days-of-supply-calculation)
      - [Requirement](#requirement-48)
      - [Proof of Conformity](#proof-of-conformity-48)
      - [Additional Information](#additional-information-48)
    - [CX-0157-SC-05-CAC-013 — Supplier Days of Supply calculation](#cx-0157-sc-05-cac-013--supplier-days-of-supply-calculation)
      - [Requirement](#requirement-49)
      - [Proof of Conformity](#proof-of-conformity-49)
      - [Additional Information](#additional-information-49)

## Reading Guide

> *This section is non-normative.*

The criteria are organised by **scenario**. A scenario umbrella `CX-0157-SC-NN` (`SC` = *Scenario*) describes one end-to-end business process of the standard (Chapter 5) together with the data model it exchanges (Chapter 3), the APIs it uses (Chapter 4) and the provisioning rules that apply (Chapter 2). Each umbrella is the unit a Conformity Assessment Body (CAB) reperforms.

Each umbrella contains atomic sub-criteria `CX-0157-SC-NN-CAC-NNN`, each independently assessable. Each criterion is a **MUST** or a **MUST NOT**; `MUST NOT` criteria are negative / anti-test scenarios that prove a forbidden behaviour (horizontal exchange of competitively sensitive information) is prevented.

The standards referenced by PURIS ([CX-0018](../CX-0018-DataspaceConnectivity/CX-0018-DataspaceConnectivity.md), [CX-0152](../CX-0152-PolicyConstrainsForDataExchange/CX-0152-PolicyConstrainsForDataExchange.md), [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md), [CX-0126](../CX-0126-IndustryCorePartType/CX-0126-IndustryCorePartType.md)) are **prerequisites**: they are certified separately and are not re-assessed here. The criteria below only cover the extensions PURIS adds and the specific use it mandates.

Several checks (twin provisioning and consumption, semantic-model identity, JSON-schema validation, contract policy, API implementation, competition compliance) recur in every scenario. They are written out per scenario so each scenario is a self-contained checklist, and each repetition carries a note `> Same evaluation procedure as ...` linking to its equivalents in the other scenarios.

Roles follow Table 4 of the standard. Provisioning and consumption criteria name the concrete role (customer / supplier) explicitly; where a model is exchanged in both directions, both roles are covered.

## CX-0157-SC-01 Delivery Information Exchange

- process: [5.1 DELIVERY INFORMATION EXCHANGE](./CX-0157-PURIS.md#51-delivery-information-exchange)
- data model: `urn:samm:io.catenax.delivery_information:2.0.0`
- apis: [4 APPLICATION PROGRAMMING INTERFACES](./CX-0157-PURIS.md#4-application-programming-interfaces)
- roles: customer and supplier (the provider depends on the incoterm, see Table 9)
- prerequisites: [CX-0018](../CX-0018-DataspaceConnectivity/CX-0018-DataspaceConnectivity.md), [CX-0152](../CX-0152-PolicyConstrainsForDataExchange/CX-0152-PolicyConstrainsForDataExchange.md), [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md), [CX-0126](../CX-0126-IndustryCorePartType/CX-0126-IndustryCorePartType.md)

### Reperformance walkthrough

1. Depending on the incoterm, the responsible role attaches the `DeliveryInformation` submodel to its part type twin (CAC-001 / CAC-003) with the correct semantic id and contract policy (CAC-005, CAC-007).
2. The other role discovers the partner twin and ingests the submodel via connector and Digital Twin API (CAC-002 / CAC-004, CAC-008).
3. Departure/arrival information is provided according to the incoterm variant (CAC-010, CAC-011, CAC-012) and the payload validates against the JSON schema (CAC-006).
4. Only partner-specific information is exchanged (CAC-009).

### CX-0157-SC-01-CAC-001 — Customer provides Delivery Information

- type: MUST
- topic: Digital Twin Provisioning
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-003](#cx-0157-sc-01-cac-003--supplier-provides-delivery-information), [CX-0157-SC-02-CAC-001](#cx-0157-sc-02-cac-001--customer-provides-short-term-material-demand), [CX-0157-SC-03-CAC-001](#cx-0157-sc-03-cac-001--supplier-provides-planned-production-output), [CX-0157-SC-04-CAC-001](#cx-0157-sc-04-cac-001--customer-provides-item-stock-inbound), [CX-0157-SC-04-CAC-003](#cx-0157-sc-04-cac-003--supplier-provides-item-stock-outbound), [CX-0157-SC-05-CAC-001](#cx-0157-sc-05-cac-001--customer-provides-days-of-supply-inbound), [CX-0157-SC-05-CAC-003](#cx-0157-sc-05-cac-003--supplier-provides-days-of-supply-outbound).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The customer **MUST** provide the `DeliveryInformation` submodel data by attaching it to their part type twin (incoterm variant where the customer is responsible for the delivery).

#### Proof of Conformity

- Inspect the customer's part type twin: a `SubmodelDescriptor` for `DeliveryInformation` exists and its submodel is retrievable (egest) via the Digital Twin API of [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources).

#### Additional Information

Roles and provisioning direction follow Table 4 of the standard. Prerequisite: twins are set up following [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md) and [CX-0126](../CX-0126-IndustryCorePartType/CX-0126-IndustryCorePartType.md) (the supplier creates the twin first to define the Catena-X ID).

### CX-0157-SC-01-CAC-002 — Supplier consumes Delivery Information

- type: MUST
- topic: Digital Twin Consumption
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-004](#cx-0157-sc-01-cac-004--customer-consumes-delivery-information), [CX-0157-SC-02-CAC-002](#cx-0157-sc-02-cac-002--supplier-consumes-short-term-material-demand), [CX-0157-SC-03-CAC-002](#cx-0157-sc-03-cac-002--customer-consumes-planned-production-output), [CX-0157-SC-04-CAC-002](#cx-0157-sc-04-cac-002--supplier-consumes-item-stock), [CX-0157-SC-04-CAC-004](#cx-0157-sc-04-cac-004--customer-consumes-item-stock), [CX-0157-SC-05-CAC-002](#cx-0157-sc-05-cac-002--supplier-consumes-days-of-supply), [CX-0157-SC-05-CAC-004](#cx-0157-sc-05-cac-004--customer-consumes-days-of-supply).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The supplier **MUST** consume the `DeliveryInformation` submodel data by reading it from the customer's part type twin (incoterm variant where the customer is responsible for the delivery).

#### Proof of Conformity

- Reperform discovery of the customer twin and ingest of the `DeliveryInformation` submodel via connector and Digital Twin API ([CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources)).

#### Additional Information

Roles follow Table 4 of the standard.

### CX-0157-SC-01-CAC-003 — Supplier provides Delivery Information

- type: MUST
- topic: Digital Twin Provisioning
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-001](#cx-0157-sc-01-cac-001--customer-provides-delivery-information), [CX-0157-SC-02-CAC-001](#cx-0157-sc-02-cac-001--customer-provides-short-term-material-demand), [CX-0157-SC-03-CAC-001](#cx-0157-sc-03-cac-001--supplier-provides-planned-production-output), [CX-0157-SC-04-CAC-001](#cx-0157-sc-04-cac-001--customer-provides-item-stock-inbound), [CX-0157-SC-04-CAC-003](#cx-0157-sc-04-cac-003--supplier-provides-item-stock-outbound), [CX-0157-SC-05-CAC-001](#cx-0157-sc-05-cac-001--customer-provides-days-of-supply-inbound), [CX-0157-SC-05-CAC-003](#cx-0157-sc-05-cac-003--supplier-provides-days-of-supply-outbound).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The supplier **MUST** provide the `DeliveryInformation` submodel data by attaching it to their part type twin (incoterm variant where the supplier is responsible for the delivery).

#### Proof of Conformity

- Inspect the supplier's part type twin: a `SubmodelDescriptor` for `DeliveryInformation` exists and its submodel is retrievable (egest) via the Digital Twin API of [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources).

#### Additional Information

Roles and provisioning direction follow Table 4 of the standard.

### CX-0157-SC-01-CAC-004 — Customer consumes Delivery Information

- type: MUST
- topic: Digital Twin Consumption
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-002](#cx-0157-sc-01-cac-002--supplier-consumes-delivery-information), [CX-0157-SC-02-CAC-002](#cx-0157-sc-02-cac-002--supplier-consumes-short-term-material-demand), [CX-0157-SC-03-CAC-002](#cx-0157-sc-03-cac-002--customer-consumes-planned-production-output), [CX-0157-SC-04-CAC-002](#cx-0157-sc-04-cac-002--supplier-consumes-item-stock), [CX-0157-SC-04-CAC-004](#cx-0157-sc-04-cac-004--customer-consumes-item-stock), [CX-0157-SC-05-CAC-002](#cx-0157-sc-05-cac-002--supplier-consumes-days-of-supply), [CX-0157-SC-05-CAC-004](#cx-0157-sc-05-cac-004--customer-consumes-days-of-supply).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The customer **MUST** consume the `DeliveryInformation` submodel data by reading it from the supplier's part type twin (incoterm variant where the supplier is responsible for the delivery).

#### Proof of Conformity

- Reperform discovery of the supplier twin and ingest of the `DeliveryInformation` submodel via connector and Digital Twin API ([CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources)).

#### Additional Information

Roles follow Table 4 of the standard.

### CX-0157-SC-01-CAC-005 — Semantic model identity

- type: MUST
- topic: Semantics, Versioning
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-02-CAC-003](#cx-0157-sc-02-cac-003--semantic-model-identity), [CX-0157-SC-03-CAC-003](#cx-0157-sc-03-cac-003--semantic-model-identity), [CX-0157-SC-04-CAC-005](#cx-0157-sc-04-cac-005--semantic-model-identity), [CX-0157-SC-05-CAC-005](#cx-0157-sc-05-cac-005--semantic-model-identity).

#### Requirement

[3.4.4 IDENTIFIER OF SEMANTIC MODEL](./CX-0157-PURIS.md#344-identifier-of-semantic-model)

The identifier `urn:samm:io.catenax.delivery_information:2.0.0` **MUST** be used to define the semantics of the `DeliveryInformation` data.

#### Proof of Conformity

- The `semanticId` `urn:samm:io.catenax.delivery_information:2.0.0` MUST be set in the `SubmodelDescriptor` of the provider's Digital Twin in the registry ([CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources)).
- Where CX-0002 requires per-submodel assets, the `semanticId` is additionally discoverable in the `dcat:Dataset` following the rules of [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#414-representation-in-dsp-catalogs).

#### Additional Information

Provide the submodel following [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md). Data assets differing only by major version are offered in parallel.

### CX-0157-SC-01-CAC-006 — JSON schema validation

- type: MUST
- topic: Semantics
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-02-CAC-004](#cx-0157-sc-02-cac-004--json-schema-validation), [CX-0157-SC-03-CAC-004](#cx-0157-sc-03-cac-004--json-schema-validation), [CX-0157-SC-04-CAC-006](#cx-0157-sc-04-cac-006--json-schema-validation), [CX-0157-SC-05-CAC-006](#cx-0157-sc-05-cac-006--json-schema-validation).

#### Requirement

[3.4.5.2 JSON SCHEMA](./CX-0157-PURIS.md#3452-json-schema)

The `DeliveryInformation` payload **MUST** validate against the JSON Schema generated from the aspect model (the Value-Only payload for the `GetSubmodel` operation).

#### Proof of Conformity

- Validate the provider's egest payload against the aspect-model JSON Schema. The consumer is not required to validate the schema on ingest.

#### Additional Information

none

### CX-0157-SC-01-CAC-007 — Contract policy

- type: MUST
- topic: Policy
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-02-CAC-005](#cx-0157-sc-02-cac-005--contract-policy), [CX-0157-SC-03-CAC-005](#cx-0157-sc-03-cac-005--contract-policy), [CX-0157-SC-04-CAC-007](#cx-0157-sc-04-cac-007--contract-policy), [CX-0157-SC-05-CAC-007](#cx-0157-sc-05-cac-007--contract-policy).

#### Requirement

[2.1.3 POLICY CONSTRAINTS FOR DATA EXCHANGE](./CX-0157-PURIS.md#213-policy-constraints-for-data-exchange)

The contract (usage) policy for the `DeliveryInformation` data offer **MUST** contain, combined via `and`, the Use Case Framework (`FrameworkAgreement`) and at least the use case purpose (`UsagePurpose`) with right operand `cx.puris.base:1`.

#### Proof of Conformity

- Take the Contract Policy referenced by the Contract Definition of the `DeliveryInformation` offer and validate it against the CX-0152 `policy-schema.json`; confirm `FrameworkAgreement` is present and `UsagePurpose` is at least `cx.puris.base:1`.

#### Additional Information

Follow the policy profile of [CX-0152](../CX-0152-PolicyConstrainsForDataExchange/CX-0152-PolicyConstrainsForDataExchange.md). Additional permissions, obligations and prohibitions MAY be used; access policies MAY additionally restrict by `Membership` / `BPNL`.

### CX-0157-SC-01-CAC-008 — API implementation

- type: MUST
- topic: API
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-02-CAC-006](#cx-0157-sc-02-cac-006--api-implementation), [CX-0157-SC-03-CAC-006](#cx-0157-sc-03-cac-006--api-implementation), [CX-0157-SC-04-CAC-008](#cx-0157-sc-04-cac-008--api-implementation), [CX-0157-SC-05-CAC-008](#cx-0157-sc-05-cac-008--api-implementation).

#### Requirement

[4 APPLICATION PROGRAMMING INTERFACES](./CX-0157-PURIS.md#4-application-programming-interfaces)

The [CX-0002] APIs **MUST** be implemented by the data provider and the data consumer for the `DeliveryInformation` exchange.

#### Proof of Conformity

- Provider: the Digital Twin Registry and Submodel API expose the `DeliveryInformation` submodel.
- Consumer: discovery of the twin and ingest of the submodel succeed.

#### Additional Information

Refer to the [CX-0002 API chapters](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md).

### CX-0157-SC-01-CAC-009 — No horizontal exchange (MUST NOT)

- type: MUST NOT
- topic: Compliance
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-02-CAC-007](#cx-0157-sc-02-cac-007--no-horizontal-exchange-must-not), [CX-0157-SC-03-CAC-007](#cx-0157-sc-03-cac-007--no-competitor-conclusions-must-not), [CX-0157-SC-04-CAC-009](#cx-0157-sc-04-cac-009--no-horizontal-exchange-must-not), [CX-0157-SC-05-CAC-009](#cx-0157-sc-05-cac-009--no-horizontal-exchange-must-not).

#### Requirement

[5.1.1 DELIVERY INFORMATION PROCESS](./CX-0157-PURIS.md#511-delivery-information-process)

Competitively sensitive `DeliveryInformation` related to other customers or suppliers **MUST NOT** be shared with others; the exchange **MUST** be direct and partner-specific.

#### Proof of Conformity

- Self-Assessment: the provider attests that data provisioning is partner-specific and that leakage is prevented across DSP catalog offerings, Shell and Submodel Descriptors, and the actual submodel data.
- Reperform one exchange and attempt cross-partner access; confirm the data of one partner is not accessible to another (anti-test).

#### Additional Information

Companies are RECOMMENDED to consult their legal department to avoid conflicts with competition law.

### CX-0157-SC-01-CAC-010 — Customer responsibility

- type: MUST
- topic: Process, Delivery Information
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

#### Requirement

[5.1.1.1.2 PROCESS PRESENTATION](./CX-0157-PURIS.md#51112-process-presentation) (customer is responsible for the whole delivery)

Under the incoterm **EXW**, the customer **MUST** provide the departure information and **MUST** provide the arrival information.

#### Proof of Conformity

- Inspect a `DeliveryInformation` payload provided by the customer for this variant: both departure and arrival event information are present. Reperform the exchange for one delivery.

#### Additional Information

This variant applies to the incoterm where the customer is responsible for both departure and arrival: **EXW** (Table 9). The actual arrival time is optional; if there is no confirmed date and time, a default arrival estimation MAY be used (e.g. departure date + 3 days).

### CX-0157-SC-01-CAC-011 — Supplier responsibility

- type: MUST
- topic: Process, Delivery Information
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

#### Requirement

[5.1.1.2.2 PROCESS REPRESENTATION](./CX-0157-PURIS.md#51122-process-representation) (supplier is responsible for the whole delivery)

Under the incoterms **DAP** and **DDP**, the supplier **MUST** provide the estimated arrival information and **MUST** provide the departure information.

#### Proof of Conformity

- Inspect a `DeliveryInformation` payload provided by the supplier for this variant: both departure and estimated arrival event information are present. Reperform the exchange for one delivery.

#### Additional Information

This variant applies to the incoterms where the supplier is responsible for both departure and arrival: **DAP**, **DDP** (Table 9). The actual arrival time is optional; a default arrival estimation MAY be used (e.g. departure date + 3 days). Transport information is provided to the customer only.

### CX-0157-SC-01-CAC-012 — Split responsibility

- type: MUST
- topic: Process, Delivery Information
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

#### Requirement

[5.1.1.3.2 PROCESS PRESENTATION](./CX-0157-PURIS.md#51132-process-presentation) (responsibility is split between supplier and customer)

Under the incoterms **FCA**, **FAS**, **FOB**, **CFR**, **CIF**, **CPT**, **CIP** and **DPU**, the supplier **MUST** provide the departure information and the customer **MUST** provide the arrival information.

#### Proof of Conformity

- Inspect that the supplier's `DeliveryInformation` payload carries the departure information and the customer's payload carries the arrival information. Reperform the split exchange.

#### Additional Information

This variant applies to the incoterms where the supplier is responsible for departure and the customer for arrival: **FCA**, **FAS**, **FOB**, **CFR**, **CIF**, **CPT**, **CIP**, **DPU** (Table 9). The actual arrival time is optional; a default arrival estimation MAY be used (e.g. departure date + 3 days).

## CX-0157-SC-02 Short-Term Material Demand Exchange

- process: [5.2 SHORT-TERM MATERIAL DEMAND EXCHANGE](./CX-0157-PURIS.md#52-short-term-material-demand-exchange)
- data model: `urn:samm:io.catenax.short_term_material_demand:1.0.0`
- apis: [4 APPLICATION PROGRAMMING INTERFACES](./CX-0157-PURIS.md#4-application-programming-interfaces)
- roles: customer (provider) and supplier (consumer)
- prerequisites: [CX-0018](../CX-0018-DataspaceConnectivity/CX-0018-DataspaceConnectivity.md), [CX-0152](../CX-0152-PolicyConstrainsForDataExchange/CX-0152-PolicyConstrainsForDataExchange.md), [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md), [CX-0126](../CX-0126-IndustryCorePartType/CX-0126-IndustryCorePartType.md)

### Reperformance walkthrough

1. The customer attaches the `ShortTermMaterialDemand` submodel to its part type twin (CAC-001) with the correct semantic id and contract policy (CAC-003, CAC-005).
2. The supplier discovers and ingests the submodel (CAC-002, CAC-006).
3. The demand payload uses valid demand categories (CAC-008) and validates against the JSON schema (CAC-004).
4. In multi-sourcing, only supplier-specific demand is exchanged (CAC-007).

### CX-0157-SC-02-CAC-001 — Customer provides Short-Term Material Demand

- type: MUST
- topic: Digital Twin Provisioning
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-001](#cx-0157-sc-01-cac-001--customer-provides-delivery-information), [CX-0157-SC-01-CAC-003](#cx-0157-sc-01-cac-003--supplier-provides-delivery-information), [CX-0157-SC-03-CAC-001](#cx-0157-sc-03-cac-001--supplier-provides-planned-production-output), [CX-0157-SC-04-CAC-001](#cx-0157-sc-04-cac-001--customer-provides-item-stock-inbound), [CX-0157-SC-04-CAC-003](#cx-0157-sc-04-cac-003--supplier-provides-item-stock-outbound), [CX-0157-SC-05-CAC-001](#cx-0157-sc-05-cac-001--customer-provides-days-of-supply-inbound), [CX-0157-SC-05-CAC-003](#cx-0157-sc-05-cac-003--supplier-provides-days-of-supply-outbound).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The customer **MUST** provide the `ShortTermMaterialDemand` submodel data by attaching it to their part type twin.

#### Proof of Conformity

- Inspect the customer's part type twin: a `SubmodelDescriptor` for `ShortTermMaterialDemand` exists and its submodel is retrievable (egest) via the Digital Twin API of [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources).

#### Additional Information

Roles follow Table 4 of the standard.

### CX-0157-SC-02-CAC-002 — Supplier consumes Short-Term Material Demand

- type: MUST
- topic: Digital Twin Consumption
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-002](#cx-0157-sc-01-cac-002--supplier-consumes-delivery-information), [CX-0157-SC-01-CAC-004](#cx-0157-sc-01-cac-004--customer-consumes-delivery-information), [CX-0157-SC-03-CAC-002](#cx-0157-sc-03-cac-002--customer-consumes-planned-production-output), [CX-0157-SC-04-CAC-002](#cx-0157-sc-04-cac-002--supplier-consumes-item-stock), [CX-0157-SC-04-CAC-004](#cx-0157-sc-04-cac-004--customer-consumes-item-stock), [CX-0157-SC-05-CAC-002](#cx-0157-sc-05-cac-002--supplier-consumes-days-of-supply), [CX-0157-SC-05-CAC-004](#cx-0157-sc-05-cac-004--customer-consumes-days-of-supply).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The supplier **MUST** consume the `ShortTermMaterialDemand` submodel data by reading it from the customer's part type twin.

#### Proof of Conformity

- Reperform discovery of the customer twin and ingest of the `ShortTermMaterialDemand` submodel via connector and Digital Twin API ([CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources)).

#### Additional Information

Roles follow Table 4 of the standard.

### CX-0157-SC-02-CAC-003 — Semantic model identity

- type: MUST
- topic: Semantics, Versioning
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-005](#cx-0157-sc-01-cac-005--semantic-model-identity), [CX-0157-SC-03-CAC-003](#cx-0157-sc-03-cac-003--semantic-model-identity), [CX-0157-SC-04-CAC-005](#cx-0157-sc-04-cac-005--semantic-model-identity), [CX-0157-SC-05-CAC-005](#cx-0157-sc-05-cac-005--semantic-model-identity).

#### Requirement

[3.1.4 IDENTIFIER OF SEMANTIC MODEL](./CX-0157-PURIS.md#314-identifier-of-semantic-model)

The identifier `urn:samm:io.catenax.short_term_material_demand:1.0.0` **MUST** be used to define the semantics of the `ShortTermMaterialDemand` data.

#### Proof of Conformity

- The `semanticId` `urn:samm:io.catenax.short_term_material_demand:1.0.0` MUST be set in the `SubmodelDescriptor` of the provider's Digital Twin in the registry ([CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources)).
- Where CX-0002 requires per-submodel assets, the `semanticId` is additionally discoverable in the `dcat:Dataset` following the rules of [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#414-representation-in-dsp-catalogs).

#### Additional Information

Provide the submodel following [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md).

### CX-0157-SC-02-CAC-004 — JSON schema validation

- type: MUST
- topic: Semantics
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-006](#cx-0157-sc-01-cac-006--json-schema-validation), [CX-0157-SC-03-CAC-004](#cx-0157-sc-03-cac-004--json-schema-validation), [CX-0157-SC-04-CAC-006](#cx-0157-sc-04-cac-006--json-schema-validation), [CX-0157-SC-05-CAC-006](#cx-0157-sc-05-cac-006--json-schema-validation).

#### Requirement

[3.1.5.2 JSON SCHEMA](./CX-0157-PURIS.md#3152-json-schema)

The `ShortTermMaterialDemand` payload **MUST** validate against the JSON Schema generated from the aspect model.

#### Proof of Conformity

- Validate the customer's egest payload against the aspect-model JSON Schema. The supplier (consumer) is not required to validate the schema on ingest.

#### Additional Information

none

### CX-0157-SC-02-CAC-005 — Contract policy

- type: MUST
- topic: Policy
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-007](#cx-0157-sc-01-cac-007--contract-policy), [CX-0157-SC-03-CAC-005](#cx-0157-sc-03-cac-005--contract-policy), [CX-0157-SC-04-CAC-007](#cx-0157-sc-04-cac-007--contract-policy), [CX-0157-SC-05-CAC-007](#cx-0157-sc-05-cac-007--contract-policy).

#### Requirement

[2.1.3 POLICY CONSTRAINTS FOR DATA EXCHANGE](./CX-0157-PURIS.md#213-policy-constraints-for-data-exchange)

The contract (usage) policy for the `ShortTermMaterialDemand` data offer **MUST** contain, combined via `and`, the Use Case Framework (`FrameworkAgreement`) and at least the use case purpose (`UsagePurpose`) with right operand `cx.puris.base:1`.

#### Proof of Conformity

- Take the Contract Policy referenced by the Contract Definition of the `ShortTermMaterialDemand` offer and validate it against the CX-0152 `policy-schema.json`; confirm `FrameworkAgreement` is present and `UsagePurpose` is at least `cx.puris.base:1`.

#### Additional Information

Follow the policy profile of [CX-0152](../CX-0152-PolicyConstrainsForDataExchange/CX-0152-PolicyConstrainsForDataExchange.md).

### CX-0157-SC-02-CAC-006 — API implementation

- type: MUST
- topic: API
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-008](#cx-0157-sc-01-cac-008--api-implementation), [CX-0157-SC-03-CAC-006](#cx-0157-sc-03-cac-006--api-implementation), [CX-0157-SC-04-CAC-008](#cx-0157-sc-04-cac-008--api-implementation), [CX-0157-SC-05-CAC-008](#cx-0157-sc-05-cac-008--api-implementation).

#### Requirement

[4 APPLICATION PROGRAMMING INTERFACES](./CX-0157-PURIS.md#4-application-programming-interfaces)

The [CX-0002] APIs **MUST** be implemented by the data provider and the data consumer for the `ShortTermMaterialDemand` exchange.

#### Proof of Conformity

- Provider: the Digital Twin Registry and Submodel API expose the `ShortTermMaterialDemand` submodel.
- Consumer: discovery of the twin and ingest of the submodel succeed.

#### Additional Information

Refer to the [CX-0002 API chapters](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md).

### CX-0157-SC-02-CAC-007 — No horizontal exchange (MUST NOT)

- type: MUST NOT
- topic: Compliance
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-009](#cx-0157-sc-01-cac-009--no-horizontal-exchange-must-not), [CX-0157-SC-03-CAC-007](#cx-0157-sc-03-cac-007--no-competitor-conclusions-must-not), [CX-0157-SC-04-CAC-009](#cx-0157-sc-04-cac-009--no-horizontal-exchange-must-not), [CX-0157-SC-05-CAC-009](#cx-0157-sc-05-cac-009--no-horizontal-exchange-must-not).

#### Requirement

[5.2 SHORT-TERM MATERIAL DEMAND EXCHANGE](./CX-0157-PURIS.md#52-short-term-material-demand-exchange)

In multi-sourcing, competitively sensitive information **MUST NOT** be shared horizontally; demand data provided to a supplier **MUST** be supplier-specific.

#### Proof of Conformity

- Self-Assessment: the customer attests that demand data is partner-specific and prevents conclusions about other suppliers.
- Reperform one exchange and attempt to derive another supplier's demand; confirm it is not possible (anti-test).

#### Additional Information

Companies are RECOMMENDED to consult their legal department.

### CX-0157-SC-02-CAC-008 — Demand categories

- type: MUST
- topic: Semantics
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

#### Requirement

[3.1.2.1 SHORT-TERM MATERIAL DEMAND CATEGORY HANDLING](./CX-0157-PURIS.md#3121-short-term-material-demand-category-handling)

The `ShortTermMaterialDemand` data **MUST** use the demand categories defined in Table 6.

#### Proof of Conformity

- Inspect that the demand category codes in the `ShortTermMaterialDemand` payload are values from Table 6 (e.g. `0001`, `A1S1`, `SR99`, `PI01`, `OS01`, `OI01`, `ED01`, `PO01`).

#### Additional Information

The table supplements the aspect model, which alone does not convey the meaning of the categories.

## CX-0157-SC-03 Planned Production Output Exchange

- process: [5.3 PLANNED PRODUCTION OUTPUT EXCHANGE](./CX-0157-PURIS.md#53-planned-production-output-exchange)
- data model: `urn:samm:io.catenax.planned_production_output:2.0.0`
- apis: [4 APPLICATION PROGRAMMING INTERFACES](./CX-0157-PURIS.md#4-application-programming-interfaces)
- roles: supplier (provider) and customer (consumer)
- prerequisites: [CX-0018](../CX-0018-DataspaceConnectivity/CX-0018-DataspaceConnectivity.md), [CX-0152](../CX-0152-PolicyConstrainsForDataExchange/CX-0152-PolicyConstrainsForDataExchange.md), [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md), [CX-0126](../CX-0126-IndustryCorePartType/CX-0126-IndustryCorePartType.md)

### Reperformance walkthrough

1. The supplier attaches the `PlannedProductionOutput` submodel to its part type twin (CAC-001) with the correct semantic id and contract policy (CAC-003, CAC-005).
2. The customer discovers and ingests the submodel (CAC-002, CAC-006) and validates the schema (CAC-004).
3. In multi-customer settings the supplier avoids conclusions about competitors (CAC-007).

### CX-0157-SC-03-CAC-001 — Supplier provides Planned Production Output

- type: MUST
- topic: Digital Twin Provisioning
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-001](#cx-0157-sc-01-cac-001--customer-provides-delivery-information), [CX-0157-SC-01-CAC-003](#cx-0157-sc-01-cac-003--supplier-provides-delivery-information), [CX-0157-SC-02-CAC-001](#cx-0157-sc-02-cac-001--customer-provides-short-term-material-demand), [CX-0157-SC-04-CAC-001](#cx-0157-sc-04-cac-001--customer-provides-item-stock-inbound), [CX-0157-SC-04-CAC-003](#cx-0157-sc-04-cac-003--supplier-provides-item-stock-outbound), [CX-0157-SC-05-CAC-001](#cx-0157-sc-05-cac-001--customer-provides-days-of-supply-inbound), [CX-0157-SC-05-CAC-003](#cx-0157-sc-05-cac-003--supplier-provides-days-of-supply-outbound).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The supplier **MUST** provide the `PlannedProductionOutput` submodel data by attaching it to their part type twin.

#### Proof of Conformity

- Inspect the supplier's part type twin: a `SubmodelDescriptor` for `PlannedProductionOutput` exists and its submodel is retrievable (egest) via the Digital Twin API of [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources).

#### Additional Information

Roles follow Table 4 of the standard.

### CX-0157-SC-03-CAC-002 — Customer consumes Planned Production Output

- type: MUST
- topic: Digital Twin Consumption
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-002](#cx-0157-sc-01-cac-002--supplier-consumes-delivery-information), [CX-0157-SC-01-CAC-004](#cx-0157-sc-01-cac-004--customer-consumes-delivery-information), [CX-0157-SC-02-CAC-002](#cx-0157-sc-02-cac-002--supplier-consumes-short-term-material-demand), [CX-0157-SC-04-CAC-002](#cx-0157-sc-04-cac-002--supplier-consumes-item-stock), [CX-0157-SC-04-CAC-004](#cx-0157-sc-04-cac-004--customer-consumes-item-stock), [CX-0157-SC-05-CAC-002](#cx-0157-sc-05-cac-002--supplier-consumes-days-of-supply), [CX-0157-SC-05-CAC-004](#cx-0157-sc-05-cac-004--customer-consumes-days-of-supply).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The customer **MUST** consume the `PlannedProductionOutput` submodel data by reading it from the supplier's part type twin.

#### Proof of Conformity

- Reperform discovery of the supplier twin and ingest of the `PlannedProductionOutput` submodel via connector and Digital Twin API ([CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources)).

#### Additional Information

Roles follow Table 4 of the standard.

### CX-0157-SC-03-CAC-003 — Semantic model identity

- type: MUST
- topic: Semantics, Versioning
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-005](#cx-0157-sc-01-cac-005--semantic-model-identity), [CX-0157-SC-02-CAC-003](#cx-0157-sc-02-cac-003--semantic-model-identity), [CX-0157-SC-04-CAC-005](#cx-0157-sc-04-cac-005--semantic-model-identity), [CX-0157-SC-05-CAC-005](#cx-0157-sc-05-cac-005--semantic-model-identity).

#### Requirement

[3.3.4 IDENTIFIER OF SEMANTIC MODEL](./CX-0157-PURIS.md#334-identifier-of-semantic-model)

The identifier `urn:samm:io.catenax.planned_production_output:2.0.0` **MUST** be used to define the semantics of the `PlannedProductionOutput` data.

#### Proof of Conformity

- The `semanticId` `urn:samm:io.catenax.planned_production_output:2.0.0` MUST be set in the `SubmodelDescriptor` of the provider's Digital Twin in the registry ([CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources)).
- Where CX-0002 requires per-submodel assets, the `semanticId` is additionally discoverable in the `dcat:Dataset` following the rules of [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#414-representation-in-dsp-catalogs).

#### Additional Information

Provide the submodel following [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md).

### CX-0157-SC-03-CAC-004 — JSON schema validation

- type: MUST
- topic: Semantics
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-006](#cx-0157-sc-01-cac-006--json-schema-validation), [CX-0157-SC-02-CAC-004](#cx-0157-sc-02-cac-004--json-schema-validation), [CX-0157-SC-04-CAC-006](#cx-0157-sc-04-cac-006--json-schema-validation), [CX-0157-SC-05-CAC-006](#cx-0157-sc-05-cac-006--json-schema-validation).

#### Requirement

[3.3.5.2 JSON SCHEMA](./CX-0157-PURIS.md#3352-json-schema)

The `PlannedProductionOutput` payload **MUST** validate against the JSON Schema generated from the aspect model.

#### Proof of Conformity

- Validate the supplier's egest payload against the aspect-model JSON Schema. The customer (consumer) is not required to validate the schema on ingest.

#### Additional Information

none

### CX-0157-SC-03-CAC-005 — Contract policy

- type: MUST
- topic: Policy
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-007](#cx-0157-sc-01-cac-007--contract-policy), [CX-0157-SC-02-CAC-005](#cx-0157-sc-02-cac-005--contract-policy), [CX-0157-SC-04-CAC-007](#cx-0157-sc-04-cac-007--contract-policy), [CX-0157-SC-05-CAC-007](#cx-0157-sc-05-cac-007--contract-policy).

#### Requirement

[2.1.3 POLICY CONSTRAINTS FOR DATA EXCHANGE](./CX-0157-PURIS.md#213-policy-constraints-for-data-exchange)

The contract (usage) policy for the `PlannedProductionOutput` data offer **MUST** contain, combined via `and`, the Use Case Framework (`FrameworkAgreement`) and at least the use case purpose (`UsagePurpose`) with right operand `cx.puris.base:1`.

#### Proof of Conformity

- Take the Contract Policy referenced by the Contract Definition of the `PlannedProductionOutput` offer and validate it against the CX-0152 `policy-schema.json`; confirm `FrameworkAgreement` is present and `UsagePurpose` is at least `cx.puris.base:1`.

#### Additional Information

Follow the policy profile of [CX-0152](../CX-0152-PolicyConstrainsForDataExchange/CX-0152-PolicyConstrainsForDataExchange.md).

### CX-0157-SC-03-CAC-006 — API implementation

- type: MUST
- topic: API
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-008](#cx-0157-sc-01-cac-008--api-implementation), [CX-0157-SC-02-CAC-006](#cx-0157-sc-02-cac-006--api-implementation), [CX-0157-SC-04-CAC-008](#cx-0157-sc-04-cac-008--api-implementation), [CX-0157-SC-05-CAC-008](#cx-0157-sc-05-cac-008--api-implementation).

#### Requirement

[4 APPLICATION PROGRAMMING INTERFACES](./CX-0157-PURIS.md#4-application-programming-interfaces)

The [CX-0002] APIs **MUST** be implemented by the data provider and the data consumer for the `PlannedProductionOutput` exchange.

#### Proof of Conformity

- Provider: the Digital Twin Registry and Submodel API expose the `PlannedProductionOutput` submodel.
- Consumer: discovery of the twin and ingest of the submodel succeed.

#### Additional Information

Refer to the [CX-0002 API chapters](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md).

### CX-0157-SC-03-CAC-007 — No competitor conclusions (MUST NOT)

- type: MUST NOT
- topic: Compliance
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-009](#cx-0157-sc-01-cac-009--no-horizontal-exchange-must-not), [CX-0157-SC-02-CAC-007](#cx-0157-sc-02-cac-007--no-horizontal-exchange-must-not), [CX-0157-SC-04-CAC-009](#cx-0157-sc-04-cac-009--no-horizontal-exchange-must-not), [CX-0157-SC-05-CAC-009](#cx-0157-sc-05-cac-009--no-horizontal-exchange-must-not).

#### Requirement

[5.3 PLANNED PRODUCTION OUTPUT EXCHANGE](./CX-0157-PURIS.md#53-planned-production-output-exchange)

`PlannedProductionOutput` data provided to a customer **MUST NOT** include information that allows conclusions about a competitor, and **MUST NOT** be shared horizontally.

#### Proof of Conformity

- Self-Assessment: the supplier attests that `PlannedProductionOutput` allocated to a customer excludes other customers' information.
- Reperform one exchange and attempt to derive another customer's output; confirm it is not possible (anti-test).

#### Additional Information

Recommended allocation methods: derive from orders/call-offs, from incoming Short-Term Material Demand, or from scheduled deliveries. Consult the legal department.

## CX-0157-SC-04 Item Stock Exchange

- process: [5.4 ITEM STOCK EXCHANGE](./CX-0157-PURIS.md#54-item-stock-exchange)
- data model: `urn:samm:io.catenax.item_stock:2.0.0`
- apis: [4 APPLICATION PROGRAMMING INTERFACES](./CX-0157-PURIS.md#4-application-programming-interfaces)
- roles: customer and supplier (both provide and consume; direction per Table 4)
- prerequisites: [CX-0018](../CX-0018-DataspaceConnectivity/CX-0018-DataspaceConnectivity.md), [CX-0152](../CX-0152-PolicyConstrainsForDataExchange/CX-0152-PolicyConstrainsForDataExchange.md), [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md), [CX-0126](../CX-0126-IndustryCorePartType/CX-0126-IndustryCorePartType.md)

### Reperformance walkthrough

1. The customer provides `ItemStock` with direction `inbound` and the supplier provides it with direction `outbound` on their respective part type twins (CAC-001, CAC-003, CAC-010), each with the correct semantic id and contract policy (CAC-005, CAC-007).
2. Each partner consumes the other's `ItemStock` submodel (CAC-002, CAC-004, CAC-008) and validates the schema (CAC-006).
3. Only partner-specific stock is exchanged (CAC-009).

### CX-0157-SC-04-CAC-001 — Customer provides Item Stock (inbound)

- type: MUST
- topic: Digital Twin Provisioning
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-001](#cx-0157-sc-01-cac-001--customer-provides-delivery-information), [CX-0157-SC-01-CAC-003](#cx-0157-sc-01-cac-003--supplier-provides-delivery-information), [CX-0157-SC-02-CAC-001](#cx-0157-sc-02-cac-001--customer-provides-short-term-material-demand), [CX-0157-SC-03-CAC-001](#cx-0157-sc-03-cac-001--supplier-provides-planned-production-output), [CX-0157-SC-04-CAC-003](#cx-0157-sc-04-cac-003--supplier-provides-item-stock-outbound), [CX-0157-SC-05-CAC-001](#cx-0157-sc-05-cac-001--customer-provides-days-of-supply-inbound), [CX-0157-SC-05-CAC-003](#cx-0157-sc-05-cac-003--supplier-provides-days-of-supply-outbound).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The customer **MUST** provide the `ItemStock` submodel data (direction `inbound`) by attaching it to their part type twin.

#### Proof of Conformity

- Inspect the customer's part type twin: a `SubmodelDescriptor` for `ItemStock` exists and its submodel is retrievable (egest) via the Digital Twin API of [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources).

#### Additional Information

Roles and direction (`inbound` for the customer) follow Table 4 of the standard.

### CX-0157-SC-04-CAC-002 — Supplier consumes Item Stock

- type: MUST
- topic: Digital Twin Consumption
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-002](#cx-0157-sc-01-cac-002--supplier-consumes-delivery-information), [CX-0157-SC-01-CAC-004](#cx-0157-sc-01-cac-004--customer-consumes-delivery-information), [CX-0157-SC-02-CAC-002](#cx-0157-sc-02-cac-002--supplier-consumes-short-term-material-demand), [CX-0157-SC-03-CAC-002](#cx-0157-sc-03-cac-002--customer-consumes-planned-production-output), [CX-0157-SC-04-CAC-004](#cx-0157-sc-04-cac-004--customer-consumes-item-stock), [CX-0157-SC-05-CAC-002](#cx-0157-sc-05-cac-002--supplier-consumes-days-of-supply), [CX-0157-SC-05-CAC-004](#cx-0157-sc-05-cac-004--customer-consumes-days-of-supply).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The supplier **MUST** consume the `ItemStock` submodel data (direction `inbound`) by reading it from the customer's part type twin.

#### Proof of Conformity

- Reperform discovery of the customer twin and ingest of the `ItemStock` submodel via connector and Digital Twin API ([CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources)).

#### Additional Information

Roles follow Table 4 of the standard.

### CX-0157-SC-04-CAC-003 — Supplier provides Item Stock (outbound)

- type: MUST
- topic: Digital Twin Provisioning
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-001](#cx-0157-sc-01-cac-001--customer-provides-delivery-information), [CX-0157-SC-01-CAC-003](#cx-0157-sc-01-cac-003--supplier-provides-delivery-information), [CX-0157-SC-02-CAC-001](#cx-0157-sc-02-cac-001--customer-provides-short-term-material-demand), [CX-0157-SC-03-CAC-001](#cx-0157-sc-03-cac-001--supplier-provides-planned-production-output), [CX-0157-SC-04-CAC-001](#cx-0157-sc-04-cac-001--customer-provides-item-stock-inbound), [CX-0157-SC-05-CAC-001](#cx-0157-sc-05-cac-001--customer-provides-days-of-supply-inbound), [CX-0157-SC-05-CAC-003](#cx-0157-sc-05-cac-003--supplier-provides-days-of-supply-outbound).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The supplier **MUST** provide the `ItemStock` submodel data (direction `outbound`) by attaching it to their part type twin.

#### Proof of Conformity

- Inspect the supplier's part type twin: a `SubmodelDescriptor` for `ItemStock` exists and its submodel is retrievable (egest) via the Digital Twin API of [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources).

#### Additional Information

Roles and direction (`outbound` for the supplier) follow Table 4 of the standard.

### CX-0157-SC-04-CAC-004 — Customer consumes Item Stock

- type: MUST
- topic: Digital Twin Consumption
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-002](#cx-0157-sc-01-cac-002--supplier-consumes-delivery-information), [CX-0157-SC-01-CAC-004](#cx-0157-sc-01-cac-004--customer-consumes-delivery-information), [CX-0157-SC-02-CAC-002](#cx-0157-sc-02-cac-002--supplier-consumes-short-term-material-demand), [CX-0157-SC-03-CAC-002](#cx-0157-sc-03-cac-002--customer-consumes-planned-production-output), [CX-0157-SC-04-CAC-002](#cx-0157-sc-04-cac-002--supplier-consumes-item-stock), [CX-0157-SC-05-CAC-002](#cx-0157-sc-05-cac-002--supplier-consumes-days-of-supply), [CX-0157-SC-05-CAC-004](#cx-0157-sc-05-cac-004--customer-consumes-days-of-supply).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The customer **MUST** consume the `ItemStock` submodel data (direction `outbound`) by reading it from the supplier's part type twin.

#### Proof of Conformity

- Reperform discovery of the supplier twin and ingest of the `ItemStock` submodel via connector and Digital Twin API ([CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources)).

#### Additional Information

Roles follow Table 4 of the standard.

### CX-0157-SC-04-CAC-005 — Semantic model identity

- type: MUST
- topic: Semantics, Versioning
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-005](#cx-0157-sc-01-cac-005--semantic-model-identity), [CX-0157-SC-02-CAC-003](#cx-0157-sc-02-cac-003--semantic-model-identity), [CX-0157-SC-03-CAC-003](#cx-0157-sc-03-cac-003--semantic-model-identity), [CX-0157-SC-05-CAC-005](#cx-0157-sc-05-cac-005--semantic-model-identity).

#### Requirement

[3.2.4 IDENTIFIER OF SEMANTIC MODEL](./CX-0157-PURIS.md#324-identifier-of-semantic-model)

The identifier `urn:samm:io.catenax.item_stock:2.0.0` **MUST** be used to define the semantics of the `ItemStock` data.

#### Proof of Conformity

- The `semanticId` `urn:samm:io.catenax.item_stock:2.0.0` MUST be set in the `SubmodelDescriptor` of the provider's Digital Twin in the registry ([CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources)).
- Where CX-0002 requires per-submodel assets, the `semanticId` is additionally discoverable in the `dcat:Dataset` following the rules of [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#414-representation-in-dsp-catalogs).

#### Additional Information

Provide the submodel following [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md).

### CX-0157-SC-04-CAC-006 — JSON schema validation

- type: MUST
- topic: Semantics
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-006](#cx-0157-sc-01-cac-006--json-schema-validation), [CX-0157-SC-02-CAC-004](#cx-0157-sc-02-cac-004--json-schema-validation), [CX-0157-SC-03-CAC-004](#cx-0157-sc-03-cac-004--json-schema-validation), [CX-0157-SC-05-CAC-006](#cx-0157-sc-05-cac-006--json-schema-validation).

#### Requirement

[3.2.5.2 JSON SCHEMA](./CX-0157-PURIS.md#3252-json-schema)

The `ItemStock` payload **MUST** validate against the JSON Schema generated from the aspect model.

#### Proof of Conformity

- Validate the provider's egest payload against the aspect-model JSON Schema. The consumer is not required to validate the schema on ingest.

#### Additional Information

none

### CX-0157-SC-04-CAC-007 — Contract policy

- type: MUST
- topic: Policy
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-007](#cx-0157-sc-01-cac-007--contract-policy), [CX-0157-SC-02-CAC-005](#cx-0157-sc-02-cac-005--contract-policy), [CX-0157-SC-03-CAC-005](#cx-0157-sc-03-cac-005--contract-policy), [CX-0157-SC-05-CAC-007](#cx-0157-sc-05-cac-007--contract-policy).

#### Requirement

[2.1.3 POLICY CONSTRAINTS FOR DATA EXCHANGE](./CX-0157-PURIS.md#213-policy-constraints-for-data-exchange)

The contract (usage) policy for the `ItemStock` data offer **MUST** contain, combined via `and`, the Use Case Framework (`FrameworkAgreement`) and at least the use case purpose (`UsagePurpose`) with right operand `cx.puris.base:1`.

#### Proof of Conformity

- Take the Contract Policy referenced by the Contract Definition of the `ItemStock` offer and validate it against the CX-0152 `policy-schema.json`; confirm `FrameworkAgreement` is present and `UsagePurpose` is at least `cx.puris.base:1`.

#### Additional Information

Follow the policy profile of [CX-0152](../CX-0152-PolicyConstrainsForDataExchange/CX-0152-PolicyConstrainsForDataExchange.md).

### CX-0157-SC-04-CAC-008 — API implementation

- type: MUST
- topic: API
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-008](#cx-0157-sc-01-cac-008--api-implementation), [CX-0157-SC-02-CAC-006](#cx-0157-sc-02-cac-006--api-implementation), [CX-0157-SC-03-CAC-006](#cx-0157-sc-03-cac-006--api-implementation), [CX-0157-SC-05-CAC-008](#cx-0157-sc-05-cac-008--api-implementation).

#### Requirement

[4 APPLICATION PROGRAMMING INTERFACES](./CX-0157-PURIS.md#4-application-programming-interfaces)

The [CX-0002] APIs **MUST** be implemented by the data provider and the data consumer for the `ItemStock` exchange.

#### Proof of Conformity

- Provider: the Digital Twin Registry and Submodel API expose the `ItemStock` submodel.
- Consumer: discovery of the twin and ingest of the submodel succeed.

#### Additional Information

Refer to the [CX-0002 API chapters](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md).

### CX-0157-SC-04-CAC-009 — No horizontal exchange (MUST NOT)

- type: MUST NOT
- topic: Compliance
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-009](#cx-0157-sc-01-cac-009--no-horizontal-exchange-must-not), [CX-0157-SC-02-CAC-007](#cx-0157-sc-02-cac-007--no-horizontal-exchange-must-not), [CX-0157-SC-03-CAC-007](#cx-0157-sc-03-cac-007--no-competitor-conclusions-must-not), [CX-0157-SC-05-CAC-009](#cx-0157-sc-05-cac-009--no-horizontal-exchange-must-not).

#### Requirement

[5.4 ITEM STOCK EXCHANGE](./CX-0157-PURIS.md#54-item-stock-exchange)

In multi-sourcing and multi-customer scenarios, `ItemStock` information in relation to other customers or suppliers **MUST NOT** be shared horizontally.

#### Proof of Conformity

- Self-Assessment: the provider attests that stock data is partner-specific and excludes other partners' capacities, call-offs, deliveries, consumption and stock.
- Reperform one exchange and attempt to derive another partner's stock; confirm it is not possible (anti-test).

#### Additional Information

Companies are RECOMMENDED to consult their legal department.

### CX-0157-SC-04-CAC-010 — Stock direction

- type: MUST
- topic: Semantics, Process
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

`ItemStock` **MUST** be provided with the direction defined in Table 4: `inbound` when provided by the customer and `outbound` when provided by the supplier.

#### Proof of Conformity

- Inspect the `direction` property of the `ItemStock` payload for the provider role: `inbound` for the customer, `outbound` for the supplier.

#### Additional Information

The same direction rule applies to `DaysOfSupply` (see [CX-0157-SC-05-CAC-001](#cx-0157-sc-05-cac-001--customer-provides-days-of-supply-inbound) and [CX-0157-SC-05-CAC-003](#cx-0157-sc-05-cac-003--supplier-provides-days-of-supply-outbound)).

## CX-0157-SC-05 Days of Supply Exchange

- process: [5.5 Days of Supply Exchange](./CX-0157-PURIS.md#55-days-of-supply-exchange)
- data model: `urn:samm:io.catenax.days_of_supply:2.0.0`
- apis: [4 APPLICATION PROGRAMMING INTERFACES](./CX-0157-PURIS.md#4-application-programming-interfaces)
- roles: customer and supplier (both provide and consume; direction per Table 4)
- prerequisites: [CX-0018](../CX-0018-DataspaceConnectivity/CX-0018-DataspaceConnectivity.md), [CX-0152](../CX-0152-PolicyConstrainsForDataExchange/CX-0152-PolicyConstrainsForDataExchange.md), [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md), [CX-0126](../CX-0126-IndustryCorePartType/CX-0126-IndustryCorePartType.md)

### Reperformance walkthrough

1. The customer provides `DaysOfSupply` with direction `inbound` and the supplier provides it with direction `outbound` on their respective part type twins (CAC-001, CAC-003), each with the correct semantic id and contract policy (CAC-005, CAC-007).
2. Each partner consumes the other's `DaysOfSupply` submodel (CAC-002, CAC-004, CAC-008) and validates the schema (CAC-006).
3. In multi-sourcing and multi-customer settings, allocated Days of Supply are sent to the particular partner and horizontal exchange is avoided (CAC-009, CAC-010, CAC-011).
4. The exchanged Days of Supply values are recomputed from the projected item stock and the demand or outgoing deliveries (CAC-012, CAC-013).

### CX-0157-SC-05-CAC-001 — Customer provides Days of Supply (inbound)

- type: MUST
- topic: Digital Twin Provisioning
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-001](#cx-0157-sc-01-cac-001--customer-provides-delivery-information), [CX-0157-SC-01-CAC-003](#cx-0157-sc-01-cac-003--supplier-provides-delivery-information), [CX-0157-SC-02-CAC-001](#cx-0157-sc-02-cac-001--customer-provides-short-term-material-demand), [CX-0157-SC-03-CAC-001](#cx-0157-sc-03-cac-001--supplier-provides-planned-production-output), [CX-0157-SC-04-CAC-001](#cx-0157-sc-04-cac-001--customer-provides-item-stock-inbound), [CX-0157-SC-04-CAC-003](#cx-0157-sc-04-cac-003--supplier-provides-item-stock-outbound), [CX-0157-SC-05-CAC-003](#cx-0157-sc-05-cac-003--supplier-provides-days-of-supply-outbound).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The customer **MUST** provide the `DaysOfSupply` submodel data (direction `inbound`) by attaching it to their part type twin.

#### Proof of Conformity

- Inspect the customer's part type twin: a `SubmodelDescriptor` for `DaysOfSupply` exists and its submodel is retrievable (egest) via the Digital Twin API of [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources).

#### Additional Information

Roles and direction (`inbound` for the customer) follow Table 4 of the standard.

### CX-0157-SC-05-CAC-002 — Supplier consumes Days of Supply

- type: MUST
- topic: Digital Twin Consumption
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-002](#cx-0157-sc-01-cac-002--supplier-consumes-delivery-information), [CX-0157-SC-01-CAC-004](#cx-0157-sc-01-cac-004--customer-consumes-delivery-information), [CX-0157-SC-02-CAC-002](#cx-0157-sc-02-cac-002--supplier-consumes-short-term-material-demand), [CX-0157-SC-03-CAC-002](#cx-0157-sc-03-cac-002--customer-consumes-planned-production-output), [CX-0157-SC-04-CAC-002](#cx-0157-sc-04-cac-002--supplier-consumes-item-stock), [CX-0157-SC-04-CAC-004](#cx-0157-sc-04-cac-004--customer-consumes-item-stock), [CX-0157-SC-05-CAC-004](#cx-0157-sc-05-cac-004--customer-consumes-days-of-supply).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The supplier **MUST** consume the `DaysOfSupply` submodel data (direction `inbound`) by reading it from the customer's part type twin.

#### Proof of Conformity

- Reperform discovery of the customer twin and ingest of the `DaysOfSupply` submodel via connector and Digital Twin API ([CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources)).

#### Additional Information

Roles follow Table 4 of the standard.

### CX-0157-SC-05-CAC-003 — Supplier provides Days of Supply (outbound)

- type: MUST
- topic: Digital Twin Provisioning
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-001](#cx-0157-sc-01-cac-001--customer-provides-delivery-information), [CX-0157-SC-01-CAC-003](#cx-0157-sc-01-cac-003--supplier-provides-delivery-information), [CX-0157-SC-02-CAC-001](#cx-0157-sc-02-cac-001--customer-provides-short-term-material-demand), [CX-0157-SC-03-CAC-001](#cx-0157-sc-03-cac-001--supplier-provides-planned-production-output), [CX-0157-SC-04-CAC-001](#cx-0157-sc-04-cac-001--customer-provides-item-stock-inbound), [CX-0157-SC-04-CAC-003](#cx-0157-sc-04-cac-003--supplier-provides-item-stock-outbound), [CX-0157-SC-05-CAC-001](#cx-0157-sc-05-cac-001--customer-provides-days-of-supply-inbound).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The supplier **MUST** provide the `DaysOfSupply` submodel data (direction `outbound`) by attaching it to their part type twin.

#### Proof of Conformity

- Inspect the supplier's part type twin: a `SubmodelDescriptor` for `DaysOfSupply` exists and its submodel is retrievable (egest) via the Digital Twin API of [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources).

#### Additional Information

Roles and direction (`outbound` for the supplier) follow Table 4 of the standard.

### CX-0157-SC-05-CAC-004 — Customer consumes Days of Supply

- type: MUST
- topic: Digital Twin Consumption
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-002](#cx-0157-sc-01-cac-002--supplier-consumes-delivery-information), [CX-0157-SC-01-CAC-004](#cx-0157-sc-01-cac-004--customer-consumes-delivery-information), [CX-0157-SC-02-CAC-002](#cx-0157-sc-02-cac-002--supplier-consumes-short-term-material-demand), [CX-0157-SC-03-CAC-002](#cx-0157-sc-03-cac-002--customer-consumes-planned-production-output), [CX-0157-SC-04-CAC-002](#cx-0157-sc-04-cac-002--supplier-consumes-item-stock), [CX-0157-SC-04-CAC-004](#cx-0157-sc-04-cac-004--customer-consumes-item-stock), [CX-0157-SC-05-CAC-002](#cx-0157-sc-05-cac-002--supplier-consumes-days-of-supply).

#### Requirement

[2.1.2 DATA REQUIRED](./CX-0157-PURIS.md#212-data-required)

The customer **MUST** consume the `DaysOfSupply` submodel data (direction `outbound`) by reading it from the supplier's part type twin.

#### Proof of Conformity

- Reperform discovery of the supplier twin and ingest of the `DaysOfSupply` submodel via connector and Digital Twin API ([CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources)).

#### Additional Information

Roles follow Table 4 of the standard.

### CX-0157-SC-05-CAC-005 — Semantic model identity

- type: MUST
- topic: Semantics, Versioning
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-005](#cx-0157-sc-01-cac-005--semantic-model-identity), [CX-0157-SC-02-CAC-003](#cx-0157-sc-02-cac-003--semantic-model-identity), [CX-0157-SC-03-CAC-003](#cx-0157-sc-03-cac-003--semantic-model-identity), [CX-0157-SC-04-CAC-005](#cx-0157-sc-04-cac-005--semantic-model-identity).

#### Requirement

[3.5.4 IDENTIFIER OF SEMANTIC MODEL](./CX-0157-PURIS.md#354-identifier-of-semantic-model)

The identifier `urn:samm:io.catenax.days_of_supply:2.0.0` **MUST** be used to define the semantics of the `DaysOfSupply` data.

#### Proof of Conformity

- The `semanticId` `urn:samm:io.catenax.days_of_supply:2.0.0` MUST be set in the `SubmodelDescriptor` of the provider's Digital Twin in the registry ([CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#412-api-endpoints--resources)).
- Where CX-0002 requires per-submodel assets, the `semanticId` is additionally discoverable in the `dcat:Dataset` following the rules of [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md#414-representation-in-dsp-catalogs).

#### Additional Information

Provide the submodel following [CX-0002](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md).

### CX-0157-SC-05-CAC-006 — JSON schema validation

- type: MUST
- topic: Semantics
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-006](#cx-0157-sc-01-cac-006--json-schema-validation), [CX-0157-SC-02-CAC-004](#cx-0157-sc-02-cac-004--json-schema-validation), [CX-0157-SC-03-CAC-004](#cx-0157-sc-03-cac-004--json-schema-validation), [CX-0157-SC-04-CAC-006](#cx-0157-sc-04-cac-006--json-schema-validation).

#### Requirement

[3.5.5.2 JSON SCHEMA](./CX-0157-PURIS.md#3552-json-schema)

The `DaysOfSupply` payload **MUST** validate against the JSON Schema generated from the aspect model.

#### Proof of Conformity

- Validate the provider's egest payload against the aspect-model JSON Schema. The consumer is not required to validate the schema on ingest.

#### Additional Information

none

### CX-0157-SC-05-CAC-007 — Contract policy

- type: MUST
- topic: Policy
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-007](#cx-0157-sc-01-cac-007--contract-policy), [CX-0157-SC-02-CAC-005](#cx-0157-sc-02-cac-005--contract-policy), [CX-0157-SC-03-CAC-005](#cx-0157-sc-03-cac-005--contract-policy), [CX-0157-SC-04-CAC-007](#cx-0157-sc-04-cac-007--contract-policy).

#### Requirement

[2.1.3 POLICY CONSTRAINTS FOR DATA EXCHANGE](./CX-0157-PURIS.md#213-policy-constraints-for-data-exchange)

The contract (usage) policy for the `DaysOfSupply` data offer **MUST** contain, combined via `and`, the Use Case Framework (`FrameworkAgreement`) and at least the use case purpose (`UsagePurpose`) with right operand `cx.puris.base:1`.

#### Proof of Conformity

- Take the Contract Policy referenced by the Contract Definition of the `DaysOfSupply` offer and validate it against the CX-0152 `policy-schema.json`; confirm `FrameworkAgreement` is present and `UsagePurpose` is at least `cx.puris.base:1`.

#### Additional Information

Follow the policy profile of [CX-0152](../CX-0152-PolicyConstrainsForDataExchange/CX-0152-PolicyConstrainsForDataExchange.md).

### CX-0157-SC-05-CAC-008 — API implementation

- type: MUST
- topic: API
- automisable: true
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-008](#cx-0157-sc-01-cac-008--api-implementation), [CX-0157-SC-02-CAC-006](#cx-0157-sc-02-cac-006--api-implementation), [CX-0157-SC-03-CAC-006](#cx-0157-sc-03-cac-006--api-implementation), [CX-0157-SC-04-CAC-008](#cx-0157-sc-04-cac-008--api-implementation).

#### Requirement

[4 APPLICATION PROGRAMMING INTERFACES](./CX-0157-PURIS.md#4-application-programming-interfaces)

The [CX-0002] APIs **MUST** be implemented by the data provider and the data consumer for the `DaysOfSupply` exchange.

#### Proof of Conformity

- Provider: the Digital Twin Registry and Submodel API expose the `DaysOfSupply` submodel.
- Consumer: discovery of the twin and ingest of the submodel succeed.

#### Additional Information

Refer to the [CX-0002 API chapters](../CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md).

### CX-0157-SC-05-CAC-009 — No horizontal exchange (MUST NOT)

- type: MUST NOT
- topic: Compliance
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

> Same evaluation procedure as [CX-0157-SC-01-CAC-009](#cx-0157-sc-01-cac-009--no-horizontal-exchange-must-not), [CX-0157-SC-02-CAC-007](#cx-0157-sc-02-cac-007--no-horizontal-exchange-must-not), [CX-0157-SC-03-CAC-007](#cx-0157-sc-03-cac-007--no-competitor-conclusions-must-not), [CX-0157-SC-04-CAC-009](#cx-0157-sc-04-cac-009--no-horizontal-exchange-must-not).

#### Requirement

[5.5.1 DAYS OF SUPPLY PROCESS](./CX-0157-PURIS.md#551-days-of-supply-process)

`DaysOfSupply` information in relation to other customers or suppliers **MUST NOT** be shared horizontally.

#### Proof of Conformity

- Self-Assessment: the provider attests that Days of Supply data is partner-specific.
- Reperform one exchange and attempt to derive another partner's Days of Supply; confirm it is not possible (anti-test).

#### Additional Information

Companies are RECOMMENDED to consult their legal department.

### CX-0157-SC-05-CAC-010 — Multi-sourcing allocation

- type: MUST
- topic: Process, Compliance
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

#### Requirement

[5.5.3 DAYS OF SUPPLY MANAGEMENT WITHIN MULTI-SOURCING SCENARIOS](./CX-0157-PURIS.md#553-days-of-supply-management-within-multi-sourcing-scenarios)

In multi-sourcing, the customer **MUST** make sure that allocated Days of Supply based on allocated Item Stock are sent to the particular supplier and **MUST** avoid horizontal exchange of competitively sensitive information.

#### Proof of Conformity

- Reperform the allocation for a multi-sourcing setup: the Days of Supply provided to a supplier are computed from that supplier's allocated item stock only.
- Self-Assessment that no other supplier's information is derivable.

#### Additional Information

For calculation of allocated item stock, see Annex 1 of the standard.

### CX-0157-SC-05-CAC-011 — Multi-customer allocation

- type: MUST
- topic: Process, Compliance
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [x] Reperformance
  - [ ] Analytical Procedures

#### Requirement

[5.5.4 DAYS OF SUPPLY MANAGEMENT WITHIN MULTI-CUSTOMER SCENARIO](./CX-0157-PURIS.md#554-days-of-supply-management-within-multi-customer-scenario)

In a multi-customer scenario, the supplier **MUST** make sure that allocated Days of Supply based on allocated Item Stock are sent to the particular customer and **MUST** avoid horizontal exchange of competitively sensitive information.

#### Proof of Conformity

- Reperform the allocation for a multi-customer setup: the Days of Supply provided to a customer are computed from that customer's allocated item stock only.
- Self-Assessment that no other customer's information is derivable.

#### Additional Information

For calculation of allocated item stock, see Annex 2 of the standard.

### CX-0157-SC-05-CAC-012 — Customer Days of Supply calculation

- type: MUST
- topic: Days of Supply, Recalculation
- automisable: true
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [x] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

#### Requirement

[5.5.2.2 PROCESS REPRESENTATION](./CX-0157-PURIS.md#5522-process-representation) and Table 35

The customer's `DaysOfSupply` (direction `inbound`) **MUST** be calculated from the projected item stock and the future daily demand. For a reference day with projected item stock `S` and future daily demand `D(1), D(2), ...` (where `D(1)` is the demand of the following day), the value is `DaysOfSupply = k + (S - sum(D(1)..D(k))) / D(k+1)`, where `k` is the largest integer for which `sum(D(1)..D(k)) <= S`. If `S <= 0`, then `DaysOfSupply = 0`.

#### Proof of Conformity

- Recalculate the `daysOfSupply` value from the provided projected item stock and demand series for at least one sample date and compare it to the value the customer provides (allowing for rounding).

#### Additional Information

In the customer view the stock decreases through internal demand and increases through incoming deliveries (see Table 35 of the standard).

### CX-0157-SC-05-CAC-013 — Supplier Days of Supply calculation

- type: MUST
- topic: Days of Supply, Recalculation
- automisable: true
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [x] Recalculation
  - [ ] Reperformance
  - [ ] Analytical Procedures

#### Requirement

[5.5.2.2 PROCESS REPRESENTATION](./CX-0157-PURIS.md#5522-process-representation) and Table 36

The supplier's `DaysOfSupply` (direction `outbound`) **MUST** be calculated from the projected item stock and the future daily outgoing deliveries. For a reference day with projected item stock `S` and future daily outgoing deliveries `O(1), O(2), ...` (where `O(1)` is the outgoing delivery of the following day), the value is `DaysOfSupply = k + (S - sum(O(1)..O(k))) / O(k+1)`, where `k` is the largest integer for which `sum(O(1)..O(k)) <= S`. If `S <= 0`, then `DaysOfSupply = 0`.

#### Proof of Conformity

- Recalculate the `daysOfSupply` value from the provided projected item stock and outgoing delivery series for at least one sample date and compare it to the value the supplier provides (allowing for rounding).

#### Additional Information

In the supplier view the stock decreases through outgoing deliveries and increases through internal production (see Table 36 of the standard).
