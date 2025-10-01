---
title: "Changelog"
---

All notable changes to CX-0146 will be documented in this file.

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

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
