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
| CX-0158 Car SBOM                                             | Added    |

### Industry Core

The Industry Core standards continue to evolve to support the core digital twin concepts and foundational capabilities of the Catena-X ecosystem.

| Standard                                                     | Status   |
| -------------------------------------------------------------| -------- |
| CX-0002 Digital Twins in Catena-X                            | Updated  |
| CX-0151 Industry Core: Basics                                | Updated  |

### Network Service

Updates in the Network Services domain improve onboarding, identity management, and connectivity mechanisms within the Catena-X dataspace. A new standard introduces additional capabilities for identity verification.

| Standard                                                     | Status   |
| -------------------------------------------------------------| -------- |
| CX-0001 Participant Agent Registration                       | Updated  |
| CX-0006 Registration and Initial Onboarding                  | Updated  |
| CX-0018 Dataspace Connectivity                               | Updated  |
| CX-0049 DID Document                                         | Updated  |
| CX-0050 CX-Specific Credentials                              | Updated  |
| CX-0135 Business Partner Company Certificate Management      | Updated  |
| CX-NFR-IdP Identity Proofing                                 | Added    |

### Supply Chain and Quality

The Supply Chain & Quality domain introduces new functionality while updating several existing standards to further support data exchange across operational supply chain processes.

| Standard                                                     | Status   |
| -------------------------------------------------------------| -------- |
| CX-0123 Quality Use Case                                     | Updated  |
| CX-0125 Traceability Use Case                                | Updated  |
| CX-0128 Demand and Capacity Management Data Exchange         | Updated  |
| CX-0150 Logistics Use Case                                   | Updated  |
| CX-0153 Tariffs Use Case                                     | Updated  |
| CX-0156 Geometry                                             | Updated  |
| CX-0157 PURIS                                                | Added    |

### Sustainability

The Sustainability domain continues to expand with additional standards supporting transparency and circular economy initiatives.

| Standard                                                     | Status   |
| -------------------------------------------------------------| -------- |
| CX-0143 Use Case Circular Economy – Digital Product Passport | Updated  |
| CX-0159 Material Accounting                                  | Added    |

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

The roles defined in the Operating Model have been updated to align with the terminology used in Catena-X standards. Normative language (MUST, SHOULD, MAY) is now consistently applied to express requirements and recommendations. These adjustments clarify the wording and ensure alignment without introducing changes to the underlying governance structure or role responsibilities. In addition, a reference table has been added to explain the meaning and usage of the terms MUST, SHOULD, and MAY, supporting a consistent interpretation across the Operating Model.

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

### Community Contribution

As with all Tractus-X releases, Titan was made possible through the contributions of a broad community of developers, architects, documentation authors, and reviewers across the Eclipse Tractus-X project. The combined releases include contributions from over 50 contributors and more than 25 committers, reflecting the collaborative nature of the project.

We would like to sincerely thank the community for their outstanding collaboration. Contributors from many organizations worked together. We highly appreciate everyone’s contributions and look forward to continuing this journey together with the community.

#### Committer

