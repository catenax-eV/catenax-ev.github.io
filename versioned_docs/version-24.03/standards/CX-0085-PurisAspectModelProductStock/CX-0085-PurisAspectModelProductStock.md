# CX-0085 PURIS Aspect Model: Product Stock v1.0.0

## ABSTRACT

Information about the products in stock allocated to a specific customer at a given supplier's facility
is key to early detect and evaluate supply shortage issues. However, collecting this information manually
e.g. by phone or e-mail communication is error prone and slow.

A possible countermeasure to those challenges is the exchange of *product stock* information between
Catena-X participants in an interoperable manner.

A common description of the *product stock* based on a standardized semantic definition is fundamental
for facilitating such an exchange in a timely fashion, thus ensuring that the possible solution space
for mitigating the supply shortage issues is as large as possible.

## 1. INTRODUCTION

This document describes the "ProductStock" semantic model used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

This standard is relevant for the following roles defined in [[CX-OMW]](#32-non-normative-references):

- **Data Providers** willing to provide *product stock* data
- **Data Consumers** interested in requesting and receiving *product stock* data
- **Business Application Providers**
- **Consulting Services Providers**

The scope of this standard is only the "ProductStock" aspect model.

### 1.2 CONTEXT

> *This section is non-normative*

A typical order-based procurement process includes a customer that places an order and a supplier
fulfilling it. During the fulfillment process the manufactured products are temporarily stored at the
supplier's facility waiting to be shipped to the customer. This kind of inventory is referred to as
*allocated* or *product* stock. Information about it is key to early detect and evaluate short-term
supply shortages on the customer side. Also, due to the instant availability of the product stock,
it can help solve such shortages.

This standard defines the `ProductStock` aspect model to be used in the Catena-X network. It ensures
that the `ProductStock` information will be interpreted and handled in an identical manner by all
interested parties.

### 1.3 CONFORMANCE

Sections marked as non-normative, as well as all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**,
**SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14
[RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.4 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to proof, that they are conform with the Catena-X
standards. To validate that the standards are applied correctly, Catena-X employs Conformity
Assessment Bodies (CABs).

The proof of conformity for a single semantic model is done according to the general rules for
proving the conformity of data provided to a semantic model or the ability to consume the
corresponding data.

### 1.5 EXAMPLES

 The following JSON provides an example for the value-only serialization of the "ProductStock"
 aspect model.

```json
{
  "materialNumberCatenaX" : "48878d48-6f1d-47f5-8ded-a441d0d879df",
  "materialNumberCustomer" : "MNR-7307-AU340474.002",
  "materialNumberSupplier" : "MNR-8101-ID146955.001",
  "positions" : [ {
    "lastUpdatedOnDate" : "2023-04-01T14:23:00.66372+01:00",
    "orderPositionReference" : {
      "supplierOrderId" : "M-Nbr-4711",
      "customerOrderId" : "C-Nbr-4711",
      "customerOrderPositionId" : "PositionId-01"
    },
    "allocatedStocks" : [ {
      "quantityOnAllocatedStock" : {
        "quantityNumber" : 2.5,
        "measurementUnit" : "unit:litre"
      },
      "supplierStockLocation" : {
        "locationKeyType" : "BPNS",
        "locationKeyValue" : "BPNS0123456789ZZ"
      }
    } ]
  } ]
}
```

### 1.6 TERMINOLOGY

> *This section is non-normative*

Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data
accessible from an Aspect.

: *Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it
utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the
  validity rules defined by the Semantic Aspect Meta Model.*

: *Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual
  model in order to describe the semantics of runtime data related to a concept. Further, elements of
  an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).*

: *[Source: Catena-X, CX-0002, note 3 removed]*

Business Partner Number (BPN)
:  A BPN is the unique identifier of a partner within Catena-X as defined in [[CX-0010]](#31-normative-references).

International Data Space (IDS)
: International Data Space and its protocol for data exchange
foresees an compliant connector handling contract negotiation before each data transfer and defines
a general architecture for data exchange.

Eclipse Dataspace Connector (EDC)
: The EDC is a reference implementation for an IDS compliant
connector currently acting as a de-facto standard and/or reference implementation within Catena-X.

Allocated Stock
: The already manufactured and ready to be shipped products available at a supplier's facility. They
are allocated to a specific customer based on the orders made by the latter.

Stock Location
: The physical location of a stock specified by its type (BPNS or BPNA) and the corresponding BPN
number. More information on BPN/S/A is provided in [[CX-0010]](#31-normative-references).

Supplier
: The manufacturer of a product.

Customer
: The recipient of products manufactured by a supplier.

Order
: Request from a customer towards a supplier to manufacture / supply a given quantity of a specific
product in a predefined time frame.

Position
: A position within an order defines the product and the quantity the supplier has to manufacture
for a customer. A single order may contain multiple positions for different products.

Additional terminology used in this standard can be looked up in the glossary on the association
homepage.

## 2 Aspect Model "ProductStock"

### 2.1 INTRODUCTION

The *product stock* defines the available quantity of reserved (here called allocated) products
for a customer that have not yet been shipped. A prerequisite for building up a product stock
and allocating it to a specific customer is an existing order / call-off.

The following table provides an overview and a brief description of the fields defined in the
`ProductStock` aspect model.

| Field | REQUIRED | Description | Data type | Example value |
|------------|:--------:|-----------|-------------|---------------|
| **materialNumberCustomer** | Yes |  Material identifier assigned by the customer.<br/> In case a customer does not have an own number for a given material (e.g. standard products like screws, washers, etc.), the value of this filed should be equal to the value of the `materialNumberSupplier` field. | String | MNR-7307-AU340474.002 |
| **materialNumberSupplier** | No | Material identifier assigned by the supplier. <br/> This material number is used to identify the material (as planned) on the supplier side. | String | MNR-8101-ID146955.001 |
| **materialNumberCatenaX** | No | Material identifier used to uniquely identify the material within a Data Space (e.g. PartAsPlanned in Catena-X). | String | urn:uuid:48878d48-6f1d-47f5-8ded-a441d0d879df |
| **lastUpdatedOnDateTime** | Yes | Date and time at which the available *product stock* had been updated by the supplier. Date and time are set according to a time zone. | [[ISO8601]](#32-non-normative-references) with time zone | `2023-04-25T10:54:12+00:00` |
| **supplierOrderId** | No | The order number on the supplier side (e.g. generated by the supplier's enterprise resource planning system). | String | M-Nbr-4711 |
| **customerOrderId** | Yes | The order number on the customer side (e.g. generated by the customer's enterprise resource planning system). | String | C-Nbr-4711 |
| **customerOrderPositionId** | Yes | The identifier of a position within an order. Every order may contain multiple positions for different products.<br/>The value of this field not a technical identifier, such as an UUID, but rather used within the business context when talking about the position. | String | PositionId-01 |
| **quantityOnAllocatedStock** | Yes | The quantity of the material (product) within the position that is ready to be delivered. It is defined by the combination of a value (Number) and a measurement unit (e.g. pcs, litre, etc.) | | |
| **locationIdType** | Yes | Type of the location's ID. Either BPNS or BPNA. | Enum | BPNS |
| **locationId** | Yes | The Business Partner Number (BPN) of the supplier's facility as defined in [[CX-0010]](#31-normative-references). | String | BPNS0123456789ZZ |

The provided aspect model is automotive-agonistic, thus allowing for future integration and exchange
with non-automotive dataspaces.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the
"semantic driven workflow" to create a submodel template specification [[SMT]](#32-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to [[CX-0003]](#31-normative-references)
as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to [[CX-0003]](#31-normative-references).

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0
International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
  urn:bamm:io.catenax.product_stock:1.0.0
```

This identifier MUST be used by the data provider to define the semantics of the data being transferred.

### 2.5 FORMATS OF SEMANTIC MODEL

#### 2.5.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating
additional file formats and serializations. It can be found under the following link:

`https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.product_stock/1.0.0/ProductStock.ttl`

The open source command line tool of the Eclipse Semantic Modeling Framework is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 2.5.3 aasx

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#32-non-normative-references)].

### 2.6 SEMANTIC MODEL

Not applicable. (See [Chapter 2.5.1](#251-rdf-turtle))

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

[CX-0003] SAMM Aspect Meta Model, Version 1.0.2

[CX-0010] Business Partner Number, Version 1.0.1

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

[SMT] How to create a submodel template specification. Guideline. Download from:
https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

[CX-OMW] Catena-X Operating Model Whitepaper. Download from:
https://catena-x.net/fileadmin/user_upload/Publikationen_und_WhitePaper_des_Vereins/CX_Operating_Model_Whitepaper_02_12_22.pdf

[ISO8601] ISO 8601: Date and time format

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

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
