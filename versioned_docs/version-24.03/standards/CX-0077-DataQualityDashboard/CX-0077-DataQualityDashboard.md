# CX-0077 Data Quality Dashboard v1.1.0

## ABSTRACT

The Data Quality Dashboard (DQD) has to rely on a set of clearly defined quality rules
which is the basis of the Golden Record Process and secure the syntactical and logical correctness of mission critical business partner data attributes. To secure global consistency the DQD rule relies on defined ISO norms as defined in this document- – see Standardization Document CX-0076 Version 1.0.0, Golden Record EndtoEnd Requirements Standard  Version 1.0.0 or higher. DQD has to capture at least 117 countries based on ISO 3166-1. DQD has to validate BP data records in the Inbound and Outbound Persistence of the related Catena-X (CX) Member who licensed DQD. Each DQD rule has to validate the syntactical correctness of defined mandatory, regulatory required and optional BP data record attributes related towards the specific regulations by the country authorized institutions. DQD furthermore has to rely on the following Standards: ISO 3166-1, ISO 20275, ISO 01-140-10, ISO 8601, ISO/IEC 8859-1.

DQD has to visualize the outcome of the data quality rules via a dashboard.

DQD uses the Gate API CX-0074_v1.1.0 or higher and the Pool API CX-0012_v1.0.0
or higher for pulling BP data records. DQD is a client/ server cloud application which contains a Web Client and a Cloud Server Application.
DQD has to contain a user and authorization management capability aligned with the CX Portal and Marketplace user management. DQD intends to support the EDC Asset function capability and has to be available in English and German language.

## FOR WHOM IS THE STANDARD DESIGNED

The standard enables software and service companies to develop business partner master data quality dashboard applications including accessibility of external 3rd party data sources.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

> The standard 1.1.0 extended the former version by adding the chapter DQD API.

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following audience:

- Catena-X certified Operational Companies acting as:
  - Core Service Provider

This document is focusing on the functionality of the Data Quality Dashboard (DQD) as a screening and monitoring tool of CX Member business partner data in the Inbound Persistence based on the following capabilities:

1. Data Profiling which is based on the analysis and evaluation of data content versus the CX business partner standards defined in CX-0076 Golden Record EndtoEnd Requirements Standard Version 1.0.0 or higher
2. Visualization of BP data quality via a dashboard
3. Evaluation of the data quality results including recommendations for syntactical or logical error handling

DQD has to be a Value Added Services (VAS) application for Data Provider and Consumer to monitor the data quality via a dashboard of BP data records in the Inbound Persistence.

DQD rules have to be focused on the analysis of BP data record quality on a syntactical or content basis if possible. DQD does not focus on validating semantical correctness or data enrichment services. Those services are part of the Golden Record Process.

The description of the Golden Record EndtoEnd Requirements Standard, the Gate API and the Pool API are stored in the standard library of Catena-X: https://catena-x.net/de/standard-library.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The Data Quality Dashboard has to be a screening tool of the record process, rules, methodology and allocation of the BPN ID (Business Partner Number Identification) for Legal, Site and Address data records. DQD has to focus its validation and monitoring capabilities on all mandatory, regulatory required and optional business mission critical BP data record attributes to enable the CX Member to validate any impact on logistical, financially or communication relevant processes between the CX Member and his business partner. Furthermore, this transparency has to support the CX Member by improving his business partner related due diligence processes.  The Data Quality Dashboard has to contain the capability to store the outcome of DQD results for at least 3 years and has to enable the definition of CX member specific data quality KPIs (Key Performance Indicator) and mapping against actual quality results.
DQD has to contain tiles which visualize the results with filter functions by time, region, country, BPN ID type, BP Roles, DQD status and business partner role.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The keywords MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

To prove conformity with this standard providing a self-audited, stated and signed document that the syntax of the number is established is needed.

### 1.4 EXAMPLES

Intentionally left blank

