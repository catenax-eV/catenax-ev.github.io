
# CX-0113 Aspect Model ESS Incident Data Model v1.0.0

## FOR WHOM IS THE STANDARD DESIGNED

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

First version of the standard.

## ABSTRACT

ESS is the abbreviation of Environmental and Social Standards.
In Catena-X, the aim is to establish principles for transparent and trustful collaboration within the Catena-X network.
These principles are based on legal requirements like the German Supply Chain Act (Lieferkettensorgfaltspflichtengesetz) respectively the European Due Diligence Act or the International Bill of Human Rights.

In case a violation against these laws occurs a so-called ESS incident can be created and transmitted to the Catena-X network.
A Business Partner always needs to find out if he is affected by an incident. The Business Partners need to take appropriate actions and measures according to their responsibility.
The Catena-X network shall support the Catena-X members in this process. The ESS data model is used for this purpose.

## 1 INTRODUCTION

This document describes a semantic model used in the Catena-X network.

### 1.1 AUDIENCE & SCOPE

This standard is relevant for the following roles:

- Core Service Provider

- Data Provider / Consumer

- Business Application Provider

Scope of this document is to provide guidance about the structure of the data model which is used for the ESS Use case.
The used API is not part of this document and is described in a separate document.

### 1.2 CONTEXT AND ARCHITECTURE FIT

In order to effectively manage ESS incidents in the supply chain, a standardized approach to capturing and exchanging ESS incident data is essential.
A standardized ESS Incident data model provides a structured framework for collecting, organizing, and sharing ESS incident information across industries and stakeholders.
By establishing a common language and format, this data model enables collaboration, taking measures to ensure that the legal regulations are followed.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

As well as sections marked as non-normative, all authoring guidelines,
diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,
SHOULD and SHOULD NOT in this document are to be interpreted as
described in [BCP
14](https://datatracker.ietf.org/doc/html/bcp14) \[[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)\]
\[[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)\] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform
with the Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs).

The prove of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.  

### 1.4 EXAMPLES

```json
{
  "flagAnonymous": false,
  "incidentStatusInformation": "new",
  "essIncidentIssuerLastName": "Testuser Last name",
  "rawMaterial": "Natural Rubber",
  "industry": "Extraction of raw materials",
  "subCaseOpCoIds": "9f47b3c8-b6d4-44f1-99ba-6bdb33916cac, 9f47b3c8-b6d4-44f1-99ba-6bdb33916cad",
  "incidentSubcategory": "Child labour",
  "incidentSubject": "Child labour on rubber producer Farm A",
  "essIncidentIssuerAddress": {
    "locality": {
      "value": "Mannheim",
      "technicalKey": "BLOCK"
    },
    "country": {
      "shortName": "SM-86Y"
    },
    "postCode": {
      "value": "68161\\12",
      "technicalKey": "CEDEX"
    },
    "thoroughfare": {
      "value": "Bernstra?e",
      "number": "45",
      "technicalKey": "STREET"
    },
    "premise": {
      "value": "Werk 1",
      "technicalKey": "BUILDING"
    },
    "postalDeliveryPoint": {
      "value": "Tor 1",
      "technicalKey": "INTERURBAN_DELIVERY_POINT"
    }
  },
  "essOriginatorCompanyName": "Rubbery Ltd.",
  "essOriginatorCountrySubdivision": "BR-SP",
  "productCommodity": "Tire",
  "essOriginatorAddress": {
    "locality": {
      "value": "Mannheim",
      "technicalKey": "BLOCK"
    },
    "country": {
      "shortName": ""
    },
    "postCode": {
      "value": "68161\\12",
      "technicalKey": "CEDEX"
    },
    "thoroughfare": {
      "value": "Bernstra?e",
      "number": "45",
      "technicalKey": "STREET"
    },
    "premise": {
      "value": "Werk 1",
      "technicalKey": "BUILDING"
    },
    "postalDeliveryPoint": {
      "value": "Tor 1",
      "technicalKey": "INTERURBAN_DELIVERY_POINT"
    }
  },
  "incidentCategory": "Environmental",
  "incidentAttachment": "telnet://192.0.2.16:80/",
  "productDescription": "Natural Rubber",
  "essOriginatorBpnA": "BPNA1234567890ZZ",
  "essIncidentIssuerPhoneNo": "+49-123-456789",
  "incidentExternalSubject": "Child labour on a rubber producer farm",
  "incidentShareFlag": false,
  "incidentExternalNotes": "Child labour at production site of a rubber producer in Brazil",
  "essIncidentIssuerFirstName": "Testuser First name",
  "essIncidentIssuerId": "9a47b3c8-b6d4-44f1-99ba-6bdb33916cac",
  "masterOpCoId": "9f47b3c8-b6d4-44f1-99ba-6bdb33916cac",
  "incidentSystemId": "123456789",
  "essOriginatorBpnL": "BPNL1234567890ZZ",
  "essOriginatorCoordinates": {
    "longitude": "-79.517415",
    "latitude": "-5.422077"
  },
  "essIncidentIssuerCountrySubdivision": "IN-AP",
  "essIncidentIssuerEmailAddress": "test@example.com",
  "essOriginatorBpnS": "BPNS1234567890ZZ",
  "systemDate": "2022-08-31T23:22:12Z",
  "partNumber": "EX123M234",
  "incidentDisplayId": "123456789101",
  "incidentDate": "2022-08-31T00:00:00Z",
  "incidentId": "9f47b3c8-b6d4-44f1-99ba-6bdb33916cac",
  "incidentDescription": "Child labour at production site of the rubber producer Farm A in Brazil"
}
```

