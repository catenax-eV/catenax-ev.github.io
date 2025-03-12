
# CX-0011 Issuing Agency v1.0.1

## ABSTRACT

The issuing agency is a technical mechanism that centrally creates and
assigns business partner numbers (BPNs) for a data set of a business
partner. The issuing agency is specified in the prefix of the BPN
according to [ISO/IEC 15459](https://www.iso.org/standard/54779.html).
It ensures that a data set maps to a unique identifier and contributes
to the sharing process of business partner data.

## 1. Introduction

### 1.1 Audience & Scope

> *This section is non-normative*

This standard is relevant for:

- Core Service Provider

This document is focusing on the issuing agency component that is part
of the business partner data management (BPDM) use case described on
the [BPDM Catena-X Website](https://catena-x.net/en/angebote/bpdm). It
is relevant when the creation of business partner numbers for the data
sharing process and golden record process to ensure the highest data
quality is needed. It is also relevant to get an understanding on how
the mechanism works to build and maintain the issuing agency as a core
service component.

Not in scope is the logic of the business partner number itself. There
is a separate standard for this: [Business Partner Number
Standard](https://catena-x.net/de/standard-library).

This is not relevant for consuming data sets or BPNS for another service
or application in the Catena-X network.

This is not relevant for sharing data or sharing member to hand over
data into the golden record process to improve the data quality of
business partner data.

### 1.2 Context

> *This section is non-normative*

In general, the issuing agency is important for business partner data
management in Catena-X because it is responsible for creating the unique
identifier that identifies a legal entity in the network. By having a
centralized and responsible agency in charge of business partner data
management, Catena-X and its network participants can improve the
quality and reliability of its data and support its goals of operational
efficiency and higher data quality.

The issuing agency is part of the whole sharing / golden record process
and will not work outstanding on its own. It is one component that is
mandatory to make the use case work.

### 1.3 Architecture Overview

> *This section is non-normative*

This runtime view illustrates on a high level how the data sharing
mechanism between a sharing member, a SaaS component, including the BPN
issuing by the BPN Generator works.

An actor can be any sharing member (company) that shares data with
Catena-X. The new business partner data object is transferred from the
enterprise layer of the sharing member to the Catena-X gate, this gate
interacts with the API of the SaaS component. The SaaS component fetches
information about their synchronization process and receives the new
data objects in response. The issuing agency that is in focus of this
standard creates a BPN and the data objects are changed accordingly. The
SaaS adapter polls the changed data and mirrors it back to the sharing
member via the SaaS component.

With the initial process of sharing data, the sharing member receives an
optimized business partner data object with a business partner number.
After the first sharing of the data the data gets updated automatically
with the same BPN.

![ProcessDataSharing_1.jpg](./assets/CX-0011-process-data-sharing-1.jpg)

***Figure 1: Process data sharing***

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

All participants and their solutions will need to proof, that they are
conform with the Catena-X standards. To validate that the standards are
applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

To proof conformity of the issuing agency usage for the business partner
data management usage an operations concept must be available. The
issuing agency must be aligned with the relevant components to create a
unique identifier called BPN. In addition to that, created numbers must
follow the [business partner number
standard](https://catena-x.net/de/standard-library).

Another valid point to proof the conformity is to show a license that
was handed out by the [Catena-X e.V.](https://catena-x.net/)

### 1.6 Examples

Company A transfers a new business partner data object of a legal entity
from their internal master data management system into the sharing
process to improve the data quality of this data object (e.g. get the
address of this business partner) and to get the BPNL for this data
object back into their internal system for the usage of other use cases
where they need the BPN (e.g. demand and capacity management to identify
supplier of parts in the network).

### 1.7 Terminology

> *This section is non-normative*

**BPDM:** Business Partner Data Management is the domain and use case
inside Catena-X. This domain is responsible for the logic of the
business partner number, the creation of the number, the sharing process
of business partner data, the technological realization and other
services that are built up on this component.

**BPN:** Business partner number is the unique identifier for companies.

**BPNL** Is the business partner number of a legal entity.

**BPNS** Is the business partner number for a site of the legal entity.

**BPNA** Is the business partner number for the address of a site or a
legal entity.

**Sharing Member:** Sharing members is every company that shares their
existing data objects of their business partners into the sharing
process.

**Sharing Process:** Sharing process is the process that enables the
sharing member to share their data and to proceed the data to get the
data linked, harmonized. In this process the BPN will be attached to the
data and the golden record is created.

**Golden Record:** Is the concept of high-quality business partner data.

**SaaS:** Means software as a service. In this context the SaaS
component is part of the sharing process to create the golden records
and takes care that duplicates are removed, the linkage and
harmonization of the data.

**BPDM Gate** It´s an API that can be used to put data to the sharing
process and to get the relevant data back from the process.

**BPN Generator:** This is another wording for the issuing agency.

Additional terminology used in this standard can be looked up in the
glossary on the association homepage.

## 2. Issuing

In Catena-X the BPN is the unique identifier for business partners
and MUST be issued by a central component that has the license by
the [Catena-X e.V.](https://catena-x.net/) to issue business partner
numbers.

The issuing agency MUST create BPNs for legal entities (BPNL), sites
(BPNS) and addresses (BPNA). And each BPN that will be created MUST be
unique and MUST follow the logic of the [business partner number
standard](https://catena-x.net/de/standard-library).

A location MUST always have at least one address with a corresponding
BPN. If this is not the case, no number will be created and data set
will be rejected by the BPDM Generator. Further additional
address MAY be added.

The prefix of the BPN MUST follow to [ISO/IEC
15459](https://www.iso.org/standard/54779.html).

The issuing agency SHOULD be able to receive data sets and to poll them
back.

## 3. References

### 3.1 Normative References

1. CX - 0010 Business Partner Number (BPN)
2. [ISO/IEC 15459](https://www.iso.org/standard/54779.html)

### 3.2 Non-Normative References

> *This section is non-normative*

1. [BPDM architecture
documentation](https://github.com/eclipse-tractusx/bpdm/blob/main/docs/arc42/architecture-documentation.adoc)
2. [BPDM use case on Catena-X
Website](https://catena-x.net/en/angebote/bpdm)

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
