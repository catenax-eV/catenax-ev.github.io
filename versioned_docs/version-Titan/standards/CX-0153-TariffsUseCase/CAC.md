# Conformity Assessment Criteria

## General Information

- cxId: CX-0153
- name: Tariffs Use Case
- capability: Tariff
- version: 1.0.2
- release: ???

## Conformity Assessment Criteria

### CX-0153-CAC-001

- type: MUST
- topic: Semantics
- automisable: false
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [x] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The following standards MUST be fulfilled by data providers and consumers participating in the Tariffs use case:

- CX-0018 Dataspace Connectivity <!--remove? already required by CX-0126-->
- CX-0126 IndustryCorePartType
- CX-0152 Policy Constraints For Data Exchange

#### Proof of Conformity

Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants* and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please refer the process of conformity assessment and certification.

Since this document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria defined in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance SHOULD BE checked with the tools provided for these components.

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

In terms of conformity the openAPI specification of the application or endpoints being exposed via the Tractus-X EDC or any other CX-0018 compliant connector MUST be checked against the standardized openAPI specification.

Examples of data assets and contract offer structure in the Tractus-X EDC or any other CX-0018 compliant connector MUST correspond to the described structure.

The versions of the standardization documents valid for this standard are mentioned in sections where the standalone standards, normative references and non-normative references are listed. The valid versions are not specifically mentioned in the body text.

*Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases.

#### Information

N/A

### CX-0153-CAC-002

- type: MUST
- topic: Semantics
- automisable: <!-- Select between true or false --> ???
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The standard extends the requirements from CX-0126 IndustryCorePartType:

A digital twin MUST be created for part types developed by a manufacturer within Catena-X. <!--why is it only MAY in CX-0126?-->
The aspect model ""SingleLevelBomAsPlanned"" MUST be linked to the Asset Administration Shell of each catalog part holding the information on part relationships top-down on catalog part level. <!--why is it only MAY in CX-0126?-->

#### Proof of Confirmity

"Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants* and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please refer the process of conformity assessment and certification.

Since this document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria defined in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance SHOULD BE checked with the tools provided for these components.

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

In terms of conformity the openAPI specification of the application or endpoints being exposed via the Tractus-X EDC or any other CX-0018 compliant connector MUST be checked against the standardized openAPI specification.

Examples of data assets and contract offer structure in the Tractus-X EDC or any other CX-0018 compliant connector MUST correspond to the described structure.

The versions of the standardization documents valid for this standard are mentioned in sections where the standalone standards, normative references and non-normative references are listed. The valid versions are not specifically mentioned in the body text.

*Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases."

#### Additional Information

N/A

### CX-0153-CAC-005 <!--connected to CAC-002?-->

- type: MUST
- topic: Semantics
- automisable: <!-- Select between true or false -->
- assessment:  <!-- please checkmark accordingly by adding an x between the brackets, e.g. [x] -->
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Information on the Bill of Material of those catalog parts MUST NOT be provided in any other way than with the aspect model "SingleLevelBomAsPlanned".

#### Proof of Confirmity

"Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants* and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please refer the process of conformity assessment and certification.

Since this document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria defined in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance SHOULD BE checked with the tools provided for these components.

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

In terms of conformity the openAPI specification of the application or endpoints being exposed via the Tractus-X EDC or any other CX-0018 compliant connector MUST be checked against the standardized openAPI specification.

Examples of data assets and contract offer structure in the Tractus-X EDC or any other CX-0018 compliant connector MUST correspond to the described structure.

The versions of the standardization documents valid for this standard are mentioned in sections where the standalone standards, normative references and non-normative references are listed. The valid versions are not specifically mentioned in the body text.

*Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases."

#### Additional Information

Add any additional information here... Please write "N/A" if not applicable...

### CX-0153-CAC-006

- type: MUST
- topic: Semantics
- automisable: <!-- Select between true or false -->
- assessment:  <!-- please checkmark accordingly by adding an x between the brackets, e.g. [x] -->
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The aspect model "UsTariffInformation" MUST be attached to the digital twin of each part type. Information on the US tariff MUST NOT be provided in any other way than with the aspect model "UsTariffInformation".

#### Proof of Confirmity

"Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants* and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please refer the process of conformity assessment and certification.

