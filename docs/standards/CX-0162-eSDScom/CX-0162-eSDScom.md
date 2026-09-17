# CX-0162 eSDScom v1.0.0

## FOR WHOM IS THE STANDARD DESIGNED

Safety data sheets affect all OEMs and suppliers who purchase/sell, use or contain chemicals in components/systems. Data management of these legally required documents is only possible with a high level of administrative effort for every actor in the supply chain.
In an increasingly environmentally conscious world, the standardized exchange of SDS data is of great importance to reduce administrative costs along the supply chain and to ease the way of automated validation of the incoming data.

The following supply-chain roles benefits from the standard:

- Manufacturers, importers, distributors of chemicals (term explained under terminology)
- Downstream users and customers requiring SDS/ext. SDS for chemical compliance reasons (right to operate)
- EH&S/Product Stewardship experts (e.g. chemists, toxicologists, regulatory managers, warehouse and plant operators, fire brigades, etc.)
- Software vendors and IT-system providers for EH&S solutions
- Participants in Digital Products Passport (DPP) initiatives, who need SDS-aligned data for interoperability and traceability

## 1 INTRODUCTION

The eSDScom standard defines a machine-readable, interoperable data model for Safety Data Sheets (SDS) and extended SDS (ext. SDS).
It enables consistent exchange of regulatory and product stewardship information across supply chains and IT systems. This standard incorporates the latest eSDScom updates as well as regional/regulatory extensions (including UK-REACH, KKDIK, Biocidal Products Regulation, dangerous goods information (ADR/RID, IMDG and ICAO-TI/IATA-DGR), California Proposition 65, Swiss Major Accidents Ordinance, etc.), and outlines key processes criteria and reference implementations, where applicable.
This standard includes relevant requirements for:

- data provider, that want to provide SDS data through Catena-X,
- data consumer, that want to process SDS in Catena-X and
- application developer/ provider supporting the provisioning and processing of SDS values.
  
It provides information about the core components which are used as well as the structure of the Digital Twin Registry entry, the exchanged data model and the EDC (Eclipse Dataspace Connector) data structure.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

The eSDScom standard defines a common data model for the structured exchange of information required for Safety Data Sheets (SDS) and how the SDS exchange in Catena-X takes place and which standards need to be fulfilled to be interoperable in the Catena-X Network.

Audience: The eSDScom standard is designed for a broad range of stakeholders involved in the creation, exchange, and application of Safety Data Sheets (SDS) and extended SDS (ext. SDS), including regulatory/EHS experts, data/model owners responsible for SDS/ext. SDS content and structure, also system integrators, service providers, regulatory authorities, industry associations and consortia.

The following supply-chain roles benefits from the standard:

- Manufacturers, importers, distributors of chemicals (term explained under terminology).
- Downstream users and customers requiring SDS/ext. SDS for chemical compliance reasons (right to operate).
- EH&S/Product Stewardship experts (e.g. chemists, toxicologists, regulatory managers, warehouse and plant operators, fire brigades, etc.).
- Software vendors and IT-system providers for EH&S solutions.
- Participants in Digital Products Passport (DPP) initiatives, who need SDS-aligned data for interoperability and traceability.

This standard is relevant for the following roles within the Catena-X ecosystem:

- Data Provider / Consumer
- Business Application Provider

Disclaimer/legal Background:
This standard or a Safety Datasheet transmission under this standard is not alone sufficient to fulfill REACH requirements. Currently, EU regulations still require to send such information as a "document", for example as a PDF file in addition to this structured form (so-called “delivering duty”). However, the duty of digital submission of SDS/ext. SDS is expected to be implemented as part of the upcoming REACH revision process.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The eSDScom standard defines a structured data model that enables the exchange of SDS between suppliers and OEMs in the automotive industry. It is designed to reduce the current manual effort involved in gathering and processing data needed for occupational workplace and environmental safety, which today is commonly exchanged via e-Mail and PDF files.

