# CX-0051 Summary Credential v1.0.0

## ABSTRACT

The Summary Credential is a Verifiable Credential collecting multiple attributes of a participant. The following represents the technical documentation for the Summary Credential in the Platform Capability Identity and Access Management. This standard documentation defines the structure of the Summary Credential.

## 1. INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

List for which roles the standard is relevant. Possible options, please delete the roles for which the standard isn’t relevant.

- Core Service Provider
- Data Provider / Consumer
- Onboarding Service Provider
- Consulting Services Provider

This document focuses on the schema of the Summary Credential based on the W3C Standard for Verifiable Credentials [W3C Verifiable Credential Data Model v1.1] (https://www.w3.org/TR/vc-data-model/).

This document is relevant for core service providers who maintain the issuance of verifiable  credentials for specific company attributes.

It is also relevant for onboarding service providers as they need to be able to issue verifiable credentials of specific attributes describing the onboarded participant.

For Data Provider it is relevant due to the fact that data provision and consumption can have an access control that is based on the roles as attribute of the consuming participant. On the other hand a Data Consumer must be able to validate the identity and role of the providing  participant.

### 1.2 CONTEXT

> *This section is non-normative*

The Summary Credential is issued by the Onboarding Service Provider to the Wallet of the participant and is exchanged by the connectors as a Verifiable Presentation in the course of data exchange. As the mentioned attributes include also use case specific roles, it is used to manage access to the requested data.

According to the roles a participant has in a specific data exchange scenario, different data sets are accessible for this participant as a Data Consumer. For a Data Provider the knowledge of the use case specific -or data exchange scenario specific- roles a Data Consumer has is a key feature for managing access to specific data. Based on the role of the Data Consumer the Data Provider is able to grant or deny access to the requested data. As the data exchange is done using the connector this access management is part the policies interpreted by the connector.

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

```text
This section is not applicable for this standards in this version.
```

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**,  **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

All Core Service Providers providing the issuance of a Summary Credential must ensure that this credential follows the structure described in section [2.2 SUMMARY CREDENTIAL STRUCTURE](#22-summary-credential-structure) and contain the appropriate fields (described in section [2.3 SUMMARY CREDENTIAL FIELD DETAILS](#23-summary-credential-field-details) of this document) for the participant the Summary Credential is issued for.

To validate these criteria of conformance to the Summary Credential please collect the following cocuments:

- Arch42 Documentation explaining the architecture, process flows and data structures of the implementation.
- The validation / control process of the  participant roles.

Hand this documentation to the conformity assessment body

### 1.6 EXAMPLES

```text
This section is not applicable for this standards in this version.
```

### 1.7 TERMINOLOGY

> *This section is non-normative*

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2. Summary Credential

> *This section is normative*

### 2.1 Summary Credential Content

The Summary Credential is a single credential including several attributes of the described participant. It is used as a certificate of the existence of verifiable credentials for the included attributes.
The attributes that can be listed in the summary credentials **if applicable to the participant** are the following:

- "MembershipCredential",
- "DismantlerCredential",
- "PcfCredential",
- "SustainabilityCredential",
- "QualityCredential",
- "TraceabilityCredential",
- "BehaviorTwinCredential",
- "BpnCredential"

### 2.2 Summary Credential Structure

The structure of the summary credential is as follows:

```json
 {
  "@context": [
    "https://w3id.org/2023/catenax/credentials/summary/v1"
  ],
  "id": "<credential uid>",
  "type": [
    "VerifiableCredential",
    "SummaryCredential"
  ],
  "issuer": "<did:web:issuer>",
  "issuanceDate": "2023-06-02T12:00:00Z",
  "expirationDate": "2022-06-16T18:56:59Z",
  "credentialSubject": {
    "id": "<did:web:subject>",
    "holderIdentifier": "<BPN>",
    "items": [
      "MembershipCredential",
      "DismantlerCredential",
      "PcfCredential",
      "SustainabilityCredential",
      "QualityCredential",
      "TraceabilityCredential",
      "BehaviorTwinCredential",
      "BpnCredential"
    ],
    "contractTemplates": "https://public.catena-x.org/contracts/"
  }
}
```

### 2.3 Summary Credential Field Details

- "id": The unique identifier of the credential.
- "type": The type of the Verifiable Credential. In this case "VerifiableCredential", "SummaryCredential"
- "issuer": The did of the issuer of this credential. In this case the core service provider or the onboarding service provider
- "issuanceDate": Date of issuance
- "expirationDate": Date of expiration
- "credentialSubject": Data about the participant the credential is issued for
  - "id": The did of the participant
  - "holderIdentifier": The Busines Partner Number of the participant
  - "items": The list of available Verifiable Credentials for the participant. This can be from the follwing list:
    - "MembershipCredential",
    - "DismantlerCredential",
    - "PcfCredential",
    - "SustainabilityCredential",
      - "QualityCredential",
      - "TraceabilityCredential",
      - "BehaviorTwinCredential",
      - "BpnCredential"
  - "contractTemplates": The ULR of the location of the Framework Agreements described in CX-0020 and mentioned in the credentialSubject

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

```text
This section is not applicable for this standard in this version.
```

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

```text
This section is not applicable for this standard in this version.
```

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

```text
This section is not applicable for this standard in this version.
```

## ANNEXES

### FIGURES

> *This section is non-normative*

```text
This section is not applicable for this standard in this version.
```

### TABLES

> *This section is non-normative*

```text
This section is not applicable for this standard in this version.
```

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
