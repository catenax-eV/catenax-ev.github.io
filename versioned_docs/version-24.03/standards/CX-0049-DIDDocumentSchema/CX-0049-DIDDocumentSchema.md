
# CX-0049 DID Document Schema v1.0.0

## ABSTRACT

The DID document is a fundamental and mandatory element in the context of Self Sovereign Identity (SSI), as it contains the public key needed for the verification of the participant identity. The following document describes the technical documentation of the DID document in the Platform Capability Identity and Access Management (IAM) relevant to the digital participant identity. This document describes the structure of the DID document.

## 1. INTRODUCTION

As described in CX-0013 Identity of Member Companies, in the context of Catena-X Self Sovereign Identity (SSI) is used as the identity for Participants. Based on the W3C standard for Decentralized Identifiers (DID) [https://www.w3.org/TR/did-core/], the DID is used as the identifier, which points to the DID document of the participant [https://www.w3.org/TR/did-spec-registries/#did-document-properties].

This document describes the schema of the DID document for DIDs issued and used in Catena-X.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

List for which roles the standard is relevant. Possible options, please delete
the roles for which the standard isn’t relevant.

- Core Service Provider
- Data Provider / Consumer
- Business Application Provider
- Enablement Service Provider
- Onboarding Service Provider

This document focuses on the schema of DID documents for the DIDs of Catena-X participants. It applies to DIDs issued in the course of registration (CX-0013 - Identity of member companies) as well as to DIDs that already exist at the time of registration with Catena-X.

Besides other data the DID document contains the public key of the identified participants. That means that this standard is relevant for every role whose processes involve identification.

This document is relevant for enablement service providers who maintain the issuance of the BPN, which is assigned through the provision of a Verifiable Credential.

It is also relevant for core service providers as they need to be able to identify the participants und verify the given verifiable presentations containing the verifiable credentials issued for the participant that must be identified. The same applies to business application providers and enablement service providers.

For Data Provider it is relevant due to the fact that data provision and consumption can have an access control that is based on the identity itself or an attribute of the consuming participant. On the other hand a Data Consumer must be able to validate the identity of the providing participant.

### 1.2 CONTEXT

> *This section is non-normative*

In general the concept of SSI according to the W3C standard [https://www.w3.org/TR/did-core/] is the link between a unique identifier - the Decentralized Identifier (DID) - and the DID document.

The DID itself does not have to contain any identity features. In this context, the DID document contains a collection of service endpoints and the public keys of the identified participant, which can be used for any cryptographic signature and any type of authentication. For the storage of the DID document, it must be ensured that the document cannot be changed by third parties, as this would enable identity theft through manipulation of the public key.

In the context of SSI, there is no need for a central issuing office for identities. Due to open standards and the associated multitude of providers of DIDs and verifiable credentials, the data sovereignty of the participants in the network is ensured.

In addition to defined service endpoints, especially for the request for verifiable credentials, the DID standard also allows the definition of specific endpoints for context-related services.

To ensure that the DID of a participant can be used and is accepted by all other participants in the network, but also across networks, the DID document is based on the W3C standard [https://www.w3.org/TR/did-core/#did-documents]. Compliance with the W3C standard for DID documents applies both to DIDs created by providers of central wallet solutions in the course of registration and to the use of DIDs issued prior to registration.

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to proof, that they are conform with the Catena-X standards.

All Core and Onboarding Service Providers providing a Managed Identity Wallet and creating the according DID for the participants must create DID documents followig the schema described in section[2. DID DOCUMENT STRUCTURE](#2-did-document-structure) of this document.

Furthermore they must ensure that the storage of the DID document is set up in a way that the DID Document cannot be changed by third parties.

To validate these criteria of conformance of the DID document to the DID document schema please collect the following documents:

- Arch42 Documentation explaining the architecture, process flows, the data structures and storage infrastructure of the solution.

Hand this documentation to the conformity assessment body

### 1.6 EXAMPLES

```text
This section is not applicable for this standard in this version.
```

### 1.7 TERMINOLOGY

> *This section is non-normative*

```text
This section is not applicable for this standard in this version.
```

## 2. DID Document Structure

> *This section is normative*

The DID document for the Decentralized Identifiers provided by all Catena-X members MUST be created according to the following structure

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/ed25519-2020/v1"
  ],
  "id": "did:web:example.com:BPN123",
  "verificationMethod": [
    {
      "id": ["did:web:example.com:BPN123#key-0"],
      "type": "JsonWebKey2020",
      "publicKeyJwk": {
        "kty": "JsonWebKey2020",
        "crv": "Ed25519",
        "x": "3534354354353"
      }
    }
  ]
}
```

The structure of the DID document can be found here

[DID Document definition](https://github.com/eclipse-tractusx/ssi-docu/blob/main/docs/architecture/cx-3-2/4.%20Decentralized%20Identifiers%20(DIDs)/Decentralized%20Identifiers%20(DIDs).md#did-document-structure)

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

W3C Decentralized Identifiers [https://www.w3.org/TR/did-core/]
W3C DID document properties [https://www.w3.org/TR/did-spec-registries/#did-document-properties]

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

Managed Identity Wallet which supports the **did:web** method: https://github.com/catenax-ng/tx-managed-identity-wallets/tree/features/java-did-web

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