This standard is not embedded in a broader Catena-X use case or initiative but operates as a standalone specification that supports the bilateral exchange of information. It is applicable whenever a company needs to obtain SDS data.

To participate in the eSDScom use case, the following single standards MUST be fulfilled by all participants for which the standard is relevant:

- CX-0002 Digital Twins in Catena-X v2.3.0
- CX–0018 Sovereign Data Exchange v4.1.1

To participate in the eSDScom use case, the following single standard MUST be fulfilled only by data providers:

- CX-0162 eSDScom

In the Catena-X technical landscape, the standard assumes the use of CX-0126-IndustryCorePartType. The architecture follows a pull-based pattern: data is pushed from supplier to consumer (or other way around) but made accessible by the data provider.

This standard applies equally to Data Providers and Consumers. All parties involved in the exchange must implement the agreed data structure and access patterns to ensure interoperability within the Catena-X network.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants* and their solutions will need to prove, that they conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please refer the process of conformity assessment and certification.
Since this document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria defined in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance with these documents SHOULD BE checked with the tools provided for these components.

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

In terms of conformity the openAPI specification of the application or endpoints being exposed via the Tractus-X EDC or any other CX-0018 compliant connector MUST be checked against the standardized openAPI specification.

Examples of data assets and contract offer structure in the Tractus-X EDC or any other CX-0018 compliant connector MUST correspond to the described structure.

The versions of the standardization documents valid for this standard are mentioned in sections where the standalone standards, normative references and non-normative references are listed. The valid versions are not specifically mentioned in the body text.

Please refer to: https://catena-x.net/en/catena-x-introduce-implement/certification for the process of conformity assessment and certification.

*Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases.

### 1.4 EXAMPLES

An example would be an aspect model to exchange information about the SDS of a product. This aspect model would specify that the following information is mandatory to be transferred: the SDS itself as human readable file (e.g. PDF) but also the SDS identifier, the product SDS version, its regional scope and language and the product category, revision date, data provider (supplier)/consumer (receiver) details.

1.4.1. Example data elements

The SDS data model includes generally the 16 core sections of the UN-GHS safety data sheet as amended and implemented in all supported jurisdictions; e.g. for the EU: REACH and CLP including EU specific classifications (ED HH/ED ENV, PBT/vPvB, PMT/vPvM):

1. identification,  
2. hazards,  
3. composition,  
4. first aid,  
5. fire-fighting,  
6. accidental release,  
7. handling/storage,  
8. exposure controls,  
9. physical/chemical properties,  
10. stability/reactivity,  
11. toxicology,  
12. ecotoxicology,  
13. disposal,  
14. transport,  
15. regulatory,  
16. other info.  

For coverage, see also https://esdscom.eu  

#### 1.4.2 Example data fields

Dangerous Goods Transport requirements for air (ICAO-TI/IATA-DGR) and sea transport (IMDG) as well as local transport (EU: ADN and ADR/RID, while other regions combine this into one regulation):  

- UnNoAdrRidAdn
- UnNoImdg
- UnNoIcao: passenger vs. cargo differentiation; packing instructions; max quantities (e.g., “500 mL or 500 g”); special provisions; ERG; additional transport info
- ProperShippingName: includes author-decided suffixes (mixture/solution/molten/stabilized/temperature controlled); marine pollutant flag; sender-decided qualifiers (empty/uncleaned/waste)

Additional regulatory requirements, e.g. Biocidal Products (EU: Regulation 528/2012) or specific data for EU Poison Center Notification:  

- isBiocide/isTreatedArticle flags
- AuthorizationNo
- MainGroup/ProductType
- InstructionsForUse

Relevant national/regional requirements for supported jurisdictions, e.g.:  

- CH: Major Accidents thresholds.
- US: California Prop 65 fields (listing, basis, right-to-know, safe harbor levels)
- TR: KKDIK SDS approval field

1.4.3 Example payload
An example of the JSON payload will be finalized at a later date.

