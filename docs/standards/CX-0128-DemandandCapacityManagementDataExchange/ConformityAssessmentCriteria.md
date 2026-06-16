# Conformity Assessment Criteria

## General Information

- cxId: CX-0128
- name: Demand and Capacity Management Data Exchange
- capability: Demand and Capacity
- version: 2.3.1
- release: CX-Saturn

## Conformity Assessment Criteria

### CX-0128-CAC-001

- type: MUST
- topic: Policy
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Policies within Catena-X MUST be aligned with the example usage policy in the CX ODRL Profile and with all subsections of [2.3 Additional Requirements](./#23-additional-requirements).

#### Proof of Conformity

Customer and Supplier: Contract Definitions, Policies and Assets used by the EDC for the respective APIs.

#### Information

Policies

### CX-0128-CAC-002

- type: MUST
- topic: Aspect Model WeekBasedMaterialDemand
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The [unique identifier](./#314-identifier-of-semantic-model) for the semantic model, as specified in this standard, MUST be used to define the meaning of the data being transferred.

#### Proof of Conformity

Customer: Egest of Aspect Model

#### Information

Aspect Model WeekBasedMaterialDemand

### CX-0128-CAC-003

- type: MUST
- topic: Aspect Model WeekBasedMaterialDemand
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The JSON payload provided by data providers MUST comply with the [JSON schema](./#3152-json-schema) as specified in this standard and MUST be validated against the same JSON schema by data consumers.

#### Proof of Conformity

Customer: Egest of Aspect Model, Supplier: Ingest of Aspect Model

#### Information

Aspect Model WeekBasedMaterialDemand

### CX-0128-CAC-004

- type: MUST
- topic: Aspect Model WeekBasedMaterialDemand
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Within the Catena-X data space `WeekBasedMaterialDemand` data MUST be requested and exchanged using a connector, conforming to the standards [[CX-0018](./#71-normative-references)] and [[CX-0002](./#71-normative-references)]. It MUST be transferred using the [WeekBasedMaterialDemand API](./#41-weekbasedmaterialdemand-api)

#### Proof of Conformity

Customer: Egest of Aspect Model, Supplier: Ingest of Aspect Model

#### Information

Aspect Model WeekBasedMaterialDemand

### CX-0128-CAC-005

- type: MUST
- topic: Aspect Model WeekBasedCapacityGroup
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The [unique identifier](./#324-identifier-of-semantic-model) for the semantic model, as specified in this standard, MUST be used to define the meaning of the data being transferred.

#### Proof of Conformity

Supplier: Egest of Aspect Model

#### Information

Aspect Model WeekBasedCapacityGroup

### CX-0128-CAC-006

- type: MUST
- topic: Aspect Model WeekBasedCapacityGroup
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The JSON payload provided by data providers MUST comply with the [JSON schema](./#3252-json-schema) as specified in this standard and MUST be validated against the same JSON schema by data consumers.

#### Proof of Conformity

Supplier: Egest of Aspect Model, Customer: Ingest of Aspect Model

#### Information

Aspect Model WeekBasedCapacityGroup

### CX-0128-CAC-007

- type: MUST
- topic: Aspect Model WeekBasedCapacityGroup
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Within the Catena-X data space `WeekBasedMaterialCapacityGroup` data MUST be requested and exchanged using a connector, conforming to the standards [[CX-0018](./#71-normative-references)] and [[CX-0002](./#71-normative-references)]. It MUST be transferred using the [WeekBasedCapacityGroup API](./#42-weekbasedcapacitygroup-api)

#### Proof of Conformity

Supplier: Egest of Aspect Model, Customer: Ingest of Aspect Model

#### Information

Aspect Model WeekBasedCapacityGroup

### CX-0128-CAC-008

- type: MUST
- topic: Aspect Model IdBasedRequestForUpdate
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The [unique identifier](./#324-identifier-of-semantic-model) for the semantic model, as specified in this standard, MUST be used to define the meaning of the data being transferred.

#### Proof of Conformity

Customer and Supplier: Egest of Aspect Model

#### Information

Aspect Model IdBasedRequestForUpdate

### CX-0128-CAC-009

- type: MUST
- topic: Aspect Model IdBasedRequestForUpdate
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The JSON payload provided by data providers MUST comply with the [JSON schema](./#3352-json-schema) as specified in this standard and MUST be validated against the same JSON schema by data consumers.

#### Proof of Conformity

Customer and Supplier: Egest and Ingest of Aspect Model

#### Information

Aspect Model IdBasedRequestForUpdate

### CX-0128-CAC-010

- type: MUST
- topic: Aspect Model IdBasedRequestForUpdate
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Within the Catena-X data space `IdBasedRequestForUpdate` data MUST be requested and exchanged using a connector, conforming to the standards [[CX-0018](./#71-normative-references)] and [[CX-0002](./#71-normative-references)]. It MUST be transferred using the [RequestForUpdate API](./#43-requestforupdate-api).

#### Proof of Conformity

Customer and Supplier: Egest and Ingest of Aspect Model

#### Information

Aspect Model IdBasedRequestForUpdate

### CX-0128-CAC-011

- type: MUST
- topic: Aspect Model IdBasedComment
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The [unique identifier](./#344-identifier-of-semantic-model) for the semantic model, as specified in this standard, MUST be used to define the meaning of the data being transferred.

#### Proof of Conformity

Customer and Supplier: Egest of Aspect Model

#### Information

Aspect Model IdBasedComment

### CX-0128-CAC-012

- type: MUST
- topic: Aspect Model IdBasedComment
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The JSON Payload provided by data providers MUST comply with the [JSON schema](./#3452-json-schema) as specified in this standard and MUST be validated against the same JSON schema by data consumers.

#### Proof of Conformity

Customer and Supplier: Egest and Ingest of Aspect Model

#### Information

Aspect Model IdBasedComment

### CX-0128-CAC-013

- type: MUST
- topic: Aspect Model IdBasedComment
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Within the Catena-X data space `IdBasedComment` data MUST be requested and exchanged using a connector, conforming to the standards [[CX-0018](./#71-normative-references)] and [[CX-0002](./#71-normative-references)]. It must be transferred using the [IdBasedComment API](./#44-idbasedcomment-api).

#### Proof of Conformity

Customer and Supplier: Egest and Ingest of Aspect Model

#### Information

Aspect Model IdBasedComment

### CX-0128-CAC-014

- type: MUST
- topic: Payload Structure
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

When exchanging data with a DCM partner, the POST request payload MUST be structured as follows:

#### Proof of Conformity

Customer and Supplier: Serialization of Aspect Models as Payloads

#### Information

Payload Structure

### CX-0128-CAC-015

- type: MUST
- topic: API WeekBasedMaterialDemand
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Within the Catena-X data space APIs MUST only be accessible via a connector, conforming to the standard [[CX-0018](./#71-normative-references)].

#### Proof of Conformity

Supplier: EDC Asset

#### Information

API WeekBasedMaterialDemand

### CX-0128-CAC-016

- type: MUST
- topic: API WeekBasedMaterialDemand
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The API MUST be registered as a data asset as defined in [Section 4.1.2.5](./#4125-data-asset-structure).

#### Proof of Conformity

Supplier: EDC Asset

#### Information

API WeekBasedMaterialDemand

### CX-0128-CAC-017

- type: MUST
- topic: API WeekBasedMaterialDemand
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The API MUST be implemented as defined in [Section 4.1.2](./#412-api-specification).

#### Proof of Conformity

Supplier: API Logic

#### Information

API WeekBasedMaterialDemand

### CX-0128-CAC-018

- type: MUST
- topic: API WeekBasedCapacityGroup
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Within the Catena-X data space APIs MUST only be accessible via a connector, conforming to the standard [[CX-0018](./#71-normative-references)].

#### Proof of Conformity

Customer: EDC Asset

#### Information

API WeekBasedCapacityGroup

### CX-0128-CAC-019

- type: MUST
- topic: API WeekBasedCapacityGroup
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The API MUST be registered as a data asset as defined in [Section 4.2.2.5](./#4225-data-asset-structure).

#### Proof of Conformity

Customer: EDC Asset

#### Information

API WeekBasedCapacityGroup

### CX-0128-CAC-020

- type: MUST
- topic: API WeekBasedCapacityGroup
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The API MUST be implemented as defined in [Section 4.2.2](./#422-api-specification).

#### Proof of Conformity

Customer: API Logic

#### Information

API WeekBasedCapacityGroup

### CX-0128-CAC-021

- type: MUST
- topic: API IdBasedRequestForUpdate
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Within the Catena-X data space APIs MUST only be accessible via a connector, conforming to the standard [[CX-0018](./#71-normative-references)].

#### Proof of Conformity

Customer and Supplier: EDC Asset

#### Information

API IdBasedRequestForUpdate

### CX-0128-CAC-022

- type: MUST
- topic: API IdBasedRequestForUpdate
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The API MUST be registered as a data asset as defined in [Section 4.3.2.4](./#4324-data-asset-structure).

#### Proof of Conformity

Customer and Supplier: EDC Asset

#### Information

API IdBasedRequestForUpdate

### CX-0128-CAC-023

- type: MUST
- topic: API IdBasedRequestForUpdate
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The API MUST be implemented as defined in [Section 4.3.2](./#432-api-specification).

#### Proof of Conformity

Customer and Supplier: API Logic

#### Information

API IdBasedRequestForUpdate

### CX-0128-CAC-024

- type: MUST
- topic: API IdBasedComment
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Within the Catena-X data space APIs MUST only be accessible via a connector, conforming to the standard [[CX-0018](./#71-normative-references)].

#### Proof of Conformity

Customer and Supplier: EDC Asset

#### Information

API IdBasedComment

### CX-0128-CAC-025

- type: MUST
- topic: API IdBasedComment
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The API MUST be registered as a data asset as defined in [Section 4.4.2.5](./#4425-data-asset-structure).

#### Proof of Conformity

Customer and Supplier: EDC Asset

#### Information

API IdBasedComment

### CX-0128-CAC-026

- type: MUST
- topic: API IdBasedComment
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The API MUST be implemented as defined in [Section 4.4.2](./#442-api-specification).

#### Proof of Conformity

Customer and Supplier: API Logic

#### Information

API IdBasedComment

### CX-0128-CAC-027

- type: MAY
- topic: API DCM AAS
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Data providers MAY adopt the DCM AAS API. If they choose otherwise, none of the obligations of this section apply.

#### Proof of Conformity

Customer and Supplier: Self Assessment

#### Information

API DCM AAS

### CX-0128-CAC-028

- type: MUST
- topic: API DCM AAS
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Within the Catena-X data space APIs MUST only be accessible via a connector, conforming to the standard [[CX-0018](./#71-normative-references)].

#### Proof of Conformity

Customer and Supplier: EDC Assets

#### Information

API DCM AAS

### CX-0128-CAC-029

- type: MUST
- topic: API DCM AAS
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The API MUST be implemented as defined in [Section 4.5.2](./#452-api-specification).

#### Proof of Conformity

Customer and Supplier: API Logic

#### Information

API DCM AAS

### CX-0128-CAC-030

- type: MUST
- topic: Processes
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Companies adopting demand and capacity management in Catena-X MUST conform to the processes and guidelies defined in [Chapter 5](./#5-processes) and all its subsections.

#### Proof of Conformity

Customer and Supplier: Application and Business Logic

#### Information

Processes

### CX-0128-CAC-031

- type: REQUIRED
- topic: Capabilities
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The following sections describe capabilities, that are REQUIRED (except for subsections that are defined as optional):

#### Proof of Conformity

Customer and Supplier: Self Assessment

#### Information

Capabilities

### CX-0128-CAC-032

- type: OPTIONAL
- topic: Capabilities
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The following sections describe capabilities, that are OPTIONAL:

#### Proof of Conformity

Customer and Supplier: Self Assessment

#### Information

Capabilities

### CX-0128-CAC-033

- type: MUST
- topic: Capabilities
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Software solutions implementing demand and capacity management in Catena-X MUST conform to the data formats and processes defined in the following sections, for every capability they intend to offer:

#### Proof of Conformity

Customer and Supplier: Application and Business Logic

#### Information

Capabilities

### CX-0128-CAC-034

- type: MUST
- topic: Framework
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

All participants involved in the Catena-X DCM use case MUST consent to the *Data Exchange Governance* framework agreement.

#### Proof of Conformity

Customer and Supplier: Cofinity-X Wallet

#### Information

Framework

### CX-0128-CAC-035

- type: MUST
- topic: Policies
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

A key aspect of managing business partner relationships within Catena-X involves defining and applying policies that facilitate and protect data exchange. Both customers and suppliers MUST implement and uphold these policies in order to guarantee a secure and collaborative data exchange:

#### Proof of Conformity

Customer and Supplier: Contract Definitions, Policies and Assets used by the EDC for the respective APIs and Application and Business Logic

#### Information

Policies
