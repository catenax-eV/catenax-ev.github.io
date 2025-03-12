# CX–0080 Fraud Prevention Service v1.0.0

## **ABSTRACT**

Digital fraud risks are constantly increasing, e.g., in the form of fake invoices sent in the name of real suppliers, but with third-party (fraudster) account data.
The Fraud Prevention Service provides information on most recent fraud cases which have been shared within the Catena-X (CX) network by contributing companies.
It therefore benefits from the overall idea of data sharing within the Catena-X community as such information is nowhere available in any data source accessible along the automotive supply chain.

There is a strong need to create such a reliable data source by anonymously sharing fraud details within the CX member network.

This data shall be made accessible and consumable via dashboard & reporting functionalities.

By using this information, the CX community has the chance to prevent fraud cases in their own companies as they can use shared data about e.g., fraudulent bank accounts to stop payments and so avoid financial losses and reputation damage.

The purpose of this standard is to describe guidelines and requirements specific for the challenges of fraud risks in order to minimize such threats and implications for the own company.  It focuses on fraudulent bank data as the most common fraud type although other relevant fraud types are also considered.

## **1 INTRODUCTION**

### **1.1 AUDIENCE & SCOPE**

*This section is non-normative.*

This standard is relevant for the following audience:

- Catena-X certified Operational Companies acting as:
  - Business Application Provider
  - Data Provider and Consumer

This document focuses on the requirements regarding provision of fraud data and getting access to such data via reporting- / dashboard functionalities.

It is relevant for business application providers who want to provide services for collecting, aggregating and reporting fraud data by empowering the CX companies to provide such data in an easy but formalized, secure and anonymous way.

It is also relevant for data providers and consumers as it is initially the CX community who acts as data provider and consumer itself and can be extended with other communities or data providers.

### **1.2 CONTEXT**

*This section is non-normative.*

Fraud prevention service is a value-added service (VAS) in the area of Business Partner Data Management which addresses the challenges for a company in terms of legal, compliance- and finance-related requirements.

