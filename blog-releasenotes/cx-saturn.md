---
title: CX-Saturn
description: Details of the CX-Saturn release for Catena-X, including standards, operating model, regulatory framework, and reference implementations.
slug: cx-saturn
date: 2025-11-25
tags: [release, saturn]
---

## Catena-X Standards

- **4 new standards introduced**, expanding the foundation for digital engineering master data, requirements exchange, tariffs, and policy constraints (CX-0154, CX-0155, CX-0153, CX-0152)

- **15 standards updated** to further improve quality, interoperability, and usability
- Improved processes for supply chain disruption and traceability, supporting more robust risk management and transparency (CX-0146, CX-0125)
- Enhanced APIs and data models for product carbon footprint, quality management, and circular economy, enabling more efficient and reliable data exchange (CX-0136, CX-0123, CX-0143)
- Finalized protocols and clearer policy implementation for dataspace connectivity, including update to the final versions of DSP 2025-1 and DCP 1.0, ensuring secure and future-proof integration (CX-0018, CX-0001, CX-0152)
- Extended support for Digital Twins, including update of AAS interfaces based on Release 25-01 of the Specifications of the Asset Administration Shell (IDTA), strengthening asset management and integration (CX-0002)
- Improved Business Partner Data Management (BPDM) standards, especially for master data and gate APIs, for better management of business partner data (CX-0012, CX-0074)
- Updated identity and credential management with new requirements for wallets and verifiable credentials, now supporting "Bring Your Own Wallet" (CX-0149, CX-0049, CX-0050)

- **1 standard deprecated** to consolidate the standards landscape and improve user-friendliness (CX-0013)

:::warning

During the recent Deployment Gate for **CX-Saturn** the proposed standard candidates were reviewed with a strong focus on **backward compatibility with CX-Jupiter** as well as on potential **implementation risks**.

The following standards were identified as not fully **backward compatibility with CX-Jupiter**  and to fix this they were allowed to apply the required changes through a **fast-track process** to be included in the CX-Saturn release:

- **CX-0123 - Quality Use Case (v3.0)**
- **CX-0136 – Use Case PCF (v2.2)**
- **CX-0143 – Use Case Circular Economy Digital Product (v1.2)**
- **CX-0154 – Digital Master Data (v1.0)**
- **CX-0155 – Requirements Exchange (v1.0)**

These standards will be released together with the  *CX-Saturn Go-Live** of all other standards on **25.11**.

:::

## Catena-X Operating Model

With the CX-Saturn release, the Operating Model strengthens compliance, clarifies governance rules, enhances lifecycle management, and refreshes the service map. The outlook on Self-Sovereign Identity (SSI) has been realigned, highlighting interoperability and standardization as key priorities.

### Roles & Compliance

- TISAX Requirements
  - TISAX Level 2 becomes mandatory for all OSPs, ESPs, and BAPs effective July 2025, with a 12-month grace period.
  - TISAX Level 3 becomes mandatory for CSP-A and CSP-B roles.
- Registration
  - Roles including CSP-A, CSP-B, OSP, BAP, AP, and DPC must be registered in the Catena-X data space.
- New Roles
  - Digital Clearing House: Defined as the trust anchor for onboarding, legal entity verification, and digital self-descriptions, with support for multiple regional DCHs; clarified prerequisites and current limitations.
  - Attestation Provider: Defined as an independent verifier to strengthen trust and assurance within the Catena-X ecosystem.

### Governance & Policies

- Internal systems do not need to be listed on the public marketplace.
- Reinforced that all data space participants must comply with governance components such as Trust ID and related mechanisms.
- Removed reference to the deprecated CX-0008 Standard.

### Lifecycle Management

- Introduced an Environments section, including details on the Int environment.

### Service Map

- Updated to reflect the current state of services.
- Assigned relevant standards to each service.

### Strategic Outlook

