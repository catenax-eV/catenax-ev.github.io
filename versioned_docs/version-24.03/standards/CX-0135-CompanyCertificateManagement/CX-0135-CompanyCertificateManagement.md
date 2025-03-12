# CX-0135 BP company certificate management v1.0.0

## ABSTRACT

*This section is non-normative.*

In the world of business, company certificates are often mandatory for conducting transactions between two companies. However, the process of provisioning, maintaining, and validating these certificates can be a major challenge. For example, if a company has 100 customers, they may need to provide their company certificates in 100 different ways and maintain them at 100 different points.

To address this issue, a use case has been developed that provides a standardized but generic data model for company certificates. This allows companies to provide and exchange certificates on a defined standard within the scope of the Catena-X dataspace. The second part of this use case focuses on the technological aspect of providing and validating certificates via an interface.

This standard is relevant for business application providers who wish to establish a solution for managing and validating company certificates, and returning them to customers. It is also important for data providers and consumers who need to exchange or validate certificates through a solution provider.

## FOR WHOM IS THE STANDARD DESIGNED

This standard is crucial for business application providers looking to implement a sturdy solution for consuming, providing, and validating company certificates, which can be effortlessly returned to customers. Moreover, data providers and consumers who need a dependable means of exchanging or validating certificates through a solution provider or even the certificate issuer itself will find this standard to be of immense importance. By complying with this standard, businesses can ensure seamless certificate management and validation, thereby enhancing their overall operations.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

Not applicable - this is the first published version.

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

*This section is non-normative.*

This standard is relevant for the following audience:

- Business Application Provider
- Data Provider and Consumer

This standard applies to business application providers who wish to establish a solution for managing and validating company certificates, and returning them to customers. It is also important for data providers and consumers who need to exchange or validate certificates through a solution provider.

The data model for company certificates included in this standard is generic and supports the following certificates: IATF 16949, ISO 14001, ISO 9001, ISO 27001, and VDA6.4.

Additional certificates may be added in the future.

You can find the other standards in the standard library of Catena-X: https://catena-x.net/de/standard-library.

### 1.2 CONTEXT

*This section is non-normative.*

The establishment of various industry networks, such as Catena-X, has significantly increased the need for data standards across the entire automotive value chain. To promote industry-wide, international data exchange and facilitate networking between OEMs, suppliers, customers, and industrial partners, it is essential to define and introduce a cross-industry standard for the provisioning, exchanging, maintenance, and validation of company certificates. This standard ensures interoperability and data sovereignty, while also increasing trust in certificates.

By implementing this standard, companies can streamline the process of managing and exchanging certificates, reducing the burden of maintaining multiple certificates for different customers. Additionally, the standard ensures that certificates are validated and exchanged in a secure and reliable manner, enhancing trust and confidence in the data exchange process. Overall, the introduction of a cross-industry standard for company certificates is a crucial step towards achieving seamless and secure data exchange across the automotive industry.

### 1.3 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in [BCP 14](https://datatracker.ietf.org/doc/html/bcp14) [[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119 "Key words for use in RFCs to Indicate Requirement Levels")] [[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174 "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words")] when, and only when, they appear in all capitals, as shown here.

*This section is non-normative.*

All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

### 1.4 EXAMPLES

A company that has 100 customers, they may need to provide their company certificates in up to 100 different ways and maintain them manually at 100 different points (typically proprietary customer portals).
A company has 100 customers, that provide different certificates, from different countries and they need to validate them.

### 1.5 TERMINOLOGY

*This section is non-normative.*

In this section the different parts of the data model are explained.

