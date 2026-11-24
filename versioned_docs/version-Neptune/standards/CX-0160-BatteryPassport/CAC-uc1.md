# Conformity Assessment Criteria

## General Information

- cxId: CX-0160
- name: Near-complete Battery Passport Data
- capability: Battery Passport Data Management
- version: 1.0.0
- release: CX-neptune

## Conformity Assessment Criteria

### CX-0160-1-CAC-001 Aspect Model "Digital Nameplate" (IDTA-02035-1)

- type: MUST
- topic: Semantics
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

The data provider MUST provide the aspect model "Digital Nameplate" in version `1.0.x` (e.g., `urn:samm:io.admin-shell.idta.batterypass.digital_nameplate:1.0.0#BatteryNameplate`) on `PartInstance` level for each battery instance, as specified in section 3.2.
The supplemental semantic IDs `https://admin-shell.io/idta/nameplate/3/0/Nameplate` and `urn:samm:io.admin-shell.idta.digital_nameplate:3.0.0` MUST also be added to the corresponding submodel descriptor registered in the Digital Twin Registry (not to the submodel payload).
The attribute `UniqueFacilityIdentifier` MUST be filled with a valid BPNS and the attribute `ManufacturerIdentifier` MUST be filled with a valid BPNL.
JSON payloads MUST conform to the JSON Schema generated from the aspect model.

#### Proof of Conformity

Data Provider: Review of submodel descriptors in the Digital Twin Registry to confirm the correct primary and supplemental semantic IDs, and review of submodel payloads to confirm conformance with the aspect model and its JSON Schema, including valid BPNS/BPNL values for `UniqueFacilityIdentifier` and `ManufacturerIdentifier`.

#### Additional Information

Provisioning level: `PartInstance`.

### CX-0160-1-CAC-002 Aspect Model "Handover Documentation" (IDTA-02035-2)

- type: MUST
- topic: Semantics
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

The data provider MUST provide the aspect model "Handover Documentation" in version `1.0.x` (e.g., `urn:samm:io.admin-shell.idta.batterypass.handover_documentation:1.0.0#HandoverDocumentation`) on `PartType` level for each battery model, as specified in section 3.3.
JSON payloads MUST conform to the JSON Schema generated from the aspect model.

#### Proof of Conformity

Data Provider: Review of submodel descriptors and submodel payloads to confirm the correct semantic ID and conformance with the aspect model and its JSON Schema.

#### Additional Information

Provisioning level: `PartType`.
Instance-related documents may additionally be carried in this aspect.

### CX-0160-1-CAC-003 Aspect Model "Carbon Footprint for Battery Passport" (IDTA-02035-3)

- type: MUST
- topic: Semantics
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

The data provider MUST provide the aspect model "Carbon Footprint for Battery Passport" in version `1.0.x` (e.g., `urn:samm:io.admin-shell.idta.batterypass.carbon_footprint:1.0.0#CarbonFootprintBattery`) on `PartInstance` level for each battery instance, as specified in section 3.4, as soon as the delegated act on the PCF calculation methodology for batteries is available.
JSON payloads MUST conform to the JSON Schema generated from the aspect model.

#### Proof of Conformity

Data Provider: Review of submodel descriptors and submodel payloads to confirm the correct semantic ID and conformance with the aspect model and its JSON Schema.

#### Additional Information

Provisioning level: `PartInstance`.

### CX-0160-1-CAC-004 Aspect Model "Technical Data" (IDTA-02035-4)

- type: MUST
- topic: Semantics
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

The data provider MUST provide the aspect model "Technical Data" in version `1.0.x` (e.g., `urn:samm:io.admin-shell.idta.batterypass.technical_data:1.0.1#TechnicalData`) on `PartType` level for each battery model, as specified in section 3.5.
JSON payloads MUST conform to the JSON Schema generated from the aspect model.

#### Proof of Conformity

Data Provider: Review of submodel descriptors and submodel payloads to confirm the correct semantic ID and conformance with the aspect model and its JSON Schema.

#### Additional Information

Provisioning level: `PartType`.

### CX-0160-1-CAC-005 Aspect Model "Product Condition" (IDTA-02035-5)

- type: MUST
- topic: Semantics
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

The aspect model "Product Condition" in version `1.0.x` (e.g., `urn:samm:io.admin-shell.idta.batterypass.product_condition:1.0.1#ProductCondition`) MAY be provided on `PartInstance` level.
If provided, the submodel MUST use the semantic ID of the `1.0.x` version deployed and the JSON payload MUST conform to the JSON Schema generated from the aspect model, as specified in section 3.6.

#### Proof of Conformity

