# CX-0126 Industry Core: Part Type  1.0.0

## ABSTRACT

This standard describes the **Industry Core: Part Type**. It sets the foundation to describe, identify and find a component on a type level and enables traversing across several levels to ensure the creation of data chains. The core makes it possible to configure enablement services for component-based data exchange. Other use cases are meant to build upon the foundation that is given by the industry core.

## FOR WHOM IS THE STANDARD DESIGNED

This standard is designed for everybody who wants to register, describe and use digital twins on part type level.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

No comparsion of previous version available, since this is the **first version** of this standard.

Instead following existing standards are incorporated into this new standard document:

- CX-0042 Aspect Model SingleLevelBomAsPlanned
- CX-0043 Aspect Model PartAsPlanned
- CX-0094 Aspect Model PartSiteInformationAsPlanned
- CX-0061 Triangle Traceability Data Provisioning BomAsPlanned

## 1 INTRODUCTION

This standard contains all information on the **Industry Core: Part Type**. The Industry Core is a shared foundation for use cases that utilize digital twins and aspect models in Catena-X. The Industry Core: Part Type describes digital twins and aspect models that are used to represent identifiable non-instanced parts, such as catalog parts. Digital twins and aspect models are meant to be reused by other use cases as much as possible, in order to simplify data provisioning across different use cases.

The Industry Core: Part Type provides the basis for identification, description, findability of part type digital twins in the Catena-X network and the connection of those twins to build data chains across the supply chain.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This document is targeting subsets of the following roles:

- Data Provider / Consumer
- Business Application Provider
- Enablement Service Provider

Note: Fulfilling a use-case standard by a data provider / consumer can be done in two ways:

1. Purchase a certified app for the use-case. In this case the data provider / consumer does not need to proof conformity again and
2. Data Provisioning / Consumption without a certified app for the use-case.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The aim of the Industry Core: Part Type is to build the foundation to describe, identify and find a component on an type level and enables traversing across the levels of the supply chain to ensure the creation of data chains and enable data driven use cases over all n-tier levels without compromising data sovereignty. This standard enables data and app providers to deliver solutions for building data chains for identifiable non-instanced parts, such as catalogue parts.  This is achieved via the standardized creation of digital twins of those entities as well as the logical linking to their parent and child components (Bill of Material as Planned).

The Industry Core: Part Type is not intended to include all information that is may needed in a use case. Instead, it allows the establishment of a value driven data chain and serves as a basis for further data driven use cases. It enables data owner to provide necessary data with individual access rights and usage restrictions (access and usage policies) to ensure privacy and security. Additional information might be shared by utilizing the Asset Administration Shell through additional aspects or submodels.

The Industry Core: Part Type is supporting the availability of data of identifiable non-instanced parts and the connection to their parent and child parts. It describes the concrete digital reflection of a generic (not physically produced) part on material- or catalog-level and its provisioning towards Catena-X including Interoperability and Data Sovereignty standards and components by the participants willing to share such data. This standard also defines which components (e.g. Digital Twin Registry, IDS compliant Connector) must be used in order to be interoperable and sovereign in a data exchange as defined in Catena-X.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants* and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please refer to: https://catena-x.net/en/catena-x-introduce-implement/certification for the process of conformity assessment and certification.

The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.

**Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases.*

### 1.4 EXAMPLES