- The chapter on “Further Integration of SSI Technologies” was refocused:
  - Shift from purely technical decentralization towards a broader SSI concept.
  - Transition from CSP-provided wallets to a bring-your-own-wallet approach.
  - Enablement of all entities to issue, present, and verify credentials, regardless of role.
  - Increased emphasis on interoperability across data spaces and alignment with global standards.

### Further Information

Details can be found in the [changelog](/docs/operating-model/changelog)

## Catena-X Regulatory Framework

The latest update to the Catena-X Regulatory Framework includes adjustments to country clearance lists, the addition of a new contracting chapter, and an updated version of the Data Exchange Governance. These changes ensure that regulatory requirements are accurately reflected and consistently applied.

### Updates to Country Clearance Lists

- **Ukraine** has been added to the *Allow List*, including additional country information.
- **Mexico** has been added to the *Allow List*.
- **Turkey** has been added to the *Allow List*.

#### New Chapter

- **Contracting** has been introduced as a new chapter in the Regulatory Framework.

#### Updated Version of Data Exchange Governance

- A new version of **Data Exchange Governance** (dated **30 September 2025**) has been published.

#### Further Information

Details can be found in the [changelog](/docs/regulatory-framework/changelog).

## Tractus-X reference implementations

The Saturn release combines the Eclipse Tractus-X releases [25.06](https://eclipse-tractusx.github.io/blog-changelog/release-25-06) and [25.09](https://eclipse-tractusx.github.io/blog-changelog/release-25-09).  
This ensures a solid baseline of updated components together with new capabilities for data sovereignty, interoperability, and traceability.
Non-compatible or other compatible versions of the Tractus-X release or the apps are listed below. If a version is interoperable with the initial release version and those features and with all other listed versions its listed as compatible.

### Compatible versions

### CX-Jupiter

| Component                                                                      | Versions                                                                                                                                                                                                                                                                                                                                                                                                                         |
|--------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tractus-X Connector <br />(**E**clipse **D**ataspace **C**omponents Connector) | [0.7.7](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.7.7) <br /> [0.8.0](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.8.0) <br /> [0.8.1](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.8.1) <br /> [0.9.0](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.9.0)  <br />  [0.10.0](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.10.0) |

### CX-Saturn

| Component                                                                      | Versions                                                                                |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| Tractus-X Connector <br />(**E**clipse **D**ataspace **C**omponents Connector) | [0.11.0](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.11.0) [Latest] |

:::warning

Please ensure that you carefully review the current [known knowns](https://eclipse-tractusx.github.io/blog-changelog/release-25-09#tractus-x-connector), familiarize yourself with the updated policy changes, and adhere to the migration guidelines.

Important: Please be aware that based on the Catena-X standard CX-0018 you MUST use the Tractus-X Connector version 0.11.0 and higher to be compatible.

:::

### Non-compatible versions

| Component | Versions |
|-----------|----------|
| N/A       | N/A      |

## Further Scope Clarification

To uphold the integrity and reliability of the onboarding process, there will be a temporary change of the standards. This change is in-line with a feature supported in the current reference implementation.

Impact: [CSP-B](/docs/operating-model/who-roles-in-the-catena-x-ecosystem#core-service-provider-b) & [OSP](/docs/operating-model/who-roles-in-the-catena-x-ecosystem#onboarding-service-provider) roles:

- [CX-0006](/docs/standards/CX-0006-RegistrationAndInitialOnboarding#238-gaia-x).
  - The standard has been slightly adjusted. Onboarding service providers and core service providers must continue to support the possibility of creating a Self-Description (SD) of the Legal Person. However, this requirement is no longer strictly tied to the initial registration process; the creation of the SD can now occur at a later stage. For any SDs that are issued, they must be stored in a central location and must comply with GAIA-X standards and guidelines.

The functionality of Catena-X and the security framework will remain unaffected furthermore the validation of company data and identifiers will continue as usual.
