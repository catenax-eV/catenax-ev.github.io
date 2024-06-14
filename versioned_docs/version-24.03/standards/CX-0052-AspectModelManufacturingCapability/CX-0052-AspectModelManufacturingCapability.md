# CX - 0052 Aspect Model "ManufacturingCapability" v.1.0.0

## FOR WHOM IS THE STANDARD DESIGNED

## ABSTRACT

Manufacturing-as-a-Service (MaaS) scenarios focus on connecting buyers looking for specific products
with manufacturers in possession of the available production know-how and resources.

Sharing information about the required and available manufacturing capabilities in an interoperable
manner is fundamental for any MaaS solution providing basic and value-added services such as
automated search and matchmaking.

A common description of the manufacturing capabilities based on a standardized semantic definition
is therefore key for facilitating such an information exchange between Catena-X participants.

## 1 INTRODUCTION

This document describes the “ManufacturingCapability" aspect model used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

This standard is relevant for the following roles defined in [[CX-OMW]](#32-non-normative-references):

- **Business Application Provider** providing Manufacturing-as-a-Service solutions
- **Data Provider** willing to provide information about required or available capabilities
- **Data Consumer** interested in requesting information about required or available capabilities
- **On-Boarding Service Provider** supporting the onboarding of participants with their business and capability information
- **Enablement Service Provider** that support the workflow regarding the derivation and refinement of participants capabilities

The scope of this standard is only the “ManufacturingCapability” aspect model.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

Buyers occasionally need to search for manufacturers or specific manufacturing process steps. The
reasons for that might be that production at their own premises is currently not possible due to
resource or capacity bottlenecks (e.g. material shortage, machine defect, no machine with required
capabilities available, etc.), that other suppliers are currently not able to deliver a particular
product, or that a prototype of a new product is needed before a production and investment decision
is made. Instead of searching for the right supplier based on already existing but possibly limited
contacts, Catena-X MaaS enables the distribution of a pre-configured manufacturing request across a
network of ODM platforms and supplier networks in a domain-independent and IP-secure manner.

Buyers looking for manufacturers to purchase specific products or manufacturing process steps from,
must provide specific information on how the products should be manufactured. This includes the
required manufacturing capabilities that a manufacturer needs to possess in order to manufacture the
desired product or perform the manufacturing process steps. Manufacturers, on the other hand, are
interested in providing information about their know-how and available capabilities, making them
discoverable for potential buyers and allowing them to acquire new customers, orders and projects.

The standardized "ManufacturingCapability" model defined in this document is a first step towards a
common interpretability of manufacturing capabilities by all participants in a Manufacturing-as-a-Service
scenario. It therefore fosters the interoperability of suppliers and buyers in the manufacturing
industry, enabling faster alignment with less effort and making collaboration less error-prone.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

The proof of conformity for a single semantic model is done according to the general rules for
proving the conformity of data provided to a semantic model or the ability to consume the
corresponding data.

### 1.4 EXAMPLES

The following JSON provides an example for the value-only serialization of the "ManufacturingCapability"
aspect model.

```json
{
  "resourceSet": [
    {
      "provides": [
        {
          "capabilityLabel": "drilling"
        }
      ]
    }
  ],
  "capabilitySet": [
    {
      "capabilityLabel": "drilling"
    }
  ],
  "processSet": [
    {
      "hasInput": [
        {
          "productLabel": "wheel suspension"
        }
      ],
      "hasOutput": [
        {
          "productLabel": "wheel suspension"
        }
      ],
      "requires": [
        {
          "capabilityLabel": "drilling"
        }
      ]
    }
  ],
  "capabilityConstraintSet": [
    {
      "references": [
        {
          "propertyLabel": "diameter"
        }
      ]
    }
  ],
  "productSet": [
    {
      "productLabel": "wheel suspension"
    }
  ]
}
```

### 1.5 TERMINOLOGY

> *This section is non-normative*

Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data
accessible from an Aspect.

Business Partner Number (BPN)
:  A BPN is the unique identifier of a partner within Catena-X as defined in [[CX-0010]](#31-normative-references).

Buyer
: Person (or organization) using a manufacturing service, e.g. the milling and drilling to produce a
part of their own design.

Manufacturer
: Organization providing a manufacturing service to others, such as milling or drilling.

Resource
: A (Production) Resource is a function unit needed to perform required operations.
It differs from other resources such as energy or raw materials. [[Patzer-2023]](#32-non-normative-references)

Capability
: A Capability is an Entity which represents a designated function to achieve an effect in the physical
or virtual world [[Plattform Industrie 4.0]](#32-non-normative-references). Inherits relations from Entity. [[Patzer-2023]](#32-non-normative-references)

Process
: A process is a set of interacting operations in a system by which matter, energy or information is transformed, transported or stored [[IEV 351-42-33]](#32-non-normative-references). A Process may contain sub-processes. A process is a set of process steps or a single process step. Inherits relations from Entity. [[Patzer-2023]](#32-non-normative-references)

Product
: A Product is a material good or an (immaterial) service offering which is an outcome (output product)
or an input (input product) of a Process. Inherits relations from Entity and Asset. [[Patzer-2023]](#32-non-normative-references)

Property
: A Property is an attribute of an Entity which might - but does not need to have – data. [[Patzer-2023]](#32-non-normative-references).

Additional terminology used in this standard can be looked up in the glossary on the association
homepage.

## 2 ASPECT MODEL “ManufacturingCapability”

> *This section is normative*

### 2.1 INTRODUCTION

The "ManufacturingCapability" aspect model defines concept which represent the commonalities of
Process, Product, Resource, Capability and CapabilityConstraints representing a designated function
to achieve an effect in the physical or virtual world.

The following table provides an overview and a brief descriptions of the most important fields
defined in the "ManufacturingCapability" aspect model. A link to the complete model is available in
[Chapter 2.5.1](#251-rdf-turtle).

| Field | Description |
|-------|-------------|
| resourceSet | Set of entities capable of performing functions specified as capabilities. |
| capabilitySet | Set of implementation-independent specifications of functions in industrial production to achieve an effect in the physical or virtual world. |
| processSet | Set of production-relevant activities at any level of granularity that might affect materials and is performed by resources. |
| productSet | Set of physical objects being used as an input or created as an output of a production process. |
| capabilityConstraintSet | Set of conditions imposed on capabilities which further detail their applicability. |
| provides | Relation between a resource and capabilities it provides. |
| hasInput| Relation between a process and its input products. |
| hasOutput | Relation between a process and its output products. |
| requires | Relation between a process and capabilities it requires.|
| references | Relation between a capability constraint and its properties. |
| capabilityLabel | Human readable label of a capability. |
| productLabel | Human readable label of a product, e.g. the name. |
| propertyLabel | Human readable label of a property. |

The "ManufacturingCapability" aspect model is automotive-agonistic, thus allowing for future integration
and exchange with non-automotive dataspaces.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the
"semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to [[CX-0003]](#31-normative-references)
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to [[CX-0003]](#31-normative-references).

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0
International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
  urn:bamm:io.catenax.manufacturing_capability:1.0.0
```

This identifier MUST be used by the data provider to define the semantics of the data being transferred.

### 2.5 FORMATS OF SEMANTIC MODEL

#### 2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating
additional file formats and serializations. It can be found under the following link:

`https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.manufacturing_capability/1.0.0/ManufacturingCapability.ttl`

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 2.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#32-non-normative-references)].

### 2.6 SEMANTIC MODEL

Not applicable. (See [Chapter 2.5.1](#251-rdf-turtle))

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

```text
    [Optional] - Links to related Catena-X or external standards that need to be
    meet in order to fulfil this standard. If no external standards need to be
    met, leave empty.
```

[CX-0002] Digital Twins in Catena-X

[CX-0003] SAMM Aspect Meta Model

[CX-0010] Business Partner Number

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

```text
    [Optional] – Links to further documentation that may help to understand the 
    standard but isn’t relevant for conformity assessment
```

[SMT] How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

[CX-OMW] Catena-X Operating Model Whitepaper. Download from: https://catena-x.net/fileadmin/user_upload/Publikationen_und_WhitePaper_des_Vereins/CX_Operating_Model_Whitepaper_02_12_22.pdf

[Plattform Industrie 4.0] Plattform Industrie 4.0. Discussion paper: Information Model for Capabilities,Skills & Services, 2022. Available online: https://www.plattform-i40.de/IP/Redaktion/DE/Downloads/Publikation/CapabilitiesSkillsServices.pdf?__blob=publicationFile&v=1 (accessed on 24 May 2023).

[IEV 351-42-33] International Electrotechnical Commission. IEC TS 62443-1-1:2009: Industrial communication networks - Network and system security - Part 1-1: Terminology, concepts and models, 2009 (1.0). Available online: https://webstore.iec.ch/publication/7029 (accessed on 24 May 2023).

[Patzer-2023] Patzer, F.; Schnebel, B.; Schöppenthau, F.; Watson, K. Smart Factory Web Ontology Specification: Version 1.0. Available online: https://www.smartfactoryweb.de/docs/models/SFW_Ontology_Spec_1.0.pdf (accessed on 24 May 2023).

[RFC2119] Bradner, S. Key words for use in RFCs to Indicate Requirement Levels. Available online: https://datatracker.ietf.org/doc/html/rfc2119 (accessed on 07 August 2023).

[RFC8174] Leiba, B. Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words. Available online: https://datatracker.ietf.org/doc/html/rfc8174 (accessed on 07 August 2023).

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