### 1.5 TERMINOLOGY

> *This section is normative*

The main DQD rule methodologies are described below:

#### Legal Form

The DQD rules for legal form have to validate the correct usage of legal forms by the country list defined under Point 2.2. The rules have to rely on ISO 20275 (valid legal forms) in combination with ISO 3166-1 (valid country codes). The rules have to be based on the transliterated version and transliterated abbreviations of legal forms based on ISO 01-140-10.

The DQD rules have to contain the capability to identify variations in the representation of legal forms by applying appropriate technologies to identify synonymous terms.
By missing terms via the ISO standards DQD has to complement the legal forms especially abbreviations as needed.

#### Legal Name

The DQD rules have to identify the correct Legal Name of a Legal Entity. This includes the capability to identify synonymous terms and abbreviations and convert them into the correct Legal Name as registered via authorized country registry.

#### Tax Identification

The DQD rules for tax identification have to be capable of validating the following Tax IDs by defined country and subregion:

- Company Tax ID
- VAT ID
- Tax Jurisdiction Code

The DQD rules for the **Company Tax Identification** have to validate the correct syntactical structure of the Company Tax ID defined by the related authorized country tax departments.
Additionally, to the Company Tax ID, DQD rules have to validate the syntactical correctness of the **VAT ID** by country.

In selected countries a **Tax Jurisdiction Code** is required. The DQD rules have to  validate the syntactical correctness by country.

#### Address

The DQD rules have to incorporate all specific country rules at a minimum as defined by the country list under Point 2.2 This includes the correctness of country, city by country, postal codes and optional the geographical coordinates based on ISO 6709 and WGS84 (World Geodetic System 1984).  

#### Relations

The DQD rules have to validate the correctness of relations between the Legal, Site and Address entities as defined by the BP data model.

#### Identifier

To provide defined quality results of the DQD rules, they have to leverage publicly available BP Identifier to cross-check the correctness of BP data record attributes.

## 2 MAIN CONTENT

> *This section is normative*

DQD has to contain the following dashboard-based functionalities:

Visualization of Inbound Persistence BP data records by defined DQD rule results:

1. Filter capabilities of BP data results by time, country, DQD status, BP role, DQD rule.
2. DQD rule statistics
3. BP data record statistics
4. Dashboard setting capabilities

