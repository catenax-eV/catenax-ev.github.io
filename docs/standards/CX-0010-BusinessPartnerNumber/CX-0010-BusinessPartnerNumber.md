---
tags:
  - CAT/BPDM
  - CAT/Core Service Provider
  - CAT/Sandbox Services (Beta)
  - CAT/Sandbox Service Provider
---

# CX-0010 BUSINESS PARTNER NUMBER v2.2.1

## FOR WHOM IS THE STANDARD DESIGNED

This document is mainly targeted to technical individuals involved in issuing and maintaining business partner numbers, as well as business individuals who are involved in the compliance process of issuing and maintaining business partner numbers.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

| **Version** | **Publishing Date** | **Author** | **Description of Change**                                                                                                                                                                                                                                        |
| ----------- | ------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.1.0       | 2022-11-30          |            | Initial version by Catena-X Association                                                                                                                                                                                                                          |
| 1.1.1       | 2023-06-03          |            | Addendum for Conformity Assessment added                                                                                                                                                                                                                         |
| 2.0.0       | 2023-09-26          |            | Included new terminology chapter; merged CX-0011 Issuing Agency                                                                                                                                                                                                  |
| 2.1.0       | 2024-12-02          |            | Adapted to new template structure and made a major overhaul of the document; documented the scope of the check characters; remove reference to ISO/IEC 15459 until it is clarified, if the BPN shall be used for unit identifiers and / or if ISO/IEC 6523 is sufficient |
| 2.2.0       | 2025-03-17          |            | Add reference and adapt wording regarding ISO/IEC 6523 registration of the BPN                                                                                                                                                                                   |

## ABSTRACT

The Business Partner Data Management (BPDM) is a distributed service-based system, composed of a set of dedicated services, that simultaneously serve multiple stakeholders. It is based on a central data pool of business partners, which is consistent with the overall design principles of Catena-X. The main target is to create business partner data records (such as customer/supplier) with a high quality and currentness, to provide other processes with these data. This results in less rework and adjustment due to better master data quality which ultimately leads to an overall cost reduction for participating companies. Additionally, Value Added Services shall be offered to enrich those business partner data sets even further and give additional information or warnings about the business partners. Getting a 360° view on your business partners also helps with reducing costs and achieving process excellence because better decisions can be made.

The Business Partner Number (BPN) is a globally unique, world-wide scalable, semantically enriched, interoperable, time-dependent, stable, human-readable identifier for business partners known in the Catena-X network that represent an organization or one of its organization parts from foundation to closure. Consequently, it is also the unique identifier for the network participants of the Catena-X network. It serves as a blueprint for similar networks that follow the Catena-X concepts, which promotes interoperability between these networks.

This standard defines the issuance process, structure, and lifecycle of BPNs. It also defines what types of BPNs there are and how they are linked to each other.

## 1. INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following audience:

- Core Service Provider
- Onboarding Service Provider
- Business Application Provider
- Data Provider and Consumer

