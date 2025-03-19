# CX-0127 Industry Core: Part Instance 1.0.0

## ABSTRACT

This standard describes the Industry Core: Part Instance. It sets the foundation to describe, identify and find a component on an instance level and enables traversing across several levels to ensure the creation of data chains. The core makes it possible to configure enablement services for component-based data exchange. Other use cases are meant to build upon the foundation that is given by the industry core.

## FOR WHOM IS THE STANDARD DESIGNED

This standard is designed for everybody who wants to register, describe and use digital twins on part instance level.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

No comparsion of previous version available, since this is the **first version** of this standard.

Instead following existing standards are incorporated into this new standard document:

- CX-0019 Aspect Model SerialPart
- CX-0020 Aspect Model SingleLevelBomAsBuilt
- CX-0021 Aspect Model: Batch
- CX-0060 Triangle Traceability - Digital Twin As-Built

## 1 INTRODUCTION

This standard contains all information on the Industry Core: Part Instance. The Industry Core is a shared foundation for use cases that utilize digital twins and aspect models in Catena-X. The Industry Core: Part instance describes digital twins and aspect models that are used to represent identifiable instantiated parts, such as serial parts, just-in-sequence parts or batches, and describe those in the Catena-X network. Digital twins and aspect models are meant to be reused by other use cases as much as possible, in order to simplify data provisioning across different use cases.
The Industry Core: Part Instance provides the basis for the identification, description, findability of part instance digital twins in the Catena-X network and the connection of those twins to build data chains across the supply chain.

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

The aim of the Industry Core: Part Instance is to build the foundation to describe, identify and find a component on an instance level and enables traversing across the levels of the supply chain to ensure the creation of data chains and enable data driven use cases over all n-tier levels without compromising data sovereignty. This standard enables data and app providers to deliver solutions for building data chains for identifiable instantiated parts, such as serialized parts, vehicles, just-in-sequence parts and batches. This is achieved via the standardized creation of digital twins of those entities as well as the logical linking to their parent and child components (Bill of Material as built).

The Industry Core: Part Instance is not intended to include all information that may be needed in an use case. Instead, it allows the establishment of a value driven data chain and serves as a basis for further data driven use cases.
It enables data owner to provide necessary data with individual access rights and usage restrictions (access and usage policies) to ensure privacy and security. Additional information might be shared by utilizing the Asset Administration Shell through additional aspects or submodels.

The Industry Core: Part Instance is supporting the availability of data of identifiable instantiated parts and the connection to their parent and child parts. It describes the concrete digital reflection of a produced vehicle or part and its provisioning towards Catena-X including Interoperability and Data Sovereignty standards and components by the participants willing to share such data. This standard also defines which components (e.g. Digital Twin Registry, IDS compliant Connector) must be used in order to be interoperable and sovereign in a data exchange as defined in Catena-X.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

All participants* and their solutions will need to proof, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
Please refer to: https://catena-x.net/en/catena-x-introduce-implement/certification for the process of conformity assessment and certification.

The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.

**Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases.*

### 1.4 EXAMPLES

