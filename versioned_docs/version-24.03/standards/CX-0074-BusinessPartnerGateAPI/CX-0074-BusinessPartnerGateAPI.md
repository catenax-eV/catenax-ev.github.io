# CX-0074 Business Partner Data GATE API v2.0.0

## FOR WHOM IS THE STANDARD DESIGNED

This document is mainly targeted to technical individuals involved in integrating and developing against this API, as well as business individuals who are involved in compliance process of this API.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

| **Version** | **Publishing Date** | **Author** | **Description of Change** |
| --- | --- | --- | --- |
| 1.0.0 | 2023-09-26 | | Initial version by Catena-X Association |
| 1.1.0 | 2024-01-10 | | Small additions to the terminology chapters: added roles “supplier” & “customer”; added ISO 6709 and WGS 84 for geographic coordinates; added generic business partner outlook; moved attribute “sharing process started at” from specific business partner entities to the sharing state entry (API was correct); linked OpenAPI document in release branch instead of main |
| 2.0.0 | 2024-03-22 | | Added business partner description and removed detailed legal entity, site and address descriptions from terminology chapter; removed business partner type from changelog entry and sharing state entry descriptions; added business partner endpoints and removed legal entity, site and address endpoints; added “house number supplement” attribute; added “is own company data” attribute to claim ownership; switched to the new document structure |

## ABSTRACT

The Business Partner Data Management (BPDM) is a distributed service-based system, composed of a set of dedicated services, that simultaneously serve multiple stakeholders. It is based on a central data pool of business partners, which is consistent with the overall design principles of Catena-X. The main target is to create business partner data records (such as customer/supplier) with a high quality and currentness, to provide other processes with these data. This results in less rework and adjustment due to better master data quality which ultimately leads to an overall cost reduction for participating companies. Additionally, Value Added Services shall be offered to enrich those business partner data sets even further and give additional information or warnings about the business partners. Getting a 360° view on your business partners also helps with reducing costs and achieving process excellence because better decisions can be made.

The Business Partner Gate allows any Catena-X member to share own business partner data as well as business partner data of its suppliers and customers with the Catena-X network so that cleansed and enriched business partner data records, so-called Golden Records, can be created and made available. It is a main component of the architecture framework at Catena-X, as it enables the Catena-X members to leverage accurate, complete, and consistent business partner data for Catena-X applications and shared services.

The Business Partner Gate can be accessed via the standardized API described in this standard.

## 1. INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following audience:

- Core Service Provider
- Onboarding Service Provider
- Data Provider and Consumer

