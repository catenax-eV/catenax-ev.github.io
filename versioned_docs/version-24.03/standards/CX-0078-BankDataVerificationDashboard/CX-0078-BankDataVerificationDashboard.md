
# CX-0078 Bank Data Verification Dashboard v1.0.0

## ABSTRACT

The Bank Data Verification Dashboard (BDV) has to rely on a set of clearly defined verification rules which has to be the basis to verify the syntactical and logical correctness of banking details used by CX Member Business Partners. BDV has to capture at least 125 countries, states and dependent sub-regions based on ISO 3166-1 and 3166-2 - (see Point 2.3). BDV has to verify BP Banking data records provided by each CX Member. Each BDV rule has to verify the syntactical and logical correctness of defined banking data as defined via the BDV data and rule model. They represent the business mission critical banking data attributes for at least 125 countries. The BDV verification rules have to rely on standards defined by banking data related authorized organizations (European Payments Council for SEPA, European Committee for Banking Standards (ECBS) for IBAN based on ISO 13616, Society for Worldwide Interbank Financial Telecommunication
(S.W.I.F.T SC) for BIC Code based on ISO 9362. Additionally, BDV has to rely on national banking standards to complement global or regional standards related at least to the 125 countries as needed. BDV furthermore has to rely on the following Standards: ISO 3166-1, ISO 3166-2, ISO 20275, ISO 01-140-10, ISO 8601, ISO/IEC 8859-1.

BDV has to visualize the outcome of the banking verification rules via a dashboard. There a user should be able to compare the input and output of banking data quality after the BDV verification process ended.

BDV has to use the Gate API CX-0074\_V.1.1.0 or higher for synchronization of CX Member BP data records with the CX Member banking data. The CX Member banking data has to be send via the BDV API. The results of the BDV verification have to be stored in the BDV Logfile and should get pulled via the BDV API from the CX Member systems.
BDV has to be a client/ server cloud application which has to contain a Web Client and a Cloud Servicer Application.
BDV has to contain a user and authorization management capability aligned with the CX Portal and Marketplace user management. BDV has to support the EDC Asset function capability and has to be available in English and German language.

## **1 INTRODUCTION**

### **1.1 AUDIENCE & SCOPE**

*This section is non-normative.*

This standard is relevant for the following audience:

- Catena-X certified Operational Companies acting as:
  - Core Service Provider
  - Business Application Provider
  - Data Provider and Consumer

This document is focusing on the functionality of the Bank Data Verification Dashboard (BDV) as a screening and monitoring tool of banking data related quality.

BDV has to be a Value Added Services (VAS) application for Data Provider and Consumer to verify the correctness of Banking Data provided by CX Member suppliers, customers or CpDs (Conto pro Diverse) in the role of a One Time Customer or One Time Supplier.

BDV has to enrich the BP data model via a complementary banking data model. It has to contain a storage capability of statistical banking data quality outcome data over a time frame of at least 3 years.

BDV rules have to focus on the verification of the banking data quality on a syntactical, logical or rule basis. BDV does not focus on validating semantical correctness or data enrichment services.

BDV has to be able to use the Business Partner ID as described in CX-0010 Version 2.0.0 or higher documented in the standard library of Catena-X: https://catena-x.net/de/standard-library
If used terms are not explicitly defined they rely on the standard definitions defined in the
upcoming Catena-X Business Partner Glossary.

### **1.2 CONTEXT**

*This section is non-normative.*

The Bank Data Verification Dashboard has to be the verification tool of CX Member bank data records.  It has to support the validation of the correctness of banking related data provided by CX member suppliers, customers, One Time suppliers and One Time Customers. Furthermore, in combination with the Catena-X VAS solution Fraud Prevention it has to support the transparency if a banking data is affected by Fraud. BDV has to enable the management and monitoring of all CX member related banking details via a Dashboard and additionally the bi-directional intercommunication based on a BDV API.

### **1.3 CONFORMANCE**

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

https://datatracker.ietf.org/doc/html/bcp14 [https://www.w3.org/TR/did-core/](https://www.w3.org/TR/did-core/#bib-rfc2119 "Key words for use in RFCs to Indicate Requirement Levels")[https://www.w3.org/TR/did-core/](https://www.w3.org/TR/did-core/#bib-rfc8174 "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words")

### **1.4 PROOF OF CONFORMITY**

*This section is non-normative.*

All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

To proof conformity with this standard providing a self-audited, stated and signed document that the syntax of the number is established is needed.

### **1.5 TERMINOLOGY OF BANK DATA VERIFICATION DASHBOARD RULES**

*This section is non-normative.*

The main BDV rule methodologies are described below:

#### **IBAN – International Bank Account Number**

BDV has to validate the correctness of the IBAN number in all defined SEPA countries based on the rules defined by the European Payments Council for SEPA and the European Committee for Banking Standards (ECBS) for IBAN based on ISO 13616. The Bank Account Number contains the individual account number, the routing number and the SWIFT Code of the bank. The verification is based on the ISO 3166-1 and ISO 3166-2 standards to secure that the BDV rule is correct allocated to the appropriate countries and dependent states and regions as defined by the ISO norms.

#### **BIC – Business Identifier Code**

BDV has to verify the correctness of the Business Identifier Code (BIC/SWIFT) of Financial Institutions. The Code is based on ISO 9362 defined by the Society for Worldwide Interbank Financial Telecommunication (S.W.I.F.T SC). The Code identifies an individual financial institution and the country residence based on the ISO 3166-1 and ISO 3166-2 standards to secure that the BDV rule is correct allocated to the appropriate countries and dependent states and regions as defined by the ISO norms.

#### **NBAN - National Bank Account Number**

BDV has to verify the correctness of the National Bank Account number as defined by the national bank institutions.  This verification rule is based on the ISO 3166-1 and ISO 3166-2 standards to secure that the BDV rule is correct allocated to the appropriate countries and dependent states and regions as defined by the ISO norms.

#### **Business Partner**

BDV has to enable the transparency of the relation of a bank account to the appropriate business partner type as defined (Supplier, Customer, One Time supplier, One Time Customer).

#### **Fraud Case**

BDV with the support of the Fraud Prevention application has to verify if a bank account is affected by Fraud. This verification has to include the information of the Fraud status and timeframe of affection.

**

### **1.6 OUT OF SCOPE**

The BDV product does not contain the functionality to correct and/or enrich a bank data record.

### **1.7 BANK DATA VERIFICATION DASHBOARD**

BDV has to contain the following dashboard-based functionalities:

1. Visualization of CX Member bank data verification results
2. Various bank data filter functionalities based on the bank data model
3. BDV target setting
4. Bank data record target versus actuals
5. Bank data rule results supported by dashboard visualization capabilities
6. Bank data visualization by country type
7. BDV statistical report
8. Search function
9. BDV dashboard settings by time, KPI, layout and view, country, language limited to German and English

The results of BDV are accessible via a defined API and Changelog file managed via the Bank Data Sharing State Controller.

The BDV dashboard design relies on the Catena-X style guide. See details under confluence.catena-x.net/display/CORE/CX+Style+Guide

## **2 BANK DATA VERIFICATION DASHBOARD (NORMATIVE)**

The Bank Data Verification Dashboard (BDV) MUST perform the verification of a bank data record of a defined CX Member business partner. The BDV rule set and visualization of business partner data MUST be based on the standards defined in CX-0010 Version 2.0.0 Business Partner Number, CX-0074 Version 1.1.0 Business Partner Gate API, CX-0012 Business Partner Pool API Version 2.1.0 or higher.

### **2.1 PRECONDITIONS AND DEPENDENCIES**

To run the BDV solution the BPDM, Gate API and Pool API SHOULD be set up: https://github.com/eclipse-tractusx/bpdm/blob/main/README.md

### **2.2 BDV SPECIFICATIONS**

The BDV rule set MUST use the following BP data attributes:

1. Legal Entity as defined by CX-0074 Version 1.1.0which contains the following attributes
    - External ID
    - BPNL, BPNS, BPNA
    - Legal Name Parts
    - Legal Short Name
    - Legal Form
    - Classifications
    - Legal Address
    - Created at
    - Updated at
2. Legal Entity Identifier as defined by CX-0074 Version 1.1.0
    - Value
    - Type
    - Issuing Body

3. Site as defined by CX-0074 Version 1.1.0
4. Address as defined by CX-0074 Version 1.1.0
5. Identifier Type as defined by CX-0074 Version 1.1.0

### **2.3 BDV USAGE OF NORMS**

The BDV the rule set MUST us the following ISO Norms:

#### **ISO 3166-1 Country**

The BDV rule set** MUST use the ISO Norm 3166-1 related codes for at least 117 countries as listed below

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

#### **ISO 3166-2 Administrative Area (Level 1)**

The BDV rule set MUST use the ISO Norm 3166-2 related codes for administrative area (level 1) - country subdivision, such as regions within a country or dependent states.

| Attribute | Description | (Data) Type / Code List / Enumeration |
| --- | --- | --- |
| Name | The name of the country subdivision according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). | String |
| Code | The six-character alphanumeric code according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2), consisting of the two-letter [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) country code and a three-character alphanumeric code for the subdivision in that country, separated by a hyphen. | String |