The data model is implemented according to the API specification that is published in the Tractus-X open source repository:
[BPDM certificate management api](https://github.com/eclipse-tractusx/bpdm-certificate-management/tree/main/doc/api)(v1.0.0)

#### 1.5.1 BPNL BUSINESS PARTNER NUMBER LEGAL ENTITY

A BPNL represents and uniquely identifies a Legal Entity, which is defined by its legal name (including Legal Form, if registered), legal Address and Tax Number. For further details on BPNLs please see standard 0010 Business Partner Number.

For this standard and the data model the BPNL is the BPN id of the certified legal entity.

Attribute: businessPartnerNumber

#### 1.5.2 TYPE

Attribute: certitificateType
Attribute: certificateVersion

Is the type of the certificate the BPN is certified for. This data model is generic and supports the following certificates: IATF, ISO 16949, ISO 14001, ISO 9001, ISO 27001, and VDA6.4. Additional certificates may be added in the future.

IATF (International Automotive Task Force) is a standard that defines the requirements for a quality management system in the automotive industry.

ISO 16949 is a standard that specifies the quality management system requirements for the design, development, production, and servicing of automotive-related products.

ISO 14001 is a standard that outlines the requirements for an environmental management system to help organizations minimize their impact on the environment.

ISO 9001 is a standard that sets out the requirements for a quality management system to help organizations consistently provide products and services that meet customer and regulatory requirements.

ISO 27001 is a standard that specifies the requirements for an information security management system to help organizations manage and protect their sensitive information.

VDA6.4 is a standard that defines the requirements for a quality management system in the automotive industry, with a focus on process auditing.

#### 1.5.3 REGISTRATION AND ISSUING

Attribute: issuer
Attribute: registrationNumber

Issuer authority is the one who is handing out a certificate - e.g. TUEV Sued. The registration number is the certificate unique identifier at the certifying authority / issuing agency.

Example: ISO 9001 certificate is issued by TÜV Süd and they are the certifying authority.

#### 1.5.4 AREA OF APPLICATION

Attribute: areaOfApplication

It is the area of applications for the given certification i.e. additional details.

#### 1.5.5 ENCLOSED SITES

Attribute: enclosedSites

This attribute is closely linked to the business partner number (BPN) and indicates additional sites, such as production or engineering sites, that are covered by the certificate. In other words, the certificate is valid not only for the primary BPN, but also for any associated sites. This attribute is particularly useful for companies with multiple locations or business units, as it allows them to manage certificates more efficiently and ensures that all relevant sites are covered by the certificate.

#### 1.5.6 VALIDITY

Attribute: validFrom
Attribute: validUntil

This is the valid from date for certificate, if not defined - its recommended to use the issueing/signing date of the document. Related to the valid from date there is the valid to date for a certificate -  31.12.9999 for no expiration.

#### 1.5.7 TRUST LEVEL

Attribute: trustLevel

Data object defining the trust level of the certicate.

The certificates are provided in the business context by the company itself - they are showing their certificates to other companies. Not every certificate can be directly validated by the issuing authority. Thats why there are different trust levels defined: none/ low /high / trusted.

None: no validation check at all, just uploaded / provided by the company
Low: manual validation check done by human after upload
Medium: certificate provided by trusted issuer and manually checked (as low)
High: automated cross check via some database (e.g. TÜV, IATF)
Trusted: directly provided by issuer (e.g. TÜV)

#### 1.5.8 VALIDATOR

Attribute: validator

Validator is the one who can validate certificate information. In the best way it is the authority that is issuing the certificates but there can be other validators. This attribute has a relation to the trust level.

E.g. Business service providers that offer a validation service for company certificates.

#### 1.5.9 SOURCE

Attribute: source

This defines the company who orginally provided the given certificate (e.g. Company A provided it to Business service provider B, Business service provider B is a trusted validator). This company is also identified by a BPN.

#### 1.5.10 ID

Attribute: documentID

The internal reference id to request a certificate document.

### 1.6 INTERFACE

*This section is non-normative.*

In this section the interface / API for the data model is explained. The interface is a main factor for interoperability.

#### 1.6.1 META DATA CONTROLLER

For developers implementing the business partner certificate API, it is essential to have access to a list of registered certificate types. This information is necessary to ensure correct spelling and to determine which certificate types are available for use with other API endpoints in this use case. To obtain this information, developers can make an API call to the MetaDataController, using the following endpoint: /api/catena/certificate-types. This call returns a list of all currently registered certificate types.

In addition to accessing the list of registered certificate types, developers may also need to register a new certificate type. This is necessary when providing new certificates for which the type is not yet known. To register a new certificate type, developers can make an API call to the MetaDataController using the following endpoint (POST): /api/catena/create-certificate-type. This call allows developers to add a new certificate type to the list of registered types, ensuring that it is available for use with other API endpoints in this use case.

#### 1.6.2 PROVIDE A CERTIFICATE

In the context of data exchange within the Catena-X dataspace, companies may need to provide their own certificates or the certificates of their partners to other participants. To facilitate this process, a specific API call is available.

Using the following endpoint (POST): api/catena/certificate/document, companies can provide a certificate document for a legal entity, including all sites assigned to the certificate. This API call allows companies to securely and efficiently share their certificates with other participants in the dataspace, ensuring that all relevant information is included in the document. By providing this API call, the Catena-X dataspace enables seamless and secure data exchange between companies, promoting interoperability and trust in the data exchange process.

#### 1.6.2 REQUEST CERTIFICATE INFORMATION

To validate a certificate provided by a company, users can make use of the Catena-X dataspace API. The API provides a range of trust levels, which indicate the level of validation that has been performed on the certificate. These levels include None (no validation check at all), Low (manual validation check done by a human after upload), Medium (certificate provided by a trusted issuer and manually checked), High (automated cross-check via a database, such as TÜV), and Trusted (directly provided by the issuer, such as TÜV).

To access this information, users can make an API call to the following endpoint: /api/catena/certificate/simple/\{bpn\}/\{certificateType\} . This call returns a true/false value indicating whether the certificate is valid, as well as the certification valid-until date and the trust level.

In addition to validating certificates, users may also need to request specific certificate information based on the BPN L/S/A. To do this, they can make an API call to the following endpoint: /api/catena/certificate/\{bpn\} this call returns the requested certificate for a legal entity, including all sites assigned to the certificate. By providing these API calls, the Catena-X dataspace enables users to easily verify that a business partner has the necessary certification, promoting trust and confidence in the data exchange process.

To specify this call - its possible to add the certificate type to get a certicate for a given certificate type: /api/catena/certificate/\{bpn\}/\{certificateType\}.

The following endpoint: /api/catena/certificate/document/\{cdID\} returns requested certificate document for a legal entity including all sites assigned to a certificate - with the ID the direct and unique document can be requested and found.

## 2 MAIN CONTENT

The following rules are minimum requirements and may be supplemented.

### 2.1. DATA MODEL COMPANY CERTIFICATES

The following attributes that are described in detail in the terminology chapter MUST be provided when participating in the use case of company certificates:

- businessPartnerNumber with the datatype BPNL
- type with the datatype CertificateType
- registrationNumber as a string datatype
- validFrom with the datatype date
- validUntil with the datatype date
- trustLevel with the datatype TrustLevel
- documentID

There are attributes that are OPTIONAL:

- areaOfApplication with the datatype string. This is just relevant when there need to be additional details added to a certificate.
- enclosedSites with the datatype List of EcnlosedSites. This becomes a MUST attribute when the certificate is not only relevant for the legal entity but also for one site or more.
- issuer with the datatype BPN. Would be nice to know who issued the certificate but not mandatory.
- validator with the datatype TrustValidator. Typically validates certificate information so that it can be trusted (see also trust levels).

The data model is implemented according to the API specification that is published in the Tractus-X open source repository:
[BPDM certificate management api](https://github.com/eclipse-tractusx/bpdm-certificate-management/tree/main/doc/api)

### 2.2. COMPANY CERTIFICATE INTERFACE ENDPOINTS

The following GET and POST endpoints are MUST - especially for business service providers:

GET endpoints:

/api/catena/certificate/\{bpn\} - Get call certificates of a given BPN.
/api/catena/certificate/\{bpn\}/\{certificateType\} - Get a specific certificate by certicate type for a given BPN.
/api/catena/certificate/simple/\{bpn\}/\{certificateType\} -  This endpoint checks whether a provided BPN is certified for a specific certificate type.
/api/catena/certificate/document/\{cdID\} - Request a specific / unique certicate document for a given BPN.
/api/catena/certificate-types - Get a list of all currently registered certificate types.

POST endpoints:

/api/catena/certificate/document - Provide a specific certicate document for a given BPN.
/api/catena/certificate-types - Register a new certificate type.

### 2.2 OUT OF SCOPE

This standardization document does not describe the process and functionality of the lifecycle-management of certificates.  

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

[BPDM certificate management api](https://github.com/eclipse-tractusx/bpdm-certificate-management/tree/main/doc/api)

### 3.2 NON-NORMATIVE REFERENCES

*This section is non-normative.*

- [BPDM Catena-X Website](https://catena-x.net/en/offers/bpdm)
- CX – 0010 Business Partner Number

### 3.3 REFERENCE IMPLEMENTATIONS

*This section is non-normative.*

## ANNEXES

### FIGURES

*This section is non-normative.*

Intentionally left blank.

### TABLES

*This section is non-normative.*

Intentionally left blank.

[^1] : For details related to the Pool API, please see standard 0012.

[^2] : For details related to the Business Partner number and the different types, please see standard 0010.

[^3] : For details on the data model and data fields please refer to the 0074 Business Partner Gate API standard.

[^4] : https://catena-x.net/fileadmin/user_upload/Vereinsdokumente/Catena-X_IP_Regelwerk_IP_Regulations.pdf

[^5] : https://catena-x.net/de/standardisierung/catena-x-einfuehren-umsetzen/standardisierung/standard-library

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
