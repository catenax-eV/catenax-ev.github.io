# CX-0055 Data Processing Patterns for IT System Integration v1.2.0

## ABSTRACT

This document provides specific conformity assessment criteria for IT-System Integration solutions that
connect arbitrary backend applications to Catena-X for both, data provisioning and data consumption.
Depending on the use-case, different standards must be fulfilled for data provisioning and consumption.
Thus, this document is modular and describes criteria for different schemes of data provisioning
and consumption (so called data processing patterns) in order to enable use case agnostic certification
of IT-system integration solutions.
Data Providers and Consumers can either implement the set of relevant standard themselves,
or use a managed solution that implements the standards.
This standard is particularly addressing the second case.

## 1. INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This document is relevant for:

- Enablement Service Provider

This document is in particular relevant for enablement service providers who are offering a (managed) solution for IT-system integration.
Those solutions offer the capability to provide data to Catena-X (or consume Catena-X data vice versa) by offering automated data pipelines.
This very basic capability provides a cornerstone for different Catena-X use cases.

This standard addresses in particular the interfaces which IT-System Integration Solutions expose
to exchange data with Catena-X.
For this standard, offered interfaces need to be compliant to technical standards that are used
by Catena-X to manage data processing (e.g. EDC, AAS or SAMM).
The IT-System Integration Solution itself is out of scope.

Furthermore, the document can be used as a guideline for data providers/consumers who want to connect
backend systems/middlewares etc.
with Catena-X via a custom build setup (without the need of certification in this case).

This document does not contain references to external standards and Catena-X guardrails
that need to be fulfilled for the listing of apps into the Catena-X marketplace such as an ISO27001
certification or the passing of certain penetration tests.
Nevertheless, IT-System Integration solutions will also need to pass those conformity assessments.

### 1.2 CONTEXT

> *This section is non-normative*

**Solutions for IT-system integration**