Examples for data models: See according subsection [3 Aspect Models](#3-aspect-models).

### 1.5 TERMINOLOGY

> *This section is non-normative*

**Aspect Model**:
A formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.
An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.
Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

**Batch**:
A batch is a quantity of (semi-) finished products or (raw) material
products that have been produced under the same circumstances (e.g., same
production location), as specified groups or amounts, within a certain
time frame. Every batch can differ in the number or amount of products.
Different batches can have varied specifications, e.g., different
colors, quality, etc. A batch is identified via a Batch ID.

**Business Partner Number (BPN)**:
A BPN is the unique identifier of a partner within Catena-x.

**Eclipse Dataspace Connector (EDC)**:
The EDC is a reference implementation for an IDS compliant connector currently acting as a de-facto standard and/or reference Implementation within Catena-X

**International Data Space (IDS)**:
International Data Space and its protocol for data exchange foresees an compliant connector handling contract negotiations before each data transfer and defines a general architecture for data exchange.

**Just-in-sequence-part**:
Just-in-sequence is a delivery concept where parts are delivered to the production plant at a requested time in the exact order of installation, typically for a 1:1 dependency on the manufactured product. A just-in-sequence-part is a part for which this concept and order of delivery applies and which does not have a dedicated serial number (then it would be considered a serialized part). Examples for JIS-parts are seats and bumpers.

**Part Instance**: A part instance is a physically produced instance (e.g. serialized part, batch, just-in-sequence-part) of a part type.

**Part Type**: A part type is a generic (not physically produced) part on material- or catalog-level as a representation for a designed part.

**Serialized part**:
Instance of a part, where the particular instance can be uniquely identified by means of a serial number, a similar identifier (e.g. VAN) or a combination of multiple identifiers (e.g. combination of manufacturer, date and number).

**Vehicle Anonymised Number (VAN)**:
A number mapped 1:1 to VIN, but pseudonomised.

**Vehicle Identification Number (VIN)**:
The VIN number is a 17-character code assigned by the manufacturer to every vehicle, providing specific information about its brand, model, year of manufacture, and other key features. It is a unique identifier that allows the vehicle to be easily tracked and identified throughout its lifespan.

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 RELEVANT PARTS OF THE STANDARD FOR SPECIFIC USE CASES

> *This section is normative*

### 2.1 "Data Provisioning Industry Core: Part Instance"

#### 2.1.1 LIST OF STANDALONE STANDARDS

To participate in Data Provisioning for the Industry Core: Part Instance, the following single standards MUST be fulfilled by all participants for which the standard is relevant:

- CX-0002 Digital Twins in Catena-X 2.2.0
- CX-0018 Eclipse Data Space Connector (EDC) 2.1.0

#### 2.1.2 DATA REQUIRED

A digital twin **MAY** be created for serialized part, just-in-sequence-part or batch of materials produced by the manufacturer.
The digital twin **MUST** be provisioned via an Asset Administration Shell as per CX-0002 and registered in a decentral Digital Twin Registry of the data provider (or the decentral Digital Twin Registry host of the manufacturer) as described in CX-0002.

The aspect model "SerialPart" **MUST** be linked to the Asset Administration Shell of a serialized part.
The aspect model "JustInSequencePart" is **RECOMMENDED** to be linked to the Asset Administration Shell of a just-in-sequence-part. Note: For future releases this shall be mandatory.
The aspect model "Batch" **MUST** be linked to the Asset Administration Shell of a Batch.

The aspect model "SingleLevelBomAsBuilt" **MAY** be linked to the Asset Administration Shell of each part and each batch holding the information on relationship of serialized items and batches. Information on the Bill of Material of those parts and batches **MUST NOT** be provided in any other way than with the aspect model "SingleLevelBomAsBuilt".

The submodel data **MUST** be transferred using the IDS Protocol as described in CX-0018.
The Eclipse Dataspace Connector as a reference implementation is **RECOMMENDED** to be used as an IDS compliant connector.

#### 2.1.3 ADDITIONAL REQUIREMENTS

As the IDS protocol is being used, data **MUST NOT** be transferred before a corresponding contract negotiation has been successfully passed by the participants of the data exchange and a valid contract is present as described in CX-0018.
The required data offers **MUST** be discoverable through the decentral Digital Twin Registry as submodel endpoints.

#### 2.1.4 DIGITAL TWINS AND SPECIFIC ASSET IDs

The globalAssetId of the twins being referenced **MUST** be equal to the unique ID being used in Catena-X.

The following specific asset IDs not marked as optional **MUST** be available when registering a digital twin or when adding the above mentioned submodels to an existing twin for a  part instance in order to allow discovery. (see  CX-0002 that provides additional information). The specific asset IDs marked as optional **MAY** be used in addition.

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
    <td> The ID of the type/catalog part from the *customer*.<br/><br/>The main reason why this property is optional is that it cannot be guaranteed that every manufacturer knows the customerPartId for their parts. If known, it is *recommended* to always add the customerPartId for easier lookup.</td>
    <td> String </td>
  </tr>
  <tr>
    <td> assetLifecyclePhase </td>
    <td> Optional (for DT As-Built)<br/><br/>Mandatory (for DT As-Planned)</td>
    <td> The lifecycle phase of the asset. <ul><li>For serialized parts, batches, and JIS parts, use the value *AsBuilt*.</li><li>For catalog parts in a Digital Twin As-Planned lifecycle phase, use the value *AsPlanned*.</li></ul>**Set deprecated in this standard version and will be removed in the next version.**</td>
    <td> Enum </td>
  </tr>
  <tr>
    <td> digitalTwinType </td>
    <td> Mandatory </td>
    <td> The type of the digital twin. <ul><li>For parts on an instance level (e.g. serialized parts, batches, and JIS parts), use the value *PartInstance*.</li><li>For parts on a part type level (e.g. catalog parts), use the value *PartType*.</li><li>digitalTwinType was added to allow data consumers to search for all digital twins of a particular type, e.g, only for catalog parts by using `digitalTwinType="PartType"` as filter. Without this filter, a search for a particular manufacturer part ID would not only return the digital twin of the catalog part, but also all digital twins of instances of this catalog part, i.e., of the corresponding serial parts.</li></ul>**Implementation optional in this standard version, but will be mandatory in the next version.**</td>
    <td> String </td>
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

**For just-in-sequence-parts, additionally the following conventions apply:**

| Key            | Availability |Description  | Type   |
|----------------|--------------|-----------------------------------------|--------|
| parentOrderNumber        | Optional     | A number identifying the just-in-sequence- part's destination parent part. The parent part is typically known upfront to the supplier for just-in-sequence parts.| String |
| jisNumber | Mandatory    | A number that is used to identify the call-off that can be assumed unique within the specific just-in-sequence process. This is typically not the sequence number, but the call-off number. | String |
| jisCallDate | Optional | The date of the just-in-sequence call-off as stated on the call-off document itself.The value must be compliant to ISO 8601: YYYY-MM-DD or YYYY-MM-DDThh:mm:ss or YYYY-MM-DDThh:mm:ss±hh:mm | Date |
| partInstanceId | Mandatory | A composition of jisNumber, parentOrderNumber (if available), jisCallDate (ifavailable). This information is typically known upfront to the supplier jisNumber, partOrderNumber and jisCallDate for just-in-sequence parts.| String|

A digital twin is required for each single instance of a serialized part, just-in-sequence-part or vehicle and each batch to be traced.

##### Authorization: Visbility of Specific Asset IDs in the DTR

To enforce a strict need-to-know (and prevent data from being exposed to non-authorized parties), the visibility of entries in the attribute `specificAssetIds` https://admin-shell.io/aas/3/0/AssetInformation/specificAssetIds must be protected, i.e.,their visibility must be restricted to only the manufacturer of the part (which is represented by the digital twin) and the customers of the part. For that, the attribute `externalSubjectIds` (https://admin-shell.io/aas/3/0/SpecificAssetId/externalSubjectId) must be used. For more information on the semantics of the mentioned properties, see AAS Pt. 1. For more information on the use of Digital Twins in Catena-X, see CX - 0002.

## 3 ASPECT MODELS

> *This section is normative*

An overview of the relevant aspect models of this standard.

- SerialPart
- Batch
- JustInSequencePart
- SingleLevelBomAsBuilt
- PartSiteInformationAsBuilt (shared aspect)

Every certified business application relying on the Industry Core: Part Instance data **MUST** be able to consume data conformant to the semantic models specified in this document.
Semantic models **MUST** be made available in the central Semantic Hub.
Data consumers and data provider **MUST** comply with the license of the semantic models.
The submodel data **MUST** be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002.
Data providers **MUST** provide data as part of a digital twin of the asset for serialized parts conformant to CX – 0002 DIGITAL TWINS IN CATENA-X .
The JSON Payloads of data providers **MUST** be conformant to the JSON Schemas as specified in this document.
The unique identifier of the semantic model specified in this document **MUST** be used by the data provider to define the semantics of the data being transferred.

### 3.1 ASPECT MODEL "SerialPart"

#### 3.1.1 INTRODUCTION

The semantic model SerialPart describes a submodel for a digital twin of a serialised part providing essential information about this part. A serialized part is an instance of a part, where the particular instance can be uniquely identified by means of a serial number, a similar identifier (e.g. VAN) or a combination of multiple identifiers (e.g. combination of manufacturer, date and number).
More specific, the model links local identifiers like manufacturerPartId, customerPartId and other data like manufacturing information and part type information to the actual catenaXId from Catena-X, which is a UUIDv4.
This allows decoupling of the network identifiers from the actual business process.
By accessing this aspect you can link a physical part to its representation within Catena-X.

Note: The version **1.0.1** is the current version and **mandatory**. If existing, versions higher than that are **optional**, but shall be mandatory in new standard versions.

#### 3.1.2 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#62-non-normative-references).

The aspect model SerialPart v1.0.1 is written in BAMM 2.0.0, and SerialPart v2.0.0 in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.1.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group
Traceability. This Catena-X data model is made available under the terms
of the Creative Commons Attribution 4.0 International (CC-BY-4.0)
license, which is available at Creative Commons[^2].

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

#### 3.1.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

SerialPart **v1.0.1** (mandatory)

```text
urn:bamm:io.catenax.serial_part:1.0.1#SerialPart 
```

SerialPart **v2.0.0** (optional)

```text
urn:bamm:io.catenax.serial_part:2.0.0#SerialPart
```

#### 3.1.5 FORMATS OF SEMANTIC MODEL

##### 3.1.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.  These can be viewed by following links:

SerialPart **v1.0.1** (mandatory)

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.serial_part/1.0.1/SerialPart.ttl

SerialPart **v2.0.0** (optional)

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.serial_part/2.0.0/SerialPart.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework[^3] is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

##### 3.1.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

##### 3.1.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#62-non-normative-references)].

#### 3.1.6 EXAMPLE DATA

Example JSON payload: Submodel **"SerialPart" v1.0.1 for a vehicle**

```json
{
  "localIdentifiers": [
    {
      "key": "manufacturerId",
      "value": "BPNL7588787849VQ"
    },
    {
      "key": "manufacturerPartId",
      "value": "95657362-83"
    },
    {
      "key": "partInstanceId",
      "value": "OEM-A-F8LM95T92WJ9KNDD3HA5P"
    },
    {
      "key": "van",
      "value": "OEM-A-F8LM95T92WJ9KNDD3HA5P"
    }
  ],
  "manufacturingInformation": {
    "date": "2022-02-04T14:48:54",
    "country": "DEU"
  },
  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",
  "partTypeInformation": {
    "manufacturerPartID": "QX-39",
    "classification": "product",
    "nameAtManufacturer": "Vehicle Model A"
  }
}
```

Example JSON payload: Submodel **"SerialPart" v1.0.1 for a Serialized Part (Non-Vehicle)**

```json
{
  "localIdentifiers": [
    {
      "key": "manufacturerId",
      "value": "BPNL7588787849VQ"
    },
    {
      "key": "manufacturerPartId",
      "value": "95657362-83"
    },
    {
      "key": "partInstanceId",
      "value": "NO-574868639429552535768526"
    }
  ],
  "manufacturingInformation": {
    "date": "2022-02-04T14:48:54",
    "country": "DEU"
  },
  "catenaXId": "urn:uuid:d60b99b0-f269-42f5-94d0-64fe0946ed04",
  "partTypeInformation": {
    "manufacturerPartID": "95657362-83",
    "customerPartId": "798-515297795-A",
    "classification": "component",
    "nameAtManufacturer": "High Voltage Battery",
    "nameAtCustomer": "High Voltage Battery"
  }
}
```

Example JSON payload: Submodel **"SerialPart" v2.0.0 for a vehicle**

```json
{
  "localIdentifiers": [
    {
      "key": "manufacturerId",
      "value": "BPNL7588787849VQ"
    },
    {
      "key": "manufacturerPartId",
      "value": "95657362-83"
    },
    {
      "key": "partInstanceId",
      "value": "OEM-A-F8LM95T92WJ9KNDD3HA5P"
    },
    {
      "key": "van",
      "value": "OEM-A-F8LM95T92WJ9KNDD3HA5P"
    }
  ],
  "manufacturingInformation": {
    "date": "2022-02-04T14:48:54",
    "country": "DEU"
  },
  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",
  "sites": [
    {
      "catenaXsiteId": "BPNS1234567890ZZ",
      "function": "production"
    }
  ],
  "partTypeInformation": {
    "manufacturerPartID": "QX-39",
    "classification": "product",
    "nameAtManufacturer": "Vehicle Model A"
  }
}
```

Example JSON payload: Submodel **"SerialPart" v2.0.0 for a Serialized Part (Non-Vehicle)**

```json
{
  "localIdentifiers": [
    {
      "key": "manufacturerId",
      "value": "BPNL7588787849VQ"
    },
    {
      "key": "manufacturerPartId",
      "value": "95657362-83"
    },
    {
      "key": "partInstanceId",
      "value": "NO-574868639429552535768526"
    }
  ],
  "manufacturingInformation": {
    "date": "2022-02-04T14:48:54",
    "country": "DEU"
  },
  "catenaXId": "urn:uuid:d60b99b0-f269-42f5-94d0-64fe0946ed04",
  "sites": [
    {
      "catenaXsiteId": "BPNS1234567890ZZ",
      "function": "production"
    }
  ],
  "partTypeInformation": {
    "manufacturerPartID": "95657362-83",
    "customerPartId": "798-515297795-A",
    "classification": "component",
    "nameAtManufacturer": "High Voltage Battery",
    "nameAtCustomer": "High Voltage Battery"
  }
}

```

### 3.2 ASPECT MODEL "Batch"

#### 3.2.1 INTRODUCTION

A batch is a quantity of (semi-) finished products or (raw) material
product that have been produced under the same circumstances (e.g., same
production location), as specified groups or amounts, within a certain
time frame. Every batch can differ in the number or amount of products.
Different batches can have varied specifications, e.g., different
colors, quality, etc. A batch is identified via a Batch ID.

This submodel template or aspect model is required to identify a batch
of materials within Catena-X.

It links local identifiers like manufacturerPartId and batchId to
the actual Catena-X ID.

This allows decoupling of the Catena-X identifiers from the actual
business process.

By accessing this aspect you can link a physical batch of parts to its
representation within in Catena-X.

Note: The version **2.0.0** is the current version and mandatory. If existing, versions higher than that are optional, but shall be mandatory in new standard versions.

#### 3.2.2 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#62-non-normative-references).

The aspect model Batch is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.2.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group
Traceability. This Catena-X data model is made available under the terms
of the Creative Commons Attribution 4.0 International (CC-BY-4.0)
license, which is available at Creative Commons[^2].

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

#### 3.2.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier
Batch **v2.0.0** (mandatory)

```text
urn:samm:io.catenax.batch:2.0.0#Batch
```

Batch **v2.0.1** (optional)

```text
urn:samm:io.catenax.batch:2.0.1#Batch
```

#### 3.2.5 FORMATS OF SEMANTIC MODEL

##### 3.2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is
the master for generating additional file formats and serializations. These can be viewed by following links:

Batch **v2.0.0** (mandatory)

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.batch/2.0.0/Batch.ttl

Batch **v2.0.1** (optional)

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.batch/2.0.1/Batch.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework[^3] is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

##### 3.2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

##### 3.2.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#62-non-normative-references)].

#### 3.2.6 EXAMPLE DATA

Example JSON payload: Submodel **"Batch" v2.0.0**

```json
{
   "localIdentifiers":[
      {
         "value":"BID12345678",
         "key":"batchId"
      }
   ],
   "manufacturingInformation":{
      "date":"2022-02-04T14:48:54",
      "country":"HUR"
   },
   "catenaXId":"580d3adf-1981-44a0-a214-13d6ceed9379",
   "partTypeInformation":{
      "manufacturerPartId":"123-0.740-3434-A",
      "classification":"product",
      "nameAtManufacturer":"Mirror left",
}
```

Example JSON payload: Submodel **"Batch" v2.0.1**

 ```json
{
  "localIdentifiers": [
    {
      "value": "BID12345678",
      "key": "batchId"
    }
  ],
  "manufacturingInformation": {
    "date": "2022-02-04T14:48:54",
    "country": "HUR"
  },
  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",
  "sites": [
    {
      "catenaXsiteId": "BPNS1234567890ZZ",
      "function": "production"
    }
  ],
  "partTypeInformation": {
    "manufacturerPartId": "123-0.740-3434-A",
    "classification": "product",
    "nameAtManufacturer": "PA66-GF30",
  }
}
```

### 3.3 ASPECT MODEL "JustInSequencePart"

#### 3.3.1 INTRODUCTION

This submodel template or aspect model is required to identify a just-in-sequence-part within Catena-X (that do not have a dedicated serial number).
It links local identifiers like manufacturerPartId, jisNumber and jisCallDate to
the actual Catena-X ID.
This allows decoupling of the Catena-X identifiers from the actual
business process.
By accessing this aspect you can link a physical just-in-sequence-part to its
representation within in Catena-X.

For just-in-sequence-parts with an existing serial number, the aspect model SerialPart is applied, not JustInSequencePart.

Note: This aspect model is currently **not mandatory** and will be mandatory with the next breaking change (Release 24.05). The current **optional** version is **2.0.0**.

#### 3.3.2 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#62-non-normative-references).

The aspect model Batch is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.3.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group
Traceability. This Catena-X data model is made available under the terms
of the Creative Commons Attribution 4.0 International (CC-BY-4.0)
license, which is available at Creative Commons[^2].

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

#### 3.3.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

JustInSequencePart **v2.0.0** (optional)

```text
urn:bamm:io.catenax.just_in_sequence_part:2.0.0#JustInSequencePart
```

#### 3.3.5 FORMATS OF SEMANTIC MODEL

##### 3.3.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is
the master for generating additional file formats and serializations. These can be viewed by following links:

JustInSequencePart **v2.0.0** (optional)

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.just_in_sequence_part/2.0.0/JustInSequencePart.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework[^3] is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

##### 3.3.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

##### 3.3.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#62-non-normative-references)].

#### 3.3.6 EXAMPLE DATA

Example JSON payload: Submodel **"JustInSequencePart" v2.0.0**

```json
{
  "localIdentifiers": [
    {
      "key": "manufacturerId",
      "value": "BPNL7588787849VQ"
    },
    {
      "key": "jisNumber",
      "value": "894651684"
    },
    {
      "key": "parentOrderNumber",
      "value": "OEM-A-F8LM95T92WJ9KNDD3HA5P"
    },
    {
      "key": "jisCallDate",
      "value": "2022-01-24T09:13:34"
    }
  ],
  "manufacturingInformation": {
    "date": "2022-02-04T14:48:54",
    "country": "DEU"
  },
  "catenaXId": "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379",
  "sites": [
    {
      "catenaXsiteId": "BPNS1234567890ZZ",
      "function": "production"
    }
  ],
  "partTypeInformation": {
    "manufacturerPartID": "84816168424",
    "classification": "product",
    "nameAtManufacturer": "Black Leather Front Row Seat for Vehicle Model B"
  }
}
```

### 3.4 ASPECT MODEL "SingleLevelBomAsBuilt"

#### 3.4.1 INTRODUCTION

The Industry Core: Part Instance aims on building product genealogy information throughout
the supply chain. Therefore it is required to link a produced part with
its predecessor items.
SingleLevelBoMAsBuilt is the submodel to build such linkage between the digital twins. It contains the unique identifiers of
the predecessor items of a produced or assembled part and therefore
allows navigation through the supply chain by Catena-X identifiers.

More specific, the aspect provides information on the child
items (one structural level down) from which the given object is
assembled. In first priority, it creates the relationship of one part instance in the asBuilt lifecycle phase with its child items by referencing the part instance digital twin of such item. However, when no part instance digital twin of the child item exists to reference, it is in a second priority possible to reference the part type twin of the child item instead.

Because of gap of information in the production, it is sometimes not possible to identify the single correct digital twin to reference, but just a subset of potential twins. Then all potential alternative twins may be referenced. This will be marked by setting the property "hasAlternatives" true. If the exact digital twin is known, regardless of if it is a part type or part instance, just this one will be referenced and "hasAlternative" will be false.

Note: The version 2.0.0 is the current version and **mandatory**. If existing, versions higher than that are optional, but shall be mandatory in new standard versions.

#### 3.4.2 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#62-non-normative-references).

The aspect model Batch is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.4.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group
Traceability. This Catena-X data model is made available under the terms
of the Creative Commons Attribution 4.0 International (CC-BY-4.0)
license, which is available at Creative Commons[^2].

The license information is available in github.

In case of doubt the license, copyright and authors information in
github overwrites the information in this specification document.

#### 3.4.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

SingleLevelBomAsBuilt **v2.0.0** (mandatory)

```text
urn:samm:io.catenax.single_level_bom_as_built:2.0.0#SingleLevelBomAsBuilt
```

#### 3.4.5 FORMATS OF SEMANTIC MODEL

##### 3.4.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is
the master for generating additional file formats and serializations. These can be viewed by following links:

SingleLevelBomAsBuilt **v2.0.0** (mandatory)

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_built/2.0.0/SingleLevelBomAsBuilt.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework[^3] is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation.

##### 3.4.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

##### 3.4.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#62-non-normative-references)].

#### 3.4.6 EXAMPLE DATA

Example JSON payload: Submodel **"SingleLevelBomAsBuilt" v2.0.0 for a SerialPart**

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

Example JSON payload: Submodel **"SingleLevelBomAsBuilt" v2.0.0 for a Batch**

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

## 4 APPLICATION PROGRAMMING INTERFACES

> *This section is normative*

There is no application programm interface (API) defintion in this standard version.  

## 5 PROCESSES

> *This section is normative*

There is no prcoess defintion in this standard version available.

## 6 REFERENCES

### 6.1 NORMATIVE REFERENCES

> *This section is normative*

Specification of the Asset Administration Shell - Part 1: Metamodel. V3.0, April 2023, IDTA number: 01001-3-0 On IDTA Content Hub

- CX-0001 EDC DISCOVERY API 1.0.2
- CX-0002 Digital Twins in Catena – X (Data Provider) 2.2.0
- CX-0003 SAMM Aspect Meta Model 1.1.0
- CX–0018 Eclipse Dataspace Connector (EDC) 2.1.0

### 6.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

\[SMT\] How to create a submodel template specification. Guideline.
Download from:

https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

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

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
