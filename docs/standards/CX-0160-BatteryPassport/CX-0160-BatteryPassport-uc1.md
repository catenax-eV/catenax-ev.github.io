# CX-0160-1 Battery Passport Data Management: Provisioning of near-complete battery passport data v.1.0.0

## ABSTRACT

This standard is and extension to the CX-0160 Battery Passport Data Management standard.
It is part of a series for multiple use cases and covers **Use Case (1): Provisioning of near-complete battery passport data** within the Catena-X dataspace.

It specifies the digital twins, specific asset IDs, semantic models, APIs and processes required for the data provider to share battery instance and battery type data with the data consumer, so that the data consumer can compose the complete battery passport.
Dynamic product condition data is OPTIONAL in this use case; provisioning of complete or public battery passports to non-Catena-X stakeholders is out of scope.

## FOR WHOM IS THE STANDARD DESIGNED

The standard is of interest to members of the automotive battery value chain that exchange battery-related data between battery manufacturers and the party responsible for composing the battery passport (e.g. vehicle manufacturer).

This document is meant for the following roles:

- Data Provider / Consumer

Data Provider / Consumer can be one of the following examples:

- Party responsible for composing the battery passport acting as data consumer (e.g. vehicle manufacturer)
- Battery manufacturer or battery supplier acting as data provider

## 1 INTRODUCTION

A battery passport is a standardized digital record that accompanies a physical battery throughout its entire lifecycle. It contains key data about the battery’s identity, technical characteristics, carbon footprint, materials, safety and performance over time, as well as ownership and handover events.

Regulators (especially in the EU) are making battery passports mandatory for many traction and industrial batteries to improve transparency, safety and sustainability. With a battery passport, OEMs, fleet operators, service providers, second‑life users and recyclers can reliably access trusted information needed for:

- Demonstrating regulatory compliance (e.g., EU Battery Regulation)
- Assessing carbon footprint and recycled content
- Planning maintenance, reuse and second‑life applications
- Optimizing end‑of‑life treatment and recycling yields
- Protecting business confidentiality via controlled data access

In Catena‑X, the battery passport is implemented as a set of standardized semantic models and APIs on top of digital twins, so data can be shared securely and interoperably between different companies and IT systems.

This standard defines how Battery Passports are provided and consumed within Catena-X.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following Catena‑X roles:

- **Data Provider / Consumer**: Economic operators and other participants in the battery value chain that create, update, publish, or consume Battery Passport data (e.g. battery manufacturers, vehicle manufacturers).

This standard specifies how battery‑related information is modeled, provisioned, discovered and accessed within the Catena‑X dataspace for:

- Traction, industrial and similar batteries that fall under the scope of the EU Battery Regulation or comparable regulatory schemes.
- Provisioning of battery passport data from the battery manufacturer to the party responsible for composing the battery passport during the manufacturing-to-handover phase.
- Provisioning of near-complete battery passport data contributions based on Catena‑X digital twins and the joint Catena‑X/IDTA Battery Passport aspect models.

The standard is to be applied when:

- Provisioning a **near-complete battery passport** (all data except dynamic product condition data such as "put into service")

The standard is not intended to be applied:

- For non‑battery product passports or use cases outside the battery domain (see CX-0143).
- For component supplier integration, for example cells, housing, battery packs
- As a general solution for data exchange with non‑Catena‑X ecosystems (although mappings may be implemented externally).
- For full regulatory-compliance e.g. for providing public information without access-restrictions. The standard may enable it, but as Catena-X is an ecosystem with a focus on trust and identification this is out of scope for the actual specification.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The aim of the “Battery Passport” standard within Catena‑X is to establish a harmonized, interoperable, and lifecycle‑spanning foundation for representing, identifying, and exchanging battery‑related information across all actors of the battery value chain.
The standard enables the provisioning of both complete digital battery passports and partial, lifecycle‑specific data contributions from individual supply‑chain participants.
It supports compliance with global regulatory requirements—particularly the EU Battery Regulation—and enables data‑driven value creation throughout manufacturing, use, repurposing, and end‑of‑life phases.

The Battery Passport standard is not intended to include all potentially relevant information for every downstream use case and also not focusing on the provisioning to non-Catena-X members.
Instead, it establishes the core semantic, structural, and architectural foundation on which further domain‑specific or proprietary data products can be built.
Data owners may add complementary information via additional aspect models all governed by Catena‑X‑compliant access and usage policies to ensure privacy, security, and data sovereignty.

