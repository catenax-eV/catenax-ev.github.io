# CX-0163 Special Characteristics v.1.0.0

## ABSTRACT

This standard defines the rules for participating in the Special Characteristics use case within the Catena-X ecosystem. It specifies the aspect model for Special Characteristics measurements, the data provisioning via digital twins, and the associated policies required to exchange measurement values between Data Providers and Data Consumers in a standardized, sovereign, and interoperable manner.

The standard is created to enable data exchange for measurements of Special Characteristics.

"Special Characteristics" are characteristics of products that arise from requirements due to type approval, legal regulations, safety or functions, and therefore receive increased care in development and production.

The use case is based on the Industry Core and uses the digital twins and aspect models of the Industry Core. Furthermore, it includes use case-specific aspect models (Special Characteristics).

## FOR WHOM IS THE STANDARD DESIGNED

This standard is designed for:

- **Data Providers**: Suppliers and manufacturers who measure and report special characteristics of their products.
- **Data Consumers**: OEMs and customers who need to access and analyze characteristic measurements.
- **Business Application Providers**: Solution vendors offering traceability and quality management applications.
- **Enablement Service Providers**: Infrastructure providers supporting data exchange.

## 1 INTRODUCTION

Special Characteristics of a product are information about the adequate robustness of the product, which must be measured because they are difficult to maintain during production.

Special Characteristics are:

- suitable for communication, product quality and securing in the supply chain.
- Characteristics that require increased care in order to avoid production issues and ensure the quality of the products.
- defined and recorded with the supplier during development.

This document summarizes all standards to be supported by a network participants IT infrastructure to participate in the Use Case Special Characteristics. This involves protocols, semantic models and platform capabilities to be used.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This document is targeting subsets of the following roles:

- Business Application Provider
- Enablement Service Provider

Furthermore, this standard applies to Special Characteristics Applications or Application stacks and participants that

- want to provide and/or consume data

Note: Fulfilling a use-case standard by a data provider / consumer can be done in two ways:

1. Purchase a certified app for the use-case. In this case the data provider / consumer does not need to prove conformity again and
2. Data Provisioning / Consumption without a certified app for the use-case.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

Special Characteristics of parts is crucial in the automotive industry to enable e.g. quality management. So, the aim of the Use Case Special Characteristics is to exchange measurement data for physical parts.

In order to create this transparency of quality on physical assets, relevant data must be made available by all participants of a value chain. This process is described in the standards **CX-0151 Industry Core: Basics** and **CX-0127 Industry Core: Part Instance**. These standards enable data and app providers to deliver solutions for building data chains for serialized parts or batches. This is achieved via the standardized creation of digital twins of vehicles, parts and materials as well as the logical linking to their sub-components (Bill of Material, BoM). The default visibility of digital twins and their respective semantic models follows the one-up/one-down principle.

