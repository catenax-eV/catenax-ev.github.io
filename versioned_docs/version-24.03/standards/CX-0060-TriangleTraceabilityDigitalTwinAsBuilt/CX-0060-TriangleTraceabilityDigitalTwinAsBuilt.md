# CX-0060 Triangle Traceability Digital Twin Built v1.0.0

## ABSTRACT

The Digital Twin (DT) As-Built Set of Standards enables the traceability of vehicles, parts and materials throughout Catena-X network in a decentralized manner. Prerequisite for the DT As-Built is the identification by unique identifiers of cars, parts and materials such as a VAN (anonymized Vehicle Identification number), serial number or batch-number. The goal is the availability of relationships knowledge of parts and their subparts (Bill of Material) throughout the whole network, without the necessity to store this information in a central repository or without preliminary sharing of data without a specific purpose or reasoning. This way *data chains* will be built to track and trace serialized parts and batches from its origin to its dismantling to enable further data driven use cases throughout the Catena-X network.

This Set of Standards-document defines which aspect models are to be supported by underlying applications or data provisioning pipelines in order to support this use-case.
It also defines which Catena-X platform capabilities have to be used in order to enable the other participants to discover, request and leverage data.

## 1. INTRODUCTION

This document summarizes standards to be supported by a network participants IT infrastructure to participate for the Traceability Digital Twin As-Built Use Case. This involves protocols, semantic models and platform capabilities to be used.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This document is targeting subsets of the following roles:

- Data Provider / Consumer
- Business Application Provider
- Enablement Service Provider

NOTE: Fulfilling a use-case standard by a data provider / consumer can be done in two ways: A) Purchase a certified app for the use-case. In this case the data provider / consumer does not need to proof conformity again and B) Data Provisioning / Consumption without a certified app for the use-case.

### 1.2 CONTEXT

> *This section is non-normative*

The aim of Traceability is to trace parts and materials across the entire value chain to enable data driven use cases over all n-tier levels without compromising data sovereignty. This Set of Standards enables data and app providers to deliver solutions for building data chains for serialized parts and batches in all industries. This is done via the standardized creation of digital twins of vehicles and parts as well as the logical linking to their sub-components (Bill of Material, BoM). The default visibility of digital twins and their respective semantic models follows the one-up/one-down principle.

The Traceability of parts and materials is crucial in the automotive industry to enable e.g. quality management and circular economy. By tracking and tracing back the sourcing of serialized parts or batches, manufactures can quickly identify the source of any quality issue and take corrective actions to address them. Robust traceability networks enable the automotive and further industries to quickly respond to any quality issues in their supply chain. Furthermore, this data chain will be the foundation for further use cases like circular economy or the battery passport.

The Digital Twin As-Built Set of Standards is not intended as a storage location for other types of data such as the PCF (product carbon footprint) or social standard certificates. Instead, the Digital Twin As-Built allows the establishment of a value driven data chain and serves as the basis for discovery and navigation for further data driven use cases. It allows the data owner to provide all necessary data with individual access rights and usage restrictions (access and usage policies) to ensure privacy and security. Additional information might be shared by utilizing the Asset Administration Shell through additional aspects or submodels.

The Digital Twin As-Built Set of Standards is supporting the availability of data of vehicles, parts and materials and the connection to their sub parts (BoM).
It describes the concrete digital reflection of a produced vehicle or part and its provisioning towards Catena-X including Interoperability and Data Sovereignty standards and components by the participants willing to share such data. This Set of Standards also defines which components (e.g. Digital Twin Registry, IDS compliant Connector) must be used in order to be interoperable and sovereign in the data exchange as defined in Catena-X.

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

The following pictures shows a high level architecture overview focusing on Catena-X plattform capabilities being used.

![architecture overview.png](./assets/architecture-overview.png)

*Figure 1: Architecture Overview*

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants* and their solutions will need to proof, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
Please refer to: https://catena-x.net/en/catena-x-introduce-implement/certification for the process of conformity assessment and certification.

Since this document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.

**Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases.*

### 1.6 EXAMPLES

### 1.7 TERMINOLOGY

> *This section is non-normative*

**Business Partner Number (BPN)**
A BPN is the unique identifier of a partner within Catena-x.

**International Data Space (IDS)**
International Data Space and its protocol for data exchange foresees an compliant connector handling contract negotiations before each data transfer and defines a general architecture for data exchange.

**Eclipse Dataspace Connector (EDC)**
The EDC is a reference implementation for an IDS compliant connector currently acting as a de-facto standard and/or reference Implementation within Catena-X

**Vehicle Anonymised Number (VAN)**
A number mapped 1:1 to VIN, but pseudonomised.

**Vehicle Identification Number (VIN)**
The VIN number is a 17-character code assigned by the manufacturer to every vehicle, providing specific information about its make, model, year of manufacture, and other key features. It is a unique identifier that allows the vehicle to be easily tracked and identified throughout its lifespan.

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2. STANDARDS FOR Digital Twin As-Built Set of Standards

> *This section is normative*

### 2.1 LIST OF STANDALONE STANDARDS

> *This section is normative*

To participate in Data Provisioning in the Traceability - Digital Twin As-Built use-case, the following single standards MUST mostly be fulfilled by all participants for which the standard is relevant:

