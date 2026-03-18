---
title: "Changelog"
---

All notable changes to CX-0125 will be documented in this file.

## [2.3.0] - CX-Titan (26.03)

### Added

- Added new section 3.3 Aspect Model "Certificate of Analysis" (CoA)" to describe the new use case and link to turtle file
- Added new section 3.4 Aspect Model "Zero Km Failure" to describe the new use case and link to turtle file

#### Changed

- In section 2.2 SPECIAL DIGITAL TWINS FOR TRACEABILITY AND SPECIFIC ASSET IDS Recommendation of providing aspect models (SHOULD) to DT qualityTask
- Improve description of using DT qualityTask especially how to connect vehicle twin or part twin to it
- Explanation of figure Change “digitalTwinType“ to „not applicable”
- In section 4 APPLICATION PROGRAMMING INTERFACES Correction of inconsistency with Dataspace Connectivity Standard CX-018 in namespaces for notification endpoint: URN: https instead of http.

## [2.2.0] - CX-Saturn (25.09)

> Note: This release (**25.09**) contains **major changes**!

### Added

- Added "SPECIAL DIGITAL TWINS FOR TRACEABILITY AND SPECIFIC ASSET IDS" to section 2.2. to describe the usage of DT qualityTask.

### Changed

- openAPI specification for block notification (version 2.0.0) including the new field problemId which represents a unique identifier of the initial problem (in the customers system) which results in requesting a block information with all parts which are (presumably) affected by this problem. This ID is also necessary to identify the reason for a block for a particular part (in the customers system). As one part can be affected by several problems and can be included in diffent block actions.
- Replaced listing of conventions for policies and policy constraints by the reference to standard CX-0152. This is not a change in normativity, but merely removes the duplicate listing of general conventions.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