#### **ISO 13616 IBAN Number**

BDV MUST use the IBAN number in all defined SEPA countries based on the rules defined by the European Payments Council for SEPA and the European Committee for Banking Standards (ECBS) for IBAN based on ISO 13616.

#### **ISO 9362 BIC – Business Identifier Code**

BDV MUST us the Business Identifier Code (BIC/SWIFT) of Financial Institutions. The Code is based on ISO 9362 defined by the Society for Worldwide Interbank Financial Telecommunication (S.W.I.F.T SC). The Code identifies an individual financial institution and the country residence based on the ISO 3166-1 and ISO 3166-2 standards to secure that the BDV rule is correct allocated to the appropriate countries and dependent states and regions as defined by the ISO norms.

**NBAN - National Bank Account Number**
BDV MUST use the National Bank Account number as defined by the national bank institutions.  This verification rule is based on the ISO 3166-1 and ISO 3166-2 standards to secure that the BDV rule is correct allocated to the appropriate countries and dependent states and regions as defined by the ISO norms

### **2.4 BDV USAGE OF EXTERNAL DATA SOURCES**

The BDV rule set MUST use defined external data sources supporting the rule set as needed in validating the correctness of bank data records or providing recommendation of data enrichments. External Data Sources are e.g. ISO 3166-1, ISO 3166-2, ISO 6074, SEPA, SWIFT, ISO 9362 and others.

