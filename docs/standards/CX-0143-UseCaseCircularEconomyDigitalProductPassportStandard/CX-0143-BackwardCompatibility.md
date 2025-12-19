# Backward compatibility requirements

> *This section is normative*

## 5.1 Context

The previous standard supports:

- ``urn:samm:io.catenax.generic.digital_product_passport:4.0.0``
- ``urn:samm:io.catenax.battery.battery_pass:5.0.0``
- ``urn:samm:io.catenax.transmission.transmission_pass:2.0.0``

The new release introduces:

- ``urn:samm:io.catenax.generic.digital_product_passport:6.1.0``
  - new attribute added: ``language``
  - new attribute added: ``purchaseOrder``
  - new attribute added: ``recallInformation``
  - New attribute added: ``specVersion``
- ``urn:samm:io.catenax.battery.battery_pass:6.1.0``
  - New attribute added: ``specVersion``
  - see [ReleaseNotes](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.battery.battery_pass/RELEASE_NOTES.md)
- ``urn:samm:io.catenax.transmission.transmission_pass:3.1.0``
  - New attribute added: ``specVersion``
  - see [ReleaseNotes](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.transmission.transmission_pass/RELEASE_NOTES.md)

Releases must remain interoperable with those built on the previous version to ensure seamless data exchange across the ecosystem.

## 5.2 Requirements for Backward Compatibility

1. Dual Interpretation Capability

    a) Applications MUST be able to interpret payloads based on aspect model versions:
    - ``battery.battery_pass``: ``5.0.0``, and ``6.1.0``
    - ``generic.digital_product_passport``: ``4.0.0`` and ``6.1.0``
    - ``transmission.transmission_pass``: ``2.0.0`` and ``3.1.0``

    b) The aspect model version MUST be explicitly stated in the metadata of the payload to allow correct schema identification and parsing as ``specVersion``. As the ``specVersion`` property is introduced in the release 1.3.0 of the standard (see [Changelog](./Changelog.md)), the non-existing of the ``specVersion`` property relates to the following versions:
    - ``battery.battery_pass``: ``5.0.0``
    - ``generic.digital_product_passport``: ``4.0.0``
    - ``transmission.transmission_pass``: ``2.0.0``.

2. Version Tagging
    - Payloads must include a version tag (``specVersion``) that refers to the schema version (not just the instance version) to ensure correct interpretation

## 5.3 Use Cases Requiring Backward Compatibility

1. Mixed Ecosystem Communication
    - When a new application (e.g. version ``6.1.0`` for ``generic.digital_product_passport``) communicates with legacy systems (e.g. version ``4.0.0`` of ``generic.digital_product_passport``), it must fallback gracefully to the older data model and API format.
2. Data Consumer Scenarios
    - Consumers must be able to process incoming data from providers i the formats of both version from 5.2.1a  without errors or loss of information.
3. Digital Twin Registries
    - Registries must support entries from both versions and allow search and retrieval based on passportIdentifier.

## 5.4 Recommended Application Logic for Compatibility

1. Schema Detection and Routing
    - Implement logic to detect the aspect model version from the payload metadata and route it to the appropriate parser.
2. API Adapter Layer
    - Introduce an adapter layer that maps new API calls to legacy formats when interacting with older systems.
3. Validation and Testing
    - Use schema validators to ensure that payloads conform to the formats of both version from 5.2.1a during development and deployment.

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
