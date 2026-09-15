---
title: "Changelog"
---

All notable changes to CX-0152 will be documented in this file.

## [1.2.0] - CX-Neptune (26.09)

### Added

- Added schema based validation for usage permission XOR constraint groups in `assets/policy-schema.json` (`warranty-*` and `data-usage-end-*` families) using `contains` with `maxContains`.
- Added implementation of one new right operand for the Constraint "UsagePurpose": ECU (cx.ecu.base:1)

### Changed

- Updated `AccessPolicy` and `UsagePolicy` definitions in `assets/policy-schema.json` to explicit object schemas with typed `properties`.
- Tightened policy rule cardinality in `assets/policy-schema.json`: All rules and constraints enforce exactly one rule and constraint now (`minItems: 1`, `maxItems: 1`) to ensure schema validation.
- Corrected invalid JSON Schema keyword casing in usage obligations from `minitems`/`maxitems` to `minItems`/`maxItems`.
- Refactored usage obligation constraint item definition in `assets/policy-schema.json` to reference the atomic constraint schema (`atomic-constraint-schemas.json#/definitions/AtomicProhibitionConstraint`).
- Changed duration constraint `rightOperand` type from `integer` to `string` with regex `pattern` to align with DSP operand shape and avoid validation mismatches.

### Removed

- N/A

## [1.1.0] - CX-Neptune Preview (26.06)

### Added

- Implementation of three new Rightoperands for the Constraint "UsagePurpose"
  - Engineering
  - MaterialAccounting
  - eSDSCom
- Adding of Conformity Assessment Criteria

### Changed

- Updated ODRL JSON-LD context URL from Catena-X namespace to standard Dataspace profile
- Migrated all references from `https://w3id.org/catenax/2025/9/policy/odrl.jsonld` to `https://w3id.org/dspace/2025/1/odrl-profile.jsonld`
- Adapted `$comment` text in `usage-purpose-constraint-schema.json` to clarify that when multiple purposes are listed, data can be used for any of them
- Fixed typo: corrected `pfc` to `pcf` in internal `$ref` of `rightOperand` in `usage-purpose-constraint-schema.json`
- Fixed spelling: corrected `automisable` to `automatable` in CX-0152-CAC.md
- Fixed typo: removed duplicate word "this this" in CX-0152-CAC.md

### Removed

- Check of MembershipCredential as general obligation

## [1.0.0] - CX-Saturn (25.09)

### Added

- Initial version of CX-0152
- Description of conventions for constraints, access policy and usage policy

### Changed

- N/A

### Removed

- relevant parts in CX-0018 conventions for constraints were removed
- relevant parts in all use case standards conventions for access policy, usage policy and constraints were removed (as patch during the opt out phase)

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
