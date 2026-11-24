
# Conformity Assessment Criteria

## General Information

- cxId: CX-0002
- name: Digital Twins in Catena-X
- capability: CAT/Semantic
- version: 2.4.0
- release: CX-Saturn

## Conformity Assessment Criteria for Digital Twin Registry Solutions

> IMPORTANT: To support Digital Product Passports (DPP) Applications the specifications of the Asset Administration Shell Release 2026-01 should be supported as soon as they are published.
This is described in this version of CX-0002, V2.4.0.
However, in deviation to the requiremenets in CX-0002 v2.4.0 the certification still maps against the specifications of Asset Administration Shell Release 2025-01 (as described in CX-0002 V2.3.0).
This means, that for solution providers, data providers or data consumers already certified against CX-0002 V2.3.0 no new certification is needed.*

### CX-0002-CaC-1

- type: MUST
- topic: Policy
- automisable: false
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

A Digital Twin Registry solution MUST provide http/REST APIs conformant
to the openAPI specifications adopted in CX-0002.

In case the Digital Twin Registry solution already has a valid certificate of the
[Industrial Digital Twin Association](https://industrialdigitaltwin.org) (IDTA) including the
required service specification profiles the simplified certification process of Catena-X e.V. holds.

If there is no valid certificate available from the IDTA, Digital Twin Registry solution providers
MUST prove their conformity by providing:

- An openAPI specification of the implemented endpoints.
- Documentation that the implementation's API responses match to the response structure of the required API specifications in CX-0002.

### CX-0002-CaC-2

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
  - [ ] Procedures

A Digital Twin Registry Solution MUST include mechanisms that allow to ensure confidentiality and integrity of data, and compliance with antitrust laws.

### CX-0002-CaC-3

- type: SHOULD
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
  - [ ] Procedures

On default, the read access to Digital Twins SHOULD be enabled by Digital Twin Registry Solutions to data providers only.

## Conformity Assessment Criteria for Data Providers

### CX-0002-CaC-4 Self-assessment or Confirmation

- type: MUST
- topic: Policy
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

A data provider MUST either use a certified Digital Twin Registry Solution or fulfill CX-0002-CaC-1.

### CX-0002-CaC-5 Inspection

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
  - [ ] Procedures

The Digital Twin Registry service used by the data provider MUST be registered in the dataspace connector selected by the data provider.

### CX-0002-CaC-6 Observation

- type: MAY
- topic: Policy
- automisable: false
- assessment:
  - [ ] Inspection
  - [x] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

A data provider MAY create and register Digital Twins using the http/REST APIs conformant to the openAPI specification as defined in CX-0002.

### CX-0002-CaC-7 Inspection

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
  - [ ] Procedures

The data provider MUST offer the READ operations for Digital Twins and its Aspects conformant to
the specification in CX-0002.

The endpoints offered by the data provider MUST be made accessible to the dataspace
as specified in CX-0002 or other use case related standards.

### CX-0002-CaC-8 Self-assessment

- type: MUST
- topic: Policy
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

Appropriate usage policies conformant to standard CX-0152 and subsequent use-case-standards MUST be defined for accessing the Digital Twin Registry itself as well as for the Submodels.

### CX-0002-CaC-9 Self-assessment

- type: MUST
- topic: Policy
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

Data providers MUST comply with antitrust law, *i.e.*, competitively sensitive information (*e.g.* customer names, supplier names, prices, price models, internal knowhow, sales and/or purchasing strategies) MUST NOT be published via a DTR.

### CX-0002-CaC-10 Self-assessment

- type: SHOULD
- topic: Policy
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

The data provider SHOULD use the unique identifier of the standardized Aspect Model conformant to CX-0003 when registering a new Submodel endpoint to a DTR.

### CX-0002-CaC-11 Self-assessment

- type: SHOULD
- topic: Policy
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

A data provider SHOULD add specific asset IDs for each Digital Twin to enable discovery.
Other CX-standards may make more specific demands for Data Providers which specific asset IDs are to be added.

### CX-0002-CaC-12 Self-assessment

- type: SHOULD
- topic: Policy
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

A data provider SHOULD add information to available discovery services conformant to standard CX-0018, section 2.6 - if available - to enable data consumers to find the relevant DSP-endpoints and thus the Digital Twin Registry
the data consumer is interested in.

## Conformity Assessment Criteria for Data Consumers

### CX-0002-CaC-13 Self-assessment

- type: MAY
- topic: Policy
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

A data consumer, business application provider or enabling service
provider MAY lookup the endpoints of the Submodels relevant for the use
case using the http/REST APIs conformant to the openAPI specification as
defined in CX-0002.

### CX-0002-CaC-14 Self-assessment

- type: MAY
- topic: Policy
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

Since there are several Digital Twin Registries in the dataspace data
consumers, business application providers or enabling service providers
MAY first lookup the available Digital Twin Registry endpoints of the
relevant dataspace connectors using the corresponding standardized  discovery services for participant agents (see standard CX-0018, section  2.6).

### CX-0002-CaC-15 Self-assessment

- type: MAY
- topic: Policy
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

Additionally, data consumers MAY use standardized discovery services -
if available -, *e.g.*, to find a relevant dataspace connector for a specific company via its business partner number (BPN) (see standard CX-0053).

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
