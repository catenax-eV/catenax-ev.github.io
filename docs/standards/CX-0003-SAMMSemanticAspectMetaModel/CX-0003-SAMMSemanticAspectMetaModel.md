---
tags:
  - CAT/Semantic
---

# CX-0003 SAMM Aspect Meta Model v1.2.0

## ABSTRACT

The [Semantic Aspect Meta Model (SAMM)](https://github.com/eclipse-esmf/esmf-semantic-aspect-meta-model), an open standard, shall be used for
defining the semantics of the different aspects of an asset that is
represented via a digital twin. Aspect models are machine readable and
other artifacts can be derived from it. The aspect model is the common
basis for the http/REST API for accessing data via the standardized
digital twin API of the Asset Administration Shell.

## FOR WHOM IS THE STANDARD DESIGNED

This standard is designed for semantic modelling and usage of semantic models in Catena-X.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

Changes compared to V1.1.0 of CX-0003:

- Update of references
- Aligned with the newest governance process (the status "standardized" has been removed from semantic models).

Changes compared to V1.0.2 of CX-0003:

- Update to SAMM V2.1.0
- No acceptance of deprecated BAMM aspect models any longer
- Update to new version of operating model
- Update to conform to new standard document structure

## 1 Introduction

### 1.2 Audience & Scope

*This section is non-normative*

This standard is relevant for the following roles:

- Business Application Provider
- Data Provider / Consumer
- Core Service Provider
- Enablement Service Provider
- Onboarding Service Provider
- Consulting Service Provider

The standard needs to be applied in the following cases for the
following roles:

- Business Application Providers who want to request or create proprietary new aspect models
- Data Providers who need to create digital twins offering data conformant to a specific aspect model and want to understand the underlying metamodel
- Data Consumers who need to understand the data offered by a digital twin and want to understand the underlying metamodel of the corresponding aspect model
- Core, enablement and onboarding service providers who offer services in the context of the Semantic Hub or for tooling based on aspect models
- Consulting service providers who offer consulting for data consumers and data providers

### 1.2 Context and Architecture Fit

*This section is non-normative*

#### Context

In Catena-X, along with [GAIA-X](ttps://gaia-x.eu/), Digital Twins are to be considered as a core concept to exchange data in the data space.

The Digital Twin Architecture Pattern focuses on ensuring (semantic) interoperability via Digital Twins and Semantic Models in a federated system.

A Digital Twin System forms the basis for comprehensive digitization of production and logistics by gradually creating consistent data homogeneity and interoperability. Since not everyone needs the same set of information, a Digital Twin is a collection of various aspects of an asset. An aspect can, for example, bundle all information about machine malfunctions. Such aspects are characterized by concrete aspect models that describe formally how an aspect is structured. Aspect models describe things like the units of measurement and possible value range for a temperature sensor in a way that is readable by machines. This allows for faster, more automated responses to the data as it is
received. Here, a meta model is a model that defines the constructs and properties used by aspect models. Expressing this aspect's semantics to consumers of the data can open up completely new possibilities. In other words, an aspect meta model provides the machine-readable language or
semantics used across an entire system of aspect models. Hence, the [Semantic Aspect Meta Model (SAMM)](https://github.com/eclipse-esmf/esmf-semantic-aspect-meta-model) allows the creation of meta models to describe the semantics of digital twins by defining their domain-specific aspects, containing information about both the runtime data structure (e.g., that there is a property in the data called "temperature", and that it has a numeric value) and information that is not part of the runtime data (e.g., the unit or range). It does not, however, contain actual runtime data (e.g., a numeric value representing the current temperature), as this will be delivered by an Aspect
conforming to this Aspect model. The combination of raw runtime data and its corresponding Aspect model yields information. Moreover, the SAMM allows to reuse semantic descriptions across different aspect models.

#### Architecture Overview

This chapter just gives a rough overview of the architecture.

The architectural component "Semantic Hub" is considered to be a core service. The architectural component "Digital Twin Registry" is considered to be an enabling service. "The Enablement Services are a bundle of decentral services that enable participation in the Catena-X data space. Each participant must deploy and use the enablement services to connect to the data space and enable standardized interactions based on the requirements of the respective use case." For more details see [Catena-X Operating Model](https://catenax-ev.github.io/docs/next/operating-model/why-introduction).

The Semantic Hub is a database containing aspect models released in Catena-X. These aspect models are accessible via a UI in the Catena-X Portal. The database is synchronized with the public github  (see [Proof of conformity](#13-conformance-and-proof-of-conformity)) containing the machine-readable specification of the aspect models that shall be conformant to the Semantic Aspect Meta Model as specified in this document. Every aspect model has a unique ID and this is why it can be referenced. Up to now there is a central Semantic Hub for the complete data space. This makes sense for the standardized and released aspect models. In the future also proprietary aspect models might be defined. So also decentralized Semantic Hubs will be possible.

A Digital Twin Registry contains the digital twins of a data provider
together with access information for the single aspects associated with
a digital twin. Additionally, every aspect of a digital twin contains
information about its semantics. The semantics is described via an
aspect model conformant to the Semantic Aspect Meta Model as specified
in this document.

The Eclipse Data Space Connector (EDC) (see standard [CX-0018](https://catenax-ev.github.io/docs/next/standards/overview)) defines access and usage policies for the different digital twins and aspects of the digital twins.

### 1.3 Conformance and Proof of Conformity

#### Conformance

As well as sections marked as non-normative, all authoring guidelines,
diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in \[[BCP 14](https://datatracker.ietf.org/doc/html/bcp14)], \[[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)\], \[[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)\] when, and only when, they appear in all capitals, as shown here.

#### Proof of Conformity

*This section is non-normative*

All participants and their solutions will need to prove that they conform to the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

Every aspect model released in Catena-X **MUST** be maintained in [Tractus-X - SLDT Semantic Models](https://github.com/eclipse-tractusx/sldt-semantic-models).

For [validation of aspect models](https://eclipse-esmf.github.io/esmf-developer-guide/tooling-guide/java-aspect-tooling.html#validating-aspect-models) open-source tool support is available as part of the [ESMF SDK](https://github.com/eclipse-esmf/esmf-sdk).

Every aspect model in
[Tractus-X - SLDT Semantic Models](https://github.com/eclipse-tractusx/sldt-semantic-models) that has the
status "released" **MUST** be validated without errors
against the Semantic Aspect Meta Model. For the current version of the
Semantic Aspect Meta Model under consideration see [normative references](#31-normative-references).
For the currently used version of the Validator see information in
[Readme](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/README.md).
Newer versions of the validator can be used but need an explicit
decision and -- if needed -- a migration path of all existing and
released aspect models to do so.

The governance process for new, updated or deprecated aspect models is defined by Catena-X e.V. Additionally, the [governance process](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/documentation/GOVERNANCE.md) is described in the github project.

Every aspect of a digital twin registered in a digital twin registry (see standard [CX-0002](CX-0002-DigitalTwinsInCatenaX)) accessible in the Catena-X data space MUST have a semantic description (semantic ID) that is conformant to the unique identifier of the SAMM aspect model associated to it.

### 1.4 Examples

An example would be an aspect models to exchange information about the
carbon footprint (PCF) of a product. This aspect model would specify
that the following information is mandatory to be transferred: the
footprint itself but also the product footprint identifier, the product
footprint specification version and the product category. Optionally
also land use emissions may be provided.

An extract from a corresponding machine-readable specification of the
aspect model conformant to the Semantic Aspect Meta Model could look
like this:

```
:ProductFootprintVersionCharacteristic a samm:Characteristic;

    samm:name "ProductFootprintVersionCharacteristic";

    samm:preferredName "Product Footprint Version Characteristic"@en;

    samm:description "Characteristic for defining a product footprint version as specified by the WBCSD (World Business Council for Sustainable Development) Pathfinder initiative."@en;

    samm:see https://wbcsd.github.io/introduction/;

    samm:dataType xsd:positiveInteger.
```

For more examples of aspect models conformant to the Semantic Aspect Meta Model see https://github.com/eclipse-tractusx/sldt-semantic-models.

### 1.5 Terminology

*This section is non-normative*

#### Aspect

> a domain-specific view on information and functionality associated with
a specific [*Digital Twin*](#digital-twin) with a reference to a concrete [*Aspect Model*](#aspect-model).

Note 1 to entry: An Aspect is a software service to retrieve the actual
runtime data of a Digital Twin (current or aggregated) from a data
source or to trigger operations. Thus, an aspect is built with an
implementation that ensures that the exchanged data is compliant to the
specification of the referenced Aspect Model via a defined
interface.

Note 2 to entry: Aspects are registered (incl. their "API endpoint"
information) with the Digital Twin to which they belong in the
Digital Twin Registry.

Note 3 to entry: an aspect corresponds to a [*Submodel*](#submodel) in the [*Asset Administration Shell*](#asset-administration-shell)

*\[SOURCE: [Eclipse Semantic Modeling Framework (ESMF)](https://eclipse-esmf.github.io/samm-specification/snapshot/index.html), editorial changes and notes added \]*

#### Aspect Model

> a formal, machine-readable semantic description (expressed with
RDF/turtle) of data accessible from an [*Aspect*](#aspect).

Note 1 to entry: An Aspect Model **MUST** adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant with the validity rules defined by the Semantic Aspect Meta Model.

Note 2 to entry: Aspect models are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

Note 3 to entry: An Aspect Model describes the semantics of a [*Submodel*](#submodel).

*\[SOURCE: [Eclipse Semantic Modeling Framework (ESMF)](https://eclipse-esmf.github.io/samm-specification/snapshot/index.html), editorial changes and notes added \]*

#### Asset Administration Shell (AAS)

> standardized digital representation of an asset

Note 1 to entry: Asset Administration Shell and Administration Shell are used synonymously.

*\[SOURCE: IEC 63278-1:2023, note added\]*

#### Submodel Template

> guides the creation of a [*Submodel*](#submodel) conformant
to the [*Aspect Model*](#aspect-model) and the [*Asset Administration Shell*](#asset-administration-shell).

*\[SOURCE: IEC 63278-1, extracted from text plus correlation with aspect model added \]*

#### Digital Twin

> [*digital representation*](#digital-representation), sufficient to meet the requirements of a set of use cases

Note 1 to entry: in this context, the entity in the definition of
digital representation is typically an asset.

*\[SOURCE: IIC Vocabulary IIC:IIVOC:V2.3:20201025, adapted (an asset,
process, or system was changed to an asset)\]*

#### Digital representation

> information and services representing an entity from a given viewpoint

EXAMPLE 1: examples of information are properties (e.g. maximum temperature), actual parameters (e.g. actual velocity), events (e.g. notification of status change), schematics (electrical), and visualization information (2D and 3D drawings).

EXAMPLE 2: examples of services are asset services (for example providing the history of the configuration data or providing the actual velocity) and asset related services (for example providing a simulation).

EXAMPLE 3: examples of viewpoints are mechanical, electrical, or commercial characteristics.

*\[SOURCE: IEC 63278-1:2023, editorial changes\]*

#### Submodel

> representation of an aspect of an asset

*\[SOURCE: IEC 63278-1:2023\]*

## 2 Semantic Aspect Meta Model (SAMM)

### 2.1 Eclipse Semantic Modeling Framework

The [Semantic Aspect Meta Model (SAMM)](https://github.com/eclipse-esmf/esmf-semantic-aspect-meta-model) is specified as an open standard
as integral part of the [Eclipse Semantic Modeling Framework (ESMF)](https://eclipse-esmf.github.io/samm-specification/snapshot/index.html).
This part again is part of the Top-Level Project [Eclipse Digital
Twin](ttps://projects.eclipse.org/projects/dt). The Eclipse Digital Twin Top-Level Project is a
collaborative, open-source initiative at the Eclipse Foundation
fostering the development of reference implementations for the
activities driven by the [Industrial Digital Twin
Association](https://industrialdigitaltwin.org) (IDTA).

The core of the Eclipse Semantic Modeling Framework is the development
of the Semantic Aspect Meta Model (SAMM). Besides the SAMM specifying
the language to define the semantics of a submodel in an ["Aspect
Model"](#aspect-model), the ESMF also includes an editor, SDKs in different programming
languages, a command line tool for validation, generating documentation
and different serializations and other functionality easing its usage
and implementation in digital twin projects. Also, aasx generators for
support of ["Asset Administration Shell"](#asset-administration-shell) are in scope.

Aspect Models express a schema with a defined Resource Description
Framework ([RDF](http://www.w3.org/TR/rdf11-concepts/)) vocabulary and are validated by a comprehensive
set of rules in the Shapes Constraint Language ([SHACL](https://www.w3.org/TR/shacl/)). Domain
semantics are captured by a combination of structural elements, relations, namespaces and reified named concepts.

The Eclipse Semantic Modeling Framework (ESMF) in combination with the specifications of and open-source solutions for the Asset Administration Shell accelerates the development of digital twin technologies and drives its adoption in ecosystems.

### 2.2 Semantic Aspect Meta Model

The Semantic Aspect Meta Model (SAMM) provides a set of predefined
objects that allow a domain expert to define aspect models and
complement a digital twin with a semantic foundation.

![SAMM 2.1.0](./assets/CX-0003-aspect-meta-model.jpg "Predefined SAMM Objects for Aspect Model Definition (Version
2.1.0)")

The complete specification and further information about its
implementation and requirements can be accessed via the [Eclipse Semantic Modeling Framework (ESMF)][https://eclipse-esmf.github.io/samm-specification/snapshot/index.html](https://eclipse-esmf.github.io/samm-specification/snapshot/index.html).

Every aspect model within the Eclipse Tractus-X repository [SLDT-Semantic-Models](https://github.com/eclipse-tractusx/sldt-semantic-models) that has status "released" **MUST** be conformant to the Semantic Aspect Meta Model.

Every new aspect model **MUST** be conformant to the version of the Semantic Aspect Meta Model as noted in the [normative reference](#31-normative-references) [SAMM](#2-semantic-aspect-meta-model-samm).

### 2.3 Creation and Maintenance

Every aspect model released in Catena-X **MUST** be maintained in Eclipse Tractus-X: [SLDT-Semantic-Models](https://github.com/eclipse-tractusx/sldt-semantic-models).

Every semantic model **MUST** have a unique identifier conformant to the meta model identifiers definition in [SAMM](#2-semantic-aspect-meta-model-samm). For the semantic models developed in the scope of Catena-X the unique identifier **MUST** start with

```
urn:samm:io.catenax.
```

Example for a unique identifier for an aspect model \"material for
recycling\":

```
urn:samm:io.catenax.material_for_recycling:1.0.0#MaterialForRecylcing
```

The governance process for new, updated or deprecated aspect models **MUST** be followed. The governance process for new, updated or deprecated aspect models is defined by Catena-X e.V. Additionally, the governance process is described directly in the Eclipse Tractus-X project: [GOVERNANCE.md](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/documentation/GOVERNANCE.md).

NOTE: Older versions of already released or published aspect models **MAY** start with

```
urn:bamm:io.catenax
```

However, aspect models with prefix urn:bamm **MUST NOT** be used any longer.

For migration of older aspect models see the  [Migration guide](https://eclipse-esmf.github.io/esmf-developer-guide/tooling-guide/bamm-migration.html).

:::note[Note] SAMM was named BAMM until end of 2022 (BAMM for BAMM Aspect Meta Model). Renaming was executed in the context of the migration of the corresponding open source projects from Open Manufacturing Platform (OMP), a Linux Foundation project, to [Industrial Digital Twin Association (IDTA)](https://industrialdigitaltwin.org) and [Eclipse Foundation](https://www.eclipse.org/org/foundation/). :::

### 2.4 Usage

Every aspect of a digital twin registered in a digital twin registry
(see [CX-0002](CX-0002-DigitalTwinsInCatenaX)) accessible in the Catena-X data space **MUST** have a
semantic description (semantic ID) that is conformant to the unique aspect
model ID associated to it (see chapter [Creation and Maintenance](#23-creation-and-maintenance)).

Example for semanticId:

```
urn:samm:io.catenax.material_for_recycling:1.0.0#MaterialForRecycling
```

## 3 References

### 3.1 Normative References

- [SAMM Semantic Aspect Meta Model, Version 2.1.0](https://eclipse-esmf.github.io/samm-specification/2.1.0/index.html).
- CX-0002 DIGITAL TWINS IN CATENA-X. Download in [Catena-X Standard Library](https://catenax-ev.github.io/docs/next/standards/overview).
- [Catena-X Operating Model](https://catenax-ev.github.io/docs/next/operating-model/why-introduction).

### 3.2 Non-Normative References

*This section is non-normative*

- [Semantic Data Structuring](https://raw.githubusercontent.com/OpenManufacturingPlatform/openmanufacturingplatform.github.io/master/docs/sds/OMP-Semantic-Data-Structuring-Whitepaper.pdf). Whitepaper. 2021-08-16. Open Manufacturing Platform.
- [Product Modeling with BAMM](https://github.com/OpenManufacturingPlatform/openmanufacturingplatform.github.io/raw/master/docs/sds/OMP-SDS-Product-Modeling-Whitepaper.pdf). Whitepaper. 2022-11-24. Open Manufacturing Platform.
- [ESMF Documentation](https://eclipse-esmf.github.io/esmf-documentation/). Eclipse Semantic Modeling Framework.

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
