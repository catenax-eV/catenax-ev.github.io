# Changelog

All notable changes to CX-0074 will be documented in this file.

## [4.1.0] - 2025-08-24

### Added

- Added the relations entity.
- Added definition of Managing and Managed Legal Entity.
- Added description for all enum values and corrected the values in the UML diagrams.
- Added CAC to prevent direct API access to the Gate API from outside of the internal environment of the operating company.

### Changed

- Enhanced definition of "Is Company Data" to also include Managing Legal Entities and improved definition of Company Data.
- Replaced listing of conventions for policies and policy constraints by the reference to standard CX-0152. This is not a change in normativity, but merely removes the duplicate listing of general conventions.

## [4.0.0] - 2025-06-01

### Added

- Added detailed identifier type description.
- Added format and identifier type category attributes to the identifier type API.

### Changed

- Updated the asset structure to the major version 7 of the Gate API.
- Renamed "Abbreviation" attribute to "Abbreviations" for legal forms.

## [3.2.0] - 2025-03-17

### Added

- Added attributes for legal forms and identifier types.
- Added a footnote about the plan for changing from minor to major asset versioning.
- Added footnote about plural in the abbreviation(s) attribute for legal forms.
- Added requirement about the correct asset property format as defined in CX-0018.

## [3.1.0] - 2024-12-02

### Added

- Added tax jurisdiction code.

### Changed

- Changed outlook on business partner relationship.

## [3.0.0] - 2024-06-07

### Added

- Added footnote to indicate that the term "site main address" is subject to change.
- Added the CX-0018 version.
- Added detailed asset structure.
- Added footnote to clarify role distribution.
- Added outlook for business partner relationship.
- Added data sovereignty chapters as additional requirements.

### Changed

- Changed and added the detailed asset structure.

### Removed

- Removed classification sub-object, to reintroduce it in a presumably new form in one of the next non-breaking versions of this standard.
- Removed business partner state and introduced separate states at representation classes.
- Removed "api/catena/" from the endpoint definitions.

## [2.0.0] - 2024-03-22

### Added

- Added business partner description.
- Added “house number supplement” attribute.
- Added “is own company data” attribute to claim ownership.
- Added business partner endpoints.

### Changed

- Switched to the new document structure.

### Removed

- Removed detailed legal entity, site and address descriptions from terminology chapter.
- Removed business partner type from changelog entry and sharing state entry descriptions.
- Removed legal entity, site and address endpoints.

## [1.1.0] - 2024-01-10

### Added

- Added roles “supplier” & “customer”.
- Added ISO 6709 and WGS 84 for geographic coordinates.
- Added generic business partner outlook.

### Changed

- Moved attribute “sharing process started at” from specific business partner entities to the sharing state entry (API was correct).
- Linked OpenAPI document in release branch instead of main.

## [1.0.0] - 2023-09-26

### Added

- Initial version by Catena-X Association.

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
