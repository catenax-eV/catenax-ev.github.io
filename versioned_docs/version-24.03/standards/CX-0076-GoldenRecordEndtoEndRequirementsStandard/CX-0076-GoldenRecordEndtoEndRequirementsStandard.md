# CX-0076 - GoldenRecordEndtoEndRequirementsStandard v1.0.0

## ABSTRACT

*This section is non-normative.*

When building business data management from disparate data sources, there are often issues with duplicate records, incomplete values within a record, and records with poor data quality. The Golden Record process solves these issues by e.g., data enrichment, typification and improving data quality within a record. The Golden Record is a concept within Master Data Management (MDM) that identifies and defines the single version of truth of business partner data, where truth is understood to be data that is trusted to be accurate, complete, correct and up to date. Thus, the Golden Record represents this trusted and best possible result of a specific business partner data set and ends up with an assigned unique identifier, represented as a Business Partner Number (BPN).

Updating and maintaining business partner data can be a lengthy, costly, and time-consuming activity that currently has to be undertaken by each company individually.

The purpose of this standard is to describe guidelines and requirements specific for the challenges of business data maintenance and defines the required quality criteria for Golden Records. These quality criteria not only serve the users of the Golden Record, but also form the basis for all Catena-X use cases.

## FOR WHOM IS THE STANDARD DESIGNED

See chapter 1.1 Audience & Scope

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

Not applicable.

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

*This section is non-normative.*

This standard is relevant for the following audience:

- Core Service Provider
- Business Application Provider
- Data Provider and Consumer

This document focuses on the outcome of the Golden Record Process. It is relevant for core service providers who want to provide services for retrieving a cleansed, high-quality business partner data record (Golden Record). It is also relevant for business application providers as well as data providers and consumers who want to use such services, and, finally, to assign Business Partner Numbers to respective Golden Records.

In scope are the requirements of cleansing and enriching the business partner data records with the aim to create a Golden Record proposal.

Not in scope is the way of how business partner data can be shared to create a Golden Record. Please refer to the Catena-X standard CX-0074 Business Partner Gate API for more details.

Not in scope is the overall Business Partner Pool with all Golden Records within Catena-X and the way of how the Golden Records can be retrieved. Please refer to the Catena-X CX-0012 Business Partner Pool API standard for more details.

Not in scope is the general definition of the Business Partner L/S/A-logic. Please refer to the Catena-X CX-0010 Business Partner Number standard for more details.

You can find the other standards in the standard library of Catena-X: https://catena-x.net/de/standard-library.

### 1.2 CONTEXT

*This section is non-normative.*

The establishment of various industry networks (such as Catena-X) has increased the need to establish data standards across the entire automotive value chain and to promote industry-wide, international data exchange. For the networking of OEMs, suppliers, customers, and industrial partners, it is essential to define and introduce a cross-industry standard for the identification of business partners and to provide the corresponding data in a certain quality to increase the usefulness and trust in the provided data in the form of Golden Records.

### 1.3 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in [BCP 14](https://datatracker.ietf.org/doc/html/bcp14) [[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119 "Key words for use in RFCs to Indicate Requirement Levels")] [[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174 "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words")] when, and only when, they appear in all capitals, as shown here.

*This section is non-normative.*

All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

### 1.4 EXAMPLES

Not applicable.

### 1.5 TERMINOLOGY

*This section is non-normative.*

#### 1.5.1 GOLDEN RECORD

Golden Record defines a business partner data record which successfully passed a set of predefined quality rules. These rules qualified the data record into a harmonized, standardized, and semantically unified data structure which is defined by Catena-X. The Golden Record status is a prerequisite for each Business Partner data record to receive a valid Business Partner Number.

#### 1.5.2 LEGAL ENTITY

In general, a Legal Entity is a juridical person that has legal rights and duties related to contracts, agreements, and obligations. The term especially applies to any kind of organization (such as an enterprise or company, university, association, etc.) established under the law applicable to a country.

In Catena-X, a Legal Entity is a type of business partner representing a legally registered organization with its official registration information, such as legal name (including Legal Form, if registered), legal Address and Tax Number.

A Legal Entity has exactly one legal Address, but it is possible to specify additional Addresses that a Legal Entity owns. Thus, at least one Address is assigned to a Legal Entity. A Legal Entity can own Sites. Thus, many or no Sites are assigned to a Legal Entity.  A Legal Entity is uniquely identified by the BPNL.

#### 1.5.3 LEGAL FORM

