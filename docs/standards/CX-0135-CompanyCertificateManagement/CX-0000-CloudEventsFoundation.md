# CX-0000 Notification Foundation (CX-151?)

## Abstract

This standard defines a protocol-agnostic foundation for event-based data exchange built on the CloudEvents
specification. It provides the base event structure and mechanisms that can be used across multiple Catena-X use cases
and domains.

## 1 Introduction

This standard establishes the foundational layer for event-based communication, based on the CloudEvents v1+
specification. Note that implementations should periodically upgrade support for minor (backward-compatible) versions of
that specification. It defines core event structures, attribute requirements, and extension mechanisms without binding
to specific transport protocols.

### 1.1 Audience & Scope

This specification covers:

- Base event structure and attributes
- Type system and data encoding
- Extension mechanisms
- Protocol-agnostic design principles

### 1.2 Conformance and Proof of Conformity

> *This section is normative*

The keywords **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**, and **SHOULD NOT**
in this document are to be interpreted as described in BCP 14 [RFC2119](#rfc2119) [RFC8174](#rfc8174) when, and only
when, they appear in all capitals, as shown here.

To prove conformity:

- Events **MUST** conform to the CloudEvents v1+ specification
- Events **MUST** be serializable in JSON format
- Events **MUST** include all REQUIRED attributes as defined in section 2.1
- JSON schemas for event formats **MUST** be provided for validation

### 1.3 Terminology

> *This section is non-normative*

**Event**: A data record expressing an occurrence and its context

**Producer**: The system or process that creates events

**Consumer**: The system or process that receives and processes events

**Source**: An identifier for the context in which an event occurred

**Type**: A string describing the nature of the event

**CloudEvents**: The CNCF specification for describing events in a common format

## 2 Event Specification

> *This section is normative*

### 2.1 Base Event Structure

All events conforming to this standard **MUST** be valid CloudEvents v1.0.2 events [CloudEvents](#cloudevents).

#### 2.1.1 Required Attributes

The following CloudEvents attributes are **REQUIRED**:

| Attribute     | Type          | Description                                                                                                   |
|---------------|---------------|---------------------------------------------------------------------------------------------------------------|
| `id`          | String        | Unique identifier for the event. Producers MUST ensure that `source` + `id` is unique for each distinct event |
| `source`      | URI-reference | The source DID                                                                                                |
| `specversion` | String        | CloudEvents specification version. MUST be "1.0"                                                              |
| `type`        | String        | Event type identifier. MUST be a non-empty string. SHOULD use reverse-DNS notation                            |

#### 2.1.2 Required Extension Attributes

| Attribute   | Type   | Description    |
|-------------|--------|----------------|
| `sourcebpn` | String | The source BPN |

#### 2.1.3 Recommended Attributes

The following CloudEvents attributes are **RECOMMENDED**:

| Attribute         | Type      | Description                                               |
|-------------------|-----------|-----------------------------------------------------------|
| `time`            | Timestamp | [RFC3339](#rfc3339) timestamp of when the event occurred  |
| `datacontenttype` | String    | Media type of the data payload (e.g., "application/json") |
| `dataschema`      | URI       | URI identifying the schema of the data payload            |

If `datacontenttype` is not specified, the event **MUST** be interpreted as `application/json`.

#### 2.1.4 Optional Attributes

| Attribute          | Type   | Description                                             |
|--------------------|--------|---------------------------------------------------------|
| `subject`          | String | Subject of the event in the context of the event source |
| `relatedmessageid` | String | A related message id                                    |

### 2.2 Identifier Requirements

Event IDs **MUST** be unique within the scope of a `source`:

- Combination of `source` + `id` **MUST** uniquely identify an event
- Duplicate events (e.g., retries) **MUST** reuse the same `source` and `id`
- Event IDs **MUST** be UUIDs as defined by [RFC9562](#rfc9562)

> NOTE: Consumers **MUST NOT** assume which UUID version a given `id` uses. The `id` is to be treated as an opaque
> identifier and used only for equality comparison; its internal structure (version, timestamp, or any other embedded
> data) **MUST NOT** be interpreted.

### 2.3 Event Types

#### 2.3.1 Type Naming Convention

> ISSUE: We should consider using the `org.tractus-x` domain instead of `org.catena-x` for event types. This may
> make the event types and specification more generic for reuse across other dataspaces.

Event types **MUST** follow reverse-DNS notation where the domain is `org.catena-x`:

`<domain>.<use case>.<specifier>.<version>`

The `domain` and `use case` **MUST** be in lowercase.

The `specifier` **MUST** be in Camel Case, for example:

```
org.catena-x.pcf.NotificationEvent.v1
```

#### 2.3.2 Type Versioning

Version information **MUST** be encoded as follows:

`v<major>`

for example `v1`. Minor/patch versions **MUST NOT** be in the type name

### 2.4 Event Data

#### 2.4.1 Data Payload

The `data` attribute **MAY** contain domain-specific information of a valid JSON type (object, array, string, number,
boolean, null). The `data` attribute **SHOULD** have a schema defined via the `dataschema` attribute.

#### 2.4.2 Data Content Type

When `data` is present, `datacontenttype` **SHOULD** be specified. If specified, it **MUST** be a valid media type as
defined by [RFC2046](#rfc2046). If `data` is present and `datacontenttype` is not specified, implementation **MUST** default to
interpreting the data payload as "application/json". If `data_base64` is present and `datacontenttype` is not specified,
implementation **MUST** default to interpreting the data payload as "application/octet-stream".

### 2.5 Extension Attributes

#### 2.5.1 Defining Extensions

Custom attributes **MAY** be added following CloudEvents naming rules:

- The attribute **MUST** consist of lowercase letters (a-z) or digits (0–9)
- The attribute **MUST** be at least one character, **SHOULD NOT** exceed 20 characters
- The attribute **SHOULD** start with a letter
- The attribute **MUST NOT** use the name `data`, `data_base64`, or any CloudEvents reserved attribute names

#### 2.5.2 Extension Attribute Types

Extension attributes **MUST** use CloudEvents type system:

- Boolean
- Integer
- String
- Binary
- URI
- URI-reference
- Timestamp

## 3 Data Formats

> *This section is normative*

### 3.1 JSON Format

All implementations **MUST** support JSON serialization per the CloudEvents JSON format specification
[CloudEvents-JSON](#cloudevents-json).

#### 3.2 JSON Schema

JSON Schema for base CloudEvents structure using non-binary data:

```json
{
  "$schema": "https://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": [
    "specversion",
    "type",
    "source",
    "id"
  ],
  "properties": {
    "specversion": {
      "type": "string",
      "const": "1.0"
    },
    "type": {
      "type": "string",
      "minLength": 1
    },
    "source": {
      "type": "string",
      "format": "uri-reference",
      "minLength": 1
    },
    "id": {
      "type": "string",
      "minLength": 1
    },
    "time": {
      "type": "string",
      "format": "date-time"
    },
    "datacontenttype": {
      "type": "string"
    },
    "dataschema": {
      "type": "string",
      "format": "uri"
    },
    "subject": {
      "type": "string",
      "minLength": 1
    },
    "data": {}
  },
  "additionalProperties": true
}
```

## 4 HTTPS Binding

CloudEvents **MUST** follow the HTTP Protocol Binding for CloudEvents [CloudEvents-HTTP](#cloudevents-http).

When using HTTPS and non-binary content, events **MUST** be serialized in JSON format using the JSON structured mode.

Batch events **MAY** be used.

### 4.1 Security and Authorization

All endpoints **MUST** use HTTPS, HTTP over TLS 1.2 or higher. Authorization **MUST** adhere to the Data Plane Signaling
Token Refresh Protocol [DPS-TokenRefresh](#dps-token-refresh).

If a client is not authorized for an endpoint request, the API **MUST** return `401 Unauthorized` or `404 Not Found`.

## 5 Examples

> *This section is non-normative*

### 5.1 Single Event

```json
{
  "specversion": "1.0",
  "type": "org.catena-x.pcf.NotificationEvent.v1",
  "id": "e678a546-8bb7-4491-8765-046fa39ac76c",
  "source": "did:web:example.com",
  "sourcebpn": "BPNL0000000000AA",
  "time": "2025-02-27T12:34:56.789Z",
  "datacontenttype": "application/json",
  "dataschema": "https://example.com/schemas/status.json",
  "subject": "part/12345",
  "data": {
    "partId": "12345",
    "status": "ready"
  }
}
```

### 5.2 Batch Event

```json
[
  {
    "specversion": "1.0",
    "type": "org.catena-x.pcf.NotificationEvent.v1",
    "id": "e678a546-8bb7-4491-8765-046fa39ac76c",
    "source": "did:web:example.com",
    "sourcebpn": "BPNL0000000000AA",
    "time": "2025-02-27T12:34:56.789Z",
    "datacontenttype": "application/json",
    "dataschema": "https://example.com/schemas/status.json",
    "subject": "part/12345",
    "data": {
      "partId": "12345",
      "status": "ready"
    }
  },
  {
    "specversion": "1.0",
    "type": "org.catena-x.pcf.NotificationEvent.v1",
    "id": "2b51c8ed-2f06-4220-a454-52bd3d1b4797",
    "source": "did:web:example.com",
    "sourcebpn": "BPNL0000000000AA",
    "time": "2025-02-27T12:34:56.789Z",
    "datacontenttype": "application/json",
    "dataschema": "https://example.com/schemas/status.json",
    "subject": "part/67890",
    "data": {
      "partId": "67890",
      "status": "updated"
    }
  }
]
```

## 6 References

### 6.1 Normative References

<a id="cloudevents"></a>
**[CloudEvents]** Cloud Native Computing Foundation, "CloudEvents 1.0.2 — Core Specification",
<https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md>.

<a id="cloudevents-http"></a>
**[CloudEvents-HTTP]** Cloud Native Computing Foundation, "HTTP Protocol Binding for CloudEvents 1.0.2",
<https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/bindings/http-protocol-binding.md>.

<a id="cloudevents-json"></a>
**[CloudEvents-JSON]** Cloud Native Computing Foundation, "JSON Event Format for CloudEvents 1.0.2",
<https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md>.

<a id="dps-token-refresh"></a>
**[DPS-TokenRefresh]** Eclipse Data Plane Signaling Working Group, "Data Plane Signaling Token Refresh Protocol",
<https://github.com/eclipse-dataplane-signaling/dataplane-signaling>.

<a id="rfc2046"></a>
**[RFC2046]** Freed, N. and Borenstein, N., "Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types",
RFC 2046, November 1996, <https://www.rfc-editor.org/rfc/rfc2046>.

<a id="rfc2119"></a>
**[RFC2119]** Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, March 1997,
<https://www.rfc-editor.org/rfc/rfc2119>.

<a id="rfc3339"></a>
**[RFC3339]** Klyne, G. and Newman, C., "Date and Time on the Internet: Timestamps", RFC 3339, July 2002,
<https://www.rfc-editor.org/rfc/rfc3339>.

<a id="rfc3986"></a>
**[RFC3986]** Berners-Lee, T., Fielding, R., and Masinter, L., "Uniform Resource Identifier (URI): Generic Syntax",
STD 66, RFC 3986, January 2005, <https://www.rfc-editor.org/rfc/rfc3986>.

<a id="rfc8174"></a>
**[RFC8174]** Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, May 2017,
<https://www.rfc-editor.org/rfc/rfc8174>.

<a id="rfc9562"></a>
**[RFC9562]** Davis, K., Peabody, B., and Leach, P., "Universally Unique IDentifiers (UUIDs)", RFC 9562, May 2024,
<https://www.rfc-editor.org/rfc/rfc9562>.

### 6.2 Non-Normative References

<a id="cloudevents-primer"></a>
**[CloudEvents-Primer]** Cloud Native Computing Foundation, "CloudEvents Primer",
<https://github.com/cloudevents/spec/blob/main/cloudevents/primer.md>.