### **2.5 BDV RESULTS**

The BDV rule set MUST provide for each CX Member bank data record a result in the BDV dashboard and in the BDV Changelog file.

### **2.6 BDV DASHBOARD**

The BDV Dashboard MUST provide the following results:

Filter capabilities of BDV data results:

1. By time (year, quarter, month) for rolling of 3 years at a minimum
2. By Business Partner Type
3. By Country
4. By Fraud Case Progress Status
5. By BDV Rule
6. By Status Code

BDV MUST contain the following dashboard-based functionalities:

1. Visualization of CX Member bank data verification results
2. Various bank data filter functionalities based on the bank data model
3. BDV target setting
4. Bank data record target versus actuals
5. Bank data rule results supported by dashboard visualization capabilities
6. Bank data visualization by country type
7. BDV statistical report
8. Search function
9. BDV dashboard settings by time, KPI, layout and view, country, language limited to German and English

The BDV dashboard design MUST use the Catena-X style guide. See details under confluence.catena-x.net/display/CORE/CX+Style+Guide

## **3 BDV API**

### **3.1 API ENDPOINTS AND RESOURCES**

The resources MUST use the well-known HTTP request methods for CRU(D) operations:

- POST MUST be used for create requests  
- PUT MUST be used for update requests  
- GET MUST be used for read requests  

