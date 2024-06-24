# CX - 0045 Data Chain Template v1.2.0

## ABSTRACT

This component of the capability Cross Company Data Chain Management is a data model, so that the
Item Relationship Service API, and other applications can work not only on existing semantic models,
but also to new defined data chain relevant aspect models which fit to the template.
With this model template in place, interoperability is being provided, because participants defining
their connection between digital twins according to that template, will be able to access connected data.
A data chain is a chain of linked data. The minimal set of information necessary to build this are
two objects and one link between those objects. Objects in Catena-X are called Asset Administration
Shell (AAS) or digital twins and linked digital twins are data chains. This template describes the
minimal information of a link between two digital twins, so the most flexibility is given for
further use-cases to build use-case specific data chains.

## FOR WHOM IS THE STANDARD DESIGNED

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

> *Relevant only for existing standards. At the new standard, please delete*

## 1 INTRODUCTION

This component is used to standardize the way in which an aspect model of a digital twin needs to be
modelled, so that services and products which consume linked data can work and that an
interoperability on data chain level can exist. It is a minimal set of conditions to be applied to
such aspect models that model a connection between two digital twins.
This minimal set of conditions shall guide developer of new services and semantic models in the
process of creating new solutions for Catena-X. It is an easy extendable template to fit the
use-case needs.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

List for which roles the standard is relevant.

- Core Service Provider
- Data Provider
- Business Application Provider
- Enablement Service Provider
- Consulting Services Provider

This standard is only applicable when a use-case has the need to extend existing Aspect Models
with models connecting several Digital Twins. When a use-case has the need to extend the
existing Aspect Models with models which connect severalDigital Twins with each other. Then this
standard applies.
A so-called Data Chain exists, when multiple Digital Twins are semantically connected to each other.
For example, a Bill of Materials (BoM) Structure, where each part results in a separate Digital Twin.
To have the same structure on how Data Chains can be build this template applies. This provides a
lean structure that can be extended with Use-Case specific information and attributes.

This standard is only to be applied in the creation process of new aspect models, which connects
digital twins in the Catena-X Network.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The following dependencies and preconditions exist. This aspect model template is written in
SAMM 2.0 as a modeling language, which is an industry standard from the [open manufacturing platform](https://openmanufacturingplatform.github.io/sds-documentation/bamm-specification/2.0.0/index.html).

SAMM is used to model Asset Administration Shell submodels, which are attached to digital twins in
the form of an Asset Administration Shell (AAS). All submodels in Catena-X are managed in the
semantic hub. A data model is requested and exchanged via Catena-X using an Eclipse Dataspace
Connector (CX - 0001 EDC Discovery API), which is a separate Catena-X standard.

The following preconditions must be met that a developer is bound to use this template as reference:

- The to be developed semantic model describes a data chain (e.g., linking one digital twin with another)
- The to be developed semantic model is used or meant to be accessed by multiple use-cases.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to prove, that they are conform
with the Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs).

To prove conformity with the Data Chain Template, use the schema (Appendix) and check if the
necessary structure is implicitly in the Aspect to prove. What is necessary:

- The Object structure **MUST** match the template, but **MAY** contain more attributes
- see chapter [2 DATA CHAIN ASPECT TEMPLATE](#2-data-chain-aspect-template) for more conformity assessment criterias
  
### 1.4 EXAMPLES

The JSON schema describes the schema of the template. The following examples show
minimal setup's of this template.

```json
{
    "catenaXId": "urn:uuid:055c1128-0375-47c8-98de-7cf802c3241d",
    "childItems": [
        {
            "catenaXId": "urn:uuid:7BeA9fAE-A1ca-D164-3BDF-0E5bac5E5b7d",
            "businessPartner" : "BPNL50096894aXYZ",
        }
    ]
}
```

or

```json
{
    "catenaXId": "urn:uuid:055c1128-0375-47c8-98de-7cf802c3241d",
    "parentItems": [
        {
            "catenaXId": "urn:uuid:7BeA9fAE-A1ca-D164-3BDF-0E5bac5E5b7d",
            "businessPartner" : "BPNL50096894aXYZ",
        }
    ]
}
```

This template describes the minimal necessary set of attributes for a valid data chain in Catena-X.
A digital twin with a catenaXId and at least one linked “child” catenaXId or "parent" catenaXId is necessary to connect two individual digital
twins, which can be provided by different companies. The use-cases have the possibility to
extend this to their behalf and publish it as a separate Aspect Model.

The partentItems and the childItems contain objects with at least a catenaXId to identify the digital twin and a businessPartner to identify where to find the digital twin.

### 1.5 TERMINOLOGY

> *This section is non-normative*

Aspect Meta Model (SAMM): A Meta description model to describe AAS

Business Partner Number (BPN):A BPN is the unique identifier of a partner within Catena-x.

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 DATA CHAIN ASPECT TEMPLATE

> *This section is normative*

The purpose of this data model is to enable newly defined data chain relevant aspect models to
operate with the Item Relationship Service API, which is described in a separate [reference implementation](https://github.com/eclipse-tractusx/item-relationship-service).

Classical naming convention:

- the object **MUST** be a digital twin / AAS (Asset Administration Shell)
- the object **MUST** be identified by catenaXId
- the array of “child” objects **MUST** be identified by childItems
- the array of “child” objects **MUST** contain at least one element
- the item of a child item array element **MUST** be identified by catenaXId
- the array of "parent" objects **MUST** be identified by parentItems
- the array of "parent" objects **MUST** contain at least one element
- the item of a parent item array element **MUST** be identified by catenaXId

This template **MAY** be extended with use-case specific attributes. The template **MUST** be
published as a new aspect model.

Changes in the minimal aspect model regarding the relationship of a data chain **RECOMMENDED** to be
always backward compatible, so that existing data chains do not break.

### 2.1 FORMATS OF TEMPLATE

#### 2.1.1 JSON Schema

##### JSON schema for relationship types of children

```json
{
    "$schema": "https://json-schema.org/draft-04/schema",
    "type": "object",
    "components": {
        "schemas": {
            "urn_bamm_io.catenax.relationship_template_0.0.0_CatenaXIdTraitCharacteristic": {
                "type": "string",
                "pattern": "(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"
            },
          "urn_bamm_io.catenax.relationship_template_0.0.0_BpnTrait": {
            "type" : "string",
            "pattern" : "^(BPNL)([0-9]{8})([a-zA-Z0-9]{4})$"
          },
            "urn_bamm_io.catenax.relationship_template_0.0.0_ChildData": {
                "type": "object",
                "properties": {
                    "catenaXId": {
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.relationship_template_0.0.0_CatenaXIdTraitCharacteristic"
                    },
                    "businessPartner": {
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.relationship_template_0.0.0_BpnTrait"
                    }
                },
                "required": [
                    "catenaXId",
                    "businessPartner"
                ]
            },
            "urn_bamm_io.catenax.relationship_template_0.0.0_SetOfChildPartsCharacteristic": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/urn_bamm_io.catenax.relationship_template_0.0.0_ChildData"
                },
                "uniqueItems": true
            }
        }
    },
    "properties": {
        "catenaXId": {
            "$ref": "#/components/schemas/urn_bamm_io.catenax.relationship_template_0.0.0_CatenaXIdTraitCharacteristic"
        },
        "businessPartner": {
            "$ref": "#/components/schemas/urn_bamm_io.catenax.relationship_template_0.0.0_BpnTrait"
        },
        "childItems": {
            "$ref": "#/components/schemas/urn_bamm_io.catenax.relationship_template_0.0.0_SetOfChildPartsCharacteristic"
        }
    },
    "required": [
        "catenaXId",
        "childItems"
    ]
}
```

##### JSON Schema for Relationship types of parent

```json
{
    "$schema": "https://json-schema.org/draft-04/schema",
    "type": "object",
    "components": {
        "schemas": {
            "urn_bamm_io.catenax.relationship_template_0.0.0_CatenaXIdTraitCharacteristic": {
                "type": "string",
                "pattern": "(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"
            },
            "urn_bamm_io.catenax.relationship_template_0.0.0_BpnTrait": {
                "type" : "string",
                "pattern" : "^(BPNL)([0-9]{8})([a-zA-Z0-9]{4})$"
            },
            "urn_bamm_io.catenax.relationship_template_0.0.0_ParentData": {
                "type": "object",
                "properties": {
                    "catenaXId": {
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.relationship_template_0.0.0_CatenaXIdTraitCharacteristic"
                    },
                    "businessPartner": {
                        "$ref": "#/components/schemas/urn_bamm_io.catenax.relationship_template_0.0.0_BpnTrait"
                    }

                },
                "required": [
                    "catenaXId",
                    "bussinessPartner"
                ]
            },
            "urn_bamm_io.catenax.relationship_template_0.0.0_SetOfParentPartsCharacteristic": {
                "type": "array",
                "items": {
                    "$ref": "#/components/schemas/urn_bamm_io.catenax.relationship_template_0.0.0_ParentData"
                },
                "uniqueItems": true
            }
        }
    },
    "properties": {
        "catenaXId": {
            "$ref": "#/components/schemas/urn_bamm_io.catenax.relationship_template_0.0.0_CatenaXIdTraitCharacteristic"
        },
        "businessPartner": {
            "$ref": "#/components/schemas/urn_bamm_io.catenax.relationship_template_0.0.0_BpnTrait"
        },
        "parentItems": {
            "$ref": "#/components/schemas/urn_bamm_io.catenax.relationship_template_0.0.0_SetOfParentPartsCharacteristic"
        }
    },
    "required": [
        "catenaXId",
        "parentItems"
    ]
}
```

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX - 0010 Business Partner Number
- CX - 0002 Digital Twins in Catena - X
- CX - 0003 SAMM Aspect Meta Model
- CX - 0004 Governance Process

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

- CX - 0001 EDC Discovery API

Aspect models built upon this template:

- CX - 0020 Aspect Model: SingleLevelBomAsBuilt
- CX - 0042 Aspect Model: SingleLevelBomAsPlanned

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

not applicable

## ANNEXES

### FIGURES

> *This section is non-normative*

not applicable

### TABLES

> *This section is non-normative*

not applicable

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
