---
position: 2
tags:
  - CAT/Enablement Service Provider
  - CAT/Digital Twin Registry aaS
  - CAT/Digital Twin Registry
  - CAT/Semantic
  - CAT/Digital Twin
---

# CX-0002 Digital Twins in Catena-X v2.2.0

## ABSTRACT

The Catena-X network is about accessing/sharing/providing/using data,
formulated in the different use cases. This standardization
scenario is about how the data, and the data models look like and how the modelling has to be done, so that data between
ecosystem partners can be shared, lossless and in a machine-readable
way. This document focuses on Digital Twins and their application and
administration within Catena-X.

The purpose of this standard is to provide concepts and
specifications in order to allow proper data provisioning with
Digital Twins in Catena-X.

## FOR WHOM IS THE STANDARD DESIGNED

This standard is designed as an implementable specification and thus
is relevant for all technical roles concerned with APIs and Data Exchange
in the Catena-X network

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

- Remove all normative references to the EDC implementation
- Declare outdated typization mechanism (asset:prop:type) optional

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

This standard is relevant for

- data provider / consumer
- solution provider

The standard is applicable in the following cases for the
following roles:

- all data providers who need to provide information via Digital Twins
- all data consumers and business application provider who need access
  to data provided via Digital Twins
- solution providers of a Digital Twin Registry
- onboarding service providers who need to offer core service of a
  Digital Twin Registry to their customers
- enabling service providers who need access to data provided via Digital Twins
- consulting service providers who need to explain how Digital Twins are implemented and/or used

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

Catena-X creates a decentral, uniform, and consistent solution for data sharing
in automotive industry. In this context, the
exchange of data is an essential requirement for the
success of this network. For this purpose, Catena-X provides various
methods, tools, and standards to ensure semantic interoperability.
Digital Twins have established themselves here as a central element for
structuring and accessing data. With the help of defined semantics, both
data provisioning and app development are simplified and encouraged.

#### 1.2.1 Digital Twins in Catena-X

The term Digital Twin (DT) describes a digital representation of an asset sufficient
to meet the requirements of a set of use cases.

Any asset - it can be an actual physical asset like an engine hood
but also something virtual like a web service - has a digital
representation with consistent semantics. Hence, Digital Twins adhere to
the following characteristics:

- The DT has at least one Catena-X-wide unique identifier (ID).

- An asset can have more than one DT. However, each DTR may only contain a single DT for each asset.

- DTs organize a set of Aspects. A DT's set of aspects can be extended over lifetime.

- An Aspect of a DT includes both structural and behavioral
  data and models, including operations and simulation models.

- The semantics of an Aspect can be described via semantic models.

- A single Aspect can be connected to different heterogeneous data
  sources, including behavioral models.

- The DT can represent type assets (*e.g.*, virtual prototype of a car)
  and instance assets (*e.g.*, real car).

- A DT can cover the whole asset lifecycle including, *e.g.*, the
  planning, production, sales, use, and decommissioning phases.
  However, in practice there may be more than one twin with different
  IDs representing different lifecycle phases, *e.g.*, one twin for types
  and multiple twins for instances.

- The DT represents current available information about an asset,
  synchronized at a specified frequency and fidelity, which can be
  leveraged for simulation and business process integration.

- By using Aspects, a DT can reference other DTs to express \"part
  of\" or \"consists of\" relations.

- In the context of Catena-X Digital Twins are exposed to the Catena-X Dataspace according to the
  Dataspace Protocol (DSP).

#### 1.2.2 Digital Twin Registry

A Digital Twin Registry (DTR) is an operated solution which lists Digital
Twins and their respective Aspects. Each Digital Twin represents a single asset.
Some basic information about the asset being represented is part of each entry in a DTR.

For each asset, several data sets in form of Aspects can be provided.
These Aspects are referenced in each Digital Twin together with
information about access to the Aspect endpoints.

Moreover, a DTR also offers basic discovery functionality to find
Digital Twin(s) representing an asset under consideration.

In general, every data provider in the dataspace must decide how and where to operate a DTR.