### 1.5 TERMINOLOGY

> *This section is non-normative*

The following terms are especially relevant for the understanding of the standard:

Safety Datasheet (SDS):  
The Safety Data Sheet (SDS) is a legally required, worldwide standardized 16-section formatted document that is a key element in the supply-chain communication. It provides comprehensive information on hazardous substances and mixtures for the professional user, including its properties, hazards, and safe handling procedures. Including but not limited to information on the identity of the chemical product, on the assigned hazard classes and categories, on safe use and on measurements in case of an accident. It is prepared by the manufacturer or supplier and used at the industrial receiver side for their own internal environmental and human health related risk management. Some content may be different in the SECTIONs 1,2,3,8,13,14 and 15 due to legal area specific information required. SDS can be provided electronically or on paper.

Extended Safety Datasheet (ext. SDS):
A Safety Data Sheet to which exposure scenarios are attached is required for hazardous substances above 10 tons per year. Exposure scenarios are part of the chemical safety report which has to be prepared in the registration process under REACH. They describe the conditions of the safe use for all uses identified in the registration dossier.

Business Partner Number (BPN):
A BPN is the unique identifier of a partner within Catena-X. Additional terminology used in this standard can be looked up in the glossary on the association homepage.

Aspect Model:
A formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an aspect.

Note 1: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model, see CX-0003 SAMM Aspect Meta Model v1.1.0.

Note 2: Aspect models are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

Chemicals: this terms covers substances and mixtures as defined in chemical regulations like REACH and CLP or other jurisdictions.

OCR: optical character recognition

IAM: Identity and Access Management

## 2 MAIN CONTENT

> *This section is normative*

### 2.1 eSDScom

#### 2.1.1 LIST OF STANDALONE STANDARDS

The following standards MUST be fulfilled by data providers (suppliers) and consumers (receivers) participating in the eSDScom use case:

- CX-0018 Dataspace Connectivity v4.1.1
- CX-0126 IndustryCorePartType v2.1.1
- CX-0152 Policy Constraints For Data Exchange v1.0.0

#### 2.1.2 DATA REQUIRED

The standard extends the requirements from CX-0126 IndustryCorePartType:

**The Digital Twin MUST be described as a PartRole.**

Specific asset IDs are used to identify digital twins when looking up or searching for these digital twins. This is a required to connect the digital twins of the engineered parts to its digital twins. Mandatory specific asset IDs ensure that at least this information is available for the digital twin.

All other data required from CX-0126 IndustryCorePartType v2.1.1 apply as specified in the standard.

**The aspect model "EsdscomDatasheetFeed"** MUST be attached to the digital twin. Information on the SDS/ext. SDS MUST NOT be provided in any other way than with the aspect model "EsdscomDatasheetFeed".

##### 2.1.2.1 Searching for decentralized Digital Twin Registries

To find decentralized Digital Twin Registries of related parties in Catena-X, app provider MUST follow the CX-0002 Digital Twins in Catena-X v2.3.0 Standard.

##### 2.1.2.2 Searching for decentralized Digital Twin Registries

To find decentralized Digital Twin Registries of related parties in Catena-X, app provider MUST follow the CX-0002 Digital Twins in Catena-X v2.3.0 Standard.

##### 2.1.2.3 Registration of the Digital Twin and the eSDScom Submodel in the Digital Twin Registry

The eSDScom use case utilizes Asset Administration Shell (AAS) logic and Material Twins. Therefore Digital Twins SHOULD be registered in the decentralized Digital Twin Registry (DTR). In order to lookup the twin ID, the data provider MUST register the twins with the specificAssetIds manufacturerPartId and digitalTwinType=PartType.

##### 2.1.2.4 EDC Data Asset Structure

###### 2.1.2.4.1 Data Asset

The Data Assets need to be registered in the EDC as follows:

Note: Expressions in double curly braces \{\{\}\} must be substituted with a corresponding value.

