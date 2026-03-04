---
sidebar_position: 1
title: Overview Standards
sidebar_class_name: separator-bottom
tags:
  - CAT/BPDM
  - CAT/Connector
  - CAT/Connector as a Service
  - CAT/Core Service Provider
  - CAT/Data Provider & Consumer
  - CAT/Digital Twin
  - CAT/Digital Twin Registry
  - CAT/Enablement Service Provider
  - CAT/Identity Wallet
  - CAT/Information as a Service
  - CAT/Marketplace
  - CAT/SSI
  - CAT/Onboarding Service Provider
  - CAT/Portal
  - CAT/Provider Base
  - CAT/Sandbox Service Provider
  - CAT/Sandbox Services
  - CAT/Semantic
  - CAT/Value Added Services
  - CAT/Business Application Provider
  - UC/Quality
  - UC/Traceability
  - UC/Behaviroal Twin
  - UC/Circularity
  - UC/Ecopass
  - UC/ESS
  - UC/MaaS
  - UC/Modular Production
  - UC/PURIS
  - UC/OSIM
  - UC/Logistics
---

:::info[Important notification]

**CX-Titan** is fully compatible with **CX-Saturn**. Business Application Providers, however, now need to certify their solutions against the **CX-Saturn standards**.
:::

## Introduction

Catena-X standards are the foundation for interoperability and data sovereignty within the Catena-X data space. They define technical specifications, data models, APIs, and processes that enable participants to exchange data securely and efficiently across the automotive value chain.

This page provides an overview of all Catena-X standards, their current status, and how they evolve over time.

## Current Release Summary (CX-Saturn Preview)

The current release includes:

- **62 active standards** covering various domains
- **4 new standards** introduced in this release
- **16 updated standards** with enhancements and improvements
- **1 deprecated standard** as part of landscape consolidation

For detailed information about changes in this release, please refer to the [Changelog](./changelog.md).

## Understanding Standards Lifecycle

Catena-X standards continuously evolve to meet the changing needs of the automotive industry and technological advancements. Here's what you need to know:

### Why Standards Change Between Releases

Standards may appear, disappear, or change between releases for several reasons:

- **New Standards**: Introduced to support emerging use cases, new technologies, or additional requirements from the Catena-X community
- **Updated Standards**: Existing standards are enhanced with new features, improved specifications, bug fixes, or alignment with other standards
- **Deprecated Standards**: Standards may be deprecated when they are:
  - Consolidated into other standards to reduce complexity
  - Replaced by improved alternatives
  - No longer relevant to current use cases
  - Merged with related standards for better user experience

### Standard Versioning

Each standard follows semantic versioning (e.g., v1.2.0) where:

- **Major version** changes indicate breaking changes
- **Minor version** changes indicate backward-compatible new features
- **Patch version** changes indicate backward-compatible bug fixes

### Standard Categories

Standards are organized into two main categories:

1. **CAT (Catena-X) Standards**: Technical and architectural standards
   - Network Services (Connectivity, Discovery, Identity)
   - Business Partner Data Management
   - Data Chain Management
   - And more...

2. **UC (Use Case) Standards**: Domain-specific standards
   - Quality & Traceability
   - Sustainability
   - Circular Economy
   - Supply Chain Management
   - And more...

## All Active Standards

Below is a categorized list of all active standards in the current release. Click on any standard to view its detailed documentation.

### Network Services

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0001](./CX-0001-ParticipantAgentRegistration/CX-0001-ParticipantAgentRegistration.md) | Participant Agent Registration | v1.2 |
| [CX-0018](./CX-0018-DataspaceConnectivity/CX-0018-DataspaceConnectivity.md) | Dataspace Connectivity | v4.1.1 |
| [CX-0049](./CX-0049-DIDDocumentSchema/CX-0049-DIDDocumentSchema.md) | DID Document | v2.2.0 |
| [CX-0050](./CX-0050-CXSpecificCredentials/CX-0050-CXSpecificCredentials.md) | CX-Specific Credentials | v2.2.0 |
| [CX-0149](./CX-0149-WalletRequirements/CX-0149-WalletRequirements.md) | Wallet Requirements | v2.0.0 |
| [CX-0152](./CX-0152-PolicyConstrainsForDataExchange/CX-0152-PolicyConstrainsForDataExchange.md) | Policy Constraints for Data Exchange | v1.0.0 |

