# CX-0063 Triangle for Product Carbon Footprint Request v2.1.0

## ABSTRACT

This standard focuses on the pcf exchange use case. This includes relevant requirements for:

- data provider, that want to provide pcf data through Catena-X,

- data consumer, that are want to consume pcf values in Catena-X and

- Application developer/provider supporting the provisioning and consuming of pcf values.
It will provide information about the used core components as well as the structure of the Digital
Twin Registry entry and the EDC data structure.

## 1. INTRODUCTION

In an increasingly environmentally conscious world, the standardized exchange of
product carbon footprint data is becoming increasingly important.
The PCF refers to the amount of greenhouse gas emissions generated during the manufacture,
use and disposal of a product.
The exchange of data between companies in Catena X makes it possible to measure, compare and reduce
the environmental impact of products.
A standardized exchange of PCF data is therefore of great importance to promote more sustainable and
environmentally friendly production and consumption

### 1.1 AUDIENCE & SCOPE

List for which roles the standard is relevant:

- Data Provider / Consumer
  
- Business Application Provider

This documents shows how the pcf exchange in Catena X takes place and which standards needs to
fulfill to be interoperable in the Catena X Network.

### 1.2 CONTEXT

This document defines the so-called *standardization triangle* for the pcf exchange use case.
Standardization triangle hereby means the mandatory components, data models, APIs etc. that are
required to enable the pcf exchange use case.
Additionally, search objects as well as procedures to registering/providing and consuming
the data will be defined.

### 1.3 ARCHITECTURE OVERVIEW

![Architecture Overview](./assets/ArchitecturalOverview.png)

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

All participants and their solutions will need to prove, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

