# Changelog

All notable changes to **CX-0136 (Use Case PCF)** will be documented in this file.

## [3.0.0] CX-Neptun (26.09)

### Added

- Added [CX-0152 Policy Constraints For Data Exchange](https://catenax-ev.github.io/docs/standards/overview) to the standalone standards list.

### Removed

- Removed section `2.1.3 POLICY CONSTRAINTS FOR DATA EXCHANGE` (replaced by normative references to standalone standards).
- Removed legacy asynchronous endpoint examples in section `4.1.2.1` (raw `GET/PUT` URL examples and related header note).
- Removed section `4.1.2.3 API recourses & endpoints`.
- Removed the illustrative synchronous submodel descriptor JSON excerpt from section `4.2.2.1`.
- Removed the previous process chapter structure and static diagrams (`5.1` to `5.4`) in favor of the new mermaid-based process descriptions.
- Removed subsections `3.1.1`, `3.1.2`, `3.1.3`, `3.1.5`, and `3.1.6`; section `3.1` now keeps only `3.1.4 IDENTIFIER OF SEMANTIC MODEL`.

### Changed

- Restored explicit Aspect Model reference to [CX-0003 SAMM Aspect Meta Model](https://catenax-ev.github.io/docs/standards/CX-0003-SAMMSemanticAspectMetaModel).
- Deprecated EDC Discovery API-specific wording and replaced it with generic normative wording that requires participant registration according to [CX-0001 Participant Agent Registration](../CX-0001-ParticipantAgentRegistration/CX-0001-ParticipantAgentRegistration.md), enabling standardized connector/EDC endpoint discovery.
- Tightened normative wording for decentralized DTR search (`SHOULD` -> `MUST`) and clarified synchronous exchange references to [2.1.1 List of Standalone Standards](./CX-0136-UseCasePCF.md#211-list-of-standalone-standards).
- Removed remaining references to `CX-0001 Participant Agent Registration` and aligned endpoint discovery wording to `CX-0018 Dataspace Connectivity`.
- Removed redundant subsections on participant/endpoint registration and aligned section numbering in `2.1.2`.
- Updated standard version in [CX-0136-UseCasePCF](./CX-0136-UseCasePCF.md) from `2.2.1` to `3.0.0`.
- Updated PCF Exchange API baseline from `v1.2.0` to `v1.3.0` for release `2.3.0`.
- Updated API references in [CX-0136-UseCasePCF](./CX-0136-UseCasePCF.md) to [catena-x-pcf-endpoint-1_3_0.yaml](./assets/catena-x-pcf-endpoint-1_3_0.yaml).
- Aligned Digital Twin registration requirements with [CX-0126 Industry Core: Part Type](https://catenax-ev.github.io/docs/standards/overview) and [CX-0002 Digital Twins in Catena-X](https://catenax-ev.github.io/docs/standards/overview).
- Replaced detailed JSON examples for twin/submodel registration with normative references to the corresponding standards.
- Clarified fallback asset identification for requests without Digital Twin/submodel registration by requiring `dct:type` and `cx-common:version`.
- Clarified technical value spelling for `dct:type`: the valid taxonomy value is `cx-taxo:PcfExchange`.
- Replaced embedded EDC asset, policy, and contract definition examples with references to [CX-0018 Dataspace Connectivity](https://catenax-ev.github.io/docs/standards/overview) and [CX-0152 Policy Constraints For Data Exchange](https://catenax-ev.github.io/docs/standards/overview).
- Refined section `4.1.1` wording to align with KIT terminology by requiring the PCF exchange API to be offered as a `Data Asset` with an associated `Contract Offer` via a DSP-compliant connector in accordance with [CX-0018 Dataspace Connectivity](./CX-0136-UseCasePCF.md#211-list-of-standalone-standards).
- Harmonized wording across the document with Catena-X/KIT language conventions and fixed editorial issues (grammar, typos, capitalization, and note/normative placement), including updates in sections `1.3`, `2.1.2.4`, `2.1.2.5`, `2.1.2.8`, `2.2.1`, and `4.1.2.1`.
- Added backward-compatibility guidance for optional `dataModelVersion` in API `v1.3.0`: if omitted, the request is treated as legacy (`v2.2.1`) and answered with `urn:samm:io.catenax.pcf:9.0.0`.
- Added OpenAPI validation for `dataModelVersion` in API `v1.3.0`: allowed URL-encoded values are exactly `urn%3Asamm%3Aio.catenax.pcf%3A9.0.0` or `urn%3Asamm%3Aio.catenax.pcf%3A10.x.x`.
- Clarified wording in PCF calculation methodology to explicitly reference a "PCF value".
- Reformulated section `6.3` backward-compatibility requirements into explicit normative statements (`MUST`/`MAY`/`OPTIONAL`) for asynchronous request handling and Digital Twin registration.
- Clarified that providers MUST return `422 Unprocessable Entity` if the requested `dataModelVersion` cannot be served with a schema-valid payload.
- Added a compatibility note for `MembershipConstraint` to document retention of the legacy requirement from CX-0136 `v2.2.1` until corrected in a future version.
- Updated [catena-x-pcf-endpoint-1_3_0.yaml](./assets/catena-x-pcf-endpoint-1_3_0.yaml) to include HTTP response code `422` (`Unprocessable Entity`) for the request endpoint.
- Re-created the sequence diagrams in sections `5.1` and `5.2` of [CX-0136-UseCasePCF](./CX-0136-UseCasePCF.md) from scratch and replaced the previous versions, which contained errors.

## [2.2.2] CX-Saturn (26.03)

### Changed

- Added various notes for clarification (informative only)

## [2.2.1] CX-Saturn (25.09)

### Added

- Chapter 6 for backward compatibility

### Changed

- Enhanced chapter 4.2 SYNCHRONOUS PCF DATA EXCHANGE with details abut API specifications
- Replaced `urn:samm:io.catenax.pcf:8.0.0` with `urn:samm:io.catenax.pcf:9.0.0`
- [catena-x-pcf-endpoint-1_2_0.yaml](./assets/catena-x-pcf-endpoint-1_2_0.yaml) adjusted to `urn:samm:io.catenax.pcf:9.0.0`

## [2.2.0] CX-Saturn (25.09)

### Added

- Section 4.2 PCF EXCHANGE API FOR SYNCHRONOUS DATA EXCHANGE
- In section 5.2 sequence diagram for synchronous data exchange
- Section 1.2 architecture overview for synchronous data exchange
- customerPartId was added to the specificAssetIds list in the DTR as optional field (in [CX-0136-UseCasePCF](./../CX-0136-UseCasePCF))

### Changed

- API improvements (request/response/update in [catena-x-pcf-endpoint-1_2_0.yaml](./assets/catena-x-pcf-endpoint-1_2_0.yaml):
  - Added footprintExchange/\{requestId\} endpoint for both PCF Response/Update and PCF Request.
  - PUT for PCF Response/Update and GET for PCF Request
  - requestId is the mandatory parameter used in the communication. Additionally, either customerPartId or manufacturerPartId should be given when requesting a footprint (GET)
  - /productIds/\{productId\} endpoint was marked as deprecated.
    - Both GET and PUT operations are now deprecated. They have been kept to maintain backwards compatibility throughout R25.09
  - Enhanced metadata and descriptions for parameters
  - Improved tagging and overall documentation
- Sequence diagrams reflecting endpoint calls have been adapted accordingly
- Section 4.1.2 was updated to reflect the endpoint modifications ([4.1.2.1 API Endpoints & resources, in CX-0136-UseCasePCF](./#4121-api-endpoints--resources))
- Replaced listing of conventions for policies and policy constraints by the reference to standard CX-0152. This is not a change in normativity, but merely removes the duplicate listing of general conventions.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
