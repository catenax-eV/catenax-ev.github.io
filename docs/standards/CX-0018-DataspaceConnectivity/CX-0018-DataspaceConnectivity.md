# CX-0018 Dataspace Connectivity v3.0.0

## ABSTRACT

This document specifies the communication requirements for data exchange between participants in the Catena-X data
ecosystem. The aim is to ensure interoperability and data sovereignty at the same time.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

- In order to avoid lock-in effects, this standard intentionally does **not** describe a specific component (like the
  Eclipse Dataspace Connector in the last version), but how such a communication component must behave in order to be
  certified for the Catena-X data space.
- Adopt pinned versions of IATP, DSP, policy definitions
- Specify HTTPS and AmazonS3 transfer processes

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

#### AUDIENCE

The role definition is based on the definition of
the [CX Operating Model v2.1](https://catena-x.net/fileadmin/_online_media_/CX_Operating_Modelv2.1_final.pdf).

The standard is relevant for the following roles, as they must be certified against it:

- Core Service Provider (A/B)
- Enablement Service Provider
- Business Application Provider
- Data Provider/Consumer

> Note: The normative section of this standard uses the DSP-definitions of "Consumer" and "Provider". Any of the
> aforementioned Catena-X-roles can assume either DSP-role.

The standard is relevant for the following role, as they must certify against this standard:

- Conformity Assessment Body

The standard is relevant for the following role, as they carry out their advisory on the basis of this standard.

- Advisory Provider

#### SCOPE

This document covers the requirements for dataspace connectivity. It describes

- how communication between dataspace participants must take place,
- which transfer type profiles must be used,
- how communication with credential services must take place,
- which conventions apply with regard to policy constraints
- and which conventions apply to datasets.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The connector is the main technical component that implements dataspace connectivity including data sovereignty and
interorganizational interoperability. It is part of the enablement services, which are intended to enable participation
in the Catena-X ecosystem. More information about the Enablement Services can be found under
the [Whitepaper Enablement Services](https://catena-x.net/fileadmin/_online_media_/231006_Whitepaper_EnablementServices.pdf).

The following figure shows how the connector fits into the overall framework of Catena-X to exchange data.

![Framework of data exchange](./assets/Framework_of_data_exchange.png)

*Figure 1: Framework of data exchange*

> Note: At time of the release, the Identity Wallet solution is not decentralized yet. However, this standard already
> provides most of the infrastructure to operate Wallets (IATP-Credential-Services) in a distributed manner.
> More information about the SSI-infrastructure can be found in the relevant standards.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this
specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT
**
in this document are to be interpreted as described in BCP 14 RFC2119, RFC8174 when, and only when, they
appear in all capitals, as shown here.

### 1.4 TERMINOLOGY

| Term                                         | Description                                                                                                                                                                                                                  | Reference                                                                                         |
|----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| International Data Spaces Association (IDSA) | Organisation that provides standards and architecture solutions for secure, sovereign data sharing within so-called dataspaces                                                                                               | https://internationaldataspaces.org                                                               |
| Dataspace Protocol (DSP)                     | Set of specifications designed to facilitate interoperable data sharing within a dataspace, currently governed by the IDSA                                                                                                   | https://github.com/International-Data-Spaces-Association/ids-specification                        |
| Connector                                    | (Catena-X) Technical component that allows business applications to interact with each other within a dataspace                                                                                                              | https://github.com/eclipse-tractusx/tractusx-edc                                                  |
| (Catena-X) Business Applications             | (Catena-X) Applications that enable functionality of different use cases, hosted by a data provider or consumer itself or by a business application provider                                                                 | https://eclipse-tractusx.github.io/developer                                                      |
| Catena-X Marketplace                         | The Marketplace inside a portal, allowing participants of the Catena-X network to search and select Catena-X Business Applicactions                                                                                          | https://catena-x.net/en/offers/portal-marketplace                                                 |
| Business Partner Number (BPN)                | Every participant in the Catena-X network has a unique, unchangeable identifier, called business partner number (BPN). The legal entity of an organization is represented by the Business Partner Number Legal Entity (BPNL) | [CX - 0010 Business Partner Number](https://catena-x.net/de/standard-library)                     |
| Data Catalog Vocabulary (DCAT)               | RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web                                                                                                                            | https://www.w3.org/TR/vocab-dcat-3                                                                |
| Open Data Rights Language (ODRL)             | Policy expression language that provides a flexible and interoperable information model, vocabulary, and encoding mechanisms for representing statements about the usage of content and services                             | https://www.w3.org/TR/odrl-model, https://www.w3.org/TR/odrl-vocab, https://w3c.github.io/odrl/bp |

- The terms *Connector, Provider, Participant Agent* are adopted from the DSP.
- The term *Credential Service* is adopted from the IATP.
- The terms *Core Service Provider A/B (CSP A/B)*, *Onboarding Service Provider (OSP)*, *Enablement Service Provider (
  ESP)*, *Business Application Provider (BAP)*, *Advisory Provider (AP)* and *Conformity Assessment Body (CAB)* are
  adopted from   the [CX Operating Model v2.1](https://catena-x.net/fileadmin/_online_media_/CX_Operating_Modelv2.1_final.pdf)

## 2 MAIN CONTENT

> *This section is normative*

This section uses the following prefixes as abbreviations for namespaces

- `"dct": "http://purl.org/dc/terms/"`
- `"dspace": "https://w3id.org/dspace/2024/1/"`
- `"odrl": "https://www.w3.org/ns/odrl/2/"`
- `"dcat": "http://www.w3.org/ns/dcat#"`

### 2.1 Communication between Dataspace Participants

Dataspace *Participants* exchange data via their *Participant Agents*. They are a logical component that communicates
via a set of well-defined messages.

Participant Agents MUST facilitate data exchange according to the HTTPS binding defined in the [Dataspace Protocol
2024-01](#31-normative-references).

Providers and Consumer MUST expose the specified endpoints for the

- Catalog Protocol
- Contract Negotiation Protocol
- Transfer Process Protocol
- Version Metadata

as specified in the HTTPS binding of the Dataspace Protocol 2024-01.

### 2.2 Transfer Type Profiles

In their `dcat:Catalog` response to a `dspace:CatalogRequestMessage`, for each Dataset, a Provider MUST return a
`dcat:Distribution` signifying what Transfer Profile a Consumer can use to obtain data.

Providers MUST be able to serve data according to that signal when data transfer is requested by a consumer
via a `dspace:TransferRequestMessage`.

> Despite the IRIs `dspace:HttpData-PULL` and `dspace:AmazonS3-PUSH` are not yet included in the DSP-context, they will
> be used as preliminary identifiers.

Providers MAY offer any of the following Transfer Type Profiles:

#### 2.2.1 HttpData-PULL

A Consumer MUST send a `dspace:TransferRequestMessage` with `dct:format`:`dspace:HttpData-PULL` and an
empty `dspace:dataAddress` property.

A Provider MUST send a `dspace:TransferStartMessage` with sufficient information in the `dspace:dataAddress` property so
that a request to the `dspace:endpoint` may succeed when decorated with HTTP-headers constructed from
the `dspace:endpointProperties`' with `dspace:name` as key and `dspace:value` as value respectively.

A Provider Connector MUST ensure that the requested backend system has sufficient context from the negotiation
to evaluate the legitimacy of the request.

A Consumer may then use the provided data to execute requests against the endpoint.

> Despite the token, the endpoint still has the right to refuse serving a request. This may occur for instance when
> a consumer attempts to PUT against a resource but is only allowed to GET.

#### 2.2.2 AmazonS3-PUSH

A Consumer MUST send a `dspace:TransferRequestMessage` with `dct:format`:`dspace:AmazonS3-PUSH` and
a `dspace:dataAddress` property
so that triggering a transfer to the `dspace:endpoint` decorated with the data relevant `dspace:endpointProperties` may
succeed.

A Provider MUST send a `dspace:TransferStartMessage` and an empty `dspace:dataAddress` property. He MUST execute a
transfer
as specified by the received request.

### 2.3 Communication with a Credential Service

This standard assumes that each Participant has been issued a set of Verifiable Credentials (VCs) according to the
relevant
Catena-X standards. These VCs are stored in a Credential Service.

A Consumer MUST be able to retrieve an access token according to the Verifiable Presentation Protocol (VPP) that is part
of the IATP (Identity and Trust Protocol). This corresponds to Request 1 in the presentation flow where this Consumer
acts as Client.

A Provider MUST be able to receive and securely verify an access token and derive information on a Consumer's
Credential Service in order to execute IATP VPP Request 4. This corresponds to the role of Verifier.

### 2.4 Conventions for Policy Constraints

`odrl:Offer` objects contained in a `dcat:Catalog` SHOULD carry `odrl:Constraint`s that are specified in the
[CX-ODRL-Profile](#31-normative-references). Subsequent standards are encouraged to specify further
restrictions of said profile, especially on the `odrl:rightOperand`s. The following list compiles a set of well-defined
policies that Participants SHOULD include in their offers and guidance on how to check them.

| Name                        | leftOperand (expanded IRI)                           | operator <br /> (compacted IRI) | valid rightOperands (literal) | validation mechanism                                                                                                                                                                                                                                                                     |
|-----------------------------|------------------------------------------------------|--------------------------------|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MembershipConstraint        | `https://w3id.org/catenax/policy/Membership`         | `odrl:eq`                      | `active`                      | Membership Credential (CX - 0149)                                                                                                                                                                                                                                                        |
| UseCaseConstraints          | `https://w3id.org/catenax/policy/FrameworkAgreement` | `odrl:eq`                      | `[usecasename]:[version]`     | UseCaseFrameworkAgreementCredential (CX - 0050)<br />The exact mapping logic from credential and to rightOperand specified in [tractusx-profiles](https://github.com/eclipse-tractusx/tractusx-profiles/blob/64f83dde1432573db456500f091f223929d43307/cx/policy/specs/policy.mapping.md). |
| ContractReferenceConstraint | `https://w3id.org/catenax/policy/ContractReference`  | `odrl:eq`                      | `[string]:[version]`          | *unchecked*                                                                                                                                                                                                                                                                              |
| UsagePurposeConstraint      | `https://w3id.org/catenax/policy/UsagePurpose`       | `odrl:eq`                      | `[string]:[version]`          | *unchecked*                                                                                                                                                                                                                                                                              |

> Note: The list is available in machine-readable form with links to the respective legal documents in the
> catenax-ev/cx-odrl-profile repository.

Providers SHOULD chain constraints (if necessary) via `odrl:and`. Examples can be found
in [catenax-ev/cx-odrl-profiles](#32-non-normative-references).

Providers MUST perform access control checks on their data offers as a `dcat:Catalog` object may expose
information restricted by governance and regulation.

### 2.5 Conventions for Datasets

A Provider MUST annotate all instances `dcat:Dataset` in a `dcat:Catalog` with the following properties:

- `dct:type` holding an object with at least a `@id` property pointing to a concept describing what type of API this
  Dataset represents. Subsequent standards define the exact value this property shall hold, depending on the Business
  scenario. The set of concepts is maintained in the taxonomy `https://w3id.org/catenax/taxonomy#` and MUST
  extend the concept https://w3id.org/catenax/taxonomy#Asset.
- `cx-common:version` holding a SemVer-conformant string indicating the API version of the API that was typed by the
  `dct:type` property. Subsequent standards define the exact value this property shall hold, depending on the Business
  scenario.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- [IDSA Dataspace Protocol 2024-01](https://github.com/International-Data-Spaces-Association/ids-specification/releases/tag/2024-1)
- [Identity And Trust Protocol v0.8](https://github.com/eclipse-tractusx/identity-trust/blob/0.8.1/specifications/verifiable.presentation.protocol.md)
- [CX - 0050 Framework Agreement Credential v1.2.0](https://catena-x.net/de/standard-library)
- [CX - 0149 Verfied Company Identity v1.0.0](https://catena-x.net/de/standard-library)
- [Tractus-X Profiles v1.0](https://github.com/eclipse-tractusx/tractusx-profiles/releases/tag/1.0.0)

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

- [Catena-X Profile of the Open Digital Rights Language (ODRL)](https://github.com/catenax-eV/cx-odrl-profile)
- [Connector Kit](https://eclipse-tractusx.github.io/docs-kits/next/category/connector-kit)

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

- [Tractus-X EDC](https://github.com/eclipse-tractusx/tractusx-edc)

## ANNEXES

### FIGURES

Figure 1: Framework of data exchange

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
