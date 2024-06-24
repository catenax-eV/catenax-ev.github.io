# CX-0096 Triangle For Digital Product Pass v1.1.0

## ABSTRACT

This standard focuses on the digital product passport use case. This includes relevant requirements for

- data provider, that want to provide different passports through Catena-X,
- data consumer, that are searching for different passports in Catena-X, and
- application developer / provider supporting the provisioning and consuming of passport data.

Specific passports that shall be mentioned here are the battery passport and the transmission passport, which are first realizations of product passports in Catena-X.

In this document, keywords for registering and searching digital twins and their passports
submodels are defined.

## 1. INTRODUCTION

This document defines the so-called *standardization triangle* for the digital product passport use case.
Standardization triangle hereby means the mandatory components, data models, APIs etc.
that are required to enable the digital product passport use case. Additionally,
search objects as well as procedures to registering / providing and consuming the data will be defined.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This document is meant for the following roles:

- Data Provider / Consumer
- Business Application Provider

The standard is of interest to all members of the automotive supply chain including suppliers, OEMs, dismantler, recyclers and stakeholders within the recycling industry and the circular economy.

Additionally, the standards also apply to software providers and core service providers to ensure interoperability and data sovereignty between different core service providers. The scope of this standard is to define mandatory components, logics and data models as well as give guidance for the provisioning and consuming of product pass information.

### 1.2 CONTEXT

> *This section is non-normative*

Manufacturer will have to provide information on different aspects of their products.
These information will be stored in so-called passports, providing information on instances of the product.

Different stakeholders shall be able to read these passports such as legal authorities, dismantler,
as well as the owner of the product in sense of public persons.

