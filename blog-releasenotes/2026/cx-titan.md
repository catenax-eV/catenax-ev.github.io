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

As with all Tractus-X releases, Titan was made possible through the contributions of a broad community of developers, architects, documentation authors, and reviewers across the Eclipse Tractus-X project. The combined releases include contributions from over 199 contributors and more than 29 committers, reflecting the collaborative nature of the project.

We would like to sincerely thank the community for their outstanding collaboration. Contributors from many organizations worked together. We highly appreciate everyone’s contributions and look forward to continuing this journey together with the community.

#### Committer

[![matbmoser](https://images.weserv.nl/?url=github.com/matbmoser.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/matbmoser)
[![lgblaumeiser](https://images.weserv.nl/?url=github.com/lgblaumeiser.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/lgblaumeiser)
[![stephanbcbauer](https://images.weserv.nl/?url=github.com/stephanbcbauer.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/stephanbcbauer)
[![tom-rm-meyer-ISST](https://images.weserv.nl/?url=github.com/tom-rm-meyer-ISST.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/tom-rm-meyer-ISST)
[![CDiezRodriguez](https://images.weserv.nl/?url=github.com/CDiezRodriguez.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/CDiezRodriguez)
[![AndrYurk](https://images.weserv.nl/?url=github.com/AndrYurk.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/AndrYurk)
[![nicoprow](https://images.weserv.nl/?url=github.com/nicoprow.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/nicoprow)
[![ReneSchroederLJ](https://images.weserv.nl/?url=github.com/ReneSchroederLJ.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ReneSchroederLJ)
[![ther3sa](https://images.weserv.nl/?url=github.com/ther3sa.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ther3sa)
[![SujitMBRDI](https://images.weserv.nl/?url=github.com/SujitMBRDI.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/SujitMBRDI)
[![rafaelmag110](https://images.weserv.nl/?url=github.com/rafaelmag110.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/rafaelmag110)
[![mgarciaLKS](https://images.weserv.nl/?url=github.com/mgarciaLKS.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/mgarciaLKS)
[![bmg13](https://images.weserv.nl/?url=github.com/bmg13.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/bmg13)
[![agg3fe](https://images.weserv.nl/?url=github.com/agg3fe.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/agg3fe)
[![typecastcloud](https://images.weserv.nl/?url=github.com/typecastcloud.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/typecastcloud)
[![dhiren-singh-007](https://images.weserv.nl/?url=github.com/dhiren-singh-007.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/dhiren-singh-007)
[![ds-jhartmann](https://images.weserv.nl/?url=github.com/ds-jhartmann.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ds-jhartmann)
[![nitin-vavdiya](https://images.weserv.nl/?url=github.com/nitin-vavdiya.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/nitin-vavdiya)
[![Phil91](https://images.weserv.nl/?url=github.com/Phil91.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Phil91)
[![saudkhan116](https://images.weserv.nl/?url=github.com/saudkhan116.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/saudkhan116)
[![ndr-brt](https://images.weserv.nl/?url=github.com/ndr-brt.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ndr-brt)
[![mhellmeier](https://images.weserv.nl/?url=github.com/mhellmeier.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/mhellmeier)
[![saadanzari](https://images.weserv.nl/?url=github.com/saadanzari.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/saadanzari)
[![manojava-gk](https://images.weserv.nl/?url=github.com/manojava-gk.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/manojava-gk)
[![evegufy](https://images.weserv.nl/?url=github.com/evegufy.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/evegufy)
[![almadigabor](https://images.weserv.nl/?url=github.com/almadigabor.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/almadigabor)
[![maximilianong](https://images.weserv.nl/?url=github.com/maximilianong.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/maximilianong)
[![ntruchsess](https://images.weserv.nl/?url=github.com/ntruchsess.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ntruchsess)
[![florianrusch](https://images.weserv.nl/?url=github.com/florianrusch.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/florianrusch)

#### Contributor

[![jSchuetz88](https://images.weserv.nl/?url=github.com/jSchuetz88.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/jSchuetz88)
[![jalvaro-lks](https://images.weserv.nl/?url=github.com/jalvaro-lks.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/jalvaro-lks)
[![AYaoZhan](https://images.weserv.nl/?url=github.com/AYaoZhan.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/AYaoZhan)
[![shijinrajbosch](https://images.weserv.nl/?url=github.com/shijinrajbosch.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/shijinrajbosch)
[![arnoweiss](https://images.weserv.nl/?url=github.com/arnoweiss.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/arnoweiss)
[![ds-hzimmer](https://images.weserv.nl/?url=github.com/ds-hzimmer.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ds-hzimmer)
[![aqsamuzaffar](https://images.weserv.nl/?url=github.com/aqsamuzaffar.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/aqsamuzaffar)
[![pratapipatelbcone](https://images.weserv.nl/?url=github.com/pratapipatelbcone.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/pratapipatelbcone)
[![gerbigf](https://images.weserv.nl/?url=github.com/gerbigf.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/gerbigf)
[![marcelruland](https://images.weserv.nl/?url=github.com/marcelruland.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/marcelruland)
[![MDSBarbosa](https://images.weserv.nl/?url=github.com/MDSBarbosa.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/MDSBarbosa)
[![BirgitBoss](https://images.weserv.nl/?url=github.com/BirgitBoss.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/BirgitBoss)
[![corinastolz](https://images.weserv.nl/?url=github.com/corinastolz.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/corinastolz)
[![tobzahn](https://images.weserv.nl/?url=github.com/tobzahn.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/tobzahn)
[![ClosedSourcerer](https://images.weserv.nl/?url=github.com/ClosedSourcerer.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ClosedSourcerer)
[![Grand-Thibault](https://images.weserv.nl/?url=github.com/Grand-Thibault.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Grand-Thibault)
[![pkINOVIA](https://images.weserv.nl/?url=github.com/pkINOVIA.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/pkINOVIA)
[![tfjanjua](https://images.weserv.nl/?url=github.com/tfjanjua.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/tfjanjua)
[![bosserf](https://images.weserv.nl/?url=github.com/bosserf.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/bosserf)
[![MonikaJacobsen](https://images.weserv.nl/?url=github.com/MonikaJacobsen.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/MonikaJacobsen)
[![TorstenHirsch](https://images.weserv.nl/?url=github.com/TorstenHirsch.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/TorstenHirsch)
[![pjuaristi-ikerlan](https://images.weserv.nl/?url=github.com/pjuaristi-ikerlan.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/pjuaristi-ikerlan)
[![ds-asmierzchalski](https://images.weserv.nl/?url=github.com/ds-asmierzchalski.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ds-asmierzchalski)
[![correiaafonso12](https://images.weserv.nl/?url=github.com/correiaafonso12.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/correiaafonso12)
[![Alaitz1](https://images.weserv.nl/?url=github.com/Alaitz1.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Alaitz1)
[![HannesKrug](https://images.weserv.nl/?url=github.com/HannesKrug.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/HannesKrug)
[![dddenes](https://images.weserv.nl/?url=github.com/dddenes.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/dddenes)
[![LukasSchmetz](https://images.weserv.nl/?url=github.com/LukasSchmetz.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/LukasSchmetz)
[![farhin23](https://images.weserv.nl/?url=github.com/farhin23.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/farhin23)
[![mrpeterbasista](https://images.weserv.nl/?url=github.com/mrpeterbasista.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/mrpeterbasista)
[![christianerhardt](https://images.weserv.nl/?url=github.com/christianerhardt.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/christianerhardt)
[![sb3nz](https://images.weserv.nl/?url=github.com/sb3nz.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/sb3nz)
[![ronjaquensel](https://images.weserv.nl/?url=github.com/ronjaquensel.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ronjaquensel)
[![efficient0482](https://images.weserv.nl/?url=github.com/efficient0482.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/efficient0482)
[![sm29105](https://images.weserv.nl/?url=github.com/sm29105.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/sm29105)
[![ds-sdileo](https://images.weserv.nl/?url=github.com/ds-sdileo.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ds-sdileo)
[![johannes-wunderlich](https://images.weserv.nl/?url=github.com/johannes-wunderlich.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/johannes-wunderlich)
[![wehrstedt-jan](https://images.weserv.nl/?url=github.com/wehrstedt-jan.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/wehrstedt-jan)
[![sachinargade123](https://images.weserv.nl/?url=github.com/sachinargade123.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/sachinargade123)
[![leandro-cavalcante](https://images.weserv.nl/?url=github.com/leandro-cavalcante.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/leandro-cavalcante)
[![izuru0](https://images.weserv.nl/?url=github.com/izuru0.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/izuru0)
[![OlgaIvkovic](https://images.weserv.nl/?url=github.com/OlgaIvkovic.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/OlgaIvkovic)
[![manourym](https://images.weserv.nl/?url=github.com/manourym.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/manourym)
[![BrunoMiguelNogueira](https://images.weserv.nl/?url=github.com/BrunoMiguelNogueira.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/BrunoMiguelNogueira)
[![zanpi8020](https://images.weserv.nl/?url=github.com/zanpi8020.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/zanpi8020)
[![JordanGerada3](https://images.weserv.nl/?url=github.com/JordanGerada3.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/JordanGerada3)
[![JulianSchererZF](https://images.weserv.nl/?url=github.com/JulianSchererZF.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/JulianSchererZF)
[![Akash-IAV](https://images.weserv.nl/?url=github.com/Akash-IAV.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Akash-IAV)
[![stanfaldin](https://images.weserv.nl/?url=github.com/stanfaldin.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/stanfaldin)
[![kunyao-cofinity-x](https://images.weserv.nl/?url=github.com/kunyao-cofinity-x.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/kunyao-cofinity-x)
[![vasil-tenev](https://images.weserv.nl/?url=github.com/vasil-tenev.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/vasil-tenev)
[![InRiPa](https://images.weserv.nl/?url=github.com/InRiPa.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/InRiPa)
[![marvinhubl](https://images.weserv.nl/?url=github.com/marvinhubl.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/marvinhubl)
[![jacewski-bosch](https://images.weserv.nl/?url=github.com/jacewski-bosch.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/jacewski-bosch)
[![timdah](https://images.weserv.nl/?url=github.com/timdah.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/timdah)
[![sschul33](https://images.weserv.nl/?url=github.com/sschul33.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/sschul33)
[![Kuehner-A](https://images.weserv.nl/?url=github.com/Kuehner-A.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Kuehner-A)
[![Grameimi](https://images.weserv.nl/?url=github.com/Grameimi.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Grameimi)
[![hokonohara](https://images.weserv.nl/?url=github.com/hokonohara.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/hokonohara)
[![anneramsauer](https://images.weserv.nl/?url=github.com/anneramsauer.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/anneramsauer)
[![zygokaktus](https://images.weserv.nl/?url=github.com/zygokaktus.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/zygokaktus)
[![thackerronak](https://images.weserv.nl/?url=github.com/thackerronak.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/thackerronak)
[![flarrinaga](https://images.weserv.nl/?url=github.com/flarrinaga.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/flarrinaga)
[![SmietaJa](https://images.weserv.nl/?url=github.com/SmietaJa.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/SmietaJa)
[![borjakhet](https://images.weserv.nl/?url=github.com/borjakhet.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/borjakhet)
[![juliapampus](https://images.weserv.nl/?url=github.com/juliapampus.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/juliapampus)
[![sberkei](https://images.weserv.nl/?url=github.com/sberkei.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/sberkei)
[![kkotowiczz](https://images.weserv.nl/?url=github.com/kkotowiczz.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/kkotowiczz)
[![Jarosch-Mitko](https://images.weserv.nl/?url=github.com/Jarosch-Mitko.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Jarosch-Mitko)
[![Shiraiku](https://images.weserv.nl/?url=github.com/Shiraiku.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Shiraiku)
[![rogocoffee](https://images.weserv.nl/?url=github.com/rogocoffee.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/rogocoffee)
[![adkumar1](https://images.weserv.nl/?url=github.com/adkumar1.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/adkumar1)
[![saloniGargFEDev](https://images.weserv.nl/?url=github.com/saloniGargFEDev.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/saloniGargFEDev)
[![SanaSalem01](https://images.weserv.nl/?url=github.com/SanaSalem01.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/SanaSalem01)
[![FrankSchnicke](https://images.weserv.nl/?url=github.com/FrankSchnicke.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/FrankSchnicke)
[![Cvetanka-ZF](https://images.weserv.nl/?url=github.com/Cvetanka-ZF.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Cvetanka-ZF)
[![MartinEnders](https://images.weserv.nl/?url=github.com/MartinEnders.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/MartinEnders)
[![th0masgl](https://images.weserv.nl/?url=github.com/th0masgl.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/th0masgl)
[![ghost](https://images.weserv.nl/?url=github.com/ghost.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ghost)
[![mbarbero](https://images.weserv.nl/?url=github.com/mbarbero.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/mbarbero)
[![kairoaraujo](https://images.weserv.nl/?url=github.com/kairoaraujo.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/kairoaraujo)
[![bilge-erdem](https://images.weserv.nl/?url=github.com/bilge-erdem.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/bilge-erdem)
[![axelalbrechtatsap](https://images.weserv.nl/?url=github.com/axelalbrechtatsap.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/axelalbrechtatsap)
[![samuelroywork](https://images.weserv.nl/?url=github.com/samuelroywork.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/samuelroywork)
[![Usmanfee](https://images.weserv.nl/?url=github.com/Usmanfee.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Usmanfee)
[![lanfrans](https://images.weserv.nl/?url=github.com/lanfrans.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/lanfrans)
[![jakoballgaier](https://images.weserv.nl/?url=github.com/jakoballgaier.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/jakoballgaier)
[![wahidulazam](https://images.weserv.nl/?url=github.com/wahidulazam.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/wahidulazam)
[![mittalVaghela](https://images.weserv.nl/?url=github.com/mittalVaghela.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/mittalVaghela)
[![marctuerke](https://images.weserv.nl/?url=github.com/marctuerke.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/marctuerke)
[![devajipatil](https://images.weserv.nl/?url=github.com/devajipatil.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/devajipatil)
[![DanielaWuensch](https://images.weserv.nl/?url=github.com/DanielaWuensch.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/DanielaWuensch)
[![yuri1969](https://images.weserv.nl/?url=github.com/yuri1969.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/yuri1969)
[![thatgeeman](https://images.weserv.nl/?url=github.com/thatgeeman.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/thatgeeman)
[![luisramosbosch](https://images.weserv.nl/?url=github.com/luisramosbosch.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/luisramosbosch)
[![jschu1](https://images.weserv.nl/?url=github.com/jschu1.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/jschu1)
[![Moritz72](https://images.weserv.nl/?url=github.com/Moritz72.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Moritz72)
[![marcofranke](https://images.weserv.nl/?url=github.com/marcofranke.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/marcofranke)
[![heurtematte](https://images.weserv.nl/?url=github.com/heurtematte.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/heurtematte)
[![arnabcx](https://images.weserv.nl/?url=github.com/arnabcx.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/arnabcx)
[![saitejeswar1](https://images.weserv.nl/?url=github.com/saitejeswar1.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/saitejeswar1)
[![theobisproject](https://images.weserv.nl/?url=github.com/theobisproject.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/theobisproject)
[![aef24](https://images.weserv.nl/?url=github.com/aef24.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/aef24)
[![CQzhangjiawang](https://images.weserv.nl/?url=github.com/CQzhangjiawang.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/CQzhangjiawang)
[![prosonulhaque-tvs](https://images.weserv.nl/?url=github.com/prosonulhaque-tvs.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/prosonulhaque-tvs)
[![atextor](https://images.weserv.nl/?url=github.com/atextor.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/atextor)
[![AntjeFischer](https://images.weserv.nl/?url=github.com/AntjeFischer.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/AntjeFischer)
[![hschwabe](https://images.weserv.nl/?url=github.com/hschwabe.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/hschwabe)
[![ChetanT-System](https://images.weserv.nl/?url=github.com/ChetanT-System.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ChetanT-System)
[![simonlet](https://images.weserv.nl/?url=github.com/simonlet.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/simonlet)
[![fst-itaya](https://images.weserv.nl/?url=github.com/fst-itaya.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/fst-itaya)
[![HendrikHahn1996](https://images.weserv.nl/?url=github.com/HendrikHahn1996.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/HendrikHahn1996)
[![ebroda](https://images.weserv.nl/?url=github.com/ebroda.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ebroda)
[![Frank-Globisch](https://images.weserv.nl/?url=github.com/Frank-Globisch.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Frank-Globisch)
[![CarlesContell](https://images.weserv.nl/?url=github.com/CarlesContell.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/CarlesContell)
[![ShahinRashidbayliCofinityX](https://images.weserv.nl/?url=github.com/ShahinRashidbayliCofinityX.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ShahinRashidbayliCofinityX)
[![Jochen-Fischer](https://images.weserv.nl/?url=github.com/Jochen-Fischer.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Jochen-Fischer)
[![hkny](https://images.weserv.nl/?url=github.com/hkny.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/hkny)
[![MathiasIAV](https://images.weserv.nl/?url=github.com/MathiasIAV.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/MathiasIAV)
[![jigargadhiya-ss](https://images.weserv.nl/?url=github.com/jigargadhiya-ss.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/jigargadhiya-ss)
[![felipebustillo](https://images.weserv.nl/?url=github.com/felipebustillo.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/felipebustillo)
[![Perlot](https://images.weserv.nl/?url=github.com/Perlot.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Perlot)
[![maxeclairs](https://images.weserv.nl/?url=github.com/maxeclairs.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/maxeclairs)
[![hillgach](https://images.weserv.nl/?url=github.com/hillgach.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/hillgach)
[![MaximilianHauer](https://images.weserv.nl/?url=github.com/MaximilianHauer.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/MaximilianHauer)
[![lholthof](https://images.weserv.nl/?url=github.com/lholthof.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/lholthof)
[![BojanOD](https://images.weserv.nl/?url=github.com/BojanOD.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/BojanOD)
[![CeciPePe](https://images.weserv.nl/?url=github.com/CeciPePe.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/CeciPePe)
[![kss682](https://images.weserv.nl/?url=github.com/kss682.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/kss682)
[![FEILSTE](https://images.weserv.nl/?url=github.com/FEILSTE.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/FEILSTE)
[![gobica](https://images.weserv.nl/?url=github.com/gobica.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/gobica)
[![swleeSTrain](https://images.weserv.nl/?url=github.com/swleeSTrain.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/swleeSTrain)
[![M-Busk](https://images.weserv.nl/?url=github.com/M-Busk.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/M-Busk)
[![fredg02](https://images.weserv.nl/?url=github.com/fredg02.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/fredg02)
[![AntonSahrCoac](https://images.weserv.nl/?url=github.com/AntonSahrCoac.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/AntonSahrCoac)
[![thomas-henn](https://images.weserv.nl/?url=github.com/thomas-henn.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/thomas-henn)
[![dorkabcox](https://images.weserv.nl/?url=github.com/dorkabcox.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/dorkabcox)
[![klanir123](https://images.weserv.nl/?url=github.com/klanir123.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/klanir123)
[![mmaeffert](https://images.weserv.nl/?url=github.com/mmaeffert.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/mmaeffert)
[![drhansbeck](https://images.weserv.nl/?url=github.com/drhansbeck.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/drhansbeck)
[![fgazer94](https://images.weserv.nl/?url=github.com/fgazer94.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/fgazer94)
[![MWADCM](https://images.weserv.nl/?url=github.com/MWADCM.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/MWADCM)
[![rahulmohang](https://images.weserv.nl/?url=github.com/rahulmohang.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/rahulmohang)
[![JSterthues](https://images.weserv.nl/?url=github.com/JSterthues.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/JSterthues)
[![HabibaAbderrahim](https://images.weserv.nl/?url=github.com/HabibaAbderrahim.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/HabibaAbderrahim)
[![ribafish](https://images.weserv.nl/?url=github.com/ribafish.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ribafish)
[![ipa-big](https://images.weserv.nl/?url=github.com/ipa-big.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ipa-big)
[![konradge](https://images.weserv.nl/?url=github.com/konradge.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/konradge)
[![Zead-Alshu22](https://images.weserv.nl/?url=github.com/Zead-Alshu22.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Zead-Alshu22)
[![eschrewe](https://images.weserv.nl/?url=github.com/eschrewe.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/eschrewe)
[![tanvirrb](https://images.weserv.nl/?url=github.com/tanvirrb.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/tanvirrb)
[![scode-cpu](https://images.weserv.nl/?url=github.com/scode-cpu.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/scode-cpu)
[![estroem](https://images.weserv.nl/?url=github.com/estroem.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/estroem)
[![JATN1506](https://images.weserv.nl/?url=github.com/JATN1506.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/JATN1506)
[![ajithsimons](https://images.weserv.nl/?url=github.com/ajithsimons.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ajithsimons)
[![perdasilva](https://images.weserv.nl/?url=github.com/perdasilva.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/perdasilva)
[![parktaejojo](https://images.weserv.nl/?url=github.com/parktaejojo.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/parktaejojo)
[![sltfae](https://images.weserv.nl/?url=github.com/sltfae.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/sltfae)
[![thorstendikmann](https://images.weserv.nl/?url=github.com/thorstendikmann.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/thorstendikmann)
[![PascalRoessnerDSA](https://images.weserv.nl/?url=github.com/PascalRoessnerDSA.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/PascalRoessnerDSA)
[![ufh7fe](https://images.weserv.nl/?url=github.com/ufh7fe.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ufh7fe)
[![dirk-qualisys](https://images.weserv.nl/?url=github.com/dirk-qualisys.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/dirk-qualisys)
[![DorottyaSimonZF](https://images.weserv.nl/?url=github.com/DorottyaSimonZF.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/DorottyaSimonZF)
[![AmirMattarx](https://images.weserv.nl/?url=github.com/AmirMattarx.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/AmirMattarx)
[![Sebastian-Wurm](https://images.weserv.nl/?url=github.com/Sebastian-Wurm.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Sebastian-Wurm)
[![albireo411](https://images.weserv.nl/?url=github.com/albireo411.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/albireo411)
[![hilariosiemens](https://images.weserv.nl/?url=github.com/hilariosiemens.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/hilariosiemens)
[![seb-l0](https://images.weserv.nl/?url=github.com/seb-l0.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/seb-l0)
[![reginePrivat](https://images.weserv.nl/?url=github.com/reginePrivat.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/reginePrivat)
[![martinaprox](https://images.weserv.nl/?url=github.com/martinaprox.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/martinaprox)
[![tobikleinfrd](https://images.weserv.nl/?url=github.com/tobikleinfrd.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/tobikleinfrd)
[![finnhonsberg](https://images.weserv.nl/?url=github.com/finnhonsberg.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/finnhonsberg)
[![florianrusch-zf](https://images.weserv.nl/?url=github.com/florianrusch-zf.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/florianrusch-zf)
[![jridderbusch](https://images.weserv.nl/?url=github.com/jridderbusch.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/jridderbusch)
[![umar-tvs](https://images.weserv.nl/?url=github.com/umar-tvs.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/umar-tvs)
[![ybidois](https://images.weserv.nl/?url=github.com/ybidois.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ybidois)
[![nurulshuvotvs](https://images.weserv.nl/?url=github.com/nurulshuvotvs.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/nurulshuvotvs)
[![sourabhpatil178](https://images.weserv.nl/?url=github.com/sourabhpatil178.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/sourabhpatil178)
[![NRomOrt](https://images.weserv.nl/?url=github.com/NRomOrt.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/NRomOrt)
[![DrDanielMetz](https://images.weserv.nl/?url=github.com/DrDanielMetz.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/DrDanielMetz)
[![ChMThiel](https://images.weserv.nl/?url=github.com/ChMThiel.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/ChMThiel)
[![SebastianOpriel](https://images.weserv.nl/?url=github.com/SebastianOpriel.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/SebastianOpriel)
[![hemantsonu20](https://images.weserv.nl/?url=github.com/hemantsonu20.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/hemantsonu20)
[![akshayadsap](https://images.weserv.nl/?url=github.com/akshayadsap.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/akshayadsap)
[![daodaocrazy](https://images.weserv.nl/?url=github.com/daodaocrazy.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/daodaocrazy)
[![plhplh](https://images.weserv.nl/?url=github.com/plhplh.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/plhplh)
[![khmroshan](https://images.weserv.nl/?url=github.com/khmroshan.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/khmroshan)
[![sahadat-tvs](https://images.weserv.nl/?url=github.com/sahadat-tvs.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/sahadat-tvs)
[![lukaszkampl](https://images.weserv.nl/?url=github.com/lukaszkampl.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/lukaszkampl)
[![charmi-v](https://images.weserv.nl/?url=github.com/charmi-v.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/charmi-v)
[![max-wies-cofinity](https://images.weserv.nl/?url=github.com/max-wies-cofinity.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/max-wies-cofinity)
[![GitFlars](https://images.weserv.nl/?url=github.com/GitFlars.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/GitFlars)
[![borisschnebel](https://images.weserv.nl/?url=github.com/borisschnebel.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/borisschnebel)
[![amitpatil-ops](https://images.weserv.nl/?url=github.com/amitpatil-ops.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/amitpatil-ops)
[![oadiazp](https://images.weserv.nl/?url=github.com/oadiazp.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/oadiazp)
[![pscheich](https://images.weserv.nl/?url=github.com/pscheich.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/pscheich)
[![BlackRose01](https://images.weserv.nl/?url=github.com/BlackRose01.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/BlackRose01)
[![susef](https://images.weserv.nl/?url=github.com/susef.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/susef)
[![Kapunto](https://images.weserv.nl/?url=github.com/Kapunto.png&h=40&w=40&fit=cover&mask=circle&maxage=7d)](https://github.com/Kapunto)

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

### Non-Functional Requirements

Previously only available on the website, the Certification Framework has now been integrated into the non-functional requirements. This improves clarity on compliance and evaluation expectations for ecosystem participants.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
