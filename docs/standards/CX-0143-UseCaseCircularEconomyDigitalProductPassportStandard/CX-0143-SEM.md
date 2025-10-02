---
sidebar_position: 3
---

# 2. Aspect Models

:::warning

The following standards was identified as not fully **backward compatibility with CX-Jupiter**  and was allowed to apply the required changes through a **fast-track process** to be included in the CX-Saturn release.
These exceptions will be released together with the  *CX-Saturn Go-Live** of all other standards on **25.11**.

**Therefore, this version of the standard is not eligible for certification yet**

:::

> *This section is normative*

To ensure interoperability and semantic consistency across supply chain partners and their systems, within the Catena-X ecosystem, Digital Product Passports are implemented as Aspect Model - data structures that describe specific characteristics or lifecycle stages of a product. Such a Digital Product Passport Aspect Model is attached to a digital representation of a physical product or good - its Digital Twin. Catena-X has adopted the Semantic Aspect Meta Model (SAMM) as the foundation for defining and exchanging the format of Digital Product Passports Aspect Models.

For data exchange product or good, a corresponding specific Digital Product Pass Aspect Model is provided below. To enhance maintainability and promote reusability, such an Aspect Model **MAY** be modularized into smaller, self-contained components sourced by a specific Digital Product Pass Aspect Model. Additional needs for Digital Product Passports for specific physical products or goods **SHOULD** be addressed by adding Digital Product Pass Aspect Models reutilizing existing modules or components available, in particular from the "Generic Digital Product Passport" mentioned below.

Data exchange related to Digital Product Passports in Catena-X **MUST** be mandated to physical products or goods for the automotive industry only.

## 2.1 ASPECT MODEL "Generic DIGITAL PRODUCT PASSPORT"

### 2.1.1 INTRODUCTION

The Digital Product Passport includes data about components, materials and chemical substances, information on reparability, spare parts, environmental impact and professional disposal for a product. The Generic Digital Product Passport Aspect Model in Catena-X serves as a universal, modular framework for representing such product-related data across diverse physical goods. It is designed to align with the EU Ecodesign for Sustainable Products Regulation (ESPR), which mandates Digital Product Passports for a wide range of product categories and provides a flexible set of reusable modules that can be tailored to specific product types or regulatory requirements, while maintaining a common core structure recognizable by data providers and consumers among different product categories in the automotive industry. The Generic Digital Product Passport "as such" **MUST NOT** be used for exchanging information, it is exclusively meant to provide reusable modules sourced in specific passports.

Specific Digital Product Passports **SHOULD** source and therefore build upon suitable modules from the Generic Digital Product Passport to ensure regulatory compliance and consistency in Catena-X.

### 2.1.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in SAMM 2.1.0 as a modeling language conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/CX-0003-SAMMSemanticAspectMetaModel).

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/CX-0003-SAMMSemanticAspectMetaModel).

### 2.1.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons. The license information is available in github.
In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

### 2.1.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier:

```
urn:samm:io.catenax.generic.digital_product_passport:6.0.0#
```

### 2.1.5 FORMATS OF SEMANTIC MODEL

All formats can be generated through the turtle file and the [SAMM command line interface](https://github.com/eclipse-esmf).

#### 2.1.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be found in the current version in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.generic.digital_product_passport/6.0.0/DigitalProductPassport.ttl
```

#### 2.1.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel". It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.generic.digital_product_passport/6.0.0/gen
```

#### 2.1.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification. It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.generic.digital_product_passport/6.0.0/gen
```

## 2.2 ASPECT MODEL "BATTERY PASS"

### 2.2.1 INTRODUCTION

The Battery Pass Aspect Model is designed to enable transparent, standardized, and interoperable documentation of battery-related data across the entire lifecycle - from raw material extraction to manufacturing, usage, and end-of-life recycling. Its primary purpose is to support compliance with the EU Battery Regulation, which mandates the use of Digital Product Passports (DPPs) for batteries used in electric vehicles. The model is also aligned with the broader goals of the EU Ecodesign for Sustainable Products Regulation (ESPR).

### 2.2.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in SAMM 2.1.0 as a modeling language conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/CX-0003-SAMMSemanticAspectMetaModel).

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/CX-0003-SAMMSemanticAspectMetaModel).

### 2.2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons. The license information is available in github.
In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

### 2.2.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier:

```
urn:samm:io.catenax.battery.battery_pass:6.0.0#
```

### 2.2.5 FORMATS OF SEMANTIC MODEL

All formats can be generated through the turtle file and the [SAMM command line interface](https://github.com/eclipse-esmf).

#### 2.2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be found in the current version in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.battery.battery_pass/6.0.0/BatteryPass.ttl
```

#### 2.2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel". It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.battery.battery_pass/6.0.0/gen
```

#### 2.2.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification. It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.battery.battery_pass/6.0.0/gen
```

## 2.3 ASPECT MODEL "TRANSMISSION PASS"

### 2.3.1 INTRODUCTION

The Transmission Pass in the Catena-X ecosystem is a specialized Aspect Model designed to digitally represent key lifecycle and sustainability data for transmission systems used in vehicles. It supports the automotive industry's shift toward greater transparency, traceability, and regulatory compliance across the supply chain.

The Transmission Pass describes the data that is collected and available during the lifespan of a transmission. It captures essential data about the transmission system, including manufacturing details, material composition, performance characteristics

Based on the [Generic Digital Product Passport](#31-aspect-model-digital-product-passport), it supports compliance with EU sustainability regulations, such as the Ecodesign for Sustainable Products Regulation (ESPR), by enabling structured reporting on environmental impact, durability, and recyclability.

### 2.3.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in SAMM 2.1.0 as a modeling language conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/CX-0003-SAMMSemanticAspectMetaModel).

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/CX-0003-SAMMSemanticAspectMetaModel).

### 2.3.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons. The license information is available in github.
In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

### 2.3.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier:

```
urn:samm:io.catenax.transmission.transmission_pass:3.0.0#
```

### 2.3.5 FORMATS OF SEMANTIC MODEL

All formats can be generated through the turtle file and the [SAMM command line interface](https://github.com/eclipse-esmf).

#### 2.3.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be found in the current version in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.transmission.transmission_pass/3.0.0/TransmissionPass.ttl
```

#### 2.3.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel". It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.transmission.transmission_pass/3.0.0/gen
```

#### 2.3.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.transmission.transmission_pass/3.0.0/gen
```

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
