---
tags:
  - CAT/Information as a Service
  - CAT/Third Party Information Provider
---

# CX-0139 Information as a Service - External Data Provider  v1.0.0

## ABSTRACT

Catena-X as an open and collaborative Data-Ecosystem and the current Operating Model defines Data Provider and Data Consumer as Members of an existing Value Chain, providing and consuming Operative Data necessary for their Business Relation.
Business Application Provider are running Services, enabling and supporting these Business Processes and Collaboration, the integrated Information-Sharing is immanent and not a separate Commercial Subject. These Services are related to specific Use Cases and Standards defined in the Catena-X Framework.
Beside and beyond these kinds of sharing of Operative Data, Businesses need many Third-Party Information e.g., Material, Business Partner, Standards, Environment, Prices etc..., as well as Automotive Value Chain Processes (reflected in Catena-X Use Cases) need Third Party Information.
These are Information collected, refined (evaluated, qualified, analysed, transformed etc.) and provided by Third-Party Information Providers (Information aaS). The Source of this Information resides outside the Catena-X Ecosystem, the Information aaS-Provider has a Commercial Model for this Service.
For Information from inside the Catena-X Ecosystem the Standards are defined in existing and future Use Cases.
Information from outside the Catena-X Ecosystem is not covered by existing Standards and is matter to this Standard.

## FOR WHOM IS THE STANDARD DESIGNED

See Chapter 1.1. Audience and Scope

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

Not applicable

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This Standard is relevant for the following audience:

Core Service Provider
Data Provider / Consumer
Business Application Provider

The Scope of this Standard is to enable Third-Party Information Provider to deliver Data from outside Catena-X inside Catena-X. This Standard is generic to every Use Case and qualifies Information aaS Provider as a potential Data Provider for a Use Case defined Business Application. The Data can be delivered only to a specific Use Case within Catena-X, realised in an certified Business Application.
By this way the Standard enables Third-Party Information Provider to deliver Data from outside Catena-X inside Catena-X and at the same time limits Data Delivery to existing Use Cases, avoiding Violations or Bypasses of existing Standards and Regulations within Catena-X. For this reason the Business Application Provider and the Third-Party Information Party Provider have a special responsibility based on this standard. The Business Application Provider is responsible for data governance with respect to Catena-X standards for the respective Use Case and Business Application. Both Business Application Provider and Third-Party Information Provider are responsible to respect existing license agreements that may be related to the provisioned data.
Not in Scope of this Standard is a Data Provider who deliver data from inside Catena-X to a Data Consumer inside Catena-X, this is regulated e.g., with CX-0007 Process Specification Minimal Data Provider Service Offering v1.0.2.
Not in Scope of this Standard is a Data Provider who deliver Data from inside Catena-X to a Data Consumer outside Catena-X, this Use Case requieres separate Regulation.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The Establishment of various Industry Networks (such as Catena-X) has increased the need to establish Data Standards across the entire Automotive Value Chain and to promote industry-wide, international Data Exchange. This Data Exchange is primarily focused on Operative Data immanent to the entire Value Chain and necessary for Business Processes and Relations.
Beside and beyond these kinds of sharing of Operative Data, Businesses need many Third-Party Information e.g., Material, Business Partner, Standards, Environment, Prices etc..., as well as Automotive Value Chain Processes (reflected in Catena-X Use Cases) need Third-Party Information.
These are Information collected, refined (evaluated, qualified, analysed, transformed etc.) and provided by Third-Party Information Providers (Information aaS). The Source of this Information resides outside the Catena-X Ecosystem, the Information aaS-Provider has a Commercial Model for this Service.
The provision of any information from a Third-Party Information Provider can´t bypass existing standards and regulations from the entire Catena-X framework related to the given Catena-X Use Case.Therefore a Third-Party Information Provider can´t provide Infromation as it is, but only to a certified Business Application Provider for a certified Business Application.
The Third-Party Information Provider must be certified for this Standard to provide Data. The Business Application Provider and the Business Application must be certified for the Standards related to the relevant Use Case.
Example:
For the Use Case Country Risk in BPDM Value-Added Services the Business Application Provider who provides the Service and the Business Application must be cerified for "CX-0081 Country Risk API". The Third-Party Information Provider, who provides Information as a Service to this Business Application Provider and the Business Application, must be certified for this new Standard "CX-0139 Information as a Service - External Data Provider"

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

### 1.4 EXAMPLES

For the Use Case Country Risk in BPDM Value-Added Services the Business Application Provider who provides the Service and the Business Application must be cerified for "CX-0081 Country Risk API". The Third-Party Information Provider, who provides Information as a Service to this Business Application Provider and the Business Application, must be certified for this new Standard "CX-0139 Information as a Service - External Data Provider"

### 1.5 TERMINOLOGY

> *This section is non-normative*

Third-Party Information Provider
A Third-Party Information Provider collect, refine (evaluate, qualify, analyse, transforme etc.) differentkind of Information (e.g., Material, Weather, Business Partner, Prices etc.) and provide this Information to a Data Consumer (Information aaS).
The Source of this Information resides outside as well as inside the Catena-X Ecosystem, the Information aaS-Provider has a Commercial Model for this Service.

External Data Provider
A External Data Provider is a Third-Party Information Provider who provides Information where the Source of this Information resides outside the Catena-X Ecosystem.

## 2 MAIN CONTENT

> *This section is normative*

This standard differentiates between two roles: Requirements for the `Business Application Provider` who receives and shares Third-Party Information and their Use Cases and their `Third-Party Information Provider`.

To get certified as a `Business Application Provider` who receives and shares Third-Party Information, the Business Application Provider MUST:

- document that he receives Information for a certified Business Application.
- document that he receives Information from a certified Third-Party Information Provider
- document the license agreement, that he is entitled and by what terms, for the received and (through the Catena-X data ecosystem) shared Information.

To get certified as a `Third-Party Information Provider`, the Third-Party Information Provider MUST:

- document that he provides Information to a certified Business Application Provider and for a certified Business Application.
- document the license agreement, that he is entitled and by what terms, for the provided Information if applicable. If the provided Information is publicly available without a third-party agreement a license agreement is not applicable.
- Third-Party Information Provider MUST NOT be certified for existing Standards for the related Use Case in his role as a Third-Party Information Provider.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

Not applicable

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

Not applicable

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

Not applicable

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
