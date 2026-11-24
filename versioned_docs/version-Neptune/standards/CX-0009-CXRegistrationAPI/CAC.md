# Conformity Assessment Criteria

## General Information

- cxId: CX-0009
- name: Registration API
- capability: Registration API
- version: 2.1.0
- release: [GAP] release not provided

## Conformity Assessment Criteria

### CX-0009-CAC-001

- type: MUST
- role: Core Service Provider B
- pattern: E1 — POST /api/administration/registration/network/partnerregistration
- topic: APIs, Semantics
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Endpoint conformity test of `POST https://<base>/api/administration/registration/network/partnerregistration` from the Core Service Provider B's perspective (§2.2.1).

A client authenticated with the role `configure_partner_registration` sends a request with `Content-Type: application/json` containing all mandatory fields:

- `externalId`,
- `name`,
- `city`,
- `streetName`,
- `countryAlpha2Code` (ISO 3166-1 alpha-2, e.g. `DE`),
- `region`, `companyRoles` (array of `CompanyRoleId`, allowed values `ACTIVE_PARTICIPANT`, `APP_PROVIDER`, `SERVICE_PROVIDER`, `OPERATOR`, `ONBOARDING_SERVICE_PROVIDER`),
- `uniqueIds` (array of `CompanyUniqueIdData` with `type` from `COMMERCIAL_REG_NUMBER`, `VAT_ID`, `LEI_CODE`, `VIES`, `EORI` and `value`)
- `userDetails` (array of `UserDetailData` with mandatory `providerId`, `firstName`, `lastName`, `email`)

(Check 1). This check is fulfilled when the endpoint is reachable at the specified path, accepts the `application/json` request body and responds with HTTP `201` and no response body (§2.1.1; §2.2.1).

A second request is sent that additionally sets the optional fields

- `bpn`,
- `shortName`,
- `streetNumber`,
- `streetAdditional`,
- `zipCode`

(Check 2). This check is fulfilled when the endpoint accepts the request and responds with HTTP `201`; a request omitting all optional fields is accepted as well (§2.2.1).

The party under certification must ensure that the endpoint is exposed to the Internet, that the business logic, content and structure of the request match §2.2.1 (the root path MAY differ), that the request payload is accepted exactly as defined in the normative Registration API OpenAPI document, and that authentication and authorization for the role `configure_partner_registration` are enforced (§2.1; §2.1.2; §2.2).

#### Proof of Conformity

Request/response log (path, method, `Content-Type`, HTTP `201`), JSON schema validation of the sent request body against the `PartnerRegistrationData` schema of the normative Registration API OpenAPI document, and an access token showing the role `configure_partner_registration` (Check 1); request/response logs of the variant with and without optional fields, each with HTTP `201` (Check 2).

#### Additional Information

N/A

### CX-0009-CAC-002

- type: MUST
- role: Core Service Provider B
- pattern: E1 — POST /api/administration/registration/network/partnerregistration
- topic: APIs, Logics
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Negative variant of CX-0009-CAC-001, breaking the uniqueness of `externalId` (Check 1 of CAC-001).

An authenticated client sends a valid partner registration request with an `externalId` that has already been used for a registration request of the same Onboarding Service Provider (Check 1). The Core Service Provider B MUST respond with HTTP `409` and MUST NOT create a further registration request for this `externalId` (§2.2.1).

The party under certification must ensure that `externalId` is treated as a unique identifier within the scope of the Onboarding Service Provider and that HTTP standard response codes are used for error handling (§2.1.3; §2.2.1).

#### Proof of Conformity

Request/response log of the first request (HTTP `201`) and of the repeated request with identical `externalId` and identical OSP context (HTTP `409`) (Check 1).

#### Additional Information

N/A

### CX-0009-CAC-003

- type: MUST
- role: Core Service Provider B
- pattern: E1, E2, E3 — CSP-B hosted endpoints
- topic: APIs, Logics
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Negative variant of CX-0009-CAC-001, CX-0009-CAC-004 and CX-0009-CAC-006, breaking the authentication of the request (Check 1 of each of those CACs).

