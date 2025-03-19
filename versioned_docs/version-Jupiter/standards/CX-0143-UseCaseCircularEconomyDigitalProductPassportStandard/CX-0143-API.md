---
sidebar_position: 4
---

# 3. Application Programming Interfaces

> *This section is normantive*

## 3.1 EDC DATA ASSET STRUCTURE

The general asset structure **MUST** follow the [CX-0018](#211-list-of-standalone-standards).
Examples are in the official [Connector Kit](https://eclipse-tractusx.github.io/docs-kits/kits/Connector%20Kit/Adoption%20View/connector_kit_adoption_view).
The following subchapters define the specifics for this standard.

### 3.1.1 EDC Data Asset

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

### 3.1.2 EDC Policy Structure

A participant mentioned under [1.1](#11-audience--scope) **MUST** sign the overall
[Catena-X Terms and Condition](https://catenax-ev.github.io/docs/regulatory-framework/governance-framework) as well as the sustainability agreement
[circular economy framework agreement](https://catenax-ev.github.io/docs/regulatory-framework/20000ft/use-case-ce).

 Have a look at example policies [here](https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/example_usage_policy.json). A guideline for different use cases profiles has been provided [here](https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/profile.md)

#### 3.1.2.1 Conventions for Use Case Policy in context data exchange

In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined. A set of specific policies on data offering and data usage level detail the conditions under which data may be accessed, shared, and used, ensuring compliance with legal standards.

For a comprehensive understanding of the rights, restrictions, and obligations associated with data usage in the Catena-X ecosystem, we refer users to:

- the detailed [ODRL policy repository](https://github.com/catenax-eV/cx-odrl-profile). This document provides in-depth explanations of the terms and conditions applied to data access and utilization, ensuring that all engagement with our data is conducted responsibly and in accordance with established guidelines.
- the ODRL schema template. This defines how policies used for data sharing/usage should get defined. Those schemas **MUST** be followed when providing services or apps for data sharing/consuming.
  
#### 3.1.2.2 Additional Details regarding Access Policies

A Data Provider may tie certain access authorizations ("Access Policies") to its data offers for members of Catena-X  and one or several Data Consumers. By limiting access to certain Participants, Data Provider maintains control over its anti-trust obligations when sharing certain data. In particular, Data Provider may apply Access Policies to restrict access to a particular data offer for only one Participant identified by a specific business partner number:

- Membership
- BPNL

#### 3.1.2.3 Additional Details regarding Usage Policies

In the context of data usage policies (“Usage Policies”), Participants and related services **MUST** use the following policy rules:

- Use Case Framework (“FrameworkAgreement”), for the Digital Product Pass **MUST** be the latest circular economy framework agreement contraint provided in the profiles [here](https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/profile.md#frameworkagreement).
- for the Digital Product Passport, Battery Passport and other passports the latest (“UsagePurpose”) for circular economy "dpp" **MUST** be used. It is defined [here](https://github.com/catenax-eV/cx-odrl-profile/blob/c96b426ded7922f44bdc33bfc5e0bf754031b5e8/profile.md#usagepurpose) in the latest policy profile contraints.

Additionally, respective usage policies **MAY** include the following policy rule:

- Reference Contract (“ContractReference”).

Details on  namespaces and ODLR policy rule values to be used for the above-mentioned types are provided via the [ODRL policy repository](https://github.com/catenax-eV/cx-odrl-profile).

#### 3.1.3 Contract Definition

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

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
