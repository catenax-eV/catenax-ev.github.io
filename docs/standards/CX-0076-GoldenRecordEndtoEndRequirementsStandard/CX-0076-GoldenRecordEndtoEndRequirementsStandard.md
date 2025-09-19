---
tags:
  - CAT/Value Added Services
---

# CX-0076 - Golden Record End-to-End Requirements Standard v1.5.0

## FOR WHOM IS THE STANDARD DESIGNED

See chapter 1.1 Audience & Scope

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

| Version | Description  | Date       |
| ------- | ------------ | ---------- |
| 1.0.0  | Initial      | 22.03.2024 |
| 1.1.0  | <ul><li>Adjustment of Table 2 in chapter [2.1.9 GOLDEN RECORD OUTPUT REQUIREMENTS](#219-golden-record-output-requirements). Data field references deleted. </li><li>Street is now neither mandatory nor optional for Japan as listed in Table 2</li><li>New paragraph added at the end of chapter [2.1.2](#212-upload-criteria-and-mandatory-fields) providing more details on "own data" </li> <li> Chapter [2.1.6](#216-quality-checks-for-legal-entity-including-legal-form) has been expanded specifying expected relations and quality checks in more detail.</li><li>Chapter [2.1.10 NOTIFICATIONS](#2110-notifications) added.</li> <li>Chapter [2.1.11 CONFIDENCE LEVEL](#2111-confidence-level) added</li><li>Footnote for tax jurisdiction added in chapter [2.1.8](#218-quality-checks-for-tax-number-and-other-identifier)</li></ul> | 22.06.2024 |
| 1.2.0  | <ul><li>Adjustment of Table 2 in chapter [2.1.9 GOLDEN RECORD OUTPUT REQUIREMENTS](#219-golden-record-output-requirements). Adding Tax Jurisdiction Code </li> <li>Adjustment in chapter [2.1.11 CONFIDENCE LEVEL](#2111-confidence-level). Adjust text for validation interval</li> <li>District and Region is now mandatory for Romania as listed in Table 2</li></ul> | 01.08.2024 |
| 1.3.0  | <ul><li>Adjustment of Table 2 in chapter [2.1.9 GOLDEN RECORD OUTPUT REQUIREMENTS](#219-golden-record-output-requirements). Removed footnote for tax jurisdiction code as it is now technically implemented </li> <li>Adjustment / enhancements of footnotes references regarding new standard versions </li> <li>Adapted to new template structure</li></ul> | 02.12.2024 |
| 1.4.0  | <ul><li> Enhancement of chapter [2.1.8 QUALITY CHECKS FOR TAX NUMBER AND OTHER IDENTIFIER](#218-quality-checks-for-tax-number-and-other-identifier) with reference to standard CX-0010 where the identifier are thoroughly described  </li> <li>Added example for calculation of confidence level and adjusted wording to provide more precision [2.1.11 CONFIDENCE LEVEL](#2111-confidence-level) </li> <li>Minor  adjustments related to standard template and updating technical references / links </li></ul> | 01.06.2025 |
| 1.5.0  | <ul><li> Added relations between legal entities [1.5.8 RELATIONS](#158-relations)</li> <li> Adjusted wording for requirement regarding upload of BP data;  moved it from chapter [2.1.11 CONFIDENCE LEVEL](#2111-confidence-level) to chapter [2.1.2 UPLOAD CRITERIA AND MANDATORY FIELDS](#212-upload-criteria-and-mandatory-fields)  </li> <li>Extended example for calculation of confidence level [2.1.11 CONFIDENCE LEVEL](#2111-confidence-level) </li> <li>Minor  adjustments related to standard template and updating technical references / links </li></ul> | 24.08.2025 |

## ABSTRACT

When building business data management from disparate data sources, there are often issues with duplicate records, incomplete values within a record, and records with poor data quality. The Golden Record process solves these issues by e.g., data enrichment, typification and improving data quality within a record. The Golden Record is a concept within Master Data Management (MDM) that identifies and defines the single version of truth of business partner data, where truth is understood to be data that is trusted to be accurate, complete, correct and up to date. Thus, the Golden Record represents this trusted and best possible result of a specific business partner data set and ends up with an assigned unique identifier, represented as a Business Partner Number (BPN).

Updating and maintaining business partner data can be a lengthy, costly, and time-consuming activity that currently has to be undertaken by each company individually.

The purpose of this standard is to describe guidelines and requirements specific for the challenges of business data maintenance and defines the required quality criteria for Golden Records. These quality criteria not only serve the users of the Golden Record, but also form the basis for all Catena-X use cases.

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following audience:

- Core Service Provider
- Business Application Provider
- Data Provider and Consumer

This document focuses on the outcome of the Golden Record Process. It is relevant for core service providers who want to provide services for retrieving a cleansed, high-quality business partner data record (Golden Record). It is also relevant for business application providers as well as data providers and consumers who want to use such services, and, finally, to assign Business Partner Numbers to respective Golden Records.

In scope are the requirements of cleansing and enriching the business partner data records with the aim to create a Golden Record proposal.

Not in scope is the way of how business partner data can be shared to create a Golden Record. Please refer to the Catena-X standard CX-0074 Business Partner Gate API v4.1.0 for more details.

Not in scope is the overall Business Partner Pool with all Golden Records within Catena-X and the way of how the Golden Records can be retrieved. Please refer to the Catena-X CX-0012 Business Partner Pool API v5.1.0 standard for more details.

Not in scope is the general definition of the Business Partner L/S/A-logic. Please refer to the Catena-X standard CX-0010 Business Partner Number v3.0.0  standard for more details.

You can find the other standards in the standard library of Catena-X: https://catenax-ev.github.io/docs/standards/overview.

### 1.2 CONTEXT

> *This section is non-normative*

The establishment of various industry networks (such as Catena-X) has increased the need to establish data standards across the entire automotive value chain and to promote industry-wide, international data exchange. For the networking of OEMs, suppliers, customers, and industrial partners, it is essential to define and introduce a cross-industry standard for the identification of business partners and to provide the corresponding data in a certain quality to increase the usefulness and trust in the provided data in the form of Golden Records.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

If sections are marked as non-normative, all authoring guidelines, diagrams, examples, and notes in these sections are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in [BCP 14](https://datatracker.ietf.org/doc/html/bcp14) [[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119 "Key words for use in RFCs to Indicate Requirement Levels")] [[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174 "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words")] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

### 1.4 EXAMPLES

> *This section is non-normative*

Intentionally left blank.

### 1.5 TERMINOLOGY

> *This section is non-normative*

#### 1.5.1 GOLDEN RECORD

Golden Record defines a business partner data record which successfully passed a set of predefined quality rules. These rules qualified the data record into a harmonized, standardized, and semantically unified data structure which is defined by Catena-X. The Golden Record status is a prerequisite for each Business Partner data record to receive a valid Business Partner Number.

#### 1.5.2 LEGAL ENTITY

In general, a Legal Entity is a juridical person that has legal rights and duties related to contracts, agreements, and obligations. The term especially applies to any kind of organization (such as an enterprise or company, university, association, etc.) established under the law applicable to a country.

In Catena-X, a Legal Entity is a type of business partner representing a legally registered organization with its official registration information, such as legal name (including Legal Form, if registered), legal Address and Tax Number.

A Legal Entity has exactly one legal Address[^4], but it is possible to specify additional Addresses that a Legal Entity owns. Thus, at least one Address is assigned to a Legal Entity. A Legal Entity can own Sites. Thus, many or no Sites are assigned to a Legal Entity.  A Legal Entity is uniquely identified by the BPNL.

#### 1.5.3 LEGAL FORM

Legal Form identifies the legal status of a legal person. The classification of Legal Forms is based on the company forms of the Trade Register and on the requirements of taxation legislation. The Legal Forms of enterprises and corporations are recorded in the Business Information System.

#### 1.5.4 ADDRESS

In general, an Address is a collection of information to describe a physical location, using, for example, a street name with a house number and/or a post office box as reference. In addition, an Address consists of several postal attributes, such as country, region (state), county, township, city, district, or postal code, which help deliver mail.

In Catena-X, an Address is a type of business partner representing the legal Address of a Legal Entity, and/or the main Address[^5] of a Site, or any additional Address of a Legal Entity or Site (such as different gates).

An Address is owned by a Legal Entity. Thus, exactly one Legal Entity is assigned to an Address. An Address can belong to a Site. Thus, one or no Site is assigned to an Address. An Address is uniquely identified by the Business Partner Number Address.

#### 1.5.5 BPNL BUSINESS PARTNER NUMBER LEGAL ENTITY

A BPNL represents and uniquely identifies a Legal Entity, which is defined by its legal name (including Legal Form, if registered), legal Address and Tax Number.

For further details on BPNLs please see standard CX-0010 Business Partner Number v3.0.0.

#### 1.5.6 BPNS BUSINESS PARTNER NUMBER SITE

A BPNS represents and uniquely identifies a Site, for example where a production plant, warehouse or office building is located.

For further details on BPNSs please see standard CX-0010 Business Partner Number v3.0.0.

#### 1.5.7 BUSINESS PARTNER NUMBER ADDRESS

A BPNA represents and uniquely identifies an (geographical) Address, which can be the legal Address of a Legal Entity, and/or the main Address of a Site, or any additional Address of a Legal Entity or Site (such as different gates) based on e.g., country, street and city.

It is important to note that only the BPNL must be used to uniquely identify a Legal Entity. Even in the case that the BPNA represents the legal Address of the Legal Entity, it shall not be used to uniquely identify the Legal Entity.

For further details on BPNAs please see standard CX-0010 Business Partner Number v3.0.0.

#### 1.5.8 RELATIONS

There are relations between a Legal Entity (BPNL), its Sites (BPNS), and its Addresses (BPNA).

For more information, please refer to the standard CX-0010 Business Partner Number v3.0.0.

There are also relations between two Legal Entities (BPNL).

For more information, please refer to the standard CX-0074 Business Partner Gate API v4.1.0.

#### 1.5.9 TAX NUMBER AND OTHER IDENTIFIER

The data quality rules are leveraging a variety of identifiers to cross-check the correctness of Business Partner data record attributes. This includes Tax identifier issued by a legal authority like for example but not limited to EU VAT ID, as well as other commercial Business Partner identification numbers such as for example Dun&Bradstreet-Number (DUNS®), Bureau van Dijk ID (BvD), Global Location Number (GLN) and others.

## 2 MAIN CONTENT

> *This section is normative*

The following rules are minimum requirements and may be supplemented. In particular, the reference to ISO standards should be understood as a minimum requirement and may be supplemented by other standards to improve the quality of the datasets. This also applies to the listed countries as described in chapter 2.1.9 Golden Record Output. However, further rules which might be applied by a service provider MUST not conflict with the rules described in this standard.

To provide a certain level of quality and trustfulness, a series of quality checks MUST be performed.

### 2.1.1 GENERAL GOLDEN RECORD OUTPUT REQUIREMENTS

In addition to the specific checks described in the following chapters, some general checks MUST be carried out:

Generic quality checks:

- A record MUST be classified as either a Legal Entity (L), Site (S) or Address (A).
- A Site or Site information MUST be defined or marked only by its owner.
- Changes (updates) by a service provider to a record MUST be available in an understandable, comprehensible, and verifiable manner.
- There MAY be at least the original data field input, the change proposal as well as a source where this proposal is coming from to ensure comprehensibility.

### 2.1.2 UPLOAD CRITERIA AND MANDATORY FIELDS

Some fields are classified as mandatory from a business perspective and therefore to be uploaded. If one or more of these mandatory fields are missing, a check against official registers or certain validity checks cannot be guaranteed to be successful. To maintain good data quality, the following fields MUST be included in each record for further processing. Therefore, the following rules MUST be carried out:

Mandatory fields quality checks:

- Legal name of the company (including the Legal Form, if registered) MUST NOT be empty.
- Country MUST NOT be empty.
- City MUST NOT be empty.
- The External identifier, meaning the unique identifier from the uploading party, MUST NOT be empty.

Please refer to the CX-0074 Business Partner Gate API v4.1.0 standard for the respective data fields.  

For uploading data, a mechanism MUST be provided to flag uploaded data as "own data", representing that this data belongs to my company.

There is certain information which can only be provided by the data owner. This applies to:

Site name
Legal short name and site name (of the company, e.g., BMW AG instead of the registered legal name Bayerische Motorenwerke Aktiengesellschaft)
Furthermore, the following information are seen as beneficial if the data owner could provide them with the upload:

- full postal address
- VAT & tax number
- HRB number or respective country specific commercial register

Service provider must be able to consolidate the site information which is provided by the "site name" information by the sharing member in one or several uploaded data (business partner) records.

Result of this consolidation MUST be the creation or update of respective BPNS based on the provided information.

E.g., the field "name 3" of the upload data record contains "Plant/Werk Feuerbach" (identifier/name for the site) and thus refers to this specific site.

**Provisioning of relation information**

For a CX-sharing member acting as data owner it MUST be possible to provide BP data with relation information, e.g., that a shared address of a Business Partner belongs to a specific Legal Entity.
This MUST be possible

a) based on already existing BPN.
b) based on provided external Id’s in case that the uploaded BP data have no assigned BPN yet (scenario: initial upload).

The service provider MUST be able to identify this relation information in both cases, process and validate it and make it then available in the CX Pool, there represented by solely BPNs.  

The above mentioned requirements are applicable for relations between Legal entities (BPNL) and their assigned Sites (BPNS) and Addresses (BPNA) but do currently not apply for relations between legal entities (BPNL-BPNL).

### 2.1.3 FEEDBACK BASED ON DATA INPUT

Feedback on data upload MUST be provided indicating if an upload was successful or unsuccessful. It MUST be made clear which record was uploaded successfully or not. These checks are to be considered as a minimum and may be substituted by further responses. The following rules MUST be carried out:

Golden Record response quality checks:

- The reasons why an upload was not successful MUST be reported.
- It MUST be made transparent if one or more of the mandatory fields are missing.
- If mandatory fields are missing, a self-explanatory error MUST be returned.
- If optional fields are missing, an information MUST be returned.

### 2.1.4 DUPLICATES CHECK

By uploading data via the BPDM Gate-API, duplicates may be shared and existent in the Gate persistence of the respective sharing member. There MUST NOT be any duplicates of the same BPN-type in the BPDM Pool, as this check and the subsequent linkage (See chapter 2.1.5 [Linkage](#215-linkage) for details) MUST be carried out by the service provider.

Therefore, the following rules MUST be carried out:

**Duplicates quality checks:**

- Duplicates MUST be recognized in the process, based on e.g., but not limited to, company name incl. Legal Form, tax- or other identifiers, and identical addresses.

- A de-duplication MUST be performed as part of the Golden Record process.
- As a result of the duplicate check, there MUST be no more duplicates in the CX pool[^1] per BPN-type. This applies for all different types of Business Partner Numbers (BPN)[^2]: Legal Entities (L), Sites (S) and Addresses (A).

### 2.1.5 LINKAGE

The linkage answers the following question: Does the current dataset (incoming from a sharing member) already exist in the Catena-X data pool?

If an uploaded record does not exist in the CX pool with an available BPN, a new BPN MUST be created and linked to the uploaded data record. Otherwise, the existing BPN MUST be used and linked to the uploaded data record.

The creation of the BPN MUST be performed according to Catena-X standard CX-0010 Business Partner Number v3.0.0.

### 2.1.6 QUALITY CHECKS FOR LEGAL ENTITY, INCLUDING LEGAL FORM

The following quality checks are designed to verify that the shared Legal Entity, including the Legal Form, if registered, is correct.

The following rules MUST be carried out.

**Quality checks:** Correctness of Legal Entity

- It MUST be checked, if the Legal Entity incl. Legal Form, based on ISO 20275, is correct.

It MUST be checked if the Legal Form is valid for this country and formally correct written.

- Short and/or long form of the Legal Form MUST be identified and extracted.

- If the combination of a provided identifier, legal name and Address is found in the commercial register or equivalent official register, the type of this record MUST be set to BPNL.

- In addition, a BPNA MUST be created with address type *LegalAddress*, if the duplicate check or linkage does not return a result.

- When a BPNA is uploaded, a relation to a L MUST be set.

- When a BPNS is uploaded, a relation to a L MUST be set.

- The field LegalEntity.LegalForm[^3] MUST be extracted from LegalNameParts according to ISO20275 and written into the LegalForm field.

- LegalEntity.LegalForm.technicalKey MUST correspond to ISO20275 ELF code.

- When an additional Business Partner address data set is uploaded which is not a legal entity, and thus a BPNA needs to be created yet, a relation to a BPNL MUST be established.

- If no existing BPNL from the CX pool could be identified and assigned, a new corresponding BPNL MUST be created by the service provider including the required data fields. The respective BPNA and the new BPNL must then be linked to each other accordingly.

- This applies only, if the exact legal entity can be clearly identified based on the given information by the provided input.

- If this is not unambiguously possible (in cases that no or several possible legal entities were identified), it is recommended, that the party who uploaded the BP-data and/or the respective data owner SHOULD be contacted to ensure data accuracy.

If additional addresses are recognized in the commercial register (or a similar trustworthy source), these MUST be created as AdditionalAddresses (BPNAs). Respective additions to the legal name MUST be included in the AddressName field of the BPNA.

Example:
Bayerische Motoren Werke Aktiengesellschaft lists several additional addresses.

For each of these addresses, a BPNA with the AddressName e.g. Bayerische Motoren Werke Aktiengesellschaft Niederlassung Bonn needs to be created.

### 2.1.7 QUALITY CHECKS FOR ADDRESSES

The following quality checks are designed to verify that the shared Addresses are correct. The following checks MUST therefore be carried out:

**Address validation quality checks:**

- The country code MUST be checked based on ISO 3166-1. For details please see Table 2 in chapter [2.1.9](#219-golden-record-output-requirements)
- The region code MUST be checked based on ISO 3166-2. For details please see Table 2 in chapter [2.1.9](#219-golden-record-output-requirements)
- It MUST be checked that the postal code is valid for the country and fits to the city
- It MUST be checked that the city exists in this country and that it fits to the postal code

### 2.1.8 QUALITY CHECKS FOR TAX NUMBER AND OTHER IDENTIFIER

The following quality checks are designed to verify that the shared Tax Number or Other Identifier are correct. The following checks MUST be carried out:

**Tax Number and Other Identifier quality checks:**

- It MUST be checked that the Tax Number is correct according to national registers and their syntax.
- It MUST be checked that the format of the tax jurisdiction code is correct.
- It MUST be checked that the format of Other Identifier (such as, but not limited to DUNS, LEI, EIN, UBI, GLN) is valid.
- The consistency between Canadian Business Number and GST MUST be checked (Goods and Service Tax Number)
- The issuing body MUST be filled, to be able to correctly assign the responsible commercial register when data records are uploaded for a Legal Entity including the corresponding commercial register number.
  This quality check applies to Tax Numbers assigned to a specific commercial register or similar, such as, but not limited to, the German Handelsregisternummer.

A list of identifiers for Europe is incorporated in standard CX-0010 BUSINESS PARTNER NUMBER v3.0.0. There they are defined in terms of:

- Technical key
- Name (including transliterated name and abbreviation)
- Identifier type category with corresponding identifier types
- BP type (identifier is applicable for either legal entity and / or address)
- format
- countries where they are used.

### 2.1.9 QUALITY CHECKS FOR RELATIONS BETWEEN TWO LEGAL ENTITIES

The following quality checks are designed to verify that the shared relations between two Legal Entities are correct. The following checks MUST therefore be carried out:

- The "is managed by" relation is only created after the Core Service Provider B has verified that the Managing Legal Entity has the legal authority / power of attorney for the Managed Legal Entity. How the verification MUST be done is defined by the Catena-X association.
- The "is alternative headquarter for" relation MUST only be created after the Core Service Provider B has verified that the two legal addresses of the Legal Entities are both correctly registered in the national registers.  

For details on the relations, see CX-0074 Business Partner Gate API v4.1.0.

### 2.1.10 GOLDEN RECORD OUTPUT REQUIREMENTS

The requirements described below relate to the expected outcome after the Golden Record process has been carried out. There are country specific rules and (mandatory/optional) attributes. Depending on the country the e.g., type of identifier and/or the format, can be different.

Below is a list of countries for which a rule has been defined. If a rule says, "Applies to all countries", the full list in Table 1 MUST be applied. Exceptions will be specified.

There is also a rule-specific list of data fields in which the result MUST be written. This will be stated in column Attribute (Data Model). For details on the data model, please see CX-0012 Business Partner Pool API v5.1.0 and CX-0074 Business Partner Gate API v4.1.0.

***Table 1: Country List based on ISO 3166-1***

| Countries |     |     |     |     |     |        |
| --------- | --- | --- | --- | --- | --- | ------ |
| AD        | CL  | GE  | IS  | MC  | PL  | TJ     |
| AE        | CN  | GH  | IT  | MD  | PT  | TM     |
| AL        | CO  | GI  | JM  | ME  | PY  | TN     |
| AM        | CR  | GP  | JP  | MK  | QA  | TR     |
| AR        | CU  | GR  | KE  | MT  | RO  | TT     |
| AT        | CY  | GT  | KG  | MX  | RS  | TW     |
| AU        | CZ  | HK  | -   | MY  | RU  | UA     |
| AZ        | DE  | HN  | KR  | NA  | SA  | UK\*   |
| BA        | DK  | HR  | KW  | NI  | SE  | US\*\* |
| BE        | DZ  | HT  | KZ  | NL  | SG  | UY     |
| BG        | EC  | HU  | LB  | NO  | SI  | UZ     |
| BO        | EE  | ID  | LK  | NZ  | SK  | VA     |
| BR        | EG  | IE  | LT  | PA  | SM  | VE     |
| BY        | ES  | IL  | LU  | PE  | SN  | VN     |
| CA        | FI  | IN  | LV  | PH  | SV  | XK     |
| CH\*\*\*  | FR  | IR  | MA  | PK  | TH  | ZA     |
|           |     |     |     |     |     | ZW     |

\* UK includes North Ireland, GG, JE, \*\* US includes PR, \*\*\* CH includes LI

The following information rules MUST apply:

- For countries listed below as mandatory, an error message MUST be given if the rule could not be applied.
- For countries listed below as optional, an info message MUST be given if the rule could not be applied.
- A rule is not relevant for a country if it is not listed as mandatory or optional. No specific response is expected in this case.

***Table 2: Country specific business rules***

| **Business Rule** | **Affected Country** |
| ------------------| -------------------- |
| Registered name (Legal Entity incl. Legal Form, if registered) MUST be set.  | **Mandatory for:** <br /> Applies to all countries as defined in Table 1. |
| Tax Number MUST be set[^8]                                                     | **Mandatory for:** <br /> Applies to all countries as defined in Table 1. <br />**Exception,** neither mandatory nor optional for: CR, CU, IR, KW, LB, VA |
| Tax Jurisdiction Code MUST be set                                        | **Mandatory for:** <br />BR, CA, US(PR)<br /> |
| External identifier – number MUST be set                                     | **Mandatory for:** <br /> Applies to all countries as defined in Table 1. |
| External identifier – number                                                 | **Optional for:** Applies to all countries as defined in Table 1. |
| External identifier – type                                                   | **Optional for:** <br /> Applies to all countries as defined in Table 1. |
| Country MUST be set                                                          | **Mandatory for:** <br /> Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional: CN |
| Region, state MUST be set                                                    | **Mandatory for:** <br />BR, CA, CZ, IN, MX, RO, RU, US(PR)<br />**Optional for:**  <br />AD, AL, AM, AR, AT, AU, AZ, BA, BE, BG, BO, BY, CH/LI, CL, CO, CR, CU, CY, DE, DK, DZ, EC, EE, ES, FI, FR, GE, GI, GR, GT, HN, HR, HT, HU, IE, IS, IT, JM, JP, KG, KZ, LB, LT, LU, LV, MC, MD, ME, MK, MT, MY, NI, NL, NO, PA, PE, PH, PL, PT, PY, RS, SE, SI, SK, SM, SV, TH, TJ, TM, TR, TT, UA, UK/JE/GG, UY, UZ, VA, VE <br /><br /> **Neither mandatory nor optional:**<br />AE, CN, EG, GH, GP, HK, ID, IR, IL, KE, KR, KW, MA, NA, NZ, PK, QA, SA, SN, SG, ZA, LK, TW, TN, VN, XK, ZA, ZW |
| Secondary region (county) - Sub-province MUST be set                         | **Optional for**:<br />Applies to all countries as defined in Table 1.<br />**Exception,** mandatory for: RU<br />**Exception**, neither mandatory nor optional for: <br />AE, DZ, AU, EG, GH, GP, HK, IN, ID, IR, IL, JP, KE, KR, KW, MY, MA, NA, NZ, PK, PH, QA, SA, SN, SG, ZA, LK, TW, TH, TN, AE, VN, XK, ZW |
| Tertiary region (township) - Sub-province 2 MUST be set                      | **Optional for**:<br />Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional:<br />AE, DZ, AU, EG, GH, GP, HK, ID, IR, IL, JP, KE, KW, MY, MA, NA, NZ, PK, PH, QA, SA, SN, SG, ZA, LK, TW, TH, TN, AE, VN, XK, ZW |
| Sub-province 3 MUST be set                                                   | **Optional for**:<br />Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional for:<br />AE, DZ, AU, EG, GH, GP, HK, ID, IR, IL, JP, KE, KW, MY, MA, NA, NZ, PK, PH, QA, SA, SN, SG, ZA, LK, TW, TH, TN, AE, VN, XK, ZW |
| District/Sub-locality MUST be set                                            | **Mandatory for:** <br /> RO<br />**Optional for**:<br />Applies to all countries as defined in Table 1. <br />**Exception**, neither mandatory nor optional for:<br />AE, DZ, AU, GH, GP, HK, ID, IR, IL, KE, KR, KW, MY, NA, NZ, PH, QA, SN, SG, ZA, LK, AE, VN, XK, ZW |
| Sub-locality 2 MUST be set                                                   | **Optional for:**<br />Applies to all countries as defined in Table 1.<br />**Exception,** neither mandatory nor optional for:<br />AE, DZ, AU, CN, EG, GH, GP, HK, IR, IL, JP, KE, KR, KW, MY, MA, NA, NZ, PK, PH, QA, SA, SN, SG, ZA, LK, TW, TH, TN, AE, VN, XK. ZW |
| City MUST be set                                                             | **Mandatory for:** <br />Applies to all countries as defined in Table 1. |
| Postal code MUST be set                                                      | **Mandatory for:** <br /> Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional for:<br /> BO, HK, JM, LB, QA, AE, ZW |
| Street MUST be set                                                           | **Mandatory for:** <br />Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional for:<br /> QA, AE, JP |
| House number MUST be set                                                     | **Optional for:**<br /> Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional:<br />AE, GH, GP, IR, KE, KW, LB, NA, QA, SA, SN, TW, ZW |
| AlternativePostalAddress                                                     | **Optional for:**<br />Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional for:<br />AE, AU, CN, DZ, EG, GH, GP, HK, ID, IL, IN, IR, JP, KE, KR, KW, LB, LK, MA, MY, NA, NZ, PH, PK, QA, SA, SG, SN, TH, TN, TW, XK, ZA, ZW |
| AlternativePostalAddress                                                     | **Optional for:**<br />Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional:<br />AE, AU, CN, DZ, EG, GH, GP, HK, ID, IL, IN, IR, JP, KE, KR, KW, LB, LK, MA, MY, NA, NZ, PH, PK, QA, SA, SG, SN, TH, TN, TW, XK, ZA, ZW |
| Business Partner Type (Legal Entity (L), Site (S), (logistical) Address (A)) | **Mandatory for:**<br />Applies to all countries as defined in Table 1. |
| "BPNA belongs to Legal Entity (BPNL)"                                        | **Mandatory for:**<br />Applies to all countries as defined in Table 1. |

### 2.1.11 NOTIFICATIONS

A notification mechanism [^6] MUST be established to provide information per data record

- on the current processing status of a particular record,
- in the event of errors,
- and on any type of content change, e.g., comparison of data before and after golden record process, in relation to that particular record.

An additional user interface MUST be provided to visualize these notifications as well as the related information.

In case of shared records by a sharing member, respective notifications MUST be made available, e.g., via a change log.

A confidence level MUST be calculated and assigned to BPNLs and BPNAs to indicate the data quality.

### 2.1.12 CONFIDENCE LEVEL

The confidence level MUST be calculated based on the following quality dimensions in this ranked order from low to high:

- Used by (low, e.g., value 1[^7]),
- Checked by (mid, e.g. value 3)
- Approved by data owner (high, e.g. value 5)

The higher the points, the higher the confidence level.

**Used by:**

To be understood as "more than one CX member" is using this Business Partner data record.
Grant e.g., 1 point, if this record is used by two or more members.

**Checked by:**

To be understood as "checked and validated by a trustworthy source (e.g. commercial registers). This applies only for BPNL and not for BPNS or BPNA. Used sources MUST be made transparent. Grant e.g., 3 points, if the data record got successfully validated.

**Approved by data owner:**

To be understood as data record was provided by data owner.
Grant e.g., 5 points, if the data owner flag is set.

Regular validations of the used by and checked by checks MUST be done on a regular basis, e.g., once every six months. Detected errors or deviations must be corrected in a timely manner. After having performed these checks a recalculation of the confidence level MUST be processed and update the corresponding Golden Record including the date of the last recalculation.

**Calculation example:**

A BP data record was shared by a French CX member as data owner 3 months ago, validated against the official trade register “Registre national du commerce et des sociétés” and became a Golden Record in the CX Pool with a BPNL assigned. Three other CX members use this Golden Record with the assigned BPNL. The data owner additionally shared site information for the same address, stating that this is also the site main address.

*Calculation for BPNL*

| **Dimension**        | **Case example**                | **Score**       | **Description**|
| -------------------- | ------------------------------- | --------------- |--------------- |
| Used by              | 3 CX member companies           | 1               |The BP is shared by more than at least 2 CX members               |
| Checked by           | French trade register           | 3               |The BP is validated by official, trustworthy sources based on legally secure identifiers (see CX-0010)               |
| Approved by          | Data Owner (as data originator) | 5               |The BP has been shared by Data Owner               |
| **Confidence level** |                                 | **9** (maximum) |               |

*Calculation for BPNS*

As there is no trustworthy source for sites only the site information of the site owner is counted.
I.e., the score can only be 5 if a site is shared.
For this reason, a calculation of a score for sites is obsolete and MUST not to be provisioned.
The provider MUST ensure that the claiming of ownership for a site by a CX member is plausible (e.g., by checking the ownership flag).

*Calculation for BPNA*

| **Dimension**        | **Case example**                | **Score**       | **Description**|
| -------------------- | ------------------------------- | --------------- |--------------- |
| Used by              | 3 CX member companies           | 1               |The BP is shared by more than at least 2 CX members               |
| ~~Checked by~~           | ~~French trade register~~           | ~~3~~               |Normally there is no official, trustworthy source for validating BPNA, based on legally secure identifiers.*  For this reason this dimension is not considered in calculating the score on this BP level.                |
| Approved by          | Data Owner (as data originator) | 5               |The BP has been shared by Data Owner               |
| **Confidence level** |                                 | **6** (maximum) |               |

*Note:* There can be exceptions in certain countries (e.g., SIRET in France) but since this statement is currently true for the Large majority of the others the exclusion of this dimension leads to an unified and better comparable overall calculation logic.

### 2.2 OUT OF SCOPE

This standardization document does not describe the process and functionality to achieve the required results. Each operational provider is free to define the appropriate execution logic to achieve the result as defined in this standard.  

### 2.3 DATA QUALITY RULE ACCESSIBILITY

The quality checks as described in this standard are using the input based on the Business Partner Gate API with the respective endpoints. For further details please refer to Catena-X standard CX-0074 Business Partner Gate API v4.1.0.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

> *This section is normative*

- CX–0010 Business Partner Number v3.0.0
- CX–0012 Business Partner Pool API v5.1.0
- CX–0074 Business Partner Gate API v4.1.0

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

- [BPDM website](https://catena-x.net/use-case-cluster/next-level-master-data-management/) (accessed 2025-06-18)
- [standard library](https://catenax-ev.github.io/docs/standards/overview) (accessed 2025-06-18)

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

Intentionally left blank.

## ANNEXES

### FIGURES

> *This section is non-normative*

Intentionally left blank.

### TABLES

> *This section is non-normative*

Intentionally left blank.

[^1]: For details related to the Pool API, please see standard CX-0012 Business Partner Data Pool API v5.1.0.
[^2]: For details related to the Business Partner number and the different types, please see standard CX-0010 Business Partner Number v3.0.0.
[^3]: For details on the data model and data fields please refer to the standard CX-0074 Business Partner Gate API standard v4.1.0.
[^4]: Although in some cases there can be more than one legal address assigned to the same legal entity, e.g., Siemens in Germany (Berlin & Munich). This has lead to changes of the data model definitions including the relation `is alternative headquarter for. For details, please see standard CX-0074 Business Partner Gate API standard v4.1.0.
[^5]: Note that there is currently a debate that a site is a consolidation of addresses (BPNA), with all addresses being equally ranked, since a "main" address cannot always be defined at this point in time. This may lead to changes in the next update of this standard.
[^6]: Notification is to be understood as an information (info, warning, error) to be provided to the user. It's not to be understood as a short-term notification similar to a e.g., 30 second pop up message.
[^7]: Numbers (values) are to be seen as examples to make the calculation easier to understand.
[^8]: This rule MUST be applied unless local law or tax regulations do not require the existence / assignment of a tax number, e.g., for associations, small businesses, educational institutions.

### LEGAL

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
