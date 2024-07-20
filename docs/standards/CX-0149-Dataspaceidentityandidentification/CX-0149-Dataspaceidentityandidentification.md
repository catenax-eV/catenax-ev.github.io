---
tags:
  - CAT/Enablement Service Provider
  - CAT/MIW
  - CAT/Core Service Provider
  - CAT/Identity Wallet
  - CAT/Sandbox Services (Beta)
---

# CX-0149 Verified Company Identity v1.0.0

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

- This document combines the previous standards `CX - 0016 Company Attribute Verification  v1.1.0` and `CX - 0017 Company Role by the Connector v1.0.1` including all needed information for the identification of a participant and the Dataspace clients acting on behalf of them
- Introducing the *Identity and Trust Protocol (IATP)* used within the identity presentation flow
- Introducing an API specification for the *Creation of Participants Wallet* as a foundation for the usage of multiple Wallet providers.

## ABSTRACT

This document specifies the requirements for the identification of Dataspace participants and the Dataspace clients acting on behalf of the participants for the enablement of a controlled and controllable data exchange. The requirements and prerequisites described here serve both data sovereignty and interoperability.

## 1. INTRODUCTION

Self-sovereign identity (SSI) allows you to take control of your own digital identity. Personal and company information are often spread across different platforms and at risk of data breaches. SSI provides a secure and decentralized solution. With SSI, individuals and companies can manage and verify their own identity information, without relying on centralized authorities or intermediaries.

- Concept of Decentralized Identity
  The idea is that a cryptic identifier is resolved to a document including two major things.
  The public key of the entity while the corresponding private key is in possession of the entity itself
  A list of links to specific service endpoints. One of these endpoints is the credential endpoint which offers *Verifiable Credentials* describing attributes of the entity
- Verifiable Credentials (VCs)
  Verifiable credentials are a digital representation of attributes about the entity that can be easily shared and verified by multiple entities. These credentials are typically issued by trusted organizations or institutions.
  These credentials are structured in a standardized format using open standards like W3C's Verifiable Credentials Data Model (https://www.w3.org/TR/vc-data-model/). VCs consist of verifiable claims that contain specific information about an entity and are digitally signed by the issuer using cryptographic techniques. This cryptographic signature ensures the integrity and authenticity of the credential and can be verified by relying parties.

In Catena-X Self-Sovereign Identity (SSI) is used to manage the identity of the Dataspace Participants on company level (company identity) and offering the ability to exchange participant attributes and information in a secure and standardized way. The individual level on users are not in scope - user identities are managed via the known OIDC flow.
Additionally eventhrough SSI enables you to fully self-manage your identity, it still allows to use provider offers - it is not necessarily limited to own managed solutions only.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

#### AUDIENCE

