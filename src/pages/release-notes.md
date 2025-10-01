# Release Notes

:::info

For more information, on the **legal notice** please visit [here](https://catenax-ev.github.io/copyright).

:::

## [CX-Saturn]

### Catena-X Standards

- **4 new standards introduced**, expanding the foundation for digital master data, requirements exchange, tariffs, and policy constraints (CX-0154, CX-0155, CX-0153, CX-0152)

- **15 standards updated** to further improve quality, interoperability, and usability
- Improved processes for supply chain disruption and traceability, supporting more robust risk management and transparency (CX-0146, CX-0125)
- Enhanced APIs and data models for product carbon footprint, quality management, and circular economy, enabling more efficient and reliable data exchange (CX-0136, CX-0123, CX-0143)
- Finalized protocols and clearer policy implementation for dataspace connectivity, including update to the final versions of DSP 2025-1 and DCP 1.0, ensuring secure and future-proof integration (CX-0018, CX-0001, CX-0152)
- Extended support for Digital Twins, including update of AAS interfaces based on Release 25-01 of the Specifications of the Asset Administration Shell (IDTA), strengthening asset management and integration (CX-0002)
- Improved Business Partner Data Management (BPDM) standards, especially for master data and gate APIs, for better management of business partner data (CX-0012, CX-0074)
- Updated identity and credential management with new requirements for wallets and verifiable credentials, now supporting "Bring Your Own Wallet" (CX-0149, CX-0049, CX-0050)

- **1 standard deprecated** to consolidate the standards landscape and improve user-friendliness (CX-0013)

### Catena-X Operating Model

With the CX-Saturn release, the Operating Model strengthens compliance, clarifies governance rules, enhances lifecycle management, and refreshes the service map. The outlook on Self-Sovereign Identity (SSI) has been realigned, highlighting interoperability and standardization as key priorities.

#### Roles & Compliance

- TISAX Requirements
  - TISAX Level 2 becomes mandatory for all OSPs, ESPs, and BAPs effective July 2025, with a 12-month grace period.
  - TISAX Level 3 becomes mandatory for CSP-A and CSP-B roles.
- Registration
  - Roles including CSP-A, CSP-B, OSP, BAP, AP, and DPC must be registered in the Catena-X data space.
- New Roles
  - Digital Clearing House: Defined as the trust anchor for onboarding, legal entity verification, and digital self-descriptions, with support for multiple regional DCHs; clarified prerequisites and current limitations.
  - Attestation Provider: Defined as an independent verifier to strengthen trust and assurance within the Catena-X ecosystem.

#### Governance & Policies

- Internal systems do not need to be listed on the public marketplace.
- Reinforced that all data space participants must comply with governance components such as Trust ID and related mechanisms.
- Removed reference to the deprecated CX-0008 Standard.

#### Lifecycle Management

- Introduced an Environments section, including details on the Int environment.

#### Service Map

- Updated to reflect the current state of services.
- Assigned relevant standards to each service.

#### Strategic Outlook

- The chapter on “Further Integration of SSI Technologies” was refocused:
  - Shift from purely technical decentralization towards a broader SSI concept.
  - Transition from CSP-provided wallets to a bring-your-own-wallet approach.
  - Enablement of all entities to issue, present, and verify credentials, regardless of role.
  - Increased emphasis on interoperability across data spaces and alignment with global standards.

#### Further Information

Details can be found in the [changelog](/docs/operating-model/changelog)

### Catena-X Regulatory Framework

The latest update to the Catena-X Regulatory Framework includes adjustments to country clearance lists, the addition of a new contracting chapter, and an updated version of the Data Exchange Governance. These changes ensure that regulatory requirements are accurately reflected and consistently applied.

#### Updates to Country Clearance Lists

- **Ukraine** has been added to the *Allow List*, including additional country information.
- **Mexico** has been added to the *Allow List*.
- **Turkey** has been added to the *Allow List*.

#### New Chapter

- **Contracting** has been introduced as a new chapter in the Regulatory Framework.

#### Updated Version of Data Exchange Governance

- A new version of **Data Exchange Governance** (dated **30 September 2025**) has been published.

#### Further Information

Details can be found in the [changelog](/docs/regulatory-framework/changelog).

### Tractus-X reference implementations

The Saturn release combines the Eclipse Tractus-X releases [25.06](https://eclipse-tractusx.github.io/blog-changelog/release-25-06) and [25.09](https://eclipse-tractusx.github.io/blog-changelog/release-25-09).  
This ensures a solid baseline of updated components together with new capabilities for data sovereignty, interoperability, and traceability.
Non-compatible or other compatible versions of the Tractus-X release or the apps are listed below. If a version is interoperable with the initial release version and those features and with all other listed versions its listed as compatible.

#### Compatible versions

#### CX-Jupiter

| Component | Versions |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tractus-X Connector <br />(**E**clipse **D**ataspace **C**omponents Connector)| [0.7.7](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.7.7) <br /> [0.8.0](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.8.0) <br /> [0.8.1](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.8.1) <br /> [0.9.0](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.9.0)  <br />  [0.10.0](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.10.0)  |

#### CX-Saturn

| Component | Versions |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tractus-X Connector <br />(**E**clipse **D**ataspace **C**omponents Connector)| [0.11.0](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.11.0) [Latest]  |

:::warning

Please ensure that you carefully review the current [know knows](https://eclipse-tractusx.github.io/blog-changelog/release-25-09#tractus-x-connector), familiarize yourself with the updated policy changes, and adhere to the migration guidelines.

Important: Please be aware based on the Catena-X standard CX-0018 you MUSt use the Tractus-X Connector version 0.11.0 and higher to be compatible.

:::

#### Non-compatible versions

| Component | Versions |
| --------- | -------- |
| N/A       | N/A      |

### Further Scope Clarification

To uphold the integrity and reliability of the onboarding process, there will be a temporary change of the standards. This change is in-line with a feature supported in the current reference implementation.

Impact: [CSP-B](/docs/operating-model/who-roles-in-the-catena-x-ecosystem#core-service-provider-b) & [OSP](/docs/operating-model/who-roles-in-the-catena-x-ecosystem#onboarding-service-provider) roles:

- [CX-0006](/docs/standards/CX-0006-RegistrationAndInitialOnboarding#238-gaia-x).
  - The standard has been slightly adjusted. Onboarding service providers and core service providers must continue to support the possibility of creating a Self-Description (SD) of the Legal Person. However, this requirement is no longer strictly tied to the initial registration process; the creation of the SD can now occur at a later stage. For any SDs that are issued, they must be stored in a central location and must comply with GAIA-X standards and guidelines.

The functionality of Catena-X and the security framework will remain unaffected furthermore the validation of company data and identifiers will continue as usual.

---

## [CX-Io]

### Catena-X Standards

- 2 new standards, completing the set of Catena-X' initial use cases
- 12 updated standards to ensure quality
- 1 deprecated standards in the course of consolidation to achieve more user-friendliness
- updated modular certification framework (see [Operating Model](https://catenax-ev.github.io/docs/next/operating-model/how-data-space-governance#certification-framework))

details to be found [here](/docs/standards/changelog)

### Catena-X Operating Model

- updated to version 3.0.5
- only patch changes e.g. clarification of the Sandbox, update modular System covering the new standards and update glossary etc.

details to be found [here](/docs/operating-model/changelog)

### Catena-X Regulatory Framework

- only patch changes in comparison to CX-Jupiter

details to be found [here](/docs/regulatory-framework/changelog)

### Tractus-X reference implementations

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

#### Details on compatible and non-compatible versions

By default, the versions listed in the ***[Tractus-X changelog](https://eclipse-tractusx.github.io/CHANGELOG/#2503---2025-03-17)*** are the recommended versions. Non-compatible or other compatible versions of the Tractus-X release or the apps are listed below. If a version is interoperable with the initial release version and those features and with all other listed versions its listed as compatible.

#### Compatible versions

| Component | Versions | Comments |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Eclipse Data Space Connector <br /> (Tractus-X EDC) | [0.7.7](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.7.7) <br /> [0.8.0](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.8.0) <br /> [0.8.1](https://github.com/eclipse-tractusx/tractusx-edc/releases/[tag/0.8.1) <br /> [0.9.0](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.9.0) [Latest] ||

#### Non-compatible versions

| Component | Versions |
| --------- | -------- |
| N/A       | N/A      |

### Further Scope Clarification

To uphold the integrity and reliability of the onboarding process, there will be a temporary change of the standards. This change is in-line with a feature supported in the current reference implementation.

Impact: [CSP-B](/docs/operating-model/who-roles-in-the-catena-x-ecosystem#core-service-provider-b) & [OSP](/docs/operating-model/who-roles-in-the-catena-x-ecosystem#onboarding-service-provider) roles:

- [CX-0006](/docs/standards/CX-0006-RegistrationAndInitialOnboarding#238-gaia-x).
  - The standard has been slightly adjusted. Onboarding service providers and core service providers must continue to support the possibility of creating a Self-Description (SD) of the Legal Person. However, this requirement is no longer strictly tied to the initial registration process; the creation of the SD can now occur at a later stage. For any SDs that are issued, they must be stored in a central location and must comply with GAIA-X standards and guidelines.

The functionality of Catena-X and the security framework will remain unaffected furthermore the validation of company data and identifiers will continue as usual.

---

## [CX-Jupiter]

### Catena-X Standards

- 13 new standards, completing the set of Catena-X' initial use cases
- 35 updated standards to ensure quality, coherence and the implementation of our "breaking change" via SSI
- 67 deprecated standards in the course of consolidation to achieve more user-friendliness
- updated modular certification framework

details to be found [here](/docs/standards/changelog)

### Catena-X Operating Model

- updated to version 3.0 enabling many new ecosystem components such as the OSP role, Catena-X Sandboxes and an overhaul to release management focused on stability and reliability

details to be found [here](/docs/operating-model/changelog)

### Catena-X Regulatory Framework

- introduced the official Catena-X ODRL profile including standardized Catena-X policies.
- adding various pre-defined use case frameworks, e.g. Circular Economy, Demand and Capacity Management, etc.
- moving China to White List, allowing onboarding of Chinese companies to the Catena-X network

details to be found [here](/docs/regulatory-framework/changelog)

### Tractus-X reference implementations

A comprehensive, coherent and compatible set of development artefacts. Highlights include:

- an update to the Multi-OpCo solutions
- the full implementation of the Industry Core KIT
- the advancement of Self Sovereign Identity concepts
- several improvements to the user-friendliness of KITs based on feedback received to date, making Tractus-X overall more accessible and welcoming to newcomers and veterans alike.

details to be found [here](https://eclipse-tractusx.github.io/CHANGELOG/#2408---2024-08-05)

#### Details on compatible and non-compatible versions

By default, the versions listed in the [Tractus-X changelog](https://eclipse-tractusx.github.io/CHANGELOG/#2408---2024-08-05) are the recommended versions. Non-compatible or other compatible versions of the Tractus-X release or the apps are listed below. If a version is interoperable with the initial release version and those features and with all other listed versions its listed as compatible.

#### Compatible versions

| Component                                    | Versions                                                                                                                                                                                                                                                                      | Comments                                                                                                                     |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Eclipse Data Space Connector <br /> (Tractus-X EDC) | [0.7.3](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.7.3) <br /> [0.7.4](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.7.4) <br />   [0.7.5](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.7.5) <br />   [0.7.6](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.7.6) <br />   [0.7.7](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.7.7) [Latest] | Versions ≤ 0.7.5 are effected by a security issue details [here](https://github.com/eclipse-tractusx/tractusx-edc/pull/1584). |

[Latest] – latest released version  
[Recommended] – recommended by the Catena-X association (Compatible with the [Catena-X Standards](/docs/standards/overview) and [End-to-End] tested)

#### Non-compatible versions

| Component | Versions |
| --------- | -------- |
| N/A       | N/A      |

### Further Scope Clarification

To uphold the integrity and reliability of the onboarding process, there will be a temporary change of the standards. This change is in-line with a feature supported in the current reference implementation.

Impact: [CSP-B](/docs/operating-model/who-roles-in-the-catena-x-ecosystem#core-service-provider-b) & [OSP](/docs/operating-model/who-roles-in-the-catena-x-ecosystem#onboarding-service-provider) roles:

- [CX-0006](/docs/standards/CX-0006-RegistrationAndInitialOnboarding#238-gaia-x).
  - The standard has been slightly adjusted. Onboarding service providers and core service providers must continue to support the possibility of creating a Self-Description (SD) of the Legal Person. However, this requirement is no longer strictly tied to the initial registration process; the creation of the SD can now occur at a later stage. For any SDs that are issued, they must be stored in a central location and must comply with GAIA-X standards and guidelines.

The functionality of Catena-X and the security framework will remain unaffected furthermore the validation of company data and identifiers will continue as usual.
