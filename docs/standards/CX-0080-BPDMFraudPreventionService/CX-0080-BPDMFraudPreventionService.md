---
tags:
  - CAT/Value Added Services
---

# CX-0080 BPDM Fraud Prevention Service v1.1.1

## ABSTRACT

Digital fraud risks are constantly increasing, e.g., in the form of fake invoices sent in the name of real suppliers, but with third-party (fraudster) account data.
The Fraud Prevention Service provides information on most recent fraud cases which have been shared within the Catena-X (CX) network by contributing companies.
It therefore benefits from the overall idea of data sharing within the Catena-X community as such information is nowhere available in any data source accessible along the automotive supply chain.

There is a strong need to create such a reliable data source by anonymously sharing fraud details within the CX member network.

This data shall be made accessible and consumable via dashboard & reporting functionalities.

By using this information, the CX community has the chance to prevent fraud cases in their own companies as they can use shared data about e.g., fraudulent bank accounts to stop payments and so avoid financial losses and reputation damage.

The purpose of this standard is to describe guidelines and requirements specific for the challenges of fraud risks in order to minimize such threats and implications for the own company.  It focuses on fraudulent bank data as the most common fraud type although other relevant fraud types are also considered.

## FOR WHOM IS THE STANDARD DESIGNED

This standard is designed for Business Application Provider.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

| **Version** | **Publishing Date** | **Description of Change**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|1.1.0       | 2024-03-13          | Updated to template v2.0.0. Added chapter 2.6 Data Types and 2.8 Data Attributes, Added chapter 2.7 for data sovereignty as additional requirement.

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following audience:

- Catena-X certified Operational Companies acting as:
  - Business Application Provider
  - Data Provider and Consumer

This document focuses on the requirements regarding provision of fraud data and getting access to such data via reporting- / dashboard functionalities.

It is relevant for business application providers who want to provide services for collecting, aggregating and reporting fraud data by empowering the CX companies to provide such data in an easy but formalized, secure and anonymous way.

It is also relevant for data providers and consumers as it is initially the CX community who acts as data provider and consumer itself and can be extended with other communities or data providers.

> Data Sovereignty: The FPS API allows to download DQD quality results of business partner data in a data sovereign way, because each Catena-X member has its own area of business partner data in BPDM, where private data (like customer / supplier relationships) is only visible to the Catena-X member.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

Fraud prevention service (FPS) is a value-added service (VAS) in the area of Business Partner Data Management which addresses the challenges for a company in terms of legal, compliance- and finance-related requirements.

FPS has to visualize the outcome of the fraud prevention screening results via a dashboard.

FPS uses the Gate API CX-0074_v3.0.0 and the Pool API CX-0012_v4.0.0 based on the CX-0018 Data Space Connectivity 3.0.0
for pulling BP data records. FPS is a client/ server cloud application which contains a Web Client and a Cloud Server Application.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

All sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

To prove conformity with this standard providing a self-audited, stated and signed document that the syntax of the number is established is needed.

### 1.4 EXAMPLES

N/A

### 1.5 TERMINOLOGY

> *This section is non-normative*

| Term | Description |
| :- | :- |
|Fraud Case Type|Describes the type of fraud case, e.g., active warning, fake bank data change or falsified Invoice. |
|Confirmation State|Specifies whether a fraud case is confirmed or not. |
|Date of Attack|Specifies the date of the attack. |
|Description|Some explanation and background to a fraud case.|
|International Bank Account Identifier (IBAN)|IBAN as to be defined by the European Payments Council for SEPA, European Committee for Banking Standards (ECBS) for IBAN based on ISO 13616|
|Business Identifier Code (BIC)|This field contains the BIC code according to ISO 9362 and is also known as SWIFT-BIC, SWIFT ID, or SWIFT code, after the Society for Worldwide Interbank Financial Telecommunication (SWIFT), which is designated by ISO as the BIC registration authority (SWIFT).|
|Country Code|Country the bank account is present respectively where the fraud case has occurred. Country Code as defined in ISO 3166-1 |
|Region or State Code|Code represents the region or dependent state as defined in ISO 3166-2|
|National Bank Account Number (NBAN)|National Bank Account Number|
|Bank Name|Name of the bank |
|Fraudster Email|Email the fraudster used to communicate with the affected company|
|Fraudster Phone |Phone the fraudster used to communicate with the affected company|

The Fraud Prevention Service has to provide at a minimum the following results:

| Term | Description |
| :- | :- |
|Reporting Data and Time|Specifies the date and time the fraud case was reported.|
|Reporting Organization|Specifies the organization that reported the fraud case. So, the organization that submitted the fraud case in the CX system.|
|Internal ID |Sequential and unique number to identify the fraud case.|
|Frequency|Numeric field how often the fraud case was confirmed e.g., by using the same IBAN-no.|
|Fraud Case Counter|Total no. of reported fraud cases within this service|

