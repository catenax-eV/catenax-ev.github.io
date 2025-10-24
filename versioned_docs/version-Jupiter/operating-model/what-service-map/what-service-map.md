---
sidebar_position: 1
---
# What: Service Map

The architecture of the Catena-X Operating System (cxOS) is derived from the reference architectures of the International Data Spaces Association (IDSA) and Gaia-X. The cxOS consists of three areas: Core, Onboarding, and Enablement Services shown in Figure [Service Map](./what-service-map.md).

![Service Map (Deployment View)](./assets/service-map.png)  
*Service Map (Deployment View)*

The operating system (cxOS) is the technical foundation, enabling business use cases to operate in a network-enabled manner across company boundaries. The cxOS offers various capabilities:

## Enablement Services

The Enablement Services are a bundle of decentral services that enable participation in the Catena-X data space. Each participant must deploy and use the enablement services to connect to the data space and enable standardized interactions, based on the requirements of the respective use case. They ensure the strategic value proposition of technical/semantic interoperability and (data) sovereignty.

The connector (e.g., EDC), based on the Data Space Protocol, and the identity wallet, form the mandatory basis of enablement services enabling standardized technical connectivity and sovereign data exchange. All participants can use them to establish a basic connection to the data space, independent of the business use case.

In addition to generic data exchange capabilities, enabling services include context-specific service offerings. Examples are the Asset Administration Shell (AAS) as a harmonized access layer for digital twins, the Decentral Digital Twin Registry (DDTR) for local discoverability of digital twins in decentral organized data spaces or the Item Relationship Service (IRS) for building data chains and iterating through a tree structure of digital twins.

