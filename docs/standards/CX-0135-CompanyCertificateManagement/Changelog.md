---
title: "Changelog"
---

All notable changes to CX-0135 will be documented in this file.

## [2.4.0] - CX-Titan (26.03)

### Added

- Added missing openAPI example
- Added missing certificate type examples
- Added new requirements to clarify ambiguities and ensure consistent interpretation

### Changed

- Fixed formatting of JSON examples
- Fixed spelling of certificate type in examples
- Fixed existing requirements to clarify ambiguities and ensure consistent interpretation
- Adjusted formatting for better readability

### Removed

- Removed `COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD` section as it is replaced by this changelog

## [2.3.2] - CX-Saturn (25.09)

The updated standard introduces several enhancements over the previous version.
One of the key changes is the definition of an OpenAPI.
This will allow companies to proactively request certificates and provide feedback on their status.
For the notification's requests, the Industry Core Standard (CX-0151 Industry Core: Basics v.1.0.0) has been adopted.

Another important update involves a correction to the data model.
The enclosedSiteBpn trait now accurately supports both BPNS and BPNA values, resolving a previous issue.

Resolved an issue in the usage policy.

These enhancements are designed to improve functionality and user experience, making the standard more reliable, efficient, and user-friendly.

## [2.2.0] - CX-Io (25.03)

The standard has been updated to include the newest version of the semantic data model.
The semantic model has been enhanced to incorporate additional data attributes related to the physical document.
The issuer data attribute, previously optional and representing a BPN, has been updated to include the issuer's name as a mandatory attribute.

## [2.1.1] - CX-Jupiter (24.08)

The previous version of the standard was designed for an API.
This standard has been updated to a semantic data model.

## [2.0.0]

Added a new attribute 'status' to the data model (1.5.11 STATUS).
Added new certificate types (1.5.2 TYPE).

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
