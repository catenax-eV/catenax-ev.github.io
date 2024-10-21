---
tags:
  - CAT/Portal
  - CAT/Core Service Provider
  - CAT/Sandbox Services (Beta)
  - CAT/Sandbox Service Provider
---

# CX-0001 EDC Discovery API v1.0.3

## ABSTRACT

The definition and introduction of a cross-industry standard for the discovering of EDC instances is crucial for the networking of OEMs, suppliers, consumers, and industrial partners to automatically look up services and data. In a high competing eco systems data are the new oil. Even meta data on data offerings can provide business sensitive information. Hence even meta data for data offerings will be secured via an EDC endpoint.

As the Catena-X network expands, a sizable amount of data assets will be available via EDC connection technology. It could be difficult to efficiently identify the proper EDC endpoint within the network.

To be GAIA-X compliant each EDC endpoint must provide a Self Description (SD) of type ServiceOffering. Based on these SD a Data & Service Discovery Service must be provided to easily look up suitable EDC instances to query data offerings efficiently.

## 1. Introduction

Participants do not want their personal information made public. As a
result, these may only be searched indirectly, which necessitates
knowing or establishing who the data should be obtained from. Because no
one wants to examine every EDC instance (load of the net, latency
becomes ever larger with increasing number of participants, procedure
does not scale thus). As a result, the number of EDC instances requested
must be limited by suitable filters. As a result, subscribers must first
determine who may have the data depending on their specific
circumstances. This is performed by utilizing the EDC discovery service.
The Business Partner Number (BPN) is currently the only criterion
provided for restricting the EDC instances in question.

This standard has not the scope and intention to be a general solution
pattern to search and discover any service and data offer. It is limited
to look up the EDC instance in front of these service and data
offerings.

### 1.1 Audience & Scope

> *This section is non-normative*

This standard is relevant for the following roles:

- Data Provider / Consumer
- Business Application Provider
- Core Service Provider
- Onboarding Service Provider
- Enablement Service Provider

For now, the EDC Discovery API is limited to filter suitable EDC
instances based on BPN number providing data and service offerings. This
document describes the relevant API endpoint to be created by an
operating company to enable EDC discovery by supported criterions
(currently on the BPN number).

### 1.2 Context

> *This section is non-normative*

The EDC Discovery API is used to search and find service and data
offerings. In a network of network this is the most crucial topic to
build value added data services and data chains.

### 1.3 Architecture Overview

> *This section is non-normative*

![CX-0001-main-components.png](./assets/CX-0001-main-components.png)

Figure 2 Main Components

In Figure 2 a high-level overview of the EDC Discovery Service workflow
is sketched. Both connectors must be registered within an identity
provider providing Verifiable Credentials (VC) to prove their identity by e.g. a Managed Identity Wallet (MIW). Any
data provider can register assets and expose them to a metadata broker
(Federated Catalog) for other consuming connectors to find. For
registration Self Descriptions of Type LegalPerson and ServiceOffering
for the providing EDC instance must be registered at the federated
catalog. Via EDC Discovery Service the EDC instance can be queried via
BPN number, which is part of the SD artifacts. Finally, the consumer can
obtain contract offers from the provider and begin contract
negotiations.

The federated Catalog will be the storage of SD and the EDC Discovery Service the query API to retrieve URL of EDC instance of interest. There is no longer a central Digital Twin Registry (DTR) available from core service, but decentral instances (DDTR) hidden behind a data providing EDC. Hence any consumer has to identify the providing EDC to get access to the DDTR behind that EDC.

### 1.4 Conformance

