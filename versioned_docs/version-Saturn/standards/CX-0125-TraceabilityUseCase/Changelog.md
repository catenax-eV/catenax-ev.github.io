---
title: "Changelog"
---

All notable changes to CX-0125 will be documented in this file.

## [2.2.0] - CX-Saturn (25.09)

> Note: This release (**25.09**) contains **major changes**!

### Added

- Added "SPECIAL DIGITAL TWINS FOR TRACEABILITY AND SPECIFIC ASSET IDS" to section 2.2. to describe the usage of DT qualityTask.

### Changed

- openAPI specification for block notification (version 2.0.0) including the new field problemId which represents a unique identifier of the initial problem (in the customers system) which results in requesting a block information with all parts which are (presumably) affected by this problem. This ID is also necessary to identify the reason for a block for a particular part (in the customers system). As one part can be affected by several problems and can be included in diffent block actions.
- Replaced listing of conventions for policies and policy constraints by the reference to standard CX-0152. This is not a change in normativity, but merely removes the duplicate listing of general conventions.

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
