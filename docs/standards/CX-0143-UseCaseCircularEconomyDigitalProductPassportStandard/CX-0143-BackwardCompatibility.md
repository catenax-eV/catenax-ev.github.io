---
sidebar_position: 7
---

# Backward compatibility requirements

> *This section is normative*

## Context

The previous standard supports:

- ``mpn`` as key for the BPN discovery

The new release introduces:

- BPN search only linked to CX-0053 with no direct restrictions.

Releases must remain interoperable with those built on the previous version to ensure seamless data exchange across the ecosystem.

## Requirements for Backward Compatibility

1. If `mpn` is used, it MUST be parsed correctly for the handling of BPN discovery. If non is used, the guidelines in CX-0053 have to be followed accordingly.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