For each of the endpoints `POST /api/administration/registration/network/partnerregistration`, `POST /api/administration/osp/v2/participant-registration/fileupload` and `POST /api/administration/registrationstatus/callback`, an otherwise valid request is sent (a) without an access token and (b) with an invalid or expired access token (Check 1). The Core Service Provider B MUST respond with HTTP `401` in all cases and MUST NOT create a registration request, issue a `presignedUploadUrl` or store a callback configuration (§2.1.2; §2.1.3; §2.2.1; §2.2.3; §2.2.4).

An otherwise valid request carrying a valid token that does not include the required role `configure_partner_registration` is sent to each of the three endpoints (Check 2). The Core Service Provider B MUST reject the request with an HTTP standard error response code and MUST NOT execute the requested operation (§2.1.2; §2.1.3; §2.2).

The party under certification must ensure that authentication and authorization are implemented for all HTTP endpoints introduced by this standard (§2.1.2).

#### Proof of Conformity

Request/response logs per endpoint without token and with invalid token, each with HTTP `401`, plus evidence that no side effect occurred (no registration request, no file ID, no callback configuration) (Check 1); request/response logs per endpoint with a token lacking the role `configure_partner_registration`, including the returned HTTP status code (Check 2).

#### Additional Information

[GAP] The standard requires authentication/authorization (§2.1.2) and a required role per endpoint, but does not normatively specify the authentication scheme or the HTTP status code to be returned for a valid token with insufficient role. Check 2 is therefore assessed against "an HTTP standard error response code" only.

### CX-0009-CAC-004

- type: MUST
- role: Core Service Provider B
- pattern: E2 — POST /api/administration/osp/v2/participant-registration/fileupload
- topic: APIs, Logics
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Endpoint conformity test of `POST https://<base>/api/administration/osp/v2/participant-registration/fileupload` from the Core Service Provider B's perspective (§2.2.3). This CAC applies as a MUST if files are required to process a registration request and are provided to the CSP-B by an OSP; otherwise the endpoint is OPTIONAL and this CAC applies only if the endpoint is implemented (§2.2.3).

A client authenticated with the role `configure_partner_registration` sends a `FileUploadRequest` with `Content-Type: application/json` containing the mandatory fields `fileName`, `externalId` and `contentType` (RFC 2046 media type) (Check 1). This check is fulfilled when the endpoint responds with HTTP `200` and a body containing the mandatory fields `fileId` and `presignedUploadUrl`, and — if provided — `expiresAt` as a date and time value (§2.1.1; §2.2.3).

The binary file content is sent as an HTTP `PUT` request to the returned `presignedUploadUrl`, using the storage-provider-specific HTTP headers (Check 2). This check is fulfilled when the `PUT` request succeeds and the uploaded file is correlated with the `externalId` and `fileId` returned in Check 1 (§2.2.3).

The endpoint is called again for the same `externalId` and `fileName` after the previously returned URL has expired (Check 3). This check is fulfilled when a new `fileId`/`presignedUploadUrl` pair is returned with HTTP `200`, enabling the upload to be retried (§2.2.3).

The party under certification must ensure that the presigned URL accepts binary content via HTTP `PUT`, that the media type restriction of §2.1.1 does not apply to this binary upload, and that the HTTP headers required by its storage provider are provided separately to parties intending to integrate with it (§2.1.1; §2.2.3).

#### Proof of Conformity

Request/response log and JSON schema validation of request and response against the `FileUploadRequest`/`FileUploadResponse` schemas of the normative Registration API OpenAPI document, HTTP `200` (Check 1); `PUT` request/response log against `presignedUploadUrl` incl. used headers and success status, plus evidence of the stored file correlated with `externalId` and `fileId` (Check 2); request/response log of the repeated call returning a new `presignedUploadUrl` (Check 3); documentation artefact containing the storage-provider-specific HTTP headers for the `PUT` request.

