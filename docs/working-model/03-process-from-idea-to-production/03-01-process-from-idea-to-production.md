---
sidebar_position: 1
---

# Process Organization - From Idea to Release

[//]: <> (ToDo: Add Overarching Timeline, Catena-X Process)

## Tractus-X Process Overview

We use the Committees and Expert Groups of the Catena-X e.V. to align, develop and release Catena-X specifications and standards (candidates) - also with other initiatives in the future. We use the Eclipse Tractus-X Project (e.g., TRGs), the Eclipse Development Process to refine, plan, develop and release our implementation features.

## Catena-X Process Overview

| Tasks             | Documents (e.g. Standards) | Reference Impl. | Outcome |
|-------------------|----------------------------|-----------------|---------|
| Feature Proposal  | Refinement Meetings        | In sig release  | Proposals by C-X e.V. Overview of all feature proposals incl. acceptance criteria. (Task break down over all affected teams / dependencies.) DOE ??? |
| Feature Commitment | Planning Meetings         | In sig release  | Decision by committer group Committed, prioritized backlog for the next release. Coordination / refinement / prioritization of new ideas, business requirements, features (scope C-X only) |
|                   | C-X association tooling    | Sig-release     | Priotized list of Catena-X business requirements (proposal) |
|                   | C-X association tooling    | Sig-release: Discussions, Issues | Product Priotized list of overall business requirements |
|                   | Association meetings (e.g., roadmap) | Tractus-X open meetings (e.g., refinement, planning, …) | Roadmap and issues updated (?) |
| Development of Deliverable | Create (normative) documents | Create open source software / KITs | Deliverables created (Normative Documents, KITs, Reference Implementation (complies to C-X Standards)) |
| Review of Deliverables | Content reviews in expert group | Code reviews (PRs) in Tractus-X | Deliverables reviewed |
| Testing of Deliverables | Member Sounding | Testing of software, test phase, test management, etc. | Deliverables tested |
| Release Deliverables | Quality Criteria and Style Guides | Tractus-X Release Guidelines | Deliverables released |

### Refine and Plan

**How are the open refinement meetings communicated?**
The Catena-X association will communicate and coordiante the open refinement and open planning meetings vi the a Tractus-X [News Page](https://eclipse-tractusx.github.io/blog) and the Tractus-X [Mailing List](https://accounts.eclipse.org/mailing-list/tractusx-dev). Please make sure that you subscribe. The meetings will also be published (with meeting session and calender.ics) on the open meetings page.

**Who can propose a feature?***
Anyone can **propose a feature**, including committees, expert groups, and other initiatives. However, we require a dedicated feature owner for further refinement and the breakdown into implementation issues.

**Who decides on the prioritization and implementation of a feature?**
Once a feature is proposed, the committers, supported by the project leads, will make a **feature commitment** in the open planning meeting based on the stategic / technical fit, features maturity and ressource commitment, among other things.

**Who says that a feature is mature enough (DoE)?**
We require high quality features that make it possible to fully understand the functionality in order to translate it into implementation issues. In addition, at least one subject matters expert must be available to answer questions. To participate in open planning, the following criteria (Definition of Entry) must be met:

- Feature owner defined (e.g., subject matter expert)
- Stategic and technical fit defined
- Business value is defined
- Test cases and test data is are available
- Accpetance criteria are defined
- Feature estimation available
- Ressource commitment is defined*
- Dependencies with other products / issues are mapped and adressed
- Known rsiks are properly adressed
- No open questions left
- Preferred: First implementation issues are defined

** There are two options regarding resource commitment:

1. If you have dedicated developer resources, your developer team will create the implementation issues at the user story level.
2. If you do not have dedicated developer resources, interested developers team can create the implementation issues.

Ultimately, the decision regarding maturity is made jointly by the affected products and contributers in the open refinement meetings.

**Who gives access to the sig-release repository to enable planning process?**

Please refer to our Tractus-X [Getting Started Guide](https://eclipse-tractusx.github.io/docs/oss/getting-started).

**How to handle dependencies?**
Dependencies can be discussed in our open refinement meetings as well as via our other communication channels (e.g. martix chat or bilateral sessions). Please refer to our Tractus-X [communication rules](https://eclipse-tractusx.github.io/community/intro).

### Step by step contribute Guide

:::info
ToDo: Contribution Guide
:::

### Feature Development

For open-source reference implementations please refer to the Eclipse Handbook and the Tractus-X release guidelines..

### Test Management

The software testing of reference implementations is sponsored and coordinated by the Catena-X association. It includes the following three levels:

- Level 1: Product Tests
- Level 2: Release Tests
- Level 3: Test Beds for 3rd Party Solutions

## Level 1 – Product Tests

Product tests include unit, regression and integration tests based on product helm charts with individual dependencies.  

Contributors can create pull requests (PRs) for their developed features at any time. A PR must be assigned to a feature issue committed in the open planning. To get faster code reviews, it is recommended to submit small PRs.

A PR must include the feature code, adapted helm chart(s), technical documentation as well as product tests (e.g., unit tests) and product integration tests (e.g., by using helm charts or mocks). All these tests must be passed locally before the PR can be submitted.

**Hint:** You can find the latest versions of the product helm charts in our release [changelog](https://eclipse-tractusx.github.io/CHANGELOG).

At least two committer must review the PR, including the source code, test results and the compliance with the Tractus-X release guidelines (TRGs), and approve the merging of these changes. In case there are change requests or defects that a committer cannot solve, the contributor must address these changes before merging.

The PR and the related product tests are part of the open-source development process resulting in a new product (rc-)version.

## Level 2 – Release Tests

The release tests include e2e tests for the Catena-X operating system (cxOS) itself as well as for the cxOS with open-source applications (e.g., Trace-X) based on [umbrella helm charts](https://github.com/eclipse-tractusx/tractus-x-umbrella). Thereby, various product combinations of umbrella helm charts are possible.

The purpose of release testing is for the feature requestor to validate the end-to-end business flow using various test executions and to confirm that the acceptance criteria have been fulfilled (business value).

Before a product can participate in a release test, it must fulfill the following **prerequisites**:

For release 24.08, expert groups of the Catena-X association must ...

- create new or refine existing e2e test cases, test data and documentation as .md-file in Tractus-X [sig-testing](https://github.com/eclipse-tractusx/sig-testing).
- provide at least one tester for the execution of the e2e test cases (if not fully automated).

The Catena-X association will provide a test management team including ...

- a test manager that creates the test plan and report, coordinates the test execution.
- a DevSecOps engineer for setting up test environment infrastructure (based on the hotel budapest approach).
- a DevSecOps engineer for deploying the umbrella helm chart of release candidates (supported by Tractus-X committer, if not fully automated yet).

The release tests result in a validated version of the cxOS, which is made available through quarterly Eclipse [Tractus-X releases](https://projects.eclipse.org/projects/automotive.tractusx).

## Level 3 – Test Beds

Coming soon...

## Defect Management

Defects or unexpected behavior must be reported as bugs in the [sig-release repo](https://github.com/eclipse-tractusx/sig-release/issues/new/choose).

### Release Management

:::info
ToDo: Release
:::

### Security Mangement

:::info
ToDo: Security, Managing and Reporting Vulnerabilities, Communication
:::

### High-Level Meeting Structure

:::info
ToDo: Meeting Strucutre
:::

### Communication

:::info
ToDo: Meeting Communication
:::

### Branding & Trademark

:::info
ToDo: Branding & Trademark
:::

### Interfaces Catena-X e.V

Coming soon...

### Community

- [Catena-X Community Introduction](https://eclipse-tractusx.github.io/community/intro)
