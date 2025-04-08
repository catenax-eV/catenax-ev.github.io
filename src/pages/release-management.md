# Release management

Effective management of versions and changes for Catena-X standards and normative documents, KITs and open-source reference implementations is crucial to guarantee compatibility, interoperability and security especially in a decentralized data space.

## Support Dates

The upcoming releases are scheduled in the following order:

[![Support Dates](@site/static/img/support-dates.jpg)](@site/static/img/support-dates.jpg)

## Consistency and Compatibility

The release management coordinates the different releases in the Catena-X initiative to ensure a consistent and compatible bundle of:

- **standards** and other **normative documents** in the [Catena-X association](https://catena-x.net) and
- corresponding **KITs** and **reference implementations** in the [Eclipse Tractus-X project](https://eclipse-tractusx.github.io)

for our different stakeholder in the operating environment.

## Basic release characteristics

| Topic | Information|
| ----------------------------------- | --------------------------------------------------- |
| Ecosystem Release Cycle | 2 Times / Year|
| Catena-X Planning Cycle | 4 Times / Year|
| Eclipse Tractus-X Planning & Release Cycle | 4 Times / Year|
| Catena-X & Eclipse Tractus-X Artefact Versioning | Semantic Versioning e.g. 25.09 |
| Ecosystem Release Versioning | Calendar Versioning e.g. CX-Neptune|
| Grace Period of a ecosystem release | 1 Year|
| Upgrade Day for [Core Service Provider A](https://catenax-ev.github.io/docs/next/operating-model/who-roles-in-the-catena-x-ecosystem#core-service-provider-a) / [Core Servide Provider B](https://catenax-ev.github.io/docs/next/operating-model/who-roles-in-the-catena-x-ecosystem#core-service-provider-b) / [Onoboarding Service Provider](https://catenax-ev.github.io/docs/next/operating-model/who-roles-in-the-catena-x-ecosystem#onboarding-service-provider) | Synced Upgrade Day (coordinated by Catena-X association) |
| Backward Compatibility | Commitment by the Eclipse Tractus-X Project|

## Additional notes

[![Release Timeline](@site/static/img/release-schedule.png)](@site/static/img/release-schedule.png)

These principles allow all stakeholders to take advantage of quality-assured dependency and compatibility management, and better predictability for the operational deployment and certification phase.

A group of representatives from each partner will be formed to ensure a coherent product offering for all stakeholders. This group of representatives will be responsible for the governance of the deployment gate after the Jupiter release.

Versioning with planet names (e.g. Jupiter) is used to improve communication and comprehensibility between releases in the Catena-X association and Eclipse Tractus-X project as well as the releases in the operative environment. In addition, we are introducing the following two lifecycle states to indicate the validity of our ecosystem releases, which is relevant for the certification period.

- [current] for the months 1-12
- [maintained] for months 13-24 (maintained also contains deprecated versions)
- [deprecated] after month 24[^1]

[^1]: An ecosystem release can only be deprecated after a minimum of 24 months, but it is not automatically deprecated after this period. Deprecation depends on the publication of a subsequent release. If no newer version is released, the existing version remains valid indefinitely. This applies to the product or to any standard or normative document within the release. As a result, a release may remain normative and in active use for a decade or more, depending on the updated version of a normative document or standard.

The versioning of artifacts such as normative documents (e.g. standards), KITs or reference implementations is done via semantic versioning.

To reduce certification efforts, the grace period for switching from one major version to the next major version from the Jupiter version onwards is still one year - see overlap CX-Jupiter [maintained] and CX-Saturn [current] in the timeline. The validity of certification can be up to 24 months.

## Further information

This page summarizes the most important points for release management. Further information can be found in the Operating Model [How: Life Cycle Management](/docs/operating-model/how-life-cycle-management).
