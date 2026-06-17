---
tags:
  - CAT/ODRL
  - CAT/Data Sovereignty
  - CAT/Policy
  - CAT/Constraint
---

# CX-0152 Policy Constraints For Data Exchange v1.1.0

## ABSTRACT

This document specifies the policies and the policy constraints used in data offers and data exchange agreements between participants in the Catena-X data ecosystem. The aim is to ensure interoperability and data sovereignty at the same time.

## 1. INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following audience:

- Core Service Provider
- Enablement Service Provider
- Application Service Provider
- Data Provider and Consumer

This document focuses on the policies as part of the Data Exchange Contracts concluded via Registered Connectors between Data Provider and Data Consumer in the Catena-X data space. As such it refines the regulatory framework on the [Data Offering and Usage Level](https://catenax-ev.github.io/docs/regulatory-framework/10000ft/data-exchange-contracts).

Not in scope are communication requirements for data exchange between participants in the Catena-X data ecosystem. They are defined in a separate standard: CX-0018 Dataspace Connectivity v4.2.1.

You can find all standards in the [standard library](https://catenax-ev.github.io/docs/standards/overview).

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

Each Data Provider (DP) and Data Consumer (DC) with a BPN-L in the Catena-X data space has at least one dedicated Registered Connector (RC), either self-managed or hosted. The RC facilitates the conclusion of Agreements and the subsequent exchange of data.

The RC is one of the enablement services, which are intended to enable participation in the Catena-X ecosystem. The requirements to the RC are described in CX-0018 Dataspace Connectivity v4.2.1.

Any data exchange contract (Agreement) between a Data Provider and a Data Consumer requires a Data Offer and the other party's acceptance. Details how to come from a Data Offer to a concluded Agreement are described on the [Catena-X e.V. website in section Details: Contract Formation](https://catenax-ev.github.io/docs/regulatory-framework/10000ft/data-exchange-contracts#3-details-contract-formation).

A Data Offer consists of 1 dataset, 1 access policy and 1 usage policy. After a Data Offer was accepted by the other party, an Agreement exists. The Agreement names the dataset as its subject and the usage policy as its terms. The access policy is described in section 2.2 and the usage policy is described in section 2.3.

So far, the Policies defined and published by the Catena-X association were only described in text and the contained Constraints in TTL. With the Dataspace Protocol JSON Schemas
gaining [normativity](https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-RC2/#schemas-contexts) in Release 2025-1, there is a clear extension point in place for data spaces to define their own profiles. The `Constraint` object is an essential extension point for the Dataspace Protocol. It is embedded in a variety of DSP-
messages that are foundational for the legally-binding contract negotiation between business partners in a data space. General rules for Constraints in the Catena-X data space are defined in section 2.1.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

If sections are marked as non-normative, all authoring guidelines, diagrams, examples, and notes in these sections are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in [BCP 14](https://datatracker.ietf.org/doc/html/bcp14), [RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119), [RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174) when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

### 1.4 TERMINOLOGY

> *This section is non-normative*

| Term | Description | Reference |
| ---- | ----------- | --------- |
| **Registered Connector** | A Registered Connector (short RC) facilitates the conclusion of Agreements and the subsequent exchange of data. Alternative terms are Connector (as in the reference implementation [Tractusx-edc](https://github.com/eclipse-tractusx/tractusx-edc)) or Participant Agent (as in the [Dataspace Protocol](https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol)) | [Data Exchange Governance](https://catenax-ev.github.io/docs/regulatory-framework/20000ft/data-exchange-governance) |
| **Data Offer** | A Data Offer is provided in the catalogue of the Data Provider or Data Consumer to be negotiated. The Data Offer references the dataset concerned, the access rules as Access Policy and the terms as Usage Policy. In the technical descriptions the Data Offer is referred to as Offer: see in [ODRL](https://w3id.org/dspace/2025/1/odrl-profile.jsonld) and in the [Dataspace Protocol](https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol) | [Data Exchange Governance](https://catenax-ev.github.io/docs/regulatory-framework/20000ft/data-exchange-governance) |
| **Agreement** | An Agreement between a Data Provider and a Data Consumer is a legally binding contract and requires a Data Offer and the other party's acceptance. An alternative term is Data Exchange Contract (as in [Contract Formation description](https://catenax-ev.github.io/docs/regulatory-framework/10000ft/data-exchange-contracts) ) | [ODRL](https://w3id.org/dspace/2025/1/odrl-profile.jsonld), [Dataspace Protocol](https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol) |
| **Dataset** | A Dataset describes the subject of the Data Offer or the concluded Agreement and refers to the data to be shared via the RC | [Dataspace Protocol](https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol) |
| **Constraint** | A Constraint defines one condition in the Data Offer or one condition as part of the terms in the concluded Agreement | [ODRL](https://w3id.org/dspace/2025/1/odrl-profile.jsonld), [Dataspace Protocol](https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol) |

## 2 POLICIES AND CONSTRAINTS

> *This section is normative*

This section uses the following prefixes as abbreviations for namespaces

- "odrl": "https://w3id.org/dspace/2025/1/odrl-profile.jsonld"
- "schema":"https://json-schema.org/draft/2019-09/schema"
- "dcat": "http://www.w3.org/ns/dcat#"

### 2.1 CONVENTIONS FOR CONSTRAINTS

#### SUPPORTED CONSTRAINTS

All Constraints (`odrl:Constraint`) that are supported by the Catena-X data space are specified in the [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json). This [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json) references all Constraints (`odrl:Constraint`) with leftOperands (`odrl:leftOperand`) and rightOperands (`odrl:rightOperand`).

Data Provider and Data Consumers **SHOULD** include in their data offers (`odrl:offer`) those Constraints (`odrl:Constraint`), which are referenced in this [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json) For every Constraint (`odrl:Constraint`) referenced in this [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json) the leftOperands (`odrl:leftOperand`), the allowed rightOperands (`odrl:rightOperand`) and the allowed operators (`odrl:operator`) are listed.

Data Provider and Data Consumer **MUST NOT** include Constraints (`odrl:Constraint`) that are not referenced in this [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json) into their Data Offers (`odrl:offer`) and **MUST** only use operators (`odrl:operator`) and rightOperands (`odrl:rightOperand`) assigned to the respective leftOperands (`odrl:leftOperand`). Application Providers **MUST** support all Constraints (`odrl:Constraint`), which are referenced in this [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json). In case an arbitrary rightOperand (`odrl:rightOperand`) limited only by the type is allowed, it is mentioned as well by defining only the type (`schema:type`) of the rightOperand (`odrl:rightOperand`) without defining a constant (`schema:const`). By this, Data Provider and Data Consumer may agree on individual purposes ("Individual Purposes") in addition to the predefined purposes (“Predefined Purposes").  Data Provider and Data Consumer must use the leftOperand (`odrl:leftOperand`) "UsagePurpose” when they refer to an Individual Purpose in the rightOperand (`odrl:rightOperand`). Data Provider and Data Consumer may refer to existing individual contracts or/and contract conditions by using the namespace “ContractReference” and indicate the contract number or another unique identifier known to both Participants as value in the rightOperand (`odrl:rightOperand`).

#### CHAINING CONSTRAINTS

In the event, a policy contains more than 1 Constraint (`odrl:Constraint`), Data Providers and Data Consumers **MUST** chain Constraints (`odrl:Constraint`) via `odrl:and`.

In the event, a policy contains only 1 Constraint (`odrl:Constraint`), the use of the operator `odrl:and` is **OPTIONAL**.  

#### VALIDATION MECHANISM OF CONSTRAINTS

The validation for the rightOperands (`odrl:rightOperand`) of the [MembershipConstraint](https://w3id.org/catenax/2025/9/policy/membership-constraint-schema.json) **MUST** be done via the MembershipCredential.

The validation for the rightOperand (`odrl:rightOperand`) of the [BusinessPartnerNumber](https://w3id.org/catenax/2025/9/policy/business-partner-number-constraint-schema.json) and of the BPNLs contained in the [BusinessPartnerGroup](https://w3id.org/catenax/2025/9/policy/business-partner-group-constraint-schema.json) **MUST** be done via the MembershipCredential or the BpnCredential.

The validation for the rightOperand (`odrl:rightOperand`) of the [FrameworkAgreementConstraint](https://w3id.org/catenax/2025/9/policy/framework-agreement-constraint-schema.json) **MUST** be done via the DataExchangeGovernanceCredential.

All 3 Catena-X specific Verifiable Credentials are described in detail in CX-0050 Catena-X Specific Credentials v2.2.1 ([see standard library](https://catenax-ev.github.io/docs/standards/overview)).

The validation mechanism done via the RC is described in CX-0018 Dataspace Connectivity v4.2.1, chapter Framework Agreement to Verifiable Credential ([see standard library](https://catenax-ev.github.io/docs/standards/overview)).

The validation for the rightOperands (`odrl:rightOperand`) of all other Constraints (`odrl:Constraint`) **SHOULD** be done based on the [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json).

#### Catena-X Policy Schema

To clearly identify the relevant Catena-X Policy Schema, every policy (and their subclasses) **MUST** use the ODRL ‘profile’ property with an IRI referring to the Catena-X Policy Schema as defined in [ODRL policy](https://www.w3.org/TR/odrl-model/#policy) The current version is: `https://w3id.org/catenax/2025/9/policy/`.

### 2.2 CONVENTIONS FOR ACCESS POLICIES

#### ACCESS CONTROL CHECKS

In the event, rightOperands (`odrl:rightOperand`) are mapped to Verifiable Credentials, Data Providers and Data Consumers **MUST** perform access control checks based on Catena-X Verifiable Credentials on their Data Offers (`odrl:offer`) as described in [Validation Mechanism of Constraints](#validation-mechanism-of-constraints) as a `dcat:Catalog` object of a Data Offer (`odrl:offer`) may expose information restricted by governance and regulation. By limiting access to certain data space participants, Data Provider maintains control over its anti-trust obligations when sharing certain data.

#### CONTAINED CONSTRAINTS AND THEIR VERIFICATION

Data Provider and Data Consumer can define what Constraints (`odrl:Constraint`) must be verified by assigning the respective Constraints (`odrl:Constraint`) to the Access Policy of their data offer (`odrl:offer`). Data Provider and Data Consumer **MUST** define the Access Policy in accordance to the rules defined in the [Catena-X Policy Schema](https://w3id.org/catenax/2025/9/policy/schema/policy-schema.json). Access Policies "MUST" have the "action": "access" as parameter of their permission section. The rules for the referenced Constraints are defined in chapter [2.1 Conventions for Constraints](#21-conventions-for-constraints). The [Catena-X Policy Schema](https://w3id.org/catenax/2025/9/policy/schema/policy-schema.json) **MUST** be followed when providing services or apps for data sharing/consuming.

### 2.3 CONVENTIONS FOR USAGE POLICIES

In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X data space has been outlined. A set of specific Constraints (`odrl:Constraint`) detail the conditions under which data may be accessed, shared, and used, ensuring compliance with legal standards. To make the conditions expressed in Constraints (`odrl:Constraint`) binding for both parties, they are listed in the Usage Policy.

#### GENERAL GUIDANCE FOR USAGE POLICIES

Data Provider and Data Consumer can define what Constraints (`odrl:Constraint`) must be adhered by both parties by assigning the respective Constraints (`odrl:Constraint`) to the Usage Policy of their Data Offer (`odrl:offer`). Data Provider and Data Consumer **MUST** define the Usage Policy in accordance to the rules for the Usage Policy and the Constraints (`odrl:Constraint`) referenced in the [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json). Usage Policies "MUST" have the "action": "use" as parameter of their permission, prohibition, and obligation section. The rules for the referenced Constraints (`odrl:Constraint`) are defined in the chapter [2.1 Conventions for Constraints](#21-conventions-for-constraints).

The [Catena-X Policy Schema](https://w3id.org/catenax/2025/9/policy/schema/policy-schema.json) **MUST** be followed when providing services or apps for data sharing/consuming.

#### CONTAINED CONSTRAINTS

Each Usage Policy of a Data Offer (`odrl:offer`) visible in Data Provider's `dcat:Catalog` **MUST** include at least the following 2 Constraints (`odrl:Constraint)

- the [FrameworkAgreementConstraint](https://w3id.org/catenax/2025/9/policy/framework-agreement-constraint-schema.json) and
- one [UsagePurposeConstraint](https://w3id.org/catenax/2025/9/policy/usage-purpose-constraint-schema.json).

Both parties Data Provider and Data Consumer are free to reference an existing, individual contract as a basis of or an addition to the Agreement concluded via the RC. This can be a frame contract or a very specific contract. A Usage Policy **MAY** include the following Constraint (`odrl:Constraint) to reference such a contract:
  
- [ContractReferenceConstraint](https://w3id.org/catenax/2025/9/policy/contract-reference-constraint-schema.json).

#### LEGAL MEANING OF CONSTRAINTS

For a comprehensive understanding of the permissions, prohibitions, and obligations associated with data usage in the Catena-X ecosystem, refer to the comment (`schema.$comment`) of the respective rightOperand (`odrl:rightOperand`). The comment (`schema.$comment`) can contain the following sections with the following meaning:

- In the event that the Constraint (`odrl:Constraint`) expresses a permission, it is assigned to the Permission `odrl:Permission` section of the Usage Policy (as described in the [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json)). The comment (`schema.$comment`) contains a \"permission\":\"a\" section, where a explains in detail what is permitted.
- In the event that the Constraint (`odrl:Constraint`) expresses a prohibition, it is assigned to the Prohibition `odrl:Prohibition` section of the Usage Policy (as described in the [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json)). The comment (`schema.$comment`) contains a \"prohibition\":\"b\" section, where b explains in detail what is prohibited.
- In the event that the Constraint (`odrl:Constraint`) expresses an obligation, it is assigned to the Obligation `odrl:Obligation` section of the Usage Policy (as described in the [schema](https://w3id.org/catenax/2025/9/policy/schema/atomic-constraint-schemas.json)). The comment (`schema.$comment`) contains an \"obligation\":\"c\" section, where c explains the obligation in detail.
- Furthermore, a comment (`schema.$comment`) can contain an \"additionalInformation\":\"d\" section, where d gives additional information, e.g. for what aspect models or use cases the Constraint (`odrl:Constraint`) with this rightOperand (`odrl:rightOperand`) is typically used.

Based on this, it can be ensured that all engagement with our data is conducted responsibly and in accordance with established guidelines.

#### SEQUENCE OF CONSTRAINTS

It is **RECOMMENDED** that Data Provider and Data Consumer select the Constraints (`odrl:Constraint`) in the Usage Policy according to the systematic sections and in a systematic order. In this way, the Agreement concluded via the RC corresponds from the order of the Constraints (`odrl:Constraint`) to the order of conditions in a typical contract. A typical structure is described here:

1. [Reference to Data Exchange Governance Framework Agreement](https://w3id.org/catenax/2025/9/policy/framework-agreement-constraint-schema.json)
2. [Reference to an existing, individual contract](https://w3id.org/catenax/2025/9/policy/contract-reference-constraint-schema.json)
3. [Precedence of agreed constraints](https://w3id.org/catenax/2025/9/policy/precedence-constraint-schema.json)
4. [Data subject and allowed version changes](https://w3id.org/catenax/2025/9/policy/version-changes-constraint-schema.json)
5. [Data frequency of the data exchange](https://w3id.org/catenax/2025/9/policy/data-frequency-constraint-schema.json)
6. [Exclusive right for usage](https://w3id.org/catenax/2025/9/policy/exclusive-usage-constraint-schema.json)
7. [Usage conditions](https://w3id.org/catenax/2025/9/policy/usage-purpose-constraint-schema.json)
8. [Usage restrictions](https://w3id.org/catenax/2025/9/policy/usage-restriction-constraint-schema.json)
9. [Permission or prohibition for use by affiliates - specific regions](https://w3id.org/catenax/2025/9/policy/affiliates-region-constraint-schema.json)
10. [Permission or prohibition for use by affiliates - specific companies](https://w3id.org/catenax/2025/9/policy/affiliates-bpnl-constraint-schema.json)
11. [Obligation of data provisioning for a specific duration](https://w3id.org/catenax/2025/9/policy/data-provisioning-end-duration-days-constraint-schema.json)
12. [Obligation of data provisioning until a specific date](https://w3id.org/catenax/2025/9/policy/data-provisioning-end-date-constraint-schema.json)
13. [Permission of data usage for a specific duration](https://w3id.org/catenax/2025/9/policy/data-usage-end-duration-days-constraint-schema.json)
14. [Permission of data usage until a specific date](https://w3id.org/catenax/2025/9/policy/data-usage-end-date-constraint-schema.json)
15. [Permission of unlimited data usage](https://w3id.org/catenax/2025/9/policy/data-usage-end-definition-constraint-schema.json)
16. [Warranty conditions](https://w3id.org/catenax/2025/9/policy/warranty-constraint-schema.json)
17. [Warranty duration](https://w3id.org/catenax/2025/9/policy/warranty-duration-constraint-schema.json)
18. [Warranty end date](https://w3id.org/catenax/2025/9/policy/warranty-definition-constraint-schema.json)
19. [Limitation of liability](https://w3id.org/catenax/2025/9/policy/liability-constraint-schema.json)
20. [Handling confidential information handling](https://w3id.org/catenax/2025/9/policy/confidential-information-measures-constraint-schema.json)
21. [Sharing confidential information](https://w3id.org/catenax/2025/9/policy/confidential-information-sharing-constraint-schema.json)
22. [Data handling after data usage end](https://w3id.org/catenax/2025/9/policy/contract-termination-constraint-schema.json)
23. [Jurisdiction location](https://w3id.org/catenax/2025/9/policy/jurisdiction-location-constraint-schema.json)
24. [Jurisdiction location as reference](https://w3id.org/catenax/2025/9/policy/jurisdiction-location-reference-constraint-schema.json)

## 3 REFERENCES

## 3.1 NORMATIVE REFERENCES

- [Dataspace Protocol](https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/)
- [Catena-X-Policy-Schema](https://w3id.org/catenax/2025/9/policy/schema/policy-schema.json)
- [ODRL](https://w3id.org/dspace/2025/1/odrl-profile.jsonld)
- [Catena-X e.V. Standard Library](https://catenax-ev.github.io/docs/standards/overview)

## 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

- [Catena-X e.V. Regulatory Framework](https://catenax-ev.github.io/docs/regulatory-framework/governance-framework) (accessed 2025-06-20)
- [Tractusx-edc Reference Implementation](https://github.com/eclipse-tractusx/tractusx-edc)

## ANNEXES

### FIGURES

> *This section is non-normative*

Intentionally left blank.

### TABLES

> *This section is non-normative*

Intentionally left blank.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