Please note that there are various options for running enablement services, ranging from leveraging software-as-a-service solutions to local deployments of open-source reference implementations. Further information on deployment and usage premises can be found in Chapter [EDC Deployment and Usage Premises](./../how-data-space-operations/how-data-space-operations.md#edc-deployment-and-usage-premises).

## Core Services

In contrast to Enablement Services, Core Services are provided and operated by Core Service providers A/B. Core services provide common accessibility and discoverability functionalities for data space participants. Examples include BPN issuer for maintaining business partner numbers, and participant information, IAM solutions for identity and access management, and discovery services to localize the address of assets in decentral organized registries across the data space. The Core Services can be divided into two areas:

**Core Services A** lists Core Services that can be operated “n” times in the Catena-X data space.

**Core Services B** lists Core Services that can only be operated once in the Catena-X data space due to business reasons or technical limitations and are therefore tendered via the nomination process of the Association.

## Onboarding Services

The Onboarding Services are provided and operated by OSPs. Onboarding Services enable participants to onboard into the Catena-X data space. The Onboarding Services can be divided into two areas:

**Onboarding Services** list the services that ensure a standardized and compliant Catena-X onboarding process (e.g., registration process).

**Trust Partners** list the services that CSP-B must integrate and use to implement a trusted onboarding process but are developed and operated by an external initiative or provider.

## Use Cases

The goal of a Catena-X use case is to solve a specific business problem and to create value for data providers and consumers. To do this, the Catena-X Association demands and promotes that use cases create Standards and KITs to enable a multi-vendor ecosystem of interoperable and compatible business applications. Achieving network effects in the Catena-X ecosystem is critical to success and depends on the active participation of users and the creation of appealing business apps, especially for SMEs.

## Business Partner Data Management vs. Golden Record vs. Value Added Services (Business Apps)

**Business Partner Data Management** refers to the whole Catena-X use case. This use case addresses high data retention costs by creating a "Golden Record" with a unique Business Partner Number (BPN) to harmonize, improve, and manage business partner data efficiently, reducing maintenance and validation expenses and supporting decentralized identity management on a company-level

**Golden Record Process (cleansing)** describes the cleansing of the data in the Golden Record. This ensures that the data is unique and correct. This creates a high-quality record in the network by identifying business partners through Legal Entity, Legal Address, and Site, ensuring data accuracy and consistency

**Value Added Services (VAS)** always require access to the data generated by the Golden Record process, which is part of the BPDM use case. This means VAS always relies on BPDM data. These services therefore require a deep integration into BPDM - thus the pure use of the BPN-L, BPN-S, and BPN-A is excluded to qualify for a VAS, e.g. the use case Traceability utilizes the BPNL but is not a VAS.

## KITs – Keep It Together

KIT, short for Keep It Together, bundles all necessary resources and technical documentation designed to adopt a Catena-X use case for all data space participants (see Figure [KITs Toolbox](./what-service-map.md#kits--keep-it-together)).

A KIT is always structured in the same way and supports the individual journey of a company joining the Catena-X data space. To ensure interoperability and data sovereignty in Catena-X use cases, adherence to a minimum set of elements is required, including semantic models for data integration and understanding, logic and schemas for value calculation, API implementation for technical communication, and access and usage policies to maintain data sovereignty. A KIT consists of various other artifacts in addition to the minimum set. A comprehensive overview of the artefacts can be found on the [Tractus-X project website](https://eclipse-tractusx.github.io/).

![KITs Toolbox](./assets/kits-toolbox.png)
*KITs Toolbox*

DPCs that are part of the automotive value chain and strive to participate in a Catena-X use case require technical support, specifications, and tutorials. For instance, a production company may need to exchange product carbon footprint data with its partners. KITs consolidate the necessary software components, standards, access and usage policies, and code examples, ensuring these companies have everything required to successfully participate in a Catena-X use case.

BAPs interested in offering a business application for a specific use case on one of the Catena-X marketplaces. These companies need to align their existing solutions with Catena-X requirements. Within a KIT, they receive guidelines and the technical support necessary for adapting their solutions to meet Catena-X conformity based on our five steps to Catena-X: Inform, connect, boost, adapt, utilize. KITs are the way forward to create a valuable multi-vendor ecosystem to promote seamless interoperability between different commercial solutions.

### Industry Core

The Industry Core is an integrative layer between the industry-agnostic dataspace foundation and the use cases supported by the KITs of Catena-X (see [Industry Core KIT](https://eclipse-tractusx.github.io/docs-kits/category/industry-core-kit)). It facilitates the seamless integration of multiple use cases and related applications by leveraging common components and standards, particularly in terms of data provisioning for digital twins.

Specifically, the industry core ensures that applications within the automotive industry can access shared functionalities, including shared semantic models, Asset Administration Shell (AAS) and Digital Twin Registry (DTR) configurations for linking digital twins of components and vehicles, as well as guidelines for setting up required network services (e.g. EDC). Other use cases (e.g., product passport) can use the digital twins in business applications with use case specific business logic and extended semantic models.

The industry-agnostic dataspace foundation includes general dataspace services (e.g., EDC, Identity Wallet, Digital Twin Registry), some of which are defined and developed by other dataspace initiatives (e.g., Gaia-X, IDSA, Eclipse Dataspace Working Group).

Benefits of the industry core include the:

- re-usability of semantic models of digital twins via defining archetypes of serialized parts manufacturing
- seamless integration of multiple use cases and related applications by leveraging common components and standards, particularly in terms of data provisioning for digital twins
- efficiency and interoperability across different use cases

### Knowledge Agent

The Knowledge Agent facilitates efficient and secure data exchange using the SPARQL protocol and the EDC. It standardizes data from various sources into unified formats and manages complex dependencies to ensure seamless communication and data retrieval. Semantic knowledge graphs enhance the understanding and accessibility of complex data structures.

## New Use Cases and Direct Collaboration

In addition to the first 10 use cases that were initially developed in the Catena-X Consortium and are now governed by the Association Committees (e.g., Sustainability Committee), data space participants have the following scenarios for collaboration:

### Initiate a new use case

Any Catena-X Association member can initiate a new use case by creating a working group in the Catena-X Association or expanding an existing committee (whatever suits the purpose best, the final judgment is made by the Board of the Association). The goal of a committee or working group is to discuss and define a common vision, roadmap, standards, KITs, and other open-source artifacts for the use cases with a focus on interoperability and data sovereignty to create multi-tier value chains for a dedicated business process.

To validate the value proposition or technical specifications, a new use case can be tested in the future either in a sandbox environment of the CSP-B or in the test environments of the Catena-X Association. Note that new use cases without standards provide only limited interoperability, require individual use case policies, and cannot be certified and thus not be listed on one of the marketplaces and are therefore not supported and trusted.

### Individual collaboration (no multi-tier approach)

The Catena-X data space also enables secure and sovereign data exchange for individual collaboration between DPCs. In this scenario, the DPCs are responsible for defining a bilateral semantic model, as well as appropriate usage and access policies. Alternatively, they can make use of existing usage and access policies that meets their needs. The goal of the Catena-X data space remains to always create interoperable use cases with stable and consistent multi-tier data chains. Note that individual collaboration without standards provides only limited interoperability and cannot be certified and thus not be listed on one of the marketplaces.

### Sandboxes

**Catena-X Sandboxes** contain all cxOS services required for the operation of a minimum valuable Catena-X data space, namely:

- CSP-B services (excluding the cleansing service of the Golden Record Service and GXDCH integration)
- OSP services

The exclusions do not prohibit the offering or integration of the Golden Record Service, but it is not required for the operation of a sandbox. The cleansing service of the Golden Record Service is not a mandatory services as this is only required for the testing of special use cases - the majority can also be tested without a cleansing service the Golden Record Service. This also makes it possible to provide a cost-effective offer, as no additional costs are incurred. The GXDCH is only relevant for the productive data space and is therefore only available to the CSP-B. Therefore, there can be no integration with the sandbox provider here. As the Self-Descriptions (SDs) are not required for testing the use cases there is no limitation.

As shown in the [role description](./../who-roles-in-the-catena-x-ecosystem/who-roles-in-the-catena-x-ecosystem.md#sandbox-provider) of the SP, the SP itself and the participants in the sandbox must be onboarded into the productive Catena-X data space via an OSP or CSP-B - see [onboarding](./../how-data-space-operations/how-data-space-operations.md#onboarding-process). The BPNs issued do not have to be used in the Sandbox, so no technical integration has to take place.

Catena-X Sandboxes offer participants the option to try out the network and its features while still using test data. On the one hand, they serve the purpose of offering a **Proof of Concept (POC) environment**, both for future Catena-X releases as well as for interested parties to “try out” Catena-X before migrating to the productive operating environment. On the other hand, they provide the foundation for more automated **Catena-X conformity assessment**. Catena-X Sandboxes will require certification in the future and are distinctly recognizable by an official Catena-X label.

Sandboxes must visibly distinguish their services from the productive Catena-X operating environment provided by the official CSP-B (e.g. through a disclaimer to its users) in combination with advertising a clear path into the productive Catena-X operating environment for any user that intends to join the Catena-X data space.

Given that the brand of Catena-X draws much of its value from trust, any Catena-X Sandbox user is required to formally onboard onto Catena-X via an OSP and accept the general terms and conditions of the Catena-X data space (10 golden rules, data exchange governance...) before onboarding onto a Catena-X Sandbox.

The following conditions apply to any Catena-X Sandbox:

- Catena-X Release: any officially supported Catena-X Release
- Data: limited to test data
- Apps & Solutions offered: Catena-X certified, if standardized Catena-X services are offered; Non-certified if no Catena-X standards exist (see *Direct collaboration (no multi-tier approach*))
- Users: registered Catena-X data space participants only
