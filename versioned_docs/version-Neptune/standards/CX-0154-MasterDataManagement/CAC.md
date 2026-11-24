# Conformity Assessment Criteria

## General Information

- cxId: CX-0154
- name: Digital Master Data
- capability: Engineering
- version: 1.1.0
- release: CX-Neptune

## Conformity Assessment Criteria

### CX-0154-CAC-001

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

### CX-0154-CAC-002

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

Digital Engineering Master Data MUST be attached to a Digital Twin describe either as  ``PartType`` or ``PartRole``.

#### Proof of Conformity

Customer and Supplier: Identify your twin as ``PartRole`` or ``PartType``. Run a process showing when a PartType and when a Part Role is created

#### Additional Information

You MUST use them as follows:

- If there is already a specific CatalogPart existing to which the Master Data is attached ``PartType`` MUST be used. This should be the default case. An example is the specification of a specific gearbox configuration.
- If the master data addressed with this standard do not address a specific catalog part but only an intended realization, the Digital Twin MUST be described as ``PartRole``. An example is the master data regarding the purpose of an intended realization (e.g. as basic data).

### CX-0154-CAC-003

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

Digital Engineering Master Data should be validated against JSON payload and should comply with JSON schema.

#### Proof of Conformity

Customer and Supplier: Validate the json payload against the schema defined in the semantic hub. A process for checking against this data should be shown.

#### Additional Information

N/A

### CX-0154-CAC-004

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

The usage purpose cx.engineering.base:1 MUST be registered for data exchange in the use case.

#### Proof of Conformity

Customer and Supplier: Validate the json payload against the schema defined in the semantic hub.

#### Additional Information

N/A

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