- CX-0002 Digital Twins in Catena – X (Data Provider)
- CX–0018 Eclipse Dataspace Connector (EDC)
- CX–0019 SerialPart
- CX–0020 SingleLevelBoMAsBuilt
- CX–0021 Batch

A digital twin MUST be created for each serialized part or batch of materials produced by the manufacturer.
The digital twin MUST be provisioned via an Asset Administration Shell as per CX-0002 and registered in the decentral Digital Twin Registry hosted by each CX member as described in CX-0002.

The aspect model "Serial Part" MUST be linked to the Asset Administration Shell of a serialized part.
The aspect model "Batch" MUST be linked to the Asset Administration Shell of a Batch.
The aspect model "SingleLevelBoMAsBuilt" MUST be linked to the Asset Administration Shell of each serialized component or part and each batch holding the information on relationship of serialized items and batches.

Parts and materials without any further subparts MAY be excepted from the "SingleLevelBoMAsBuilt" obligation.

The submodel data MUST be transferred using the IDS Protocol as described in CX-0018.
The Eclipse Dataspace Connector as a reference implementation is RECOMMENDED to be used as an IDS compliant connector.

### 2.2 ADDITIONAL REQUIREMENTS

As the IDS protocol is being used, data MUST NOT be transferred before a corresponding contract negotiation has been successfully passed by the participants of the data exchange and a valid contract is present as described in CX-0018.
The required data offers MUST be discoverable through the Digital Twin Registry as submodel endpoints.

#### 2.3.1 Digital Twins and specific Asset IDs

The globalAssetId of the twins being referenced MUST correspond to the unique ID being used in Catena-X.

The following specific asset IDs not marked as optional MUST be available when registering a digital twin or when adding the above mentioned submodels to an existing twin for a serialized part in order to allow discovery. (see  CX-0002 that provides additional information). The specific asset IDs marked as optional MAY be used in addtion:
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
    <td> The ID of the type/catalog part from the ***manufacturer***. </td>
    <td> String </td>
  </tr>
  <tr>
    <td> customerPartId </td>
    <td> Optional </td>
    <td> The ID of the type/catalog part from the ***customer***.<br/>The main reason why this propertiy is optional is that it cannot be guaranteed that every manufacturer knows the customerPartId for their parts. If known, it is ***recommended*** to always add the customerPartId for easier lookup.</td>
    <td> String </td>
  </tr>
  <tr>
    <td> assetLifecyclePhase </td>
    <td> Optional (for DT As-Built)<br/>Mandatory (for DT As-Planned)</td>
    <td> The lifecycle phase of the asset.<ul><li>For serialized parts, batches, and JIS parts, use the value "AsBuilt".</li><li>For catalog parts, use the value "AsPlanned".</li></ul></td>
    <td> Enum </td>
  </tr>
</table>

**For serialized parts, additionally the following conventions apply:**

| Key            | Availability | Description                                                                                  | Type   |
|----------------|--------------|----------------------------------------------------------------------------------------------|--------|
| partInstanceId | Mandatory    | The serial number of the part from the manufacturer.                                         | String |
| van            | Optional     | **Only for vehicles:** The pseudonymized vehicle identification number (VIN) of the vehicle. | String |

**For batches, additionally the following conventions apply:**

| Key            | Availability |Description  | Type   |
|----------------|--------------|-----------------------------------------|--------|
| batchId        | Optional     | The number of the batch from the manufacturer.   | String |
| partInstanceId | Mandatory    | Also the number of the batch from the manufacturer. For the time being we also use the batch number as partInstanceId. This makes looking up digital twins for serialized parts and batches easier as a data consumer only has to specify the partInstanceId no matter if they are looking up a serialized part or a batch. Otherwise, the data consumer would need to know for what type of digital twin it is looking for or it would have to look for both until a match is found. | String |
A digital twin is required for each single instance of a serialized part or vehicle and each batch to be traced.

##### Authorization: Visbility of Specific Asset IDs in the DTR

To enforce a strict need-to-know (and prevent data from being exposed to non-authorized parties), the visibility of entries in the attribute `specificAssetIds` must be protected, i.e.,their visibility must be restricted to only the manufacturer of the part (which is represented by the digital twin) and the customers of the part. For that, the attribute `externalSubjectId` must be used.

- *Every entry* in the attribute `specificAssetIds` (e.g., for `customerPartId`, `manufacturerId` or `manufacturerPartId`) must contain a `externalSubjectId` attribute that defines which company (identified by a BPN) is allowed to see the entry.
- If a key-value pair should be visible to multiple companies, e.g., for batches or catalog parts, multiple entries with the same key-value pair, but different BPNs in the `externalSubjectId` attribute must be specified.
- The owner (creator) of a digital twin will always see all specific asset IDs. So, it's not necessary to add an `externalSubjectId` for the owner itself. This also means that only the owner of a digital twin will be able to see the entry if no `externalSubjectId` is specified.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX-0002 Digital Twins in Catena – X (Data Provider)
- CX–0018 Eclipse Dataspace Connector (EDC)
- CX–0019 SerialPart
- CX–0020 SingleLevelBoMAsBuilt
- CX–0021 Batch

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

The traceability KIT and sub-KITs will include further information on EDC data asset structures, Digital Twin Submodel examples and API calls to be made.

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*
