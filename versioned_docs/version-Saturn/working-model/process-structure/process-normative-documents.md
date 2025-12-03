---
sidebar_position: 4
title: Release of Standards
---

:::warning[NOTE]
This page contains a summary of the standardization process. The normative description of the process can be found [here](https://catena-x.net/wp-content/uploads/2025/03/Catena-X_IP_Regelwerk_IP_Regulations.pdf).
:::

Every Standard that is officially released under the umbrella of Catena-X MUST follow a specific process comprised out of four stages:

1. [Request](#1request)
2. [Creation](#2creation)
3. [Verification](#3verification)
4. [Release](#4release)

Whereby each stage is accompanied by a quality gate, which MUST ensure that all Catena-X principles (e.g. the ten Golden Rules) remain intact and are not compromised.

![Standardization Process High Level](./assets/process_standardization_high_level.drawio.svg)

The Catena-X Association strictly differentiates between normative (standards and non-technical requirements) and non-normative (white papers) documents. The process for normative documents is a normative process on its own which is strictly aligned with the anti-trust laws (see Operating Model).

## Standards

Each standard is owned by a [Committee](../organizational-structure/committee.md) which holds the sole authority to approve any modifications contentwise. Any request to modify a standard must first be approved by the standard's owner. All requests lacking the approval are going to be declined in the request process.

The standard owner can decide if they want to do the changes themself or if they grant the requester the permission to change the standard and only review the changes contentwise. Usually the responsibility to create and maintain is handed over to an [Expert Group](../organizational-structure/expert-group.md).

## Release Stages For Standards

### 1.Request

All [Standard Request](#standard-request) to create a new or update a Standard must be requested the in <!-- markdown-link-check-disable -->[product-standardization-prod repo](https://github.com/catenax-eV/product-standardization-prod/issues)<!-- markdown-link-check-enable--> by raising an issue.  Standard Requests can be created by all Association members.

New Standard Requests must be presented in the [Internal Planning Meeting](#internal-planning-meeting).

A first quality gate (“Quality Gate I”) ensures that Standard Requests moving forward are limited to those that adhere to the values and goals of the Catena-X data ecosystem. Each Standard Request is checked for relevance, redundancy, and conformance. Provided a green light has been given, the Standard Request is transformed into a [Standard Candidate](#standard-candidate) which is officially transferred into the release schedule. If the Standard Requests gets declined, the intended work is finally rejected and will not become part of a Catena-X Standard.

Per Standard only one Standard Request can be created per Release. All Standard Requests MUST be submitted prior to the start of QG1. A later submission of a standard request will be rejected by default!

### 2.Creation

Standard Candidates must be implemented in the [product-standardization-prod repo](https://github.com/catenax-eV/product-standardization-prod/issues). Each Standard Candidate is implemented in an own branch. The branch is created and provided by the [Association Office](../organizational-structure/catena-x-office.md).

If multiple individuals seek to implement a Standard Candidate and need alignment, they must organize this collaboration themselves.

Considering that Catena-X standards are the basis for its operations as well as conformity assessment for all corresponding actors and applications on the data ecosystem, it is of paramount importance that quality standards are met. Therefore some guardrails must be followed:

- **Usage of the Standards template,**
- **Consider the CAC consolidation,**
- **Take into account the Industry Core Basic Standard (CX-0151),**
- **Versioning of APIs,**
- **Aspect models must be existant, released and up to date, and**
- **Asset structure must be defined.**

During the creation of the Standard Candidate it should be reviewed by the responsible Committee to oversee its correctness from a business point of view.

A second quality gate (“Quality Gate II”) thus ensures that only Standard Candidates that correspond to the quality expectations of Catena-X are being released. During QG2, the maturity of the standard is being verified and, provided a green light is given, a technical recommendation for its release is made to the [Management Board](../organizational-structure/management-board.md).

### 3.Verification

Approved Standard Candidates enter a 45-day Opt-Out Phase, during which association members can veto their release for specific reasons, such as:

After this phase, [TC4S](#tc4s) reviews the feedback and addresses concerns. Cleared Standard Candidates are then presented to the [Management Board](../organizational-structure/management-board.md) for formal approval.

- If approved, the Standard Candidate enters the Release Stage.
- If rejected, it will not be released.

### 4.Release

The Release Stage is handled by the [Association Office](../organizational-structure/catena-x-office.md). Approved Standards are published in the [Standards Library](https://catenax-ev.github.io/docs/standards/overview).

## Planning Artifacts

### Internal Planning Meeting

:::warning[TIP]
A planning workshop to align the upcoming activities in regards to Standards.  
:::

The Standard Planning is a dedicated sessions where all planned work on standards is reviewed and discussed. Teams identify [dependencies](https://jschuetz88.github.io/cx-dependencies), address potential issues, and ensure alignment across use cases. The goal is to prepare and validate upcoming changes, ensuring a smoother approval process by the TC4S. This meeting is the final opportunity to coordinate and finalize plans before moving forward with formal submissions.

Meeting details

- **Attendees**: Open to all association members, Committees and Expert Group should be present
- **Invitation**: managed by the C-X Management office, sent to all association members active in an association body
- **GitHub**: Specific access to GitHub (Roadmap needed) -> managed by the [Association Office](../organizational-structure/catena-x-office.md)
- **Access**: Only Catena-X e.V. members are allowed to get access

### Standard Request

A Standard Request is an initial, unvalidated proposal to create or modify a standard. It presents an idea or concept without yet meeting formal criteria or undergoing a quality review.

### Standard Candidate

A Standard Candidate is the result of transforming a Standard Request into a document that adheres to specific formal requirements. While it originates from the initial idea, the Candidate is structured and detailed according to established guidelines and has passed QG1.

### TC4S

The responsibilities of the TC4S (Technical Committee for Standardization) are as follows:

- **Defining and Enforcing Quality Requirements**: The TC4S is responsible for establishing and ensuring adherence to overall quality standards.
- **Independent Operation**: The TC4S acts independently based on a defined standardization process, ensuring unbiased decision-making.
- **Guiding Expert Groups**: The TC4S leads expert groups and subcommittees throughout the standardization process.
- **Supporting the Catena-X Board**: The TC4S assists the Management Board in evaluating and assessing standardization requests.