### Semantic & Data Models

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0002](./CX-0002-DigitalTwinsInCatenaX/CX-0002-DigitalTwinsInCatenaX.md) | Digital Twins in Catena-X | v2.3.0 |
| [CX-0003](./CX-0003-SAMMSemanticAspectMetaModel/CX-0003-SAMMSemanticAspectMetaModel.md) | SAMM Aspect Meta Model | v1.2.0 |
| [CX-0044](./CX-0044-ECLASS/CX-0044-ECLASS.md) | ECLASS | v1.0.2 |
| [CX-0045](./CX-0045-AspectModelDataChainTemplate/CX-0045-AspectModelDataChainTemplate.md) | Aspect Model Data Chain Template | v1.3.0 |
| [CX-0067](./CX-0067-OntologyModelsToRealizeFederatedQueryInCatenaX/CX-0067-OntologyModelsToRealizeFederatedQueryInCatenaX.md) | Ontology Models to Realize Federated Query in Catena-X | v1.1.0 |
| [CX-0084](./CX-0084-FederatedQueriesInDataSpaces/CX-0084-FederatedQueriesInDataSpaces.md) | Federated Queries in Data Spaces | v1.2.0 |

### Business Partner Data Management

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0010](./CX-0010-BusinessPartnerNumber/CX-0010-BusinessPartnerNumber.md) | Business Partner Number | v3.0.1 |
| [CX-0012](./CX-0012-BusinessPartnerDataPoolAPI/CX-0012-BusinessPartnerDataPoolAPI.md) | Business Partner Data Pool API | v5.1.1 |
| [CX-0053](./CX-0053-BPNDiscoveryServiceAPIs/CX-0053-BPNDiscoveryServiceAPIs.md) | Discovery Finder and BPN Discovery Service APIs | v1.1.1 |
| [CX-0074](./CX-0074-BusinessPartnerGateAPI/CX-0074-BusinessPartnerGateAPI.md) | Business Partner Gate API | v4.1.0 |
| [CX-0076](./CX-0076-GoldenRecordEndtoEndRequirementsStandard/CX-0076-GoldenRecordEndtoEndRequirementsStandard.md) | Golden Record End-to-End Requirements | v1.5.0 |
| [CX-0077](./CX-0077-DataQualityDashboard/CX-0077-DataQualityDashboard.md) | Data Quality Dashboard | v1.2.0 |
| [CX-0078](./CX-0078-BankDataVerificationDashboard/CX-0078-BankDataVerificationDashboard.md) | Bank Data Verification Dashboard | v1.2.0 |
| [CX-0079](./CX-0079-NaturalPersonScreeningDashboard/CX-0079-NaturalPersonScreeningDashboard.md) | Natural Person Screening Dashboard | v1.2.0 |
| [CX-0080](./CX-0080-BPDMFraudPreventionService/CX-0080-BPDMFraudPreventionService.md) | BPDM Fraud Prevention Service | v1.1.0 |
| [CX-0081](./CX-0081-BPDMCountryRisk/CX-0081-BPDMCountryRisk.md) | BPDM Country Risk | v2.2.0 |
| [CX-0116](./CX-0116-SanctionWatchlistDashboard/CX-0116-SanctionWatchlistDashboard.md) | Sanction Watchlist Dashboard | v1.2.0 |
| [CX-0135](./CX-0135-CompanyCertificateManagement/CX-0135-CompanyCertificateManagement.md) | Company Certificate Management | v2.0.0 |

### Identity & Access Management

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0014](./CX-0014-EmployeesAndTechnicalUsers/CX-0014-EmployeesAndTechnicalUsers.md) | Employees and Technical Users | v1.0.1 |
| [CX-0015](./CX-0015-IAMandAccessControlParadigmForUsersAndClients/CX-0015-IAMandAccessControlParadigmForUsersAndClients.md) | IAM & Access Control Paradigm for Users and Clients | v1.0.1 |