The description flows and data models for participants attributes -if form of Verifiable Credentials- is based on the definitions documented in the IATP which can be found here:  
[Identity-Trust](#31-normative-references)

The standard is relevant for the following roles, as they must be certified against it:

- Core Service Provider (A/B) (in case issuer components or wallets are provided)
- Enablement Service Provider (only in case wallets are provided)

The standard is relevant for the following role, as they must certify against this standard:

- Conformity Assessment Body

The standard is relevant for the following role, as they carry out their advisory on the basis of this standard.

- Advisory Provider

#### SCOPE

The self-sovereign identity (SSI) standard within the catena-X framework encompasses various aspects related to wallet creation, credential schemas, revocation flow, presentation flow, and lifecycle management. This standard document outlines the specifications and guidelines for implementing SSI within the catena-X ecosystem. It describes:

- **Wallet Creation**: The creation of a wallet for the participant which is used by him/her to exchange identity information in the process of data exchange
- **Credential Schemas** participant attributes credential schema specification of credentials that participants can utilize within the catena-X ecosystem. It provides the credential schema that capture relevant identity attributes and enable seamless interoperability between different solutions. Note: additional schemas and credentials may be covered in additional standard documents
- The lifecycle of the participant's Verifiable Credentials from issuance to revocation including the following:
  - Issuance of Verifiable Credentials
  - Presentation of Verifiable Credentials in form of a Verifiable Presentation
  - Revocation of issued Verifiable Credentials

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

Identity and Access Management (IAM) is a mandatory basic infrastructure for every IT-System. The identity
of any entity and actor (company, user, or technical client/connector) is the summary of the describing
attributes (e.g., Company Name, Address, Tax Number, etc.). To cover all aspects of interoperability, sovereignity, scalability, multi-network-connection, etc. the concept of authentication and authoriztaion needs with special focus on data transfer a robust, possible self-managed identity solution. The company must be identifiable in an independent way and interoperable in all networks. With SSI and Credentials this can get archived on a company level.

The purpose of this document is to unify the Digital Company Identity in a self-sovereign
manner. The digital identity of a Catena-X partner is the basis of any interaction with other partners. To
ensure independence and data sovereignty of one identity provider this identity - as the summary of the
describing attributes - must be under the sovereignty of the respective partner company.

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

`Core Service Provider (A/B)`

A Core Service Provider **MUST** ensure that all dataspace participants have an identity wallet implementing the IATP protocol.
A Core Service Provider can provide such a Wallet Hosting Service itself or consume a third-party Wallet Service.
In both cases the Core Service Provider **MUST** ensure that the offered Wallet Service provides the following requirements

- follow the W3C Standard for Self Sovereign Identity ([Decentralized
  Identifiers (DIDs) v1.0 (w3.org)](https://www.w3.org/TR/did-core/))

- Implements an appropriate Access Management to the Wallet using the Secure Token Service Concept described here [identity.protocol.base.md#6-using-the-oauth-2-client-credential-grant-to-obtain-access-tokens-from-an-sts](https://github.com/eclipse-tractusx/identity-trust/blob/2ef77ee4c08713e557581ab507acc618c738d170/specifications/identity.protocol.base.md#6-using-the-oauth-2-client-credential-grant-to-obtain-access-tokens-from-an-sts)

- furthermore implement at least the following functionalities
  - Issuance of Verifiable Credentials
  - Verification of Verifiable Credentials
  - Presentation of Verifiable Credentials

To validate these criteria for an own implementation of the Core Service Provider the following information **MUST** be handed to the Conformity Assessment Body by the Core Service Provider:

- A documentation (e.g. based on Arc42) explaining the architecture, process flows and data structures of the implementation.

`Enablement Service Provider`

An Enablement Service Provider (i.e. Wallet Service Provider) **MUST** ensure that the provided Wallet Service provides the following requirements:

- follow the W3C Standard for Self Sovereign Identity ([Decentralized Identifiers (DIDs) v1.0 (w3.org)](https://www.w3.org/TR/did-core/))

- Implements an appropriate Access Management to the Wallet using the Secure Token Service Concept described here [identity.protocol.base.md#6-using-the-oauth-2-client-credential-grant-to-obtain-access-tokens-from-an-sts](https://github.com/eclipse-tractusx/identity-trust/blob/2ef77ee4c08713e557581ab507acc618c738d170/specifications/identity.protocol.base.md#6-using-the-oauth-2-client-credential-grant-to-obtain-access-tokens-from-an-sts)

- furthermore implement at least the following functionalities

  - Issuance of Verifiable Credentials
  - Verification of Verifiable Credentials
  - Presentation of Verifiable Credentials

To validate these criteria for an own implementation of the Core Service Provider please collect the following documents:

- Arch42 Documentation explaining the architecture, access management
  and process flows of the implementation

```text
Disclaimer:

In future releases it will be possible for every participant to operate the identity wallet either by itself or by an other 3rd party provider (Wallet Hosting Provider)
An appropriate migration process from the offered Wallet Service to a self-hosted or 3rd party Wallet will be described; till that - the SSI service is a single solution service only
```

### 1.6 TERMINOLOGY

> *This section is non-normative*

| Term                          | Abbrevation | Description                                                                                                                                                                                                                                                                                                | Reference                                                                                                                    |
| ----------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Self-Sovereign Identity       | SSI         | Self-sovereign identity is the concept of individuals and organisations having full control and ownership over their digital identity, enabling them to manage and share their personal information securely and selectively.                                                                              |                                                                                                                              |
| Decentralized Identifiers     | DID         | Decentralized identity refers to a system where individuals and organisations have control over their identity and personal data through the use of blockchain or other decentralized technologies, eliminating the need for a third-party identity provider                        | [W3C vc-data-model](https://www.w3.org/TR/vc-data-model/)                                                 |
| Verifiable Credential         | VC          | A Verifiable credentials is a digital representations of information about an individual or organisation that can be easily shared and independently verified by multiple entities based on cryptographic concepts. VCs follow well defined Data Models to enable reusability and interoperability.        | [W3C did-core](https://www.w3.org/TR/did-core)                                                             |
| Verifiable Presentation       | VP          | A Verifiable presentation is the data model and the process of securely sharing and presenting digitally verifiable credentials or attributes to a relying party or verifier for authentication and validation purposes. The concept of VPs ensures both the authenticity of the holder and that of the VC | [W3C did-core](https://www.w3.org/TR/did-core/)                                                           |
| Identity and Trust Protocoll  | IATP        | IATP contains normative documents defining protocols and flows within the Identity and Trust system to be used in Tractus-X projects such as Catena-X                                                                                                                                                      | [Tractus-X IATP](https://github.com/eclipse-tractusx/identity-trust/tree/main) |
| Connector                     |             | (Catena-X) Technical component that allows business applications to interact with each other within a dataspace. Also referenced as Dataspace Client                                                                                                                                                       |                                                                                                                              |
| Dataspace Client              |             | (Catena-X) Technical component that allows business applications to interact with each other within a dataspace. Also referenced as Connector                                                                                                                                                              |                                                                                                                              |
| Business Partner Number (BPN) |             | Every participant in the Catena-X network has a unique, unchangeable identifier, called business partner number (BPN). The legal entity of an organization is represented by the Business Partner Number Legal Entity (BPNL)                                                                               | [CX - 0010 Business Partner Number](https://catena-x.net/de/standard-library)|
|Secure Token Service |STS|The Secure Token Service is a logical endpoint that creates self-issued identity tokens on behalf of a participant: |[Tractus-X STS](https://github.com/eclipse-tractusx/identity-trust/blob/2ef77ee4c08713e557581ab507acc618c738d170/specifications/identity.protocol.base.md#6-using-the-oauth-2-client-credential-grant-to-obtain-access-tokens-from-an-sts)|

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2. TRUSTFUL IDENTIFICATION OF PARTICIPANT AGENTS IN THE NETWORK

> *This section is normantive*

This section describes the following functionalities and processes:

- Creation of a participant wallet
- Credential Issuance
- Credential Presentation
- Credential Verification
- Credential Revocation

### 2.1 CREATION OF A PARTICIPANT WALLET

> *This section is normantive*

The purpose of this section is to ensure consistency and compatibility between the Core Service Provider, the Issuer and and a Wallet Provider. By following these guidelines, we can streamline the integration process and improve the overall user experience. To ensure this, this section describes the guidelines for the integration interfaces of the "Create Wallet Customer Instance" functionality. All Provider of a Wallet that want to integrate as wallet provider to the CSP-A/CSP-B MUST adhere to these guidelines. Additionally the MUST criteria for Core Service Providers are referenced as well.

### 2.1.1 INTERFACE DETAILS

The "Create Wallet Customer Instance" interface MUST meet the following requirements:

**Data Format**: The data exchanged between the CSP system and the external registration component SHOULD BE in JSON format. This ensures a standardized and easily parsable data structure.

**Endpoint**: All endpoints in the reference of this standard section MUST be secured and accessible via HTTPS. This ensures data confidentiality and integrity during transmission.

**Authentication**: All endpoints in the reference of this standard section MUST support authentication mechanism OAuth 2.0 OIDC via technical user (ClientID and Secret). This ensures secure access to the wallet functionality and prevents unauthorized usage.

**Interface Implementation**:

**Outbound Interface**
The Core service provider MUST support the "Create Wallet Customer Instance" interface via the integration to the Enablement Service Provider (Wallet) and triggering of the wallet instance creation as part of the registration process with the following details:

```json
{
  "businessPartnerNumber": "string",
  "companyName": "string",
  "didUrl": "string"
}
```

The endpoint itself is provided by the Enablement Service Provider and described below.

**Inbound "Create Customer Instance" - Request Body Structure**: The request structure (of the external wallet provided inbound interface) MUST follow the request body structure:

**Method:** `POST`

```json
{
  "businessPartnerNumber": "string",
  "companyName": "string",
  "didUrl": "string"
}
```

Additional fields may be included based on specific business requirements.

**Outbound "Create Customer Instance Asynchron Response" - Request Body Structure**: The REST API request body implemented by the Core Service Provider MUST follow to:

**Method:** `POST`

```json
{
  "didDocument": "string",
  "authenticationDetails": [
    {
      "authenticationServiceUrl": "string",
      "clientID": "uuid",
      "clientSecret": "****"
    }
  ]
}
```

- did document (to be stored inside the portal db, connected to the company; and to be published by the operator/portal)
- authenticationServiceUrl (to be stored since we need this later for being able to push VCs into the walletTenant)
- clientId (to be stored since we need this later for being able to push VCs into the walletTenant)
- clientSecret (to be stored since we need this later for being able to push VCs into the walletTenant)
- tbc: walletCustomerInstanceUrl (under clarification; might be not relevant)

The Enablement Service Provider MUST support the "Asynchrone Response of Create Wallet Customer Instance" interface with the integration to the Core Service Provider provided endpoint.

**Error Handling**: The wallet provider inbound interface should handle errors gracefully and support following scenarios:

- 400 endpoint not found
- 401 no valid user credentials
- 403 missig permission
- 404 unallowed didURL, unallowedCompanyName, unallowed BPN

**NOTE**: The interface definition above is valid for Catena-X release 24.05, it is planned to further enhance and adjust the *“way of integration”* for a multi-wallet concept with the upcoming releases.

### 2.2 CREDENTIAL ISSUANCE

The Self-Sovereign Identity (SSI) credential issuance flow enables the issuance and verification of verifiable credentials. Verifiable credentials are digital representations of identity information that can be securely shared and verified without relying on a central authority.

The SSI credential issuance flow involves a series of steps to ensure the authenticity, integrity, and privacy of the issued credentials. These steps typically include:

**Identity Verification**: Before issuing a credential, the identity of the participant requesting the credential needs to be verified. This involves a thorough verification process to ensure that the participant's identity information is accurate and reliable.

**Credential Request**: Once the participant's identity is verified, they can request a specific credential from the issuer. The credential request includes the necessary information and attributes required for the issuance of the credential.

**Credential Issuance**: The issuer, after validating the participant's request and verifying the necessary information, generates and issues the verifiable credential. The credential is digitally signed by the issuer to ensure its authenticity and integrity.

**Credential Delivery**: The issued credential is securely delivered to the participant's wallet or digital identity repository. The delivery mechanism ensures the confidentiality and privacy of the credential during transit.

The SSI credential issuance flow is designed to provide participants with secure and trusted credentials that can be easily shared and verified across different systems and organizations. It empowers individuals with control over their identity information while maintaining the privacy and integrity of their credentials.

### 2.2.1 CREDENTIAL BASICS

- The encoding format for VCs and Verifiable Presentations (VP) is JWT `ES256K/secp256k1`.
- Authorities allowed to issue credentials are public available (via BPN, name and credentialType) via the Association or CSP-B
- All Authroities **MUST** follow the allowed credential type schema as defined in this standard as well as the CX-0050

The CSP-B **MUST** ensure that participants of the dataspace holding the folloiwng credentials as a minimum:

- Membership Credential
- Business Partner Number (BPN) Credential

Any other credentials which may defined in this or other Catena-X standards are optional for the dataspace entry.

Following the credential and the according schemas for the mentioned credential are described:

### 2.2.1.1 MEMBERSHIP CREDENTIAL

The membership credential confirms that the participant is onboarded to Catena-X and agreed to the Catena-X terms and conditions. The credential is issued to the participant by the core service provider or a core service provider assigned issuer. The data model of the membership credential must contain the attributes depicted in the following schema:

```json
{
  "id": "uuid",
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/catenax/credentials/v1.0.0"
  ],
  "type": ["VerifiableCredential", "MembershipCredential"],
  "issuanceDate": "{creation date - format: 2022-06-16T18:56:59Z}",
  "expirationDate": "{expiration date - format: 2022-06-16T18:56:59Z}",
  "issuer": "{did issuer}",
  "credentialSubject": {
    "id": "{did holder}",
    "holderIdentifier": "{bpn}",
    "memberOf": "{membership level}"
  }
}
```

The content of the credential is explained as follows:

- `id` is the uuid of the newly created credential - the uuid is defined by the issuer component
- `context` is fix defined for the current used schema - we should already consider that the schema might get updated in future ideally we are flexible to have this scenario that the old schema is set to "INACTIVE" and a new schema is used for new created credentials
- `type` is fix defined for this specific credential
- `issuanceDate` calculated on runtime
- `expirationDate` calculated by the issuer component based on defined credential static data expiry date => always not > 12 month
- `issuer` holds the issuer did
- `credentialSubject`  
  contains attributes of the participant, the credential is issued for
  - `id`: the did of the participant
  - `type`: the type of attribute, in this case the `MembershipCredential`
  - `holderdentifier`: the BPN of the participant
  - `memberOf`: the network for which the membership credential is issued

### 2.2.1.2 BUSINESS PARTNER NUMBER

This section is not aimed to standardize the content, structure, and the creation of the Business Partner Number. This is done by the standard CX-0010. This section describes the schema of the Business Partner Number credential issued for the participant.

The BPN credential contains the Business Partner Number of the part and is issued by the core service provider. The data model of the BPN credential **MUST** contain the attributes depicted in the following schema:

```json
{
  "id": "uuid",
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/catenax/credentials/v1.0.0"
  ],
  "type": ["VerifiableCredential", "BpnCredential"],
  "issuanceDate": "{creation date - format: 2022-06-16T18:56:59Z}",
  "expirationDate": "{expiration date - format: 2022-06-16T18:56:59Z}",
  "issuer": "{did issuer}",
  "credentialSubject": {
    "id": "{did holder}",
    "holderIdentifier": "{bpn}",
    "bpn": "{bpn}"
  }
}
```

The content of the credential is explained as follows:

- `id` is the uuid of the newly created credential - the uuid is defined by the issuer component
- `context` is fix defined for the current used schema - we should already consider that the schema might get updated in future ideally we are flexible to have this scenario that the old schema is set to "INACTIVE" and a new schema is used for new created credentials
- `type` is fix defined for this specific credential
- `issuanceDate` calculated on runtime
- `expirationDate` calculated by the issuer component based on defined credential static data expiry date => always not > 12 month
- `issuer` holds the issuer did
- `credentialSubject`  
  contains attributes of the participant, the credential is issued for
  - `id`: the did of the participant
  - `holderIdentifier`: the Business Partner Number (BPN) of the holder
  - `bpn`: the actual Business Partner Number (BPN)

### 2.2.1.3 SPECIAL CREDENTIAL: DISMANTLER CREDENTIAL

Unlike the Business Partner Number and the Membership Credential, the Dismantler Credential is optional for specific participants being a dismantler. This credential is use case specific and issued to the participant by the Core Service Provider after the according verification of the participant.
It can be used to manage access to data based on the fact, that the consumer is a dismantler.
The schema of the Catena-X Dismantler Credential is depicted as follows:

```json
{
  "id": "uuid",
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/catenax/credentials/v1.0.0"
  ],
  "type": ["VerifiableCredential", "DismantlerCredential"],
  "issuanceDate": "{creation date - format: 2022-06-16T18:56:59Z}",
  "expirationDate": "{expiration date - format: 2022-06-16T18:56:59Z}",
  "issuer": "{did issuer}",
  "credentialSubject": {
    "id": "did:web:com.example.participant",
    "holderIdentifier": "BPNL000000001",
    "activityType": "vehicleDismantle",
    "allowedVehicleBrands": ["Alfa Romeo", "Alpina", "BMW"]
  }
}
```

The content of the credential is explained as follows:

- `id` is the uuid of the newly created credential - the uuid is defined by the issuer component
- `context` is fix defined for the current used schema - we should already consider that the schema might get updated in future ideally we are flexible to have this scenario that the old schema is set to "INACTIVE" and a new schema is used for new created credentials
- `type` is fix defined for this specific credential
- `issuanceDate` calculated on runtime
- `expirationDate` calculated by the issuer component based on defined credential static data expiry date => always not > 12 month
- `issuer` holds the issuer did
- `credentialSubject`  
  contains attributes of the participant, the credential is issued for
  - `id`: the did of the participant
  - `holderdentifier`: the BPN of the participant
  - `acticityType`: the type of services offered by the participant.  
    *For Release 24.05 the allowed entry is `vehicleDismantle`*
  - `allowedVehicleBrands`: the brands of vehicles the participant is allowed and/or certified to offer the services listed in `activityTypes`.  
    *For Release 24.05 this is a free text field and **MAY** contain any string.*

### 2.3 CREDENTIAL PRESENTATION

- IATP - Auth Flow
  > *This section is normantive*

The presentation of verifiable credentials between the connectors (described in CX-0018) of the participants follows the Identity And Trust Protocol [Identity-Trust](#31-normative-references), which describes the details of the credential presentation in the document [Credential Presentation Protocol](#31-normative-references).

The following figure shows the presentation flow defined by IATP

![auth.flow.png](./assets/auth.flow.png)

Explanation of the entities:

- `Client`: the `connector` (described in CX-0018) of the data consumer that will request data from a data provider
- `Secure Token Service`: is a logical endpoint that creates self-issued identity tokens on behalf of a participant". This concept is described here: [identity.protocol.base.md#6-using-the-oauth-2-client-credential-grant-to-obtain-access-tokens-from-an-sts](https://github.com/eclipse-tractusx/identity-trust/blob/2ef77ee4c08713e557581ab507acc618c738d170/specifications/identity.protocol.base.md#6-using-the-oauth-2-client-credential-grant-to-obtain-access-tokens-from-an-sts)
- `Credential Service`. the service of the participant's wallet or the wallet tenant which provides the verifiable credentials wrapped into a verifiable presentation
- `Verifier`: the `connector` (described in CX-0018) of the data provider that will be requested for data provision and will receive the credentials in a verifiable presentation by presenting the previously received token

### 2.4 CREDENTIAL REVOCATION

> *This section is normative*

The issuer **MUST** ensure the support of the following 3 credential revocation/expiry scenarios:

- Revocation by holder
- Revocation by issuer
- Expiry

In all the three scenarios the credential **MUST** be set invalid to enable validation services such as the connector to identify the invalid/inactive credential and to decline the credential usage for any data access/view/negotation process.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- [CX-0010:2.0 Business Partner Number](https://catena-x.net/de/standard-library)
- [CX-0011:1.0 Issuing Agency](https://catena-x.net/de/standard-library)
- [CX-0015:1.0 IAM & Access Control Paradigm](https://catena-x.net/de/standard-library)
- [CX-0050:2.0 Framework Agreement Credential](https://catena-x.net/de/standard-library)

- [Identity Trust](https://github.com/eclipse-tractusx/identity-trust/tree/0.8.1/specifications)
- [Credential Presentation Protocol](https://github.com/eclipse-tractusx/identity-trust/blob/0.8.1/specifications/verifiable.presentation.protocol.md)

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