#### Additional Information

N/A

### CX-0009-CAC-005

- type: MUST
- role: Core Service Provider B
- pattern: E2 — POST /api/administration/osp/v2/participant-registration/fileupload
- topic: APIs
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Negative variant of CX-0009-CAC-004, breaking the validity of the `FileUploadRequest` body (Check 1 of CAC-004).

An authenticated client sends requests in which (a) a mandatory field (`fileName`, `externalId` or `contentType`) is missing and (b) `contentType` is not a valid RFC 2046 media type (Check 1). The Core Service Provider B MUST respond with HTTP `400` and MUST NOT return a `fileId` or `presignedUploadUrl` (§2.1.3; §2.2.3).

The party under certification must ensure input validation of the `FileUploadRequest` against the normative OpenAPI schema and the use of HTTP standard response codes (§2.1.3; §2.2.3).

#### Proof of Conformity

Request/response logs for each invalid request variant with HTTP `400` and an empty or error body containing no `presignedUploadUrl` (Check 1).

#### Additional Information

N/A

### CX-0009-CAC-006

- type: MUST
- role: Core Service Provider B
- pattern: E3 — POST /api/administration/registrationstatus/callback
- topic: APIs, Logics
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Endpoint conformity test of `POST https://<base>/api/administration/registrationstatus/callback` from the Core Service Provider B's perspective (§2.2.4).

A client authenticated with the role `configure_partner_registration` sends an `OnboardingServiceProviderCallbackConfigurationRequest` with `Content-Type: application/json` containing the mandatory fields `callbackUrl`, `authUrl`, `clientId` and `clientSecret` (Check 1). This check is fulfilled when the endpoint responds with HTTP `200` and returns the configured callback data except `clientSecret` (§2.1.1; §2.2.4).

The same endpoint is called a second time with a changed `callbackUrl` (Check 2). This check is fulfilled when the endpoint responds with HTTP `200` and returns the updated configuration, i.e. the endpoint sets or updates the callback URL of the Onboarding Service Provider (§2.2.4).

The party under certification must ensure that the configured `callbackUrl`, `authUrl`, `clientId` and `clientSecret` are subsequently used for authenticating and sending registration status callbacks, and that `clientSecret` is never returned in a response (§2.2.4; §2.3.1).

#### Proof of Conformity

Request/response log, JSON schema validation of the request against the `OnboardingServiceProviderCallbackConfigurationRequest` schema of the normative Registration API OpenAPI document, HTTP `200`, and response body evidence that no secret is contained (Check 1); request/response log of the update call with HTTP `200` and updated `callbackUrl` in the response (Check 2).

#### Additional Information

N/A

### CX-0009-CAC-007

- type: MUST
- role: Core Service Provider B
- pattern: E3 — POST /api/administration/registrationstatus/callback
- topic: APIs
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Negative variant of CX-0009-CAC-006, breaking the validity of the `OnboardingServiceProviderCallbackConfigurationRequest` body (Check 1 of CAC-006).

An authenticated client sends requests in which (a) a mandatory field (`callbackUrl`, `authUrl`, `clientId`, `clientSecret`) is missing and (b) `callbackUrl` or `authUrl` is not a valid URL (Check 1). The Core Service Provider B MUST respond with HTTP `400` and MUST NOT store or overwrite an existing callback configuration (§2.1.3; §2.2.4).

The party under certification must ensure input validation of the callback configuration request and the use of HTTP standard response codes (§2.1.3; §2.2.4).

#### Proof of Conformity

Request/response logs for each invalid variant with HTTP `400`, plus evidence that a previously stored callback configuration remains unchanged (Check 1).

#### Additional Information

N/A

### CX-0009-CAC-008

- type: MUST
- role: Core Service Provider B
- pattern: E4 — POST callbackUrl (CSP-B as sender)
- topic: APIs, Semantics, Logics
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Conformity test of the registration status callbacks sent by the Core Service Provider B to the callback endpoint configured via `POST /api/administration/registrationstatus/callback` (§2.2.4; §2.3.1; §3).