Legal Form identifies the legal status of a legal person. The classification of Legal Forms is based on the company forms of the Trade Register and on the requirements of taxation legislation. The Legal Forms of enterprises and corporations are recorded in the Business Information System.

#### 1.5.4 ADDRESS

In general, an Address is a collection of information to describe a physical location, using, for example, a street name with a house number and/or a post office box as reference. In addition, an Address consists of several postal attributes, such as country, region (state), county, township, city, district, or postal code, which help deliver mail.

In Catena-X, an Address is a type of business partner representing the legal Address of a Legal Entity, and/or the main Address of a Site, or any additional Address of a Legal Entity or Site (such as different gates).

An Address is owned by a Legal Entity. Thus, exactly one Legal Entity is assigned to an Address. An Address can belong to a Site. Thus, one or no Site is assigned to an Address. An Address is uniquely identified by the Business Partner Number Address.

#### 1.5.5 BPNL BUSINESS PARTNER NUMBER LEGAL ENTITY

A BPNL represents and uniquely identifies a Legal Entity, which is defined by its legal name (including Legal Form, if registered), legal Address and Tax Number.

For further details on BPNLs please see standard 0010 Business Partner Number.

#### 1.5.6 BPNS BUSINESS PARTNER NUMBER SITE

A BPNS represents and uniquely identifies a Site, for example where a production plant, warehouse or office building is located.

For further details on BPNSs please see standard 0010 Business Partner Number .

#### 1.5.7 BUSINESS PARTNER NUMBER ADDRESS

A BPNA represents and uniquely identifies an (geographical) Address, which can be the legal Address of a Legal Entity, and/or the main Address of a Site, or any additional Address of a Legal Entity or Site (such as different gates) based on e.g., country, street and city.

It is important to note that only the BPNL must be used to uniquely identify a Legal Entity. Even in the case that the BPNA represents the legal Address of the Legal Entity, it shall not be used to uniquely identify the Legal Entity.

For further details on BPNAs please see standard 0010 Business Partner Number.

#### 1.5.8 RELATIONS

There are relations between a Legal Entity (BPNL), its Sites (BPNS), and its Addresses (BPNA).

For more information, please refer to the standard CX-0010 Business Partner Number.

#### 1.5.9 TAX NUMBER AND OTHER IDENTIFIER

The data quality rules are leveraging a variety of identifiers to cross check the correctness of Business Partner data record attributes. This includes Tax identifier issued by a legal authority like for example but not limited to EU VAT ID as well as other commercial Business Partner identification numbers such as for example Dun&Bradstreet-Number (DUNS®), Bureau van Dijk ID (BvD), Global Location Number (GLN) and others.

## 2 MAIN CONTENT

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

Please refer to the CX-0074 Business Partner Gate API standard for the respective data fields.  

### 2.1.3 FEEDBACK BASED ON DATA INPUT

Feedback on data upload MUST be provided indicating if an upload was successful or unsuccessful. It MUST be made clear which record was uploaded successfully or not. These checks are to be considered as a minimum and may be substituted by further responses. The following rules MUST be carried out:

Golden Record response quality checks:

- The reasons why an upload was not successful MUST be reported.
- Once the data has been uploaded, a response MAY be given indicating what percentage of the available data fields have not been populated.
- It MUST be made transparent if one or more of the mandatory fields are missing.
- If mandatory fields are missing, a self-explanatory error MUST be returned.
- If optional fields are missing, an information MUST be returned.

### 2.1.4 DUPLICATES CHECK