This standards defines the basic interactions with passport information as standard for the
use case "digital product passport". It is implemented in a first reference application which
can be found in section [3.3 REFERENCE IMPLEMENTATION](#33-reference-implementations).

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

This image depicts an overall image of the architecture this standard relates to. Further information can be  read in the [Eco Pass KIT](https://eclipse-tractusx.github.io/docs-kits/kits/Eco_Pass_KIT/page-adoption-view).
The standards related to these components are mentioned in [2.1 LIST OF STANDALONE STANDARDS](#21-list-of-standalone-standards).
Further architecture diagrams for the interactions are presented in [FIGURES](#figures).

![Architectural Overview](./assets/img/digitalProductPassContext.jpg)

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to proof, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

All participants and their solutions will need to proof, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
Please refer to the [certification information page](https://catena-x.net/en/catena-x-introduce-implement/certification) for the process of conformity assessment and certification.
Since this Triangle document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards listed at [2.1 LIST OF STANDALONE STANDARDS](#21-list-of-standalone-standards) and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document. The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.

In order to proof conformity with this  use case digital product pass standard as a
data consumer or app provider demonstrate that you

- can find passport twins
- can distinguish the passport twin information from other submodels
- are compliant with the consuming conditions in [ADDITIONAL REQUIREMENTS](#23-additional-requirements)

In order to proof conformity with this use case digital product pass standard as data provider show that you

- are conform with the provisioning conditions in [ADDITIONAL REQUIREMENTS](#23-additional-requirements).

### 1.6 EXAMPLES

> *This section is non-normative*

The following examples can be checked as they offer further explanations and guidance how to stay compliant with the standard:

- [Eco Pass KIT](https://eclipse-tractusx.github.io/docs-kits/kits/Eco_Pass_KIT/page-adoption-view)
- [Tractus-X Reference Application](#33-reference-implementations)

### 1.7 TERMINOLOGY

> *This section is non-normative*

Use case relevant terminologies and explanations can be found in the [Eco Pass KIT](https://eclipse-tractusx.github.io/docs-kits/kits/Eco_Pass_KIT/page-adoption-view)

The following terms are especially relevant for the understanding of the standard:

- **Asset Administration Shell (AAS):** The AAS is the chosen standard in Catena-X to define digital twins
of an asset (e.g. a battery or a full vehicle)
- **Business Partner Number (BPN):**  A BPN is the unique identifier of a partner within Catena-X as standardized in [CX-0010 Business Partner Number](https://catena-x.net/de/standard-library).

## 2. STANDARDS FOR "USECASE DIGITAL PRODUCT PASSPORT"

> *This section is normative*

### 2.1 LIST OF STANDALONE STANDARDS

> *This section is normative*

To participate in the digital product passport use case, the following single standards **MUST**
be fulfilled by all participants for which the standard is relevant:

- [CX-0001 EDC Discovery API](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0001-EDCDiscoveryAPI_v1.0.2.pdf)
- [CX-0002 Digital Twins in Catena - X](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0002-DigitalTwinsInCatenaX-v.2.0.0.pdf)
- [CX-0003 SAMM Semantic Aspect Meta Model](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Archiv/Update_Juli_23_R_3.2/CX-0003-SAMMSemanticAspectMetaModel-v.1.0.2.pdf)
- [CX-0006 Registration and initial onboarding](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0006-RegistrationAndInitialOnboarding-1.1.2.pdf)
- [CX-0008 Relevant standards for conformity assessments](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/6_Onboarding/CX_-_0008_Conformity_Assessment_PlatformCapabilityOnboarding_v_1.0.1.pdf)
- [CX-0013 Identity of Member Companies](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0013-IdentityofMemberCompanies-v.1.1.0.pdf)
- [CX-0014 Employees and Technical Users](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/4_IAM/CX_-_0014_Employees_and_Technical_Users_PlatformCapabilityIAM_v_1.0.1.pdf)
- [CX-0015 IAM & Access Control Paradigm](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/4_IAM/CX_-_0015_IAM___Access_Control_Paradigm_PlatformCapabilityIAM_v_1.0.1.pdf)
- [CX-0016 Company Attribute Verification](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0016-CompanyAttributeVerification-v.1.1.0.pdf)
- [CX-0017 Company Role by the Connector](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0017-CompanyRoleByTheConnector-v.1.1.0.pdf)
- [CX-0018 Eclipse Data Space Connector (EDC)](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0018-EclipseDataConnector_EDC_-v.2.0.1.pdf)
- [CX-0049 DID Document](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0049-DIDDocument-v.1.0.0.pdf)
- [CX-0050 Framework Agreement Credential](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0050-FrameworkAgreementCredential-v.1.0.0.pdf)
- [CX-0051 Summary Credential](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0051-SummaryCredential-v.1.0.0.pdf)

To participate in the digital product passport use case, the following single standards **SHOULD**
be fulfilled by data consumers / applications providers for which the standard is relevant:

- [CX-0005 Item Relationship Service API](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0005-ItemRelationshipServiceApi-v1.1.2.pdf)

IRS Optional

### 2.2 DATA REQUIRED

> *This section is normative*

The following data **MAY** be provided by data provider and are in direct relation to the use case:

- Provisioning of Batteries: [CX-0034 Data Model Battery Pass](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/Sustainability_Use_Case_Circular_Economy/CX_-_0034_Data_Model_BatteryPass_UseCase_CE_v_1.0.1.pdf)
- Provisioning of Transmissions: [CX-0095 Data Model Transmission Pass](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0095-DataModelTransmissionPass_v1.0.0.pdf)
- Provisioning of Generic Product Passes: [CX-103 Aspect Model Digital Product Passport](https://catena-x.net/de/standard-library)

### 2.3 ADDITIONAL REQUIREMENTS

#### 2.3.1 Onboarding and IAM

All participant mentioned under [1.1](#11-audience--scope) **MUST** follow the CX Standards

[CX-0006](#21-list-of-standalone-standards),
[CX-0013](#21-list-of-standalone-standards),
[CX-0014](#21-list-of-standalone-standards),
[CX-0015](#21-list-of-standalone-standards),
[CX-0016](#21-list-of-standalone-standards) and
[CX-0017](#21-list-of-standalone-standards)

#### 2.3.2 Fetching EDC Endpoints

To find the decentralized registries of related parties in Catena-X, app provider **MUST** follow the [CX-0001](#21-list-of-standalone-standards) standard.

#### 2.3.3 Searching for Decentralized Digital Twin Registries

To find decentralized Digital Twin Registries of related parties in Catena-X, app provider **MUST** follow the [CX-0002](#21-list-of-standalone-standards) Standard.

#### 2.3.4 Registration at the BPN Discovery Service

To find the Business Partner Number of the related parties in Catena-X, data provider **MUST** follow the [CX-0053](#21-list-of-standalone-standards) standard. Example can be found in the [Digital Twin Kit](https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/Specification%20Digital%20Twin%20KIT)

In specific, as a data provider you **MUST** register the ``manufacturerPartId`` following the
  Catena-X standard [CX-0002](#21-list-of-standalone-standards) at the BPN Discovery Service.
  The BPN is hand-over by the authentication/authorization token. Only the owner of a BPN can link the ``manufacturerPartId`` to their BPN.

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

As an app provider / data consumer you **MUST** use the ``manufacturerPartId`` to search for related BPN endpoints.
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
      "keys": [
        "12345678910"
      ]
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

#### 2.3.5 Registration of the Digital Twin and the Submodels in the Digital Twin Registry

A data provider **MUST** register their AAS of the product with the following values for the ``idShort``:

- for batteries: ``Battery_{{PartInstanceId}}``
- for transmissions: ``Transmission_{{PartInstanceId}}``

For other product types the format ``{{Product Name}}_{{PartInstanceId}}`` **SHOULD** be used.

Additionally, the AAS **MUST** be registered with ``specificAssetIds: partInstanceId`` and depending on the current lifecyclePhase of the product with

- ``assetLifecyclePhase = AsBuild`` for product that already have been build or
- ``assetLifecyclePhase = AsPlanned`` for products not yet build.
  
When describing ``asPlanned`` information, ``ExternalReference`` has to be set to ``PUBLIC_READABLE`` as described in the [Digital Twin Registry documentation](https://github.com/eclipse-tractusx/sldt-digital-twin-registry/tree/main/docs)

**Example of a battery in as-planned lifecycle stage:**

```json
"idShort": "Battery_{{PartInstanceId}}",
"specificAssetIds": [
  {
    "name": "manufacturerPartId",
    "value": "{{manufacturerPartId}}",
    "externalSubjectId": {
      "type": "ExternalReference",
      "keys": [
        {
          "type": "GlobalReference",
          "value": "BPNL000000000000"
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
  }
]
```

Data provider **MUST** provide their product passport information in the ``submodelDescriptors`` depending on their product with the following information:

| Product type | used data model | mandatory ``idShort``|
|--------------|------------|------------|
| Batteries |BatteryPass ([CX-0034](#22-data-required)) |  ``batteryPass`` |
| Transmissions | Transmission Pass ([CX-0095](#22-data-required)) | ``transmissionPass`` |
|  Generic Passport | Digital Product Pass ([CX-103 Aspect Model Digital Product Passport](#22-data-required)) |``digitalProductPass`` |

- The data provider also **MUST** provide a API Endpoint following the [CX-0002](#21-list-of-standalone-standards).
Data-  provider **MUST** register the related sub-models as shown in the example below.
- The id added to the ``subprotocolBody`` **SHOULD** be a UUIDv4.
- The ``href`` definition follows [CX-0002](#21-list-of-standalone-standards)

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
          "subprotocolBody": "{{AssetId_of_EDCasset}};dspEndpoint=https://{{edc.control.plane}}",
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
          "value": "urn:bamm:io.catenax.transmission.transmission_pass:1.0.0#TransmissionPass"
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
            "subprotocolBody": "{{AssetId_of_EDCasset}};dspEndpoint=https://{{edc.control.plane}}/BPNL000000000000",
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
            "value": "urn:samm:io.catenax.generic.digital_product_passport:3.0.0#DigitalProductPassport"
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

#### 2.3.6 EDC Data Asset Structure

The general asset structure **MUST** follow the [CX-Standard 0018](#21-list-of-standalone-standards).
Examples are in the official [Connector Kit](https://eclipse-tractusx.github.io/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/assets/).
The following subchapters define the specifics for this standard.

##### 2.3.6.1 EDC Data Asset

The EDC assets for product passports  **MUST** follow the JSON blow.

```json
{
  "@context": {},
  "@type": "Asset",
  "@id": "{{assetId}}",
  "properties": {
    "name": "{{asset-name}}",
    "description": "{{Description}}",
    "version": "{{Version}}",
    "contenttype": "{{type}}"  
  },
  "dataAddress": {
    "@type": "DataAddress",
    "type": "HttpData",
    "baseUrl": "{{submodel.server.endpoint}}"
  }
}
```

##### 2.3.6.2 EDC Policy Structure

A participant mentioned under [1.1](#11-audience--scope) **MUST** sign the overall
[Catena-X Terms and Condition](https://catena-x.net/de/catena-x-einfuehren-umsetzen/governance-framework-fuer-datenraum-betrieb) as well as the sustainability agreement
 [circular economy framework agreement](https://catena-x.net/de/catena-x-einfuehren-umsetzen/governance-framework-fuer-datenraum-betrieb). This follows the first SSI setup following
  the IAM Standards [CX-0049](#21-list-of-standalone-standards), [CX-0050](#21-list-of-standalone-standards), and [CX-0051](#21-list-of-standalone-standards) in Catena-X covering the new SSI
   infrastructure. Have a look at example policies [here](https://github.com/eclipse-tractusx/ssi-docu/blob/main/docs/architecture/cx-3-2/edc/policy.definitions.md).

The minimum set of **membership** and the **circular economy frameworkagreement** **MUST** to be added to the asset:

```json

{
  "@context": {
    "odrl": "http://www.w3.org/ns/odrl/2/leftOperand"
  },
  "@type": "PolicyDefinitionRequestDto",
  "@id": "{{PolicyId}}",
  "policy": {
    "@type": "Policy",
    "odrl:permission" : [
      {
        "odrl:action":"USE",
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

##### 2.3.6.3 Contract Definition

Contract definitions of data providers **MUST** follow this structure (also defined in [CX-0018](#21-list-of-standalone-standards)):

```json
"@context": {},
"@id": "{{ContractDefinitionId}}",
"@type": "ContractDefinition",
"accessPolicyId": "{{AccessPolicyId}}",
"contractPolicyId": "{{ContractPolicyId}}",
"assetsSelector" : {
  "@type" : "CriterionDto",
  "operandLeft": "https://w3id.org/edc/v0.0.1/ns/id",
  "operator": "=",
  "operandRight": "{{AssetId}}"
}
```

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

See chapter [2.1](#21-list-of-standalone-standards).

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

No further references.

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

The code found at [https://github.com/eclipse-tractusx/digital-product-pass](https://github.com/eclipse-tractusx/digital-product-pass) presents a reference
implementation that implements this standard.

## ANNEX

### FIGURES

> *This section is non-normative*