This standard is harmonized with the IDTA standardization regarding the Battery Passport (see [Semantic Models](#3-semantic-models) section) and compliant with the DIN DKE SPEC 99100.

### 1.3 CONFORMANCE

> *This section is non-normative*

Sections marked as non-normative as well as all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

Conformity to this standard must be demonstrated along the conformity assessment criteria (CACs) defined for this use case.

### 1.4 EXAMPLES

> *This section is non-normative*

The example in the [Base standard](./CX-0160-BatteryPassport-base.md) can be followed to see how to consume Battery Passport Data.

### 1.5 TERMINOLOGY

> *This section is non-normative*

For terminology refer to the [Base standard](./CX-0160-BatteryPassport-base.md) and to the glossary: https://catenax-ev.github.io/glossary.

## 2 RELEVANT PARTS OF THE STANDARD FOR SPECIFIC USE CASES

> *This section is normative*

### 2.1 Battery Passport

#### 2.1.1 DIGITAL TWINS AND SPECIFIC ASSET IDs

For generally relevant specific asset IDs, the Policy Constraints the [Base standard](./CX-0160-BatteryPassport-base.md) MUST be followed.

### 2.2 POLICY CONSTRAINTS FOR DATA EXCHANGE

For Policies, the Policy Constraints in the [Base standard](./CX-0160-BatteryPassport-base.md) MUST be followed.

## 3 SEMANTIC MODELS

> *This section is normative*

For a list of semantic models relevant for the use case consider the  [Base standard](./CX-0160-BatteryPassport-base.md).

### Required Models

All models except for Part 5: Product Condition (IDTA-02035-5) MUST be provided.
The data model Part 5: Product Condition (IDTA-02035-5) MAY be provided.

The following semantic models MUST be provided on Type Level:

- Digital Battery Passport - Part 2: Handover Documentation (IDTA-02035-2)
- Digital Battery Passport - Part 4: Technical Data (IDTA-02035-4)
- Digital Battery Passport - Part 6: Material Composition (IDTA-02035-6)
- Digital Battery Passport - Part 7: Circularity (IDTA-02035-7)

The following semantic models MUST be provided on Instance Level:

- Digital Battery Passport - Part 1: Digital Nameplate (IDTA-02035-1)
- Digital Battery Passport - Part 3: Carbon Footprint for Battery Passport (IDTA-02035-3) - as soon as delegation act for PCF calculation for batteries is available
- Digital Battery Passport - Part 5: Product Condition (IDTA-02035-5) - OPTIONAL

> [!Note]
> Although the semantic models are identical, the data itself cannot be used as a direct copy by the party responsible for composing the battery passport: it is merely input data used to compose the complete battery passport.
>
>- a) update with their own information (example: white labelling)
>- b) add information that cannot be provided by the supplier (example: operatorID)
>- c) add or update dynamic data (Product Condition IDTA-02035-5)
>
> and
>
>- d) add other missing or incomplete data points
>- e) re-calculate or extending Carbon Footprint data: depending on the calculation method additional values need to be considered, for example data related to logistics
>- f) add and update instance related documents in Handover Documentation (example: information on accidents)

For further details the [Base standard](./CX-0160-BatteryPassport-base.md) MUST be considered.

## 4 APPLICATION PROGRAMMING INTERFACES

> *This section is normative*

### 4.1 APIs ASSOCIATED WITH DIGITAL TWINS