By tracking and tracing back the sourcing of serialized parts or batches, manufactures can quickly identify the source of any quality issue and take corrective actions to address them.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
Please refer to: [https://catena-x.net/en/catena-x-introduce-implement/certification](https://catena-x.net/ecosystem/certification/) for the process of conformity assessment and certification.

Since this document describes a set of standards to be fulfilled, participants **MUST** fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria defined in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance **SHOULD BE** checked with the tools provided for these components.

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

In terms of conformity, the `SpecialCharacteristicMeasurement` submodel **MUST** be provided as an Asset Administration Shell submodel and **MUST** be discoverable and retrievable via the digital twin mechanisms defined in CX-0002 and CX-0127. The data asset and contract offer structure registered in the Tractus-X EDC or any other **CX-0018** compliant connector **MUST** correspond to the submodel data asset structure described in section 4 and follow the Industry Core conventions.

The versions of the standardization documents valid for this standard are mentioned in sections where the standalone standards, normative references and non-normative references are listed. The valid versions are not specifically mentioned in the body text.

***Disclaimer:** The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include roles, certification and further assessment procedures as well as the rollout phases.*

### 1.4 EXAMPLES

Examples for data models: See according subsection 3 Aspect Models.

### 1.5 TERMINOLOGY

> *This section is non-normative*

| Term | Definition |
|------|-----------|
| **Application Programming Interface (API):** | An API is a way for two or more computer programs to communicate with each other. |
| **Aspect Model:** | A formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an aspect. **Note 1 to entry:** An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e. it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model. **Note 2 to entry:** Aspect Models are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing). [Source: Catena-X, CX-0002, note 3 removed] |
| **Asset:** | An Asset describes on Data Provider side the data set which will be shared or can be consumed by a Data Consumer. |
| **Asset Administration Shell (AAS):** | The AAS is a digital representation of an asset. It is a form of a digital twin. |
| **Business Partner Number (BPN):** | A BPN is the unique identifier of a partner within Catena-X. |
| **Characteristic ID** | A unique identifier for a specific characteristic within a product type. |
| **Data Asset** | A dataset shared via a connector, following CX-0018 standards. |
| **Dataspace Protocol (DSP):** | The protocol used for sovereign data exchange in the Catena-X dataspace, including contract negotiation and transfer, as standardized in CX-0018. |
| **Digital Twin (DT):** | A digital representation of an asset. Please see for detailed explanation CX-0002 Digital Twins in Catena-X and CX-0151 Industry Core: Basics. |
| **DSP** | Dataspace Protocol for secure, sovereign data exchange, as defined in CX-0018. |
| **Measurement Point** | A specific location, condition, or instance where a characteristic is measured. |
| **Measurement Type** | Classification of measurement: simple (quantitative), functional (performance-based), or qualitative (non-numeric). |
| **Measurement Unit** | The standardized unit in which a characteristic value is expressed (e.g., millimetre, hectopascal, degreeCelsius), following the SAMM / UNECE common unit catalog. |
| **Part Instance:** | A part instance is a physically produced instance (e.g. serialized part, batch, just-in-sequence-part) of a part type. |
| **Serialized part:** | Instance of a part, where the particular instance can be uniquely identified by means of a serial number, a similar identifier (e.g. VAN) or a combination of multiple identifiers (e.g. combination of manufacturer, date and number). |
| **Special Characteristic** | A product property requiring special attention during production, defined during development and measured to ensure quality. |
| **Subcomponent:** | A Subcomponent is a separate product that can be assembled into a customer product. |
| **Tractus-X Eclipse Dataspace Connector (Tractus-X EDC):** | The Tractus-X EDC is a reference implementation for a connector conformant to CX-0018 currently acting as a de-facto standard and/or reference Implementation within Catena-X. When mentioning the Tractus-X EDC in this standard, any other CX-0018 conformant connector is also a valid option. |

## 2 RELEVANT PARTS OF THE STANDARD FOR SPECIFIC USE CASES

> *This section is normative*

### 2.1 DATA EXCHANGE FOR SPECIAL CHARACTERISTICS

This chapter describes and collects necessary standards for applications that enable the standardized exchange of Special Characteristics in Catena-X.

It is tightly bound to the Industry Core, as Special Characteristics submodels are provided on the digital twins of batches and/or serialized part instances as described in the standards **CX-0151 Industry Core: Basics** and **CX-0127 Industry Core: Part Instance**.

The Industry Core serves as an enabler for the standardized exchange of data for Special Characteristics by introducing network-wide unique identifiers for serialized parts or batches and by standardizing how submodels are provisioned and discovered. Its linked standards are to be used in order to be interoperable.

#### 2.1.1 DATA EXCHANGE PROCESS

The data producer creates digital twins for the parts agreed upon with the data consumer and enriches them with the submodels required for this use case: SerialPart and SpecialCharacteristicsMeasurement.

Once the submodels have been successfully created and assigned to the corresponding digital twin, the data producer notifies the data consumer about the availability of the data by sending a SubmodelUpdate event via the Digital Twin Event API.

Upon receiving the event, the data consumer uses the information contained in the event to identify the corresponding digital twin in the Digital Twin Registry (DTR).
The data consumer then retrieves the relevant data from the PartInstance and SpecialCharacteristicsMeasurement submodels and transfers it to its own systems for further processing.

If the data transfer or processing fails, the data consumer generates a Feedback Notification and sends it to the data producer.

#### 2.1.2 LIST OF STANDALONE STANDARDS

> *This section is normative*

To participate in the Special Characteristics use case, the following standards **MUST** be fulfilled:

- **CX-0010**: Business Partner Number 3.0.1
- **CX-0018**: Dataspace Connectivity 4.2
- **CX-0127**: Industry Core: Part Instance 3.0.0
- **CX-0151**: Industry Core: Basics 1.1.0
- **CX-0152**: Policy Constraints for Data Exchange 1.0.0

> Note: Please verify the exact CX-0010 and CX-0151 versions against the current Catena-X standard library before release.

#### 2.1.3 DATA REQUIRED

##### 2.1.3.1 DIGITAL TWIN

