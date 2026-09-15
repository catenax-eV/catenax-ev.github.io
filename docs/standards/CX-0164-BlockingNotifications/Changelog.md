---
title: "Changelog"
sidebar_position: 99
---

All notable changes to this standard will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] – CX-Neptune (26.09)

### Added

- Initial version of CX-0164 Blocking Notifications as a standalone standard
- Create / Update / Remove operation model with an asynchronous Feedback channel (no Read; Remove is a reversible cancellation, not a hard delete)
- CX-0151 compliance (single Connector asset, MessageHeaderAspect v3.0.0)
- OpenAPI specification v1.0.0 (`block-notification-api-v1.0.0.yaml`)
- Context format: `Blocking-BlockNotificationAPI-<Operation>:1.0.0`
- Update model with `partsToAdd` and `partsToUpdate` arrays, plus updateable master-data fields (`problemDescription`, `criticality`, `supplierContactPerson`)
- Feedback operation scoped to a single problem, with `feedbackType` (`CUSTOMER_PROBLEM_ID_CREATED`, `ERROR`) and optional per-part `itemFeedbacks`
- Two-ID correlation model (`manufacturerProblemId` / `customerProblemId`)
- `criticality`, `proposedUsageDecision` and `supplierContactPerson` fields on Create (also updateable via Update)
- `manufacturerPartId` as a first-class field in `componentLevelContainment` (symmetric to `customerPartId`)
- Remove operation (`/remove`) that cancels one or more parts — or the whole notification — with a mandatory `cancellationReason`
- **Message chunking** guidance for large notifications (Create-then-Update splitting sharing the same `manufacturerProblemId`).
- Conformity Assessment Criteria (CaC) document

### Changed

- Defines CX-0164 as a standalone standard that no longer requires CX-0125 (CX-0125 Traceability documented an earlier version of Block Notifications)
- Replaces the previous Receive/Update model with the CUD + Feedback model
- `notificationStatus` at notification level removed; operation type identified via the `context` field
- Single Connector asset (`BlockNotificationAPI`) instead of separate assets for Receive and Update
- Block status is no longer a wire field: a part is ACTIVE once created/added and CANCELED via the Remove operation; the customer's physical handling result is conveyed via the Feedback `processingStatus`
- Part identification standardised on a mandatory `catenaXId` (independent of Digital Twin provisioning); containment blocks are RECOMMENDED
- `relatedMessageId` is OPTIONAL on all operations (correlation is via `manufacturerProblemId`)

### Removed

- Separate Connector assets for Receive (`blocknotification-receive`) and Update (`blocknotification-update`)
- `notificationStatus` field from the notification payload
- `updateReason` field (covered by `problemDescription`)
- `customerManufacturerId` field (contradicts the Catena-X BPNL principle)
- `PART_BLOCKED` block status (now conveyed via Feedback `processingStatus: BLOCKED`)
- `changeType` field (replaced by the explicit `partsTo*` arrays)
- `partsToRemove` array and the separate `/delete` endpoint (cancellation is unified under the `/remove` endpoint)
- per-part `blockStatus` field from Update (block status is now derived from the operation)
- **Per-part processing-result feedback** (`feedbackType: PROCESSING_RESULT`, `itemFeedbacks`, `ProcessingStatus`) — intentionally **out of scope for v1.0.0** and deferred to a later version. Feedback in v1.0.0 covers `CUSTOMER_PROBLEM_ID_CREATED` and `ERROR` only.

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
