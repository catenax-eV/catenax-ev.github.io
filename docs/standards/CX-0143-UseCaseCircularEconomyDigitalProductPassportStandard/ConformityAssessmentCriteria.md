
# Conformity Assessment Criteria (CaC) – CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard

This table defines the conformity assessment criteria for the Catena-X Geometry Standard (CX-0143-UseCaseCircularEconomyDigitalProductPassportStandard v1.4.0), following the structure described in the Guidance CAC Consolidation document. The test procedure columns are marked with 'X' where applicable for each criterion.

| Standard| CaCID | Requirement | MUST/MAY/SHOULD | Inspection | Observation | Self-assessment | Inquiry | Confirmation | Recalculation | Performance | Analytical Procedures |
|-------|-----|------|---------|----|-----|-----------|----|-----------|--------|------|-----------|
| CX-0143 | CaC-1 | Digital Product Passport data must be attached to the digital twin as a submodel defined in [3 ASPECT MODELS](./CX-0143-SEM.md). | MUST |  |   |  X |   |   |   |   |   |
| CX-0143 | CaC-2 | Digital Product Passport data may be attached via `PartType` or `PartInstance`. | MAY |   |   | X |   |   |   |   |   |
| CX-0143 | CaC-3 | Digital Product Passport data should be validated against JSON payload and should comply with JSON schema. | SHOULD |  |   |  X |   |   |   |  |   |
| CX-0143 | CaC-4 | Applications and self hosted data provisioning solutions MUST follow the asset structure defined in [4.1.1 EDC Asset](./CX-0143-API.md#41-edc-data-asset-structure) . | MUST |  |   |  X |   |   |   |  |   |
| CX-0143 | CaC-5 | Applications and self hosted data provisioning solutions MUST follow the Contract definition structured defined in [4.1.3 Contract Definition](./CX-0143-API.md#413-contract-definition) . | MUST |  |   |  X |   |   |   |  |   |

> **Note:** All criteria marked as "MUST" in the standard are mandatory for conformity. Additional recommendations (e.g., use of `digitalTwinType`) may be included as best practices but are not required for conformity assessment.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
