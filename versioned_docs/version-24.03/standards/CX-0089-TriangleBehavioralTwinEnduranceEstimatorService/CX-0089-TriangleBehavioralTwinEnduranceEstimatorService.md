# CX-0089 Triangle Behavioral Twin Endurance Estimator Service - v1.0.0

## ABSTRACT

Behavioral product models, based on a structured and consistent architecture of reusable and standard functional components and applied in a common ecosystem such as Catena-X, permit a wide range of new business concepts and digital services. Consequently, the central scope of consideration for the “Data-centric and model-centric development and operational support” use case is the concept of the “digital twin” for the integrated mapping of products with their functions, properties and key business figures via a common data model.

One typical requirement of the digital behavior twin relies on dynamic services, which offer up to date information of a built vehicle.

Different parties like automobile clubs, recyclers, and others want to know more about the current state of a specific vehicle. One such information is the expected lifetime of components. This information can be used e.g., to support a decision if a component is worth recycling.

## 1. INTRODUCTION

This triangle document acts as a bracket for single standards required to request "Remaining Useful Life (RUL)" data as well as providing a service for its estimation. Included are APIs to be provided by the service provider and the service requestor, as well as aspect models for the respective payloads being exchanged in an asynchronous pattern leveraging those APIs.

### 1.1 AUDIENCE & SCOPE

The standard is relevant for the following roles within the scope of the use case

- Data Provider / Consumer
- Business Application Provider

NOTE: Fulfilling a use-case standard by a data provider / consumer can be done in two ways: A) Purchase a certified app for the use-case. In this case the data provider / consumer does not need to proof conformity again and B) Data Provisioning / Consumption without a certified app for the use-case. In this case the data provider / consumer needs to proof conformity with all single standards listed in this document

### 1.2 CONTEXT

This triangle/use-case document contains two aspect models.

1. **CX-0088** Aspect Model for user estimated loading, acting as the input for the estimation of remaining useful life.
2. **CX-0057** Aspect Model for Remaining Useful Life data, acting as the main output for remaining useful life.

It also contains the API descriptions for the APIs to exchange requests as well as results of a remaining useful life calculation:

1. **CX-0090** API Endurance Estimator (contains both API descriptions)

The calculation is asynchronous, therefore both parties involved in a calculation request require to provide API endpoints, as the results are sent back at a later stage and not as part of the HTTP response body.

Since Data Transfer in Catena-X requires IDSA compliance, both parties involved **MUST** use an IDSA compliant connector and provision the API endpoints as specific data assets in those connectors. The data asset structure is described as part of **CX-0090**.

### 1.3 ARCHITECTURE OVERVIEW

This graphic shows the mapping of standard documents into the general architectural overview for this triangle.

```text
    include src/architectureoverview.png
```

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is normative*

All participants and their solutions will need to proof, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
Please refer to: *[!LINK Conformity Assessment]* for the process of conformity assessment and certification.

Since this Triangle document describes a set of standards to be fulfilled, participants **MUST** fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance **SHOULD BE** checked with the tools provided for these components.

The Eclipse Dataspace Connector (EDC) is **MUST** to be used as an IDSA compliant connector, as it is the current reference implementation of the IDSA protocol.

### 1.6 EXAMPLES

### 1.7 TERMINOLOGY

Business Partner Number (BPN)
: A BPN is the unique identifier of a partner within Catena-x

Eclipse Dataspace Connector (EDC)
: The EDC is a reference implementation of a connector for IDSA conform sovereign data exchange

Behaviour Twin
: Behavioural product models, based on a structured and consistent architecture of reusable and standard functional components and applied in a common ecosystem. Additional terminology used in this standard can be looked up in the glossary on the association homepage.

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2. STANDARDS FOR "Triangle Behaviour Twin Endurance Estimator"

As a Service Provider for an Endurance Estimator Service I need to fulfill the following standards in the following contexts:

- **CX-0088 Semantic Model: UserEstimatedLoading** **MUST** be understood by my service and **MUST** be consumed by my service provider API.
- **CX-0057 Semantic Model: Remaining Useful Life** **MUST** be provided as part of my communication of the result towards the requestor and/or requesting application
- **CX-0090 API: Endurance Estimator** **MUST** be followed in terms of all relevant parts for a service provider

As a Service Requestor or Service Requestor Application I need to fulfill the following standards in the following contexts:

- **CX-0088 Semantic Model: UserEstimatedLoading** **MUST** be provided as part of the request for a remaining useful life calculation towards a service operator's API
- **CX-0057 Semantic Model: Remaining Useful Life** **MUST** be consumable by my connected underlying application.
- **CX-0090 API: Endurance Estimator** **MUST** be followed in terms of all relevant parts for a service requestor

### 2.1 LIST OF STANDALONE STANDARDS

To participate in the Triangle Behavioural Twin Endurance Predictor, the following single standards **MUST** be fulfilled:

- **CX - 0018 Eclipse Data Space Connector (EDC)**

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

```text
    [Optional] - Links to related Catena-X or external standards that need to be meet in order to
    fulfil this standard. If no external standards need to be met, leave empty.
```

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

```text
    [Optional] – Links to further documentation that may help to understand the 
    standard but isn’t relevant for conformity assessment
```

### 3.3 REFERENCE IMPLEMENTATIONS

- **CX – 0018 Sovereign Data Exchange**
  
## ANNEXES

### FIGURES

### TABLES

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
