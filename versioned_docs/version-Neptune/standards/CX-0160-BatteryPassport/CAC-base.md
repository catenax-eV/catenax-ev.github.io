# Conformity Assessment Criteria

## General Information

- cxId: CX-0160-base
- name: Base Criteria
- capability: Battery Passport Data Management
- version: 1.0.0
- release: CX-neptune

## Conformity Assessment Criteria

### CX-0160-base-CAC-001

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

Policies within Catena-X MUST be aligned with the usage policy `cx.circular.dpp:1` (see [2.2 Policy Constraints for Data Exchange](./CX-0160-BatteryPassport-base.md#22-policy-constraints-for-data-exchange)). Each Data Offer providing battery passport data under this use case therefore MUST be registered as an EDC asset compliant with CX-0152 with a `UsagePurposeConstraint` whose `rightOperand` contains `cx.circular.dpp:1`, as specified in section 2.2.

#### Proof of Conformity

Data Provider: Review of Data Offers to confirm the presence of a `UsagePurposeConstraint` with value `cx.circular.dpp:1` in the asset's Usage Policy.

#### Information

Policies

### CX-0160-base-CAC-002 Semantics

- type: MUST
- topic: Semantics
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The data models MUST be implemented as described in [Semantic Models](./CX-0160-BatteryPassport-base.md#3-semantic-models).

#### Proof of Confirmity

Data Provider: Review of submodel descriptors in the Digital Twin Registry to confirm the correct primary and supplemental semantic IDs, and review of submodel payloads to confirm conformance with the aspect model and its JSON Schema. The data models must be supported to be accessed via a digital twin registry conformant to CX-0002.

#### Additional Information

N/A

### CX-0160-base-CAC-003 Digital Twin Specific Asset IDs

- type: SHOULD
- topic: Logics
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

The section [2.1.1 DIGITAL TWINS AND SPECIFIC ASSET IDs](./CX-0160-BatteryPassport-base.md#211-digital-twins-and-specific-asset-ids) MUST be implemented as described.

#### Proof of Conformity

Data Provider: Review of Digital Twin Registry entries to confirm presence and correct values of all mandatory `specificAssetIds` for registered battery twins. The solutions shall 1) either support an integrated DTR or 2) allow to integrate an existing DTR.

### CX-0160-base-CAC-004 EDC Data Asset Structure

- type: MUST
- topic: APIs
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

Data Assets registered for the provisioning of battery passport submodels MUST be structured according to section 4.1 and MUST contain the properties `dct:type` set to `cx-taxo:BatteryPass`, `cx-common:version`, and `aas-semantics:semanticId` referring to the aspect model semantic ID of the submodel exposed by the asset.

#### Proof of Conformity

Data Provider: Review of Data Asset definitions in the EDC catalog to confirm presence and correct values of `dct:type`, `cx-common:version` and `aas-semantics:semanticId`.

### CX-0160-base-CAC-005 Data Consumer Retrieval via CX-0002 APIs

- type: MUST
- topic: APIs
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

The data consumer MUST use the Application Programming Interfaces specified in section 4 of this standard, conformant to CX-0002 Digital Twins in Catena-X, to retrieve battery passport information from the data provider.

#### Proof of Conformity

Data Consumer: Documentation and demonstration that battery passport data is retrieved from data providers via CX-0002 conformant Digital Twin Registry and submodel endpoints.

#### Additional Information

N/A

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
