# Release Notes

## [JUPITER] (PREVIEW)

### Catena-X Standards

- 13 new standards, completing the set of Catena-X' initial use cases
- 35 updated standards to ensure quality, coherence and the implementation of our "breaking change" via SSI
- 67 deprecated standards in the course of consolidation to achieve more user-friendliness
- updated modular certification framework

details to be found [here](/docs/next/standards/changelog)

### Catena-X Operating Model

- updated to version 3.0 enabling many new ecosystem components such as the OSP role, Catena-X Sandboxes and an overhaul to release management focused on stability and reliability

details to be found [here](/docs/next/operating-model/changelog)

### Catena-X Regulatory Framework

- introduced the official Catena-X ODRL profile including standardized Catena-X policies.
- adding various pre-defined use case frameworks, e.g. Circular Economy, Demand and Capacity Management, etc.
- moving China to White List, allowing onboarding of Chinese companies to the Catena-X network

details to be found [here](/docs/next/regulatory-framework/changelog)

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

| Component                                    | Versions                                       |
|----------------------------------------------|------------------------------------------------|
| Eclipse Data Space Connector (Tractus-X EDC) | [0.7.3](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.7.3) [Recommended] <br /> [0.7.4](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.7.4) <br />   [0.7.5](https://github.com/eclipse-tractusx/tractusx-edc/releases/tag/0.7.5) [Latest] |

[Latest] – latest released version  
[Recommended] – recommended by the Catena-X association (Compatible with the [Catena-X Standards](/docs/next/standards/overview) and [End-to-End](docs/next/working-model/release-management/development-and-release/e2e-test) tested)

#### Non-compatible versions

| Component | Versions |
| --------- | -------- |
| N/A       | N/A      |

### Further Scope Clarification

To maintain the integrity and reliability of the onboarding process, the signing of self-descriptions by the Gaia-X Digital Clearing House (GXDCH) will be temporarily suspended:

- This suspension only affects the [CSP-B](/docs/next/operating-model/who-roles-in-the-catena-x-ecosystem#core-service-provider-b) role within the following CACs:
  - [CX-0001](/docs/next/standards/CX-0001-EDCDiscoveryAPI#15-proof-of-conformity)
    - The provided SD documents MUST be GAIA-X compliant, i.e. MUST provide a compliance credential issued from GAIA-X AISBL. – to be temporarily deactivated
  - [CX-0006](/docs/next/standards/CX-0006-RegistrationAndInitialOnboarding#238-gaia-x).
    - Onboarding service providers / core service providers MUST ensure the creation of a Self-Description (SD) of the Legal Person as part of the application verification process. The SD MUST be stored in a central location and MUST be in line with the GAIA-X standards/guidelines

The functionality of Catena-X and the security framework will remain unaffected furthermore the validation of company data and identifiers will continue as usual.
