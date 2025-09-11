---
tags:
  - CAT/Semantic
  - CAT/Industry Core
---

# CX-0126 Industry Core: Part Type 2.1.1

## ABSTRACT

This standard describes the **Industry Core: Part Type**. It sets the foundation to describe, identify and find a component on a type level and enables traversing across several levels to ensure the creation of data chains. The core makes it possible to configure enablement services for component-based data exchange. Other use cases are meant to build upon the foundation that is given by the industry core.

## FOR WHOM IS THE STANDARD DESIGNED

This standard is designed for everybody who wants to register, describe and use digital twins on part type level.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

- Added guidance in [Section 2.1.2](#212-data-required)
  - criteria for applying the industry core for part types

- Added new content in [Section 2.1.3](#213-additional-requirements)
  - New paragraph "Conventions for Use Case Policy in context data exchange"
  - Notes for versioning

- Changes in specificAssetIds of Digital Twins in [Section 2.1.4](#214-digital-twins-and-specific-asset-ids):
  - removed assetLifeCyclePhase
  - digitalTwinType is now mandatory (before it was optional)

- Replaced standardized aspect model in [Section 3.1](#31-aspect-model-parttypeinformation):
  - removed PartAsPlanned 2.0.0
  - replaced with newly standardized PartTypeInformation 1.0.0 (see link to changelog in section of the aspect model)

- New version of aspect model in [Section 3.2](#32-aspect-model-singlelevelbomasplanned):
  - SingleLevelBomAsPlanned 3.0.0 (see link to changelog in section of the aspect model)

- Newly standardized aspect model in [Section 3.3](#33-aspect-model-singlelevelusageasplanned):
  - SingleLevelUsageAsPlanned 2.0.0 (see link to changelog in section of the aspect model)

- Added Unique ID Push Notification API in [Section 4.1](#41-unique-id-push-notification-api) as content of the industry core

- Deleted "Every certified business application relying on aspects models of this standard **MUST** be able to consume data conformant to the semantic models specified in this document." from [Section 3](#3-aspect-models)

**Note:** This release (24.05.) contains **breaking changes**!

## 1 INTRODUCTION

This standard contains all information on the **Industry Core: Part Type**. The Industry Core is a shared foundation for use cases that utilize digital twins and aspect models in Catena-X. The Industry Core: Part Type describes digital twins and aspect models that are used to represent identifiable non-instanced parts, such as catalog parts. Digital twins and aspect models are meant to be reused by other use cases as much as possible, in order to simplify data provisioning across different use cases.

The Industry Core: Part Type provides the basis for identification, description, findability of part type digital twins in the Catena-X network and the connection of those twins to build data chains across the supply chain.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This document is targeting subsets of the following roles:

- Data Provider / Consumer
- Business Application Provider
- Enablement Service Provider

**Note:** Fulfilling a use-case standard by a data provider / consumer can be done in two ways:

1. Purchase a certified app for the use-case. In this case the data provider / consumer does not need to proof conformity again and
2. Data Provisioning / Consumption without a certified app for the use-case.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The aim of the Industry Core: Part Type is to build the foundation to describe, identify and find a component on an type level and to enable traversing across the levels of the supply chain in both directions to ensure the creation of data chains and enable data driven use cases over all n-tier levels without compromising data sovereignty. This standard enables data and app providers to deliver solutions for building data chains for identifiable non-instanced parts, such as catalogue parts.  This is achieved via the standardized creation of digital twins of those entities as well as the logical linking to their parent and child components (Bill of Material as Planned, Usage as Planned).

The Industry Core: Part Type is not intended to include all information that may be needed in a use case. Instead, it allows the establishment of a value driven data chain and serves as a basis for further data driven use cases. It enables data owners to provide necessary data with individual access rights and usage restrictions (access and usage policies) to ensure privacy and security. Additional information might be shared by utilizing the Asset Administration Shell through additional aspects or submodels.

The Industry Core: Part Type is supporting the availability of data of identifiable non-instanced parts and the connection to their parent and child parts. It describes the concrete digital reflection of a generic (not physically produced) part on material- or catalog-level and its provisioning towards Catena-X including Interoperability and Data Sovereignty standards and components by the participants willing to share such data. This standard also defines which components (e.g. Digital Twin Registry, IDS compliant Connector) must be used in order to be interoperable and sovereign in a data exchange as defined in Catena-X.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

All sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants* and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please refer to: https://catena-x.net/en/catena-x-introduce-implement/certification for the process of conformity assessment and certification.

The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.

The versions of the standardization documents valid for this standard are mentioned in sections where the [standalone standards](#211-list-of-standalone-standards), [normative references](#61-normative-references) and [non-normative references](#62-non-normative-references) are listed. The valid versions are not specifically mentioned in the body text.

*Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases.*

### 1.4 EXAMPLES

Examples for data models: See according subsection [3 Aspect Models](#3-aspect-models).

### 1.5 TERMINOLOGY

> *This section is non-normative*

**Aspect Model**

A formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model. Aspect models are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

**Asset Administration Shell (AAS)**
The Asset Administration Shell is a digital representation of an asset. It is a form of a digital twin.

**Business Partner Number (BPN)**
A BPN is the unique identifier of a partner within Catena.

**Tractus-X Eclipse Dataspace Connector (Tractus-X EDC)**:
The Tractus-X EDC is a reference implementation for a connector conformant to CX-0018 currently acting as a de-facto standard and/or reference Implementation within Catena-X. When mentioning the Tractus-X EDC in this standard, any other CX-0018 conformant connector is also a valid option.  

**IDSA/IDSA Protocol**
Protocol being used for data exchange in an International Dataspace. This includes contract negotiation.

**International Data Space (IDS)**
International Data Space and its protocol for data exchange foresees a compliant connector handling contract negotiations before each data transfer and defines a general architecture for data exchange.

**Part Instance**
A part instance is a physically produced instance (e.g. serialized part, batch, just-in-sequence-part) of a part type.

**Part Type**
A part type is a generic (not physically produced) part on material- or catalog-level as a representation for a designed part.

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 RELEVANT PARTS OF THE STANDARD FOR SPECIFIC USE CASES

> *This section is normative*

### 2.1 DATA PROVISIONING INDUSTRY CORE: PART TYPE

#### 2.1.1 LIST OF STANDALONE STANDARDS

To participate in Data Provisioning in the Industry Core: Part Type, the following single standards **MUST** be fulfilled by all participants for which the standard is relevant:

- CX-0002 Digital Twins in Catena-X 2.2.0
- CX-0018 Dataspace Connectivity 3.0.0
- CX-0045 Data Chain Template 1.3.0

#### 2.1.2 DATA REQUIRED

A digital twin **MAY** be created for part types developed by a manufacturer within Catena-X.
The digital twin **MUST** be provisioned as an Asset Administration Shell as per CX-0002 and registered in a decentral Digital Twin Registry hosted by each CX member as described in CX-0002.

The aspect model "PartTypeInformation" **MUST** be attached to the Asset Administration Shell of each part type, describing a part (e.g. catalog part).

The aspect model "SingleLevelBomAsPlanned" **MAY** be linked to the Asset Administration Shell of each catalog part holding the information on part relationships top-down on catalog part level. Information on the Bill of Material of those catalog parts **MUST NOT** be provided in any other way than with the aspect model "SingleLevelBomAsPlanned".

The aspect model "SingleLevelUsageAsPlanned" **MAY** be linked to the Asset Administration Shell of each catalog part holding the information on usage of this part in to be assembled or produced catalog products. Information on the usage of those catalog parts **MUST NOT** be provided in any other way than with the aspect model "SingleLevelUsageAsPlanned".

The submodel data **MUST** be transferred using the IDS Protocol as described in CX-0018.
The Tractus-X EDC as a reference implementation is **RECOMMENDED** to be used as a connector conformant to CX-0018.

Whenever data related to a single part type or on specific material number level is shared between partners, the use case **MUST** check which of the two cases mentioned below apply and act accordingly.

**Case 1: Aspect model contains data that describe the properties of a part type and are typically created by the manufacturer**
*Examples are product name, product properties, product handling instructions, product passport, product carbon footprint*  
  
It is **RECOMMENDED** to create a digital twin as described above. It is **RECOMMENDED** to attach the use case specific aspect models to the digital twin following the CX-0002 standard. If no twin exists it is **RECOMMENDED** to create the digital twin and attach the data as a submodel.

> ***Note:*** With the Saturn-Release (2025) this requirement will be changed from **RECOMMENDED** to **MUST**.

Notifications **MAY** be used in addition but **SHOULD** be reduced to a minimum.  
Duplicate digital twins **SHOULD** be avoided, therefore applications **SHOULD** scan the existing Digital Twin Registry for already existing twins for the same part type before creating a new one. In case of an existing twin, only submodel information **SHOULD** be attached to the existing twin.

**Case 2: Aspect model contains data that relate to different stages of the life cycle of the part type and are potentially created by other participants in the data chain**
*Examples are product demands, product capacities, product stock, product end of life*
  
It is **RECOMMENDED** to create a digital twin as described above. The use case specific aspect models **SHOULD** be attached to the digital twin following the CX-0002 standard
Notifications **MAY** be used in addition.
Several participants in the data chain **MAY** create digital twins related to that part type following the CX-0002 standard.

#### 2.1.3 ADDITIONAL REQUIREMENTS

As the IDS protocol is being used, data **MUST NOT** be transferred before a corresponding contract negotiation has been successfully passed by the participants of the data exchange and a valid contract is present as described in CX-0018. The required data offers **MUST** be discoverable through the Digital Twin Registry as submodel endpoints.

#### POLICY CONSTRAINTS FOR DATA EXCHANGE

In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined.  As part of this data sovereignty framework, conventions for access policies, for usage policies and for the constraints contained in the policies have been specified in standard 'CX-0152 Policy Constraints for Data Exchange'. This standard document CX-0152 **MUST** be followed when providing services or apps for data sharing/consuming and when sharing or consuming data in the Catena-X ecosystem. What conventions are relevant for what roles named in [1.1 AUDIENCE & SCOPE](#11-audience--scope) is specified in the CX-0152 standard document as well. CX-0152 can be found in the [standard library](https://catenax-ev.github.io/docs/standards/overview).

##### Versioning

The Aspect Models that are deployed as Digital Twins **MUST** be published in dcat:Dataset (http://www.w3.org/ns/dcat#) in the property that holds the full URN of the Aspect Model https://admin-shell.io/aas/3/0/HasSemantics/semanticId. Versions are explicitly contained in the URN.

The API versions **MUST** be published in the property https://w3id.org/catenax/ontology/common#version as version X.Y in dcat:Dataset (http://www.w3.org/ns/dcat#).

**Note:** Data Assets differentiated only by major version **MUST** be offered in parallel. The current standard and API versions mark the start of Life Cycle Management in Catena-X operations. Previous versions are dismissed.

#### 2.1.4 DIGITAL TWINS AND SPECIFIC ASSET IDs

The asset's globalAssetId **MUST** be equal to the unique id used in Catena-X

The following specific asset IDs not marked as optional **MUST** be available in the decentral Digital Twin Registry when registering a digital twin or when adding the above mentioned submodels to an existing twin for a  part type in order to allow searching for that specific asset ID. (see  CX-0002 that provides additional information), while `customerPartId` is **RECOMMENDED** to be added to the twin whenever possible, as customers usually do not have access to the manufacturer part number in their logistics processes. The specific asset IDs marked as optional **MAY** be used in addition.

The following conventions for specific Asset IDs apply to all digital twins:

<table>
  <tr>
    <th> Key </th> <th> Availability </th> <th> Description </th> <th> Type </th>
  </tr>
  <tr>
    <td> manufacturerId </td>
    <td> Mandatory </td>
    <td> The Business Partner Number (BPNL) of the manufacturer of the part. </td>
    <td> BPNL </td>
  </tr>
  <tr>
    <td> manufacturerPartId </td>
    <td> Mandatory </td>
    <td> The ID of the type/catalog part from the ***manufacturer***. </td>
    <td> String </td>
  </tr>
  <tr>
    <td> customerPartId </td><td> Optional</td><td> The ID of the type/catalog part from the ***customer***.<br/><br/>The main reason why this property is optional is that it cannot be guaranteed that every manufacturer knows the customerPartId for their parts. If known, it is ***recommended*** to always add the customerPartId for easier lookup.</td><td> String </td>
  </tr>
    <tr>
    <td> digitalTwinType </td><td> Mandatory </td><td> The types of the digital twins:
      <ul><li>"PartInstance" for serialized parts, batches, and JIS parts</li><li>"PartType" for catalog parts</li></ul> DigitalTwinType was added to allow data consumers to search for all digital twins of a particular type, e.g, only for catalog parts by using `digitalTwinType="PartType"` as filter. Without this filter, a search for a particular  manufacturer part ID would not only return the digital twin of the catalog part, but also all digital twins of instances of this catalog part, i.e., of the corresponding serial parts.</td>
    <td> String </td>
  </tr>
</table>

##### Authorization: Visbility of Specific Asset IDs in the DTR

To enforce a strict need-to-know principle (and prevent data from being exposed to non-authorized parties), the visibility of entries in the attribute `specificAssetIds` must be protected, i.e.,their visibility must be restricted to only the manufacturer of the part (which is represented by the digital twin) and the customers of the part. For more information on the semantics of the mentioned properties, see AAS Pt. 1. For more information on the use of Digital Twins in Catena-X, see CX - 0002 [Catena-X Standard Library](https://catena-x.net/de/standard-library).

## 3 ASPECT MODELS

> *This section is normative*

Relevant semantic models of this standard are:

- [PartTypeInformation](#31-aspect-model-parttypeinformation)
- [SingleLevelBomAsPlanned](#32-aspect-model-singlelevelbomasplanned)
- [SingleLevelUsageAsPlanned](#33-aspect-model-singlelevelusageasplanned)

Semantic models **MAY** be used individually or together.

Semantic models **MUST** be made available in the central Semantic Hub.

Data consumers and data provider **MUST** comply with the license of the semantic models. The submodel data **MUST** be requested and exchanged via a CX-0018 and CX-0002 compliant connector (e.g. Ecplise Dataspace Connector).

Data providers **MUST** provide data as part of a digital twin of the asset for serialized parts conformant to CX – 0002 DIGITAL TWINS IN CATENA-X.

The JSON Payloads of data providers **MUST** be conformant to the JSON Schemas as specified in this document.
The unique identifier of the semantic model specified in this document **MUST** be used by the data provider to define the semantics of the data being transferred.

### 3.1 ASPECT MODEL "PartTypeInformation"

#### 3.1.1 INTRODUCTION

This semantic model describes a part/material at type level. The original intent is to attach this aspect to a material-specific twin in an Asset Administration Shell but is not limited to that use case. The aspect allows several identifications: of a component from a manufacturer ID and/or part type and optionally a validity period in order to determine the unique ID with which the part is identified within Catena-X at a given time.

**Note:** The Aspect model PartTypeInformation **v1.0.0** is **mandatory**. Versions higher than that are **optional**, but might become mandatory in future releases of this standard. For the changelog of the aspect model, [see here](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_type_information/RELEASE_NOTES.md).

#### 3.1.2 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#62-non-normative-references).

The aspect model PartTypeInformation v1.0.0 is written in SAMM 2.1.0 as a modeling language conformant to *CX-0003 SAMM Semantic Aspect Meta Model* as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to CX-0003.

#### 3.1.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group Industry Core. This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons[^2].

The license information is available in GitHub. In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

#### 3.1.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model PartTypeInformation **v1.0.0** has the unique identifier:

```text
urn:samm:io.catenax.part_type_information:1.0.0#PartTypeInformation
```

#### 3.1.5 FORMATS OF SEMANTIC MODEL

##### 3.1.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. This can be viewed by following link:

- [PartTypeInformation (v1.0.0)](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_type_information/1.0.0/PartTypeInformation.ttl)

The open source command line tool of the Eclipse Semantic Modeling Framework[^3] is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

##### 3.1.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".

##### 3.1.5.3 AASX

A AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a submodel template specification conformant to [SMT](#62-non-normative-references).

**Note:** As soon as the specification v3.0 of the Asset Administration Shell specification is available an update will be provided.

#### 3.1.6 EXAMPLE DATA

Example JSON payload: Submodel "PartTypeInformation" v2.0.0 that is **mandatory** in this standard version.

```json
{
  "catenaXId" : "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",
  "partTypeInformation" : {
    "partClassification" : [
      {
        "classificationStandard": "GIN 20510-21513",
        "classificationID": "1004716",
        "classificationDescription": "Generic standard for classification of parts in the automotive industry."
      },
      {
        "classificationStandard": "OEM Part Classification 1022-102",
        "classificationID": "Exterior mirror",
        "classificationDescription": "OEM standard for classification of parts."
      }
    ],
    "manufacturerPartId" : "123-0.740-3434-A",
    "nameAtManufacturer" : "Mirror left"
  },
  "partSitesInformationAsPlanned" : [
    {
      "functionValidUntil" : "2024-01-29T12:00:00.123+02:00",
      "catenaXsiteId" : "BPNS1234567890ZZ",
      "function" : "production",
      "functionValidFrom" : "2024-01-29T12:00:00.123+02:00"
    }
  ]
}
```

### 3.2 ASPECT MODEL "SingleLevelBomAsPlanned"

#### 3.2.1 INTRODUCTION

The aspect SingleLevelBomAsPlanned provides information on the child parts (one structural level down) from which a given object is to be assembled or produced. It describes the relationship of parts/materials in a planned stage. It does not hold serial number or batch specific information, but supports navigation through the potential supply chains (top-down) for a given material/part number.

This model was modelled **conform to** the Catena-X standard **CX-0045 Aspect Model Data Chain Template**.

**Note:** The Aspect model SingleLevelBomAsPlanned **v3.0.0** is **mandatory**. Versions higher than that are **optional**, but might become mandatory in future releases of this standard. For the changelog of the aspect model, [see here](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_planned/RELEASE_NOTES.md).

#### 3.2.2 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#62-non-normative-references).

The aspect model SingleLevelBomAsPlanned v3.0.0 is written in SAMM 2.1.0 as a modeling language conformant to *CX-0003 SAMM Semantic Aspect Meta Model* as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to CX-0003.

#### 3.2.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group Industry Core. This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons[^2].

The license information is available in GitHub. In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

#### 3.2.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model SingleLevelBomAsPlanned **v3.0.0** has the unique identifier:

```text
urn:samm:io.catenax.single_level_bom_as_planned:3.0.0#SingleLevelBomAsPlanned
```

#### 3.2.5 FORMATS OF SEMANTIC MODEL

##### 3.2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. This can be viewed by following link:

- [SingleLevelBomAsPlanned (v3.0.0)](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_planned/3.0.0/SingleLevelBomAsPlanned.ttl)

The open source command line tool of the Eclipse Semantic Modeling Framework[^3] is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

##### 3.2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".

##### 3.2.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a submodel template specification conformant to [SMT](#62-non-normative-references).

**Note:** As soon as the specification v3.0 of the Asset Administration Shell specification is available an update will be provided.

#### 3.2.6 EXAMPLE DATA

Example JSON payload: Submodel "SingleLevelBomAsPlanned" v3.0.0 for a [PartTypeInformation](#31-aspect-model-parttypeinformation) that is **mandatory** in this standard version.

```json
{
  "catenaXId": "urn:uuid:055c1128-0375-47c8-98de-7cf802c3241d",
  "childItems": [
    {
      "validityPeriod": {
        "validFrom": "2023-03-21T08:17:29.187+01:00",
        "validTo": "2024-07-01T16:10:00.000+01:00"
      },
      "catenaXId": "urn:uuid:055c1478-0395-47m8-94de-7cf802c5724a",
      "quantity": {
        "value": 20,
        "unit": "unit:piece"
      },
      "businessPartner": "BPNL50096894aNXY",
      "createdOn": "2022-02-03",
      "lastModifiedOn": "2022-02-03T14:48:54.709Z"
    }
  ]
}
```

### 3.3 ASPECT MODEL "SingleLevelUsageAsPlanned"

#### 3.3.1 INTRODUCTION

The "Industry Core: Part Type" aims on planned product genealogy information throughout the supply chain. Therefore it is required to link a planned part with its predecessor items and its successor items. SingleLevelUsageAsPlanned is the submodel to build a successor linkage between the digital twins. It contains the customers and the unique identifiers of the successor items (usage) of a planned product and therefore allows bottom-up navigation through the supply chain by Catena-X identifiers.

More specific, the aspect provides information on the customers and the parent items (one structural level up) that will be produced or assembled from the given object. It creates the relationship of one part type in the asPlanned lifecycle phase with its parent items by referencing the part type digital twin of such item.

To be able to reference the unique identifiers of the successor items (usage) the data provider of this aspect model has to rely on their customer to provide them the correct information of that item. If the data provider does not have that information they are unable to provide the successor item but only the customer.

This model was modelled **conform to** the Catena-X standard **CX-0045 Aspect Model Data Chain Template**.

**Note:** The Aspect model SingleLevelUsageAsPlanned **v2.0.0** is **mandatory**. Versions higher than that are **optional**, but might become mandatory in future releases of this standard. For the changelog of the aspect model, [see here](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_usage_as_planned/RELEASE_NOTES.md).

#### 3.3.2 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#62-non-normative-references).

The aspect model SingleLevelUsageAsPlanned v2.0.0 is written in SAMM 2.1.0 as a modeling language conformant to *CX-0003 SAMM Semantic Aspect Meta Model* as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to CX-0003.

#### 3.3.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group Industry Core. This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons[^2].

The license information is available in GitHub. In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

#### 3.3.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model SingleLevelUsageAsPlanned **v2.0.0** has the unique identifier:

```text
urn:samm:io.catenax.single_level_usage_as_planned:2.0.0#SingleLevelUsageAsPlanned
```

#### 3.3.5 FORMATS OF SEMANTIC MODEL

##### 3.3.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. This can be viewed by following link:

- [SingleLevelUsageAsPlanned (v2.0.0)](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_usage_as_planned/2.0.0/SingleLevelUsageAsPlanned.ttl)

The open source command line tool of the Eclipse Semantic Modeling Framework[^3] is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

##### 3.3.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".

##### 3.3.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a submodel template specification conformant to [SMT](#62-non-normative-references).

**Note:** As soon as the specification v3.0 of the Asset Administration Shell specification is available and update will be provided.

#### 3.3.6 EXAMPLE DATA

Example JSON payload: Submodel "SingleLevelUsageAsPlanned" v2.0.0 for a [PartTypeInformation](#31-aspect-model-parttypeinformation) that is **mandatory** in this standard version.

```json
{
  "catenaXId": "urn:uuid:055c1128-0375-47c8-98de-7cf802c3241d",
  "parentItems": [
    {
      "validityPeriod": {
        "validFrom": "2023-03-21T08:17:29.187+01:00",
        "validTo": "2024-07-01T16:10:00.000+01:00"
      },
      "catenaXId": "urn:uuid:055c1478-0395-47m8-94de-7cf802c5724a",
      "quantity": {
        "value": 20,
        "unit": "unit:piece"
      },
      "businessPartner": "BPNL50096894aNXY",
      "createdOn": "2022-02-03",
      "lastModifiedOn": "2022-02-03T14:48:54.709Z"
    }
  ],
  "customers": [
    "BPNL50096894aNXY"
  ]
}
```

## 4 APPLICATION PROGRAMMING INTERFACES

> *This section is normative*

### 4.1 UNIQUE ID PUSH NOTIFICATION API

Unique ID Push notifications provide the possibility to push specific information to a business partner in the value chain (one level up). This can help to provide faster information to reduce necessary information collection activities.

The Unique ID Push Notification API **MAY** be used to push the information “Connect to Parent”  to a business partner.
The information “Connect to Parent” **MUST NOT** be provided in any other way than with the Unique ID Push Notification API.

**Connect to Parent**

Unique ID Push notifications of type "connect-to-parent" are a way for a manufacturer to notify a customer as soon as possible when a new digital twin for a part is available.

The sender of the notification is the supplier of a part item and the receiver of the notification is the customer of that part item. The Unique ID of that part is sent in the notification.

Connect to Parent notifications **MAY BE** applied to Digital Twins for part instances and for part types.

#### 4.1.1 PRECONDITIONS AND DEPENDENCIES

Application providers **MUST** prove their conformity by providing: An openAPI specification of the endpoints described. Examples of the data asset and contract definition structure in their Tractus-X EDC or any other CX-0018 compliant connector.

The Unique ID Push Notification API **MUST** be published towards the network using a Data Asset/Contract Definition in terms of the IDSA Protocol as described by the reference implementation CX-0018.

The Eclipse Dataspace Connector as a reference implementation **SHOULD BE** used and is referenced in this document. Other connectors fulfilling the same standards towards Catena-X **MAY** be leveraged as well.

It is of importance to mention, that there **MUST** be an API available behind each of the data offers described in the dataspace connector, which works according to the openAPI specifications description. Nevertheless, the APIs are **OPTIONAL** to follow the same structure, as there could even be APIs taking over the job of several of the endpoints mentioned.

The dataspace connector **SHOULD** act as a reverse proxy towards those APIs, as it holds the Data Offers linked to the respective implemented endpoints.

#### 4.1.2 API SPECIFICATION

##### 4.1.2.1 API ENDPOINTS

The Unique ID Push Notification API **MUST** be implemented as specified in the openAPI documentation as stated here: [openAPI](./assets/unique-id-push-2-0-0.yaml).

To enable compatibility with future versions, additional, unknown attributes in the API can be ignored.

The Unique ID Push Notification API **MUST** implement one endpoint:

```text
POST/uniqueidpush/connect-to-parent
```

In fact, it is **OPTIONAL** to implement the endpoint paths exactly as described above. The reason is that those endpoints are not called from any supply chain partner directly. Rather, they are called from the Tractus-X EDC as part of data assets. In that sense, it is just important to implement endpoints that can process the defined request body and respond with the HTTP status codes and - if required - reply with the defined response body.

The data assets will act similar to a reverse proxy for the notification endpoints, therefore rather the data assets are of significance, which **SHOULD** be exposed towards Catena-X through the Data Offer Catalogues in the Tractus-X EDC or any other CX-0018 compatible connector

##### 4.1.2.2 AVAILABLE DATA TYPES

The notification API **MUST** use JSON as the payload transported via HTTP.

##### 4.1.2.3 API RESOURCES & ENDPOINTS

The HTTP POST endpoints introduced in this standard **MUST** be called via Data Space Protocol. The sending and receiving of notifications **MUST** be built on the basis of HTTP POST endpoints.

#### 4.1.3 DATA ASSET STRUCTURE

##### DATA ASSET FOR UNIQUE ID PUSH NOTIFICATION RECEIVE ENDPOINT

When using the Tractus-X EDC or any other CX-0018 conformant connector, the following asset **MUST** be registered. Other connectors implementing the CX-0018 standard require a similar data asset with the same structure and provisioning towards Catena-X.

The following properties must be set for this asset:

```json
{
  "@context": {
    "edc": "https://w3id.org/edc/v0.0.1/ns/",
    "cx-common": "https://w3id.org/catenax/ontology/common#",
    "cx-taxo": "https://w3id.org/catenax/taxonomy#",
    "dct": "https://purl.org/dc/terms/"
  },
  "@id": "{{ _.assetId }}",
  "properties": {
    "dct:type": { "@id": "cx-taxo:UniqueIdPushConnectToParentNotification" },
    "cx-common:version": "2.0"
  }
}
 ```

Properties "dct:type" and "cx-common:version" are used to classify the asset and are explained in the [Digital Twin KIT](https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/Specification%20Digital%20Twin%20KIT#registration-at-edc) in more detail.

#### 4.1.4 VERSIONING

The API version described in this standard document **MUST** be published in the property https://w3id.org/catenax/ontology/common#version as version 2.0 in dcat:Dataset (http://www.w3.org/ns/dcat#).

## 5 PROCESSES

> *This section is normative*

There is no prcoess defintion in this standard version available.

## 6 REFERENCES

### 6.1 NORMATIVE REFERENCES

> *This section is normative*

- CX-0001 EDC DISCOVERY API 1.0.2
- CX-0002 Digital Twins in Catena-X 2.2.0
- CX-0003 SAMM Aspect Meta Model 1.1.0
- CX-0018 Dataspace Connectivity 3.0.0
- CX-0045 Data Chain Template 1.3.0
- CX-0053 BPN Discovery Services 1.1.0
- CX-0152 Policy Constraints For Data Exchange v1.0.0

### 6.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

[^1]: https://github.com/eclipse-tractusx/sldt-semantic-models

[^2]: https://creativecommons.org/licenses/by/4.0/legalcode

[^3]: https://github.com/eclipse-esmf/esmf-sdk

[^4]: [Catena-X Operating Model](https://catenax-ev.github.io/docs/next/operating-model/why-introduction)

### 6.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

[Item Relationship Service](https://github.com/eclipse-tractusx/item-relationship-service)

## ANNEXES

### FIGURES

> *This section is non-normative*

This section is empty.

### TABLES

> *This section is non-normative*

This section is empty.

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).

[def]: #212-data-required
