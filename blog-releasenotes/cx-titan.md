---
title: CX-Titan
description: Details of the CX-Titan release for Catena-X, including standards, operating model, regulatory framework, and reference implementations.
slug: cx-titan
date: 2026-03-18
tags: [release, titan]
---

## Catena-X Standards

With the CX-Titan release, several Catena-X standards have been updated and new standards have been introduced across multiple domains. Updates focus on refining existing specifications, while newly introduced standards extend the ecosystem with additional use cases and capabilities.

### Engineering

The Engineering domain has been extended with new standards that strengthen requirements management and software transparency across the ecosystem.

| Standard                                                     | Status   |
| -------------------------------------------------------------| -------- |
| CX-0154 Digital Master Data                                  | Updated  |
| CX-0155 Requirements Engineering                             | Added    |
| CX-XXXX Car SBOM                                             | Added    |

### Network Service

Updates in the Network Services domain improve onboarding, identity management, and connectivity mechanisms within the Catena-X dataspace. A new standard introduces additional capabilities for identity verification.

| Standard                                                     | Status   |
| -------------------------------------------------------------| -------- |
| CX-0001 Participant Agent Registration                       | Updated  |
| CX-0006 Registration and Initial Onboarding                  | Updated  |
| CX-0018 Dataspace Connectivity                               | Updated  |
| CX-0050 CX-Specific Credentials                              | Updated  |
| CX-0135 Business Partner Company Certificate Management      | Updated  |
| CX-XXXX Identity Proofing                                    | Added    |

### Supply Chain and Quality

The Supply Chain & Quality domain introduces new functionality while updating several existing standards to further support data exchange across operational supply chain processes.

| Standard                                                     | Status   |
| -------------------------------------------------------------| -------- |
| CX-0123 Quality Use Case                                     | Updated  |
| CX-0128 Demand and Capacity Management Data Exchange         | Updated  |
| CX-0150 Logistics Use Case                                   | Updated  |
| CX-0153 Tariffs Use Case                                     | Updated  |
| CX-0156 Geometry                                             | Updated  |
| CX-XXXX PURIS                                                | Added    |

### Sustainability

The Sustainability domain continues to expand with additional standards supporting transparency and circular economy initiatives.

| Standard                                                     | Status   |
| -------------------------------------------------------------| -------- |
| CX-0143 Use Case Circular Economy – Digital Product Passport | Updated  |
| CX-XXXX Material Accounting                                  | Added    |

### Semantic Modelling

The semantic modelling foundation of Catena-X has been further refined with an update to the core modelling framework.

| Standard                                                     | Status   |
| -------------------------------------------------------------| -------- |
| CX-0003 SAMM Aspect Meta Model                               | Updated  |

### Further Information

