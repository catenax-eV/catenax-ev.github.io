# CX-0116 Sanction Party Watchlist Dashboard v1.0.0

## ABSTRACT

Doing business with companies (and affiliates) which are sanctioned or affected by embargos can result in fines and reputational damage. However, identification of sanctioned partners is difficult due to the vast amount of different sanction lists from several countries and authorities. Even manual checks are difficult due to a lack of high-quality data provisioned by the authorities. With Sanction and Watchlist Monitoring, data synchronized with a data mirror is monitored continuously against the latest sanction and watch lists. The Sanction Party Watchlist Dashboard (SWD) has to provide a summary on potential matches. The matching against sanction and watch lists have to be activated in the company data lookup, so data maintainers are already notified during creation or update workflows. The monitoring scope has to be extended to political exposed persons (so called PEPs). SWD has to visualize the outcome of the sanction watchlist monitoring rules via a dashboard.

SWD has to use the Gate API CX-0074\_v1.1.0 or higher for pulling BP data records. SWD has to be a client/ server cloud application which contains a Web Client and a Cloud Server Application.
SWD has to contain a user and authorization management capability aligned with the CX Portal and Marketplace user management. SWD has to contain an API and has to be  available in English and German language

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

*This section is non-normative.*

This standard is relevant for the following audience:

- Catena-X certified Operational Companies acting as:
  - Core Service Provider
  - Business Application Provider
  - Data Provider and Consumer

Screening and monitoring of BP data records to global, regional or country specific Sanction Party lists and regulations is not part of the Golden Record qualification process. Therefore has to offer SWD an optional incremental service of screening BP master data of an CX Member in his Inbound Persistence. SWD has to provide results and status codes which has to enable the navigation of CX Member and Golden Record related process steps.

SWD has to be a Value Added Services Solution and has to get accessed via the CX Marketplace.

SWD MUST rely on CX-0010 Business Partner Number Version 2.0.0 or higher. The Gate API MUST be implemented as defined in CX-0074 Version 1.1.0 or higher based on the OpenAPI 3.0.1 specification or higher. Access to the Catena-X standards is available via Catena-X's standard library at https://catena-x.net/de/standard-library.

### 1.2 CONTEXT

*This section is non-normative.*

This document is focusing on the functionality of the Sanction Party Watchlist Dashboard (SWD) which has to be a screening and monitoring tool of CX Member BP data records in the Inbound Persistence based on the following capabilities:

1. Continuously monitoring BP data records of a CX Member based on a unified rule methodology of global available sanction party watchlists
2. Individual selection of sanction party watchlists
3. Matching Score Weighting customization
4. Sanction Watchlist results by BP data record, results status code and other filter functions
5. Customizable dashboard functionalities and role and authorization management
6. SWD API functionalities for accessing SWD results

### 1.3 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

