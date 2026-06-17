<!-- For the final PR, please remove all comments of this template (including this) -->
<!-- Please do not change the property names, only their values -->

# Conformity Assessment Criteria

## General Information

- cxId: CX-0003
- name: SAMM Aspect Meta Model
- capability: CAT/Semantic
- version: 1.3.0
- release: CX-Saturn

## Conformity Assessment Criteria

### CX-0001-CAC-001

- type: MUST
- topic: Policy
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
  - [x] Procedures

Aspect Models with the namespace `urn:samm:io.catenax.` MUST be maintained and released in Eclipse Tractus-X: [SLDT-Semantic-Models](https://github.com/eclipse-tractusx/sldt-semantic-models).

### CX-0001-CAC-002

- type: MUST
- topic: Policy
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
  - [x] Procedures

For joint modelling activities with [IDTA](https://industrialdigitaltwin.org/) the Aspect Models MUST be maintained and released in [admin-shell-io/smt-semantic-models](https://github.com/admin-shell-io/smt-semantic-models).

### CX-0001-CAC-003

- type: MUST
- topic: Policy
- automisable: false
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [x] Procedures

Every semantic model used in any of the Catena-X Standards **MUST** have a unique identifier conformant to the meta model identifiers definition in [SAMM](./../CX-0002-DigitalTwinsInCatenaX#2-semantic-aspect-meta-model-samm).
For the semantic models developed in the scope of Catena-X the unique identifier **MUST** start with either

```
urn:samm:io.catenax.
```

or

```
urn:samm.io.admin-shell.idta.batterypass.
```

### CX-0001-CAC-004

- type: MUST
- topic: Policy
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
  - [x] Procedures

Every Aspect Model in
[Tractus-X - SLDT Semantic Models](https://github.com/eclipse-tractusx/sldt-semantic-models) that has the
status "released" **MUST** be validated without errors
against the Semantic Aspect Meta Model.

For the current version of the
Semantic Aspect Meta Model under consideration see CX-0003, [normative references](./../CX-0002-DigitalTwinsInCatenaX#31-normative-references).

For the currently used version of the Validator see information in
[Readme](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/README.md).
Newer versions of the validator can be used but need an explicit
decision and -- if needed -- a migration path of all existing and
released Aspect Models to do so.

### CX-0001-CAC-005

- type: MUST
- topic: Policy
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
  - [x] Procedures

The [Catena-X Governance Process for the Creation and Standardization of Semantic Models](https://catenax-ev.github.io/modeling-governance) for new, updated or deprecated Aspect Models **MUST** be followed.

### CX-0001-CAC-006

- type: MUST
- topic: Policy
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

Every aspect of a digital twin registered in a digital twin registry
(see [CX-0002](./../CX-0002-DigitalTwinsInCatenaX)) accessible in the Catena-X data space **MUST** have a
semantic description (semantic ID) that is conformant to the unique aspect
model ID associated to it (see chapter [Creation and Maintenance](./../CX-0002-DigitalTwinsInCatenaX#23-creation-and-maintenance)).

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
