# CX-0160-3 Battery Passport Data Management: Complete exchange of DPPs to service providers v.1.0.0

## ABSTRACT

This standard is and extension to the CX-0160 Battery Passport Data Management standard.
It is part of a series for multiple use cases and covers Use Case (3): DPP-Service provider view: Complete exchange of DPPs to service provider, which provides it public.

## FOR WHOM IS THE STANDARD DESIGNED

This document is meant for the following roles:

- Data Provider / Consumer
- Business Application Provider

The standard is of interest to all members of the automotive supply chain including suppliers, OEMs, dismantlers, recyclers and stakeholders within the recycling industry and the circular economy.

Data Provider / Consumer can be one of the following examples:

- Economic Operator
- stakeholder who reads Battery Passport Data

## 1 INTRODUCTION

A battery passport is a standardized digital record that accompanies a physical battery throughout its entire lifecycle. It contains key data about the battery’s identity, technical characteristics, carbon footprint, materials, safety and performance over time, as well as ownership and handover events.

Regulators (especially in the EU) are making battery passports mandatory for many traction and industrial batteries to improve transparency, safety and sustainability. With a battery passport, OEMs, fleet operators, service providers, second‑life users and recyclers can reliably access trusted information needed for:

- Demonstrating regulatory compliance (e.g., EU Battery Regulation)
- Assessing carbon footprint and recycled content
- Planning maintenance, reuse and second‑life applications
- Optimizing end‑of‑life treatment and recycling yields
- Protecting business confidentiality via controlled data access

In Catena‑X, the battery passport is implemented as a set of standardized semantic models and APIs on top of digital twins, so data can be shared securely and interoperably between different companies and IT systems.

This standard defines how Battery Passports are provided and consumed enabled by Catena-X.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following Catena‑X roles:

- **Data Provider / Consumer**: Economic operators and other participants that create, update, publish, or consume Battery Passport data for batteries (e.g. battery manufacturers, OEMs, component suppliers, dismantlers, recyclers).
- **Business Application Provider**: Providers of applications that implement the Battery Passport use case on top of Catena‑X (e.g. passport creation tools, regulatory reporting apps, recycling and second‑life applications).
- **Enablement Service Provider**: Providers of integration, data transformation or adapter services that technically enable participants to provision or consume Battery Passport data in a Catena‑X‑compliant way.

The 0160 Battery Passport standard specifies how battery‑related information is modeled, provisioned, discovered and accessed within the Catena‑X dataspace for:

- Traction, industrial and similar batteries that fall under the scope of the EU Battery Regulation or comparable regulatory schemes.
- End‑to‑end lifecycle usage within the automotive battery value chain (manufacturing, use phase, second‑life, end‑of‑life and recycling).
- Provisioning of both complete digital battery passports and partial, lifecycle‑specific data contributions, based on Catena‑X digital twins and the joint Catena‑X/IDTA Battery Passport aspect models.

The standard is to be applied when a complete exchange of DPPs to service providers is done, which provides it public

The standard is not intended to be applied:

- For non‑battery product passports or use cases outside the battery domain (see CX-0143).
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

