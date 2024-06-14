# CX-0048 Demand and Capacity Management API Material Demand and Capacity Group v1.0.0

## Table of Contents

## DISCLAIMER REGARDING DEMAND AND CAPACITY MANAGEMENT DATA EXCHANGE

This document describes and standardizes certain data exchange business processes, data models
and/or APIs in connection with cross-company demand and capacity management (DCM) based on the
Catena-X data ecosystem. Nothing in this document is meant to determine the contractual terms and
conditions for the purchase, supply, delivery or licensing of any products or services among the
participants of the DCM data exchange. These terms and conditions are separately negotiated and
agreed among suppliers and customers in individual purchase, supply or license agreements.
In case of any inconsistencies with the content of this document, the provisions of individual
agreements among the participants shall prevail over the content of this document.

## ABSTRACT

For cross-company demand and capacity management (DCM), the exchange of demand and capacity
information is the foundation. The demand information describes the part-demand of a customer and is
send to a supplier, in order to tell the supplier which parts and how many of them are needed in a
given calendar week. The capacity group is sent from the supplier to the customer in order to
communicate the production capacity for a specific material in a specific calendar week.

In this document, the exchange of the material demand and capacity group information is described
and standardized.

## 1. INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for:

- **Data Provider / Consumer**
- **Business Application Providers** (for tools relevant for demand and capacity management processes)

The `WeekBasedMaterialDemand` object will be sent by customers to their suppliers in order to communicate
how many parts or materials they need in which period of time. The customers of parts therefore need
to be able to create `WeekBasedMaterialDemand` objects and the suppliers need to be able to interpret
them. As most suppliers have their own suppliers, who produce parts for them, most suppliers are therefore
acting as customers as well and need to be able to also create `WeekBasedMaterialDemand` objects for
sending their own demand to their suppliers.

The `WeekBasedCapacityGroup` object will be sent by suppliers to their customers in order to communicate
the production capacity for a specific part or material in specific period of time. Therefore, all companies
that supply parts or materials to other companies, need to be able to create `WeekBasedCapacityGroup`
objects and send them to their customers. The customers need to be able to receive and interpret the
`WeekBasedCapacityGroup` information.