```json
{
   "@context": {
      "dct": "http://purl.org/dc/terms/",
      "cx-taxo": "https://w3id.org/catenax/taxonomy#",
      "cx-common": "https://w3id.org/catenax/ontology/common#"
   },
   "@type": "Asset",  
   "@id": "{{CONNECTOR_ASSET_ID}}",
   "properties": {
      "dct:type": {"@id": "cx-taxo: esdscomExchange"},
      "cx-common:version": "1.0.0",
      "aas-semantics:semanticId": {"@id": "urn:samm:io.catenax.esdscom:1.0#eSDScom"}  
   },
   "dataAddress": {
      "@type": "DataAddress",
      "type": "HttpData",
      "baseUrl": "{{ SUBMODEL_ENDPOINT }}",
      "proxyQueryParams": "false",
      "proxyBody": "false",
      "proxyPath": "true",
      "proxyMethod": "false",
   }
}
```

The data asset MUST contain the following properties with the corresponding values:

- dct:type for type (as @id reference), see also CX-0018
- cx-common:version for version, see also CX-0018

The following values MUST be present as EDC asset properties:

- aas-semantics:semanticId: MUST contain the value: "urn:samm:io.catenax.esdscom:1.0#esdscom"
- cx-common:version: MUST contain the value: "1.0.0"
- dct:type: MUST follow the schema: \{"@id":"cx-taxo:esdscomExchange"\}

The following attributes MUST be set within the edc:dataAddress section:

- edc:type: MUST contain the value: "edc:HttpData"
- edc:proxyBody: MUST contain the value: "true"
- edc:proxyPath: MUST contain the value: "true"
- edc:proxyQueryParams: MUST contain the value: "true"
- edc:proxyMethod: MUST contain the value: "true"
- edc:contentType: MUST contain the value: "application/json"

The requester of an asset MUST be able to handle multiple assets for this endpoint, being differentiated only by the version. The requester SHOULD choose the asset with the highest compatible version number implemented by themselves. If the requester cannot find a compatible version with their own, the requester MUST terminate the data transfer.  

###### 2.1.2.4.2 EDC Policy Structure

By law, Safety Data Sheet information is public along the supply chain. This translates into a "one-down" data sharing policy: The next actor in the supply chain must be allowed to receive this data, while it is not necessarily shared upstream or further downstream.

A participant mentioned under 1.1 AUDIENCE & SCOPE MUST agree to the overall Catena-X Terms and Condition as well as the general FrameworkAgreement DataExchangeGovernance:1.0. This follows the first SSI setup originally released with Catena-X Rel. 3.2. For more details see the corresponding standards which are NOT part of this document.

The FrameworkAgreement and the following UsagePurpose Cx.esdscom.base:1 MUST be added to the asset.

###### 2.1.2.4.3 Contract Definition

Contract definitions of data providers MUST follow the structure as defined in CX-0018 Dataspace Connectivity v4.1.1.

#### 2.1.3 ADDITIONAL REQUIREMENT

As the IDS protocol is being used, data MUST NOT be transferred before a corresponding contract negotiation has been successfully passed by the participants of the data exchange and a valid contract is present as described in CX-0018 V4.1.1. The required data offers MUST be discoverable through the Digital Twin Registry as submodel endpoints.  

##### POLICY CONSTRAINTS FOR DATA EXCHANGE

In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined.
As part of this data sovereignty framework, conventions for access policies, for usage policies and for the constraints contained in the policies have been specified in standard 'CX-0152 Policy Constraints for Data Exchange'.
This standard document CX-0152 v1.0.0 MUST be followed when providing services or apps for data sharing/consuming and when sharing or consuming data in the Catena-X ecosystem.  
What conventions are relevant for what roles named in SECTION 1.1 is specified in the CX-0152 v1.0.0 standard document as well. CX-0152 v1.0.0 can be found in the standard library.

##### VERSIONING

