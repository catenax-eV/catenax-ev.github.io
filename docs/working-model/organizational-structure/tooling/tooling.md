---
sidebar_position: 3
title: Tooling
---

## Microsoft Teams

Microsoft Teams is a good starting point for Expert Groups and Committees. After they are built up, they can decide to use GitHub in a private repository, or MS Team in a private channel.

:::warning
All open-source content has to be in Tractus-X. The private teams and repository are more for the day to day work, files and task planner/ issue tracker
:::

### Main topic

- Communication system
- Taskplanning
- Filestorage
- "Knowledgestore"

## CX Houston

...

## GitHub

GitHub is the main tool for development, when we talk about the Eclipse Tractus-X Project, the open-source part. GitHub is also getting more and more relevant for the Committee and Expert Group work.

There are two main organizations in GitHub:

- [catenax-eV (Catena-X Automotive Network e.V.)](https://github.com/catenax-eV/) -> standards, Committee and Expert Group work
- [eclipse-tractusx -> Eclipse Tractus-X Project](https://github.com/eclipse-tractusx) -> open-source

:::note

- for the open-source part (reference implementations and KITs) GitHub is mandatory. Its used for planning, issue tracking, discussions, development, reviews and release etc.
- for the standardization part, GitHub is also set as mandatory
- for Committee work and Expert Groups the Association provides private repositories within the *catenax-eV* GitHub organization

:::

### Setup & Access-Management

As described in the previous chapter, GitHub is an important tool for collaboration within the association but also with the community. To structure this, the following chapter explains the general setup and access structure.

#### Access-Management

Only members of the Catena-X Association who have an active role in one of the various bodies of the association (expert groups, committees, ...) can become members of the organization. Persons are added as soon as they are part of such a body.

The various bodies then receive a private repository by default.

Access within the body is as follows:

- The team (all members of the body) can only be edited by the Catena-X association itself (add/remove members)
- The Team receive *write* rights to the repository
- The lead/co-lead has *admin* access to the repository.

#### Cross-team collaboration

There are two ways of working together with other bodies:

- Giving access to the existing repository:
  - In this case, the other group/person with whom you are working is added to the existing repository (with *write* rights).
- Give access to a private fork (only main):
  - This creates a private fork of the main branch. The other group/person then has access to this fork (with *write* rights).

Further details, as well as the setup, can be requested from the Catena-X association.

#### Setup

**Naming conventions**  
The generic naming of repositories is based on the following semantics:  
*[catena-X]-[expert group]-[name of artifact]-[collaboration]*

- Catena-X (cx): if the content is created by the Catena-X association.
- Expert group (eg) [Optional]: if the repository is assigned to an expert group.
- Name of artifact: name of the artifact or team
- Collaboration (collab): if its a fork as described in chapter [Cross-team collaboration](./tooling.md#cross-team-collaboration)

The generic naming of teams is based on the following semantics:  
*cx-team-[expert group/committee]-[name of body]*

- Expert group/committee (ex/com): classification whether it is an expert group or a committee
- Name of body: name of the team

**Depreciation of repositories**  
If an expert group is no longer active, the repository is archived by the group at the end of its runtime. Other cases are decided on an individual basis.

## Eclipse Tooling

In Eclipse Tractus-X we mainly use open-source tooling provided by the Eclipse Foundation [https://eclipse-tractusx.github.io/community/intro](https://eclipse-tractusx.github.io/community/intro)

The Eclipse Foundation provides a `Matrix Chat` for open communication. It can be used via Eclipse account. There are several rooms available for different topics. The main room for Tractus-X is [#tractusx:matrix.eclipse.org](https://matrix.to/#/#tractusx:matrix.eclipse.org).

There is also a [tractusx-dev mailing list](https://accounts.eclipse.org/mailing-list/tractusx-dev) available to reach out to all subscribed Tractus-X contributor. Within this list the important open meetings are shared as also committer elections and other important information related to Tractus-X.

:::info

Please subscribe to the mailing list.

:::
