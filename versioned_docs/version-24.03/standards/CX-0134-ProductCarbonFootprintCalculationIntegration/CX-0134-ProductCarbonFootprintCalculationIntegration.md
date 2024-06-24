
# CX-0134 Product Carbon Footprint Calculation Integration v1.0.0

## ABSTRACT

Catena-X claims to be a flexible and open ecosystem of business applications and infrastructure components for data exchange along the automotive supply chain., e.g. in context of PCF (Product Carboon Footprint) values. For interoperability in the Catena-X network, applications that handle PCF data need to follow the according standards as published by the Catena-X association. As per today, there are several certified COTS (Commercial-Off-The-Shelf) solutions available for PCF data exchange. For PCF calculation solutions, the following specification of a standardized integration can be utilized by PCF calculation solution providers for connecting their applications with PCF data exchange solutions. The specification of this integration represents the scope of the standardard.

## FOR WHOM IS THE STANDARD DESIGNED

The CX-0134 specifies the integration of PCF (Product Carbon Footprint) calculation solutions in a way that application providers can integrate their solutions in Catena-X. For interoperability, business applications with functionalities for calculation of PCF data need to implement the specified standard.

A list of roles for whom this standard applies is described in [Audience & Scope](#11-audience--scope).

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard applies to the roles:

- Data Provider / Consumer
- Business Application Provider

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

This documents shows

- how PCF values are calculated in a Catena-X compliant manner
- how PCF data in Catena-X can be transferred between PCF Calculation and PCF Exchange tools
- which standards needs to be fulfilled in context of PCF calculation integration in order to be interoperable in the Catena-X network

The following scenario describes, how

- a supplier
  - calculates the PCF for his component
  - transfers the calculation result to the PCF exchange solution
  - provides the PCF to his customer
- a customer
  - consumes the PCF from his supplier
  - transfers the calculation result from his supplier to the PCF calculation tool
  - uses the suppliers calculation result for his PCF calculation

![PCF Calculation Integration Scenario](./assets/20231115-catena-x-pcf-integration-standard-small.jpg)

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

### 1.4 EXAMPLES

Section [2.2 PCF CALCULATION DATA FORMAT](#22-pcf-calculation-data-format) describes the relevant data structure in context of integrating PCF calculation tools in Catena-X.

An exemplary data set based on this specification can be found here: [CSV Example](./assets/pcf-data-model-specification-for-calculation-example.csv)

### 1.5 TERMINOLOGY

> *This section is non-normative*

The following terms are especially relevant for the understanding of the standard:

**Product Carbon Footprint (PCF)**

Total GHG (Greenhouse Gas) emissions generated during the life cycle of a product, measured in CO2e. Within the boundary of the Catena-X PCF Rulebook (see [CX - 0029 Product Carbon Footprint Rulebook v2.0.0](#31-normative-references)), emissions related to the product use and end-of-life stages are excluded from the PCF.

## 2 MAIN CONTENT

> *This section is normative*

To prove conformity with the PCF calculation integration standard, the following criteria MUST be applied:

### 2.1 PCF CALCULATION METHODOLOGY

The methodology used for calculating a PCF MUST be conformant with [CX - 0029 Product Carbon Footprint Rulebook v2.0.0](#31-normative-references).

### 2.2 PCF CALCULATION DATA FORMAT

For the integration of PCF calculation solutions, the data format is derived from the standard PCF data model as described in [CX - 0026 Product Carbon Footprint Data Model v2.0.0](#32-non-normative-references), though in integration context some individual properties are not mandatory but can be specified optionally.

The data format for the integration of PCF calculation solutions in Catena-X MUST follow the following specification:

| Property | (M)andatory / (O)ptional | Data Type Specification | Example |
|------------------------------------------------------ |------------------------- |----------------------------------------------------------------------------------------------------------------------------------------------------- |----------------------------------------------------------------------------------------------------------------------- |
| id                                                    | O                        | String; must be a UUID v4                                                                                                                            | 3893bb5d-da16-4dc1-9185-11d97476c254                                                                                   |
| specVersion                                           | M                        | Text                                                                                                                                                 | 2.0.1-20230314                                                                                                         |
| partialFullPcf                                        | M                        | Enumeration; "Cradle-to-gate", "Cradle-to-grave"                                                                                                    | Cradle-to-gate                                                                                                        |
| precedingPfIds                                       | O                       | Non-empty set of strings                                                                                                                            | 9c5b94b1-35ad-49bb-b118-8e8fc24abf8                                                                                   |
| version                                              | O                       | Integer in inclusive rage of 0..2^31-1; **per default "0" in Catena-X**                                                                             | 0                                                                                                                     |
| created                                              | M                       | Time stamp; must be in UTC (Coordinated Universal Time) conforming to ISO 8601                                                                      | 2020-03-01T00:00:00Z                                                                                                  |
| status                                               | O                       | Enumeration; "Active", "Deprecated"; **per default "Active" in Catena-X**                                                                           | Active                                                                                                                |
| validityPeriodStart                                  | O                       | Time stamp; if defined, must be equal to or greater than referencePeriodEnd                                                                         | 2022-01-01T00:00:01Z                                                                                                  |
| validityPeriodEnd                                    | O                       | Time stamp                                                                                                                                          | 2022-12-31T23:59:59Z                                                                                                  |
| comment                                              | O                       | Text                                                                                                                                                | Cut-off set 6%                                                                                                        |
| pcfLegalStatement                                    | O                       | Text                                                                                                                                                | This PCF (Product Carbon Footprint) is for information purposes only. It is based upon the standards mentioned above. |
| companyName                                          | O                       | String with 1 or more characters                                                                                                                    | My Corp                                                                                                               |
| companyIds                                           | O                       | Non-empty set of URN (Uniform Resource Name); array of strings (\<URN\> ::= "urn:" \<NID\> ":" \<NSS\>)                                                   | urn:uuid:51131FB5-42A2-4267-A402-0ECFEFAD1619                                                                         |
| productDescription                                   | O                       | Text                                                                                                                                                | Ethanol, 95% solution                                                                                                 |
| productIds                                           | M                       | Non-empty set of URN; array of strings (\<URN\> ::= "urn:" \<NID\> ":" \<NSS\>)                                                                            | urn:gtin:4712345060507                                                                                                 |
| productCategoryCpc                                    | O                        | String; UN CPC Code version 2.1; **per default "011-99000" in Catena-X**                                                                             | 011-99000                                                                                                              |
| productNameCompany                                    | O                        | String with 1 or more characters                                                                                                                     | My Product Name                                                                                                        |
| declaredUnit                                          | M                        | String; enumeration as specified by WBCSD plus "piece" for Catena-X                                                                                  | kilogram                                                                                                               |
| unitaryProductAmount                                  | M                        | Positive, non-zero decimal number                                                                                                                    | 1000.0                                                                                                                 |
| productMassPerDeclaredUnit                            | M                        | Positive, non-zero decimal number                                                                                                                    | 0.456                                                                                                                  |
| exemptedEmissionsPercent                              | M                        | Decimal number between 0.0 and 5 including                                                                                                           | 0.0                                                                                                                    |
| exemptedEmissionsDescription                          | O                        | Text; can be empty                                                                                                                                   | No exemption                                                                                                           |
| packagingEmissionsIncluded                            | M                        | Boolean; can be "TRUE" or "FALSE"; **per default "TRUE" in Catena-X**                                                                                | TRUE                                                                                                                   |
| boundaryProcessesDescription                          | O                        | Text                                                                                                                                                 | Electricity consumption included as an input in the production phase                                                   |
| geographyCountrySubdivision                           | O                        | String; if defined must be ISO 3166-2 Subdivision Code                                                                                               | US-NY                                                                                                                  |
| geographyCountry                                      | O                        | String; if defined must be an ISO 3166-2 alpha-2 code                                                                                                | FR                                                                                                                     |
| geographyRegionOrSubregion                            | O                        | String with 1 or more characters; enumeration as specified by WBCSD plus "Global" for Catena-X                                                       | Africa                                                                                                                 |
| referencePeriodStart                                  | M                        | Time stamp; must be in UTC conforming to ISO 8601                                                                                                    | 2022-01-01T00:00:01Z                                                                                                   |
| referencePeriodEnd                                    | M                        | Time stamp; must be in UTC conforming to ISO 8601                                                                                                    | 2022-12-31T23:59:59Z                                                                                                   |
| crossSectoralStandardsUsed                            | M                        | Object; set of Cross Sectoral Standard entries                                                                                                       |                                                                                                                        |
| crossSectoralStandard                                 | M                        | Enumeration "GHG Protocol Product standard", "ISO Standard 14067", "ISO Standard 14044"                                                              | GHG Protocol Product standard                                                                                          |
| productOrSectorSpecificRules                          | M                        | Object; set of Product or Sector Specific Rule entries (each including Operator, Rule Names and Other Operator Name)                                 |                                                                                                                        |
| operator                                              | M                        | Enumeration "PEF", "EPD International", "Other"; **per default "Other" in Catena-X**                                                                 | Other                                                                                                                  |
| ruleNames                                             | M                        | Set of RuleName entries                                                                                                                              | urn:tfs-initiative.com:PCR:The Product Carbon Footprint Guideline for the Chemical Industry:version:v2.0               |
| otherOperatorName                                     | O                        | Non-empty string                                                                                                                                     | NSF                                                                                                                    |
| characterizationFactors                               | M                        | Enumeration "AR6", "AR5"; **per default "AR6" in Catena-X**                                                                                          | AR6                                                                                                                    |
| allocationRulesDescription                            | O                        | Text; **per default "In accordance with Catena-X PCF Rulebook" in Catena-X**                                                                         | In accordance with Catena-X PCF Rulebook                                                                               |
| allocationWasteIncineration                           | M                        | Enumeration "cut-off", "reverse cut-off", "system expansion"; **per default "cut-off" in Catena-X**                                                  | cut-off                                                                                                                |
| primaryDataShare                                      | O                        | Decimal number in range of and including 0..100                                                                                                      | 7.183924                                                                                                               |
| secondaryEmissionFactorSources                        | M                        | Object; set of EmissionFactorDataSources                                                                                                             |                                                                                                                        |
| emissionFactorDS                                      | M                        | String with 1 or more characters                                                                                                                     | ecoinvent 3.8                                                                                                          |
| dqi                                                   | O                        | Object including coveragePercent, technologicalDQR, temporalDQR, etc.                                                                                |                                                                                                                        |
| coveragePercent                                       | O                        | Decimal number in range of and including 0..100; **per default "100" in Catena-X**                                                                   | 100                                                                                                                    |
| technologicalDQR                                      | O                        | Decimal number in range of and including 1..3                                                                                                        | 2.0                                                                                                                    |
| temporalDQR                                           | O                        | Decimal number in range of and including 1..3                                                                                                        | 2.0                                                                                                                    |
| geographicalDQR                                       | O                        | Decimal number in range of and including 1..3                                                                                                        | 2.0                                                                                                                    |
| completenessDQR                                       | O                        | Decimal number in range of and including 1..3                                                                                                        | 2.0                                                                                                                    |
| reliabilityDQR                                        | O                        | Decimal number in range of and including 1..3                                                                                                        | 2.0                                                                                                                    |
| pcfExcludingBiogenic                                  | M                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 2.0                                                                                                                    |
| pcfIncludingBiogenic                                  | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit                                                                                      | 1.0                                                                                                                    |
| fossilGhgEmissions                                    | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 0.5                                                                                                                    |
| biogenicCarbonEmissionsOtherThanCO2                   | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 1.0                                                                                                                    |
| biogenicCarbonWithdrawal                              | O                        | Must be calculated per declared unit in kg equal to or greater zero                                                                                  | 0.0                                                                                                                    |
| dlucGhgEmissions                                      | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 0.4                                                                                                                    |
| luGhgEmissions                                        | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 0.3                                                                                                                    |
| aircraftGhgEmissions                                  | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 0.0                                                                                                                    |
| packagingGhgEmissions                                 | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero; **per default "0" in Catena-X**                            | 0.0                                                                                                                    |
| distributionStagePcfExcludingBiogenic                 | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 1.5                                                                                                                    |
| distributionStagePcfIncludingBiogenic                 | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit                                                                                      | 0.0                                                                                                                    |
| distributionStageFossilGhgEmissions                   | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 0.5                                                                                                                    |
| distributionStageBiogenicCarbonEmissionsOtherThanCO2  | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 1.0                                                                                                                    |
| distributionStageBiogenicCarbonWithdrawal             | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 0.5                                                                                                                    |
| distributionStageDlucGhgEmissions                     | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 1.0                                                                                                                    |
| distributionStageLuGhgEmissions                       | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 1.1                                                                                                                    |
| distributionStageAircraftGhgEmissions                 | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 0.0                                                                                                                    |
| carbonContentTotal                                    | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero                                                             | 2.5                                                                                                                    |
| fossilCarbonContent                                   | O                        | Must be calculated per declared unit with kgCO2e / declaredUnit equal to or greater zero; **per default calculated in Catena-X (Total - Biogenic)**  | 0.1                                                                                                                    |
| biogenicCarbonContent                                 | O                        | Must be calculated per declared unit with kg / declaredUnit equal to or greater zero                                                                 | 0.0                                                                                                                    |

### 2.3 PCF CALCULATION DATA EXCHANGE

To prove conformity with the PCF calculation integration standard, the following criteria SHOULD be applied:

- The PCF calculation tool SHOULD provide the capability to export calculation results in CSV format as described in section [2.2 PCF CALCULATION DATA FORMAT](#22-pcf-calculation-data-format)
- The PCF calculation tool SHOULD provide the capability to import PCF values in CSV format as described in section [2.2 PCF CALCULATION DATA FORMAT](#22-pcf-calculation-data-format)
- The PCF exchange tool SHOULD provide the capability to import calculation results in CSV format as described in section [2.2 PCF CALCULATION DATA FORMAT](#22-pcf-calculation-data-format)
- The PCF exchange tool SHOULD provide the capability to export PCF values in CSV format as described in section [2.2 PCF CALCULATION DATA FORMAT](#22-pcf-calculation-data-format)

[CSV Template](./assets/pcf-data-model-specification-for-calculation.csv)

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

[CX - 0029 Product Carbon Footprint Rulebook v2.0.0](https://github.com/catenax-eV/product-standardization-prod/tree/main/standards/CX-0029-ProductCarbonFootprintRulebook/2.0.0)

### 3.2 NON-NORMATIVE REFERENCES

[CX - 0026 Product Carbon Footprint Data Model v2.0.0](https://github.com/catenax-eV/product-standardization-prod/tree/main/standards/CX-0026-ProductCarbonFootprintDataModel/2.0.0)

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
