
# CX-0028 Product Carbon Footprint Request API v2.0.0

## ABSTRACT

This standard focuses on the API used for PCF exchange within the Catena-X sustainability use case.

This includes relevant requirements for:

- data provider, that want to provide pcf data through Catena-X,
- data consumer, that are want to consume pcf values in Catena-X and
- Application developer/provider supporting the provisioning and consuming of pcf values.

## 1. INTRODUCTION

This document is the first specification in the context of exchanging PCF Values in the Catena-X Network. It contains the technical specification to enable the exchange of standardized Product Carbon Footprint (PCF) data at material level across interoperable technology solutions. The data model used within the API is in strong alignment with the world Business Counsel of Sustainable Development (WBCSD).

As [WBCSD Pathfinder](https://wbcsd.github.io/introduction/) does not yet define an API for asynchronous PCF requests, a new API was created that will be aligned with WBCSD.

### 1.1 Audience & Scope

> *This section is non-normative*

The standard is relevant for the following roles:

- Data Provider / Consumer
- Business Application Provider

For now the PCF exchange API is limited on sending,requesting and updating PCF
values on material level. This document will be revised at a later
stage, building on this specification. This standard is only relevant if
you want to consume, request or update PCF value of a specific material number
level. The data are on type level. Out of scope is the PCF value of a
serialized asset.

This document don´t include how the PCF value is calculated.

### 1.2 Context

> *This section is non-normative*

As already mentioned in the Introduction, this standard provides the specification of the HTTP REST API endpoint to request and sending PCF via the Catena X Dataspace. Without this API an interoperability between different application, with an aim to exchange PCF data, is not given.

### 1.3 Architecture Overview

> *This section is non-normative*

![Architecture Overview](./assets/architectural-overview.png)
Figure 2 High Level Architecture PCF Request

For further details an the overall architecture please consult [CX - 0063 TrianglePcfRequest](#31-normative-references).

### 1.4 Conformance

As well as sections marked as non-normative, all authoring guidelines,
diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,
SHOULD and SHOULD NOT in this document are to be interpreted as
described in [BCP
14](https://datatracker.ietf.org/doc/html/bcp14) \[[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)\]
\[[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)\] when, and
only when, they appear in all capitals, as shown here.

### 1.5 Proof of conformity

> *This section is non-normative*

All participants and their solutions will need to prove that they
conform with the Catena-X standards. To validate that the standards are
applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
Please refer to: for the process of conformity assessment and
certification.  

Application providers as well as data providers and consumers
implementing their own pcf data exchange solution need to proof
conformity with this standard by providing:

- An openAPI specification of the standard relevant endpoints
- Examples of the data asset and contract offer structure  
- Sample Material Twin with related Sub model "PCF Endpoint"

Those documents need to be handed over to a CAB.  

### 1.6 Terminology

> *This section is non-normative*

The following terms are especially relevant for the understanding of the
standard:

**PCF Value**

The Product Carbon Footprint (PCF) is the most established method for
determining the climate impact of a product. (Excluding the recycling
and usage phase)

**WBCSD Pathfinder**

At the 9th of November 2021, on the Industry Day at the United Nations
Climate Change Conference (COP26) in Glasgow, UK, the Carbon
Transparency Partnership published the Pathfinder Framework, a guidance
for the calculation and exchange of product-level carbon emissions data
across value chains.

The Framework was developed jointly by 35 stakeholders from industry and
the broader decarbonization ecosystem, harnessing WBCSD's role as
co-convenor of the Greenhouse Gas Protocol

The guidance enables companies to better understand carbon emissions on
a granular level, improving business decision-making and helping them
meet their net zero targets.

## 2. "PCF Exchange" API \[NORMATIVE\]

### 2.1 Preconditions and dependencies

The PCF exchange API MUST be published towards the network using a data
asset/contract offer in terms of the DSP protocol.

Furthermore, the participants of these use case MUST follow the [CX-0001 EDC Discovery Service](#31-normative-references) to find the relevant EDC Endpoints.

### 2.2 API Specification

#### 2.2.1 API Endpoints & resources

The PCF exchange API MUST be implemented as specified in the openAPI
documentation as stated [here](./assets/catena-x-pcf-endpoint-1_0_0.yaml)

The following two API MUST be provided:

```text
GET https://{someURL}/productIds/mat345?requestId=123&BPN=BPN0000012345L&comment=...
```

```text
PUT https://{someURL}/productIds/mat345?requestId=123&BPN=BPN0000054321L
```

- When responding to a PCF exchange request the "requestID" is mandatory in the PUT call.
- When sharing a PCF update the "requestID" is NOT allowed in the PUT call.

> **Note**
> Before the PCF data can be pushed back to the requester the data provider needs again to search for the EDC Endpoint of the requester following the EDC Discovery Service API! [CX-0001 EDC Discovery Service](#31-normative-references)

### 2.2.2 Available Data Types

The PCF exchange API MUST use JSON as the payload is transferred via
HTTP.

### 2.2.3 API recourses & endpoints

The HTTP GET and PUT endpoints introduced in this standard SHOULD NOT be
called from a participant of the use case directly. Rather, they MUST be
called via the EDC communication. Therefore, the endpoint MUST be
offered as EDC Data asset following [CX - 0063 TrianglePcfRequest](#31-normative-references).

#### 2.2.4 Error Handling

HTTP standard response codes MUST be used.

##### 2.2.4.1 Error Messages & Explanation

The following http codes MUST be defined for HTTP GET endpoint to
request a defined PCF dataset.

- Code 202: Accepted

The following http codes MUST be defined for HTTP PUT endpoint to send a
defined PCF dataset back to the quested consumer.

- Code 200: OK

## 3. References

### 3.1 Normative References

- [WBCSD Pathfinder Framework](https://wbcsd.github.io/introduction/#example-productfootprint-value)
- [CX-0001 EDC Discovery API - X v1.0.2](https://catena-x.net/de/standard-library)
- [CX-0002 Digital Twins in Catena - X v2.2.0](https://catena-x.net/de/standard-library)
- [CX-0018 Eclipse Data Space Connector (EDC) v2.1.0](https://catena-x.net/de/standard-library)
- [CX-0026 Product Carbon Footprint Data Model v2.0.0](https://catena-x.net/de/standard-library)
- [CX-0063 Triangle for Product Carbon Footprint Request v2.1.0](https://catena-x.net/de/standard-library)

### 3.2 Reference Implementations

> *This section is non-normative*

- [SiGREEN (Siemens)](https://www.siemens.com/de/de/unternehmen/themenfelder/product-carbon-footprint.html)
- [SDX (SAP)](https://www.sap.com/sustainability/climate-action.html)
- [SPF (SupplyOn)](https://www.supplyon.com/de/product-footprint)

[^1]: https://catena-x.net/fileadmin/user_upload/Vereinsdokumente/Catena-X_IP_Regelwerk_IP_Regulations.pdf

[^2]: https://catena-x.net/de/standard-library

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
