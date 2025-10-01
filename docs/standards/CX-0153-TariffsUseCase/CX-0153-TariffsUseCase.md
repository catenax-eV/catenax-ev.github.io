# CX-0153 Tariffs Use Case v.1.0.2

## FOR WHOM IS THE STANDARD DESIGNED

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following roles within the Catena-X ecosystem:

- Data Provider / Consumer
- Business Application Provider

The *Tariffs* standard defines a common data model for the structured exchange of information required to prepare U.S. tariff declarations. The standard is **in scope** for use cases where parts containing **steel and/or aluminium** are exchanged between automotive **OEMs** and their **suppliers**. It is specifically intended to support the exchange of information that is needed to complete U.S. tariff declarations, such as under Section 232 regulations.

The standard is **out of scope** for the digital submission or automation of the actual U.S. customs declaration process. It also does not yet cover automotive parts that do not contain steel or aluminium, though a future version may expand in that direction.

The standard is not explicitly developed for non-automotive industries, though reuse in such contexts is technically possible.

The following roles are **not** within the scope of this standard:

- Core Service Provider
- Enablement Service Provider  
- Onboarding Service Provider  
- Consulting Services Provider

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The *Tariffs* standard defines a structured data model that enables the exchange of tariff-relevant information between suppliers and OEMs in the automotive industry. It is designed to reduce the current manual effort involved in gathering and processing data needed for U.S. tariff declarations, which today is commonly exchanged via email and Excel files.

This standard is not embedded in a broader Catena-X use case or initiative but operates as a standalone specification that supports the bilateral exchange of information. It is applicable whenever a company needs to obtain tariff-relevant data—such as material composition, origin, or processing steps—for parts containing steel and/or aluminium. It also allows the sharing of additional material-related information where relevant.

In the Catena-X technical landscape, the standard assumes the use of **CX-0126-IndustryCorePartType**. The architecture follows a **pull-based pattern**: data is not pushed from supplier to consumer but made accessible by the data provider. Consumers query or request the information when needed, for example during the preparation of tariff declarations under Section 232 regulations.

