# CX-0095 - Data Model: Transmission Pass v1.0.0

## ABSTRACT

The data model "TransmissionPass" in the version 1.0.0 corresponds to the digital product passport
information required by the proposed Ecodesign Regulation ([ESPR-2022](https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/sustainable-products/ecodesign-sustainable-products_en))
and describes the data that is collected and available during the lifespan of a transmission.
The vision of the project "Digital Product Pass" is to achieve 100% material circularity, a trusted,
transparent, traceable, standardized, and automatic digital supply chain to holistically enable
material circularity. The project "Digital Product Pass" by partners from industry and research is
designing content and technical standards for a transmission pass based on collected requirements.
The consumers can see at a glance the relevant data about the transmissions which ARE installed in the vehicle.
The data set includes manufacturing, safety and sustainability information.This standard defines the
format for the circularity data, so that the exchange of the data between different partners is possible.

## 1. INTRODUCTION

This document describes a semantic model used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

The purpose of this document is the description of the Asset Administration Shell submodel
Transmission Pass.
It defines the transmission identity and all relevant attributes. The presented data model is
described and illustrated in the following with the entities and properties and their
interrelationships.

This standard is relevant for following roles:

- Data Provider / Consumer
- Business Application Provider

### 1.2 CONTEXT

> *This section is non-normative*

The Transmission Passport is a further instrument to develop a sustainable and circular transmission
 value chain delivering on ten principles by monitoring the sustainability performance based on data.
They are Understandable, Standardized, Accurate, Differentiating, Auditable, Comprehensive and
providing the insights to trigger improvement action. The Transmission Passport is the supplementary
for the Digital Product Passport.

The Passport itself is defined by the usage of Catena-X shared services, a standardized data model
and an application which will enable stakeholders to access the relevant data. The first version of
the transmission passport model consists out of the following information:
  
- Transmission Identification
- General Information
- Sustainability Information
- State of Health Information
- Product Specific Parameters
- Instructions
- Track and Trace Data