This document focuses on the business partner number (BPN) and its issuing organization (IO). It is used as primary identifier in the Business Partner Data Management (BPDM) described on the [BPDM Catena-X Website](https://catena-x.net/en/offers-standards/bpdm). It is relevant for core service providers who want to provide services for retrieving a cleansed, high-quality business partner data record (Golden Record) for a given business partner number. It is also relevant for onboarding service providers, business application providers as well as data providers and consumers who want to use such services. To assume the role of the issuing organization (IO), core service providers especially need to get an understanding on the issuance process, structure, lifecycle, types, and relations of a BPN.

The Business Partner Number (BPN) is a globally unique, world-wide scalable, semantically enriched, interoperable, time-dependent, stable, human-readable identifier for business partners known in the Catena-X network that represent an organization or one of its organization parts from foundation to closure. Consequently, it is also the unique identifier for the network participants of the Catena-X network. It serves as a blueprint for similar networks that follow the Catena-X concepts, which promotes interoperability between these networks.

Not in scope is the way of how business partner data records can be shared to create a Golden Record. There is a separate standard for this: CX-0074 Business Partner Data Gate API 3.2.0.

Not in scope is the overall Business Partner Pool with all Golden Records within Catena-X and the way of how the Golden Records can be retrieved. There is a separate standard for this: CX-0012 Business Partner Pool API 4.2.0.

Not in scope are the requirements of cleansing and enriching the business partner data records with the aim to create a Golden Record. There is a separate standard for this: CX-0076 Golden Record End to End Requirements Standard 1.3.0.

You can find the other standards in the [Catena-X standard library](https://catena-x.net/en/standard-library).

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

It is not only with the founding of various industry networks (such as Catena-X) that the requirements increase to establish data standards for the entire value chain and to promote the industry-wide, international data exchange. For the networking of OEMs, suppliers, customers, and industrial partners, it is essential to define and introduce an industry-wide standard for identifying business partners to map the entire supply chain in a sustainable manner.

In order to satisfy this requirement, an issuance process is established and structure, lifecycle, types, and relations are defined for a business partner number that has the following targeted qualities:

- BPN is a **globally unique** identifier, with which an organization or one of its organization parts have **exactly one** identifier world-wide, so that no two organizations or organization parts have the same identifier and no two identifiers stand for the same organization or organization part
- BPN is a **world-wide scalable** identifier, that is able to identify **all** organizations and their organization parts on a global scale
- BPN is a **semantically enriched** identifier, that includes the **type** of the business partner it identifies
- BPN is an **interoperable** identifier, which is used **cross-application** and **cross-organization** in all conceivable business contexts
- BPN is a **time-dependent** identifier, that has a **validity** for which it identifies an organization or one of its organization parts in the (legally) defined limits of their existence
- BPN is a **stable** identifier, which **never changes** structurally, **never ceases to exist** and **never is reassigned**, even if the organization or one of its organization parts ceases to exist
- BPN is a **human-readable** identifier, that is comparable to a telephone number or a postal code
- BPN is an identifier, which inherently supports **error detection**

There is a reference implementation for the [Business Partner Data Pool BPN Issuing Service (6.3.x)](https://github.com/eclipse-tractusx/bpdm/blob/72ba993eb2332613d6cee52c40182763f3e3735f/bpdm-pool/src/main/kotlin/org/eclipse/tractusx/bpdm/pool/service/BpnIssuingService.kt) on GitHub. It is part of a Spring Boot Kotlin open-source software project under the hood of the Eclipse Foundation and follows the Apache 2.0 licenses.

For the complete and up-to-date BPDM setup refer to the [Eclipse Tractus-X BPDM GitHub repository (6.3.x)](https://github.com/eclipse-tractusx/bpdm/blob/72ba993eb2332613d6cee52c40182763f3e3735f/README.md).

For an architecture overview refer to the [BPDM ARC42 documentation (6.3.x)](https://github.com/eclipse-tractusx/bpdm/tree/72ba993eb2332613d6cee52c40182763f3e3735f/docs/architecture).

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

If sections are marked as non-normative, all authoring guidelines, diagrams, examples, and notes in these sections are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in [BCP 14](https://datatracker.ietf.org/doc/html/bcp14), [RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119), [RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174) when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

To prove conformity with this standard, a self-audited, declared and signed document must be provided, that the conformity assessment criteria documented in this standard regarding issuance process, structure, lifecycle, types, and relations of BPNs are met.

### 1.4 EXAMPLES

An example for the BPN is: BPNL 0000 0000 IF61

**BPN:** marks the identifier as BPN

**L:** identifies the type of the business partner; in this case its a legal entity

**0000 0000 IF:** identifies the business partner

**61** : are the check characters of the whole BPN

The BPNL can have relations to BPNA and BPNS which are depicted in the following example:

![BPN Example](./assets/diagrams/object/example-for-bpn.svg)

### 1.5 TERMINOLOGY

> *This section is non-normative*

#### 1.5.1 GENERAL

**organization:** unique framework of authority within which a person or persons act, or are designated to act, towards some purpose [^4]

**organization part:** any department, service or other entity within an organization, which needs to be identified for information interchange [^4]

**issuing organization (IO):** the issuing organization (IO) is a body that assumes responsibility for the administration of a specific organization identification scheme [^5]

**organization identification scheme:** a system for allocating identifiers to registered objects (identification scheme) which is dedicated to the unique identification of organizations [^4]

**International Codes Designator (ICD):** data element used to uniquely identify an organization identification scheme [^4]

**organization identifier (OI):** assigned to an organization within an organization identification scheme, and unique within that scheme [^4]

**organization part identifier (OPI):** an identifier allocated to a particular organization part [^4]

**organization part identifier source indicator (OPIS):** data element used to specify the source for the organization part identifier [^4]

**Golden Record:** Golden Record defines a business partner data record which successfully passed a set of predefined quality rules. These rules qualified the data record into a harmonized, standardized, and semantically unified data structure which is defined by Catena-X. The Golden Record status is a prerequisite for each business partner data record to receive a valid BPN.

#### 1.5.2 DATA MODEL

This chapter explains the data model[^1] from a conceptual / terminology point of view. It does not include technical details of the API data model, such as:

- differences in response and request
- differences in data stages (like input or output)
- attributes for pagination
- singular query parameters, which are not already attributes of the entities

##### 1.5.2.1 BUSINESS PARTNER

![Business Partner](./assets/diagrams/class/business-partner-simple.svg)

In general, a business partner is any entity (such as a customer, a supplier, an employee, or a service provider) that does business with another entity.

In Catena-X, a business partner is an organization (such as an enterprise or company, university, association, etc., and not a natural person) or one of its organization parts that acts as unique partner within the supply chain - either in the role of a direct participant, or a consultant, or a non-production-material (NPM) supplier.

BPDM distinguishes between three business partner types to represent an organization or one of its organization parts relevant for the supply chain (see detailed definitions): legal entity, site, and address[^2].

##### 1.5.2.2 LEGAL ENTITY

![Legal Entity](./assets/diagrams/class/legal-entity-simple.svg)

In general, a legal entity is a juridical person that has legal rights and duties related to contracts, agreements, and obligations. The term especially applies to any kind of organization established under the law applicable to a country.

In Catena-X, a legal entity is a type of business partner representing a legally registered organization with its official registration information, such as legal name (including legal form, if registered), legal address and tax number.

A legal entity has exactly one legal address, but it is possible to specify additional addresses that a legal entity owns. Thus, at least one address is assigned to a legal entity. A legal entity can own sites. Thus, many or no sites are assigned to a legal entity. A legal entity is uniquely identified by the BPNL.

##### 1.5.2.3 SITE

![Site](./assets/diagrams/class/site-simple.svg)

In general, a site is a delimited geographical area in which an organization conducts business.

In Catena-X, a site is a type of business partner representing a physical location or area owned by a legal entity, where a production plant, a warehouse, or an office building is located.

A site is owned by a legal entity. Thus, exactly one legal entity is assigned to a site. A site has exactly one main address[^3], but it is possible to specify additional addresses (such as different gates), that belong to a site. Thus, at least one address is assigned to a site. A site can only be uploaded and modified by the owner (the legal entity), because only the owner knows which addresses belong to which site. A site is uniquely identified by the BPNS.

##### 1.5.2.4 ADDRESS

![Address](./assets/diagrams/class/address-simple.svg)

In general, an address is a collection of information to describe a physical location, using a street name with a house number and/or a post office box as reference. In addition, an address consists of several postal attributes, such as country, region (state), county, township, city, district, or postal code, which help deliver mail.

In Catena-X, an address is a type of business partner representing the legal address of a legal entity, and/or the main address[^3] of a site, or any additional address of a legal entity or site (such as different gates).

An address is owned by a legal entity. Thus, exactly one legal entity is assigned to an address. An address can belong to a site. Thus, one or no site is assigned to an address. An address is uniquely identified by the BPNA.

## 2 BUSINESS PARTNER NUMBER

> *This section is normative*

The BPN is a globally unique, world-wide scalable, semantically enriched, interoperable, time-dependent, stable, human-readable identifier for business partners that represent an organization or one of its organization parts from foundation to closure. It also inherently supports error detection. All conformity assessment criteria that guarantee these qualities are listed and explained below.

### 2.1 ISSUANCE PROCESS

The issuing organization **MUST** issue BPNs for the following business partners in accordance with the [ISO/IEC 6523-1:2023](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:6523:-1:ed-2:v1:en) and this standard:

- legal entities (BPNL), such that the BPN is an organization identifier (OI) in the sense of the [ISO/IEC 6523-1:2023](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:6523:-1:ed-2:v1:en)
- sites (BPNS), such that the BPN is an organization part identifier (OPI) in the sense of the [ISO/IEC 6523-1:2023](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:6523:-1:ed-2:v1:en)
- addresses (BPNA), such that the BPN is an organization part identifier (OPI) in the sense of the [ISO/IEC 6523-1:2023](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:6523:-1:ed-2:v1:en)

The issuing organization **MUST NOT** issue BPNs for the following real-world entities:

- natural persons (such as employees) who act for a legal entity and are not a legal entity on their own
- forms of freight forwarding (such as c/o addresses)
- elements of (legal) hierarchies (such as business global ultimate), if they are not a legal entity on their own
- internal unloading points and other such places, which are solely used for internal logistics

The issuing organization **MUST** centrally issue BPNs, so that they are **globally unique** and can be used cross-application and cross-organization in an **interoperable** way in the Catena-X network. Catena-X e.V. grants a license through which an operating company can issue BPNs on behalf of the Catena-X e.V. and thus assume the role of the issuing organization.[^6]

The BPN issuance process **MUST** be coupled to the creation of a Golden Record, so that a BPN is only issued if a corresponding Golden Record exists.

Note that for this standard, organization part identifiers (BPNS and BPNA) are issued by the issuing organization, so that the organization part identifier source indicator (OPIS) is always 0. As the OPIS can be considered a constant it is **NOT REQUIRED** to be included in any data exchange.

### 2.2 STRUCTURE

The structure of a BPN **MUST** be registered as an organization identification scheme according to [ISO/IEC 6523-1:2023](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:6523:-1:ed-2:v1:en) and [ISO/IEC 6523-2:1998](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:6523:-2:ed-1:v1:en) with the [Registration Authority](http://iso6523.info/) under an International Code Designator (ICD), so that only the issuing organization can issue organization identifiers or organization part identifiers for this scheme.

The BPN **MUST** have the following structure, being a 16-character identifier:

| **Prefix** | **Type Character** | **Entity Characters** | **Check Characters** |
| ---------- | ------------------ | --------------------- | -------------------- |
| BPN        | 1 character        | 10 characters         | 2 characters         |

A well-defined and standardized structure, which relies on existing standards as well as on common practice, guarantees acceptance:

- the prefix is always "BPN" in upper case, which marks the identifier as a Business Partner Number
- the type character **semantically enriches** the BPN, so that the type of the business partner can be directly determined. It is one of the uppercase letters 'L', 'S', or 'A':

  - L stands for legal entity
  - S stands for site
  - A stands for address

- the entity characters are alphanumerical uppercase characters that ensure that the BPN is **world-wide scalable**, being capable of identifying 36^10 ~ 3.6 quadrillion different business partners per type
- the check characters are alphanumerical uppercase characters that implement the **error detection** using a verification algorithm according to [ISO/IEC 7064:2003](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:7064:ed-1:v1:en) MOD 1271-36

The regular expression for the BPN is: BPN\[LSA\]\[A-Z0-9\]\{10\}\[A-Z0-9\]\{2\}

Further requirements:

- the check characters **MUST** be calculated over the entire BPN (prefix, type and entity code), to fully support **error detection**
- the following input or reading aid using blanks **SHOULD** be used to even further increase **human-readability** of the BPN, e.g.: BPNL 0000 0000 IF61

### 2.3 LIFECYCLE

The BPN of a business partner has an own lifecycle, depending on the corresponding state of the business partner in the real world.

Therefore, each business partner in BPDM **MUST** have a state with the following state definitions:

- active
- inactive

As the BPN is **time-dependent**, the state **MUST** have a start and an end date, which defines the validity of the business partner (state) and thus the validity of the BPN.

Even if a business partner becomes inactive, the business partner and its BPN **MUST** be further accessible. The BPN **MUST NOT** change structurally over its lifetime. Both requirements are crucial for the BPN to be considered as **stable**.

### 2.4 RELATIONS

![Business Partner](./assets/diagrams/class/business-partner.svg)

There are the following relations between a legal entity, its sites, and its addresses:

- Each legal entity **MUST** be associated to at least one address which is its legal address
- Each site **MUST** be associated to at least one address which is its main address[^3]

- Each site **MUST** be associated to exactly one legal entity
- Each address **MUST** be associated to exactly one legal entity
- Each address **MUST** be either associated to none or no more than one site

- It **MUST** be possible to associate multiple addresses to a legal entity
- It **MUST** be possible to associate multiple sites to a legal entity
- It **MUST** be possible to associate multiple addresses to a site

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- [ISO/IEC 6523-1:2023](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:6523:-1:ed-2:v1:en)
- [ISO/IEC 6523-2:1998](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:6523:-2:ed-1:v1:en); note that it is expected to be replaced by [ISO/IEC DIS 6523-2](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:6523:-2:dis:ed-2:v1:en) in the coming months.
- [ISO/IEC 7064:2003](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:7064:ed-1:v1:en)

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

- [BPDM Catena-X Website](https://catena-x.net/en/offers-standards/bpdm) (accessed 2024-12-17)
- [Catena-X standard library](https://catenax-ev.github.io/docs/next/standards/overview) (accessed 2024-12-17)

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

- [Business Partner Data Pool BPN Issuing Service 6.3.x](https://github.com/eclipse-tractusx/bpdm/blob/72ba993eb2332613d6cee52c40182763f3e3735f/bpdm-pool/src/main/kotlin/org/eclipse/tractusx/bpdm/pool/service/BpnIssuingService.kt)
- [Eclipse Tractus-X BPDM GitHub repository (6.3.x)](https://github.com/eclipse-tractusx/bpdm/blob/72ba993eb2332613d6cee52c40182763f3e3735f/README.md)
- [BPDM ARC42 documentation (6.3.x)](https://github.com/eclipse-tractusx/bpdm/tree/72ba993eb2332613d6cee52c40182763f3e3735f/docs/architecture)

## ANNEXES

### FIGURES

> *This section is non-normative*

Intentionally left blank.

### TABLES

> *This section is non-normative*

Intentionally left blank.

[^1]: Note that PlantUml is used for the conceptual UML diagrams in this document (A = abstract class; green E = entity; C = class; red E = enumeration). An abstract class has no actual representation in the OpenAPI implementation. An entity is usually implemented by an own OpenAPI controller with resources and usually is the root in a payload, while a class is a sub node in the payload. An enumeration is a set of predefined values.

[^2]: These types always imply a business partner which means that legal entity, site, and address are types of business partners.

[^3]: Note that there is currently a debate as to whether a site is only a consolidation of addresses (BPNA), with all addresses being equally ranked, since a "main" address can't always be defined at this point in time. This may lead to changes in the next update of this standard.

[^4]: compare to [ISO/IEC 6523-1:2023](https://www.iso.org/standard/82246.html)

[^5]: compare to [ISO/IEC 6523-2:1998](https://www.iso.org/standard/25774.html)

[^6]: Note that conceptually there is only one issuing organization allowed. As the Business Partner Number shall be also used in other networks (than Catena-X) that are based on this standard, we might either have a decentralized approach, which means multiple issuing organizations will need to synchronize their issuance processes, or stay with a strictly centralized approach, which means one issuing organization will issue Business Partner Numbers for all networks that are based on this standard. For the former approach it might be required to also encode the issuing organization into the Business Partner Number. Note that the Legal Entity Identifier (LEI) of the GLEIF organization (another organization identification scheme based on ISO/IEC 6523) successfully implemented the decentralized approach. This decision may lead to changes in the next update of this standard.

### LEGAL

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
