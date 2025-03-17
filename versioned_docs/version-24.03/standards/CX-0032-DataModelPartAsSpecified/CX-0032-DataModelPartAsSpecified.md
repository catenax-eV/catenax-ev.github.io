# CX-0032 Data Model: Part As Specified v1.0.1

## ABSTRACT

A core problem of the circular economy is making the right decisions. These strategies include Rethink, Refuse, Reduce, Reuse, Refurbish, Redesign, Recycle, Recover and Rot.
In particular, the end of life (EoL) decisions are a challenge. In order for a circular economy to scale, however, these must be supported in a standardized way. The present data model is used for this purpose. This supports the products R-Strategy Assistant & Circularity Dashboard to provide decision support for its users. In this first scope, the model should support the EoL decisions in particular.
The data provided by the data provider allows relevant decisions to be derived. This leads to higher reuse and recycling rates, an economically and ecologically balanced decision-making process and a scaled circular economy.

## 1.INTRODUCTION

The aspect model PartAsSpecified belongs to the part catalogue. A PartAsSpecified represents a certain OEM catalog part on part number level, providing a digital representation of the part as specified by the OEM. The link to the serialized part is done via the partId, this can only be done if the respective digital twins were provided by the supplier within the value chain.

### 1.1 PURPOSE OF THE DOCUMENT

The purpose of this document is the description of the Asset Administration Shell submodel bill of material (BoM) as specified. It defines the view of the producing company of the produced product. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships.

### 1.2 SCOPE OF THE IMPLEMENTATION

> *This section is non-normative*

This chapter serves to situate the given reference implementation, to outline its prerequisites and to point out its limitations.

### 1.3 PRECONDITIONS AND DEPENDENCIES

> *This section is non-normative*

Like all Catena-X data models, this model will be available in a machine-readable format on GitHub. This aspect model is written in BAMM 2.0 as a modeling language, which is a separate industry standard from the open manufacturing platform, see Open Manufacturing. The data contained in this Catena-X data model is requested and exchanged via Catena-X using an Eclipse Dataspace Connector (EDC), which is a separate Catena-X standard and an implementation of the IDSA standard.

### 1.4 CONSTRAINTS AND LIMITATIONS

> *This section is non-normative*

There are no constraints and limitations to this reference implementation document.

### 1.5 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.6 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will MUST to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

### 1.7 EXAMPLE

The following json gives an overview of the data model.

```json
{
    "partTypeInformation": {
        "partClassification": [{
                "value": "STEEWHL",
                "key": "BMW:PartFamily"
            }
        ],
        "ownerPartId": "94A2032",
        "partVersion": "05",
        "itemCategory": "component",
        "nameAtOwner": "Steering Wheel",
        "partDescription": "The steering wheel is nice and round"
    },
    "validityPeriod": {
        "validFrom": "2023-02-10T07:17:52.396Z",
        "validTo": "2023-02-10T07:17:52.396Z"
    },
    "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379"
}
```

### 1.8 TERMINOLOGY

> *This section is non-normative*

The following terms are especially relevant for the understanding of the standard:

Business Partner Number (BPN)
: A BPN is the unique identifier of a partner within Catena-x

End of life vehicle (EoL vehicle)
: 'End-of life vehicle' means a vehicle which is waste within the meaning of Article 1(a) of Directive 75/442/EEC on waste (waste means any substance or object which the holder disposes of or is required to dispose of pursuant to the provisions of national law in force).

Original Equipment Manufacturer (OEM)
:An original equipment manufacturer (OEM) is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.

Bill of material (BOM)
:A bill of material is a list of the raw materials, sub-assemblies, intermediate assemblies, sub-components, parts, and the quantities of each needed to manufacture an end product.

Eclipse Dataspace Connector (EDC)
:The Eclipse Dataspace Connector provides a framework for sovereign, inter-organizational data exchange.

## 2 ASPECT MODEL ""PartAsSpecified""

> *This section is normative*

### 2.1 INTRODUCTION

The purpose of this document is the description of the Asset Administration Shell submodel PartAsSpecified. The presented data model is described and illustrated in the following with the entities and properties and their interrelationships.

Every data provider MUST provide the data
conformant to the semantic model specified in this document.

The unique identifier of the semantic model specified in this document
**MUST** be used by the data provider to define the semantics of the data
being transferred.

Every certified business application using the PartAsSpecified data **MUST**
be able to consume data conformant to the semantic model specified in
this document.

This semantic model **MUST** be made available in the central Semantic Hub.

Data consumers and data provider **MUST** comply with the license of the
semantic model.

In the Catena-X data space PartAsSpecified data MUST be requested and
exchanged via Eclipse Dataspace Connector (EDC) conformant to [CX-0018](#3-references)
and [CX-0002](#31-normative-references).

The JSON Payload of data providers MUST be conformant to the JSON Schema
as specified in this document.

### 2.2 SPECIFICATION ARTIFACTS

The modelling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in BAMM 2.0.0 as a modeling language conformant to [CX-0003](#31-normative-references) as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F conformant to [CX-0003](#31-normative-references).

### 2.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group Digital Product Pass (DPP).This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F.

### 2.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier:

```txt
urn:bamm:io.catenax.bom_as_specified:2.0.0#PartAsSpecified
```

### 2.5 FORMATS OF SEMANTIC MODEL

All different formats of the semantic model can be found in the github repository.

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.part_as_specified/2.0.0
```

#### 2.5.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be accessed via github:

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_as_specified/2.0.0/PartAsSpecified.ttl
```

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation. These other formats are saved in the "gen" folder in github:

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.part_as_specified/2.0.0/gen
```

#### 2.5.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_as_specified/2.0.0/gen/PartAsSpecified-schema.json
```

#### 2.5.3 aasx

A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification conformant to \[[SMT](#32-non-normative-references)].

Note: As soon as the specification V3.0 of the Asset Administration Shell specification is available
and update will be provided.

### 2.6 SEMANTIC MODEL

The data model is described in BAMM 2.0.0. A html documentation can be generated from the rdf turtle file.

## 3. References

### 3.1 NORMATIVE REFERENCES

- [CX-0003 BAMM Aspect Meta Model v1.0.2](https://catena-x.net/de/standard-library)
- [CX-0002 Digital Twins in Catena - X v2.0.0](https://catena-x.net/de/standard-library)
- [CX-0018 Sovereign Data Exchange (EDC) v2.0.1](https://catena-x.net/de/standard-library)

### 3.2 NON-NORMATIVE REFERENCES

- [SMT- How to create submodel template specification](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf)

## ANNEXES

### FIGURES

> *This section is non-normative*

![PartAsSpecified](./assets/image.png)

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
