# CX-0165 Certificate of Analysis v.1.0.0

## ABSTRACT

This standard describes the interoperable & machine-readable digital solution for the exchange & processing of Certificate of Analysis (CoA) to substitute the usual labor intensive & error prone data extraction of a traditional methods (e.g. PDF documents sent via email, EDI, or supplier portals) and specifies the framework and ways of data exchange (a synchronous, Digital Twin based exchange and an asynchronous, connector based exchange) necessary for its operative deployment.

## FOR WHOM IS THE STANDARD DESIGNED

This standard is designed for organizations across the supply chain that currently exchange CoAs using traditional methods such as PDF attachments, email, EDI, or supplier portals, and want to automate the process by eliminating manual handling.
Catena-X enables suppliers to share CoAs in a machine-readable JSON format that can be easily processed by most IT systems. This provides a modern, standardized, and competitive alternative to conventional document-based exchanges, improving efficiency, interoperability, and data automation across the supply chain.

## 1 INTRODUCTION

In their daily operations, companies receive materials (e.g. bi-component adhesives, plastic granulates) intended for further use in the production of other goods. The deliveries of these materials are accompanied by different documents - the interest of this standard is on the Certificate of Analysis (CoA).
The CoA provides, about the delivered material batch, information about its quality (properties (e.g. Viscosity), performance (e.g. curing speed)), data obtained by the producer through defined analytical characterization and specific testing (internal and with-customer agreed upon).
The CoA is usually provided as a PDF file containing key information such as supplier name, material name and identification numbers, batch or lot number, and most importantly, in a tabular format, a list of tests performed accordingly to defined test methods (codes, short text) with each test result presented alongside with the corresponding specification limits.  
Upon delivery, the conformity of the supplied batch is verified by manually entering the analytical results from the CoA into a system that enables formal checks and decision-making for acceptance.
The solution described in this standard offers the replacement of labor-intensive and error-prone manual data transfer with a human-free digital solution.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is intended to be of interest (and applicable) for all Business Partners already using conventional CoAs (PDFs, paper form) in their daily operations:

- Suppliers as Data Providers
- Customer as Data Consumers

In scope for this standard are materials characterized by analytical tests results (e.g. pure chemical reactants, glue or plastic granulates) and produced batchwise.
The standard does not consider (i.e. out of Scope) Serial Parts (where their conformity is confirmed through functional testing).

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

To enable a standardized, interoperable, and auditable exchange of CoA data across business partners, the standardized Aspect Model (see section 3.1.2 SPECIFICATION ARTIFACTS) must be used as the canonical data structure for the digital exchange of CoA information and for referencing the associated CoA PDF document.
By adopting a common data model, suppliers and customers can reduce manual effort, improve data quality, support process automation, and ensure a consistent interpretation of quality-related information throughout the supply chain.
The exchange of this information is enabled through a connector that the supplier, acting as data provider, and the customer, acting as data consumer, establish within the Catena-X ecosystem, conformant to CX-0018 Dataspace Connectivity. This standard establishes a secure and scalable foundation for trusted B2B data exchange, enabling seamless integration of CoA information into customer quality, manufacturing, and compliance processes while preserving data sovereignty principles defined by the Catena-X ecosystem.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

### 1.4 EXAMPLES

Example JSON Payload: Submodel "certificateOfAnalysis"

