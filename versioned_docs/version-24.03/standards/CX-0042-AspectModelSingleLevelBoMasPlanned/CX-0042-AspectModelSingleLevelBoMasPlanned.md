# CX-0042 Aspect Model SingleLevelBomAsPlanned v.2.0.0

## FOR WHOM IS THE STANDARD DESIGNED

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

- changed version from 1.1.2 to 2.0.0
- updated version number of referenced aspect model from 1.1.0 to 2.0.0
- updated example JSON payload
- migrated the standard to the new template
- updated names of referenced standards
- changed urn from urn:bamm:io.catenax.single_level_bom_as_planned:2.0.0 to urn:samm:io.catenax.single_level_bom_as_planned:2.0.0
- minor formatting and typos

## ABSTRACT

The semantic model described below describes a submodel for a digital twin on material or part level providing information on its assembly. The single-level Bill of Material represents one sub-level of an assembly and does not include any lower-level subassemblies. The Digital Twin as planned lifecycle stage refers to the linkage of parts on a material/part number level. Currently, it is anticipated that these parts can be linked between two partners once the sourcing is complete.

## 1 INTRODUCTION

The aspect SingleLevelBomAsPlanned provides information on the child parts (one structural level down) from which the given object is assembled. It describes the relationship of parts/materials in a planned stage. It does not hold serial number or batch specific information, but supports navigation through the potential supply chains for a given material/part number.

Note: The presented aspect model is in version 2.0.0

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard applies to the roles:

1. Data Provider / Consumer
2. Business Application Provider

The described semantic model or submodel template must only be made available by applications,
as well as all data providers provisioning data for the Digital Twin AsPlanned lifecycle.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

This submodel template or aspect model is required to identify child part numbers for a given part.
It links the Catena-X IDs of the parent material/part with the Catena-X IDs of its ingredients or components materials.

Therefore this aspect allows navigation throughout the supply chain in the Digital Twin AsPlanned lifecycle.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

**Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases.*

### 1.4 EXAMPLES

Example JSON payload:

```json
{
  "catenaXId": "urn:uuid:055c1128-0375-47c8-98de-7cf802c3241d",
  "childItems": [
    {
      "catenaXId": "urn:uuid:5daB938E-Cafa-92B3-7ca1-9aD7885e9dC8",
      "quantity": {
        "quantityNumber": 2.5,
        "measurementUnit": "unit:litre"
      },
      "createdOn": "2022-02-03T14:48:54.709Z",
      "businessPartner": "BPNL50096894aNXY",
      "lastModifiedOn": "2022-02-03T14:48:54.709Z"
    }
  ]
}
```

### 1.5 TERMINOLOGY

> *This section is non-normative*

Aspect Model

A formal, machine-readable semantic description (expressed with
RDF/turtle) of data accessible from an Aspect.

Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta
Model (SAMM), i.e., it utilizes elements and relations defined in the
Semantic Aspect Meta Model and is compliant to the validity rules
defined by the Semantic Aspect Meta Model.

Note 2 to entry: Aspect model are logical data models which can be used
to detail a conceptual model in order to describe the semantics of
runtime data related to a concept. Further, elements of an Aspect model
can/should refer to terms of a standardized Business Glossary (if
existing)​.

Part / Item

The terms "part" and "item" are used as synonyms in this standard and describe products, materials or other entities that are referenced by the digital twins.

*\[Source: Catena-X, SEM-002, note 3 removed\]*

Additional terminology used in this standard can be looked up in the
glossary on the association homepage.

## 2 ASPECT MODEL “SingleLevelBomAsPlanned”

> *This section is normative*

This semantic model describes Part/Material relationships. The original intent is to attach this aspect to a material specific twin in an Asset Administration Shell but is not limited to that use case.
The single-level Bill of Material represents one sub-level of an assembly and does not include any lower-level subassemblies. In the As-Planned lifecycle state all variants are covered ("120% BOM").
Every data provider of SingleLevelBomAsPlanned data **MUST** provide the data conformant to the semantic model specified in this document.
The unique identifier of the semantic model specified in this document **MUST** be used by the data provider to define the semantics of the data being transferred.
Every certified business application relying on SingleLevelBomAsPlanned data **MUST** be able to consume data conformant to the semantic model specified in this document.

This semantic model **MUST** be made available in the central Semantic Hub. Data consumers and data provider **MUST** comply with the license of the semantic model.
In the Catena-X data space SingleLevelBoMAsPlanned data **MUST** be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002.
Data providers **MUST** provide the data as part of a digital twin of the asset for a material/plant conformant to CX-0002. The JSON Payload of data providers **MUST** be conformant to the JSON Schema as specified in this document.

### 2.1 INTRODUCTION

The aspect SingleLevelBomAsPlanned provides information on the child parts (one structural level down) from which the given object is assembled. It describes the relationship of parts/materials in a planned stage. It does not hold serial number or batch specific information, but supports navigation through the potential supply chains for a given material number.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier:

```text
urn:samm:io.catenax.single_level_bom_as_planned:2.0.0
```

This identifier **MUST** be used by the data provider to define the semantics of the data being transferred.

### 2.5 FORMATS OF SEMANTIC MODEL

#### 2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_planned/2.0.0/SingleLevelBomAsPlanned.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 2.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#32-non-normative-references)].

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX-0002 DIGITAL TWINS IN CATENA-X
- CX-0003 SAMM SEMANTIC ASPECT META MODEL
- CX-0004 GOVERNANCE PROCESS  
- CX-0018 ECLIPSE DATA SPACE CONNECTOR (EDC)
- CX-0045 Aspect Model Template Data Chain

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

[SMT] How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

This section is empty.

## ANNEXES

This section is empty.

### FIGURES

> *This section is non-normative*

This section is empty.

### TABLES

> *This section is non-normative*
