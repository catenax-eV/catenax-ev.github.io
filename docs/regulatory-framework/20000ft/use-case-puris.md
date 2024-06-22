---
title: Use Case PURIS
toc_min_heading_level: 2
toc_max_heading_level: 5
pagination_prev: null
pagination_next: null
---

## PREDEFINED USE-CASE FRAMEWORK: PREDICTIVE UNIT REALTIME INFORMATION SERVICE - PURIS

- 24 MAY 2024
- VERSION 1.0
- PDF-Version: [231016_Catena-X_Use_Case_Framework_PURIS.pdf](./assets/231016_Catena-X_Use_Case_Framework_PURIS.pdf)

### 1. KEY PRINCIPLES FOR PURIS (“USE CASE”)

This document sets out the predefined use case framework (“**Framework**”) for each participant in this Use Case ("**Participant**"). Participants must agree to this Framework and make their data exchange legally binding by way of separate declarations. This document does not specify or restrict how Participants make such declarations.

Each Data Provider / Data Consumer (as a legal entity acting with proper authorization) must register for this Use Case in order to conclude data exchange contracts with the help of a registered connector.

Unless otherwise set out below, defined terms are those set out in the 10 Golden Rules.

### 2. KEY PARAMETERS

#### 2.1 WHO WITH WHOM?

[Data Provider may tie certain access authorizations ("Access Policies") to its data offers for one or several Data Consumers. By limiting access to certain Participants, Data Provider maintains control over its anti-trust obligations when sharing certain data. In particular, Data Provider may apply Access Policies to restrict access to a particular data offer for only one Participant identified by a specific business partner number.]

> *Participants (Data Provider / Data Consumer) are companies involved in a multi-stage network of value chains leading to an end product. Participants who are in a customer or supplier relationship within the same product-specific value chain may assume both the role of Data Provider and the role of Data Consumer. Participants may also conclude data exchange contracts on behalf of one or more affiliates (affiliated companies within the meaning of Section 15 German Stock Corporation Act, AktG, "**Affiliates**").*
>
> Participants may only exchange data within an existing customer or supplier relationship (one-up/one-down).

#### 2.2 HOW, WHAT AND WHY?

[Data categories by (i) technical description and (ii) data quality parameters (if any)]

[Additional characteristics of data quality]

[Scope of usage right(s)]

> *Participants provide and use data in compliance with the standards set by the Association (https://catena-x.net/en/standard-library): Unless otherwise agreed individually, Participants expressly exclude any requirements for quality, coherence, completeness of data; Data Provider provides data in its respective state "as is" and “as available”.*

---

> *Data Consumer may use the data in line with the agreed purpose(s) and not for other purposes.*
>
> *For each data set, Participants may agree on the standardized purposes below ("Predefined Purposes"). In addition, they may agree on an individual purpose ("Individual Purpose") in existing contracts, provided they agree on the Predefined Purposes. Participants must use the namespace “purpose.individual.*” when they refer to an Individual Purpose. Participants may reference to such existing contracts by using the namespace “contract.individual.\*”*.
>
> *The namespace "cx.puris.\*.\*" may only be used for Predefined Purposes. Participants must use it as a prefix of the policy's relevant version (e.g. "3.") and add a reference to a Predefined Purpose (e.g. "base").*
>
> *Data Provider may grant access and/or transfer the Data to Affiliates, if Affiliates as Data Consumers submit to the rules under this Framework as applicable between Data Provider and Data Consumer.*

| **Predefined Policy**<br />*(for registering data assets in the connector)* | **Typically used for Aspect ("Aspect Model")** | Predefined Purpose |
|:----------|:----------|:----------|
| cx.puris.base:1 | &bull;ItemStock<br />&bull;ShortTermMaterialDemand<br />&bull;PlannedProductionOutput<br />&bull;DeliveryInformation | *Optimizing processes, which includes, without limitation, regular exchange of data to prevent and/or solve shortages in the supply chain, conducting plausibility checks against other sources and/or collecting information to facilitate sound decision making, all of the above in the context of predictive unit real-time information relating to production and/or logistics.* |

#### 2.3 WHEREFROM AND WHERETO?/CONFIDENTIALITY

[Locations of data source and data processing (EU / non-EU)]

[Confidentiality]

> *Participants are free to agree individually. However, geographical limitations may apply, as specified and updated by the Association ("white list").*
>
> *Participants are free to agree confidentiality requirements individually. However, a restriction applies that Data Consumer may provide access to data internally (and including for permitted Affiliates) on a need-to-know basis only.*

#### 2.4 COMPLIANCE

[Data Provider and Data Consumer must clarify relevant checkpoints in advance, e.g. antitrust law, export control, trade secrets, data protection, etc.].

> *Data Provider and Data Consumer are responsible for compliance with all legal and regulatory requirements applicable (in particular with regard to (i) antitrust law (including, but not limited to, antitrust-compliant implementation taking into account the "one-up-one-down principle" and "compliance by design"), (ii) tax, trade and export control law, (iii) data protection, (iv) trade secrets, digital regulation) for themselves and any Affiliates registered for this Use Case.*

#### 2.5 EXIT

[Return / Deletion of data].

> *Default setting "keep" or "delete" according to this Use Case.*
>
> *Existing data exchange contracts remain unaffected, if a Participant withdraws its registration from this Use Case or terminates its contract with an operating company.*

#### 2.6 HOW LONG?

[Duration of (i) contract, (ii) data provision and (iii) usage right(s)]

> *The (i) data exchange contract term, (ii) Data Provider's obligation to provide data and (iii) Data Consumer's usage right(s) each end on 16 October 2024, unless ending later as agreed individually.*
>
> Unless agreed otherwise individually, Data Consumer must delete data within 14 days after its usage right(s) has/have ended.

### Unrestricted Freedom of Contract

*outside of elements 2.1 - 2.6 above*

#### 2.7 CONSEQUENCES OF MALPERFORMANCE

[Participant's rights, liability, and limitations; depending on the nature of the data exchange contract under applicable law, statutory law may govern Participant's rights, liability and limitations; (Core/Onboarding) service providers may provide default positions for this Use Case, while Participants are free to deviate from such default positions].

> *Unless otherwise agreed, Data Consumer's rights in case of malperformance are excluded to the extent legally possible.*

#### 2.8 MISCELLANEOUS

[preconfigured depending on the contractual relationship under civil law; (Core/Onboarding) service providers may provide default positions for this Use Case, while Participants are free to deviate from such default positions].

> *Data Provider and Data Consumer are free to agree individually on any other element (e.g. choice of law/place of jurisdiction) in their data exchange contract.*