NPM package: [https://www.npmjs.com/package/@catena-x/portal-shared-components/v/2.1.2](https://www.npmjs.com/package/@catena-x/portal-shared-components/v/2.1.2)

Storybook: [https://eclipse-tractusx.github.io/portal-shared-components/?path=/docs/chip--docs](https://eclipse-tractusx.github.io/portal-shared-components/?path=/docs/chip--docs)

The Data Quality Dashboard (DQD) MUST perform the validation of a BP data record which was uploaded into the CX Member Inbound Persistence. The DQD rule set and visualization of business partner data MUST be based at a minimum on the standards defined in CX-0010 Version 2.0.0 Business Partner Number, CX-0074 Version 1.1.0 Business Partner Gate API, CX-0012 Business Partner Pool API Version 2.1.0 include CX-0076 Version 1.0.0 Golden Record EndtoEnd Requirements Standard current versions or higher.

## Preconditions and Dependencies

To run the DQD with/and/on? the BPDM, Gate API and Pool API SHOULD be set up: https://github.com/eclipse-tractusx/bpdm/blob/main/README.md

## DQD Specifications

The DQD rule set MUST use the following BP data record attributes
as defined in CX-0074 Version 1.1.0 or higher:

1. Legal Entity which contains the following attributes
   1. External ID
   2. BPNL, BPNS, BPNA
   3. Legal Name Parts
   4. Legal Form
   5. Classifications
   6. Legal Address
   7. Created at
   8. Updated at
2. Legal Entity Identifier
   1. Value
   2. Type
   3. Issuing Body
3. Site  
4. Address  
5. Identifier Type

## DQD usage of Norms

The DQD rule set MUST us the following ISO Norms:

**ISO Norm 20275**

The DQD rule set MUST use the content of the ISO 20275 to validate the correctness of legal names in long form and/or abbreviation in a transliterated form.

[ISO 20275: Code-Liste für Rechtsträgerformen - GLEIF-Blogbeiträge - Newsroom & Medien – GLEIF](https://www.gleif.org/de/newsroom/blog/iso-20275-entity-legal-forms-code-list)

**ISO 3166-1**

The DQD rule set** MUST use the ISO 3166-1 related codes for at least 117 countries as listed below:

***Country List based on ISO 3166-1***  

|AD |CL |GE |IS |MC |PL |TJ |
| :- | :- | :- | :- | :- | :- | :- |
|AE |CN |GH |IT |MD |PO |TM |
|AL |CO |GI |JM |ME |PY |TN |
|AM |CR |GP |JP |MK |QA |TR |
|AR |CU |GR |KE |MT |RO |TT |
|AT |CY |GT |KG |MX |RS |TW |
|AU |CZ |HK |KK |MY |RU |UA |
|AZ |DE |HN |KR |NA |SA |UK |
|BA |DK |HR |KW |NI |SE |US |
|BE |DZ |HT |KZ |NL |SG |UY |
|BG |EC |HU |LB |NO |SI |UZ |
|BO |EE |ID |LK |NZ |SK |VA |
|BR |EG |IE |LT |PA |SM |VE |
|BY |ES |IL |LU |PE |SN |VN |
|CA |FI |IN |LV |PH |SV |XK |
|CH |FR |IR |MA |PK |TH |ZA |
| | | | | | |ZW |

[ISO - ISO 3166 — Country Codes](https://www.iso.org/iso-3166-country-codes.html)

## DQD usage of External Data Sources

The DQD rule set MUST use defined external data sources supporting the rule set as needed in validating the correctness of CX Member business partner data records or providing recommendation of data enrichments.

The following external data sources are mandatory:

1. Commercial Register by defined countries based on ISO 3166-1 country list as defined in Chapter 2.3
2. VAT ID provided by the European Tax Authorities or local tax authorities based on ISO 3166-1 country list as defined in Chapter 2.3
3. Postal Code by country authorities
4. Legal Name and Legal Form owned by local authorities and based on ISO 20275 standard in long form and short form in transliterated version
5. Address details based on local authorities related to the country list based on 3166-2 as defined in Chapter 2.3
6. GEO data based on WGS84 standard
7. Subregion Code based on ISO 3166-2 standard

## DQD Results

The DQD rule set MUST provide for each BP data record a result in the DQD Dashboard and in a DQD Logfile.

## DQD Dashboard

The DQD Dashboard MUST provide the capabilities:

1. Visualization of Business Partner Data records as defined by the Golden Record Process based on the CX-0076.
1. DQD provides visibility by defined user roles. They are mapped to the CX Portal user roles defined via the App Provider function.
1. DQD contains the visibility of BP data by user role and user based filter functions. The BP data can get filtered by:
   1. Year, quarter or month
   2. Country or Region as defined by ISO 3166-1 and ISO 3166-2
   3. By BP type as customer or supplier
   4. By BP data record type BPNL, BPNS or BPNA as defined via CX-0010 Standard.
1. Visualization of Data Quality Screening results based on DQD KPIs and related achievements in percentage. This function enables the setting of BP data quality KPIs by CX Member
1. DQD contains a dark and light version option
1. DQD is available in German and English language
1. DQD contains a help function
1. DQD contains the capability to change layout and view setting by user
1. DQD contains an admin screen which enables user specific settings like layout and view settings, KPI target and threshold settings

The DQD dashboard design relies on the Catena-X style guide. See details under:

- Library: https://www.npmjs.com/package/@catena-x/portal-shared-components
- Docu: https://eclipse-tractusx.github.io/portal-shared-components/?path=/docs/chip--docs

NPM package: [https://www.npmjs.com/package/@catena-x/portal-shared-components/v/2.1.2](https://www.npmjs.com/package/@catena-x/portal-shared-components/v/2.1.2)

Storybook: [https://eclipse-tractusx.github.io/portal-shared-components/?path=/docs/chip--docs](https://eclipse-tractusx.github.io/portal-shared-components/?path=/docs/chip--docs)

## DQD API

### DQD Data Model

The DQD Data Model as defined in the Annex chapter contains all BP and DQD dashboard attributes needed to perform
the DQD screening. The general length of a data attribute is 255 bytes.

### API Endpoints and Resources

The resources MUST use the well-known HTTP request methods for CRU(D) operations:

- POST MUST be used for create requests
- PUT MUST be used for update requests
- GET MUST be used for read requests

POST MAY also be used for read requests, if input is not given by parameters but rather by an HTTP body to bypass maximum URL length. PUT MAY also be used for upsert requests (create or update) if this is required. A state (active / inactive) at each entity MUST be used for a soft delete, so that the request method DELETE SHALL NOT be used. Other HTTP request methods SHALL NOT be used, including PATCH.

Uploading and downloading data to/from the DQD API MUST follow a staging concept with two stages, so that consumers of the DQD API can compare what they have uploaded  into the input stage against what kind of DQD rule results and status code was provided for each business partner data in the output stage. The following controllers MUST distinguish between an input and an output stage.

The DQD architecture describes in which intercommunication the DQD API is used.

### Data Quality Controller

The data quality controller MUST allow to create, update, or read (search / return)  business partner data records related to an External Identifier or BPN ID in the input and output stage. It MUST have the following resources:

|Business partner Data Controller Resources |Description |
| :-: | :-: |
|PUT/api/dqd/input/business partner data |Creates business partner data record or updates existing bank data record in the input stage. |
|GET/api/dqd/output/business partner record|Returns business partner data record from the output stage by different search parameters |
|GET/api/dqd/input/business partner records|Returns business partner data record by different search parameters from the input stage. |

### Data Quality Sharing State Controller

The sharing state controller MUST allow to create, update, or read sharing state entries of business partner data records.  The sharing state controller MUST have the following resources:

| Sharing State Resources | Description |
| :-: | :-: |
|GET/api/dqd/sharing-state |Returns sharing states of business partner data filtered by legal name, legal form, External Identifier, BPN ID and type, country and status code |
|PUT/api/dqd/sharing-state |Creates or updates a sharing state of a business partner data record |

### EDC Data Asset Structure

For each read and write (create and update) resource in the DQD API input stage there MUST be a dedicated EDC data asset definition. For each read resource in the DQD API output stage there MUST be a dedicated EDC data asset definition. Write resources (create and update) of the DQD API output stage MUST not be called from outside of the Catena-X operating environment. Consequently, EDC data assets for them are NOT REQUIRED.
The DQD API MUST support the EDC functionality based on Sovereign Data Exchange, 2.0.1, CX - 0018 Eclipse Data Space Connector (EDC).

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

[Business Partner Pool API](https://github.com/eclipse-tractusx/bpdm/tree/main/bpdm-pool-api/src/main/kotlin/org/eclipse/tractusx/bpdm/pool/api)

[Business Partner Gate API](https://github.com/eclipse-tractusx/bpdm/tree/main/bpdm-gate-api/src/main/kotlin/org/eclipse/tractusx/bpdm/gate/api)

- ISO 3166-1 for referencing on country codes
- ISO 3166-2 for referencing on sub-region codes
- ISO 20275 for referencing on global valid legal forms
- ISO 6709 and World Geodetic Sytstem 1984 (WGS84) for referencing on Geo Data
- ISO 01-140-10 for transliteration of non-latin characters in to latin characters
- ISO 8601 for referencing to the international standard of the date format
- ISO/IEC 8859-1 for referencing to the International standard of the Multinational Character Set

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

Intentionally left blank.

[BPDM Catena-X Website](https://catena-x.net/en/offers-standards/bpdm)

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

Intentionally left blank.

## ANNEXES

### DQD Data Model

| DQ   Dashboard Data Model - Field name | Description                                                                                                                                                                     | Type         |
|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| Actual DQ KPI Percentage               | The tile shows the actual data quality KPI of the sharing member   in the persistence. The KPI takes the following DQ issues into account:   ERRORS                             | Percentage   |
| BP Type                                | BP type represents the BP types: Supplier, One Time Supplier,   Customer, One Time Supplier, Business Partner as defined in the CX BP Data   Model                              | Enum         |
| BPN Issuing                            | A number which contains the CX Member BP data records which   received a valid and unique BPN ID                                                                                | Numeric      |
| Business Partner Classification        | The term contains the BP classification Legal, Site and Address                                                                                                                 | Enum         |
| Country                                | Country represents the countries based on ISO 3166-1                                                                                                                            | Alphanumeric |
| DQ KPI over Time Period                | The chart shows the Target DQ KPI and the Actual DQ KPI values   per month over the filtered time period as a line chart                                                        | Numeric      |
| DQ Rules                               | Contain the total number of rules used to perform the screening   process of business partner data                                                                              | Numeric      |
| DQ Status                              | DQ Status contains an array with all DQ status codes and   reference to the appropriate DQ rules                                                                                | Alphanumeric |
| DQ Target KPI CX Member Percentage     | The tile shows the target data quality KPI of the sharing member   in the persistence. The KPI can be defined by each sharing member   individually (based on their own goals). | Percentage   |
| Month                                  | Defines a specific month                                                                                                                                                        | Alphanumeric |
| Number of Data Records                 | Contains the total number of BP master data in the CX Member   Inbound Persistence, in the CX BP Pool and the number of overlap BP data   records                               | Numeric      |
| PostalAddress.Country.CountryCode      | Data field represents the country code as defined by ISO 3166-1                                                                                                                 | Alphanumeric |
| PostalAddress.Country.Name             | Country name represents the name based on ISO 3166-1                                                                                                                            | Alphanumeric |
| Region                                 | Region contains selected countries and subregions based on ISO   3166-1 and 3166-2 by the CX Member                                                                             | String Array |
| Subregion                              | Subregions represents all subregions or dependent states based   on ISO 3166-2                                                                                                  | Alphanumeric |
| Time period                            | The tile shows the time period for which the data records should   be displayed and uses the data fields Year and Month.                                                        | Numeric      |
| Total DQ Error Percentage              | The tile shows the percentage value of all DQ errors of all BP   data records of the sharing member in the persistence.                                                         | Percentage   |
| Total DQ Errors                        | The   tile shows the total number of DQ errors of all BP data records of the   sharing member in the persistence.                                                               | Numeric      |
| Total DQ Warning Percentage            | The tile shows the percentage value of all DQ errors of all BP   data records of the sharing member in the persistence.                                                         | Percentage   |
| Total DQ Warnings                      | The tile shows the total number of DQ errors of all BP data   records of the sharing member in the persistence.                                                                 | Numeric      |
| Year                                   | Defines the selected year or duration of up to 3 years in the   past                                                                                                            | Numeric      |

### FIGURES

> *This section is non-normative*

Intentionally left blank.

### TABLES

> *This section is non-normative*

Intentionally left blank.

[^1]: https://catena-x.net/fileadmin/user_upload/Vereinsdokumente/Catena-X_IP_Regelwerk_IP_Regulations.pdf
[^2]: https://catena-x.net/de/standardisierung/catena-x-einfuehren-umsetzen/standardisierung/standard-library

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
