# CX-0061 Triangle Traceability Data Provisioning Digital Twin As Planned v1.1.0

## ABSTRACT

The Digital Twin As-Planned Data Provisioning Set of Standards enables the traceability of vehicles, parts and materials on a catalog level (part number and vehicle models) throughout Catena-X network in a decentralized manner. Since the Digital Twins As-Planned can only be connected on a catalog-level, there are no prerequisite for unique identifiers like serial numbers. The goal is the availability of relationships knowledge of parts and their subparts (Bill of Material) throughout the whole network, without the necessity to store this information in a central repository or without preliminary sharing of data without a specific purpose or reasoning. This way *data chains* will be built to trace parts and materials on a catalog level from its origin to its dismantling to enable further data driven use cases based on catalog levels of parts throughout the Catena-X network. Currently, it is anticipated that these parts can be linked between two partners once the sourcing is complete.

This Set of Standards-document defines which aspect models are to be supported by underlying applications or data provisioning pipelines in order to support this use-case.
It also defines which Catena-X platform capabilities have to be used in order to enable the other participants to discover, request and leverage data.

## 1. INTRODUCTION

This document summarizes standards to be supported by a network participants IT infrastructure to cater for the Traceability Digital Twin As-Planned Use Case. This involves protocols, semantic models and platform capabilities to be used.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This document is targeting subsets of the following roles:

- Data Provider / Consumer
- Business Application Provider
- Enablement Service Provider

NOTE: Fulfilling a use-case standard by a data provider / consumer can be done in two ways: A) Purchase a certified app for the use-case. In this case the data provider / consumer does not need to proof conformity again and B) Data Provisioning / Consumption without a certified app for the use-case.

### 1.2 CONTEXT

> *This section is non-normative*

The aim of Traceability is to trace parts and materials across the entire value chain to enable data driven use cases over all n-tier levels without compromising data sovereignty. This Set of Standards enables data and app providers to deliver solutions for building data chains for parts and materials on a catalog level in all industries. This is done via the standardized creation of digital twins of vehicles and parts, identified by their model code and part / material number as well as the logical linking to their sub-components (Bill of Material, BoM). The default visibility of digital twins and their respective semantic models follows the one-up/one-down principle. This described Bill of Material is used to plan manufacturing process and assemblies including alternative parts. Sourcing will most likely be based on this kind of BoM.

The Traceability of parts and materials is crucial in the automotive industry to enable data driven use cases like the calculation of a product carbon footprint or demand and capacity management for supply chain resilience. By connecting parts with their subparts on a catalog level, data chains can be built to quickly provide the relationship of parts and materials in the respective supply chain.

The Digital Twin As-Planned Set of Standards is not intended as a storage location for other types of data such as the PCF (product carbon footprint) or social standard certificates. Instead, the Digital Twin As-Planned allows the establishment of a value driven data chain and serves as the basis for discovery and navigation for further data driven use cases. It allows the data owner to provide all necessary data with individual access rights and usage restrictions (access and usage policies) to ensure privacy and security. Additional information might be shared by utilizing the Asset Administration Shell through additional aspects or submodels.

The Digital Twin As-Planned Set of Standards supports the availability of data of vehicles, parts and materials and the connection to their sub parts (BoM).
It describes the concrete digital reflection of a produced vehicle or part and its provisioning towards Catena-X including Interoperability and Data Sovereignty standards and components by the participants willing to share such data. This Set of Standards also defines which components (e.g. Digital Twin Registry, IDS compliant Connector) must be used in order to be interoperable and sovereign in the data exchange as defined in Catena-X.

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

![architecture overview.png](./assets/architecture-overview.png)

*Figure 1: Architecture Overview*

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants* and their solutions will need to proof, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
Please refer to: https://catena-x.net/en/catena-x-introduce-implement/certification for the process of conformity assessment and certification.

Since this Set of Standards document describes mandatory standards to be fulfilled, participants **MUST** fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.

**Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases*.

### 1.6 EXAMPLES

### 1.7 TERMINOLOGY

> *This section is non-normative*

**Business Partner Number (BPN)**
A BPN is the unique identifier of a partner within Catena-x.

**International Data Space (IDS)**
International Data Space and its protocol for data exchange foresees an compliant connector handling contract negotiations before each data transfer and defines a general architecture for data exchange.

**Eclipse Dataspace Connector (EDC)**
The EDC is a reference implementation for an IDS compliant connector currently acting as a de-facto standard and/or reference Implementation within Catena-X

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2. SET OF STANDARDS Digital Twin As-Planned

> *This section is normative*

### 2.1 LIST OF STANDALONE STANDARDS

> *This section is normative*

To participate in Data Provisioning in the Traceability Digital Twin As-Planned use-case, the following single standards **MUST** be fulfilled by all participants for which the standard is relevant:

