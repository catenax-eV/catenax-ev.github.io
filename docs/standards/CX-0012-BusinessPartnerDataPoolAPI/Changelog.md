---
title: "Changelog"
---

All notable changes to CX-0012 will be documented in this file.

## [5.1.0] - CX-Saturn (25.09)

### Added

- Added relations sub-object at the legal entity.
- Added definition of managing and managed legal entity.
- Added description for all enum values and corrected the values in the UML diagrams.
- Added CAC to prevent direct API access to the Pool API from outside of the internal environment of the operating company.

### Changed

- Enhanced definition of "Is Participant Data" to also include managing legal entities.
- Replaced listing of conventions for policies and policy constraints by the reference to standard CX-0152. This is not a change in normativity, but merely removes the duplicate listing of general conventions.  

## [5.0.0] - CX-Saturn (Preview, 25.09)

### Added

- Added detailed identifier type description.
- Added format and identifier type category attributes to the identifier type API.

### Changed

- Updated the asset structure to the major version 7 of the Pool API.
- Renamed "Is Catena-X Member Data" attribute to "Is Participant Data".
- Renamed the "cx-taxo:ReadAccessPoolForCatenaXMember" asset subject to "cx-taxo:ReadAccessPoolForDataSpaceParticipant".
- Renamed "Abbreviation" attribute to "Abbreviations" for legal forms.
- Renamed "members" endpoints to "participants" endpoint.

## [4.2.0] - CX-Io (25.03)

### Added

- Added attributes for legal forms and identifier types.
- Added footnote about the plan for changing from minor to major asset versioning.
- Added footnote about plural in the abbreviation(s) attribute for legal forms.
- Added requirement about the correct asset property format as defined in CX-0018.

### Removed

- Removed the POST endpoint for administrative areas, as it was never implemented.

## [4.1.0] - CX-Io (Preview, 24.12)

### Added

- Added tax jurisdiction code.

## [4.0.0] - CX-Jupiter (24.09)

### Added

- Added footnote to indicate that the term "site main address" is subject to change.
- Added CX-0018 version.
- Added detailed asset structure.
- Added footnote to clarify role distribution.
- Added data sovereignty chapters as additional requirements.
- Added "Is Catena-X Member Data" attribute.

### Changed

- Fix changelog controller endpoint for business-partners to match the reference implementation.

### Removed

- Removed terms "Company Data" and "Sharing Member", as they are not used here.
- Removed classification sub-object, to reintroduce it in a presumably new form in one of the next non-breaking versions of this standard.
- Removed "api/catena/" from the endpoint definitions.

## [3.0.0] - R24.03

### Added

- Added additional street attributes.

### Changed

- Switched to the new document structure.

### Removed

- Removed boolean attributes in favor of enum for address types, like in the Gate API.

## [2.1.0] - R23.12

### Added

- Added "Business Partner Type" in changelog entry.
- Added "Administrative Area (Level 1)" as sub-object.
- Added ISO 6709 and WGS 84 for geographic coordinates.
- Added GET/sites endpoint.

### Changed

- Linked OpenAPI document in release branch instead of main.

## [2.0.0] - R23.09

### Added

- Added new API and terminology chapter.

## [1.1.1] - 2023-06-03

### Added

- Added addendum for Conformity Assessment.

## [1.1.0] - 2022-11-30

### Added

- Initial version by Catena-X Association.

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
