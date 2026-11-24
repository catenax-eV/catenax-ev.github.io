<!-- For the final PR, please remove all comments of this template (including this) -->
<!-- Please do not change the property names, only their values -->

# Conformity Assessment Criteria

## General Information

- cxId: CX-0155
- name: Requirements Engineering
- capability: Engineering
- version: 2.0.0
- release: CX-Neptune

## Conformity Assessment Criteria

### CX-0155-CAC-001

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

Policies within Catena-X MUST be aligned with the example usage policy in the CX ODRL Profile and with all subsections of [2.3 Additional Requirements](./CX-0155-RequirementsEngineering.md#23-additional-requirements).

#### Proof of Conformity

Customer and Supplier: Contract Definitions, Policies and Assets used by the EDC for the respective APIs.

#### Information

Policies

### CX-0155-CAC-002

- type: MUST<!-- Select between MUST or SHOULD -->
- topic: Semantics<!-- Select between Semantics, APIs, Logics, Policy -->
- automisable: true <!-- Select between true or false -->
- assessment:  <!-- please checkmark accordingly by adding an x between the brackets, e.g. [x] -->
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

Requirements Engineering data MUST be attached to a Digital Twin describe either as  ``PartType`` or ``PartRole``.

#### Proof of Conformity

Customer and Supplier: Identify your twin as ``PartRole`` or ``PartType``. Run a process showing when a PartType and when a Part Role is created

#### Additional Information

You MUST use them as follows:

- If there is already a specific CatalogPart considered which needs to be further defined in the Requirements Engineering process ``PartType`` MUST be used. This should be the default case. An example is the specification of a specific gearbox configuration.
- If the requirements addressed with this standard do not address a specific catalog part but only an intended realization, the Digital Twin MUST be described as ``PartRole``. An example is the specification of an overall entertainment system.

### CX-0155-CAC-003 <!-- CAC-ID, please update the ID accordingly -->
<!-- Repeat this sub-section for each CAC -->
<!-- For details please consult the guidelines -->

- type: SHOULD<!-- Select between MUST or SHOULD -->
- topic: Semantics<!-- Select between Semantics, APIs, Logics, Policy -->
- automisable: true <!-- Select between true or false -->
- assessment:  <!-- please checkmark accordingly by adding an x between the brackets, e.g. [x] -->
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

Requirements Engineering data should be validated against JSON payload and should comply with JSON schema.

#### Proof of Conformity

Customer and Supplier: Validate the json payload against the schema defined in the semantic hub. A process for checking against this data should be shown.

#### Additional Information

N/A

### CX-0155-CAC-004 <!-- CAC-ID, please update the ID accordingly -->
<!-- Repeat this sub-section for each CAC -->
<!-- For details please consult the guidelines -->

- type: MUST<!-- Select between MUST or SHOULD -->
- topic: Policy<!-- Select between Semantics, APIs, Logics, Policy -->
- automisable: true <!-- Select between true or false -->
- assessment:  <!-- please checkmark accordingly by adding an x between the brackets, e.g. [x] -->
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
