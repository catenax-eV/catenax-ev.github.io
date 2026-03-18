# Conformity Assessment Criteria

## General Information

- cxId: CX-XXXX
- name: Material Accounting
- capability: Material Accounting
- version: 1.0.0
- release: CX-Titan

### CX-XXXX-CAC-001 Digital Twin Logic

- type: MUST
- topic: Logics and Semantics
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

A digital twin conformant with [CX-0002](https://catenax-ev.github.io/docs/next/standards/CX-0002-DigitalTwinsInCatenaX) MUST be created for the processed assets in case of exchanging material accounting data within Catena-X, conformant with chapter 2.1.4, chapter 3 and chapter 4.1.2, and providing the Batch ID. All processed goods MUST be connected between the individual existing digital twins of them (e.g. partInstance) and the digital twin containing one or more aspect models specified in chapter 3.

#### Proof of Conformity

Data Provider: AAS ID (used as a digital twin ID)

#### Additional Information

N/A

### CX-XXXX-CAC-002 Technical Requirements and Normative Standards

- type: MUST
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

The normative standards MUST be followed and applied, notably [CX-0001](https://catenax-ev.github.io/docs/next/standards/CX-0001-ParticipantAgentRegistration), [CX-0002](https://catenax-ev.github.io/docs/next/standards/CX-0002-DigitalTwinsInCatenaX), [CX-0003](https://catenax-ev.github.io/docs/next/standards/CX-0003-SAMMSemanticAspectMetaModel), [CX-0018](https://catenax-ev.github.io/docs/standards/CX-0018-DataspaceConnectivity), [CX-0127](https://catenax-ev.github.io/docs/Jupiter/standards/CX-0127-IndustryCorePartInstance) and [CX-0152](https://catenax-ev.github.io/docs/next/standards/CX-0152-PolicyConstrainsForDataExchange). This also applies for aspect model data transferred via aspect models specified in chapter 3.

#### Proof of Conformity

N/A

#### Additional Information

N/A

### CX-XXXX-CAC-003 Usage Policy

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

Connector Assets for Material Accounting MUST contain a usage policy conformant with the normative references and all subsections of chapter 2.1, and contain the usage purpose 'cx.materialaccounting.base:1’.

#### Proof of Conformity

N/A

#### Additional Information

Policies

### CX-XXXX-CAC-004 Aspect Model *VehicleInformation*

- type: MUST
- topic: Semantics, Logics
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

All paricipants MUST implement the aspect model *VehicleInformation* if applicable for their respective role and be able to request, consume and provide material accounting information, compliant with the license of the semantic model. Data on this aspect model MUST be conformant with the semantic model. The JSON Payloads of data providers MUST be conformant to the JSON Schemas as specified in chapter 3.1. The unique identifier of the model MUST be used to define the semantics and the meaning of the data being transferred. Business applications using the semantic model MUST consume this data conforming to the semantic model. Data MUST be consistent with other data exchanged and updated whenever changes occur.

#### Proof of Conformity

N/A

#### Additional Information

N/A

### CX-XXXX-CAC-005 Aspect Model *WasteCode*

- type: MUST
- topic: Semantics, Logics
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

All paricipants MUST implement the aspect model *WasteCode* if applicable for their respective role and be able to request, consume and provide material accounting information, compliant with the license of the semantic model. Data on this aspect model MUST be conformant with the semantic model. The JSON Payloads of data providers MUST be conformant to the JSON Schemas as specified in chapter 3.2. The unique identifier of the model MUST be used to define the semantics and the meaning of the data being transferred. Business applications using the semantic model MUST consume this data conforming to the semantic model. Data MUST be consistent with other data exchanged and updated whenever changes occur.

#### Proof of Conformity

Chapter 3.2.7 defines mandatory data attributes for specific actors as well as eligible values for specific data attributes which are required for conformance.

#### Additional Information

N/A

### CX-XXXX-CAC-006 Aspect Model *RecyclingBatch*

- type: MUST
- topic: Semantics, Logics
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

All paricipants MUST implement the aspect model *RecyclingBatch* if applicable for their respective role and be able to request, consume and provide material accounting information, compliant with the license of the semantic model. Data on this aspect model MUST be conformant with the semantic model. The JSON Payloads of data providers MUST be conformant to the JSON Schemas as specified in chapter 3.3. The unique identifier of the model MUST be used to define the semantics and the meaning of the data being transferred. Business applications using the semantic model MUST consume this data conforming to the semantic model. Data MUST be consistent with other data exchanged and updated whenever changes occur.

#### Proof of Conformity

N/A

#### Additional Information

N/A

### CX-XXXX-CAC-007 Aspect Model *Material*

- type: MUST
- topic: Semantics, Logics
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

All paricipants MUST implement the aspect model *Material* if applicable for their respective role and be able to request, consume and provide material accounting information, compliant with the license of the semantic model. Data on this aspect model MUST be conformant with the semantic model. The JSON Payloads of data providers MUST be conformant to the JSON Schemas as specified in chapter 3.4. The unique identifier of the model MUST be used to define the semantics and the meaning of the data being transferred. Business applications using the semantic model MUST consume this data conforming to the semantic model. Data MUST be consistent with other data exchanged and updated whenever changes occur.

#### Proof of Conformity

Chapter 3.4.7 defines eligible values for specific data attributes which are required for conformance.

### CX-XXXX-CAC-008 Aspect Model *RecyclingInformation*

- type: MUST
- topic: Semantics, Logics
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

All paricipants MUST implement the aspect model *RecyclingInformation* if applicable for their respective role and be able to request, consume and provide material accounting information, compliant with the license of the semantic model. Data on this aspect model MUST be conformant with the semantic model. The JSON Payloads of data providers MUST be conformant to the JSON Schemas as specified in chapter 3.5. The unique identifier of the model MUST be used to define the semantics and the meaning of the data being transferred. Business applications using the semantic model MUST consume this data conforming to the semantic model. Data MUST be consistent with other data exchanged and updated whenever changes occur.

#### Proof of Conformity

N/A

#### Additional Information

N/A

### CX-XXXX-CAC-009 Aspect Model *Composition*

- type: MUST
- topic: Semantics, Logics
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

All paricipants MUST implement the aspect model *Composition* if applicable for their respective role and be able to request, consume and provide material accounting information, compliant with the license of the semantic model. Data on this aspect model MUST be conformant with the semantic model. The JSON Payloads of data providers MUST be conformant to the JSON Schemas as specified in chapter 3.6. The unique identifier of the model MUST be used to define the semantics and the meaning of the data being transferred. Business applications using the semantic model MUST consume this data conforming to the semantic model. Data MUST be consistent with other data exchanged and updated whenever changes occur.

#### Proof of Conformity

Chapter 3.6.7 defines mandatory data attributes for specific actors as well as eligible values for specific data attributes which are required for conformance.

#### Additional Information

N/A

### CX-XXXX-CAC-010 Aspect Model *SerialPart* of CX-0127 Industry Core Part Instance

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

Actors who are identified or identify themselves as a Dismantling Facility / Authorized Treatment Facility or as a Shredding Facility MUST apply the *SerialPart* aspect model and provide data on the included mandatory data attributes as specified in [CX-0127](https://catenax-ev.github.io/docs/Jupiter/standards/CX-0127-IndustryCorePartInstance).

#### Proof of Conformity

N/A

#### Additional Information

N/A

### CX-XXXX-CAC-011 Aspect Model *SingleLevelBomAsBuilt* of CX-0127 Industry Core Part Instance

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

Actors who are identified or identify themselves as a Dismantling Facility / Authorized Treatment Facility or as a Shredding Facility MUST apply the *SingleLevelBomAsBuilt* aspect model and provide data on the included mandatory data attributes as specified in [CX-0127](https://catenax-ev.github.io/docs/Jupiter/standards/CX-0127-IndustryCorePartInstance).

#### Proof of Conformity

N/A

#### Additional Information

N/A

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
