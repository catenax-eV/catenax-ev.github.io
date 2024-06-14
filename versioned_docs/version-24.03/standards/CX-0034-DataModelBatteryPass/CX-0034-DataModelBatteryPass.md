
# CX-0034 Data Model Battery Pass v.2.0.0

## FOR WHOM IS THE STANDARD DESIGNED

The stand will be used by interested data providers and application developers who want to communicate the Digital Product Passport. A Digital Product Passport is a digital document that contains comprehensive information about a product throughout its lifecycle.
See additionally chapter [1.1](#11-audience--scope)

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

The battery passport aspect model has undergone a comprehensive transformation, marked by fundamental content and structural changes. This update represents a significant leap forward to reflect the latest battery regulation: Regulation (EU) 2023/1542 of the European Parliament and of the Council of 12 July 2023 concerning batteries and waste batteries, amending Directive 2008/98/EC and Regulation (EU) 2019/1020 and repealing Directive 2006/66/EC. It can be found under: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1542&qid=1702049049074

A significant change involves the introduction of the Digital Product Passport through an import as a shared model. In the regulation, Chapter IX is dedicated to the Digital Battery Passport, encompassing details about the requirements, technical design, and operations. The details to be included in the Battery Passport are listed in Annex XIII.

## ABSTRACT

Due to requirements of the new regulation for batteries and waste batteries, a data model for Battery Passport was created, which increases efficiency of circular economy ecosystems of all partners in the value network. The Passport itself is defined by the usage of Catena-X shared services, a standardized data model and an application which will enable stakeholders to access the relevant data.
The battery passport is a tool for the exchange of information, enables tracking and tracing of batteries and provides information about the carbon intensity of their manufacturing processes as well as the origin of the materials used, about composition of batteries, including raw materials and hazardous chemicals, about repair, repurposing and dismantling operations and possibilities, and about the treatment, recycling and recovery processes to which the batteries could be subject to at the end of their lifetime.
The battery passport provides information about batteries placed on the market and their sustainability requirements. It contains information relating to the battery model and information specific to the individual battery, including details resulting from the use of the battery.

## 1 INTRODUCTION

This document describes one semantic model used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

The purpose of this document is the description of the Asset Administration Shell model Digital Product Passport. It defines the product identity and all relevant attributes as required from the regulation. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships.

This standard is relevant for following roles:

- Data Provider / Consumer
- Business Application Provider

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The Battery Pass provides foundations for digital infrastructures for its documentation, the exchange of basic information and update-relevant technical data – in particular, data that comprehensively describes supply-chain accountability, such as greenhouse gas footprint, working conditions in raw material extraction, or the determination of battery conditions. To participate, parts of the standard of the Digital Product Passport [CX-0103](#31-normative-references) must be fulfilled, as the Battery Passport incorporates various modeling components into its structure. Whenever the shared model of the Digital Product Passport is utilized, it signifies a match between the two regulations. This demonstrates the seamless integration of the Digital Product Passport's regulations within the regulatory framework of the battery.

The Battery Passport is defined by the usage of Catena-X shared services, a standardized data model and an application which will enable stakeholders to access the relevant data. This version of the Battery Passport Data Model 4.0.0 consists out of the following information:

- Passport Metadata
- Product Identification (identifiers and typology)
- General Information (manufacturing information)
- Physical Dimensions
- Chemical Materials (active, critical and hazardous material)
- Circularity (carbon footprint, spare parts and sustainability documents)
- Battery Performance (rated and dynamic values)
- Conformity Documents
- Safety Documents
- Optional Other Sources

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.4 EXAMPLES

The JSON example can be generated from the SAMM.ttl file or be found in the current version 4.0.0 in the "gen" folder github repository.

### 1.5 TERMINOLOGY

> *This section is non-normative*

**EoL**
: End of life

**OEM**
: Original Equipment Manufacturer

**Business Partner Number (BPN)**
: BPN is the unique identifier of a partner within Catena-x.

**Aspect Model**
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.  
  
: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

## 2 ASPECT MODEL “Battery Pass”

> *This section is normative*

The battery accounts for about 40% of the added value in electric cars. It is therefore very important for sustainability and working standards in the automotive industry. The "Battery Passport" project by partners from industry and research therefore wants to design content and technical standards for a battery pass and show them in a pilot project. In this way, consumers can see at a glance what kind of batteries are installed, how they were manufactured and how sustainable they are.

The purpose of this document is the description of the Asset Administration Shell submodel Battery Pass. It defines the battery identity and all relevant attributes. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships.

### 2.1 INTRODUCTION

The purpose of this document is the description of the Asset Administration Shell model Battery Pass. It defines the product identity and all relevant attributes. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships.

Every data provider **MUST** provide the data conformant to the semantic model specified in this document.
The unique identifier of the semantic model specified in this document **MUST** be used by the data provider to define the semantics of the data being transferred.
Every certified business application using the Single Level BoM As Specified data **MUST** be able to consume data conformant to the semantic model specified in this document.
This semantic model **MUST** be made available in the central Semantic Hub.
Data consumers and data provider **MUST** comply with the license of the semantic model.

In the Catena-X data space Digital Passport data **MUST** be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to:

- Technical communication due to Data Sovereignty requirements via [CX-0018](#31-normative-references)
- Exchange of data via digital twins as outlines in [CX-0003](#31-normative-references)

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
    <urn:samm:io.catenax.battery.battery_pass:4.0.0#> 
```

This identifier **MUST** be used by the data provider to define the semantics of the data being transferred.

### 2.5 FORMATS OF SEMANTIC MODEL

All formats can be generated through the turtle file and the SAMM cli.

#### 2.5.1 RDF TURTLE

he rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.
It can be found in the current version 2.0.0 in the github repository.

```text
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.battery_pass/4.0.0/BatteryPass.ttl
```

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

#### 2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel" (see CX-0002).

#### 2.5.3 AASX

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".
It can be found in the current version 2.0.0 in the "gen" folder github repository.

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.battery_pass/4.0.0/BatteryPass.json
```

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- [CX-0002 Digital Twins in Catena - X v2.0.0](https://catena-x.net/de/standard-library)
- [CX-0003 SAMM Aspect Meta Model v1.0.2](https://catena-x.net/de/standard-library)
- [CX-0004 Governance Process v1.0.1](https://catena-x.net/de/standard-library)
- [CX-0018 Eclipse Data Space Connector (EDC) v2.0.1](https://catena-x.net/de/standard-library)
- [CX-0010 Business Partner Number v2.0.0](https://catena-x.net/de/standard-library)

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

[SMT] How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

A reference implementation of an application using or providing data conformant to this aspect model can be found in a beta environment available on request.

## ANNEXES

### FIGURES

### TABLES
