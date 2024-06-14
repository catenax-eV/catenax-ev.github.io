
# CX-0009 CX Registration API v.1.1.3

## ABSTRACT

To become a participant of Catena-X, each applicant must go through a
registration process. Registration is a mandatory requirement for all
further activities within the Catena-X network. The registration
process, along with other services, provide the foundation of trust for
the Catena-X network.

The Registration Service implements the endpoints that are needed for
the registration process.

## 1. Introduction

To become a participant of Catena-X, each applicant must go through a
registration process. Registration is a mandatory requirement for all
further activities within the Catena-X network. The registration
process, along with other services, provide the foundation of trust for
the Catena-X network.

### 1.1 Audience & Scope

> *This section is non-normative*

This standard is relevant for the following roles:

- Core Service Provider
- Onboarding Service Provider (for reference)

### 1.2 Context

> *This section is non-normative*

The registration API is used as part of the registration process.

### 1.3 Architecture Overview

> *This section is non-normative*

A core service provider operates among other things a registration
frontend through which a registering company can enter its data. In the
future, the registration service may be accessed remotely, for example
by onboarding service provider, so the API needs to be standardized.

### 1.4 Conformance

As well as sections marked as non-normative, all authoring guidelines,
diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,
SHOULD and SHOULD NOT in this document are to be interpreted as
described in [BCP
14](https://datatracker.ietf.org/doc/html/bcp14) \[[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)\]
\[[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)\] when, and
only when, they appear in all capitals, as shown here.

### 1.5 Proof of conformity

> *This section is non-normative*

All participants and their solutions will need to proof, that they are
conform with the Catena-X standards. To validate that the standards are
applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

Core service providers implementing their own registration solution MUST
proof their conformity by providing:

- An openAPI specification of the endpoints described

### 1.6 Terminology

> *This section is non-normative*

**Application Programming Interface (API)**

An application programming interface (API) is a way for two or more
computer programs to communicate with each other.

Additional terminology used in this standard can be looked up in the
glossary on the association homepage.

## 2. Catena-X Registration API

### 2.1 Preconditions and dependencies

The registration API is exposed to the Internet.

### 2.2 API SPEcification

#### 2.2.1 API-Endpoints

The registration API MUST implement the following endpoints -- in focus
are the API business logic / content and structure, the path name might change / be
different but the business logic behind as well as the attributes must
be followed. Details to the respective MUST and SHOULD statements may be found below.

Enter / verify company data

- GET /api/registration/legalEntityAddress/\{bpn\}
    Please note - this endpoint is currently only Core Service Provider relevant. The Core Service Provider **MUST** be able to pre-fill the company address data if the user company has a BPN. The endpoint path **MUST NOT** be followed as long as all validations and processes are implemente

    **Request body**

    >
    > n/a content inside the path
    >

    **Response body**

    >
    >
    >

- GET
    /api/registration/application/\{applicationId\}/companyDetailsWithAddress
    The Core Service Provider **MUST** provide the GET /\{applicationId\}/companyDetailsWithAddress endpoint for a standardized way to share the registration party data.

    **Request body**

    >
    > n/a content inside the path
    >

    **Response body**

        \{
        "companyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "string",
        "city": "string",
        "streetName": "string",
        "countryAlpha2Code": "string",
        "bpn": "string",
        "shortName": "string",
        "region": "string",
        "streetAdditional": "string",
        "streetNumber": "string",
        "zipCode": "string",
        "countryDe": "string",
        "uniqueIds": [
            \{
            "type": "COMMERCIAL_REG_NUMBER",
            "value": "string"
            \}
        ]
        \}

- GET /api/registration/company/country/\{alpha2Code\}/uniqueidentifiers
    The Core Service Provider **CAN** offer a GET /uniqueidentifiers endpoint to provide supported unique identifier based on the company lega address country alpha2Code.

    **Request body**

    >
    > n/a content inside the path
    >

    **Response body**

        [
        \{
            "id": 0,
            "label": "COMMERCIAL_REG_NUMBER"
        \}
        ]

- POST
    /api/registration/application/\{applicationId\}/companyDetailsWithAddress
    The Core Service Provider **MUST** provide the POST /\{applicationId\}/companyDetailsWithAddress endpoint for a standardized way to store/post the registration party data.

    **Request body**

       \{
        "companyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "string",
        "city": "string",
        "streetName": "string",
        "countryAlpha2Code": "string",
        "bpn": "string",
        "shortName": "string",
        "region": "string",
        "streetAdditional": "string",
        "streetNumber": "string",
        "zipCode": "string",
        "countryDe": "string",
        "uniqueIds": [
            \{
            "type": "COMMERCIAL_REG_NUMBER",
            "value": "string"
            \}
        ]
        \}

    **Response body**

    >
    > success/error
    >

Company roles and consent

- GET /api/registration/company/companyRoles
    The Core Service Provider **MUST** implement the GEt /companyRoles endpoint.

    **Request body**

    >
    > n/a content inside the path
    >

    **Response body**

        [
        \{
            "companyRole": "string",
            "roleDescription": "string"
        \}
        ]

- Get: /api/registration/companyRoleAgreementData
    The Core Service Provider **MUST** implement the GET /companyRoleAgreementData endpoint.

    **Request body**

    >
    > n/a content inside the path
    >

    **Response body**

        \{
        "companyRoles": [
            \{
            "companyRole": "ACTIVE_PARTICIPANT",
            "descriptions": \{
                "additionalProp1": "string",
                "additionalProp2": "string",
                "additionalProp3": "string"
            \},
            "agreementIds": [
                "uuid"
            ]
            \}
        ],
        "agreements": [
            \{
            "agreementId": "uuid",
            "name": "string",
            "documentId": "uuid"
            \}
        ]
        \}

- POST
    /api/registration/application/\{applicationId\}/companyRoleAgreementConsents
    The Core Service Provider **MUST** implement the GET /companyRoleAgreementConsents endpoint.

    **Request body**

        \{
        "companyRoles": [
            "ACTIVE_PARTICIPANT"
        ],
        "agreements": [
            \{
            "agreementId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "consentStatus": "ACTIVE"
            \}
        ]
        \}

    **Response body**

    >
    > success/error
    >

Registration relevant documents

- GET
    /api/registration/application/\{applicationId\}/documentType/\{documentTypeId\}/documents
    The Core Service Provider **SHOULD** implement the GET /\{documentTypeId\}/documents endpoint.

- POST
    /api/registration/application/\{applicationId\}/documentType/\{documentTypeId\}/documents
    The Core Service Provider **SHOULD** implement the POST /\{documentTypeId\}/documents endpoint. Depending on the Core Service Provider implemented registration process authentication methods, the document endpoint might change within the endpoint path or business logic.

- DELETE /api/registration/documents/\{documentId\}
    The Core Service Provider **SHOULD** implement the DELETE /\{documentTypeId\}/documents endpoint to enable the onboarding customer to delete own previous uploaded document again. Important are audit relevant processes. The Core Service Provider **MUST** ensure that audit guidelines are not violated.

- GET /api/registration/Documents/\{documentId\}
    The Core Service Provider **MUST** support to display the user company loaded documents. The endpoint path might change but the Core Service Provider **MUST** ensure that validations are implemeneted (e.g. the company user can not access uploaded documents of a second registration company)

Verify and submit registration

- GET
    /api/registration/application/\{applicationID\}/registrationData
    The Core Service Provider **MUST** support a GET /\{applicationID\}/registrationData endpooint with the reference implemented properties/attributes. This ensures that the company registrationData can be viewed in a standardized model.

    **Request body**

        \{
        "companyId": "uuid",
        "name": "string",
        "bpn": "string",
        "shortName": "string",
        "city": "string",
        "region": "string",
        "streetAdditional": "string",
        "streetName": "string",
        "streetNumber": "string",
        "zipCode": "string",
        "countryAlpha2Code": "string",
        "countryDe": "string",
        "companyRoles": [
            "ACTIVE_PARTICIPANT"
        ],
        "agreements": [
            \{
            "agreementId": "uuid",
            "consentStatus": "ACTIVE"
            \}
        ],
        "documents": [
            \{
            "documentName": "string"
            \}
        ],
        "uniqueIds": [
            \{
            "type": "COMMERCIAL_REG_NUMBER",
            "value": "string"
            \}
        ]
        \}

    **Response body**

    >
    > success/error
    >

- POST
    /api/registration/application/\{applicationID\}/submitregistration

Registration Application Verification

- Auto Workflow as per the process description:
    https://github.com/eclipse-tractusx/portal-assets/blob/main/developer/01.%20Onboarding/03.%20Registration%20Approval/03.%20Registration%20Approval%20Process.md

- POST
    /api/administration/registration/application/\{applicationId\}/approve
    Please note - this endpoint is currently only Core Service Provider relevant. The Core Service Provider **MUST** be able to approve (with message, backend business logic and email information) a registration request. The endpoint path **MUST NOT** be followed as long as all validations and processes are implemented.

- POST
    /api/administration/registration/application/\{applicationId\}/decline
    Please note - this endpoint is currently only Core Service Provider relevant. The Core Service Provider **MUST** be able to decline (with message and email information) a registration request. The endpoint path **MUST NOT** be followed as long as all validations and processes are implemented.

- POST /api/administration/registration/application/clearinghouse
    Please note - this endpoint is currently only Core Service Provider relevant. The Core Service Provider **MUST** be able to trigger the CH trust anchor. The endpoint path **MUST NOT** be followed, but the endpoint business logic must be followed to allow a standardized interface with the GXCH.

- POST
    /api/administration/registration/application/\{applicationId\}/retrigger-clearinghouse
    Please note - this endpoint is currently only Core Service Provider relevant. The Core Service Provider **MUST** be able to retrigger/overwrite the CH decision if necessary. The endpoint path **MUST NOT** be followed, but the endpoint business logic must be followed to allow a standardized interface with the GXCH.

- POST
    /api/administration/registration/application/\{applicationId\}/trigger-identity-wallet

- POST
    /api/administration/registration/application/\{applicationId\}/trigger-bpn

- POST
    /api/administration/registration/application/clearinghouse/selfDescription

#### 2.2.2 Available Data Types

The registration API MUST use JSON as the payload transported via HTTP.

#### 2.2.3 API resources & endpoints

The HTTP endpoints introduced in this standard MUST implement
authentication and authorization.

#### 2.2.4 Error Handling

HTTP standard response codes MUST be used.

##### 2.2.4.1 Error Messages & Explanation

The following http response codes MUST be defined for HTTP POST
endpoint:

|     Code    |     Description                                       |
|-------------|-------------------------------------------------------|
|     201     |     Registration message was received successfully    |
|     400     |     Request body was malformed                        |
|     401     |     Not authorized                                    |
|     403     |     Forbidden                                         |
|     405     |     Method not allowed                                |
|     409     |     Error                                             |
