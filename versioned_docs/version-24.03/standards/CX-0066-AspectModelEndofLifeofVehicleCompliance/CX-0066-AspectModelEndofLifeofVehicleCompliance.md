
# CX-0066 Aspect Model: End of Life of Vehicle Compliance v1.0.0

## ABSTRACT

The data model End of Life of Vehicle Compliance describes the RRR calculation results according to [ISO 22628](#31-normative-references). The values represent the calculated quotas, the material masses of each fraction, the mass of the vehicle or component, the considered recycling technologies, and the list of potential dismantled parts.

## 1. INTRODUCTION

This document describes one semantic model used in the Catena-X network

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

The standard is relevant for the following roles:

- Data Provider / Consumer
- Business Application Provider
- Enablement Service Provider

### 1.2 CONTEXT

> *This section is non-normative*

The data model End of Life of Vehicle Compliance describes the RRR calculation results according to [ISO 22628](#31-normative-references). The values represent the calculated quotas, the material masses of each fraction, the mass of the vehicle or component, the considered recycling technologies and the list of potential dismantled parts.

### 1.3 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams,
examples, and notes in this specification are non-normative. Everything else in
this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**,
**REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be
interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they
appear in all capitals, as shown here.

### 1.4 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to prove, that they are conform
with the Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs).

- To proof conformity with the EndofLifeofVehicleCompliance Semantic Model Standard check your json file against the json schema.

- Every data provider of EndofLifeofVehicleCompliance data MUST provide the data conformant to the semantic model specified in this document.

- The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred.

- Every certified business application relying on EndofLifeofVehicleCompliance data MUST be able to consume data conformant to the semantic model specified in this document.

- This semantic model MUST be made available in the central Semantic Hub.

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

### 1.5 EXAMPLES

```json
{"endOfLifeofVehicleCompliance":[{
    "remainingTotalMassRecyclableMaterial":355.88,
    "brandName":"VW",
    "totalMassPretreatment":555.98,
    "dismantledMass":{"tyres":44.88,
    "batteries":21.85,
    "oilFilters":5.78,
    "dismantledFluids":22.58,
    "catalyticConverters":22.88,
    "lpgTanks":45.78,"cngTanks":55.78},
    "documentation":"Report.pdf",
    "totalMassDismantling":555.77,
    "dismantledParts":{"itemNumber":"222.555ab",
    "additionalItemName":"Rear light",
    "itemName":"Dashboard",
    "itemMass":33.88},
    "remainingVehicleMetallicContent":555.88,
    "remainingTotalMassEnergyRecovery":55.78,
    "recoverabilityRate":95,
    "vehicleMass":2876.12,
    "materials":{"glass":111.55,"elastomers":222.55,
    "metals":2876.12,
    "modifiedOrganicNaturalMaterials":33.45,
    "polymers":300.77,
    "others":444.47,
    "fluids":44.87},
    "recyclingTechnology":{"technologyName":"Selective dissolving of plastics",
    "massRecycledByTechnology":553.55,
    "technologyNumber":"2"},
    "model":"E-class",
    "recyclabilityRate":90
}]
} 
```

### 1.6 TERMINOLOGY

> *This section is non-normative*

- **brandName:**
The brand name under the vehicle has been marketed, brand name used by the OEM.

- **model:**
The model name of the vehicle.

- **totalMassPretreatment:**
The total mass of all components of a vehicle that are related to the pre-treatment.

- **dismantledMass:**
The total mass of all components of a vehicle that have been dismantled for the purpose of material reuse or material recycling.

- **batteries:**
The mass of all batteries of a vehicle.

- **oilFilters:**
The mass of all oil filters of a vehicle.

- **dismantledFluids:**
The mass of all drained fluids of a vehicle.

- **catalyticConverters:**
The mass of all catalytic converters and exhaust system filters of a vehicle.

- **lpgTanks:**
The mass of all LPG tanks a vehicle.

- **cngTanks:**
The mass of all CNG tanks a vehicle.

- **documentation:**
The file name of the report as .pdf.

- **totalMassDismantling:**
The total mass of all components of a vehicle that have been dismantled for the purpose of material reuse or material recycling and the total mass of all pre-treatment activities.

- **dismantledParts:**
The list of parts that have been dismantled.

- **additionalItemName:**
The additional information of a dismantled part like position or reference

- **itemName:**
The name of a dismantled part

- **itemMass:**
The mass of each individual dismantled part.

- **remainingVehicleMetallicContent:**
The metal content that has not been dismantled.

- **remainingTotalMassEnergyRecovery:**
The mass of material that is dedicated to energy recovery.

- **recoverabilityRate:**
The Recovery rate in %

- **recyclabilityRate:**
The Reuse and recycling rate in %

- **vehicleMass:**
The empty mass of a vehicle in operative conditions.

- **Materials:**
Material fractions

- **Glass:**
The mass of the glass fraction.

- **elastomers:**
The mass of the elastomer fraction.

- **metals:**
The mass of the metal fraction.

- **modifiedOrganicNaturalMaterials:**
The mass of the MON fraction.

- **polymers:**
The mass of the polymer fraction.

- **others:**
The mass of the others fraction.

- **fluids:**
The mass of the fluids fraction.

- **recyclingTechnology:**
Technologies considered at the calculations.

- **technologyName:**
Name of the considered technology

- **massRecycledByTechnology:**
Mass treated by the considered technology

Additional terminology used in this standard can be looked up in the glossary on
the association homepage.

Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.  
  
: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).
  
