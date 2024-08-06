---
tags:
  - CAT/Enablement Service Provider
  - CAT/SSI
  - CAT/Core Service Provider
  - CAT/Identity Wallet
  - CAT/Sandbox Services (Beta)
---

# CX - 0050 Framework Agreement Credential v.2.1.0

## REVISIONS & UPDATE

- Re-definition of the Framework Agreement structure

## ABSTRACT

The Framework Agreement Credential is a Verifiable Credential which confirms that a participant has agreed to the Use Case Framework document (short "Framework"). The following chapters specify the technical documentation and the structure of the Framework Agreement Credential.

## 1. INTRODUCTION

The data exchange between two participants needs to be legally agreed between them. This is done based on the "Framework" which defines the basic rules for data consumption, storage, transfer and re-usage. Using Decentralized Identifiers for a Self-Sovereign Identity, Verifiable Credentials are used to confirm a participant that he has accepted the "Framework".

### 1.1 AUDIENCE & SCOPE

#### AUDIENCE

The standard is relevant for the following roles:

- Core Service Provider as this is the entity being able to issue Framework Agreement Credentials
- Data Provider / Data Consumer as they exchange these Framework Agreement Credential to prove consent to the "Framework"

#### SCOPE

> *This section is non-normative*

This document covers the specification of the Framework Agreement Credential. It describes

- the structure of the framework agreement credential
- the content of the framework agreement credential
- the field details of the framework agreement credential

What is **not** in scope is the description or the definition of the "Framework" itself.

### 1.2 CONTEXT

> *This section is non-normative*

The Framework Agreement Credential is issued by the Core Service Provider to the wallet of the participant and is exchanged by the dataspace client in the course of data exchange. It is an attribute of a participant 1 which presents to another participant 2 that the "Framework" is accepted by participant 1.

The "Framework" document defines the conditions for data exchange. Having agreed to this "Framework" is proved by a verifiable credential issued to this participant. This is done by the Core Service Provider after an appropriate check of the approval of the participant to the "Framework". The exchange of this credential allows participants to validate each other that they have agreed to the conditions defined in the "Framework". The Data Provider can validate that the Data Consumer has agreed to the "Framework".

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

`Core Service Provider`

All Core Service Providers providing the issuance of Framework Agreement Credentials **MUST** ensure that these credentials follow the structure described in section [2.2 Framework Agreement Credential Structure](#22-framework-agreement-credential-data-exchange-governance) and contain the data according to the linked verifiable credential in section [2.2 Framework Agreement Credential Data Exchange Governance](#22-framework-agreement-credential-data-exchange-governance).

All Core Service Providers providing the issuance of Framework Agreement Credentials **MUST** ensure that the "Framework" document have been agreed correctly by the participants.

To validate these criteria of conformance to the "Framework" the following information **MUST** be handed to the Conformity Assessment Body by the Core Service Provider:

- the validation / control process of the participants agreement,
- a documentation (e.g. based on Arc42) explaining the architecture, process flows and data structures of the implementation.

### 1.4 EXAMPLES

Not applicable.

### 1.5 TERMINOLOGY

> *This section is non-normative*

Not applicable.

## 2. FRAMEWORK AGREEMENT CREDENTIAL

> *This section is normative*

### 2.1 Framework Agreement Credential Definition

The Framework Agreement Credential is a verifiable credential proving that the holder of the credential has agreed to the "Framework" document.  
It contains the name of the "Framework", a link to "Framework" document and the version of the "Framework" document.

### 2.2 Framework Agreement Credential Data Exchange Governance

The Framework Agreement Credential Data Exchange Governance is shown and explained in the following:

```json
{
    "id": "uuid",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/catenax/credentials/v1.0.0"
        ],
    "type": ["VerifiableCredential", "DataExchangeGovernanceCredential"],
    "issuanceDate": "{issuance date - format: 2024-10-16T00:00:00Z}",
    "expirationDate": "{expiration date - format: 2025-10-15T00:00:00Z}",
    "issuer": "{did issuer}",
    "credentialSubject": {
        "id": "{did holder}",
        "holderIdentifier": "{bpn}",
        "group": "UseCaseFramework",
        "useCase": "DataExchangeGovernance",
        "contractTemplate": "{URL OF AGREEMENT/CONTRACT TEMPLATE}",
        "contractVersion": "{VERSION OF THE AGREEMENT TEMPLATE; format: x.x}"
    }
}
```

Explanation:

- `id` is the uuid of the newly created credential - the uuid is defined by the issuer component
- `context` is fix defined for the current used schema - we should already consider that the schema might get updated in future. Ideally we are flexible to have this scenario that the old schema is set to "INACTIVE" and a new schema is used for new created credentials

- `type` is fix defined for this specific credential
- `issuanceDate` calculated on runtime
- `expirationDate` calculated by the issuer component based on defined credential static data expiry date => always not > 12 month
- `issuer` holds the issuer did
- `credentialSubject`
  - `id` holds the customer/holder did
  - `holderIdentifier` BPN number of the holder
  - `group` groupType - fix value "UseCaseFramework"
  - `useCase` the linked useCase - in this case Data Exchange Governance Framework agreement is valid for all Catena-X use cases
  - `contractTemplate` contractTemplateDocument of the Framework
  - `contractVersion` Framework version - important since you can hold the same credential for multiple versions

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

Not applicable.

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

Not applicable.

## ANNEXES

### FIGURES

> *This section is non-normative*

Not applicable.

### TABLES

> *This section is non-normative*

Not applicable.
