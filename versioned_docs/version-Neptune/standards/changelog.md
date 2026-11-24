---
position: 1
sidebar_class_name: separator-top
---

# Changelog

5 new standards · 14 updated standards · 8 deprecated standards

---

## Updated Standards

> **Note:** Detailed information regarding the changes can be found in the standard documents under the section "Comparison with the Previous Version of the Standard".

### Industry Core

| CX-Nr.  | Standard Name                           | Type | Management Summary                                                                                                                                                                                                                                                                                       |  
|---------|-----------------------------------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| CX-0151 | Industry Core: Basics                   | Minor | - Mandates documentation of usage policies for notification assets in Connectors and inclusion of purpose fields in ODRL profiles<br />- Establishes Aspect Model `BinaryExchange` as the recommended standard for binary data exchange<br />- Updates technical references throughout                      |  
| CX-0002 | Digital Twins in Catena-X (support DPP) | Minor | - Integrated Asset Administration Shell Release 2601 with Digital Product Passport System (JTC24)<br />- Migrated namespace from 'dcat:' to 'dspace:' and relocated policy definitions to CX-0152<br />- Updated terminology to IEC standards and extracted Conformity Assessment Criteria to separate file |

### Network Services

| CX-Nr.  | Standard Name                             | Type  | Management Summary                                                                                                                                                                                                                                                                            |  
|---------|-------------------------------------------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| CX-0135 | BP Company Certificate Management         | Minor | - Introduces new specifications for the pull mechanism<br />- Ensures cross-compatibility between different implementations<br />- Addresses correction of inconsistencies from the previous version                                                                                              |  
| CX-0001 | Participant Agent Registration            | Minor | - Clarification on relevant roles<br />- Removal of some obsolete parts in the standard<br />- Minor improvements of precision of expressions                                                                                                                                                     |  
| CX-0018 | Dataspace Connectivity                    | Minor | - Adds AzureStorage transfer type and corrects mistakes in existing transfer types<br />- Corrects references to outdated namespaces<br />- Advances towards a complete decentralized discovery mechanism<br />- Corrections concerning mandatory or optional requirements without breaking changes |  
| CX-0006 | Registration and Initial Onboarding       | Minor | - Rephrases and restructures main content for readability and maintainability<br />- Limits normative sections to normatively relevant statements<br />- Moves Identity Proofing step to a separate, new standard (CX-NFR-IdP)                                                                    |  
| CX-0049 | DID Document Schema                       | Minor | - Enhances document quality through improved organization<br />- Corrected versions and references for technical precision<br />- Clearer terminology throughout                                                                                                                                  |  
| CX-0050 | CX-specific Credentials                   | Minor | - Improves document quality through clearer terminology<br />- Complete referencing and better formatting<br />- Strengthens overall technical accuracy and readability                                                                                                                           |

### Supply Chain Management & Quality

| CX-Nr.  | Standard Name                                | Type  | Management Summary                                                                                                                                                                                                                                                                                              |  
|---------|----------------------------------------------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CX-0153 | Tariffs Use Case                             | Major | - Updates the aspect model version<br />- Ensures all relevant information for tariff declarations in the US can be transferred                                                                                                                                                                                   |  
| CX-0128 | Demand and Capacity Management Data Exchange | Minor | - BPNS flexibility introduced to allow using Business Partner Numbers of subsidiaries or suppliers when sending demands<br />- 'Agreed Capacity' definition clarified to prevent misunderstandings<br />- Conformity Assessment Criteria catalogue added in standardized format<br />- Ensures alignment with CX-0152 |  
| CX-0150 | Logistics and Customs Use Case               | Minor | - Deleted an expendable and misleading abbreviation in section 1.5 Terminology<br />- Avoids potential misunderstandings of terms                                                                                                                                                                                 |  
| CX-0125 | Traceability Use Case                        | Minor | - Adds two new use cases: Quality for chemical goods data exchange to improve production quality<br />- Adds ZeroKmFailure for standardized OEM-to-supplier error reporting<br />- Enables faster problem identification and affected goods isolation                                                               |

### Sustainability

| CX-Nr.  | Standard Name                                        | Type  | Management Summary                                                                                                                                                                                                                                                          |  
|---------|------------------------------------------------------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CX-0143 | Use Case Circular Economy – Digital Product Passport | Major | - Removes battery passport related information (separated into new standard due to common data model with IDTA)<br />- Provides clarity regarding batteries<br />- Ensures Data Consumer/Provider and Business Application Provider can deliver interoperable product passports |