*[Source: Catena-X, CX-0002, note 3 removed]*

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 ASPECT MODEL “ENDOFLIFEOFVEHICLECOMPLIANCE”

### 2.1 INTRODUCTION

The data model End of Life of Vehicle Compliance describes the RRR calculation results according to [ISO 22628](#31-normative-references). The values represent the calculated quotas, the material masses of each fraction, the mass of the vehicle or component, the considered recycling technologies and the list of potential dismantled parts

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

### 2.3 LICENSE

This Catena-X data model is an outcome of Catena-X use case group R-Strategy Assistant.
This Catena-X data model is made available under the terms of the Creative Commons Attribution
4.0 International (CC-BY-4.0) license, which is available at Creative Commons4F4F.

### 2.4 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier:

```text
        urn:bamm:io.catenax.end_of_life_of_vehicle_compliance:1.0.0
```

This identifier MUST be used by the data provider to define the semantics of the data being transferred.

### 2.5 FORMATS OF SEMANTIC MODEL

#### 2.5.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

```text
https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.material_for_homologation/1.0.0/MaterialForHomologation.ttl

```

Please note that the linked version contains the semantic model’s latest version at the time of publication of this standard. However, it is possible that minor functional adjustments (noticeable by increments of the middle number of the version number: 1.0.0) or bug fixes - downward compatible - (noticeable by increments of the last number of the version number: 1.0.X) have been added in the meantime. Such updated or adjusted versions are not explicitly linked, as they do not require a new standardization document and were not available at the time of the publication of this standard. Accordingly, it is recommended to look for the updated semantic model in eclipse-tractusx/sldt-semantic-models repository and to use the updated version instead, as it brings important bug fixes or even additional functionalities.

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.5.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

```json

{
    "$schema": "http://json-schema.org/draft-04/schema",
    "description": "Model to depict the list of materials, parts and recycling rates and technologies of a given vehicle at the end of its life.",
    "type": "object",
    "components": {
        "schemas": {
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_BrandNameCharacteristic": {
                "type": "string",
                "description": "Characteristic to describe the manufacturer name."
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_ModelCharacteristic": {
                "type": "string",
                "description": "Characteristic to describe the commercial name of the car type."
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_VehicleMassCharacteristic": {
                "type": "number",
                "description": "Characteristic to describe the empty mass of the operational vehicle."
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic": {
                "type": "number",
                "description": "Characteristic to describe the mass of materials and parts."
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MaterialsCharacteristic": {
                "description": "Characteristic to describe the materials breakdown.",
                "type": "object",
                "properties": {
                    "metals": {
                        "description": "Share of metals in kg.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "polymers": {
                        "description": "Share of polymers in kg.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "elastomers": {
                        "description": "Share of elastomers in kg.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "glass": {
                        "description": "Share of glass in kg.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "fluids": {
                        "description": "Share of fluids in kg. E.g. fuel tank filled at least 90%.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "modifiedOrganicNaturalMaterials": {
                        "description": "Share of modified organic natural materials (MONM), such as leather, in kg.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "others": {
                        "description": "Share of others in kg.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    }
                },
                "required": [
                    "metals",
                    "polymers",
                    "elastomers",
                    "glass",
                    "fluids",
                    "modifiedOrganicNaturalMaterials",
                    "others"
                ]
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_DismantledMassCharacteristic":{
                "description": "Characteristic to describe the mass of dismantled components.",
                "type": "object",
                "properties": {
                    "dismantledFluids": {
                        "description": "Mass of dismantled fluids in kg.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "batteries": {
                        "description": "Mass of dismantled batteries in kg.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "oilFilters": {
                        "description": "Mass of dismantled oil filters in kg.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "lpgTanks": {
                        "description": "Mass of dismantled LPG tanks in kg.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "cngTanks": {
                        "description": "Mass of dismantled CNG tanks in kg",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "tyres": {
                        "description": "Mass of dismantled tyres in kg.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "catalyticConverters": {
                        "description": "Mass of dismantled catalytic converters in kg.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    }
                },
                "required": [
                    "dismantledFluids",
                    "batteries",
                    "oilFilters",
                    "lpgTanks",
                    "cngTanks",
                    "tyres",
                    "catalyticConverters"
                ]
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_ItemNumberCharacteristic": {
                "type": "string",
                "description": "Characteristic to describe the item number of the dismantled part."
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_ItemNameCharacteristic": {
                "type": "string",
                "description": "Characteristic to describe the item name of the dismantled part."
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_DismantledPartsCharacteristic": {
                "description": "Characteristic to describe the list of dismantled parts.",
                "type": "object",
                "properties": {
                    "itemNumber": {
                        "description": "Item number of the dismantled part.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_ItemNumberCharacteristic"
                    },
                    "itemName": {
                        "description": "Name of the dismantled part.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_ItemNameCharacteristic"
                    },
                    "itemMass": {
                        "description": "Mass of the dismantled part.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "additionalItemName": {
                        "description": "Item name of the dismantled parts which are attached in addition.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_ItemNameCharacteristic"
                    }
                },
                "required": [
                    "itemNumber",
                    "itemName",
                    "itemMass",
                    "additionalItemName"
                ]
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_DocumentationCharacteristic": {
                "type": "string",
                "description": "Characteristic to describe a report document in pdf format."
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_RecyclabilityRateCharacteristic": {
                "type": "number",
                "description": "Characteristic to represent the recyclability rate."
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_RecoverabilityRateCharacteristic": {
                "type": "number",
                "description": "Characteristic to describe the recoverability rate."
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_TechnologyNumberCharacteristic": {
                "type": "string",
                "description": "Characteristic to describe the list of numbers of the used recycling technologies within the type."
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_TechnologyNameCharacteristic": {
                "type": "string",
                "description": "Characteristic to describe the name of the used recycling technology."
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_RecyclingTechnologyCharacteristic": {
                "description": "Characteristic to describe the used recycling technologies within the type.",
                "type": "object",
                "properties": {
                    "technologyNumber": {
                        "description": "List of numbers of the used recycling technologies within the type.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_TechnologyNumberCharacteristic"
                    },
                    "technologyName": {
                        "description": "Name of the used recycling technology.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_TechnologyNameCharacteristic"
                    },
                    "massRecycledByTechnology": {
                        "description": "Mass which is recycled by the listed recycling technology",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    }
                },
                "required": [
                    "technologyNumber",
                    "technologyName",
                    "massRecycledByTechnology"
                ]
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_EndOfLifeComplianceEntity": {
                "description": "Entity that represents the list of materials, parts and recycling rates and technologies of a given vehicle at the end of its life.",
                "type": "object",
                "properties": {
                    "brandName": {
                        "description": "Manufacturer name.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_BrandNameCharacteristic"
                    },
                    "model": {
                        "description": "Comercial name of the car type.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_ModelCharacteristic"
                    },
                    "vehicleMass": {
                        "description": "Empty mass of the operational vehicle.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_VehicleMassCharacteristic"
                    },
                    "materials": {
                        "description": "Materials breakdown.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MaterialsCharacteristic"
                    },
                    "dismantledMass": {
                        "description": "Mass of dismantled components.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_DismantledMassCharacteristic"
                    },
                    "dismantledParts": {
                        "description": "List of dismantled parts.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_DismantledPartsCharacteristic"
                    },
                    "totalMassPretreatment": {
                        "description": "Total mass of pretreatment.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "documentation": {
                        "description": "A report document in pdf format as attachment.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_DocumentationCharacteristic"
                    },
                    "recyclabilityRate": {
                        "description": "Recyclability rate.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_RecyclabilityRateCharacteristic"
                    },
                    "recoverabilityRate": {
                        "description": "Recoverability rate.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_RecoverabilityRateCharacteristic"
                    },
                    "remainingTotalMassRecyclableMaterial": {
                        "description": "Remaining total mass of non-metallic residue treatment.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "remainingTotalMassEnergyRecovery": {
                        "description": "Remaining total mass of energy recoverable materials.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "totalMassDismantling": {
                        "description": "Total mass dismantling.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "remainingVehicleMetallicContent": {
                        "description": "Remaining vehicle metallic content.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_MassCharacteristic"
                    },
                    "recyclingTechnology": {
                        "description": "List of the used recycling technologies.",
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_RecyclingTechnologyCharacteristic"
                    }
                },
                "required": [
                    "brandName",
                    "model",
                    "vehicleMass",
                    "materials",
                    "dismantledMass",
                    "dismantledParts",
                    "totalMassPretreatment",
                    "documentation",
                    "recyclabilityRate",
                    "recoverabilityRate",
                    "remainingTotalMassRecyclableMaterial",
                    "remainingTotalMassEnergyRecovery",
                    "totalMassDismantling",
                    "remainingVehicleMetallicContent",
                    "recyclingTechnology"
                ]
            },
            "urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_EndOfLifeOfVehicleComplianceCharacteristic": {
                "description": "Characteristic to describe the list of materials, parts and recycling rates and technologies of a given vehicle at the end of its life.",
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_EndOfLifeComplianceEntity"
                },
                "uniqueItems": true
            }
        }
    },
    "properties": {
        "endOfLifeofVehicleCompliance": {
            "description": "Property that references the list of materials, parts and recycling rates and technologies of a given vehicle at the end of its life.",
            "$ref": "#/components/schemas/urn_bamm_io.catenax.end_of_life_of_vehicle_compliance_1.0.0_EndOfLifeOfVehicleComplianceCharacteristic"
        }
    },
    "required": [
        "endOfLifeofVehicleCompliance"
    ]
}
```

#### 2.5.3 aasx

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to [SMT](#32-non-normative-references).

Note: As soon as the specification V3.0 of the Asset Administration Shell specfication is available
an update will be provided.

### 2.6 SEMANTIC MODEL

The data model is described in SAMM . A html documentation can be generated from the rdf turtle file.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

CX-0003 SAMM Aspect Meta Model, Version 1.0.1

CX-0004 Governance Process for Semantic Models, Version 1.0.1

CX-0004 Governance Process for Semantic Models

CX-0018 Eclipse Data Space Connector (EDC)

CX-0001 EDC Discovery API, Version 1.1

ISO 22628 Road vehicles — Recyclability and recoverability — Calculation method: https://www.iso.org/standard/35061.html

VDA 231-106 - https://webshop.vda.de/VDA/de/vda-231-106-102021

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

[SMT] How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