A registration request is submitted with a known `externalId` and processed to a successful result. The Core Service Provider B sends `POST callbackUrl` requests with `Content-Type: application/json` (Check 1). This check is fulfilled when every callback payload conforms to `OspRegistrationCallbackData`, i.e. contains the mandatory fields `externalId` (identical to the identifier provided in the registration request), `applicationStatus` and `bpnl` as specified in CX-0010, and only optionally `message`, `bpna` and `bpns` as specified in CX-0010 (§2.3.1; §3).

The values of `applicationStatus` are evaluated over the sequence of callbacks (Check 2). This check is fulfilled when, for a registration submitted through Initiate registration (§2.2.1), the legacy `RegistrationStatus` values are used and only the legal transitions `CREATED -> INVITE_USER`, `INVITE_USER -> SUBMITTED`, `SUBMITTED -> CONFIRMED` occur, starting from the entry state `CREATED` and ending in the terminal state `CONFIRMED`; and when, for a registration submitted through Initiate participant registration by OSP, `OSPParticipantRegistrationStatus` values are used with the transition `SUBMITTED -> CONFIRMED`, starting from the entry state `SUBMITTED` and ending in the terminal state `CONFIRMED` (§2.3.1; §3).

Each callback request is authenticated against the configured `authUrl`, `clientId` and `clientSecret` (Check 3). This check is fulfilled when the callback request carries a token obtained from the configured OAuth token endpoint and is accepted by the receiving endpoint with HTTP `200` (§2.2.4; §2.3.1).

The party under certification must ensure that no callback is sent with a status value outside the enum applicable to the respective registration flow and that no callback is sent after a terminal state has been reached (§2.3.1; §3).

#### Proof of Conformity

Captured callback requests incl. headers and bodies, JSON schema validation of each body against the `OspRegistrationCallbackData` schema of the normative OSP Registration Callback API OpenAPI document, and evidence that `externalId` matches the registration request and `bpnl` is formatted per CX-0010 (Check 1); ordered log of all `applicationStatus` values with timestamps, mapped to the legal transitions of `RegistrationStatus` / `OSPParticipantRegistrationStatus` (Check 2); token request log against the configured `authUrl` and callback response with HTTP `200` (Check 3).

#### Additional Information

[ASSUMPTION] §2.3.1 defines the callback endpoint as OSP-hosted and states that all callback payloads MUST conform to `OspRegistrationCallbackData`; the sender of these callbacks is the Core Service Provider B (see §1.3). This CAC assesses the CSP-B as the sending party.

### CX-0009-CAC-009

- type: MUST
- role: Core Service Provider B
- pattern: E4 — POST callbackUrl (CSP-B as sender)
- topic: APIs, Semantics, Logics
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Conformity test of the registration status callbacks sent by the Core Service Provider B for an unsuccessful registration (§2.3.1; §3).

A registration request with a known `externalId` is processed to an unsuccessful result. The Core Service Provider B sends a `POST callbackUrl` request (Check 1). This check is fulfilled when the payload conforms to `OspRegistrationCallbackData` with `applicationStatus` = `DECLINED` and the mandatory fields `externalId` and `bpnl` present (§2.3.1; §3).

The transition into `DECLINED` is evaluated (Check 2). This check is fulfilled when, for the legacy `RegistrationStatus` flow, `DECLINED` is reached from any non-terminal state, and for the `OSPParticipantRegistrationStatus` flow, `DECLINED` is reached from `SUBMITTED`; `DECLINED` is a terminal state and no further status callback for this `externalId` follows (§3).

The optional field `message` is evaluated (Check 3). This check is fulfilled when, if `message` is present, it carries additional information such as the reason for rejection (§2.3.1).

The party under certification must ensure that `DECLINED` is only sent as a transition from a non-terminal state and that the terminal state is not left afterwards (§3).

#### Proof of Conformity