In [IDTA-01001](https://industrialdigitaltwin.io/aas-specifications/IDTA-01001/v3.2/annex/dpp.html) and [IDTA-01002](https://industrialdigitaltwin.io/aas-specifications/IDTA-01002/v3.2/annex/dpp.html) as well as in [IDTA-01004](https://industrialdigitaltwin.io/aas-specifications/IDTA-01004/v3.1/annex/dpp.html) it is described how a DPP conformant to EN 18223 and EN 18222 can be derived.

For a Business Application Provider Catena-X compliance means that it can access the semantic models as required and specified in this standard and derive a DPP compliant to regulation from it.

### 1.3 CONFORMANCE

> *This section is non-normative*

Sections marked as non-normative as well as all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

If a participant or application only implements only a selected number of use cases described in this standard, then conformity must only be demonstrated along conformity assessment criteria (CACs) that apply to the specific use case.

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

Additional to the semantic models addressed in the [Base standard](./CX-0160-BatteryPassport-base.md) the following model has to be considered for the use case.

- Digital Product Passport - Part 1: DPP Metadata (IDTA-02099-1)

The Submodel Template (SMT) Specifications and Aspect Models are hosted by the IDTA Github repository "admin-shell-io".
Some models are either derived from existing models or reuse parts of other models.

For all models, the version specified in the corresponding "Identifier of Semantic Model" section is the minimum; any later minor version based on the same major version MAY be used. Bugfix version MUST be used.

### Required Models

To provide or consume data of the complete Battery Passport (e.g. as economic operator) data of all eight semantic models MUST be provided.

These models MUST be provided on Item/Instance Level:

- Digital Product Passport - Part 1: DPP Metadata (IDTA-02099-1)
- Digital Battery Passport - Part 1: Digital Nameplate (IDTA-02035-1)
- Digital Battery Passport - Part 2: Handover Documentation (IDTA-02035-2)
- Digital Battery Passport - Part 3: Carbon Footprint for Battery Passport (IDTA-02035-3)
- Digital Battery Passport - Part 4: Technical Data (IDTA-02035-4)
- Digital Battery Passport - Part 5: Product Condition (IDTA-02035-5)
- Digital Battery Passport - Part 6: Material Composition (IDTA-02035-6)
- Digital Battery Passport - Part 7: Circularity (IDTA-02035-7)

Additionally, these models SHOULD be provided on Model/Type Level to reduce access to instance digital twins:

- Digital Battery Passport - Part 2: Handover Documentation (IDTA-02035-2)
- Digital Battery Passport - Part 4: Technical Data (IDTA-02035-4)
- Digital Battery Passport - Part 6: Material Composition (IDTA-02035-6)
- Digital Battery Passport - Part 7: Circularity (IDTA-02035-7)

For further details the [Base standard](./CX-0160-BatteryPassport-base.md) MUST be considered.

### 3.1 SEMANTIC MODEL "DPP Metadata"

#### 3.1.1 INTRODUCTION

The "DPP Metadata" provides data points as required by EN 18223, i.e. data points every digital product passport must provide.

The model is for assets on Instance level.

#### 3.1.2 SPECIFICATION ARTIFACTS

- DPP Metadata IDTA-02099-1 (v1.0.x) - Submodel Template Specification as [.pdf](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/1_Digital%20Nameplate/1/0/IDTA%2002035-1_DBP-Part-1_Digital%20Nameplate.pdf) or [html](https://industrialdigitaltwin.io/idta-submodel-templates/IDTA-02099/1.0/index.html)
- [DPP Metadata IDTA-02099-1 (v1.0.x)- Submodel Template (.aasx)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/1_Digital%20Nameplate/1/0/IDTA%2002035-1_DBP-Part-1_Digital%20Nameplate.aasx)
- [DPP Metadata IDTA-02099-1 (v1.0.x) - Aspect Model (.ttl)](https://github.com/admin-shell-io/smt-semantic-models/blob/V1.1/io.admin-shell.idta.batterypass.digital_nameplate/1.0.0/BatteryNameplate.ttl)

#### 3.1.3 IDENTIFIER OF SEMANTIC MODEL

The aspect model "DPP Metadata" has the unique identifier

```text
urn:samm:io.admin-shell.idta.dpp.dpp_metadata:1.0.0#DppMetadata
```

This identifier MUST be added as semantic ID for the corresponding Battery Instance Twin.

Additionally, the following supplemental Semantic IDs MUST be added to the corresponding Battery Instance Twin:

```text
https://admin-shell.io/idta/cds/dppMetadata/1
```

## 4 APPLICATION PROGRAMMING INTERFACES

> *This section is normative*

### 4.1 APIs ASSOCIATED WITH DIGITAL TWINS

This standard completely and solely builds upon the standard [CX-0002](https://catenax-ev.github.io/docs/next/standards/CX-0002-DigitalTwinsInCatenaX) Digital Twins in Catena-X.

For more details consider the [Base standard](./CX-0160-BatteryPassport-base.md).

### 4.2 NOTIFICATIONS

Implementing the Notification API defined in the Base Standard can optionally be used by this use case.

For more details consider the [Base standard](./CX-0160-BatteryPassport-base.md).

## 5 PROCESSES

> *This section is normative*

### 5.1 PROVIDING BATTERY DATA TO THE DPP BUSINESS APPLICATION

This chapter describes how a data provider exchanges initial battery pass information with a data consumer to enable the data consumer to provide the battery passport.

#### 5.1.1 ACTORS AND ROLES

- Data provider: the economic operator and the DPP business application
- Data consumer: the DPP business application

#### 5.1.2 PROCESS REPRESENTATION

This process is intended to be used in situations where the economic operator is maintaining digital twins conformant to Catena-X standard but the DPP Business Application will provide the DPP as required by regulation based on the data of these digital twins.

##### OVERVIEW

The data consumer is responsible for providing battery passport information (e.g. as an economic operator).
To compose a complete battery passport, the data consumer combines data points from its own systems with data retrieved from the data provider.
The data provider provides the battery-specific information that originates from the manufacturing process, while the data consumer enriches this with additional data points such as operator-specific information, dynamic product condition data, or carbon footprint recalculations.

This Use Case focuses on the data exchange between economic operator and a DPP business application consuming and writing data to the relevant digital twin as specified in the Catena-X dataspace.

The provision of the battery passport to external stakeholders is not in the scope of this use case.
Likewise, the provision of the battery passport to end-users is not within the scope of this use case.

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

The data provider MAY implement notifications.
The data consumer MAY implement notifications.

#### 5.2 Bridging Catena-X DPP to EU DPP System

Use case 1 and 2 describes how battery pass relevant data can be collaboratively collected via an B2B data exchange among Catena-X participants in the upstream battery value chain.
However, for making a Catena-X DPP available at the EU DPP System a couple of technical requirements have to be fulfilled that are described in the JTC24 standards from CEN/CENELEC.
Most importantly the EU DPP System requires public access to DPP data free of charge which is not possible in the Catena-X dataspace setup as only onboarded participants can access the data.
Hence the Catena-X DPP data have to be bridged via an intermediate proxy to ensure EU DPP system compliant DPP data management.
This includes the data reception including data updates via the Catena-X ecosystem and synchronized representation of the DPP in the EU DPP Systems that includes registration of the DPP at the EU DPP registry, providing a lifecycle API for stakeholder access, providing a stable resolver end-point, ensuring role-based access control on restricted data, provide free of charge access to public DPP data via a data carrier, managing a backup of the DPP data and ensuring system neutral transfer of DPP data based on a generic DPP meta model in the case the economic operator changes after a status change of the battery.

##### 5.3.1 ACTORS AND ROLES

This use case can be performed by following actors:

- Catena-X onboarded Economic operator operating a connected EU DPP system facing DPP management system outside Catena-X  
- DPP Service provider with Catena-X certified business application for DPP data management and a connected EU DPP system facing DPP management system outside of Catena-X that acts on behalf of an economic operator

##### 5.3.2 PROCESS REPRESENTATION

The economic operator for considered batteries must finalize the collection of battery passport data both on model and item level on its back-end system via use case 1 or 2.
When the battery passport shall be issued and made public available on the EU DPP system, the battery passport data must be transferred from the economic operator backend system to the end-point representing the EU DPP system facing DPP management system.
For the purpose of issuing an EU compliant battery passport the economic operator must provide all mandatory battery passport data.
A not complete battery pass data set must be rejected from publishing, as it won't be compliant with the EUBR.

## 6 REFERENCES

### 6.1 NORMATIVE REFERENCES

> *This section is normative*

- CX-0002 Digital Twins in Catena-X v2.4.0
- CX-0018 Dataspace Connectivity v4.2
- CX-0126 Industry Core: PartType 2.1.1
- CX-0127 Industry Core: Part Instance 2.0.2
- CX-0151 Industry Core: Basics v1.1.0
- CX-0152 Policy Constraints for Data Exchange v1.0.0
- CX-0160 Battery Passport Data Management Base v.1.1.0

### 6.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

- [DIN DKE SPEC 99100:2025-02](https://www.dinmedia.de/en/technical-rule/din-dke-spec-99100/385692321)
- [Batterypass Semantic Models: Aspect Models](https://github.com/admin-shell-io/smt-semantic-models/releases/tag/V1.0.2)
- [Batterypass Semantic Models: Submodel Template Specifications](https://github.com/admin-shell-io/submodel-templates/tree/main/published/Digital%20Battery%20Passport)
- [Digital Battery Passport: Use Case Guideline of the Asset Administraion Shell](https://industrialdigitaltwin.org/wp-content/uploads/2026/02/IDTA_Catena-X_Guideline_Digital_Battery_Passport.pdf), Guideline, Feb. 2026.
- EN 18216:2026: Digital product passport - Data exchange protocols
- EN 18219:2026: Digital product passport - Unique identifiers
- EN  18220:2026: Digital product passport - Data Carriers
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
