---
tags:
  - CAT/Portal
  - CAT/Core Service Provider
  - CAT/Sandbox Services
---

# CX-0014 Employees and Technical Users v1.0.1

## ABSTRACT

Identity and Access Management (IAM) is a mandatory basic infrastructure
for every IT-System. The identity of any entity and actor (company,
user, or technical client/connector) is the summary of the describing
attributes (e.g., Company Name, Address, Tax Number, etc.). Catena-X is
intended to be a network-of-networks which consequently means that there
cannot be a single Identity Provider (IdP) for the company identities
nested in one network. The company must be identifiable in an
independent way and interoperable in all networks. The identity of users
(employees of a company) and technical users (e.g., EDC) in Catena-X,
must be bound to the company they are acting on behalf of.

## 1. Introduction

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

List for which roles the standard is relevant:

- Core Service Provider
- Data Provider / Consumer
- Business Application Provider
- Enablement Service Provider
- Onboarding Service Provider
- Consulting Services Provider

This Standard applies to all participants and their representative that interact with each other. The representatives can either be the employees --or users of a participant- or the technical users --in case of Catena-X the EDCs- of a participant.

### 1.2 Context

> *This section is non-normative*

Standardization of the digital identity of technical users and employees
who are bound to the company they operate for. The goal is to protect
data. It ensures that permissions and users can be managed in all
systems and applications.

### 1.3 Conformance

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines,
diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,
SHOULD and SHOULD NOT in this document are to be interpreted as
described in [BCP
14](https://datatracker.ietf.org/doc/html/bcp14) \[[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)\]
\[[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)\] when, and
only when, they appear in all capitals, as shown here.

### 1.4 Proof of Conformity

> *This section is non-normative*

All participants and their solutions will need to prove they conform
with the Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs).

A test bed must be set up, to prove the correctness of the data
provisioning. A generic test set of data must get processed, to prove
the expected results.

### 1.5 Terminology

> *This section is non-normative*

Additional terminology used in this standard can be looked up in the
glossary on the association homepage.

## 2. Main Content

**This standard is not certifiable yet (only release 3.1 onwards)**

Core Service provider MUST proof that they apply to the OIDC standard
found on the spec [Specifications \|
OpenID](https://openid.net/developers/specs/) to manage the identities
and access policies described in **CX - 0015 IAM & ACCESS CONTROL
PARADIGM FOR USERS AND CLIENTS** which

- must be reachable by other partners
- ownership must be verifiable

Core Service provider MUST prove that they provide a managed identity
solution based on OIDC. Core Service provider MUST prove that they make
the use for a self-hosted IdP based on OIDC possible for any
participant.  If a core service provider provides an OIDC service he
MUST prove that every customer has its own delimited area for his users
and that no users of any customer has access to any data of another
customer. The users of a specific customer must be assignable to only
the customer they belong to.

To validate these criteria for the OIDC service please collect the
following documents:

- Arch42 Documentation explaining the architecture, access management and process flows of the implementation
- The URI / URL of the OIDC instance

Hand this documentation to the conformity assessment body

An operating environment which provides an OIDC service SHOULD operate an OIDC instance that supports Attribute Based Access Control described in the following standard *\[*[Guide to Attribute Based Access Control (ABAC) Definition and Considerations (nist.gov)](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-162.pdf)*\]*

A technical user (e.g. EDC) MUST provide at least the BPN of the Data Consumer/ Producer as an attribute inside the OIDC token at any interaction.

To validate these criteria for the OIDC service please collect the following documents:

- Arch42 Documentation explaining the architecture, access management and process flows of the implementation

Hand this documentation to the conformity assessment body

## 3. References

### 3.1 Normative References

- CX-0015 IAM & ACCESS CONTROL PARADIGM

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
