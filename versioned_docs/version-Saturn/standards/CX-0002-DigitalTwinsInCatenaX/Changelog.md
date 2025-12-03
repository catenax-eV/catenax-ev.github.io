---
title: "Changelog"
---

All notable changes to CX-0002 will be documented in this file.

## [2.3.0] - CX-Saturn (25.09)

### Added

- Selected new features from Release 25-01 of the Specifications of the Asset Administration Shell
  - new API operation *SearchAllAssetAdministrationShellIdsByAssetLink* substituting deprecated logical operation *GetAllAssetAdministrationShellIdsByAssetLink*
  - new query profile may be provided by solution providers
  - new bulk profile may be provided by solution providers

### Changed

- Consideration of Release 25-01 of the Specifications of the Asset Administration Shell
  - Discovery Service Specification V3.1 Read Profile SSP-002 now used instead of Full Profile SSP-001 with deviations Asset Administration Shell Registry Service Specification V3.1 Minimal Read Profile SSP-005 now used instead of Read Profile SSP-002
  - security attributes in endpoint are now optional
- update to reflect dependencies to other standards
- improved documentation (adding links etc.)

### Deprecated

- Consideration of deprecated features from Release 25-01 of the Specifications of the Asset Administration Shell
  - deprecated logical operation *GetAllAssetAdministrationShellIdsByAssetLink* substituted by *SearchAllAssetAdministrationShellIdsByAssetLink*

### Removed

/

## [2.2.0] CX-Io (25.03)

### Added

/

### Changed

/

### Deprecated

- Declare outdated typization mechanism (asset:prop:type) optional

### Removed

- Remove all normative references to the EDC implementation

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
