---
tags:
  - Wallet as a Service
  - Enablement Service Provider
  - MIW
  - Core Service Provider
  - Identity Wallet
  - Sandbox Services (Beta)
  - Sandbox Service Provider
---

# CX-0050 Framework Agreement Credential v2.0.1

## REVISIONS & UPDATE

- Re-definition of the Framework Agreement structure

## COPYRIGHT & TRADEMARKS

## ABSTRACT

The Framework Agreement Credential is a Verifiable Credential which confirms that a participant has signed a use case specific framework agreement. This document specifies the technical documentation and the structure of the Framework Agreement Credential.

## 1. INTRODUCTION

The data exchange between two or multiple companies needs to be legally agreed between them. For some specific use cases a framework agreement which defines the basic rules for data consumption, storage, transfer and re-usage can be agreed on between multiple participants of this specific use case.  
Using Decentralized Identifiers for a Self-Sovereign Identity, Verifiable Credentials are used to confirm a participant that he has agreed to the framework agreement and has signed it.

### 1.1 AUDIENCE & SCOPE

#### AUDIENCE

The standard is relevant for the following roles:

- Core Service Provider as this is the entity being able to issue framework agreement credentials
- Data Provider / Consumer as they exchange these framework agreement credential to prove consent to the framework agreement

#### SCOPE

> *This section is non-normative*

This document covers the specification of the framework agreement credential. It describes

- the structure of the framework agreement credential
- the content of the framework agreement credential
- the field details of the framework agreement credential
- and the collection of the available and usable framework agreement credentials

What is **not** in scope is the description or the definition of the agreement itself.

### 1.2 CONTEXT

> *This section is non-normative*

The Framework Agreement Credential is issued by the Core Service Provider to the Wallet of the participant and is exchanged by the Dataspace client in the course of data exchange. It is an attribute of the participants which proves to another participant that a Framework Agreement for a specific use case is signed.

A use case Framework Agreement defines the conditions for data exchange in a particular use case. Having signed this framework agreement is proven by a verifiable credential issued to the signing participant. This is done by the core service provider after an appropriate check of the approval of the participant to the framework agreement. The exchange of this credential allows participants to validate each other that they have agreed to the conditions defined in the framework agreement. The data provider can validate that the data consumer has signed the appropriate framework agreement.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

`Core Service Provider`

