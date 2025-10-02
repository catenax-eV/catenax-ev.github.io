---
tags:
  - CAT/BPDM
  - CAT/Core Service Provider
  - CAT/Sandbox Services
  - CAT/Sandbox Service Provider
---

# CX-0012 Business Partner Data Pool API v5.1.1

## FOR WHOM IS THE STANDARD DESIGNED

This document is mainly targeted to technical individuals involved in integrating and developing against this API, as well as business individuals who are involved in compliance process of this API.

## ABSTRACT

The Business Partner Data Management (BPDM) is a distributed service-based system, composed of a set of dedicated services, that simultaneously serve multiple stakeholders and use cases. It is based on a central data pool of business partners, which is operated under data space governance and underlies interoperability through standardization. The main target is to create business partner data records (such as customer/supplier) with a high quality and currentness, to provide other processes with these data. This results in less rework and adjustment due to better master data quality which ultimately leads to an overall cost reduction for participating companies. Additionally, Value Added Services shall be offered to enrich those business partner data sets even further and give additional information or warnings about the business partners. Getting a 360° view on your business partners also helps with reducing costs and achieving process excellence because better decisions can be made.

The Business Partner Data Pool collects business partner data records which are cleansed and enriched, so-called Golden Records, and makes them available. It is a main component of the architecture framework, as it enables the data space participants to leverage accurate, complete, and consistent business partner data for data space applications and shared services.

The Business Partner Data Pool can be accessed via the standardized API described in this standard.

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following audience:

- Core Service Provider
- Onboarding Service Provider
- Business Application Provider
- Data Provider and Consumer

