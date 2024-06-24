
# CX-0016 Company Attribute Verification v1.1.0

## ABSTRACT

The Company Attribute Verification is the method handling company attributes in a verifiable way based on Verifiable Credentials. It also describes the format of specific verifiable credentials. The following represents the technical documentation for the Company Attributes in the Platform Capability Identity and Access Management. This standard documentation defines the structures of Company Attributes.

## 1. INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

List for which roles the standard is relevant. Possible options, please delete the roles for which the standard isn’t relevant.

- Core Service Provider
- Data Provider / Consumer
- Onboarding Service Provider
- Consulting Services Provider

This document focuses on the handling and format of verifiable credential for unified verifiable attribute description of participant.

This document is relevant for core service providers who maintain the issuance of verifiable  credentials for specific company attributes.

For Data Provider it is relevant in case they are providing data in the context of a use case for which a specific company attribute is the criteria for granting appropriate access rights to specific data.

For the Data Consumer it is relevant to be able to present the according company attribute to be able to consume data based on the appropriate company attribute.

For an Onboarding Service Provider this standard is relevant due to the fact, that verifiable credentials containing and approving specific company attributes need to be issued at the moment of onboarding.

### 1.2 CONTEXT

> *This section is non-normative*

As mentioned in CX - 0014 Employees and Technical Users, the identity of any entity and actor (company, user, or technical client/connector is the summary of the describing attributes (e.g. company name, address, tax etc.). Considering the source of information depicted by an attribute, this source can be the actor itself, who claims to have a specific property, or a third party, which confirms a specific property of an actor. Being able as an actor to provide verifiable documentation about having a specific property strengthens the trust in that actor. In some cases of interaction there is the need to have certain attributes of an actor verified to accept the interaction. This document is meant to establish a unified verifiable attribute description for the following company attributes

- Business Partner Number (BPN): The Business Partner Number of the participant's legal entity
- Catena-X membership of a member company: The verification that the participant is a Catena-x member
- Dismantler Role: The verification that the participant is a dismantler and can act in that role based on verifiable credentials [W3C Verifiable Credential Data Model v1.1] (https://www.w3.org/TR/vc-data-model/).

### 1.3 ARCHITECTURE OVERVIEW

Not applicable for this standard in this version

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants MUST have an identity wallet described in the Standards **CX-0013 IDENTITY OF MEMBER COMPANIES** to receive the following credentials

- Business Partner Number (BPN) issued by the agency described in the standard **CX-0011  ISSUING AGENCY**
- A membership credential
- A credential verifying that the participant is a dismantler, in case the participant is one.

The identity wallet MUST be able to present these credentials to other partners and verify credentials issued for other partners and provided by these other partners.

A Core Service Provider MUST be able to issue:

- The membership credential following the W3C Standard for Self Sovereign Identity ([Decentralized Identifiers (DIDs) v1.0 (w3.org)](https://www.w3.org/TR/did-core/)) proving the Catena-X membership of the partner
- The BPN credential which will be issued by the agency described in the standard **CX-0011 ISSUING AGENCY**
- The dismantler credential for participants that will take part in Catena-X in this role. For the issuance of the Dismantler credential, a check of this attribute must be done to ensure the validity of that information

To validate these criteria for an own wallet implementation please collect the following documents:

- Arch42 Documentation explaining the architecture and process flows of the implementation Hand this documentation to the conformity assessment body

## 2. VERIFIABLE CREDENTIALS

> *This section is normative_

As described in CX-0013 - Identity of Member Companies, verifiable credentials are part of the Self Sovereign Identity (SSI) standard defined by the W3C. Credentials are used to assert that an entity has a specific property or capability. Verifiable credentials provide a mechanism to express these properties or capabilities in a digital way which is cryptographically secure, privacy respecting and machine verifiable.

In the issuance and verification, the following actors / roles are involved:

- Holder

  - A role or an entity might perform by possessing one or more verifiable credentials and generating verifiable presentations from them. Example holders include students, employees, and customers.

- Issuer

  - A role or an entity performs by asserting claims about one or more subjects, creating a verifiable credential from these claims, and transmitting the verifiable credential to a holder. Example issuers include corporations, non-profit organizations, trade associations, governments, and individuals.

- Subject

  - An entity about which claims are made. Example subjects include human beings, animals, and things. In many cases the holder of a verifiable credential is the subject, but in certain cases it is not. For example, a parent (the holder) might hold the verifiable credentials of a child (the subject), or a pet owner (the holder) might hold the verifiable credentials of their pet (the subject).

- Verifier
  - A role or an entity performs by receiving one or more verifiable credentials, optionally inside a verifiable presentation, for processing. Example verifiers include employers, security personnel, and websites.

- Verifiable data registry
  - A role or a system might perform by mediating the creation and verification of identifiers, keys, and other relevant data, such as verifiable credential schemas, revocation registries, issuer public keys, and so on, which might be required to use verifiable credentials. Some configurations might require co-relatable identifiers for subjects. Examples of verifiable data registries include trusted databases, ecentralized databases, government ID databases, and distributed ledgers. Often there is more than one type of verifiable data registry utilized in an ecosystem.

![vc_roles_flows](https://www.w3.org/TR/vc-data-model/diagrams/ecosystem.svg)

More information can be found here: https://www.w3.org/TR/vc-data-model/

### 2.1 VERIFIABLE CREDENTIALS FOR COMPANY ATTRIBUTES

A basic need in data exchange is the common understanding of data content. For that a common terminology is created. A verifiable credential is a dataset containing information about the participant the VC is issued for. For a common understanding the meaning of a VC the DID Standard defines the context. In the course of the definition of a verifiable credentials containing a company attribute the according context is also defined.

The context is a JSON Schema file defining the structure of the verifiable credential. The location of this JSON schema file offers

- Permissionless Accessibility
  - Every participant in- or outside of the Catena-X must be able to access the JSON Schema
- Update management
  - There is a well defined management of the updates of the files containing the JSON Schemas

### 2.2 BUSINESS PARTNER NUMBER CREDENTIAL

> *This section is normative*

This section is not aimed to standardize the content, structure, and the creation of the Business Partner Number. This is done by the standardization request CX-0010. The description here is about the issuance and the provision of the BPN as a verifiable attribute of the company.

As described in CX-0013, CX-0016 & CX-0017, the BPN is issued to the company by the BPN issuer as a VC. The data model of the BPN-VC must contain

- The credential context
- The credential type
- The date of issuance
- The credential subject
- The identifier of the holder

The schema and data model of the BPN Verifiable Credential is depicted as follows:

```json
{
    "id": "UUID",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/security/suites/jws-2020/v1",
        "https://raw.githubusercontent.com/catenax-ng/product-core-schemas/main/businessPartnerData"
    ],
    "type": ["VerifiableCredential", "BpnCredential"],
    "issuer": "<did>",
    "issuanceDate": "2021-06-16T18:56:59Z",
    "credentialSubject": {
        "id":"<did>",
        "type":"BpnCredential",
        "bpn":"bpn"
    }  
}
```

### 2.3 CATENA-X MEMBERSHIP CREDENTIAL

As described in CX-0013, CX-0016 & CX-0017, the membership credential, which confirms that the company is onboarded to Catena-X, is issued to the company by the portal as a VC. The data model of the BPN-VC must contain specific attributes. The corresponding schema and data model of the Catena-X Membership Verifiable Credential is depicted as follows:

```json
{
    "id": "UUID",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/security/suites/jws-2020/v1",
         "https://raw.githubusercontent.com/catenax-ng/product-core-schemas/main/businessPartnerData"
    ],
    "type": ["VerifiableCredential", "MembershipCredential",],
    "issuanceDate": "2021-06-16T18:56:59Z",
    "expirationDate": "2022-06-16T18:56:59Z",
    "issuer": "did", 
    "credentialSubject": {
        "id": "<did>",
        "type":"MembershipCredential",
        "holderIdentifier": "bpn",
        "memberOf":"Catena-X",
        "status":"Active",
        "startTime":"2021-06-16T18:56:59Z"
    }
}
```

### 2.4 DISMANTLER CREDENTIALS

Unlike the Business Partner Number and the Membership Credential, the Dismantler Credential is optional for specific participants beeing a dismantler. This credential is use case specific and issued to the participant by the Core Service Provider or Onboarding Service Provider after the according verification of the participant. It can be used to manage access to data based on the fact, that the consuming or providing participant is a dismantler. The schema of the Catena-X Dismantler Credential is depicted as follows:

```json
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/security/suites/jws-2020/v1",
        "https://raw.githubusercontent.com/catenax-ng/product-core-schemas/main/businessPartnerData"
    ],
    "id": "UUID",
    "issuer": "<did>",
    "type": ["VerifiableCredential", "DismantlerCredential"],
    "issuanceDate": "2021-06-16T18:56:59Z",
    "expirationDate": "2022-06-16T18:56:59Z",
    "credentialSubject": {
        "id": "<did>",
        "type": "DismantlerCredential", 
        "holderIdentifier": "<BPN>",
        "allowedVehicleBrands": ["Alfa Romeo", "Alpina", "BMW"] 
    }
}
```

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX-0011 ISSUING AGENCY
- CX-0013 IDENTITY OF MEMBERS COMPANIES
- CX-0014 IDENTITY OF EMPLOYEES AND TECHNICAL USERS

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
