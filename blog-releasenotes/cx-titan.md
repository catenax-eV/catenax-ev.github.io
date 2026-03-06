---
title: CX-Titan
description: Details of the CX-Titan release for Catena-X, including standards, operating model, regulatory framework, and reference implementations.
slug: cx-titan
date: 2026-03-18
tags: [release, titan]
---

## Catena-X Standards

-

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

## Catena-X Regulatory Framework

The latest update to the Catena-X Regulatory Framework includes

### Updates to Country Clearance Lists

-

#### Further Information

Details can be found in the [changelog](/docs/regulatory-framework/changelog).

## Catena-X Working Model

## Tractus-X reference implementations

The CX-Titan release combines the Eclipse Tractus-X releases [25.12](https://eclipse-tractusx.github.io/blog-changelog/release-25-12) and [26.03](https://eclipse-tractusx.github.io/blog-changelog/release-26-03).  

## Further Scope Clarification

## General Website improvements

- Update Navigation (clear structure between normative / non-normative)
- Introduce Glossary
- Introduce BoK
- Introduce Architecture Guardrails
- Introduce PDF-Export feature
- Add Certification Framework to non-functional requirements