The underlying business process is described and standardized in \[[CX-0046](#41-normative-references)].

### 1.2 CONTEXT

> *This section is non-normative*

In this document the WeekBasedMaterialDemand API and WeekBasedCapacityGroup API are described and
standardized to ensure a consistent data exchange and data consumption through EDC between the DCM
participants. Thereby an identical interpretation of the data across companies is ensured.

The underlying `WeekBasedMaterialDemand` and `WeekBasedCapacityGroup` data model is standardized in \[[CX-0047](#41-normative-references)].

The business process is standardized in \[[CX-0046](#41-normative-references)].

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

General overview: the `WeekBasedMaterialDemand` as well as the `WeekBasedCapacityGroup` is a JSON
string which is sent through EDC. The JSON string is standardized in this document and contains
either `WeekBasedMaterialDemand` or `WeekBasedCapacityGroup` information.

The standard only describes the sending and receiving of `WeekBasedMaterialDemand` and
`WeekBasedCapacityGroup` through EDC. Both objects are created and handled by applications of the
companies involved, but these applications are not part of the standard.

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**,**REQUIRED**,
**SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14
[RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to proof, that they are conform with the Catena-X
standards. To validate that the standards are applied correctly, Catena-X employs Conformity
Assessment Bodies (CABs). Please refer to: *[!LINK Conformity Assessment]* for the process of
conformity assessment and certification.

- An example `WeekBasedMaterialDemand` JSON as created by their solution
- An example `WeekBasedCapacityGroup` JSON as created by their solution
- A proof that their solution can process the example payload JSON as listed below

In case an assessee wants to get certified
: When requesting assessment
Then the assessee produces a letter affirming that they adhere to this standard
And the letter is signed by person who has full power of attorney

Note that in a future revision of this standard it is planned to offer descriptions of test sets
including test cases and test data for validating API implementations.

### 1.6 EXAMPLES

Example JSON strings for `WeekBasedMaterialDemand` and `WeekBasedCapacityGroup` can be found in the
data model standard \[[CX-0047](#41-normative-references)].

### 1.7 TERMINOLOGY

> *This section is non-normative*

| **Term** | **Description** |
| --- | --- |
| **Business Partner Number Legal Entity (BPNL)** | A BPNL is the unique identifier of a partner within Catena-X, e.g. a company. |
| **Business Partner Number Site (BPNS)** | A BPNS is the unique identifier of a partner location within Catena-X, e.g. a specific factory of a company. |
| **WeekBasedMaterialDemand** | Refers to the `WeekBasedMaterialDemand` object with the same name from the standard \[[CX-0047](#41-normative-references)]. |
| **WeekBasedCapacityGroup** | Refers to the `WeekBasedCapacityGroup` object with the same name from the standard \[[CX-0047](#41-normative-references)]. |

For a description of further terms please refer to the data model in the standard \[[CX-0047](#41-normative-references)].

Additional terminology used in this standard can be looked up in the glossary on the association
homepage.

## 2. WeekBasedMaterialDemand API

> *This section is normative*

The `WeekBasedMaterialDemand` contains the material demand information which is send from the
customer to the supplier.

All participants participating in Catena-X DCM in the role of a customer MUST be able to send the
`WeekBasedMaterialDemand`. All participants participating in Catena-X DCM in the role of a supplier
MUST be able to receive and process the `WeekBasedMaterialDemand`.

## 2.1 PRECONDITIONS AND DEPENDENCIES

The `WeekBasedMaterialDemand` API MUST be published towards the network using a Data Asset/Contract
Offer in terms of the Dataspace Protocol as defined by IDSA, following the Catena-X standard
SOV-001.

## 2.2 API SPECIFICATION

### 2.2.1 API Endpoints & Resources

To support the exchange of `WeekBasedMaterialDemand` data, a business application MUST define a
single endpoint supporting the HTTP POST request method as described in \[[RFC9110](#42-non-normative-references)].
The structure of the endpoint MAY be freely chosen. The address of the endpoint MUST be provided
as part of the EDC Data Asset defined in chapter [2.2.5](#225-edc-data-asset-structure) of this document.

### 2.2.2 Data Exchange

The WeekBasedMaterialDemand data MUST be sent from the customer to the supplier using an HTTP POST
request. The data format described here MUST be followed for the exchange of the material demand
information.

Multiple `WeekBasedMaterialDemand` aspects MAY be sent in one transfer as a JSON list. If only one
`WeekBasedMaterialDemand` aspect is transmitted, it MUST still be sent as a list with one entry.

The serialized JSON MUST NOT be larger than 15 MiB in size.

The `WeekBasedMaterialDemand` endpoint MUST be implemented by all participants who wish to
participate in the Catena-X DCM network as a supplier. Customers MUST be able to send material
demand objects to their suppliers.

The data payload itself MUST be a valid JSON string.

All attributes marked as mandatory in the standard \[[CX-0047](#41-normative-references)] MUST be included
in the dataset. Attributes marked as 'Optional' MAY be included in the data set.

The usage of the attributes in the data model MUST follow the attribute descriptions in the definitions
in \[[CX-0046](#41-normative-references)]. While some attributes are technically a
string, not any string is valid. For example, expectedSupplierLocations MUST be formatted as a BPNS.

The calenderWeek MUST be set to a Monday of the week for that specific demand. The date format MUST
be in accordance with \[[ISO8601](#42-non-normative-references)] and MUST be in the format
YYYY-MM-DD (for example 2023-02-13).

The attributes 'demandCategory' and 'unitOfMeasure' MUST be set to one of the defined values as
defined in the standard \[[CX-0046](#41-normative-references)].

 > **Definition from \[[CX-0046](#41-normative-references)]** (Standardized there, non-normative
quote here) "*The customer owns and MUST publish its own demand with its supplier for the future
horizon and it is highly RECOMMENDED to avoid any gaps as far as possible and to share demand data
at least till month 9, to ensure DCM participants to have also sufficient demand data to work with.*
*If more demand data is available (i.e. demand related to a horizon that spans beyond month 9), the
customer MAY ideally provide them until month 24. If a customer has even more demand data available
(i.e. demand related to a horizon that spans beyond month 24), he MAY also provide this to his
supplier. The data series MAY start already from week n+2. Although the data series MAY start
already from week n+2 and can be elaborated from a technical perspective, the DCM process have a
clear focus on the tactical mid- to long-term horizon (typically considered from month 4 to 24) to
enable a more resilient supply chain.*"

In addition to the definitions from \[[CX-0046](#41-normative-references)] quoted above, the following
rules have to be followed:

The data series in the `WeekBasedMaterialDemand` SHOULD start already from week *n+2*.

The demand for the current week (*n=0*) and the next week (*n=1*) MAY be included in the dataset.
The `WeekBasedMaterialDemand` MUST include at least one week other than the current or the next week
(meaning it may not be empty). Every week MUST NOT be included multiple times in the same
`WeekBasedMaterialDemand`.

If the demand for one of the weeks changes, the whole dataset MUST be sent to the supplier; sending
the changes only (delta update / incremental update) is not possible. By this procedure,
inconsistent or incomplete data sets are avoided. One data transfer MUST contain at least one
`WeekBasedMaterialDemand` data set.

For the combination of the attributes supplier, customer and materialNumberCustomer in the object
`WeekBasedMaterialDemand`, there MUST NOT be more than one `WeekBasedMaterialDemand` object in
existence. This means that the customer needs to collect all demands for all factories and send them
aggregated as one `WeekBasedMaterialDemand` to the supplier.

If the demand in a certain week has the value `0`, it MUST be explicitly included as such in the
`WeekBasedMaterialDemand`, meaning the week cannot be left out (as there is a difference between
null and 0). Weeks with an unknown demand (value `null`) SHOULD be left out.

### 2.2.3 UUID generation and handling

When exchanging demand data, the usage of UUIDv4 is required in order to reduce the probability of
collision as well as to eliminate certain attack vectors. For technical purposes the UUIDv4 MUST be
treated as unique within the supplier-customer relationship. For the combination of attributes: supplier,
customer and materialNumberCustomer in the object `WeekBasedMaterialDemand` there MUST be exactly one
unique UUIDv4.

The UUIDv4 MUST be generated according to \[[RFC4122](#41-normative-references)].

Refer to chapter [2.2.7](#227-validating-payload) for further handling information.

### 2.2.4 Available Data Types

The API MUST use JSON as the payload transported via HTTPS.

### 2.2.5 EDC Data Asset Structure

The HTTP POST endpoint introduced in chapter [2.2.1](#221-api-endpoints--resources) MUST NOT be
called from a supply chain partner directly. Rather, it MUST be called via an EDC communication.
Therefore, the endpoint MUST be offered as an EDC Data Asset. The latter MUST have a property
`asset:prop:dcm` with value `weekbasedmaterialdemand-endpoint`. This property SHOULD be used to
identify the asset when searching the assets catalog of a supplier. Because the asset reflects the
contractual relationship between a supplier and its customers, only one asset with the
aforementioned property MUST be visible to the customer at any time to avoid ambiguity.

An example EDC Data Asset definition with a corresponding access / usage policy and contract
definition are shown below.

>Note: Expressions in double curly braces \{\{\}\} must be substituted with a corresponding value.

```json
// Asset definition
{
    "asset": {
        "properties": {
            "asset:prop:id": "1",
            "asset:prop:dcm": "weekbasedmaterialdemand-endpoint",
            "asset:prop:description": "Endpoint for provisioning of week based material demands"
        }
    },
    "dataAddress": {
        "properties": {
            "type": "HttpData",
            "baseUrl": "{{ **URL-WEEKBASEDMATERIALDEMAND-ENDPOINT** }}"
        }
    }
}
```

```json
// Access and Usage Policy definition
{
    "id": "1",
    "policy": {
        "prohibitions": [
        ],
        "obligations": [
        ],
        "permissions": [
            {
                "edctype": "dataspaceconnector:permission",
                "action": {
                    "type": "USE"
                },
                "constraints": [
                    {
                        "edctype": "AtomicConstraint",
                        "leftExpression": {
                            "edctype": "dataspaceconnector:literalexpression",
                            "value": "BusinessPartnerNumber"
                        },
                        "rightExpression": {
                            "edctype": "dataspaceconnector:literalexpression",
                            "value": "{{ **CUSTOMER-BPN** }}"
                        },
                        "operator": "EQ"
                    }
                ]
            }
        ]
    }
}
```

```json
// Contract definition
{
    "id": "1",
    "criteria": [
        {
            "operandLeft": "asset:prop:id",
            "operator": "=",
            "operandRight": "1"
        }
    ],
    "accessPolicyId": "1",
    "contractPolicyId": "1"
}
```

### 2.2.6 Error Handling

Every API endpoint defined in chapter [2.2.1](#221-api-endpoints--resources) MUST respond to incoming
requests with HTTP status codes as described in \[[RFC9110](#42-non-normative-references)].
All of the following HTTP status codes, except for codes 200 and 201, MUST be interpreted as failures.
Therefore, it may be sufficient for a business application to simply check if the status
code is 200 or 201 or not. If not, the request failed.

| **HTTP Status Code** | **HTTP Status Message** | **Description** |
| --- | --- | --- |
| 200 | OK | The request has succeeded. The `WeekBasedMaterialDemand` has been successfully processed in the backend system. |
| 201 | Created | The request has succeeded and has led to the creation of a new `WeekBasedMaterialDemand` in the backend system. |
| 400 | Bad request | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). |
| 401 | Unauthorized |
| 403 | Forbidden | The `WeekBasedMaterialDemand` in question is not available for the client (e.g. it belongs to a different company) |
| 405 | Method not allowed | The method used to request the data was not POST |
| 422 | Unprocessable Entity | The request was well-formed but was unable to be followed due to semantic errors, e.g. the JSON payload could not be parsed. |
| 503 | Service Unavailable |

If one `WeekBasedMaterialDemand` aspect is transmitted in one HTTP request, the return codes MUST be
used as stated in the table above.

If a list of multiple `WeekBasedMaterialDemand` aspects is transmitted in one HTTP request, the
status code 400 MUST be used if at least one `WeekBasedMaterialDemand` in the list cannot be
processed. Applications MAY choose to process valid entries from a list which also contains invalid
entries. If a list of multiple `WeekBasedMaterialDemand` aspects is transmitted in one HTTP request,
and all of them can be processed successfully, the status code 200 MUST be used.

The return codes 401, 405, 422 and 503 in the table above MAY also be applicable to a list of
multiple `WeekBasedMaterialDemand` aspects.

Further status codes may be included in a later revision of this standard. The ability to send and
receive one status code per sent or received list item might be included in a later revision of this
standard.

### 2.2.7 Validating payload

The following tables are supposed to answer questions regarding what business logic MUST be executed
when receiving a `WeekBasedMaterialDemand` which has been formed in a specific way.

A non-normative overview of all rules can be found in \[[PayloadValidationRules](#42-non-normative-references)].

The order of rules is indicated by the 'Number' row. The rules MUST be executed in exactly this
order, starting from the lowest number.

The first rule that matches MUST be executed. All other rules MUST be ignored.

'value' indicates the actual value written in quotation marks and without any specific formatting
(e.g. italic).

*Valid value* indicates that the value is valid according to \[[CX-0047](#41-normative-references)]
and \[[CX-0048](#41-normative-references)] (this standard) and \[[CX-0046](#41-normative-references)].

*Invalid value* indicates that the value is invalid according to \[[CX-0047](#41-normative-references)]
and \[[CX-0048](#41-normative-references)] (this standard) and \[[CX-0046](#41-normative-references)].

*Any value* indicates that the value can by anything, valid or not.

A whitespace or an empty cell indicates that for this specific rule that row is not applicable.

| **Number** | 1 | |
| :--- | :---: | :---: |
| **Properties** | | |
| **Meta properties** | Any property | *Invalid value* |
| | All other properties | *Any value* |
| **Actions** | Business Logic | Ignore received values |
| |Return Code | 400 – Bad Request |

| **Number** | 2 | |
| :--- | :---: | :---: |
| **Properties** | customer | Customer BPNL does not match the sending EDCs registered BPNL |
| **Meta properties** | Any property |
| | All other properties | *Valid value* |
| **Actions** | Business Logic | Ignore received values |
| | Return Code | 400 – Bad Request |

| **Number** | 3 | |
| :--- | :---: | :---: |
| **Properties** | supplier | Supplier does not match any Supplier BPNL that I am responsible for |
| **Meta properties** | Any property |
| | All other properties | *Valid value* |
| **Actions** | Business Logic | Ignore received values |
| | Return Code | 400 – Bad Request |

| **Number** | 4 | |
| :--- | :---: | :---: |
| **Properties** | materialDemandID | *Known value* |
| | changedAt | More recent than all previously received `WeekBasedMaterialDemand` with the same materialDemandID |
| **Meta properties** | Any property |
| | All other properties | *Valid value* |
| **Actions** | Business Logic | Overwrite all existing values |
| | Return Code | 200 – OK |

| **Number** | 5 | |
| :--- | :---: | :---: |
| **Properties** | materialDemandID | *Unknown value*, but there exists another UUID for the exact same combination of supplier, customer and materialNumberCustomer |
| | customer | *Known value* |
| | supplier | *Known value* |
| | materialNumberCustomer | *Known value* |
| **Meta properties** | Any property |
| | All other properties | *Valid value* |
| **Actions** | Business Logic | Ignore received values |
| | Return Code | 400 – Bad Request |

| **Number** | 6 | |
| :--- | :---: | :---: |
| **Properties** | materialDemandID | *Unknown value* |
| **Meta properties** | Any property |
| | All other properties | *Valid value* |
| **Actions** | Business Logic | Save as new material demand with received values |
| | Return Code | 201 - Created |

| **Number** | 7 | |
| :--- | :---: | :---: |
| **Properties** | materialDemandID | *Known value* |
| | changedAt | Older than any previously received `WeekBasedMaterialDemand` with the same materialDemandID |
| **Meta properties** | Any property |
| | All other properties | *Any value* |
| **Actions** | Business Logic | Ignore received values |
| | Return Code | 400 – Bad Request |

| **Number** | 8 | |
| :--- | :---: | :---: |
| **Properties** | materialDemandID | *Known value* |
| | changedAt | Identical to the most recent of all previously received `WeekBasedMaterialDemand` with the same materialDemandID |
| **Meta properties** | Any property |
| | All other properties | *Any value* |
| **Actions** | Business Logic | Overwrite all existing values with received values |
| | Return Code | 200 – OK |

## 3. WeekBasedCapacityGroup API

> *This section is normative*

The `WeekBasedCapacityGroup` contains the capacity group information which is send from the supplier
to the customer.

All participants participating in Catena-X DCM in the role of a supplier MUST be able to send the
`WeekBasedCapacityGroup`. All participants participating in Catena-X DCM in the role of a customer
MUST be able to receive and process the `WeekBasedCapacityGroup`.

## 3.1 PRECONDITIONS AND DEPENDENCIES

The WeekBasedCapacityGroup API MUST be published towards the network using a Data Asset/Contract
Offer in terms of the Dataspace Protocol as defined by IDSA, following the Catena-X standard
SOV-001.

## 3.2 API SPECIFICATION

### 3.2.1 API Endpoints & Resources

To support the exchange of `WeekBasedCapacityGroup` data, a business application MUST define a
single endpoint supporting the HTTP POST request method as described in \[[RFC9110](#42-non-normative-references)].
The structure of the endpoint MAY be freely chosen. The address of the endpoint MUST be provided as
part of the EDC Data Asset defined in chapter [3.2.5](#325-edc-data-asset-structure) of this document.

### 3.2.2 Data Exchange

The `WeekBasedCapacityGroup` data MUST be sent from the supplier to the customer using an HTTP POST
request. The data format described here MUST be followed for the exchange of the capacity group
information.

Multiple `WeekBasedCapacityGroup` aspects MAY be sent in one transfer as a JSON list. If only one
`WeekBasedCapacityGroup` aspect is transmitted, it MUST still be sent as a list with one entry.

The serialized JSON MUST NOT be larger than 15 MiB in size.

The WeekBasedCapacityGroup endpoint MUST be implemented by all participants who wish to participate
in the Catena-X DCM network as a customer. Suppliers MUST be able to send `WeekBasedCapacityGroup`
objects to their customers.

The data payload itself MUST be a valid JSON string.

All attributes marked as mandatory in the standard \[[CX-0047](#41-normative-references)] MUST be
included in the dataset. Attribute marked as 'Optional' CAN be included in the data set.

The usage of the attributes in the data model MUST follow the attribute descriptions in the standard
\[[CX-0047](#41-normative-references)] and the definitions in \[[CX-0046](#41-normative-references)].
For example, an exact definition of the different capacities is provided there and needs to be observed.

While some attributes are technically a string, not any string is valid. For example, supplier MUST
be formatted as a BPNL (see table above).

The calenderWeek MUST be set to a Monday of the week for that specific `WeekBasedCapacityGroup`. The
date format MUST be in accordance with \[[ISO8601](#42-non-normative-references)] and MUST be in the
format YYYY-MM-DD (for example 2023-02-13).

The data payload itself MUST be a valid JSON file.

The attributes 'demandCategory' and 'unitOfMeasure' MUST be set to one of the defined values as
defined in the standard \[[CX-0047](#41-normative-references)].

The capacities for the current week (*n=0*) and the next week (*n=1*) MAY be included in the
dataset. The `WeekBasedCapacityGroup` MUST include at least one week other than the current or the
next week (meaning it may not be empty). Every week MUST NOT be included multiple times in the same
`WeekBasedCapacityGroup`.

If the capacity for one of the weeks changes, the whole dataset MUST be sent to the customer,
sending the changes only (delta update / incremental update) is NOT possible. By this procedure,
inconsistent or incomplete data sets are avoided. One data transfer MUST contain at least one
`WeekBasedCapacityGroup` data set.

Additional business-process related rules are specified in the 'process template', these MUST be
followed as well. For example, the 'process template' defines a capacity and how it is to be
interpreted or that a demand must be consistent with other exchanged information such as call-offs.
All `WeekBasedCapacityGroup` objects MUST only use a mutually agreed unit of measure (as defined in
the standard \[[CX-0046](#41-normative-references)]).

The property linkedDemandSeries is used to indicate to which `WeekBasedMaterialDemand` object a
`WeekBasedCapacityGroup` object refers to. More specifically, the linkedDemandSeries refers to a
demand for a specific demandCategory / customerLocation / materialNumberCustomer combination.

One specific combination of demandCategory / customerLocation / materialNumberCustomer MAY be
referred to in multiple `WeekBasedCapacityGroup` objects. Therefore, one materialNumberCustomer MAY
be contained in linkedDemandSeries of several different `WeekBasedCapacityGroup` objects.

The order of the entries listed in the linkedDemandSeries of a `WeekBasedCapacityGroup` is arbitrary
and MUST be treated as such.

### 3.2.3 UUID generation and handling

When exchanging demand data, the usage of UUIDv4 is required in order to reduce the probability of
collision as well as to eliminate certain attack vectors. For technical purposes the UUIDv4 MUST be
treated as unique within the supplier-customer relationship.

The UUIDv4 MUST be generated according to \[[RFC4122](#41-normative-references)].

Refer to chapter [3.2.7](#327-validating-payload) for further handling information.

### 3.2.4 Available Data Types

The API MUST use JSON as the payload transported via HTTPS.

### 3.2.5 EDC Data Asset Structure

The HTTP POST endpoint introduced in chapter [3.2.1](#321-api-endpoints--resources) MUST NOT be
called from a supply chain partner directly. Rather, it MUST be called via an EDC communication.
Therefore, the endpoint MUST be offered as an EDC Data Asset. The latter MUST have a property "
**asset:prop:dcm**" with value " **weekbasedcapacitygroup-endpoint**". This property SHOULD be used
to identify the asset when searching the assets catalog of a customer. Because the asset reflects
the contractual relationship between a customer and its suppliers, only one asset with the
aforementioned property MUST be visible to the supplier at any time to avoid ambiguity.

An example EDC Data Asset definition with a corresponding access / usage policy and contract
definition are shown below.

>Note: Expressions in double curly braces \{\{\}\} must be substituted with a corresponding value.

```json
// Asset definition
{
    "asset": {
        "properties": {
            "asset:prop:id": "1",
            "asset:prop:dcm": "weekbasedcapacitygroup-endpoint",
            "asset:prop:description": "Endpoint for provisioning of week based capacity groups"
        }
    },
    "dataAddress": {
        "properties": {
            "type": "HttpData",
            "baseUrl": "{{URL-WEEKBASEDCAPACITYGROUP-ENDPOINT}}"
        }
    }
}
```

```json
// Access and Usage Policy definition
{
    "id": "1",
    "policy": {
        "prohibitions": [
        ],
        "obligations": [
        ],
        "permissions": [
            {
                "edctype": "dataspaceconnector:permission",
                "action": {
                    "type": "USE"
                },
                "constraints": [
                    {
                        "edctype": "AtomicConstraint",
                        "leftExpression": {
                            "edctype": "dataspaceconnector:literalexpression",
                            "value": "BusinessPartnerNumber"
                        },
                        "rightExpression": {
                            "edctype": "dataspaceconnector:literalexpression",
                            "value": "{{SUPPLIER-BPN}}"
                        },
                        "operator": "EQ"
                    }
                ]
            }
        ]
    }
}
```

```json
// Contract definition
{
    "id": "1",
    "criteria": [
        {
            "operandLeft": "asset:prop:id",
            "operator": "=",
            "operandRight": "1"
        }
    ],
    "accessPolicyId": "1",
    "contractPolicyId": "1"
}
```

### 3.2.6 Error Handling

Every API endpoint defined in chapter [3.2.1](#321-api-endpoints--resources) MUST respond to incoming
requests with HTTP status codes as described in \[[RFC9110](#42-non-normative-references)].
All of the following HTTP status codes, except for codes 200 and 201, MUST be interpreted as failures.
Therefore, it may be sufficient for a business application to simply check if the status code is
200 or 201 or not. If not, the request failed.

| **HTTP Status Code** | **HTTP Status Message** | **Description** |
| --- | --- | --- |
| 200 | OK | The request has succeeded. The `WeekBasedCapacityGroup` has been successfully processed in the backend system. |
| 201 | Created | The request has succeeded and has led to the creation of a new `WeekBasedCapacityGroup` in the backend system. |
| 400 | Bad request | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). |
| 401 | Unauthorized |
| 403 | Forbidden | The `WeekBasedCapacityGroup` in question is not available for the client (e.g. it belongs to a different company) |
| 405 | Method not allowed | The method used to request the data was not POST |
| 422 | Unprocessable Entity | The request was well-formed but was unable to be followed due to semantic errors, e.g. the JSON payload could not be parsed. |
| 503 | Service Unavailable |

If one `WeekBasedCapacityGroup` aspect is transmitted in one HTTP request, the return codes MUST be
used as stated in the table above.

If a list of multiple `WeekBasedCapacityGroup` aspects is transmitted in one HTTP request, the
status code 400 MUST be used if at least one `WeekBasedCapacityGroup` in the list cannot be
processed. Applications MAY choose to process valid entries from a list which also contains invalid
entries. If a list of multiple `WeekBasedCapacityGroup` aspects is transmitted in one HTTP request,
and all of them can be processed successfully, the status code 200 MUST be used.

The return codes 401, 405, 422 and 503 in the table above MAY also be applicable to a list of
multiple `WeekBasedCapacityGroup` aspects.

Further status codes may be included in a later revision of this standard. The ability to send and
receive one status code per sent or received list item might be included in a later revision of this
standard.

### 3.2.7 Validating Payload

The following tables are supposed to answer questions regarding what business logic MUST be executed
when receiving a `WeekBasedCapacityGroup` which has been formed in a specific way.

An overview of all rules can be found in \[[PayloadValidationRules](#42-non-normative-references)].

The order of rules is indicated by the 'Number' row.

The first rule that matches MUST be executed. All other rules MUST be ignored.

'value' indicates the actual value written in quotation marks and without any specific formatting
(e.g. italic).

*Valid value* indicates that the value is valid according to \[[CX-0047](#41-normative-references)]
and \[[CX-0048](#41-normative-references)] (this standard) and \[[CX-0046](#41-normative-references)].

*Invalid value* indicates that the value is invalid according to \[[CX-0047](#41-normative-references)]
and \[[CX-0048](#41-normative-references)] (this standard) and \[[CX-0046](#41-normative-references)].

*Any value* indicates that the value can by anything, valid or not.

A whitespace or an empty cell indicates that for this specific rule that row is not applicable.

| **Number** | 1 | |
| :--- | :---: | :---: |
| **Properties** | | |
| **Meta properties** | Any property | *Invalid value* |
| | All other properties | *Any value* |
| **Actions** | Business Logic | Ignore received values |
| | Return Code | 400 – Bad Request |

| **Number** | 2 | |
| :--- | :---: | :---: |
| **Properties** | supplier | Supplier BPNL does not match the sending EDCs registered BPNL |
| **Meta properties** | Any property | |
| | All other properties | *Valid value* |
| **Actions** | Business Logic | Ignore received values |
| | Return Code | 400 – Bad Request |

| **Number** | 3 | |
| :--- | :---: | :---: |
| **Properties** | customer | Customer does not match any Customer BPNL that I am responsible for |
| **Meta properties** | Any property | |
| | All other properties | *Valid value* |
| **Actions** | Business Logic | Ignore received values |
| | Return Code | 400 – Bad Request |

| **Number** | 4 | |
| :--- | :---: | :---: |
| **Properties** | capacityGroupID | *Known value* |
| | changedAt | More recent than all previously received `WeekBasedCapacityGroup` with the same capacityGroupID |
| **Meta properties** | Any property | |
| | All other properties | *Valid value* |
| **Actions** | Business Logic | Overwrite all existing values |
| | Return Code | 200 – OK |

| **Number** | 5 | |
| :--- | :---: | :---: |
| **Properties** | capacityGroupID | *Unknown value* |
| **Meta properties** | Any property | |
| | All other properties | *Valid value* |
| **Actions** | Business Logic | Save as new capacity group with received values |
| | Return Code | 201 - CREATED |

| **Number** | 6 | |
| :--- | :---: | :---: |
| **Properties** | capacityGroupID | *Known value* |
| | changedAt | Older than any previously received `WeekBasedCapacityGroup` with the same capacityGroupID |
| **Meta properties** | Any property | |
| | All other properties | *Any value* |
| **Actions** | Business Logic | Ignore received values |
| | Return Code | 400 – Bad Request |

| **Number** | 7 | |
| :--- | :---: | :---: |
| **Properties** | capacityGroupID | *Known value* |
| | changedAt | Identical to the most recent of all previously received `WeekBasedCapacityGroup` with the same capacityGroupID |
| **Meta properties** | Any property | |
| | All other properties | *Any value* |
| **Actions** | Business Logic | Overwrite all existing values with received values |
| | Return Code | 200 – OK |

## 4 REFERENCES

### 4.1 NORMATIVE REFERENCES

[CX-0046] Demand and Capacity Management Process & Core Business Logic, Version 1.0.0

[CX-0047] Demand and Capacity Management Data Models, Version 1.0.0

### 4.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

[RFC4122] A Universally Unique IDentifier (UUID) URN Namespace
(https://www.rfc-editor.org/rfc/rfc4122)

[RFC9110] HTTP Semantics (https://www.rfc-editor.org/rfc/rfc9110)

[ISO8601] Date and time format

[PayloadValidationRules] [PayloadValidationRules.xlsx](./assets/PayloadValidationRules.xlsx)

### 4.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

Not applicable.

## ANNEXES

### FIGURES

> *This section is non-normative*

Not applicable.

### TABLES

> *This section is non-normative*

Not applicable.
