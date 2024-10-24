---
tags:
  - CAT/Enablement Service Provider
  - CAT/SSI
  - CAT/Core Service Provider
  - CAT/Identity Wallet
  - CAT/Sandbox Services (Beta)
---

# CX-0013 Identity of Member Company v2.0.0

## ABSTRACT

Identity and Access management (IAM) enables any non-anonymous interactions, meaning independent identification and description of the actors in a verifiable and reliable way. The identification of assets
or digital twins is not in the scope of IAM.
A company in the context of IAM is a digital identity matched to a respective participant of Catena-X.
The digital identities of employees and technical users are always tied to the company for which he or she
acts.
This standard documentation defines the technical foundation and the structure used for the identity of the company participating in Catena-X.

## 1. INTRODUCTION

Identity and Access Management (IAM) is a mandatory basic infrastructure for every IT-System. The identity of any entity and actor (company, user, or technical client/connector) is the summary of the describing attributes (e.g., Company Name, Address, Tax Number, etc.). Catena-X is intended to be a network-of-networks which consequently means that there cannot be a single Identity Provider (IdP) for the company identities nested in one network. The company must be identifiable in an independent way and interoperable in all networks. The identity of users (employees of a company) and technical users (e.g., the Connector) in Catena-X, must be bound to the company they are acting on behalf of.

### 1.1 AUDIENCE & SCOPE

#### AUDIENCE

The purpose of this standardization request is to unify the Digital Company Identity.
This document is relevant for the following roles, as the must be certified against it:

- Core Service Providers as they offer the registration to the Catena-X network
- Enablement Service Providers which offer Wallet Services to the Core Service Providers

#### SCOPE

> *This section is non-normative.*

This document covers the requirements for the participant's identity and the according technical solution to that, in this case the identity Wallet. It describes the following:

- The basic definition of the usage of Decentralized Identifiers
- The fundamentals of a Wallet service

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative.*

The purpose of this standardization request is to unify the Digital Company Identity in a self-sovereign manner. The digital identity of a participant is the basis of any interaction with other partners. To ensure independence and data sovereignty from one identity provider this identity - as the summary of the describing attributes - must be under the sovereignty of the respective partner company.

Self-Sovereign identity (SSI) is a concept that gives individuals and organizations control over their own digital identity and the information required for identity verification, through principles such as user control, transparency, access to data, and transportability. SSI is implemented using open standards like Decentralized Identifiers (DIDs), Decentralized Public Key Infrastructure (DPKI), and Verifiable Credentials.

This approach serves and ensure interoperability as well as data sovereignty.

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative.*

Not applicable.

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative.*

`Core Service Provider`

All Core Service Providers **MUST** ensure, that the created DID document for the participant follow the `did:web` standard described here https://w3c-ccg.github.io/did-method-web/.

To validate these criteria of conformance to the Use Case Framework Agreements please collect the following documents:

- Arch42 Documentation explaining the architecture, process flows and data structures of the implementation.

Hand this documentation to the conformity assessment body

`Enablement Service Provider`

All Core Service Providers **MUST** ensure, that the Wallet service they offer create DID documents for the participants following the `did:web` standard described here https://w3c-ccg.github.io/did-method-web/.

To validate these criteria of conformance to the Use Case Framework Agreements please collect the following documents:

- Arch42 Documentation explaining the architecture, process flows and data structures of the implementation.

Hand this documentation to the conformity assessment body

### 1.6 EXAMPLES

Not applicable.

### 1.7 TERMINOLOGY

> *This section is non-normative.*

Not applicable.

## 2. DECENTRALIZED IDENTIFIER

> *This section is normative.*

Decentralized Identifier as a technological approach to form a Self-Sovereign Identity is based on cryptographic technologies which provide the ability to exchange identity information in a secure way.  
Based on open standards of the W3C https://www.w3.org/TR/did-core/ a DID also ensures interoperability while also ensuring data sovereignty according to the identity data of the participant.

To manage a DID a Wallet is used.

### 2.2 WALLET SERVICE

> *This section is normative*

SSI will be an integral part of Catena-X. This requires a wallet for each participant to store his private keys to issue verifiable credentials and to receive Verifiable Credentials issued for him. Therefore, in the course of registration, each participant must be equipped with an instance of the Wallet to store credentials.

To ensure the processes needed for data exchange the Wallet service provides the following core functionalities described in `CX-0149 VERIFIED COMPANY IDENTITY v1.1.0`.

### 2.3 DID METHOD

The DID method describes the implementation of a DID network, which includes the type of the anchoring of the DIDs and the Verifiable Data Registry.
It is used for resolution of the DID with the goal to receive the DID Document, described in `CX-0049` v2.0.0, done with a resolver. A reference implementation of a DID resolver being able to resolve multiple DID methods is the "universal resolver" which  can be found here
https://github.com/decentralized-identity/universal-resolver

The DIDs for the participants, created by the Core Service Provider at the moment of registration and managed by the Wallet service, are based in the DID method `did:web`, specified here:
https://w3c-ccg.github.io/did-method-web/

### 2.3 REGISTRATION PROCESS

To ensure that every participant of Catena-X has a valid DID, a new participating company will be provided a tenant in the Wallet service at the moment of registration to become an official Catena-X partner.

The required company information for the registration process needs to be provided by the participant and validated by the Core Service Provider.
After successful registration, the Catena-X specific Business Partner Number (BPN) VC and Catena-X specific Membership VC will be issued to the Wallet tenant of the participant.

```text
The registration process is described in detail in CX-0149:1.0 DATA SPACE IDENTITY AND IDENTIFICATION following the definition of the Identity and Trust Protocol (IATP) .
```

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

> *This section is normative.*

- CX-0049:2.0 DID Document Schema
- CX-0149:1.0 Verfified Company Identity

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative.*

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative.*

Not applicable.

## ANNEXES

### FIGURES

> *This section is non-normative.*

Not applicable.

### TABLES

> *This section is non-normative*

Not applicable.

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
