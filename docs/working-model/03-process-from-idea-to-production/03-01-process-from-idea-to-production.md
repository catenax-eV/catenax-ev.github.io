---
sidebar_position: 1
---

# Process from Idea to Release to Production (Ab-lauf-Orga)

## General “Timeline”

### C-X Process

- Prozesse für Vereins-internes planning

### T-X Process

We use the Committees and Expert Groups of the Catena-X e.V. to align, develop and release Catena-X specifications and standards (candidates) - also with other initiatives in the future.
We use the Eclipse Tractus-X Project (e.g., TRGs), the Eclipse Development Process to refine, plan, develop and release our implementation features.

## Process Overview

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

### Refine and Plan --> Julia / Daniel

- How will open refinement meetings being communicated and by whom?
- Who will decide on the implementation of a feature? (former PO)
- Who will say this feature is mature enough?
- Who will create the implementation issues (user story)?
- How to handle dependencies?

### Step by step contribute Guide: see Julias MD

- Vgl. Sig-release content

### Develop

For reference implementations please see the Eclipse Handbook.

### Test --> Daniel / Julia

The software testing of reference implementations is sponsored and coordinated by the Catena-X association. It includes the following three levels:

- Level 1: Product Tests
- Level 2: Release Tests
- Level 3: Test Beds for 3rd Party Solutions

## Level 1 – Product Tests

Product tests include unit, regression and integration tests based on product helm charts with individual dependencies.  

Contributors can create pull requests (PRs) for their developed features at any time. A PR must be assigned to a feature issue committed in the open planning. To get faster code reviews, it is recommended to submit small PRs.

A PR must include the feature code, adapted helm chart(s), technical documentation as well as product tests (e.g., unit tests) and product integration tests (e.g., by using helm charts or mocks). All these tests must be passed locally before the PR can be submitted.

**Hint:** You can find the latest versions of the product helm charts in our release [changelog](https://eclipse-tractusx.github.io/CHANGELOG).

At least two committer must review the PR, including the source code, test results and the compliance with the Tractus-X release guidelines (TRGs), and approve the merging of these changes. In case there are change requests or defects that a committer cannot solve, the contributor must address these changes before merging. Defects must be created as bugs in the sig-release repo.

The PR and the related product tests are part of the open-source development process resulting in a new product (rc-)version.

## Level 2 – Release Tests

The release tests include e2e tests for the Catena-X operating system (cxOS) itself as well as for the cxOS with open-source applications (e.g., Trace-X) based on [umbrella helm charts](https://github.com/eclipse-tractusx/tractus-x-umbrella). Thereby, various product combinations of umbrella helm charts are possible.

The purpose of release testing is for the feature requestor to validate the end-to-end business flow using various test executions and to confirm that the acceptance criteria have been fulfilled (business value).

Before a product can participate in a release test, it must fulfill the following **Prerequisites**:

For release 24.08, expert groups of the Catena-X association must ...

- create new or refine existing e2e test cases, test data and documentation as .md-file in Tractus-X [sig-testing](https://github.com/eclipse-tractusx/sig-testing).
- provide at least one tester for the execution of the e2e test cases (if not fully automated).

The Catena-X association will provide a test management team including ...

- a test manager that creates the test plan and report, coordinates the test execution.
- a DevSecOps engineer for setting up test environment infrastructure (based on the hotel budapest approach).
- a DevSecOps engineer for deploying the umbrella helm chart of release candidates (supported by Tractus-X committer, if not fully automated yet).

The release tests result in a validated version of the cxOS, which is made available through quarterly Eclipse [Tractus-X releases](https://projects.eclipse.org/projects/automotive.tractusx).

## Level 3 – Test Beds

The purpose of test beds is to enable solution provider as well as data provider / consumer to test their data exchange infrastrucutre and(3rd party) solutions after an offical Eclipse Tractus-X release.

## Defect Management

Defects or unexpected behavior must be reported as bugs in the [sig-release repo](https://github.com/eclipse-tractusx/sig-release/issues/new/choose).

### Release

- Standards / KITs
- Software
- Release Guidelines

### Security

- Managing and Reporting Vulnerabilities
- Communication

### Methods & Guidelines

- DoE, DoR, DoD
- Software -> Eclipse Handbook

### High-Level Meeting Structure

- Refinement Meetings
- Release Planning Days
- Operativer Status Sync (Nachfolger ?) > Committee Sync
- Sounding Meeting
- ...

### Promoting your content

- Standardization Process

### Communication

- News
- Newsletter
- Website
- Townhalls
- Library, OnePager
- Freigabeprozesse
- ...

### Branding & Trademark

- Names & Trademarks

### Interfaces Catena-X e.V

- Tractus-X: Contributor / Committer Role
- EDWG
- IDTA
- IDSA
- Gaia-X
- Factory-X (???)
- [Whitepaper on DataSpace Governance](https://catena-x.net/fileadmin/_online_media_/231006_Whitepaper_DataSpaceGovernance.pdf)

### Community

- [Catena-X Community Introduction](https://eclipse-tractusx.github.io/community/intro)

### Checklist

- Glossary
- Legal Documents
- Link to Catena-X IP Regelung
- Rahmenordnung

### Topic Store

- Decision Records
- Architektur-Prozess/Architecture Decisions
- Use Case Radar
- Use Case Funnel
- Testing new Use Cases
- Inviting guests to meetings / Voting rights
- Business Release vs. Technical Release
