---
sidebar_position: 4
title: The Modular System of Catena-X Certification
---

## Purpose and Normative Status

This chapter defines the modular system of Catena-X certification. It is normative for Conformity Assessment Bodies (CABs) performing Catena-X certification and binding for certification applicants determining the scope of their certification. The certification scope of a certification needs to be determined in accordance with the modular system.

## Modular System

![Modular System Overview](./assets/Modular%20System_Overview.png)

![Modular System BAP](./assets/Modular%20System_BAP.png)

![Modular System other](./assets/Modular%20System_other.png)

## Principle

Catena-X certification does not apply a single, uniform test catalogue to every applicant. The certification scope is identified from two factors:

a) the role a solution assumes within the Catena-X data space; and
b) the specific use case or capability the solution provides.

The combination of these two factors determines, without exception, which standards apply to a given solution. This ensures that the certification scope remains consistent through all applications certifying for a set Use Case, while shared building blocks — connectivity, semantics, and the Provider Base — remain identically defined across Use Cases.

## Structure of the Certification Framework

The certification framework is documented in two complementary, equally normative views:

1. an **overview**, presenting all roles and their respective Use Cases
2. a **detail view**, breaking each Use Case down into the individual standards to be certified.

Each Use Case consists of one or more columns, to be read from top to bottom. Every entry contained in that column forms part of the mandatory certification scope. Rows are ordered by generality; the further down a row is positioned, the more fundamental the required standard.

- **Use Case**: The specific offering of the solution  
- **Base Standard**: The functional core standard of the Use Case, defining business requirements  
- **Additional**: Standards that become mandatory where the additional standard is used or offered in the product  
- **Industry Core**: The Use Case foundation providing Standards aiming for uniform Use Case Design  
- **Connectivity**: Data exchange via an EDC  
- **Semantic**: Digital Twin or Agents  
- **Provider Base**: Baseline requirements applicable to the provider organization  

## Roles

In Catena-X six roles are enabled for certification. Each role comprises the Use Cases listed below:

- **Data Provider & Data Consumer:** Connector, Participant Wallet
- **Enablement Service Provider:** Connector as a Service, Digital Twin Registry as a Service, Wallet as a Service
- **Business Application Provider:** Quality, Traceability, Behavioral Twin, PCF, Circularity, Eco Pass, ESS, Logistics, MaaS, Modular Production, DCM, PURIS, OSIM, CCM, Tariffs, Engineering, SBOM, Material Accounting
- **Core Service Provider:**: Core Services
- **Onboarding Service Provider:** Onboarding Services
- **Sandbox Service Provider:** Sandbox Services

Under the current release, the Onboarding Service Provider role covers only part of the registration process within the Catena-X data space. The complete process is documented separately in the **Catena-X Operating Model**.

## Determination of the Certification Scope by Role

The certification scope is a function of the role assumed, independent of the underlying technology.

### Data Provider & Consumer

A data space participant operating a connector solely for its own use shall be assessed against CX-0018 and CX-0152. A Data Space Participant may want to integrate internal systems including company-internal business applications into the Catena-X data space. However, it is crucial that all participants can rely on a standardized data exchange to ensure stable and consistent multi-tier data chains based on data sovereignty and interoperability. Consequently, the following principles apply:

- All company-internal business applications required to maintain a stable and consistent multi-tier data exchange must comply with Catena-X standards and be certified by a CAB.
- All company-internal business applications associated with the Catena-X brand and/or offered on a Catena-X marketplace must comply with Catena-X standards and be certified by a CAB.
  
If a company-internal business application meets either of these criteria, Catena-X Use Case certification as a Business Application Provider is mandatory.

### Enablement Service Provider

When a connector, digital twin registry or wallet is offered as a service to other participants, the solution MUST be assessed as an Enablement Service Provider capability

For Connector as a Service, CX-0018 and CX-0152 remain the base standards. Depending on which functions are offered, the following additional standards apply:

| Function offered | Additional standard(s) |
| --- | --- |
| Backend Integration Pattern 1 | CX-0002, CX-0003, CX-0055 |
| Backend Integration Pattern 2 | CX-0055, CX-0084 |
| Simple Data Exchanger | CX-0007 |
| Data Chain | CX-0005, CX-0045 |

The Provider Base requirement applies to all Enablement Service Provider capabilities.

### Business Application Provider

For a Business Application, the certification scope includes every row of the applicable column: Use Case / Capability, Base Standard, Additional (where applicable), Industry Core, Connectivity, Semantic, and Provider Base.

## Cross-Cutting Requirements

a) **Additional standards.** Standards listed under "Additional" apply conditionally based on if the standard defines is a capability the certification applicant integrated into their application

b) **Connectivity.** Every solution shall either be capable of using an EDC or provide an integrated EDC. Within certification the testing of the application is to be done via EDC. A fully operational Catena-X Application Stack needs to be presented to the CAB.

c) **Interoperability check.** In addition to certifying the applicable standards, Business Application Providers are recommended to complete an interoperability check with another application provider.
