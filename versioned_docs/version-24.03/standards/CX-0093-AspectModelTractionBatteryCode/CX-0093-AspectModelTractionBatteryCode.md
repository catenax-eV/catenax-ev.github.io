# CX-0093 Aspect Model: Traction Battery Code v1.0.0

## ABSTRACT

The semantic model described below describes a submodel for a digital twin of a traction battery or a respective subcomponent (pack, module or cell). This aspect model provides information about the traction battery code of a battery component. A traction battery code is an identification code according to GB/T 34014-2017 which has to be provided when exporting automotive traction batteries to the People's Republic of China. Additionally the model provides information about the type of the component.

## 1. INTRODUCTION

This standardization introduces the standardized aspect model for traction battery codes according to GB/T 34014-2017 with corresponding JSON schemas and payloads for guidance and orientation on how to provision and exchange the corresponding data within Catena-X.

Note: The presented aspect model is in version 1.0.0.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard applies to the roles:

This standard is relevant for the following roles:

- Data Provider / Consumer
- Business Application Provider
  
### 1.2 CONTEXT

> *This section is non-normative*

This aspect model is used in the context of the Catena-X use case Traceability aims on connecting the data chain by building relations between the digital twins of parts across company boundaries.
The TractionBatteryCode aspect model is used to provide the identification codes accoring the GB/T 34014-2017 which has to be provided when exporting automotive traction batteries to the People's Republic of China. These codes are needed on the level of the traction battery cell, module and pack.
On the lowest level, the cell level, the model contains only the traction battery code for the cell and the information on the classification which describes if the corresponding part is a cell, a module or a pack. On the middle level, the module level, the model contains the same information for the module (code and classification). In addition to that, however, it also includes a list of the cells information that are assembled into the module. Analogue to this, on pack level, the model contains the information of the pack itself as well as the information of the modules assembled into the pack and the cells assembled into the modules.
By accessing this aspect you can get all traction battery codes that are a part of the corresponding part of the traction battery.

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams,
examples, and notes in this specification are non-normative. Everything else in
this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**,
**REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be
interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they
appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants* and their solutions MUST proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.  

*Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases*.

### 1.6 EXAMPLES

Example JSON payload: Submodel "TractionBatteryCode" for a Battery Cell

```json
{
  "productType": "cell",
  "tractionBatteryCode": "X12CCPM27KLPCLE662382320"
}
```

Example JSON payload: Submodel "TractionBatteryCode" for a Battery Module

```json
{
  "productType": "module",
  "tractionBatteryCode": "B54MCPM27KLPCLE6A7519857",
  "subcomponents": [
    {
      "productType": "cell",
      "tractionBatteryCode": "X12CCPM27KLPCLE662382320"
    },
    {
      "productType": "cell",
      "tractionBatteryCode": "X12CCPM27KLPCLE662382321"
    }
  ]
}
```

Example JSON payload: Submodel "TractionBatteryCode" for a Battery Pack

```json
{
  "productType": "pack",
  "tractionBatteryCode": "4A6PCPM27KLPCLE742946319",
  "subcomponents": [
    {
      "productType": "module",
      "tractionBatteryCode": "B54MCPM27KLPCLE6A7519857",
      "subcomponents": [
        {
          "productType": "cell",
          "tractionBatteryCode": "X12CCPM27KLPCLE662382320"
        },
        {
          "productType": "cell",
          "tractionBatteryCode": "X12CCPM27KLPCLE662382321"
        }
      ]
    },
    {
      "productType": "module",
      "tractionBatteryCode": "B54MCPM27KLPCLE6A7519858",
      "subcomponents": [
        {
          "productType": "cell",
          "tractionBatteryCode": "X12CCPM27KLPCLE662382322"
        },
        {
          "productType": "cell",
          "tractionBatteryCode": "X12CCPM27KLPCLE662382323"
        }
      ]
    }
  ]
}
```

### 1.7 TERMINOLOGY

> *This section is non-normative*

Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.  

: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

*[Source: Catena-X, CX-0002, note 3 removed]*

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 ASPECT MODEL “TractionBatteryCode”

> *This section is normative*

### 2.1 INTRODUCTION

This aspect model is needed to provide the identification codes for traction batteries according the GB/T 34014-2017 which must be provided when exporting automotive traction batteries to the People's Republic of China. The model contains the traction battery code and classification of the corresponding battery component and all subcomponents.

If a data provider decides to provide data on TractionBatteryCode they **MUST** provide the data conformant to the semantic model specified in this document.
The unique identifier of the semantic model specified in this document **MUST** be used by the data provider to define the semantics of the data being transferred.
Every certified business application relying on TractionBatteryCode data **MUST** be able to consume data conformant to the semantic model specified in this document.
This semantic model **MUST** be made available in the central Semantic Hub.
Data consumers and data provider **MUST** comply with the license of the semantic model.  
The submodel data **MUST** be transferred using the IDS Protocol as described in CX-0018 and CX-0002.
Data providers **MUST** provide the data as part of a digital twin of the asset for serialized parts conformant to CX – 0002 DIGITAL TWINS IN CATENA-X.
The JSON Payload of data providers **MUST** be conformant to the JSON Schema as specified in this document.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in BAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier

**urn:bamm:io.catenax.traction_battery_code:1.0.0#TractionBatteryCode**

### 2.5 FORMATS OF SEMANTIC MODEL

#### 2.5.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.traction_battery_code/1.0.0/TractionBatteryCode.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 2.5.3 aasx

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#32-non-normative-references)].

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

CX-0002 DIGITAL TWINS IN CATENA-X

CX-0003 BAMM Aspect Meta Model

CX-0004 GOVERNANCE PROCESS

CX-0018 ECLPISE DATA SPACE CONNECTOR (EDC)

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

[SMT] How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*