This standard completely and solely builds upon the standard [CX-0002](https://catenax-ev.github.io/docs/next/standards/CX-0002-DigitalTwinsInCatenaX) Digital Twins in Catena-X.

For more details consider the [Base standard](./CX-0160-BatteryPassport-base.md).

### 4.2 NOTIFICATIONS

Implementing the Notification API of the Base standard is RECOMMENDED for the data provider; the data consumer MAY implement it.

For more details consider the [Base standard](./CX-0160-BatteryPassport-base.md).

## 5 PROCESSES

> *This section is normative*

### 5.1 PROVIDING BATTERY DATA FOR BATTERY PASSPORT COMPOSITION

This chapter describes how a data provider exchanges initial battery pass information with a data consumer to enable the data consumer to provide the battery passport.

#### 5.1.1 ACTORS AND ROLES

- Data provider: Typically the company, that manufactures the battery (i.e. the battery producer).
- Data consumer: A data consumer is typically the party responsible for composing the battery passport. Depending on the regulatory and contractual setup, this party may also be the economic operator.

#### 5.1.2 PROCESS REPRESENTATION

This process is intended to be used in situations where the data provider manufactures the battery, but the battery passport will be published by the party responsible for composing the battery passport.
This can happen depending on the contractual situation and depending on who is the economic operator of the battery and who is putting it onto the EU market.

##### OVERVIEW

The data consumer is the party responsible for composing the battery passport and for providing battery passport information.
Depending on the regulatory setup, this party may act as the economic operator.
To compose a complete battery passport, the data consumer combines data points from its own systems with data retrieved from the data provider.
The data provider provides the battery-specific information that originates from the manufacturing process, while the data consumer enriches this with additional data points such as operator-specific information, dynamic product condition data, or carbon footprint recalculations.

This use case focuses on the data exchange between data provider and data consumer within the Catena-X dataspace.

The provision of the battery passport to external stakeholders is not in the scope of this standard.
Likewise, the provision of the battery passport to end-users is not within the scope of this standard.

##### DATA PROVIDER'S RESPONSIBILITIES

The data provider MUST create the assets and digital twins as described in chapters [2.1.1 DIGITAL TWINS AND SPECIFIC ASSET IDs](#211-digital-twins-and-specific-asset-ids) and [4 APPLICATION PROGRAMMING INTERFACES](#4-application-programming-interfaces) in order to provide battery passport information to the data consumer.
The aspect models for each battery MUST be created in accordance with [chapter 3](#3-semantic-models).

The data provider SHOULD make the digital twins available to the data consumer in a timely manner after production of the battery.
The data provider and data consumer MAY agree on any other point in time.

##### DATA CONSUMER'S RESPONSIBILITIES

The data consumer MUST use the Application Programming Interfaces as described in [chapter 4](#4-application-programming-interfaces) to retrieve battery passport information from the data provider.

The data consumer can create the assets and digital twins as described in chapters [2.1.1 DIGITAL TWINS AND SPECIFIC ASSET IDs](#211-digital-twins-and-specific-asset-ids) and [4 APPLICATION PROGRAMMING INTERFACES](#4-application-programming-interfaces) to provide the battery passport to other participants within the Catena-X dataspace.

The data consumer needs to provide the battery passport to external stakeholders as required by regulation.

#### 5.1.3 REQUESTING BATTERY PASSPORT DATA

See the [Base standard](./CX-0160-BatteryPassport-base.md) for the requesting of Battery Passport Data .

The data provider SHOULD implement notifications.
The data consumer MAY implement notifications.

## 6 REFERENCES

### 6.1 NORMATIVE REFERENCES

> *This section is normative*

- CX-0002 Digital Twins in Catena-X v2.4.0
- CX-0018 Dataspace Connectivity v4.2
- CX-0126 Industry Core: PartType 2.1.1
- CX-0127 Industry Core: Part Instance 2.0.2
- CX-0151 Industry Core: Basics v1.0.0
- CX-0152 Policy Constraints for Data Exchange v1.0.0

### 6.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

- [DIN DKE SPEC 99100:2025-02](https://www.dinmedia.de/en/technical-rule/din-dke-spec-99100/385692321)
- [Batterypass Semantic Models: Aspect Models](https://github.com/admin-shell-io/smt-semantic-models/releases/tag/V1.1)
- [Batterypass Semantic Models: Submodel Template Specifications](https://github.com/admin-shell-io/submodel-templates/tree/main/published/Digital%20Battery%20Passport)
- [Digital Battery Passport: Use Case Guideline of the Asset Administraion Shell](https://industrialdigitaltwin.org/wp-content/uploads/2026/02/IDTA_Catena-X_Guideline_Digital_Battery_Passport.pdf), Guideline, Feb. 2026.
- EN 18216:2026: Digital product passport - Data exchange protocols
- EN 18219:2026: Digital product passport - Unique identifiers
- EN 18220:2026: Digital product passport - Data Carriers
- EN 18221:2026: Digital product passport - Data storage, archiving, and data persistence
- EN 18222:2026: Digital Product Passport - Application Programming Interfaces (APIs) for the product passport lifecycle management and searchability
- EN 18223:2026: Digital Product Passport - System interoperability
- prEN 18239:2025: Digital Product Passport - Access rights management, information system security, and business confidentiality
- prEN 18246:2025: Digital product passport - Data authentication, reliability and integrity
- [Regulation (EU) 2023/1542 of the European Parliament and of the Council of 12 July 2023 concerning batteries and waste batteries, amending Directive 2008/98/EC and Regulation (EU) 2019/1020 and repealing Directive 2006/66/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1542) - referenced as "Battery Regulation".
- [Regulation (EU) 2024/1781 of the European Parliament and of the Council of 13 June 2024 establishing a framework for the setting of ecodesign requirements for sustainable products, amending Directive (EU) 2020/1828 and Regulation (EU) 2023/1542 and repealing Directive 2009/125/EC (Text with EEA relevance)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02024R1781-20240628) - referenced as "Ecodesign for Sustainable Products Regulation" or "ESPR".

### 6.3 REFERENCE IMPLEMENTATIONS

There is currently no actively maintained reference application.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