The data provider needs to register all their Digital Twins including its respective Aspects
to its DTR service in order to reveal its \"offer\" of sharing respective
data sets.

The data offered by a Digital Twin via Aspects should be semantically described by a
semantic Aspect metamodel conformant to CX-0003.

#### 1.2.3 Asset Administration Shell

The Asset Administration Shell (AAS) is a key concept of Industry 4.0
(or "Industrie 4.0" in German), maintained by the [Industrial Digital Twin
Association](https://industrialdigitaltwin.org) (IDTA), and is used to describe an asset
electronically in a standardized manner. The AAS is a standardized way to implement a Digital Twin.
One of the main concepts of the AAS is the concept of Submodels, each of which can characterize the
asset by describing its Aspects for different use cases and data consumers.

The specifications of the AAS offers a set of standardized API methods and resources to access data of a Digital Twin.

Also, an Asset Administration Shell Registry service and other services in the context of Digital
Twins are standardized.

In Catena-X the semantics of a Submodel is described via an Aspect Model conformant to standard CX-0003,
preferrable by using standardized properties conformant to standard CX-0044.

The following figure gives a high-level overview how the concepts relevant for this standard relate
with each other and concepts from neighboring domains.
![Terminology](./assets/CX-0002-picture2.png "Non-normative overview of relations between terms relevant
in CX - 0002")

In general, the AAS has proven to be suitable for the following missions:

- representing data exchanged in a standardized way between two parties (API payload)

- Providing uniform access to data exchanged between two parties (API operations)

- Data discovery for the asset under consideration for
  exchange between two parties in a standardized way (Digital Twin Registry)

The [Asset Administration Shell Reading Guide](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/2022-12-07_IDTA_AAS-Reading-Guide.pdf)
gives an overview for different stakeholders.
This reading guide together with detailed technical documentation can be found in the Content Hub of the IDTA and on GitHub:
[https://github.com/admin-shell-io/aas-specs](https://github.com/admin-shell-io/aas-specs).

#### 1.2.4 Architecture Overview

The Digital Twin Registry (DTR) component is a decentral component in the Catena-X dataspace. Typically, each data provider offers its own DTR, either using an enablement service provider that also operates the DTR for the data provider or operating it themselves.

The DTR does not only contain pure registration functionality but also basic
discovery functionality based on asset identifiers. The corresponding APIs for this kind of discovery are
specified in this document.

A DTR is accessed via a dataspace connector conformant to standard CX-0018. Business solutions first need to find the relevant connectors and thus negotiate with them for the relevant DTR. Additionally to EDC Discovery (see standard CX-0001), additional discovery services (see standard CX-0053) are provided to reduce the number of dataspace connectors that need to be accessed by the business application.

![TwinArch](./assets/CX-0002-picture1.jpg "Pattern for decentralized Digital Twin Registry")

### 1.3 CONFORMANCE

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines,
diagrams, examples, and notes in this specification are non-normative.
Everything else in this specification is normative.

The keywords MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,
SHOULD and SHOULD NOT in this document are to be interpreted as described in \[[BCP
14](https://datatracker.ietf.org/doc/html/bcp14)], \[[RFC2119](https://www.w3.org/TR/did-core/#bib-rfc2119)\],
\[[RFC8174](https://www.w3.org/TR/did-core/#bib-rfc8174)\] when, and
only when, they appear in all capitals, as shown here.

### 1.4 PROOF OF CONFORMITY

All participants and their solutions will need to prove that they
conform to the Catena-X standards. To validate that the standards are
applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).

#### 1.4.1 Proof of Conformity for Digital Twin Registry Solutions

A Digital Twin Registry solution MUST provide http/REST APIs conformant
to the openAPI specifications adopted in this document.

In case the Digital Twin Registry solution already has a valid certificate of the
[Industrial Digital Twin Association](https://industrialdigitaltwin.org) (IDTA) including the
required service specification profiles the simplified certification process of Catena-X e.V. holds.

If there is no valid certificate available from the IDTA, Digital Twin Registry solution providers
MUST prove their conformity by providing:

- An openAPI specification of the implemented endpoints.
- Documentation that the implementation's API responses match to the response structure of the required API specifications in this document.

A Digital Twin Registry Solution MUST include mechanisms that allow to ensure confidentiality and integrity of data, and compliance with antitrust laws.

On default, the read access to Digital Twins SHOULD be enabled by Digital Twin Registry Solutions to data providers only.

#### 1.4.2 Proof of Conformity for Data Providers

A data provider MUST offer the http/REST APIs for its Digital Twin Registry service conformant to
this specification.

In case the Digital Twin Registry solution already has a valid certificate of the
[Industrial Digital Twin Association](https://industrialdigitaltwin.org) (IDTA) including the
required service specification profiles the simplified certification process of Catena-X e.V. holds.

The Digital Twin Registry service used by the data provider MUST be registered in the dataspace connector selected
by the data provider.

A data provider MAY create and register Digital Twins using the
http/REST APIs conformant to the openAPI specification as defined in
this document.

The data provider MUST offer the READ operations for Digital Twins and its Aspects conformant to
this specification.

The endpoints offered by the data provider MUST be made accessible to the dataspace
as specified in this document or other use case related standards.

Appropriate usage policies conformant to standard CX-0018 and subsequent use-case-standards MUST be defined for accessing the Digital Twin Registry itself as well as for the Submodels.

Data providers MUST comply with antitrust law, *i.e.*, competitively sensitive information (*e.g.* customer names, supplier names, prices, price models, internal knowhow, sales and/or purchasing strategies) MUST NOT be published via a DTR.

The data provider SHOULD use the unique identifier of the standardized Aspect Model conformant to CX-0003 when registering a new Submodel endpoint to a DTR.

A data provider SHOULD add specific asset IDs for each Digital Twin to enable discovery.
Other CX-standards may make more specific demands for Data Providers which specific assetIDs are to be added.

A data provider SHOULD add information to available discovery services conformant to standard CX-0001 and
CX-0053 - if available - to enable data consumers to find the relevant DSP-endpoints and thus the Digital Twin Registry
the data consumer is interested in.

#### 1.4.3 Proof of Conformity for Data Consumers

A data consumer, business application provider or enabling service
provider MAY lookup the endpoints of the Submodels relevant for the use
case using the http/REST APIs conformant to the openAPI specification as
defined in this document.

Since there are several Digital Twin Registries in the dataspace data
consumers, business application providers or enabling service providers
MAY first lookup the available Digital Twin Registry endpoints of the
relevant dataspace connectors using the corresponding standardized EDC discovery services (see standard CX-0001).

Additionally, data consumers MAY use standardized discovery services -
if available -, *e.g.*, to find a relevant dataspace connector for a specific company via its
BPN (see standard CX-0053).

### 1.5 Examples

Examples can be found in
[the Tractus-X DTR's documentation](https://github.com/eclipse-tractusx/sldt-digital-twin-registry/tree/main/docs) and the [Digital Twin Kit](https://eclipse-tractusx.github.io/docs-kits/24.08/category/digital-twin-kit/)

### 1.6 Terminology

> *This section is non-normative*

#### Aspect

> a domain-specific view on information and functionality associated with
a specific *[Digital Twin](#digital-twin)* with a reference to a concrete *[Aspect Model](#aspect-model)*.

Note 1 to entry: An Aspect is a software service to retrieve the actual
runtime data of a Digital Twin (current or aggregated) from a data
source or to trigger operations. Thus, an Aspect is built with an
implementation that ensures that the exchanged data is compliant to the
specification of the referenced Aspect Model via a defined
interface.

Note 2 to entry: Aspects are registered (incl. their "API endpoint"
information) within the Digital Twin to which they belong in the
Digital Twin Registry.

Note 3 to entry: an Aspect corresponds to a *[Submodel](#submodel)* in the *[Asset Administration Shell](#asset-administration-shell)*

*\[SOURCE: [Eclipse Semantic Modeling Framework (ESMF)](https://projects.eclipse.org/projects/dt.esmf), editorial changes and notes
added\]*

#### Aspect Model

> a formal, machine-readable semantic description (expressed with
RDF/turtle) of data accessible from an *[Aspect](#aspect)*.

Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta
Model (SAMM), *i.e.*, it utilizes elements and relations defined in the
SAMM and is compliant with the validity rules
defined by the SAMM.

Note 2 to entry: Aspect Models are logical data models which can be used
to detail a conceptual model in order to describe the semantics of
runtime data related to a concept. Further, elements of an Aspect Model
can/should refer to terms of a standardized Business Glossary (if
existing).

Note 3 to entry: An Aspect Model may describe the semantics of a *[Submodel](#submodel)*.

\[SOURCE: [Eclipse Semantic Modeling Framework (ESMF)](https://projects.eclipse.org/projects/dt.esmf), editorial changes and notes added\]

#### Asset Administration Shell

> standardized *[digital representation](#digital-representation)* of an asset

Note 1 to entry: Asset Administration Shell and Administration Shell are
used synonymously.

\[SOURCE: IEC 63278-1, note added\]

#### Digital Twin

> *[digital representation](#digital-representation)*, sufficient to meet the requirements of a set of
use cases

Note 1 to entry: in this context, the entity in the definition of
digital representation is typically an asset.

*\[SOURCE: IIC Vocabulary IIC:IIVOC:V2.3:20201025, adapted (an asset,
process, or system was changed to an asset)\]*

#### Digital Representation

> information and services representing an entity from a given

EXAMPLE 1: examples of information are properties (*e.g.*, maximum
temperature), actual parameters (*e.g.*, actual velocity), events (*e.g.*,
notification of status change), schematics (electrical), and
visualization information (2D and 3D drawings).

EXAMPLE 2: examples of services are providing the history of the
configuration data, providing the actual velocity, and providing a
simulation.

EXAMPLE 3: examples of viewpoints are mechanical, electrical, or
commercial characteristics.

\[SOURCE: IEC 63278-1, editorial changes\]

#### Submodel

> container of *[SubmodelElements](#submodel-element)* defining a hierarchical structure
consisting of SubmodelElements

\[SOURCE: IEC 63278-1\]

#### Submodel Element

> elements in a *[Submodel](#submodel)*

\[SOURCE: IEC 63278-1\]

## 2. Digital Twin Registry API for Solution Providers \[NORMATIVE\]

### 2.1 API Specification

#### 2.1.1 Standards and Profiles

The specification
*[Specification of the Asset Administration Shell - Part 2: Application Programming Interfaces](#61-normative-references)*
is the basis for the Digital Twin Registry implementation in Catena-X.
The document can be found in the content hub of IDTA: [https://industrialdigitaltwin.org/content-hub](https://industrialdigitaltwin.org/content-hub).

The API is offered as OpenAPI file in addition to its formal specification published on [https://industrialdigitaltwin.org/](https://industrialdigitaltwin.org/).

For relevant profiles of the Service Specifications see chapters on *[API endpoints & resources](#212-api-endpoints--resources)*.

#### 2.1.2 API Endpoints & resources

The API MUST be implemented as specified for the profiles:

- *[Asset Administration Shell Registry Service Specification V3.0 READ Profile SSP-002](https://app.swaggerhub.com/apis/Plattform_i40/AssetAdministrationShellRegistryServiceSpecification/V3.0_SSP-002)*

- *[Discovery Service Specification V3.0 Profile SSP-001](https://app.swaggerhub.com/apis/Plattform_i40/DiscoveryServiceSpecification/V3.0_SSP-001)*

The following profile SHOULD be implemented:

- *[Asset Administration Shell Registry Service Specification V3.0 Profile SSP-001](https://app.swaggerhub.com/apis/Plattform_i40/AssetAdministrationShellRegistryServiceSpecification/V3.0_SSP-001)*

The following deviations are defined:

- Length of *ProtocolInformation/subprotocolBody* string MUST be 2048
- DELETE and POST operations of Discovery Interface are optional to be implemented
- *GetAllAssetAdministrationShellIdsByAssetLink* (`GET /lookup/shells`) is deprecated and will be succeeded in future releases.

EXAMPLE for Self-Description (**GetSelfDescription**) of a Digital Twin Registry solution :

```json
{
  "profiles": [
    "https://admin-shell.io/aas/API/3/0/DiscoveryServiceSpecification/SSP-001",
    "https://admin-shell.io/aas/API/3/0/AssetAdministrationShellRegistryServiceSpecification/SSP-002"
   ]
}
```

API paths SHOULD be versioned only holding the major version of the AAS specification, for instance `/v3/`.

> Note: However, the version segment of the API-endpoint will usually be hidden by a Proxy (for example an EDC Data Plane) that
obfuscates the base-URL while allowing restricted client-side navigation along the path-structure defined by the AAS
specification. For instance, a consumer can assume that (when accessing a DTR) adding the path-elements
`/shell-descriptors/{{someAasId}}` will reliably yield a response containing an AAS-Descriptor.

#### 2.1.3 Available Data Types

The API MUST use JSON as the payload transported via HTTP.

For explanation of data types see *[Specification of the Asset Administration Shell - Part 2:
Application Programming Interfaces](#61-normative-references)*.

#### 2.1.4 Representation in DSP catalogs

Not applicable, since catalogs are created by data provider not by the DTR's solution provider.

#### 2.1.5 Error Handling

Error response **501 Not Implemented** MUST be used for operations or parameter values
not yet supported.

For other error codes and error handling see *[Specification of the Asset Administration Shell -
Part 2: Application Programming Interfaces](#61-normative-references)*.

## 3. Digital Twin Registry API for Data Providers \[NORMATIVE\]

### 3.1 API Specification

#### 3.1.1 Standards and Profiles

The specification of the [Asset Administration Shell - Part 2:
Application Programming Interfaces](#61-normative-references) is the basis for the Digital Twin Registry
implementation in Catena-X.

The API is offered as OpenAPI file in addition to its formal specification published on [https://industrialdigitaltwin.org/](https://industrialdigitaltwin.org/).

For relevant profiles of the Service Specifications see chapters on *[API endpoints & resources](#312-api-endpoints--resources)*.

#### 3.1.2 API Endpoints & resources

The API MUST be implemented as specified for the profiles:

- [Asset Administration Shell Registry Service V3.0 READ Profile SSP-002](https://app.swaggerhub.com/apis/Plattform_i40/AssetAdministrationShellRegistryServiceSpecification/V3.0_SSP-002)

- [Discovery Service Specification V3.0 Profile SSP-001](https://app.swaggerhub.com/apis/Plattform_i40/DiscoveryServiceSpecification/V3.0_SSP-001)

The WRITE operations of the following profile MAY be used to create and delete Digital Twins:

- [Asset Administration Shell Registry Service Profile V3.0 Profile SSP-001](https://app.swaggerhub.com/apis/Plattform_i40/AssetAdministrationShellRegistryServiceSpecification/V3.0_SSP-001)

The same deviations are defined as for Digital Twin solution providers.

API paths SHOULD be versioned only holding the major version of the AAS specification, for instance `/v3/`.

> Note: However, the version segment of the API-endpoint will usually be hidden by a Proxy (for example an EDC Data Plane) that obfuscates the base-URL while allowing restricted client-side navigation along the path-structure defined by the AAS specification. For instance, a consumer can assume that (when accessing a DTR) adding the path-elements `/shell-descriptors/{{someAasId}}` will reliably yield a response containing an AAS-Descriptor.

#### 3.1.3 Available Data Types

The API MUST use JSON as payload transported via HTTP.

For explanation of data types see [Specification of the Asset Administration Shell - Part 2:
Application Programming Interfaces](https://industrialdigitaltwin.org/wp-content/uploads/2023/04/IDTA-01002-3-0_SpecificationAssetAdministrationShell_Part2_API.pdf).

#### 3.1.4 Representation in DSP catalogs

A Digital Twin Registry that is made accessible via a DSP-compliant connector MUST expose the [`dcat:Dataset`](https://www.w3.org/TR/vocab-dcat-2/#Class:Dataset) representing the DTR to be registered with the following properties and restrictions on their values.

- `"dct:type": {"@id":"https://w3id.org/catenax/taxonomy#DigitalTwinRegistry"}`. The "dct" prefix MUST resolve to "http://purl.org/dc/terms/".
- `"cx-common:version"`. The "cx-common" prefix MUST resolve to "https://w3id.org/catenax/ontology/common#". The value MUST indicate the major and minor version of the implemented AAS-specification and must be at least `"3.0"`. For more details on conventions in `dcat:Catalogs`, see CX-0018.

For backward compatibility it MAY be necessary to still provide the deprecated `"asset:prop:type": "data.core.digitalTwinRegistry"` entry.

As the Digital Twin Registry is an Enablement Service that is shared across use-cases, it SHOULD be offered via a set
of policies agnostic to the FrameworkCredentials of a participant.

#### 3.1.5 Error Handling

Error response **501 Not Implemented** MUST be used for operations or parameter values
not yet supported.

For other error codes and error handling see *[Specification of the Asset Administration Shell -
Part 2: Application Programming Interfaces](#61-normative-references)*.

## 4. Submodel API for Data Providers \[NORMATIVE\]

### 4.1 API Specification

#### 4.1.1 Standards and Profiles

The [Specification of the Asset Administration Shell - Part 2:
Application Programming Interfaces](#61-normative-references)
is the basis for exchanging data via Digital Twins in Catena-X.

The API is offered as OpenAPI file in addition to its formal specification published on [https://industrialdigitaltwin.org/](https://industrialdigitaltwin.org/).

For relevant profiles of the Service Specifications see chapters on *[API endpoints & resources](#412-api-endpoints--resources)*.

API paths SHOULD be versioned only holding the major version of the AAS specification, for instance `/v3/`.

> Note: However, the version segment of the API-endpoint will usually be hidden by a Proxy (for example an EDC Data Plane) that obfuscates the base-URL while allowing restricted client-side navigation along the path-structure defined by the AAS specification. For instance, a consumer can assume that when accessing data from a single registered Submodel, adding the path-element `$value` will reliably yield a response containing the value-only serialization of a Submodel.

#### 4.1.2 API Endpoints & resources

A Submodel that provides data MUST be implemented in conformance to the API-definition of
[Submodel Service Specification V3.0 VALUE ONLY Profile SSP-003](https://app.swaggerhub.com/apis/Plattform_i40/SubmodelServiceSpecification/V3.0_SSP-003)
of the Submodel Service Specification.

---

**NOTE**
The logical operation *GetSubmodel* can be implemented in different ways. The only relevant
information for the data consumer is the endpoint information in the Digital Twin Registry.
Besides its availability in the Submodel Service Specification the *GetSubmodelById* operation is
functionally equivalent if the full path is given. It is available in
the Asset Administration Shell Service Specification as well as the Submodel Repository Service
Specification or Asset Administration Shell Repository Service Specification via superpaths.

---

The following additional restrictions apply:

- The `semanticId` of a referred Submodel MUST also be added to the Submodel Descriptor registered for the DT (*SubmodelDescriptor/semanticId*).
  - A data provider MUST use the unique identifier of the Aspect Model standardized in Catena-X conformant to standard CX-0003 when registering
    a corresponding new Aspect to a Digital Twin (*Submodel/semanticId*).
- The `subprotocol` MUST be set to "DSP" (*SubmodelDescriptor/endpoints/protocolInformation/subprotocol*).
- The `subprotocolBody` must be set according to the concatenation of the following key-value-pairs (assigned by a "=" and separated by a semicolon ";"):
  - `id` represents the id of that dcat:DataSet in the Data Providers catalog that contains the Submodel.
  - `dspEndpoint` represents the endpoint of the Data Provider's Control Plane where the catalog containing the relevant dcat:DataSet is located.
- The `href` property (*SubmodelDescriptor/endpoints/protocolInformation/href*) MUST be set to the concatenation of the relevant Data Plane endpoint concatenated with the relative path to the resource's endpoint that exposes the logical operation `GetSubmodel` or `GetSubmodelById`, respectively. A Data Consumer is allowed to attempt swapping the Data Plane endpoint if the Data Provider has signalled that it differs from the `href`. This may be signalled via the access token returned from the transfer process.

A full example satisfying these restrictions is at the end of this chapter.

Beside Aspect Models standardized in Catena-X also other Aspects may be registered, either
conformant to proprietary standards or standards from other organizations.
However, these Aspects are not fit to be used in Catena-X use cases or standards.
In either case, an Aspect Model conformant to standard CX-0003 SHOULD be made available for these Aspects.

The following deviations are allowed, *i.e.*, the following API operations and operation parameters
SHOULD be supported but these are not mandatory to be implemented.

- provision of API **/description**
- support of API operation **/submodel** (*i.e.*, logical interface operation "GetSubmodel with
  logical parameter "Content"="Normal", the API operation **/submodel/&#36;value** extending the
  default operation's URL with the parameter **/submodel/&#36;value** remains mandatory)
- support of API operation **/submodel/submodel-elements/&lt; IdShortPath &gt;/invoke** and
  **/submodel/submodel-elements/&lt; IdShortPath &gt; /invoke/&#36;value**
- support of query parameter **Extent=WithoutBLOBValue**

---

**NOTE**
for Profile SSP-003 of the Submodel Service Specification the following parameters are not included:

- no provision of API **/serialization**
- no support of logical parameter **Content=Metadata**, *i.e.*, no support of API operation with path
  parameter "&#36;metamodel" **/submodel&#36;metamodel**
- no support of logical parameter **Content=Reference**, *i.e.*, no support of API operation with
  path parameter "&#36;reference"  **/submodel/&#36;reference**
- no support of logical parameter **Content=Path**, *i.e.*, no support of API operation with path
  parameter "&#36;path"  **/submodel/&#36;path**
- no support of query parameter **Level=Core** (only of **Level=Deep**)

---

EXAMPLE for a Submodel descriptor in the DTR accessible via a DSP-compliant connector, separated in control plane and
Data Plane:

```json
{
  "id": "<unique ID of Submodel>",
  "semanticId": {
    "type": "ExternalReference",
    "keys": [
      {
        "type": "GlobalReference",
        "value": "urn:bamm:io.catenax.material_for_recycling:1.1.0#MaterialForRecycling"
      }
    ]
  },
  "endpoints": [
    {
      "protocolInformation": {
        "href": "https://edc.data.plane/<path>/submodel",
        "endpointProtocol": "HTTP",
        "endpointProtocolVersion": [
          "1.1"
        ],
        "subprotocol": "DSP",
        "subprotocolBody": "id=123;dspEndpoint=https://edc.control.plane/",
        "subprotocolBodyEncoding": "plain",
        "securityAttributes": [
          {
            "type": "NONE",
            "key": "NONE",
            "value": "NONE"
          }
        ]
      },
      "interface": "SUBMODEL-3.0"
    }
  ]
}

```

The endpoint within the SubmodelDescriptor MUST not contain the path suffix for the logical parameter "Content" like in */submodel/$value*. The data consumer will add the needed path suffix explicitly to the endpoint before calling the value-only Submodel operation.

#### 4.1.3 Available Data Types

The API MUST use JSON as payload transported via HTTP.

#### 4.1.4 Representation in DSP catalogs

Access to the Submodels of a Digital Twin MUST take into account restrictions set by policies defined for them at the
connector to the Dataspace (see standard CX-0018).

The data provider MAY cluster several Submodels into one `dcat:Dataset`.

If a single Submodel is registered as a single `dcat:Dataset`, its MUST be registered with the following restrictions on
values for given properties.

- `"dct:type": {"@id":"https://w3id.org/catenax/taxonomy#Submodel"}`. The "dct" prefix MUST resolve to "http://purl.org/dc/terms/".
- `"cx-common:version"`. The "cx-common" prefix MUST resolve to "https://w3id.org/catenax/ontology/common#". The value
MUST indicate the major and minor version of the implemented AAS-specification and must be at least `"3.0"`.

In that case, Data Providers SHOULD also add a property `aas-semantics:semanticId` that is set to the composite semanticId of the Submodel that the Asset represents. The "aas-semantics" prefix MUST resolve to "https://admin-shell.io/aas/3/0/HasSemantics/".

For more details on conventions in `dcat:Catalog`s, see CX-0018.

#### 4.1.5 Error Handling

Error response **501 Not Implemented** MUST be used for API operations and parameter values
not yet supported.

For error handling see
[Specification of the Asset Administration Shell - Part 2: Application Programming Interfaces](#61-normative-references).

## 5. Submodel API for Data Consumers \[NORMATIVE\]

The specification
[Specification of the Asset Administration Shell - Part 2: Application Programming Interfaces](#61-normative-references)
is the basis for consuming data via Digital Twins in Catena-X.

The API is offered as OpenAPI file in addition to its formal specification published on [https://industrialdigitaltwin.org/](https://industrialdigitaltwin.org/).

This is the relevant service specification profile for data consumers:

- [Submodel Service Specification V3.0 READ Profile SSP-003](https://app.swaggerhub.com/apis/Plattform_i40/SubmodelServiceSpecification/V3.0_SSP-003)

The READ API operations of the Asset Administration Shell profile SSP-003 of the Submodel Service
Specification MAY be used to access the Submodels provided by data providers.

The logical parameter "Content" is realized via path suffixes (starting with `$`) like in `/submodel/$value`. The endpoint within the Digital Twin Registry is not including the path suffixes. This is why the path suffix needs to be explicitly added to the endpoint before calling the value-only Submodel operation, ensuring type-safety for the response object. A logical parameter like "Level" is realized as query parameter.

---

**NOTE**
The logical *GetSubmodel* operation is not called explicitly by the data consumer. Instead, the
endpoint as provided via the Digital Twin Registry for the asset and *Submodel* of interest is
called with GET.
Additionally, the data consumer MAY need to set parameters before calling the API operation.

---

## 6. References

### 6.1 Normative References

- Specification of the Asset Administration Shell - Part 1: Metamodel. V3.0, April
  2023, IDTA number: 01001-3-0 On [IDTA Content Hub](https://industrialdigitaltwin.org/content-hub)

- Specification of the Asset Administration Shell - Part 2: Application Programming
  Interfaces. V3.0, April 2023, IDTA number: 01002-03-1 On [IDTA Content Hub](https://industrialdigitaltwin.org/content-hub)

### 6.2 Non-Normative References

> *This section is non-normative*

- [Asset Administration Shell Reading Guide](https://industrialdigitaltwin.org/wp-content/uploads/2022/12/2022-12-07_IDTA_AAS-Reading-Guide.pdf)

- CX-0003 SEMANTIC ASPECT META MODEL v1.1.0. In [Catena-X Standard Library](https://catena-x.net/de/standard-library)
- CX-0018 DATASPACE CONNECTIVITY v3.0.0. In [Catena-X Standard Library](https://catena-x.net/de/standard-library)
- CX-0001 EDC DISCOVERY API v1.0.2. In [Catena-X Standard Library](https://catena-x.net/de/standard-library)
- CX-0053 BPN Discovery Service APIs v1.0.1. In [Catena-X Standard Library](https://catena-x.net/de/standard-library)
- CX-0044 ECLASS v1.0.2.  In [Catena-X Standard Library](https://catena-x.net/de/standard-library)

### 6.3 Reference Implementations

> *This section is non-normative*

The following open-source project implements a Digital Twin Registry
solution conformant to this standard:

[https://github.com/eclipse-tractusx/sldt-digital-twin-registry](https://github.com/eclipse-tractusx/sldt-digital-twin-registry)

## ANNEXES

### FIGURES

> *This section is non-normative*

Terminology - "Non-normative overview of relations between terms relevant
in CX - 0002"

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
