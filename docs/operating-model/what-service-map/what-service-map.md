---
sidebar_position: 1
---
# What: Service Map

The architecture of the Catena-X Operating System (cxOS) is derived from the reference
architectures of Industrial Data Space Association (IDSA) and Gaia-X. The cxOS consists of
three areas: Core, Onboarding, and Enablement Services shown in Figure [Service Map](./what-service-map.md).

![Service Map (Deployment View)](./assets/service-map-deployment-view.png)
*Service Map (Deployment View)*

The cxOS is the technical foundation enabling business use cases to operate in a network-enabled manner across company boundaries. The operating system offers various capabilities:

## Enablement Services

The Enablement Services are a bundle of decentral services that enable participation in the Catena-X data space. Each participant must deploy and use the enablement services to connect to the data space and enable standardized interactions based on the requirements of the respective use case. They ensure the strategic value proposition of technical/semantic interoperability and (data) sovereignty.

The connector (e.g., EDC) based on the data space protocol and the identity wallet form the mandatory basis of enablement services enabling standardized technical connectivity and sovereign data exchange. All participants can use them to establish a basic connection to the data space, independent of the business use case.

In addition to generic data-exchange capabilities, enabling services include context-specific service offerings. Examples are the Asset Administration Shell (AAS) as harmonized access layer for digital twins, the Decentral Digital Twin Registry (DDTR) for local discoverability of digital twins in decentral organized data spaces or the Item Relationship Service (IRS) for building data chains and iterating through a tree structure of digital twins.

Please note that there are various options for running enablement services, ranging from leveraging software-asa-service solutions to local deployments of open-source reference implementations. Further information on deployment and usage premises can be found in Chapter [EDC Deployment and Usage Premises](./../how-data-space-operations/how-data-space-operations.md#edc-deployment-and-usage-premises).

## Core Services

In contrast to Enablement Services, Core Services are provided and operated by Core Service providers A/B. Core services provide common accessibility and discoverability functionalities for data space participants. Examples include BPN issuer for maintaining business partner numbers, and participant information, IAM solutions for identity and access management, and discovery services to localize the address of assets in decentral organized registries across the data space. The Core Services can be divided into two areas:

**Core Services A** lists Core Services that can be operated “n” times in the Catena-X data space.

**Core Services B** lists Core Services that can only be operated once in the Catena-X data space due to business reasons or technical limitations and are therefore tendered via the nomination process of the Association.

Some of the Core Services, such as the Managed Identity Wallet, are by nature Enablement Services, but because of technical reasons they are considered Core Services B as an interim solution.

## Onboarding Services

The Onboarding Services are provided and operated by OSPs. Onboarding Services enable participants to onboard into the Catena-X data space. As shown in Chapter [Increase Decentralization of Core Services](./../outlook/outlook.md#increase-decentralization-of-core-services), the scope of Onboarding Services will change over time. The Onboarding Services can be divided into two areas:

**Onboarding Services** list the services that ensure a standardized and compliant Catena-X onboarding process (e.g., registration process).

**External Onboarding Services** list the services that OSPs must integrate and use to implement a trusted onboarding process but are developed and operated by an external initiative or provider.

## Use Cases

The goal of a Catena-X use case is to solve a specific business problem and to create value for data providers and consumers. To do this, the Catena-X Association demands and promotes that use cases create Standards and KITs to enable a multi-vendor ecosystem of interoperable and compatible business applications (see: business application). Achieving network effects in the Catena-X ecosystem is critical to success and depends on the active participation of users and the creation of appealing business apps, especially for SMEs

### KITs – Keep It Together

KIT, short for Keep It Together, bundles all necessary resources and technical documentation designed to adopt a Catena-X use case for all data space participants (see Figure [KITs Toolbox](./what-service-map.md#kits--keep-it-together)).

A KIT is always structured in the same way and supports the individual journey of a company joining the Catena-X data space. To ensure interoperability and data sovereignty in Catena-X use cases, adherence to a minimum set of elements is required, including semantic models for data integration and understanding, logic and schemas for value calculation, API implementation for technical communication, and access and usage policies to maintain data sovereignty. A KIT consists of various other artifacts in addition to the minimum set. A comprehensive overview of the artefacts can be found on the [Tractus-X project website](https://eclipse-tractusx.github.io/).

![KITs Toolbox](./assets/kits-toolbox.png)
*KITs Toolbox*

DPCs that are part of the automotive value chain and strive to participate in a Catena-X use case require technical support, specifications, and tutorials. For instance, a production company may need to exchange product carbon footprint data with its partners. KITs consolidate the necessary software components, standards, access and usage policies, and code examples, ensuring these companies have everything required to successfully participate in a Catena-X use case.

BAPs interested in offering a business application for a specific use case on one of the Catena-X marketplaces. These companies need to align their existing solutions with Catena-X requirements. Within a KIT, they receive guidelines and the technical support necessary for adapting their solutions to meet Catena-X conformity based on our five steps to Catena-X: Inform, connect, boost, adapt, utilize. KITs are the way forward to create a valuable multi-vendor ecosystem to promote seamless interoperability between different commercial solutions.

### New Use Cases and Direct Collaboration

In addition to the first 10 use cases that have been initially developed in the Catena-X Consortium and are now governed by the Association Committees (e.g., Sustainability Committee), data space participants have the following scenarios for collaboration:

#### Initiate new use case

Any Catena-X Association member can initiate a new use case by creating a working in the Catena-X Association or expand an existing committee (whatever suits the purpose best, the final judgement is made by the Board of the Association). The goal of a committee or working group is to discuss and define a common vision, roadmap, standards, KITs, and other open-source artefacts for the use cases with focus on interoperability and data sovereignty to create multi-tier value chains for a dedicated business process.

To validate the value proposition or technical specifications, a new use case can be tested in future either in a sandbox environment of the CSP-B or in the test environments of the Catena-X Association. Note that new uses cases without standards provide only limited interoperability, require individual use case policies, and cannot be certified and thus not be listed on one of the marketplaces and are therefore not supported and trusted.

#### Direct collaboration (no multi-tier approach)

The Catena-X data space also enables secure and sovereign data exchange for direct collaboration between data provider and consumer. In this scenario, the data provider and consumer are responsible for defining a bilateral semantic model, as well as appropriate usage and access policies. Alternatively, they can make use of existing usage and access policy that meets their needs. The goal of the Catena-X data space remains to always create interoperable use cases with consistent data chains. Note that direct collaboration without standards provides only limited interoperability and cannot be certified and thus not be listed on one of the marketplaces.
