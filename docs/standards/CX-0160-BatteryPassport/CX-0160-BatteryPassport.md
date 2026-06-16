# CX-0160 Battery Passport v.1.0.0

## ABSTRACT

The CX-0160 Battery Passport Standard defines a harmonized and interoperable framework for the representation, identification, and exchange of battery-related information across the automotive battery value chain within the Catena-X ecosystem. The standard provides a complete, EU Battery Regulation (see Battery Regulation in [6.2 NON-NORMATIVE REFERENCES](#62-non-normative-references))-compliant data model as well as technical requirements to enable economic operators to systematically collect, structure, and exchange semantically aligned battery passport data from upstream supply-chain actors, including raw-material, battery component, and cell suppliers.

The standard specifies how economic operators, battery and component suppliers, OEMs, dismantlers, and recyclers provide and consume digital battery passports as well as information relevant for these passport and thereby supporting regulatory compliance, transparency obligations, and circular-economy business models. It mandates the use of Catena-X digital twins (PartInstance) based on Asset Administration Shells (AAS), including required specific asset identifiers and alignment with core Catena-X standards such as participant registration, digital twin governance, dataspace connectivity, and policy enforcement. The battery passport data model also allows transfer of product condition data for life-cycle updates during the use phase of the battery with a dedicated aspect model.

CX-0160 adopts the joint Catena-X / IDTA Battery Passport semantic model aligned with DIN DKE SPEC 99100, comprising a modular approach with seven data-category specific aspect models: Digital Nameplate, Handover Documentation, Carbon Footprint, Technical Data, Product Condition, Material Composition, and Circularity. Together, these aspects form a coherent and regulation-ready data structure capable of capturing all information required under the EU Battery Regulation across the full battery value chain. The standard mandates standardized policy constraints to ensure data sovereignty, access control, and trusted data exchange.

The CX-0160 Battery Passport Standard establishes a common foundation upon which interoperable, domain-specific, and proprietary applications, services, and certified data products can be developed within the Catena-X ecosystem.

## FOR WHOM IS THE STANDARD DESIGNED

This document is meant for the following roles:

- Data Provider / Consumer
- Business Application Provider

The standard is of interest to all members of the automotive supply chain including suppliers, OEMs, dismantlers, recyclers and stakeholders within the recycling industry and the circular economy.

Data Provider / Consumer can be one of the following examples:

- Economic Operator as Data Consumer from the supply chain
- Battery Component Supplier delivering to the economic operator
- Battery Supplier delivering to an economic operator

## 1 INTRODUCTION

A battery passport is a standardized digital record that accompanies a physical battery throughout its entire lifecycle. It contains key data about the battery’s identity, technical characteristics, carbon footprint, materials, safety and performance over time, as well as ownership and handover events.

Regulators (especially in the EU) are making battery passports mandatory for many traction and industrial batteries to improve transparency, safety and sustainability. With a battery passport, OEMs, fleet operators, service providers, second‑life users and recyclers can reliably access trusted information needed for:

- Demonstrating regulatory compliance (e.g., EU Battery Regulation)
- Assessing carbon footprint and recycled content
- Planning maintenance, reuse and second‑life applications
- Optimizing end‑of‑life treatment and recycling yields
- Protecting business confidentiality via controlled data access

In Catena‑X, the battery passport is implemented as a set of standardized semantic models and APIs on top of digital twins, so data can be shared securely and interoperably between different companies and IT systems.

This standard defines how Battery Passports are provided and consumed within Catena-X.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following Catena‑X roles:

- **Data Provider / Consumer**: Economic operators and other participants that create, update, publish, or consume Battery Passport data for batteries (e.g. battery manufacturers, OEMs, component suppliers, dismantlers, recyclers).
- **Business Application Provider**: Providers of applications that implement the Battery Passport use case on top of Catena‑X (e.g. passport creation tools, regulatory reporting apps, recycling and second‑life applications).
- **Enablement Service Provider**: Providers of integration, data transformation or adapter services that technically enable participants to provision or consume Battery Passport data in a Catena‑X‑compliant way.

The CX‑XXXX Battery Passport standard specifies how battery‑related information is modeled, provisioned, discovered and accessed within the Catena‑X dataspace for:

- Traction, industrial and similar batteries that fall under the scope of the EU Battery Regulation or comparable regulatory schemes.
- End‑to‑end lifecycle usage within the automotive battery value chain (manufacturing, use phase, second‑life, end‑of‑life and recycling).
- Provisioning of both complete digital battery passports and partial, lifecycle‑specific data contributions, based on Catena‑X digital twins and the joint Catena‑X/IDTA Battery Passport aspect models.

The standard is to be applied when:

- **Use Case (1)**: Provisioning of near-complete (except for dynamic data = product condition, put into service) battery passport,
- **Use Case (2)**: component supplier integration, for example cells, housing, battery packs
- **Use Case (3)**: DPP-Service provider view: Complete exchange of DPPs to service provider, which provides it public

In this version the focus is on use case (1) and use case (3).

The standard is not intended to be applied:

- For non‑battery product passports or use cases outside the battery domain (see CX-0143).
- As a general solution for data exchange with non‑Catena‑X ecosystems (although mappings may be implemented externally).
- For full regulatory-compliance e.g. for providing public information without access-restrictions. The standard may enable it, but as Catena-X is an ecosystem with a focus on trust and identification this is out of scope for the actual specification.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The aim of the “Battery Passport” standard within Catena‑X is to establish a harmonized, interoperable, and lifecycle‑spanning foundation for representing, identifying, and exchanging battery‑related information across all actors of the battery value chain.
The standard enables the provisioning of both complete digital battery passports and partial, lifecycle‑specific data contributions from individual supply‑chain participants.
It supports compliance with global regulatory requirements—particularly the EU Battery Regulation—and enables data‑driven value creation throughout manufacturing, use, repurposing, and end‑of‑life phases.

The Battery Passport standard is not intended to include all potentially relevant information for every downstream use case and also not focusing on the provisioning to non-Catena-X members.
Instead, it establishes the core semantic, structural, and architectural foundation on which further domain‑specific or proprietary data products can be built.
Data owners may add complementary information via additional aspect models all governed by Catena‑X‑compliant access and usage policies to ensure privacy, security, and data sovereignty.

This standard is harmonized with the IDTA standardization regarding the Battery Passport (see [Semantic Models](#3-semantic-models) section) and compliant with the DIN DKE SPEC 99100.

### 1.3 CONFORMANCE

> *This section is non-normative*

Sections marked as non-normative as well as all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

If a participant or application only implements only a selected number of use cases described in this standard, then conformity must only be demonstrated along conformity assessment criteria (CACs) that apply to the specific use case.

### 1.4 EXAMPLES

> *This section is non-normative*

This section provides examples for the different use cases of this standard:

(1) Provisioning of near-complete battery passport,
(2) component supplier integration, for example cells, housing, battery packs
(3) DPP-Service provider view: Complete exchange of DPPs to service provider, which provides it public

#### 1.4.1 Use Case (1): PROVIDING BATTERY DATA TO THE ECONOMIC OPERATOR

##### 1.4.1.1 RETRIEVAL OF NEW BATTERY INSTANCE TWINS

This example illustrates the [Bulk Load (2)](#bulk-load-2) approach for retrieving battery data from the data providers's Digital Twin Registry.

###### 1.4.1.1.1 SEARCH FOR BATTERY INSTANCE TWINS

This section describes how to search the Digital Twin Registry for battery instance twins using the [*SearchAllAssetAdministrationShellIdsByAssetLink*](https://industrialdigitaltwin.io/aas-specifications/IDTA-01002/v3.1/specification/interfaces.html#SearchAllAssetAdministrationShellIdsByAssetLink) operation.
This operation filters shells by their ``specificAssetIds`` as defined in [CX-0127](https://catenax-ev.github.io/docs/standards/CX-0127-IndustryCorePartInstance).

The data consumer must use the ``digitalTwinType`` specific asset ID to filter for instance-level twins only, and may additionally filter by ``manufacturerPartId`` to narrow results to a specific battery model.
To retrieve only twins created after a desired point in time, the data consumer may use the ``createdAfter`` query parameter.

> [!Note]
> The ``createdAfter`` parameter is available in the Tractus-X reference implementation of the Digital Twin Registry but not requested to be provided by solution providers in CX-0002 V2.3.0.
>
> With CX-0002 V2.4.0 a corresponding functionality will probably be included but may differ from the Tractus-X reference implementation. This depends on the released 2026-01 bundle including IDTA-01002 V3.2.

```
POST \{\{PRODUCER_DTR_DATA_PLANE_ENDPOINT\}\}/lookup/shells?createdAfter=2026-03-25T00:00:00Z
```

The ``createdAfter`` query parameter needs to be in RFC 3339 format.
The request body contains the ``specificAssetIds`` to filter by:

```json
{
  "assetIds": [
    {
      "name": "digitalTwinType",
      "value": "PartInstance"
    },
    {
      "name": "manufacturerPartId",
      "value": "BP-2025-MODEL-X"
    }
  ]
}
```

The response contains a list of matching AAS IDs:

```json
{
  "result": [
    "urn:uuid:a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "urn:uuid:b2c3d4e5-f6a7-8901-bcde-f12345678901"
  ],
  "paging_metadata": {
    "cursor": "..."
  }
}
```

###### 1.4.1.1.2 RETRIEVE SHELL DESCRIPTORS

This section describes how to retrieve the full shell descriptor including submodel endpoints using the [*GetAssetAdministrationShellDescriptorById*](https://industrialdigitaltwin.io/aas-specifications/IDTA-01002/v3.1/specification/interfaces.html#GetAssetAdministrationShellDescriptorById) operation.

The AAS ID must be Base64URL-encoded in the path:

```
GET \{\{PRODUCER_DTR_DATA_PLANE_ENDPOINT\}\}/shell-descriptors/dXJuOnV1aWQ6YTFiMmMzZDQtZTVmNi03ODkwLWFiY2QtZWYxMjM0NTY3ODkw
```

The response contains the complete AAS descriptor with all submodel descriptors and their endpoints:

```json
{
  "id": "urn:uuid:a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "idShort": "BatteryInstance_SN-12345",
  "specificAssetIds": [
    {
      "name": "manufacturerId",
      "value": "BPNL7588787849VQ"
    },
    {
      "name": "digitalTwinType",
      "value": "PartInstance"
    },
    {
      "name": "manufacturerPartId",
      "value": "BP-2025-MODEL-V1"
    },
    {
      "name": "partInstanceId",
      "value": "BIN-9876543210"
    },
    {
      "name": "customerPartId",
      "value": "CUST-BP-2025-X"
    }
    {
      "name": "externalSubjectId",
      "value": "urn:something15:fa05a0ff"
    }

  ],
  "submodelDescriptors": [
    {
      "id": "urn:uuid:11111111-2222-3333-4444-555555555555",
      "semanticId": {
        "type": "ExternalReference",
        "keys": [
          {
            "type": "GlobalReference",
            "value": "urn:samm:io.admin-shell.idta.batterypass.digital_nameplate:1.0.0#BatteryNameplate"
          }
        ]
      },
      "endpoints": [
        {
          "protocolInformation": {
            "href": "https://edc.data.plane/batteries/urn%3Auuid%3Aa1b2c3d4-e5f6-7890-abcd-ef1234567890/submodels/urn%3Auuid%3A11111111-2222-3333-4444-555555555555",
            "endpointProtocol": "HTTP",
            "endpointProtocolVersion": ["1.1"],
            "subprotocol": "DSP",
            "subprotocolBody": "id={{CONNECTOR_ASSET_ID}};dspEndpoint=https://edc.control.plane/",
            "subprotocolBodyEncoding": "plain"
          },
          "interface": "SUBMODEL-VALUE-3.1"
        }
      ]
    }
  ]
}
```

###### 1.4.1.1.3 RETRIEVE SUBMODEL DATA

This section describes how to retrieve the submodel data using the endpoint information provided by shell descriptor.

The ``subprotocolBody`` contains the data asset ID (``id``) and the data providers's control plane endpoint (``dspEndpoint``).
The data consumer must use this information to negotiate a contract for the data asset and then retrieves the data via the data plane.

If the endpoint ``interface`` is ``SUBMODEL-VALUE-3.1`` or ``SUBMODEL-VALUE-3.2``, the ``href`` can be called directly:

```
GET https://edc.data.plane/batteries/urn%3Auuid%3Aa1b2c3d4-e5f6-7890-abcd-ef1234567890/submodels/urn%3Auuid%3A11111111-2222-3333-4444-555555555555
```

If the endpoint ``interface`` is ``SUBMODEL-3.0`` or ``SUBMODEL-3.1`` or ``SUBMODEL-3.2``, the path suffix ``/$value`` must be appended:

```
GET https://edc.data.plane/batteries/urn%3Auuid%3Aa1b2c3d4-e5f6-7890-abcd-ef1234567890/submodels/urn%3Auuid%3A11111111-2222-3333-4444-555555555555/submodel/$value
```

### 1.5 TERMINOLOGY

> *This section is non-normative*

For the Catena-X specific terms listed in this standard please refer to the glossary: https://catenax-ev.github.io/glossary.

The following terms are especially relevant for the understanding of the standard:

**battery**
any device delivering electrical energy generated by direct conversion of chemical energy, having internal or external storage, and consisting of one or more non-rechargeable or rechargeable battery cells, modules or of packs of them, and includes a battery that has been subject to preparation for re-use, preparation for repurposing, repurposing or remanufacturing (see 3.1.1 in Battery Regulation in [6.2 NON-NORMATIVE REFERENCES](#62-non-normative-references))

**battery model**  
means a version of a battery all units of which share the same technical characteristics relevant for the requirements of this Regulation on sustainability, safety, labelling, marking and information, and the same model identifier (see 3.1.19 in Battery Regulation in [6.2 NON-NORMATIVE REFERENCES](#62-non-normative-references))

**economic operator (EO)**
means the manufacturer, the authorized representative, the importer, the distributor or the fulfillment service provider or any other natural or legal person who is subject to obligations in relation to the manufacture, preparation for re-use, preparation for repurposing, repurposing or remanufacturing of batteries, the making available or the placing of batteries on the market, including online, or the putting of batteries into service in accordance with this Regulation (see 3.1.22 in Battery Regulation in [6.2 NON-NORMATIVE REFERENCES](#62-non-normative-references))

**battery global identifier**
a unique string of characters for the identification of batteries that also enables a web link to the battery passport. For the regulatory battery passports this has to be compliant with ISO/IEC standards 15459-1:2014, 15459-2:2015, 15459-3:2014, 15459-4:2014, 15459-5:2014 and 15459-6:2014 or their equivalents.

## 2 RELEVANT PARTS OF THE STANDARD FOR SPECIFIC USE CASES

> *This section is normative*

### 2.1 Battery Passport

#### 2.1.1 DIGITAL TWINS AND SPECIFIC ASSET IDs

Basics about digital twins, which you should be familiar with to understand this section, are described in the Standard of Digital Twins (CX - 0002 Digital Twins in Catena-X).

#### 2.1.1.1 Use Case (1) DIGITAL TWINS AND SPECIFIC ASSET IDs

Specific asset IDs are used to identify digital twins when looking up or searching for these digital twins.
Use Case (1) relies on following specific asset IDs when registering a digital twin.

The data provider MUST provide digital twins on ``PartInstance`` level according to [CX-0127](https://catenax-ev.github.io/docs/standards/CX-0127-IndustryCorePartInstance) for all semantic models (as specified in [3 SEMANTIC MODELS](#models-per-use-case)).

| Key | Availability | Description | Type |
| ----- | -------------- | ------------- | ------ |
 | manufacturerId | MANDATORY | The Business Partner Number (BPNL) of the data provider. | BPNL |
| manufacturerPartId | MANDATORY | The ID of the type/catalog part from the data provider. | String |
| digitalTwinType | MANDATORY | The type of the digital twin. MUST be set to ``"PartInstance"`` for battery instance twins. | String |
| partInstanceId | MANDATORY | A REQUIRED unique identifier for each specific battery instance.  Any unique identifier aligend between data consumer and data provider can be used. | String |
| customerPartId | OPTIONAL | The ID of the type/catalog part from the data consumer. If known, it is RECOMMENDED to add this for easier lookup. | String |

Additionally the data provider SHOULD provide digital twins on ``PartType`` level according to [CX-0127](https://catenax-ev.github.io/docs/standards/CX-0127-IndustryCorePartInstance) for the models that are the same for all instances (as specified in [3 SEMANTIC MODELS](#models-per-use-case)).

| Key | Availability | Description | Type |
| ----- | -------------- | ------------- | ------ |
| manufacturerId | MANDATORY | The Business Partner Number (BPNL) of the data provider. | BPNL |
| manufacturerPartId | MANDATORY | The ID of the type/catalog part from the data provider. | String |
| digitalTwinType | MANDATORY | The type of the digital twin. MUST be set to ``"PartType"`` for battery type twins. | String |
| customerPartId | OPTIONAL | The ID of the type/catalog part from the data consumer. If known, it is RECOMMENDED to add this for easier lookup. | String |

#### 2.1.1.2 Use Case (3) DIGITAL TWINS AND SPECIFIC ASSET IDs

The Digital Twin **MUST** be described as a ``PartInstance`` when providing a complete Battery Passport (see [CX-0127](https://catenax-ev.github.io/docs/standards/CX-0127-IndustryCorePartInstance)).

### 2.2 POLICY CONSTRAINTS FOR DATA EXCHANGE

In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined.
As part of this data sovereignty framework, conventions for access policies, for usage policies and for the constraints contained in the policies have been specified in standard 'CX-0152 Policy Constraints for Data Exchange'.
This standard document CX-0152 **MUST** be followed when providing services or apps for data sharing/consuming and when sharing or consuming data in the Catena-X ecosystem.
What conventions are relevant for what roles named in [1.1 AUDIENCE & SCOPE](#11-audience--scope) is specified in the CX-0152 standard document as well.
CX-0152 can be found in the [standard library](https://catenax-ev.github.io/docs/standards/overview).

The following usage purpose **MUST** be registered for data exchange in the use case:

| UsagePurpose | Description^[^2]|
|--------------|-------------|
| cx.circular.dpp:1 | The Data Consumer may use the Data in accordance to those applicable public legal regulation directly requiring digital product passports or affecting the contents or handling of digital product passports."|

For the asset registration this can be done like in the following:

```json
{
  "leftOperand": "UsagePurpose",
  "operator": "isAnyOf",
  "rightOperand": [
    "cx.circular.dpp:1"
  ]
}
```

## 3 SEMANTIC MODELS

> *This section is normative*

The joint Catena-X - IDTA Battery Passport consists of the following 7 parts (``Batterypass Semantic Models: Submodel Template Specifications``):

- Digital Battery Passport - Part 1: Digital Nameplate (IDTA-02035-1)
- Digital Battery Passport - Part 2: Handover Documentation (IDTA-02035-2)
- Digital Battery Passport - Part 3: Carbon Footprint for Battery Passport  (IDTA-02035-3)
- Digital Battery Passport - Part 4: Technical Data (IDTA-02035-4)
- Digital Battery Passport - Part 5: Product Condition  (IDTA-02035-5)
- Digital Battery Passport - Part 6: Material Composition  (IDTA-02035-6)
- Digital Battery Passport - Part 7: Circularity  (IDTA-02035-7)

The Submodel Template (SMT) Specifications and Aspect Models are hosted by the IDTA Github repository "admin-shell-io".
Some models are either derived from existing models or reuse parts of other models.

For all models, version 1.0.0 or any later minor version or patch based on this major version MAY be used.

See DIN DKE SPEC 99100 for the information level of the different attributes.

### Application of the Data Models

This section explains how the data models listed above are to be used in the context of this standard.

- Attributes flagged as 'optional' in the data models can be treated as optional, unless they are required by DIN DKE SPEC 99100. Therefore, they can be left out (unless other individual agreements have been made).
- If the data provider chooses to provide optional data, this MUST NOT cause an error on data consumer side.
- Data provider and data consumer can agree to use reasonable default values for required attributes of the aspect model if these cannot be provided.

**For Use Case 1, the following additional rules apply:**

- The attribute ``UniqueFacilityIdentifier`` in Digital Battery Passport - Part 1: Digital Nameplate (IDTA-02035-1) MUST be filled with a valid BPNS.
- The attribute ``ManufacturerIdentifier`` in Digital Battery Passport - Part 1: Digital Nameplate (IDTA-02035-1) MUST be filled with a valid BPNL.

### Models per Use Case

#### Use Case (1)

In this use case all models except for Part 5: Product Condition (IDTA-02035-5) MUST be provided.
The data model Part 5: Product Condition (IDTA-02035-5) MAY be provided.

According to '[2.1.1.1 Use Case (1) DIGITAL TWINS AND SPECIFIC ASSET IDs](#2111-use-case-1-digital-twins-and-specific-asset-ids), all information will be provided on instance level. Models on type level represent data that is identical across multiple battery instances and can typically be reused across instances.

On Type Level:

- Digital Battery Passport - Part 2: Handover Documentation (IDTA-02035-2)
- Digital Battery Passport - Part 4: Technical Data (IDTA-02035-4)
- Digital Battery Passport - Part 6: Material Composition (IDTA-02035-6)
- Digital Battery Passport - Part 7: Circularity (IDTA-02035-7

On Instance Level:

- Digital Battery Passport - Part 1: Digital Nameplate (IDTA-02035-1)
- Digital Battery Passport - Part 3: Carbon Footprint for Battery Passport (IDTA-02035-3) - as soon as delegation act for PCF calculation for batteries is available
- Digital Battery Passport - Part 5: Product Condition (IDTA-02035-5) - OPTIONAL

> [!Note]
> Although the semantic models are identical, the data itself cannot be used as a copy by the economic operator (EO): this is just input data that the EO needs to compose the complete battery passport
>
>- a) update with their own information (example: white labelling)
>- b) add information that cannot be provided by the supplier (example: operatorID)
>- c) add or update dynamic data (Product Condition IDTA-02035-5)
>
> and
>
>- d) add other missing or incomplete data points
>- e) re-calculate or extending Carbon Footprint data: depending on the calculation method additional values need to be considered, for example data related to logistics
>- f) add and update instance related documents in Handover Documentation (example: information on accidents)

#### Use Case (2)

To be added in a later version of this standard.

#### Use Case (3)

To provide or consume data of the complete Battery Passport (e.g. as economic operator) data of all seven aspect models **MUST** be provided.

> [!Note]
> providing data of the complete Battery Passport via Digital Twins is not identical to providing the battery passport conformant to CEN CENELEC prEN:18222 and prEN:18223.

These models MUST be provided on Item/Instance Level:

- Digital Battery Passport - Part 1: Digital Nameplate (IDTA-02035-1)
- Digital Battery Passport - Part 2: Handover Documentation (IDTA-02035-2)
- Digital Battery Passport - Part 3: Carbon Footprint for Battery Passport  (IDTA-02035-3)
- Digital Battery Passport - Part 4: Technical Data (IDTA-02035-4)
- Digital Battery Passport - Part 5: Product Condition  (IDTA-02035-5)
- Digital Battery Passport - Part 6: Material Composition  (IDTA-02035-6)
- Digital Battery Passport - Part 7: Circularity  (IDTA-02035-7)

Additionally, these models SHOULD be provided on Model/Type Level to reduce access to instance digital twins:

- Digital Battery Passport - Part 2: Handover Documentation (IDTA-02035-2)
- Digital Battery Passport - Part 4: Technical Data (IDTA-02035-4)
- Digital Battery Passport - Part 6: Material Composition  (IDTA-02035-6)
- Digital Battery Passport - Part 7: Circularity  (IDTA-02035-7)

This is, the data on Model Level can be shared across all Instance Level Twins. The data MUST not differ at Model and Item Level.

### 3.1 GENERAL

For every semantic model the following normative specification artifacts are available:

- the Submodel Template specification as .pdf, given textual explanation of the semantic model including context,
a reference to the relevant section in DIN DKE SPEC 99100 per data point etc.
- the machine readable .aasx file, the Submodel Template itself
- the machine readable .ttl file(s), the Aspect Model

Different formats may be generated through the turtle file (*.ttl-file) and the SAMM CLI tool.

> [!Note]
> Not all Aspect Models in Catena-X are used as semantic definition in Submodel Template Specifications.
> In this case the .aasx file was generated directly from the .ttl file.

### 3.1.1 LICENSE

If not explicitly mentioned otherwise all Semantic Models are made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons[^1].

### 3.1.2 Machine readable specification Artifacts and derived Artifacts

#### 3.1.2.1 AASX

The normative aasx file representing the Submodel Template.

It can be found on [SMT github repository](https://github.com/admin-shell-io/submodel-templates).

The open source command line tool of the Eclipse Semantic Modelling Framework is used for generation of other file formats like JSON Schema or HTML documentation.

The aspect models are written in SAMM  as a modeling language conformant to *CX-0003 SAMM Semantic Aspect Meta Model* as input for the semantic driven workflow.
Version 2.2.0 of SAMM is used if not mentioned explicitly otherwise.

This format is required in Catena-X by CX-0003 and CX-0002.

#### 3.1.2.2 RDF TURTLE

The normative rdf turtle file representing the Aspect Model.
It can be found on [Aspect Model github repository](https://github.com/admin-shell-io/smt-semantic-models).

#### 3.1.2.3 JSON Payload

An exemplary json-payload file for the Value-Only format of the Asset Administration Shell is generated from the RDF turtle file.
It can be found in the current version in the "gen" subfolder on the [Aspect Model github repository](https://github.com/admin-shell-io/smt-semantic-models).

#### 3.1.2.4 JSON SCHEMA

A JSON Schema for the Value-Only format of the Asset Administration Shell is generated from the RDF Turtle file.
It can be found in the current version in the "gen" subfolder on the [Aspect Model github repository](https://github.com/admin-shell-io/smt-semantic-models).

### 3.2 SEMANTIC MODEL "DIGITAL NAMEPLATE"

#### 3.2.1 INTRODUCTION

The "Digital Nameplate" provides identification for the digital product passport itself, the economic operator of the battery and battery manufacturer information.

The model is for assets on Instance level.

#### 3.2.2 SPECIFICATION ARTIFACTS

- [Battery Nameplate IDTA-02035-1 (v1.0.0) - Submodel Template Specification (.pdf)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/1_Digital%20Nameplate/1/0/IDTA%2002035-1_DBP-Part-1_Digital%20Nameplate.pdf)
- [Battery Nameplate IDTA-02035-1 (v1.0.0) - Submodel Template (.aasx)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/1_Digital%20Nameplate/1/0/IDTA%2002035-1_DBP-Part-1_Digital%20Nameplate.aasx)
- [Battery Nameplate IDTA-02035-1 (v1.0.0) - Aspect Model (.ttl)](https://github.com/admin-shell-io/smt-semantic-models/blob/main/io.admin-shell.idta.batterypass.digital_nameplate/1.0.0/BatteryNameplate.ttl)

#### 3.2.3 IDENTIFIER OF SEMANTIC MODEL

The aspect model "Digital Nameplate Battery" has the unique identifier

```text
urn:samm:io.admin-shell.idta.batterypass.digital_nameplate:1.0.0#BatteryNameplate
```

This identifier MUST be added as semantic ID for the corresponding Battery Instance Twin.

Additionally, the following supplemental Semantic IDs MUST be added to the corresponding Battery Instance Twin:

```text
https://admin-shell.io/idta/nameplate/3/0/Nameplate
urn:samm:io.admin-shell.idta.digital_nameplate:3.0.0
```

### 3.3 ASPECT MODEL "HANDOVER DOCUMENTATION"

#### 3.3.1 INTRODUCTION

The "Handover Documentation" is used to provide relevant documentation necessary for the Battery Passport.
Typically, documentation is provided on type/model level.

However, for Battery Passport there are also documents contained that are direclty related to the Instance.

#### 3.3.2 SPECIFICATION ARTIFACTS

- [Handover Documentation IDTA-02035-2 (v1.0.0) - Submodel Template Specification (.pdf)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/2_Handover%20Documentation/1/0/IDTA%2002035-2_DBP-Part-2_HandoverDocumentation.pdf)
- [Handover Documentation IDTA-02035-2 (v1.0.0) - Submodel Template (.aasx)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/2_Handover%20Documentation/1/0/IDTA%2002035-2_DBP-Part-2_HandoverDocumentation.aasx)
- [Handover Documentation IDTA-02035-2 (v1.0.0) - Aspect Model (.ttl)](https://github.com/admin-shell-io/smt-semantic-models/blob/main/io.admin-shell.idta.batterypass.handover_documentation/1.0.0/HandoverDocumentation.ttl)

#### 3.3.3 IDENTIFIER OF SEMANTIC MODEL

The semantic model "Handover Documentation" has the unique identifier.

```text
urn:samm:io.admin-shell.idta.batterypass.handover_documentation:1.0.0#HandoverDocumentation
```

Data providers MUST use this identifier to clearly define the semantics of the data they are transferring.

### 3.4 ASPECT MODEL "CARBON FOOTPRINT FOR BATTERY PASSPORT"

#### 3.4.1 INTRODUCTION

The "Carbon Footprint for Battery Passport" submodel template is a subset of the submodel template "Product Carbon Footprint 1.0 (IDTA-02023)".
It is used to declare in terms of kg of carbon dioxide equivalent per one kWh of the total energy provided by the battery over its expected service life.

This model can be provided for Type, Batch or Instance level.

For batteries this model is for assets of the same Type but produced at the same facility.

#### 3.4.2 SPECIFICATION ARTIFACTS

- [Carbon Footprint for Battery Passport IDTA-02035-3 (v1.0.0) - Submodel Template Specification (.pdf)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/3_Product%20Carbon%20Footprint/1/0/IDTA%2002035-3_DBP-Part-3_ProductCarbonFootprint.pdf)
- [Carbon Footprint for Battery Passport IDTA-02035-3 (v1.0.0) - Submodel Template (.aasx)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/3_Product%20Carbon%20Footprint/1/0/IDTA%2002035-3_DBP-Part-3_ProductCarbonFootprint.aasx)
- [Carbon Footprint for Battery Passport IDTA-02035-3 (v1.0.0) - Aspect Model (.ttl)](https://github.com/admin-shell-io/smt-semantic-models/blob/main/io.admin-shell.idta.batterypass.carbon_footprint/1.0.0/CarbonFootprintBattery.ttl)

#### 3.4.3 IDENTIFIER OF SEMANTIC MODEL

The semantic model "Carbon Footprint for Battery Passport" has the unique identifier.

```text
urn:samm:io.admin-shell.idta.batterypass.carbon_footprint:1.0.0#CarbonFootprintBattery
```

Data providers MUST use this identifier to clearly define the semantics of the data they are transferring.

### 3.5 ASPECT MODEL "TECHNICAL DATA"

#### 3.5.1 INTRODUCTION

The "Technical Data" submodel is used to provide all static (model) technical based data attributes of a battery as declared in the DIN DKE SPEC 99100:2025-02, except the carbon footprint, materials and circularity information as those are described in their own submodels.

Typically, this model is on Type level.

#### 3.5.2 SPECIFICATION ARTIFACTS

- [Technical Data IDTA-02035-4 (v1.0.0) - Submodel Template Specification (.pdf)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/4_Technical%20Data/1/0/IDTA%2002035-4_DBP-Part-4_TechnicalData.pdf)
- [Technical Data IDTA-02035-4 (v1.0.0) - Submodel Template (.aasx)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/4_Technical%20Data/1/0/IDTA%2002035-4_DBP-Part-4_TechnicalData.aasx)
- [Technical Data IDTA-02035-4 (v1.0.0) - Aspect Model (.ttl)](https://github.com/admin-shell-io/smt-semantic-models/blob/main/io.admin-shell.idta.batterypass.technical_data/1.0.0/TechnicalData.ttl)

#### 3.5.3 IDENTIFIER OF SEMANTIC MODEL

The semantic model "Technical Data" has the unique identifier.

```text
urn:samm:io.admin-shell.idta.batterypass.technical_data:1.0.0#TechnicalData
```

Data providers MUST use this identifier to clearly define the semantics of the data they are transferring.

### 3.6 ASPECT MODEL "PRODUCT CONDITION"

#### 3.6.1 INTRODUCTION

The "Product Condition" submodel is used to for all dynamic item attributes as specified in the DIN DKE SPEC 99100:2025-02. Every dynamic attribute includes the value itself and the time of the latest update.

This model is on Instance level.

#### 3.6.2 SPECIFICATION ARTIFACTS

- [Product Condition IDTA-02035-5 (v1.0.0) - Submodel Template Specification (.pdf)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/5_Product%20Condition/1/0/IDTA%2002035-5_DBP-Part-5_ProductCondition.pdf)
- [Product Condition IDTA-02035-5 (v1.0.0) - Submodel Template (.aasx)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/5_Product%20Condition/1/0/IDTA%2002035-5_DBP-Part-5_ProductCondition.aasx)
- [Product Condition IDTA-02035-5 (v1.0.0) - Aspect Model (.ttl)](https://github.com/admin-shell-io/smt-semantic-models/blob/main/io.admin-shell.idta.batterypass.product_condition/1.0.0/ProductCondition.ttl)

#### 3.6.3 IDENTIFIER OF SEMANTIC MODEL

The semantic model "Product Condition" has the unique identifier.

```text
urn:samm:io.admin-shell.idta.batterypass.product_condition:1.0.0#ProductCondition
```

Data providers MUST use this identifier to clearly define the semantics of the data they are transferring.

### 3.7 ASPECT MODEL "MATERIAL COMPOSITION"

#### 3.7.1 INTRODUCTION

The "Material Composition" submodel is used to provide information of the material composition of the battery including harzardous substances based on DIN DKE SPEC 99100:2025-02.

Typically, this model is on Type level.

#### 3.7.2 SPECIFICATION ARTIFACTS

- [Material Composition IDTA-02035-6 (v1.0.0) - Submodel Template Specification (.pdf)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/6_Material%20Composition/1/0/IDTA%2002035-6_DBP-Part-6_MaterialComposition.pdf)
- [Material Composition IDTA-02035-6 (v1.0.0) - Submodel Template (.aasx)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/6_Material%20Composition/1/0/IDTA%2002035-6_DBP-Part-6_MaterialComposition.aasx)
- [Material Composition IDTA-02035-6 (v1.0.0) - Aspect Model (.ttl)](https://github.com/admin-shell-io/smt-semantic-models/blob/main/io.admin-shell.idta.batterypass.material_composition/1.0.0/MaterialComposition.ttl)

#### 3.7.3 IDENTIFIER OF SEMANTIC MODEL

The semantic model "Material Composition" has the unique identifier.

```text
urn:samm:io.admin-shell.idta.batterypass.material_composition:1.0.0#MaterialComposition
```

Data providers MUST use this identifier to clearly define the semantics of the data they are transferring.

### 3.8 ASPECT MODEL "CIRCULARITY"

#### 3.8.1 INTRODUCTION

The "Circularity" submodel is used to provide all circularity-based information based on the DIN DKE SPEC 99100.

Typically ,this model is on Type level

#### 3.8.2 SPECIFICATION ARTIFACTS

- [Circularity IDTA-02035-7 (v1.0.0) - Submodel Template Specification (.pdf)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/7_Circularity/1/0/IDTA%2002035-7_DBP-Part-7_Circularity.pdf)
- [Circularity IDTA-02035-7 (v1.0.0) - Submodel Template (.aasx)](https://github.com/admin-shell-io/submodel-templates/blob/main/published/Digital%20Battery%20Passport/7_Circularity/1/0/IDTA%2002035-7_DBP-Part-7_Circularity.aasx)
- [Circularity IDTA-02035-7 (v1.0.0) - Aspect Model (.ttl)](https://github.com/admin-shell-io/smt-semantic-models/blob/main/io.admin-shell.idta.batterypass.circularity/1.0.0/Circularity.ttl)

#### 3.8.3 IDENTIFIER OF SEMANTIC MODEL

The semantic model "Circularity" has the unique identifier.

```text
urn:samm:io.admin-shell.idta.batterypass.circularity:1.0.0#Circularity
```

Data providers MUST use this identifier to clearly define the semantics of the data they are transferring.

## 4 APPLICATION PROGRAMMING INTERFACES

> *This section is normative*

### 4.1 APIs ASSOCIATED WITH DIGITAL TWINS

This standard completely and solely builds upon the standard [CX-0002](https://catenax-ev.github.io/docs/next/standards/CX-0002-DigitalTwinsInCatenaX) Digital Twins in Catena-X.

#### DATA ASSET STRUCTURE

The Data Assets need to be registered in the data space connector.

A Data Provider may create one Data Asset per Submodel or bundle them into one - yielding a smaller catalogue hence better performance.
An example is given in the following for the case that a data asset is created for every single submodel. For more examples see the [Digital Twin KIT](https://eclipse-tractusx.github.io/docs-kits/category/digital-twin-kit).

> [!Note]
> Expressions in double curly braces \{\{\}\} must be substituted with a corresponding value.

```json
{
   "@context": {
      "dct": "http://purl.org/dc/terms/",
      "cx-taxo": "https://w3id.org/catenax/taxonomy#",
      "cx-common": "https://w3id.org/catenax/ontology/common#"
   },
   "@type": "Asset", 
   "@id": "{{CONNECTOR_ASSET_ID}}",
   "properties": {
      "dct:type": {"@id": "cx-taxo:BatteryPass"},
      "cx-common:version": "1.0",
      "aas-semantics:semanticId": {"@id":  "{{SEMANTIC_ID_OF_SUBMODEL}}"}   
   },
   "dataAddress": {
      "@type": "DataAddress",
      "type": "HttpData",
      "baseUrl": "{{ SUBMODEL_ENDPOINT }}",
      "proxyQueryParams": "false",
      "proxyBody": "false",
      "proxyPath": "true",
      "proxyMethod": "false"
   }
}
```

The data asset MUST contain the following properties with the corresponding values from the table above:

- ``dct:type`` for type (as @id reference), see also CX-0018
- ``cx-common:version`` for version, see also CX-0018

### 4.2 NOTIFICATIONS

This standard completely and solely builds upon the standard [CX-0151](https://catenax-ev.github.io/docs/standards/CX-0151-IndustryCoreBasics) Industry Core: Basics.

This API can optionally be used by Use Case (1).

#### NOTIFICATION PAYLOAD

The notification request MUST contain a payload conformant to the [Catena-X Digital Twin Event Notification API Specification](https://catenax-ev.github.io/assets/files/example-digital-twin-event-api-000889369be1066b0612dd2ed5499b58.yaml) as standardized by CX-0151. It is used for the model itself not the entire battery.

The following example shows a notification payload for this scenario:

```json
{
  "header": {
    "messageId": "urn:uuid:51BBbF0d-3784-1FBb-67Cf-fd3e5aeFa06b",
    "context": "IndustryCore-DigitalTwinEvent-SubmodelUpdate:3.0.0",
    "sentDateTime": "2026-03-26T10:00:00+00:00",
    "senderBpn": "BPNL000000000001",
    "receiverBpn": "BPNL000000000002",
    "expectedResponseBy": "2026-03-27T10:00:00+00:00",
    "relatedMessageId": "urn:uuid:b8eDBc8f-Ac4e-aFc6-2A1f-Cb61c5ea1fa7",
    "version": "3.0.0"
  },
  "content": {
    "listOfEvents": [
      {
        "eventType": "CreateSubmodel",
        "catenaXId": "urn:uuid:d32d3b55-d222-41e9-8d19-554af53124dd",
        "submodelSemanticId": "urn:samm:io.admin-shell.idta.batterypass.digital_nameplate:1.0.0#BatteryNameplate"
      }
    ]
  }
}
```

## 5 PROCESSES

> *This section is normative*

### 5.1 Use Case (1): PROVIDING BATTERY DATA TO THE ECONOMIC OPERATOR

This chapter describes how a data provider exchanges initial battery pass information with a data consumer to enable the data consumer to provide the battery passport.

#### 5.1.1 ACTORS AND ROLES

- Data provider: Typcically the company, that manufactures the battery (i.e. the battery producer).
- Data consumer: the company using batteries of a producer (e.g. an OEM).
  A data consumer is typically the economic operator in the context of use case 1.

#### 5.1.2 PROCESS REPRESENTATION

This process is intended to be used in situations where the data provider manufactures the battery, but the battery passport will be published by the data consumer.
This can happen depending on the contractual situation and depending on who is the economic operator of the battery and who is putting it onto the EU market.

##### OVERVIEW

The data consumer is responsible for providing battery passport information (e.g. as an economic operator).
To compose a complete battery passport, the data consumer combines data points from its own systems with data retrieved from the data provider.
The data provider provides the battery-specific information that originates from the manufacturing process, while the data consumer enriches this with additional data points such as operator-specific information, dynamic product condition data, or carbon footprint recalculations.

Use case (1) focuses on the data exchange between data provider and data consumer within the Catena-X dataspace.

The provision of the battery passport to external stakeholders is not in the scope of this use case.
Likewise, the provision of the battery passport to end-users is not within the scope of this use case.

##### DATA PROVIDER'S RESPONSIBILITIES

The data provider MUST create the assets and digital twins as described in chapters [2.1.1 DIGITAL TWINS AND SPECIFIC ASSET IDs](#211-digital-twins-and-specific-asset-ids) and [4 APPLICATION PROGRAMMING INTERFACES](#4-application-programming-interfaces) in order to provide battery passport information to the data consumer.
The aspect models for each battery MUST be created in accordance with [chapter 3](#3-semantic-models).

The data provider SHOULD make the digital twins available to the data consumer in a timely manner after production of the battery.
The data provider and data consumer MAY agree on any other point in time.

##### DATA CONSUMER'S RESPONSIBILITIES

The data consumer MUST use the Application Programming Interfaces as described in [chapter 4](#4-application-programming-interfaces) to retrieve battery passport information from the data provider.

The data consumer can create the assets and digital twins as described in chapters [2.1.1 DIGITAL TWINS AND SPECIFIC ASSET IDs](#211-digital-twins-and-specific-asset-ids) and [4 APPLICATION PROGRAMMING INTERFACES](#4-application-programming-interfaces) to provide the battery passport to other participants within the Catena-X dataspace.

The data consumer needs to provide the battery passport to external stakeholders as required by regulation.

#### 5.1.3 REQUESTING BATTERY PASSPORT DATA

The data consumer needs to request the battery pass data from the data provider in order to create, enrich and store the complete and correct battery pass.
This can be done for a single battery, in a bulk load process for multiple batteries, or after the data provider has informed the data consumer with a notification that new data is available.

The data provider provides initial battery information on model-level (``PartType``) as well as on item-level (``PartInstance``).
The extent of data provided by the data provider depends on the contractual situation between data provider and data consumer and therefore needs to be defined individually.

The data consumer retrieves the initial battery information from the data provider using an unique identifier or a set of specific Asset IDs, that has been agreed between the parties involved.
Data provider and data consumer need to agree on a way to exchange the global identifier information beforehand, for example as part of ordering or logistic processes.

##### INVOLVED SYSTEMS

The following systems are involved in the battery passport initialization process:

- **Digital Twin Registry:**
  A CX-0002 conformant Digital Twin Registry operated by the data provider, which stores and provides digital twin descriptors for each battery instance.

##### Single Entity (1)

This process requests the data of a single battery from the data provider.
It is mandatory and must be implemented, as it offers basic functionality.
This process can be used to request the battery passport data on demand, for example when the data consumer has taken delivery of a battery and wants to receive the data in order to create the final battery passport.

The data provider MUST offer functionality that can be used to request the data of one specific battery following the standards Digital Twins in Catena-X (CX-0002) as well as SAMM Aspect Meta Model (CX-0003).
The data consumer SHOULD store the requested data in a way that no subsequent data fetching from the data provider is necessary.
The data provider SHOULD store the data for several months unless otherwise agreed.
The data provider is not responsible for providing any updates to the dynamic data (data model Product Condition, IDTA-02035-5).

##### Bulk Load (2)

This process requests the data of multiple batteries from the data provider.
This process is optional.
This process can be used to bulk load the data of newly produced batteries, for example.

The data consumer queries the data provider's Digital Twin Registry for newly available battery instance twins on a periodic or arbitrary basis.

The data consumer MUST use the ``digitalTwinType`` specific asset ID to filter for instance-level twins, and MAY additionally filter by ``manufacturerPartId`` to narrow results to a specific battery model (see [2.1.1.1 Use Case (1) and (2) DIGITAL TWINS AND SPECIFIC ASSET IDs](#2111-use-case-1-digital-twins-and-specific-asset-ids)).
The data consumer MAY use the ``createdAfter`` query parameter to retrieve only twins created since the last retrival.
The data provider SHOULD provide the functionality to query battery information based on the time of creation of the digital twin using keyword ``createdAfter``.

The process consists of three steps:

- Search for Battery Instance Twins:
  The data consumer searches the data provider's Digital Twin Registry for battery instance twins using the ``specificAssetIds``.
  The response contains a list of matching AAS IDs.
- Retrieve Shell Descriptors:
  For each AAS ID returned, the data consumer retrieves the full shell descriptor including submodel endpoints.
  The response contains the complete AAS descriptor with all submodel descriptors and their endpoints.
- Retrieve Submodel Data:
  For each submodel descriptor in the shell descriptor, the data consumer performs the retrieval and creation process as described in [1.4.1.1 RETRIEVAL OF NEW BATTERY INSTANCE TWINS](#1411-retrieval-of-new-battery-instance-twins).
  The data consumer repeats this step for all submodel descriptors of each battery instance twin.

This approach allows the data consumer to proactively collect battery passport information.

This approach uses the standard Digital Twins in Catena-X (CX-0002) for querying the Digital Twin Registry.

> [!Note]
> The ``createdAfter`` query parameter is not yet part of the AAS specification or CX-0002. It is a proposed extension (see [eclipse-tractusx/sldt-digital-twin-registry#466](https://github.com/eclipse-tractusx/sldt-digital-twin-registry/issues/466)).

The data consumer SHOULD implement the bulk load approach.

##### Notifications (3)

This process can be used by the data provider to inform the data consumer that new data is available.
Afterwards, the data consumer can request the data using the single entity process.

The data provider's Digital Twin Registry sends a notification about a newly created submodel for a battery passport to the data consumer.
Upon receiving the notification, the data consumer performs the retrieval and creation process as described in [1.4.1.1 RETRIEVAL OF NEW BATTERY INSTANCE TWINS](#1411-retrieval-of-new-battery-instance-twins).

This approach enables near-real-time synchronization of battery passport information between data provider and data consumer.

This approach uses the Catena-X traceability standard (CX-0125) for exchanging notifications between data provider and data consumer.
The data provider MUST emit events for eventType 'CreateSubmodel'.
The data provider MUST emit events for submodelSemanticId 'urn:samm:io.admin-shell.idta.batterypass.digital_nameplate:1.0.0#BatteryNameplate'.

The data provider MAY implement notifications.
The data consumer MAY implement notifications.

#### 5.2 Use Case (2): PROVIDING BATTERY RELEVANT COMPONENT DATA TO THE ECONOMIC OPERATOR

To be added in a later version of this standard.

#### 5.3 Use Case (3): Bridging Catena-X DPP to EU DPP System

Use case 1 and 2 describes how battery pass relevant data can be collaboratively collected via an B2B data exchange among Catena-X participants in the upstream battery value chain.
However, for making a Catena-X DPP available at the EU DPP System a couple of technical requirements have to be fulfilled that are described in the JTC24 standards from CEN/CENELEC.
Most importantly the EU DPP System requires public access to DPP data free of charge which is not possible in the Catena-X dataspace setup as only onboarded participants can access the data.
Hence the Catena-X DPP data have to be bridged via an intermediate proxy to ensure EU DPP system compliant DPP data management.
This includes the data reception including data updates via the Catena-X ecosystem and synchronized representation of the DPP in the EU DPP Systems that includes registration of the DPP at the EU DPP registry, providing a lifecycle API for stakeholder access, providing a stable resolver end-point, ensuring role-based access control on restricted data, provide free of charge access to public DPP data via a data carrier, managing a backup of the DPP data and ensuring system neutral transfer of DPP data based on a generic DPP meta model in the case the economic operator changes after a status change of the battery.

##### 5.3.1 ACTORS AND ROLES

This use case can be performed by following actors:

- Catena-X onboarded Economic operator operating a connected EU DPP system facing DPP management system outside Catena-X  
- DPP Service provider with Catena-X certified business application for DPP data management and a connected EU DPP system facing DPP management system outside of Catena-X that acts on behalf of an economic operator

##### 5.3.2 PROCESS REPRESENTATION

The economic operator for considered batteries must finalize the collection of battery passport data both on model and item level on its back-end system via use case 1 or 2.
When the battery passport shall be issued and made public available on the EU DPP system, the battery passport data must be transferred from the economic operator backend system to the end-point representing the EU DPP system facing DPP management system.
For the purpose of issuing an EU compliant battery passport the economic operator must provide all mandatory battery passport data.
A not complete battery pass data set must be rejected from publishing, as it won't be compliant with the EUBR.

## 6 REFERENCES

### 6.1 NORMATIVE REFERENCES

> *This section is normative*

- CX-0002 Digital Twins in Catena-X v2.4.0
- CX-0018 Dataspace Connectivity v4.2
- CX-0125 Traceability Use Case v2.0.0
- CX-0126 Industry Core: PartType 2.1.1
- CX-0127 Industry Core: Part Instance 2.0.2
- CX-0151 Industry Core: Basics v1.0.0
- CX-0152 Policy Constraints for Data Exchange v1.0.0

### 6.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

- [DIN DKE SPEC 99100:2025-02](https://www.dinmedia.de/en/technical-rule/din-dke-spec-99100/385692321)
- [Batterypass Semantic Models: Aspect Models](https://github.com/admin-shell-io/smt-semantic-models/releases/tag/V1.0.2)
- [Batterypass Semantic Models: Submodel Template Specifications](https://github.com/admin-shell-io/submodel-templates/tree/main/published/Digital%20Battery%20Passport)
- [Digital Battery Passport: Use Case Guideline of the Asset Administraion Shell](https://industrialdigitaltwin.org/wp-content/uploads/2026/02/IDTA_Catena-X_Guideline_Digital_Battery_Passport.pdf), Guideline, Feb. 2026.
- [prEN / DIN EN 18216:2025: Digital product passport - Data exchange protocols](https://www.dinmedia.de/en/draft-standard/din-en-18216/392776785)
- [prEN / DIN EN 18219:2025: Digital product passport - Unique identifiers](https://www.dinmedia.de/en/draft-standard/din-en-18219/393363647)
- [prEN / DIN EN 18220:2025: Digital product passport - Data Carriers](https://www.dinmedia.de/en/draft-standard/din-en-18220/393364024)
- [prEN / DIN EN 18221:2025: Digital product passport - Data storage, archiving, and data persistence](https://www.dinmedia.de/en/draft-standard/din-en-18221/393616128)
- [prEN / DIN EN 18222:2025: Digital Product Passport - Application Programming Interfaces (APIs) for the product passport lifecycle management and searchability](https://www.dinmedia.de/en/draft-standard/din-en-18222/393321021)
- [prEN / DIN EN 18223:2025: Digital Product Passport - System interoperability](https://www.dinmedia.de/en/draft-standard/din-en-18223/393340794)
- [prEN / DIN EN 18239:2025: Digital Product Passport - Access rights management, information system security, and business confidentiality](https://www.dinmedia.de/en/draft-standard/din-en-18239/393949301)
- [prEN / DIN EN 18246:2025: Digital product passport - Data authentication, reliability and integrity](https://www.dinmedia.de/en/draft-standard/din-en-18246/394416240)
- [Regulation (EU) 2023/1542 of the European Parliament and of the Council of 12 July 2023 concerning batteries and waste batteries, amending Directive 2008/98/EC and Regulation (EU) 2019/1020 and repealing Directive 2006/66/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1542) - referenced as "Battery Regulation".
- [Regulation (EU) 2024/1781 of the European Parliament and of the Council of 13 June 2024 establishing a framework for the setting of ecodesign requirements for sustainable products, amending Directive (EU) 2020/1828 and Regulation (EU) 2023/1542 and repealing Directive 2009/125/EC (Text with EEA relevance)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02024R1781-20240628) - referenced as "Ecodesign for Sustainable Products Regulation" or "ESPR".

[^1]: https://creativecommons.org/licenses/by/4.0/legalcode
[^2]: https://catenax-ev.github.io/assets/files/usage-purpose-constraint-schema-56ab9c8ad53b359c3ba8f5821be3b427.json

### 6.3 REFERENCE IMPLEMENTATIONS

There is currently no actively maintained reference application.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
