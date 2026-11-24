---
tags:
  - CAT/SSI
  - CAT/Core Service Provider-B
  - CAT/Identity Wallet
---

# CX-0049 DID Document v2.3.0

## Abstract

This standard defines requirements for the DID document of a Catena-X participant's wallet.

## 1. Introduction

The DID document is a fundamental and mandatory concept in Self-Sovereign Identity (SSI).
It is a public document that contains the DID controller's public key, several service endpoints associated with the DID controller, and potentially other information.
Knowledge of a DID allows to resolve the DID and is therefore sufficient to get access to the corresponding DID document.

### 1.1 Audience & scope

> *This section is non-normative*

#### Audience

This standard is relevant for the following roles (see [CX-0149](https://catenax-ev.github.io/docs/standards/CX-0149-WalletRequirements) for more information about Catena-X-compliant wallets):

- Core Service Providers, in the context of provisioning wallets to participants
- participants, as they each must have a wallet associated with a compliant DID document

#### Scope

This standard defines the requirements a DID document must fulfil in order to be used by a participant in the Catena-X dataspace.
It does not define:

- wallet requirements (see [CX-0149](https://catenax-ev.github.io/docs/standards/CX-0149-WalletRequirements))
- DIDs or DID methods (see [CX-0149](https://catenax-ev.github.io/docs/standards/CX-0149-WalletRequirements))
- credential types (see [CX-0050](https://catenax-ev.github.io/docs/standards/CX-0050-CXSpecificCredentials))

### 1.2 Context and architecture fit

> *This section is non-normative*

Every participant in the Catena-X dataspace is associated with and in control of their own Decentralized Identifier (DID).
Every DID has an associated DID document, which can be obtained simply by having knowledge of the DID.
DID documents are public documents!
While only the DID controller ("owner") may have write access, everyone has read access.
They contain information which the participant wants to make publicly available, such as their public key or service endpoints.
A participant's DID document is usually hosted by the participant's wallet, but may be hosted elsewhere.

Below is a non-normative example of a DID document in Catena-X:

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/jws-2020/v1",
    "https://w3id.org/dspace-dcp/v1.0/dcp.jsonld",
    "https://w3id.org/dspace/2025/1/context.jsonld"
  ],
  "id": "did:web:example.com/sub/path",
  "service": [
    {
      "type": "CredentialService",
      "serviceEndpoint": "https://credential-service-example.com",
      "id": "did:web:example.com#CredentialService"
    },
    {
      "type": "DataService",
      "serviceEndpoint": "https://subdomain.provider-domain.com/subpath/.well-known/dspace-version",
      "id": "did:web:provider-domain.com#dsp-agent-1"
    }
  ],
  "verificationMethod": [
    {
      "id": "did:web:example.com#keys-82of94hf-j20f-8fn4-9fj3-93hjv0384nfl",
      "type": "JsonWebKey2020",
      "controller": "did:web:example.com",
      "publicKeyJwk": {
        "kty": "EC",
        "crv": "secp256k1",
        "x": "9jnfg6e4fK97rfvJo975ojkdxsy6qmcvk69Djkdf56e",
        "y": "8bdtb734civgR49tiDS4ax9klbZ45dsh832nchfhRv2"
      }
    },
    {
      "id": "did:web:example.com#keys-93uwifie-9x33-9fn4-cv93-89f19bmnqxod",
      "type": "JsonWebKey2020",
      "controller": "did:web:example.com",
      "publicKeyJwk": {
        "kty": "EC",
        "crv": "secp256k1",
        "x": "9c29fn9823mxdufw349mxfj49cjtr89mxjr349fxnjf",
        "y": "0ymei1920yks129x0mk2390ucm849cfmnj489mxdkew"
      }
    }
  ],
  "authentication": [
    "did:web:example.com#keys-02v9209fmxjfw93c0mjfw30mxf3490fmcx34"
  ],
  "capabilityInvocation": [
    "did:web:example.com#keys-0xm10di23fuc9834fumx89fwjxm9342j02hj"
  ]
}
```

### 1.3 Architecture overview

> *This section is non-normative*

Not applicable.

### 1.4 Conformance

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The keywords **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

### 1.5 Proof of conformity

> *This section is non-normative*

Not applicable.
See [CX-0149], which requires Catena-X-compliant wallets be associated with a DID document compliant with this standard.

### 1.6 Terminology

> *This section is non-normative*

"Participant" refers to any legal entity that has been onboarded into the Catena-X dataspace.

## 2. Main content

The DID document of a Catena-X participant's wallet **MUST** be compliant with the [Decentralized Identifiers (DIDs) v1.0](https://www.w3.org/TR/did-1.0/) specification.
Additionally, the DID document **MUST** be compliant with the requirements for DID documents specified in the [Decentralized Claims Protocol (DCP) v1.0](https://eclipse-dataspace-dcp.github.io/decentralized-claims-protocol/v1.0/).
Especially, the required service of type "CredentialService" **MUST** be a Credential Service as defined in the [DCP v1.0 sec 5.2,](https://eclipse-dataspace-dcp.github.io/decentralized-claims-protocol/v1.0/#credential-service-endpoint-discovery) and it **MUST** be a Catena-X-compliant credential service/wallet as defined in [CX-0149 Wallet Requirements](https://catenax-ev.github.io/docs/standards/CX-0149-WalletRequirements).
The `service` array **MAY** additionally contain an entry where the value of the `type` field is the string `"DataService"`.
Where this is the case, the value of the corresponding `"serviceEndpoint"` field **MUST** resolve to a Data Service as specified in the [Dataspace Protocol 2025-1-RC2](https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-RC2/#discovery-of-service-endpoints).

### 2.1 DID document schema

> *This section is normative*

The DID document of a Catena-X participant **MUST** be compliant with the following schema:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": [
    "@context",
    "id",
    "service",
    "verificationMethod",
    "authentication",
    "capabilityInvocation"
  ],
  "properties": {
    "@context": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "contains": {
        "type": "string",
        "enum": [
          "https://www.w3.org/ns/did/v1",
          "https://w3id.org/security/suites/jws-2020/v1",
          "https://w3id.org/dspace-dcp/v1.0/dcp.jsonld",
          "https://w3id.org/dspace/2025/1/context.jsonld"
        ]
      },
      "minContains": 4
    },
    "id": {
      "type": "string"
    },
    "service": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "id",
          "type",
          "serviceEndpoint"
        ],
        "properties": {
          "id": {
            "type": "string",
            "format": "uri"
          },
          "type": {
            "type": "string"
          },
          "serviceEndpoint": {
            "type": "string",
            "format": "uri"
          }
        }
      },
      "contains": {
        "type": "object",
        "properties": {
          "type": {
            "const": "CredentialService"
          }
        }
      }
    },
    "verificationMethod": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "id",
          "type",
          "publicKeyJwk"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "controller": {
            "type": "string"
          },
          "publicKeyJwk": {
            "type": "object",
            "required": [
              "kty",
              "crv",
              "x",
              "y"
            ],
            "properties": {
              "kty": {
                "type": "string"
              },
              "crv": {
                "type": "string"
              },
              "x": {
                "type": "string"
              },
              "y": {
                "type": "string"
              }
            }
          }
        }
      }
    },
    "authentication": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "capabilityInvocation": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "assertionMethod": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

## 3 References

### 3.1 Normative references

- [CX-0149 Wallet Requirements](https://catenax-ev.github.io/docs/standards/CX-0149-WalletRequirements)
- [Decentralized Claims Protocol v1.0](https://eclipse-dataspace-dcp.github.io/decentralized-claims-protocol/v1.0/)
- [DID v1.0](https://www.w3.org/TR/did-1.0/)
- [did:web](https://w3c-ccg.github.io/did-method-web/)
- [Dataspace Protocol 2025-1-RC2](https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-RC2/)

### 3.2 Non-normative references

> *This section is non-normative*

Not applicable.

### 3.3 Reference implementations

> *This section is non-normative*

Not applicable.

## Annexes

### Figures

> *This section is non-normative*

Not applicable.

### Tables

> *This section is non-normative*

Not applicable.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
