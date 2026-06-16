# Conformity Assessment Criteria

## General Information

- cxId: CX-0001
- name: Participant Agent Registration
- capability: Participant Agent Registration
- version: 1.3
- release: CX-Titan

## Conformity Assessment Criteria

### CX-0001-CAC-001

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

Registration, Section 2:

The Core Service Provider B must provide a registration API for participant agents

#### Proof of Conformity

Run a request on the API and ensure that the participant agent is retrievable by the EDC discovery API
(see CX-0001-CAC-002). The latter check is sufficient to prove section 3 about that every registered participant
agent is offered via the API as well.

#### Additional Information

Relevant for role: Core Service Provider B

### CX-0001-CAC-002

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

SD Document Generation and Storage, Section 2:

The Core Service Provider B creates a GAIA-X compliant SD document, gets a compliance issue from a Clearing House and stores the document in the corresponding store

#### Proof of Conformity

After execution of CX-0001-CAC-001, the corresponding SD document is in the right state and stored in the SD-Hub.

#### Additional Information

Relevant for role: Core Service Provider B

### CX-0001-CAC-003

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

EDC Discovery API, Section 3 (Deprecated):

The Core Service Provider B has to provide an EDC Discovery endpoint as described in section 3.

#### Proof of Conformity

Execute several requests towards the provided API, that ensure, that the conditions
specified in 3.1, 3.2 and 3.4 are ensured.

#### Additional Information

Relevant for role: Core Service Provider B
