---
sidebar_position: 3
title: CX Standards, Roles and Certification Objects
---

## CX Standards in the context of the CAF

### Audience & Scope and normative references

#### Audience & Scope (WHO)

Audience & Scope describes which roles are addressed and which scope of the standards is relevant. The roles from the Catena-X Operating Model shall apply here:

- Core Service Provider
- Onboarding Service Providers
- Business Application Provider
- Enablement Service Providers
- Data Providers and Consumers
- Sandbox Service Provider
- Advisory Service Provider\*
- Conformity Assessment Body\*

\* Currently not within the scope of CX certification.

#### Normative references (WHAT)

Normative references specify which other standards are relevant for the given standard. Normative references can refer to Catena-X Standards as well as to the standards outside the Catena-X Ecosystem (e.g., the IDSA protocol with the reference implementation EDC).

In this respect, normative references can also develop certification relevance and must therefore be fulfilled by the certification applicant. The relevance of certification for a standard is defined by the Modular System for Certification

### Conformity Assessment Criteria and proof of conformity

#### Conformity Assessment Criteria (WHAT)

Standards contain criteria, the so-called CAC, which are checked in an assessment by the Conformity Assessment Body. The CAC can be identified by the keywords: MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT (cf. BCP 14 [RFC2119] [RFC8174]). They are only relevant for certification if they appear in capital letters, as shown here. Only the keywords MUST and MUST NOT are subject to the certification and must therefore be fulfilled by a certification applicant.

Within the CAC, for example, implementations of API solutions or requirements for identification numbers are specified.

#### Proof of conformity (HOW)

The proof of conformity describes the type of compliance with the standard, which can be checked by the CAB in different ways.

For the certification applicant, this means that it, in turn, creates the prerequisite for testing according to the specifications of the proof of conformity.

Basically, the CAC is checked using various "Test procedures". For example, an implementation of the CAC can be proven by a verification document (test procedure: inspection).

### Roles in the Catena-X ecosystem

**Core Service Provider** — Core Service Providers run core services that enable the basic functionality of the Catena-X data ecosystem (e.g., Identity Provider, Marketplace). The Core Service Provider is responsible for the commercial provision, service operation and maintenance, and the release support of the core services in the data ecosystem. It actively markets the core services and is the contractual partner for partners such as Application Provider and Data Provider / Consumer.

**On-Boarding Service Provider** — On-Boarding Service Providers enable Data Provider / Consumer to be integrated into the Catena-X network. This includes organizational and technical onboarding.

**Enablement Service Provider** — Enablement Service Providers equip data ecosystem participants with solutions to provide or consume data within the Catena-X data ecosystem and operate data services e.g., connectors as managed services, that must be used by each data ecosystem participant depending on the use case. (For more information click here)

**Advisory Service Provider**\* — An Advisory Provider offers advisory services in various areas, from strategy to operations to technology or business use cases for those interested in the Catena-X data space. Providing advisory services includes different kind of guidance, but does not include the operation of technical services. (For more information click here)

**Business Application Provider** — Business Application Providers run business applications that solve a specific business problem (e.g., traceability, demand and capacity management, circular economy). Business applications can range from enterprise solutions to specialized solutions for small and medium sized enterprises (SMEs). (For more information click here)

**Data Provider / Consumer**\* — Data Providers / Consumers (with and without a legacy system) provide, consume, and manipulate data to collaborate with other data ecosystem participants by means of core and data services as well as business apps. (For more information click here)

In general Deep Dives to the different roles can be found [here](https://catenax-ev.github.io/docs/next/operating-model/who-roles-in-the-catena-x-ecosyste)

\* Currently not within the scope of CX certification.

## Certification objects: provider and solution

### Provider

#### Mandatory Requirement

TISAX (Level 2) is a mandatory requirement for providers in Catena-X. Every provider undergoing a Catena-X conformity assessment commits to holding a valid TISAX certification (Level 2) or an equivalent set of replacing certifications as defined below.

#### Alternative Minimum Certifications

If TISAX is not pursued, the applicant must provide one valid certification from **each** of the following four categories:

- **ISMS:** ISO 27001 or NIST or NIS 2 (DE)
- **Cloud Services:** ISO 27017 or CSA or AICPA or TCDP or BSI C5
- **Data Privacy:** ISO 27018 or CSA or AICPA or TCDP or BSI C5
- **IT Service Management:** ISO 20000-1

All four categories must be covered. Holding a certification in only one or two categories is **not sufficient**.

#### Compliance Period

To avoid hindering adoption, a compliance period of **three months** applies. The provider may obtain the Catena-X certificate before the information security certification is finalised and has up to three months after the issuing date of the Catena-X certificate to achieve TISAX (Level 2) or the replacing certifications listed above.

The provider commits to this obligation as part of the conformity assessment. If the required certification is not provided within the compliance period, the Catena-X certificate is withdrawn.

Where the compliance period is used, a corresponding note must be recorded on the Catena-X certificate, stating that the information security certification is pending and must be provided within three months of the certificate issuing date.  

### Solution

The certification object "Solution" is defined by standards that focus on executable software based on business domain or platform capabilities and includes but is not limited to: Application Logic, Application Programming Interface Specification, Data Access (e.g., usage policies), Payload or Meta-Data, Processes (e.g., onboarding process), Business Logic (e.g., PCF Rulebook), Consulting Offerings, Conformity Assessment Requirements.
