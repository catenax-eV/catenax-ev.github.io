# CX-0071 Triangle Quality Early Warning Field and Root Cause v2.0.0

## ABSTRACT

The Catena-X use case "Quality" (QAX) provides the ability to detect
quality issues the earliest possible to start root cause analyses and/or to enable
an early warning feature for new quality topics. In subsequent steps, counter
measures can also be defined earlier and monitored. In sum, this reduces the
number of vehicles affected by quality issues and increases the availability of the
vehicle and built-in components. Catena-X use case "Quality" is powered
by Catena-X standard core components to share data from OEM and suppliers
based on data sharing agreements and usage policies.

## 1. INTRODUCTION

The Catena-X use case "Quality" (QAX) uses multiple data models to
exchange data between automotive manufacturer (OEM) and component supplier
(TIER1). Each of these data models can be supplied independently.
The QualityTask data model defines the root element for Catena-X-based quality
work. It describes the quality task and why two companies want to work
collaboratively on a quality topic.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

The standard is relevant for the following roles within the scope of the Use Case "Quality"
    *Data Provider/Consumer
    * Business Application Provider

In scope:

- Data sharing between OEM, Tier1 and Tier n
- Earliest possible detection of potential issues with products and vehicles in usage
- Understanding of the root cause of the detected issues to enable earliest possible counter measure implementation

### 1.2 CONTEXT

> *This section is non-normative*

For all participants of the Use Case "Quality" it is necessary to provide and consume the data in accordance to the standardized semantic data models CX-0036 - CX-0041 and CX-0091, CX-0092 to ensure the defined interoperability requirement "free of choice application" to be able to use the established inhouse tool set for analysis.

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

Catena-X use case "Quality" data flow: Data is exported from existing backend systems and mapped to Catena-X aspect models - see list of relevant Catena-X aspect models for use case "Quality" in section [2.1 LIST OF STANDALONE STANDARDS](#21-list-of-standalone-standards)
The so generated files are transferred between different Catena-X participants using Catena-X' Eclipse Dataspace Connector (EDC).

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to proof, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

Since this Triangle document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked with the tools provided for these components.

### 1.6 EXAMPLES

### 1.7 TERMINOLOGY

> *This section is non-normative*

Business Partner Number (BPN)
: A BPN is the unique identifier of a partner within Catena-x

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

Eclipse Dataspace Connector (EDC)
: The EDC is a reference implementation of a connector for IDSA conform sovereign data exchange

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2. STANDARDS FOR "Triangle Quality Early Warning Field and Root Cause"

> *This section is normative*

### 2.1 LIST OF STANDALONE STANDARDS

> *This section is normative*

In order to participate in the Catena-X use case "Quality - Early Warning Field" and "Quality - Root Cause analysis" the following single standards **MUST** be fulfilled by all participants:

CX - 0018 Eclipse Data Connector(EDC) v.2.0.0  

As OEM data provider I **MUST** align to the following aspect models in the corresponding data exchange:

CX-0036 Aspect Model: QualityTask  
CX-0037 Aspect Model: Vehicle.ProductionData  
CX-0038 Aspect Model: Fleet.DiagnosticData  
CX-0039 Aspect Model: Fleet.ClaimData  
CX-0091 Aspect Model: Fleet.Vehicles  
CX-0092 Aspect Model: QualityTaskAttachment  

As Supplier data provider I **MUST** align to the following aspect models in the corresponding data exchange:

CX-0036 Aspect Model: QualityTask  
CX-0040-Aspect Model: PartAnalyses  
CX-0041-Aspect Model: ManufacturedPartsQualityInformation  
CX-0092 Aspect Model: QualityTaskAttachment

- Data provisioning and consuming **MUST** be done according the standardized semantic data models.
- The data provider defines the data content that will be provided. Provided data assets are defined in data sharing agreements and/or data usage policies.

As Business Application Provider I **MUST** support at least 2 aspect models (minimum standard): One from OEM data provider aspect model list and one from Supplier data provider aspect model list.

### 2.2 ADDITIONAL REQUIREMENTS

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

CX - 0018 EclipseDataConnector(EDC)  
CX - 0036 Aspect Model: QualityTask  
CX - 0037 Aspect Model: Vehicle.ProductionData  
CX - 0038 Aspect Model: Fleet.DiagnosticData  
CX - 0039 Aspect Model: Fleet.ClaimData  
CX - 0040-Aspect Model: PartAnalyses  
CX - 0041-Aspect Model: ManufacturedPartsQualityInformation  
CX - 0091 Aspect Model: Fleet.Vehicles  
CX - 0092 Aspect Model: QualityTaskAttachment  
  
### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*
