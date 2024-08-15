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

### Tractus-X Features & KITs

A comprehensive, coherent and compatible set of development artefacts. Highlights include:

- an update to the Multi-OpCo solutions
- the full implementation of the Industry Core KIT
- the advancement of Self Sovereign Identity concepts
- several improvements to the user-friendliness of KITs based on feedback received to date, making Tractus-X overall more accessible and welcoming to newcomers and veterans alike.

details to be found [here](https://eclipse-tractusx.github.io/CHANGELOG)

### Further Scope Clarification

To maintain the integrity and reliability of the onboarding process, the signing of self-descriptions by the Gaia-X Digital Clearing House (GXDCH) will be temporarily suspended:

- This suspension only affects the [CSP-B](/docs/operating-model/who-roles-in-the-catena-x-ecosystem/who-roles-in-the-catena-x-ecosystem.md#core-service-provider-b) role within the following CACs:
  - [CX-0001](/docs/standards/CX-0001-EDCDiscoveryAPI/CX-0001-EDCDiscoveryAPI.md)
    - The provided SD documents MUST be GAIA-X compliant, i.e. MUST provide a compliance credential issued from GAIA-X AISBL. – to be temporarily deactivated
  - [CX-0006](/docs/standards/CX-0006-RegistrationAndInitialOnboarding/CX-0006-RegistrationAndInitialOnboarding.md).
    - Onboarding service providers / core service providers MUST ensure the creation of a Self-Description (SD) of the Legal Person as part of the application verification process. The SD MUST be stored in a central location and MUST be in line with the GAIA-X standards/guidelines

The functionality of Catena-X and the security framework will remain unaffected furthermore the validation of company data and identifiers will continue as usual.