A digital twin **MUST** be created for serialized part or batch of materials produced by the manufacturer. The digital twin **MUST** be provisioned via an Asset Administration Shell as per CX-0002 and registered in a decentral Digital Twin Registry of the data provider (or the decentral Digital Twin Registry host of the manufacturer) as described in CX-0002 and CX-0127.

The `SpecialCharacteristicMeasurement` submodel **MUST** be provided on this digital twin as an AAS submodel and **MUST** be registered as a submodel descriptor in the decentral Digital Twin Registry so it is discoverable and retrievable according to the Industry Core process (CX-0151, CX-0127). The manufacturer Business Partner Number (`manufacturerBpn`) in the submodel is used to enable cross-referencing; it accepts a BPNL, BPNS or BPNA via the shared Business Partner Number aspect model.

The Dataspace Protocol (DSP) as described in CX-0018 **MUST** be followed for the data exchange.

##### 2.1.3.2 SUBMODEL UPDATE NOTIFICATION (OPTIONAL)

The default exchange pattern is consumer-initiated pull: a Data Consumer discovers digital twins and their Special Characteristics submodels via the decentral Digital Twin Registry and retrieves the submodel data following the Industry Core process described in **CX-0151 Industry Core: Basics**.

In addition, and unlike pure pulling scenarios, this standard **RECOMMENDS** an active trigger to improve synchronization. Where used, the triggering participant **MUST** follow the digital twin / submodel provisioning and notification process defined in **CX-0151 Industry Core: Basics**; this standard does not define a use-case-specific notification mechanism.

The Data Provider **SHOULD** signal that a digital twin or a specific submodel has been created or updated according to that CX-0151 process.

Upon receipt of such a signal, the Data Consumer **SHOULD** perform the following steps:

- Resolve the Digital Twin: Use the `globalAssetId` provided to locate the asset in the Data Provider's decentral Digital Twin Registry.
- Retrieve Submodels: Establish a contract via DSP and pull the Special Characteristics submodel data through the Data Provider's EDC or any CX-0018 compatible connector, using the AAS Submodel API operation `GetSubmodel`.

#### 2.1.4 ADDITIONAL REQUIREMENTS

As the Dataspace Protocol is being used, data **MUST NOT** be transferred before a corresponding contract negotiation has been successfully passed by the participants of the data exchange and a valid contract is present as described in CX-0018. The required data offers **MUST** be discoverable through the decentral Digital Twin Registry as submodel endpoints.

- The described Special Characteristics Measurement aspect model **MUST** be supported.
- Data offers for the Special Characteristics submodel descriptors **MUST** be created and linked as submodel endpoints in the decentral Digital Twin Registry.
- Contract negotiation via DSP **MUST** be completed before data transfer.
- All data **MUST** adhere to usage policies as defined in CX-0152.

#### 2.1.5 POLICY CONSTRAINTS FOR DATA EXCHANGE

