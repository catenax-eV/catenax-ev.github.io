---
title: "Changelog"
---

All notable changes to CX-0009 will be documented in this file.

## [2.1.0] - CX-Neptune (26.09)

### Added

- Add the OSP-initiated participant registration endpoint v2, including consent data, site details, and optional region and DID values.
- Add the participant-registration file-upload endpoint, which returns a file ID and a time-limited presigned upload URL.
- Add callback configuration and callback-detail retrieval endpoints for the OSP callback URL and OAuth client configuration.
- Add [Registration API OpenAPI specification](./assets/registration-api.yaml) for CSP-B-hosted endpoints.
- Add [OSP Registration Callback API](./assets/osp-registration-callback-api.yaml) for the callback endpoint hosted by the OSP.
- Add conformity assessment metadata for CX-0009 v2.1.0.
- Add CAC.

### Changed

- Restructure the normative specification around the current registration flows and define the required endpoints, request fields, response codes, and lower-level data types.
- Define one `OspRegistrationCallbackData` payload for both registration flows. Its `applicationStatus` uses `RegistrationStatus` (`CREATED`, `INVITE_USER`, `SUBMITTED`, `CONFIRMED`, `DECLINED`) for legacy partner registration and `OSPParticipantRegistrationStatus` (`SUBMITTED`, `CONFIRMED`, `DECLINED`) for OSPv2-initiated participant registration.
- Align the Markdown specification and OpenAPI contracts on JSON control-plane messages, callback authentication, BPN fields, consent requirements, and presigned file uploads.
- Document that storage-provider-specific headers for presigned uploads are supplied separately and that expired upload URLs may be renewed.

### Removed

- Remove the undocumented `agreements` property and its associated schemas from `PartnerRegistrationData`.
- Remove legacy registration-management operations that are not part of the current external API contract, including application-detail, document-management, submission, approval, decline, and clearinghouse-trigger operations.

## [2.0.0] - CX-Jupiter (24.08)

### Changed

- Update of the endpoint details which MUST/SHOULD get followed by the Core Service Provider and/or Onboarding service provider. Endpoint path as well as request/response body.