```json
{
  "certificateMetaData" : {
    "supplierOrderId" : "M-Nbr-4711",
    "issueDate" : "2026-06-29T13:40:16.742Z",
    "isConformWithSpecification" : true,
    "customerOrderId" : "C-Nbr-4711"
  },
  "productInstanceInformation" : {
    "localIdentifiers" : [ {
      "value" : "BID12345678",
      "key" : "manufacturerId"
    } ],
    "manufacturingInformation" : {
      "country" : "DEU",
      "sites" : [ {
        "siteId" : "BPNSK92w4yR8LW0f",
        "function" : "production"
      } ],
      "productionDate" : "2025-09-26"
    },
    "expiryDate" : "2026-06-29",
    "globalAssetId" : "46d2f35C-d73b-CdeE-A9cC-Cd9CA2d0dd3E"
  },
  "materialProperties" : [ {
    "unit" : "unit:kilogramPerCubicMetre",
    "method" : [ {
      "methodStandard" : "DIN ISO 4711",
      "methodDescription" : "ISO norm to describe testing methods for adhesive density."
    } ],
    "dataType" : "xsd:string",
    "name" : "density",
    "description" : "Density of the glue at room temperature according to DIN ISO 4711",
    "upperLimit" : "2400.0",
    "lowerLimit" : "2200.0",
    "value" : "2310.0"
  } ],
  "documentType" : {
    "statement" : "This is a computer-generated document. A signature is not required."
  },
  "supplier" : "BPNL6Y00kkAwX4P3",
  "productTypeInformation" : {
    "manufacturerPartId" : "123-0.740-3434-A",
    "customerPartId" : "PRT-12345",
    "nameAtManufacturer" : "Mirror left"
  },
  "binaryDocument" : {
    "payload" : "JVBERi0xLjQKJQozIDAgb2JqCjw8Ci9UeXBlIC9QYWdlCg==",
    "documentLanguage" : "en",
    "mimeType" : "application/pdf"
  },
  "disclaimer" : {
    "disclaimerMetadata" : "This is a computer-generated document. A signature is not required.",
    "disclaimerRequirement" : "The above information describes the relevant parameters of the product at the time of issuance of this certificate of analysis. The data are regularly checked as part of our quality assurance and are provided for reference purposes only. The contractual quality of the product at the time of transfer of risk is determined solely by our product specification. Unless the parties have expressly agreed otherwise in writing and signed by authorized representatives, no suitability of the product for any particular purpose is assumed or implied. The customer is solely responsible for verifying the suitability of the product for any specific use."
  },
  "customer" : "BPNLR2D72DqxN1wb"
}
```

### 1.5 TERMINOLOGY

> *This section is non-normative*

To establish this solution, attributes have been named with descriptors close to the terminology
already familiar to any person involved in the creation and processing of a CoA (typically Quality
Assurance Managers), such as Batch ID, production date, material number, value or unit. Their
interpretation is therefore intended to be unambiguous. This section lists the abbreviations used in
this document and the terms that benefit from an explicit definition in the context of this standard.

#### Abbreviations

| Abbreviation | Meaning                                            |
| ------------ | -------------------------------------------------- |
| AAS          | Asset Administration Shell                         |
| BPN          | Business Partner Number                            |
| BPNL         | Business Partner Number of a Legal entity          |
| CoA          | Certificate of Analysis                            |
| DTR          | Digital Twin Registry                              |
| IDS          | International Data Space                           |
| SAMM         | Semantic Aspect Meta Model (per CX-0003)           |

#### Terms

| Term                          | Description                                                                                                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Business Partner Number (BPN) | Unique identifier of a partner within Catena-X.                                                                                                                                             |
| Test-ID                       | The code or short description of the method used to test a Property.                                                                                                                        |
| Property                      | A measurable quality or performance characteristic of the delivered material that is reported in the CoA (for example density, viscosity or curing speed).                                  |
| Specification limits          | The lower and/or upper bounds agreed for a Property, against which the measured value is checked to determine conformity.                                                                    |
| Batch                         | A quantity of material produced under the same conditions within a defined time frame, identified by a Batch ID, as defined in [CX-0127].                                                    |
| Material number               | Identifier of the delivered material at the manufacturer, carried in the data as `manufacturerPartId`.                                                                                       |
| Connector                     | The participant agent through which data is offered, negotiated and transferred in the Catena-X dataspace, conformant to [CX-0018]. The Eclipse Dataspace Connector (EDC) is a reference implementation; any [CX-0018] conformant connector is a valid option. |
| Digital Twin                  | Digital representation of a batch instance, provisioned as an AAS and registered in a DTR, as defined in [CX-0002].                                                                          |
| Digital Twin Registry (DTR)   | Decentral registry in which digital twins are registered and discovered, as defined in [CX-0002].                                                                                           |
| `specificAssetId`             | A name and value identifier registered in the shell descriptor of a digital twin, used by a data consumer to discover it (see 2.1.3).                                                        |
| Submodel                      | A domain-specific view of a digital twin that references a concrete Aspect Model. The CoA content is carried in the `certificateOfAnalysis` submodel.                                        |
| Data Provider                 | The participant that provides the CoA data, that is, the material supplier.                                                                                                                 |
| Data Consumer                 | The participant that consumes the CoA data, that is, the customer.                                                                                                                          |
| Synchronous data exchange     | Data exchange in which the customer discovers and retrieves the CoA through a Digital Twin Registry (see 2.1.4).                                                                                               |
| Asynchronous data exchange    | Data exchange in which the supplier delivers the CoA directly to the customer's connector without a Digital Twin Registry (see 2.1.5).                                                                         |
| `CoAExchange`                 | The `dct:type` value (`cx-taxo:CoAExchange`) identifies, in the customer's catalog, the dataset representing its CoA ingestion endpoint in the asynchronous data exchange (see 2.1.5).                                                    |

