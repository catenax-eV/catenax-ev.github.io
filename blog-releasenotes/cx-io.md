---
title: CX-Io
description: Details of the CX-Io release for Catena-X, including standards, operating model, regulatory framework, and reference implementations.
slug: cx-io
date: 2025-03-19
tags: [release, io]
---

## Catena-X Standards

- 2 new standards, completing the set of Catena-X' initial use cases
- 12 updated standards to ensure quality
- 1 deprecated standards in the course of consolidation to achieve more user-friendliness
- updated modular certification framework (see [Operating Model](https://catenax-ev.github.io/docs/next/operating-model/how-data-space-governance#certification-framework))

details to be found [here](/docs/standards/changelog)

## Catena-X Operating Model

- updated to version 3.0.5
- only patch changes e.g. clarification of the Sandbox, update modular System covering the new standards and update glossary etc.

details to be found [here](/docs/operating-model/changelog)

## Catena-X Regulatory Framework

- only patch changes in comparison to CX-Jupiter

details to be found [here](/docs/regulatory-framework/changelog)

## Tractus-X reference implementations

A comprehensive, coherent and compatible set of development artefacts. Highlights include:

**Portal**

- Enhance the App/Service registration process
  - Reduces necessity of creating multiple services to enable the usage of multiple technical users; leads to more flexibility for the app/service provider
- Optimization of the Service/App Subscription Process
  - Enhances security and user experience
- Automatic Setting of the Catena-X Membership Flag
  - Automates the flag-setting process, making onboarding more efficient
- Integration of the Gaia-X Clearinghouse Interface
  - The new API provides more flexibility from a Gaia-X perspective. The Portal backend must switch to the new API for proper data validation during company onboarding and SD document creation

**SSI Credential Issuer**

- Support for Bitstring Status List
  - Ensures compliance with the updated W3C standard.
- Process Status List API
  - Enables the retriggering of failed process steps to improve stability

**EDC**

- Empty Asset Selector
  - Blocks contract definitions with an empty asset selector to prevent erroneous data publication
- Policy Checks
  - Adds policy validation APIs and validation during policy creation
- Restart Broken Transfers
  - Automatically restarts an abandoned data transfer, e.g., after a data plane crash

**IRS**

- Efficient Orchestration of EDC Negotiations
  - Reduces unnecessary duplicate negotiations and improves performance
- Remediation of technical Debt
  - Improved calculation of order and batch statuses, along with integration of progress indicators.
- Limitation of Parallel Job Execution
  - Reduces system load and prevents resource exhaustion

details to be found [here](https://eclipse-tractusx.github.io/CHANGELOG/#2503---2025-03-19)

### Details on compatible and non-compatible versions

By default, the versions listed in the ***[Tractus-X changelog](https://eclipse-tractusx.github.io/CHANGELOG/#2503---2025-03-17)*** are the recommended versions. Non-compatible or other compatible versions of the Tractus-X release or the apps are listed below. If a version is interoperable with the initial release version and those features and with all other listed versions its listed as compatible.

### Compatible versions

| Component                                           | Versions                                                                                                                                                                                                                                                                                                                                           | Comments |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Eclipse Data Space Connector <br /> (Tractus-X EDC) | [0.7.7](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.7.7) <br /> [0.8.0](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.8.0) <br /> [0.8.1](https://github.com/eclipse-tractusx/tractusx-edc/releases/[tag/0.8.1) <br /> [0.9.0](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.9.0) [Latest] |          |

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
