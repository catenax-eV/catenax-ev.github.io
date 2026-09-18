---
title: "Changelog"
---

All notable changes to CX-0146 will be documented in this file.

## [3.0.0] - 2026-09-16

### Fixed

- changed purl context from https to http to reflect correct scheme in example of [4.1.3 DATA ASSET STRUCTURE](./CX-0146-SupplyChainDisruptionNotifications.md#413-data-asset-structure).
- ensure that the scheme and examples don't use a property `demandAndCapacityNotification` in object `content`. A mistake has been made in version 2.0.0 removing it in the examples but not in the schema. As the schema is more leading, this is considered a major instead of a bugfix change.
- Added [Chapter 4.1.3.1](./CX-0146-SupplyChainDisruptionNotifications.md#4131-backward-compatibility) for backward compatibility and keep both open api schemes

## Changed

- bumped versions of referenced standards with cross-checks

## [2.0.0] - 2025-06-24

### Added

- added field `resolvingMeasureDescription` to notification.
- added rules for payload validation for material numbers in a material.

### Changed

Reduced normative language by:

- introducing (non-) normativeness on higher levels for subsections.
- referring to other standardized artifacts (aspect models, standards, etc.).

Message Structure:

- renamed `sourceNotificationId` to `sourceDisruptionId` to signalize that one disruption leads to multiple notifications into multiple directions.
- Moved material information to a list `materials`.
  - material numbers follow the industry core characterstic.

Compliance to CX-0151 Industry Core Basics (harmonize notification standards):

- provide an Open API definition.
- update of messageHeader.context to include an operation.

Process Representation:

- Add information on how to set fields in different scenarios (tables 11 - 14).
- Replace figures 3 and 4 by one.

Further:

- inserted validations 5, 6, 7 in section 4.1.5

## [1.0.0] - 2024-04-15

### Added

- initial version

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