POST MAY also be used for read requests, if input is not given by parameters but rather by an HTTP body to bypass maximum URL length. PUT MAY also be used for upsert requests (create or update) if this is required. A state (active / inactive) at each entity MUST be used for a soft delete, so that the request method DELETE SHALL NOT be used. Other HTTP request methods SHALL NOT be used, including PATCH.

Uploading and downloading data to/from the BDV API MUST follow a staging concept with two stages, so that consumers of the BDV API can compare what they have uploaded  into the input stage against what kind of BDV rule results and status code was provided for each bank data in the output stage. The following controllers MUST distinguish between an input and an output stage.

### **3.2 BANK DATA CONTROLLER**

The bank data controller MUST allow to create, update, or read (search / return) bank data records related to an External Identifier or BPN ID in the input and output stage. It MUST have the following resources:

|Bank Data Controller Resources |Description |
| :-: | :-: |
|PUT/api/bdv/input/bank data |Creates bank data record or updates existing bank data record in the input stage. |
|GET/api/bdv/output/bank data record|Returns bank data record from the output stage by different search parameters |
|GET/api/bdv/input/bank data records|Returns bank data record by different search parameters from the input stage. |

### **3.3 BANK DATA SHARING STATE CONTROLLER**

The sharing state controller MUST allow to create, update, or read sharing state entries of bank data records.  The sharing state controller MUST have the following resources:

|Sharing State Resources |Description |
| :-: | :-: |
|GET/api/bdv/sharing-state |Returns sharing states of bank data  filtered by IBAN, BIC, NBAN, External Identifier, BPN ID and type, country and status code |
|PUT/api/bdv/sharing-state |Creates or updates a sharing state of a bank data record |

### **3.4 EDC DATA ASSET STRUCTURE**

For each read and write (create and update) resource in the BDV API input stage there MUST be a dedicated EDC data asset definition. For each read resource in the BDV API output stage there MUST be a dedicated EDC data asset definition. Write resources (create and update) of the BDV API output stage MUST not be called from outside of the Catena-X operating environment. Consequently, EDC data assets for them are NOT REQUIRED.
The BDV API MUST support the EDC functionality based on Sovereign Data Exchange, 2.0.1, CX - 0018 Eclipse Data Space Connector (EDC).

### **3.5 ERROR HANDLING**

The following http response codes MUST be defined for all resources:  

- 200 – OK  
- 400 – Bad Request
- 401 – Unauthorized
- 403 – Forbidden
- 404 – Not Found  
- 500 – Internal Server Error

HTTP Status Code Registry MUST be adhered to in the implementation for the decision on when to use which error code: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

## **4 REFERENCES**

### **4.1 NON-NORMATIVE REFERENCES**

*This section is non-normative.*

[BPDM Catena-X Website](https://catena-x.net/en/offers/bpdm)

### **4.2 REFERENCE IMPLEMENTATIONS**

*This section is non-normative.*

[Business Partner Pool API](https://github.com/eclipse-tractusx/bpdm/tree/main/bpdm-pool-api/src/main/kotlin/org/eclipse/tractusx/bpdm/pool/api)

[Business Partner Gate API](https://github.com/eclipse-tractusx/bpdm/tree/main/bpdm-gate-api/src/main/kotlin/org/eclipse/tractusx/bpdm/gate/api)

## **ANNEXES**

### **FIGURES**

*This section is non-normative.*

Intentionally left blank.

[^1]: https://catena-x.net/fileadmin/user_upload/Vereinsdokumente/Catena-X_IP_Regelwerk_IP_Regulations.pdf

[^2]: https://catena-x.net/de/standardisierung/catena-x-einfuehren-umsetzen/standardisierung/standard-library