Data Provider: If the aspect is provided, review of submodel descriptors and submodel payloads to confirm the correct semantic ID and conformance with the aspect model and its JSON Schema.

#### Additional Information

This aspect model is OPTIONAL.

### CX-0160-1-CAC-006 Aspect Model "Material Composition" (IDTA-02035-6)

- type: MUST
- topic: Semantics
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

The data provider MUST provide the aspect model "Material Composition" in version `1.0.x` (e.g., `urn:samm:io.admin-shell.idta.batterypass.material_composition:1.0.1#MaterialComposition`) on `PartType` level for each battery model, as specified in section 3.7.
JSON payloads MUST conform to the JSON Schema generated from the aspect model.

#### Proof of Conformity

Data Provider: Review of submodel descriptors and submodel payloads to confirm the correct semantic ID and conformance with the aspect model and its JSON Schema.

#### Additional Information

Provisioning level: `PartType`.

### CX-0160-1-CAC-007 Aspect Model "Circularity" (IDTA-02035-7)

- type: MUST
- topic: Semantics
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

The data provider MUST provide the aspect model "Circularity" in version `1.0.x` (e.g., `urn:samm:io.admin-shell.idta.batterypass.circularity:1.0.1#Circularity`) on `PartType` level for each battery model, as specified in section 3.8.
JSON payloads MUST conform to the JSON Schema generated from the aspect model.

#### Proof of Conformity

Data Provider: Review of submodel descriptors and submodel payloads to confirm the correct semantic ID and conformance with the aspect model and its JSON Schema.

#### Additional Information

Provisioning level: `PartType`.

### CX-0160-1-CAC-008 Handling of Optional Aspect Model Data

- type: MUST
- topic: Logics
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

Attributes flagged as 'optional' in the aspect models specified in section 3 MAY be omitted by the data provider, unless they are required by DIN DKE SPEC 99100 or by other clauses of this standard.
If optional attributes are provided by the data provider, processing of the payload MUST NOT cause an error on the data consumer side.

#### Proof of Conformity

Data Consumer: Functional test or demonstration showing that payloads containing all permissible optional attributes are processed without error.

#### Additional Information

Reflects the rules in section 3 "Application of the Data Models".

### CX-0160-1-CAC-009 Single Entity Retrieval Process

- type: MUST
- topic: Logics
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

The data provider MUST implement the "Single Entity (1)" retrieval process as specified in section 5.1.3, conformant with CX-0002 and CX-0003, so that the data consumer can request the battery passport data of a single battery on demand.

#### Proof of Conformity

Data Provider: Documentation and demonstration that the single-entity retrieval process is implemented and that the battery passport data of a single battery can be retrieved on demand via CX-0002 conformant interfaces.

#### Additional Information

N/A

### CX-0160-1-CAC-010 Bulk Load Retrieval Process

- type: SHOULD
- topic: Logics
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

The data consumer SHOULD implement the "Bulk Load (2)" retrieval process as specified in section 5.1.3 to proactively query the data provider's Digital Twin Registry for newly available battery instance twins.
If implemented, the data consumer MUST use the `digitalTwinType` specific asset ID to filter for instance-level twins, and MAY additionally filter by `manufacturerPartId`.
The data provider SHOULD support querying battery information based on the time of creation of the digital twin using the `createdAfter` query parameter.

#### Proof of Conformity

Data Consumer: If implemented, documentation and demonstration that the bulk load process queries the data provider's Digital Twin Registry using the `digitalTwinType` filter and processes the returned shell descriptors and submodels via CX-0002 conformant interfaces.
Data Provider: Review of Digital Twin Registry to confirm support for the `createdAfter` query parameter.

#### Additional Information

Conditional requirement: the consumer-side MUST clause applies only if the data consumer implements the Bulk Load (2) process.

### CX-0160-1-CAC-011 Notification Emission

- type: SHOULD
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

The data provider SHOULD implement the "Notifications (3)" process as specified in section 4.2 and section 5.1.3 to inform the data consumer about newly available battery passport data.
If implemented, the notification payload MUST conform to the Catena-X Digital Twin Event Notification API standardized by CX-0151, and the data provider MUST emit events with `eventType` set to `CreateSubmodel` and `submodelSemanticId` set to the semantic ID of the "Digital Nameplate" submodel version `1.0.x` being provided (e.g., `urn:samm:io.admin-shell.idta.batterypass.digital_nameplate:1.0.0#BatteryNameplate`).

#### Proof of Conformity

Data Provider: If implemented, review of emitted notification payloads to confirm conformance with the CX-0151 Digital Twin Event Notification API and correct values for `eventType` and `submodelSemanticId`.

#### Additional Information

Conditional requirement: the MUST clauses apply only if the data provider implements the Notifications (3) process.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