Captured callback request and JSON schema validation of the body against the `OspRegistrationCallbackData` schema of the normative OSP Registration Callback API OpenAPI document (Check 1); ordered status log for the `externalId` showing the preceding non-terminal state and the absence of any subsequent callback (Check 2); callback body evidence of the `message` field, where used (Check 3).

#### Additional Information

N/A

### CX-0009-CAC-010

- type: MUST
- role: Core Service Provider B
- pattern: E5 — OpenAPI documentation of implemented endpoints
- topic: APIs, Semantics
- automisable: false
- checkmode: static
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Documentation conformity test for a Core Service Provider B that implements its own registration solution (§1.5).

The party under certification provides OpenAPI specifications for the CSP-B endpoints it implements and for the OSP callback endpoint it calls (Check 1). This check is fulfilled when the provided OpenAPI documents cover, with matching business logic, content and structure, the endpoints of §2.2.1, §2.2.3 (where implemented) and §2.2.4 as well as the callback of §2.3.1 — including request and response bodies, mandatory/optional fields and the documented HTTP response codes (`201`/`401`/`409`/`500` for §2.2.1; `200`/`400`/`401`/`500` for §2.2.3 and §2.2.4; `200`/`401`/`500` for §2.3.1) (§1.5; §2.2; §2.3.1).

The media types declared in the OpenAPI documents are evaluated (Check 2). This check is fulfilled when all control-plane request and response messages declare `application/json`, with the binary upload to the storage-provider presigned URL excluded (§2.1.1).

The lower level type definitions used in the OpenAPI documents are evaluated (Check 3). This check is fulfilled when the enumerations `CompanyRoleId`, `UniqueIdentifierId`, `ConsentKind`, `RegistrationStatus` and `OSPParticipantRegistrationStatus` and the structures `CompanyUniqueIdData`, `UserDetailData` and `Consent` are declared with exactly the values and mandatory/optional fields defined in §3 (§3).

The party under certification must ensure that the provided OpenAPI documents remain aligned with this specification, since they are the normative machine-readable representation while the examples in the standard are non-normative (§2.1.1).

#### Proof of Conformity

Provided OpenAPI documents (CSP-B endpoints and OSP callback endpoint) with a mapping table endpoint → standard section → response codes (Check 1); extract of declared media types per operation (Check 2); extract of the schema/enum definitions compared against §3 (Check 3).

#### Additional Information

N/A

### CX-0009-CAC-011

- type: MUST
- role: Onboarding Service Provider
- pattern: E4 — POST callbackUrl (OSP as endpoint provider)
- topic: APIs, Semantics
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Endpoint conformity test of the OSP-hosted callback endpoint `POST callbackUrl` from the Onboarding Service Provider's perspective (§2.3.1).

A client authenticated via the OAuth configuration registered by the OSP (`authUrl`, `clientId`, `clientSecret`) sends an `OspRegistrationCallbackData` payload with `Content-Type: application/json` containing the mandatory fields `externalId`, `applicationStatus` and `bpnl`, and optionally `message`, `bpna` and `bpns` (Check 1). This check is fulfilled when the endpoint is reachable at the `callbackUrl` previously configured via §2.2.4 and responds with HTTP `200` and no response body (§2.1.1; §2.3.1).

Payloads are sent using the `OSPParticipantRegistrationStatus` values `SUBMITTED`, `CONFIRMED` and `DECLINED` as well as, for the legacy flow, the `RegistrationStatus` values `CREATED`, `INVITE_USER`, `SUBMITTED`, `CONFIRMED` and `DECLINED` (Check 2). This check is fulfilled when the endpoint accepts both enumerations with HTTP `200` and correlates each payload to the registration request identified by `externalId` (§2.3.1; §3).

A payload containing the optional fields `message`, `bpna` and `bpns` and a payload omitting them are sent (Check 3). This check is fulfilled when both are accepted with HTTP `200` (§2.3.1).

The party under certification must ensure that the endpoint reached by the configured `callbackUrl` is available to receive status updates from the Core Service Provider B and that the `externalId` originally provided in the registration request is used for correlation (§2.2.4; §2.3.1).

