# CX - 0062 Triangle Traceability Notifications v1.0.0

## ABSTRACT

The Traceability Notifications Triangle describes and collects necessary standards for applications that enable the exchange of Quality Alert and Quality Investigation Requests in Catena-X. Quality Investigation refer to sending standardised notifications to your supplier (top-down) while Quality Alerts refer to sending notifications to your customer (bottom-up). Those notifications will enable the industry to exchange and act upon quality issues in a more standardised, integrated, accelerated and precise manner.

It is tightly bound to the BomAsBuilt Triangle, as Quality Alerts and Quality Investigation Requests should reference batches and/or serialized part instances as described in the respective standards.

Traceability and especially the BomAsBuilt Triangle serves as an enabler for the standardized exchange of Quality Alerts and Investigation requests by introducing network-wide unique identifiers for serialized parts or batches. Its linked standards are to be used in order to be interoperable.

## 1. INTRODUCTION

This document summarizes standards to be supported by a network participants IT infrastructure to cater for the Traceability Notifications (sub-)Use-Case. This involves protocols, APIs, processes and platform capabilities to be used.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This document is targeting subsets of the following roles:

- Data Provider / Consumer
- Business Application Provider
- Enablement Service Provider

NOTE: Fulfilling a use-case standard by a data provider / consumer can be done in two ways: A) Purchase a certified app for the use-case. In this case the data provider / consumer does not need to proof conformity again and B) Data Provisioning / Consumption without a certified app for the use-case. In this case the data provider / consumer needs to proof conformity with all single standards listed in this document.

### 1.2 CONTEXT

> *This section is non-normative*

Standardized Quality Alerts and Quality Investigation Requests enabled by digital twins based on the BoM as built (see BoMasBuiltTriangle) allow fast reactions to quality issues within the Catena-X network.

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

![archOverview.png](./assets/archOverview.png)
*Figure 1: Architecture Overview*

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to proof, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
Please refer to: *[!LINK Conformity Assessment]* for the process of conformity assessment and certification.

Since this Triangle document describes a set of standards to be fulfilled, participants **MUST** fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria described in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance should be checked using the tools and criteria provided for these components.

### 1.6 EXAMPLES

### 1.7 TERMINOLOGY

> *This section is non-normative*

**Business Partner Number (BPN)**

A BPN is the unique identifier of a partner within Catena-X.

**International Data Space (IDS)**
International Data Space and its protocol for data exchange foresees an compliant connector handling contract negotiation before each data transfer and defines a general architecture for data exchange.

**Eclipse Dataspace Connector (EDC)**
The EDC is a reference implementation for an IDS compliant connector currently acting as a de-facto standard and/or reference Implementation within Catena-X.

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2. Standards for Notifications Triangle

> *This section is normative*

### 2.1 LIST OF STANDALONE STANDARDS

> *This section is normative*

To participate in Notifications, the following standards **MUST** be fulfilled by all participants for which the standard is relevant:

- CX - 0022 Notification Process
- CX - 0023 Notification API
- CX – 0018 Sovereign Data Exchange
- CX - 0060 Traceability BomAsBuilt Triangle

The Notification Process described in CX-0022 **MUST** be supported.
The Notification API described in CX-0023 **MUST** be provisioned in order to receive Quality Alerts or Quality Investigation Requests.
The IDS protocol as described in CX-0018 **MUST** be followed in the data exchange.
The Eclipse Dataspace Connector as a reference implementation is **RECOMMENDED** to be used as an IDS compliant connector.
The BomAsBuilt Triangle **MUST** be used as the basis for the Quality Alerts and Quality Investigation Request.

### 2.2 ADDITIONAL REQUIREMENTS

As the IDS protocol is being used, data **MUST NOT** be transferred before a corresponding contract negotiation has been successfully passed by the participants of the data exchange and a valid contract is present as described in CX-0018.
The required data offers for Quality Alerts and Quality Investigation Requests **MUST** be created and linked to the described APIs as described in CX-0023.
The process and especially status schema depicted in CX-0022 **MUST** be supported.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX - 0022 Notification Process
- CX - 0023 Notification API
- CX - 0018 Sovereign Data Exchange
- CX - 0060 Traceability BomAsBuilt Triangle

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

The traceability KIT and sub-KITs will include further information on EDC data asset structures, Digital Twin Submodel examples and API calls to be made.

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*
