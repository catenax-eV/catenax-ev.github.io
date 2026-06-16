# Conformity Assessment Criteria

## General Information

- cxId: CX-0152
- name: Policy Constraints for Data Exchange
- capability: Policy
- version: 1.1.0
- release: CX-Neptun Preview

## Conformity Assessment Criteria

### CX-0152-CAC-001

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

#### Requirement

Data Provider and Data Consumer MUST NOT include Constraints that are not referenced in this [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json) in their Data Offers and MUST only use operators and rightOperands assigned to the respective leftOperands.

#### Proof of Conformity

Data Provider and Data Consumer: Review of Data Offers to confirm that only Constraints with leftOperands, operators, and rightOperands are used that are referenced in this [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json).

#### Additional Information

Relevant for role: Data Provider, Data Consumer
Data Provider and Data Consumer can define what Constraints must be adhered by both parties by assigning the respective Constraints to the Usage Policy of their Data Offer.

### CX-0152-CAC-002

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

Business Application Providers and Enablement Service Providers MUST support all Constraints that are referenced in this [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json).

#### Proof of Conformity

Business Application Providers, Enablement Service Providers: Documentation and demonstration that the application supports all Constraints referenced in this [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json).

#### Additional Information

Relevant for role: Business Application Providers, Enablement Service Providers

### CX-0152-CAC-003

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

#### Requirement

In the event a policy contains more than 1 Constraint, Data Providers and Data Consumers MUST chain Constraints via odrl:and.

#### Proof of Conformity

Data Provider and Data Consumer: Review of Data Offers to confirm that multiple Constraints are chained using odrl:and.

#### Additional Information

Relevant for role: Data Provider, Data Consumer

### CX-0152-CAC-004

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

The validation for the rightOperands of the MembershipConstraint MUST be done via the MembershipCredential.

#### Proof of Conformity

Business Application Provider, Enablement Service Provider: Documentation and demonstration confirming that validation of MembershipConstraint rightOperands is performed via the MembershipCredential.

#### Additional Information

Relevant for role: Business Application Provider, Enablement Service Provider

### CX-0152-CAC-005

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

The validation for the rightOperand of the BusinessPartnerNumber and of the BPNLs contained in the BusinessPartnerGroup MUST be done via the MembershipCredential or the BpnCredential.

#### Proof of Conformity

Business Application Provider, Enablement Service Provider: Documentation and demonstration confirming that validation of BusinessPartnerNumber and BusinessPartnerGroup rightOperands is performed via the MembershipCredential or BpnCredential.

#### Additional Information

Relevant for role: Business Application Provider, Enablement Service Provider

### CX-0152-CAC-006

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

The validation for the rightOperand of the FrameworkAgreementConstraint MUST be done via the DataExchangeGovernanceCredential.

#### Proof of Conformity

Business Application Provider, Enablement Service Provider: Documentation and demonstration confirming that validation of FrameworkAgreementConstraint rightOperands is performed via the DataExchangeGovernanceCredential.

#### Additional Information

Relevant for role: Business Application Provider, Enablement Service Provider

### CX-0152-CAC-007

- type: SHOULD
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

The validation for the rightOperands of all Constraints not named in CX-0152-CAC-006, CX-0152-007 or CX-0152-008 SHOULD be done based on this [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json).

#### Proof of Conformity

Business Application Provider/Enablement Service Provider: Documentation and demonstration confirming that validation of rightOperands for Constraints not named in CX-0152-CAC-006, CX-0152-007 or CX-0152-008 follows this [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json).

#### Additional Information

Relevant for role: Application Provider, Enablement Service Provider

### CX-0152-CAC-008

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

#### Requirement

To clearly identify the relevant Catena-X Policy Schema, every policy (and their subclasses) MUST use the ODRL 'profile' property with an IRI referring to the Catena-X Policy Schema as defined in ODRL policy. The current version is: [https://w3id.org/catenax/2025/9/policy/](https://w3id.org/catenax/2025/9/policy/).

#### Proof of Conformity

Data Provider and Data Consumer: Review of policies to confirm that the ODRL 'profile' property is set to the correct Catena-X Policy Schema IRI.

#### Additional Information

Relevant for role: Data Provider, Data Consumer

### CX-0152-CAC-009

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

#### Requirement

In the event rightOperands are mapped to Verifiable Credentials, Data Providers and Data Consumers MUST perform access control checks based on Catena-X Verifiable Credentials on their Data Offers.

#### Proof of Conformity

Data Provider and Data Consumer: Technical review confirming that access control checks based on Catena-X Verifiable Credentials are enforced on Data Offers.

#### Additional Information

Relevant for role: Data Provider, Data Consumer
Data Provider and Data Consumer can define what Constraints must be verified by assigning the respective Constraints to the Access Policy of their data offer.

### CX-0152-CAC-010

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

#### Requirement

Data Provider and Data Consumer MUST define the Access Policy in accordance with the rules defined in this [Catena-X Policy Schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json). Access Policies "MUST" have the "action": "access" as parameter of their permission section.

#### Proof of Conformity

Data Provider and Data Consumer: Review of Access Policies to confirm compliance with the [Catena-X Policy Schema](https://w3id.org/catenax/2025/9/policy/schema/policy-schema.json).

#### Additional Information

Relevant for role: Data Provider, Data Consumer

### CX-0152-CAC-011

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

The [Catena-X Policy Schema](https://w3id.org/catenax/2025/9/policy/schema/policy-schema.json) MUST be followed when providing services or apps for data sharing/consuming.

#### Proof of Conformity

Business Application Provider/Enablement Service Provider: Documentation and demonstration that services or apps for data sharing/consuming support the [Catena-X Policy Schema](https://w3id.org/catenax/2025/9/policy/schema/policy-schema.json).

#### Additional Information

Relevant for role: Business Application Provider, Enablement Service Provider

### CX-0152-CAC-012

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

#### Requirement

Data Provider and Data Consumer MUST define the Usage Policy in accordance with the rules for the Usage Policy and the referenced Constraints defined and referenced in the [Catena-X Policy Schema](https://w3id.org/catenax/2025/9/policy/schema/policy-schema.json). Usage Policies "MUST" have the "action": "use" as parameter of their permission, prohibition, and obligation section.

#### Proof of Conformity

Data Provider and Data Consumer: Review of Usage Policies to confirm compliance with the Catena-X Policy Schema [Catena-X Policy Schema](https://w3id.org/catenax/2025/9/policy/schema/policy-schema.json) rules and referenced Constraints.

#### Additional Information

Relevant for role: Data Provider, Data Consumer

### CX-0152-CAC-013

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

#### Requirement

Each Usage Policy of a Data Offer visible in the Data Provider's connector catalog MUST include at least the following 2 Constraints (odrl:Constraint):

- the FrameworkAgreementConstraint and
- one UsagePurposeConstraint.

#### Proof of Conformity

Data Provider: Review of Usage Policies visible in the Catalog to confirm the presence of both a FrameworkAgreementConstraint and a UsagePurposeConstraint.

#### Additional Information

Relevant for role: Data Provider, Data Consumer
