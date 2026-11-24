# Conformity Assessment Criteria

## General Information

- cxId: CX-0143
- name: Use Case Circular Economy - Digital Product Passport
- capability: Sustainability
- version: 1.5.0
- release: CX-Neptune

## Conformity Assessment Criteria

### CX-0143-CAC-001

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

Policies within Catena-X MUST be aligned with the example usage policy in the CX ODRL Profile and with all subsections of [2.3 Additional Requirements](../CX-0155-RequirementsEngineering/CX-0155-RequirementsEngineering.md#23-additional-requirements).

#### Proof of Conformity

Customer and Supplier: Contract Definitions, Policies and Assets used by the EDC for the respective APIs.

#### Information

Policies

### CX-0143-CAC-002

- type: MUST
- topic: Semantics
- automisable: true
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [x] Procedures

#### Requirement

Digital Product Passport data MUST be attached via `PartType` or `PartInstance`.

#### Proof of Conformity

Customer and Supplier: Register a Digital Twin and show the process of only allowing `PartType` and `PartInstance` Twins

#### Additional Information

`PartType` and `PartInstance` shall be chosen based on the semantic models used and the detail level of the information (batch, item or model level).

### CX-0143-CAC-003

- type: SHOULD
- topic: Semantics
- automisable: true
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [x] Procedures

#### Requirement

Digital Product Passport data must be attached to the digital twin as a submodel defined in [3 ASPECT MODELS](./CX-0143-SEM.md).

#### Proof of Conformity

Customer and Supplier: Validate the json payload against the schema defined in the semantic hub. A process for checking against this data should be shown.

#### Additional Information

N/A

### CX-0143-CAC-004

- type: MUST
- topic: Policy
- automisable: true
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

The usage purpose cx.circular.dpp:1 MUST be registered for data exchange in the use case.

#### Proof of Conformity

Customer and Supplier: Validate the purpose and show a process to decline offers without that purpose.

#### Additional Information

N/A

### CX-0143-CAC-005

- type: MUST
- topic: API
- automisable: true
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

Applications and self hosted data provisioning solutions MUST follow the asset structure defined in [4.1.1 EDC Asset](./CX-0143-API.md#41-edc-data-asset-structure)

#### Proof of Conformity

Supplier: Provide an asset, validate the asset structure and show a process to decline offers without that asset structure definition.
Consumer: Show how to consume the asset with the corresponding structure and how it is proofed.

#### Additional Information

N/A

### CX-0143-CAC-006

- type: MUST
- topic: API
- automisable: true
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

Applications and self hosted data provisioning solutions MUST follow the Contract definition structured defined in [4.1.3 Contract Definition](./CX-0143-API.md#413-contract-definition)

#### Proof of Conformity

Supplier: Provide an asset, validate the Contract definition and show a process to decline offers without that contract definition.
Consumer: Show how to consume the Contract.

#### Additional Information

N/A

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
