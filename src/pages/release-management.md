# Release Management

A data space such as Catena-X is not a static environment. It continuously evolves as standards, governance documents, technical components, semantic models, and business applications are extended and improved. These changes are driven by new regulatory requirements, technological advancements, and the introduction of additional business use cases.

Without a structured approach to managing these changes, participants, applications, and certification processes may gradually become incompatible. The interoperability established through common standards, governance, and certification can quickly be compromised if changes are introduced independently.

Release Management provides the framework for introducing changes in a controlled and transparent manner. It ensures that normative and technical artefacts evolve in a coordinated way, allowing the ecosystem to continuously improve while maintaining interoperability, stability, and trust.

## Governance and Technical Implementation

Within the Catena-X ecosystem, two closely connected dimensions must be considered: the **governance layer** and the **technical implementation layer**.

The **governance layer** is coordinated by the Catena-X association and defines the normative foundation of the ecosystem. It includes artefacts such as standards, rulebooks, the Operating Model, certification requirements, and other governance specifications. These artefacts define the rules that participants must follow to operate within Catena-X.

The **technical implementation layer** is coordinated by the Eclipse Tractus-X community. It provides the technical building blocks which help to implement the Catena-X specifications, including semantic models, KITs and reference implementations.

Both layers have their own release processes and responsibilities. However, they are closely connected. Changes to governance artefacts may require updates to technical implementations, while implementation experience may result in improvements to standards and specifications. Coordinating these dependencies is a key objective of Release Management.

:::info

This page summarizes the most important aspects of Release Management. Further details are available in the Operating Model under [How: Life Cycle Management](/docs/operating-model/how-life-cycle-management).

An overview of upcoming ecosystem releases is available in the [**Timelines**](./timelines.md).

:::

## Catena-X Ecosystem Releases

To provide participants with a consistent target for implementation and certification, Catena-X publishes coordinated ecosystem releases.

Each ecosystem release combines:

- Normative artefacts published by the Catena-X association, such as standards and certification requirements.
- Corresponding technical assets provided by the Eclipse Tractus-X community, such as KITs, semantic models and reference implementations.

Although both organizations manage their own release processes, the ecosystem release ensures that these artefacts are aligned and can be adopted together by ecosystem participants.

### Support Dates

[![Support Dates](@site/static/img/support-dates.jpg)](@site/static/img/support-dates.jpg)

| Release    | Publication Date (Normative Documentes e.g. Standards and Certification Available) | Go-Live Date (Standards Become Effective) |
|------------|----------------------------------------------------------|-------------------------------------------|
| CX-Jupiter | 05.08.2024                                               | 23.10.2024                                |
| CX-Io      | 17.03.2025                                               | 10.06.2025                                |
| CX-Saturn  | 08.09.2025                                               | 25.11.2025                                |
| CX-Titan   | 18.03.2026                                               | 09.06.2026                                |
| CX-Neptune | 16.09.2026                                               | TBD                                       |

## Basic Release Characteristics

The ecosystem release process follows a common set of principles regarding release cadence, versioning, lifecycle management, and migration.

| Topic | Information |
|------------------------------------------------|---------------------------------------------------|
| Ecosystem Release Cycle | 2 Times / Year |
| Catena-X Planning Cycle | 4 Times / Year |
| Eclipse Tractus-X Planning & Release Cycle | 4 Times / Year |
| Artefact Versioning | Calendar Versioning (e.g. 27.09) |
| Ecosystem Release Naming | Planet Names (e.g. CX-Sirius) |
| Grace Period | 1 Year |
| Upgrade Day for:<br/>- [Core Service Provider A](https://catenax-ev.github.io/docs/next/operating-model/who-roles-in-the-catena-x-ecosystem#core-service-provider-a)<br/>- [Core Service Provider B](https://catenax-ev.github.io/docs/next/operating-model/who-roles-in-the-catena-x-ecosystem#core-service-provider-b)<br/>- [Onboarding Service Provider](https://catenax-ev.github.io/docs/next/operating-model/who-roles-in-the-catena-x-ecosystem#onboarding-service-provider) | Synced Upgrade Day (coordinated by the Catena-X association) |
| Backward Compatibility | Commitment by the Eclipse Tractus-X Project |

## Lifecycle States

Each ecosystem release passes through a defined lifecycle that indicates its support status and certification eligibility.

- **Current**  
  The latest ecosystem release. It is fully supported and recommended for new implementations. Certification is possible.

- **Maintained**  
  A previous ecosystem release that remains supported during the transition period. Certification is still possible, although a newer release is already available.

- **Deprecated**  
  A release that has reached the end of its supported lifecycle. It is no longer maintained, and certification based on this release is no longer possible.

The transition between these lifecycle states provides participants with sufficient time to migrate to newer releases while maintaining operational stability.

## Versioning

Catena-X distinguishes between ecosystem release naming and artefact versioning.

Ecosystem releases are identified using planet names, such as **CX-Jupiter**, **CX-Saturn**, or **CX-Sirius**. These names simplify communication across the ecosystem.

Individual artefacts—including standards, semantic models, KITs, and reference implementations—follow semantic versioning e.g. 2.3.1. This allows participants to understand whether a change introduces breaking changes, new functionality, or only bug fixes.

To reduce migration and certification effort, each ecosystem release remains supported for a defined transition period. This overlap allows participants to migrate to the next ecosystem release while maintaining certification on the previous supported release.