Since this document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria defined in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance SHOULD BE checked with the tools provided for these components.

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

In terms of conformity the openAPI specification of the application or endpoints being exposed via the Tractus-X EDC or any other CX-0018 compliant connector MUST be checked against the standardized openAPI specification.

Examples of data assets and contract offer structure in the Tractus-X EDC or any other CX-0018 compliant connector MUST correspond to the described structure.

The versions of the standardization documents valid for this standard are mentioned in sections where the standalone standards, normative references and non-normative references are listed. The valid versions are not specifically mentioned in the body text.

*Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases."

#### Additional Information

N/A

### CX-0153-CAC-010

- type: MUST
- topic: Policy
- automisable: <!-- Select between true or false -->
- assessment:  <!-- please checkmark accordingly by adding an x between the brackets, e.g. [x] -->
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

This standard document CX-0152 MUST be followed when providing services or apps for data sharing/consuming and when sharing or consuming data in the Catena-X ecosystem.

#### Proof of Confirmity

"Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants* and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please refer the process of conformity assessment and certification.

Since this document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria defined in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance SHOULD BE checked with the tools provided for these components.

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

In terms of conformity the openAPI specification of the application or endpoints being exposed via the Tractus-X EDC or any other CX-0018 compliant connector MUST be checked against the standardized openAPI specification.

Examples of data assets and contract offer structure in the Tractus-X EDC or any other CX-0018 compliant connector MUST correspond to the described structure.

The versions of the standardization documents valid for this standard are mentioned in sections where the standalone standards, normative references and non-normative references are listed. The valid versions are not specifically mentioned in the body text.

*Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases."

#### Additional Information

N/A

### CX-0153-CAC-013

- type: MUST
- topic: <!-- Select between Semantics, APIs, Logics, Policy -->
- automisable: <!-- Select between true or false -->
- assessment:  <!-- please checkmark accordingly by adding an x between the brackets, e.g. [x] -->
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

Data Assets differentiated only by major version MUST be offered in parallel.

#### Proof of Confirmity

"Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants* and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please refer the process of conformity assessment and certification.

Since this document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria defined in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance SHOULD BE checked with the tools provided for these components.

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

In terms of conformity the openAPI specification of the application or endpoints being exposed via the Tractus-X EDC or any other CX-0018 compliant connector MUST be checked against the standardized openAPI specification.

Examples of data assets and contract offer structure in the Tractus-X EDC or any other CX-0018 compliant connector MUST correspond to the described structure.

The versions of the standardization documents valid for this standard are mentioned in sections where the standalone standards, normative references and non-normative references are listed. The valid versions are not specifically mentioned in the body text.

*Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases."

#### Additional Information

N/A

### CX-0153-CAC-014 <!--redundant? CAC-006-->

- type: MUST
- topic: <!-- Select between Semantics, APIs, Logics, Policy -->
- automisable: <!-- Select between true or false -->
- assessment:  <!-- please checkmark accordingly by adding an x between the brackets, e.g. [x] -->
  - [ ] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement

The aspect model MUST be connected to the digital twin of the respective part type (partType) to ensure that tariff-relevant information can be accurately traced and accessed in a Catena-X compliant manner

#### Proof of Confirmity

"Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

All participants* and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please refer the process of conformity assessment and certification.

Since this document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.

The specific criteria defined in this document are describing the usage of the central tools as well as common tools described in the linked standardization documents and therefore compliance SHOULD BE checked with the tools provided for these components.

The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

In terms of conformity the openAPI specification of the application or endpoints being exposed via the Tractus-X EDC or any other CX-0018 compliant connector MUST be checked against the standardized openAPI specification.

Examples of data assets and contract offer structure in the Tractus-X EDC or any other CX-0018 compliant connector MUST correspond to the described structure.

The versions of the standardization documents valid for this standard are mentioned in sections where the standalone standards, normative references and non-normative references are listed. The valid versions are not specifically mentioned in the body text.

*Disclaimer: The operating model released by the Catena-X association will define the roadmap, content and scope for the certification process. This will include the roles, certification and further assessment procedures as well as the rollout phases."

#### Additional Information

N/A

## Legal

Copyright © 2026 Catena-X Automotive Network e.V. All rights reserved. For more information, please see [Catena-X Copyright Notice](https://catenax-ev.github.io/copyright).
