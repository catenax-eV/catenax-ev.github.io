
# CX-0017 Company Role by the Connector v1.1.0

## ABSTRACT

For the exchange of certain data between companies, the type of a company defines the role a company takes in the Catena-X dataspace. The Catena-X role of a company requesting some specific data is a foundation for the decision whether the requesting company is allowed to consume this specific data. To enable this, the attributes that describe this role of the company need to be available in a consistent and unified form. The same must be true for the distribution of the role attributes of this company.

To ensure a unified form of the attributes describing a company Verifiable Credential defined in the W3C standard are used. This ensures not only that all participants in the network can provide verifiable attestation between each other but also across networks.

The Verifiable Credentials are exchanged between the connectors representing or acting in behalf of a partner, what enables also the access control for the data exchange based on policies located in the connector.

Using Verifiable Credentials also allows to provide attestations from specific issuers about certain properties of a company that are verifiable, which can be necessary for specific use cases. That means that this facilitates also the exchange of certificates issued by specific trusted issuance agencies, needed to enable a use case.

Furthermore, this approach can also be used to certify consent to a specific contract, such as a use case-specific framework agreement.

## 1. INTRODUCTION

Access control to data offers and data usage policies based on one or more company level attributes will use this information as a discriminator regarding the eligibility of the consuming company to access data offers or use data.  This is supposed to happen on the provider side for the policy definition, on the EDC side for access policy enforcement, and the consumer side for usage policy enforcement.

The purpose of this standardization request is to standardize the attributes describing the company role and define the process for the standardization of these attributes including the definition, the review process, and the distribution of general or use case specific attributes.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

List for which roles the standard is relevant. Possible options, please delete the roles for which the standard isn’t relevant.

- Core Service Provider
- Data Provider / Consumer
- Business Application Provider
- Enablement Service Provider
- Onboarding Service Provider

This document focuses on the provision of Company Attributes exchanged by the connector. That means that this standard is relevant for every participant that will exchange data using the connector and due to the fact, that the BPN is also one attribute that will be exchanged by the connector it is relevant not only for data exchange based on use case specific attributes.

This document is relevant for core service providers who provide connector-as-a-service to participants of Catena-X

For Data Provider and Data Consumer it is relevant due to the fact that data provision and consumption need an exchange of at least the BPN.

### 1.2 CONTEXT

> *This section is non-normative*

The Connector (EDC) is used to exchange data between two participants. Both the providing and the consuming participant have a connector in their responsibility. To ensure that both participants know each other's identities, the connectors must share this information before the data exchange. In addition to the identity -or identifier-, other characteristics -hereafter referred to as attributes- that describe the respective participants are also important to share. These attributes can be used to enable or restrict data access based on certain properties/attributes of the participant. A basic attribute used for any data exchange is the membership issued to the subscriber at onboarding in the form of a Verifiable Credential.

Verifiable Credentials are also used to exchange other attributes describing the entities. These Verifiable Credentials are exchanged and validated between Connectors. According to the W3C Standard for Decentralised Identities the exchange of Verifiable Credentials is done in Verifiable Presentations (https://www.w3.org/TR/vc-data-model/#presentations-0), which contain the issued credential for the sending participant. Using Verifiable Presentations it is ensured, that only the holder of the Verifiable Credential can be the one who presents this credentials. These Verifiable Presentations are created and singed by the wallet of the participant.

To enable the exchange of Verifiable Credentials in the form of Verifiable Presentations between the participants' connectors the connector has implemented the according functionality and follows the exchange protocol for exchanging Verifiable Credentials.

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

The following figure shows the flow of the connector requesting verifiable credentials from the Managed Identity Wallet ![summary_flow](https://raw.githubusercontent.com/eclipse-tractusx/ssi-docu/main/docs/architecture/cx-3-2/flow.svg)

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants providing a connector must ensure that the provided connector is able to send and receive verifiable presentations according to the flow described in section [1.3](#13-architecture-overview) The verifiable credentials included in the verifiable presentation must follow the schemas described in CX-0050 Framework Agreement Credentials and CX-0016 Company Attribute Verification.

A Core Service Provider providing a connector-as-a-service must ensure that their implementation of the provided connector is able to send and receive verifiable presentations according to the flow described in section [1.3 ARCHITECTURE OVERVIEW](#13-architecture-overview) of this document.

The verifiable credentials included in the verifiable presentation must follow the schemas described in CX-0050 Framework Agreement Credentials and CX-0016 Company Attribute Verification.

To validate these criteria for either a connector provided by the participant or a connector-as-a-service please collect the following documents:

- Arch42 Documentation explaining the architecture and process flows of the implementation of the connector

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

## 2. Exchange of Verifiable Presentation between Connectors

> *This section is normative*

To exchange data about Company Roles between participants a dedicated Verifiable Credential is used. This credential is the Summary Credential defined in CX-0051 - Summary Credential.

The summary credential combines multiple properties of a participant that are available. It is issued by the Core Service Provider based on verifiable documentations provided by the participants they are issued for.

As the only credential that is exchanged is the Summary Credential, all available Company Roles are exchanged in one single Verifiable Presentation, including this Verifiable Credential.

The creation, signing and the exchange of this Verifiable Presentation is described in the following basic message flow using the Managed Identity Wallet as the wallet of the participant.

[Github Tractus-X SSI Docu](https://github.com/eclipse-tractusx/ssi-docu/blob/main/docs/architecture/cx-3-2/edc/identity.next.implementation.md).

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- W3C Decentralized Identifiers [https://www.w3.org/TR/did-core/]
- W3C DID Document properties [https://www.w3.org/TR/did-spec-registries/#did-document-properties]
- CX-0018 ECLIPSE DATASPACE CONNECTOR (EDC)

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

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