## 2 MAIN CONTENT

> *This section is normative*

The Fraud Prevention Service (FPS) is a reporting and monitoring solution and MUST provide the following capabilities as minimum requirement:

1\. Fraud case reporting:

- User interface for unified reporting of fraud cases, integrated in the Fraud Prevention Dashboard (FPD)
- Template for entering fraud data by the CX member
- Individual selection of different fraud case types and status
- Anonymized distribution of fraud cases to an aggregated CX fraud case database as basis for dashboard display (although the information about the fraud case originator MUST be retrievable by the service provider for e.g., audit reasons)

2\. Dashboard functions:

- Administration functionality
  - Switch between languages (MUST: German and English, others optional)
  - User information (name, corresponding CX-registered organization) based on CX-role and authorization management
  - Export / Download function for dashboard content (including graphical reports)
- Selection functionality
  - Individual selection of fraud case types (including multi-selection)
  - Individual selection of time periods of interest
- Display functionality
  - Graphical reports:
    - Graphical reports MUST reflect the chosen time period as well as the selected fraud case types
    - The reports MUST illustrate the following:
      - CX-Fraud case distribution per country (with figures)
      - Number of CX-reported fraud cases over time per fraud case type
  - List report:
    - The list report MUST contain all CX-reported fraud cases
    - There MUST be filter and sort functions for the list content in order to focus on e.g., relevant time periods, fraud case types or countries
    - There MUST be a search function for a content look-up like IBAN-Number. (if provided in the reported fraud cases)
    - There MUST be an export function for the list report in a common standard format

The Fraud Prevention Service has to contain the following functionalities:

- Getting informed about most recent fraud cases reported by CX members
- Selecting different fraud types and time ranges
- Discovering trends and conspicuities by using graphical front ends
- Searching the CX fraud database for different values/strings, e.g., IBAN
- Retrieving fraud case details with sort- & filter functions
- Reporting new fraud cases directly out of the dashboard
- Exporting in different formats and on different levels

### 2.1 FRAUD PREVENTION SERVICE DATA ATTRIBUTES

The Fraud Prevention Service API MUST contain at least the following data attributes:

|Fraud Case Type|Describes the type of Fraud Case, e.g., active warning, fake bank data change or falsified Invoice. |
| :- | :- |
|Confirmation State|Specifies whether a fraud case is confirmed or not. |
|Date of Attack|Specifies the date of the attack. |
|Description|Some explanation and background to a fraud case.|
|International Bank Account Identifier (IBAN)|IBAN number as to be defined by the European Payments Council for SEPA, European Committee for Banking Standards (ECBS) for IBAN based on ISO 13616|
|Business Identifier Code (BIC)|This field contains the BIC code according to ISO 9362 and is also known as SWIFT-BIC, SWIFT ID, or SWIFT code, after the Society for Worldwide Interbank Financial Telecommunication (SWIFT), which is designated by ISO as the BIC registration authority (SWIFT).|
|Country Code|Country the bank account is present respectively where the fraud case has occurred. Country Code as defined in ISO 3166-1|
|Region or State Code|Code represents the region or dependent state as defined in ISO 3166-2|
|National Bank Account Number (NBAN)|National Bank Account Number|
|Bank Name|Name of the bank |

### 2.2 API ENDPOINTS AND RESOURCES

The resources MUST use the well-known HTTP request methods for CRU(D) operations:

- POST MUST be used for create requests  
- PUT MUST be used for update requests  
- GET MUST be used for read requests  

POST MAY also be used for read requests, if input is not given by parameters but rather by an HTTP body to bypass maximum URL length. PUT MAY also be used for upsert requests (create or update) if this is required. A state (active / inactive) at each entity MUST be used for a soft delete, so that the request method DELETE SHALL NOT be used. Other HTTP request methods SHALL NOT be used, including PATCH.

Uploading and downloading data to/from the FPD API MUST follow a staging concept with two stages, so that consumers of the FPD API can compare what they have uploaded  into the input stage against what kind of BDV rule results and status code was provided for each bank data in the output stage. The following controllers MUST distinguish between an input and an output stage.

The resources MUST use the HTTP request methods for READ operations:

- GET MUST be used for read requests  

### 2.3 FRAUD PREVENTION API DATA ATTRIBUTES

The Fraud Prevention Dashboard API MUST support requests for the following data attributes or combinations of these for read operations:

|Fraud Prevention Service API Data Fields |Format|
| :- | :- |
|IBAN|Alphanumeric String|
|BIC/SWIFT|Alphanumeric String|
|NBAN|Alphanumeric String|
|Bank Name|Alphanumeric String|
|Country Code|2-digit alphanumeric string|
|Region or State Code|6-digit alphanumeric string|
|Confirmation State|Enum |
|Date of Attack  |Date format|
|Fraud Case Counter|Numeric|
|Fraud Case Type|Enum|