- CX-0002 Digital Twins in Catena – X
- CX–0018 Eclipse Data Space Connector (EDC)
- CX–0042 Aspect Model - SinglelevelBomAsPlanned
- CX–0043 Aspect Model - PartAsPlanned

A digital twin **MUST** be created for each catalog part developed by a manufacturer within Catena-X.
The digital twin **MUST** be provisioned as an Asset Administration Shell as per CX-0002 and registered in the decentral Digital Twin Registry hosted by each CX memeber as described in CX-0002.

The aspect model "PartAsPlanned" **MUST** be attached to the Asset Administration Shell of each catalog part, describing the catalog part itself.
The aspect model "SingleLevelBomAsPlanned" **SHOULD** be attached to the Asset Administration Shell of each catalog part holding the information on part relationships on catalog part level.

Parts and materials without any further sub-parts may be excepted from the "SingleLevelBomAsPlanned" obligation.

The submodel data **MUST** be transferred using the IDS Protocol as described in CX-0018.
The Eclipse Dataspace Connector as a reference implementation is **RECOMMENDED** to be used as an IDS compliant connector.

To participate in Data Provisioning in the Traceability Digital Twin As-Planned use-case, the following single standards **SHOULD** be fulfilled by all participants for which the standard is relevant:

- CX - 0094 Aspect Model - PartSiteInformation

The aspect model "PartSiteInformation" **SHOULD** be attached to the Asset Administration Shell of each catalog part, describing site related information for a given as planned item. A site is a delimited geographical area where a legal entity does business. In the "as planned" lifecycle context all potentially related sites are listed including all sites where e.g. production of this part is planned.

### 2.2 ADDITIONAL REQUIREMENTS

As the IDS protocol is being used, data **MUST NOT** be transferred before a corresponding contract negotiation has been successfully passed by the participants of the data exchange and a valid contract is present as described in CX-0018.

The required data offers **MUST** be discoverable through the Digital Twin Registry as submodel endpoints.

#### 2.3.1 Digital Twins and specific Asset IDs

The globalAssetId of the twins being referenced **MUST** correspond to the Catena-X unique ID for materials.

The following specific asset IDs not marked as optional **MUST** be available when registering a digital twin or when adding the above mentioned submodels to an existing twin for a catalog part in order to allow discovery. (see  CX-0002 that provides additional information), while `customerPartId` is **RECOMMENDED** to be added to the twin whenever possible, as customers usually do not have access to the manufacturer part number in their logistics processes.:

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
    <td> customerPartId </td>
    <td> Optional</td>
    <td> The ID of the type/catalog part from the ***customer***.<br/>The main reason why this property is optional is that it cannot be guaranteed that every manufacturer knows the customerPartId for their parts. If known, it is ***recommended*** to always add the customerPartId for easier lookup. </td>
    <td> String </td>
  </tr>
  <tr>
    <td> assetLifecyclePhase </td>
    <td> Optional (for DT As-Built)<br/>Mandatory (for DT As-Planned) </td>
    <td> The lifecycle phase of the asset.<ul> For catalog parts in a Digital Twin As-Planned lifecycle phase, use the value "AsPlanned".</ul></td>
    <td> Enum </td>
  </tr>
</table>

##### Authorization: Visbility of Specific Asset IDs in the DTR

To enforce a strict need-to-know (and prevent data from being exposed to non-authorized parties), the visibility of entries in the attribute `specificAssetIds` must be protected, i.e.,their visibility must be restricted to only the manufacturer of the part (which is represented by the digital twin) and the customers of the part. For that, the attribute `externalSubjectId` must be used.

- *Every entry* in the attribute `specificAssetIds` (e.g., for `customerPartId`, `manufacturerId` or `manufacturerPartId`) must contain a `externalSubjectId` attribute that defines which company (identified by a BPN) is allowed to see the entry.
- If a key-value pair should be visible to multiple companies, e.g., for batches or catalog parts, multiple entries with the same key-value pair, but different BPNs in the `externalSubjectId` attribute must be specified.
- The owner (creator) of a digital twin will always see all specific asset IDs. So, it's not necessary to add an `externalSubjectId` for the owner itself. This also means that only the owner of a digital twin will be able to see the entry if no `externalSubjectId` is specified.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX - 0002 Digital Twins in Catena – X
- CX – 0018 Eclipse Data Space Connector (EDC)
- CX – 0042 Aspect Model - SinglelevelBomAsPlanned
- CX – 0043 Aspect Model - PartAsPlanned
- CX - 0094 Aspect Model - PartSiteInformation

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

The traceability KIT and sub-KITs will include further information on EDC data asset structures, Digital Twin Submodel examples and API calls to be made.

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*
