---
sidebar_position: 4
---

# 3. Application Programming Interfaces

:::warning

The following standards was identified as not fully **backward compatibility with CX-Jupiter**  and was allowed to apply the required changes through a **fast-track process** to be included in the CX-Saturn release.
These exceptions will be released together with the  *CX-Saturn Go-Live** of all other standards on **25.11**.

**Therefore, this version of the standard is not eligible for certification yet**

:::

> *This section is normative*

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
    "dct": "http://purl.org/dc/terms/"
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

### 3.1.2 Policy Constraints For Data Exchange

In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined.  

A participant **MUST** agree to the overall
[Catena-X Terms and Condition](https://catenax-ev.github.io/docs/regulatory-framework/governance-framework) as well as to the general FrameworkAgreement
[Data Exchange Governance](https://catenax-ev.github.io/docs/regulatory-framework/20000ft/data-exchange-governance).

As part of this data sovereignty framework, furthermore, conventions for access policies, for usage policies and for the constraints contained in the policies have been specified in standard 'CX-0152 Policy Constraints for Data Exchange'. This standard document CX-0152 **MUST** be followed when providing services or apps for data sharing/consuming and when sharing or consuming data in the Catena-X ecosystem. What conventions are relevant for what roles is specified in the CX-0152 standard document as well.

For the Digital Product Passport, Battery Passport and other passports the latest (“UsagePurpose”) for circular economy `cx.circular.dpp:1` **MUST** be used. The legal meaning is named in CX-0152.

Have also a look at example policies in CX-0152.

CX-0152 can be found in the [standard library](https://catenax-ev.github.io/docs/standards/overview).

### 3.1.3 Contract Definition

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