### 2.4 Fraud Prevention DATA CONTROLLER

The fraud prevention data controller MUST allow to create, update, or read (search / return) i.e. bank data records related to an External Identifier or BPN ID. It MUST have the following resources:

|Fraud Prevention Data Controller Resources |Description |
| :-: | :-: |
|PUT/api/fpd/input/bank data |Creates bank data record or updates existing bank data record. |
|GET/api/fpd/output/bank data record|Returns bank data record by different search parameters. |
|GET/api/fpd/input/bank data records|Returns bank data record by different search parameters. |

### 2.5 Fraud Prevention DATA SHARING STATE CONTROLLER

The sharing state controller MUST allow to create, update, or read sharing state entries of bank data records.  The sharing state controller MUST have the following resources:

|Sharing State Resources |Description |
| :-: | :-: |
|GET/api/fpd/sharing-state |Returns sharing states of bank data  filtered by IBAN, BIC, NBAN, External Identifier, BPN ID and type, country, fraud status code |
|PUT/api/fpd/sharing-state |Creates or updates a sharing state of a bank data record |

### 2.6 AVAILABLE DATA TYPES

The API **MUST** use JSON as the payload format transported via HTTP. Other formats can be added. These are then, however, **OPTIONAL**.

### 2.7 DATA ASSET STRUCTURE

The following data assets **MUST** be registered at the Core Service Provider so that the Sharing Member can negotiate an API usage contract with the Core Service Provider and access its dedicated BPDM Gate (hosted by the Core Service Provider) through these data assets[^6]:

| **Name**                             | **Type** | **Version** | **Description**                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------ | -------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UploadAccessForSharingMember  | FPD | 1.0         | Grants the Sharing Member full access to the FPD Admin function, FPD database and FPD changelog. This contains create / update FPD admin settings by Sharing Member role by FPD function, activate and deactivate the usage of external data sources via defined APIs and license keys. |
| UploadBankingDataAccessForSharingMember  | FPD | 1.0         | Grants the Sharing Member full access to create / update Banking data records from Sharing Member|
| ReadAccessFPDOutputForSharingMember  | FPD | 1.0         | Grants the Sharing Member read access of the FPD changelog.                                                                                                                         |
The OAuth2 client permissions **MUST** be configured to solely allow access to the API resources defined in the corresponding asset, checking HTTP method (read vs. full access), path, query parameters and body of the HTTP request.

### 2.8 POLICY CONSTRAINTS FOR DATA EXCHANGE

In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined.  As part of this data sovereignty framework, conventions for access policies, for usage policies and for the constraints contained in the policies have been specified in standard 'CX-0152 Policy Constraints for Data Exchange'. This standard document CX-0152 **MUST** be followed when providing services or apps for data sharing/consuming and when sharing or consuming data in the Catena-X ecosystem. What conventions are relevant for what roles named in [1.1 AUDIENCE & SCOPE](#11-audience--scope) is specified in the CX-0152 standard document as well. CX-0152 can be found in the [standard library](https://catenax-ev.github.io/docs/standards/overview).

### 2.9 ERROR HANDLING

The following http response codes MUST be defined for all resources:

- 200 – OK  
- 400 – Bad Request
- 401 – Unauthorized
- 403 – Forbidden
- 404 – Not Found  
- 500 – Internal Server Error

HTTP Status Code Registry MUST be adhered to in the implementation for the decision on when to use which error code: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

## 3 REFERENCES

### **3.1 NORMATIVE REFERENCES**

> *This section is normative*

- The country codes and the country names used in FPD MUST comply with ISO 3166-1.
- The Region or State Codes used in FPD MUST comply with ISO 3166-2.

### **3.2 NON-NORMATIVE REFERENCES**

> *This section is non-normative*

- [BPDM Catena-X Website](https://catena-x.net/en/offers-standards/bpdm)

- The Fraud Prevention Dashboard design relies on the Catena-X style guide.
- The Business Identifier Code (BIC) provided in the fraud reporting template shall be according to ISO 9362.
- The International Bank Account Number provided in the fraud reporting template shall be according to ISO 13616.

[^1]: https://catena-x.net/fileadmin/user_upload/Vereinsdokumente/Catena-X_IP_Regelwerk_IP_Regulations.pdf
[^2]: https://catena-x.net/de/standardisierung/catena-x-einfuehren-umsetzen/standardisierung/standard-library

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

Not applicable.

## ANNEXES

### FIGURES

> *This section is non-normative*

Not applicable.

### TABLES

> *This section is non-normative*

Not applicable.

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
