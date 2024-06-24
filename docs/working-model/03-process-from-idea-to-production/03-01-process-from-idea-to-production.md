---
sidebar_position: 1
title: Process Organization - From Idea to Release
---

Coming soon....

## Tractus-X Process Overview

We use the Committees and Expert Groups of the Catena-X e.V. to align, develop and release Catena-X specifications and standards (candidates) - also with other initiatives in the future. We use the Eclipse Tractus-X Project (e.g., TRGs), the Eclipse Development Process to refine, plan, develop and release our implementation features.

## Catena-X Process Overview

![From idea to release item](./assets/from-idea-to-release-item.drawio.svg)

### Create new feature proposal

- Responsible: Feature Author
- Description: Anybody can contribute to a use case by creating a feature proposal in Tractus X. The person creating the feature proposal is the 'Feature Author' and responsbile for the feature proposal through the process.
- Possible outcomes: Feature proposal created

### Refine feature

- Responsible: Feature Author
- Description: After creating the feature proposal the feature author has to continuously refine the feature until it contains the minimal feature content, so that it can be validated. This step might be obsolete if all information are added when creating the feature proposal.
- Possible outcomes: Submit for validation

### Validate minimal feature content

- Responsible: Topic owner (Committee or Expert Group)
- Description: The topic owner is responsible to assess if the minimal feature content requirements are met by the feature proposal.
- Possible outcomes:
  - Minimal feature content not complete: The feature proposal is being send back to the feature author with the request to further refine the feature proposal
  - Minimal feature content complete

### Check strategic fit

- Responsible: Topic owner
- Description: Once the feature proposal contains at least the minimal feature content, its strategic fit is going to be evaluated by the topic owner
- Possible outcomes:
  - Feature proposal fit strategy: If the feature proposal strategically fits it is going to be added to the Inbox.
  - Strategic fit can't be assessed: If the strategic fit can't be assessed by the topic owner the feature proposal is being send back to the feature author with the request to further refine the feature proposal.
  - Feature proposal does NOT fit: If the topic owner assess the feature proposal as not fitting the strategy, the feature proposal is going to be rejected. In this case the feature proposal is not going to be implemented.

### Refine feature to meet DoE

- Responsible: Feature author
- Description: Once the feature is validated, the feature author has to further refine the feature to meet the DoE. The refinement can be done by setting up individual refinement meetings for the feature proposal and inviting relevant people or by presenting the feature proposal in the Open Refinement. Each feature proposal has to be presented at least once in the Open Refinement so that the whole community has the chance to provide feedback.
- Possible outcomes: DoE complete

### Present feature proposal in Open Refinement

- Responsible: Feature author
- Description: The feature proposal is presented in the Open Refinement to receive feedback from the community.
- Possible outcomes: DoE complete

### Check DoE

- Responsible: Committers
- Description: Once the DoE for a feature proposal are complete, the committers are going to assess the maturity of the feature proposal.
- Possible outcomes:
  - DoE met: If the committers assess the feature proposal mature enough, it is going to be added to the Backlog.

### Present feature in Open Planning

- Responsible: Feature author
- Description: The feature proposal is going to be presented in the Open Planning to be prioritized and be planned for the release.
- Possible outcomes: Feature proposal was presented

### Commit to feature proposal

- Responsible: Committers
- Description: The committers are deciding on the scope of the upcoming release. All feature proposals presented in the Open Planning are going to be prioritized.
- Possible outcomes:
  - Committed: The feature proposal gets the commitment from the committers and is added to the upcoming release.
  - Not committed: The feature proposal is not committed by the committers and wont be part of the upcoming release. The feature proposal is going to be presented again in the Open Planning for the following release.

## Artifacts

### Process roles

|Role|Description|
|-----------|-----------|
|Feature author|The feature author is going to be the primary point of contact for all questions related to a feature proposal. The feature author carries the feature proposal through the validation and refinement process.|
|Topic Owner|The topic owner validates new feature proposals for a defined topic (product) to make sure feature proposals align with the strategy for it. The topic owner is usually going to be a Committee.|
|Committer|*See Tractus X Committer description*|

### Minimal feature content

The minimal feature content is a subset of the DoE. It defines the minimal information that need to be provided before a feature proposal can enter the validation and refinement process.