### Onboarding

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0006](./CX-0006-RegistrationAndInitialOnboarding/CX-0006-RegistrationAndInitialOnboarding.md) | Registration and Initial Onboarding | v2.0.1 |
| [CX-0009](./CX-0009-CXRegistrationAPI/CX-0009-CXRegistrationAPI.md) | CX Registration API | v2.0.0 |

### Data Chain & Integration

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0005](./CX-0005-ItemRelationshipServiceAPI/CX-0005-ItemRelationshipServiceAPI.md) | Item Relationship Service API | v2.2.0 |
| [CX-0055](./CX-0055-DataProcessingPatternsforITSystemIntegration/CX-0055-DataProcessingPatternsforITSystemIntegration.md) | Data Processing Patterns for IT System Integration | v1.2.0 |

### Industry Core

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0126](./CX-0126-IndustryCorePartType/CX-0126-IndustryCorePartType.md) | Industry Core: Part Type | v2.0.0 |
| [CX-0127](./CX-0127-IndustryCorePartInstance/CX-0127-IndustryCorePartInstance.md) | Industry Core: Part Instance | v2.0.0 |
| [CX-0151](./CX-0151-IndustryCoreBasics/CX-0151-IndustryCoreBasics.md) | Industry Core: Basics | v1.0.0 |

### Service Provider Standards

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0007](./CX-0007-MinimalDataProviderServicesOffering/CX-0007-MinimalDataProviderServicesOffering.md) | Minimal Data Provider Service Offering | v1.1.1 |
| [CX-0054](./CX-0054-ApplicationServiceRelease/CX-0054-ApplicationServiceRelease.md) | Application Service Release | v1.0.1 |

### Supply Chain & Resiliency

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0115](./CX-0115-ManufacturingCapabilityExchange/CX-0115-ManufacturingCapabilityExchange.md) | Manufacturing Capability Exchange | v1.0.0 |
| [CX-0118](./CX-0118-ActualDeliveryInformationExchange/CX-0118-ActualDeliveryInformationExchange.md) | Actual Delivery Information Exchange | v2.0.0 |
| [CX-0120](./CX-0120-ShortTermMaterialDemandExchange/CX-0120-ShortTermMaterialDemandExchange.md) | Short-Term Material Demand Exchange | v2.0.0 |
| [CX-0121](./CX-0121-PlannedProductionOutputExchange/CX-0121-PlannedProductionOutputExchange.md) | Planned Production Output Exchange | v2.0.0 |
| [CX-0122](./CX-0122-ItemStockExchange/CX-0122-ItemStockExchange.md) | Item Stock Exchange | v2.0.0 |
| [CX-0128](./CX-0128-DemandandCapacityManagementDataExchange/CX-0128-DemandandCapacityManagementDataExchange.md) | Demand and Capacity Management Data Exchange | v2.2.0 |
| [CX-0129](./CX-0129-RequestforQuotationExchange/CX-0129-RequestforQuotationExchange.md) | Request for Quotation Exchange | v2.0.0 |
| [CX-0133](./CX-0133-OnlineControlandSimulation/CX-0133-OnlineControlandSimulation.md) | Online Control and Simulation | v2.0.0 |
| [CX-0145](./CX-0145-DaysofsupplyExchange/CX-0145-DaysofsupplyExchange.md) | Days of Supply Exchange | v1.0.0 |
| [CX-0146](./CX-0146-SupplyChainDisruptionNotifications/CX-0146-SupplyChainDisruptionNotifications.md) | Supply Chain Disruption Notifications | v2.0.0 |
| [CX-0150](./CX-0150-UseCaseLogistics/CX-0150-UseCaseLogistics.md) | Use Case Logistics | v1.2.0 |

