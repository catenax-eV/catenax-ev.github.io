# Release management

Effective management of versions and changes for Catena-X standards, KITs and open-source reference implementations is crucial to guarantee compatibility, interoperability and security especially in a decentralized data space.

## Support Dates

![Support Dates](/img/support-dates.jpg)

## Consistency and Compatibility

The release management coordinates the different releases in the Catena-X initiative to ensure a consistent and compatible bundle of:

- **standards** and other **normative documents** in the Catena-X association and
- corresponding **KITs** and **reference implementations** in the Tractus-X project

for our different stakeholder in the operating environment.

Based on the first experiences in live operation, the release management for the next Catena-X ecosystem release will be partially adapted as follows:

## What stayed the same?

| Topic                               | 101 Pager (R23.09) / Jupiter (Oct. 2024)            |
| ----------------------------------- | --------------------------------------------------- |
| Catena-X Planning Cycle                  | 4 Times / Year                                      |
| T-X Planning & Release Cycle        | 4 Times / Year                                      |
| Upgrade Day for CSP-A / CSP-B / OSP | Synced Upgrade Day (coordinated by Catena-X association) |
| Grace Period                        | 1 Year                                              |
| Catena-X & T-X Artefact Versioning       | Semantic Versioning                                 |

## What has changed?

| Topic                       | 101 Pager (R23.09)  | Jupiter (Oct. 2024)                                                                |
| --------------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Catena-X Ecosystem Release Cycle | 4 Times / Years     | 2 Times / Year                                                                     |
| Catena-X Release Versioning      | Calendar Versioning | Planet Names (e.g. Jupiter)                                                        |
| Catena-X Deployment Gate         |                     | Representatives from each industry partner group to define ecosystem release scope |
| Backward Compatibility      | No Commitment       | Commitment by T-X Project                                                          |

## Rationale for Changes

![Release Timeline](/img/release-schedule.png)

These changes allow all stakeholders to take advantage of quality-assured dependency and compatibility management, and better predictability for the operational deployment and certification phase.

The release cycle will be reduced from four (one major / three minor releases) to two ecosystem releases (one major / one minor) per year to increase stability and planning security of our ecosystem releases in the operative environment.

The planning cycles for Catena-X and Tractus-X and the release cycle in the Tractus-X project will remain at four times a year, to maintain fast adaptability (e.g. to changing requirements) and consistent alignment between the association and the Tractus-X project.

A group of representatives from each partner will be formed to ensure a coherent product offering for all stakeholders. This group of representatives will be responsible for the governance of the deployment gate after the Jupiter release.

We are switching from calendar versioning (CalVer) to versioning with planet names (e.g. Jupiter) to improve communication and comprehensibility between releases in the Catena-X association and Tractus-X project as well as the releases in the operative environment. In addition, we are introducing the following three lifecycle states to indicate the validity of our ecosystem releases, which is relevant for the certification period.

- [current] for the months 1-12
- [maintained] for months 13-24
- [deprecated] after month 24

The versioning of artifacts such as standards, normative documents, KITs or reference implementations is still done via semantic versioning.

To reduce certification efforts, the grace period for switching from one major version to the next major version from the Jupiter version onwards is still one year - see overlap Jupiter [maintained] and Mars [current] in the timeline. The validity of certification can be up to 24 months.
