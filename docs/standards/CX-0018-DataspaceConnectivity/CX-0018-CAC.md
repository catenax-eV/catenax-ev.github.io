# Conformity Assessment Criteria

## General Information

- cxId: CX-0018
- name: Dataspace Connectivity
- capability: Dataspace Connectivity
- version: 4.2
- release: CX-Titan

## Conformity Assessment Criteria

### CX-0018-CAC-001

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

Section 2.1:
The participant agent MUST support DSP version 2025-1

#### Proof of Conformity

Proof of a successful execution of the DSP TCK 1.0.0 or a later bugfix version with DIDs as participant identifier.
Note: At the point of writing these CACs, the TCK is available as RC6 only. Until the final 1.0.0 version is released,
one of the latest two RCs or after the release only released versions of the TCK 1.0 are allowed to be used.

- [DSP TCK](https://github.com/eclipse-dataspacetck/dsp-tck/releases/tag/v1.0.0-RC6)
- [Reference Implementation](https://github.com/eclipse-tractusx/tractusx-edc/tree/main/edc-tests/e2e/dsp-compatibility-tests)

#### Additional Information

Relevant for role: Enablement Service Provider

### CX-0018-CAC-002

- type: SHOULD
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

Section 2.2.1:

Support of HTTP-Pull transfer type

The requirement becomes a MUST, if the transfer type is offered by the to-be-certified stack.

#### Proof of Conformity

- Use an Eclipse Tractus-X reference implementation connector
- Run a full cycle for the connector under test in both roles (provider and consumer)
  - Setup a corresponding contract definition
  - Catalog Request
  - Contract Negotiation
  - Transfer Process
  - Initiate Transfer

A successful interaction is proof for the correctness of the setup

#### Additional Information

Relevant for role: Enablement Service Provider

### CX-0018-CAC-003

- type: SHOULD
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

Section 2.2.2:

Support of AmazonS3-Push transfer type

The requirement becomes a MUST, if the transfer type is offered by the to-be-certified stack.

#### Proof of Conformity

- Use an Eclipse Tractus-X reference implementation connector
- Run a full cycle for the connector under test in both roles (provider and consumer)
  - Setup a corresponding contract definition
  - Catalog Request
  - Contract Negotiation
  - Transfer Process
  - Initiate Transfer

A successful interaction is proof for the correctness of the setup

#### Additional Information

Relevant for role: Enablement Service Provider

### CX-0018-CAC-004

- type: SHOULD
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

Section 2.2.3:

Support of AzureStorage-Push transfer type

The requirement becomes a MUST, if the transfer type is offered by the to-be-certified stack.

#### Proof of Conformity

- Use an Eclipse Tractus-X reference implementation connector
- Run a full cycle for the connector under test in both roles (provider and consumer)
  - Setup a corresponding contract definition
  - Catalog Request
  - Contract Negotiation
  - Transfer Process
  - Initiate Transfer

A successful interaction is proof for the correctness of the setup

#### Additional Information

Relevant for role: Enablement Service Provider

### CX-0018-CAC-005

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

Section 2.3:

The participant agent MUST support DCP 1.0

#### Proof of Conformity

Proof of a successful execution of the DSP TCK 1.0.0 with DIDs as participant identifier.
Note: At the point of writing these CACs, the TCK is available as RC6 only. Until the final 1.0.0 version is released,
one of the latest two RCs or after the release only released versions of the TCK 1.0 are allowed to be used.

- [DCP TCK](https://github.com/eclipse-dataspacetck/dcp-tck/releases/tag/v1.0.0-RC6)
- [Reference Implementation](https://github.com/eclipse-tractusx/tractusx-edc/tree/main/edc-tests/e2e/dcp-tck-tests)

#### Additional Information

Relevant for role: Enablement Service Provider

### CX-0018-CAC-006

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

Section 2.3/2.4:

Correct handling of Catena-X credentials

#### Proof of Conformity

- Use an Eclipse Tractus-X reference implementation connector
- Run a cycle for the connector under test in both roles (provider and connector) intercepting the STS token
  - Setup a corresponding contract definition with all relevant credential related policies in place
  - Catalog Request
  - Contract Negotiation
  - Transfer Process

Check that the STS token contains the expected credential scopes

#### Additional Information

Relevant for role: Enablement Service Provider

### CX-0018-CAC-007

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

Section 2.5

Correct properties handling

#### Proof of Conformity

- Use an Eclipse Tractus-X reference implementation connector
- Run a cycle for the connector under test as provider
  - Setup a corresponding contract definition using CX-0002 as source for the contract definition details
  - Catalog Request

Observe that the datasets in the catalog contains the required information according to CX-0002 for the required
contract definitions.

#### Additional Information

Relevant for role: Enablement Service Provider

### CX-0018-CAC-008

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

Section 2.6

Participant Agent Management

#### Proof of Conformity

Check for a full company setup (wallet and connector-under-test) in a test environment:

- Resolve the DID Document of the test company
- Verify that the service section of the DID document retrievable via the test companies DID contains a service
  entry for each operated connector.

#### Additional Information

Relevant for role: Enablement Service Provider

### CX-0018-CAC-009

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

Section 2.7

Protocol Version Handling

#### Proof of Conformity

Call the version metadata endpoint of a connector under test

Check that entries for the current protocol version 2025-1 and for the compatibility version 0.8 exist, ensure, that
when resolving the complete path, the corresponding DSP defined endpoints are available below the created path.

#### Additional Information

Relevant for role: Enablement Service Provider
