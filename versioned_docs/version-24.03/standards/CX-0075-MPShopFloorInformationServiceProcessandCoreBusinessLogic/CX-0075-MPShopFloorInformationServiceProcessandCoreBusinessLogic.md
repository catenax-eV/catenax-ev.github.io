
# CX-0075 Shop-Floor-Information-Service Process v1.0.0

## ABSTRACT

A Modular Production is part of the value chain. It therefore has to guarantee flexibility and availability on one hand and on the other hand it has to allow product flexibility together with small lot sizes. The effect of disturbances and decision in this network are not limited to a local area, but they have also a big impact to other partners in the value chain network. It is therefore necessary to communicate values from the shop floor directly to other members of the network like the customers or their substitutes like logisticians. This communication is realized with the Shop-Floor-Information-Service (SIS).
For example a costumer wants to know the estimated date of production, he can therefore use the Shop-Floor-Information-Service to get the information either directly, via cyclic messages or notifications in case of changing calculated production dates. The Shop-Floor-Information-Service uses the GetProductionForecastInformation model and the ProvideProductionForecastInformation model.

## FOR WHOM IS THE STANDARD DESIGNED

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for

- Business Application Providers:  their role is the implementation of the Shop-Floor-Information-Service
- Data  Providers: mainly modular productions - they have to provide the data necessary for the Shop-Floor-Information-Service
- Data Consumers: e.g. tier n-1 factories, end customers or logisticians, they have to be able to process the data provided by the Shop-Floor-Information-Service

Stakeholders within Catena-X

- PURIS, DCM: capacity planning requires a forecast of the delivered products
- OSim: the Forecast Data of the SIS can serve as input for a OSim-simulation

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

Higher-level, external influencing factors from the supply chain, such as delays in the logistics chain for supplier parts or short-term order changes, may invalidate a production plan that has already been drawn up. Today, such short-term changes in the general conditions of the production process can often only be taken into consideration indirectly and made through manual corrections. The solution approaches in the modular production use case are aimed at increasing the flexibility of production to better leverage the existing business potential. For this purpose, services, interface, and data model definitions based on industry standards are offered with the goal of increasing the flexibility and reliability of industrial production. The shop floor is networked with the Catena-X network via the connectors standardized in Catena-X. Modular production will offer a Shop-Floor-Information-Service that supplies information about the production status and planning as needed by other partners in the Catena-X network. The goal is to enable individual production (lot size 1) at the price of series production. In particular, this is to be achieved by automating the orchestration of production resources and planning of production processes as much as possible, thus significantly reducing effort and planning times. A growth in efficiency in the sense of the OEE is achieved in that production can be reconfigured in the event of faults to continue operating as well as possible. The increased flexibility creates the space for new business models, such as the interposition of highly prioritized, lucrative orders. As a consequence not only the production is required to be flexible and fast reactive to changes, it also requires  communication of future factory output to the customers.

Both partners - a customer and a Modular Production - MUST be members of the Catena X network in order to communicate with each other.  By registering a Modular Production in advance with the Discovery Service, a customer can find it via a so-called Business Partner Number (BPN).  With the help of SSI (Self Sovereign Identity) the correct identity is guaranteed.

Customer uses the *GetProductionForecastInformation* call in order to request a production forecast, as specified in CX-0068. The Modular Production generates the required information internally by internal services like a scheduler and answers accordingly by calling *ProvideProductionForecastInformation* as specified in CX-0068. In case of a cyclic messages or notification mode, the customer has to unsubscribe from the service, if the service is not needed anymore.

![Architecture Overview](./assets/Overview.png)

The *GetProductionForecastInformation* as well as the *ProvideProductionForecastInformation* is using a AAS serialized as a JSON string which is sent through EDC mechanism:
Namely:

- *GetProductionForecastInformation* uses "*GetProductionForecast*" data model and
- *ProvideProductionForecastInformation* uses "*ProvideProductionForecast*" data model

The *unsubscribe* call has no corresponding data model, as it is a simple HTTP DELETE.

The JSON string is standardized in document (MP) CX - 0069 Shop-Floor-Information-Service Aspect Model v1.0.0.
The standard only describes the sending and receiving of Shop-Floor-Information-data through EDC. The object is created and handled by applications of the companies involved, but these applications are not part of the standard.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams,
examples, and notes in this specification are non-normative. Everything else in
this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**,
**REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be
interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they
appear in all capitals, as shown here.

> *This section is non-normative*

All participants and their solutions will need to proof, that they are conform
with the Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs).

All participants and their solutions will need to proof, that they conform to Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
Any actor using the Shop-Floor-Information-Service, MUST implement, and follow the following standards:

