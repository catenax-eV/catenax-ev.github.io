---
sidebar_position: 1
---
# Who: Roles in the Catena-X ecosystem

The Catena-X ecosystem operates on the principle of multiple distinct roles, designed to create an appealing and functional data space (see Figure [Role Overview and Relationships](./who-roles-in-the-catena-x-ecosystem.md#overview-of-roles)). Participants can take on one or more roles in any combination, and multiple participants can fulfill the same role except for the CSP-B role. The CSP-B role can only exist once in the data space due to complexity and technical reasons. Provider roles receive a label through a certification or qualification process to demonstrate that they are trusted partners (see Chapter [How: Life Cycle Management](./../how-life-cycle-management/how-life-cycle-management.md)).

## Overview of roles

![Role Overview and Relationships](./assets/role-overview-and-relationships.png)  
*Role Overview and Relationships*

## Detailed description of each role

Below, each role that a participant can assume in the Catena-X data spaces is described in detail, along with its assigned description, responsibilities, relationships, prerequisites, and complements. Please refer to Chapter  [What: Service Map](./../what-service-map/what-service-map.md) for an overview of the Service Map.

### Core Service Provider A

**Role:** Core Service Provider A (CSP-A)

**Description/Responsibilities**: A CSP-A is responsible for deploying, operating, and maintaining core services A according to Catena-X standards. Core Services A provides common business functionalities for all data space participants (e.g., managing marketplace offers, semantic models, or searching for business partner information).  

A CSP-A can operate various bundles of Core Services A, whereby the operation of an IAM and a marketplace is mandatory. Note that the synchronization of marketplace offers is at the discretion of a provider, who may submit and list its offer on multiple marketplaces. The CSP-A role can be taken on by multiple participants.  

For smooth operations, the CSP-A must provide comprehensive technical documentation, along with first, second, and third-level support to facilitate integration with its services. Each CSP-A has freedom of choice regarding their business model towards their potential customers.

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

**Current Limitations:**

- Due to technical limitations, the CSP-A role currently cannot be fully assumed and executed more than once. Further details can be found in Chapter [Increase Decentralization of Core Services](./../outlook/outlook.md#increase-decentralization-of-core-services) or can be requested during the conformity assessment.

### Core Service Provider B

**Role:** Core Service Provider B (CSP-B)

**Description/Responsibilities**: The CSP-B is responsible for deploying, operating, and maintaining all core services section B according to Catena-X standards. Core Services B include identity and common accessibility and discoverability functionalities for all data space participants.

The CSP-B operates all Core Services B as one bundle to enable trusted participation and sovereign data exchange across all data space participants. The CSP-B role can only be taken on by one participant and is nominated by the Catena-X Association to operate and further develop the services on their behalf.

For smooth operations, the CSP-B must provide comprehensive technical documentation, along with first, second, and third-level support to facilitate integration with its services.

**Due to its special role, the CSP-B is responsible for:**

- providing non-discriminatory access to Core Services Section B for all data space participants.
- coordinating the release management of Core Services B in the data space (with affected participants) based on Catena-X Association and Tractus-X releases.
- marketing Core Services B and managing contractual partners.
- issuing and revoking access of BPNs to the data space based on the country clearance list by the Catena-X Association.
- temporarily executing the trust anchor role and issuing verifiable credentials.

**Relationships:**

- The CSP-B **must** support the integration of all other data space participants to the Core Services B.
- A CSP-B **must** implement an IAM synchronization with CSP-As and OSPs.
- The CSP-B **must** integrate the GXDCH provided by the Catena-X Association.

**Prerequisites:**

- A CSP-B **must** be nominated by the Catena-X Association.
- A CSP-B **must** be a Catena-X Association member.
- A CSP-B and its services **must** be certified by a CAB.
- A CSP-B **must** offer a partnerRegistration API to any OSP requesting it
- A CSP-B **must** accept and comply with the Catena-X regulatory framework via an MoU with the Association.

**Current Limitations:**

- To ensure complete functionality of the data space, the CSP-B **must** also operate the relevant services of both the CSP-A and OSP roles.
- Further details can be found in Chapter [Increase Decentralization of Core Services](./../outlook/outlook.md#increase-decentralization-of-core-services).

### Onboarding Service Provider

**Role:** Onboarding Service Provider (OSP)

**Description/Responsibilities:**

OSPs are responsible for deploying, operating, and maintaining onboarding services according to Catena-X standards. These services facilitate the registration, onboarding, and offboarding of participants within the Catena-X data space. The OSP utilizes the CSP-B to validate data (e.g. name, address, identifier of the company) related to onboarding processes and must integrate with the `partnerRegistration` API of the CSP-B. This ensures that all data adheres to Catena-X standards and maintains the integrity and trustworthiness of the data space. The OSPs must provide comprehensive technical documentation and support (first, second, and third level) to facilitate the integration of services and assist users and other stakeholders.

**Relationships:**

- An OSP **must** integrate with the CSP-B to access the required endpoints.
- An OSP **must** implement an IAM synchronization with the CSP-B.

**Prerequisites:**

- An OSP and its services **must** be certified by a CAB.
- An OSP **must** accept and comply with the Catena-X regulatory framework.

**Current Limitations:**

- The OSP currently covers only part of the registration process in the Catena-X data space. The currently available process is depicted in figure [General Onboarding Process](./../how-data-space-operations/how-data-space-operations.md#onboarding-process).
- Offboarding Processes Under Development: Comprehensive offboarding processes are currently in development to ensure that they are as robust as onboarding processes and will be included in future updates. Simple and manual offboarding processes are already available.

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

- An ESP **can** use one or more CSP-A services (e.g., semantic hub).
- An ESP **must** integrate and use CSP-B services to access its identity (e.g., identity wallet) and enable data exchange.
- An ESP **must** use the services of one of the OSPs to register and onboard itself to the data space (e.g., registration service).

**Prerequisites:**

- An ESP and its services **must** be certified by a CAB.
- An ESP **must** accept and comply with the Catena-X regulatory framework during onboarding via one of the OSPs.

**Current Limitations:**

n/a

### Business Application Provider

**Role:** Business Application Provider (BAP)

**Description/Responsibilities**: A BAP is responsible for deploying, operating, and maintaining business applications to Catena-X standards. Business applications enable data providers and consumers to leverage different use cases and data-driven processes to solve a specific industry problem (e.g., PCF) and create business value, by using KITs and Standards for an interoperable and trusted data exchange.

A BAP can decide on the scope of its business applications and whether to offer
them on one or multiple of the marketplaces

**Relationships:**

- A BAP **can** use one or more CSP-A services (e.g., semantic hub).
- A BAP **must** integrate and use CSP-B services to access his identity (e.g., identity wallet) and enable data exchange.
- A BAP **must** use the services of one of the OSPs to register and onboard itself to the data space (e.g., registration service).

**Prerequisites:**

- A BAP and its services **must** be certified by a CAB.
- A BAP **must** list its solution on a marketplace provided by a CSP-A.
- A BAP **must** accept and comply with the Catena-X regulatory framework during onboarding via one of the OSPs.

**Current Limitations:**

n/a

### Advisory Provider

**Role:** Advisory Provider (AP)

**Description/Responsibilities**: An AP offers advisory services in various areas, from strategy to operations to technology or business use cases, for those interested in the Catena-X data space. Providing advisory services includes topics such as onboarding guidance, business value assessment, organizational and technical enablement, but does not include the operation of technical services.

**Relationships:**

- An AP **can** use one or more CSP-As if it intends to utilize specific CSP-A services such as listing an offer on a marketplace.
- An AP **can** integrate and use CSP-B services to access the Core Services B.
- An AP **must** use the services of one of the OSPs to register and onboard itself to the data space (e.g., registration service).

**Prerequisites:**

- An AP **must** be qualified by the Catena-X Association.
- An AP **must** accept and comply with the Catena-X regulatory framework during onboarding via one of the OSPs.

**Current Limitations:**

n/a

### Data Provider/Consumer

**Role:** Data Provider and Consumer (DPC)

**Description/Responsibilities**: A DPC provides, consumes, and processes data to collaborate with other data space participants to solve a specific industry problem und create business value. This includes both standardized use cases and direct collaboration.

**Relationships:**

- A DPC **can** use the services of a CSP-A (e.g., marketplace).
- A DPC **must** integrate and use CSP-B services to access his identity (e.g., identity wallet) and enable data exchange.
- A DPC **must** use the services of one of the OSPs to register and onboard itself to the data space (e.g., registration service). This can be delegated to a BAP or ESP
- A DPC **must** connect with another DPC to exchange data and create value.
- A DPC **can** use advisory services from a qualified AP.

- A DPC **can** use certified enablement services from a commercial ESP (e.g., a SaaS solution). Alternatively, a DPC can certify and operate its own enablement services.
- A DPC **can** use certified business applications from a commercial BAP (e.g., a SaaS
solution). Alternatively, a DPC can certify and operate its own business application.

**Prerequisites:**

- A DPC **must** use certified enablement services or business applications. Alternatively, a DPC **must** certify its own enablement services and/or business applications by one of the CABs (as outlined in Chapter [Conformity Assessment](./../how-data-space-governance/how-data-space-governance.md#conformity-assessment-and-certification)).
- A DPC **must** accept and comply with the Catena-X regulatory framework during onboarding via one of the OSPs

**Current Limitations:**

n/a

*In addition to the roles in the data space, there are independent roles such as the Catena-X Association or Conformity
Assessment Bodies (CABs) to ensure  the neutral, trustworthy, and secure operation of the Catena-X data space.*

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

**Current Limitations:**

For the upcoming releases, there will be a dedicated issuer concept in place. As of now, the Association defines the Issuer (CSP-B). Further details can be found in Chapter [SSI Issuer Concept](./../how-data-space-operations/how-data-space-operations.md#implementation-of-the-self-sovereign-identity-concept). An outlook can be found in Chapter [Further Integration of SSI Technologies](./../outlook/outlook.md#further-integration-of-ssi-technologies).

### Conformity Assessment Body

**Role:** Conformity Assessment Body (CAB)

**Description/Responsibilities**: A CAB carries out the conformity assessment process, in accordance with the Catena-X Certification Framework, on behalf of the Catena-X Association. The Certification Framework consists of the certification manual and the certification catalog (derived from the ([Catena-X standards](https://catenax-ev.github.io/docs/standards/overview))). A CAB is nominated by the Catena-X Association to ensure an independent, trustworthy, and secure conformity assessment process.

**A CAB is responsible for:**

- creating offers for the conformity assessments.
- carrying out the conformity assessment process for various certification objects (e.g., provider, solutions).
- informing the Catena-X Association and the certification candidate about the certification results.
- issuing, reissuing, and revoking certificates on behalf of the Catena-X
Association.

**Relationships:**

- The CAB **must** carry out the conformity assessment for all affected data space
participants and their IT solutions.

**Prerequisites:**

- A CAB must be nominated by the Catena-X Association and comply with the Catena-X certification framework.
- Business model supporting adoption and offering non-discriminating access, esp. by small and medium businesses.

**Current Limitations:**

n/a

### Sandbox Provider

**Role:** Sandbox Provider (SP)

**Description/Responsibilities**:

A Sandbox Provider is responsible for deploying, operating, and maintaining a Catena-X Sandbox according to Catena-X standards. A Catena-X Sandbox includes all CSP-B and OSP components required to provide a functioning Catena-X operating environment see also Chapter [What-Service Map](./../what-service-map/what-service-map.md) for more details. An SP operates the Sandbox as one bundle of services to enable coherent testing of sovereign data exchange and services across all basic data space functionalities. Please take a look at the chapter Service map for a complete description of Catena-X Sandboxes.

For smooth operations, an SP must provide comprehensive technical documentation and first, second, and third-level support to facilitate integration with its services. Each SP has freedom of choice regarding their business model towards their potential customers.

Given that the Catena-X brand derives much of its value throug trust, Catena-X Sandboxes must only accept trusted users that went through the official Catena-X registration process via one of the OSPs, including the acceptance of the general Catena-X terms and conditions (10 golden rules, data exchange governance...). As Sandboxes are not directly linked to the Catena-X Operating Environment, a listing on the data space clearance list serve as proof for trusted users.

**Relationships:**

- An SP can operate independently from the CSP-B as Catena-X Sandboxes remain strictly separate from the Catena-X Operating Environment (e.g. no sync/mapping of BPNs).
- An SP must only onboard users which are already onboarded on the productive Catena-X dataspace via an OSP or CSP-B.
- An SP must advertise a clear migration path to the productive Catena-X Operating Environment to its users.
- An SP must use the services of one of the OSPs to register and onboard itself to the data space (e.g., registration service).
- An SP must accept and comply with the Catena-X regulatory framework during onboarding via one of the OSPs or CSP-B.
- An SP offering its Sandbox to official Catena-X conformity assessment services must be nominated by the Catena-X Association.

**Prerequisites and Limitations:**

- Operating a Catena-X Sandbox requires specific approval from the Catena-X Association and the signing of a self-assessment.
- An SP is responsible for upholding certification verifications and checks for compliance with the Catena-X governance framework, given that a direct connection with the CSP-B is currently infeasible. Thereby, the Catena-X Association and the CSP-B are also not responsible or liable for any SLAs provided by the SP.