This document focuses on the Business Partner Gate API (short: Gate API) that is part of the Business Partner Data Management (BPDM) described on the [BPDM Catena-X Website](https://catena-x.net/en/offers-standards/bpdm). It is relevant for core service providers who want to provide services for uploading and downloading business partner master data records with the aim of cleansing and enriching them and thus create a high-quality business partner data record (Golden Record), which is identified by the business partner number (BPN). It is also relevant for onboarding service providers, business application providers as well as data providers and consumers who want to use such services.

Not in scope are the structure and logic of the business partner number itself and the mechanism on how the business partner number is issued. There is a separate standard for this: CX-0010 Business Partner Number.

Not in scope is the overall Business Partner Pool with all Golden Records within Catena-X and the way of how the Golden Records can be retrieved. There is a separate standard for this: CX-0012 Business Partner Pool API.

Not in scope are the requirements of cleansing and enriching the business partner data records with the aim to create a Golden Record. There is a separate standard for this: CX-0076 Golden Record End to End Requirement Standard.

You can find the other standards in the standard library of Catena-X: https://catena-x.net/en/standard-library

### 1.2 CONTEXT AND ARCHITECTURE FIRE

> *This section is non-normative*

The Gate API is a crucial core component in Catena-X and its platform capability BPDM because it contributes to the following functions:

1. Data Consistency: The Gate API allows that data related to business partners can be collected from multiple sources and can be sent through the sharing process to correct, enrich and validate the data. This ultimately enables BPDM to create accurate, complete, and consistent business partner data records (Golden Records). This helps to reduce the risk of errors and inconsistencies in business partner data.
2. Data Sovereignty: The Gate API allows to upload and download business partner data in a data sovereign way, because each Catena-X member has its own area of business partner data in BPDM, where private data (like customer / supplier relationships) is only visible to the Catena-X member.
3. Data Governance: The Gate API is the basis for a data governance framework and helps to enforce data quality standards, such as data completeness, accuracy, and consistency. It allows to compare the uploaded business partner data records against the corrected and enriched ones and provides the sharing member with a proposal for taking over the changes into the local MDM systems. This helps to ensure that business partner data is of high quality and can be trusted for use in various business processes.
4. Interoperability: The Gate API provides an interoperable and standardized way of uploading and downloading business partner data, ensuring both Core Service Provider interchangeability and streamlined data accessibility for all consumers of the API.

There is a reference implementation for the Gate API on GitHub. It is part of a Spring Boot Kotlin open-source software project under the hood of the Eclipse Foundation and follows the Apache 2.0 licenses.

For the complete and up-to-date API setup refer to the following website: https://github.com/eclipse-tractusx/bpdm

For an architecture overview refer to the ARC42 documentation: https://github.com/eclipse-tractusx/bpdm/tree/release/5.0.x/docs/arc42

To use the Gate API in the BPDM use case apart from this standard, the following other standards should be considered by all participants for which this standard is relevant:

- CX - 0018 Eclipse Data Space Connector (EDC)

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

If sections are marked as non-normative, all authoring guidelines, diagrams, examples, and notes in these sections are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in [BCP 14](https://datatracker.ietf.org/doc/html/bcp14) [[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)] [[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

When implementing the API defined in this standard, proof of conformity must be provided by the following deliverables:

- An OpenAPI specification defining the relevant resources for this standard
- Examples of data assets

## 1.4 EXAMPLES

Intentionally left blank.

### 1.5 TERMINOLOGY

> *This section is non-normative*

### 1.5.1 GENERAL

**Golden Record:** Golden Record defines a business partner data record which successfully passed a set of predefined quality rules. These rules qualified the data record into a harmonized, standardized, and semantically unified data structure which is defined by Catena-X. The Golden Record status is a prerequisite for each BP data record to receive a valid BPN.

**Sharing Member:** A sharing member is a Catena-X member who shares the business partner data of his own business environment.

**Company Data:** Company data are business partner data that represent the organizational structures of the sharing member.

### 1.5.2 Data Model

This chapter explains the data model[^1] from a conceptual / terminology point of view. It does not include technical details of the API data model, such as:

- differences in response and request
- differences in data stages (like input or output)
- attributes for pagination
- singular query parameters, which are not already attributes of the entities

**Note that cardinalities always refer to the entity state as required output of the sharing process. In general, cardinalities of relations and attributes are not to be enforced while uploading business partners, except for the external ID.**

#### 1.5.2.1 BUSINESS PARTNER

![Business Partner](./assets/BusinessPartner.png)

In general, a business partner is any entity (such as a customer, a supplier, an employee, or a service provider) that does business with another entity.

In Catena-X, a business partner is an organization (such as an enterprise or company, university, association, etc., and not a natural person) or one of its substructures that acts as unique partner within the automotive supply chain - either in the role of a direct participant, or a consultant, or a non-production-material (NPM) supplier.

The business partner entity in the Gate API provides a merged view on the following entity combinations, that the BPDM uses to represent an organization or one of its substructures relevant for the automotive supply chain (see detailed definitions).:

1. a legal entity and its legal address
2. a legal entity and an additional address, which is not its legal address
3. a legal entity, one of its sites, and the main address of this site, which is not the legal address
4. a legal entity, one of its sites and the legal address of the legal entity, which additionally is the main address of that site
5. a legal entity, one of its sites and an additional address of that site, which is neither the legal address of the legal entity nor the main address of that site

In all combinations, a business partner has exactly one legal entity and one address assigned. It may additionally have a site assigned if the assigned address belongs to the site / the site is known to BPDM. Note that for the assignment of the entities the respective BPNL, BPNS or BPNA (from the Business Partner Pool) are used. The BPN assignment and the business partner address type determine the entity combinations, on which the business partner entity provides a merged view.

The combinations can be visualized in the following table (all other combinations are invalid as output of the sharing process):

| **Entity Combination** | **Legal Entity  assigned (BPNL)** | **Site assigned(BPNS)** | **Address assigned(BPNA)** | **Business Partner Address Type** |
| --- | --- | --- | --- | --- |
| 1. | x |  | x | Legal Address |
| 2. | x |  | x | Additional Address |
| 3. | x | x | x | Site Main Address |
| 4. | x | x | x | Legal and Site Main Address |
| 5. | x | x | x | Additional Address |

These are the attributes of the business partner:

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| External ID | The identifier which uniquely identifies (in the internal system landscape of the sharing member) the business partner. | String |
| Name Parts | The list of name parts of the business partner to accommodate the different number of name fields in different systems. | List of String |
| States | The list of (temporary) states of the business partner. | List of [Business Partner State](#15212-business-partner-state) |
| Identifiers | The list of identifiers of the business partner. | List of [Business Partner Identifier](#15211-business-partner-identifier) |
| Roles | One or more of the roles, the business partner assumes with respect to the sharing member: Supplier, Customer. | List of Enum |
| Is Own Company Data | Indicates whether the sharing member claims (in the initial upload) the business partner to belong to the company data of the sharing member.[^2] | Boolean |
| Created At | The date and time when the business partner data record has been created. | Date / Time |
| Updated At | The date and time when the business partner data record has been last updated. | Date / Time |
| Legal Entity | The legal entity, on which the business partner provides a view. | [Legal Entity Representation](#15213-legal-entity-representation) |
| Site | The site, on which the business partner provides a view. | [Site Representation](#15214-site-representation) |
| Address | The address, on which the business partner provides a view. | [Address Representation](#15215-address-representation) |

##### 1.5.2.1.1 BUSINESS PARTNER IDENTIFIER

A business partner identifier (uniquely) identifies the business partner, such as the German Handelsregisternummer, a VAT number, etc.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| Value | The value of the identifier like “DE123465789” | String |
| Type | The type of the identifier. | [Identifier Type](#1528-identifier-type) |
| Issuing Body | The name of the official register, where the identifier is registered. For example, a Handelsregisternummer in Germany is only valid with its corresponding Registergericht and Registerart. | String |

##### 1.5.2.1.2 BUSINESS PARTNER STATE

A business partner state indicates if the business partner is active or inactive[^3]. This does not describe the relation between a sharing member and a business partner and whether they have active business, but it describes whether the business partner is still operating.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| Valid From | The date and time from which the state is valid. | Date / Time |
| Valid To | The date and time until the state is valid. | Date / Time |
| Type | One of the state types: active, inactive. | Enum |

##### 1.5.2.1.3 LEGAL ENTITY REPRESENTATION

A legal entity representation adds context information to the legal entity, on which the business partner provides a view. Additionally, it contains some of the information from the assigned legal entity.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| Legal Entity BPN | The BPNL of the legal entity, on which the business partner provides a view. | String |
| Legal Name | The name of the legal entity, on which the business partner provides a view, according to official registers. | String |
| Short Name | The abbreviated name of the legal entity, on which the business partner provides a view. | String |
| Legal Form | The legal form of the legal entity, on which the business partner provides a view. | [Legal Form](#15216-legal-form) |
| Classifications | The list of classifications of the business partner, such as a specific industry. | List of [Classification](#1523-classification) |

##### 1.5.2.1.4 SITE REPRESENTATION

A legal entity representation adds context information to the site, on which the business partner provides a view. Additionally, it contains some of the information from the assigned site.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| Site BPN | The BPNS of the site, on which the business partner provides a view. | String |
| Name | The name of the site, on which the business partner provides a view. This is not according to official registers but according to the name the owner chooses. |String |

##### 1.5.2.1.5 ADDRESS REPRESENTATION

An address representation adds context information to the address, on which the business partner provides a view. Additionally, it contains most of the information from the assigned address.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| Address BPN | The BPNA of the address, on which the business partner provides a view. | String |
| Name | The name of the address, on which the business partner provides a view. This is not according to official registers but according to the name the sharing members agree on, such as the name of a gate or any other additional names that designate the address in common parlance. | String |
| Type | One of the address types: Legal Address, Site Main Address, Legal and Site Main Address, Additional Address. | Enum |
| Physical Postal Address | The physical postal address of the address, on which the business partner provides a view, such as an office, warehouse, gate, etc. | [Physical Postal Address](#1524-physical-postal-address) |
| Alternative Postal Address | The alternative postal address of the address, on which the business partner provides a view, for example if the goods are to be picked up somewhere else. | [Alternative Postal Address](#1525-alternative-postal-address) |

#### 1.5.2.1.6 LEGAL FORM

A legal form is a mandatory corporate legal framework by which companies can conduct business, charitable or other permissible activities.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| Technical Key | The technical identifier of the legal form according to [ISO 20275](https://en.wikipedia.org/wiki/ISO_20275). | String |
| Name | The name of legal form according to [ISO 20275](https://en.wikipedia.org/wiki/ISO_20275). | String |
| Abbreviation | The abbreviated name of the legal form according to [ISO 20275](https://en.wikipedia.org/wiki/ISO_20275), such as AG for German Aktiengesellschaft. | String |

#### 1.5.2.3 CLASSIFICATION

A classification[^4] is an assignment of the business partner to an industry. It does not necessarily have to be the only industry the company is active in (see large companies operating in different industries). Multiple assignments to several industries are possible per classification type.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| Value | The name of the class belonging to the classification. |String |
| Code | The identifier of the class belonging to the classification. | String |
| Type | One of types of classifications: NACE, NAF, NAICS, SIC. | Enum |

#### 1.5.2.4 PHYSICAL POSTAL ADDRESS

A physical postal address describes the physical location of an office, warehouse, gate, etc.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| Geographic Coordinates | The exact location of the physical postal address in latitude, longitude, and altitude. | [Geographic Coordinate](#1527-geographic-coordinates) |
| Country | The two-letter country code of the physical postal address according to [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1). | String |
| Administrative Area Level 1 | The administrative area of the physical postal address, such as a region within a country. | [Administrative Area (Level 1)](#1526-administrative-area-level-1) |
| Administrative Area Level 2 | The name of the locally regulated secondary country subdivision of the physical postal address, such as county within a country. | String |
| Administrative Area Level 3 | The name of the locally regulated tertiary country subdivision of the physical address, such as townships within a country. | String |
| Postal Code | The alphanumeric identifier (sometimes including spaces or punctuation) of the physical [postal address](https://en.wikipedia.org/wiki/Address_(geography)) for the purpose of sorting [mail](https://en.wikipedia.org/wiki/Mail), synonyms: postcode, post code, PIN or ZIP code. | String |
| City | The name of the city of the physical postal address, synonyms: town, village, municipality. | String |
| District |The name of the district of the physical postal address which divides the city in several smaller areas. | String |
| Street | The street of the physical postal address, synonyms: road, avenue, lane, boulevard, highway | [Street](#15241-street) |
| Company Postal Code | The company postal code of the physical postal address, which is sometimes required for large companies. | String |
| Industrial Zone | The industrial zone of the physical postal address, designating an area for industrial development, synonym: industrial area. | String |
| Building | The alphanumeric identifier of the building addressed by the physical postal address. | String |
| Floor | The number of a floor in the building addressed by the physical postal address, synonym: level. | String |
| Door | The number of a door in the building on the respective floor addressed by the physical postal address, synonyms: room, suite. | String |

##### 1.5.2.4.1 STREET

A street is a public road in a city, town, or village, typically with houses and buildings on one or both sides, synonyms: road, avenue, lane, boulevard, highway.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| Name Prefix | The street related information, which is usually printed before the official street name on an address label. | String |
| Additional Name Prefix | The additional street related information, which is usually printed before the official street name on an address label. | String |
| Name | The name of the street. | String |
| Name Suffix | The street related information, which is usually printed after the official street name on an address label. | String |
| Additional Name Suffix | The additional street related information, which is usually printed after the official street name on an address label. | String |
| House Number | The alphanumeric identifier representing the exact location of a building within the street. | String |
| House Number Supplement | The alphanumeric identifier representing the exact location of a business partner in a building. Note this information might be further detailed out semantically in the building, floor, and door attributes. However, this attribute is the only relevant for addressing the business partner. | String |
| Milestone | The alphanumeric identifier representing the exact location of an addressed object within a street without house numbers, such as within long roads. | String |
| Direction | The cardinal direction describing where the exit to the location of the addressed object on large highways / motorways is located, such as Highway 101 South. | String |

#### 1.5.2.5 ALTERNATIVE POSTAL ADDRESS

An alternative postal address describes an alternative way of delivery for example if the goods are to be picked up somewhere else.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| Geographic Coordinates | The exact location of the alternative postal address in latitude, longitude, and altitude. | [Geographic Coordinate](#1527-geographic-coordinates) |
| Country | The two-letter country code of the postal address according to [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1). | String |
| Administrative Area Level 1 | The administrative area of the alternative postal address, such as a region within a country. | [Administrative Area (Level 1)](#1526-administrative-area-level-1) |
| Postal Code | The alphanumeric identifier (sometimes including spaces or punctuation) of the physical [postal address](https://en.wikipedia.org/wiki/Address_(geography)) for the purpose of sorting [mail](https://en.wikipedia.org/wiki/Mail), synonyms: postcode, post code, PIN or ZIP code. | String |
| City | The name of the city of the physical postal address, synonyms: town, village, municipality. | String |
| City | The name of the city of the alternative postal address, synonyms: town, village, municipality. | String |
| Delivery Service Type | One of the alternative postal address types: P.O. box, private bag, boite postale. | Enum |
| Delivery Service Qualifier | The qualifier uniquely identifying the delivery service endpoint of the alternative postal address in conjunction with the delivery service number. In some countries for example, entering a P.O. box number, postal code and city is not sufficient to uniquely identify a P.O. box, because the same P.O. box number is assigned multiple times in some cities. | String |
| Delivery Service Number | The number indicating the delivery service endpoint of the alternative postal address to which the delivery is to be delivered, such as a P.O. box number or a private bag number. | String |

#### 1.5.2.6 ADMINISTRATIVE AREA (Level 1)

An administrative area (level 1) is the country subdivision according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2), such as regions within a country.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| Name | The name of the country subdivision according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). | String |
| Code | The six-character alphanumeric code according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2), consisting of the two-letter [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) country code and a three-character alphanumeric code for the subdivision in that country, separated by a hyphen. | String |

#### 1.5.2.7 GEOGRAPHIC COORDINATES

Geographic coordinates describe an exact location in latitude, longitude, and altitude, according to [ISO 6709](https://en.wikipedia.org/wiki/ISO_6709) with [WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System#WGS84) as the currently only supported coordinate reference system.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| Longitude | The geographic coordinate of a place indicating the distance to the west or east of the line passing through Greenwich, in decimal degrees ([DD](https://en.wikipedia.org/wiki/Decimal_degrees)). | Float |
| Latitude | The geographic coordinate of a place indicating its distance to the north or south of the equator, in decimal degrees ([DD](https://en.wikipedia.org/wiki/Decimal_degrees)). | Float |
| Altitude | The geographic coordinate of a place indicating its height above sea level, in meters. | Float |

#### 1.5.2.8 IDENTIFIER TYPE

![Identifier Type](./assets/IdentifierType.png)

An identifier type defines the name or category of an identifier, such as the German Handelsregisternummer, VAT number, Global Location Number (GLN), etc. The identifier type is valid for a business partner type and used in a specific country.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| Technical Key | The technical identifier of the identifier type. | String |
| Name | The name of the identifier type. | String |
| Business Partner Type | One of the types of business partners for which the identifier is valid: legal entity, address | Enum |

#### 1.5.2.9 SHARING STATE ENTRY

![Sharing State Entry](./assets/SharingStateEntry.png)

A sharing state entry shows the progress in the sharing process and is updated each time the progress for a business partner changes. The business partner is identified by the external ID.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| External ID | The external ID of the business partner for which the sharing state entry was created. | String |
| Sharing State Type | One of the sharing state types of the current sharing state: pending, success, error. | Enum |
| Sharing Error Code | One of the sharing error codes in case the current sharing state type is “error”: sharing process error, sharing timeout, BPN not in pool. | Enum |
| Sharing Process Started At | The date and time when the processing of the business partner data record started. | Date / Time |

#### 1.5.2.10 CHANGELOG ENTRY

![Changelog Entry](./assets/ChangelogEntry.png)

An entry of the changelog, which is created each time a business partner is modified and contains data about the change. The actual new state of the business partner is not included.

| **Attribute** | **Description** | **(Data) Type / Code List / Enumeration** |
| --- | --- | --- |
| External ID | The external ID of the business partner for which the changelog entry was created. | String |
| Changelog Type | One of the actions for which the changelog entry was created: create, update. | Enum |
| Timestamp | The date and time when the changelog entry was created. | Date / Time |

## 2 BUSINESS PARTNER GATE API \[NORMATIVE\]

The Business Partner Gate API allows to upload and download business partner data records to improve their quality and enrich them with additional information. The Gate API MUST be implemented based on the [OpenAPI 3.0.1 specification](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.1.md).

### 2.1 PRECONDITIONS AND DEPENDENCIES

To run the API the following SHOULD be set up:

https://github.com/eclipse-tractusx/bpdm/blob/release/5.0.x/README.md

### 2.2 API SPECIFICATION

#### 2.2.1 API ENDPOINT & RESOURCES

The Gate API MUST be implemented as defined in the following OpenAPI document: https://raw.githubusercontent.com/eclipse-tractusx/bpdm/release/5.0.x/docs/api/gate.json

The resources MUST use the well-known HTTP request methods for CRU(D) operations:

- POST method MUST be used for create requests
- PUT[^5] method MUST be used for update requests
- GET method MUST be used for read requests

The POST method MAY also be used for read requests, if input is not given by parameters but rather by an HTTP body to bypass maximum URL length. The PUT method MAY also be used for upsert requests (create or update) if this is required. A state (active / inactive) at each entity MUST be used for a soft delete, so that the DELETE method SHALL NOT be used. Other HTTP request methods SHALL NOT be used, including PATCH.

To facilitate the compliance assessment, this chapter additionally lists and describes the API resources of the Gate API per API controller.

The following API controllers of the OpenAPI document MUST be implemented:

- Business Partner controller
- Sharing state controller
- Changelog controller

Uploading and downloading data to/from the Gate API MUST follow a staging concept with two stages, so that consumers of the Gate API can compare what they have uploaded (input stage) against what has been corrected and/or enriched by BPDM (output stage). The following controllers MUST distinguish between an input and an output stage:

- Business Partner controller
- Changelog controller

Note that all resources of the OpenAPI document described in the following are MANDATORY. Conversely, all resources not described in the following are OPTIONAL.

#### 2.2.1.1 BUSINESS PARTNER CONTROLLER

The business partner controller MUST allow to create, update, or read business partners in the input and read from the output stage. It MUST have the following resources:

| **Business Partner Controller Resources** | **Description** |
| --- | --- |
| PUT/api/catena/input/business-partners | Creates business partners or updates existing business partners in the input stage. |
| POST/api/catena/input/business-partners /search | Returns business partners by an array of external IDs from the input stage. |
| POST/api/catena/output/business-partners /search | Returns business partners by an array of external IDs from the output stage. |

#### 2.2.1.2 SHARING STATE CONTROLLER

The sharing state controller MUST allow to read sharing state entries of business partners. A sharing state of type "Success" SHOULD include the assigned BPNL, BPNS and BPNA. The sharing state controller MUST have the following resources:

| **Sharing State Controller Resources** | **Description** |
| --- | --- |
| GET/api/catena/sharing-state | Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs. |

#### 2.2.1.3 CHANGELOG CONTROLLER

The changelog controller MUST allow to read business partner change log entries. It MUST have the following resources:

| **Changelog Controller Resources** | **Description** |
| --- | --- |
| POST/api/catena/input/business-partners/changelog/search | Returns change log entries as of a specified timestamp from the input stage, optionally filtered an array of external IDs. |
| POST/api/catena/output/business-partners/changelog/search | Returns change log entries as of a specified timestamp from the output stage, optionally filtered by an array of external IDs. |

### 2.2.2 AVAILABLE DATA TYPES

The API MUST use JSON as the payload format transported via HTTP. Other formats can be added. These are then, however, OPTIONAL.

### 2.2.3 EDC DATA ASSET STRUCTURE

For each read and write (create and update) resource in the Gate API input stage there MUST be a dedicated EDC data asset definition. For each read resource in the Gate API output stage there MUST be a dedicated EDC data asset definition.

### 2.2.4 ERROR HANDLING

The following http response codes MUST be defined for all resources:

- 200 - OK
- 400 - Bad Request
- 401 - Unauthorized
- 403 - Forbidden
- 404 - Not Found
- 500 - Internal Server Error

HTTP Status Code Registry MUST be adhered to in the implementation for the decision on when to use which error code: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

## 3 REFERENCES

## 3.1 NORMATIVE REFERENCES

[Gate API specification 5.0.x](https://raw.githubusercontent.com/eclipse-tractusx/bpdm/release/5.0.x/docs/api/gate.json)

## 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

[ISO 20275](https://en.wikipedia.org/wiki/ISO_20275)
[ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1)
[ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)
[ISO 6709](https://en.wikipedia.org/wiki/ISO_6709)
[WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System#WGS84)
[BPDM Catena-X Website](https://catena-x.net/en/offers-standards/bpdm)

## REFERENCE IMPLEMENTATION

> *This section is non-normative*

[Business Partner Gate API 5.0.x](https://github.com/eclipse-tractusx/bpdm/tree/release/5.0.x/bpdm-gate-api/src/main/kotlin/org/eclipse/tractusx/bpdm/gate/api)

## ANNEXES

### FIGURES

> *This section is non-normative*

Intentionally left blank.

### TABLES

> *This section is non-normative*

Intentionally left blank.

[^1]: Note that PlantUml is used for the conceptual UML diagrams in this document (A = abstract class; green E = entity; C = class; red E = enumeration). An abstract class has no actual representation in the OpenAPI implementation. An entity is usually implemented by an own OpenAPI controller with resources and usually is the root in a payload, while a class is a sub node in the payload. An enumeration is a set of predefined values.

[^2]: Note that each data record in the MDM business partner data of the sharing member does not explicitly have to be flagged as "own company data". However, it is important that the sharing member flags business partners as "own company data" in the initial upload of own company data, such as by introducing a constant in the used middleware.

[^3]: Note that this a currently a soft-delete approach and not a business state. However, this can be adapted in the next version of this standard.

[^4]: The classification is subject to change.

[^5]: Note that in case of a PUT the corresponding resources expect to receive the full updated record, including values that did not change.

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