- The Shop-Floor-Information-Service core business logic – described in this document
- The Shop-Floor-Information-Service standardized API – described in the document Shop-Floor-Information-Service API  CX-0068
- The Shop-Floor-Information-Service standardized Data Model – described in the document Shop-Floor-Information-Service Data Model CX-0069

### 1.4 EXAMPLES

Disturbances of the supply chain always have a major impact of the following links in the chain. It is therefore necessary to inform the customers resp. their logistician as soon as possible as the real date of manufacturing might vary from the one negotiated in the contract. The Shop-Floor-Information-Service therefore gives an update about the scheduled production times to allow a better planning for both the tier n-1 customer as well as for the logistic in-between.

### 1.5 TERMINOLOGY

> *This section is non-normative*

| Name | Abbreviation | Description |
|---|---|---|
| AAS | Asset Administration Shell | Specification to manage and administrate digital representations of assets (concepts, physical device, process, etc.). Used synonymously with the term "Digital Twin". |
| BPN | Business Partner Number | Business Partner Number |
| CX | Catena-X | Data ecosystem / data space for the automotive industry. |
| DCM | Demand and Capacity Management | Product within Catena-X for shortage identification. |
| DT | Digital Twin | Digital representation of an asset (concept, physical device, process, etc.). Realized using the Asset Administration Shell. Used synonymously with the term "Asset Administration Shell". |
| EDC | Eclipse Dataspace Connector | Open-Source Dataspace Connector Framework to participate in International Data Spaces. |
| JSON | JavaScript Object Notation | Json is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects. |
| MP | Modular Production | Product within Catena-X for shopfloor activities |
| OSim | Online Control and Simulation | Product within Catena-X for Online Simulation along the supply chain |
| PURIS | Predictive Unit Real-Time Information System | Product within Catena-X for shortage identification. |
| SAMM | Semantic aspect meta model | Modelling specification to realize a standardized set of models with strict typing which can be used within the AAS.  SAMMs are standardized via the Semantic Layer team and can be looked up via the Semantic Hub. |
| SIS | Shop-Floor-Information-Service | Service provided by MP in order to give information from the shopfloor to customers and third parties |
| SSI | Self Sovereign Identity | Self Sovereign Identity |

Additional terminology used in this standard can be looked up in the glossary on
the association homepage.

## 2 MAIN CONTENT

> *This section is normative*

Any application provider that develops the Shop-Floor-Information-Service  has to grant fulfillment of these requirements.

- The solution MUST be designed to consider requirements for a trusted usage environment (e.g. identity verification and /or verification process).
- The solution MUST be designed to require a contractual agreement in compliance with antitrust requirements in the usage environment (e.g. data contracts as a prerequisite for carrying out a data exchange). For reference see EDC (CX-0001) guidelines.
- The solution MUST be designed to limit visibility and/or access to concrete data content as much as possible (e.g. data offer does not yet allow data access).
- The solution MUST be designed to require the implementation of notice and/or acknowledgement concepts to raise awareness of antitrust issues during use (e.g. helpdesk or pop-up info).
- The solution MUST be designed to ensure traceability/reconstructability of processes through appropriate documentation and at the same time data sovereignty over concrete data content (e.g. through access, deletion or destination rights).

Any **modular production, their customer involved logistician** and subcontractors (in following called with “all parties”) **in the Shop-Floor-Information Service process** (i.e. data provider and/or data consumer) MUST fulfill following requirements:

- All parties are in a contractual relationship with each other and MUST agree to share data related using the Shop-Floor-Information-Service
- All parties MUST manage the access authorization to the Shop-Floor-Information-Service and to its related data.
- All parties MUST be technically able to participate within the Shop-Floor-Information-Service Process.
- All parties in the role of data provider MUST be able to generate Shop-Floor-Information like forecasting information on the production as well as the current production state.
-Internal planning data of a modular production MUST be made accessible by authorized data consumers (e.g. logisticians or customers) of an upper level in the supply chain.
- All data provider (factories) MUST ensure, the authorized data consumers will get data directly relevant to him only.
- All parties in the role of data consumer MUST be able to request and receive data from the factory.
Data MUST be exchanged either on request, cyclic and or on notification if a state is changing
- It is RECOMMENDED to share forecasting information of a time window of 1 week

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX-0003 Semantic Aspect Meta Model
- CX-0018 Eclipse Data Space Connector (EDC)
- CX-0001 EDC Discovery API, Version 1.1
- CX-0068 Shop-Floor-Information-Service API
- CX-0069 Shop-Floor-Information-Service Aspect Model

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

n.a.

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

n.a.

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