### TC4M

| CX-Nr.  | Standard Name                           | Type  | Management Summary                                                                                                                                                                                                                                    |  
|---------|-----------------------------------------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| CX-0003 | SAMM Aspect Meta Model                  | Minor | - Updated to SAMM V2.2.0 including namespace `um:samm.io.adminshell.idta.batterypass` alongside `um:samm.io.catenax`<br />- Enables collaborative activities with other organizations for Battery Passport<br />- Minor editorial improvements throughout |

---

## New Standards

| CX-Nr.     | Standard Name                                                             | Type  | Management Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |  
|------------|---------------------------------------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| CX-0158    | Software Bill of Materials (SBOM) for Identifiable Software Parts in Cars | 1.0.0 | - Enables exchange of car software bill of materials (SBOM) between value-added partners in automotive (e.g. OEM ↔ Tier 1, Tier 1 ↔ Tier 2)<br />- Establishes standardized data models, formats, and exchange mechanisms<br />- Supports vulnerability management, security risk mitigation, and regulatory compliance                                                                                                                                                                                                                                                                                                                                                                                                                                              |  
| CX-NFR-IdP | Identity Proofing                                                         | 1.0.0 | - Enables Catena-X to define multiple methods for Identity Proofing (verifying a company's identity during onboarding)<br />- Contents previously part of CX-0006; now referenced as a separate standard<br />- Significantly improved standardization of the GX Clearing House process (removed ambiguities, increased clarity)                                                                                                                                                                                                                                                                                                                                                                                                                                     |  
| CX-0157    | PURIS                                                                     | 1.0.0 | - Consolidates the full set of PURIS standards to ease certification<br />- Significantly reduces Conformity Assessment Criteria<br />- Corrects examples and typos<br />- Adds the previously missing right operand of the purpose                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |  
| CX-0159    | Material Accounting                                                       | 1.0.0 | - Introduces harmonized technical rules and data models for Material Accounting<br />- Enables standardized, verifiable tracking of secondary material flows along the reverse automotive value chain<br />- Closes the data gap between end-of-life of vehicles and production of new materials & components<br />- Supports verification of secondary material content quotas                                                                                                                                                                                                                                                                                                                                                                                        |
| CX-0156    | Geometry                                                                  | 1.0.0 | The Geometry Standard defines a common framework for the interoperable exchange and use of three-dimensional (3D) and two-dimensional (2D) data within the Catena-X ecosystem. It establishes unified standard that enable seamless integration of CAD models, mesh data, point clouds, and related spatial information from design, manufacturing, scans, or spatial metadata across diverse systems and organisations. By ensuring data integrity, accessibility, and sovereignty, the standard fosters trust, reduces integration costs, and accelerates innovation. This document provides the basis for reliable and secure 3D data handling across supply chain partners, supporting efficiency, transparency, and scalability in industrial applications. |

---

## Deprecated Standards

| CX-Nr.  | Standard Name                                       | Management Summary                                                                                                       |  
|---------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|  
| CX-0015 | IAM & Access Control Paradigm for Users and Clients | Standard deprecated as part of consolidation to simplify the standards landscape and improve user-friendliness.          |  
| CX-0014 | Employees and Technical Users                       | Standard deprecated as part of consolidation to simplify the standards landscape and improve user-friendliness.          |  
| CX-0102 | Functional Mock Up                                  | Standard deprecated as part of consolidation to simplify the standards landscape and improve user-friendliness.          |  
| CX-0118 | Delivery Information Exchange                       | Deprecated together with the release of the consolidated standard CX-0157: PURISphase.                                   |  
| CX-0120 | Short-Term Material Demand Exchange                 | Deprecated together with the release of the consolidated standard CX-0157: PURIS phase.                                  |  
| CX-0121 | Planned Production Output Exchange                  | Deprecated together with the release of the consolidated standard CX-0157: PURIS  phase.                                 |  
| CX-0122 | Item Stock Exchange                                 | Deprecated together with the release of the consolidated standard CX-0157: PURIS sphase.                                 |  
| CX-0145 | Days of Supply Exchange                             | Deprecated together with the release of the consolidated standard CX-0157: PURIS phase.                                  |

---

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