By uploading data via the BPDM Gate-API, duplicates may be shared and existent in the Gate persistence of the respective sharing member. There MUST not be any duplicates of the same BPN-type in the BPDM Pool, as this check and the subsequent linkage (See chapter 2.1.5 [Linkage](#215-linkage) for details) MUST be carried out by the service provider.

Therefore, the following rules MUST be carried out:

**Duplicates quality checks:**

- Duplicates MUST be recognized in the process, based on e.g., but not limited to, company name incl. Legal Form, Tax or Other Identifier, and identical Addresses.

- A de-duplication MUST be performed as part of the Golden Record process.
- As a result of the duplicate check, there MUST be no more duplicates in the CX pool[^1] per BPN-type. This applies for all different types of Business Partner Numbers (BPN)[^2]: Legal Entities (L), Sites (S) and Addresses (A).

### 2.1.5 LINKAGE

The linkage answers the following question: Does the current dataset (incoming from a sharing member) already exist in the Catena-X data pool?

If an uploaded record does not exist in the CX pool with an available BPN, a new BPN MUST be created and linked to the uploaded data record. Otherwise, the existing BPN MUST be used and linked to the uploaded data record.

The creation of the BPN MUST be performed according to Catena-X standard [CX-0010 Business Partner Number](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/5_BPDM/CX_-_0010_BUSINESS_PARTNER_NUMBER_PlatformCapabilityBPDM_v_1.0.1.pdf).

### 2.1.6 QUALITY CHECKS FOR LEGAL ENTITY, INCLUDING LEGAL FORM

The following quality checks are designed to verify that the shared Legal Entity, including the Legal Form, if registered, is correct.

The following rules MUST be carried out.

**Quality checks:** Correctness of Legal Entity

- It MUST be checked, if the Legal Entity incl. Legal Form, based on ISO 20275, is correct.

It MUST be checked if the Legal Form is valid for this country and formally correct written.

- Short and/or long form of the Legal Form MUST be identified and extracted.
- If the combination of a provided identifier, legal name and Address is found in the commercial register or equivalent official register, the type of this record MUST be set to BPNL.
- In addition, a BPNA MUST be created which receives the *IsLegalAddress* flag, if the duplicate check or linkage does not return a result.
- When a BPNA is uploaded, a relation to a L MUST be set.
- When a BPNS is uploaded, a relation to a L MUST be set.
- The field LegalEntity.LegalForm[^3] MUST be extracted from LegalNameParts according to ISO20275 and written into the LegalForm field.
- LegalEntity.LegalForm.technicalKey MUST correspond to ISO20275 ELF code.

### 2.1.7 QUALITY CHECKS FOR ADDRESSES

The following quality checks are designed to verify that the shared Addresses are correct. The following checks MUST therefore be carried out:

**Address validation quality checks:**

- The country code MUST be checked based on ISO 3166-1
- The region code MUST be checked based on ISO 3166-2
- It MUST be checked that the postal code is valid for the country and fits to the city
- It MUST be checked that the city exists in this country and that it fits to postal code

### 2.1.8 QUALITY CHECKS FOR TAX NUMBER AND OTHER IDENTIFIER

The following quality checks are designed to verify that the shared Tax Number or Other Identifier are correct. The following checks MUST be carried out:

**Tax Number and Other Identifier quality checks:**

- It MUST be checked that the Tax Number is correct according to national registers and their syntax.
- It MUST be checked that the format of the tax jurisdiction code is correct.
- It MUST be checked that the format of Other Identifier (such as, but not limited to DUNS, LEI, EIN, UBI, GLN) is valid.
- The consistency between Canadian Business Number and GST MUST be checked (Good and Service Tax Number)
- The issuing body MUST be filled in, to be able to correctly assign the responsible commercial register when data records are uploaded for a Legal Entity including the corresponding commercial register number.
  This quality check applies to Tax Numbers assigned to a specific commercial register or similar, such as, but not limited to, the German Handelsregisternummer.

### 2.1.9 GOLDEN RECORD OUTPUT REQUIREMENTS

The requirements described below relate to the expected outcome after the Golden Record process has been carried out. There are country specific rules and (mandatory/optional) attributes. Depending on the country the e.g., type of identifier and/or the format, can be different.

Below is a list of countries for which a rule has been defined. If a rule says, "Applies to all countries", the full list in Table 1 MUST be applied. Exceptions will be specified.

There is also a rule-specific list of data fields in which the result MUST be written. This will be stated in column Attribute (Date Model). For details on the data model, please see CX 0012 Business Partner Pool API and CX 0074 Business Partner Gate API.

***Table 1: Country List based on ISO 3166-1***

|AD|CL|GE|IS|MC|PL|TJ|
| - | - | - | - | - | - | - |
|AE|CN|GH|IT|MD|PO|TM|
|AL|CO|GI|JM|ME|PY|TN|
|AM|CR|GP|JP|MK|QA|TR|
|AR|CU|GR|KE|MT|RO|TT|
|AT|CY|GT|KG|MX|RS|TW|
|AU|CZ|HK|KK|MY|RU|UA|
|AZ|DE|HN|KR|NA|SA|UK\*|
|BA|DK|HR|KW|NI|SE|US\*\*|
|BE|DZ|HT|KZ|NL|SG|UY|
|BG|EC|HU|LB|NO|SI|UZ|
|BO|EE|ID|LK|NZ|SK|VA|
|BR|EG|IE|LT|PA|SM|VE|
|BY|ES|IL|LU|PE|SN|VN|
|CA|FI|IN|LV|PH|SV|XK|
|CH\*\*\*|FR|IR|MA|PK|TH|ZA|
|||||||ZW|

\* UK includes North Ireland, GG, JE

\*\* US includes PR

\*\*\* CH includes LI

The following information rules MUST apply:

- For countries listed below as mandatory, an error message MUST be given if the rule could not be applied.
- For countries listed below as optional, an info message MUST be given if the rule could not be applied.
- A rule is not relevant for a country if it’s not listed as mandatory nor optional. No specific response is expected in this case.

|**Business Rule**|**Attribute** **(Data Model)**|**Affected Country**|
| - | - | - |
|Registered name (Legal Entity incl. Legal Form, if registered) MUST be set.|- Legal Name Parts <br /> - Legal Short Name <br />- Legal Form |**Mandatory for:** <br /> Applies to all countries as defined in Table 1.|
|Tax Number MUST be set.|- LegalEntity.LegalEntityIdentifier. <br />Type.Name <br /> - LegalEntity.LegalEntityIdentifier.<br /> Type.TechnicalKey|**Mandatory for:** <br /> Applies to all countries as defined in Table 1. <br />**Exception,** neither mandatory nor optional for:CR, CU, IR, KW, LB, VA. |
|External identifier – number MUST be set.|- LegalEntity.SharingMemberExternalID|**Mandatory for:** <br /> Applies to all countries as defined in Table 1.|
|External identifier – number|- LegalEntityIdentifier.Type.Name|**Optional for:** Applies to all countries as defined in Table 1.|
|External identifier - type |- LegalEntityIdentifier.Type.TechnicalKey|**Optional for:** <br /> Applies to all countries as defined in Table 1.|
|Country MUST be set|- PostalAddress.Country.Name <br />- PostalAddress.Country.CountryCode|**Mandatory for:** <br /> Applies to all countries as defined in Table 1.**Exception**, neither mandatory nor optional: CN |
|Region, state MUST be set|- PostalAddress.AdministrativeAreaLevel1.Name<br /> -PostalAddress.AdministrativeAreaLevel1.RegionCode|**Mandatory for:** <br />BR, CA, CZ, IN, MX, RU, US(PR)<br />**Optional for:**  <br />AD, AL, AM, AR, AT, AU, AZ, BA, BE, BG, BO, BY, CH/LI, CL, CO, CR, CU, CY, DE, DK, DZ, EC, EE, ES, FI, FR, GE, GI, GR, GT, HN, HR, HT, HU, IE, IS, IT, JM, JP, KG, KK, KZ, LB, LT, LU, LV, MC, MD, ME, MK, MT, MY, NI, NL, NO, PA, PE, PH, PL, PO, PT, PY, RO, RS, SE, SI, SK, SM, SV, TH, TJ, TM, TR, TT, UA, UK/JE/GG, UY, UZ, VA, VE,<br /> **Neither mandatory nor optional:**<br />AE, CN, EG, GH, GP, HK, ID, IR, IL, KE, KR, KW, MA, NA, NZ, PK, QA, SA, SN, SG, ZA, LK, TW, TN, VN, XK, ZA, ZW|
|Secondary region (county) - Sub-province MUST be set|- PostalAddress.AdministrativeAreaLevel2|**Optional for**:<br />Applies to all countries as defined in Table 1.<br />**Exception,** mandatory for:RU<br />**Exception**, neither mandatory nor optional for: <br />AE, DZ, AU, EG, GH, GP, HK, IN, ID, IR, IL, JP, KE, KR, KW, MY, MA, NA, NZ, PK, PH, QA, SA, SN, SG, ZA, LK, TW, TH, TN, AE, VN, XK, ZW|
|Tertiary region (township) - Sub-province 2MUST be set|- PostalAddress.AdministrativeAreaLevel3|**Optional for**:<br />Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional:<br />AE, DZ, AU, EG, GH, GP, HK, ID, IR, IL, JP, KE, KK, KW, MY, MA, NA, NZ, PK, PH, QA, SA, SN, SG, ZA, LK, TW, TH, TN, AE, VN, XK, ZW|
|Sub-province 3 MUST be set|- PostalAddress.AdministrativeAreaLevel4|**Optional for**:<br />Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional for:<br />AE, DZ, AU, EG, GH, GP, HK, ID, IR, IL, JP, KE, KK, KW, MY, MA, NA, NZ, PK, PH, QA, SA, SN, SG, ZA, LK, TW, TH, TN, AE, VN, XK, ZW|
|District/Sub-locality MUST be set|- PostalAddress.PostalAddress.DistrictLevel1|**Optional for**:<br />Applies to all countries as defined in Table 1. <br />**Exception**, neither mandatory nor optional for:<br />AE, DZ, AU, GH, GP, HK, ID, IR, IL, KE, KR, KK, KW, MY, NA, NZ, PH, QA, SN, SG, ZA, LK, AE, VN, XK, ZW, |
|Sub-locality 2 MUST be set |- PostalAddress.DistrictLevel2|**Optional for:**<br />Applies to all countries as defined in Table 1.<br />**Exception,** neither mandatory nor optional for:<br />AE, DZ, AU, CN, EG, GH, GP, HK, IR, IL, JP, KE, KR, KK, KW, MY, MA, NA, NZ, PK, PH, QA, SA, SN, SG, ZA, LK, TW, TH, TN, AE, VN, XK. ZW, |
|City MUST be set |- PostalAddress.City|**Mandatory for:** <br />Applies to all countries as defined in Table 1.|
|Postal code MUST be set|- PostalAddress.PostCode|**Mandatory for:** <br /> Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional for:<br /> BO, HK, JM, LB, QA, AE, ZW|
|Street MUST be set|- PostalAddress.Street.StreetName|**Mandatory for:** <br />Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional for:<br /> QA, AE|
|House number MUST be set|- PostalAddress.Street.HouseNumber|**Optional for:**<br /> Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional:<br />AE, GH, GP, IR, KE, KK, KW, LB, NA, QA, SA, SN, TW, ZW|
|AlternativePostalAddress|- DeliveryServiceType.Name<br />- DeliveryServiceType.TechnicalKey|**Optional for:**<br />Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional for:<br />AE, AU, CN, DZ, EG, GH, GP, HK, ID, IL, IN, IR, JP, KE, KK, KR, KW, LB, LK, MA, MY, NA, NZ, PH, PK, QA, SA, SG, SN, TH, TN, TW, XK, ZA, ZW|
|AlternativePostalAddress|- DeliveryServiceNumber|**Optional for:**<br />Applies to all countries as defined in Table 1.<br />**Exception**, neither mandatory nor optional:<br />AE, AU, CN, DZ, EG, GH, GP, HK, ID, IL, IN, IR, JP, KE, KK, KR, KW, LB, LK, MA, MY, NA, NZ, PH, PK, QA, SA, SG, SN, TH, TN, TW, XK, ZA, ZW|
|Business Partner Type (Legal Entity (L), Site (S), (logistical) Address (A))|- Not available like this in the data model|**Mandatory for:**<br />Applies to all countries as defined in Table 1.|
|"BPNA belongs to Legal Entity (BPNL)"|- Not available like this in the data model|**Mandatory for:**<br />Applies to all countries as defined in Table 1.|

### 2.2 OUT OF SCOPE

This standardization document does not describe the process and functionality to achieve the required results. Each operational provider is free to define the appropriate execution logic to achieve the result as defined in this standard.  

### 2.3 DATA QUALITY RULE ACCESSIBILITY

The quality checks as described in this standard are using the input based on the Business Partner Gate API with the respective endpoints. For further details please refer to Catena-X standard CX-0074 Business Partner Gate API.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

Intentionally left blank.

### 3.2 NON-NORMATIVE REFERENCES

*This section is non-normative.*

- [BPDM Catena-X Website](https://catena-x.net/en/offers/bpdm)
- CX – 0010 Business Partner Number
- CX – 0012 Business Partner Pool API
- CX – 0074 Business Partner Gate API

### 3.3 REFERENCE IMPLEMENTATIONS

*This section is non-normative.*

## ANNEXES

### FIGURES

*This section is non-normative.*

Intentionally left blank.

### TABLES

*This section is non-normative.*

Intentionally left blank.

[^1]: For details related to the Pool API, please see standard 0012.

[^2]: For details related to the Business Partner number and the different types, please see standard 0010.

[^3]: For details on the data model and data fields please refer to the 0074 Business Partner Gate API standard.

[^4]: https://catena-x.net/fileadmin/user_upload/Vereinsdokumente/Catena-X_IP_Regelwerk_IP_Regulations.pdf

[^5]: https://catena-x.net/de/standardisierung/catena-x-einfuehren-umsetzen/standardisierung/standard-library

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