[![matbmoser](https://images.weserv.nl/?url=github.com/matbmoser.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/matbmoser)
[![CDiezRodriguez](https://images.weserv.nl/?url=github.com/CDiezRodriguez.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/CDiezRodriguez)
[![lgblaumeiser](https://images.weserv.nl/?url=github.com/lgblaumeiser.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/lgblaumeiser)
[![stephanbcbauer](https://images.weserv.nl/?url=github.com/stephanbcbauer.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/stephanbcbauer)
[![nicoprow](https://images.weserv.nl/?url=github.com/nicoprow.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/nicoprow)
[![AndrYurk](https://images.weserv.nl/?url=github.com/AndrYurk.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/AndrYurk)
[![SujitMBRDI](https://images.weserv.nl/?url=github.com/SujitMBRDI.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/SujitMBRDI)
[![typecastcloud](https://images.weserv.nl/?url=github.com/typecastcloud.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/typecastcloud)
[![bmg13](https://images.weserv.nl/?url=github.com/bmg13.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/bmg13)
[![mgarciaLKS](https://images.weserv.nl/?url=github.com/mgarciaLKS.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/mgarciaLKS)
[![ClosedSourcerer](https://images.weserv.nl/?url=github.com/ClosedSourcerer.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ClosedSourcerer)
[![ther3sa](https://images.weserv.nl/?url=github.com/ther3sa.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ther3sa)
[![tom-rm-meyer-ISST](https://images.weserv.nl/?url=github.com/tom-rm-meyer-ISST.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/tom-rm-meyer-ISST)
[![rafaelmag110](https://images.weserv.nl/?url=github.com/rafaelmag110.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/rafaelmag110)
[![tomaszbarwicki](https://images.weserv.nl/?url=github.com/tomaszbarwicki.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/tomaszbarwicki)
[![saadanzari](https://images.weserv.nl/?url=github.com/saadanzari.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/saadanzari)
[![agg3fe](https://images.weserv.nl/?url=github.com/agg3fe.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/agg3fe)
[![dhiren-singh-007](https://images.weserv.nl/?url=github.com/dhiren-singh-007.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/dhiren-singh-007)
[![manojava-gk](https://images.weserv.nl/?url=github.com/manojava-gk.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/manojava-gk)
[![rogocof](https://images.weserv.nl/?url=github.com/rogocof.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/rogocof)
[![Phil91](https://images.weserv.nl/?url=github.com/Phil91.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Phil91)
[![ds-jhartmann](https://images.weserv.nl/?url=github.com/ds-jhartmann.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ds-jhartmann)
[![paullatzelsperger](https://images.weserv.nl/?url=github.com/paullatzelsperger.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/paullatzelsperger)
[![nitin-vavdiya](https://images.weserv.nl/?url=github.com/nitin-vavdiya.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/nitin-vavdiya)
[![evegufy](https://images.weserv.nl/?url=github.com/evegufy.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/evegufy)
[![almadigabor](https://images.weserv.nl/?url=github.com/almadigabor.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/almadigabor)
[![mhellmeier](https://images.weserv.nl/?url=github.com/mhellmeier.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/mhellmeier)
[![saudkhan116](https://images.weserv.nl/?url=github.com/saudkhan116.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/saudkhan116)
[![maximilianong](https://images.weserv.nl/?url=github.com/maximilianong.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/maximilianong)
[![ndr-brt](https://images.weserv.nl/?url=github.com/ndr-brt.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ndr-brt)
[![ntruchsess](https://images.weserv.nl/?url=github.com/ntruchsess.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ntruchsess)
[![florianrusch](https://images.weserv.nl/?url=github.com/florianrusch.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/florianrusch)

#### Contributor

[![AYaoZhan](https://images.weserv.nl/?url=github.com/AYaoZhan.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/AYaoZhan)
[![jSchuetz88](https://images.weserv.nl/?url=github.com/jSchuetz88.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/jSchuetz88)
[![shijinrajbosch](https://images.weserv.nl/?url=github.com/shijinrajbosch.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/shijinrajbosch)
[![jalvaro-lks](https://images.weserv.nl/?url=github.com/jalvaro-lks.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/jalvaro-lks)
[![bosserf](https://images.weserv.nl/?url=github.com/bosserf.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/bosserf)
[![sm29105](https://images.weserv.nl/?url=github.com/sm29105.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/sm29105)
[![Alaitz1](https://images.weserv.nl/?url=github.com/Alaitz1.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Alaitz1)
[![pjuaristi-ikerlan](https://images.weserv.nl/?url=github.com/pjuaristi-ikerlan.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/pjuaristi-ikerlan)
[![tfjanjua](https://images.weserv.nl/?url=github.com/tfjanjua.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/tfjanjua)
[![MDSBarbosa](https://images.weserv.nl/?url=github.com/MDSBarbosa.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/MDSBarbosa)
[![ds-asmierzchalski](https://images.weserv.nl/?url=github.com/ds-asmierzchalski.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ds-asmierzchalski)
[![anneramsauer](https://images.weserv.nl/?url=github.com/anneramsauer.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/anneramsauer)
[![JordanGerada3](https://images.weserv.nl/?url=github.com/JordanGerada3.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/JordanGerada3)
[![Grand-Thibault](https://images.weserv.nl/?url=github.com/Grand-Thibault.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Grand-Thibault)
[![OlgaIvkovic](https://images.weserv.nl/?url=github.com/OlgaIvkovic.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/OlgaIvkovic)
[![MonikaJacobsen](https://images.weserv.nl/?url=github.com/MonikaJacobsen.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/MonikaJacobsen)
[![adkumar1](https://images.weserv.nl/?url=github.com/adkumar1.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/adkumar1)
[![JulianSchererZF](https://images.weserv.nl/?url=github.com/JulianSchererZF.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/JulianSchererZF)
[![kkotowiczz](https://images.weserv.nl/?url=github.com/kkotowiczz.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/kkotowiczz)
[![hokonohara](https://images.weserv.nl/?url=github.com/hokonohara.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/hokonohara)
[![borjakhet](https://images.weserv.nl/?url=github.com/borjakhet.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/borjakhet)
[![leandro-cavalcante](https://images.weserv.nl/?url=github.com/leandro-cavalcante.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/leandro-cavalcante)
[![Akash-IAV](https://images.weserv.nl/?url=github.com/Akash-IAV.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Akash-IAV)
[![marcelruland](https://images.weserv.nl/?url=github.com/marcelruland.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/marcelruland)
[![manourym](https://images.weserv.nl/?url=github.com/manourym.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/manourym)
[![sb3nz](https://images.weserv.nl/?url=github.com/sb3nz.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/sb3nz)
[![Usmanfee](https://images.weserv.nl/?url=github.com/Usmanfee.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Usmanfee)
[![stanfaldin](https://images.weserv.nl/?url=github.com/stanfaldin.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/stanfaldin)
[![zygokaktus](https://images.weserv.nl/?url=github.com/zygokaktus.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/zygokaktus)
[![zanpi8020](https://images.weserv.nl/?url=github.com/zanpi8020.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/zanpi8020)
[![th0masgl](https://images.weserv.nl/?url=github.com/th0masgl.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/th0masgl)
[![wehrstedt-jan](https://images.weserv.nl/?url=github.com/wehrstedt-jan.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/wehrstedt-jan)
[![LukasSchmetz](https://images.weserv.nl/?url=github.com/LukasSchmetz.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/LukasSchmetz)
[![kunyao-cofinity-x](https://images.weserv.nl/?url=github.com/kunyao-cofinity-x.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/kunyao-cofinity-x)
[![tobzahn](https://images.weserv.nl/?url=github.com/tobzahn.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/tobzahn)
[![SanaSalem01](https://images.weserv.nl/?url=github.com/SanaSalem01.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/SanaSalem01)
[![kss682](https://images.weserv.nl/?url=github.com/kss682.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/kss682)
[![hkny](https://images.weserv.nl/?url=github.com/hkny.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/hkny)
[![thomas-henn](https://images.weserv.nl/?url=github.com/thomas-henn.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/thomas-henn)
[![M-Busk](https://images.weserv.nl/?url=github.com/M-Busk.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/M-Busk)
[![Kuehner-A](https://images.weserv.nl/?url=github.com/Kuehner-A.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Kuehner-A)

### Highlights

These are just a few highlights from the 25.12 and 26.03 releases.

#### KIT 2.0 Architecture

A major redesign of how the KIT ecosystem is visualized and structured has been introduced. The KIT 2.0 Architecture provides a clearer layered representation of the Eclipse Tractus-X ecosystem, improving discoverability and navigation across the growing collection of KITs.

For further information, please refer to the [following link](https://eclipse-tractusx.github.io/blog/kit-2.0-architecture/).

#### Golden Record Business Partner Number (BPN) Service

Enhancements improve the reliability and governance of shared business partner data. Immutable history for management relations protects historical accuracy, while automated confidence calculations and contributor metrics increase transparency and trust in Golden Records. Support for relation validity periods allows more accurate modeling of changing business relationships.

#### Industry Core Hub

New capabilities enhance digital twin and digital product passport management. Improved submodel handling, EcoPass and DPP support, and Notification API integration enable more efficient data exchange and event-driven communication between ecosystem services. Security and architecture improvements further strengthen platform stability.

#### Tractus-X SDK

SDK updates improve developer experience and ecosystem interoperability. Notification services, alignment with the latest EDC and DSP standards, improved documentation, and security updates simplify the development of Tractus-X compatible applications.

#### Tractus-X Connector

Connector improvements strengthen the core data exchange infrastructure. Enhanced discovery mechanisms, credential caching, and preparation for multi-tenant architectures improve scalability, performance, and interoperability across dataspace participants.

#### Identity Hub

Identity Hub enhancements improve decentralized identity and credential management in the ecosystem. Configurable integration options, improved documentation, and demonstration flows simplify the implementation of credential issuance and verification processes.

### Further Information

Details can be found in the [changelog](https://eclipse-tractusx.github.io/blog-changelog)

---

## General Website improvements

The CX-Titan release introduces several enhancements to the Catena-X website, aimed at improving navigation, usability, and accessibility of information for all ecosystem participants. These updates make the website more intuitive, informative, and aligned with the evolving needs of the Catena-X community.

### Navigation & Structure

The main navigation was updated to clearly separate normative and non-normative content, making it easier to find official specifications versus supporting information.

### New Knowledge Resources

- Glossary: Provides standardized definitions for key terms used across the Catena-X ecosystem.

### Usability Enhancements

PDF Export: Allows users to export content from the website for offline reference or documentation purposes.

### Non-Functional Requirements

Previously only available on the website, the Certification Framework has now been integrated into the non-functional requirements. This improves clarity on compliance and evaluation expectations for ecosystem participants.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
