# Detailed describtion of process from idea to release

In order to plan a new feature in Tractus-X several steps must be followed. Each process step is going to be executed by one of these roles:

- **Feature author**: The feature author is going to be the primary point of contact for all questions related to a feature proposal. The feature author carries the feature proposal through the validation and refinement process.
- **Topic Owner** :The topic owner validates new feature proposals for a defined topic to make sure feature proposals align with the strategy for it. The topic owner is usually going to be a Committee.
- **Committer**: *See Tractus X Committer description*

This phase involves breaking down high-level requirements into detailed specifications, addressing any ambiguities, and preparing comprehensive plans that guide the subsequent development and implementation activities.

The Planning Phase is crucial because it bridges the gap between initial planning and actual development. By thoroughly detailing and validating all aspects of the project, it reduces the risk of misunderstandings, scope creep, and technical issues during the implementation phase. This phase ensures that all stakeholders have a clear and agreed-upon understanding of what will be built and how, thereby facilitating a smoother and more predictable implementation process.

## Feature Development

1. Sprint Planning by committer
2. Sprint Review by committer
3. Recommended: Product demo as soon as relevant feature(s) are ready to show to get feedback from the community (prototypes are also welcome)

For open-source reference implementations please refer to the Eclipse Handbook and the Tractus-X release guidelines..

## FAQs

**How are the open meetings communicated?**
The Catena-X association will communicate and coordinate the open refinement and open planning meetings vi the a Tractus-X [News Page](https://eclipse-tractusx.github.io/blog) and the Tractus-X [Mailing List](https://accounts.eclipse.org/mailing-list/tractusx-dev). Please make sure that you subscribe. The meetings will also be published (with meeting session and calender.ics) on the open meetings page.

**Who can propose a feature?**
Anyone can **propose a feature**, including Committees, Expert Groups, and other initiatives. However, we require a dedicated feature author for further refinement and the breakdown into implementation issues.

**How to handle dependencies?**
Dependencies can be discussed in our open refinement meetings as well as via our other communication channels (e.g. matrix chat or bilateral sessions). Please refer to our Tractus-X [communication rules](https://eclipse-tractusx.github.io/community/intro).

**Who gives access to the sig-release repository to enable planning process?**
Please refer to our Tractus-X [Getting Started Guide](https://eclipse-tractusx.github.io/docs/oss/getting-started).

## Tractus-X Process Overview

We use the Committees and Expert Groups of the Catena-X e.V. to align, develop and release Catena-X specifications and standards (candidates) - also with other initiatives in the future. We use the Eclipse Tractus-X Project (e.g., TRGs), the Eclipse Development Process to refine, plan, develop and release our implementation features.

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
