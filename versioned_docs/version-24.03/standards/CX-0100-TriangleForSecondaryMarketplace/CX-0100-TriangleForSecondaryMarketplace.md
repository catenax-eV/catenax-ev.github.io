# CX-0100 Triangle for Secondary Marketplace v1.0.0

## ABSTRACT

This standard focuses on the Secondary Marketplace use case. This includes relevant requirements for

- data provider, that want to provide relevant data for a Marketplace Offer through Catena-X,
- data consumer, that are searching for detailed product informations in Catena-X and
- Application developer/provider supporting the consuming data for detialed infromations of product
  in the markertplace of battery passports.

In the first version the Marketplace just consume data for offered Batteries.
Therefore the application use the BatteryPassport data model.

## 1. INTRODUCTION

This document defines the so-called *standardization triangle* for the Secondary Marketplace use case.
Standardization triangle hereby means the mandatory components, data models, APIs etc. that are
required to enable the Marketplace use case. Additionally, search objects as well as procedures to
registering/providing and consuming the data will be defined.

### 1.1 AUDIENCE & SCOPE

This document is meant for the following roles:

- Data Provider / Consumer
- Business Application Provider

### 1.2 CONTEXT

For release 3.2, the secondary marketplace will be displaying additional information on the products,
specifically batteries. In order to offer additional information about the battery to potential buyers,
the marketplace uses the BatteryPass sub-model. This allows buyers to access real data
(detailed content see [CX-00034](#21-list-of-standalone-standards))

### 1.3 ARCHITECTURE OVERVIEW

- Eclipse Data Space Connector (EDC) or equivalent components in compliance with the standard [CX-0018](#21-list-of-standalone-standards).
- Usage of the Discovery Finder to find relevant BPN Discovery Endpoint(s) following the Catena-X Standard [CX-0002](#21-list-of-standalone-standards).
- Usage of the BPN Discovery Services to find relevant BPN-L(s) following the Catena-X Standard [CX-0002](#21-list-of-standalone-standards).
- To find relevant EDC Endpoints the BPN Discovery Service is used following the CX-Standard [CX-0001](#21-list-of-standalone-standards).
- Usage of dencentralized digital twin registry to provide twins of products following the the CX-Standard [CX-0002](#21-list-of-standalone-standards).
- To find relevant EDC Endpoints the BPN Discovery Service is used following the CX-Standard [CX-0001](#21-list-of-standalone-standards).
- connections to components for authenticate as a data provider or consumer following the onboarding
  Standard [CX-0006](#21-list-of-standalone-standards) and the [identity and access management standards](#21-list-of-standalone-standards) (**CX-0013-0017**)

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes
in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD**
and **SHOULD NOT** in this document document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174]
when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

All participants and their solutions will need to prove, that they are conform with the Catena-X standards.
To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

To prove conformity with the use case marketplace standard standard as a data consumer or app provider
demonstrate that you

- can find battery twins
- can distinguish the battery passport information from other submodels
- can visualize battery passports.

To prove conformity with the use case Marketplace standard as **data provider** you MUST show that
you follow the standards listed under [2.1 List of Standalone Standards](#21-list-of-standalone-standards)

To prove conformity with the use case Marketplace standard as **app provider** you MUST show that
you follow the standards listed under [2.1 List of Standalone Standards](#21-list-of-standalone-standards)

### 1.6 EXAMPLES

No Example provided.

### 1.7 TERMINOLOGY

The following terms are especially relevant for the understanding of the standard:

- Asset Administration Shell (AAS): The AAS is chosen standard in Catena-X to define Digital Twins
  of an asset (e.g. a battery or a full vehicle).  
- Business Partner Number (BPN): A BPN is the unique identifier of a partner within Catena-x.

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2. STANDARDS FOR "TRIANGLE FOR MARKETPLACE"

### 2.1 LIST OF STANDALONE STANDARDS

>**NOTE**
>Not all standard documents are allready published. The links must be inserted by the association
>once the standards have been published! These Links are marked with "**NeedtobeaddedbyAccociation**".

To participate in the  use-case, the following single standards MUST be fulfilled by all
participants for which the standard is relevant:

- [CX-0001-EDCDiscoveryAPI](https://catena-x.net/de/standard-library)
- [CX-0002-DigitalTwininsInCX](https://catena-x.net/de/standard-library)
- [CX-0003-SAMMSemanticAspectMetaModel](https://catena-x.net/de/standard-library)
- [CX-0006-RegistrationAndInitialOnBoarding](https://catena-x.net/de/standard-library)
- [CX-0013 Identity of Member Companies](https://catena-x.net/de/standard-library)
- [CX-0014 Employees and Technical Users](https://catena-x.net/de/standard-library)
- [CX-0015 IAM & Access Control Paradigm](https://catena-x.net/de/standard-library)
- [CX-0016 Company Attribute Verification](https://catena-x.net/de/standard-library)
- [CX-0017 Company Role by the Connector](https://catena-x.net/de/standard-library)
- [CX-0018-SovereignDataExchange](https://catena-x.net/de/standard-library)
- [CX-0034-DataModelBatteryPass](https://catena-x.net/de/standard-library)
- [CX-0049-DID Document Schema](https://catena-x.net/de/standard-library)
- [CX-0050-Framework Agreement Credential](https://catena-x.net/de/standard-library)
- [CX-0051-Summary Credential](https://catena-x.net/de/standard-library)

### 2.2 ADDITIONAL REQUIREMENTS

See [CX-0096](https://catena-x.net/de/standard-library) for the Discovery process and EDC policy
usage for Battery Passes.

#### 2.2.1 EDC Policy Structure

>**NOTE**
>Not all framework agreements are allready published. The links must be inserted by the association
>once the agreements have been published! These Links are marked with "**Linkmustbeaddedmyassociation**".

A paticipant mantioned under [1.1](#11-audience--scope) MUST sign the overall
[Catena-X Terms and Condition](https://catena-x.net/de/catena-x-einfuehren-umsetzen/governance-framework-fuer-datenraum-betrieb)
as well as the sustainability agreement [framework agreements](https://catena-x.net/de/catena-x-einfuehren-umsetzen/governance-framework-fuer-datenraum-betrieb).
This follows the first SSI setup following the [IAM Standards CX-0049-0051](#21-list-of-standalone-standards)
in CX covering the new SSI infrastructure, which will released with R 3.2. Have a look at example polcies
[here](https://github.com/eclipse-tractusx/ssi-docu/blob/main/docs/architecture/cx-3-2/edc/policy.definitions.md).

At least the policy shown below MUST be added to a asset:

```json

{
  "@context": [
    "https://www.w3.org/ns/odrl.jsonld",
    {
      "cx": "https://w3id.org/catenax/v0.0.1/ns/"
    }
  ],
  "@type": "Offer",
  "@id": "a343fcbf-99fc-4ce8-8e9b-148c97605aab",
  "permission": [
    {
      "action": "use",
      "constraint": {
        "and": [
          {
            "leftOperand": "Membership",
            "operator": "eq",
            "rightOperand": "active"
          },
          {
            "leftOperand": "FrameworkAgreement.sustainability",
            "operator": "eq",
            "rightOperand": "active"
          }
        ]
      }
    }
  ]
}
```

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

see [2.1](#2-standards-for-triangle-for-marketplace)

### 3.2 NON-NORMATIVE REFERENCES

No further references.

### 3.3 REFERENCE IMPLEMENTATIONS

No reference implementation at the moment.

## ANNEXES

### FIGURES

### TABLES
