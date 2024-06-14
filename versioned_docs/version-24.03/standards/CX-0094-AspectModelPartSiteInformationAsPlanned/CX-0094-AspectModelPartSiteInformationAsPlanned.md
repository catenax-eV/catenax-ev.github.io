# CX-0094 Aspect Model: Part Site In Formation As Planned v.1.0.0

## ABSTRACT

The semantic model described below describes a submodel for a digital twin on material or part level providing site related information. A site is a delimited geographical area where a legal entity does business. In the Digital Twin as planned lifecycle stage all potentially related sites are listed including all sites where e.g. production of this material or part is planned.

## 1. INTRODUCTION

The aspect PartSiteInformationAsPlanned provides site related information for a given as planned item (i.e. a part type that is uniquely identifiable within Catena-X via its Catena-X ID). A site is a delimited geographical area where a legal entity does business. In the "as planned" lifecycle context all potentially related sites are listed including all sites where e.g. production of this part is planned.

Note: The presented aspect model is in version 1.0.0

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard applies to the roles:

1. Data Provider / Consumer
2. Business Application Provider

The described semantic model or submodel template must be provided by applications provisioning data for the Digital Twin AsPlanned lifecycle as well as all data providers in the Digital Twin AsPlanned lifecycle.

### 1.2 CONTEXT

> *This section is non-normative*

This submodel template or aspect model is required to give site related information for a given part.

Therefore this aspect contains information at which different locations (sites) a planned part is processed, e.g. from design to production of a part.

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

All participants* and their solutions must prove they conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).  

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

**Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases*.

### 1.6 EXAMPLES

Example JSON payload: Submodel "PartSiteInformationAsPlanned" for a component that is produced at the given site

```json
{
  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",
  "sites": [
    {
      "catenaXSiteId": "BPNS1234567890ZZ",
      "functionValidUntil": "2025-11-21T11:14:30.825+01:00",
      "function": "production",
      "functionValidFrom": "2022-11-21T11:14:30.825+01:00"
    }
  ]
}
```

### 1.7 TERMINOLOGY

> *This section is non-normative*

> Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.  
  
: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).
  
*[Source: Catena-X, CX-0002, note 3 removed]*

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 ASPECT MODEL “PartSiteInformationAsPlanned”

> *This section is normative*

This semantic model contains information at which locations (sites) a planned part will be processed. For representing sites only BusinessPartnerNumberSites may only be used. The original intent is to attach this aspect to a material specific twin in an Asset Administration Shell but is not limited to that use case.

This aspect may only contain BusinessPartnerNumberSites. In the As-Planned lifecycle state all variants are covered ("120% BOM").

Every data provider of partSiteInformationAsPlanned data MUST provide the data conformant to the semantic model specified in this document.

The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred.

Every certified business application relying on partSiteInformationAsPlanned data MUST be able to consume data conformant to the semantic model specified in this document.

This semantic model **MUST** be made available in the central Semantic Hub.

Data consumers and data provider **MUST** comply with the license of the semantic model.

The submodel data **MUST** be transferred using the IDS Protocol as described in CX-0018 and CX-0002.

Data providers **MUST** provide the data as part of a digital twin of the asset for a material/plant conformant to CX-0002.

The JSON Payload of data providers **MUST** be conformant to the JSON Schema as specified in this document.

### 2.1 INTRODUCTION

The aspect PartSiteInformationAsPlanned provides site related information for a given as planned item (i.e. a part type that is uniquely identifiable within Catena-X via its Catena-X ID). A site is a delimited geographical area where a legal entity does business. In the "as planned" lifecycle context all potentially related sites are listed including all sites where e.g. production of this part is planned.

Note: The presented aspect model is in version 1.0.0

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in
accordance to the "semantic driven workflow" to create a submodel template
specification [SMT](#32-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub2F2F
conformant to CX-0003.

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier:

```text
urn:bamm:io.catenax.part_site_information_as_planned:1.0.0
```

This identifier MUST be used by the data provider to define the semantics of the data being transferred.

### 2.5 FORMATS OF SEMANTIC MODEL

#### 2.5.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating
additional file formats and serializations.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_site_information_as_planned/1.0.0/PartSiteInformationAsPlanned.ttl 
```

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 2.5.3 aasx

A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
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

```text
    [OPTIONAL] Add figures here if nececarry
```

### TABLES

> *This section is non-normative*

```text
    [OPTIONAL] Add Tables here here if nececarry
```
