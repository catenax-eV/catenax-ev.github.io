# Conformity Assessment Criteria

This document lists the Conformity Assessment Criteria for CX-0166 Zero Km Failure v1.0.0.

## Overview

Conformity assessment is performed via self-assessment unless a formal CAB process requires additional evidence.

All criteria marked as **MUST** are mandatory for conformance claims.

## Conformity Criteria Table

| CaC-ID | Requirement | Level | Test Method | Reference |
| --- | --- | --- | --- | --- |
| CaC-1 | A `qualityTask` Digital Twin MUST be created for each Zero Km Failure case in scope | MUST | Self-assessment | 2.1.2 |
| CaC-2 | `ZeroKmFailure` semantic ID `urn:samm:io.catenax.zero_km_failure:1.0.0#ZeroKmFailure` MUST be used for Zero Km Failure payload exchange | MUST | Self-assessment | 2.1.2, 3.1.4 |
| CaC-3 | Payload blocks `defect`, `partInformation`, `plantInformation`, and `vehicle` MUST be supported | MUST | Self-assessment | 2.1.2 |
| CaC-4 | Data exchange MUST occur only through a CX-0018 compliant connector flow | MUST | Self-assessment | 2.1.2 |
| CaC-5 | Data transfer MUST NOT happen without successful contract negotiation and valid contract | MUST | Self-assessment | 2.1.3 |
| CaC-6 | Required data offers MUST be discoverable through Digital Twin Registry references | MUST | Self-assessment | 2.1.3 |
| CaC-7 | The `qualityTask` twin MUST provide `digitalTwinType` as a special mandatory `specificAssetId` with value `qualityTask` | MUST | Self-assessment | 2.1.4 |
| CaC-8 | In addition to `digitalTwinType`, specific asset IDs `manufacturerId`, `customerId`, and `globalAssetID` MUST be provided for `qualityTask` twin discovery | MUST | Self-assessment | 2.1.4 |
| CaC-9 | Message header usage for synchronization/event messages MUST use a standardized context and versioned structure | MUST | Self-assessment | 2.1.3, 4.1.2 |
| CaC-10 | API payload format MUST be `application/json` | MUST | Self-assessment | 4.1.5 |
| CaC-11 | Policies for data exchange MUST be defined according to CX-0152 | MUST | Self-assessment | 2.1.1, 6.1 |
| CaC-12 | Block Notification handling MUST NOT be required to claim conformance with CX-0000 | MUST | Self-assessment | 1.1 |
| CaC-13 | A completed self-assessment result set against all CaCs in this file MUST be provided as conformance evidence | MUST | Self-assessment | 1.3 |

## Detailed Requirements

### CaC-1: qualityTask Twin Presence

The implementation MUST create and manage a dedicated `qualityTask` twin as use-case anchor for issue-centric data exchange.

### CaC-2: Semantic ID Integrity

All exchanged Zero Km Failure payloads MUST identify semantics through:

- `urn:samm:io.catenax.zero_km_failure:1.0.0#ZeroKmFailure`

### CaC-3: Minimum Payload Blocks

The provider implementation MUST support and validate the following object blocks:

- `defect`
- `partInformation`
- `plantInformation`
- `vehicle`

### CaC-4 and CaC-5: Sovereign Connector Exchange

The implementation MUST ensure that:

- exchange is performed over CX-0018 compliant connector flows,
- contracts are negotiated and valid prior to transfer.

### CaC-6: Discoverability

The implementation MUST publish discoverable endpoint references through Digital Twin Registry entries for required submodels.

### CaC-7: digitalTwinType Convention

The `qualityTask` twin MUST provide `digitalTwinType` as a special mandatory `specificAssetId` with value `qualityTask`.

### CaC-8: specificAssetIds Conventions

In addition to `digitalTwinType`, the `qualityTask` twin MUST provide mandatory specific asset identifiers for deterministic lookup and partner correlation.

### CaC-9 and CaC-10: Message and Data Type Consistency

Synchronization/event messages MUST follow standardized header semantics and use JSON payloads.

### CaC-11: Policy Constraints

Usage and access control constraints MUST follow CX-0152 conventions.

### CaC-12: Scope Boundary

Conformance with this standard MUST NOT depend on Block Notification implementation.

### CaC-13: Evidence Delivery

A completed conformance matrix mapping implementation evidence to each CaC MUST be provided.

## Legal

Copyright (c) 2026 Catena-X Automotive Network e.V. All rights reserved.