All Core Service Providers providing the issuance of Use Case Framework Agreement Credentials must ensure that these credentials follow the structure described in section [2.2 FRAMEWORK AGREEMENT CREDENTIAL STRUCTURE](#22-framework-agreement-credential-structure) and contain the data according to the linked verifiable credentials of the collection in section [section 2.3 Framework Agreement Credential Collection](#23-framework-agreement-credential-collection) and following.

All Core Service Providers providing the issuance of Use Case Framework Agreement credentials must ensure that the Use Case Framework Agreements have been signed correctly by the participants.

To validate these criteria of conformance to the Use Case Framework Agreements the following information **MUST** be handed to the Conformity Assessment Body by the Core Service Provider:

- The validation / control process of the participants' signature
- A documentation (e.g. based on Arc42) explaining the architecture, process flows and data structures of the implementation.

### 1.4 EXAMPLES

Not applicable.

### 1.5 TERMINOLOGY

> *This section is non-normative*

Not applicable.

## 2. FRAMEWORK AGREEMENT CREDENTIAL

> *This section is normative*

### 2.1 Framework Agreement Credential Content

The Framework Agreement Credential is a verifiable credential proving that the holder of the credential has signed a framework agreement.
It contains the name of the use case framework agreement, a link to framework agreement document and the version of the use case agreement document.

### 2.2 Framework Agreement Credential Structure

The structure of the use case framework agreement credential is as follows:

```json
{
    "id": "uuid",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/catenax/credentials/v1.0.0"
        ],
    "type": ["VerifiableCredential", "{name}Credential"],
    "issuanceDate": "{issuance date - format: 2022-06-16T18:56:59Z}",
    "expirationDate": "{expiration date - format: 2022-06-16T18:56:59Z}",
    "issuer": "{did issuer}",
    "credentialSubject": {
        "id": "{did holder}",
        "holderIdentifier": "{bpn}",
        "group": "UseCaseFramework",
        "useCase": "{useCase}",
        "contractTemplate": "{URL OF AGREEMENT/CONTRACT TEMPLATE}",
        "contractVersion": "{VERSION OF THE AGREEMENT TEMPLATE; format: x.x}"
    }
}

```

The content of the Framework Agreement Credential is as follows:

- `id` is the uuid of the newly created credential - the uuid is defined by the issuer component
- `context` is fix defined for the current used schema - we should already consider that the schema might get updated in the future. Ideally, we are flexible to have this scenario that the old schema is set to "INACTIVE" and a new schema is used for new created credentials
- `type` is fix defined for this specific credential
- `issuanceDate` calculated on runtime
- `expirationDate` calculated by the issuer component based on defined credential static data expiry date => always not > 12 month
- `issuer` holds the issuer did
- `credentialSubject`
  - `id` holds the customer/holder did
  - `holderIdentifier` BPN number of the holder
  - `group` groupType - fix value "UseCaseFramework"
  - `useCase` the linked useCase
  - `contractTemplate` contractTemplateDocument of the Framework
  - `contractVersion` Framework version - important since you can hold the same credential for multiple versions

### 2.3 Framework Agreement Credential Collection

#### 2.3.1 Product Carbon Footprint Framework Agreement Credential (PcfCredential)

```json
{
    "id": "uuid",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/catenax/credentials/v1.0.0"
        ],
    "type": ["VerifiableCredential", "PcfCredential"],
    "issuanceDate": "{issuance date - format: 2022-06-16T18:56:59Z}",
    "expirationDate": "{expiration date - format: 2022-06-16T18:56:59Z}",
    "issuer": "{did issuer}",
    "credentialSubject": {
        "id": "{did holder}",
        "holderIdentifier": "{bpn}",
        "group": "UseCaseFramework",
        "useCase": "Pcf",
        "contractTemplate": "{URL OF AGREEMENT/CONTRACT TEMPLATE}",
        "contractVersion": "{VERSION OF THE AGREEMENT TEMPLATE; format: x.x}"
    }
}
```

#### 2.3.2 Traceability Framework Agreement Credential (TraceabilityCredential)

```json
{
    "id": "uuid",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/catenax/credentials/v1.0.0"
        ],
    "type": ["VerifiableCredential", "TraceabilityCredential"],
    "issuanceDate": "{issuance date - format: 2022-06-16T18:56:59Z}",
    "expirationDate": "{expiration date - format: 2022-06-16T18:56:59Z}",
    "issuer": "{did issuer}",
    "credentialSubject": {
        "id": "{did holder}",
        "holderIdentifier": "{bpn}",
        "group": "UseCaseFramework",
        "useCase": "Traceability",
        "contractTemplate": "{URL OF AGREEMENT/CONTRACT TEMPLATE}",
        "contractVersion": "{VERSION OF THE AGREEMENT TEMPLATE; format: x.x}"
    }
}
```

#### 2.3.3 Quality Framework Agreement Credential (QualityCredential)

```json
{
    "id": "uuid",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/catenax/credentials/v1.0.0"
        ],
    "type": ["VerifiableCredential", "QualityCredential"],
    "issuanceDate": "{issuance date - format: 2022-06-16T18:56:59Z}",
    "expirationDate": "{expiration date - format: 2022-06-16T18:56:59Z}",
    "issuer": "{did issuer}",
    "credentialSubject": {
        "id": "{did holder}",
        "holderIdentifier": "{bpn}",
        "group": "UseCaseFramework",
        "useCase": "Quality",
        "contractTemplate": "{URL OF AGREEMENT/CONTRACT TEMPLATE}",
        "contractVersion": "{VERSION OF THE AGREEMENT TEMPLATE; format: x.x}"
    }
}
```

#### 2.3.4 Circular Economy Framework Agreement Credential (CircularEconomyCredential)

```json
{
    "id": "uuid",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/catenax/credentials/v1.0.0"
        ],
    "type": ["VerifiableCredential", "CircularEconomyCredential"],
    "issuanceDate": "{issuance date - format: 2022-06-16T18:56:59Z}",
    "expirationDate": "{expiration date - format: 2022-06-16T18:56:59Z}",
    "issuer": "{did issuer}",
    "credentialSubject": {
        "id": "{did holder}",
        "holderIdentifier": "{bpn}",
        "group": "UseCaseFramework",
        "useCase": "CircularEconomy",
        "contractTemplate": "{URL OF AGREEMENT/CONTRACT TEMPLATE}",
        "contractVersion": "{VERSION OF THE AGREEMENT TEMPLATE; format: x.x}"
    }
}
```

#### 2.3.5 Demand and Capacity Framework Agreement Credential (DemandCapacityCredential)

```json
{
    "id": "uuid",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/catenax/credentials/v1.0.0"
        ],
    "type": ["VerifiableCredential", "DemandCapacityCredential"],
    "issuanceDate": "{issuance date - format: 2022-06-16T18:56:59Z}",
    "expirationDate": "{expiration date - format: 2022-06-16T18:56:59Z}",
    "issuer": "{did issuer}",
    "credentialSubject": {
        "id": "{did holder}",
        "holderIdentifier": "{bpn}",
        "group": "UseCaseFramework",
        "useCase": "DemandAndCapacity",
        "contractTemplate": "{URL OF AGREEMENT/CONTRACT TEMPLATE}",
        "contractVersion": "{VERSION OF THE AGREEMENT TEMPLATE; format: x.x}"
    }
}
```

#### 2.3.6 PURIS Framework Agreement Credential (PurisCredential)

```json
{
    "id": "uuid",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/catenax/credentials/v1.0.0"
        ],
    "type": ["VerifiableCredential", "PurisCredential"],
    "issuanceDate": "{issuance date - format: 2022-06-16T18:56:59Z}",
    "expirationDate": "{expiration date - format: 2022-06-16T18:56:59Z}",
    "issuer": "{did issuer}",
    "credentialSubject": {
        "id": "{did holder}",
        "holderIdentifier": "{bpn}",
        "group": "UseCaseFramework",
        "useCase": "DemandAndCapacity",
        "contractTemplate": "{URL OF AGREEMENT/CONTRACT TEMPLATE}",
        "contractVersion": "{VERSION OF THE AGREEMENT TEMPLATE; format: x.x}"
    }
}
```

#### 2.3.7 Business Partner Framework Agreement Credential (BusinessPartnerCredential)

```json
{
    "id": "uuid",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/catenax/credentials/v1.0.0"
        ],
    "type": ["VerifiableCredential", "BusinessPartnerCredential"],
    "issuanceDate": "{issuance date - format: 2022-06-16T18:56:59Z}",
    "expirationDate": "{expiration date - format: 2022-06-16T18:56:59Z}",
    "issuer": "{did issuer}",
    "credentialSubject": {
        "id": "{did holder}",
        "holderIdentifier": "{bpn}",
        "group": "UseCaseFramework",
        "useCase": "BusinessPartnerDataManagement",
        "contractTemplate": "{URL OF AGREEMENT/CONTRACT TEMPLATE}",
        "contractVersion": "{VERSION OF THE AGREEMENT TEMPLATE; format: x.x}"
    }
}
```

#### 2.3.8 Behavioral Twin Framework Agreement Credential (BehavioralTwinCredential)

```json
{
    "id": "uuid",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/catenax/credentials/v1.0.0"
        ],
    "type": ["VerifiableCredential", "BehavioralTwinCredential"],
    "issuanceDate": "{issuance date - format: 2022-06-16T18:56:59Z}",
    "expirationDate": "{expiration date - format: 2022-06-16T18:56:59Z}",
    "issuer": "{did issuer}",
    "credentialSubject": {
        "id": "{did holder}",
        "holderIdentifier": "{bpn}",
        "group": "UseCaseFramework",
        "useCase": "BehavioralTwin",
        "contractTemplate": "{URL OF AGREEMENT/CONTRACT TEMPLATE}",
        "contractVersion": "{VERSION OF THE AGREEMENT TEMPLATE; format: x.x}"
    }
}
```

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

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