As well as sections marked as non-normative, all authoring guidelines,
diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,
SHOULD and SHOULD NOT in this document are to be interpreted as
described in [BCP
14](https://datatracker.ietf.org/doc/html/bcp14) \[[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)\]
\[[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)\] when, and
only when, they appear in all capitals, as shown here.

### 1.5 Proof of conformity

All participants and their solutions will need to proof, that they are
conform with the Catena-X standards. To validate that the standards are
applied correctly, Catena-X employs Conformity Assessment Bodies
(CABs).

- The Service Operator **MUST** provide an onboarding process for
    participants and EDC instances. According to CX - 0006 Registration
    and initial onboarding

- The implemented service **MUST** use an SD storage like SD-Hub or
    Federated Catalogue for storing the SD documents provided during the
    onboarding process.

- The provided SD documents **MUST** be GAIA-X compliant, i.e. **MUST**
    provide a compliance credential issued from GAIA-X AISBL.

- The implemented service **SHOULD** use the SD storage as source of
    truth.

A test case could be, that an EDC instance has to be onboarded for a specific participant identified by a BPN. The SD for the EDC has to be visible in the supported SD storage (currently central hosted by the Core Service Provider). The SD documents has to be accessible by the dataspace participants.

### 1.6 Examples

**SD for Legal Person**

```
{

\"id\": <https://compliance.gaia-x.eu/.well-known/participant.json>,

\"@context\": \[

<https://www.w3.org/2018/credentials/v1>,

<https://registry.gaia-x.eu/v2206/api/shape/files?file=participant&type=jsonld>,

<https://raw.githubusercontent.com/eclipse-tractusx/sd-factory/main/src/main/resources/verifiablecredentials.jsonld/sd-document-v22.10.jsonld>,

<https://w3id.org/vc/status-list/2021/v1>

\],

\"type\": \[

\"VerifiableCredential\",

\"LegalPerson\"

\],

\"issuer\": \"did:sov:Bq3Nk9Z7sT8KeqNCnG4PrB\",

\"issuanceDate\": \"2022-09-23T23:23:23.235Z\",

\"credentialSubject\": {

\"ctxsd:bpn\": \"1234\",

\"id\": \"did:web:compliance.gaia-x.eu\",

\"gx-participant:name\": \"Gaia-X AISBL\",

\"gx-participant:legalName\": \"Gaia-X European Association for Data and
Cloud AISBL\",

\"gx-participant:registrationNumber\": {

\"gx-participant:registrationNumberType\": \"local\",

\"gx-participant:registrationNumberNumber\": \"0762747721\"

},

\"gx-participant:headquarterAddress\": {

\"gx-participant:addressCountryCode\": \"BE\",

\"gx-participant:addressCode\": \"BE-BRU\",

\"gx-participant:streetAddress\": \"Avenue des Arts 6-9\",

\"gx-participant:postalCode\": \"1210\"

},

\"gx-participant:legalAddress\": {

\"gx-participant:addressCountryCode\": \"BE\",

\"gx-participant:addressCode\": \"BE-BRU\",

\"gx-participant:streetAddress\": \"Avenue des Arts 6-9\",

\"gx-participant:postalCode\": \"1210\"

},

\"gx-participant:termsAndConditions\":
\"70c1d713215f95191a11d38fe2341faed27d19e083917bc8732ca4fea4976700\"

},

\"credentialStatus\": {

\"id\":
<https://managed-identity-wallets.int.demo.catena-x.net/api/credentials/status/315de87e-713c-4bd8-aa58-a31a4189b71f#7>,

\"type\": \"StatusList2021Entry\",

\"statusPurpose\": \"revocation\",

\"statusListIndex\": \"7\",

\"statusListCredential\":
<https://managed-identity-wallets.int.demo.catena-x.net/api/credentials/status/315de87e-713c-4bd8-aa58-a31a4189b71f>

},

\"proof\": {

\"type\": \"Ed25519Signature2018\",

\"created\": \"2023-02-08T14:12:12Z\",

\"proofPurpose\": \"assertionMethod\",

\"verificationMethod\": \"did:sov:Bq3Nk9Z7sT8KeqNCnG4PrB#key-1\",

\"jws\":
\"eyJhbGciOiAiRWREU0EiLCAiYjY0IjogZmFsc2UsICJjcml0IjogWyJiNjQiXX0..E4x-UYAS6d4UqK6cuaRLzJ4ZgZxUZL6NrMZePmqPZjt5XckcYU7HK1iTV9OuBJxj8YkeZxWCYsC4E5QkeliOCg\"

},

> {\
> \"complianceCredential\": {\
> \"@context\": \[\"https://www.w3.org/2018/credentials/v1\"\],\
> \"type\": \[\"VerifiableCredential\", \"ParticipantCredential\"\],\
> \"id\":
> \"https://catalogue.gaia-x.eu/credentials/ParticipantCredential/1664629337488\",\
> \"issuer\": \"did:web:compliance.gaia-x.eu\",\
> \"issuanceDate\": \"2022-10-01T13:02:17.489Z\",\
> \"credentialSubject\": {\
> \"id\": \"did:web:compliance.gaia-x.eu\",\
> \"hash\":
> \"3280866b1b8509ce287850fb113dc76d1334959c759f82a57415164d7a3a4026\"\
> },\
> \"proof\": {\
> \"type\": \"JsonWebSignature2020\",\
> \"created\": \"2022-10-01T13:02:17.489Z\",\
> \"proofPurpose\": \"assertionMethod\",\
> \"jws\":
> \"eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YQAIjkqX6OL4U3efV0zumn8-l8c4wQo98SOSlzt53HOR8qlLu5L5lmwZJnAsR7gKW-6jv5GBT0X4ORQ1ozLvihFj6eaxxJNgzLFPoH5w9UEaEIO8mMGyeQ-YQYWBbET3IK1mcHm2VskEsvpLvQGnk6kYJCXJzmaHMRSF3WOjNq_JWN8g-SldiGhgfKsJvIkjCeRm3kCt_UVeHMX6SoLMFDjI8JVxD9d5AG-kbK-xb13mTMdtbcyBtBJ_ahQcbNaxH-CfSDTSN51szLJBG-Ok-OlMagHY_1dqViXAKl4T5ShoS9fjxQItJvFPGA14axkY6s00xKVCUusi31se6rxC9g\",\
> \"verificationMethod\": \"did:web:compliance.gaia-x.eu\"\
> }\
> }\
> }

}
```

**SD for ServiceOffering**

```
"**"{
   "**\
**\""selfDescriptionCredential\": {**\
**\"@context\": \[**\
**\"https://www.w3.org/2018/credentials/v1\",**\
**\"https://registry.gaia-x.eu/v2206/api/shape\"**\
**\],**\
**\"type\": \[**\
**\"VerifiableCredential\",**\
**\"ServiceOfferingExperimental\"**\
**\],**\
**\"id\":
\"https://compliance.gaia-x.eu/.well-known/serviceComplianceService.json\",**\
**\"issuer\": \"did:web:delta-dao.com\",**\
**\"issuanceDate\": \"2022-09-25T23:23:23.235Z\",**\
**\"credentialSubject\": {**\
**\"id\":
\"https://compliance.gaia-x.eu/.well-known/serviceComplianceService.json\",**\
**\"gx-service-offering:providedBy\":
\"https://compliance.gaia-x.eu/.well-known/participant.json\",**\
**\"gx-service-offering:name\": \"Gaia-X Lab Compliance Service\",**\
**\"gx-service-offering:description\": \"The Compliance Service will
validate the shape and content of Self Descriptions. Required fields and
consistency rules are defined in the Gaia-X Trust Framework.\",**\
**\"gx-service-offering:webAddress\":
\"https://compliance.gaia-x.eu/\",**\
**\"gx-service-offering:termsAndConditions\": \[**\
**{**\
**\"gx-service-offering:url\":
\"https://compliance.gaia-x.eu/terms\",**\
**\"gx-service-offering:hash\": \"myrandomhash\"**\
**}**\
**\],**\
**\"gx-service-offering:gdpr\": \[**\
**{**\
**\"gx-service-offering:imprint\": \"https://gaia-x.eu/imprint/\"**\
**},**\
**{**\
**\"gx-service-offering:privacyPolicy\":
\"https://gaia-x.eu/privacy-policy/\"**\
**}**\
**\],**\
**\"gx-service-offering:dataProtectionRegime\": \[**\
**\"GDPR2016\"**\
**\],**\
**\"gx-service-offering:dataExport\": \[**\
**{**\
**\"gx-service-offering:requestType\": \"email\",**\
**\"gx-service-offering:accessType\": \"digital\",**\
**\"gx-service-offering:formatType\": \"mime/png\"**\
**}**\
**\],**\
**\"gx-service-offering:dependsOn\": \[**\
**\"https://compliance.gaia-x.eu/.well-known/serviceManagedPostgreSQLOVH.json\",**\
**\"https://compliance.gaia-x.eu/.well-known/serviceManagedK8sOVH.json\"**\
**\],**

**""ctxsd":"connector-url\"": ""https":"\"**\
**},**\
**\"proof\": {**\
**\"type\": \"JsonWebSignature2020\",**\
**\"created\": \"2022-09-25T22:36:50.274Z\",**\
**\"proofPurpose\": \"assertionMethod\",**\
**\"verificationMethod\": \"did:web:compliance.gaia-x.eu\",**\
**\"jws\":
\"eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Chbzpl0-4S3sobkKXyBjfx6pm74xLHInOmruHUmO\--3HpMcrfKldeJQPYLrUWsEJ1HIjMUqxE6QymZRxXfuRlAJKy2nwyM3S5sFX9YJ8bepBcf6q-nWGTDX-jh8wuyX3lwrG94aJnTBByKPLCovSiZ9BURR3cwiSHczBlM7iP90ee5roHOtI-eoqSBYrYaynTaK5eQaWfT-2OdXYgqVPSRJAK2KD5AqEM8KU7x6nnP6-shgSNBIEC1fAOTfAEUYkcrK8Tn4BTaH02HnO3B90S1MWyAWwBzrnmS915CFY4BiHsp9Tz7pt016c8HB8HE7gqoXndk7DUhzgNE2mRbHuLg\"**\
**}**\
**},**\
**\"complianceCredential\": {**\
**\"@context\": \[**\
**\"https://www.w3.org/2018/credentials/v1\"**\
**\],**\
**\"type\": \[**\
**\"VerifiableCredential\",**\
**\"ServiceOfferingCredentialExperimental\"**\
**\],**\
**\"id\":
\"https://catalogue.gaia-x.eu/credentials/ServiceOfferingCredentialExperimental/1664145414932\",**\
**\"issuer\": \"did:web:compliance.gaia-x.eu\",**\
**\"issuanceDate\": \"2022-09-25T22:36:54.932Z\",**\
**\"credentialSubject\": {**\
**\"id\":
\"https://compliance.gaia-x.eu/.well-known/serviceComplianceService.json\",**\
**\"hash\":
\"eeac8a9b5b6750f13fbc548299b22b73d6beea13f19e71856d0027b5cd42069c\"**\
**},**\
**\"proof\": {**\
**\"type\": \"JsonWebSignature2020\",**\
**\"created\": \"2022-09-25T22:36:54.932Z\",**\
**\"proofPurpose\": \"assertionMethod\",**\
**\"jws\":
\"eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..SibPFxPtfsKP439SjoKo5VtmU_EpgsfuEjghCt_8sG2fUYT6s9CTY8jyEniGUkk7BIWnIYNsuuKudlNBD27kwzdTy6bZX9Jq0OaAaCpgZAZ9vlp7oFZF3ysLcERmBAixzGUjL0sny06Mu7IRCcDYVhLyd6flOvUGtH2I6T9u6UZL8cN1advRYKd4BSumAp5d4cCG-7cg7DCqPXk_M8cTvU8mDeXvXfciv7sIqvkwqd2L-T4kbxmPTCY3r3wPoVHGBDa3Gnntwkz3_aVInjbztchH-WmlDpCPv1hTv4uZNenNZVw7xsx1_o0voJJLSGtlYNhW4rk2oDxr4qie3S-Zgw\",**\
**\"verificationMethod\": \"did:web:compliance.gaia-x.eu\"**\
**}**\
**}**\
**}**"
```

### 1.7 Terminology

> *This section is non-normative*

The following terms are especially relevant for the understanding of the
standard:

**Business Partner Number (BPN)**

A BPN is the unique identifier of a partner within Catena-X.

**Self Description (SD)**

Gaia-X requires all providers to describe themselves and their service
offerings using standardized, machine-readable metadata called
Self-Descriptions. Such Self-Descriptions will for example include
information like the address of a company, a specific service
description or certificates and labels.

Additional terminology used in this standard can be looked up in the
glossary on the association homepage.

## 2 EDC Discovery API

> *This section is normative*

The EDC discovery service **MUST** be offered as central available endpoint by the Core Service Provider.
Every EDC registered in the network **MUST** be registered in the EDC discovery service. Therefore the needed workflows/processes (as defined in CX - 0006 Registration and initial onboarding) **MUST** be followed/implemented.

The EDC discovery endpoint can get triggered via technical as well as
real users, if relevant roles are available.

For technical user, a company can request the user creation with the
technical user creation feature inside the portal.

All participants and their solutions will need to proof, that they are
conform with the Catena-X standards. To validate that the standards are
applied correctly, Catena-X employs Conformity Assessment Bodies
(CABs).

- The Core Service Provider **MUST** offer a process/workflow to register dataspace connectors (as defined in CX - 0006 Registration and initial onboarding); Enablement Service Provider as well as Application Service Provider **MUST** run the connector registration for their service customers.

- SD documents **MUST** be created for every Connector registered and stored by the Participants. The Core Service Provide make them available.

- The provided SD documents **MUST** be GAIA-X compliant, i.e. MUST
    provide a compliance credential issued from GAIA-X AISBL.

A test case will be, that an EDC instance has to be onboarded for a
specific participant identified by a BPN. The SD for the EDC has to be
visible in the supported SD storage. The query against this new
registered EDC instance for the given BPN **SHOULD** provide the connector
url as stated in the SD document.

## 2.1 Preconditions and dependencies

The self-description documents used as data source **MUST** be GAIA-X
compliant, i.e. adhering to the GAIA-X Trustframework in the currently
supported version in Catena-X (usually the latest published version and
the version before). In addition, these SD documents **MUST** be registered
at an SD storage like SD-Hub or Federated Catalogue.

## 2.2 API Specification

### 2.2.1 API Endpoints & resources

The EDC Discovery API **MUST** be implemented as specified in the openAPI
documentation as stated here: https://\....

Endpoint: POST: /api/administration/connectors/discovery

**Request body**

the request body can be kept empty (to retrieve a complete list of registered connectors) or be filled with one or multiple BPNs to retrieve a list of registered EDC endpoints for the giving BPNs.

```
*\[*

*"BPNL\...\...",*

*"BPNL\...."*

*\]*
```

**Response structure**

```
\[

{

"bpn : "BPNL\...\..."

"connectorEndpoint":

\[

"http://some.example.url",

"http://some.other-example.url"

\]

},

{

"bpn : "BPNL\...\..."

"connectorEndpoint": "http://some.example.url"

}

\]
```

For each bpn an own response object is provided. In case of multiple EDC
instances for one bpn an array is returned (first result set) otherwise
a single value (second result set)

### 2.2.2 Available Data Types

The API MUST use JSON as the payload transported via HTTP.

### 2.2.3 EDC Data Asset Structure

This API do not have to be accessed via an EDC instance but can be
queried from any authorized participant or service directly.

### 2.2.4 Error Handling

HTTP standard response codes that MUST be used.

#### 2.2.4.1 Error Messages & Explanation

|     Code    |     Description                                |
|-------------|------------------------------------------------|
|     200     |     Discovery request finished successfully    |
|     400     |     Request body was malformed                 |
|     401     |     Not authorized                             |
|     403     |     Forbidden                                  |
|     405     |     Method not allowed                         |

## 3 REFERENCES

### 3.1 Normative References

Following Standards are used within this standard:

- GAIA-X Trustframework:
    https://gaia-x.eu/wp-content/uploads/2022/05/Gaia-X-Trust-Framework-22.04.pdf
- CX - 0006 Registration and initial onboarding
- CX - 0010 Business Partner Number

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
