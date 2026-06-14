# CX-0135 — Merge Notes (CloudEvents proposal × PR #318)

> *This document records how the **combined** CX-0135 documents
> (`CX-0135-CompanyCertificateManagement-combined.md` and its `-combined` OpenAPI specs) were produced by
> merging the CloudEvents-based proposal (the "jim" documents) with the harmonized push/pull proposal
> ([catenax-eV/catenax-ev.github.io#318](https://github.com/catenax-eV/catenax-ev.github.io/pull/318), the
> "original"). It explains every element of the original that was **left out** of the combined documents.

## 1 Merge methodology

The governing rules were:

- **CloudEvents + JSON Schema is decisive.** The data model is expressed as inline JSON Schema in the OpenAPI specs and
  CloudEvents payloads. SAMM is not used.
- **EDC is never referenced.** EDC is an implementation and is excluded; reference only to the Dataspace Protocol (DSP).
- **Data-plane requirements come from jim**. The specification should not reference EDC and the EDC data plane has been
  deprecated.
- **Normative language follows RFC 2119 keyword style.**

## 2 Incorporated

The following were folded into the combined documents (sourced from the original or adapted to jim's model):

| Element                      | Where                            | Notes                                                                                                                                                                                                      |
|------------------------------|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Rich certificate metadata    | §4.4.3 / §4.4.6 / OpenAPI        | `certifiedBpn`, `registrationNumber`, `issuer`, `validator`, `trustLevel` (`none/low/medium/high/trusted`), `areaOfApplication`, `certificateTypeVersion` (the original's `uploader` is excluded — see §3) |
| Document `language`          | §4.4.3, `CertificateDocument`    | ISO 639-1 two-letter code; distinguishes same-document-different-language                                                                                                                                  |
| Structured covered locations | §4.4.3, `EnclosedSite`           | `enclosedSites` (objects `{ bpn, areaOfApplication }`) on the full record; flat `enclosedSiteBpns` (strings) on query results, lifecycle events, and requests                                              |
| BPN-based search filters     | §4.4.6, `CertificateQuery`       | `legalEntityBpns` / `siteBpns` / `addressBpns`; `certificateType` made optional; AND across kinds, any-of within a list                                                                                    |
| Policy & usage policy        | §4.5                             | CX-0152 reference; `cx.ccm.base:1` usage purpose; ODRL example. "EDC" sanitized to "dataspace offers"                                                                                                      |
| Certificate-type catalog     | §5.4                             | Type list + normalization rules + name→code table; `certificateType` remains an opaque string                                                                                                              |
| Metadata-attribute glossary  | §5.5                             | Definitions of trust level, issuer, validator, registration number, etc.                                                                                                                                   |
| References                   | §6                               | Added CX-0152 and CX-0010 (BPN identifiers)                                                                                                                                                                |
| DSP dataset reference        | §4.3.1 / §4.4.6 / OpenAPI        | `datasetId` (jim-native, MANDATORY) — the DSP dataset under which the certificate is exposed; lets the consumer locate and negotiate it. Removed then reinstated                                           |
| Presentation shell           | front matter, §5, annexes, legal | Versioned title, ABSTRACT, audience, terminology, annexes, copyright — sanitized of EDC/SAMM                                                                                                               |

## 3 Excluded

The items below are elements of the **original** that are intentionally **not** present in the combined documents.

### Excluded — superseded by the CloudEvents model

#### 1 — Page-based pagination

**What it is (original).** Search returns a `PaginatedCertificateList` wrapper with `totalElements`, `totalPages`,
`page`, and `pageSize`; the client navigates by page index.

Instead, follow the DSP approach with cursor pagination via the HTTP `Link` header per RFC 8288 (`next`/`prev`); page
state is an opaque token (§4.4.6.1).

**Why excluded.** The two pagination models are mutually exclusive; RFC 8288 is the chosen mechanism based on alignment
with DSP.

#### 2 — `RequestStatus.UNDER_CERTIFICATION`

**What it is (original).** A request status enum value indicating the certificate is being produced by an external
authority.

**jim's approach.** The equivalent Fulfillment state is `CERTIFICATION_REQUESTED` (§2.1.3), reported as the request
`status`.

**Why excluded.** Naming only — jim's term covers the same condition and is aligned with events being written in the 
past tense.

#### 3 — Request-body `certifiedBpn` and the union response shape

**What it is (original).** The request body includes `certifiedBpn` (whose certificate is wanted). The response is a
polymorphic union — `CertificateRequestInProgressResponse` / `CertificateRequestCompletedResponse` /
`CertificateRequestRejectedResponse` — with rejection split into `requestErrors` and `locationErrors`.

**jim's approach.** The request is `{ certificateType, enclosedSiteBpns }` (the certified entity is the provider
counterparty). The response is one flat object `{ exchangeId, certificateId, version, status, errors[] }`; per-location
errors use `errors[].specifier` (§4.4.1).

**Why excluded.** jim deliberately flattens the union into a single status-dispatched object and always returns a
correlatable `exchangeId`.

#### 4 — `Header` / `FeedbackUrlHeader` envelope fields

**What it is (original).** A custom message envelope with `messageId`, `context`, `sentDateTime`, `senderBpn`,
`receiverBpn`, `relatedMessageId`, `version`, and `senderFeedbackUrl`.

**jim's approach.** Messages are CloudEvents; these concerns are carried by CloudEvents attributes (`id`, `source`,
`subject`, `time`, `type`, `relatedmessageid`, etc.) defined in CX-0000.

**Why excluded.** The envelope is replaced wholesale by the CloudEvents binding.

#### 5 — `PushStatus.DELETED` and `FeedbackStatus.RECEIVED`

**What it is (original).** Lifecycle push uses `DELETED`; feedback uses `RECEIVED` (plus `ACCEPTED`/`REJECTED`).

**jim's approach.** The lifecycle terminal is `WITHDRAWN` (§2.2.2); the acceptance non-terminal acknowledgment is
`RETRIEVED`, and jim adds `ERRORED` to distinguish a business error from a `REJECTED` decision (§2.1.3).

**Why excluded.** Naming/semantics alignment — jim's vocabulary covers more cases (separates decision from error) and 
uses past-tense states consistently.

#### 6 — Per-location error nesting (`LocationErrorCollection` / `LocationError`)

**What it is (original).** Errors are nested per location: a `LocationErrorCollection` keyed by `bpn` containing
`LocationError` entries.

**jim's approach.** A flat `errors[]` array where each entry has an optional `specifier` scoping it to a BPN; if
`specifier` is omitted the error applies to the whole certificate (§4.3.3, §4.4.5).

**Why excluded.** jim's flat-with-specifier form conveys the same information with a simpler structure.

#### 7 — Consolidated HTTP status table incl. `501 Not Implemented`

**What it is (original).** A single table of HTTP status codes used across the API (200, 202, 400, 404, 500, 501),
including `501 Not Implemented` for unsupported features.

**jim's approach.** Error responses are documented per endpoint (200/202/400/404/500 appear where relevant); there is no
consolidated table and no `501` as it is not needed (The DSP catalog `conformsTo` signals what is implemented).

**Why excluded.** jim documents errors inline; the consolidated table and `501` were not carried over.

### Excluded by the "never reference EDC" rule

#### 8 — `cx-taxo:CCMAPI` EDC asset structure

**What it is (original).** The Certificate Management API is offered as an EDC asset: `dct:type`/`dct:subject`,
`cx-common:version`, a `dataAddress` (`HttpData`, proxy flags), and a rule that only one asset per (subject, version)
may exist per BPNL.

**jim's approach.** Endpoints are exposed as DSP datasets (§4.3.5, §4.4.8) described by `conformsTo` and a `http-pull`
distribution `format` per the DSP and Data Plane Signaling Specifications, without EDC-specific asset structure.

**Why excluded.** EDC-specific.

#### 9 — `senderFeedbackUrl` routing mechanism

**What it is (original).** A URL in the push payload telling the provider where to expect feedback, with a normative
note that it is a temporary measure pending EDC `.well-known` support.

**jim's approach.** Feedback is correlated by `exchangeId` and delivered to the provider's acceptance endpoint reached
via the DSP dataset; no out-of-band feedback URL.

**Why excluded.** EDC-coupled and superseded by the new correlation model.

#### 10 — Message Flow Expectations and Business Application Provider obligations

**What it is (original).** A normative bullet list of provider/consumer MUSTs (catalog exposure, access/usage policy on
the offer, etc.) and obligations on Business Application Providers.

**jim's approach.** Conformance is expressed through the per-endpoint normative requirements in §4; there is no separate
flow-expectations list, and Business Application Provider is not a modelled role.

**Why excluded.** The list is largely framed around EDC catalog/offer mechanics.

#### 11 — PUSH / PULL / PUSH-then-PULL sequence diagrams

**What it is (original).** Three SVG sequence diagrams depicting the EDC-mediated flows.

**jim's approach.** A single Mermaid sequence diagram (§3) covering negotiation, request, fulfillment, retrieval, and
acceptance using the DSP agent roles.

**Why excluded.** The original diagrams depict EDC components and flows and no longer applies.

#### 12 — EDC-proxies-4xx/5xx-as-`500` behavior note

**What it is (original).** A caveat that the open-source EDC proxies any 4xx/5xx as `500`, so clients must tolerate it.

**jim's approach.** Not present; jim's error semantics are described directly.

**Why excluded.** EDC-specific operational behavior.

### Excluded — SAMM dropped

#### 13 — SAMM aspect model

**What it is (original).** The certificate data model is a SAMM aspect,
`urn:samm:io.catenax.business_partner_certificate:3.1.0`, authored in RDF/Turtle, released under CC-BY-4.0, with JSON
Schema / AAS / docs generated by the ESMF tooling (per CX-0003).

**jim's approach.** The data model is authoritative inline JSON Schema in the OpenAPI specs plus CloudEvents
`dataschema` URLs.

**Why excluded.** "CloudEvents + JSON Schema is decisive" — SAMM is not used.

#### 14 — v3.1.0 BPNS/BPNA backward-compatibility note

**What it is (original).** A note that the SAMM model v3.1.0 changed `enclosedSitesBpn` to accept BPNA in addition to
BPNS, breaking backward compatibility with v3.0.0.

**jim's approach.** `enclosedSites` accept BPNS or BPNA by definition; there is no SAMM versioning to reconcile.

**Why excluded.** Tied to SAMM model versioning, which is not used.

### Excluded — terminology prose

#### 15 — Remaining domain prose

**What it is (original).** Narrative subsections on registration/issuing authority, and validity guidance (use the
issue/signature date when valid-from is absent; `31.12.9999` for no expiry).

**jim's approach.** The combined doc includes the metadata-attribute glossary (§5.5) and certificate-type catalog
(§5.4); the remaining narrative was not carried over.

**Why excluded.** Lower-value prose not required to define the wire protocol.

### Excluded — references and misc

#### 16 — Normative refs CX-0018, CX-0003; non-normative CX-0001

**What it is (original).** References to CX-0018 (Dataspace Connectivity / EDC connector conformance), CX-0003 (SAMM),
and CX-0001 (Participant Agent Registration).

**jim's approach.** References DSP directly, uses JSON Schema (not SAMM), and cites CX-0000/CX-0151 (plus the
incorporated CX-0152 and CX-0010).