### **1.3 CONFORMANCE**

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in [BCP 14](https://datatracker.ietf.org/doc/html/bcp14) [[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)] [[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)] when, and only when, they appear in all capitals, as shown here.

### **1.4 PROOF OF CONFORMITY**

*This section is non-normative.*

All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

To prove conformity with this standard providing a self-audited, stated and signed document that the syntax of the number is established is needed.

### **1.5 TERMINOLOGY**

*This section is non-normative.*

The Fraud Prevention Service has to contain at least the following data attributes:

|Fraud Case Type|Describes the type of fraud case, e.g., active warning, fake bank data change or falsified Invoice. |
| :- | :- |
|Confirmation State|Specifies whether a fraud case is confirmed or not. |
|Date of Attack|Specifies the date of the attack. |
|Description|Some explanation and background to a fraud case.|
|International Bank Account Identifier (IBAN)|IBAN number as to be defined by the European Payments Council for SEPA, European Committee for Banking Standards (ECBS) for IBAN based on ISO 13616|
|Business Identifier Code (BIC)|This field contains the BIC code according to ISO 9362 and is also known as SWIFT-BIC, SWIFT ID, or SWIFT code, after the Society for Worldwide Interbank Financial Telecommunication (SWIFT), which is designated by ISO as the BIC registration authority (SWIFT).|
|Country Code|Country the bank account is present respectively where the fraud case has occurred. Country Code as defined in ISO 3166-1 |
|Region or State Code|Code represents the region or dependent state as defined in ISO 3166-2|
|National Bank Account Number (NBAN)|National Bank Account Number|
|Bank Name|Name of the bank |
|Fraudster Email|Email the fraudster used to communicate with the affected company|
|Fraudster Phone |Phone the fraudster used to communicate with the affected company|

The Fraud Prevention Service has to provide at a minimum the following results:

|Results|Reporting Data and Time|Specifies the date and time the fraud case was reported.|
| :- | :- | :- |
||Reporting Organization|Specifies the organization that reported the fraud case. So, the organization that submitted the fraud case in the CX system.|
||Internal ID |Sequential and unique number to identify the fraud case.|
||Frequency|Numeric field how often the fraud case was confirmed e.g., by using the same IBAN-no.|
||Fraud Case Counter|Total no. of reported fraud cases within this service|

### **1.6 OUT OF SCOPE**

This standardization document does not describe the process and functionality of achieving the results as defined in the document.

### **1.7 FRAUD PREVENTION SERVICE**

*This section is normative.*

The Fraud Prevention Service has to contain the following functionalities:

- Getting informed about most recent fraud cases reported by CX members
- Selecting different fraud types and time ranges
- Discovering trends and conspicuities by using graphical front ends
- Searching the CX fraud database for different values/strings, e.g., IBAN
- Retrieving fraud case details with sort- & filter functions
- Reporting new fraud cases directly out of the dashboard
- Exporting in different formats and on different levels

## **2 REQUIREMENTS [NORMATIVE]**

### **2.1 FRAUD PREVENTION SERVICE**

The Fraud Prevention Service (FPS) is a reporting and monitoring solution and MUST provide the following capabilities as minimum requirement:

1. Fraud case reporting:
    - User interface for unified reporting of fraud cases, integrated in the Fraud Prevention Dashboard (FPD)
    - Template for entering fraud data by the CX member
    - Individual selection of different fraud case types and status
    - Anonymized distribution of fraud cases to an aggregated CX fraud case database as basis for dashboard display (although the information about the fraud case originator MUST be retrievable by the service provider for e.g., audit reasons)

2. Dashboard functions:
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
        - There MUST be a search function for a content look-up like IBAN-no. (if provided in the reported fraud cases)
        - There MUST be an export function for the list report in a common standard format

### **2.2 FRAUD PREVENTION SERVICE DATA ATTRIBUTES**

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

### **2.3 API ENDPOINTS AND RESOURCES**

The resources MUST use the HTTP request methods for READ operations:

- GET MUST be used for read requests  

### **2.4 FRAUD PREVENTION API DATA ATTRIBUTES**

The Fraud Prevention Service API MUST support requests for the following data attributes or combinations of these for read operations:

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

### **2.5 FRAUD PREVENTION DATA CONTROLLER**

The fraud prevention data controller MUST allow to read (search / return) fraud prevention data records.  It MUST have the following resources:

|Bank Data Controller Resources |Description |
| :- | :- |
|GET/api/fps/output/fps_datarecord|Returns fraud prevention data record from the output stage by different search parameters |

### **2.6 EDC DATA ASSET STRUCTURE**

The FPS API MUST support the EDC functionality based on Sovereign Data Exchange, 2.0.1 or higher, CX - 0018 Eclipse Data Space Connector (EDC). The FPS API for reading information (GET) MUST be represented by a data asset in the EDC.

### **2.7 ERROR HANDLING**

The following http response codes MUST be defined for all resources:  

- 200 – OK  
- 400 – Bad Request
- 401 – Unauthorized
- 403 – Forbidden
- 404 – Not Found  
- 500 – Internal Server Error

HTTP Status Code Registry MUST be adhered to in the implementation for the decision on when to use which error code: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

## **3 REFERENCES**

### **3.1 NORMATIVE REFERENCES**

*This section is normative.*

- The country codes and the country names used in FPS MUST comply with ISO 3166-1.
- The Region or State Codes used in FPS MUST comply with ISO 3166-2.

### **3.2 NON-NORMATIVE REFERENCES**

*This section is non-normative.*

- [BPDM Catena-X Website](https://catena-x.net/en/offers-standards/bpdm)

- The Fraud Prevention Service design relies on the Catena-X style guide.
- The Business Identifier Code (BIC) provided in the fraud reporting template shall be according to ISO 9362.
- The International Bank Account Number provided in the fraud reporting template shall be according to ISO 13616.

### **3.3 REFERENCE IMPLEMENTATIONS**

*This section is non-normative.*

Intentionally left blank.

## **ANNEXES**

### **FIGURES**

*This section is non-normative.*

Intentionally left blank.

[^1]: https://catena-x.net/fileadmin/user_upload/Vereinsdokumente/Catena-X_IP_Regelwerk_IP_Regulations.pdf
[^2]: https://catena-x.net/de/standardisierung/catena-x-einfuehren-umsetzen/standardisierung/standard-library

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
