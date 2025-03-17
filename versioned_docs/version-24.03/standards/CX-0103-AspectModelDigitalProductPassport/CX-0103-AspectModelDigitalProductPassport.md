
# CX-0103 Digital Product Passport v1.1.0

## FOR WHOM IS THE STANDARD DESIGNED

See chapter [1.1](#11-audience--scope)

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

The changes to the Digital Product Passport mainly involve adjustments to make the model more compatible with other models, achieved by importing several shared models. The shared models are:

- urn:samm:io.catenax.shared.address_characteristic:3.0.0#
- urn:samm:io.catenax.shared.contact_information:3.0.0#
- urn:samm:io.catenax.shared.business_partner_number:1.0.0#
- urn:samm:io.catenax.shared.quantity:1.0.0#
- urn:samm:io.catenax.shared.uuid:1.0.0#

To make the model more flexible and suitable for the use outside of catena-x several "either-or" possibilities are implemented.
For Addresses following changes are made:

- All company identifiers can be a company name, full address and contact or a simple identifier with a type. This identifier can be a BPNL.
- The BPNL is referenced from the shared model.
- All site identifiers can be a name and full address or a simple identifier. This identifier can be a BPNA.
- The BPNA is referenced from the shared model.
- The contact and address information in both cases are referenced from their respective shared models.

For the passport identifier following changes are made:

- The attribute passportIdentifier is added which can be a UUID in the case of catena-X, or any other type of identifier.
- The UUID is referenced from the shared model.

Additions to the model

- Carbon and environmental footprint have new properties "performance class", "manufacturing plant" and "declaration"
- A hazard class was added voluntary

Smaller changes in the model:

- Physical dimensions are linked to the shared model quantity without doing structural changes.
- State has a more defined enumeration with the values original, repurposed, re-used, remanufactured or waste.
- Renewable and recycled content are identified trough a share instead of being flagged
- A list of identifiers can be provided instead of only one
- Manufacturing date is mandatory
- Naming of the spare part producers changed to spare part sources

## ABSTRACT

Digital Product Passports addresses three needs by the industry: First, they gather all relevant information about a product in a single, machine-readable document. Second, digital product passports answer increasing regulatory requirements and demand for sustainability information along the value chain of a product. And third, Digital Product Passports are an important enabler for a circular economy. The collected data is defined via standards specified by the Catena-X network and obtained from the industry. Content of the Product Passport is product-related information that is useful and necessary for the data consumer and is limited to the required minimum of necessary information.

The data model "DigitalProductPassport" in the version 3.0.0 corresponds to the Digital Product Passport information required by the proposed Ecodesign Regulation ([ESPR-2022](https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/sustainable-products/ecodesign-sustainable-products_en)) from March 30th, 2022 and describes the data that is collected and available during the lifespan of a product. The vision of the project "Digital Product Pass" is to achieve 100% material circularity, a trusted, transparent, traceable, standardized, and automatic digital supply chain to holistically enable material circularity.

## 1 INTRODUCTION

This document describes a semantic model used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

The purpose of this document is the description of the Asset Administration Shell model Digital Product Passport. It defines the product identity and all relevant attributes as required from the regulation. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships.

This standard is relevant for following roles:

- Data Provider / Consumer
- Business Application Provider

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The Digital Product Passport establishes a set of data requirements for different product groups. The parameters will contribute to a more transparent and circular economy within the European Union. The detailed description is given in the Ecodesign for Sustainable Products Regulation Proposal ([ESPR](https://environment.ec.europa.eu/publications/proposal-ecodesign-sustainable-products-regulation_en)). From these regulations, content clusters for circularity were identified, and concrete circularity parameters for the Product Passport derived. The data sets also contain information, which are relevant for closed and open loop business models. It is important to note that the data model contains information / data fields, which are optional and mandatory for regulation fulfillment. It is also worth mentioning that sharing information within the network is based on decentralized technologies and is always based on the individual decision by each provider.

The Digital Product Passport is the core model and can be used as the root class for other, specific, product models. The Passport itself is defined by the usage of Catena-X shared services, a standardized data model and an application which will enable stakeholders to access the relevant data. The first version of the Product Passport model consists out of the following information:

- Passport Metadata
- Product Identification
- Product Typology
- Product Characteristics
- Sustainability Information
- Commercial Information
- Operational Information
- Sources
- Additional Data

This data model is based on the new proposed Ecodesign Regulation ([ESPR-2022](https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/sustainable-products/ecodesign-sustainable-products_en)) from March 30th, 2022 and is continuously adapted to the basic conditions over time. Amendments to this regulation came from the Council of the European Union ([Council Amendment](https://data.consilium.europa.eu/doc/document/ST-9014-2023-INIT/en/pdf)) from May 15th, 2023 and the European Parliament ([Parliament Amendment](https://www.europarl.europa.eu/doceo/document/TA-9-2023-0272_EN.html)) from July 12th, 2023 and is shown at specific points in the model. However, the main basis remains the version from the Committee.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.4 EXAMPLES

The JSON example can be generated from the SAMM.ttl file or be found in the current version 3.0.0 in the "gen" folder github repository.

### 1.5 TERMINOLOGY

> *This section is non-normative*

**Ecodesign for Sustainable Products regulation (ESPR)**
: The proposal establishes a framework to set ecodesign requirements for specific product groups to significantly improve their circularity, energy performance and other environmental sustainability aspects.

**Aspect Model**
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.  
  
: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

## 2 ASPECT MODEL “Digital Product Passport”

> *This section is normative*

The Digital Product Passport model is a data model that summarizes the components, materials and chemical substances or information on repairability, spare parts or professional disposal for a product. The data comes from all phases of the product life cycle and can be used for various purposes in all these phases (design, production, use, disposal). This data model is based on the new proposed Ecodesign Regulation from 2022.

### 2.1 INTRODUCTION

The purpose of this document is the description of the Asset Administration Shell model Product Passport. It defines the product identity and all relevant attributes. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships.

Every data provider **MUST** provide the data conformant to the semantic model specified in this document.

The unique identifier of the semantic model specified in this document **MUST** be used by the data provider to define the semantics of the data being transferred.

Every certified business application using the Single Level BoM As Specified data **MUST** be able to consume data conformant to the semantic model specified in this document.

This semantic model **MUST** be made available in the central Semantic Hub.

Data consumers and data provider **MUST** comply with the license of the semantic model.

In the Catena-X data space Digital Passport data **MUST** be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to [CX-0018](#31-normative-references) and [CX-0002](#31-normative-references).

The JSON Payload of data providers **MUST** be conformant to the JSON Schema as specified in this document.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to [CX-0003](#31-normative-references) as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to [CX-0003](#31-normative-references).

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
    <urn:samm:io.catenax.generic.digital_product_passport:3.0.0#> 
```

This identifier **MUST** be used by the data provider to define the semantics of the data being transferred.

### 2.5 FORMATS OF SEMANTIC MODEL

All formats can be generated through the turtle file and the SAMM cli.

#### 2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.
It can be found in the current version 2.0.0 in the github repository.

```text
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.generic.digital_product_passport/3.0.0/DigitalProductPassport.ttl
```

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

#### 2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".
It can be found in the current version 2.0.0 in the "gen" folder github repository.

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.generic.digital_product_passport/3.0.0/gen/DigitalProductPassport.json
```

#### 2.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification conformant to [SMT](#32-non-normative-references).

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- [CX-0002 Digital Twins in Catena - X v2.0.0](https://catena-x.net/de/standard-library)
- [CX - 0003 SAMM Aspect Meta Model v1.0.2](https://catena-x.net/de/standard-library)
- [CX - 0004 Governance Process v1.0.1](https://catena-x.net/de/standard-library)
- [CX - 0018 Eclipse Data Space Connector (EDC) v2.0.1](https://catena-x.net/de/standard-library)
- [CX - 0010 Business Partner Number v2.0.0](https://catena-x.net/de/standard-library)

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

[SMT] How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

A reference implementation of an application using or providing data conformant to this aspect model can be found in a beta environment available on request.

## ANNEXES

### FIGURES

### TABLES

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
