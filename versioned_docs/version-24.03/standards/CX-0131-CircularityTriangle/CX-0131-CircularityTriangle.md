# CX-0131 Circularity Triangle v.1.0.0

## ABSTRACT

The Circularity KIT shall empower stakeholders to transition towards a circular economy by providing frameworks, guidelines and best practices to enhance sustainability credentials, enable data-driven decision-making and foster collaboration and innovation in the automotive industry.
Secondary Material Content (SMC), Material Accounting (MA), End-of-Life (EoL) and Dismantling Services, and the CE-Assistant are the four focus topics that form the first version of the Circularity KIT. The offered content and artifacts address important use cases such as sustainable material management, waste minimization and resource efficiency, that contribute to more sustainable and circular automotive value loops.
The overarching goals of the Circularity KIT, therefore, are to:

- Establish an understanding of requirements along circular value chains and how businesses
  can profit by implementing  sustainable solutions
- Offer standards and guidelines for industry stakeholders
- Create the basis for data exchange and applications to ensure the provided frameworks are used in the intended way
- Explain different circularity topics and provide tools to implement them

## 1. INTRODUCTION

Within Circular Economy it is of utmost importance that any of the partners in the supply chain work closely together and share relevant information that they can provide. Due to the loops in the supply chain the role allocation of suppliers and customers is not as clear as in linear economy. Therefore, it is crucial within Circular Economy to understand the processes, conditions, connections, transitions, and temporal aspects of materials, parts, and vehicles. This involves navigating the complexities of End-of-Life considerations, R-Strategy Assistance, Material Accounting, and Secondary Material Content. Efficiently managing resources and strategically addressing end-of-life phases are integral to fostering sustainability in a closed-loop system.

### 1.1 AUDIENCE & SCOPE

*This section is non-normative*

List for which roles the standard is relevant:

- Data Provider / Consumer
- Business Application Provider

The standard is of interest to all members of the automotive supply chain including suppliers, OEMs, dismantler, recyclers and stakeholders within the recycling industry and the circular economy.

Additionally, the standards also apply to software providers and core service providers to ensure interoperability and data sovereignty between different core service providers. The scope of this document is to provide guidance about the different standards in the Circularity KIT use case.

### 1.2 CONTEXT

In order to effectively enhance circularity along the supply chain, standardized approaches to different aspects of circular economy are essential. This covers the usage of Secondary Material Content, Material Accounting, the CE-Assistant as well as the complexities of End-of-Life and Dismantling Services. The standardization provides structured frameworks based on which information can be shared across industries and stakeholders. Therefore, it enhances comparability between companies and, by reducing the chance of misunderstandings, increases data quality.

The issuance of a 'Certificate of Decommissioning' (CoDM) by an authorized dismantling company classifies a vehicle and all associated components as End-of-Life. The issuance of the certificate is exclusively handled by a company within Catena-X holding the CX-verifiable credential 'Dismantler.' Therefore, the CoDM consistently marks the conclusion of the initial lifecycle phase of an asset, initiating the End-of-Life process. Subsequently, additional certificates provide the opportunity to commence the start of a component's second life. However, a vehicle with a specific VIN is unequivocally designated as End-of-Life. The End-of-Life-Vehicle (ELV) will be consecutive dismantled. The CE-Assistant can then be used to support the dismantling company in its decision as to which components of the ELV should be reused, refurbished, remanufactured or recycled. The assistant suggests the most ecologically and economically beneficial R-strategy for the components. The asset/part/component/material/fluid/etc. must be certified - reuse, remanufacturing, refurbishment, material recycling, waste - in accordance with the decision made. This certification makes it possible to track the life cycle of the components precisely. It also offers the advantage of being able to keep statistics on what percentage of its components have been allocated to which R-strategy. In the evaluation of the carbon dioxide (CO2) emissions of different components and their subsequent integration into the digital twin, the precise categorization of these components across different life cycle phases is a central factor. The utilization of precisely defined end-of-life (EoL) certificates enables the accurate determination of a component's current life cycle phase. This precision not only ensures a reliable assessment, but also facilitates a comprehensive understanding of the environmental impact and carbon footprint of the components, seamlessly integrating this valuable information into the digital twin framework. The dismantling process is carried out in accordance with all legal requirements (e.g. documentation of pollutant removal, etc.). The vehicle is then dismantled and individual materials are separated.

The separated assets are part of further processing by any R-strategy. The second life of the asset might be Re-Use, Re-Pair, Re-Manufacture or Re-Cycle. Depending on the exact R-Strategy different data might be interesting for the second life of the asset.

