---
title: "Conformity Assessment Criteria"
sidebar_position: 98
---

This document lists the conformity assessment criteria for CX-0164 Blocking Notifications v1.0.0.

## Overview

Conformity assessment is performed via self-assessment. All criteria marked as **MUST** are mandatory for certification.

## Conformity Criteria Table

| CaC-ID | Requirement | Level | Test Method | Reference |
|--------|-------------|-------|-------------|-----------|
| CaC-1 | Block Notification data model (v1.0.0) MUST be implemented conformantly | MUST | Self-assessment | §3.1 |
| CaC-2 | Create operation (`/create`) MUST be implemented | MUST | Self-assessment | §4.1.2 |
| CaC-3 | Update operation (`/update`) with `partsToAdd` / `partsToUpdate` and updateable master-data fields MUST be implemented | MUST | Self-assessment | §4.1.2 |
| CaC-4 | Remove operation (`/remove`, cancels parts or the whole notification) MUST be implemented | MUST | Self-assessment | §4.1.2 |
| CaC-5 | Feedback operation (`/feedback`) MUST be implemented | MUST | Self-assessment | §4.1.2 |
| CaC-6 | Single Connector asset (`BlockNotificationAPI`) per CX-0151 MUST be registered | MUST | Self-assessment | §4.1.3 |
| CaC-7 | MessageHeaderAspect v3.0.0 MUST be used in header of all requests | MUST | Self-assessment | §3.1.2 |
| CaC-8 | Context format `Blocking-BlockNotificationAPI-<Operation>:1.0.0` MUST be used | MUST | Self-assessment | §3.1.4 |
| CaC-9 | Usage Policies MUST be defined per CX-0152 | MUST | Self-assessment | §2.1.3 |
| CaC-10 | Data exchange MUST occur only via CX-0018 compliant Connector | MUST | Self-assessment | §2.1.3 |
| CaC-11 | All operations MUST use HTTP POST method only | MUST | Self-assessment | §4.1.2 |
| CaC-12 | `messageId` MUST be unique (UUIDv4) and MUST NOT be reused | MUST | Self-assessment | §2.1.3 |

## Detailed Requirements

### CaC-1: Data Model Implementation

The implementation MUST conform to the schemas defined in the OpenAPI specification `block-notification-api-v1.0.0.yaml`. This includes:

- `BlockNotificationCreate`
- `BlockNotificationUpdate`
- `BlockNotificationRemove`
- `BlockNotificationFeedback`

### CaC-2 to CaC-5: API Operations

All four API operations MUST be implemented:

| Operation | Endpoint | Required |
|-----------|----------|----------|
| Create | `/create` | Yes |
| Update | `/update` | Yes |
| Remove | `/remove` | Yes |
| Feedback | `/feedback` | Yes |

### CaC-6: Single Connector Asset

Per CX-0151 §4.1.4, exactly **one** asset MUST be defined in the connector for the Block Notification API. The asset MUST have:

```json
{
  "@id": "BlockNotificationAPI",
  "properties": {
    "dct:type": { "@id": "https://w3id.org/catenax/taxonomy#BlockNotificationAPI" },
    "cx-common:version": "1.0"
  }
}
```

### CaC-7: MessageHeaderAspect

All requests MUST include a `header` object compliant with MessageHeaderAspect v3.0.0 containing:

- `messageId` (unique UUID)
- `context` (operation-specific)
- `sentDateTime` (ISO 8601)
- `senderBpn` (BPNL)
- `receiverBpn` (BPNL)
- `version` ("3.0.0")

### CaC-8: Context Format

The `context` field MUST follow the pattern `Blocking-BlockNotificationAPI-<Operation>:1.0.0` where `<Operation>` is one of:

- `Create`
- `Update`
- `Remove`
- `Feedback`

### CaC-9 & CaC-10: Policy and Connectivity

- Usage policies MUST be defined according to CX-0152
- All data exchange MUST occur via a CX-0018 compliant connector

### CaC-11: HTTP Method

All API endpoints MUST accept HTTP POST requests only. Other HTTP methods (GET, PUT, PATCH, DELETE) are not supported.

### CaC-12: Message ID Uniqueness

The `messageId` field in the header MUST:

- Be a valid UUIDv4 (with or without `urn:uuid:` prefix)
- Be unique per message
- Never be reused across different notifications

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
