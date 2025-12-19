---
sidebar_position: 5
title: Tractus-X Release 
---

The development of open source components in Tractus-X is a collaborative effort between association bodies (Committees and Expert Groups) and the open source community. Association bodies ensure strategic alignment, while the open source community delivers high-quality code. The release process is divided into four key phases, each with defined roles, responsibilities, and quality checks.

The release of content in Tractus-X is governed by the open source community. The association however takes influence on the planning concerning its interests. The release process for Tractus-X is devided into four phases:

1. [Planning](#1planning)
2. [Implementation](#2implementation)
3. [Testing](#3testing)
4. [Release](#4release)

## 1.Planning

**Objective: Set the direction and scope for each release, ensuring all stakeholders are aligned.**

**Key Activities**:

- Anyone can propose features by creating an issue in Tractus-X.
- Proposals must be refined to meet minimum content requirements (detailed specifications, clear objectives, and comprehensive plans).
- All planned work (KITs, Reference Implementations, APIs, Protocols, Data, Architecture, Documentation, etc.) should be announced.
- All planned work in Tractus-X that relates to a roadmap item must be linked to it.
- In Open Planning meetings review and prioritize proposals, with final feedback and prioritization by Committers.

## 2.Implementation

**Objective: Develop and review the proposed features according to Tractus-X guidelines.**

**Key Activities:**

- KIT creators prepare initial pull requests, following Tractus-X Release Guidelines.
- All GitHub workflows (dependency checks, linting, security) must pass.
- Initial pull requests must be submitted at least 4 weeks before the release date.
- Reviewers (including Committees and Senior Experts) provide feedback within 2 weeks.
- Final pull requests are approved, feedback addressed, and merged before release.

## 3.Testing

**Objective: Ensure the quality and functionality of all software components before release.**

**Key Activities:**

- Test management (planning, execution, monitoring) is performed using association-owned tools (available only to association members).
- Unit, integration, and end-to-end (E2E) tests are conducted to verify functionality and interoperability.
- Feature freeze marks the end of development for the release; all committed content must be available and deviations documented.
- Integration testing identifies and resolves conflicts between software modules.
- E2E testing simulates real-world scenarios to ensure the application meets user expectations.

:::warning[NOTE]
The test management tools are owned by the association and is provided to association members exclusively and not the open source community!
:::

## 4.Release

**Objective: Deliver stable, high-quality software to users.**

**Key Activities:**

- Final checks to ensure software is stable, bug-free, and ready for delivery.
- Release notes and documentation are prepared.
- Approved content is published and made available to the community.

## FAQs

- **How are open meetings communicated?**
Via the [Tractus-X News Page](https://eclipse-tractusx.github.io/blog/) and [Mailing List](https://accounts.eclipse.org/mailing-list/tractusx-dev).

- **Who can propose a feature?**
Anyone, including Committees, Expert Groups, and community members. A dedicated feature author is required.

- **How are dependencies managed?**
Discussed in open refinement meetings and via communication channels (e.g., Matrix chat).

- **Who provides repository access for planning?**
See the [Getting Started Guide](https://eclipse-tractusx.github.io/docs/getting-started/).

## Additional Notes

- The association influences planning to ensure alignment with Catena-X and Eclipse Tractus-X interests.
- Resource commitment for implementation can be provided by dedicated teams or interested developers.
- The maturity of features is jointly decided in open refinement meetings.

For further details, refer to the Tractus-X documentation or contact the relevant association body.