> This standard applies equally to Data Providers and Consumers. All parties involved in the exchange must implement the agreed data structure and access patterns to ensure interoperability within the Catena-X network.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants* and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please refer the [process of conformity assessment and certification](https://catena-x.net/en/catena-x-introduce-implement/certification).

Since this document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria defined in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance SHOULD BE checked with the tools provided for these components.

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

In terms of conformity the openAPI specification of the application or endpoints being exposed via the Tractus-X EDC or any other CX-0018 compliant connector MUST be checked against the standardized openAPI specification.

Examples of data assets and contract offer structure in the Tractus-X EDC or any other CX-0018 compliant connector MUST correspond to the described structure.

The versions of the standardization documents valid for this standard are mentioned in sections where the standalone standards, normative references and non-normative references are listed. The valid versions are not specifically mentioned in the body text.

*Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases.

### 1.4 EXAMPLES

```text
    [Optional] - Providing examples already at the beginning of the standard makes it more
    tangible. Generally try to use examples to illustrate the standard. That will make it 
    easier for readers to understand the context and meaning.
```

### 1.5 TERMINOLOGY

> *This section is non-normative*

```text
    [Mandatory] The following terms are especially relevant for the understanding 
    of the standard:

    Example: 
    
    Business Partner Number (BPN): A BPN is the unique identifier of a partner within Catena-X
```

## 2 RELEVANT PARTS OF THE STANDARD FOR SPECIFIC USE CASES

> *This section is normative*

> *The headings below should only be understood as a suggestion*

### 2.1 "UsTariffInformation"

#### 2.1.1 LIST OF STANDALONE STANDARDS

The following standards MUST be fulfilled by data providers and consumers participating in the Tariffs use case:

- CX-0018 Dataspace Connectivity
- CX-0126 IndustryCorePartType
- CX-0152 Policy Constraints For Data Exchange

#### 2.1.2 DATA REQUIRED

The standard extends the requirements from CX-0126 IndustryCorePartType:

- A digital twin MUST be created for part types developed by a manufacturer within Catena-X.
- The aspect model "SingleLevelBomAsPlanned" MUST be linked to the Asset Administration Shell of each catalog part holding the information on part relationships top-down on catalog part level. Information on the Bill of Material of those catalog parts MUST NOT be provided in any other way than with the aspect model "SingleLevelBomAsPlanned".

All other data required from CX-0126 IndustryCorePartType apply as specified in the standard.

- The aspect model "UsTariffInformation" MUST be attached to the digital twin of each part type. Information on the US tariff MUST NOT be provided in any other way than with the aspect model "UsTariffInformation".

#### 2.1.3 ADDITIONAL REQUIREMENTS

As the IDS protocol is being used, data **MUST NOT** be transferred before a corresponding contract negotiation has been successfully passed by the participants of the data exchange and a valid contract is present as described in CX-0018. The required data offers **MUST** be discoverable through the Digital Twin Registry as submodel endpoints.

#### POLICY CONSTRAINTS FOR DATA EXCHANGE

In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined.  As part of this data sovereignty framework, conventions for access policies, for usage policies and for the constraints contained in the policies have been specified in standard 'CX-0152 Policy Constraints for Data Exchange'. This standard document CX-0152 **MUST** be followed when providing services or apps for data sharing/consuming and when sharing or consuming data in the Catena-X ecosystem. What conventions are relevant for what roles named in [1.1 AUDIENCE & SCOPE](#11-audience--scope) is specified in the CX-0152 standard document as well. CX-0152 can be found in the [standard library](https://catenax-ev.github.io/docs/standards/overview).

##### Versioning

The Aspect Models that are deployed as Digital Twins **MUST** be published in dcat:Dataset (http://www.w3.org/ns/dcat#) in the property that holds the full URN of the Aspect Model https://admin-shell.io/aas/3/0/HasSemantics/semanticId. Versions are explicitly contained in the URN.

The API versions **MUST** be published in the property https://w3id.org/catenax/ontology/common#version as version X.Y in dcat:Dataset (http://www.w3.org/ns/dcat#).

**Note:** Data Assets differentiated only by major version **MUST** be offered in parallel. The current standard and API versions mark the start of Life Cycle Management in Catena-X operations. Previous versions are dismissed.

#### 2.1.4 DIGITAL TWINS AND SPECIFIC ASSET IDs

## 3 ASPECT MODELS

> *This section is normative*

> *The headings below should only be understood as a suggestion. If you have more than one aspect model, then continue with 3.2, 3.3 etc.*

### 3.1 ASPECT MODEL "UsTariffInformation"

#### 3.1.1 INTRODUCTION

This aspect model provides information about the material composition and processing history of a part that is relevant for U.S. tariff declarations. It includes the type of material used (e.g. steel, aluminium), the processing steps applied to the material (such as melting, smelting, or pouring), and the origin or origins of the material. If the material has multiple origins (e.g. both U.S. and Mexico), the aspect model specifies how weight and value are distributed across these origins.

The aspect model MUST be connected to the digital twin of the respective part type (partType) to ensure that tariff-relevant information can be accurately traced and accessed in a Catena-X compliant manner. Only under this condition is it possible to use the information reliably in the context of tariff assessment and to support the documentation requirements of regulatory declarations.

#### 3.1.2 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification SMT.

This aspect model is written in SAMM 2.2.0 as a modeling language conformant to CX-0003 as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to CX-0003.

#### 3.1.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

#### 3.1.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier:

> urn:samm:io.catenax.us_tariff_information:1.0.0

#### 3.1.5 FORMATS OF SEMANTIC MODEL

##### 3.1.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

> [UsTariffInformation v1.0.0](https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.us_tariff_information/1.0.0/gen)

The open source command line tool of the Eclipse Semantic Modeling Framework is used for generation of other file formats like for example a JSON Schema, AASX for Asset Administration Shell Submodel Template or a HTML documentation.

##### 3.1.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".

##### 3.1.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification conformant to [SMT].

#### 3.1.6 EXAMPLE

```json
{
  "catenaxId": "580d3adf-1981-44a0-a214-13d6ceed9379",
  "materialList": [
    {
      "material": {
        "classificationType": "IMDS",
        "classificationId": "1.1",
        "materialName": "Steels / cast steel / sintered steel"
      },
      "partWeight": {
        "value": 100,
        "unit": "unit:kilogram"
      },
      "referenceNumber": "774773he878",
      "hts": "1234.56.7890",
      "origin": [
        {
          "originCountry": "US",
          "valuePercentage": 80,
          "originWeight": {
            "value": 20,
            "unit": "unit:kilogram"
          }
        },
        {
          "originCountry": "MX",
          "valuePercentage": 20,
          "originWeight": {
            "value": 80,
            "unit": "unit:kilogram"
          }
        }
      ],
      "processing": [
        {
          "processingCountry": "US",
          "successor": [
            {
              "successorId": 2,
                "successorId": 3
            }
          ],
          "processingType": "Pourring",
          "processingId": 1,
          "certificateId": "djhsoi918734627"
        },
        {
          "processingCountry": "US",
          "successor": [
          ],
          "processingType": "Melting",
          "processingId": 2,
          "certificateId": "djhsoi875688655"
        },
        {
          "processingCountry": "MX",
          "successor": [],
          "processingType": "Pourring",
          "processingId": 3,
          "certificateId": "djhsoi009865335"
        }
      ],
      "currency": "USD",
      "value": 500
    }
  ]
}
```

## 4 APPLICATION PROGRAMMING INTERFACES

There is no API in this standard version available.

## 5 PROCESSES

There is no prcoess defintion in this standard version available.

## 6 REFERENCES

### 6.1 NORMATIVE REFERENCES

> *This section is normative*

- CX-0018 Dataspace Connectivity
- CX-0126 IndustryCorePartType
- CX-0152 Policy Constraints For Data Exchange

### 6.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

N/A

### 6.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

N/A

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