**Why excluded.** CX-0018 and CX-0003 anchor EDC and SAMM respectively (both excluded); CX-0001 was not needed.

#### 17 — "not replacing the existing publication semantic model" caveat

**What it is (original).** A statement that the standard does not replace the existing publication semantic model.

**jim's approach.** Not present; the CloudEvents proposal does not frame itself relative to the SAMM publication model.

**Why excluded.** The caveat is meaningful only in the SAMM framing.

### Excluded — redundant in this model

#### 18 — `uploader`

**What it is (original).** The original certificate metadata carries an `uploader` property — the BPNL of the business
partner who originally provided the certificate data (for example, a company that supplied its certificate to a
validating business application provider).

**jim's approach.** The certificate is served by the Certificate Provider over its own API; the party that provides the
certificate data is, by definition, the participant exposing it. The provider's identity is already established by the
authenticated Dataspace Protocol interaction (and carried as the CloudEvent `source` on lifecycle and fulfillment
events). There is therefore no separate `uploader` field.

**Why excluded.** `uploader` is redundant: in this model the uploader is always the participant (the Certificate
Provider) that exposes the certificate, so recording it as a distinct metadata property adds no information. Removed
from
`CertificateMetadata` and `CertificateQueryResponse` (and the §5.5 glossary) in both the combined Markdown and the
provider OpenAPI spec.

