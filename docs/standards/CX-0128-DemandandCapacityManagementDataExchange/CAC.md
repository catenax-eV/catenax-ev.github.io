# Conformity Assessment Criteria

## General Information

- cxId: CX-0128
- name: Demand and Capacity Management Data Exchange
- capability: Demand and Capacity
- version: 2.2.0
- release: CX-Saturn

## Conformity Assessment Criteria

### CX-0128-CAC-001

- type: MUST
- topic: Policy
- automisable: false
- assessment:
    - [ ] Inspection
    - [ ] Observation
    - [ ] Self-Assessment
    - [ ] Inquiry
    - [x] Confirmation
    - [ ] Recalculation
    - [ ] Reperformance
    - [ ] Analytical
    - [ ] Procedures

#### Requirement

Policies within Catena-X MUST be aligned with the example usage policy in the CX ODRL Profile and with all subsections of [2.3 Additional Requirements](#23-additional-requirements).

#### Proof of Conformity

Customer and Supplier: Contract Definitions, Policies and Assets used by the EDC for the respective APIs.

#### Information

Policies

### CX-0128-CAC-002

- type: MUST
- assessmentBy:
    - Inspection: false
    - Observation: false
    - Self-Assessment: false
    - Inquiry: false
    - Confirmation: true
    - Recalculation: false
    - Reperformance: false
    - Analytical: false
    - Procedures: false

#### Requirement

The [unique identifier](#314-identifier-of-semantic-model) for the semantic model, as specified in this standard, MUST be used to define the meaning of the data being transferred.

#### Proof of Confirmity

Customer: Egest of Aspect Model.

#### Information

Aspect Model WeekBasedMaterialDemand




---

## Not part, ...

| CAC - ID NR. | Standard | Standard Version | Category | Status | Platform Capability | Standard title | Requirement (CAC) | Add Info | MUST/ SHOULD  | Proof of Conformity  | Inspection | Observation | Self-Assessment | Inquiry | Confirmation | Recalculation | Reperformance | Analytical Procedures | Test automisable (Y/N) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CX-0128-CAC-001 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | Policies within Catena-X MUST be aligned with the example usage policy in the CX ODRL Profile and with all subsections of [2.3 Additional Requirements](#23-additional-requirements). | Policies | MUST | Customer and Supplier: Contract Definitions, Policies and Assets used by the EDC for the respective APIs |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-002 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The [unique identifier](#314-identifier-of-semantic-model) for the semantic model, as specified in this standard, MUST be used to define the meaning of the data being transferred. | Aspect Model WeekBasedMaterialDemand | MUST | Customer: Egest of Aspect Model |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-003 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The JSON payload provided by data providers MUST comply with the [JSON schema](#3152-json-schema) as specified in this standard and MUST be validated against the same JSON schema by data consumers. | Aspect Model WeekBasedMaterialDemand | MUST | Customer: Egest of Aspect Model, Supplier: Ingest of Aspect Model |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-004 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | Within the Catena-X data space `WeekBasedMaterialDemand` data MUST be requested and exchanged using a connector, conforming to the standards [[CX-0018](#71-normative-references)] and [[CX-0002](#71-normative-references)]. It MUST be transferred using the [WeekBasedMaterialDemand API](#41-weekbasedmaterialdemand-api) | Aspect Model WeekBasedMaterialDemand | MUST | Customer: Egest of Aspect Model, Supplier: Ingest of Aspect Model |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-005 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The [unique identifier](#324-identifier-of-semantic-model) for the semantic model, as specified in this standard, MUST be used to define the meaning of the data being transferred. | Aspect Model WeekBasedCapacityGroup | MUST | Supplierr: Egest of Aspect Model |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-006 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The JSON payload provided by data providers MUST comply with the [JSON schema](#3252-json-schema) as specified in this standard and MUST be validated against the same JSON schema by data consumers. | Aspect Model WeekBasedCapacityGroup | MUST | Supplier: Egest of Aspect Model, Customer: Ingest of Aspect Model |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-007 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | Within the Catena-X data space `WeekBasedMaterialCapacityGroup` data MUST be requested and exchanged using a connector, conforming to the standards [[CX-0018](#71-normative-references)] and [[CX-0002](#71-normative-references)]. It MUST be transferred using the [WeekBasedCapacityGroup API](#42-weekbasedcapacitygroup-api) | Aspect Model WeekBasedCapacityGroup | MUST | Supplier: Egest of Aspect Model, Customer: Ingest of Aspect Model |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-008 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The [unique identifier](#324-identifier-of-semantic-model) for the semantic model, as specified in this standard, MUST be used to define the meaning of the data being transferred. | Aspect Model IdBasedRequestForUpdate | MUST | Customer and Supplier: Egest of Aspect Model |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-009 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The JSON payload provided by data providers MUST comply with the [JSON schema](#3352-json-schema) as specified in this standard and MUST be validated against the same JSON schema by data consumers. | Aspect Model IdBasedRequestForUpdate | MUST | Customer and Supplier: Egest and Ingest of Aspect Model |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-010 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | Within the Catena-X data space `IdBasedRequestForUpdate` data MUST be requested and exchanged using a connector, conforming to the standards [[CX-0018](#71-normative-references)] and [[CX-0002](#71-normative-references)]. It MUST be transferred using the [RequestForUpdate API](#43-requestforupdate-api). | Aspect Model IdBasedRequestForUpdate | MUST | Customer and Supplier: Egest and Ingest of Aspect Model |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-011 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The [unique identifier](#344-identifier-of-semantic-model) for the semantic model, as specified in this standard, MUST be used to define the meaning of the data being transferred. | Aspect Model IdBasedComment | MUST | Customer and Supplier: Egest of Aspect Model |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-012 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The JSON Payload provided by data providers MUST comply with the [JSON schema](#3452-json-schema) as specified in this standard and MUST be validated against the same JSON schema by data consumers. | Aspect Model IdBasedComment | MUST | Customer and Supplier: Egest and Ingest of Aspect Model |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-013 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | Within the Catena-X data space `IdBasedComment` data MUST be requested and exchanged using a connector, conforming to the standards [[CX-0018](#71-normative-references)] and [[CX-0002](#71-normative-references)]. It must be transferred using the [IdBasedComment API](#44-idbasedcomment-api). | Aspect Model IdBasedComment | MUST | Customer and Supplier: Egest and Ingest of Aspect Model |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-014 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | When exchanging data with a DCM partner, the POST request payload MUST be structured as follows: | Payload Structure | MUST | Customer and Supplier: Serialization of Aspect Models as Payloads |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-015 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | Within the Catena-X data space APIs MUST only be accessible via a connector, conforming to the standard [[CX-0018](#71-normative-references)]. | API WeekBasedMaterialDemand | MUST | Supplier: EDC Asset |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-016 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The API MUST be registered as a data asset as defined in [Section 4.1.2.5](#4125-data-asset-structure). | API WeekBasedMaterialDemand | MUST | Supplier: EDC Asset |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-017 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The API MUST be implemented as defined in [Section 4.1.2](#412-api-specification). | API WeekBasedMaterialDemand | MUST | Supplier: API Logic |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-018 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | Within the Catena-X data space APIs MUST only be accessible via a connector, conforming to the standard [[CX-0018](#71-normative-references)]. | API WeekBasedCapacityGroup | MUST | Customer: EDC Asset |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-019 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The API MUST be registered as a data asset as defined in [Section 4.2.2.5](#4225-data-asset-structure). | API WeekBasedCapacityGroup | MUST | Customer: EDC Asset |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-020 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The API MUST be implemented as defined in [Section 4.2.2](#422-api-specification). | API WeekBasedCapacityGroup | MUST | Customer: API Logic |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-021 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | Within the Catena-X data space APIs MUST only be accessible via a connector, conforming to the standard [[CX-0018](#71-normative-references)]. | API IdBasedRequestForUpdate | MUST | Customer and Supplier: EDC Asset |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-022 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The API MUST be registered as a data asset as defined in [Section 4.3.2.4](#4324-data-asset-structure). | API IdBasedRequestForUpdate | MUST | Customer and Supplier: EDC Asset |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-023 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The API MUST be implemented as defined in [Section 4.3.2](#432-api-specification). | API IdBasedRequestForUpdate | MUST | Customer and Supplier: API Logic |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-024 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | Within the Catena-X data space APIs MUST only be accessible via a connector, conforming to the standard [[CX-0018](#71-normative-references)]. | API IdBasedComment | MUST | Customer and Supplier: EDC Asset |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-025 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The API MUST be registered as a data asset as defined in [Section 4.4.2.5](#4425-data-asset-structure). | API IdBasedComment | MUST | Customer and Supplier: EDC Asset |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-026 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The API MUST be implemented as defined in [Section 4.4.2](#442-api-specification). | API IdBasedComment | MUST | Customer and Supplier: API Logic |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-027 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | Data providers MAY adopt the DCM AAS API. If they choose otherwise, none of the obligations of this section apply. | API DCM AAS | MAY | Customer and Supplier: Self Assessment |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-028 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | Within the Catena-X data space APIs MUST only be accessible via a connector, conforming to the standard [[CX-0018](#71-normative-references)]. | API DCM AAS | MUST | Customer and Supplier: EDC Assets |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-029 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The API MUST be implemented as defined in [Section 4.5.2](#452-api-specification). | API DCM AAS | MUST | Customer and Supplier: API Logic |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-030 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | Companies adopting demand and capacity management in Catena-X MUST conform to the processes and guidelies defined in [Chapter 5](#5-processes) and all its subsections. | Processes | MUST | Customer and Supplier: Application and Business Logic |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-031 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The following sections describe capabilities, that are REQUIRED (except for subsections that are defined as optional): | Capabilities | REQUIRED | Customer and Supplier: Self Assessment |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-032 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | The following sections describe capabilities, that are OPTIONAL: | Capabilities | OPTIONAL | Customer and Supplier: Self Assessment |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-033 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | Software solutions implementing demand and capacity management in Catena-X MUST conform to the data formats and processes defined in the following sections, for every capability they intend to offer: | Capabilities | MUST | Customer and Supplier: Application and Business Logic |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-034 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | All participants involved in the Catena-X DCM use case MUST consent to the *Data Exchange Governance* framework agreement. | Framework | MUST | Customer and Supplier: Cofinity-X Wallet |  |  |  |  | x |  |  |  |  |
| CX-0128-CAC-035 | CX-0128 | 2.2.0 | Triangle | Release 25.09 | Demand and Capacity | Demand and Capacity Management Data Exchange | A key aspect of managing business partner relationships within Catena-X involves defining and applying policies that facilitate and protect data exchange. Both customers and suppliers MUST implement and uphold these policies in order to guarantee a secure and collaborative data exchange: | Policies | MUST | Customer and Supplier: Contract Definitions, Policies and Assets used by the EDC for the respective APIs and Application and Business Logic |  |  |  |  | x |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