The Aspect Models that are deployed as Digital Twins MUST be published in dcat:Dataset (http://www.w3.org/ns/dcat#) in the property that holds the full URN of the Aspect Model https://admin-shell.io/aas/3/0/HasSemantics/semanticId. Versions are explicitly contained in the URN.

Note: Data Assets differentiated only by major version MUST be offered in parallel. The current standard and API versions mark the start of Life Cycle Management in Catena-X operations. Previous versions are dismissed.

## 3 ASPECT MODEL

### 3.1 "eSDScom" Aspect Model

#### 3.1.1 INTRODUCTION

This semantic model, developed for the Catena-X data space, defines a standardized structure for exchanging safety data sheets (SDS) of chemicals.
This section describes the eSDScom data model, which is the basis for the interoperable exchange of SDS data along the supply chain. The eSDScom data model defines the common format of a SDS. Applications which allow the exchange of SDS data need to implement the eSDScom data model as specified as follows.
This aspect model provides information about the material composition. It includes the type of material used and the origin or origins of the material. If the material has multiple origins, the aspect model specifies how it is distributed across these origins.
The aspect model MUST be connected to the digital twin of the respective part type (partType) to ensure that ext SDS-relevant information can be accurately traced and accessed in a Catena-X compliant manner. Only under this condition is it possible to use the information reliably in the context of product, occupational and environmental assessment and to support the documentation requirements of regulatory declarations.

#### 3.1.2 SPECIFICATIONS ARTIFACTS

This aspect model is written in SAMM 2.1.0 as a modeling language conformant to CX-0003 SAMM Aspect Meta Model v1.2.0 as input for the semantic driven workflow.
Like all Catena-X data models, this model is available in machine-readable format on GitHub conformant to CX-0003 SAMM Aspect Meta Model v1.2.0.

#### 3.1.3 LICENSE

The Catena-X eSDScom data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

#### 3.1.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier:

> `urn:samm:io.catenax.esdscom:1.0.0`

This identifier MUST be used by the data provider to define the semantics of the data being transferred.

#### 3.1.5 FORMATS OF SEMANTIC MODEL

##### 3.1.5.1 RDF TURTLE

The RDF turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations:
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.esdscom/1.0.0

The open source command line tool of the Eclipse Semantic Modeling Framework is used for generation of other file formats like for example a JSON Schema, AASX for Asset Administration Shell Submodel Template or a HTML documentation.

##### 3.1.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only payload of the Asset Administration Shell for the API operation "GetSubmodel".

##### 3.1.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested artifacts for a Submodel Template Specification conformant to [SMT].

## 4 APPLICATION PROGRAMMING INTERFACES

> *This section is normative*

### 4.1 APIs ASSOCIATED WITH DIGITAL TWINS

This standard completely and solely builds upon the standard CX-0002 Digital Twins v2.3.0 standard in Catena-X.

#### 4.2 NOTIFICATIONS

This standard completely and solely builds upon the standard CX-0151 Industry Core: Basics v1.0.0 standard.

## 5 PROCESSES

> *This section is normative*
There is no process definition in this standard version available.

## 6 REFERENCES

### 6.1 NORMATIVE REFERENCES

> *This section is normative*

- CX-0002 Digital Twins in Catena-X v2.3.0
- CX-0010 Business Partner Number v3.0.1
- CX-0018 Dataspace Connectivity v4.1.1
- CX-0126 IndustryCorePartType v2.1.1
- CX-0151 Industry Core: Basics v1.0.0
- CX-0152 Policy Constraints for Data Exchange v1.0.0

### 6.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

Optional. Not applicable at the moment. Chapter will be filled later if required.

### 6.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

Optional. Not applicable at the moment. Chapter will be filled later if required.

## ANNEXES

### FIGURES

> *This section is non-normative*

Optional. Not applicable at the moment. Chapter will be filled later if required.

### TABLES

> *This section is non-normative*

Optional. Not applicable at the moment. Chapter will be filled later if required.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
