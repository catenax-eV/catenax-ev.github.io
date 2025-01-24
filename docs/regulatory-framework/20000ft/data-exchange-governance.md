---
pagination_prev: null
pagination_next: null
---
# Data Exchange Governance

:::info

Disclaimer: This document is only temporarily located at this level. It will soon be located at the 30,000-ft level.

:::

- 07 JUNE 2024
- VERSION 1.0
- PDF-Version: [Catena-X_Data_Exchange_Governance.pdf](./assets/Catena-X_Data_Exchange_Governance.pdf)

## Data Exchange Governance

### 1. GENERAL PRINCIPLES

This Data Exchange Governance sets out the key principles for data exchange (***"Data Exchange Governance"***) that apply to each Participant when exchanging data in the Catena-X Data Space for one or more purposes as predefined by the Association (***"Predefined Purpose(s)"***).

Each Participant must agree to this Data Exchange Governance in order to effect data exchanges through a registered connector (***"Registered Connector"***). The process of agreeing to this Data Exchange Governance, as well as for concluding legally binding data exchange contracts is not part of this Data Exchange Governance. It does not determine or restrict how Participants need to make their contractual declarations legally binding.

This Data Exchange Governance provides standardized technical parameters to effect data exchanges (***"Technical Data Exchange Elements"***), other mandatory requirements and optional default positions that correspond to the Predefined Purposes as further specified under the following link [repository](https://github.com/catenax-eV/cx-odrl-profile). The Association reserves to add new, change, replace or delete existing Technical Data Exchange Elements, other mandatory requirements, optional default positions and Predefined Purposes as part of the standardization process to the Repository.

Participants are free to select relevant Predefined Purposes for their data exchange contracts. Any modifications to the Repository can only take effect in regard to subsequent data exchange contracts; any data exchange contracts governing past or ongoing data exchanges remain unaffected.

A business application provider is a Participant that (i) facilitates data exchange contracts, (ii) develops and provides other data related services and/or (iii) helps develop the Repository and the Catena-X Data Space by proposing additional Predefined Purposes related to a specific application within the Catena-X Data Space ("***App Provider***").

App Provider may process data only (i) for the Predefined Purposes and Individual Purposes determined by Data Provider and/or Data Consumer, as applicable (including data storage as required) in order to facilitate the relevant data exchange and/or (ii) to develop and provide data-related services within the Catena-X Data Space and in accordance with the Governance Framework.

Participants are generally free to agree from where the Data Provider provides and where the Data Consumer processes data under this Data Exchange Governance, provided that they observe the geographical limitations specified in the ["Country Clearance List"](./../30000ft/country-clearance-list.md) as updated from time to time by the Association.

Unless otherwise set out hereunder, the defined terms under the Governance Framework as referenced in the 10 Golden Rules shall apply to this Data Exchange Governance.

### 2. CONTRACTUAL PARAMETERS FOR DATA EXCHANGES

#### 2.1 WHO WITH WHOM?

[Participants may tie certain access authorizations (***"Access Policies"***) to their data or service offers for one or several Participants. By limiting access to certain Participants, Data Provider maintains control over its data when sharing data (including compliance with anti-trust obligations). In particular, Data Provider may apply Access Policies to restrict access to a particular data offer for only one Participant identified by a specific business partner number.]

>Participants are companies involved in a multi-stage network of value chains leading to an end product. Participants who are in a customer or supplier relationship within the same product-specific value chain may assume both the role of Data Provider and the role of Data Consumer.
Participants may only exchange data within an existing customer or supplier relationship (one-up/one-down), unless specified otherwise in the Repository.

#### 2.2 HOW, WHAT AND WHY?

[Data categories by (i) technical description and (ii) data quality parameters (if any)] [Additional characteristics of data quality]
[Scope of usage right(s)]

>Participants must provide and use data in compliance with the [standards](./../../standards/overview.md) set by the Association:
>
>Unless otherwise agreed individually, Participants expressly exclude any requirements for quality, coherence, completeness of data and Data Provider provides data in its respective state "as is" and "as available".  
>
>Data Consumer may only use the data in line with the agreed purpose(s), unless specified otherwise in the Repository.  
>
>Participants must use the namespace "```cx-policy:UsagePurpose.*```" (the element "cx-policy" being the ***"Left Operand"***) and "```<purposename>:<version>```" when they refer to a Predefined Purpose. In addition, they may agree on an individual purpose (**"Individual Purpose"**), provided they agree on at least one Predefined Purpose or only refer to an existing contract between the Participants.
Participants must use the namespace "```cx-policy:UsagePurpose.*```" when they refer to an Individual Purpose. Participants may refer to such existing contracts by using the namespace "cx-policy:ContractReference" and indicate the contract number or another unique identifier known to both Participants.
>
>Data Provider is free to allow Data Consumer to grant access and/or transfer the Data to Data Consumer's affiliates (affiliated companies within the meaning of Section 15 German Stock Corporation Act, Aktiengesetz, ***"Affiliates"***), provided that Data Consumer ensures compliance of its Affiliates with this Data Exchange Governance.

#### 2.3 COMPLIANCE

[Data Provider, Data Consumer and/or App Provider must comply with all legal and regulatory requirements applicable (in particular with regard to (i) antitrust law (including, but not limited to, antitrust compliant implementation taking into account Compliance by Conduct), (ii) tax, trade and export control law, (iii) data protection, and (iv) digital regulation).]

>Data Provider, Data Consumer and/or App Provider are responsible for compliance with all legal and regulatory requirements applicable (in particular with regard to (i) antitrust law (including, but not limited to, antitrust compliant implementation taking into account Compliance by Conduct), (ii) tax, trade and export control law, (iii) data protection, and (iv) digital regulation) for themselves and any of their Affiliates.

#### 2.4 EXIT

[Return / Deletion of data]

>Existing data exchange contracts remain unaffected, if a Participant withdraws its registration from this Data Exchange Governance or terminates its contract with an operating company.
Participants are free to agree individually, unless the Repository specifies mandatory requirements.

#### 2.5 HOW LONG?

[Term of data exchange contract, including duration of (i) Data Provider's obligation to provide data and (ii) usage right(s)]

>Participants are free to agree individually, unless the Repository specifies mandatory requirements.