Details can be found in the [changelog](https://catenax-ev.github.io/docs/next/standards/changelog)

To view the Titan version of the Standards, please refer to the [Overview Page of the standards](https://catenax-ev.github.io/docs/next/standards/overview) and select CX-Titan.

---

## Catena-X Operating Model

With the release of version 3.1.1, the Operating Model introduces improvements to clarity and consistency across governance, roles, lifecycle management, and service descriptions. The update mainly includes minor refinements, such as clearer terminology, alignment with normative specification language, and the removal of outdated or misleading references

### Why: Introduction

References to the former Whitepaper have been removed. The Library is now the primary reference source for Catena-X documentation.

### Why: Understanding the Catena-X Data Space

The diagram *Catena-X Ecosystem* has been updated. The relationship between the Association and Tractus-X has been clarified. The diagram now correctly states that the Association “sponsors, promotes, and coordinates” Tractus-X rather than governing it.

### Who: Roles in the Catena-X ecosystem

#### Normative Terminology

The roles defined in the Operating Model have been updated to aligne with the terminology used in Catena-X standards. Normative language (MUST, SHOULD, MAY) is now consistently applied to express requirements and recommendations. These adjustments clarify the wording and ensure alignment without introducing changes to the underlying governance structure or role responsibilities. In addition, a reference table has been added to explain the meaning and usage of the terms MUST, SHOULD, and MAY, supporting a consistent interpretation across the Operating Model.

#### Enablement Service Provider (ESP)

Clarification has been added for Enablement Service Providers (ESPs) regarding the listing of enablement services on the marketplace. ESPs MUST list standalone enablement services on the marketplace. Enablement services that are bundled with other offerings MAY be provided without being listed separately on the marketplace.

#### Attestation Provider (AtP)

Clarified that details on AtP roles and qualification requirements are defined in domain-specific normative documents such as rulebooks. The documentation now also references the official list of accredited AtPs published by the Association.

#### Digital Clearing House (DCH)

The description of the Digital Clearing House role has been simplified to improve clarity.

#### Data Provider and Consumer (DPC)

Removed the requirement that forced Consumers and Providers to demonstrate value creation through data exchange, as this cannot be verified and is inherent to the concept of a dataspace.

#### Diagrams and Role Relationships

Added the missing label to the arrow Sandbox Provider → Association to ensure all relationship arrows are consistently labeled and the diagram remains clear and coherent.

### What: Service Map

The Policy Hub has been removed from Core Services A because no standard currently exists for this service.

### How: Life Cycle Management

The term “breaking change” has been removed from the operating model.
The lifecycle documentation now explicitly aligns with the 1+1 principle, meaning that old and new versions must coexist and no change should disrupt the operation of the dataspace. Furthermore specific dates were removed from the release schedule to make the structure reusable and easier to maintain.

### Documentation Simplification

The modular system diagrams have been removed from the Operating Model documentation. The modular system is now published and maintained within the official standards documentation.
The Operating Model continues to define the governance framework describing how the modular system is created, maintained, and governed, while the authoritative content is hosted externally in the standards documentation.

### Further Information

Details can be found in the [changelog](/docs/operating-model/changelog)

To view the Titan version of the Operating Model, please refer to the [Operating Model documentation](https://catenax-ev.github.io/docs/operating-model/why-introduction) and select CX-Titan.

---

## Tractus-X reference implementations

The CX-Titan release combines the Eclipse Tractus-X releases [25.12](https://eclipse-tractusx.github.io/blog-changelog/release-25-12) and [26.03](https://eclipse-tractusx.github.io/blog-changelog/release-26-03).

These two release were made possible by 53 contributors and 32 committers across the Eclipse Tractus-X repositories, contributing code, documentation, reviews, issue reports, and discussions.

### Highlights

#### KIT 2.0 Architecture

A major redesign of how the KIT ecosystem is visualized and structured has been introduced. The KIT 2.0 Architecture provides a clearer layered representation of the Eclipse Tractus-X ecosystem, improving discoverability and navigation across the growing collection of KITs.

For further information, please refer to the [following link](https://eclipse-tractusx.github.io/blog/kit-2.0-architecture/).

---

## General Website improvements

The CX-Titan release introduces several enhancements to the Catena-X website, aimed at improving navigation, usability, and accessibility of information for all ecosystem participants.These updates make the website more intuitive, informative, and aligned with the evolving needs of the Catena-X community.

### Navigation & Structure

The main navigation was updated to clearly separate normative and non-normative content, making it easier to find official specifications versus supporting information.

### New Knowledge Resources

- Glossary: Provides standardized definitions for key terms used across the Catena-X ecosystem.
- Body of Knowledge (BoK): A document of guidance, best practices, and reference materials.It is non-normative.
- Architecture Guardrails: Introduced to support consistent design and implementation practices across the ecosystem.

### Usability Enhancements

PDF Export: Allows users to export content from the website for offline reference or documentation purposes.

### Non-Functional Requirements

Previously only available on the website, the Certification Framework has now been integrated into the non-functional requirements. This improves clarity on compliance and evaluation expectations for ecosystem participants.
