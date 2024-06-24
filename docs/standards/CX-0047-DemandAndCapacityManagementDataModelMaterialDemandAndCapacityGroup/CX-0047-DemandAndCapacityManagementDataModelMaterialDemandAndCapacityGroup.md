# CX-0047 Demand and Capacity Management Data Model Material Demand and Capacity Group v1.0.0

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
information is the foundation. The demand information describes the material-demand of a company and
is send to a supplier, in order to tell the supplier which materials and how many of them are needed
in a given calendar week. The capacity group is sent from the supplier to the customer in order to
communicate the production capacity for a specific material in a specific calendar week.

In this document, the data model of the material demand and capacity group information is described
and standardized. There are two separate data models, as the information has a different meaning and
because of the split business responsibilities within DCM.

The cross-company interactions required during the demand and capacity management process together
with the corresponding common business logic are standardised in \[[CX-0046](#41-normative-references)],
while the APIs are standardized in \[[CX-0048](#41-normative-references)].

## 1. INTRODUCTION

This document describes the `WeekBasedMaterialDemand` and `WeekBasedCapacityGroup` semantic models
used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for:

- **Data Provider / Consumer**
- **Business Application Provider**

The `WeekBasedMaterialDemand` object will be send by customers to their suppliers in order to
communicate how many parts they need in which period of time. The customers of materials therefore
need to be able to create `WeekBasedMaterialDemand` objects and the suppliers need to be able to
interpret them. As most suppliers have their own suppliers, who produce materials for them, most
suppliers are therefore acting as customers as well and need to be able to also create
WeekBasedMaterialDemand objects on for sending them to their suppliers.

The `WeekBasedCapacityGroup` object is sent by the suppliers to their customers to communicate which
materials are bundled together, representing a common bottleneck. And what the capacity for these
materials is, considering their common bottleneck.This information is represented as weekly buckets
within the WeekBasedCapacityGroup. Therefore, all companies, that supply materials to other
companies, need to be able to create `WeekBasedCapacityGroup` objects in a consistent and
standardized structure and send them to their customers. The customers need to be able to receive
and interpret the `WeekBasedCapacityGroup` information.

The underlying business process is described and standardized in \[[CX-0046](#41-normative-references)].

This document only describes the structure of the data model in order to exchange demand and
capacity information. Further information regarding processing or the interface will be described in
\[[CX-0048](#41-normative-references)].
  
### 1.2 CONTEXT

> *This section is non-normative*

This standardization defines the `WeekBasedMaterialDemand` and the  `WeekBasedCapacityGroup` data
models for the Catena-X network. This standard ensures that the demand and capacity information can
be consumed through the Catena-X network by all customers and suppliers and ensures, that the data
objects from different customers can be handled and interpreted in an identical manner.

The underlying business process is described and standardized in \[[CX-0046](#41-normative-references)].

In this document the `WeekBasedMaterialDemand` data models and `WeekBasedCapacityGroup` data model
are described and standardized to ensure a consistent data exchange structure within the DCM
participants. Thereby an identical interpretation of the data across companies is ensured.

### 1.3 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**,
**SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14
[RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.4 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to prove, that they are conform with the Catena-X
standards. To validate that the standards are applied correctly, Catena-X employs Conformity
Assessment Bodies (CABs).

The proof of conformity for a single semantic model is done according to the general rules for
proving the conformity of data provided to a semantic model or the ability to consume the
corresponding data.  

### 1.5 EXAMPLES

In this chapter, examples for the value-only serialization of `WeekBasedMaterialDemand` and
`WeekBasedCapacityGroup` payloads in JSON format are listed for reference.
The attributes are described further in \[[CX-0046](#41-normative-references)].
Note that the values in *\{\{brackets\}\}* need to be replaced with actual valid values.

#### 1.5.1 `WeekBasedMaterialDemand` data model JSON structure

```json
// value-only payload serialization example
{
    "unitOfMeasure": "GRM",
    "materialDescriptionCustomer": "Spark Plug",
    "materialDemandId": "0157ba42-d2a8-4e28-8565-7b07830c1110",
    "materialNumberSupplier": "MNS-8101-ID146955.001",
    "supplier": "{{CATENAX-BUSINESS-PARTNER-NUMBER}}",
    "changedAt": "2023-03-08T11:01:02.085+01:00",
    "demandSeries": [
        {
            "expectedSupplierLocation": "{{CATENAX-SUPPLIER-BPNS}}",
            "demands": [
                {
                    "demand": 1,
                    "calendarWeek": "2022-03-13"
                },
                {
                    "demand": 1,
                    "calendarWeek": "2022-03-20"
                }
            ],
            "customerLocation": "{{CATENAX-CUSTOMER-BPNS}}",
            "demandCategory": {
                "demandCategoryCode": "0001"
            }
        }
    ],
    "materialNumberCustomer": "MNC-7307-AU340474.002",
    "customer": "{{CATENAX-SUPPLIER-BPNL}}"
}
```

#### 1.5.2 `WeekBasedCapacityGroup` data model JSON structure

```json
// value-only payload serialization example
{
    "unitOfMeasure": "GRM",
    "linkedDemandSeries": [
        {
            "materialNumberCustomer": "MNC-7307-AU340474.002",
            "materialNumberSupplier": "MNS-8101-ID146955.001",
            "customerLocation": " {{CATENAX-CUSTOMER-BPNS}}",
            "demandCategory": {
                "demandCategoryCode": "0001"
            }
        }
    ],
    "supplier": "{{CATENAX-BUSINESS-PARTNER-NUMBER}}",
    "name": "Spark Plugs on drilling machine for car model XYZ",
    "supplierLocations": [
        "{{CATENAX-SUPPLIER-BPNS}}"
    ],
    "capacities": [
        {
            "calendarWeek": "2023-03-13",
            "actualCapacity": 1,
            "maximumCapacity": 2
        },
        {
            "calendarWeek": "2023-03-20",
            "actualCapacity": 1,
            "maximumCapacity": 2
        }
    ],
    "changedAt": "2023-03-08T11:44:27.701+01:00",
    "capacityGroupId": "0157ba42-d2a8-4e28-8565-7b07830c1110",
    "customer": "{{CATENAX-SUPPLIER-BPNL}}"
}
```

### 1.6 TERMINOLOGY

> *This section is non-normative*

Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data
accessible from an Aspect.

: *Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it
utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.*

: *Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).*

: *[Source: Catena-X, CX-0002, note 3 removed]*

Additional terminology used in this standard can be looked up in the glossary on the association
homepage.

## 2 ASPECT MODEL “WeekBasedMaterialDemand”

> *This section is normative*

### 2.1 INTRODUCTION

The material demand information MUST be sent from the customer to the supplier according to the
\[[CX-0048](#41-normative-references)] standard. The data format described here MUST be followed for
the exchange of the `WeekBasedMaterialDemand` information.

The `WeekBasedMaterialDemand` data model MUST be implemented by all participants who wish to
participate in the Catena-X DCM network as a customer or supplier.

Companies, who participate in the Catena-X Network as a supplier, MUST be able to receive material
demand information and MUST be able to send capacity group information.

Companies, who participate in the Catena-X Network as a customer, MUST be able to send material
demand information and MUST be able to receive capacity group information.

Companies who participate in the Catena-X Network with both roles therefore MUST be able to receive
and send both, material demand as well as capacity group information. It is recommended that
companies implement both standards.

Every data provider of `WeekBasedMaterialDemand` data MUST provide the data conformant to the
semantic model specified in this document.

The unique identifier of the semantic model specified in this document MUST be used by the data
provider to define the semantics of the data being transferred.

Every certified business application relying on `WeekBasedMaterialDemand` data MUST be able to
consume data conformant to the semantic model specified in this document.

This semantic model MUST be made available in the central Semantic Hub.

Data consumers and data provider MUST comply with the license of the semantic model defined in
[Chapter 2.3](#23-license).

In the Catena-X data space `WeekBasedMaterialDemand` data MUST be requested and exchanged via
Eclipse Dataspace Connector (EDC) conformant to \[[CX-0018](#41-normative-references)] and \[[CX-0002](#41-normative-references)].

The JSON Payload of data providers MUST be conformant to the JSON Schema as specified in this
document.

The characteristics BPNL and BPNS MUST be used according to the standard \[[CX-0010](#41-normative-references)].

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the
"semantic driven workflow" to create a submodel template specification \[[SMT](#42-non-normative-references)].

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to \[[CX-0003](#41-normative-references)]
as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to \[[CX-0003](#41-normative-references)].

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0
International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
  urn:bamm:io.catenax.week_based_material_demand:1.0.0
```

This identifier MUST be used by the data provider to define the semantics of the data being
transferred.

### 2.5 FORMATS OF SEMANTIC MODEL

#### 2.5.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating
additional file formats and serializations.

```text
  https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.week_based_material_demand/1.0.0/WeekBasedMaterialDemand.ttl
```

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 2.5.3 aasx

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to
\[[SMT](#42-non-normative-references)].

Note: As soon as the specification V3.0 of the Asset Administration Shell specfication is available
an update will be provided.

### 2.6 SEMANTIC MODEL

Not applicable.

## 3 ASPECT MODEL "WeekBasedCapacityGroup"

> *This section is normative*

### 3.1 INTRODUCTION

The capacity group information MUST be sent from the supplier to the customer according to the
\[[CX-0048](#41-normative-references)] standard. The data format described here MUST be followed for
the exchange of the capacity group information.

The capacity group endpoint MUST be implemented by all participants who wish to participate in the
Catena-X DCM network as a customer or supplier.

Companies, who participate in the Catena-X Network as a supplier, MUST be able to receive material
demand information and MUST be able to send capacity group information.

Companies, who participate in the Catena-X Network as a customer, MUST be able to send material
demand information and MUST be able to receive capacity group information.

Companies who participate in the Catena-X Network with both roles therefore MUST be able to receive
and send both, material demand as well as capacity group information. It is recommended that
companies implement both standards.

Every data provider of `WeekBasedCapacityGroup` data MUST provide the data conformant to the
semantic model specified in this document.

The unique identifier of the semantic model specified in this document MUST be used by the data
provider to define the semantics of the data being transferred.

Every certified business application relying on `WeekBasedCapacityGroup` data MUST be able to
consume data conformant to the semantic model specified in this document.

This semantic model MUST be made available in the central Semantic Hub.

Data consumers and data provider MUST comply with the license of the semantic model defined in
[Chapter 3.3](#33-license).

In the Catena-X data space `WeekBasedCapacityGroup` data MUST be requested and exchanged via Eclipse
Dataspace Connector (EDC) conformant to \[[CX-0018](#41-normative-references)] and \[[CX-0002](#41-normative-references)].

The JSON Payload of data providers MUST be conformant to the JSON Schema as specified in this
document.

The characteristics BPNL and BPNS MUST be used according to the standard \[[CX-0010](#41-normative-references)].

### 3.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the
"semantic driven workflow" to create a submodel template specification \[[SMT](#42-non-normative-references)].

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to \[[CX-0003](#41-normative-references)]
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to \[[CX-0003](#41-normative-references)].

### 3.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0
International (CC-BY-4.0) license, which is available at Creative Commons.

### 3.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
  urn:bamm:io.catenax.week_based_capacity_group:1.0.0
```

This identifier MUST be used by the data provider to define the semantics of the data being
transferred.

### 3.5 FORMATS OF SEMANTIC MODEL

#### 3.5.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating
additional file formats and serializations.

```text
  https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.week_based_capacity_group/1.0.0/WeekBasedCapacityGroup.ttl
```

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 3.5.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 3.5.3 aasx

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#42-non-normative-references)].

Note: As soon as the specification V3.0 of the Asset Administration Shell specfication is available
an update will be provided.

### 3.6 SEMANTIC MODEL

Not applicable.

## 4 REFERENCES

### 4.1 NORMATIVE REFERENCES

[CX-0002] Digital Twins in Catena-X, Version 1.0.1

[CX-0003] SAMM Aspect Meta Model, Version 1.0.1

[CX-0010] Business Partner Number, Version 1.0.1

[CX-0018] Eclipse Data Space Connector (EDC), Version 1.0.1

[CX-0046] Demand and Capacity Management Process & Core Business Logic, Version 1.0.0

[CX-0048] Demand and Capacity Management APIs, Version 1.0.0

### 4.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

[SMT] How to create a submodel template specification. Guideline. Download from:
https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

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
