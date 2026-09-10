---
sidebar_position: 5
title: Certification Catalog
---

The certification catalog is the central reference document for Catena-X conformity assessments. It translates the Catena-X standards into auditable requirements (so-called CAC (Catena-X Assessment Criteria)) and defines how each requirement is to be tested. It answers three questions for every requirement:

1. What must be fulfilled? (requirement)
2. How binding is it? (MUST / SHOULD / MUST NOT / SHOULD NOT)
3. How is it verified? (test procedure and proof of conformity)

Applicants do not work with the full catalog: in preparation for certification, each applicant receives an individual list of standards with the CAC relevant to their [role and Use Case](./04-modular-system-and-cross-cutting-requirements.md#roles).  

## Structure of the certification catalog

The catalog is structured in three blocks — **Catalog of requirements**, **Risk** and **Test procedures** — with the following columns:

| CAC – ID NO. | Standard | Standard Version | Category | Platform Capability / Use case | Standard-title | Requirement (CAC) | Must / May / Should | … | Stages 1–4 (Risk) | Inspection | … | Analytical Procedures |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CX-0019-CAC-001 | CX-0019 | V2.0 | Semantic | Traceability | Batch | Tbd | MUST | … | 3 | ☒ | ☐ | ☐ |
| CX-0019-CAC-002 | CX-0019 | V2.0 | Semantic | Traceability | Batch | Tbd | MUST | … | 3 | ☒ | ☐ | ☐ |

In preparation for certification, the certification applicant receives an individual list of standards including the associated CAC.

## Structure of certification catalog

**Catalog of requirements:**

**CAC-ID-NR.**
The CAC identification number is a uniquely assigned number that identifies the corresponding CAC. The CAC-ID-NR is used to identify the standard, the CAC within the standard and the version number of the CAC. The combination CX-0002 stands for the referenced standard, the combination CAC-001 is the ID number of the CAC within a standard and .001 indicates which version of the CAC it is: **CX-0002-CAC-001.001**

**Standard**
The standard number is a uniquely assigned number for the assignment of standards. It indicates which standard is referred to in each row.

**Standard Version**
The version number of the standard indicates the status of the described standard. The standard and standard versions are updated with the release of a new version of the standard.

**Category**
CAC are divided into three categories based on their characteristics.

1. The category API indicates that the CAC criteria is an interface.
2. The category SEMANTIC indicates that the CAC criteria is a semantic model.
3. The DEFAULT category subordinates everything that cannot be assigned to SEMANTIC or API.

**Platform Capability**
The platform capability groups standards according to capabilities offered by the platform and used by the use cases.

**Catalog of requirements:**

**Default title**
The default title describes the title of the respective standard. It serves as a specification of the platform capability.

**CAC**
CAC describe which requirements must be met in order to participate in the Catena-X ecosystem. They contain keywords that indicate whether a criterion must be met or whether it should be met. CAC provide more detailed information on how a requirement must/should be implemented.

**Additional information**
Additional information provides the CAB with more detailed information about the proper implementation of a CAC. The additional information contains links to websites with further relevant details.

**MUST/SHOULD or MUST NOT/SHOULD NOT**
The MUST/SHOULD column contains the keywords that are valid for the CAC. These can be either MUST or SHOULD or MUST NOT or SHOULD NOT. From this, the auditor can see whether a CAC must be implemented or should be implemented or should not be used.

**Proof of conformity**
The proof of conformity indicates which tests can be carried out to verify the implementation of the CAC. The basis for this are the test procedures.

**Test procedures:**

The test procedures are the methods used to verify the implementation of a CAC.  
They are divided into eight different individual options:

- [Inspection](./06-test-procedures.md#inspection)  
- [Observation](./06-test-procedures.md#observation)  
- [Self-assessment](./06-test-procedures.md#self-assessment)  
- [Inquiry](./06-test-procedures.md#inquiry)  
- [Confirmation](./06-test-procedures.md#confirmation)  
- [Recalculation](./06-test-procedures.md#recalculation)  
- [Reperformance](./06-test-procedures.md#reperformance)  
- [Analytical Procedures](./06-test-procedures.md#analytical-procedures)

:::info  
The details of the individual test procedures are explained in  
[Test Procedures](./06-test-procedures.md).  
:::