In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined. As part of this data sovereignty framework, conventions for access policies, for usage policies and for the constraints contained in the policies have been specified in standard 'CX-0152 Policy Constraints for Data Exchange'. This standard document CX-0152 **MUST** be followed when providing services or apps for data sharing/consuming and when sharing or consuming data in the Catena-X ecosystem. What conventions are relevant for what roles named in [1.1 AUDIENCE & SCOPE](#11-audience--scope) is specified in the CX-0152 standard document as well. CX-0152 can be found in the [standard library](https://catenax-ev.github.io/docs/standards/overview).

#### 2.1.6 Usage Policy

All offers included in the EDC of a dataspace participant **MUST** contain a usage policy following the requirements referenced in paragraph 2.1.5. The use-case introduces the following usage purpose:

- **cx.sc.base:1:** The legal meaning is named in CX-0152 (see [standard library](https://catenax-ev.github.io/docs/standards/overview)).

Additional more general usage policies MAY be included, but all the usage policies MUST contain the above mentioned usage purpose as shown below.

#### 2.1.7 Versioning

The Aspect Models that are provided as submodels of Digital Twins **MUST** be published in dcat:Dataset (http://www.w3.org/ns/dcat#) in the property that holds the full URN of the Aspect Model [(https://admin-shell.io/aas/3/1/HasSemantics/semanticId)](https://admin-shell.io/aas/3/1/HasSemantics/semanticId) Versions are explicitly contained in the URN.

The submodel asset version **MUST** be published in the property https://w3id.org/catenax/ontology/common#version as version X.Y in dcat:Dataset (http://www.w3.org/ns/dcat#).

Note: Data Assets differentiated only by major version **MUST** be offered in parallel. The current standard and aspect model versions mark the start of Life Cycle Management in Catena-X operations. Previous versions are dismissed.

## 3 ASPECT MODEL "Special Characteristics" - SpecialCharacteristicMeasurement

> *This section is normative*

### 3.1 INTRODUCTION

Special Characteristics of a product are information about the adequate robustness of the product, which must be measured because they are difficult to maintain during production.

Special Characteristics are:

- suitable for communicating, product quality and securing in the supply chain.
- Characteristics that require increased care in order to avoid production issues and ensure the quality of the products.
- defined and recorded with the supplier during development.

This semantic model stores figures of characteristics of a product and is linked to the digital twin of the product. The digital twin can have several characteristics defined. The recorded figures of the characteristic can be exchanged between two partners with this data model. The data model contains information (measurements) about the properties of the product.

One digital twin can have more than one special characteristic defined. The semantic model is designed in the way that all kinds of characteristics can be exchanged between partners. The chapter "Examples" will show some kinds of special characteristics.

### 3.1 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance with the "semantic driven workflow" to create a submodel template specification [Context: "SMT"] https://github.com/DavidAnson/markdownlint/blob/v0.33.0/doc/md051.md.

This aspect model is written in the SAMM modeling language (2.x) as a modeling language conformant to CX-0003 as input for the semantic driven workflow.

### 3.2 IDENTIFIER OF SEMANTIC MODEL

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to CX-0003.

The semantic model has the unique identifier:

**URN**: `urn:samm:io.catenax.special_characteristic_measurement:3.0.0#SpecialCharacteristicMeasurement`

> Note: The namespace was aligned to the (singular) aspect name `SpecialCharacteristicMeasurement`.

### 3.3 FORMATS OF SEMANTIC MODEL

#### 3.3.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

SpecialCharacteristicMeasurement v3.0.0

[https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.special_characteristics.measurement/3.0.0]

The open source command line tool of the Eclipse Semantic Modeling Framework is used for generation of other file formats like for example a JSON Schema, AASX for Asset Administration Shell Submodel Template or a HTML documentation.

#### 3.3.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 3.3.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification conformant to [SMT].

### 3.4 DATA ATTRIBUTES "SPECIAL CHARACTERISTICS"

> Although identifying part-instance information (e.g., local identifiers, customer part ID, and revision index) is already available in the Digital Twin and Industry Core submodels, these attributes are intentionally included in this aspect model as well. Since the aspect model represents the business view on the exchanged information, all business-relevant attributes should be available within the payload itself. Consequently, information may be transferred redundantly across models to ensure self-contained and business-consumable data exchange.
The manufacturer Business Partner Number (`manufacturerBpn`) is the one deliberate exception, retained for cross-referencing.

### 3.5 EXAMPLES

Example JSON Payload: Submodel "SpecialCharacteristicMeasurement" for a **simple measurement**.

```json
{
  "localIdentifiers": [
    {
      "value": "SN12345678",
      "key": "partInstanceId"
    }
  ],
  "customerPartId": "PRT-12345",
  "revisionIndex": "01",
  "manufacturerBpn": "BPNL000000000000",
  "measurementType": "simpleMeasurement",
  "characteristicId": "S1",
  "results": [
    {
      "identifier": "measurementPoint23",
      "description": "This text gives you context to the related measurement to help to put it into the necessary context.",
      "unit": "unit:hectopascal",
      "value": "12.09",
      "measurementTimestamp": "2024-12-16T11:46:57.767+01:00"
    }
  ]
}
```

Example JSON Payload: Submodel "SpecialCharacteristicMeasurement" for a **functional measurement**.

```json
{
  "localIdentifiers": [
    {
      "value": "SN12345678",
      "key": "partInstanceId"
    }
  ],
  "customerPartId": "PRT-12345",
  "revisionIndex": "01",
  "manufacturerBpn": "BPNL000000000000",
  "measurementType": "functionalMeasurement",
  "characteristicId": "S1",
  "results": [
    {
      "identifier": "measurementPoint23",
      "description": "This text gives you context to the related measurement to help to put it into the necessary context.",
      "value": "true",
      "measurementTimestamp": "2024-12-16T11:46:57.767+01:00"
    }
  ]
}
```

Example JSON Payload: Submodel "SpecialCharacteristicMeasurement" for a **qualitative measurement**.

```json
{
  "localIdentifiers": [
    {
      "value": "SN12345678",
      "key": "partInstanceId"
    }
  ],
  "customerPartId": "PRT-12345",
  "revisionIndex": "01",
  "manufacturerBpn": "BPNL000000000000",
  "measurementType": "qualitativeMeasurement",
  "characteristicId": "S1",
  "results": [
    {
      "identifier": "measurementPoint23",
      "description": "This text gives you context to the related measurement to help to put it into the necessary context.",
      "attachmentUrl": "https://www.example.com/test_image_measurementPoint23.jpg",
      "value": "5.0",
      "measurementTimestamp": "2024-12-16T11:46:57.767+01:00"
    }
  ]
}
```

## 4 DATA PROVISIONING VIA DIGITAL TWINS

> *This section is normative*

The Special Characteristics measurement data **MUST NOT** be exposed through a use-case-specific REST API. Instead, it **MUST** be provided as an Asset Administration Shell submodel on the part-instance digital twin and made discoverable and retrievable through the Industry Core digital twin mechanisms (CX-0002, CX-0127), governed by the Dataspace Protocol (CX-0018).

### 4.1 SUBMODEL PROVISIONING AND RETRIEVAL

- The `SpecialCharacteristicMeasurement` submodel **MUST** be registered as a submodel descriptor on the digital twin in the decentral Digital Twin Registry, carrying the aspect model `semanticId` (see section 3.3).
- The submodel data **MUST** be retrievable via the AAS Submodel API operation `GetSubmodel` (Value-Only serialization), exposed behind a CX-0018 compliant connector.
- A Data Consumer discovers the twin and submodel via the decentral Digital Twin Registry, negotiates a contract via DSP, and pulls the submodel data. No data is pushed to a consumer endpoint.
- All endpoints **MUST** use HTTPS with TLS 1.2 or higher.
- Access and usage control **MUST** be enforced via the dataspace identity and policy mechanisms (CX-0018, CX-0152). No additional use-case-specific authorization scheme is defined by this standard.

### 4.2 DATA ASSET STRUCTURE

When using Tractus-X EDC or other CX-0018 compliant connectors, the Special Characteristics submodel **MUST** be offered as a submodel data asset following the Industry Core conventions. The asset references the submodel endpoint and carries the aspect model `semanticId`:

```json
{
  "@context": {
    "@vocab": "https://w3id.org/edc/v0.0.1/ns/",
    "cx-common": "https://w3id.org/catenax/ontology/common#",
    "cx-taxo": "https://w3id.org/catenax/taxonomy#",
    "aas-semantics": "https://admin-shell.io/aas/3/0/HasSemantics/",
    "dct": "http://purl.org/dc/terms/"
  },
  "@type": "Asset",
  "@id": "<submodel-asset-id>",
  "properties": {
    "dct:type": {
      "@id": "cx-taxo:Submodel"
    },
    "cx-common:version": "1.0",
    "aas-semantics:semanticId": {
      "@id": "urn:samm:io.catenax.special_characteristic_measurement:1.0.0#SpecialCharacteristicMeasurement"
    }
  },
  "dataAddress": {
    "@type": "DataAddress",
    "type": "HttpData",
    "baseUrl": "{{submodelEndpointBaseUrl}}",
    "proxyPath": "true",
    "proxyQueryParams": "true"
  }
}
```

### 4.3 VERSIONING

The submodel asset version **MUST** be published in the property `https://w3id.org/catenax/ontology/common#version` as version 1.0 in dcat:Dataset. The aspect model version is carried in the `semanticId` URN (see section 3.3).

---

## 5 REFERENCES

### 5.1 NORMATIVE REFERENCES

| Reference | Title | Version |
|-----------|-------|---------|
| CX-0010 | Business Partner Number | 3.0.1 |
| CX-0018 | Dataspace Connectivity | 4.2 |
| CX-0127 | Industry Core: Part Instance | 3.0.0 |
| CX-0151 | Industry Core: Basics | 1.1.0 |
| CX-0152 | Policy Constraints for Data Exchange | 1.0.0 |
| RFC2119 | Key words for use in RFCs | - |
| RFC8174 | Ambiguity of Case in RFC Keywords | - |

> Note: Confirm the exact current versions of CX-0010 and CX-0151 against the Catena-X standard library before release.

### 5.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

- Traceability KIT documentation
- Tractus-X EDC Reference Implementation: https://github.com/eclipse-tractusx/tractusx-edc

## ANNEXES

### FIGURES

> *This section is non-normative*

N/A

### TABLES

> *This section is non-normative*

N/A

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
