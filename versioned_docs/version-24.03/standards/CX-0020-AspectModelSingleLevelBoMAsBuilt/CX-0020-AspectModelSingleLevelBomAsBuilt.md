# CX-0020 Aspect Model SingleLevelBomAsBuilt v.2.0.0

## FOR WHOM IS THE STANDARD DESIGNED

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

- Aspect Model: A new property was added that reflects the need to represent items that are not available in the AsBuilt lifecycle (e.g. Serial items or batches). Therefore, provides the possibility to add items on a type level which are represented by digital twins from the AsPlanned lifecycle context. This expands the opportunity in the individual use cases, in need for a higher information coverage of items and materials.
The property enabling this is called: hasAlternative, and expresses wether we exactly know the part that is built-in or wether it is one of several options. If the value is false, it can be assumend this exact item is built-in. If the value is true, it is unknown wether this or an alternative item is built-in.This is the case when, e.g. the same item is supplied by two suppliers, the item is only tracked by a customer part ID during assembly. Thus, these items can not be differentiated from each other.
Example: If there is no instantiated steering wheel for the asBuilt, all potential steering wheel options can be referenced via the optional property. This is especially important for Repair & the End Of Life Use case.
- Aspect Model: manufacturerId (BPN) of child items is now mandatory

- Adapted parts of the Standard document contents to suit the new Model
- Change Version number

## ABSTRACT

Traceability aims to built up product genealogy information throughout
the supply chain. Therefore it is required to link a produced part with
its predecessor items. SingleLevelBoMAsBuilt is the submodel for a
digital twin for such a linkage. It contains the unique identifiers of
the predecessor items of a produced or assembled part and therefore
allows navigation through the supply chain by Catena-X identifiers.

## 1 INTRODUCTION

The aspect SingleLevelBoMAsBuilt provides information on the child
items (one structural level down) from which the given object is
assembled. It describes the relationship of serialized items, and if these are not given the option is provided to integrate items on a type level (asPlanned).

Note: The presented aspect model is in version 2.0.0

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard applies to the roles:

- Data Provider / Consumer
- Business Application Provider

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

This submodel template or aspect model is required to identify child
Items for a given part in terms of product genealogy.

It links the Catena-X IDs of the parent part with the Catena-X IDs of
its ingredients or components.

Therefore this aspect allows navigation throughout the supply chain.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines,
diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

**Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases.*

### 1.4 EXAMPLES

```json
{
  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",
  "childItems": [
    {
      "quantity": {
        "quantityNumber": 1.0,
        "measurementUnit": "unit:piece"
      },
      "hasAlternatives": false,
      "createdOn": "2022-02-03T14:48:54.709Z",
      "lastModifiedOn": "2022-02-03T14:48:54.709Z",
      "catenaXId": "urn:uuid:d60b99b0-f269-42f5-94d0-64fe0946ed04",
      "businessPartner": "BPNL50096894aNXY"
    }
  ]
}
```

Example JSON payload: Submodel "SingleLevelBomAsBuilt" for a Batch

```json
{
  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",
  "childItems": [
    {
      "quantity": {
        "quantityNumber": 25.0,
        "measurementUnit": "unit:kilogram"
      },
      "hasAlternatives": false,
      "createdOn": "2022-02-03T14:48:54.709Z",
      "lastModifiedOn": "2022-02-03T14:48:54.709Z",
      "catenaXId": "urn:uuid:d60b99b0-f269-42f5-94d0-64fe0946ed04",
      "businessPartner": "BPNL50096894aNXY"
    }
  ]
}
```

### 1.5 TERMINOLOGY

> *This section is non-normative*

The following terms are especially relevant for the understanding of the
standard:

**Business Partner Number (BPN)**

A BPN is the unique identifier of a partner within Catena-X.

**Business Partner Number Legal Entity (BPNL)**

A BPNL is the unique identifier of a manufacturer within Catena-X.

**Aspect Model**

A formal, machine-readable semantic description (expressed with
RDF/turtle) of data accessible from an Aspect.

```
Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta
Model (SAMM), i.e., it utilizes elements and relations defined in the
Semantic Aspect Meta Model and is compliant to the validity rules
defined by the Semantic Aspect Meta Model.
 
Note 2 to entry: Aspect model are logical data models which can be used
to detail a conceptual model in order to describe the semantics of
runtime data related to a concept. Further, elements of an Aspect model
can/should refer to terms of a standardized Business Glossary (if
existing)​.
```

Part / Item
The terms "part" and "item" are used as synonyms in this standard and describe products, materials or other entities that are referenced by the digital twins.

## 2 ASPECT MODEL “SingleLevelBomAsBuilt”

> *This section is normative*

### 2.1 INTRODUCTION

The aspect SingleLevelBoMAsBuilt provides information on the child
items (one structural level down) from which the given object is
assembled. It describes the relationship of serialized items and if missing, of items on a catalogue level.
Moreover, the as-built lifecycle references all child items as manufactured by the manufacturer referencing only child items in an as-built lifecycle themselves (e.g. serialized items or batches), unless items can only be tracked by an part ID (on a type level).
If it is unclear which item has been built-in into the parent item, all potential items must be listed. This is the case when, e.g. the same item is supplied by two suppliers and the item is only tracked by a customer part ID during assembly, these items cannot be differentiated from each other.

If a data provider decides to provide data for the SingleLevelBomAsBuilt Aspect Model
they **MUST** provide the data conformant to the semantic model specified in this document.

The unique identifier of the semantic model specified in this document
**MUST** be used by the data provider to define the semantics of the data
being transferred.

Every certified business application relying on SingleLevelBoMAsBuilt
data **MUST** be able to consume data conformant to the semantic model
specified in this document.

This semantic model **MUST** be made available in the central Semantic Hub.

Data consumers and data provider **MUST** comply with the license of the
semantic model.

In the Catena-X data space SingleLevelBoMAsBuilt data **MUST** be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002 .

Data providers of the SingleLevelBomAsBuilt Aspect Model **MUST** provide the data as part of a digital twin of the
asset for serialized items conformant to CX-0002.

The JSON Payload of data providers **MUST** be conformant to the JSON Schema
as specified in this document.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

### 2.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case
Traceability. This Catena-X data model is made available under the terms
of the Creative Commons Attribution 4.0 International (CC-BY-4.0)
license, which is available at Creative Commons[^4].

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier

**urn:samm:io.catenax.single_level_bom_as_built:2.0.0**

This identifier **MUST** be used by the data provider to define the semantics of the data being transferred.
  
### 2.5 FORMATS OF SEMANTIC MODEL

#### 2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is
the master for generating additional file formats and serializations.

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_built/2.0.0/SingleLevelBomAsBuilt.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 2.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#32-non-normative-references)].

Note: As soon as the specification V3.0 of the Asset Administration Shell specfication is available
an update will be provided.

### 2.6 SEMANTIC MODEL

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX-0001 EDC DISCOVERY API
- CX-0002 DIGITAL TWINS IN CATENA-X
- CX-0003 SAMM ASPECT META MODEL
- CX-0004 GOVERNANCE PROCESS
- CX-0018 ECLIPSE DATA SPACE CONNECTOR (EDC)
- CX-0045 Aspect Model Template Data Chain

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

\[SMT\] How to create a submodel template specification. Guideline.
Download from:
https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

[^3]: https://github.com/eclipse-tractusx/sldt-semantic-models

[^4]: https://creativecommons.org/licenses/by/4.0/legalcode>

[^5]: https://github.com/eclipse-esmf/esmf-sdk

### 3.3 REFERENCE IMPLEMENTATIONS
  
> *This section is non-normative*

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*