|Information|Description|
|-----------|-----------|
|Feature author|Responsible person to carry the feature proposal through the validation and refinement process|
|Description|Description of WHAT the feature proposal is about.|
|Business value|Description of WHY the feature proposal is relevant.|
|Acceptance criteria|Conditions that must be satisfied for the feature proposal to be accepted|

### Definition of Entry (DoE)

|Information|Description|
|-----------|-----------|
|Minimal feature content|*see Minimal feature content*|
|Dependencies|Dependencies with other products or issues are identified and categorized via GitHub labels|
|Risks|Known risks are properly addressed|
|Enablers|Required enablers are defined (*isn't that a dependency?*)|
|High level architecture (building block view)||
|Key dates and milestones|Key dates and milestones are defined using GitHub milestone declaration|
|Testing|Test scenarios, test cases and test data are available|
|Effort estimation|The effort to implement the feature is estimated (based on story points)|
|Developer|Developer team for feature implementation defined|
|Issues|First implementation issues are defined in the corresponding repository and linked to the feature (optional)|

### Open Refinement

The Open refinement is meant to...

The Catena-X association communicates and coordinates the open refinement and open planning meetings via the a Tractus-X [News Page](https://eclipse-tractusx.github.io/blog) and the Tractus-X [Mailing List](https://accounts.eclipse.org/mailing-list/tractusx-dev). Feature authors must make sure to subscribe! The meetings are also be published (with meeting session and calender.ics) on the open meetings page.

### Open Planning

During the Open Planning the items for upcoming release are planned. All feature proposals that were handed in on time are going to be presented to the audience. The Open Planning is the last chance to provide feedback about the scope of the feature proposal. After the presentation of the feature proposal by the feature author, the committers are going to prioritize the feature proposal in alignment with the topic owner. A feature proposal becomes part of the upcoming release only by receiving the commitment by the committees and not by being presented in the Open Planning!

To enter the Open Planning a feature proposal must meet the DoE X days before the Open Planning (Cut-Off)! Feature proposal that meet the DoE after the Cut-Off won't be considered in the Open Planning. This means it will likely be deferred to a future release.

| Tasks             | Documents (e.g. Standards) | Reference Impl. | Outcome |
|-------------------|----------------------------|-----------------|---------|
| Feature Proposal  | Refinement Meetings        | In sig release  | Proposals by C-X e.V. Overview of all feature proposals incl. acceptance criteria. (Task break down over all affected teams / dependencies.) DOE ??? |
| Feature Commitment | Planning Meetings         | In sig release  | Decision by committer group Committed, prioritized backlog for the next release. Coordination / refinement / prioritization of new ideas, business requirements, features (scope C-X only) |
|                   | C-X association tooling    | Sig-release     | Prioritized list of Catena-X business requirements (proposal) |
|                   | C-X association tooling    | Sig-release: Discussions, Issues | Product prioritized list of overall business requirements |
|                   | Association meetings (e.g., roadmap) | Tractus-X open meetings (e.g., refinement, planning, …) | Roadmap and issues updated (?) |
| Development of Deliverable | Create (normative) documents | Create open source software / KITs | Deliverables created (Normative Documents, KITs, Reference Implementation (complies to C-X Standards)) |
| Review of Deliverables | Content reviews in Expert Group | Code reviews (PRs) in Tractus-X | Deliverables reviewed |
| Testing of Deliverables | Member Sounding | Testing of software, test phase, test management, etc. | Deliverables tested |
| Release Deliverables | Quality Criteria and Style Guides | Tractus-X Release Guidelines | Deliverables released |

### Refine and Plan

**Who can propose a feature?***
Anyone can **propose a feature**, including Committees, Expert Groups, and other initiatives. However, we require a dedicated feature owner for further refinement and the breakdown into implementation issues.

** There are two options regarding resource commitment:

1. If you have dedicated developer resources, your developer team will create the implementation issues at the user story level.
2. If you do not have dedicated developer resources, interested developers team can create the implementation issues.

### Feature assignment & validation

Responsible: Committee & Expert Group

Once a new feature proposal has been made for the Tractus-X project, it enters a validation phase where the Committees assigns it to the relevant Expert Group.

- **Validation:** The Committee assigns the feature to the matching Expert Group (at least two specific contacts). The Expert Group will review the proposal to ensure it aligns with the project's goals and standards.
- **Request for Additional Details:** If the proposal lacks necessary details, the reviewing bodies may ask the author for additional information or clarification.

### Feature refinement

Responsible: Feature author

After being validated and initially prioritized by the Expert Group, the refinement process starts. The feature author must gather their peer group (such as experts, contributors, and committers) for example by publishing a virtual meeting invite for the feature issue to be refined.

The goal is to have features that fulfill the following **Definition of Entry (DoE)**:

- Feature author defined: The designated point of contact for any questions related to the feature during the refinement, planning and development phase (e.g., subject matter expert). Not necessarily responsible for the technical implementation of a feature.
- Feature description is available
- Required enablers are defined and aligned (e.g., architecture, infrastructure, compliance)
- High-level architecture (building-block-view)
- Key dates and milestones are defined using GitHub milestone declaration
- Business value is defined
- Test scenarios, test cases and test data are available
- Acceptance criteria are defined
- Feature estimation available (based on story points)
- Developer team for feature implementation defined
- Dependencies with other products or issues are identified and categorized via GitHub labels
- Known risks are properly addressed
- No open questions left
- First implementation issues are defined in the corresponding repository and linked to the feature (optional)
...

Ultimately, the decision regarding maturity is made jointly by the affected products and contributors in the open refinement meetings.

**Feature author responsibility in the refinement:**

- **Responding to feedback:** The author is responsible for addressing any feedback provided by the Expert Group or Committee. This may include providing additional details or making revisions to the proposal.
- **Implementation issues:** If necessary, the author may need to create implementation issues in the repository of the corresponding product to break down the feature into manageable pieces. This aids in tracking progress and facilitates easier review.
- **Timely Updates:** The author must update the feature details within the given timeframe. Prompt responses and updates are crucial to keep the proposal moving forward.

### Feature validation and approval

Responsible: Feature author

- **Approval for Planning:** Once the feature has sufficient details and meets the Definition of Done (DoE), the feature author needs to submit it to the Committee or Expert Group (specific contacts mentioned in the feature) and a committer for approval.
- **Status of the Feature** in the SIG-release repository will be set to 'Backlog' by a committer (in alignment between Expert Group, Committee and the respective feature author). This status indicates whether the feature is included in the list for open planning or not.
- **Continuous Communication:** The author should maintain close communication via the feature issue with the Expert Group and Committee throughout this process to ensure prompt resolution of any issues.

### Open Planning meeting

Responsible: Feature author

During the open planning meeting, the feature author must present the features they are responsible for, and the committers will prioritize them in alignment with the Expert Group.

- **Open Planning Cut-off:** Features must have mandatory content from the DoE and approval (2.3) before the open planning meeting. This is a critical deadline.
- **Consequences of Missing Deadline:** If the feature does not meet the DoE or missing the approval by the open planning, it will not be included in the planning cycle. This means it will likely be deferred to a future release.

By following this process, authors can ensure their feature proposals are considered for inclusion in the Tractus-X project's planning. It is important to be proactive, responsive, and detail-oriented to successfully navigate the post-proposal phase.

## Open Release Planning Meeting

Once a feature is through the propose and refinement process (2.) the feature will be presented in the open planning meeting and the committer will prioritize them based on the strategic / technical fit and resource commitment in alignment with the Expert Groups of the Catena-X association.

The open release planning meeting also called Program Increment (PI) planning is a critical event in the Tractus-X project where contributors, committers, Expert Groups, and Committees come together to define the scope for the next release. This process ensures that the project's roadmap is aligned with stakeholder expectations and the project's strategic objectives. Here's how the release Planning process typically unfolds:

- **Attendees:** Contributors, committers, Expert Groups, and Committees attend the release planning meeting.
- **Scope Definition:** The main objective of this meeting is to determine the scope of the upcoming release. This involves discussing the refined features and confirming the prioritized backlog.
- **Prioritized backlog:** The backlog will be reviewed to ensure that it aligns with the project's strategic direction and available resources. Before the open release planning meeting, Committees and Expert Groups can pre-prioritize the backlog. However, the final prioritization is done by the committers.

### Decision-Making by Committers

- **Realistic Scope Assessment:** Committers play a crucial role in the release planning process. They assess the proposed features and backlog issues to determine what is realistically achievable in the next release, considering review, maintenance, and test efforts.
- **Final Prioritization:** Committers have the final call on the prioritization of issues, ensuring that the most critical and feasible items are included in the release scope.
- **Resource Allocation:** Decisions regarding the allocation of resources, including developer time and testing infrastructure, are made to support the prioritized issues.

### Outcome of Open Planning

- **Prioritized backlog:** Decision by committer group Committed, prioritized backlog for the next release.
- **Resource commitment:** Teams and individuals commit to the work they will deliver, fostering accountability and setting clear expectations for the upcoming release.
- **Updated roadmap:** The project's roadmap is updated to reflect the decisions made during the release planning, providing transparency to stakeholders and the community. [TO-DO clarify location of the roadmap / where will this be published]
- **Decisions are documented:** All decisions and commitments made during the planning are documented in the decision board or directly in the comment section of a feature. [TO-DO link to the architecture decision board]
- **Communication plan:** After the planning a communication via mailing-list will be done by the project lead including the relevant links and decisions.

## Feature Development

1. Sprint Planning by committer
2. Sprint Review by committer
3. Recommended: Product demo as soon as relevant feature(s) are ready to show to get feedback from the community (prototypes are also welcome)

For open-source reference implementations please refer to the Eclipse Handbook and the Tractus-X release guidelines..

## Test Management

The software testing of reference implementations is sponsored and coordinated by the Catena-X association. It includes the following three levels:

- Level 1: Product Tests
- Level 2: Release Tests
- Level 3: Test Beds for 3rd Party Solutions

### Product Tests

Product tests include unit, regression and integration tests based on product helm charts with individual dependencies.  

Contributors can create pull requests (PRs) for their developed features at any time. A PR must be assigned to a feature issue committed in the open planning. To get faster code reviews, it is recommended to submit small PRs.

A PR must include the feature code, adapted helm chart(s), technical documentation as well as product tests (e.g., unit tests) and product integration tests (e.g., by using helm charts or mocks). All these tests must be passed locally before the PR can be submitted.

**Hint:** You can find the latest versions of the product helm charts in our release changelog.

:::info
Work in progress
:::

At least two committer must review the PR, including the source code, test results and the compliance with the Tractus-X release guidelines (TRGs), and approve the merging of these changes. In case there are change requests or defects that a committer cannot solve, the contributor must address these changes before merging.

The PR and the related product tests are part of the open-source development process resulting in a new product (rc-)version.

### Release Tests

The release tests include e2e tests for the Catena-X operating system (cxOS) itself as well as for the cxOS with open-source applications (e.g., Trace-X) based on [umbrella helm charts](https://github.com/eclipse-tractusx/tractus-x-umbrella). Thereby, various product combinations of umbrella helm charts are possible.

The purpose of release testing is for the feature requestor to validate the end-to-end business flow using various test executions and to confirm that the acceptance criteria have been fulfilled (business value).

Before a product can participate in a release test, it must fulfill the following **prerequisites**:

For release 24.08, Expert Groups of the Catena-X association must ...

- create new or refine existing e2e test cases, test data and documentation as .md-file in Tractus-X [sig-testing](https://github.com/eclipse-tractusx/sig-testing).
- provide at least one tester for the execution of the e2e test cases (if not fully automated).

The Catena-X association will provide a test management team including ...

- a test manager that creates the test plan and report, coordinates the test execution.
- a DevSecOps engineer for setting up test environment infrastructure (based on the hotel budapest approach).
- a DevSecOps engineer for deploying the umbrella helm chart of release candidates (supported by Tractus-X committer, if not fully automated yet).

The release tests result in a validated version of the cxOS, which is made available through quarterly Eclipse [Tractus-X releases](https://projects.eclipse.org/projects/automotive.tractusx).

### Test Beds

Coming soon...

### Defect Management

Defects or unexpected behavior must be reported as bugs in the [sig-release repo](https://github.com/eclipse-tractusx/sig-release/issues/new/choose).

### Test Artifacts

There are various testing artifacts, that are either managed in Tractus-X GitHub or the Test Management Tool.

- In **GitHub** we manage the different user journeys and related business scenarios as .md files.
- In the **Test Management Tool** we manage test cases, test sets (opt.), test executions as well as test plans and reports.

| Artifact          | Artifact Owner          | \# per Release |
| ----------------- | ----------------------- | -------------- |
| Test Case(s)      | Product / Expert Group  | n              |
| Test Set(s)       | Product / Expert Group  | n              |
| Test Execution(s) | Product / Expert Group  | n              |
| Test Plan         | Test Manager            | 1              |
| Test Report       | Test Manager            | 1              |

## Release Management

Catena-X **Release Management** is a crucial component within the broader Catena-X ecosystem, focused on orchestrating and overseeing the release cycles of both Catena-X and Tractus-X. Here's an overview of how Catena-X Release Management operates and coordinates these releases:

### Purpose of Catena-X Release Management

- **Streamlining Releases**: Catena-X Release Management aims to streamline the process of releasing updates, upgrades, and new features for both Catena-X and Tractus-X.
- **Ensuring Compatibility**: It ensures that releases across different components are compatible and seamlessly integrate with each other.
- **Quality Assurance**: Quality assurance and testing are integral parts, ensuring that released versions meet high standards of performance, security, and reliability.

### Key Responsibilities

- **Release Planning**: This involves strategizing the timing and content of releases based on development milestones, customer feedback, and market demands.
- **Version Control**: Managing versioning across different components to maintain clarity and consistency across software, standards and deployment.
- **Coordination with Development Teams**: Collaborating closely with development teams across Expert Groups, Committees and the broader Open Source community to align on release schedules, feature prioritization, and bug fixes.
- **Testing and QA**: Overseeing comprehensive testing processes to identify and address issues before deployment (see ##Test Management).
- **Documentation and Communication**: Ensuring that release notes, documentation, and communication channels are updated and accessible to stakeholders.

### Coordination with Catena-X and Tractus-X

- **Catena-X Integration**: Coordinating releases between Catena-X and Tractus-X involves understanding the dependencies and interactions between both components of our ecosystem.
- **Feature Alignment**: Ensuring that standards developed for Catena-X and features & KITs developed for Tractus-X are aligned with overarching goals and customer requirements.
- **Interoperability**: Guaranteeing interoperability between Catena-X standards and Tractus-X features, such as reference implementations to facilitate seamless data exchange and functionality.

### Release Lifecycle

- **Preparation Phase**: Developing and communicating the overarching release timeline including relevant milestones to all stakeholders across Tractus-X and Catena-X.
- **Planning Phase**: Identifying release goals, feature prioritization, and creating a roadmap for implementation.
- **Development Phase**: Actively working with development teams to build and test new features and enhancements.
- **Testing and QA Phase**: Conducting rigorous testing, including integration testing between Catena-X and Tractus-X elements.
- **Deployment Phase**: Deploying releases to production environments while ensuring minimal disruption and downtime. While Catena-X is responsible for providing governance and guidelines for deployments, the actual deployment to productive environments lies within the responsibility of our Operating Companies and participants of the Catena-X Data Space.
- **Monitoring and Feedback**: Monitoring post-release performance, gathering feedback from users, and iterating for continuous improvement.

### Benefits of Catena-X Release Management

- **Efficiency**: Streamlining release processes leads to faster time-to-market for new features and updates.
- **Quality Assurance**: Rigorous testing and QA practices enhance the overall quality and reliability of software releases.
- **Alignment**: Ensures alignment with business objectives, customer needs, and industry standards.
- **Risk Mitigation**: Proactive identification and mitigation of risks associated with releases.

In essence, Catena-X Release Management acts as a central hub that coordinates the complex interplay between Catena-X and Tractus-X releases, ensuring smooth integration, high-quality deliverables, and customer satisfaction.

## Security Management

:::info
Work in progress
:::

## Relevant Links

- [Catena-X Community Introduction](https://eclipse-tractusx.github.io/community/intro)

## FAQs

**How are the open meetings communicated?**
The Catena-X association will communicate and coordinate the open refinement and open planning meetings vi the a Tractus-X [News Page](https://eclipse-tractusx.github.io/blog) and the Tractus-X [Mailing List](https://accounts.eclipse.org/mailing-list/tractusx-dev). Please make sure that you subscribe. The meetings will also be published (with meeting session and calender.ics) on the open meetings page.

**Who can propose a feature?**
Anyone can **propose a feature**, including Committees, Expert Groups, and other initiatives. However, we require a dedicated feature author for further refinement and the breakdown into implementation issues.

**How to handle dependencies?**
Dependencies can be discussed in our open refinement meetings as well as via our other communication channels (e.g. matrix chat or bilateral sessions). Please refer to our Tractus-X [communication rules](https://eclipse-tractusx.github.io/community/intro).

**Who gives access to the sig-release repository to enable planning process?**
Please refer to our Tractus-X [Getting Started Guide](https://eclipse-tractusx.github.io/docs/oss/getting-started).
