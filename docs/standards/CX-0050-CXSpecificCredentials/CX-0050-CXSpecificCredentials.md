---
tags:
  - CAT/Enablement Service Provider
  - CAT/SSI
  - CAT/Core Service Provider
  - CAT/Identity Wallet
  - CAT/Sandbox Services
---

# CX-0050 CX-Specific Credentials v.2.2.0

## ABSTRACT

This standard defines all Catena-X specific Verifiable Credentials types.

## 1. INTRODUCTION

Within the Catena-X data space, specific Verifiable Credential types are used to attest certain claims.
This standard defines all of these Catena-X-specific credential types, which currently are the Membership Credential, the Business Partner Number Credential, the Framework Agreement Credential and the Dismantler Credential.

### 1.1 AUDIENCE & SCOPE

#### AUDIENCE

The standard is relevant for the following roles:

- Core Service Provider (CSP), as this is the entity issuing the Verifiable Credentials
- Data Provider and Consumer (DPC), as they exchange Verifiable Credentials

#### SCOPE

> *This section is non-normative*

This document covers the specification of the Catena-X specific Verifiable Credentials.
It describes

- the structure of the Verifiable Credentials
- the content of the Verifiable Credentials
- the field details of the Verifiable Credentials

### 1.2 CONTEXT

> *This section is non-normative*

Verifiable Credentials are a fundamental part of Self-Sovereign Identity.
A verifiable credential attests claims that the credential's issuer makes about the credential's subject.
They are essentially digital equivalents to analogue certificates.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The keywords **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

## 2. MAIN CONTENT

The following subsections each describe one Catena-X-specific credential type.

### 2.1 MEMBERSHIP CREDENTIAL

The Membership Credential attests that the credential subject is a member of the Catena-X dataspace.
It is issued to the participant by the CSP or a core service provider assigned issuer.

The Membership Credential MUST follow the schema below:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://eclipse-tractusx.github.io/MembershipCredential.schema.json",
  "type": "object",
  "required": [
    "id",
    "type",
    "issuer",
    "@context",
    "issuanceDate",
    "expirationDate",
    "credentialStatus",
    "credentialSubject"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "type": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "issuer": {
      "type": "string"
    },
    "@context": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "issuanceDate": {
      "type": "string",
      "format": "date-time"
    },
    "expirationDate": {
      "type": "string",
      "format": "date-time"
    },
    "credentialStatus": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "statusPurpose": {
          "type": "string"
        },
        "statusListIndex": {
          "type": "string"
        },
        "statusListCredential": {
          "type": "string"
        }
      }
    },
    "credentialSubject": {
      "type": "object",
      "required": [
        "id",
        "memberOf",
        "holderIdentifier"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "memberOf": {
          "type": "string"
        },
        "holderIdentifier": {
          "type": "string"
        }
      }
    }
  }
}
```

### 2.2 BPN Credential

The BPN Credential attests that a given Business Partner Number (BPN) is associated with the credential subject.
It is issued by the CSP.
For the content, structure, and creation of the Business Partner Number, see [CX-0010](https://catenax-ev.github.io/docs/standards/CX-0050-BusinessPartnerNumber).

The BPN Credential MUST follow the schema below:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": [
    "id",
    "type",
    "issuer",
    "@context",
    "issuanceDate",
    "expirationDate",
    "credentialSubject"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "type": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "issuer": {
      "type": "string"
    },
    "@context": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "issuanceDate": {
      "type": "string",
      "format": "date-time"
    },
    "expirationDate": {
      "type": "string",
      "format": "date-time"
    },
    "credentialStatus": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "statusPurpose": {
          "type": "string"
        },
        "statusListIndex": {
          "type": "string"
        },
        "statusListCredential": {
          "type": "string"
        }
      }
    },
    "credentialSubject": {
      "type": "object",
      "required": [
        "id",
        "bpn",
        "holderIdentifier"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "bpn": {
          "type": "string"
        },
        "holderIdentifier": {
          "type": "string"
        }
      }
    }
  }
}
```

### 2.3 Framework Agreement Credential

The Framework Agreement Credential attests that the credential subject has agreed to a framework defining the conditions for the data exchange.
It is issued by the CSP.
The conditions are defined by the contract template and contract version.

The Framework Credential MUST follow the schema below:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": [
    "id",
    "type",
    "issuer",
    "@context",
    "issuanceDate",
    "expirationDate",
    "credentialStatus",
    "credentialSubject"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "type": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "issuer": {
      "type": "string"
    },
    "@context": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "issuanceDate": {
      "type": "string",
      "format": "date-time"
    },
    "expirationDate": {
      "type": "string",
      "format": "date-time"
    },
    "credentialStatus": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "statusPurpose": {
          "type": "string"
        },
        "statusListIndex": {
          "type": "string"
        },
        "statusListCredential": {
          "type": "string"
        }
      }
    },
    "credentialSubject": {
      "type": "object",
      "required": [
        "id",
        "holderIdentifier",
        "group",
        "useCase",
        "contractTemplate",
        "contractVersion"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "holderIdentifier": {
          "type": "string"
        },
        "group": {
          "type": "string",
          "const": "UseCaseFramework"
        },
        "useCase": {
          "type": "string"
        },
        "contractTemplate": {
          "type": "string"
        },
        "contractVersion": {
          "type": "string"
        }
      }
    }
  }
}
```

To validate these criteria of conformance to the "Framework" the following information MUST be provided by the issuer:

- the validation/control process of the participants' agreement
- a documentation (e.g. based on Arc42) explaining the architecture, process flows and data structures of the implementation

### 2.4 DISMANTLER CREDENTIAL

The Dismantler Credential attests that the credential subject is a dismantler.

The Dismantler Credential MUST follow the schema below:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": [
    "id",
    "type",
    "issuer",
    "@context",
    "issuanceDate",
    "expirationDate",
    "credentialStatus",
    "credentialSubject"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "type": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "issuer": {
      "type": "string"
    },
    "@context": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "issuanceDate": {
      "type": "string",
      "format": "date-time"
    },
    "expirationDate": {
      "type": "string",
      "format": "date-time"
    },
    "credentialStatus": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "statusPurpose": {
          "type": "string"
        },
        "statusListIndex": {
          "type": "string"
        },
        "statusListCredential": {
          "type": "string"
        }
      }
    },
    "credentialSubject": {
      "type": "object",
      "required": [
        "id",
        "holderIdentifier",
        "activityType",
        "allowedVehicleBrands"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "holderIdentifier": {
          "type": "string"
        },
        "activityType": {
          "type": "string"
        },
        "allowedVehicleBrands": {
          "type": "array"
        }
      }
    }
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
