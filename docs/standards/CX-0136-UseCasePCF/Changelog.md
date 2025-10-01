---
title: "Changelog"
---

All notable changes to **CX-0136 (Use Case PCF)** will be documented in this file.

## [2.2.0] - CX-Saturn (25.09)

### Added

- Section 4.2 PCF EXCHANGE API FOR SYNCHRONOUS DATA EXCHANGE
- In section 5.2 sequence diagram for synchronous data exchange
- Section 1.2 architecture overview for synchronous data exchange
- customerPartId was added to the specificAssetIds list in the DTR as optional field (in [CX-0136-UseCasePCF.](./../CX-0136-UseCasePCF))

### Changed

- API improvements (request/response/update in [catena-x-pcf-endpoint-1_1_2.yaml](./assets/catena-x-pcf-endpoint-1_1_2.yaml):
  - Added footprintExchange/\{requestId\} endpoint for both PCF Response/Update and PCF Request.
  - PUT for PCF Response/Update and GET for PCF Request
  - requestId is the mandatory parameter used in the communication. Additionally, either customerPartId or manufacturerPartId should be given when requesting a footprint (GET)
  - /productIds/\{productId\} endpoint was marked as deprecated.
    - Both GET and PUT operations are now deprecated. They have been kept to maintain backwards compatibility throughout R25.09
  - Enhanced metadata and descriptions for parameters
  - Improved tagging and overall documentation
- Sequence diagrams reflecting endpoint calls have been adapted accordingly
- Section 4.1.2 was updated to reflect the endpoint modifications ([4.1.2.1 API Endpoints & resources, in CX-0136-UseCasePCF.md](#api-specification))
- Replaced listing of conventions for policies and policy constraints by the reference to standard CX-0152. This is not a change in normativity, but merely removes the duplicate listing of general conventions.

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