### Quality & Traceability

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0123](./CX-0123-QualityUseCaseStandard/CX-0123-QualityUseCaseStandard.md) | Quality Use Case Standard | v3.0.0 |
| [CX-0125](./CX-0125-TraceabilityUseCase/CX-0125-TraceabilityUseCase.md) | Traceability Use Case | v2.2.0 |
| [CX-0141](./CX-0141-HealthIndicatorUseCase/CX-0141-HealthIndicatorUseCase.md) | Health Indicator Use Case | v1.0.0 |
| [CX-0142](./CX-0142-ShopFloorInformationService/CX-0142-ShopFloorInformationService.md) | Shop Floor Information Service | v1.0.0 |

### Sustainability & Environmental

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0136](./CX-0136-UseCasePCF/CX-0136-UseCasePCF.md) | Use Case PCF (Product Carbon Footprint) | v2.2.0 |
| [CX-0144](./CX-0144-ESSUseCaseStandard/CX-0144-ESSUseCaseStandard.md) | ESS (Environmental and Social Standards) Use Case | v1.0.0 |
| [CX-0153](./CX-0153-TariffsUseCase/CX-0153-TariffsUseCase.md) | Tariffs Use Case | v1.0.0 |

### Circular Economy

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0117](./CX-0117-UseCaseCircularEconomySecondaryMarketplace/CX-0117-UseCaseCircularEconomySecondaryMarketplace.md) | Use Case Circular Economy - Secondary Marketplace | v1.0.0 |
| [CX-0131](./CX-0131-CircularityCore/CX-0131-CircularityCore.md) | Circularity Core | v1.1.0 |
| [CX-0143](./CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard/introduction.md) | Use Case Circular Economy - Digital Product Passport | v1.2.0 |

### Behavioral Twin & Simulation

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0059](./CX-0059-UseCaseBehaviourTwinEndurancePredictor/CX-0059-UseCaseBehaviourTwinEndurancePredictor.md) | Use Case Behaviour Twin Endurance Predictor | v2.0.1 |
| [CX-0102](./CX-0102-Functional-Mock-Up/CX-0102-Functional-Mock-Up.md) | Functional Mock-Up | v1.0.0 |
| [CX-0105](./CX-0105-AssetTrackingUseCase/CX-0105-AssetTrackingUseCase.md) | Asset Tracking Use Case | v1.1.0 |
| [CX-0138](./CX-0138-UseCaseBehaviourTwinEnduranceEstimator/CX-0138-UseCaseBehaviourTwinEnduranceEstimator.md) | Use Case Behaviour Twin Endurance Estimator | v1.0.0 |

### PLM & Requirements

| Standard | Title | Version |
|----------|-------|---------|
| [CX-0154](./CX-0154-MasterDataManagement/CX-0154-MasterDataManagement.md) | Digital Master Data | v1.0.0 |
| [CX-0155](./CX-0155-RequirementsEngineering/CX-0155-RequirementsEngineering.md) | Requirements Exchange | v1.0.0 |

## Recent Changes

For a comprehensive list of all changes, including new, updated, and deprecated standards, please visit the [Changelog](./changelog.md).

### What's New in This Release

- **CX-0152** - Policy Constraints for Data Exchange: Standardizes policy requirements across all use cases
- **CX-0153** - Tariffs Use Case: Supports tariff data collection and reporting
- **CX-0154** - Digital Master Data: Enables structured master data exchange
- **CX-0155** - Requirements Exchange: Facilitates requirements exchange in early product creation

### Recently Updated

Key updates include:

- Enhanced network services with DSP 2025-1 and DCP 1.0 compliance
- Improved business partner data management with advanced search capabilities
- Updated sustainability standards with new aspect models
- Enhanced supply chain management notifications

### Deprecated Standards

- **CX-0013** - Identity of Member Company: Deprecated as part of consolidation to simplify the standards landscape

## Getting Started

To implement Catena-X standards in your organization:

1. **Review** the relevant standards for your use case
2. **Understand** the requirements and conformity criteria
3. **Implement** the standards in your solutions
4. **Certify** your implementation against the standards
5. **Stay Updated** with new releases and changes

## Additional Resources

- [Changelog](./changelog.md) - Detailed changes in each release
- [Non-functional Requirements](../non-functional/overview/) - Cross-cutting requirements

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit the [Catena-X copyright information](/copyright).