Material Accounting provides standardized scrap/waste and secondary material data exchange for the ecosystem partners to create transparency about recycling activities and verifiable closed loops.

To close the loops and to understand the usage of the materials provided through the previous steps, Secondary Material Content (SMC) explores ways to incorporate secondary materials into the value chain. By facilitating a standardized data model for data exchange and introducing a calculation methodology, this framework establishes a foundation to facilitate communication between stakeholders. Through this, the secondary materials are being brought back into the loop.
Those materials are processed into new products and after entering the EoL-phase the loop is closed.

### 1.3 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.
The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

### 1.4 PROOF OF CONFORMITY

All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please refer to the [certification information page](https://catenax.net/en/catena-x-introduce-implement/certification) for the process of conformity assessment and certification.
Since this Triangle document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards for the relevant sub-usecase ([2.3](#23-secondary-material-content), [2.4](#24-eol--dismantling-services), [2.5](#25-ce-assistant)) and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document. The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.

### 1.5 TERMINOLOGY

> *This section is non-normative*

All usecase relevant terminologies can be found in the [circularity kit](https://eclipse-tractusx.github.io/docs-kits/kits/Circularity_KIT/page-adoption-view)

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2. STANDARDS FOR CIRCULARITY TRIANGLE

> *This section is normative*

### 2.1 Overall Standalone Standards

- [CX-0001-EDCDiscoveryAPI-v1.0.2](https://catena-x.net/de/standard-library)
- [CX-0002-DigitalTwininInCX-v2.0.0](https://catena-x.net/de/standard-library)
- [CX-0003-SAMMSemanticAspectMetaModel-v1.0.2](https://catena-x.net/de/standard-library)
- [CX-0004-GovernanceProcess-v1.0.1](https://catena-x.net/de/standard-library)
- [CX-0006-RegistrationAndInitialOnBoarding-v1.1.2](https://catena-x.net/de/standard-library)
- [CX-0013-Identity of Member Companies-v1.1.0](https://catena-x.net/de/standard-library)
- [CX-0014-Employees and Technical Users-v1.0.1](https://catena-x.net/de/standard-library)
- [CX-0015-IAM & Access Control Paradigm-v1.0.1](https://catena-x.net/de/standard-library)
- [CX-0016-Company Attribute Verification-v1.1.0](https://catena-x.net/de/standard-library)
- [CX-0017-Company Role by the Connector-v1.1.0](https://catena-x.net/de/standard-library)
- [CX-0018-SovereignDataExchange-v2.0.1](https://catena-x.net/de/standard-library)
- [CX-0049-DID Document Schema-v1.0.0](https://catena-x.net/de/standard-library)
- [CX-0050-Framework Agreement Credential-v1.0.0](https://catena-x.net/de/standard-library)
- [CX-0051-Summary Credential-v1.0.0](https://catena-x.net/de/standard-library)

### 2.2 General Requirements

#### 2.2.1 Onboarding and IAM

All participants mentioned under 1.1 **MUST** follow the CX Standards [CX-0006](https://catena-x.net/de/standard-library) and [CX-0013](https://catena-x.net/de/standard-library) to [CX-0017](https://catena-x.net/de/standard-library).

#### 2.2.2 Fetching EDC Endpoints

To find the EDC Endpoint addresses of related parties in Catena-X, app provider **MUST** follow the [CX-0001](https://catena-x.net/de/standard-library) Standard.

#### 2.2.3 Searching for Decentralized Digital Twin Registries

To find decentralized Digital Twin Registries of related parties in Catena-X, app provider **MUST** follow the [CX-0002](https://catena-x.net/de/standard-library) Standard.

#### 2.2.4 Registration at the BPN Discovery Service

To find the Business Partner Number of the related parties in Catena-X, data provider (Only relevant for the sub use cases [2.4](#24-eol--dismantling-services), [2.5](#25-ce-assistant)) **MUST** follow the [CX-0053](https://catena-x.net/de/standard-library) standard.

Example can be found in the [Digital Twin Kit](https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/Specification%20Digital%20Twin%20KIT)

### 2.3 Secondary Material Content

#### 2.3.1 LIST OF STANDALONE STANDARDS SMC

To participate in the Secondary Material Content use-case, the following single standards **MUST** be fulfilled by all participants mentioned under [1.1](#11-audience--scope):

- [CX-0098-AspectModel Secondary Material Content v2.0.0](https://catena-x.net/de/standard-library)
- [CX-0053 BPN Discovery Services v1.0.0](https://catena-x.net/de/library)

#### 2.3.2 DATA REQUIRED

Every Data Provider **MUST** always provide a PartAsPlanned or a PartAsBuilt together with the aspect for SecondaryMaterialContent.

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

- The data provider also MUST provide a API Endpoint following the [CX-0002](#21-overall-standalone-standards).
- Data provider MUST register the related SMC sub-model as shown in the example below.
- The  ``subprotocolBody`` definition MUST follow [CX-0002](#21-overall-standalone-standards)
- The id added to the subprotocolBody SHOULD be a UUIDv4
- The ``href`` definition follows [CX-0002](#21-overall-standalone-standards).

##### 2.3.3.2 EDC Asset Structure

The asset structure **MUST** follow the CX-Standard [0018](#21-overall-standalone-standards). For examples we recommend to use the official [connector kit](https://eclipse-tractusx.github.io/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/assets)

##### 2.3.3.3 EDC Contract Definition

The contract definition **MUST** follow the CX-Standard [0018](#21-overall-standalone-standards). For examples we recommend to use the official [connector kit](https://eclipse-tractusx.github.io/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/contract-definitions)

### 2.4 EoL / Dismantling Services

#### 2.4.1 LIST OF STANDALONE STANDARDS Dismantling Services

To participate in the EoL/Dismantling Services use-case, the following single standards are **RECOMMENDED** to be fulfilled by all participants for which the standard is relevant:

- [CX-0019-AspectModelSerialPart v2.0.0](https://catena-x.net/de/standard-library)
- [CX-0020 AspectModelSingleLevelBoMAsBuilt v.2.0.0](https://catena-x.net/de/standard-library)
- [CX-0030-Data Model BoMAsSpecified v.2.0.0](https://catena-x.net/de/standard-library)
- [CX-0031 Data Model MaterialForHomologation v.1.0.1](https://catena-x.net/de/standard-library)
- [CX-0032 Data Model PartAsSpecified v.1.0.1](https://catena-x.net/de/standard-library)
- [CX-0037 Aspect Model: VehicleProductDescription v.2.0.0](https://catena-x.net/de/standard-library)
- [CX-0036 Aspect Model: QualityTask v1.0.1](https://catena-x.net/de/standard-library)
- [CX-0038 Aspect Model: Fleet.DiagnosticData v1.0.1](https://catena-x.net/de/standard-library)
- [CX-0039 Aspect Model: Fleet.ClaimData v1.0.1](https://catena-x.net/de/standard-library)
- [CX-0040-Aspect Model: PartAnalyses v2.0.0](https://catena-x.net/de/standard-library)
- [CX-0041-Aspect Model: ManufacturedPartsQualityInformation v1.0.1](https://catena-x.net/de/standard-library)
- [CX-0066 Aspect Model: EndofLifeofVehicleCompliance v.1.0.0](https://catena-x.net/de/standard-library)
- [CX-0091 Aspect Model: Fleet.Vehicles v1.0.0](https://catena-x.net/de/standard-library)
- [CX-0092 Aspect Model: QualityTaskAttachment v1.0.0](https://catena-x.net/de/standard-library)

At least participants in the use case **MUST** follow Catena-X aligned [data models](https://github.com/eclipse-tractusx/sldt-semantic-models).

#### 2.4.2 ADDITIONAL REQUIREMENTS

The CX-verifiable credential “Dismantler” **MUST** be held by the issuing business partner in order to be able to issue the following certificates:

The  CX-0099 Standard is the pre condition for the other mentioned certificates for the sub use case EoL/Dismantling Services. It **MUST** be created first.

Application Provider for EoL/Dismantling Services **MUST** be able to handle the following certificates:

- [CX-0099 Aspect Model Certificate of Decommissioning v1.0.0](https://catena-x.net/de/standard-library)
- [CX-0107-Aspect Model Reuse Certificate v1.0.0](https://catena-x.net/de/standard-library)
- [CX-0108-Aspect Model Waste Certificate v1.0.0](https://catena-x.net/de/standard-library)
- [CX-0109-Aspect Model Refurbishing Certificate v1.0.0](https://catena-x.net/de/standard-library)
- [CX-0111-Aspect Model Remanufacturing Certificate v1.0.0](https://catena-x.net/de/standard-library)
- [CX-0112-Aspect Model Material Recycling Certificate v1.0.0](https://catena-x.net/de/standard-library)

##### 2.4.2.1 Registration of the Digital Twin and the Submodel in the Digital Twin Registry

Additionally, depending on the lifecycle, the following asset IDs **MUST** be provided:

- For AsPlanned: ``ManufacturerPartID`` & ``"assetLifecyclePhase=AsPlanned"``
- For AsBuilt: ``PartInstanceID`` & ``"assetLifecyclePhase=AsBuilt"``
- For the ``CustomerPartID"`` a external  ``externalSubjectId`` a BPN **MUST** be set.

See the following example:

```json
    "specificAssetIds": [
        {
            "key": "manufacturerPartId",
            "value": "{{manufacturerPartId}}",
            "externalSubjectId": {
                "type":"ExternalReference",
                "keys":[
               {
                  "type":"GlobalReference",
                  "value":"PUBLIC_READABLE"
               }
            ]
         }    
        },
        {
         "name":"customerPartId",
         "value":"{{customerPartId}}",
         "externalSubjectId":{
            "type":"ExternalReference",
            "keys":[
               {
                  "type":"GlobalReference",
                  "value":"BPN_COMPANY_001"
               }
            ]
         }
        }, 
        {
            "key" : "assetLifecyclePhase",
            "value": "AsPlanned"
        }
    ]
```

- A data provider also **MUST** provide a API Endpoint following the [CX-0002](#21-overall-standalone-standards).
- A Data provider **MUST** register the related certificate sub-models.
- The  ``subprotocolBody`` definition MUST follow [CX-0002](#21-overall-standalone-standards)
- The id added to the subprotocolBody **SHOULD** be a UUIDv4
- The ``href`` definition follows [CX-0002](#21-overall-standalone-standards).

For the following assets a digital twin **MUST** be registered by a data provider participating in the sub use case EoL/Dismantling Services:

- Vehicle
- Every part that is subject to recycling

##### 2.4.2.2 EDC Asset Structure for EoL/Dismantling Services

The asset structure **MUST** follow the CX-Standard [0018](#21-overall-standalone-standards). For examples we recommend to use the official [connector kit](https://eclipse-tractusx.github.io/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/assets)

##### 2.4.2.3 EDC Contract Definition for EoL/Dismantling Services

The contract definition **MUST** follow the CX-Standard [0018](#21-overall-standalone-standards). For examples we recommend to use the official [connector kit](https://eclipse-tractusx.github.io/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/contract-definitions)

##### 2.4.2.4 EDC Policy Structure for EoL/Dismantling Services

For the sub use case EoL/Dismantling Services the condition mentioned under [2.6](#26-edc-policy-structure) MUST be fulfilled. In addition the application **MUST** verify the presence of the dismantler credential (see [CX-0052](#2-standards-for-circularity-triangle)) before attaching the certificate to the twin. Prior to issuing a certificate, it is necessary to check whether a certificate has already been issued for this asset. If this is the case, it should be indicated to the issuing party.

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

- [CX-0020-Aspect Model: SingleLevelBoMAsBuilt v.2.0.0](https://catena-x.net/de/standard-library)
- [CX-0021-Aspect Model: Batch v.1.0.1](https://catena-x.net/de/standard-library)
- [CX-0026-Product Carbon Footprint Data Model v.1.2.0](https://catena-x.net/de/standard-library)
- [CX-0027-Product Carbon Footprint Aspect Model v.1.0.0](https://catena-x.net/de/standard-library)
- [CX-0028-Product Carbon Footprint Request API v.1.1.2](https://catena-x.net/de/standard-library)
- [CX-0029-Product Carbon Footprint Rulebook v.2.0.0](https://catena-x.net/de/standard-library)
- [CX-0030-Data Model BoMAsSpecified v.1.0.1](https://catena-x.net/de/standard-library)
- [CX-0031-Data Model MaterialforHomologation v.1.0.1](https://catena-x.net/de/standard-library)
- [CX-0032-Data Model PartAsSpecified v. 1.0.1](https://catena-x.net/de/standard-library)
- [CX-0033-Data Model Return Request v.1.0.1](https://catena-x.net/de/standard-library)
- [CX-0034-Data Model Battery Pass v.1.0.1](https://catena-x.net/de/standard-library)
- [CX-0035-Data Model Marketplaceoffer v.1.0.0](https://catena-x.net/de/standard-library)
- [CX-0037-Semantic Model Vehicle Product Discription v.2.0.0](https://catena-x.net/de/standard-library)
- [CX-0040 Parts Analyses v.2.0.0](https://catena-x.net/de/standard-library)
- [CX-0041 Manufactured Parts Quality Information v.1.0.1](https://catena-x.net/de/standard-library)
- [CX-0057 Semantic Model: RemainingUsefulLife v.1.0.0](https://catena-x.net/de/standard-library)
- [CX-0091 Aspect Model: Fleet Vehicles 1.0.0](https://catena-x.net/de/standard-library)

#### 2.5.2 DATA REQUIRED for CE Assistant

Currenty there are no data models that are mandatory to be used.

#### 2.5.3 ADDITIONAL REQUIREMENTS

##### 2.5.3.1 Registration of the Digital Twin and the Submodel in the Digital Twin Registry

Digital Twins **MUST** be registered in the decentralized digital twin registry. For looking up the twin ID for **vehicles**, the data provider **MUST** register the twins with the ``specificAssetIds: VIN`` and ``assetLifecyclePhase= AsBuild``.

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

- The data provider also MUST provide a API Endpoint following the [CX-0002](#21-overall-standalone-standards).
- Data provider MUST register the related C sub-model as shown in the example below.
- The  ``subprotocolBody`` definition MUST follow [CX-0002](#21-overall-standalone-standards)
- The id added to the subprotocolBody SHOULD be a UUIDv4
- The ``href`` definition follows [CX-0002](#21-overall-standalone-standards).

The data provider also MUST provide an API Endpoint following [CX-0002](#2-standards-for-circularity-triangle).

##### 2.5.3.2 EDC Asset Structure for CE Assistant

The asset structure **MUST** follow the CX-Standard [0018](#21-overall-standalone-standards). For examples we recommend to use the official [connector kit](https://eclipse-tractusx.github.io/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/assets)

##### 2.5.3.3 EDC Contract Definition for CE Assistant

The contract definition **MUST** follow the CX-Standard [0018](#21-overall-standalone-standards). For examples we recommend to use the official [connector kit](https://eclipse-tractusx.github.io/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/policy-definitions)

### 2.6 EDC Policy Structure

The policies mentioned in this chapter **MUST** be fulfilled by each use case mentioned in this document as well as a participant mentioned under [1.1](#11-audience--scope) **MUST** sign the overall [Catena-X Terms and Condition](https://catena-x.net/de/catena-x-einfuehren-umsetzen/governance-framework-fuer-datenraum-betrieb)
as well as the [circular economy framework agreement](https://catena-x.net/de/catena-x-einfuehren-umsetzen/governance-framework-fuer-datenraum-betrieb).
This follows the first SSI setup following the [IAM Standards](#21-overall-standalone-standards) in CX covering the new SSI infrastructure which will released with release 3.2.

The minimum set of **membership** and the **circular economy framework agreement**

```json
{
    "@context": {
        "odrl": "http://www.w3.org/ns/odrl/2/"
    },
    "@type": "PolicyDefinitionRequestDto",
    "@id": "{{POLICY_ID}}",
    "policy": {
        "@type": "Policy",
        "odrl:permission": [
            {
                "odrl:action": "USE",
                "odrl:constraint": {
                    "@type": "LogicalConstraint",
                    "odrl:and": [
                        {
                            "@type": "Constraint",
                            "odrl:leftOperand": "Membership",
                            "odrl:operator": {
                                "@id": "odrl:eq"
                            },
                            "odrl:rightOperand": "active"
                        },
                        {
                            "@type": "Constraint",
                            "odrl:leftOperand": "FrameworkAgreement.sustainability",
                            "odrl:operator": {
                                "@id": "odrl:eq"
                            },
                            "odrl:rightOperand": "active"
                        }
                    ]
                }
            }
        ]
    }
}
```

For more examples have a look [here](https://github.com/eclipse-tractusx/ssi-docu/blob/main/docs/architecture/cx-3-2/edc/policy.definitions.md).

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

The circular economy concepts and solutions developed are based on that of the proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL on requirements for the circular design of vehicles and on the disposal of end-of-life vehicles the disposal of end-of-life vehicles, amending Regulations (EU) 2018/858 and (EU) 2019/1020 and repealing Directives 2000/53/EC and 2005/64/EC:

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

To understand the standard, the following use case related papers can be helpful:

- A logic to calculate an R-Strategy can be found in the paper: [End-of-life decision support to enable circular economy in the automotive industry based on digital twin data](https://www.sciencedirect.com/science/article/pii/S2212827123006091) (DOI: 10.1016/j.procir.2023.03.150)

- An example of cross-company data exchange and data sovereignty via Catena-X for better decision-making on end-of-life vehicles can be found in this paper: [Empowering End-of-Life Vehicle Decision Making with Cross-Company Data Exchange and Data Sovereignty via Catena-X](https://www.mdpi.com/2071-1050/15/9/7187) (DOI: 10.3390/su15097187)

## ANNEXES

### FIGURES

> *This section is non-normative*

N/A
