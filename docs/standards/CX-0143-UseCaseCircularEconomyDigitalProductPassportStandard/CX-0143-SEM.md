---
sidebar_position: 3
---

# 2. Aspect Models

> *This section is normantive*

## 2.1 ASPECT MODEL "DIGITAL PRODUCT PASSPORT"

### 2.1.1 INTRODUCTION

The DPP includes data about components, materials and chemical substances, information on reparability, spare parts, environmental impact and professional disposal for a product. The corresponding data models describing such physical goods will be updated, as newer versions of relevant public regulations will be published. The main basis is provided by the document \"Proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL establishing a framework for setting ecodesign requirements for sustainable products and repealing Directive 2009/125/EC\" from March 30th, 2022. The latest version of the document was the provisional agreement between the EU Council and the Parliament from January 9th, 2024. The text is informal, but the content of the final regulation was agreed between these two institutions.
Due to the last update, the title of Ecodesign Regulation has been changed to: "Proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL establishing a framework for setting ecodesign requirements for sustainable products, amending Regulation (EU) 2023/1542 and repealing Directive 2009/125/EC".

To use the model pieces of other models are imported. These have the following identifiers:

- urn:samm:io.catenax.batch:3.0.0#
- urn:samm:io.catenax.shared.part_classification:1.0.0#
- urn:samm:io.catenax.part_type_information:1.0.0#
- urn:samm:io.catenax.shared.business_partner_number:2.0.0#
- urn:samm:io.catenax.serial_part:3.0.0#
- urn:samm:io.catenax.shared.quantity:2.0.0#
- urn:samm:io.catenax.shared.uuid:2.0.0#

### 2.1.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in SAMM 2.1.0 as a modeling language conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/overview).

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/overview).

### 2.1.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons. The license information is available in github.
In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

### 2.1.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier:

```
urn:samm:io.catenax.generic.digital_product_passport:4.0.0#
```

### 2.1.5 FORMATS OF SEMANTIC MODEL

All formats can be generated through the turtle file and the [SAMM command line interface](https://github.com/eclipse-esmf).

#### 2.1.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be found in the current version 4.0.0 in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.generic.digital_product_passport/4.0.0/DigitalProductPassport.ttl
```

#### 2.1.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel". It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.generic.digital_product_passport/4.0.0/gen
```

#### 2.1.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification. It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.generic.digital_product_passport/4.0.0/gen
```

## 2.2 ASPECT MODEL "BATTERY PASS"

### 2.2.1 INTRODUCTION

The battery pass describes information collected during the lifecycle of a battery. The battery passport is implementing the requirements if the Regulation (EU) 2023/1542 of the European Parliament and of the Council of 12 July 2023 concerning batteries and waste batteries, amending Directive 2008/98/EC and Regulation (EU) 2019/1020 and repealing Directive 2006/66/EC. Additionally attributes come from the Proposal for Ecodesign for Sustainable Products Regulation (see [above](#311-introduction)).
To use the model pieces of the [Digital Product Passport](#31-aspect-model-digital-product-passport) model are imported by reference, reutilizing semantically identical parts of digital product passports from the generic data model.

### 2.2.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in SAMM 2.1.0 as a modeling language conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/next/standards/CX-0003-SAMMSemanticAspectMetaModel).

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/next/standards/CX-0003-SAMMSemanticAspectMetaModel).

### 2.2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons. The license information is available in github.
In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

### 2.2.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier:

```
urn:samm:io.catenax.battery.battery_pass:5.0.0#
```

### 2.2.5 FORMATS OF SEMANTIC MODEL

All formats can be generated through the turtle file and the [SAMM command line interface](https://github.com/eclipse-esmf).

#### 2.2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be found in the current version 5.0.0 in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.battery.battery_pass/5.0.0/BatteryPass.ttl
```

#### 2.2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel". It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.battery.battery_pass/5.0.0/gen
```

#### 2.2.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification. It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.battery.battery_pass/5.0.0/gen
```

## 2.3 ASPECT MODEL "TRANSMISSION PASS"

### 2.3.1 INTRODUCTION

The transmission passport corresponds to the [Digital Product Passport](#31-aspect-model-digital-product-passport) and its underlying regulation. By incorporating circularity parameters, the Transmission Passport aims to enhance transparency and promote a circular economy. It describes the data that is collected and available during the lifespan of a transmission.

### 2.3.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in SAMM 2.1.0 as a modeling language conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/CX-0003-SAMMSemanticAspectMetaModel).

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to [CX-0003 SAMM Semantic Aspect Meta Model](https://catenax-ev.github.io/docs/standards/CX-0003-SAMMSemanticAspectMetaModel).

### 2.3.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons. The license information is available in github.
In case of doubt the license, copyright and authors information in github overwrites the information in this specification document.

### 2.3.4 IDENTIFIER OF SEMANTIC MODEL

This semantic model has the unique identifier:

```
urn:samm:io.catenax.transmission.transmission_pass:2.0.0#
```

### 2.3.5 FORMATS OF SEMANTIC MODEL

All formats can be generated through the turtle file and the [SAMM command line interface](https://github.com/eclipse-esmf).

#### 2.3.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. It can be found in the current version 2.0.0 in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.transmission.transmission_pass/2.0.0/TransmissionPass.ttl
```

#### 2.3.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel". It can be found in the current version in the "gen" subfolder in the github repository.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.transmission.transmission_pass/2.0.0/gen
```

#### 2.3.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification.

```
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/4d239fc5709f71f39c3cf13581b5bcf960905157/io.catenax.transmission.transmission_pass/2.0.0/gen
```
