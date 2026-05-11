---
title: CX-Roadmap Item Proposal Neptune (R26.09) – Meeting Summary
description: First-entry overview of the Neptune (R26.09) roadmap-item proposal meeting, including categorized items, short summaries, and involved expert groups.
slug: cx-roadmap-item-proposal-neptune-r26-09
date: 2026-04-30
tags: [news, roadmap, neptune, release-planning]
image: /img/news/cx-neptune-roadmap-2026-04-30.svg
---

This post summarizes the CX-Roadmap Item Proposal meeting for **Neptune (R26.09)** held on **Thursday, 30 April 2026 (09:05–12:35)**.
It is intended as a quick onboarding entry point for teams and departments that could not attend.

<!-- truncate -->

## Scope and filter used

- Target Ecosystem Release: **CX-Neptune**
- Focus set: roadmap candidates in **Inbox** (excluding In Progress, Backlog, and Done)
- Source basis: discussed roadmap issue list from the Neptune proposal session

## Quick orientation

- **Main focus areas:** Industry Core, Supply Chain & Quality, Sustainability, Engineering, and Network Services
- **Cross-cutting committees:** ARC, IC, NSC, SCQ, SUS, TC4M, ENG
- **Typical next step for all items:** committee-level refinement into implementable sub-issues for R26.09 planning

## Category: Roadmap items

