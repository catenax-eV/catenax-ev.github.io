# CX-0026 Product Carbon Footprint Data Model v2.0.0

## FOR WHOM IS THE STANDARD DESIGNED

CX-0026 specifies the PCF (Product Carbon Footprint) data model in a way that both data providers and consumers can exchange PCF data accross organizations along the supply chain. For interoperability, business applications with functionalities for exchange of PCF data need to implement the specified standard.

A list of roles for whom this standard applies is described in [1.1 AUDIENCE \& SCOPE](#11-audience--scope).

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

The current standard version reflects all changes in the PCF data model compared to preceeding versions. These changes inlcude the following:

- modelling standard migrated from BAMM to SAMM
- property "distributionStageAircraftGhgEmissions" added
- property "productOrSectorSpecificRules" changed from optional to mandatory
- property "geographyRegionOrSubregion" changed from optional to mandatory
- property "packagingGhgEmissions" changed from mandatory to optional

## ABSTRACT

Catena-X is the first open and collaborative data ecosystem. The goal is to provide an environment for the creation, operation, and joint use of end-to-end data chains along the entire automotive value chain. All partners are on an equal ground, have sovereign control over their data and no lock-in effects occur. This situation provides a sustainable solution for the digitalization of supply chains, especially for medium-sized and small companies, and supports the cooperation and collaboration of market participants and competitors.

The ever-growing Catena-X ecosystem will enable enormous amounts of data to be
integrated and collaboratively harnessed. To ensure that these complex data volumes can be sent, received, and processed smoothly across all stages of the
value chain, one language for all players applies: common standards.
The standards of the Catena-X data ecosystem define how the exchange of data
and information in our network works. They are the basis for ensuring that the
technologies, components, and processes used are developed and operated
according to uniform rules.

Common standards create added value for all partners: Within our network, data
flows more smoothly through interfaces. In addition, we avoid cumbersome
individual IT solutions for sharing data with other partners. In the field of
international standardization, Catena-X follows the proven international
standardization institutions: ISO/IEC/ITU and CEN-CENELC/ETSI.

For users and data providers, implementation of standards will reduce the costs
that would arise from adapting different systems. In addition, no important data is lost. On the contrary, it even becomes easier to collect data across companies. For operators and developers, standards will create a framework that provides reliable orientation and planning security.

The following document describes the standard for the PCF (Product Carbon Footprint) data model used in the Catena-X ecosystem and the requirements needed to implement it. Here, it serves as main resource to illustrate the PCF data model. It contains information starting from the format of the model, up to the conceptual and physical model. The standardisation of the data model enables faster information sharing and homogeneity throughout the entire Catena-X ecosystem.

## 1 INTRODUCTION

This document describes the PCF (Product Carbon Footprint) data model. The PCF data model is the basis for the exchange of PCF values along the supply chain as it defines the common format of a PCF value. Applications which allow the exchange of PCF data need to implement the PCF data model as specified in this standard.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard applies to the roles:

- Data Provider / Consumer
- Business Application Provider

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

In order to effectively measure and manage the environmental impact of products, a standardized approach for capturing and exchanging Product Carbon Footprint (PCF) data is essential. A standardized PCF data model provides a structured framework for collecting, organizing, and sharing carbon footprint information across industries and stakeholders. By establishing a common language and format, this data model enables seamless collaboration and comparison of PCF data, driving sustainable decision-making and fostering transparency throughout the supply chain.

To participate in the PCF use-case, the following single standards MUST be fulfilled by all participants for which the standard is relevant:

- [CX-0028 Product Carbon Footprint (PCF) Request API v2.0.0](#31-normative-references)
- [CX-0029 Product Carbon Footprint (PCF) Rulebook v2.0.0](#31-normative-references)
- [CX-0063 Triangle for Product Carbon Footprint Request v2.1.0](#31-normative-references)

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

This standard specifies a data model for PCF (Product Carbon Footprint) which is closely aligned with the [PCF Rulebook](#31-normative-references) and [Pathfinder Framework](#31-normative-references) guidelines.

### 1.4 EXAMPLES

The following shows an exemplary JSON payload based on the PCF data model:

```json
{
  "id" : "3893bb5d-da16-4dc1-9185-11d97476c254",
  "specVersion" : "2.0.1-20230314",
  "partialFullPcf" : "Cradle-to-gate",
  "precedingPfIds" : [ {
    "id" : "3893bb5d-da16-4dc1-9185-11d97476c254"
  } ],  
  "version" : 0,
  "created" : "2022-05-22T21:47:32Z",
  "extWBCSD_pfStatus" : "Active",
  "validityPeriodStart" : "2022-01-01T00:00:01Z",
  "validityPeriodEnd" : "2022-12-31T23:59:59Z",
  "comment" : "Comment for version 42.",
  "pcfLegalStatement" : "This PCF (Product Carbon Footprint) is for information purposes only. It is based upon the standards mentioned above.",
  "companyName" : "My Corp",
  "companyIds" : [ "BPNL47111234aNXY", "BPNL47115678bNXY" ],
  "productDescription" : "Ethanol, 95% solution",
  "productIds" : [ "urn:uuid:580d3adf-1981-44a0-a214-13d6ceed9379", "urn:uuid:b3169a50-036a-4477-b31b-5c51f132433e" ],
  "extWBCSD_productCodeCpc" : "011-99000",
  "productName" : "My Product Name",
  "pcf" : {
    "declaredUnit" : "liter",
    "unitaryProductAmount" : 1000.0,
    "productMassPerDeclaredUnit" : 0.456,
    "exemptedEmissionsPercent" : 0.0,
    "exemptedEmissionsDescription" : "No exemption",
    "extWBCSD_packagingEmissionsIncluded" : true,
    "boundaryProcessesDescription" : "Electricity consumption included as an input in the production phase",
    "geographyCountrySubdivision" : "US-NY",
    "geographyCountry" : "DE",
    "geographyRegionOrSubregion" : "Africa",
    "referencePeriodStart" : "2022-01-01T00:00:01Z",
    "referencePeriodEnd" : "2022-12-31T23:59:59Z",
    "crossSectoralStandardsUsed" : [ {
      "crossSectoralStandard" : "GHG Protocol Product standard"
    } ],
    "productOrSectorSpecificRules" : [ {
      "extWBCSD_operator" : "PEF",
      "productOrSectorSpecificRules" : [ {
        "ruleName" : "urn:tfs-initiative.com:PCR:The Product Carbon Footprint Guideline for the Chemical Industry:version:v2.0"
      } ],
      "extWBCSD_otherOperatorName" : "NSF"
    } ],
    "extWBCSD_characterizationFactors" : "AR5",
    "extWBCSD_allocationRulesDescription" : "In accordance with Catena-X PCF Rulebook",
    "extTFS_allocationWasteIncineration" : "cut-off",
    "primaryDataShare" : 56.12,
    "secondaryEmissionFactorSources" : [ {
      "secondaryEmissionFactorSource" : "ecoinvent 3.8"
    } ],
    "dataQualityRating" : {
      "coveragePercent" : 100,
      "technologicalDQR" : 2.0,
      "temporalDQR" : 2.0,
      "geographicalDQR" : 2.0,
      "completenessDQR" : 2.0,
      "reliabilityDQR" : 2.0
    },
    "pcfExcludingBiogenic" : 2.0,
    "pcfIncludingBiogenic" : 1.0,
    "fossilGhgEmissions" : 0.5,
    "biogenicCarbonEmissionsOtherThanCO2" : 1.0,
    "biogenicCarbonWithdrawal" : 0.0,
    "dlucGhgEmissions" : 0.4,
    "extTFS_luGhgEmissions" : 0.3,
    "aircraftGhgEmissions" : 0.0,
    "extWBCSD_packagingGhgEmissions" : 0,
    "distributionStagePcfExcludingBiogenic" : 1.5,
    "distributionStagePcfIncludingBiogenic" : 0.0,
    "distributionStageFossilGhgEmissions" : 0.5,
    "distributionStageBiogenicCarbonEmissionsOtherThanCO2" : 1.0,
    "distributionStageBiogenicCarbonWithdrawal" : 0.5,
    "extTFS_distributionStageDlucGhgEmissions" : 1.0,
    "extTFS_distributionStageLuGhgEmissions" : 1.1,
    "distributionStageAircraftGhgEmissions" : 0.0,
    "carbonContentTotal" : 2.5,
    "extWBCSD_fossilCarbonContent" : 0.1,
    "carbonContentBiogenic" : 0.0
  }
}
```

### 1.5 TERMINOLOGY

> *This section is non-normative*

In order to achieve a highest-possible acceptance, the PCF Aspect Model is closely aligned with other relevant initiatives, namely WBCSD (World Business Council for Sustainable Development) and TfS (Together for Sustainability). Though Catena-X, WBCSD and TfS are independent organizations, they have agreed to jointly discuss a PCF data model specification and they aim to enable an interoperable exchange of PCF data.

As a result of this alignment, the PCF data model in its present specification follows the definitions of WBCSD and TfS in a widest-possible manner. Deviations between the data model specifications have been discussed and agreed between these parties. Wherever definitions of WBCSD are used directly, the comment section in the PCF data model includes a reference to the WBCSD specification, see also [Pathfinder Framework](#31-normative-references).

The following terms are especially relevant for understanding the standard:

**Aspect Model**

A formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an aspect.

- Note 1: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model, see [CX-0003](#31-normative-references).
- Note 2: Aspect models are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

**WBCSD (World Business Council For Sustainable Development) Pathfinder**

On November 9th 2021, the Industry Day at the United Nations Climate Change Conference (COP26) in Glasgow (UK), the Carbon Transparency Partnership published the Pathfinder Framework, a guidance for the calculation and exchange of product-level carbon emissions data across value chains.

The Framework was developed jointly by 35 stakeholders from industry and the broader decarbonization ecosystem, harnessing WBCSD's role as co-convenor of the Greenhouse Gas Protocol.

The guidance enables companies to better understand carbon emissions on a granular level, improving business decision-making and helping them meet their net zero targets.

**TfS (Together for Sustainability)**

Together for Sustainability (TfS) is a member-driven initiative, raising CSR (Corporate Sustainability Reporting) standards throughout the chemical industry. Together, the members (companies of the chemical industry) are building a global standard for environmental, social and governance performance of chemical supply chains.

## 2 ASPECT MODEL PCF (Product Carbon Footprint)

> *This section is normative*

This chapter (and maybe following chapters) describe the NORMATIVE part of the standard for the PCF aspect model.

Each PCF (Product Carbon Footprint) relates to a specific product, identified by one or more product identifiers. Every provider of PCF data MUST provide the data conformant to the data model specified in this document.

- Every certified business application relying on PCF data MUST be able to consume data conformant to the data model specified in this document.
- Data consumers and data providers MUST comply with the license of the data model.
- The playload MUST be in JSON format as specified in this document and MUST be transferred via HTTP following the standardized REST API Endpoint [CX-0028](#31-normative-references)

### 2.1 INTRODUCTION

This section specifies a data model for a product carbon footprint.

### 2.2 SPECIFICATION ARTIFACTS

This PCF aspect model is written in SAMM 2.0.0 as a modeling language conformant to [CX-0003](#31-normative-references) as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to [CX-0003](#31-normative-references).

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier

> urn:samm:io.catenax.pcf:5.0.0

This identifier MUST be used by the data provider to define the semantics of the data being transferred.

### 2.5 FORMATS OF SEMANTIC MODEL

All different formats of the semantic model can be found in the github repository.

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.pcf/5.0.0

#### 2.5.1 RDF TURTLE

The RDF (Resource Description Framework) Turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.pcf/5.0.0/Pcf.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework is used for generation of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel Template or a HTML documentation. These other formats are saved in the "gen" folder in github.

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.pcf/5.0.0/gen

#### 2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the value-only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.pcf/5.0.0/gen/Pcf-schema.json

#### 2.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification conformant to [SMT](#32-non-normative-references).

Note: As soon as the specification V3.0 of the Asset Administration Shell specfication is available, an update will be provided.

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.pcf/5.0.0/gen/Pcf.aasx

### 2.6 SEMANTIC MODEL

The data model is described in SAMM, see (#25-formats-of-the-semantic-model). An HTML documentation can be generated from the RDF Turtle file.

https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.pcf/5.0.0/gen/Pcf.html

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- [CX-0003 SAMM Aspect Meta Model v1.1.0](https://catena-x.net/de/standard-library)
- [CX-0004 Governance Process v1.0.1](https://catena-x.net/de/standard-library)
- [CX-0028 Product Carbon Footprint (PCF) Request API v2.0.0](https://catena-x.net/de/standard-library)
- [CX-0029 Product Carbon Footprint (PCF) Rulebook v2.0.0](https://catena-x.net/de/standard-library)
- [CX-0063 Triangle for Product Carbon Footprint Request v2.1.0](https://catena-x.net/de/standard-library)

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

- [SMT][How to create a submodel template specification](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf)

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