Examples for data models: See according subsection [3 Aspect Models](#3-aspect-models).

### 1.5 TERMINOLOGY

> *This section is non-normative*

**Aspect Model**
A formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.
An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.
Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

**Asset Administration Shell (AAS)**
The Asset Administration Shell is a digital representation of an asset. It is a form of a digital twin.

**Business Partner Number (BPN)**
A BPN is the unique identifier of a partner within Catena-x.

**Eclipse Dataspace Connector (EDC)**
The EDC is a reference implementation for an IDS compliant connector currently acting as a de-facto standard and/or reference Implementation within Catena-X.

**IDSA/IDSA Protocol**
Protocol being used for data exchange in an International Dataspace. This includes contract negotiation.

**International Data Space (IDS)**
International Data Space and its protocol for data exchange foresees an compliant connector handling contract negotiations before each data transfer and defines a general architecture for data exchange.

**Part Instance**: A part instance is a physically produced instance (e.g. serialized part, batch, just-in-sequence-part) of a part type.

**Part Type**: A part type is a generic (not physically produced) part on material- or catalog-level as a representation for a designed part.

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 RELEVANT PARTS OF THE STANDARD FOR SPECIFIC USE CASES

> *This section is normative*

### 2.1 DATA PROVISIONING INDUSTRY CORE: PART TYPE

#### 2.1.1 LIST OF STANDALONE STANDARDS

To participate in Data Provisioning in the Industry Core: Part Type, the following single standards **MUST** be fulfilled by all participants for which the standard is relevant:

- CX-0002 Digital Twins in Catena-X 2.2.0
- CX-0018 Eclipse Data Space Connector (EDC) 2.1.0

#### 2.1.2 DATA REQUIRED

A digital twin **May** be created for planned parts developed by a manufacturer within Catena-X.
The digital twin **MUST** be provisioned as an Asset Administration Shell as per CX-0002 and registered in a decentral Digital Twin Registry hosted by each CX memeber as described in CX-0002.

The aspect model "PartAsPlanned" version 1.0.1 **MUST** be attached to the Asset Administration Shell of each part type, describing a planned part (e.g. catalogue part).

The aspect model "SingleLevelBomAsPlanned" version 1.1.0 **MUST** be attached to the Asset Administration Shell of each catalog part holding the information on part relationships on catalog part level.

The submodel data **MUST** be transferred using the IDS Protocol as described in CX-0018.
The Eclipse Dataspace Connector as a reference implementation is **RECOMMENDED** to be used as an IDS compliant connector.

#### 2.1.3 ADDITIONAL REQUIREMENTS

As the IDS protocol is being used, data **MUST NOT** be transferred before a corresponding contract negotiation has been successfully passed by the participants of the data exchange and a valid contract is present as described in CX-0018.

The required data offers **MUST** be discoverable through the Digital Twin Registry as submodel endpoints.

#### 2.1.4 DIGITAL TWINS AND SPECIFIC ASSET IDs

The globalAssetId of the twins being referenced **MUST** correspond to the unique ID being used in Catena-X.

The following specific asset IDs not marked as optional **MUST** be available when registering a digital twin or when adding the above mentioned submodels to an existing twin for a  part type in order to allow discovery. (see  CX-0002 that provides additional information), while `customerPartId` is **RECOMMENDED** to be added to the twin whenever possible, as customers usually do not have access to the manufacturer part number in their logistics processes. The specific asset IDs marked as optional **MAY** be used in addtion.

The following conventions for specific Asset Ids apply to all digital twins:

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
    <td> The ID of the type/catalog part from the *manufacturer*. </td>
    <td> String </td>
  </tr>
  <tr>
    <td> customerPartId </td>
    <td> Optional</td>
    <td> The ID of the type/catalog part from the *customer*.<br/><br/>The main reason why this property is optional is that it cannot be guaranteed that every manufacturer knows the customerPartId for their parts. If known, it is *recommended* to always add the customerPartId for easier lookup.<br/></td>
    <td> String </td>
  </tr>
  <tr>
    <td> assetLifecyclePhase </td>
    <td>
         Optional (for DT As-Built)<br/>
         Mandatory (for DT As-Planned)
    </td>
    <td> The lifecycle phase of the asset. <ul><li>For serialized parts, batches, and JIS parts, use the value *AsBuilt*.</li><li>For catalogue parts in a Digital Twin As-Planned lifecycle phase, use the value *AsPlanned*.</li></ul>**Set deprecated in this standard version and will be removed in the next version.**</td>
    <td> Enum </td>
  </tr>
  <tr>
    <td> digitalTwinType </td>
    <td> Mandatory </td>
    <td> The type of the digital twin. <ul><li>For parts on an instance level (e.g. serialized parts, batches, and JIS parts), use the value *PartInstance*. </li><li>For parts on a part type level (e.g. catalog parts), use the value *PartType*.</li><li>digitalTwinType was added to allow data consumers to search for all digital twins of a particular type, e.g, only for catalog parts by using `digitalTwinType="PartType"` as filter. Without this filter, a search for a particular  manufacturer part ID would not only return the digital twin of the catalog part, but also all digital twins of instances of this catalog part, i.e., of the corresponding serial parts.</li></ul>**Implementation optional in this standard version, but will be mandatory in the next version.**</td>
    <td> String </td>
  </tr>
</table>

##### Authorization: Visbility of Specific Asset IDs in the DTR

To enforce a strict need-to-know (and prevent data from being exposed to non-authorized parties), the visibility of entries in the attribute `specificAssetIds` https://admin-shell.io/aas/3/0/AssetInformation/specificAssetIds must be protected, i.e.,their visibility must be restricted to only the manufacturer of the part (which is represented by the digital twin) and the customers of the part. For that, the attribute `externalSubjectIds` (https://admin-shell.io/aas/3/0/SpecificAssetId/externalSubjectId) must be used. For more information on the semantics of the mentioned properties, see AAS Pt. 1. For more information on the use of Digital Twins in Catena-X, see CX - 0002.

## 3 ASPECT MODELS

> *This section is normative*

An overview of the relevant aspect models of this standard.

- [PartAsPlanned](#31-aspect-model-partasplanned)
- [SingleLevelBomAsPlanned](#32-aspect-model-singlelevelbomasplanned)

Every certified business application relying on the Industry Core: Part Type data **MUST** be able to consume data conformant to the semantic models specified in this document.
This semantic models **MUST** be made available in the central Semantic Hub.

Data consumers and data provider **MUST** comply with the license of the semantic models.
The submodel data **MUST** be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002.

Data providers **MUST** provide data as part of a digital twin of the asset for part types conformant to CX-0002 DIGITAL TWINS IN CATENA-X .
The JSON Payloads of data providers **MUST** be conformant to the JSON Schemas as specified in this document.
The unique identifier of the semantic model specified in this document **MUST** be used by the data provider to define the semantics of the data being transferred.

### 3.1 ASPECT MODEL "PartAsPlanned"

#### 3.1.1 INTRODUCTION

This semantic model describes a Part/Material as it was planned. The original intent is to attach this aspect to a material-specific twin in an Asset Administration Shell but is not limited to that use case. The aspect allows several identifications: of a component from a manufacturer ID and/or part type and optionally a validity period in order to determine the unique ID with which the part is identified within Catena-X at a given time.

Note: The version **1.0.1** is the current version and **mandatory**. If existing, versions higher than that are **optional**, but shall be mandatory in new standard versions.

#### 3.1.2 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#62-non-normative-references).

The aspect model PartAsPlanned v1.0.1 is written in BAMM 2.0.0, and PartAsPlanned v2.0.0 in SAMM 2.0.0 as a modeling language conformant to CX - 0003 SAMM Aspect Meta Model as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.1.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group
Traceability. This Catena-X data model is made available under the terms
of the Creative Commons Attribution 4.0 International (CC-BY-4.0)
license, which is available at Creative Commons[^2].

The license information is available in GitHub.
In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

#### 3.1.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model PartAsPlanned **v1.0.1** has the unique identifier:

```text
urn:bamm:io.catenax.part_as_planned:1.0.1#PartAsPlanned
```

The semantic model PartAsPlanned **v2.0.0** has the unique identifier:

```text
urn:bamm:io.catenax.part_as_planned:2.0.0#PartAsPlanned
```

#### 3.1.5 FORMATS OF SEMANTIC MODEL

##### 3.1.5.1 RDF TURTLE

The rdf turtle files, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. These can be viewed by following links:

- [PartAsPlanned (v1.0.1)](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_as_planned/1.0.1/PartAsPlanned.ttl)

- [PartAsPlanned (v2.0.0)](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_as_planned/2.0.0/PartAsPlanned.ttl)

The open source command line tool of the Eclipse Semantic Modeling Framework[^3] is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

##### 3.1.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".

##### 3.1.5.3 AASX

A AASX file can be generated from the RDF Turtle file. The AASX file
defines one of the requested artifacts for a submodel template specification conformant to [SMT](#62-non-normative-references).

**Note:** As soon as the specification v3.0 of the Asset Administration
Shell specfication is available and update will be provided.

#### 3.1.6 EXAMPLE DATA

Example JSON payload: Submodel "PartAsPlanned" v1.0.1 that is **mandatory** in this standard version.

```json
{
  "catenaXId" : "580d3adf-1981-44a0-a214-13d6ceed9379",
  "partTypeInformation" : {
    "classification" : "product",
    "manufacturerPartId" : "123-0.740-3434-A",
    "nameAtManufacturer" : "Mirror left"
  },
  "validityPeriod" : {
    "validFrom" : "2023-03-06T14:50:23.230+01:00",
    "validTo" : "2023-08-06T14:50:23.230+01:00"
  }
}
```

Example JSON payload: Submodel "PartAsPlanned" v2.0.0 that is **optional** in this standard version but will be mandatory in the next version.

```json
{
  "catenaXId": "580d3adf-1981-44a0-a214-13d6ceed9379",
  "partTypeInformation": {
    "classification": "product",
    "manufacturerPartId": "123-0.740-3434-A",
    "nameAtManufacturer": "Mirror left"
  },
  "partSitesInformationAsPlanned": [
    {
      "functionValidUntil": "2023-11-30T17:07:31.697+01:00",
      "catenaXsiteId": "BPNS1234567890ZZ",
      "function": "production",
      "functionValidFrom": "2023-11-30T17:07:31.697+01:00"
    }
  ]
}
```

### 3.2 ASPECT MODEL "SingleLevelBomAsPlanned"

#### 3.2.1 INTRODUCTION

The aspect SingleLevelBomAsPlanned provides information on the child parts (one structural level down) from which a given object is assembled. It describes the relationship of parts/materials in a planned stage. It does not hold serial number or batch specific information, but supports navigation through the potential supply chains for a given material/part number.

Note: The version **1.1.0** is the current version and **mandatory**. If existing, versions higher than that are **optional**, but shall be mandatory in new standard versions.

#### 3.2.2 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#62-non-normative-references).

The aspect model SingleLevelBomAsPlanned v1.1.0 is written in BAMM 2.0.0, and SingleLevelBomAsPlanned v2.0.0 in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.2.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group
Traceability. This Catena-X data model is made available under the terms
of the Creative Commons Attribution 4.0 International (CC-BY-4.0)
license, which is available at Creative Commons[^2].

The license information is available in GitHub.
In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

#### 3.2.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model SingleLevelBomAsPlanned **v1.1.0** has the unique identifier:

```text
urn:bamm:io.catenax.single_level_bom_as_planned:1.1.0#SingleLevelBomAsPlanned
```

The semantic model SingleLevelBomAsPlanned **v2.0.0** has the unique identifier:

```text
urn:samm:io.catenax.single_level_bom_as_planned:2.0.0#SingleLevelBomAsPlanned
```

#### 3.2.5 FORMATS OF SEMANTIC MODEL

##### 3.2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. This can be viewed by following link:

- [SingleLevelBomAsPlanned (v1.1.0)](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_planned/1.1.0/SingleLevelBomAsPlanned.ttl)
- [SingleLevelBomAsPlanned (v2.0.0)](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_planned/2.0.0/SingleLevelBomAsPlanned.ttl)

The open source command line tool of the Eclipse Semantic Modeling Framework[^3] is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

##### 3.2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".

##### 3.2.5.3 AASX

A AASX file can be generated from the RDF Turtle file. The AASX file
defines one of the requested artifacts for a submodel template specification conformant to [SMT](#62-non-normative-references).

**Note:** As soon as the specification v3.0 of the Asset Administration
Shell specfication is available and update will be provided.

#### 3.2.6 EXAMPLE DATA

Example JSON payload: Submodel "SingleLevelBomAsPlanned" v1.1.0 for a [PartAsPlanned](#31-aspect-model-partasplanned) that is **mandatory** in this standard version.

```json
{
  "catenaXId" : "urn:uuid:055c1128-0375-47c8-98de-7cf802c3241d",
  "childParts" : [
    {
      "validityPeriod" : {
        "validFrom" : "2023-03-21T08:17:29.187+01:00",
        "validTo" : "2024-07-01T16:10:00.000+01:00"
    },
    "quantity" : {
      "quantityNumber" : 2.5,
      "measurementUnit" : "unit:litre"
    },
    "createdOn" : "2022-02-03T14:48:54.709Z",
    "lastModifiedOn" : "2022-02-03T14:48:54.709Z",
    "childCatenaXId" : "fEbdF497-B223-8365-dEbe-df4A6E67bDee"
    }
  ]
}
```

Example JSON payload: Submodel "SingleLevelBomAsPlanned" v2.0.0 for a [PartAsPlanned](#31-aspect-model-partasplanned) that is **optional** in this standard version  but will be mandatory in the next version.

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

## 4 APPLICATION PROGRAMMING INTERFACES

> *This section is normative*

There is no application programm interface (API) defintion in this standard version available.

## 5 PROCESSES

> *This section is normative*

There is no prcoess defintion in this standard version available.

## 6 REFERENCES

### 6.1 NORMATIVE REFERENCES

> *This section is normative*

Specification of the Asset Administration Shell - Part 1: Metamodel. V3.0, April 2023, IDTA number: 01001-3-0 On IDTA Content Hub

- CX-0001 EDC DISCOVERY API 1.0.2
- CX-0002 Digital Twins in Catena-X (Data Provider) 2.2.0
- CX-0003 SAMM Aspect Meta Model 1.1.0
- CX-0018 Eclipse Dataspace Connector (EDC) 2.1.0

### 6.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

How to create a submodel template specification. Guideline.
Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

[^1]: https://github.com/eclipse-tractusx/sldt-semantic-models

[^2]: https://creativecommons.org/licenses/by/4.0/legalcode

[^3]: https://github.com/eclipse-esmf/esmf-sdk

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