#### Proof of Conformity

Request/response log of the callback (URL, method, `Content-Type`, HTTP `200`) and JSON schema validation of the sent body against the `OspRegistrationCallbackData` schema of the normative OSP Registration Callback API OpenAPI document (Check 1); request/response logs per status value of both enumerations, each with HTTP `200`, plus evidence of correlation with the registration request via `externalId` (Check 2); request/response logs of the payload variants with and without optional fields (Check 3).

#### Additional Information

N/A

### CX-0009-CAC-012

- type: MUST
- role: Onboarding Service Provider
- pattern: E4 — POST callbackUrl (OSP as endpoint provider)
- topic: APIs, Logics
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Negative variant of CX-0009-CAC-011, breaking the authentication of the callback request (Check 1 of CAC-011).

An otherwise conformant `OspRegistrationCallbackData` payload is sent to the configured `callbackUrl` (a) without an access token and (b) with an invalid or expired access token (Check 1). The Onboarding Service Provider MUST respond with HTTP `401` and MUST NOT apply the transmitted status to the registration request identified by `externalId` (§2.1.2; §2.1.3; §2.3.1).

The party under certification must ensure that its callback endpoint implements authentication and authorization based on the OAuth configuration it registered via §2.2.4 (§2.1.2; §2.2.4).

#### Proof of Conformity

Request/response logs without token and with invalid token, each with HTTP `401`, plus evidence that the internal registration status for the `externalId` remained unchanged (Check 1).

#### Additional Information

N/A

### CX-0009-CAC-013

- type: MUST
- role: Onboarding Service Provider
- pattern: E1 — POST /api/administration/registration/network/partnerregistration
- topic: APIs, Semantics
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Client-side conformity test of the call to `POST https://<base>/api/administration/registration/network/partnerregistration` from the Onboarding Service Provider's perspective (§2.2.1).

The Onboarding Service Provider sends a registration request on behalf of a prospective participant with `Content-Type: application/json` (Check 1). This check is fulfilled when the request contains all mandatory fields `externalId`, `name`, `city`, `streetName`, `countryAlpha2Code`, `region`, `companyRoles`, `uniqueIds` and `userDetails` with valid values, and the Core Service Provider B responds with HTTP `201` (§2.1.1; §2.2.1).

The values used in the request are evaluated (Check 2). This check is fulfilled when `countryAlpha2Code` is an ISO 3166-1 alpha-2 code, `companyRoles` entries are taken from `CompanyRoleId`, `uniqueIds` entries use a `type` from `UniqueIdentifierId` together with a `value`, and each `userDetails` entry contains the mandatory `providerId`, `firstName`, `lastName` and `email`; where `identityProviderId` is omitted, the first/default IdP of the OSP configuration is used (§2.2.1; §3).

The `externalId` used is evaluated (Check 3). This check is fulfilled when the `externalId` is unique within the Onboarding Service Provider and is reused unchanged for file uploads (§2.2.3) and for correlating status callbacks (§2.3.1) (§2.2.1; §2.2.3; §2.3.1).

Where the prospective participant already has a Business Partner Number, it is provided in the optional field `bpn` (Check 4). This check is fulfilled when the request carries the existing BPN in `bpn` (§2.2.1).

The party under certification must ensure that the request is authenticated with a token carrying the role `configure_partner_registration` (§2.1.2; §2.2.1).

#### Proof of Conformity

Request/response log with HTTP `201` and JSON schema validation of the sent body against the `PartnerRegistrationData` schema of the normative Registration API OpenAPI document (Check 1); request body extract showing the enum and mandatory-field values used (Check 2); evidence of `externalId` uniqueness handling and its reuse in file upload and callback correlation (Check 3); request body of a registration for a participant with an existing BPN, showing the populated `bpn` field (Check 4).

#### Additional Information

N/A

### CX-0009-CAC-014

