---
sidebar_position: 2
title: Roadmap Planning
---

The roadmap represents all initiatives within the association aimed at making significant progress in the data space. It serves as a guide for association bodies to align their efforts and informs users about the expected delivery of high-impact features. Therefore, careful planning and accurate estimations of target release dates are essential for effective roadmap management.

The planning of roadmap items is not directly triggered by a specific event – roadmap items can always be created involving Committees, Expert Groups, and all association members, working together toward their shared goal of advancing the data space.

![Breakdown Roadmap Items](./assets/planning-breakdown.drawio.svg)

:::note
There are two main meetings (hosted by the association), where the association members can discuss and align on future roadmap items and map them to specific **ecosystem releases**:

- Roadmap Item Proposal Meeting
- Internal Planning Day

:::

:::tip[Release Roadmap Board]
All roadmap planning, timelines, and items can be found in the [Release Roadmap Board](https://github.com/orgs/catenax-eV/projects/28)
:::

## Roadmap Planning Overview

| Event                     | Focus                                | Main Actors               | Output                |
|---------------------------|--------------------------------------|---------------------------|-----------------------|
| **Proposal Meeting**      | Present and align roadmap items      | Committees, Expert Groups | Draft roadmap items   |
| **Refinement**            | Add sub-issues, define contributions | Expert Groups             | Refined roadmap items |
| **Internal Planning Day** | Validate and plan implementation     | Committees, Members       | Finalized roadmap     |

## Roadmap Item Proposal Meeting

The **Roadmap Item Proposal Meeting** is a milestone in the middle of the Catena-X release planning process. It serves to **present, discuss, and refine proposed roadmap items** that contribute to upcoming ecosystem releases (e.g., *CX-Titan*).  
The meeting ensures transparency, strategic alignment, and collaboration between **Committees** and **Expert Groups**.

:::note[TL;DR]

- The proposal meeting introduces and discusses new roadmap items.
- Committees ensure strategic alignment and oversight.
- Expert Groups prepare linked issues that describe required tasks and contributions.
- Refinement continues after the meeting until items are ready for implementation planning.

:::

### What Is Expected Before the Meeting

- Create a **Roadmap Item (Proposal)** using the provided **[issue template](https://github.com/catenax-eV/sig-roadmap/issues/new?template=roadmap-item.yml)**.
- Include at least:
  - **Title** – Clear and concise
  - **Description** – Brief explanation of scope and expected outcome
  - **Responsible Committee** – Assigned via the `supported-by` field; the Committee feels responsible or is driving the issue
  - **Related Expert Groups** – Assigned via yellow labels in GitHub; indicates the Expert Group is requested to contribute/support
  - **Target Ecosystem Release** – The release where the roadmap item will be fully implemented (including sub-issues), e.g., `CX-Titan`
- Align with the responsible Committee before the meeting (**mandatory**).
- **Coordinate early** with all expected **contributing Expert Groups**.

:::warning
The *milestone* property is **not** set during creation. It will be defined by the Release Manager during the Internal Planning Day, based on the target ecosystem release defined in the roadmap item.
:::

### What Happens During the Meeting

#### Presentation of Roadmap Items

Each Group (Committee or Expert Group) presents their proposed roadmap items, highlighting objectives, expected outcomes, and relevance for the release.  
Items should already be created using the official **Roadmap Item Issue Template** in GitHub.

#### Assignment to Committees

Every roadmap item is linked to a **responsible Committee**. Committees oversee and support the item, ensuring strategic fit with the overall roadmap, but they do **not necessarily execute** the work themselves.

#### Coordination with Expert Groups

Expert Groups can propose new items, but these must first be **aligned with the responsible Committee** before presentation.  
The Committee confirms whether the topic fits the roadmap strategy.

:::warning[No Decisions Yet]
The meeting focuses on **presentation and alignment/refinement**, not on final approval. This phase prepares the items for deeper refinement and technical breakdowns in subsequent sessions.
:::

### What Happens After the Meeting

After the proposal meeting, the detailed refinement starts.  
Since the goals of the next ecosystem release have been introduced through roadmap item proposals, the preparation for the Internal Planning Day can begin.

:::note
Until now, only an idea was discussed – it is now time for the requested groups to align and specify their detailed tasks and contributions to fulfill the respective Roadmap Item Proposal.
:::

- The assigned groups analyze the roadmap item and prepare **contribution issues** (e.g., Expert Group tasks, change requests, open source issues).
- These issues are **linked** to the roadmap item to ensure traceability.
- The focus is on **refinement and planning, not execution** – defining what needs to be done to achieve the roadmap item by the targeted release.

By the time of **Internal Planning** and **Open Source Planning**, all roadmap items should be **specified enough to start implementation**.

:::note
A roadmap item is considered **specified enough** when all contributing groups have created and linked their issues, and the overall scope is clear.  
This does not mean that all tasks are fully detailed, but there should be a shared understanding of what needs to be done.
:::

#### Creating and Linking Sub-Issues

There are three types of possible sub-issues that can be created and linked to a roadmap item:

- **Expert Group Task** – Created in the respective Expert Group repository
- **[Standard](https://github.com/catenax-eV/product-standardization-prod/issues/new?template=3-standard-request.yml) / [Change Request](https://github.com/catenax-eV/product-standardization-prod/issues/new?template=4-change-request.yml)** – Created in the standardization repository
- **[Open Source Issue](https://github.com/eclipse-tractusx/sig-release/issues/new?template=1_feature_template.md)** – Adaptations in reference implementations or KITs

:::tip
Each issue type has its own **template** available in the respective repository. These templates guide contributors in providing all required details quickly and consistently.
:::

## Internal Planning Day

Once roadmap items have been refined, they move into the **Internal Planning Day** for cross-Committee validation and scheduling.

All roadmap items must be presented at least once during the **C-X Internal Planning Day**. While this does not necessarily have to happen in the meeting immediately preceding the start of work, it should take place as soon as the scope is clearly defined.

The purpose of the meeting is to introduce ready defined roadmap items for the upcoming release. It provides an open forum where participants can present their concepts, allowing association members to gain early insights, identify key stakeholders, and gather feedback from the broader community.  
The responsible Committee or Expert Group presents the roadmap items to initiate discussions among association members. The expected outcome is a clear understanding of the scope and the identification of any further alignment needs for the refinement phase.

:::warning[TIP]
This is the **first announcement** of intended activities for the upcoming release.  
**Principle:** Let all association members know what is coming next and gather feedback early.
:::

## Meeting Details

- **Attendees:** Open to all association members; Committees and Expert Groups should be present.
- **Invitation:** Managed by the CX-Release Management and sent to all association members active in an association body.
- **GitHub:** Specific access to the roadmap board is required – managed by the [Association Office](../organizational-structure/catena-x-office.md).
- **Access:** Only Catena-X e.V. members are allowed to get access.