The circularity parameters will contribute to a more transparent and circular economy within the
European Union.
The detailed description is given in the Ecodesign for Sustainable Products Regulation Proposal
([ESPR](https://environment.ec.europa.eu/publications/proposal-ecodesign-sustainable-products-regulation_en)).
From these regulations, content clusters for circularity were identified, and concrete circularity
parameters for the transmission passport derived. The data sets also contain information, which are
relevant for closed and open loop business models.
It is important to note that the data model contains information / data fields, which are optional
and mandatory for regulation fulfillment. It is also worth mentioning that sharing information within
the network is based on decentralized technologies and is always based on the individual decision by
each provider. This data model is based on the new proposed Ecodesign Regulation ([ESPR-2022](https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labelsproducts-labelling-rules-and-requirements/sustainable-products/ecodesign-sustainable-products_en))
and is continuously adapted to the basic conditions over time.

### 1.3 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**,
**SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described
in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.4 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions MUST to prove, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

### 1.5 EXAMPLE

The following json code gives an overview of the data model.

```json
{
  "productSpecificParameters" : {
    "torqueConverter" : [ "RYtGKbgicZaHCBRQDSx" ],
    "driveType" : "combustion engine",
    "oilType" : "ZF Lifeguard Hybrid 2",
    "spreading" : 6.79,
    "torque" : 500.0,
    "power" : 300.0,
    "standardGearRatio" : {
      "gear" : "1",
      "ratio" : 4.1567
    },
    "oilCapacity" : 8.9,
    "electricPerformance" : [ "VLhpfQGTMDYpsBZxvfBoeygjb" ],
    "speedResistance" : {
      "speed" : 7800,
      "gear" : "1"
    }
  },
  "instructions" : {
    "packagingInstructions" : [ {
      "documentTitle" : "Title A",
      "documentLink" : "https://www.xxx.pdf"
    } ],
    "transportationInstructions" : [ {
      "documentTitle" : "Title A",
      "documentLink" : "https://www.xxx.pdf"
    } ],
    "dismantlingProcedure" : [ {
      "documentTitle" : "Title A",
      "documentLink" : "https://www.xxx.pdf"
    } ],
    "safetyMeasures" : [ {
      "documentTitle" : "Title A",
      "documentLink" : "https://www.xxx.pdf"
    } ],
    "vehicleDismantlingProcedure" : [ {
      "documentTitle" : "Title A",
      "documentLink" : "https://www.xxx.pdf"
    } ]
  },
  "identification" : {
    "manufacturerId" : "BPNL1234567890ZZ",
    "localIdentifiers" : [ {
      "value" : "SN12345678",
      "key" : "PartInstanceID"
    } ],
    "dataMatrixCode" : "UMaAIKKIkknjWEXJUfPxxQHeWKEJ"
  },
  "sparePartSupplier" : [ {
    "supplierContact" : {
      "faxNumber" : "+49 89 0987654321",
      "website" : "https://www.samsung.com",
      "phoneNumber" : "+49 89 1234567890",
      "email" : "test.mail@example.com"
    },
    "supplierId" : "BPNL1234567890ZZ",
    "sparePartName" : "torque converter"
  } ],
  "stateOfHealth" : {
    "serviceHistory" : [ "2023-05-22T13:16:47.239+02:00" ],
    "expectedLifespan" : 500000,
    "remanufacturing" : {
      "remanufacturingDate" : "2023-05-22T13:16:47.239+02:00",
      "productStatusValue" : "first life"
    }
  },
  "generalInformation" : {
    "additionalInformation" : "JxkyvRnL",
    "physicalDimensionsProperty" : {
      "width" : 1000.0,
      "length" : 20000.1,
      "weight" : 100.7,
      "diameter" : 0.03,
      "height" : 0.1
    },
    "warrantyPeriod" : 60.0,
    "productDescription" : "manual transmission",
    "productType" : "8HP60MH"
  },
  "sustainability" : {
    "substancesOfConcern" : [ "yedUsFwdkelQbxeTeQOvaScfqIOOmaa" ],
    "responsibleSourcingDocument" : [ {
      "documentTitle" : "Title A",
      "documentLink" : "https://www.xxx.pdf"
    } ],
    "recyclateContent" : {
      "nickel" : -1.7976931348623157E+308,
      "lithium" : -1.7976931348623157E+308,
      "cobalt" : -1.7976931348623157E+308,
      "otherSubstance" : [ {
        "substancePercentage" : 8.0,
        "substanceName" : "Lead"
      } ]
    },
    "criticalRawMaterials" : [ "eOMtThyhVNLWUZNRcBaQKxI" ],
    "carbonFootprint" : {
      "crossSectoralStandardsUsed" : [ {
        "crossSectoralStandard" : "GHG Protocol Product standard"
      } ],
      "co2FootprintTotal" : -1.7976931348623157E+308,
      "productOrSectorSpecificRules" : [ {
        "operator" : "PEF",
        "ruleNames" : "ABC 2021",
        "otherOperatorName" : "NSF"
      } ]
    }
  }
}
```

### 1.6 TERMINOLOGY

> *This section is non-normative*

The following terms are especially relevant for the understanding of the standard:

- **Ecodesign for Sustainable Products regulation (ESPR)**
: The proposal establishes a framework to set ecodesign requirements for specific product groups to
significantly improve their circularity, energy performance and other environmental sustainability
aspects.

- **Business Partner Number (BPN)**
: A BPN is the unique identifier of a partner within Catena-x

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 ASPECT MODEL ""TRANSMISSIONSPASS""

### 2.1 INTRODUCTION

The purpose of this document is the description of the Asset Administration Shell submodel
Transmission Pass. It defines the transmission identity and all relevant attributes.
The presented data model is described and illustrated in the following with the entities and
properties and their interrelationships.

Every data provider MUST provide the data
conformant to the semantic model specified in this document.

The unique identifier of the semantic model specified in this document
MUST be used by the data provider to define the semantics of the data
being transferred.

Every certified business application using the transmission pass data MUST
be able to consume data conformant to the semantic model specified in
this document.

This semantic model MUST be made available in the central Semantic Hub.

Data consumers and data provider MUST comply with the license of the
semantic model.

In the Catena-X data space transmission pass data MUST be requested and
exchanged via Eclipse Dataspace Connector (EDC) conformant to [CX-0018](#31-normative-references)
and [CX-0002](#31-normative-references).

The JSON Payload of data providers MUST be conformant to the JSON Schema
as specified in this document.

### 2.2 SPECIFICATION ARTIFACTS

The modelling of the semantic model specified in this document was done in accordance
to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in BAMM 2.0.0 as a modeling language conformant to [CX-0003](https://catena-x.net/de/standard-library) as
input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format
on GitHub2F2F conformant to [CX-0003](https://catena-x.net/de/standard-library).

### 2.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group Digital Product Pass (DPP).
This Catena-X data model is made available under the terms of
the Creative Commons Attribution 4.0 International (CC-BY-4.0) license,
which is available at Creative Commons4F4F.

### 2.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier:

```txt
urn:bamm:io.catenax.transmission.transmission_pass:1.0.0
```

### 2.5 FORMATS OF SEMANTIC MODEL

All different formats of the semantic model can be found in the github repository.

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.transmission.transmission_pass/1.0.0
```

#### 2.5.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating
additional file formats and serializations. It can be accessed via github:

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.transmission.transmission_pass/1.0.0/TransmissionPass.ttl
```

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation. These other formats are saved in the "gen" folder in github:

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.transmission.transmission_pass/1.0.0/gen
```

#### 2.5.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.transmission.transmission_pass/1.0.0/gen/TransmissionPass-schema.json
```

#### 2.5.3 aasx

A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#32-non-normative-references)].

Note: As soon as the specification V3.0 of the Asset Administration Shell specification is available
and update will be provided.

### 3.1 NORMATIVE REFERENCES

- [CX - 0002 Digital Twins in Catena - X v2.0.0](https://catena-x.net/de/standard-library)
- [CX - 0018 Eclipse Data Space Connector (EDC)- v2.0.1](https://catena-x.net/de/standard-library)

### 3.2 NON-NORMATIVE REFERENCES

- [SMT- How to create submodel template specification](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf)

## ANNEXES

### FIGURES

![Data Model](./assets/image.png)

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