### 1.5 TERMINOLOGY

Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.  
  
: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

ESS
: ESS is the abbreviation of Environmental and Social Standards.

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 ASPECT MODEL “ESS Incident Data Model”

Every data provider **MUST** provide the data
conformant to the semantic model specified in this document.

The unique identifier of the semantic model specified in this document
**MUST** be used by the data provider to define the semantics of the data
being transferred.

Every certified business application using the ESS Incident Data Model data **MUST**
be able to consume data conformant to the semantic model specified in
this document.

Every certified business application for the ESS incident use case **MUST** be
able to provide a user interface to create an ESS incident according to the data model specified in this
document.

This semantic model **MUST** be made available in the central Semantic Hub.

Data consumers and data provider **MUST** comply with the license of the
semantic model.

In the Catena-X data space ESS Incident data **MUST** be requested conformant to [CX-0018](#31-normative-references).

The JSON Payload of data providers **MUST** be conformant to the JSON Schema
as specified in this document.

To participate in the ESS use-case, the following single standards **MUST** be fulfilled by all participants for which the standard is relevant:

[CX – 0115 CX-0115-ESSAPIStandardization](#31-normative-references)

### 2.1 INTRODUCTION

This section specifies a data model for ESS incident.

### 2.2 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#32-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to [CX-0003](#3-references)
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to [CX-0003](#3-references).

### 2.3 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.4 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```txt
urn:bamm:io.catenax.essincident:2.0.0 
```

### 2.5 FORMATS OF SEMANTIC MODEL

All different formats of the semantic model can be found in the github repository.

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.essincident/2.0.0
```

#### 2.5.1 RDF TURTLE

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

```txt
    https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.essincident/2.0.0/EssIncident.ttl
```

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.essincident/2.0.0/gen
```

#### 2.5.2 JSON SCHEMA

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.essincident/2.0.0/gen/EssIncident-schema.json
```

#### 2.5.3 AASX

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#32-non-normative-references)].

Note: As soon as the specification V3.0 of the Asset Administration Shell specification is available
an update will be provided.

```txt
https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.essincident/2.0.0/gen/EssIncident.aasx
```

### 2.6 SEMANTIC MODEL

The data model is described in SAMM . A html documentation can be generated from the rdf turtle
file.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

[CX - 0003 SAMM Aspect Meta Model v1.0.2](https://catena-x.net/de/standard-library)

[CX - 0004 Governance Process v1.0.1](https://catena-x.net/de/standard-library)

[CX - 0018 Eclipse Data Space Connector (EDC) v2.0.1](https://catena-x.net/de/standard-library)

[CX – 0115 CX-0115-ESSAPIStandardization v1.0.0](https://catena-x.net/de/standard-library)

### 3.2 NON-NORMATIVE REFERENCES

[SMT] How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## ANNEXES

### FIGURES

### TABLES

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