## 2 MAIN CONTENT

> *This section is normative*

### 2.1 CERTIFICATE OF ANALYSIS

#### 2.1.1 LIST OF STANDALONE STANDARDS

none

#### 2.1.2 DATA REQUIRED

If the synchronous data exchange is chosen, a digital twin MUST be created for a batch of material
produced by the supplier and it MUST be provisioned via an Asset Administration Shell and
registered in a decentral Digital Twin Registry as conformant with [CX-0002].

In all data exchanges, data MUST NOT be transferred before a corresponding contract negotiation has
been successfully passed by the participants and a valid contract is present, as conformant with [CX-0018].

#### 2.1.3 POLICY CONSTRAINTS FOR DATA EXCHANGE

This section is normative.

In alignment with the Catena-X commitment to data sovereignty, the conventions for access policies, for
usage policies and for the constraints contained in those policies are specified in [CX-0152] Policy
Constraints For Data Exchange. [CX-0152] MUST be followed when providing services or applications for
sharing or consuming data, and when sharing or consuming CoA data, in the Catena-X ecosystem. This
applies in both the synchronous and the asynchronous data exchange. Which conventions are relevant
for which of the roles named in section 1.1 (AUDIENCE & SCOPE) is specified in the [CX-0152] standard
document.

The access and usage policies attached to every offer and transfer of CoA data MUST be conformant to
[CX-0152], regardless of the data exchange agreed (synchronous or asynchronous) bilaterally between supplier and customer.

#### 2.1.4 SYNCHRONOUS DATA EXCHANGE

This section is normative.

When the synchronous data exchange following [CX-0002] is used, a CoA digital twin is a Part Instance
digital twin in the sense of [CX-0127]. The data consumer discovers the relevant twin through the data
provider's decentral Digital Twin Registry (DTR) by querying the `GET /lookup/shells` operation and
filtering on the Part Instance `specificAssetIds` defined in [CX-0127].

The mandatory `specificAssetIds` of the twin are those defined in [CX-0127] and are not redefined here.
The visibility of the instance-specific `specificAssetIds` is scoped to the receiving customer's BPNL
through the `externalSubjectId` attribute, as defined in [CX-0002].

The CoA content itself is carried in the `certificateOfAnalysis` submodel referenced by the shell
descriptor; its value-only payload is the one shown in section 1.4 and defined by the aspect model
referenced in section 3.

##### Example (non-normative): shell descriptor of a CoA digital twin

The `manufacturerPartId` and `batchId` values are aligned with the example of section 1.4; the BPNLs are
shown as readable placeholders (`manufacturerId` is the supplier BPNL, `externalSubjectId` is the
customer BPNL).

```json
[
  {
    "id": "urn:uuid:780a79b8-3f4a-42f3-9e8a-b1543a029e75",
    "globalAssetId": "urn:uuid:46d2f35c-d73b-cdee-a9cc-cd9ca2d0dd3e",
    "idShort": "CertificateOfAnalysis",
    "specificAssetIds": [
      { "name": "manufacturerPartId", "value": "123-0.740-3434-A" },
      { "name": "manufacturerId", "value": "BPNL0000001234" },
      { "name": "digitalTwinType", "value": "PartInstance" },
      {
        "name": "batchId",
        "value": "BID12345678",
        "externalSubjectId": {
          "type": "ExternalReference",
          "keys": [ { "type": "GlobalReference", "value": "BPNL0000005678" } ]
        }
      }
    ],
    "submodelDescriptors": [
      {
        "idShort": "certificateOfAnalysis",
        "semanticId": {
          "type": "ExternalReference",
          "keys": [
            {
              "type": "GlobalReference",
              "value": "urn:samm:io.catenax.certificate_of_analysis:2.0.0#CertificateOfAnalysis"
            }
          ]
        }
      }
    ]
  }
]
```