[https://datatracker.ietf.org/doc/html/bcp14](https://datatracker.ietf.org/doc/html/bcp14)

[Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words](https://www.w3.org/TR/did-core/#bib-rfc8174)

### 1.4 PROOF OF CONFORMITY

*This section is non-normative.*

All participants and their solutions will need to proove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

When implementing the API defined in this standard, proof of conformity must be provided by the following deliverables:

- An OpenAPI specification defining the relevant resources for this standard
- Examples of a data assets

### 1.5 TERMINOLOGY OF SANCTION WATCHLIST DASHBOARD COMPONENTS

*This section is non-normative.*

The main SWD rule methodologies are described below:

#### Sanction Party List Accessibility Unification

SWD has to contain a functionality to unify the accessibility of defined Sanction Party Watchlists by defined sanction party relevant attributes into the SWD data model structure. It has to be capable to integrate sanction party data from APIs, JSON, XML, HTML and other data interface structures.

#### BP Data Model Enrichment

SWD has to enrich the BP data model by defined and relevant sanction party watchlist data attributes and has to enable a unified and combined usage based on the BPN ID as defined in CX-0010 Business Partner Number Standard.

#### Sanction Party Watchlist Match

The SWD rules have to provide results which are classified into the Match, Partial Match and
No Match.

#### Matching Score Percentage

The CX Member should be able to individually define the relevance of selected Sanction Party Watchlists and ratings. Based on the rating specific weighting percentages the Matching Classifications can get customized in the range of 0 – 100%.

#### Business Partner

SWD has to be based on the BP data model structure as defined in CX-0010 Business Partner Number and CX-0074 Business Partner Gate API on always the latest versions – see link in Chapter 1.1.

#### BP Shareholder Relation Risk Curation

SWD has to contain the capability to identify relations between sanctioned individuals
acting as beneficial owner/shareholders of Catena-X BPDM relevant Business Partner legal entities (BPNL – Business Partner Number Legal).
The related findings have to be presented via appropriate hit scores.

#### Incident Reporting

SWD has to contain the functionality to set CX member specific Incident KPIs. The appropriate results have to be visible via the Sanction Party Watchlist Dashboard or via an API.

#### Inbound Persistence

The Inbound Persistence contains the BP data records which were send by a CX Member for
validation and screening via the Gate API as defined in CX-0074.

### 1.6 OUT OF SCOPE

The SWD product does not contain the functionality to correct and/or enrich a business partner data record.

### 1.7 SANCTION PARTY WATCHLIST DASHBOARD

SWD has to contain the following dashboard-based functionalities:

1. Visualization of sanctioned or not sanctioned CX Member BP data records based on an Incident KPI and matching classification
2. Visualization of BP data records based on Identifier, sanction party list, date of incident, time, country, optional by shareholder or beneficial owner related to a BP
3. Search functionalities
4. Dashboard layout and view settings
5. Sanction Watchlist Weighting settings
6. Language setting for German and English

The Sanction Party Watchlist Dashboard design relies on the Catena-X style guide. See details under confluence.catena-x.net/display/CORE/CX+Style+Guide

SWD does contain an own API.

## 2 SANCTION WATCHLIST DASHBOARD (NORMATIVE)

The Sanction Party Watchlist Dashboard (SWD) MUST be a screening and monitoring tool of BP data records based on the following capabilities.

SWD MUST provide the following capabilities:

1. Continuously monitoring BP data records of a CX Member based on a unified rule methodology of global available sanction party watchlists

2. Individual selection of sanction party watchlists

3. Sanction Party Watchlist Matching Score Weighting customization

4. Sanction Watchlist results by BP data record, results status code and other filter functions

5. Customizable dashboard functionalities (language, chart type)
6. Role and authorization management

7. Capability to identify Sanction Party Watchlist Incidents by BP legal entities (BPNL)
8. Capability optional to identify relations between sanctioned individuals acting as beneficial owners/shareholders of Business Partner legal entities (BPNL)
9. API enabling CX Member accessing SWD results

The SWD rule set and visualization of business partner data MUST be based on the standards defined in CX-0010 Version 1.0.0 Business Partner Number, CX-0074 Version 1.1.0 Business Partner Gate API.

### 2.1 PRECONDITIONS AND DEPENDENCIES

To run the SWD the BP Number, Gate API SHOULD be set up:
https://github.com/eclipse-tractusx/bpdm/blob/main/README.md

### 2.2 SWD SPECIFICATIONS

The SWD rule set MUST use the following Business Partner data attributes:

1. Legal Entity as defined by CX-0074 Version 1.1.0 or higher which contains the following attributes
    - External ID
    - BPNL - optional
    - Legal Name Parts
    - BP Type - optional
    - Legal Address

### 2.3 SWD USAGE OF NORMS

The SWD the rule set MUST us the following ISO Norms:

#### ISO 3166-1

SWD MUST use the ISO Norm 3166-1 related codes for at least 117 countries as listed below

***Country List based on ISO 3166-1***  

|AD |CL |GE |IS |MC |PL |TJ |
| - | - | - | - | - | - | - |
|AE |CN |GH |IT |MD |PO |TM |
|AL |CO |GI |JM |ME |PY |TN |
|AM |CR |GP |JP |MK |QA |TR |
|AR |CU |GR |KE |MT |RO |TT |
|AT |CY |GT |KG |MX |RS |TW |
|AU |CZ |HK |KK |MY |RU |UA |
|AZ |DE |HN |KR |NA |SA |UK\* |
|BA |DK |HR |KW |NI |SE |US\*\* |
|BE |DZ |HT |KZ |NL |SG |UY |
|BG |EC |HU |LB |NO |SI |UZ |
|BO |EE |ID |LK |NZ |SK |VA |
|BR |EG |IE |LT |PA |SM |VE |
|BY |ES |IL |LU |PE |SN |VN |
|CA |FI |IN |LV |PH |SV |XK |
|CH\*\*\* |FR |IR |MA |PK |TH |ZA |
| | | | | | |ZW |

[ISO - ISO 3166 — Country Codes](https://www.iso.org/iso-3166-country-codes.html)

#### ISO 20275

The SWD rule set MUST use the content of the ISO Norm 20275 to validate the correctness of legal names in long form and/or abbreviation in a transliterated form.

### 2.4 SWD USAGE OF EXTERNAL DATA SOURCES

The SWD rule set MUST use defined external data sources supporting the rule set as needed in screening BP data records against sanction party watchlist incidents.

### 2.5 SWD RESULTS

The SWD rule set MUST provide for each BP data record in the Inbound Persistence a result in the SWD Dashboard.

### 2.6 SWD DASHBOARD

The SWD Dashboard MUST provide the following results:

1. Visualization of sanctioned or not sanctioned CX Member BP data record based on an Incident KPI and matching classification
2. Visualization of BP data records based on Identifier, sanction party list, date of incident, time, country, optional by shareholder or beneficial owner related to a BP
3. Search functionalities
4. Dashboard layout and view settings
5. Sanction Watchlist Weighting settings
6. Language setting for German and English

The Sanction Party Watchlist Dashboard design MUST rely on the Catena-X style guide.  

- Open-source repository: https://github.com/eclipse-tractusx/portal-shared-components
- NPM package: https://www.npmjs.com/package/@catena-x/portal-shared-components/v/2.1.2
- Storybook: https://eclipse-tractusx.github.io/portal-shared-components/?path=/docs/chip--docs

## 3 SWD API

### 3.1 API ENDPOINTS AND RESOURCES

The resources MUST use the well-known HTTP request methods for CRU(D) operations:

- POST MUST be used for create requests  
- PUT MUST be used for update requests  
- GET MUST be used for read requests  

POST MAY also be used for read requests, if input is not given by parameters but rather by an HTTP body to bypass maximum URL length. PUT MAY also be used for upsert requests (create or update) if this is required. A state (active / inactive) at each entity MUST be used for a soft delete, so that the request method DELETE SHALL NOT be used. Other HTTP request methods SHALL NOT be used, including PATCH.

Downloading data from the SDW API MUST follow a staging concept with two stages, so that consumers of the SWD API can compare what they have downloaded from the Inbound Persistence via the Gate API into the input stage of SWD against what kind of SWD rule result and status code was provided for each business partner data record in the output stage. The following controllers MUST distinguish between an input and an output stage.

### 3.2 SANCTION PARTY WATCHLIST CONTROLLER

The Sanction Party Watchlist Controller MUST allow to read (search / return) sanction party watchlist incidents status codes related to an External Identifier or BPN ID in the input and output stage. It MUST have the following resources:

|Sanction Party Watchlist Controller Resources |Description |
| :-: | :-: |
|GET/api/swd/output/business partner data record with sanction party watchlist incident status codes|Returns business partner data record from the output stage with sanction party watchlist incident status information array|
|GET/api/swd/input/BP data records |Returns business partner data record by different search parameters from the input stage|
|GET/api/swd/output/business partner data record with sanction party workflow status|Returns workflow status by business partner data record in Filtered Business Partner List|
|GET/api/swd/output/shareholder natural person list by Business Partner data record|Returns first and last name of business partner data record shareholders|

### 3.3 SANCTION PARTY WATCHLIST SHARING STATE CONTROLLER

The sharing state controller MUST allow to read sharing state entries of BP data records complemented by the Sanction Party Watchlist incident status results.  The sharing state controller MUST have the following resources:

|Sharing State Resources |Description |
| :-: | :-: |
|GET/api/swd/sharing-state |Returns sharing states of business partner data record with incident status result  filtered by External Identifier, BPN ID and type, country, city and address|

### 3.4 EDC DATA ASSET STRUCTURE

For each read and write (create and update) resource in the SWD API input stage there MUST be a dedicated EDC data asset definition. For each read resource in the SWD API output stage there MUST be a dedicated EDC data asset definition. Write resources (create and update) of the SWD API output stage MUST not be called from outside of the Catena-X operating environment. Consequently, EDC data assets for them are NOT REQUIRED.
The SWD API MUST support the EDC functionality based on Sovereign Data Exchange, 2.0.1, CX - 0018 Eclipse Data Space Connector (EDC) or higher.

### 3.5 ERROR HANDLING

The following http response codes MUST be defined for all resources:  

- 200 – OK  
- 400 – Bad Request
- 401 – Unauthorized
- 403 – Forbidden
- 404 – Not Found  
- 500 – Internal Server Error

HTTP Status Code Registry MUST be adhered to in the implementation for the decision on when to use which error code: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

## 4 REFERENCES

### 4.1 NON-NORMATIVE REFERENCES

*This section is non-normative.*

[BPDM Catena-X Website](https://catena-x.net/en/offers-standards/bpdm)

### 4.2 REFERENCE IMPLEMENTATIONS

*This section is non-normative.*

[Business Partner Pool API](https://github.com/eclipse-tractusx/bpdm/tree/main/bpdm-pool-api/src/main/kotlin/org/eclipse/tractusx/bpdm/pool/api)

[Business Partner Gate API](https://github.com/eclipse-tractusx/bpdm/tree/main/bpdm-gate-api/src/main/kotlin/org/eclipse/tractusx/bpdm/gate/api)

[CX ART - CX_-_0010_Business_Partner_Number_v_2.0.0-rc.pdf - Alle Dokumente (sharepoint.com)](https://catena-x.net/de/standard-library)

## ANNEXES

### FIGURES

### TABLES

*This section is non-normative.*

Intentionally left blank.

[^1]: https://catena-x.net/fileadmin/user_upload/Vereinsdokumente/Catena-X_IP_Regelwerk_IP_Regulations.pdf

[^2]: https://catena-x.net/de/standardisierung/catena-x-einfuehren-umsetzen/standardisierung/standard-library

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
