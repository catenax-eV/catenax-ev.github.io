---
position: 1
sidebar_class_name: separator-top
---

# Changelog

4 new standards
16 updated standards
1 deprecated standard

---

## A) Updated Standards

Note: Detailed information regarding the changes can be found in the standard documents under the section “Comparison with the Previous Version of the Standard”.

### Network Services

| CX-Nr.  | Standard Name                | Version | Management Summary |
|---------|-----------------------------|---------|--------------------|
| CX-0018 | Dataspace Connectivity      | 4.1.0   | - Specified default credential context for catalog requests<br />- Updated to final versions of DSP 2025-1 and DCP 1.0<br />- Finalized discovery, protocol handling, and backward compatibility<br />- Policy constraints now covered in a separate standard |
| CX-0001 | EDC Discovery API           | 1.2.0   | - Deprecated EDC Discovery API (moved to backward compatibility section)<br />- Changed purpose: now specifies Participant Agent registration<br />- Title and terminology updated to "Participant Agent" |
| CX-0049 | DID Document                | 2.2.0   | - Added JSON schema for validation<br />- Added DataService and CredentialService to service array<br />- Rewrote introduction and removed CatalogService field |
| CX-0149 | Verified Company Identity   | 2.0.0   | - Added requirements for wallets and guidance on obtaining them<br />- Scope now covers wallet requirements and acquisition<br />- Credential descriptions moved to CX-0050; OIDC references removed |
| CX-0050 | Framework Agreement Credential | 2.2.0 | - Scope expanded to all Catena-X credentials<br />- Added membership, BPN, and dismantler credentials<br />- All credential types now include usage description and JSON schema<br />- Introduction rewritten |

### Business Partner Data Management

| CX-Nr.  | Standard Name                        | Version | Management Summary |
|---------|--------------------------------------|---------|--------------------|
| CX-0012 | Business Partner Data Pool API       | 5.1.0   | - Added relations sub-object and definitions for managing/legal entities<br />- Enhanced enum descriptions and UML diagrams<br />- CAC added for API access control<br />- Enhanced definition of "Is Participant Data" |
| CX-0074 | Business Partner Gate API            | 4.1.0   | - Added relations entity and definitions for managing/legal entities<br />- Enhanced enum descriptions and UML diagrams<br />- CAC added for API access control<br />- Enhanced definition of "Is Company Data" |
| CX-0076 | Golden Record End-to-End Requirements | 1.5.0 | - Adds advanced search for business partners (country, city, address)<br />- Enables search for all known business partners<br />- Potential new relations for BPNs<br />- Updates to BPDM 7.1 and APIs<br />- Improves data sovereignty and usability |

### Supply Chain Management & Quality

| CX-Nr.  | Standard Name                        | Version | Management Summary |
|---------|--------------------------------------|---------|--------------------|
| CX-0146 | Supply Chain Disruption Notifications | 2.0.0  | - Added field resolvingMeasureDescription to notification<br />- Added rules for payload validation for material numbers<br />- Message structure and process representation improved<br />- Provided Open API definition<br />- Various editorial and compliance updates |
| CX-0136 | Use Case PCF                        | 2.2.0   | - Added synchronous data exchange API and sequence diagrams<br />- customerPartId added as optional field<br />- API improvements and endpoint changes<br />- Enhanced documentation and metadata |
| CX-0125 | Traceability Use Case               | 2.2.0   | - Added section on special digital twins for traceability<br />- Updated block notification API with new field problemId for unique problem identification |
| CX-0123 | Quality Use Case Standard           | 3.0.0   | - Added new aspect models for warranty and claims<br />- Updated semantic and aspect models<br />- Improved data asset handling and Apache Parquet support |
| CX-0143 | Use Case Circular Economy Digital Product | 1.2.0 | - Added introduction to aspect models for DPPs<br />- Updated links, scope, and aspect models<br />- Fixed minor issues and typos |

### Sustainability

| CX-Nr.  | Standard Name                                 | Version | Management Summary |
|---------|-----------------------------------------------|---------|--------------------|
| CX-0128 | Demand and Capacity Management Data Exchange  | 2.2.0   | - Added chapter on capabilities as data assets<br />- Added order of execution<br />- Clarified policy usage and updated examples<br />- Renamed APIs for clarity |
| CX-0150 | Logistics                                     | 1.2.0   | - Updated policy constraints<br />- Minor editorial changes |
| CX-0002 | Digital Twins In Catena-X                     | 2.3.0   | - Added features from AAS Release 25-01<br />- New API operation and profiles<br />- Updated to latest AAS specifications and improved documentation<br />- Deprecated old API operation |

---

## B) New Standards

| CX-Nr.  | Standard Name                        | Version | Management Summary |
|---------|--------------------------------------|---------|--------------------|
| CX-0154 | Digital Master Data                  | 1.0.0   | - Standardized, interoperable, and secure exchange of structured master data (product, material, 2D & 3D data)<br />- Reduces inconsistencies and manual effort<br />- Improves efficiency in PDM/CAD systems<br />- Accelerates digitalization and collaboration<br />- Supports compliance and new digital services |
| CX-0155 | Requirements Exchange                | 1.0.0   | - Standardized requirements exchange between OEMs and suppliers in early product creation<br />- Establishes unified data model for requirements<br />- Based on existing models and standards |
| CX-0153 | Tariffs Use Case                     | 1.0.0   | - Standardizes tariff data collection and reporting<br />- Replaces manual processes with secure, automated solutions<br />- Sets standards for data aggregation, reporting, and quality controls<br />- Focus on raw material categories and mapping “Country of Origin” codes<br />- Lays groundwork for long-term system integration |
| CX-0152 | Policy Constraints for Data Exchange | 1.0.0   | - Standardizes policy requirements for data access and usage<br />- Eliminates duplication and inconsistencies<br />- Ensures all use cases reference this standard via CX-0018<br />- Reduces maintenance effort and risk of errors<br />- No dependencies on other standards |

---

## C) Deprecated Standards

| CX-Nr.  | Standard Name               | Reason for Deprecation |
|---------|----------------------------|-------------------------|
| CX-0013 | Identity of Member Company  | Standard deprecated as part of consolidation to simplify the standards landscape and improve user-friendliness. |

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
