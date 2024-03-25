---
sidebar_position: 1
---
# Who: Roles in the Catena-X ecosystem

The Catena-X ecosystem operates on the principle of multiple distinct roles, designed to create an appealing and functional data space (see [Figure Role Overview and Relationships](./who-roles-in-the-catena-x-ecosystem.md#overview-of-roles)). Participants can take on one or more roles in any combination, and multiple participants can fulfill the same role except for the CSP-B role. The CSP-B role can only exist once in the data space due to complexity and technical reasons. Provider roles receive a label through a certification or qualification process to demonstrate that they are trusted partners (see Chapter [How: Life Cycle Management](./../how-life-cycle-management/how-life-cycle-management.md)).

## Overview of roles

![Role Overview and Relationships](./assets/role-overview-and-relationships.png)
*Role Overview and Relationships*

## Detailed description of each role

Below, each role that a participant can assume in the Catena-X data spaces is described in detail, along with its assigned description, responsibilities, relationships, prerequisites, and complements. Please refer to Chapter [Role Relationships](./../appendix/appendix.md#role-relationships). for a comprehensive overview of the relationships between these roles as well as a definition of the relationship type and Chapter [What: Service Map](./../what-service-map/what-service-map.md) for an overview of the Service Map.

### Core Service Provider A

**Role:** Core Service Provider A (CSP-A)

**Description/Responsibilities**: A CSP-A is responsible for deploying, operating, and maintaining core services A according to Catena-X standards. Core Services A provide common business functionalities for all data space participants (e.g., managing marketplace offers, semantic models, or searching for business partner information).  

A CSP-A can operate various bundles of Core Services A, whereby the operation of an IAM and a marketplace is mandatory. Note that the synchronization of marketplace offers is at the discretion of a provider, who may submit and list its offer on multiple marketplaces. The CSP-A role can be taken on by multiple participants.  

For smooth operations, the CSP-A must provide comprehensive technical documentation, along with first, second, and third level support to facilitate integration with its services. Each CSP-A has freedom of choice regarding their business model towards their potential customers.

**Relationships:**

- A CSP-A **must** implement an IAM synchronization and must integrate with
other CSP-As.
- A CSP-A **must** implement an IAM synchronization with an OSP.
- A CSP-A **must** integrate with the CSP-B to be able to offer and operate its services. This includes implementing IAM synchronization and integrating with required Core Services B.
- A CSP-A **must** use the services of one of the OSPs to register and onboard itself to the data space (e.g., registration service).
- A CSP-A **must** accept any certified solution that wants to be listed on its marketplace in accordance with its respective terms and conditions, without discriminating against individual organizations.

**Prerequisites:**

- A CSP-A and its services must be certified by a CAB
- A CSP-A must accept and comply with the Catena-X regulatory framework
during onboarding via one of the OSPs.

**Limitations Release 23.09:**

- Due to technical limitations, the CSP-A role currently cannot be fully assumed and executed more than once. Further details can be found in Chapter [Increase Decentralization of Core Services](./../outlook/outlook.md#increase-decentralization-of-core-services) or can be requested during the conformity assessment.

### Core Service Provider B

**Role:** Core Service Provider B (CSP-B)

**Description/Responsibilities**: The CSP-B is responsible for deploying, operating, and maintaining all core services section B according to Catena-X standards. Core Services B include identity and common accessibility and discoverability functionalities for all data space participants.

The CSP-B operates all Core Services B as one bundle to enable trusted participation and sovereign data exchange across all data space participants. The CSP-B role can only be taken on by one participant and is nominated by the Catena-X Association to operate and further develop the services on their behalf.

For smooth operations, the CSP-B must provide comprehensive technical documentation, along with first, second, and third level support to facilitate integration with its services.

**Due to its special role, the CSP-B is responsible for:**

- providing non-discriminatory access to Core Services Section B for all data space participants.
- coordinating the release management of Core Services B in the data space (with affected participants) based on Catena-X Association and Tractus-X releases.
- marketing Core Services B and managing contractual partners.
- issuing and revoking access of BPNs to the data space based on the country clearance list by the Catena-X Association.
- temporarily executing the trust anchor role and issuing verifiable credentials.

**Relationships:**

- The CSP-B **must** support the integration of all other data space participants to the Core Services B.
- A CSP-B **must** implement an IAM synchronization with CSP-As and OSPs.

**Prerequisites:**

- A CSP-B **must** be nominated by the Catena-X Association.
- A CSP-B **must** be a Catena-X Association member.
- A CSP-B and its services **must** be certified by a CAB.
- A CSP-B **must** accept and comply with the Catena-X regulatory framework via an MoU with the Association.

**Limitations Release 23.09:**

- To ensure complete functionality of the data space, the CSP-B **must** also operate the relevant services of both the CSP-A and OSP roles.
- Further details can be found in Chapter [Increase Decentralization of Core Services](./../outlook/outlook.md#increase-decentralization-of-core-services). how Catena-X foster competition.

### Onboarding Service Provider

**Role:** Onboarding Service Provider (OSP)

**Description/Responsibilities**: An OSP is responsible for deploying, operating, and maintaining onboarding services according to Catena-X standards. The onboarding services enable and support data space participants to register and onboard and offboard to Catena-X data space.

This includes organizational registration and technical integration (see Chapter [General Onboarding](./../how-data-space-operations/how-data-space-operations.md#general-onboarding)), after which an organization can fully participate in the data space. An OSP can enable new prospects and/or their existing customer base in terms of network-of-networks. To ensure maximum trust in the data space during the onboarding process, the OSP must establish a connection with the Gaia-X Digital Clearing House (GXDCH).

For smooth operations, the OSP must provide comprehensive technical documentation, along with first, second, and third level support to facilitate integration with its services.

**Relationships:**

- An OSP **must** implement an IAM synchronization with CSP-As, the CSP-B, and OSPs to provide its customers with access to the data space.
- An OSP **must** integrate and use CSP-B services to access their identity(e. g., identity  wallet) and enable data exchange.
- An OSP **must** integrate and use the GAIA-X Digital Clearing House to validate e. g., the Legal Person Self-Description.

**Prerequisites:**

- An OSP and its services **must** be certified by a CAB.
- An OSP **must** integrate and use CSP-B services to access its identity (e. g., identity wallet)
- An OSP **must** accept and comply with the Catena-X regulatory framework during onboarding via one of the other OSPs.
- An OSP **must** use the dedicated GAIA-X Clearing House Service nominated by the Catena-X Association.

**Limitations Release 23.09:**

Due to technical limitations, the OSP role currently cannot be fully assumed and executed more than once. Further details can be found in Chapter [Increase Decentralization of Core Services](./../outlook/outlook.md#increase-decentralization-of-core-services) or can be requested during the conformity assessment. Offboarding will be included within the upcoming releases.

### Enablement Service Provider

**Role:** Enablement Service Provider (ESP)

**Description/Responsibilities**: An ESP is responsible for deploying, operating, and maintaining enablement services according to Catena-X standards.

An ESP can operate various bundles of decentralized services that enable sovereign
participation and data exchange for data providers and consumers in the Catena-X
data space. An ESP can decide on the scope of its enablement service and whether
to offer them on one or multiple of the marketplaces.

In addition, ESPs can also offer non-standardized services such as automated data
mapping, in which data is extracted from company systems and converted into
Catena-X semantic models.

**Relationships:**

- An ESP **can** use one or more CSP-A services (e. g., semantic hub).
- An ESP **must** integrate and use CSP-B services to access its identity (e. g., identity wallet) and enable data exchange.
- An ESP **must** use the services of one of the OSPs to register and onboard itself to the data space (e. g., registration service).

**Prerequisites:**

- An ESP and its services **must** be certified by a CAB.
- An ESP **must** accept and comply with the Catena-X regulatory framework during onboarding via one of the OSPs.

**Limitations Release 23.09:**

n/a

### Business Application Provider

**Role:** Business Application Provider (BAP)

**Description/Responsibilities**: A BAP is responsible for deploying, operating, and maintaining business applications to Catena-X standards. Business applications enable data providers and consumers to leverage different use cases and data-driven processes to solve a specific industry problem (e.g., PCF) and create business value, by using KITs and Standards for an interoperable and trusted data exchange.

A BAP can decide on the scope of its business applications and whether to offer
them on one or multiple of the marketplaces

**Relationships:**

- A BAP **can** use one or more CSP-A services (e. g., semantic hub).
- A BAP **must** integrate and use CSP-B services to access his identity (e. g., identity wallet) and enable data exchange.
- A BAP **must** use the services of one of the OSPs to register and onboard itself to the data space (e. g., registration service).

**Prerequisites:**

- A BAP and its services **must** be certified by a CAB.
- A BAP **must** list its solution on a marketplace provided by a CSP-A.
- A BAP **must** accept and comply with the Catena-X regulatory framework during onboarding via one of the OSPs.

**Limitations Release 23.09:**

n/a

### Advisory Provider

**Role:** Advisory Provider (AP)

**Description/Responsibilities**: An AP offers advisory services in various areas, from strategy to operations to technology or business use cases for those interested in the Catena-X data space. Providing advisory services includes topics such as onboarding guidance, business value assessment, organizational and technical enablement, but do not include the operation of technical services.

**Relationships:**

- An AP **can** use one or more CSP-As if it intends to utilize specific CSP-A services such as listing an offer on a marketplace.
- An AP **can** integrate and use CSP-B services to access the Core Services B.
- An AP **must** use the services of one of the OSPs to register and onboard itself to the data space (e. g., registration service).

**Prerequisites:**

- An AP **must** be qualified by the Catena-X Association.
- An AP **must** accept and comply with the Catena-X regulatory framework during onboarding via one of the OSPs.

**Limitations Release 23.09:**

n/a

### Data Provider/Consumer

**Role:** Data Provider and Consumer (DPC)

**Description/Responsibilities**: A DPC provides, consumes, and processes data to collaborate with other data space participants to solve a specific industry problem und create business value. This includes both standardized use cases and direct collaboration.

**Relationships:**

- A DPC **can** use the services of a CSP-A (e.g., marketplace).
- A DPC **must** integrate and use CSP-B services to access his identity (e. g., identity wallet) and enable data exchange.
- An DPC **must** use the services of one of the OSPs to register and onboard itself to the data space (e.g., registration service). This can be delegated to a BAP or ESP
- A DPC **must** connect with another DPC to exchange data and create value.
- A DPC **can** use advisory services from a qualified AP.
- A DPC **can** use certified enablement services from a commercial ESP (e.g., SaaS solution). Alternatively, a DPC can certify and operate its own enablement services.
- A DPC **can** use certified business applications from a commercial BAP (e.g., SaaS
solution). Alternatively, a DPC can certify and operate its own business application

**Prerequisites:**

- A DPC **must** use certified enablement services or business applications. Alternatively, a DPC **must** certify its own enablement services and/or business applications by one of the CABs (as outlined in Chapter [Conformity Assessment](./../how-data-space-governance/how-data-space-governance.md#conformity-assessment)).
- A DPC **must** accept and comply with the Catena-X regulatory framework during onboarding via one of the OSPs

**Limitations Release 23.09:**

n/a

*In addition to the roles in the data space, there are independent roles such as the Catena-X Association or Conformity
Assessment Bodies (CABs) to ensure neutral, trustworthy, and secure operation of the Catena-X data space.*

### Catena-X Association

**Role:** Catena-X Association

**Description/Responsibilities**: The Association is responsible for the neutral governance of the Catena-X ecosystem including the execution of nomination, standardization, qualification, and certification processes. It promotes and facilitates working groups, committees, and expert groups to discuss and align on, standards, KITs, and requirements for open-source reference implementation for the Catena-X operating system and use cases. In addition, it provides various informational resources to interested parties and Association members.

**Relationships:**

- The Association nominates the CSP-B and CABs.
- The Association delegates the certification of data space participants to CABs.
- The Association defines the Issuer of verifiable credentials.
- The Association qualifies APs.
- The Association promotes, sponsors, and coordinates the overlying requirements of the Eclipse Tractus-X Project with a view to standardization.

**Prerequisites:**

n/a

**Limitations Release 23.09:**

For the upcoming releases there will be a dedicated issuer concept in place. As of now the Association defines the Issuer (CSP-B). Further details can be found in Chapter [SSI Issuer Concept](./../how-data-space-operations/how-data-space-operations.md#ssi-issuer-concept). An outlook can be found in Chapter [Further Integration of SSI Technologies](./../outlook/outlook.md#further-integration-of-ssi-technologies).

### Conformity Assessment Body

**Role:** Conformity Assessment Body (CAB)

**Description/Responsibilities**: A CAB carries out the conformity assessment process in accordance with the Catena-X Certification Framework on behalf of the Catena-X Association. The Certification Framework consists of the certification manual and the certification catalog (derived from the ([Catena-X standards](https://catena-x.net/de/standard-library))). A CAB is nominated by the Catena-X Association to ensure an independent, trustworthy, and secure conformity assessment process.

**A CAB is responsible for:**

- creating offers for the conformity assessments.
- carrying out the conformity assessment process for various certification objects (e.g., provider, solutions).
- informing the Catena-X Association and the certification candidate about the certification results.
- issuing, reissuing, and revoking of certificates on behalf of the Catena-X
Association.

**Relationships:**

- The CAB **must** carry out the conformity assessment for all affected data space
participants and their IT solutions.

**Prerequisites:**

- A CAB must be nominated by the Catena-X Association and comply with the Catena-X certification framework.
- Business model supporting adoption and offering a non-discriminating access, esp. by small and medium business.

**Limitations Release 23.09:**

n/a
