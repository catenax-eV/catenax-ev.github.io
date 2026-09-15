# CX-0158-2 Car SBOM for FOSS Compliance v1.0.0

## ABSTRACT

This standard facilitates the exchange of information about Free and Open Source Software (FOSS) compliance, in
particular on licenses for embedded car software, by means of Catena-X.
It defines the information and the structure required for the validation of FOSS compliance of car software and formally
specifies the data format and conformance profiles by building on the CX-0158 Car SBOM standard.

## FOR WHOM IS THE STANDARD DESIGNED

This standard is designed for all participants in the automotive supply chain who need to declare, exchange, or consume
information about Free and Open Source Software (FOSS) components contained in embedded car software in order to
demonstrate FOSS license compliance.
This includes OEMs, Tier-1 and Tier-N suppliers, as well as tooling and platform providers that support the creation,
exchange, and consumption of SBOMs enriched with FOSS license information.

## 1 INTRODUCTION

> *This section is non-normative*

Embedded car software typically integrates a substantial amount of Free and Open Source Software (FOSS).
Each FOSS component is distributed under one or more licenses that impose obligations on the distributor of the embedded
software – in this case, ultimately the OEM that ships the vehicle.
Typical obligations include preserving copyright notices, providing license texts, providing attribution, and – for
so-called copyleft licenses – making the corresponding source code available to the recipient of the vehicle.

OEMs must therefore know which FOSS components are integrated into their embedded car software, the licenses under which
they are distributed, the associated copyright and attribution texts, and where the corresponding source code can be
obtained.
They must also be able to detect FOSS components whose license is incompatible with the intended distribution model of
the embedded car software (e.g., licenses that would require publication of proprietary code linked against the FOSS
part, which is often not feasible).

This standard leverages the Catena-X dataspace to enable a standardized, sovereign, and interoperable exchange of FOSS
compliance information as part of SBOMs.
It builds on the baseline SBOM specification shared across multiple Catena-X SBOM use cases (CX-0158 Car SBOM) and
extends it with FOSS-compliance-specific requirements.

### 1.1 AUDIENCE & SCOPE

This document is targeting subsets of the following roles:

- Data Provider / Consumer
- Business Application Provider
- Enablement Service Provider

This standard applies to participants and their solutions that:

- create, provide, or consume SBOMs describing FOSS components used in embedded car software,
- need to demonstrate FOSS license compliance for embedded car software through the Catena-X network, or
- develop or operate tooling that supports SBOM creation, validation, exchange, or consumption in the context of FOSS
  compliance for embedded car software.

This standard is relevant whenever FOSS components are part of embedded car software and the associated license
obligations must be made transparent across the supply chain.
It is not intended to replace or duplicate general-purpose SBOM standards but rather to provide Catena-X-specific
guidance and profiles for the FOSS compliance use case.

### 1.2 CONTEXT AND ARCHITECTURE FIT

FOSS license compliance for embedded car software requires that every participant in the connected vehicle supply chain
can identify, declare, and validate the FOSS components used in their products, including the applicable licenses,
copyright texts, attribution texts, and source-code availability information.
A Software Bill of Materials (SBOM) is the established mechanism for achieving this transparency.
Within Catena-X, the SBOM exchange is built on top of the existing dataspace infrastructure and the enablement standard Car
SBOM.

This standard defines a layered approach:

- **Baseline**: A common SBOM foundation shared across all Catena-X use cases that require
  software transparency. (CX-0158)
- **FOSS Compliance Extension**: Additional requirements specific to the FOSS compliance use case, including legal and
  business requirements derived from FOSS license obligations, extended metadata, and specific conformance criteria.
  (This standard)

Dependencies are organized such that the baseline is always fulfilled first, and use-case-specific extensions build on
top of it (adding additional, or enforcing existing requirements more strictly).

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and
notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**,
**SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in
BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X
standards. To validate that the standards are applied correctly, Catena-X employs Conformity
Assessment Bodies (CABs).

This standard acts as a use-case extension of the CX-0158 Car SBOM standard, which defines the
conformity requirements.

### 1.4 TERMINOLOGY

The following terms are especially relevant for the understanding of this standard:

**FOSS (Free and Open Source Software)**
Software that is distributed under a license recognized as a free software license or an open source license (e.g.,
licenses listed on the SPDX License List or approved by the OSI / FSF), granting users rights to use, study, modify, and
redistribute the software under the conditions stated in the respective license.