| Item | Short summary | Labels / expert groups |
| --- | --- | --- |
| [Evaluate and establish a universal event-based notification standard for Catena-X data exchange](https://github.com/catenax-eV/sig-roadmap/issues/699) | Define a shared event-notification baseline for interoperable, cross-company data exchange. | ARC - Committee, IC - Committee, NSC - Company Certificate Management, SCQ - PURIS |
| [Data Exchange Orchestrator API](https://github.com/catenax-eV/sig-roadmap/issues/676) | Specify a common orchestration API to streamline and standardize data-exchange flows. | C-X Next AP7, IC - Committee |
| [[CX-Next TAP 7.1] Adapt BaSyx DTR to work within Catena-X dataspace](https://github.com/catenax-eV/sig-roadmap/issues/656) | Align BaSyx DTR behavior and interfaces with Catena-X dataspace constraints and integration needs. | C-X Next AP7 |
| [[SUS][DPP] Product overview and timeline for DPPs in Catena-X](https://github.com/catenax-eV/sig-roadmap/issues/703) | Build a clear DPP rollout overview and timeline to improve transparency and planning alignment. | SUS - DPP |
| [[Roadmap Item] Bugfix SCDN (CX-0146) API Schema](https://github.com/catenax-eV/sig-roadmap/issues/712) | Correct schema issues in CX-0146 to reduce ambiguity and improve implementation consistency. | SCQ - PURIS |
| [Catena-X: overarching business need for contact person/group](https://github.com/catenax-eV/sig-roadmap/issues/659) | Establish a cross-domain standard approach for business contact person/group exchange. | ARC - Committee, NSC - Committee, NSC - Company Certificate Management, SCQ - Committee, SCQ - DCM, SUS - Committee, TC4M - Committee |
| [[ENG] [MBSE] Credible Simulation Model Exchange](https://github.com/catenax-eV/sig-roadmap/issues/701) | Define trusted, interoperable exchange patterns for simulation models in engineering contexts. | ENG - Committee, ENG - MBSE |
| [Update purl references to comply with the DCMI specification and ADR](https://github.com/catenax-eV/sig-roadmap/issues/705) | Harmonize purl handling with DCMI and ADR guidance for more robust and consistent references. | ARC - Committee, IC - Committee, NSC - BPDM, PQR - Behavior Twin, SCQ - Committee, SCQ - PURIS, TC4M - Committee |
| [Remove legacy requirements for backward compatibility with CX-Jupiter](https://github.com/catenax-eV/sig-roadmap/issues/706) | Retire legacy compatibility constraints to simplify standards and reduce implementation overhead. | ARC - Committee, IC - Digital Twin, NSC - Dataspace Connectivity, NSC - SSI, SCQ - Committee, SUS - PCF - Architecture & Interoperability, TC4M - Committee |
| [Exchange of multiple BPNLs within one capacity group between supplier and customer within CX-0128](https://github.com/catenax-eV/sig-roadmap/issues/711) | Extend CX-0128 to support multi-BPNL capacity-group scenarios used in real DCM operations. | SCQ - DCM |
| [Deprecate standards that became obsolete or never made it to reality](https://github.com/catenax-eV/sig-roadmap/issues/803) | Clean up the standards landscape by deprecating obsolete or non-adopted specifications. | IC - Committee, IC - Digital Twin, NSC - Dataspace Connectivity |

## Category: Ideation items

| Item | Short summary | Labels / expert groups |
| --- | --- | --- |
| [Digital Twin Registry updates to AAS 3.2 IDTA standard](https://github.com/catenax-eV/sig-roadmap/issues/694) | Upgrade DTR alignment to AAS 3.2 to keep Catena-X interoperable with latest IDTA semantics. | C-X Next AP5, IC - Digital Twin |
| [OFTP2 Data Plane Extension for Tractus-X EDC](https://github.com/catenax-eV/sig-roadmap/issues/632) | Explore OFTP2 transport support in EDC data plane for broader industrial connectivity use cases. | ENG - Committee, Internationalization Committee, NSC - Dataspace Connectivity |
| [Deprecate Standards that are not used and/or not supported](https://github.com/catenax-eV/sig-roadmap/issues/704) | Identify low-value standards and prepare structured deprecation decisions for portfolio focus. | _No explicit label listed in source snapshot_ |
| [Publish standards only with major versions of aspect models](https://github.com/catenax-eV/sig-roadmap/issues/707) | Consider governance rule to publish standards only when linked aspect models reach major version maturity. | ARC - Committee, TC4M - Committee |
| [Rework of the CX-0136 Standard according to the Guidelines of the Value Booster Program](https://github.com/catenax-eV/sig-roadmap/issues/709) | Reframe CX-0136 to better match Value Booster criteria and practical adoption expectations. | SUS - PCF - Architecture & Interoperability, TC4S - Committee |
| [(26.06) Material Accounting KIT](https://github.com/catenax-eV/sig-roadmap/issues/710) | Prepare next-step Material Accounting KIT scope to support sustainability reporting use cases. | SUS - Circularity, SUS - Material Accounting |
| [CX-0135 Standard Enhancements for Neptune Release (26.09)](https://github.com/catenax-eV/sig-roadmap/issues/714) | Define incremental CX-0135 enhancements for Neptune and improve certificate-management fit. | NSC - Company Certificate Management |
| [Car SBOM for FOSS compliance](https://github.com/catenax-eV/sig-roadmap/issues/716) | Shape SBOM expectations for FOSS compliance in automotive software delivery chains. | ENG - Committee, ENG - Software |
| [Check adjustments in CX-0158 Car SBOM and CX-XXXX-CarSBOM-ICTS](https://github.com/catenax-eV/sig-roadmap/issues/717) | Validate and align planned adjustments between CX-0158 and related ICTS-oriented SBOM work. | ENG - Committee, ENG - Software |
| [(26.09) CBAM Data Model Update](https://github.com/catenax-eV/sig-roadmap/issues/721) | Prepare CBAM data-model refinements needed for Neptune sustainability compliance scope. | _No explicit label listed in source snapshot_ |

## Category: Standard item

| Item | Short summary | Labels / expert groups |
| --- | --- | --- |
| [DCM - Trusted Relationship](https://github.com/catenax-eV/sig-roadmap/issues/411) | Formalize trusted-relationship requirements and boundaries in DCM data exchange interactions. | ARC - Committee, DSOC - Committee, DSOC - Legal, SCQ - Committee, SCQ - DCM, SCQ - PURIS |

## Category: Feature item

| Item | Short summary | Labels / expert groups |
| --- | --- | --- |
| [New Standard "DCM: Capacity Group Collaboration Contact List Data Exchange"](https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/issues/1444) | Introduce a dedicated standard for collaborative contact-list exchange in DCM capacity groups. | enhancement |

## Category: Task items

| Item | Short summary | Labels / expert groups |
| --- | --- | --- |
| [[Task] Develop Aspect Model(s) for Simulation](https://github.com/catenax-eV/cx-ex-mbse/issues/15) | Deliver the simulation-related aspect model work package supporting MBSE roadmap execution. | ENG - MBSE, Expert Group (MBSE) |

## Items discussed with open type classification in source snapshot

| Item | Short summary | Labels / expert groups |
| --- | --- | --- |
| [DCM KIT Update: Collaborative Demand and Capacity Management](https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/issues/1445) | Update DCM KIT content to reflect latest collaborative demand and capacity management needs. | enhancement, KIT |
| [Deprecate CX-0125 and split into multiple use case standards](https://github.com/catenax-eV/sig-roadmap/issues/698) | Split CX-0125 scope into clearer, use-case-specific standards for better maintainability and adoption. | SCQ - Committee, SCQ - Traceability |
| [Review CX-0123 to ease adoption](https://github.com/catenax-eV/sig-roadmap/issues/700) | Revisit CX-0123 requirements to reduce adoption friction and implementation complexity. | SCQ - Committee, SCQ - Data-driven Quality |

## What this means for departments

- If you own one of the listed labels/committees, please review your related items for scope, dependencies, and implementation feasibility.
- For cross-domain items, identify one lead committee and one integration counterpart early.
- Prepare candidate sub-issues with clear acceptance criteria so R26.09 planning can move quickly from proposal to delivery.

