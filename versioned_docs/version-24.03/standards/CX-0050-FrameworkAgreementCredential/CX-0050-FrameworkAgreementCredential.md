# CX - 0050 Framework Agreement Credential v1.0.0

## ABSTRACT

The Framework Agreement Credential is a Verifiable
Credential which confirms that a participant has
signed a use case specific framework agreement.
The following represents the technical
documentation for the Framework Agreement
Credential in the Platform Capability Identity and
Access Management. This standard documentation
defines the structure of the Framework Agreement
Credential.

## 1. INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This document focuses on the schema of the
Framework Agreement Credential based on the W3C
Standard for Verifiable Credentials [W3C Verifiable Credential Data Model v1.1] (https://www.w3.org/TR/vc-data-model/).

This document is relevant for core service
providers who maintain the issuance of verifiable
credentials for specific company attributes.

For Data Provider it is relevant in case they are
providing data in the context of a use case for
which a Framework Agreement is negotiated and
confirmed for the data exchange.

For the Data Consumer it is relevant to be able to
present the approval to a use case specific
Framework Agreement to be able to consume data in
the context of this specific use case.

### 1.2 CONTEXT

> *This section is non-normative*

The Framework Agreement Credential is issued by
the Core Service Provider to the Wallet of the
participant and is exchanged by the connectors in
the course of data exchange. It is an attribute of
the participants which approves to another
participant that a Framework Agreement for a
specific use case is signed.

A use case framework agreement defines the
conditions for data exchange in a particular use
case. Having signed this framework agreement is
approved by a verifiable credential issued to the
signing participant. This is done by the core
service provider after an appropriate check of the
approval of the participant to the framework
agreement. The exchange of this credential allows
participants to validate each other that they have
agreed to the conditions defined in the framework
agreement.

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

```text
This section is not applicable for this standards in this version.
```

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all
authoring guidelines, diagrams, examples, and notes
in this specification are non-normative.
Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**,
**OPTIONAL**, **RECOMMENDED**, **REQUIRED**,
**SHOULD**
and **SHOULD NOT** in this document are
to be interpreted as described in BCP 14 [RFC2119]
[RFC8174] when, and only when, they appear in all
capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to
proof, that they are conform with the Catena-X
standards.
To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment
Bodies (CABs).

All Core Service Providers providing the issuance
of Use Case Framework Agreement Credentials must
ensure that these credentials follow the structure
described in section [2.2 FRAMEWORK AGREEMENT CREDENTIAL STRUCTURE](#22-framework-agreement-credential-structure) and
contain the data according to the linked
verifiable credentials of the collection in
section section [2.4 FRAMEWORK AGREEMENT CREDENTIAL COLLECTION](#24-framework-agreement-credential-collection)

All Core Service Providers providing the issuance
of Use Case Framework Agreement credentials must
ensure that the Use Case Framework Agreements have
been signed correctly by the participants.

To validate these criteria of conformance to the
Use Case Framework Agreements please collect the
following documents:

- Arch42 Documentation explaining the architecture, process flows and data structures of the implementation.
- The validation / control process of the participants signature

Hand this documentation to the conformity
assessment body

## 2. Framewwork Agreement Credential

> *This section is normative*

### 2.1 Framework Agreement Credential Content

The Framework Agreement Credential is a verifiable credential proving that the holder of the credential has signed a framework agreeemnt.
It contains the name of the use case framework agreement, a link to framework agreement document and the version of the use case agreement document.

### 2.2 Framework Agreement Credential Structure

The structure of the use case framework agreement credential is as follows:

```json
 {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/security/suites/jws-2020/v1",
        "https://raw.githubusercontent.com/catenax-ng/product-core-schemas/main/UseCaseVC"
    ],
    "id": "UUID",
    "issuer": "<did of OpCo>",
    "type": ["VerifiableCredential", "UseCaseFrameworkCondition"],
    "issuanceDate": "somedate",
    "expirationDate": "somedate",
    "credentialSubject": {
        "id": "<did>",
        "holderIdentifier": "<BPN>",
        "type": "<AGREEMENT-TYPE>",
        "contractTemplate": "<URL OF AGREEMENT/CONTRACT TEMPLATE>",
        "contractVersion": "<VERSION OF THE AGREEMENT TEMPLATE>"
    }
}
```

### 2.3 Framework Agreement Credential Field Details

- "id": The unique id of the credential.
- "type": The type of the Verifiable Credential. In this case "VerifiableCredential", "SummaryCredential"
- "issuer": The did of the issuer of this credential. In this case the core service provider or the onboarding service provider
- "issuanceDate": Date of issuance
- "expirationDate": Date of expiration
- "credentialSubject": Data about the participant the credential is issued for
  - "id": The did of the participant
  - "holderIdentifier": The Business Partner Number of the participant
  - "type": The identifier of the use case the framework agreement was signed for
  - "contractTemplate": The link to a framework agreement includung the version of the agreement fitting to use case or dat exchange scenario the summary credential is issued for
  - "contractVersion": "1.0.0": The version of the framework agreement which was signed by the participant.

### 2.4 Framework Agreement Credential Collection

### 2.4.1 Behavior Twin Use Case Credential

Agreement Type: **BehaviorTwinCredential**

Content:

```json
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/security/suites/jws-2020/v1",
        "https://raw.githubusercontent.com/catenax-ng/product-core-schemas/main/UseCaseVC"
    ],
    "id": "UUID",
    "issuer": "<did of OpCo>",
    "type": ["VerifiableCredential", "UseCaseFrameworkCondition"],
    "issuanceDate": "somedate",
    "expirationDate": "somedate",
    "credentialSubject": {
        "id": "<did>",
        "holderIdentifier": "BPN",
        "type": "BehaviorTwinCredential",
        "contractTemplate": "https://public.catena-x.org/contracts/behavior_twin.v1.pdf",
        "contractVersion": "1.0.0"
    }
}
```

### 2.4.2 PCF Use Case Credential

Type: **PcfCredential**

Content:

```json

{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1",
        "https://raw.githubusercontent.com/catenax-ng/product-core-schemas/main/UseCaseVC"
    ],
    "id": "UUID",
    "issuer": "<issuerDID>",
    "type": ["VerifiableCredential", "UseCaseFrameworkCondition"],
    "issuanceDate": "2021-06-16T18:56:59Z",
    "expirationDate": "2022-06-16T18:56:59Z",
    "credentialSubject": {
        "id": "<did>",
        "holderIdentifier": "<BPN>",
        "type": "PcfCredential",
        "contractTemplate": "https://public.catena-x.org/contracts/pcf.v1.pdf",
        "contractVersion": "1.0.0"
    }
}
```

### 2.4.3 Sustainablity Use Case Credential

Type: **SustainabilityCredential**

Content:

```json
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/security/suites/jws-2020/v1",
        "https://raw.githubusercontent.com/catenax-ng/product-core-schemas/main/UseCaseVC"
    ], 
    "id": "UUID",
    "issuer": "<issuerDID>",
    "type": ["VerifiableCredential", "UseCaseFrameworkCondition"], 
    "issuanceDate": "2021-06-16T18:56:59Z",
    "expirationDate": "2022-06-16T18:56:59Z", 
    "credentialSubject": {
        "id": "<did>",
        "holderIdentifier": "BPN of holder",
        "type": "SustainabilityCredential",
        "contractTemplate": "https://public.catena-x.org/contracts/sustainability.v1.pdf",
        "contractVersion": "1.0.0"
     
    }

}
```

### 2.4.4 Quality Use Case Credential

Type: **QualityCredential**

Content:

```json
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/security/suites/jws-2020/v1",
        "https://raw.githubusercontent.com/catenax-ng/product-core-schemas/main/UseCaseVC"
    ], 
    "id": "UUID",
    "issuer": "<issuerDID>",
    "type": ["VerifiableCredential", "UseCaseFrameworkCondition"], 
    "issuanceDate": "2021-06-16T18:56:59Z",
    "expirationDate": "2022-06-16T18:56:59Z", 
    "credentialSubject": {
        "id": "<did>",
        "holderIdentifier": "BPN of holder",
        "type": "QualityCredential",
        "contractTemplate": "https://public.catena-x.org/contracts/quality.v1.pdf",
        "contractVersion": "1.0.0"
     
    }
}
```

### 2.4.5 Resiliency Use Case Credential

Type: **ResiliencyCredential**

Content:

```json
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/security/suites/jws-2020/v1",
        "https://raw.githubusercontent.com/catenax-ng/product-core-schemas/main/UseCaseVC"
    ],
    "id": "UUID",
    "issuer": "<issuerDID>",
    "type": ["VerifiableCredential", "UseCaseFrameworkCondition"],
    "issuanceDate": "2021-06-16T18:56:59Z",
    "expirationDate": "2022-06-16T18:56:59Z",
    "credentialSubject": {
        "id": "<did>",
        "holderIdentifier": "BPN of holder",
        "type": "ResiliencyCredential",
        "contractTemplate": "https://public.catena-x.org/contracts/resiliency.v1.pdf",
        "contractVersion": "1.0.0"
    }
}
```

### 2.4.6 Traceability Use Case Credential

Type: **TraceabilityCredential**

Content:

```json
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/security/suites/jws-2020/v1",
        "https://raw.githubusercontent.com/catenax-ng/product-core-schemas/main/UseCaseVC"
    ],
    "id": "UUID",
    "issuer": "<issuerDID>",
    "type": ["VerifiableCredential", "UseCaseFrameworkCondition"],
    "issuanceDate": "2021-06-16T18:56:59Z",
    "expirationDate": "2022-06-16T18:56:59Z",
    "credentialSubject": {
        "id": "<did>",
        "holderIdentifier": "<BPN>",
        "type": "TraceabilityCredential",
        "contractTemplate": "https://public.catena-x.org/contracts/traceabilty.v1.pdf",
        "contractVersion": "1.0.0",
    }
}