**FOSS License**
A license under which a FOSS component is distributed.
FOSS licenses define the obligations that the distributor of software that contains the FOSS component must fulfill (
e.g., preserving copyright notices, providing license texts, providing source code).

**Copyleft License**
A FOSS license that requires derivative works or, in some cases, larger combined works to be distributed under the
same (or a compatible) license, typically including the obligation to make the corresponding source code available.

**Declared License**
The license under which the upstream author of a FOSS component declares the component to be distributed (e.g., as
stated in the component's LICENSE file or in package metadata).

**Concluded License**
The license that has been concluded to apply to a FOSS component as a result of a license clearing / analysis process.
The concluded license may differ from the declared license, e.g., due to the presence of additional license headers in
source files or due to license ambiguities that have been resolved.

**Effective License**
The license whose obligations the distributor of the embedded car software ultimately has to fulfill for a given FOSS
component in its actual context of integration and distribution.

**Copyright Text**
The textual copyright notice(s) associated with a FOSS component that must be preserved and, where required by the
license, provided to the recipient of the software.

**Attribution Text**
Notices that, according to the applicable license, must be displayed or otherwise made available to the recipient of the
software, typically alongside the copyright text.

The terminology used by the Standard CX-0158 Car SBOM is also relevant for this standard.

## 2 MAIN CONTENT

> *This section is normative*

### 2.1 USE CASE CONTEXT AND BUSINESS REQUIREMENTS

#### 2.1.1 Baseline

The Catena-X Car SBOM baseline (CX-0158 Car SBOM) defines the common SBOM content that is shared across all use cases
requiring software transparency (e.g., ICTS compliance, cybersecurity, FOSS license management).
The baseline ensures a consistent foundation so that SBOMs created for one use case can be reused and extended for
others without duplication of effort.
It also regulates how SBOMs are created and shared across the entire supply chain, ensuring interoperability and data
quality.

All participants creating or exchanging SBOMs within Catena-X **MUST** conform to the baseline requirements before
applying any use-case-specific extension.
Use-case specific extensions only add to the baseline standard, or enforce existing requirements more strictly, but they
**MUST NOT** contradict or replace any baseline definitions and requirements.

A SBOM that conforms to the FOSS Compliance profile **MUST** therefore, by definition, also conform to the baseline
profile.

#### 2.1.2 FOSS Compliance Use Case: Legal and Business Requirements

OEMs need to be able to demonstrate, on the basis of the SBOM, that the embedded car software they distribute complies
with the license obligations of all integrated FOSS components.
In particular, OEMs must be able to:

- determine whether the embedded car software contains FOSS components at all,
- identify each FOSS component together with its declared and concluded license(s),
- detect FOSS components whose effective license is incompatible with the intended distribution model of the embedded
  car software (e.g., strong copyleft licenses that would require the publication of proprietary code linked against the
  FOSS part),
- display, to the recipient of the vehicle, the copyright and attribution texts required by the applicable FOSS
  licenses, and
- obtain the corresponding (uncompiled) source code of FOSS components whose license requires its delivery to the
  recipient.

In addition to the baseline, SBOMs intended for FOSS compliance **MUST** include:

- For every FOSS component (declared as such by the supplier): the declared and concluded FOSS license expression in
  SPDX format.
- For every FOSS component: the copyright text(s) that must be preserved and forwarded to the recipient of the embedded
  car software.
- For every FOSS component: the attribution text(s) that must be made available to the recipient, where required by the
  applicable license.
- For every FOSS component: information about the availability and retrieval location of the corresponding (uncompiled)
  source code, where required by the applicable license.
- A FOSS-compliance assessment per component indicating whether the component is considered compliant with the project's
  FOSS policy, together with the reasoning behind that assessment.

### 2.2 LINKS TO CENTRAL RESOURCES AND MODULARITY OF SBOMs

When dealing with modular SBOMs, the following rules apply:

- Each module **MUST** be a self-contained, valid SPDX document according to CX-0158.
- Cross-document references **MUST NOT** use the /Core/ExternalRef mechanism. Instead, they **MUST** use the mechanism
  described in CX-0158 for creating one coherent SBOM.
- The top-level SBOM **MUST** declare all direct dependencies via /Core/Relationship with the appropriate
  /Core/RelationshipType.
- Copyright texts, attribution texts, and license texts **MAY** be referenced via central registries (e.g., a central
  license/attribution repository) using the assessment URI mechanism described below, in order to avoid duplication of
  large textual artifacts across modular SBOMs.

### 2.3 FOSS COMPLIANCE EXTENSION PROFILE

This standard defines a layered conformance model. Each profile builds upon the previous one.

The FOSS Compliance profile extends the Software profile (at minimum) with requirements specific to the FOSS license
compliance use case for embedded car software.
In addition to the Software profile, an SBOM conforming to the FOSS Compliance profile **MUST** include:

- /SimpleLicensing/LicenseExpression for every FOSS component, for both the declared license
  (via a `hasDeclaredLicense` relationship) and the concluded license (via a `hasConcludedLicense` relationship).
- /Software/Package.copyrightText populated with the copyright notice(s) of the component.
- /Software/Package.verifiedUsing (integrity hash) for every /Software/Package.
- /Core/ExternalIdentifier of type CPE23 for each /Software/Package.
- /SimpleLicensing/SimpleLicensingText for every FOSS license text that is not covered by a standard SPDX license
  identifier.
- at least one of the following:
  - /Software/Package.downloadLocation pointing to the upstream source of the FOSS
  - /Software/Package.packageUrl pointing to the upstream source of the FOSS

An SBOM conforming to the FOSS Compliance profile **SHOULD** additionally include:

- /Software/Package.attributionText populated with the attribution notice(s), where required by the applicable license.
- /Software/Package.downloadLocation and /Software/Package.packageUrl pointing to the upstream source of the FOSS
  component.

An SBOM conforming to the FOSS Compliance profile **MAY** additionally include:

- /Build/Build information for compiled artifacts, to establish provenance against the FOSS source code referenced in
  the SBOM.

### 2.4 SPDX LANGUAGE ELEMENTS

The following elements are in scope for this standard.

#### 2.4.1 Main Structural Elements

| Property                   | Profile  | Requirement     |
|----------------------------|----------|-----------------|
| /Core/SpdxDocument         | Core     | **REQUIRED**    |
| /Software/Sbom             | Software | **REQUIRED**    |
| /Software/SoftwareArtifact | Software | **REQUIRED**    |
| /Software/Package          | Software | **REQUIRED**    |
| /Software/File             | Software | **RECOMMENDED** |
| /Software/Snippet          | Software | **RECOMMENDED** |
| /Build/Build               | Build    | **OPTIONAL**    |

**/Core/SpdxDocument**

| Property                           | Type                               | Requirement     | Description |
|------------------------------------|------------------------------------|-----------------|-------------|
| spdxId                             | xsd:anyURI                         | **REQUIRED**    |             |
| creationInfo                       | /Core/CreationInfo                 | **REQUIRED**    |             |
| profileConformance                 | /Core/ProfileIdentifierType        | **REQUIRED**    |             |
| element                            | /Core/Element                      | **REQUIRED**    |             |
| rootElement                        | /Core/Element                      | **REQUIRED**    |             |
| comment                            | xsd:string                         | **RECOMMENDED** |             |
| dataLicense                        | /SimpleLicensing/LicenseExpression | **REQUIRED**    |             |
| name                               | xsd:string                         | **REQUIRED**    |             |
| namespaceMap                       | /Core/NamespaceMap                 | **REQUIRED**    |             |
| verifiedUsing                      | /Core/Hash                         | **RECOMMENDED** |             |
| description                        | xsd:string                         | **OPTIONAL**    |             |
| **Extension**                      |                                    |                 |             |
| extension: core.profileConformance | ENUM                               | **REQUIRED**    |             |

**/Software/Sbom**

| Property           | Type                        | Requirement     | Description |
|--------------------|-----------------------------|-----------------|-------------|
| spdxId             | xsd:anyURI                  | **REQUIRED**    |             |
| creationInfo       | /Core/CreationInfo          | **REQUIRED**    |             |
| name               | xsd:string                  | **REQUIRED**    |             |
| profileConformance | /Core/ProfileIdentifierType | **REQUIRED**    |             |
| sbomType           | /Software/SbomType          | **REQUIRED**    |             |
| element            | /Core/Element               | **REQUIRED**    |             |
| rootElement        | /Core/Element               | **REQUIRED**    |             |
| verifiedUsing      | /Core/IntegrityMethod       | **OPTIONAL**    |             |
| comment            | xsd:string                  | **OPTIONAL**    |             |
| description        | xsd:string                  | **OPTIONAL**    |             |

**/Software/Package**

| Property                                                                                                                                                                                                                                | Type                                            | Requirement     | Description                                                                                                                                                                                                                                                                                                                                                                      |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| spdxId                                                                                                                                                                                                                                  | xsd:anyURI                                      | **REQUIRED**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| creationInfo                                                                                                                                                                                                                            | /Core/CreationInfo                              | **REQUIRED**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| name                                                                                                                                                                                                                                    | xsd:string                                      | **REQUIRED**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| builtTime                                                                                                                                                                                                                               | /Core/DateTime                                  | **RECOMMENDED** |                                                                                                                                                                                                                                                                                                                                                                                  |
| copyrightText                                                                                                                                                                                                                           | xsd:string                                      | **REQUIRED**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| originatedBy                                                                                                                                                                                                                            | /Core/Agent                                     | **RECOMMENDED** |                                                                                                                                                                                                                                                                                                                                                                                  |
| packageVersion                                                                                                                                                                                                                          | xsd:string                                      | **REQUIRED**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| primaryPurpose                                                                                                                                                                                                                          | /Software/SoftwarePurpose                       | **REQUIRED**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| suppliedBy                                                                                                                                                                                                                              | /Core/Agent                                     | **REQUIRED**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| verifiedUsing                                                                                                                                                                                                                           | /Core/IntegrityMethod                           | **REQUIRED**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| description                                                                                                                                                                                                                             | xsd:string                                      | **RECOMMENDED** |                                                                                                                                                                                                                                                                                                                                                                                  |
| attributionText                                                                                                                                                                                                                         | xsd:string                                      | **RECOMMENDED** |                                                                                                                                                                                                                                                                                                                                                                                  |
| downloadLocation                                                                                                                                                                                                                        | xsd:anyURI                                      | **RECOMMENDED** | ATTENTION: if not present packageUrl **MUST** be set.                                                                                                                                                                                                                                                                                                                            |
| homePage                                                                                                                                                                                                                                | xsd:anyURI                                      | **RECOMMENDED** |                                                                                                                                                                                                                                                                                                                                                                                  |
| packageUrl                                                                                                                                                                                                                              | xsd:anyURI                                      | **RECOMMENDED** | ATTENTION: if not present downloadLocation **MUST** be set.                                                                                                                                                                                                                                                                                                                      |
| releaseTime                                                                                                                                                                                                                             | /Core/DateTime                                  | **RECOMMENDED** |                                                                                                                                                                                                                                                                                                                                                                                  |
| supportLevel                                                                                                                                                                                                                            | /Core/SupportType                               | **RECOMMENDED** |                                                                                                                                                                                                                                                                                                                                                                                  |
| validUntilTime                                                                                                                                                                                                                          | /Core/DateTime                                  | **RECOMMENDED** |                                                                                                                                                                                                                                                                                                                                                                                  |
| comment                                                                                                                                                                                                                                 | xsd:string                                      | **OPTIONAL**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| sourceInfo                                                                                                                                                                                                                              | xsd:string                                      | **OPTIONAL**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| externalIdentifier                                                                                                                                                                                                                      | /Core/ExternalIdentifier                        | **OPTIONAL**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| - CPE23 (mandatory per component)                                                                                                                                                                                                       | CPE 2.3                                         | **REQUIRED**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| - cve (for vulnerabilities)                                                                                                                                                                                                             | CVE Identifier                                  | **OPTIONAL**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| externalRef                                                                                                                                                                                                                             | /Core/ExternalRef                               | **OPTIONAL**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| - bom                                                                                                                                                                                                                                   | BOM                                             | **RECOMMENDED** |                                                                                                                                                                                                                                                                                                                                                                                  |
| - securityAdvisory                                                                                                                                                                                                                      | VEX                                             | **OPTIONAL**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| - vulnerabilityExploitability Assessment                                                                                                                                                                                                | OpenVex                                         | **OPTIONAL**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| - securityFix                                                                                                                                                                                                                           | VEX                                             | **OPTIONAL**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| - securityPolicy                                                                                                                                                                                                                        | VEX                                             | **OPTIONAL**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| - securityThreatModel                                                                                                                                                                                                                   | VEX                                             | **OPTIONAL**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| - vcs                                                                                                                                                                                                                                   | VCS                                             | **RECOMMENDED** |                                                                                                                                                                                                                                                                                                                                                                                  |
| constraint: downloadLocation or packageUrl                                                                                                                                                                                              | logical constraint                              | **REQUIRED**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| constraint: for every /Software/Package object **MUST** exist exactly one /Core/Relationship object of type hasConcludedLicense having that element as its from property and an /SimpleLicensing/AnyLicenseInfo as its to property.     | /Core/Relationship [type="hasConcludedLicense"] | **REQUIRED**    |                                                                                                                                                                                                                                                                                                                                                                                  |
| constraint: for every /Software/Package object **MUST** exist exactly one /Core/Relationship object of type hasDeclaredLicense having that element as its from property and /SimpleLicensing/AnyLicenseInfo object as its to property.  | /Core/Relationship [type="hasDeclaredLicense"]  | **REQUIRED**    |                                                                                                                                                                                                                                                                                                                                                                                  |

**/Software/File**

| Property                                                | Type | Requirement | Description |
|---------------------------------------------------------|------|-------------|-------------|
| Specification at work. Property-set similar to package. |      |             |             |

**/Software/Snippet**

| Property                                                | Type | Requirement | Description |
|---------------------------------------------------------|------|-------------|-------------|
| Specification at work. Property-set similar to package. |      |             |             |

**/Build/Build**

| Property                                            | Type                  | Requirement  | Description |
|-----------------------------------------------------|-----------------------|--------------|-------------|
| spdxId                                              | xsd:anyURI            | **OPTIONAL** |             |
| creationInfo                                        | /Core/CreationInfo    | **OPTIONAL** |             |
| name                                                | xsd:string            | **OPTIONAL** |             |
| buildEndTime                                        | /Core/DateTime        | **OPTIONAL** |             |
| buildId                                             | xsd:string            | **OPTIONAL** |             |
| buildStartTime                                      | /Core/DateTime        | **OPTIONAL** |             |
| buildType                                           | xsd:anyURI            | **OPTIONAL** |             |
| configSourceDigest                                  | /Core/Hash            | **OPTIONAL** |             |
| configSourceEntrypoint                              | xsd:string            | **OPTIONAL** |             |
| configSourceUri                                     | xsd:anyURI            | **OPTIONAL** |             |
| environment                                         | /Core/DictionaryEntry | **OPTIONAL** |             |
| parameter                                           | /Core/DictionaryEntry | **OPTIONAL** |             |
| verifiedUsing                                       | IntegrityMethod       | **OPTIONAL** |             |
| comment                                             | xsd:string            | **OPTIONAL** |             |
| description                                         | xsd:string            | **OPTIONAL** |             |
| **Extension**                                       |                       |              |             |
| extension: compliance.icts.version                  | xsd:string            | **OPTIONAL** |             |
| extension: compliance.icts.assessmentUri            | xsd:uri               | **OPTIONAL** |             |
| extension: compliance.icts.isCompliant              | xsd:boolean           | **OPTIONAL** |             |
| extension: compliance.icts.complianceTarget         | ENUM                  | **OPTIONAL** |             |
| extension: compliance.icts.complianceMethod         | ENUM                  | **OPTIONAL** |             |
| extension: compliance.icts.producesCoveredArtifacts | xsd:boolean           | **OPTIONAL** |             |
| extension: compliance.icts.reasoning                | ENUM                  | **OPTIONAL** |             |
| extension: compliance.icts.signature                | xsd:string            | **OPTIONAL** |             |
| extension: compliance.icts.signedOffBy              | xsd:string            | **OPTIONAL** |             |
| extension: compliance.icts.mail                     | xsd:string            | **OPTIONAL** |             |
| extension: compliance.icts.phone                    | xsd:string            | **OPTIONAL** |             |
| extension: compliance.icts.confidentiality          | ENUM                  | **OPTIONAL** |             |

#### 2.4.2 Main Shared Elements

| Property               | Type       | Requirement  |
|------------------------|------------|--------------|
| /Core/Agent            | Superclass | **REQUIRED** |
| ├──/Core/Person        | Subclass   | **OPTIONAL** |
| ├──/Core/Organization  | Subclass   | **OPTIONAL** |
| ├──/Core/SoftwareAgent | Subclass   | **OPTIONAL** |

**/Core/Agent**

| Property                                         | Type               | Requirement  | Description |
|--------------------------------------------------|--------------------|--------------|-------------|
| spdxId                                           | xsd:anyURI         | **REQUIRED** |             |
| creationInfo                                     | /Core/CreationInfo | **REQUIRED** |             |
| name                                             | xsd:string         | **REQUIRED** |             |
| comment                                          | xsd:string         | **OPTIONAL** |             |
| description                                      | xsd:string         | **OPTIONAL** |             |
| summary                                          | xsd:string         | **OPTIONAL** |             |
| **Extension**                                    |                    |              |             |
| extension: compliance.icts.version               | xsd:string         | **OPTIONAL** |             |
| extension: compliance.icts.isCompliant           | xsd:boolean        | **OPTIONAL** |             |
| extension: compliance.icts.isCoveredEntity       | xsd:boolean        | **OPTIONAL** |             |
| extension: compliance.icts.countryOfOrigin       | xsd:string         | **OPTIONAL** |             |
| extension: compliance.icts.nationality           | xsd:string         | **OPTIONAL** |             |
| extension: compliance.icts.jurisdiction          | xsd:string         | **OPTIONAL** |             |
| extension: compliance.icts.underForeignDirection | xsd:boolean        | **OPTIONAL** |             |
| extension: compliance.icts.legalAddress          | xsd:string         | **OPTIONAL** |             |
| extension: compliance.icts.signature             | xsd:string         | **OPTIONAL** |             |
| extension: compliance.icts.signedOffBy           | xsd:string         | **OPTIONAL** |             |
| extension: compliance.icts.mail                  | xsd:string         | **OPTIONAL** |             |
| extension: compliance.icts.phone                 | xsd:string         | **OPTIONAL** |             |
| extension: compliance.icts.confidentiality       | ENUM               | **OPTIONAL** |             |

**/Core/Person**

Extends: /Core/Agent

| Property                                      | Type       | Requirement  | Description |
|-----------------------------------------------|------------|--------------|-------------|
| **Extension**                                 |            |              |             |
| extension: compliance.icts.`<oem>`.employeeID | xsd:string | **OPTIONAL** |             |

**/Core/Organization**

Extends: /Core/Agent

| Property                                      | Type       | Requirement  | Description |
|-----------------------------------------------|------------|--------------|-------------|
| **Extension**                                 |            |              |             |
| extension: compliance.icts.`<oem>`.supplierID | xsd:string | **OPTIONAL** |             |

**/Core/SoftwareAgent**

Extends: /Core/Agent

| Property                        | Type | Requirement | Description |
|---------------------------------|------|-------------|-------------|
| Property-set similar to parent. |      |             |             |

#### 2.4.3 Supporting Elements

| Property                                                                                    | Type | Requirement  | Description |
|---------------------------------------------------------------------------------------------|------|--------------|-------------|
| /Core/Relationship                                                                          |      | **REQUIRED** |             |
| type="contains": /Core/Organization : /Core/Organization                                   |      |              |             |
| type="contains": /Core/Organization : /Core/Person                                          |      |              |             |
| type="contains": /Core/Package : /Core/Package                                              |      |              |             |
| type="contains": /Core/Package : /Core/File                                                 |      |              |             |
| type="contains": /Core/File : /Core/Snippet                                                 |      |              |             |
| type="contains": /Hardware/ProductSpecification : /Hardware/ProductSpecification            |      | **OPTIONAL** |             |
| type="dependsOn": /Build/Build : /Build/Build                                               |      |              |             |
| type="hasDeclaredLicense": /Core/Element : /SimpleLicensing/LicenseExpression               |      |              |             |
| type="hasHost": /Build/Build : /Core/SoftwareAgent                                          |      |              |             |
| type="hasInput": /Build/Build : /Software/Package                                           |      |              |             |
| type="hasInput": /Build/Build : /Software/File                                              |      |              |             |
| type="hasOutput": /Build/Build : /Software/Package                                          |      |              |             |
| type="hasOutput": /Build/Build : /Software/File                                             |      |              |             |
| type="invokedBy": /Build/Build : /Core/Agent                                                |      |              |             |
| type="modifiedBy": /Software/SoftwareArtifact : /Core/Person                               |      |              |             |
| type="publishedBy": /Core/Tool : /Core/Agent                                                |      |              |             |
| type="publishedBy": /Core/SoftwareAgent : /Core/Agent                                      |      |              |             |
| type="useTool": /Build/Build : /Core/Tool                                                   |      |              |             |
| type="useTool": /Core/SpdxDocument : /Core/Tool                                             |      |              |             |
| type="useTool": /Core/SoftwareAgent : /Core/Tool                                            |      |              |             |
| /Core/RelationshipType                                                                      | ENUM | **REQUIRED** |             |
| /Core/ProfileIdentifierType                                                                 | ENUM | **REQUIRED** |             |
| /Core/MediaType                                                                             | ENUM | **OPTIONAL** |             |
| /Core/ExternalRef                                                                           |      | **OPTIONAL** |             |
| /Core/ExternalRefType                                                                       | ENUM | **OPTIONAL** |             |
| /Core/Hash                                                                                  |      | **REQUIRED** |             |
| /Core/HashAlgorithm                                                                         | ENUM | **REQUIRED** |             |
| /Core/CreationInfo                                                                          |      | **REQUIRED** |             |
| /Software/SoftwarePurpose                                                                   | ENUM | **OPTIONAL** |             |
| /SimpleLicensing/LicenseExpression                                                          |      | **REQUIRED** |             |
| /SimpleLicensing/SimpleLicensingText                                                        |      | **REQUIRED** |             |
| /Security/Vulnerability                                                                     |      | **OPTIONAL** |             |
| /Security/VexAffectedVulnAssessmentRelationship                                             |      | **OPTIONAL** |             |
| /Security/VexFixedVulnAssessmentRelationship                                                |      | **OPTIONAL** |             |
| /Security/VexNotAffectedVulnAssessmentRelationship                                          |      | **OPTIONAL** |             |

**/Core/Relationship**

| Property         | Type                           | Requirement     | Description |
|------------------|--------------------------------|-----------------|-------------|
| spdxId           | xsd:anyURI                     | **REQUIRED**    |             |
| creationInfo     | /Core/CreationInfo             | **REQUIRED**    |             |
| relationshipType | /Core/RelationshipType         | **REQUIRED**    |             |
| from             | /Core/Element                  | **REQUIRED**    |             |
| to               | /Core/Element                  | **REQUIRED**    |             |
| verifiedUsing    | /Core/IntegrityMethod          | **RECOMMENDED** |             |
| completeness     | /Core/RelationshipCompleteness | **RECOMMENDED** |             |
| name             | xsd:string                     | **RECOMMENDED** |             |
| endTime          | /Core/DateTime                 | **RECOMMENDED** |             |
| startTime        | /Core/DateTime                 | **RECOMMENDED** |             |
| comment          | xsd:string                     | **OPTIONAL**    |             |
| description      | xsd:string                     | **OPTIONAL**    |             |

**type="contains": /Core/Organization : /Core/Organization**

| Property                    | Type | Requirement | Description |
|-----------------------------|------|-------------|-------------|
| No dedicated requirements.  |      |             |             |

**type="contains": /Core/Organization : /Core/Person**

| Property  | Type           | Requirement     | Description |
|-----------|----------------|-----------------|-------------|
| startTime | /Core/DateTime | **OPTIONAL**    |             |
| endTime   | /Core/DateTime | **OPTIONAL**    |             |

**type="hasHost": /Build/Build : /Core/SoftwareAgent**

| Property                        | Type | Requirement     | Description |
|---------------------------------|------|-----------------|-------------|
| **Extension**                   |      |                 |             |
| extension: core.agent.usageType | ENUM | **OPTIONAL**    |             |

**type="hasInput": /Build/Build : /Software/File**

| Property                                     | Type        | Requirement  | Description |
|----------------------------------------------|-------------|--------------|-------------|
| **Extension**                                |             |              |             |
| extension: compliance.icts.isCoveredArtifact | xsd:boolean | **OPTIONAL** |             |

**type="hasOutput": /Build/Build : /Software/File**

| Property                                     | Type        | Requirement  | Description |
|----------------------------------------------|-------------|--------------|-------------|
| **Extension**                                |             |              |             |
| extension: compliance.icts.isCoveredArtifact | xsd:boolean | **OPTIONAL** |             |

**type="modifiedBy": /Software/SoftwareArtifact : /Core/Person**

| Property                                   | Type        | Requirement  | Description |
|--------------------------------------------|-------------|--------------|-------------|
| **Extension**                              |             |              |             |
| extension: software.commit.message         | xsd:string  | **OPTIONAL** |             |
| extension: software.commit.hash            | xsd:string  | **OPTIONAL** |             |
| extension: software.commit.time            | xsd:string  | **OPTIONAL** |             |
| extension: software.commit.file            | xsd:string  | **OPTIONAL** |             |
| extension: software.commit.signature       | xsd:string  | **OPTIONAL** |             |
| extension: compliance.icts.version         | xsd:string  | **OPTIONAL** |             |
| extension: compliance.icts.isCompliant     | xsd:boolean | **OPTIONAL** |             |
| extension: compliance.icts.signature       | xsd:string  | **OPTIONAL** |             |
| extension: compliance.icts.signedOffBy     | xsd:string  | **OPTIONAL** |             |
| extension: compliance.icts.reasoning       | ENUM        | **OPTIONAL** |             |
| extension: compliance.icts.confidentiality | ENUM        | **OPTIONAL** |             |

**type="useTool": /Build/Build : /Core/Tool**

| Property                       | Type | Requirement     | Description |
|--------------------------------|------|-----------------|-------------|
| **Extension**                  |      |                 |             |
| extension: core.tool.usageType | ENUM | **RECOMMENDED** |             |

**type="useTool": /Core/SpdxDocument : /Core/Tool**

| Property                       | Type | Requirement     | Description |
|--------------------------------|------|-----------------|-------------|
| **Extension**                  |      |                 |             |
| extension: core.tool.usageType | ENUM | **RECOMMENDED** |             |

**/Core/ExternalRef**

| Property        | Type                  | Requirement     | Description |
|-----------------|-----------------------|-----------------|-------------|
| externalRefType | /Core/ExternalRefType | **OPTIONAL**    |             |
| locator         | xsd:string            | **OPTIONAL**    |             |
| contentType     | /Core/MediaType       | **RECOMMENDED** |             |
| comment         | xsd:string            | **OPTIONAL**    |             |

**/Core/Hash**

| Property  | Type                | Requirement     | Description |
|-----------|---------------------|-----------------|-------------|
| algorithm | /Core/HashAlgorithm | **REQUIRED**    |             |
| hashValue | xsd:string          | **REQUIRED**    |             |
| comment   | xsd:string          | **RECOMMENDED** |             |

**/Core/CreationInfo**

| Property     | Type           | Requirement  | Description |
|--------------|----------------|--------------|-------------|
| created      | /Core/DateTime | **REQUIRED** |             |
| createdBy    | /Core/Agent    | **REQUIRED** |             |
| createdUsing | /Core/Tool     | **OPTIONAL** |             |
| specVersion  | /Core/SemVer   | **OPTIONAL** |             |
| comment      | xsd:string     | **OPTIONAL** |             |

**/SimpleLicensing/LicenseExpression**

| Property           | Type               | Requirement     | Description |
|--------------------|--------------------|-----------------|-------------|
| spdxId             | xsd:anyURI         | **REQUIRED**    |             |
| creationInfo       | /Core/CreationInfo | **REQUIRED**    |             |
| licenseExpression  | xsd:string         | **REQUIRED**    |             |
| licenseListVersion | /Core/SemVer       | **RECOMMENDED** |             |
| comment            | xsd:string         | **RECOMMENDED** |             |
| description        | xsd:string         | **OPTIONAL**    |             |
| name               | xsd:string         | **OPTIONAL**    |             |

**/SimpleLicensing/SimpleLicensingText**

| Property     | Type               | Requirement     | Description |
|--------------|--------------------|-----------------|-------------|
| spdxId       | xsd:anyURI         | **REQUIRED**    |             |
| creationInfo | /Core/CreationInfo | **REQUIRED**    |             |
| licenseText  | xsd:string         | **REQUIRED**    |             |
| comment      | xsd:string         | **RECOMMENDED** |             |
| description  | xsd:string         | **OPTIONAL**    |             |

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX-0158 Car SBOM v1.0.0 (and all references of CX-0158, recursively)

### 3.2 NON-NORMATIVE REFERENCES

- SPDX License List: https://spdx.org/licenses/
- Package URL (PURL) Specification: https://github.com/package-url/purl-spec
- All references of CX-0158, recursively

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
