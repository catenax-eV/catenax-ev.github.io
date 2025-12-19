---
tags:
  - CAT/Business Application Provider
  - UC/Quality
---

# CX-0131 Circularity Core v1.1.1

## ABSTRACT

This standards concludes the [Circularity KIT](https://eclipse-tractusx.github.io/docs-kits/kits/Circularity_KIT/page-adoption-view/) and shall empower stakeholders to transition towards a circular economy by providing frameworks, guidelines and best practices to enhance sustainability credentials, enable data-driven decision-making and foster collaboration and innovation in the automotive industry.
Secondary Material Content (SMC), Material Accounting (MA), End-of-Life (EoL) and Dismantling Services, and the CE-Assistant are the four focus topics that form the first version of the Circularity KIT. The offered content and artifacts address important use cases such as sustainable material management, waste minimization and resource efficiency, that contribute to more sustainable and circular automotive value loops.
The overarching goals are:

- Establish an understanding of requirements along circular value chains and how businesses can profit by implementing  sustainable solutions
- Offer standards and guidelines for industry stakeholders
- Create the basis for data exchange and applications to ensure the provided frameworks are used in the intended way
- Explain different circularity topics and provide tools to implement them

## 1. INTRODUCTION

Within Circular Economy (CE) it is of utmost importance that any of the partners in the supply chain work closely together and share relevant information that they can provide. Due to the loops in the supply chain the role allocation of suppliers and customers is not as clear as in linear economy. Therefore, it is crucial within Circular Economy to understand the processes, conditions, connections, transitions, and temporal aspects of materials, parts, and vehicles. This involves navigating the complexities of End-of-Life (EoL) considerations, CE-Assistant, Material Accounting (MA), and Secondary Material Content (SMC). Efficiently managing resources and strategically addressing end-of-life phases are integral to fostering sustainability in a closed-loop system.

### 1.1 AUDIENCE & SCOPE

*This section is non-normative*

List for which roles the standard is relevant:

- Data Provider / Consumer
- Business Application Provider

The standard is of interest to all members of the automotive supply chain including suppliers, OEMs, dismantlers, recyclers and stakeholders within the recycling industry and the CE.

Additionally, the standards also apply to software providers and core service providers to ensure interoperability and data sovereignty between different core service providers. The scope of this document is to provide guidance about the different standards in the Circularity use case.

### 1.2 CONTEXT

In order to effectively enhance circularity along the supply chain, standardized approaches to different aspects of circular economy are essential. This covers the usage of SMC, MA, the CE-Assistant as well as the complexities of EoL Services. The standardization provides structured frameworks based on which information can be shared across industries and stakeholders. Therefore, it enhances comparability between companies and, by reducing the chance of misunderstandings, increases data quality.

In the EoL the issuence of a `Certificate of Decommissioning` (CoDM) by an authorized dismantling company classifies a vehicle and all associated components as EoL. The issuance of the certificate is exclusively handled by a company within Catena-X holding the CX-verifiable credential `Dismantler`. Therefore, the CoDM consistently marks the end of the initial life cycle phase of an asset, initiating the EoL process. Subsequently, additional certificates provide the opportunity to commence the start of a component's second or n-th life. However, a vehicle with a specific VIN is unequivocally designated as EoL. The End-of-Life-Vehicle (ELV) will be consecutive dismantled.

The CE-Assistant can then be used to support the dismantling company in its decision as to which components of the ELV should be reused, refurbished, remanufactured or recycled. The assistant suggests the most environmental friendly R-strategy for the components. The asset/part/component/material/fluid/etc. must be certified - reuse, repair, remanufacturing, refurbishment, material recycling, waste - in accordance with the decision made by the stakeholder of concern. This certification makes it possible to track the life cycle of the components precisely. It also offers the advantage of being able to keep statistics on what percentage of its components have been allocated to which R-strategy. In the evaluation of the carbon dioxide (CO2) emissions of different components and their subsequent integration into the digital twin (DT), the precise categorization of these component's across different life cycle phases is a central factor.

The utilization of precisely defined EoL certificates enables the accurate determination of a components current life cycle phase. This precision not only ensures a reliable assessment, but also facilitates a comprehensive understanding of the environmental impact and carbon footprint of the components, seamlessly integrating this valuable information into the digital twin framework. The dismantling process is carried out in accordance with all legal requirements (e.g. documentation of pollutant removal, etc.). The vehicle is then dismantled and individual materials are separated.

The separated assets are part of further processing by any R-strategy. The second life of the asset might for example be Reuse, Repair, Remanufacture or Recycle. Depending on the exact R-Strategy, different data might be interesting for the second life of the asset.

MA provides standardized scrap/waste and secondary material data exchange for the ecosystem partners to create transparency about recycling activities and verifiable closed loops.

To close the loops and to understand the usage of the materials provided through the previous steps, SMC explores ways to incorporate secondary materials into the value chain. By facilitating a standardized data model for data exchange and introducing a calculation methodology, this framework establishes a foundation to facilitate communication between stakeholders. Through this, the secondary materials are being brought back into the loop.
Those materials are processed into new products and after entering the EoL-phase the loop is closed.

### 1.3 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.
The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.4 PROOF OF CONFORMITY

All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please refer to the [certification information page](https://catena-x.net/en/catena-x-introduce-implement/certification) for the process of conformity assessment and certification. Since this Core document describes a set of standards to be fulfilled, participants **MUST** fulfill all mentioned standards for the relevant sub-usecase ([2.3](#23-secondary-material-content), [2.4](#24-eol-services), [2.5](#25-ce-assistant)) and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document. The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.

### 1.5 TERMINOLOGY

> *This section is non-normative*

All usecase relevant terminologies can be found in the [circularity kit](https://eclipse-tractusx.github.io/docs-kits/kits/Circularity_KIT/page-adoption-view)

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2. STANDARDS FOR CIRCULARITY CORE

> *This section is normative*

### 2.1 Overall Standalone Standards

- CX-0001:1.0 EDC Discovery API
- CX-0002:2.2 Digital Twin in Catena-X
- CX-0003:1.1 SAMM Semantic Aspect Meta Model
- CX-0006:2.0 Registration And Initial OnBoarding
- CX-0013:2.0 Identity of Member Companies
- CX-0014:1.0 Employees and Technical Users
- CX-0015:1.0 IAM & Access Control Paradigm
- CX-0018:3.0 Dataspace Connectivity
- CX-0049:2.0 DID Document Schema
- CX-0050:2.0 Framework Agreement Credential
- CX-0152:1.0 Policy Constraints for Data Exchange

### 2.2 General Requirements

### 2.2.1 POLICY CONSTRAINTS FOR DATA EXCHANGE

In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined.  As part of this data sovereignty framework, conventions for access policies, for usage policies and for the constraints contained in the policies have been specified in standard 'CX-0152 Policy Constraints for Data Exchange'. This standard document CX-0152 **MUST** be followed when providing services or apps for data sharing/consuming and when sharing or consuming data in the Catena-X ecosystem. What conventions are relevant for what roles named in [1.1 AUDIENCE & SCOPE](#11-audience--scope) is specified in standard [CX-0152](#21-overall-standalone-standards).

#### 2.2.2 Onboarding and IAM

All participants mentioned under 1.1 **MUST** follow the CX Standards [CX-0006](https://catena-x.net/en/standard-library) and [CX-0013](https://catena-x.net/en/standard-library) to [CX-0017](https://catena-x.net/en/standard-library).

#### 2.2.3 Fetching EDC Endpoints

To find the EDC Endpoint addresses of related parties in Catena-X, app provider **MUST** follow the [CX-0001](https://catena-x.net/en/standard-library) Standard.

#### 2.2.4 Searching for Decentralized Digital Twin Registries

To find decentralized Digital Twin Registries of related parties in Catena-X, app provider **MUST** follow the [CX-0002](https://catena-x.net/en/standard-library) Standard.

#### 2.2.5 Registration at the BPN Discovery Service

To find the Business Partner Number of the related parties in Catena-X, data provider (Only relevant for the sub use cases [2.4](#24-eol-services), [2.5](#25-ce-assistant)) **MUST** follow the [CX-0053:2.1](https://catena-x.net/en/standard-library) standard.

Example can be found in the [Digital Twin Kit](https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/dt-kit-software-development-view)

### 2.3 Secondary Material Content

#### 2.3.1 LIST OF STANDALONE STANDARDS SMC

To participate in the Secondary Material Content sub-use case, the following single standards **MUST** be fulfilled by all participants mentioned under [1.1](#11-audience--scope), if data is provided:

- [Aspect Model SecondaryMaterialContent v1.0](#323-aspect-model-secondarymaterialcontent)

#### 2.3.2 DATA REQUIRED

If data is provide, Data Provider **MUST** provide a *PartAsPlanned* or a *PartAsBuilt* together with the aspect for *SecondaryMaterialContent*.

#### 2.3.3 ADDITIONAL REQUIREMENTS

##### 2.3.3.1  Registration of the Digital Twin and the SMC Submodel in the Digital Twin Registry

Specific asset IDs **MUST** be provided when registering a digital twin:

- For AsPlanned: ``ManufacturerPartID`` & ``"assetLifecyclePhase=AsPlanned"``
- For AsBuilt: ``PartInstanceID`` & ``"assetLifecyclePhase=AsBuilt"``
  
See the following example:

```json
    "specificAssetIds": [
        {
            "key": "manufacturerPartId",
            "value": "{{manufacturerPartId}}",
        }, 
        {
            "key" : "assetLifecyclePhase",
            "value": "AsPlanned"
        }
    ]
```

- The data provider also **MUST** provide an API Endpoint following the [CX-0002](#21-overall-standalone-standards).
- Data provider **MUST** register the related SMC sub-model as shown in the example below.
- The  ``subprotocolBody`` definition **MUST** follow [CX-0002](#21-overall-standalone-standards)
- The id added to the subprotocolBody **SHOULD** be a UUIDv4
- The ``href`` definition follows [CX-0002](#21-overall-standalone-standards).

##### 2.3.3.2 EDC Asset Structure

The asset structure **MUST** follow the CX-Standard [0018](#21-overall-standalone-standards). For examples we recommend to use the official [connector kit](https://eclipse-tractusx.github.io/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/assets)

##### 2.3.3.3 EDC Contract Definition

The contract definition **MUST** follow the CX-Standard [0018](#21-overall-standalone-standards). For examples we recommend to use the official [connector kit](https://eclipse-tractusx.github.io/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/contract-definitions)

### 2.4 EoL Services

#### 2.4.1 LIST OF STANDALONE STANDARDS EoL Services

To participate in the EoL Services use-case, the following single standards are **RECOMMENDED** to be fulfilled by all participants for which the standard is relevant:

- CX-0127:2.0 Industry Core: Part Instance with the Aspect Model "SerialPart"
- CX-0127:2.0 Industry Core: Part Instance with the Aspect Model "SingleLevelBoMAsBuilt"
- CX-0126:2.0 Industry Core: Part Type with the Aspect Model "SingleLevelBomAsPlanned"
- [Aspect Model SingleLevelBoMAsSpecified v2.0.0](#31-aspect-model-singlelevelbomasspecified)
- [Aspect Model MaterialForHomologation v1.0.0](#32-aspect-model-materialforhomologation)
- [Aspect Model PartAsSpecified v1.0.1](#33-aspect-model-partasspecified)
- [Aspect Model QualityTask v1.0.2](#34-aspect-model-qualitytask)
- [Aspect Model VehicleProductDescription v2.0.0](#35-aspect-model-vehicleproductdescription)
- [Aspect Model FleetDiagnosticData](#36-aspect-model-fleetdiagnosticdata)
- [Aspect Model FleetClaimData v1.0.1](#37-aspect-model-fleetclaimdata)
- [Aspect Model PartAnalyses v2.0.0](#38-aspect-model-partanalyses)
- [Aspect Model ManufacturedPartsQualityInformation v1.0.1](#39-aspect-model-manufacturedpartsqualityinformation)
- [Aspect Model FleetVehicles v1.0.0](#310-aspect-model-fleetvehicles)
- [Aspect Model QualityTaskAttachment v1.0.0](#311-aspect-model-qualitytaskattachment)

Participants in the use case **MUST** follow Catena-X aligned [data models](https://github.com/eclipse-tractusx/sldt-semantic-models).

#### 2.4.2 ADDITIONAL REQUIREMENTS

The CX-verifiable credential “Dismantler” **MUST** be held by the issuing business partner in order to be able to issue the [Aspect Model Certificate of Decommissioning v1.0](#322-aspect-model-decommissioningcertificate) certificate.

The business partners implementing the respective R-strategy (Reuse, Repair, Remanufacturing, Refurbishment, Material Recycling) or adding waste to the waste stream **SHOULD** issue the corresponding certificate.

**Differentiation between reuse, remanufacturing and refurbishment of parts and components**

For the reuse of a component or part, the following requirements **MUST** be met in accordance with the [Proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL on circularity requirements for vehicle design and on management of end-of-life vehicles, amending Regulations (EU) 2018/858 and 2019/1020 and repealing Directives 2000/53/EC and 2005/64/EC, Annex Part D:](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52023PC0451).

For the remanufacturing or refurbishment of a component or part, the following requirements **MUST** be met in accordance with the [Proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL on circularity requirements for vehicle design and on management of end-of-life vehicles, amending Regulations (EU) 2018/858 and 2019/1020 and repealing Directives 2000/53/EC and 2005/64/EC, Annex Part D:](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52023PC0451).

Application Provider for EoL Services **MUST** be able to handle the following certificates:

- [Aspect Model Certificate of Decommissioning v1.0](#322-aspect-model-decommissioningcertificate)
- [Aspect Model Reuse Certificate v3.0](#316-aspect-model-reusecertificate)
- [Aspect Model Waste Certificate v1.0](#317-aspect-model-wastecertificate)
- [Aspect Model Refurbishing Certificate v3.0](#318-aspect-model-refurbishingcertificate)
- [Aspect Model Remanufacturing Certificate v3.0](#319-aspect-model-remanufacturingcertificate)
- [Aspect Model Material Recycling Certificate v1.0](#320-aspect-model-materialrecyclingcertificate)
- [Aspect Model Repair Certificate v1.0.0](#321-aspect-model-repaircertificate)

##### 2.4.2.1 Registration of the Digital Twin and the Submodel in the Digital Twin Registry

Digital twins **MUST** be registered by a data provider participating in the sub use case EoL Services, if data is available, for `Vehicles` and every part that is subject to R-Strategies.

A data provider **MUST** register their AAS of the respective certificate as following:

- Certificate of Decommissioning: ``CoDM_{{PartinstanceId}}``
- Reuse Certificate: ``reuseCrt_{{PartInstanceId}}``
- Repair Certificate: ``repairCrt_{{PartInstanceId}}``
- Remanufacturing Certificate: ``remanCrt_{{PartInstanceId}}``
- Refurbishing Certificate: ``refurbCrt_{{PartInstanceId}}``
- Material Recycling Certificate: ``matrecCrt_{{PartInstanceId}}``
- Waste Certificate: ``wasteCrt_{{PartInstanceId}}``

By issuing the CoDM, all Parts of the vehicle **MUST** be registered as ``CoDM_{{PartinstanceId}}``. When issuing one of the following certificates Reuse, Remanufacturing, Refurbishing, Material Recycling or Waste, the respective issued certificate **MUST** be added to the respective AAS.

A Data Provider MUST add the specific BPN-L as externalSubjectId to grant access to the specificAssetId partInstanceId

Additionally, depending on the lifecycle, the following asset IDs **MUST** be provided:

- For AsPlanned: ``ManufacturerPartID`` & ``"assetLifecyclePhase=AsPlanned"``
- For AsBuilt: ``PartInstanceID`` & ``"assetLifecyclePhase=AsBuilt"``
- For the ``CustomerPartID"`` a external  ``externalSubjectId`` a BPN **MUST** be set.  
  
- A data provider also **MUST** provide a API Endpoint following the [CX-0002](#21-overall-standalone-standards).
- A Data provider **MUST** register the related certificate sub-models.
- The  ``subprotocolBody`` definition MUST follow [CX-0002](#21-overall-standalone-standards)
- The id added to the subprotocolBody **SHOULD** be a UUIDv4
- The ``href`` definition follows [CX-0002](#21-overall-standalone-standards).

##### 2.4.2.2 EDC Asset Structure for EoL Services

The asset structure **MUST** follow the CX-Standard [0018](#21-overall-standalone-standards). For examples we recommend to use the official [connector kit](https://eclipse-tractusx.github.io/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/assets)

##### 2.4.2.3 EDC Contract Definition for EoL Services

The contract definition **MUST** follow the CX-Standard [0018](#21-overall-standalone-standards). For examples we recommend to use the official [connector kit](https://eclipse-tractusx.github.io/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/contract-definitions)

##### 2.4.2.4 EDC Policy Structure for EoL Services

For the sub use case EoL Services the condition mentioned under [2.2.1](#221-policy-constraints-for-data-exchange) MUST be fulfilled. In addition the data provider application **MUST** verify the presence of the dismantler credential (see [CX-0131](#2-standards-for-circularity-core)) before attaching the certificate to the twin. Prior to issuing a certificate, it is necessary to check whether a certificate has already been issued for this asset. If this is the case, it should be indicated to the issuing party.

**Example:**

```json
{
  "constraint": {
    "leftOperand": "Dismantler.activityType",
    "operator": "eq",
    "rightOperand": "vehicleDismantle"
  }
}
```

### 2.5 CE-Assistant

#### 2.5.1 LIST OF STANDALONE STANDARDS

To participate in the CE-Assistant use-case, the following single standards are **RECOMMENDED** to be fulfilled by all participants for which the standard is relevant:

- CX-0127:2.0 Industry Core: Part Instance with the Aspect Model "SingleLevelBoMAsBuilt"
- CX-0127:2.0 Industry Core: Part Instance with the Aspect Model "Batch"
- CX-0126:2.0 Industry Core: Part Type with the Aspect Model "PartType"
- CX-0136:1.0 Use Case PCF

To participate in the CE-Assistant use-case, compliance to the following data models is **RECOMMENDED** by all participants for which the standard is relevant:

- [Aspect Model SingleLevelBoMAsSpecified](#31-aspect-model-singlelevelbomasspecified)
- [Aspect Model MaterialForHomologation](#32-aspect-model-materialforhomologation)
- [Aspect Model PartAsSpecified](#33-aspect-model-partasspecified)
- [Aspect Model ReturnRequest](#312-aspect-model-returnrequest)
- [Aspect Model BatteryPass](#313-aspect-model-batterypass)
- [Aspect Model Marketplaceoffer](#314-aspect-model-marketplaceoffer)
- [Aspect Model VehicleProductDescription](#35-aspect-model-vehicleproductdescription)
- [Aspect Model PartAnalyses](#38-aspect-model-partanalyses)
- [Aspect Model ManufacturedPartsQualityInformation](#39-aspect-model-manufacturedpartsqualityinformation)
- [Aspect Model RemainingUsefulLife](#315-aspect-model-remainingusefullife)
- [Aspect Model QualityTaskAttachment](#311-aspect-model-qualitytaskattachment)

To participate in the CE-Assistant use-case, compliance to the following data models / certificates is **RECOMMENDED** by all participants for which the standard is relevant:

- [Aspect Model Reuse Certificate v3.0](#316-aspect-model-reusecertificate)
- [Aspect Model Refurbishing Certificate v3.0](#318-aspect-model-refurbishingcertificate)
- [Aspect Model Remanufacturing Certificate v3.0](#319-aspect-model-remanufacturingcertificate)
- [Aspect Model Repair Certificate v1.0.0](#321-aspect-model-repaircertificate)

#### 2.5.2 DATA REQUIRED for CE Assistant

Currenty there are no data models that are mandatory to be used.

#### 2.5.3 ADDITIONAL REQUIREMENTS

##### 2.5.3.1 Registration of the Digital Twin and the Submodel in the Digital Twin Registry

Digital Twins **MUST** be registered in the decentralized digital twin registry. For looking up the twin ID for *vehicles*, the data provider **MUST** register the twins with the ``specificAssetIds: VIN`` and ``assetLifecyclePhase= AsBuild``.

```json
"specificAssetIds": [
    {
        "key": "VIN",
        "value": "{{VIN}}",
    }, 
    {
        "key" : "assetLifecyclePhase",
        "value": "AsBuild",
    }   
 ]
```

Digital Twins **MUST** be registered in the decentralized digital twin registry. For looking up the twin ID for **components**, the data provider **MUST** register the twins with the ``specificAssetIds: manufacturerPartID`` and ``assetLifecyclePhase= AsPlanned``.

For components:

```json
"specificAssetIds": [
    {
        "key": "manufacturerPartId",
        "value": "{{manufacturerPartId}}",
    }, 
    {
        "key" : "assetLifecyclePhase",
        "value": "AsPlanned", 
    }
 ]
```

- The data provider also **MUST** provide a API Endpoint following the [CX-0002](#21-overall-standalone-standards).
- Data provider **MUST** register the related C sub-model as shown in the example below.
- The  ``subprotocolBody`` definition **MUST** follow [CX-0002](#21-overall-standalone-standards)
- The id added to the subprotocolBody **SHOULD** be a UUIDv4
- The ``href`` definition follows [CX-0002](#21-overall-standalone-standards).

The data provider also **MUST** provide an API Endpoint following [CX-0002](#2-standards-for-circularity-core).

##### 2.5.3.2 EDC Asset Structure for CE Assistant

The asset structure **MUST** follow the CX-Standard [0018](#21-overall-standalone-standards). For examples we recommend to use the official [connector kit](https://eclipse-tractusx.github.io/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/assets)

##### 2.5.3.3 EDC Contract Definition for CE Assistant

The contract definition **MUST** follow the CX-Standard [0018](#21-overall-standalone-standards). For examples we recommend to use the official [connector kit](https://eclipse-tractusx.github.io/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/policy-definitions)

##### 2.5.3.4 Components and parts not to be reused

The following components and parts **MUST NOT** be reused in accordance with the Proposal for a [REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL on circularity requirements for vehicle design and on management of end-of-life vehicles, amending Regulations (EU) 2018/858 and 2019/1020 and repealing Directives 2000/53/EC and 2005/64/EC, Annex Part E:](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52023PC0451).

For the selection of an R-Strategy of a component consider the differentiation in [2.4.2 Additional requirements](#242-additional-requirements)

### 2.6 EDC Policy Structure

The requirements to policies which **MUST** be fulfilled by each use case mentioned in this document are listed in chapter [2.2.1](#221-policy-constraints-for-data-exchange).

Examples for access policies and usage policies are given in standard [CX-0152](#21-overall-standalone-standards).

## 3 ASPECT MODELS

> *This section is normative*

### 3.1 ASPECT MODEL "SingleLevelBoMAsSpecified"

The SingleLevelBoMAsSpecified defines the view of the OEM or producer of the whole product, e.g. the OEM of a vehicle. It is free of any supplier-related information and specifies the promised and guaranteed content of the whole product to the end customer. This “top-down” view contrasts with the “bottom-up” view of the SingleLevelBoMAsPlanned, though several sub-aspects are shared. The SingleLevelBoMAsSpecified is merely one aspect, which is attached to the twin of the whole product and itself does neither introduce further twins nor reference them. Instead, it merely comprises all functional information required by dismantlers, workshops, or requestors for used parts to search for and to make a match on the marketplace.

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.single_level_bom_as_specified:2.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_specified/2.0.0/SingleLevelBomAsSpecified.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.single_level_bom_as_specified/2.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.single_level_bom_as_specified/2.0.0/gen
```

### 3.2 ASPECT MODEL "MaterialForHomologation"

The data model Material for Homologation describes the naming and classification of a material to be used in a RRR calculation according to ISO 2262. The values represent the material name, the standard that the material complies with and their respective VDA group according VDA 231-106. The VDA 231-106classification enables a reliable RRR calculation as each VDA group is is related to an ISO 2262 group.

The semantic model has the unique identifier:

```text
  urn:bamm:io.catenax.material_for_homologation:1.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.material_for_homologation/1.0.0/MaterialForHomologation.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.material_for_homologation/1.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.material_for_homologation/1.0.0/gen
```

### 3.3 ASPECT MODEL "PartAsSpecified"

The aspect model PartAsSpecified belongs to the part catalogue. A PartAsSpecified represents a certain OEM catalog part on part number level, providing a digital representation of the part as specified by the OEM. The link to the serialized part is done via the partId, this can only be done if the respective digital twins were provided by the supplier within the value chain.

The semantic model has the unique identifier:

```text
  urn:bamm:io.catenax.part_as_specified:2.0.0#
```

The artifacts of the semantic model:

```
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.part_as_specified/2.0.0/PartAsSpecified.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.part_as_specified/2.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.part_as_specified/2.0.0/gen
```

### 3.4 ASPECT MODEL "QualityTask"

The Quality Task data model defines the root element for Catena-X-based quality work. It describes the quality task and why two or more companies want to work collaboratively on a quality topic.

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.quality_task:2.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.quality_task/2.0.0/QualityTask.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.quality_task/2.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.quality_task/2.0.0/gen
```

### 3.5 ASPECT MODEL "VehicleProductDescription"

The Vehicle.ProductDescription data model is a representation of one vehicle affected by one or more QualityTask. The data model represents the vehicle when it was sold to the end-customers from an end-customers point of view: Which standard equipment was installed in the vehicle and which extra equipment was installed in the vehicle.

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.vehicle.product_description:3.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.vehicle.product_description/3.0.0/ProductDescription.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.vehicle.product_description/3.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.vehicle.product_description/3.0.0/gen
```

### 3.6 ASPECT MODEL "FleetDiagnosticData"

The Fleet.DiagnosticData model is one of the biggest data models from the Catena-X use case Live Quality Loops (QAX). The model can transport stationary diagnostic data that is done in a workshop, as well as diagnostic data coming from connected vehicles over-the-air. The general structure of the Fleet.DiagnosticData model is a list of diagnostic sessions. Each diagnostic session comes from a vehicle.

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.fleet.diagnostic_data:2.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.fleet.diagnostic_data/2.0.0/DiagnosticData.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.diagnostic_data/2.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.diagnostic_data/2.0.0/gen
```

### 3.7 ASPECT MODEL "FleetClaimData"

The Fleet.ClaimData model is used to exchange customer complaints that are recorded in a workshop: If a customer has a complaint with his car during the warranty period he goes to the workshop and wants the issue to be fixed. The data model Fleet.ClaimData allows to exchange multiple complaints with a component manufacturer at once.

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.fleet.claim_data:2.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.fleet.claim_data/2.0.0/ClaimData.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.claim_data/2.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.claim_data/2.0.0/gen
```

### 3.8 ASPECT MODEL "PartAnalyses"

The PartsAnalyses data model is used to exchange information about analyzed parts that were send back from the automotive manufacturer (OEM) to the part manufacturer. These analyses and their results are related to one or more quality tasks.

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.parts_analyses:3.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.parts_analyses/3.0.0/PartsAnalyses.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.parts_analyses/3.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.parts_analyses/3.0.0/gen

```

### 3.9 ASPECT MODEL "ManufacturedPartsQualityInformation"

The data model ManufacturedPartsQualityInformation is a set of manufacturing-related properties of a produced part/component that could be relevant to solve a quality task.

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.manufactured_parts_quality_information:2.1.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.manufactured_parts_quality_information/2.1.0/ManufacturedPartsQualityInformation.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.manufactured_parts_quality_information/2.1.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.manufactured_parts_quality_information/2.1.0/gen
```

### 3.10 ASPECT MODEL "FleetVehicles"

The data model End of Life of Vehicle Compliance describes the RRR calculation results according to ISO 22628. The values represent the calculated quotas, the material masses of each fraction, the mass of the vehicle or component, the considered recycling technologies and the list of potential dismantled parts.

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.fleet.vehicles:2.1.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.fleet.vehicles/2.1.0/Vehicles.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.vehicles/2.1.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.vehicles/2.1.0/gen
```

### 3.11 ASPECT MODEL "QualityTaskAttachment"

The QualityTaskAttachment data model describes a way to exchange data and files, which are not available in the existing data models, in the context of a QualityTask. In order to make the non-standardized data and files machine understandable, they are described using the "Quality Task Attachment" model.

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.quality_task_attachment:2.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.quality_task_attachment/2.0.0/QualityTaskAttachment.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.quality_task_attachment/2.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.quality_task_attachment/2.0.0/gen
```

### 3.12 ASPECT MODEL "ReturnRequest"

The Return Request data model is used to flag a component and/or product to indicate that there is a demand or a request for return. Through this aspect, the part producer of a part specifies whether and why a he wants to receive it back.

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.return_request:2.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.return_request/2.0.0/ReturnRequest.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.return_request/2.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.return_request/2.0.0/gen
```

### 3.13 ASPECT MODEL "BatteryPass"

The Battery Pass provides foundations for digital infrastructures for its documentation, the exchange of basic information and update-relevant technical data – in particular, data that comprehensively describes supply-chain accountability, such as greenhouse gas footprint, working conditions in raw material extraction, or the determination of battery conditions.

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.battery.battery_pass:5.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.battery.battery_pass/5.0.0/BatteryPass.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.battery.battery_pass/5.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.battery.battery_pass/5.0.0/gen
```

### 3.14 ASPECT MODEL "MarketplaceOffer"

The data model "marketplace offer" includes all needed information to place a marketplace offer on a marketplace. It is in the general interest of all parties involved to be provided with the relevant information necessary to complete the transaction intended, e.g., to buy a used part from the marketplace.

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.market_place_offer:2.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.market_place_offer/2.0.0/MarketplaceOffer.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.market_place_offer/2.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.market_place_offer/2.0.0/gen
```

### 3.15 ASPECT MODEL "RemainingUsefulLife"

The data model Remaining Useful Life contains the two relevant values to describe the expected remaining life of a vehicle, remaining running distance and remaining operating hours.

The semantic model has the unique identifier:

```text
  urn:bamm:io.catenax.rul:1.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.rul/1.0.0/RemainingUsefulLife.ttl
```

### 3.16 ASPECT MODEL "ReuseCertificate"

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.reuse_certificate:3.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.reuse_certificate/3.0.0/ReuseCertificate.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.reuse_certificate/3.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.reuse_certificate/3.0.0/gen
```

### 3.17 ASPECT MODEL "WasteCertificate"

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.waste_certificate:1.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.waste_certificate/1.0.0/WasteCertificate.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.waste_certificate/1.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.waste_certificate/1.0.0/gen
```

### 3.18 ASPECT MODEL "RefurbishingCertificate"

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.refurbishing_certificate:3.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.refurbishing_certificate/3.0.0/RefurbishingCertificate.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.refurbishing_certificate/3.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.refurbishing_certificate/3.0.0/gen
```

### 3.19 ASPECT MODEL "RemanufacturingCertificate"

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.remanufacturing_certificate:3.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.remanufacturing_certificate/3.0.0/RemanufacturingCertificate.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.remanufacturing_certificate/3.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.remanufacturing_certificate/3.0.0/gen
```

### 3.20 ASPECT MODEL "MaterialRecyclingCertificate"

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.material_recycling_certificate:1.0.0
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.material_recycling_certificate/1.0.0/MaterialRecyclingCertificate.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.material_recycling_certificate/1.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.material_recycling_certificate/1.0.0/gen
```

### 3.21 ASPECT MODEL "RepairCertificate"

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.repair_certificate:1.0.0
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.repair_certificate/1.0.0/RepairCertificate.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.repair_certificate/1.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.repair_certificate/1.0.0/gen
```

### 3.22 ASPECT MODEL "DecommissioningCertificate"

The semantic model has the unique identifier:

```text
  urn:bamm:io.catenax.decomissioning_certificate:1.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.decomissioning_certificate/1.0.0/DecommissioningCertificate.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.decomissioning_certificate/1.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.decomissioning_certificate/1.0.0/gen
```

### 3.23 ASPECT MODEL "SecondaryMaterialContent"

The semantic model has the unique identifier:

```text
  urn:samm:io.catenax.secondary_material_content:1.0.0#
```

The artifacts of the semantic model:

```
RDF Turtle File: https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.secondary_material_content/1.0.0/SecondaryMaterialContent.ttl
JSON Schema: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.secondary_material_content/1.0.0/gen
AASX: https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.secondary_material_content/1.0.0/gen
```

## 4 REFERENCES

### 4.1 NORMATIVE REFERENCES

The circular economy concepts and solutions developed are based on that of the proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL on requirements for the circular design of vehicles and on the disposal of end-of-life vehicles the disposal of end-of-life vehicles, amending Regulations (EU) 2018/858 and (EU) 2019/1020 and repealing Directives 2000/53/EC and 2005/64/EC:

### 4.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

To understand the standard, the following use case related papers can be helpful:

- A logic to calculate an R-Strategy can be found in the paper: [End-of-life decision support to enable circular economy in the automotive industry based on digital twin data](https://www.sciencedirect.com/science/article/pii/S2212827123006091) (DOI: 10.1016/j.procir.2023.03.150)

- An example of cross-company data exchange and data sovereignty via Catena-X for better decision-making on end-of-life vehicles can be found in this paper: [Empowering End-of-Life Vehicle Decision Making with Cross-Company Data Exchange and Data Sovereignty via Catena-X](https://www.mdpi.com/2071-1050/15/9/7187) (DOI: 10.3390/su15097187)

- KIT // Circularity KIT

## ANNEXES

### FIGURES

> *This section is non-normative*

N/A

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