- All participants mentioned under [1.1](#11-audience--scope) MUST follow the defined requirements
  under [2.2](#22-additional-requirements)

### 1.6 EXAMPLES

#### 1.6.1 Request PCF Data (with existing material Twin incl. PCF submodel)

Have a look at the related [KIT](https://eclipse-tractusx.github.io/docs-kits/category/pcf-exchange-kit)

#### 1.6.2 Request PCF Data (without existing material Twin or PCF submodel)

Have a look at the related [KIT](https://eclipse-tractusx.github.io/docs-kits/category/pcf-exchange-kit)

#### 1.6.3 Response PCF Data

Have a look at the related [KIT](https://eclipse-tractusx.github.io/docs-kits/category/pcf-exchange-kit)

#### 1.6.4 Update PCF Data

Have a look at the related [KIT](https://eclipse-tractusx.github.io/docs-kits/category/pcf-exchange-kit)

### 1.7 TERMINOLOGY

The following terms are especially relevant for the understanding of the standard:

**Product Carbon Footprint (PCF)**
The balance of greenhouse gas emissions along the entire life cycle of a product in a defined
 application and in relation to a defined unit of use.

**Business Partner Number (BPN)**
: A BPN is the unique identifier of a partner within Catena-x
Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2. STANDARDS FOR "PCF Exchange"

>This section is normative

### 2.1 LIST OF STANDALONE STANDARDS

To participate in the CO2 use-case, the following single standards MUST be fulfilled:

- [CX-0001 EDC Discovery API - X v1.0.2](https://catena-x.net/de/standard-library)
- [CX-0002 Digital Twins in Catena - X v2.2.0](https://catena-x.net/de/standard-library)
- [CX-0003 SAMMSemanticAspectMetaModel v1.0.0](https://catena-x.net/de/standard-library)
- [CX-0006 RegistrationAndInitialOnBoarding v1.1.3](https://catena-x.net/de/standard-library)
- [CX-0013 Identity of Member Companies v1.1.0](https://catena-x.net/de/standard-library)
- [CX-0014 Employees and Technical Users v1.0.1](https://catena-x.net/de/standard-library)
- [CX-0016 Company Attribute Verification v1.1.0](https://catena-x.net/de/standard-library)
- [CX-0017 Company Role by the Connector v1.1.0](https://catena-x.net/de/standard-library)
- [CX-0018 Eclipse Data Space Connector (EDC) v2.1.0](https://catena-x.net/de/standard-library)
- [CX-0026 Product Carbon Footprint Data Model v2.0.0](https://catena-x.net/de/standard-library)
- [CX-0028 Product Carbon Footprint Request API v2.0.0](https://catena-x.net/de/standard-library)
- [CX-0049-DID Document Schema](https://catena-x.net/de/standard-library)
- [CX-0050-Framework Agreement Credential v1.0.0](https://catena-x.net/de/standard-library)
- [CX-0051-Summary Credential v1.0.0](https://catena-x.net/de/standard-library)

#### 2.2 ADDITIONAL REQUIREMENTS

#### 2.2.1 On Boarding and IAM

All participant mentioned under [1.1](#11-audience--scope) MUST follow the CX Standards [CX-0006 RegistrationAndInitialOnBoarding, CX-0013 Identity of Member Companies, CX-0014 Employees and Technical Users, CX-0016 Company Attribute Verification, CX-0017 Company Role by the Connector](#21-list-of-standalone-standards).

#### 2.2.2 Fetching EDC Endpoints

To find the EDC Endpoint addresses of related parties in Catena-X, App Provider MUST follow the
[CX-0001 EDC Discovery API](#21-list-of-standalone-standards) Standard.

#### 2.2.3 Searching for decentralized Digital Twin Registries

To find decentralized Digital Twin Registries of related parties in Catena-X, App Provider MUST
follow the
[CX-0002 Digital Twins in Catena](#21-list-of-standalone-standards) Standard.

#### 2.2.4 Registration at the BPN Discovery Service

>**Note**
Not needed for PCF as the BPN is known by the Application

#### 2.2.5 Registration of the Digital Twin and the PCF Submodel in the Digital Twin Registry

With Release 23-09 the PCF use case changed to the AAS logic.
Therefore Digital Twins SHOULD be registered in the decentralized digital twin registry.
For looking up the twin ID the data provider MUST register the twins
with the specificAssetIds ``manufacturerPartId`` and ``assetLifecyclePhase=AsPlanned``. In addition the specificAssetId ``digitalTwinType=PartType`` SHOULD be registered to prepare compatibility with future versions. Be aware that the use of ``assetLifecyclePhase=AsPlanned`` will be removed in future versions and usage of ``digitalTwinType=PartType`` will become mandatory instead.

```json
    "specificAssetIds": [
        {
            "key": "manufacturerPartId",
            "value": "%%PART-ID%%"
        },
        {
            "key": "assetLifecyclePhase",
            "value": "AsPlanned"
        },
        {
            "key": "digitalTwinType",
            "value": "PartType"
        }
    ],
```

- The data provider also MUST provide a API Endpoint following the [CX-0002 Digital Twins in Catena](#21-list-of-standalone-standards).
- Data provider MUST register the related pcf sub-model as shown in the [example](#224-registration-at-the-bpn-discovery-service) below.
- The sub model MUST be registered with the ``"idShort": "PCFExchangeEndpoint"``
- For Release 3.2 the subprotocolBody for pcf exchange MUST be defined  like the following description ``"subprotocolBody": "id=AssetId_of_EDCasset;dspEndpoint=https://some.controlplane.url:7173"``
- The id added to the subprotocolBody SHOULD be a UUIDv4
- The ``href`` definition follows [CX-0002 CX-0002 Digital Twins in Catena](#21-list-of-standalone-standards) and MUST have the following structure: "https://edc.data.plane/productIds/mat345" (URL to use via EDC Proxy Call to request PCF).

> NOTE
  Replace "edc.data.plane" with the locally needed URL parts to do a EDC proxy call.

```json
{
    "description": [
        {
            "language": "en",
            "text": "PCF endpoint for material 'mat345'"
        }
    ],
    "idShort": "PCFExchangeEndpoint",
    "identification": "urn:uuid:205cf8d1-8f07-483c-9c5b-c8d706c7d05d",
    "semanticId": {
        "value": [
            "urn:samm:io.catenax.pcf:5.0.0#Pcf"
        ]
    },
    "endpoints": [
        {
            "interface": "PCF-1.0.0",
            "protocolInformation": {
                "href": "https://edc.data.plane/productIds/mat345",
                "endpointProtocol": "HTTP",
                "endpointProtocolVersion": ["1.1"],
                "subprotocol": "DSP",
                "subprotocolBody": "id=c34018ab-5820-4065-9087-416d78e1ab60;dspEndpoint=https://some.controlplane.url:7173",
                "subprotocolBodyEncoding": "plain"
            }
        }
    ]
}
```

#### 2.2.6 Requesting a PCF without an existing Digital Twin or PCF Submodel

In case no Digital Twin or PCF Submodel is registered (yet), the asset to use is identified by its type (``data.pcf.exchangeEndpoint``).

#### 2.2.7 EDC Data Asset Structure

##### 2.2.7.1 EDC Data Asset

The PCF asset MUST be registered with as defined below:

```json
{
  "@type": "edc:AssetEntryDto",
  "edc:asset": {
    "@id": "c34018ab-5820-4065-9087-416d78e1ab60",
    "edc:properties": {
      "rdfs:label": "PCF Data",
      "rdfs:comment": "Endpoint for PCF data",
      "dcat:version": "1.0.0", 
      "cx-common:version": "1.0.0", 
      "aas-semantics:semanticId": "urn:samm:io.catenax.pcf:5.0.0#Pcf",
      "edc:contentType": "application/json",
      "edc:type": "data.pcf.exchangeEndpoint", 
      "dct:type": {"@id":"cx-taxo:data.pcf.exchangeEndpoint"}
    },
    "edc:privateProperties": null,
     
  "edc:dataAddress": {
    "edc:type": "edc:HttpData",
    "edc:baseUrl": "https://some.url/service",
    "edc:proxyBody": "true",
    "edc:proxyPath": "true",
    "edc:proxyQueryParams": "true",
    "edc:proxyMethod": "true",
    "edc:contentType": "application/json"
    }
  }
}
```

The following attributes are now *deprecated* and will be removed within release 23.05:

- ``dcat:version``
- ``edc:type``

The following attributes are now *optional* and will become *mandatory* within release 23.05:

- ``cx-common:version``
- ``dct:type``

The following values MUST be present as EDC Asset properties:

- ``aas-semantics:semanticId``: MUST contain the value: ``"urn:samm:io.catenax.pcf:5.0.0#Pcf"``
- ``dcat:version``: MUST contain the value: ``"1.0.0"``
- ``edc:type``: MUST follow the schema: ``"data.pcf.exchangeEndPoint"``
- If present, ``cx-common:version``: MUST contain the value: ``"1.0.0"``
- If present, ``dct:type``: MUST follow the schema: ``{"@id":"cx-taxo:data.pcf.exchangeEndpoint"}``

The following attributes MUST be set within the ``edc:dataAddress`` section:

- ``edc:type``: MUST contain the value: ``"edc:HttpData"``
- ``edc:proxyBody``: MUST contain the value: ``"true"``
- ``edc:proxyPath``: MUST contain the value: ``"true"``
- ``edc:proxyQueryParams``: MUST contain the value: ``"true"``
- ``edc:proxyMethod``: MUST contain the value: ``"true"``
- ``edc:contentType``: MUST contain the value: ``"application/json"``

##### 2.2.7.2 EDC Policy Structure

A participant mentioned under [1.1](#11-audience--scope) MUST sign the overall
[Catena-X Terms and Condition](https://catena-x.net/de/catena-x-einfuehren-umsetzen/governance-framework-fuer-datenraum-betrieb)
as well as the [pcf framework agreement](https://catena-x.net/de/catena-x-einfuehren-umsetzen/governance-framework-fuer-datenraum-betrieb)
This follows the first SSI setup following the [IAM Standards](#21-list-of-standalone-standards) in
CX covering the new SSI infrastructure which will released with R 3.2.

The minimum set of **membership** and  the **pcf frameworkagreement**
MUST to be added to the asset:

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
                            "odrl:leftOperand": "FrameworkAgreement.pcf",
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

##### 2.2.7.3 Contract Definition

Contract definitions of data providers MUST follow the structure below (also defined in [CX-0018 Eclipse Data Space Connector (EDC)](#21-list-of-standalone-standards)):

```json
{
    "@id": "54ef3326-42b2-4221-8c5a-3a6270d54db8",
    "edc:accessPolicyId": "a343fcbf-99fc-4ce8-8e9b-148c97605aab",
    "edc:contractPolicyId": "a343fcbf-99fc-4ce8-8e9b-148c97605aab",
    "edc:assetsSelector":[
        {
            "@type": "Criterion",
            "edc:operandLeft": "@id",
            "edc:operator": "=",
            "edc:operandRight": "c34018ab-5820-4065-9087-416d78e1ab60"
        }
    ]
}
```

#### 2.2.8 Data Exchange

As the pcf usage case currently support only asynchronous data exchange, App Provider MUST follow
the API definition [CX-0028 Product Carbon Footprint Request API](#2-standards-for-pcf-exchange). The exchanged data follows the standardized
data model [CX-0026 Product Carbon Footprint Data Model](#2-standards-for-pcf-exchange).

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

see [2.1](#21-list-of-standalone-standards)

### 3.2 NON-NORMATIVE REFERENCES

### 3.3 REFERENCE IMPLEMENTATIONS

Currently the reference implementation is no FOSS application. It was implemented by the following COTS applications:

- [SiGREEN (Siemens)](https://www.siemens.com/de/de/unternehmen/themenfelder/product-carbon-footprint.html)
- [SDX (SAP)](https://www.sap.com/sustainability/climate-action.html)
- [SPF (SupplyOn)](https://www.supplyon.com/de/product-footprint)

## ANNEXES

### FIGURES

[Architectural Overview](./assets/ArchitecturalOverview.png)

### TABLES

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
