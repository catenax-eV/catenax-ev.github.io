---
sidebar_position: 5
title: Identity Proofing v1.0
---

# CX-NFR-IdP: Identity Proofing v.1.0.0

## Abstract

A crucial step during the onboarding of a new participant is the verification of the new participant's identity.
This process is called "Identity Proofing" and there are several ways of doing this.
This standard lists all methods of identity proofing, which are currently permitted for onboarding participants into the Catena-X dataspace.
At least one of these methods must be successfully completed during onboarding.

## 1 Introduction

### 1.1 Audience & scope

> *This section is non-normative*

This standard is relevant for the following roles:

- Core Service Provider B: must ensure that identity proofing is successfully completed during onboarding
- Data Provider/Consumer: must successfully complete identity proofing during onboarding

This standard lists all methods of identity proofing currently allowed for onboarding into the Catena-X dataspace.
See CX-0006 for a description of the onboarding process, including at which point identity proofing must be performed.

### 1.2 Context and architecture fit

> *This section is non-normative*

To enter the Catena-X dataspace, a participant must go through an onboarding process.
This process – described in detail in CX-0006 – involves among others verifying the participant's identity, creating a Business Partner Number (BPN) for the participant, ensuring the participant has a compatible wallet, and issuing relevant verifiable credentials.
This standard deals with the first step – verifying the participant's identity, also referred to as identity proofing.
It describes how this identity proofing may be performed and which criteria must be met for it to be successfully completed.

### 1.3 Conformance and proof of conformity

> *This section is non-normative*

Sections marked as non-normative, as well as all authoring guidelines, diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The keywords **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.4 Examples

Please note that these are general examples and do not necessarily represent concrete methods of identity proofing currently enabled in the Catena-X dataspace.
There are – by and large – two different groups of identity proofing processes.

A participant may be in possession of a verifiable credential (VC) that attests to their identity and has been issued by a trusted issuer.
The participant may then present this VC to the CSP-B, who can then verify it and thereby verify the participant's identity.
This allows for a bilateral and self-sovereign identity proofing between participant and CSP-B and ensures that the participant is in fact who they claim to be.

Alternatively, a participant may provide information about themselves to the CSP-B, who then verifies the legitimacy of the provided information.
This usually involves consulting a third party for verifying the provided information.
These methods are generally not preferable, since involving a third party is not compatible with the principles of self-sovereignty, and they omit a crucial part of the process:
Verifying the validity and legitimacy of provided company data ensures that this company does in fact exist.
It does not, however, provide any statements or conclusions about whether the actor who provided the company data is in fact who they claim to be.

### 1.5 Terminology

> *This section is non-normative*

| Term                  | Explanation                                                |
|-----------------------|------------------------------------------------------------|
| Identity Proofing     | The process of verifying a person's or company's identity. |
| CSP-B                 | Core Service Provider B                                    |

## 2 Main content

> *This section is normative*

The following subsections each describe one method of identity proofing.
In order for identity proofing to be considered successfully completed, at least one of these methods **MUST** be performed and successfully completed as described in the corresponding subsection.
Some methods may have restrictions on the conditions under which they may be used.
Where such restrictions exist, they are listed at the beginning of the corresponding subsection.
A CSP-B **MUST** offer at least one of the methods to a participant.
A CSP-B **MAY** offer multiple methods to a participant.

### 2.1 Gaia-X Clearing House

A Gaia-X Clearing House is a legal entity that operates at least a Gaia-X Notary Service and a Gaia-X Compliance Service as defined in the [Gaia-X Architecture Document v23.10](https://docs.gaia-x.eu/technical-committee/architecture-document/23.10/gx_services/) or higher.
With this method, the participant provides the CSP-B with information about itself.
The CSP-B then passes the provided information on to a Gaia-X Notary Service, which then checks if it is valid and legitimate.

The participant **MUST** provide to the CSP-B at least the following data:

- the participant's full legal name
- the participant's full address
- at least one unique identifier that is accepted by the CSP-B

As unique identifier, the CSP-B **SHOULD** accept all identifiers defined in the [Gaia-X Trust Framework v22.10](https://docs.gaia-x.eu/policy-rules-committee/trust-framework/22.10/participant/#registrationnumber) or higher and **MUST** only accept identifiers defined in the [Gaia-X Trust Framework v22.10](https://docs.gaia-x.eu/policy-rules-committee/trust-framework/22.10/participant/#registrationnumber) or higher.
The CSP-B **MAY** request additional information from the participant.
The CSP-B **MUST** have the provided data validated by a Gaia-X Notary Service, as defined in the [Gaia-X Architecture Document v23.10](https://docs.gaia-x.eu/technical-committee/architecture-document/23.10/gx_services/#gaia-x-notary-lrn-legal-registration-number) or higher.
The CSP-B **MUST** request a self-description as defined in the [Gaia-X Trust Framework v22.10](https://docs.gaia-x.eu/policy-rules-committee/trust-framework/22.10/#gaia-x-self-description) or higher from a Gaia-X Compliance Service as defined in the [Gaia-X Architecture Document v23.10](https://docs.gaia-x.eu/technical-committee/architecture-document/23.10/gx_services/#gaia-x-compliance) or higher.

Before passing the provided data on to the Gaia-X Notary Service, the CSP-B **MAY** make minor amendments to the provided data, as long as no ambiguity is created or resolved through these amendments.
Examples are correcting obvious typos (streett → street), replacing characters with basic Latin Unicode block alternatives (Straße → Strasse), or replacing commonly confused characters (´ vs ', - vs –, etc.).

The process is considered successful when the Gaia-X Compliance Service has returned a self-description of the provided data, as defined in the [Gaia-X Trust Framework v22.10](https://docs.gaia-x.eu/policy-rules-committee/trust-framework/22.10/#gaia-x-self-description) or higher.

## 3 References

### 3.1 Normative references

- [CX-0006](https://catenax-ev.github.io/docs/standards/CX-0006-RegistrationAndInitialOnboarding)
- [Gaia-X Trust Framework v22.10](https://docs.gaia-x.eu/policy-rules-committee/trust-framework/22.10/participant/).
- [Gaia-X Architecture Document v23.10](https://docs.gaia-x.eu/technical-committee/architecture-document/23.10/gx_services/)

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
