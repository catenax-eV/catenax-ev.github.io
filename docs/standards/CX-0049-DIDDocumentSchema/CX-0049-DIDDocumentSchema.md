
# CX-0049 DID Document v2.0.0

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD
  
- Re-definition of the structure of the did-document

## ABSTRACT

The document describes the structure. the location and the accessability of and the requirements to the `DID document` used for the Identification of Dataspace participants.

## 1. INTRODUCTION

The DID document is a fundamental and mandatory element in the context of Self-Sovereign Identity (SSI), as it contains the public key needed for the verification of the participant identity. Having the DID of a participants the location of the DID document can be resolved to get the get both the participants's public key and the list of services in context of it's identity.
As described in CX-0013:2.0 Identity of Dataspace participants, in the context of Catena-X Self-Sovereign Identity (SSI) is used as the identity for Participants. Based on the W3C standard for Decentralized Identifiers (DID) [https://www.w3.org/TR/did-core/], the did is used as the identifier, which points to the DID Document of the participant [https://www.w3.org/TR/did-spec-registries/#did-document-properties].

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

#### AUDIENCE

This document focuses on the schema of DID documents for the DIDs of Catena-X Dataspace participants. It applies to DIDs issued in the course of registration (CX-0013 - Identity of member companies v2.0.0) as well as to DIDs that already exist at the time of registration with Catena-X.

This document is relevant for the following roles, as the must be certified against it:

- Core Service Providers as they offer the registration to the Catena-X network
- Enablement Service Providers which offer Wallet Services to the Core Service Providers

#### SCOPE

This document covers the requirements to the DID document used in the context of Catena-X- It describes:

- The structure of the DID document including mandatory service endpoints and public/private key algorithms
- The location of the DID document
- The resolution of the DID to access the DID document

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

In general the concept of SSI according to the W3C standard [https://www.w3.org/TR/did-core/] is the link between a unique identifier - the Decentralized Identifier (DID) - and the DID document.

The DID itself does not have to contain any identity features. In this context, the DID document contains a collection of service endpoints and the public keys of the identified participant, which can be used for any cryptographic signature and any type of authentication. For the storage of the DID document, it must be ensured that the document cannot be changed by third parties, as this would enable identity theft through manipulation of the public key.
In the context of SSI, there is no need for a central issuing office for identities. Due to open standards and the associated multitude of providers of DIDs and verifiable credentials, the data sovereignty of the participants in the network is ensured.

In addition to defined service endpoints, especially for the request for verifiable credentials, the did standard also allows the definition of specific endpoints for context-related services.

To ensure that the DID of a participant can be used and is accepted by all other participants in the network, but also across networks, the DID document is based on the W3C standard [https://www.w3.org/TR/did-core/#did-documents]. Compliance with the W3C standard for DID documents applies both to DIDs created by Enablement Service Providers of Wallet services in the course of registration.

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

Not applicable.

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

`Core Service Provider`

A Core Service Provider **MUST** ensure that all dataspace participants have an DID document according to the structure defined in this document.
The Core Service Provider **MUST** ensure that the DID created in the course of registration is resolvable to the created DID document.
A Core Service Provider **MUST** ensure that the DID document is accessible for everyone over http or https.

To validate these criteria for an own implementation of the Core Service Provider please the following information **MUST** be handed to the Conformity Assessment Body by the Core Service Provider:

- A documentation (e.g. based on Arc42) explaining the architecture, access management and process flows of the implementation.

`Enablement Service Provider`

An Enablement Service Provider providing a Wallet service to a Core Service Provider **MUST** ensure that all Dataspace participants who's DIDs are managed with his Wallet service have an DID document according to the structure defined in this document.
He **MUST** ensure that the DID created in the course of registration is resolvable to the created DID document.
And he also **MUST** ensure that the DID document is accessible for everyone over http or https.

To validate these criteria for an own implementation of the Core Service Provider the following information **MUST** be handed to the Conformity Assessment Body:

- A documentation (e.g. based on Arc42) explaining the architecture, access management   and process flows of the implementation.

To validate these criteria of conformance of the DID Document to the DID Document schema the following information **MUST** be handed to the Conformity Assessment Body:

- A documentation (e.g. based on Arc42) explaining the architecture, process flows, the data structures and storage infrastructure of the solution.

### 1.6 TERMINOLOGY

> *This section is non-normative*

Not applicable.

## 2. DID DOCUMENT

The following DID document uses a kind of real data to present a better readable example of it's structure.
For Release 24.05 the accepted DID Method for all participant's DIDs is `did:web` method defined here:
https://w3c-ccg.github.io/did-method-web/

```text
Disclaimer:

In future releases it will be possible for every participant to use his existing DID, managed by his own wallet, for the registration to Catena-X. This will also include the usage of other DID methods than `did:web`.
```

### 2.1 VERIFICATION METHOD

The used verification method for the created DID documents of the participants is `JsonWebKey2020`

### 2.2 DID DOCUMENT STRUCTURE

> *This section is normantive*

The DID document for the Decentralized Identifiers provided by all Catena-X members **MUST** be created according to the following structure

```json
{
   "@context":[
      "https://www.w3.org/ns/did/v1"
   ],
   "id":"did:web:ica-catena-x-dim-consumer-dev-dev-dis-diddoc.cfapps.eu12.hana.ondemand.com:user:issuer",
   "verificationMethod":[
      {
         "id":"did:web:ica-catena-x-dim-consumer-dev-dev-dis-diddoc.cfapps.eu12.hana.ondemand.com:user:issuer#keys-2120c0bb-e72f-4e1a-8d14-0b3480afbdc6",
         "type":"JsonWebKey2020",
         "controller":"did:web:ica-catena-x-dim-consumer-dev-dev-dis-diddoc.cfapps.eu12.hana.ondemand.com:user:issuer",
         "publicKeyJwk":{
            "kty":"EC",
            "crv":"secp256k1",
            "x":"608KKIEIupnefu502gmZMv2SMOUpYFB7w5VniJIMDlg",
            "y":"aD7P3H-PCtSjxGPYhRqpjl12QtK-e0qaPI7AFy3v5KQ"
         }
      },
      {
         "id":"did:web:ica-catena-x-dim-consumer-dev-dev-dis-diddoc.cfapps.eu12.hana.ondemand.com:user:issuer#keys-768f94e5-67b2-464f-a1de-e2beb9828aed",
         "type":"JsonWebKey2020",
         "controller":"did:web:ica-catena-x-dim-consumer-dev-dev-dis-diddoc.cfapps.eu12.hana.ondemand.com:user:issuer",
         "publicKeyJwk":{
            "kty":"EC",
            "crv":"secp256k1",
            "x":"NT_jO4J7ljC0oyZiO4ffp_igIZ5EYZMgICIoO54T2HE",
            "y":"YnH3cpAFyGcfiX1v1HBEYgJhVO3TajqTV-CbXOi-MT8"
         }
      }
   ],
   "authentication":[
      "did:web:ica-catena-x-dim-consumer-dev-dev-dis-diddoc.cfapps.eu12.hana.ondemand.com:user:issuer#keys-2120c0bb-e72f-4e1a-8d14-0b3480afbdc6",
      "did:web:ica-catena-x-dim-consumer-dev-dev-dis-diddoc.cfapps.eu12.hana.ondemand.com:user:issuer#keys-768f94e5-67b2-464f-a1de-e2beb9828aed"
   ],
   "service":[
      {
         "id":"did:example:1701379495100",
         "type":"DIDMessaging",
         "serviceEndpoint":[
            "https://example.com/path1"
         ]
      }
   ]
}
```

The content of the DID document is explained as follows:

- `context` is fix defined for the current used schema of DID documents. It depicts the namespace for the W3C DID
- `id` is the DID of the participant
- `verificationMethod` is a list of accepted verification methods
- `authentication` a list of keys to be able to prove that the participant has a specific attribute or controls a specific secret. Used to prove that the participants has the private key associated with public key above
- `service` a list of service endpoints provided by the participants the DID document represents

### 2.2 DID DOCUMENT LOCATION AND RESOLUTION

The used DID method for Release 24.05 is -as mentioned- `did:web` which means that the DID itself includes the location to the DID document.
The location of the DID document is accessible over http or https and provided by the Core Service Provider.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

W3C Decentralized Identifiers [https://www.w3.org/TR/did-core/]
W3C DID Document properties [https://www.w3.org/TR/did-spec-registries/#did-document-properties]
W3C-CCG did:web method [https://w3c-ccg.github.io/did-method-web/]

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