#### 2.1.5 ASYNCHRONOUS DATA EXCHANGE

This section is normative.

When the supplier and the customer bilaterally agree to exchange CoA data without a Digital Twin
Registry, the CoA MUST be delivered through a direct connector-to-connector data push as described in
this section. The data consumer exposes the receiving endpoint
through the EDC catalog of its connector conformant to [CX-0018].

##### Receiving asset

A dataset that represents the customer's CoA ingestion endpoint MUST satisfy the
following requirements:

1. The dataset MUST carry the property `dct:type` with the value `cx-taxo:CoAExchange`.
2. The dataset MUST carry the property `cx-common:version` to allow versioning of the receiving
   endpoint.
3. The `dataAddress` MUST expose an HTTP endpoint that accepts the CoA payload as the body of an HTTP
   `POST` request (`proxyBody` set to `true`), so that the data provider can transfer the CoA content
   through the connector.

Each participant MUST maintain at most one active receiving asset of type `cx-taxo:CoAExchange` per
connector. The `@id` of the dataset is internal to the data consumer and is not a network-wide constant:
the data provider MUST obtain it from the catalog by filtering on `dct:type` (and, where present,
`cx-common:version`), never by assuming a hard-coded value.

##### Payload

The payload pushed in this mode MUST be the `certificateOfAnalysis` submodel content (the value-only
JSON of the aspect model referenced in section 3), identical to the content exchanged and exemplified in section 2.1.3 (PULL).
The exchange mode does not change the semantic content of the CoA.

###### Example (non-normative): receiving asset on the data consumer side

```json
{
  "@context": {
    "edc": "https://w3id.org/edc/v0.0.1/ns/",
    "cx-common": "https://w3id.org/catenax/ontology/common#",
    "cx-taxo": "https://w3id.org/catenax/taxonomy#",
    "dct": "http://purl.org/dc/terms/"
  },
  "@id": "coa-exchange-receive",
  "properties": {
    "dct:type": { "@id": "cx-taxo:CoAExchange" },
    "description": "Endpoint for receiving Certificate of Analysis data (push)",
    "cx-common:version": "1.0"
  },
  "dataAddress": {
    "@type": "DataAddress",
    "type": "HttpData",
    "baseUrl": "https://customer.example.com/coa/receive",
    "method": "POST",
    "proxyBody": "true",
    "contentType": "application/json"
  }
}
```

## 3 ASPECT MODELS

### 3.1 ASPECT MODEL certificateOfAnalysis

This standard introduces the new aspect model CertificateOfAnalysis.

### 3.1.1 INTRODUCTION

This section describes the CertificateOfAnalysis data model, which is the basis for the interoperable exchange of CoA values along the supply chain.

#### 3.1.2 SPECIFICATION ARTIFACTS

The CertificateOfAnalysis aspect model is available in machine-readable format on GitHub:
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.certificate_of_analysis/2.0.0

### 3.1.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 3.1.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier:
io.catenax.certificate_of_analysis

### 3.1.5 FORMATS OF SEMANTIC MODEL

This identifier MUST be used by the data provider to define the semantics of the data being transferred.

### 3.1.5.1 RDF TURTLE

The RDF (Resource Description Framework) Turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

[CertificateOfAnalysis v2.0.0](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.certificate_of_analysis/2.0.0/CertificateOfAnalysis.ttl)

### 3.1.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the value-only payload of the Asset Administration Shell for the API operation "GetSubmodel".

### 3.2 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## 4 REFERENCES

### 4.1 NORMATIVE REFERENCES

> *This section is normative*

- CX-0002 Digital Twins in Catena–X
- CX-0018 Dataspace Connectivity
- CX-0127 Industry Core - Part Instance
- CX-0152 Policy Constraints For Data Exchange

### 4.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

### 4.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
