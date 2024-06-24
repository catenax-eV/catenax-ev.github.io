---
title: 2 EDC Discovery API
sidebar_position: 3
slug: CX-0001-v1.0-edc-discovery-api
pagination_prev: null
pagination_next: null
---

## CX-0001 EDC Discovery API v.1.0.2

> *This section is normative*

The EDC discovery service **MUST** be offered as central available endpoint by the Core Service Provider.
Every EDC registered in the network **MUST** be registered in the EDC discovery service. Therefore the needed workflows/processes (as defined in CX - 0006 Registration and initial onboarding) **MUST** be followed/implemented.

The EDC discovery endpoint can get triggered via technical as well as
real users, if relevant roles are available.

For technical user, a company can request the user creation with the
technical user creation feature inside the portal.

All participants and their solutions will need to proof, that they are
conform with the Catena-X standards. To validate that the standards are
applied correctly, Catena-X employs Conformity Assessment Bodies
(CABs).

- The Core Service Provider **MUST** offer a process/workflow to register dataspace connectors (as defined in CX - 0006 Registration and initial onboarding); Enablement Service Provider as well as Application Service Provider **MUST** run the connector registration for their service customers.
- SD documents **MUST** be created for every Connector registered and stored by the Participants. The Core Service Provide make them available.
- The provided SD documents **MUST** be GAIA-X compliant, i.e. **MUST** provide a compliance credential issued from GAIA-X AIBSL.

A test case will be, that an EDC instance has to be onboarded for a specific participant identified by a BPN. The SD for the EDC has to be visible in the supported SD storage. The query against this new registered EDC instance for the given BPN **SHOULD** provide the connector url as stated in the SD document.

## 2.1 Preconditions and dependencies

The self-description documents used as data source **MUST** be GAIA-X compliant, i.e. adhering to the GAIA-X Trustframework in the currently supported version in Catena-X (usually the latest published version and the version before). In addition, these SD documents **MUST** be registered at an SD storage like SD-Hub or Federated Catalogue.

## 2.2 API Specification

### 2.2.1 API Endpoints & resources

The EDC Discovery API **MUST** be implemented as specified in the openAPI documentation as stated here: https://\....

Endpoint: POST: /api/administration/connectors/discovery

**Request body**

the request body can be kept empty (to retrieve a complete list of registered connectors) or be filled with one or multiple BPNs to retrieve a list of registered EDC endpoints for the giving BPNs.

```

*\[*

*"BPNL\...\...",*

*"BPNL\...."*

*\]*

```

**Response structure**

```

\[

{

"bpn : "BPNL\...\..."

"connectorEndpoint":

\[

"http://some.example.url",

"http://some.other-example.url"

\]

},

{

"bpn : "BPNL\...\..."

"connectorEndpoint": "http://some.example.url"

}

\]

```

For each bpn an own response object is provided. In case of multiple EDC instances for one bpn an array is returned (first result set) otherwise a single value (second result set)

### 2.2.2 Available Data Types

The API MUST use JSON as the payload transported via HTTP.

### 2.2.3 EDC Data Asset Structure

This API do not have to be accessed via an EDC instance but can be queried from any authorized participant or service directly.

### 2.2.4 Error Handling

HTTP standard response codes that MUST be used.

#### 2.2.4.1 Error Messages & Explanation

|     Code    |     Description                                |
|-------------|------------------------------------------------|
|     200     |     Discovery request finished successfully    |
|     400     |     Request body was malformed                 |
|     401     |     Not authorized                             |
|     403     |     Forbidden                                  |
|     405     |     Method not allowed                         |