IT-system integration is one of the major preconditions that companies need to achieve to provide and consume data within the Catena-X ecosystem. Solutions for IT-system integration are pieces of software that help companies to realize the dataflow between company IT-systems and Catena-X, usually by offering support of a wide range of protocols, multiple configuration options and a high degree of automation. To be more precise those solutions in particular address the following capabilities (see [Data Integration Pattern Guide](https://catena-x.net/en/catena-x-introduce-implement/onboarding)):

- **ETL (e.g. extract, transform and load data from/into backend system)**
- Data Persistence (e.g. store data in a data storage solution; Not necessary for architectures based on data virtualization, such as Data Fabric)
- **Data Governance (e.g. manage data offers, policies, auditing)**
- **Data Exchange (e.g. provide, discover and consume data)**
- Data Exploration & Analysis (e.g. data visualization)
- Support capabilities (e.g. monitoring, logging)

Solutions for IT-system integration may comprise all of those capabilities or a subset. However, the capabilities marked as bold constitute the core functions to achieve a working data integration.
Since it is now clarified how “solutions for IT-system integrations” are defined in this document it will now be highlighted in which scenarios for technical onboarding those services can be used.

**Technical onboarding scenarios addressed in this standard**

Data exchange in Catena-X can be done in multiple ways with different implications on IT-System Integration Solutions and certification. Figure 1 gives a good starting point for this analysis. It depicts an extract of official onboarding guidance of Catena-X e.V.  which introduces four scenarios for data exchange:

![Slide1.jpg](./assets/Slide1.jpg)

Figure 1: [Technical onboarding scenarios](https://catena-x.net/en/catena-x-introduce-implement/onboarding)

Scenario 1 (“Business App”) assumes that companies want to take part in Catena-X use-cases via utilizing specific apps of an app provider. Those apps provide comprehensive business functions, e.g. for visualization, user-guidance (wizards etc.) or reporting. Those apps either provide their own IT-System Integration Solution or can be combined with a solution offered by a third party. E.g. a product passport app that provides a frontend for visualizing the passport data model is combined with an IT-System Integration Solution to extract the pass data from various backend systems, such as ERP, PLM etc..

Scenario 2 (“UC-Integrated”) also targets participating in a Catena-X use case but without using a business app. In this case the solution for IT-system integration is used to create data offers and to consume data according to the applicable standards of the Catena-X use case.  No additional use-case specific business logic and/or frontend is provided.

Scenario 3 (“File Based”) equals Scenario 2 with the exception that the data doesn’t come directly from company IT-systems. In this case data is provided via files that adhere to the format of given use-case specific semantic models. Solutions for IT-system integration may also provide this function as an additional way to provide data.

Scenario 4 (“Self P2P”) is a custom bilateral data exchange scenario with no standardized semantics or reference to an existing use case. In this case companies are free to choose which standards and capabilities of Catena-X they use. Depending on the concrete data exchange scenario and the standards to be used, Solutions for IT-system integration may be beneficial (by keeping in mind that custom use cases are not certifiable).

**Catena-X Data Processing Patterns**

The last paragraph showed the wide range of scenarios how IT-system integration solutions can be used. One particular challenge in this context is to bridge the heterogenous standards that are used by the different Catena-X use cases. From the perspective of companies participating in the network this complexity should be shielded away as far as possible to allow better uptake (in particular for SME).

To achieve a better overview how different use cases organize data transfer they can be clustered into groups. One Catena-X use case may require a combination of EDC, AAS and SAMM while another Catena-X use case may only utilize EDC or Knowledge Agents to handle data exchange between companies. Those alternative combinations of standards for data processing are defined as "Data Processing Patterns" in the scope of this document.

If IT-system integration solutions address these patterns they can be considered as use case agnostic for the specific patterns they are certified against. This means from a technical viewpoint, by looking at the most fundamental functions of data provisioning or consumption, it doesn’t make a difference if for example a battery pass or some specific BOM or part information is exchanged. If the underlying data processing pattern is the same, the only difference between use cases is the type of semantic model used for standardizing the data to be shared. To make sure that the correct model is utilized, enablement service providers typically provide exhaustive functions for semantic model management that allow importing or automatically import Catena-X semantic models.

In some examples use cases deviate from the pattern logic by introducing use case APIs (e.g. request/response API for Product Carbon Footprint exchange use case). Those use cases will require additional effort for certification as app provider. However, also in this case a certification against the standard described in this document (CX0055) should be highly useful as it already proves standards that are part of certification of every business app. That means the delta to certify as app provider becomes smaller by only proving use-case specific standards on top of this certification.

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

Figure 2 gives an idea about the scope of conformity assessment for IT-System Integration solutions in Catena-X. The data source/sink refers to a company IT landscape.
Thus, it can comprise one IT-system, (such as ERP or PLM) or multiple systems, data lakes etc.
To make this data accessible for Catena-X (or vice versa to write Catena-X data into backend systems)
a dedicated tool or toolchain is necessary.
Since IT-architectures and IT-System Integration solutions vary significantly between different companies,
no standard can be applied here (see also [Data Integration Pattern Guide](https://catena-x.net/en/catena-x-introduce-implement/onboarding) on Catena-X website for further information).
Thus, conformity assessment for IT-System Integration solutions focuses on requirements for data formats, and data transfer protocols (Catena-X interface, see Figure 2 marked in blue).
The IT-System Integration solution itself is out of scope for this standard.

![backend-solutions-arch.png](./assets/backend-solutions-arch.png)

Figure 2: Scope of conformity assessment - Catena-X interface for IT-System Integration solutions

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to proof, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
Please refer to the association homepage for the process of conformity assessment and certification.

Enablement Service Providers need to show compliance of System Integration Solutions to data processing patterns in order to receive certification for Catena-X use cases (that utilize respective patterns).

Example:

- Use case A (e.g. Eco Pass) and use case B (e.g. Circularity -  CE Assistant) utilize Data Processing Pattern 1 (e.g.  combination of EDC, SAMM and AAS)
- IT-System Integration Solution X is certified against Data Processing Pattern 1
- As a result of the certification, Backend Integration Solution X can be utilized for use cases A and B.

To proof the overall conformity of an IT-System Integration solution for Catena-X use-cases, a proof of conformity for standards belonging to a specific Data Processing Pattern (listed in section 2) has to be obtained.

## 2. STANDARDS FOR DATA PROCESSING PATTERNS

> *This section is normative*

This chapter describes possible ways for providing data for Catena-X (and to consume it respectively).
IT-System Integration solutions MUST fulfill the standards for at least one Data Processing Pattern in order to obtain a certificate for this standard.
The certificate issued by CAB MUST specify for which data processing pattern(s) the IT-System Integration solution was successfully evaluated in the certification process. The IT-System Integration solution can then only be utilized for Catena-X use case applications that make use of the specific Data Processing Patterns that were in scope of certification.

Figure 3 gives an overview about currently available Data Processing Patterns. The following section introduces each pattern and corresponding standards to be considered. This list will be extended as soon as new patterns emerge and respective Catena-X standards are available.

![Overview Patterns](./assets/Overview_Patterns.png)
Figure 3: Catena-X Data Processing Patterns - Overview

### 2.1 LIST OF STANDALONE STANDARDS

> *This section is normantive*

**Data Processing Pattern 0 (File-based, EDC-only)**: All solutions that shall be used for data provisioning/data consumption for use-cases using only use EDC MUST implement the following standards:

- CX-0001 EDC Discovery API
- CX-0003 SAMM Aspect Meta Model
- CX-0018 Dataspace Connectivity
- CX-0050 Framework Agreement Credential
- CX-0053 BPN Discovery Services

This includes, but is not limited to the following use-cases:

- Quality

**Data Processing Pattern 1 (Asset Administration Shell)**: All solutions that shall be used for data provisioning/data consumption for use-cases using SAMM and AAS MUST implement the following standards:

- CX-0001 EDC Discovery API
- CX-0002 Digital Twins in Catena-X
- CX-0003 SAMM Aspect Meta Model
- CX-0012 Business Partner Data Pool API
- CX-0018 Dataspace Connectivity
- CX-0050 Framework Agreement Credential
- CX-0053 BPN Discovery Services

This includes, but is not limited to the following use cases:

- Industry Core – Part Type/Part Instance
- Circularity – CE Assistant
- Circularity – Secondary Material Content
- Circularity – EOL/ Dismantling Services
- PURIS
- Eco Pass
- Demand and Capacity Management (AAS API)

Note: As Data Processing Pattern 1 contains all standards of Data Processing Pattern 0, solutions are automatically certified for both patterns if Data Processing Pattern 1 is certified.

**Data Processing Pattern 2 (Knowledge Agents)**: All solutions that shall be used for data provisioning/data consumption for use-cases using Knowledge Agents MUST implement the following standards:

- CX-0001 EDC Discovery API
- CX-0012 Business Partner Data Pool API
- CX-0018 Dataspace Connectivity
- CX-0050 Framework Agreement Credential
- CX-0053 BPN Discovery Services
- CX-0067 Ontology Models to realize federated query in Catena-X
- CX-0084 Federated Queries in Data Spaces

This includes, but is not limited to the following use-cases:

- Behavior Twin (Remaining Useful Life, Health Indicator, Endurance Predictor)

**Data Processing Pattern 3 (Use Case-specific API)**: Some use cases specify individual APIs that are used for data transfer. Those individual use case implementations are out of scope for this standard. However, since some API-based use cases are based on Data Processing Patterns 0 and 1, certification against those patterns decreases effort for certification as Business Application Provider.

This includes, but is not limited to the following use-cases:

- Traceability (if Notification API shall be used)
- Sustainability PCF (combination with Data Processing Pattern 1)
- Circularity – Asset Tracking
- OSIM
- MAAS
- Modular Production
- Endurance Estimator
- Demand and Capacity Management (if not choosing AAS API)

### 2.2 Implications for certification

> *This section is normative*

Data Processing Patterns 0-2 address use case agnostic standards. Therefore, those patterns and use cases that are powered by these patterns MAY be covered in a generic way by IT-System integration solutions (e.g via providing functions for data provisioning and data consumption) without the necessity of a dedicated business app and additional individual certification for this use case (onboarding scenarios 2-4, see Figure 1).

Data Processing Pattern 3 addresses use case specific APIs and therefore MUST be certified for each use case as “Business Application Provider” (onboarding scenario 1, see Figure 1).

In general, Data Processing Patterns focus on distinguishing repetitive, use case agnostic schemes from use case specific implementations. This is also true for semantics which are generically defined via semantic modelling standards.

Providers of solutions for IT-System integration MUST prove that they are able to automatically import semantic models based on the standards CX-0003 or CX-0067 (depending on considered pattern), e.g. via a dedicated model management function. In this case the user is responsible to select the correct model that fits to the current release of a use case. If this is proven, a dedicated content-wise evaluation of semantic models by CAB for each use case is therefore NOT REQUIRED.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX-0001 EDC Discovery API v.1.0.2
- CX-0002 Digital Twins in Catena-X v.2.0.0
- CX-0003 SAMM Aspect Meta Model v.1.1.0
- CX-0012 Business Partner Data Pool API v.4.0.0
- CX-0018 Dataspace Connectivity v.3.1.0
- CX-0050 Framework Agreement Credential 2.1.0
- CX-0053 BPN Discovery Services v.1.1.0
- CX-0067 Ontology Models to realize federated query in Catena-X v.1.1.0
- CX-0084 Federated Queries in Data Spaces v1.2.0

## ANNEXES
