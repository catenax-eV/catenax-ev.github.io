# CX-0004 Governance Process for Aspect models v.1.0.1

## ABSTRACT

This standard describes the governance process that shall be followed to
create, update or deprecate an aspect model. This process is the
prerequisite for any model submitted as a standardization candidate in
Catena-X.

## 1. Introduction

### 1.1 Audience & Scope

> *This section is non-normative*

This standard is relevant for

- Business Application Provider
- Data Provider / Consumer
- Core Service Provider
- Enablement Service Provider
- Consulting Service Provider

Some additional notes for stakeholders affected from governance of
semantic models:

- Business application providers or business owners who are in need of new data that shall be exchanged and thus need new or updated aspect models need to be aware of the governance process of semantic models
- Business owners who want to deprecate an existing aspect model need to be aware of the governance process of semantic models
- Technical Committee for Standardization of Catena-X: only models that were created and maintained following the governance process as defined in this standard are allowed to be submitted as standardization candidates

### 1.2 Context

> *This section is non-normative*

Catena-X standardized semantic models are an important enabler for
interoperability. Only when partners and business apps speak the \"same
language\", can data be exchanged seamlessly between use-cases and apps.
A semantic model that is standardized within Catena-X is needed when:

- The consumer of the data isn\'t known prior to the data exchange
- Multiple consumers want to use the data
- The data is processed by various business apps in multiple use-cases

The semantic models are included in the Semantic Hub. The Semantic hub provides a UI and search possibilities.

### 1.3 Conformance

As well as sections marked as non-normative, all authoring guidelines,
diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,
SHOULD and SHOULD NOT in this document are to be interpreted as
described in [BCP
14](https://datatracker.ietf.org/doc/html/bcp14) \[[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)\]
\[[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)\] when, and
only when, they appear in all capitals, as shown here.

### 1.4 Proof of conformity

> *This section is non-normative*

All participants and their solutions will need to prove that they
conform to the Catena-X standards. To validate that the standards are
applied correctly, Catena-X employs Conformity Assessment Bodies (CAB).

The resulting aspect models of modelling activities MUST be element of

https://github.com/eclipse-tractusx/sldt-semantic-models with status
\"Released\". It MUST be ensured that all modelling stages were
successful. The modelling stages are ensured by github actions and
corresponding checklists (see also public documentation in github:
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/documentation/GOVERNANCE.md)

### 1.5 Terminology

> *This section is non-normative*

**Aspect**

a domain-specific view on information and functionality associated with
a specific **Digital Twin** with a reference to a concrete **Aspect
Model**.

Note 1 to entry: An Aspect is a software service to retrieve the actual
runtime data of a **Digital Twin** (current or aggregated) from a data
source or to trigger operations. Thus, an aspect is built with an
implementation that ensures that the exchanged data is compliant to the
specification of the referenced **Aspect Model** via a defined
interface.

Note 2 to entry: Aspects are registered (incl. their "API endpoint"
information) with the **Digital Twin** to which they belong in the
Digital Twin Registry.

Note 3 to entry: an aspect corresponds to a **Submodel** in the **Asset
Administration Shell**

**Aspect Model**

a formal, machine-readable semantic description (expressed with
RDF/turtle) of data accessible from an **Aspect.**

Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant with the validity rules defined by the Semantic Aspect Meta Model.

Note 2 to entry: Aspect models are logical data models which can be used
to detail a conceptual model in order to describe the semantics of
runtime data related to a concept. Further, elements of an Aspect model
can/should refer to terms of a standardized Business Glossary (if
existing)​.

Note 3 to entry: An Aspect Model describes the semantics of a Submodel.
A **Submodel Template** guides the creation of a **Submodel** conformant
to the Aspect Model and the **Asset Administration Shell**.

**Asset Administration Shell**

standardized digital representation of an asset

Note 1 to entry: Asset Administration Shell and Administration Shell are
used synonymously.

\[SOURCE: IEC 63278-1, note added\]

**Digital Twin**

digital representation, sufficient to meet the requirements of a set of
use cases

Note 1 to entry: in this context, the entity in the definition of
digital representation is typically an asset.

\[SOURCE: IIC Vocabulary IIC:IIVOC:V2.3:20201025, adapted (an asset,
process, or system was changed to an asset)\]

**digital representation**

information and services representing an entity from a given viewpoint

EXAMPLE 1: examples of information are properties (e.g., maximum
temperature), actual parameters (e.g., actual velocity), events (e.g.,
notification of status change), schematics (electrical), and
visualization information (2D and 3D drawings).

EXAMPLE 2: examples of services are providing the history of the
configuration data, providing the actual velocity, and providing a
simulation.

EXAMPLE 3: examples of viewpoints are mechanical, electrical, or
commercial characteristics.

\[SOURCE: IEC 63278-1, editorial changes\]

## 2. Governance Process for Aspect Models

The governance process including its three modelling stages as described
in

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/documentation/GOVERNANCE.md
MUST be followed. The process includes guidance for new models, for
updating existing models and for deprecating existing semantic models.

The Quality Gates for these three modelling stages are as follows:

MS1_Approved, Checklist \"MS1 Request for Model Development\" is
approved.

MS2_Approved, Checklist \"MS2 Valid Model\" is approved.

MS3_Approved, Checklist \"MS3 Release Model\" is approved. The
associated pull request can be merged to the \"main-branch\".

These Quality Gates MUST be fulfilled for the different modelling stages
of an aspect model. This includes conformance to CX-0003.

Every aspect model MUST have a unique identifier. This identifier MUST
be used for registering an aspect/a submodel in the digital twin/the
Asset Administration Shell of a specific asset. For more details see
standards CX-0003 and CX-0002.

## 3. References

### 3.1 Normative References

- CX-0002 DIGITAL TWINS IN CATENA-X
- CX-0003 SAMM SEMANTIC ASPECT META MODEL

### 3.2 Reference Implementations

> *This section is non-normative*

The process is implemented in
https://github.com/eclipse-tractusx/sldt-semantic-models

[^1]: https://catena-x.net/fileadmin/user_upload/Vereinsdokumente/Catena-X_IP_Regelwerk_IP_Regulations.pdf

[^2]: https://catena-x.net/de/standard-library
