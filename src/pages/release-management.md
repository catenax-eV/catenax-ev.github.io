# Release management

Effective management of versions and changes for Catena-X standards, KITs and open-source reference implementations is crucial to guarantee compatibility, interoperability and security especially in a decentralized data space.

## Support Dates

The upcoming releases are scheduled in the following order:

[![Support Dates](@site/static/img/support-dates.jpg)](@site/static/img/support-dates.jpg)

## Consistency and Compatibility

The release management coordinates the different releases in the Catena-X initiative to ensure a consistent and compatible bundle of:

- **standards** and other **normative documents** in the Catena-X association and
- corresponding **KITs** and **reference implementations** in the Tractus-X project

for our different stakeholder in the operating environment.

Based on the first experiences in live operation, the release management for the next Catena-X ecosystem release will be partially adapted as follows:

## Basic characteristics

| Topic                               | 101 Pager (R23.09) / Jupiter (Oct. 2024)            |
| ----------------------------------- | --------------------------------------------------- |
| Catena-X Planning Cycle                  | 4 Times / Year                                      |
| T-X Planning & Release Cycle        | 4 Times / Year                                      |
| Upgrade Day for CSP-A / CSP-B / OSP | Synced Upgrade Day (coordinated by Catena-X association) |
| Grace Period                        | 1 Year                                              |
| Catena-X & Eclipse Tractus-X Artefact Versioning       | Semantic Versioning                                 |
| Catena-X Ecosystem Release Cycle | 4 Times / Years     | 2 Times / Year                                                                     |
| Catena-X Release Versioning      | Calendar Versioning | Planet Names (e.g. Jupiter)                                                        |
| Catena-X Deployment Gate         |                     | Representatives from each industry partner group to define ecosystem release scope |
| Backward Compatibility      | No Commitment       | Commitment by the Eclipse Tractus-X Project                                                          |

## Additional notes

[![Release Timeline](@site/static/img/release-schedule.png)](@site/static/img/release-schedule.png)

These principles allow all stakeholders to take advantage of quality-assured dependency and compatibility management, and better predictability for the operational deployment and certification phase.

A group of representatives from each partner will be formed to ensure a coherent product offering for all stakeholders. This group of representatives will be responsible for the governance of the deployment gate after the Jupiter release.

Versioning with planet names (e.g. Jupiter) is used to improve communication and comprehensibility between releases in the Catena-X association and Tractus-X project as well as the releases in the operative environment. In addition, we are introducing the following two lifecycle states to indicate the validity of our ecosystem releases, which is relevant for the certification period.

- [current] for the months 1-12
- [maintained] for months 13-24 (maintained also contains deprecated versions)
- [deprecated] after month 24

The versioning of artifacts such as standards, normative documents, KITs or reference implementations is done via semantic versioning.

To reduce certification efforts, the grace period for switching from one major version to the next major version from the Jupiter version onwards is still one year - see overlap Jupiter [maintained] and Mars [current] in the timeline. The validity of certification can be up to 24 months.

## Further information

This page summarizes the most important points for release management. Further information can be found in the Operating Model [How: Life Cycle Management](/docs/operating-model/how-life-cycle-management).
