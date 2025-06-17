---
sidebar_position: 5
title: Tractus-X Release 
---

The development of open source components in Tractus-X is a collaborative effort between the association bodies (Committees and Expert Groups) and the [open source community]. The association bodies ensure that feature requests align with the strategic goals of the project, meanwhile, the open source community ensures the delivery high-quality code. Together, they ensure the interests of Catena-X and Eclipse Tractux-X are consirdered and respected.

The release of content in Tractus-X is governed by the open source community. The association however takes influence on the planning concerning its interests. The release process for Tractus-X is devided into four phases:

1. [Planning](#1planning)
2. [Implementation](#2implementation)
3. [Testing](#3testing)
4. [Release](#4release)

![Overview Tractus-X Release phases](assets/release-planing-next-steps-horizontal-tractus-x.drawio.svg)

## 1.Planning

The Preparation Phase is crucial for setting the direction and scope of the release. It ensures all stakeholders align on the planned content. During this phase, all work related to KITs, Reference Implementation, API Specification, Protocols, Sample Data, Architecture, Documentation, Deployment Scripts, or Tutorials should be announced.

Anyone can contribute by creating an issue in Tractus-X. The creator is responsible for refining the proposal until it meets the minimal content requirements for validation. Depending on the feature proposal it needs to be broken down into detailed specifications, addressing any ambiguities, and preparing comprehensive plans that guide the subsequent development and implementation activities. The goal is to ensure that all aspects of the project are clearly understood, accurately defined, and ready to be built, reducing the risk of issues during the implementation phase.

In the Open Planning, upcoming release items are reviewed, and issues submitted on time are presented. This is the final opportunity for feedback on a proposal's scope. After the presentation, committers will prioritize proposals in coordination with topic owners.

## 2.Implementation
<!--
# KIT Initial Pull Request

## Milestone

KIT creators to prepare the initial pull request for their KIT in the Tractus-X website repo.

## To Dos for KIT Creator

- Check and follow the Tractus-X Release Guidelines for KITs (TRG 9.01) before doing your pull request.
- Ensure that all GitHub workflows are successful (e.g., 3rd party dependency, markdown linting, security).
- Initial pull request for the KIT has to be created latest 4 weeks before the release date.
- Assign MD OG & Senior Expert Standardization as Reviewers (mandatory) and experts/committers from your product.

## To Dos for KIT Reviewer

- Review/approve the initial pull request and give detailed feedback within 2 weeks.
- General review criteria include consistency, coherence, and overall quality checks across all KITs – content should be reviewed beforehand by a responsible CX association committee.
- Objective review criteria are currently being finalized.

# KIT Final Pull Request

## Milestone

To Dos for KIT Reviewer:

- Approve final pull request.
- If necessary, give feedback asap, at the latest within 1 week.
- Merge pull request after reviews/approvals.

-->

## 3.Testing

Test management involves the planning, execution, and monitoring of testing activities to ensure the quality and functionality of software products. Effective test management requires careful planning, execution, and monitoring. By utilizing a wide range of tools and by managing both internal and external dependencies, we can ensure high-quality software releases that meet user expectations and business requirements.

:::warning[NOTE]
The test management tools are owned by the association and is provided to association members exclusively and not the open source community!
:::

<!--
# Feature Freeze / Kick-Off E2E Test (mid of Increment 5)

## Milestone

No further development of features and functions.

- Committed content for the current CX Release package shall be available.
- Any deviations must be documented and communicated, especially items not covered or incomplete.

## Code Version

- FOSS: tagged at least / best case: released in Tractus-X.
- All relevant and active TRGs are fulfilled for deployment.
- A released product Helm-Chart is available.

## Testing

- Unit-Tests and/or Tests at the end of a Sprint are successfully completed and results documented.

The final integration test is not an independent test but rather builds upon previous testing efforts, ensuring seamless integration across the system.

# Integration Testing

## Task

Integration testing pinpoints those communication issues between software components. It usually occurs after unit testing and before system testing.

## To Dos

- Components of the software are gradually integrated and tested as a unified group.
- Find defects that surface due to code conflicts between software modules when they are integrated with each other.

## Outcome

- Components are working well.
- No conflicts between software modules such as:
  - Incompatibility between subsystem versions.
  - Data format conflict.
  - Different processing logic.

# E2E Test

## Task

End-to-end testing covers verification of the entire software application from start to finish. E2E tests include all the systems, components, and integrations involved in the application’s workflow.

## To Dos

- Test in a production-equivalent environment to simulate real scenarios.
- Simulate various user journeys from simple to complex.
- Test the software interacts with external applications instead of only focusing on an internal codebase like an integration test does.
- Review the developed results and check if they fit the requirements.

## Outcome

- Applications are verified from start to finish.
- Components work together seamlessly and meet user expectations.
-->

## 4.Release
<!--- All necessary tasks are performed to ensure that the software is stable, bug-free, and ready for delivery to users.-->

<!--
This phase involves breaking down high-level requirements into detailed specifications, addressing any ambiguities, and preparing comprehensive plans that guide the subsequent development and implementation activities. The goal of this phase is to ensure that all aspects of the project are clearly understood, accurately defined, and ready to be built, reducing the risk of issues during the implementation phase.

### Planning ToDo's

- [Feature proposal creation and approval]
- [Feature proposal refinement]

### Planning milestones

- [Refinement day]
- [Draft feature freeze]
- [Release planning days]

## 3.Testing

The development and release phase includes the development of the software and KITs. The individual units are developed and tested in up to six increments. This is followed by final integration and end-to-end test for the software.

### Development ToDo's

- [Development (Increment 1 - 6)]

### Development milestones

- [Initial pull request]
- [Final pull request]
- [Feature freeze]
- [Release freeze]
- [E2E test]

## 4.Release

## FAQs

**How are the open meetings communicated?**
The Catena-X association will communicate and coordinate the open refinement and open planning meetings vi the a Tractus-X [News Page](https://eclipse-tractusx.github.io/blog) and the Tractus-X [Mailing List](https://accounts.eclipse.org/mailing-list/tractusx-dev). Please make sure that you subscribe. The meetings will also be published (with meeting session and calender.ics) on the open meetings page.

**Who can propose a feature?**
Anyone can **propose a feature**, including Committees, Expert Groups, and other initiatives. However, we require a dedicated feature author for further refinement and the breakdown into implementation issues.

**How to handle dependencies?**
Dependencies can be discussed in our open refinement meetings as well as via our other communication channels (e.g. matrix chat or bilateral sessions). Please refer to our Tractus-X [communication rules](https://eclipse-tractusx.github.io/community/intro).

**Who gives access to the sig-release repository to enable planning process?**
Please refer to our Tractus-X [Getting Started Guide](https://eclipse-tractusx.github.io/docs/oss/getting-started).

OLD CONTENT THAT NEEDS TO BE INCORPORATED OR DELETED

TODO THIBAULT

# Detailed describtion of process from idea to release

In order to plan a new feature in Tractus-X several steps must be followed. Each process step is going to be executed by one of these roles:

- **Feature author**: The feature author is going to be the primary point of contact for all questions related to a feature proposal. The feature author carries the feature proposal through the validation and refinement process.
- **Topic Owner** :The topic owner validates new feature proposals for a defined topic to make sure feature proposals align with the strategy for it. The topic owner is usually going to be a Committee.
- **Committer**: *See Tractus X Committer description*

|Information|Description|
|-----------|-----------|
|Feature author|Responsible person to carry the feature proposal through the validation and refinement process|
|Description|Description of WHAT the feature proposal is about.|
|Business value|Description of WHY the feature proposal is relevant.|
|Acceptance criteria|Conditions that must be satisfied for the feature proposal to be accepted|

** There are two options regarding resource commitment:

1. If you have dedicated developer resources, your developer team will create the implementation issues at the user story level.
2. If you do not have dedicated developer resources, interested developers team can create the implementation issues.

### Feature assignment & validation

Responsible: Committee & Expert Group

Once a new feature proposal has been made for the Tractus-X project, it enters a validation phase where the Committees assigns it to the relevant Expert Group.

- **Validation:** The Committee assigns the feature to the matching Expert Group (at least two specific contacts). The Expert Group will review the proposal to ensure it aligns with the project's goals and standards.
- **Request for Additional Details:** If the proposal lacks necessary details, the reviewing bodies may ask the author for additional information or clarification.

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

-->