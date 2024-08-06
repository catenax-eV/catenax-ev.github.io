---
tags:
  - CAT/Business Application Provider
  - UC/Ecopass
---

# CX-0143 Use Case Circular Economy - Digital Product Passport Standard 1.0.0

## ABSTRACT

This standard focuses on the digital product passport use case. This includes relevant requirements for

- data provider, that want to provide different passports through Catena-X,
- data consumer, that are searching for different passports in Catena-X, and
- application developer / provider supporting the provisioning and consuming of passport data.

Specific passports that shall be mentioned here are the battery passport and the transmission passport, which are first realizations of product passports in Catena-X.

In this document, keywords for registering and searching digital twins and their passports
submodels are defined.

## FOR WHOM IS THE STANDARD DESIGNED

See the audience and scope [1.1](#11-audience--scope)

## 1 INTRODUCTION

The Digital Product Passport (DPP) allows to share process and product-related information amongst supply chain businesses, authorities and consumers. The DPP allows for efficient information flows following best practices; and the possibility of accompanying the measures under this Regulation with mitigating measures so that impacts are expected to remain proportionate for SMEs. This is expected to increase transparency, both for supply chain businesses and for the general public, and increase efficiencies in terms of information transfer to support the data exchange between economic actors in integrating circularity in product design and manufacturing. In particular, it is likely to help facilitate and streamline the monitoring and enforcement of the regulation carried out by EU and Member State authorities. It is also likely to provide a market-intelligence tool that may be used for revising and refining obligations in the future.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This document is meant for the following roles:

- Data Provider / Consumer
- Business Application Provider

The standard is of interest to all members of the automotive supply chain including suppliers, OEMs, dismantler, recyclers and stakeholders within the recycling industry and the circular economy.

Additionally, the standard also applies to software providers and core service providers to ensure interoperability and data sovereignty between different core service providers. The scope of this standard is to define mandatory components, logics and data models as well as give guidance for the provisioning and consuming of product pass information.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

Manufacturers of physical goods will have to provide information on different aspects of their products, including components or ingredients, information about the manufacturing itself or information relevant to optimize aspects of repair, reusability or recycling.
This information is stored in in an aggregated form in a "passport", providing information on instances of the product.

Different stakeholders shall be able to read these passports such as legal authorities, dismantler,
as well as the owner of the product in sense of public persons.

This standards defines the basic interactions with passport information as standard for the
use case "digital product passport". It is implemented in a first reference application which
can be found in section [6.3 REFERENCE IMPLEMENTATION](#63-reference-implementations).

This image depicts an overall image of the architecture this standard relates to. Further information can be read in the [Eco Pass KIT](https://eclipse-tractusx.github.io/docs-kits/kits/Eco_Pass_KIT/page-adoption-view).
The standards related to these components are mentioned in more detail in
[2.1.1 LIST OF STANDALONE STANDARDS](#211-list-of-standalone-standards).
Further architecture diagrams for the interactions are presented in [FIGURES](#figures).

![Architectural Overview](./assets/img/digitalProductPassContext.jpg)

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*
>
> As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
> in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to proof, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

All participants and their solutions will need to proof, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
Please refer to the [certification information page](https://catena-x.net/en/catena-x-introduce-implement/certification) for the process of conformity assessment and certification.
Since this standard document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards listed at [2.1.1 LIST OF STANDALONE STANDARDS](#211-list-of-standalone-standards) and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document. The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.

In order to proof conformity with this use case digital product pass standard as a
data consumer or app provider demonstrate that you

- can find digital twins containing passport information in the Catena-X data space
- can distinguish the passport submodel information from other submodels within the digital twin
- are compliant with the consuming conditions in [ADDITIONAL REQUIREMENTS](#213-additional-requirements), [APPLICATION PROGRAMMING INTERFACES](#4-application-programming-interfaces) and [DIGITAL TWINS AND SPECIFIC ASSET IDs](#214-digital-twins-and-specific-asset-ids)

In order to proof conformity with this use case digital product pass standard as data provider show that you

- are conform with the provisioning conditions in [ADDITIONAL REQUIREMENTS](#213-additional-requirements), [APPLICATION PROGRAMMING INTERFACES](#4-application-programming-interfaces) and [DIGITAL TWINS AND SPECIFIC ASSET IDs](#214-digital-twins-and-specific-asset-ids)

### 1.4 EXAMPLES

> *This section is non-normative*

The following examples can be checked as they offer further explanations and guidance how to stay compliant with the standard:

- [Eco Pass KIT](https://eclipse-tractusx.github.io/docs-kits/kits/Eco_Pass_KIT/page-adoption-view)
- [Tractus-X Digital Product Pass Reference Application](#63-reference-implementations)

### 1.5 TERMINOLOGY

> *This section is non-normative*

Use case relevant terminologies and explanations can be found in the [Eco Pass KIT](https://eclipse-tractusx.github.io/docs-kits/kits/Eco_Pass_KIT/page-adoption-view)

The following terms are especially relevant for the understanding of the standard:

- **Asset Administration Shell (AAS):** The AAS is the chosen standard in Catena-X to define digital twins
  of an asset (e.g. a battery or a full vehicle). The AAS, developed by the [Industrial Digital Twin Association](https://industrialdigitaltwin.org/,) is the standardized digital representation of an digital twin asset, the corner stone for the interoperability of Industry 4.0 components organized in Industry 4.0 systems.
- **Business Partner Number (BPN):** A BPN is the unique identifier of a partner within Catena-X as standardized in [CX-0010 Business Partner Number](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0010-BusinessPartnerNumber_v2.0.0.pdf).
- **Ecodesign for Sustainable Products Regulation (ESPR):** The proposed regulation to improve EU products’ circularity, energy performance and other environmental sustainability aspects.
- **Digital Product Passport (DPP):** The Digital Product Passport is the core model of this standard. It can be used as the root class for other, specific, product models. The Passport itself is defined by the usage of Catena-X shared services, a standardized data model and an application which will enable stakeholders to access the relevant data.

## 2 RELEVANT PARTS OF THE STANDARD FOR SPECIFIC USE CASES

> *This section is normantive*

### 2.1 "DIGITAL PRODUCT PASS USE CASE"

#### 2.1.1 LIST OF STANDALONE STANDARDS

To participate in the digital product passport use case, the following single standards **MUST**
be fulfilled by all participants for which the standard is relevant:

- [CX-0001 EDC Discovery API v1.0.2](https://catenax-ev.github.io/docs/standards/overview)
- [CX-0002 Digital Twins in Catena - X v2.1.0](https://catenax-ev.github.io/docs/standards/overview)
- [CX-0003 SAMM Semantic Aspect Meta Model v1.1.0](https://catenax-ev.github.io/docs/standards/overview)
- [CX-0005 Item Relationship Service v2.0.0](https://catenax-ev.github.io/docs/standards/overview)
- [CX-0006 Registration and initial onboarding v1.1.3](https://catenax-ev.github.io/docs/standards/overview)
- [CX-0008 Relevant standards for conformity assessments v1.1.0](https://catenax-ev.github.io/docs/standards/overview)
- [CX-0010 BusinessPartnerNumber v2.0.0](https://catenax-ev.github.io/docs/standards/overview)
- [CX-0013 Identity of Member Companies v1.1.0](https://catenax-ev.github.io/docs/standards/overview)
- [CX-0014 Employees and Technical Users v1.0.1](https://catenax-ev.github.io/docs/standards/overview)
- [CX-0015 IAM & Access Control Paradigm v1.0.1](https://catenax-ev.github.io/docs/standards/overview)
- [CX-0018 Eclipse Data Space Connector (EDC) v2.1.0](https://catenax-ev.github.io/docs/standards/overview)
- [CX-0053 BPN Discovery Services v1.1.0](https://catenax-ev.github.io/docs/standards/overview)

- [CX-0126 Industry Core Part Type v1.0.0](https://catenax-ev.github.io/docs/standards/overview)

- [CX-0127 Industry Core Part Instance v1.0.0](https://catenax-ev.github.io/docs/standards/overview)

To participate in the digital product passport use case, the following single standards **SHOULD**
be fulfilled by data consumers / applications providers for which the standard is relevant:

- [CX-0005 Item Relationship Service API v2.0.0](https://catenax-ev.github.io/docs/standards/overview)

#### 2.1.2 DATA REQUIRED

#### 2.1.3 ADDITIONAL REQUIREMENTS

##### 2.1.3.1 Onboarding and IAM

All participant mentioned under [1.1](#11-audience--scope) **MUST** follow the CX Standards
[CX-0006](#211-list-of-standalone-standards),
[CX-0013](#211-list-of-standalone-standards),
[CX-0014](#211-list-of-standalone-standards) and
[CX-0015](#211-list-of-standalone-standards)

##### 2.1.3.2 Fetching EDC Endpoints

To find the decentralized registries of related parties in Catena-X, app provider **MUST** follow the [CX-0001](#211-list-of-standalone-standards) standard.

#### 2.1.4 DIGITAL TWINS AND SPECIFIC ASSET IDs

##### 2.1.4.1 Searching for Decentralized Digital Twin Registries

To find decentralized Digital Twin Registries of related parties in Catena-X, app provider **MUST** follow the [CX-0002](#211-list-of-standalone-standards) Standard.

##### 2.1.4.2 Registration at the BPN Discovery Service

To find the Business Partner Number of the related parties in Catena-X, data provider **MUST** follow the [CX-0053](#211-list-of-standalone-standards) standard. Example can be found in the [Digital Twin Kit](https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/Specification%20Digital%20Twin%20KIT)

In specific, as a data provider you **MUST** register the `manufacturerPartId` following the
Catena-X standard [CX-0002](#211-list-of-standalone-standards) at the BPN Discovery Service.
The BPN is hand-over by the authentication/authorization token. Only the owner of a BPN can link the `manufacturerPartId` to their BPN.

An example can be found here: [Digital Twin Kit - API BPN Discovery](https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/API%20BPN%20Discovery/post-bpn-discovery)

**Example**

```text
POST /api/administration/connectors/bpnDiscovery
```

```json
{
  "type": "manufacturerPartId",
  "key": "12345678910"
}
```

**Response**

```json
{
  "type": "manufacturerPartId",
  "key": "12345678910",
  "value": "bpn-123",
  "resourceId": "1ca6f9b5-8e1d-422a-8541-9bb2cf5fe485"
}
```

As an app provider / data consumer you **MUST** use the `manufacturerPartId` to search for related BPN endpoints.
An example can be found here: [Digital Twin Kit - API BPN Discovery](https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/API%20BPN%20Discovery/get-bpn-discoveries)

**Example**

```text
POST /api/administration/connectors/bpnDiscovery/search
```

```json
{
  "searchFilter": [
    {
      "type": "manufacturerPartId",
      "keys": ["12345678910"]
    }
  ]
}
```

**Response**

```json
{
  "bpns": [
    {
      "type": "manufacturerPartId",
      "key": "12345678910",
      "value": "bpn-123",
      "resourceId": "1ca6f9b5-8e1d-422a-8541-9bb2cf5fe485"
    }
  ]
}
```

##### 2.1.4.3 Registration of the Digital Twin and the Submodels in the Digital Twin Registry

A data provider **MUST** register their AAS of the product with the following values for the `idShort`:

- for batteries: `Battery_{{PartInstanceId}}`
- for transmissions: `Transmission_{{PartInstanceId}}`

For other product types the format `{{Product Name}}_{{PartInstanceId}}` **SHOULD** be used.

Additionally, the AAS **MUST** be registered with `specificAssetIds: partInstanceId` and depending on the current lifecyclePhase of the product with

- `assetLifecyclePhase = AsBuild` for product that already have been build or
- `assetLifecyclePhase = AsPlanned` for products not yet build.

When describing `asPlanned` information, `ExternalReference` has to be set to `PUBLIC_READABLE` as described in the [Digital Twin Registry documentation](https://github.com/eclipse-tractusx/sldt-digital-twin-registry/tree/main/docs)

In case the **OPTIONAL** `drill down functionality` is integrated in the application using the IRS [CX-0005](#211-list-of-standalone-standards), the digital twin **MUST** have a `globalAssetId` attribute with the Global Unique UUID of the asset.

As described in the industry core standards [CX-0126](#211-list-of-standalone-standards) and [CX-0127](#211-list-of-standalone-standards), when digital twins **MUST** include the key `digitalTwinType`. When in **Instance Level** the value `PartInstance` **MUST** be used and in case of **Type Level** the value `PartType` **MUST** be used.

**Example of a battery in as-planned lifecycle stage:**

```json
{
    "idShort": "Battery_{{PartInstanceId}}",
    "globalAssetId": "{{digitalTwinGlobalUniqueUUID}}",
    "id": "{{digitalTwinId}}",
    "specificAssetIds": [
          {
            "name": "manufacturerId",
            "value": "{{manufacturerId (BPNL)}}",
            "externalSubjectId": {
            "type": "ExternalReference",
            "keys": [
                {
                "type": "GlobalReference",
                "value": "{{BPN number of partner}}"
                },
                {
                "type": "GlobalReference",
                "value": "PUBLIC_READABLE"
                }
            ]
            }
        },
        {
            "name": "manufacturerPartId",
            "value": "{{manufacturerPartId}}",
            "externalSubjectId": {
            "type": "ExternalReference",
            "keys": [
                {
                "type": "GlobalReference",
                "value": "{{BPN number of partner}}"
                },
                {
                "type": "GlobalReference",
                "value": "PUBLIC_READABLE"
                }
            ]
            }
        },
        {
            "name": "partInstanceId",
            "value": "{{PartInstanceId}}",
            "externalSubjectId": {
            "type": "ExternalReference",
            "keys": [
                {
                "type": "GlobalReference",
                "value": "{{BPN of partner}}"
                }
            ]
            }
        },
        {
            "key" : "assetLifecyclePhase",
            "value": "AsPlanned"
        },
        {
            "key" : "digitalTwinType",
            "value": "PartInstance"
        }
    ],
    ...
}
```

Data provider **MUST** provide their product passport information in the `submodelDescriptors` depending on their product with the following information:

| Product type     | used data model            | mandatory `idShort`  |
| ---------------- | -------------------------- | -------------------- |
| Generic Passport | Digital Product Pass 4.0.0 | `digitalProductPass` |
| Batteries        | BatteryPass v5.0.0         | `batteryPass`        |
| Transmissions    | Transmission Pass 2.0.0    | `transmissionPass`   |

- The data provider also **MUST** provide a API Endpoint following the [CX-0002](#211-list-of-standalone-standards).
  Data- provider **MUST** register the related sub-models as shown in the example below.
- The id added to the `subprotocolBody` **SHOULD** be a UUIDv4.
- The `href` definition follows [CX-0002](#211-list-of-standalone-standards).
  - After the negotiation and transfer of the `subprotocolBody` asset following [CX-0018](#211-list-of-standalone-standards) the the `href` EDR token from the EDC Data Plane Proxy will be used it **MUST** return the aspect model JSON payload.

**Example of a transmission:**

```json
"submodelDescriptors":[
  {
    "endpoints": [
      {
        "interface": "SUBMODEL-3.0",
        "protocolInformation": {
          "href": "https://{{edc.data.plane}}/{{path}}/urn:uuid:777a3f0a-6d29-4fcd-81ea-1c27c1b870cc",
          "endpointProtocol": "HTTP",
          "endpointProtocolVersion": [
            "1.1"
          ],
          "subprotocol": "DSP",
          "subprotocolBody": "{{AssetId_of_EDCAsset}};dspEndpoint=https://{{edc.control.plane}}",
          "subprotocolBodyEncoding": "plain",
          "securityAttributes": [
            {
              "type": "NONE",
              "key": "NONE",
              "value": "NONE"
            }
          ]
        }
      }
    ],
    "idShort": "transmissionPass",
    "id": "urn:uuid:777a3f0a-6d29-4fcd-81ea-1c27c1b870cc",
    "semanticId": {
      "type": "ExternalReference",
      "keys": [
        {
          "type": "Submodel",
          "value": "urn:bamm:io.catenax.transmission.transmission_pass:2.0.0#TransmissionPass"
        }
      ]
    },
    "description": [
      {
        "language": "en",
        "text": "Transmission Passport Submodel"
      }
    ],
    {
      "endpoints": [
        {
          "interface": "SUBMODEL-3.0",
          "protocolInformation": {
            "href": "https://{{edc.data.plane}}/{{path}}/urn:uuid:777a3f0a-6d29-4fcd-81ea-1c27c1b870cc",
            "endpointProtocol": "HTTP",
            "endpointProtocolVersion": [
              "1.1"
            ],
            "subprotocol": "DSP",
            "subprotocolBody": "{{AssetId_of_EDCAsset}};dspEndpoint=https://{{edc.control.plane}}",
            "subprotocolBodyEncoding": "plain",
            "securityAttributes": [
              {
                "type": "NONE",
                "key": "NONE",
                "value": "NONE"
              }
            ]
          }
        }
      ],
      "idShort": "digitalProductPass",
      "id": "urn:uuid:777a3f0a-6d29-4fcd-81ea-1c27c1b870cc",
      "semanticId": {
        "type": "ExternalReference",
        "keys": [
          {
            "type": "Submodel",
            "value": "urn:samm:io.catenax.generic.digital_product_passport:4.0.0#DigitalProductPassport"
          }
        ]
      },
      "description": [
        {
          "language": "en",
          "text": "Digital Product Passport Submodel"
        }
      ]
    }
  }
]
```

## 3 ASPECT MODELS

> *This section is normantive*

### 3.1 ASPECT MODEL "DIGITAL PRODUCT PASSPORT"

#### 3.1.1 INTRODUCTION

The DPP includes data about components, materials and chemical substances, information on reparability, spare parts, environmental impact and professional disposal for a product. The corresponding data models describing such physical goods will be updated, as newer versions of relevant public regulations will be published. The main basis is provided by the document \"Proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL establishing a framework for setting ecodesign requirements for sustainable products and repealing Directive 2009/125/EC\" from March 30th, 2022. The latest version of the document was the provisional agreement between the EU Council and the Parliament from January 9th, 2024. The text is informal, but the content of the final regulation was agreed between these two institutions.
Due to the last update, the title of Ecodesign Regulation has been changed to: "Proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL establishing a framework for setting ecodesign requirements for sustainable products, amending Regulation (EU) 2023/1542 and repealing Directive 2009/125/EC".

To use the model pieces of other models are imported. These have the following identifiers:

- urn:samm:io.catenax.batch:3.0.0#
- urn:samm:io.catenax.shared.part_classification:1.0.0#
- urn:samm:io.catenax.part_type_information:1.0.0#
- urn:samm:io.catenax.shared.business_partner_number:2.0.0#
- urn:samm:io.catenax.serial_part:3.0.0#
- urn:samm:io.catenax.shared.quantity:2.0.0#
- urn:samm:io.catenax.shared.uuid:2.0.0#

#### 3.1.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in SAMM 2.1.0 as a modeling language conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/overview).

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/overview).

#### 3.1.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons. The license information is available in github.
In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

#### 3.1.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier:

```
urn:samm:io.catenax.generic.digital_product_passport:4.0.0#
```

#### 3.1.5 FORMATS OF SEMANTIC MODEL

All formats can be generated through the turtle file and the [SAMM command line interface](https://github.com/eclipse-esmf).

##### 3.1.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be found in the current version 4.0.0 in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.generic.digital_product_passport/4.0.0/DigitalProductPassport.ttl
```

##### 3.1.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel". It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.generic.digital_product_passport/4.0.0/gen
```

##### 3.1.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification. It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.generic.digital_product_passport/4.0.0/gen
```

### 3.2 ASPECT MODEL "BATTERY PASS"

#### 3.2.1 INTRODUCTION

The battery pass describes information collected during the lifecycle of a battery. The battery passport is implementing the requirements if the Regulation (EU) 2023/1542 of the European Parliament and of the Council of 12 July 2023 concerning batteries and waste batteries, amending Directive 2008/98/EC and Regulation (EU) 2019/1020 and repealing Directive 2006/66/EC. Additionally attributes come from the Proposal for Ecodesign for Sustainable Products Regulation (see [above](#311-introduction)).
To use the model pieces of the [Digital Product Passport](#31-aspect-model-digital-product-passport) model are imported by reference, reutilizing semantically identical parts of digital product passports from the generic data model.

#### 3.2.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in SAMM 2.1.0 as a modeling language conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/next/standards/CX-0003-SAMMSemanticAspectMetaModel).

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/next/standards/CX-0003-SAMMSemanticAspectMetaModel).

#### 3.2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons. The license information is available in github.
In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

#### 3.2.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier:

```
urn:samm:io.catenax.battery.battery_pass:5.0.0#
```

#### 3.2.5 FORMATS OF SEMANTIC MODEL

All formats can be generated through the turtle file and the [SAMM command line interface](https://github.com/eclipse-esmf).

##### 3.2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be found in the current version 5.0.0 in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.battery.battery_pass/5.0.0/BatteryPass.ttl
```

##### 3.2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel". It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.battery.battery_pass/5.0.0/gen
```

##### 3.2.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification. It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.battery.battery_pass/5.0.0/gen
```

### 3.3 ASPECT MODEL "TRANSMISSION PASS"

#### 3.3.1 INTRODUCTION

The transmission passport corresponds to the [Digital Product Passport](#31-aspect-model-digital-product-passport) and its underlying regulation. By incorporating circularity parameters, the Transmission Passport aims to enhance transparency and promote a circular economy. It describes the data that is collected and available during the lifespan of a transmission.

#### 3.3.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in SAMM 2.1.0 as a modeling language conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/CX-0003-SAMMSemanticAspectMetaModel).

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/CX-0003-SAMMSemanticAspectMetaModel).

#### 3.3.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons. The license information is available in github.
In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

#### 3.3.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier:

```
urn:samm:io.catenax.transmission.transmission_pass:2.0.0#
```

#### 3.3.5 FORMATS OF SEMANTIC MODEL

All formats can be generated through the turtle file and the [SAMM command line interface](https://github.com/eclipse-esmf).

##### 3.3.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be found in the current version 2.0.0 in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.transmission.transmission_pass/2.0.0/TransmissionPass.ttl
```

##### 3.3.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel". It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.transmission.transmission_pass/2.0.0/gen
```

##### 3.3.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.transmission.transmission_pass/2.0.0/gen
```

## 4 APPLICATION PROGRAMMING INTERFACES

> *This section is normantive*

### 4.1 EDC DATA ASSET STRUCTURE

The general asset structure **MUST** follow the [CX-0018](#211-list-of-standalone-standards).
Examples are in the official [Connector Kit](https://eclipse-tractusx.github.io/docs-kits/kits/Connector%20Kit/Adoption%20View/connector_kit_adoption_view).
The following subchapters define the specifics for this standard.

#### 4.1.1 EDC Data Asset

The EDC assets for product passports **MUST** follow the JSON.

```json
{
  "@context": {
    "edc": "https://w3id.org/edc/v0.0.1/ns/",
    "cx-common": "https://w3id.org/catenax/ontology/common#",
    "cx-taxo": "https://w3id.org/catenax/taxonomy#",
    "dct": "https://purl.org/dc/terms/"
  },
  "@type": "Asset",
  "@id": "{{assetId}}",
  "properties": {
    "type": {
      "@id": "Asset"
    },
    "name": "{{asset-name}}",
    "description": "{{Description}}",
    "contenttype": "{{type}}"
  },
  "dataAddress": {
    "@type": "DataAddress",
    "type": "HttpData",
    "baseUrl": "{{submodel.server.endpoint}}",
    "proxyQueryParams": "true",
    "proxyPath": "true",
    "proxyMethod": "true",
    "proxyBody": "true"
  }
}
```

#### 4.1.2 EDC Policy Structure

A participant mentioned under [1.1](#11-audience--scope) **MUST** sign the overall
[Catena-X Terms and Condition](https://catenax-ev.github.io/docs/regulatory-framework/governance-framework) as well as the sustainability agreement
[circular economy framework agreement](https://catenax-ev.github.io/docs/regulatory-framework/20000ft/use-case-ce).

 Have a look at example policies [here](https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/example_usage_policy.json). A guideline for different use cases profiles has been provided [here](https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/profile.md)

##### 4.1.2.1 Conventions for Use Case Policy in context data exchange

In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined. A set of specific policies on data offering and data usage level detail the conditions under which data may be accessed, shared, and used, ensuring compliance with legal standards.

For a comprehensive understanding of the rights, restrictions, and obligations associated with data usage in the Catena-X ecosystem, we refer users to:

- the detailed [ODRL policy repository](https://github.com/catenax-eV/cx-odrl-profile). This document provides in-depth explanations of the terms and conditions applied to data access and utilization, ensuring that all engagement with our data is conducted responsibly and in accordance with established guidelines.
- the ODRL schema template. This defines how policies used for data sharing/usage should get defined. Those schemas **MUST** be followed when providing services or apps for data sharing/consuming.
  
##### 4.1.2.2 Additional Details regarding Access Policies

A Data Provider may tie certain access authorizations ("Access Policies") to its data offers for members of Catena-X  and one or several Data Consumers. By limiting access to certain Participants, Data Provider maintains control over its anti-trust obligations when sharing certain data. In particular, Data Provider may apply Access Policies to restrict access to a particular data offer for only one Participant identified by a specific business partner number:

- Membership
- BPNL

##### 4.1.2.3 Additional Details regarding Usage Policies

In the context of data usage policies (“Usage Policies”), Participants and related services **MUST** use the following policy rules:

- Use Case Framework (“FrameworkAgreement”), for the Digital Product Pass **MUST** be the latest circular economy framework agreement contraint provided in the profiles [here](https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/profile.md#frameworkagreement).
- for the Digital Product Passport, Battery Passport and other passports the latest (“UsagePurpose”) for circular economy "dpp" **MUST** be used. It is defined [here](https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/profile.md#usagepurpose) in the latest policy profile contraints.

Additionally, respective usage policies **MAY** include the following policy rule:

- Reference Contract (“ContractReference”).

Details on  namespaces and ODLR policy rule values to be used for the above-mentioned types are provided via the [ODRL policy repository](https://github.com/catenax-eV/cx-odrl-profile).

##### 4.1.3 Contract Definition

Contract definitions of data providers **MUST** follow this structure (also defined in [CX-0018](#211-list-of-standalone-standards)):

```json
{
  "@context": {
    "@vocab": "https://w3id.org/edc/v0.0.1/ns/"
  },
  "@id": "{{ContractDefinitionId}}",
  "@type": "ContractDefinition",
  "accessPolicyId": "{{AccessPolicyId}}",
  "contractPolicyId": "{{ContractPolicyId}}",
  "assetsSelector": {
    "@type": "CriterionDto",
    "operandLeft": "https://w3id.org/edc/v0.0.1/ns/id",
    "operator": "=",
    "operandRight": "{{AssetId}}"
  }
}
```

## 5 PROCESSES

> *This section is normantive*

Not applicable.

## 6 REFERENCES

### 6.1 NORMATIVE REFERENCES

> *This section is normantive*

- See chapter [2.1.1](#211-list-of-standalone-standards).
- Public law references
  - [Proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL concerning batteries and waste batteries, repealing Directive 2006/66/EC and amending Regulation (EU) No 2019/1020](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52020PC0798)
  - [Proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL establishing a framework for setting ecodesign requirements for sustainable products, amending Regulation (EU) 2023/1542 and repealing Directive 2009/125/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52022PC0142) - referenced as "ESPR".

### 6.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

No further references.

### 6.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

A reference implementation for data consumption according to the presented standard can be found at [https://github.com/eclipse-tractusx/digital-product-pass](https://github.com/eclipse-tractusx/digital-product-pass).

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