- type: MUST
- role: Onboarding Service Provider
- pattern: E2 — POST /api/administration/osp/v2/participant-registration/fileupload
- topic: APIs, Logics
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Client-side conformity test of the file upload from the Onboarding Service Provider's perspective, applicable where files are required to process a registration request and are provided by the OSP (§2.2.3).

The Onboarding Service Provider sends a `FileUploadRequest` with `Content-Type: application/json` containing `fileName`, `externalId` and `contentType` (Check 1). This check is fulfilled when `contentType` is a valid RFC 2046 media type of the file to be uploaded, `externalId` corresponds to the related registration request, and the Core Service Provider B responds with HTTP `200` including `fileId` and `presignedUploadUrl` (§2.1.1; §2.2.3).

The binary file content is transferred with an HTTP `PUT` request to the returned `presignedUploadUrl` using the storage-provider-specific headers supplied by the CSP-B (Check 2). This check is fulfilled when the `PUT` request completes successfully for every file (§2.2.3).

The upload sequence relative to the registration request is evaluated (Check 3). This check is fulfilled when all files have been successfully uploaded before the registration request is submitted (§2.2.3).

Where an upload fails because the `presignedUploadUrl` has expired, the OSP calls the file upload endpoint again and retries the upload with the newly returned URL (Check 4). This check is fulfilled when the file is finally uploaded successfully before submission of the registration request (§2.2.3).

The party under certification must ensure that the file upload calls are authenticated with a token carrying the role `configure_partner_registration` (§2.1.2; §2.2.3).

#### Proof of Conformity

Request/response log with HTTP `200` and JSON schema validation of the sent `FileUploadRequest` (Check 1); `PUT` request/response logs incl. used headers and success status per file (Check 2); timestamped log showing all successful uploads preceding the submission of the registration request (Check 3); log of the expiry-triggered repeated fileupload call and the successful retry, only where the expiry case is exercised (Check 4).

#### Additional Information

[ASSUMPTION] Retry after expiry is a MAY for the OSP (§2.2.3); Check 4 is therefore assessed only where the OSP implements the retry, and is not a failure criterion where the expiry case does not occur.

### CX-0009-CAC-015

- type: MUST
- role: Onboarding Service Provider
- pattern: E3 — POST /api/administration/registrationstatus/callback
- topic: APIs, Logics
- automisable: true
- checkmode: end-to-end
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Client-side conformity test of the call to `POST https://<base>/api/administration/registrationstatus/callback` from the Onboarding Service Provider's perspective (§2.2.4).

The Onboarding Service Provider sends an `OnboardingServiceProviderCallbackConfigurationRequest` with `Content-Type: application/json` containing the mandatory fields `callbackUrl`, `authUrl`, `clientId` and `clientSecret` (Check 1). This check is fulfilled when the Core Service Provider B responds with HTTP `200` and returns the configured callback data except the secret (§2.1.1; §2.2.4).

The configured values are evaluated against the OSP's own callback endpoint (Check 2). This check is fulfilled when `callbackUrl` resolves to the callback endpoint the OSP provides per §2.3.1, and `authUrl`, `clientId` and `clientSecret` are the OAuth token endpoint and credentials by which callback requests to this endpoint are authenticated (§2.2.4; §2.3.1).

The configuration is registered before registration requests are submitted (Check 3). This check is fulfilled when a status callback for a subsequently submitted registration request is received at the configured `callbackUrl` (§2.2.4; §2.3.1).

The party under certification must ensure that the configuration call is authenticated with a token carrying the role `configure_partner_registration` (§2.1.2; §2.2.4).

#### Proof of Conformity

Request/response log with HTTP `200` and JSON schema validation of the sent body against the `OnboardingServiceProviderCallbackConfigurationRequest` schema (Check 1); evidence that the configured `callbackUrl` addresses the OSP callback endpoint and that tokens issued by `authUrl` for `clientId` are accepted by it (Check 2); timestamped log of the configuration call followed by a received status callback for a submitted registration request (Check 3).

#### Additional Information

N/A