This document focuses on the Business Partner Data Pool API (short: Pool API) that is part of the Business Partner Data Management (BPDM) use case described on the [BPDM website](https://catena-x.net/use-case-cluster/next-level-master-data-management/). It is relevant for Core Service Providers who want to provide services for retrieving a cleansed, high-quality business partner data record (Golden Record) for a given business partner number (BPN). It is also relevant for onboarding service providers, business application providers as well as data providers and consumers who want to use such services.

Not in scope are the structure and logic of the business partner number itself and the mechanism on how the business partner number is issued. There is a separate standard for this: CX-0010 Business Partner Number 3.0.0.

Not in scope is the process of sharing business partner data records to create a Golden Record. There is a separate standard for this: CX-0074 Business Partner Data Gate API 4.1.0.

Not in scope are the requirements of cleansing and enriching the business partner data records with the aim to create a Golden Record. There is a separate standard for this: CX-0076 Golden Record End to End Requirements Standard 1.5.0.

You can find the other standards in the [standard library](https://catenax-ev.github.io/docs/standards/overview).

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The Pool API is a crucial core component for the data space, the Golden Record Service as Core Service B and the BPDM use case because it contributes to the following functions:

1. Data Consistency: The Pool API ensures that all data related to business partners is consistent and up-to-date and can be accessed by all consumers of the API. This helps to reduce the risk of errors and inconsistencies in business partner information.
2. Centralized Data Management: The Pool API provides a centralized repository for business partner data, making it easier to manage, maintain, and update information.
3. Data Governance: The Pool API is the basis for a data governance framework and helps to enforce data quality standards, such as data completeness, accuracy, and consistency. This helps to ensure that business partner data is of high quality and can be trusted for use in various business processes.
4. Interoperability: The Pool API provides an interoperable and standardized way to access business partner data, ensuring both Core Service Provider interchangeability and streamlined data accessibility for all consumers of the API.

There is a reference implementation for the [Business Partner Data Pool API (7.1.x)](https://github.com/eclipse-tractusx/bpdm/tree/86a0a1931323d9ed0a75252bdd2ad9a6434542b7/bpdm-pool-api/src/main/kotlin/org/eclipse/tractusx/bpdm/pool/api) on GitHub. It is part of a Spring Boot Kotlin open-source software project under the hood of the Eclipse Foundation and follows the Apache 2.0 licenses.

For the complete and up-to-date BPDM setup refer to the [Eclipse Tractus-X BPDM GitHub repository (7.1.x)](https://github.com/eclipse-tractusx/bpdm/blob/86a0a1931323d9ed0a75252bdd2ad9a6434542b7/README.md).

For an architecture overview refer to the [BPDM ARC42 documentation (7.1.x)](https://github.com/eclipse-tractusx/bpdm/tree/86a0a1931323d9ed0a75252bdd2ad9a6434542b7/docs/architecture).

To use the Pool API in the BPDM use case apart from this standard, the following other standards should be considered by all participants for which this standard is relevant:

- CX-0010 Business Partner Number 3.0.0
- CX-0018 Dataspace Connectivity 4.1.0

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

If sections are marked as non-normative, all authoring guidelines, diagrams, examples, and notes in these sections are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in [BCP 14](https://datatracker.ietf.org/doc/html/bcp14), [RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119), [RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174) when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

When implementing the API defined in this standard, proof of conformity must be provided by the following deliverables:

- An OpenAPI specification defining the relevant resources for this standard
- Examples of data assets

### 1.4 EXAMPLES

Intentionally left blank.

### 1.5 TERMINOLOGY

> *This section is non-normative*

#### 1.5.1 GENERAL

**Golden Record:** A Golden Record is a business partner data record which successfully passed a set of predefined quality rules. These rules qualified the data record into a harmonized, standardized, and semantically unified data structure which is defined by the BPDM standards. The Golden Record status is a prerequisite for each business partner data record to receive a valid business partner number.

**Managing Legal Entity:** The legal entity responsible for managing legal entity, site, and address data on behalf of other legal entities (Managed Legal Entities) within the data space.

**Managed Legal Entity:**  A legal entity on whose behalf legal entity, site, and address data are managed.

#### 1.5.2 DATA MODEL

This chapter explains the data model[^1] from a conceptual / terminology point of view. It does not include technical details of the API data model, such as:

- differences in response and request
- differences in data stages (like input or output)
- attributes for pagination
- singular query parameters, which are not already attributes of the entities

##### 1.5.2.1 BUSINESS PARTNER

![Business Partner](./assets/diagrams/class/business-partner.svg)

In general, a business partner is any entity (such as a customer, a supplier, an employee, or a service provider) that does business with another entity.

In data spaces, a business partner is an organization (such as an enterprise or company, university, association, etc., and not a natural person) or one of its organization parts that acts as unique partner within the supply chain - either in the role of a direct participant, or a consultant, or a non-production-material (NPM) supplier.

BPDM distinguishes between three business partner types to represent an organization or one of its substructures relevant for the automotive supply chain (see detailed definitions): legal entity, site, and address[^2].

##### 1.5.2.2 LEGAL ENTITY

![Legal Entity](./assets/diagrams/class/legal-entity.svg)

In general, a legal entity is a juridical person that has legal rights and duties related to contracts, agreements, and obligations. The term especially applies to any kind of organization established under the law applicable to a country.

In data spaces, a legal entity is a type of business partner representing a legally registered organization with its official registration information, such as legal name (including legal form, if registered), legal address and a legally secure external identifier (such as the German Handelsregisternummer, a VAT registration / taxpayer identification number, etc).

A legal entity has exactly one legal address, but it is possible to specify additional addresses that a legal entity owns. Thus, at least one address is assigned to a legal entity. A legal entity can own sites. Thus, many or no sites are assigned to a legal entity. A legal entity is uniquely identified by the BPNL.

| **Attribute**       | **Description**                                                                                                                                                   | **(Data) Type / Code List / Enumeration**                         |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| BPNL                | A BPNL represents and uniquely identifies a legal entity, which is defined by its legal name (including legal form, if registered), legal address and tax number. | String                                                            |
| Legal Name          | The name of the legal entity according to official registers.                                                                                                     | String                                                            |
| Short Name          | The abbreviated name of the legal entity.                                                                                                                         | String                                                            |
| Legal Form          | The legal form of the legal entity.                                                                                                                               | [Legal Form](#1525-legal-form)                                    |
| States              | The list of (temporal) states of the legal entity.                                                                                                                | List of [Legal Entity State](#15222-legal-entity-state)           |
| Identifiers         | The list of identifiers of the legal entity.                                                                                                                      | List of [Legal Entity Identifier](#15221-legal-entity-identifier) |
| Relations           | The list of directed relations of the legal entity to any other legal entity.                                                                                     | List of [Legal Entity Relation](#15223-legal-entity-relation)     |
| Is Participant Data | Indicates whether the legal entity is provided by a data space participant that either is the legal entity or is its managing legal entity.                       | Boolean                                                           |
| Created At          | The date and time when the legal entity data record has been created.                                                                                             | Date / Time                                                       |
| Updated At          | The date and time when the legal entity data record has been last updated.                                                                                        | Date / Time                                                       |
| Legal Address       | The official, legal correspondence address to be provided to government and tax authorities and used in all legal or court documents.                             | [Address](#1524-address)                                          |

###### 1.5.2.2.1 LEGAL ENTITY IDENTIFIER

A legal entity identifier (uniquely) identifies the legal entity, such as the German Handelsregisternummer, a VAT registration / taxpayer identification number, etc.

| **Attribute** | **Description**                                                                                                                                                                              | **(Data) Type / Code List / Enumeration** |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Value         | The value of the identifier like “DE123465789”                                                                                                                                               | String                                    |
| Type          | The type of the identifier.                                                                                                                                                                  | [Identifier Type](#15210-identifier-type) |
| Issuing Body  | The name of the official register, where the identifier is registered. For example, a Handelsregisternummer in Germany is only valid with its corresponding Registergericht and Registerart. | String                                    |

###### 1.5.2.2.2 LEGAL ENTITY STATE

A legal entity state indicates if the legal entity is active or inactive. This does not describe the relation between a data space participant and a business partner and whether they have active business, but it describes whether the legal entity is still operating.

| **Attribute** | **Description**                                  | **(Data) Type / Code List / Enumeration** |
| ------------- | ------------------------------------------------ | ----------------------------------------- |
| Valid From    | The date and time from which the state is valid. | Date / Time                               |
| Valid To      | The date and time until the state is valid.      | Date / Time                               |
| Type          | One of the legal entity state types.             | Enum                                      |

A legal entity state can be classified into **one** of the legal entity state types:

1. `active` (value=ACTIVE): Legal entity is operating and is registered in the official registers under its legal address.
2. `inactive` (value=INACTIVE): Legal entity is not operating, may be marked as out of business (or similar) or may not even be registered in the official registers under its legal address anymore. It still exists in the BPDM Pool for historical reasons, such as for auditing purposes.

###### 1.5.2.2.3 LEGAL ENTITY RELATION

A legal entity relation is a directed relation between two legal entities with a specific type that describes the nature of the relation. Note that the legal entity relation is in the list of legal entity relations of the legal entity if the legal entity is either the source or the target of the relation.

| **Attribute**           | **Description**                                          | **(Data) Type / Code List / Enumeration** |
| ----------------------- | -------------------------------------------------------- | ----------------------------------------- |
| Type                    | One of the legal entity relation types.                  | Enum                                      |
| Legal Entity Source BPN | BPN of the legal entity from which the relation emerges. | String                                    |
| Legal Entity Target BPN | BPN of the legal entity to which this relation goes.     | String                                    |

A legal entity relation can be classified into **one** of the legal entity relation types:

1. `is alternative headquarter for` (value=IsAlternativeHeadquarterFor): The legal entity source is an alternative headquarter for the legal entity target, where both legal addresses are registered in the official registers with equal rights, representing the same real-world legal entity. Multiple legal entity sources can be the alternative headquarters for one legal entity target, resulting in multiple relations at the legal entity target. The legal entity target cannot be a legal entity source at the same time, so that it cannot be an alternative headquarter for itself and so that only one level of alternative headquarters is possible.
2. `is managed by` (value=IsManagedBy): Legal entity, site and address data can be managed by the managing legal entity (legal entity target) on behalf of the managed legal entity (legal entity source). Multiple legal entity sources can be the managed legal entities of one managing legal entity (legal entity target), resulting in multiple relations at the legal entity target. The legal entity target cannot be a legal entity source at the same time, so that it cannot be the managing legal entity for itself and so that only one level of managing legal entities is possible.

NOTE: The 'is managed by' relationship has no effect to the data exchange in Catena-X Standard Release 25.09 because the managing legal entities MUST NOT offer data or consume data on behalf of managed legal entities in Catena-X Standard Release 25.09. The 'is managed by' relationship MAY only be used for the hierarchy management as described in this standard and in CX-0074 and CX-0076.

##### 1.5.2.3 SITE

![Site](./assets/diagrams/class/site.svg)

In general, a site is a delimited geographical area in which an organization conducts business.

In data spaces, a site is a type of business partner representing a physical location or area owned by a legal entity, where a production plant, a warehouse, or an office building is located.

A site is owned by a legal entity. Thus, exactly one legal entity is assigned to a site. A site has exactly one main address[^4], but it is possible to specify additional addresses (such as different gates), that belong to a site. Thus, at least one address is assigned to a site. A site can only be uploaded and modified by the owner (the legal entity) or by the managing legal entity for the owner of the site (see "is managed by" [Legal Entity Relation](#15223-legal-entity-relation)). This is because only the owner or its managing legal entity knows which addresses belong to which site. A site is uniquely identified by the BPNS.

| **Attribute**       | **Description**                                                                                                                                                 | **(Data) Type / Code List / Enumeration** |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| BPNS                | A BPNS represents and uniquely identifies a site, which is where for example a production plant, a warehouse, or an office building is located.                 | String                                    |
| Name                | The name of the site. This is not according to official registers but according to the name the owner chooses.                                                  | String                                    |
| States              | The list of the (temporal) states of the site.                                                                                                                  | List of [Site State](#15231-site-state)   |
| Legal Entity BPN    | The BPNL of the legal entity owning the site.                                                                                                                   | String                                    |
| Is Participant Data | Indicates whether the site is provided by a data space participant that either is the owner of the site or the managing legal entity for the owner of the site. | Boolean                                   |
| Created At          | The date and time when the site data record has been created.                                                                                                   | Date / Time                               |
| Updated At          | The date and time the site data record has been last updated.                                                                                                   | Date / Time                               |
| Main Address[^4]    | The address, where typically the main entrance or the reception is located, or where the mail is delivered to.                                                  | [Address](#1524-address)                  |

###### 1.5.2.3.1 SITE STATE

A site state indicates if the site is active or inactive. This does not describe the relation between a data space participant and a business partner and whether they have active business, but it describes whether the site is still operating.

| **Attribute** | **Description**                         | **(Data) Type / Code List / Enumeration** |
| ------------- | --------------------------------------- | ----------------------------------------- |
| Valid From    | The date from which the state is valid. | String                                    |
| Valid To      | The date until the state is valid.      | String                                    |
| Type          | One of the site state types.            | Enum                                      |

A site state can be classified into **one** of the site state types:

1. `active` (value=ACTIVE): Site is operating at its site main address.
2. `inactive` (value=INACTIVE): Site is not operating at its site main address anymore. It still exists in the BPDM Pool for historical reasons, such as for auditing purposes.

##### 1.5.2.4 ADDRESS

![Address](./assets/diagrams/class/address.svg)

In general, an address is a collection of information to describe a physical location, using a street name with a house number and/or a post office box as reference. In addition, an address consists of several postal attributes, such as country, region (state), county, township, city, district, or postal code, which help deliver mail.

In data spaces, an address is a type of business partner representing the legal address of a legal entity, and/or the main address[^4] of a site, or any additional address of a legal entity or site (such as different gates).

An address is owned by a legal entity. Thus, exactly one legal entity is assigned to an address. An address can belong to a site. Thus, one or no site is assigned to an address. An address is uniquely identified by the BPNA.

| **Attribute**              | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                         | **(Data) Type / Code List / Enumeration**                      |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| BPNA                       | A BPNA represents and uniquely identifies an address, which can be the legal address of a legal entity, and/or the main address[^4] of a site, or any additional address of a legal entity or site (such as different gates). It is important to note that only the BPNL must be used to uniquely identify a legal entity. Even in the case that the BPNA represents the legal address of the legal entity, it shall not be used to uniquely identify the legal entity. | String                                                         |
| Name                       | The name of the address. This is not according to official registers but according to the name the data space agreed on, such as the name of a gate or any other additional names that designate the address in common parlance.                                                                                                                                                                                                                                        | String                                                         |
| States                     | The list of (temporal) states of the address.                                                                                                                                                                                                                                                                                                                                                                                                                           | List of [Address State](#15242-address-state)                  |
| Identifiers                | The list of identifiers of the address.                                                                                                                                                                                                                                                                                                                                                                                                                                 | List of [Address Identifier](#15241-address-identifier)        |
| Physical Postal Address    | The physical postal address of the address, such as an office, warehouse, gate, etc.                                                                                                                                                                                                                                                                                                                                                                                    | [Physical Postal Address](#1526-physical-postal-address)       |
| Alternative Postal Address | The alternative postal address of the address, for example if the goods are to be picked up somewhere else.                                                                                                                                                                                                                                                                                                                                                             | [Alternative Postal Address](#1527-alternative-postal-address) |
| Legal Entity BPN           | The BPNL of the legal entity owning the address.                                                                                                                                                                                                                                                                                                                                                                                                                        | String                                                         |
| Type                       | One of the address types.                                                                                                                                                                                                                                                                                                                                                                                                                                               | Enum                                                           |
| Site BPN                   | The BPNS of the site the address belongs to.                                                                                                                                                                                                                                                                                                                                                                                                                            | String                                                         |
| Is Participant Data        | Indicates whether the address is provided by a data space participant that either is the owner of the address or the managing legal entity for the owner of the address.                                                                                                                                                                                                                                                                                                | Boolean                                                        |
| Created At                 | The date and time when the address data record has been created.                                                                                                                                                                                                                                                                                                                                                                                                        | Date / Time                                                    |
| Updated At                 | The date and time when the address data record has been last updated.                                                                                                                                                                                                                                                                                                                                                                                                   | Date / Time                                                    |

An address can be classified into **one** of the address types:

1. `legal address` (value=LegalAddress): The legal address of a legal entity, which is used for official correspondence with government and tax authorities, and used in all legal or court documents. It is the address that is registered in the official registers.
2. `site main address`[^4] (value=SiteMainAddress): The main address of a site, where typically the main entrance or the reception is located, or where the mail is delivered to. In case there is an official site register in the country, where the site is located, this is the address that is registered in the official site register, such as in case of the French SIRET.
3. `legal and site main address`[^4] (value=LegalAndSiteMainAddress): The address is a combination of the legal address of a legal entity and the main address of a site.
4. `additional address` (value=AdditionalAddress): An additional address of a legal entity or site, such as different gates, which is not the legal address of a legal entity and not the main address of a site. It can be used for delivery of goods or services, but it is not registered in the official registers.

##### 1.5.2.4.1 ADDRESS IDENTIFIER

An address identifier (uniquely) identifies the address, such as the Global Location Number (GLN).

| **Attribute** | **Description**                                  | **(Data) Type / Code List / Enumeration** |
| ------------- | ------------------------------------------------ | ----------------------------------------- |
| Value         | The value of the identifier like "0847976000005" | String                                    |
| Type          | The type of the identifier.                      | [Identifier Type](#15210-identifier-type) |

##### 1.5.2.4.2 ADDRESS STATE

An address state indicates if the address is active or inactive. This does not describe the relation between a data space participant and a business partner and whether they have active business, but it describes whether the business partner is still operating at that address.

| **Attribute** | **Description**                         | **(Data) Type / Code List / Enumeration** |
| ------------- | --------------------------------------- | ----------------------------------------- |
| Valid From    | The date from which the state is valid. | String                                    |
| Valid To      | The date until the state is valid.      | String                                    |
| Type          | One of the address state types.         | Enum                                      |

An address state can be classified into **one** of the address state types:

1. `active` (value=ACTIVE): Legal entity or site at the address are still operating and address is still used for operational purposes, such as for delivery of goods or services.
2. `inactive` (value=INACTIVE): Legal entity or site at the address are not operating anymore, or address is not used anymore for operational purposes. It still exists in the BPDM Pool for historical reasons, such as for auditing purposes.

##### 1.5.2.5 LEGAL FORM

![Legal Form](./assets/diagrams/class/legal-form.svg)

A legal form is a mandatory corporate legal framework by which companies can conduct business, charitable or other permissible activities.

| **Attribute**                | **Description**                                                                                                                                                                                     | **(Data) Type / Code List / Enumeration**                          |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Technical Key                | The technical identifier of the legal form according to [ISO 20275:2017](https://www.iso.org/obp/ui/en/#iso:std:iso:20275:ed-1:v1:en).                                                              | String                                                             |
| Name                         | The name of legal form according to [ISO 20275:2017](https://www.iso.org/obp/ui/en/#iso:std:iso:20275:ed-1:v1:en).                                                                                  | String                                                             |
| Abbreviations                | A list of abbreviated names for the legal form according to [ISO 20275:2017](https://www.iso.org/obp/ui/en/#iso:std:iso:20275:ed-1:v1:en), such as AG for German Aktiengesellschaft.                | String                                                             |
| Transliterated Name          | The transliterated name of legal form according to [ISO 20275:2017](https://www.iso.org/obp/ui/en/#iso:std:iso:20275:ed-1:v1:en).                                                                   | String                                                             |
| Transliterated Abbreviations | A list of transliterated abbreviated names for the legal form according to [ISO 20275:2017](https://www.iso.org/obp/ui/en/#iso:std:iso:20275:ed-1:v1:en), such as AG for German Aktiengesellschaft. | String                                                             |
| Language                     | The two-letter language code according to [ISO 639:2023](https://www.iso.org/obp/ui/en/#iso:std:iso:639:ed-2:v1:en) of the language, for that the name of the legal form has been given.            | String                                                             |
| Country                      | The two-letter country code according to [ISO 3166-1:2020](https://www.iso.org/obp/ui/en/#iso:std:iso:3166:-1:ed-4:v1:en) of the country in which the legal form is valid.                          | String                                                             |
| Administrative Area Level 1  | The administrative area in which the legal form is valid, such as a region within a country.                                                                                                        | [Administrative Area (Level 1)](#1528-administrative-area-level-1) |
| Is Active                    | Indicates whether the legal form is actively used or is inactive and should not be used to register new organizations.                                                                              | Boolean                                                            |

##### 1.5.2.6 PHYSICAL POSTAL ADDRESS

A physical postal address describes the physical location of an office, warehouse, gate, etc.

| **Attribute**               | **Description**                                                                                                                                                                                                          | **(Data) Type / Code List / Enumeration**                          |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Geographic Coordinates      | The exact location of the physical postal address in latitude, longitude, and altitude.                                                                                                                                  | [Geographic Coordinates](#1529-geographic-coordinates)             |
| Country                     | The two-letter country code of the physical postal address according to [ISO 3166-1:2020](https://www.iso.org/obp/ui/en/#iso:std:iso:3166:-1:ed-4:v1:en).                                                                | String                                                             |
| Administrative Area Level 1 | The administrative area of the physical postal address, such as a region within a country.                                                                                                                               | [Administrative Area (Level 1)](#1528-administrative-area-level-1) |
| Administrative Area Level 2 | The name of the locally regulated secondary country subdivision of the physical postal address, such as county within a country.                                                                                         | String                                                             |
| Administrative Area Level 3 | The name of the locally regulated tertiary country subdivision of the physical address, such as townships within a country.                                                                                              | String                                                             |
| Postal Code                 | The alphanumeric identifier (sometimes including spaces or punctuation) of the physical postal address for the purpose of sorting mail, synonyms: postcode, post code, PIN or ZIP code.                                  | String                                                             |
| City                        | The name of the city of the physical postal address, synonyms: town, village, municipality.                                                                                                                              | String                                                             |
| District                    | The name of the district of the physical postal address which divides the city into several smaller areas.                                                                                                               | String                                                             |
| Street                      | The street of the physical postal address, synonyms: road, avenue, lane, boulevard, highway                                                                                                                              | [Street](#15261-street)                                            |
| Company Postal Code         | The company postal code of the physical postal address, which is sometimes required for large companies.                                                                                                                 | String                                                             |
| Tax Jurisdiction Code       | The identifier of the particular geographic or governmental area to which the physical mailing address belongs and which is responsible for administering tax laws and collecting taxes from individuals and businesses. | String                                                             |
| Industrial Zone             | The industrial zone of the physical postal address, designating an area for industrial development, synonym: industrial area.                                                                                            | String                                                             |
| Building                    | The alphanumeric identifier of the building addressed by the physical postal address.                                                                                                                                    | String                                                             |
| Floor                       | The number of a floor in the building addressed by the physical postal address, synonym: level.                                                                                                                          | String                                                             |
| Door                        | The number of a door in the building on the respective floor addressed by the physical postal address, synonyms: room, suite.                                                                                            | String                                                             |

###### 1.5.2.6.1 STREET

A street is a public road in a city, town, or village, typically with houses and buildings on one or both sides, synonyms: road, avenue, lane, boulevard, highway.

| **Attribute**           | **Description**                                                                                                                                                                                                                                                                              | **(Data) Type / Code List / Enumeration** |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Name Prefix             | The street related information, which is usually printed before the official street name on an address label.                                                                                                                                                                                | String                                    |
| Additional Name Prefix  | The additional street related information, which is usually printed before the official street name on an address label.                                                                                                                                                                     | String                                    |
| Name                    | The name of the street.                                                                                                                                                                                                                                                                      | String                                    |
| Name Suffix             | The street related information, which is usually printed after the official street name on an address label.                                                                                                                                                                                 | String                                    |
| Additional Name Suffix  | The additional street related information, which is usually printed after the official street name on an address label.                                                                                                                                                                      | String                                    |
| House Number            | The alphanumeric identifier representing the exact location of a building within the street.                                                                                                                                                                                                 | String                                    |
| House Number Supplement | The alphanumeric identifier representing the exact location of a business partner in a building. Note this information might be further detailed semantically in the building, floor, and door attributes. However, this attribute is the only relevant for addressing the business partner. | String                                    |
| Milestone               | The alphanumeric identifier representing the exact location of an addressed object within a street without house numbers, such as within long roads.                                                                                                                                         | String                                    |
| Direction               | The cardinal direction describing where the exit to the location of the addressed object on large highways / motorways is located, such as Highway 101 South.                                                                                                                                | String                                    |

##### 1.5.2.7 ALTERNATIVE POSTAL ADDRESS

An alternative postal address describes an alternative way of delivery for example if the goods are to be picked up somewhere else.

| **Attribute**               | **Description**                                                                                                                                                                                                                                                                                                                                                    | **(Data) Type / Code List / Enumeration**                          |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Geographic Coordinates      | The exact location of the alternative postal address in latitude, longitude, and altitude.                                                                                                                                                                                                                                                                         | [Geographic Coordinates](#1529-geographic-coordinates)             |
| Country                     | The two-letter country code of the postal address according to [ISO 3166-1:2020](https://www.iso.org/obp/ui/en/#iso:std:iso:3166:-1:ed-4:v1:en).                                                                                                                                                                                                                   | String                                                             |
| Administrative Area Level 1 | The administrative area of the alternative postal address, such as a region within a country.                                                                                                                                                                                                                                                                      | [Administrative Area (Level 1)](#1528-administrative-area-level-1) |
| Postal Code                 | The alphanumeric identifier (sometimes including spaces or punctuation) of the alternative postal address for the purpose of sorting mail, synonyms: postcode, post code, PIN or ZIP code.                                                                                                                                                                         | String                                                             |
| City                        | The name of the city of the alternative postal address, synonyms: town, village, municipality.                                                                                                                                                                                                                                                                     | String                                                             |
| Delivery Service Type       | One of the alternative postal address types: P.O. box, private bag, boîte postale.                                                                                                                                                                                                                                                                                 | Enum                                                               |
| Delivery Service Qualifier  | The qualifier uniquely identifying the delivery service endpoint of the alternative postal address in conjunction with the delivery service number. In some countries for example, entering a P.O. box number, postal code and city is not sufficient to uniquely identify a P.O. box, because the same P.O. box number is assigned multiple times in some cities. | String                                                             |
| Delivery Service Number     | The number indicating the delivery service endpoint of the alternative postal address to which the delivery is to be delivered, such as a P.O. box number or a private bag number.                                                                                                                                                                                 | String                                                             |

An alternative postal address can be classified into **one** of the delivery service types:

1. `P.O. box` (value=PO_BOX): A delivery service type for a numbered box at a post office, where mail can be delivered and picked up by the recipient.
2. `private bag` (value=PRIVATE_BAG): A delivery service type, where mail is dispatched to the holder directly, if there are no street delivery services (like in countries of Africa).
3. `boîte postale` (value=BOITE_POSTALE): The French or Canadian version of a P.O. box.

##### 1.5.2.8 ADMINISTRATIVE AREA (LEVEL 1)

An administrative area (level 1) is the country subdivision according to [ISO 3166-2:2020](https://www.iso.org/obp/ui/#iso:std:iso:3166:-2:ed-4:v1:en), such as regions within a country.

| **Attribute** | **Description**                                                                                                                                                                                                                                                                                                                                                | **(Data) Type / Code List / Enumeration** |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Name          | The name of the country subdivision according to [ISO 3166-2:2020](https://www.iso.org/obp/ui/#iso:std:iso:3166:-2:ed-4:v1:en).                                                                                                                                                                                                                                | String                                    |
| Code          | The six-character alphanumeric code according to [ISO 3166-2:2020](https://www.iso.org/obp/ui/#iso:std:iso:3166:-2:ed-4:v1:en), consisting of the two-letter [ISO 3166-1:2020](https://www.iso.org/obp/ui/en/#iso:std:iso:3166:-1:ed-4:v1:en) country code and a three-character alphanumeric code for the subdivision in that country, separated by a hyphen. | String                                    |

##### 1.5.2.9 GEOGRAPHIC COORDINATES

Geographic coordinates describe an exact location in latitude, longitude, and altitude, according to [ISO 6709:2022](https://www.iso.org/obp/ui/en/#iso:std:iso:6709:ed-3:v1:en) with [WGS 84 (NGA STND 0036 1.0.0)](https://nsgreg.nga.mil/doc/view?i=4085) as the currently only supported coordinate reference system.

| **Attribute** | **Description**                                                                                                                                                                                   | **(Data) Type / Code List / Enumeration** |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Longitude     | The geographic coordinate of a place indicating the distance to the west or east of the line passing through Greenwich, in decimal degrees ([DD](https://en.wikipedia.org/wiki/Decimal_degrees)). | Float                                     |
| Latitude      | The geographic coordinate of a place indicating its distance to the north or south of the equator, in decimal degrees ([DD](https://en.wikipedia.org/wiki/Decimal_degrees)).                      | Float                                     |
| Altitude      | The geographic coordinate of a place indicating its height above mean sea level, in meters.                                                                                                       | Float                                     |

##### 1.5.2.10 IDENTIFIER TYPE

![Identifier Type](./assets/diagrams/class/identifier-type.svg)

An identifier type defines the name or category of an identifier, such as the German Handelsregisternummer, a VAT registration / taxpayer identification number, etc. The identifier type is valid for a business partner type and used in a specific country.

| **Attribute**               | **Description**                                                      | **(Data) Type / Code List / Enumeration** |
| --------------------------- | -------------------------------------------------------------------- | ----------------------------------------- |
| Technical Key               | The technical identifier of the identifier type.                     | String                                    |
| Name                        | The local name of the identifier type.                               | String                                    |
| Business Partner Type       | One of the business partner types.                                  | Enum                                      |
| Identifier Type Category    | One or more of the categories of identifier types.                   | Enum                                      |
| Abbreviation                | The local abbreviated name of the identifier type.                   | String                                    |
| Transliterated Name         | The transliterated local name of the identifier type.                | String                                    |
| Transliterated Abbreviation | The transliterated local abbreviated name of the identifier type. | String                                    |
| Format                      | The regular expression for the identifier type format                | String                                    |

An identifier type can be valid for **one** of the following business partner types:

1. `legal entity` (value=LEGAL_ENTITY): see [Legal Entity](#1522-legal-entity).
2. `address` (value=ADDRESS): see [Address](#1524-address).

An identifier type can be classified into **one or more** of the following identifier type categories:

1. `value-added tax registration` (value=VAT): category for value-added tax identification numbers (VAT IDs or VATINs), e.g. EU VAT ID, UID MWST/TVA/IPA, identifying the business partner usually related to tax, such as for invoicing and reporting of value-added tax (VAT) to the tax authorities.
2. `taxpayer identification` (value=TIN): category for taxpayer identification numbers (TINs), e.g. SIREN, NIF, identifying the business partner usually related to tax, such as for income tax, corporate tax, or other tax obligations.
3. `national business registration` (value=NBR): category for national business registration numbers (e.g. HRB-Nummer, Firmenbuchnummer), identifying the business partner for different purposes (e.g. commercial register, trade register), which are not related to tax.
4. `international business registration` (value=IBR): category for international business registration numbers (e.g. LEI, EORI), identifying the business partner for different purposes (e.g. regulatory reporting, risk management at financial regulatory bodies), which are not related to tax.
5. `other` (value=OTH): category for other identifiers (e.g. D&B D-U-N-S, GS1 GLN), which are not legally secure.

###### 1.5.2.10.1 IDENTIFIER TYPE DETAILS

The identifier type details describe for which countries an identifier is valid and mandatory

| **Attribute** | **Description**                                                                                                                                                                                                                            | **(Data) Type / Code List / Enumeration** |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| Country       | The two-letter country code according to [ISO 3166-1:2020](https://www.iso.org/obp/ui/en/#iso:std:iso:3166:-1:ed-4:v1:en) of the country in which the identifier type is valid. Can be empty if identifier type is valid in all countries. | String                                    |
| Mandatory     | Indicates whether the identifier type is mandatory in the country.                                                                                                                                                                         | Boolean                                   |

##### 1.5.2.11 CHANGELOG ENTRY

![Changelog Entry](./assets/diagrams/class/changelog-entry.svg)

An entry of the changelog, which is created each time a business partner is modified and contains data about the change. The actual new state of the business partner is not included.

| **Attribute**         | **Description**                                                                                            | **(Data) Type / Code List / Enumeration** |
| --------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| BPN                   | The business partner number for which the changelog entry was created. Can be either a BPNL, BPNS or BPNA. | String                                    |
| Business Partner Type | One of the business partner types.                                                                        | Enum                                      |
| Changelog Type        | One of the changelog types.                                                                                | Enum                                      |
| Timestamp             | The date and time when the changelog entry was created.                                                    | Date / Time                               |

A changelog entry can be created for **one** of the following business partner types:

1. `legal entity` (value=LEGAL_ENTITY): see [Legal Entity](#1522-legal-entity).
2. `site` (value=SITE): see [Site](#1523-site).
3. `address` (value=ADDRESS): see [Address](#1524-address).

A changelog entry can be classified into **one** of the following changelog types:

1. `create` (value=CREATE): changelog for the action that the business partner was created.
2. `update` (value=UPDATE): changelog for the action that the business partner was updated.

##### 1.5.2.12 IDENTIFIER MAPPING ENTRY

![Identifier Mapping Entry](./assets/diagrams/class/identifier-mapping-entry.svg)

An identifier mapping entry of a specific identifier (of a specific identifier type) to a BPNL, BPNS or BPNA.

| **Attribute**    | **Description**                                                                                     | **(Data) Type / Code List / Enumeration** |
| ---------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Identifier Value | The value of a specific identifier type for which the mapping was returned.                         | String                                    |
| BPN              | The business partner number for which the mapping was returned. Can be either a BPNL, BPNS or BPNA. | String                                    |

## 2 BUSINESS PARTNER POOL API \[NORMATIVE\]

The Business Partner Data Pool API enables the access to Golden Record business partner data and provides it to other data space services and consumers. The Pool API **MUST** be implemented based on the [OpenAPI specification (3.1.0)](https://github.com/OAI/OpenAPI-Specification/blob/7acdf61ed4e5c18068e2da18741318adde219c2d/versions/3.1.0.md).

### 2.1 PRECONDITIONS AND DEPENDENCIES

To run the API, the technical components described in the [Eclipse Tractus-X BPDM GitHub repository (7.1.x)](https://github.com/eclipse-tractusx/bpdm/blob/86a0a1931323d9ed0a75252bdd2ad9a6434542b7/README.md) **SHOULD** be set up.

### 2.2 API SPECIFICATION

#### 2.2.1 API ENDPOINTS & RESOURCES

The Pool API **MUST** be implemented as defined in the [Business Partner Data Pool OpenAPI specification (7.1.x)](assets/apis/pool-openapi.json).

The resources **MUST** use the well-known HTTP request methods for CRU(D) operations:

- POST method **MUST** be used for create requests
- PUT[^3] method **MUST** be used for update requests
- GET method **MUST** be used for read requests

The POST method **MAY** also be used for read requests, if input is not given by parameters but rather by an HTTP body to bypass maximum URL length. The PUT method **MAY** also be used for upsert requests (create or update) if this is required. A state (active / inactive) at each entity **MUST** be used for a soft delete, so that the DELETE method **SHOULD NOT** be used. Other HTTP request methods **SHOULD NOT** be used, including PATCH.

To facilitate the compliance assessment, this chapter additionally lists and describes the API resources of the Gate API per API controller.

The following API controllers of the OpenAPI document **MUST** be implemented:

- Legal entity controller
- Site controller
- Address controller
- Metadata controller (code lists)
- Changelog controller
- BPN controller (identifier mappings)

Note that all resources of the OpenAPI document described in the following are **REQUIRED**. Conversely, all resources not described in the following are **OPTIONAL**.

##### 2.2.1.1 LEGAL ENTITY CONTROLLER

The legal entity controller **MUST** allow to create, update, or read business partners of type legal entity (having a BPNL). It also **MUST** allow to read sites and addresses of a legal entity. It **MUST** have the following resources:

| **Legal Entity Controller Resources**   | **Description**                                                                                                                                                             |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST/legal-entities                     | Creates a new legal entity.                                                                                                                                                 |
| PUT/legal-entities                      | Updates an existing legal entity.                                                                                                                                           |
| GET/legal-entities                      | Returns legal entities by different search parameters.                                                                                                                      |
| GET/legal-entities/\{idValue\}          | Returns a legal entity by an identifier, such as German Handelsregisternummer, a VAT registration / taxpayer identification number, etc., specified by the identifier type. |
| POST/legal-entities/search              | Returns legal entities by an array of BPNL.                                                                                                                                 |
| POST/participants/legal-entities/search | Returns only legal entities by an array of BPNL, which are owned by data space participants.                                                                                |
| GET/legal-entities/\{bpnl\}/sites       | Returns all sites of a legal entity with a specific BPNL.                                                                                                                   |
| GET/legal-entities/\{bpnl\}/addresses   | Returns all addresses of a legal entity with a specific BPNL.                                                                                                               |

##### 2.2.1.2 SITE CONTROLLER

The site controller **MUST** allow to create, update, or read business partners of type site (having a BPNS). It also **MUST** allow to read addresses of a site. It **MUST** have the following resources:

| **Site Controller Resources**  | **Description**                                                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| POST/sites                     | Creates a new site.                                                                                                       |
| PUT/sites                      | Updates an existing site.                                                                                                 |
| GET/sites                      | Returns sites by different search parameters.                                                                             |
| GET/sites/\{bpns\}             | Returns a site by its BPNS.                                                                                               |
| POST/sites/search              | Returns sites by an array of BPNS and/or an array of corresponding BPNL.                                                  |
| POST/participants/sites/search | Returns only sites by an array of BPNS and/or an array of corresponding BPNL, which are owned by data space participants. |

##### 2.2.1.3 ADDRESS CONTROLLER

The address controller **MUST** allow to create, update, or read business partners of type address (having a BPNA). It **MUST** have the following resources:

| **Address Controller Resources**   | **Description**                                                                                                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST/addresses                     | Creates a new address.                                                                                                                                              |
| PUT/addresses                      | Updates an existing address.                                                                                                                                        |
| GET/addresses                      | Returns addresses by different search parameters.                                                                                                                   |
| GET/addresses/\{bpna\}             | Returns an address by its BPNA.                                                                                                                                     |
| POST/addresses/search              | Returns addresses by an array of BPNA and/or an array of corresponding BPNS and/or an array of corresponding BPNL.                                                  |
| POST/participants/addresses/search | Returns only addresses by an array of BPNA and/or an array of corresponding BPNS and/or an array of corresponding BPNL, which are owned by data space participants. |

##### 2.2.1.4 METADATA CONTROLLER (CODE LISTS)

The metadata controller **MUST** allow to create or read legal forms, identifier types, and read administrative areas on level 1. It **MUST** have the following resources:

| **Metadata Controller Resources** | **Description**                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| POST/legal-forms                  | Creates a new legal form.                                                   |
| POST/identifier-types             | Creates a new identifier type.                                              |
| GET/legal-forms                   | Returns all legal forms.                                                    |
| GET/identifier-types              | Returns all identifier types filtered by business partner type and country. |
| GET/administrative-areas-level1   | Returns all administrative areas on level 1.                                |

##### 2.2.1.5 BPN CONTROLLER (IDENTIFIER MAPPINGS)

The BPN controller **MUST** allow to read identifier mappings between identifiers (such as German Handelsregisternummer, a VAT registration / taxpayer identification number, etc.) on one side and BPNL, BPNA on the other side. It **MUST** have the following resources:

| **BPN Controller Resources** | **Description**                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| POST/bpn/search              | Returns a list of identifier mappings of an identifier to a BPNL, BPNA or BPNS, specified by a business partner type, identifier type and identifier values. |

##### 2.2.1.6 CHANGELOG CONTROLLER

The changelog controller **MUST** allow to read change log entries of legal entities, sites and addresses. It **MUST** have the following resources:

| **Changelog Controller Resources**      | **Description**                                                                                                                                                                                                                  |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST/business-partners/changelog/search | Returns changelog entries of legal entities, sites and addresses as of a specified timestamp, optionally filtered by a list of BPNL, BPNS and BPNA, or business partner types.                                                   |
| POST/participants/changelog/search      | Returns only changelog entries of legal entities, sites and addresses, which are owned by data space participants, as of a specified timestamp, optionally filtered by a list of BPNL, BPNS and BPNA, or business partner types. |
|                                         |                                                                                                                                                                                                                                  |

#### 2.2.2 AVAILABLE DATA TYPES

The API **MUST** use JSON as the payload format transported via HTTP. Other formats are **OPTIONAL**.

#### 2.2.3 DATA ASSET STRUCTURE

The following data assets **MUST** be registered at the Core Service Provider so that the data space participant can negotiate an API usage contract based on the mentioned usage purpose with the Core Service Provider and access the Pool API (hosted by the Core Service Provider) through these assets [^5]:

| **Type**         | **Subject**                                   | **Version** | **Description** | **Usage Purpose**
| ---------------- | --------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| cx-taxo:BPDMPool | cx-taxo:ReadAccessPoolForDataSpaceParticipant | 7           | Grants the data space participant read access to the Pool API. This can be used to read legal entity, site, address, legal form, identifier type and administrative area level 1 data. To that end, it also grants read access to the respective changelog and identifier mappings, as well as relational data. | cx.bpdm.pool:1    |

Read access for legal entities, sites and addresses **MUST** be restricted to data space participant data (see the corresponding attribute for legal entity, site and address), because the Business Partner Data Pool may also contain legal entities, sites and addresses, which are not owned by data space participants.

Write resources (create and update) of the Pool API **MUST NOT** be called from outside of the data space operating environment. Consequently, data assets for them are **NOT REQUIRED**.

The data asset **MUST** contain the following properties with the corresponding values from the table above:

- [*dct:type*](http://purl.org/dc/terms/type) for type (as @id reference), see also CX-0018
- [*dct:subject*](http://purl.org/dc/terms/subject) for subject (as @id reference)
- [*dct:description*](http://purl.org/dc/terms/description) for description
- [*cx-common:version*](https://w3id.org/catenax/ontology/common#version) for version, see also CX-0018

An example payload for the asset:

```json
{
    "@context": {
        "dct": "http://purl.org/dc/terms/",
        "cx-taxo": "https://w3id.org/catenax/taxonomy#",
        "cx-common": "https://w3id.org/catenax/ontology/common#",
    },
    "@type": "Asset", 
    "@id": "e94272b1-9831-458f-8986-c63c4973ea60", 
    "properties": { 
        "dct:type": {
          "@id": "cx-taxo:BPDMPool"
        },
        "dct:subject": {
          "@id": "cx-taxo:ReadAccessPoolForDataSpaceParticipant"
        },
        "dct:description": "Grants the data space participant read access to the Pool API. This can be used to read legal entity, site, address, legal form, identifier type and administrative area level 1 data. To that end, it also grants read access to the respective changelog entries and identifier mappings, as well as relational data.",
        "cx-common:version": "7"
    },
    "dataAddress": {
        "@type": "DataAddress",
        "type": "HttpData",
        "baseUrl": "https://<host>/pool/api/v7/participants",
        "oauth2:tokenUrl": "https://<host>/auth/realms/<realm>/protocol/openid-connect/token",
        "oauth2:clientId": "<technical user>",
        "oauth2:clientSecretKey": "<key to the secret of the technical user in the vault>", 
        "proxyMethod": true,
        "proxyPath": true,
        "proxyQueryParams": true,
        "proxyBody": true
    }
}
```

There **MUST** be measures in place that prevent direct access to the Pool API from outside the internal environment of the operating company. Access from outside the internal environment of the operating company to the Pool API **MUST** only be possible via the Data Space Connector. The OAuth2 client permissions **MUST** be configured to solely allow access to the API resources defined in the corresponding asset, checking HTTP method, path, query parameters and body of the HTTP request sent to the data plane public API, which acts as a proxy for the Pool API[^6].

#### 2.2.4 ERROR HANDLING

The following http response codes **MUST** be defined for all resources:

- 200 - OK
- 400 - Bad Request
- 401 - Unauthorized
- 403 - Forbidden
- 404 - Not Found
- 500 - Internal Server Error

The [IANA HTTP Status Code Registry](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) **MUST** be adhered to for the decision on when to use which error code.

#### 2.2.5 POLICY CONSTRAINTS FOR DATA EXCHANGE

In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined.  As part of this data sovereignty framework, conventions for access policies, for usage policies and for the constraints contained in the policies have been specified in standard 'CX-0152 Policy Constraints for Data Exchange'. This standard document CX-0152 **MUST** be followed when providing services or apps for data sharing/consuming and when sharing or consuming data in the Catena-X ecosystem. What conventions are relevant for what roles named in [1.1 AUDIENCE & SCOPE](#11-audience--scope) is specified in the CX-0152 standard document as well. CX-0152 can be found in the [standard library](https://catenax-ev.github.io/docs/standards/overview).

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- [ISO 639:2023](https://www.iso.org/obp/ui/en/#iso:std:iso:639:ed-2:v1:en)
- [ISO 20275:2017](https://www.iso.org/obp/ui/en/#iso:std:iso:20275:ed-1:v1:en)
- [ISO 3166-1:2020](https://www.iso.org/obp/ui/en/#iso:std:iso:3166:-1:ed-4:v1:en)
- [ISO 3166-2:2020](https://www.iso.org/obp/ui/#iso:std:iso:3166:-2:ed-4:v1:en)
- [ISO 6709:2022](https://www.iso.org/obp/ui/en/#iso:std:iso:6709:ed-3:v1:en)
- [WGS 84 (NGA STND 0036 1.0.0)](https://nsgreg.nga.mil/doc/view?i=4085)
- [OpenAPI specification (3.1.0)](https://github.com/OAI/OpenAPI-Specification/blob/7acdf61ed4e5c18068e2da18741318adde219c2d/versions/3.1.0.md)
- [Business Partner Data Pool OpenAPI specification (7.1.x)](assets/apis/pool-openapi.json)
- [IANA HTTP Status Code Registry (from 2022-06-08)](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

- [BPDM website](https://catena-x.net/use-case-cluster/next-level-master-data-management/) (accessed 2025-06-18)
- [standard library](https://catenax-ev.github.io/docs/standards/overview) (accessed 2025-06-18)

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

- [Business Partner Data Pool API (7.1.x)](https://github.com/eclipse-tractusx/bpdm/tree/86a0a1931323d9ed0a75252bdd2ad9a6434542b7/bpdm-pool-api/src/main/kotlin/org/eclipse/tractusx/bpdm/pool/api)
- [Eclipse Tractus-X BPDM GitHub repository (7.1.x)](https://github.com/eclipse-tractusx/bpdm/blob/86a0a1931323d9ed0a75252bdd2ad9a6434542b7/README.md)
- [BPDM ARC42 documentation (7.1.x)](https://github.com/eclipse-tractusx/bpdm/tree/86a0a1931323d9ed0a75252bdd2ad9a6434542b7/docs/architecture)

## ANNEXES

## FIGURES

> *This section is non-normative*

Intentionally left blank.

## TABLES

> *This section is non-normative*

Intentionally left blank.

[^1]: Note that PlantUml is used for the conceptual UML diagrams in this document (A = abstract class; green E = entity; C = class; red E = enumeration). An abstract class has no actual representation in the OpenAPI implementation. An entity is usually implemented by an own OpenAPI controller with resources and usually is the root in a payload, while a class is a sub node in the payload. An enumeration is a set of predefined values.

[^2]: These types always imply a business partner which means that legal entity, site, and address are types of business partners.

[^3]: Note that in case of a PUT the corresponding resources expect to receive the full updated record, including values that did not change.

[^4]: Note that there is currently a debate as to whether a site is only a consolidation of addresses (BPNA), with all addresses being equally ranked, since a "main" address can't always be defined at this point in time. This may lead to changes in the next update of this standard.

[^5]: Note that further assets will most probably be introduced in one of the next versions of this standard.

[^6]: Note that the definition of the data assets depends on the current implementation state of the reference implementation (Tractus-X Eclipse Dataspace Connector). Therefore the data assets represent permissions on APIs, whereas they should actually only represent APIs.

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
