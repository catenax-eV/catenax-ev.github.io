# Conformity Assessment Criteria

## General Information

- cxId: CX-0167
- name: BPN DID Resolution
- capability: BPN DID Resolution
- version: 1.0
- release: CX-Neptune

## Conformity Assessment Criteria

### CX-0167-CAC-001

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

BDRS Directory API:

The Core Service Provider B must offer a service that implements the BDRS Directory API.

#### Proof of Conformity

Run a request on the API and ensure that the returned list of mappings is consistent with the onboarded dataspace
participants. The request must follow the guidelines concerning authentication and authorization as specified.

#### Additional Information

Relevant for role: Core Service Provider B

### CX-0167-CAC-002

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

BDRS Directory API:

The Core Service Provider B must prevent access to the information for non-members.

#### Proof of Conformity

Run a series of requests on the API with an incorrect token:

- A correct VP, but with an expired VC
- A correct VP, but with a wrong membership (non-Catena-X)
- A correct VP, but with a revoked VC
- A correct VP, but not signed by the trusted issuer
- An incorrectly signed VP
- No VP presented

For all cases, access has to be denied

#### Additional Information

Relevant for role: Core Service Provider B
