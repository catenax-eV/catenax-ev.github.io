---
position: 1
sidebar_class_name: separator-top
---

# Changelog

## Summary of Release CX-Io

- 2 new standards
- 12 updated standards
- 1 deprecated standards

### A) List of updated standards

> Note: Be aware that more information regarding the changes can be found within the standard documents within the section "***COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD***"

#### Network Services

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| CX-0018 | Dataspace Connectivity | 3.3 | <ul><li>add details on participant identifiers</li><li>add details on transfer types</li><li>list consumer-sent messages that must be authenticated</li><li>Rename IATP to DCP</li><li>Improve the reference of external standards to clearly express the valid versions</li><li>Add quality checks of the previous Data Sovereignity quality gate checks as appropriate for this standard</li></ul> |
| CX-0007 | Minimal Data Provider Service Offering | 1.1 | <ul><li>Added clarification on the usage of Digital Twins</li><li>Removed outdated examples and references (not normative)</li></ul> |

#### Business Partner Data Management

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| CX-0010 | Business Partner Number | 2.2 | <ul><li> Adapted to new template structure and made a major overhaul of the document; documented the scope of the check characters</li><li>Add reference and adapt wording regarding ISO/IEC 6523 registration of the BPN </li></ul> |
| CX-0012 | Business Partner Data Pool API | 4.2 | <ul><li> Added tax jurisdiction code </li><li> Added attributes for legal forms and identifier types; removed the POST endpoint for administrative areas; added a footnote about the plan for changing from minor to major asset versioning; added footnote about plural in the abbreviation(s) attribute for legal forms; added requirement about the correct asset property format as defined in CX-0018</li></ul> |
| CX-0074 | Business Partner Gate API | 3.2 | <ul><li> Added tax jurisdiction code; change outlook on business partner relationship</li><li> Added attributes for legal forms and identifier types; added a footnote about the plan for changing from minor to major asset versioning; added footnote about plural in the abbreviation(s) attribute for legal forms; added requirement about the correct asset property format as defined in CX-0018 </li></ul> |
| CX-0076 | Golden Record End-to-End Requirements Standard | 1.3 | <ul><li>Adjustment of Table 2 in chapter 2.1.9 Golden Record Output Requirements</li><li>Removed footnote for tax jurisdiction code as it is now technically implemented </li> <li>Adjustment / enhancements of footnotes references regarding new standard versions </li> <li>Adapted to new template structure</li></ul> |
| CX-0135 | Business Partner Certification Management | 2.2 | <ul><li> The standard has been updated to include the newest version of the semantic data model (urn:samm:io.catenax.business_partner_certificate:3.0.0). The semantic model has been enhanced to incorporate additional data attributes related to the physical document. The issuer data attribute, previously optional and representing a BPN, has been updated to include the issuer's name as a mandatory attribute </li></ul> |

#### Supply Chain Management and Quality

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| CX-0125 | Traceability Use Case | 2.1 | <ul><li>Enhanced existing content of Section ABSTRACT, Section FOR WHOM IS THE STANDARD DESIGNED, Section 1.1, Section 1.2 with new information regarding block informations in context with the existing Quality Investigations and Quality Alerts.</li><li>Renamed Section 2.1 title from *Quality Notifications and Data Exchange* to *Data Exchange for Quality and Block Notifications* and adapted existing content with additional information.</li><li>Adapted existing content of Section 2.1.3 with bug fixes and additional information for the new Block Notification function.</li><li> Added new Section 4.2. to describe the new Block Notification API (Optional). </li><li>Added new Section 5.2. to describe the new Block Notification process (Optional).</li></ul> |
| CX-0128 | Demand and Capacity Management Data Exchange | 2.1 | <ul><li>Added consolidated *Conformity Assessment Criteria* to support the certification.</li><li>Updated *FrameworkAgreement* Credentials and references.</li></ul> |

#### Sustainability

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| PCF-Rulebook | 3.1 | ... (currently not normative) |

#### Misc

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| CX-0003 | SAMM Aspect Meta Model | 1.2 | <ul><li>Slightly updated the governance aspect model lifecycle management (removed state "standardized" for aspect models).</li></ul> |
| CX-0126 | Industry Core: Part Type | 2.1 | <ul><li>Added guidance in Section 2.1.2</li><li>Added criteria for applying the industry core for part types</li></ul> |

### B) List of new standards

| CX-Nr.  | Standard Name | Version |  Management Summary |
|-----------|-----------|:-----------:|--------------------|
| CX-0150 | Logistics | 1.0 | <ul><li> This standard is designed for everybody who wants to participate in the logistics and customs use case.</li><li>The following features are provided:<ul><li>Traceability of transport (e.g. truck, ship, airplane), transport units and packing list.</li><li>Fulfilling customs requirements, like long-term supplier declaration (coming soon).</li></ul></li></ul> |
| CX-0151 | Industry Core Basics | 1.0 | <ul><li>This standard defines basic features of the Industry Core. The Industry Core is a shared foundation for use cases that utilize notifications, digital twins and aspect models in Catena-X.</li></ul> |

### C) List of deprecated standards

| CX-Nr.  | Standard Name   |                                         Reason to depricate                                        |
|:--------------------|:-----------------------------------------------|:--------------------------------------------------------------------------------------------------|
| CX-0139 | Information as a Service - External Data Provider | This standard does not comply with the current CX-Jupiter requirements. |
