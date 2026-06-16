# Conformity Assessment Criteria

## General Information

- cxId: CX-XXXX
- name: ECU Crypto Material
- capability: -
- version: 1.0.0
- release: CX-Neptune

## Conformity Assessment Criteria

### CX-XXXX-CAC-001

- type: MUST
- topic: Requirements
- automisable: yes
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

#### Requirement CAC-001

A Business Application Provider MUST ensure that the relevant information for this use Case can be transmitted via Digital Twins (pull-based) and via the Notification API using a http POST (push-based). Therefore CAC-003 and CAC-004 MUST be fulfilled for a Business Application Provider.

#### Proof of Conformity CAC-001

Provide proof of conformity with CAC-003 and CAC-004.

#### Additional Information CAC-001

N/A

### CX-XXXX-CAC-002

- type: MUST
- topic: Requirements
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

#### Requirement CAC-002

A Data Provider must at least provide 1 way of data exchange. Either data pull via Digital Twins (pull-based) or data push via the Notification API. See CAC-03 and/or CAC-04.

#### Proof of Conformity CAC-002

Provide proof of conformity with CAC-003 and/or CAC-004.

#### Additional Information CAC-002

N/A

### CX-XXXX-CAC-003

- type: SHOULD
- topic: Requirements
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

#### Requirement CAC-003

Business Application Providers, Data Providers and Data Consumers MUST prove their conformity by providing an OpenAPI specification of the notification API endpoints described in Section 4 of the standard.

#### Proof of Conformity CAC-003

Submit OpenAPI specification covering all notification API endpoints defined in §4 of the standard.

#### Additional Information CAC-003

N/A

### CX-XXXX-CAC-004

- type: SHOULD
- topic: Requirements
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

#### Requirement CAC-004

Business Application Providers, Data Providers and Data Consumers MUST prove their conformity by registering Digital Twins, using the correct Asset structure, the correct usage policy and their compliance to CX-0002 and CX-0018. See the following CACs for Details.

#### Proof of Conformity CAC-004

Demonstrate functional /feedback/receive endpoint in OpenAPI spec or live test.

#### Additional Information CAC-004

N/A

### CX-XXXX-CAC-005

- type: MUST
- topic: Requirements
- automisable: yes
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-005

The ECU Crypto Material Notification API MUST be published towards the network using a Data Asset/Contract Definition in terms of the IDSA Protocol as described by the reference implementation CX-0018 Dataspace Connectivity.

#### Proof of Conformity CAC-005

Provide EDC data asset registrations with valid API linkage for both Data Provider and Consumer

#### Additional Information CAC-005

Subject: All Participants; Ref: §4.1

### CX-XXXX-CAC-006

- type: MUST
- topic: Requirements
- automisable: yes
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-006

A Business Application Provider MUST provide the functionality to receive Feedback via the Noifitcation API.

#### Proof of Conformity CAC-006

Demonstrate functional /feedback/receive endpoint in OpenAPI spec or live test.

#### Additional Information CAC-006

Subject: Business Application Provider; Ref: §1.3

### CX-XXXX-CAC-007

- type: SHOULD
- topic: Requirements
- automisable: yes
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-007

The Data Provider SHOULD provide the feedback endpoint. [ReceiveCryptoMaterialFeedback: POST /feedback/receive]

#### Proof of Conformity CAC-007

Demonstrate functional POST /update endpoint; provide OpenAPI spec entry

#### Additional Information CAC-007

Subject: Data Provider; Ref: §4.2

### CX-XXXX-CAC-008

- type: SHOULD
- topic: Requirements
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

#### Requirement CAC-008

The Data Consumer SHOULD generate a feedback notification in response to the processing results to inform the Data Provider about the validation result.

#### Proof of Conformity CAC-008

Provide implementation evidence or documentation of feedback mechanism

#### Additional Information CAC-008

Subject: Data Consumer; Ref: §1.2.2

### CX-XXXX-CAC-009

- type: MUST
- topic: Requirements
- automisable: yes
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

#### Requirement CAC-009

If a push notification (CAC-003) or submodel update (CAC-022) is used, the notification data format MUST be compliant with the notification data format defined in Section 4, including the standardized MessageHeader as described in CX-0151 Industry Core: Basics.

#### Proof of Conformity CAC-009

Provide sample notification payload with conformant MessageHeader; validate against CX-0151 schema

#### Additional Information CAC-009

Subject: All Participants; Ref: §1.3

### CX-XXXX-CAC-010

- type: MUST
- topic: Requirements
- automisable: false
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-010

The cryptographic material associated with the ECU MUST be provided according to the aspect model defined in Section 3.1. The urn of the aspect model is urn:samm:io.catenax.ecu_crypto_material:1.0.0#CryptoMaterial .

#### Proof of Conformity CAC-010

Provide valid CryptoMaterial submodel instance conforming to §3.1

#### Additional Information CAC-010

Subject: Data Provider; Ref: §2.1.2

### CX-XXXX-CAC-011

- type: MUST
- topic: Requirements
- automisable: yes
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-011

The Data Provider MUST stick to permitted combinations of cryptographic material types, formats and encodings as specified in section 3.1.2.

#### Proof of Conformity CAC-011

Provide sample payload and validate type/format/encoding combination against the permitted combinations table

#### Additional Information CAC-011

Subject: Data Provider; Ref: §3.1.2

### CX-XXXX-CAC-012

- type: MUST
- topic: Requirements
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

#### Requirement CAC-012

A Data Provider MUST provide at least one valid instance of CryptoMaterialEntity in the set cryptoMaterials to conform to this standard.

#### Proof of Conformity CAC-012

Provide CryptoMaterial payload with at least one non-empty cryptoMaterials entry

#### Additional Information CAC-012

Subject: Data Provider; Ref: §3.1.3

### CX-XXXX-CAC-013

- type: MAY
- topic: Requirements
- automisable: yes
- assessment:
  - [ ] Inspection
  - [x] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-013

The software information associated with the ECU MAY be provided according to the aspect model defined in Section 3.2. The urn of the aspect model is urn:samm:io.catenax.software_information:1.0.0#SoftwareInformation

#### Proof of Conformity CAC-013

Provide valid SoftwareInformation submodel instance only if used.

#### Additional Information CAC-013

Subject: Data Provider; Ref: §2.1.2

### CX-XXXX-CAC-014

- type: MUST
- topic: Requirements
- automisable: yes
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

#### Requirement CAC-014

The following single standards MUST be fulfilled by the Business Application Provider, the Data Provider and the Data Consumer for which the standard is relevant:CX-0001, CX-0002, CX-0018, CX-0127, CX-0151, CX-0152, IETF RFC 2886, RFC 4648, RFC 5280, RFC 5958, RFC 7468, RFC 8017, ITU-T X.690.

#### Proof of Conformity CAC-014

Self-declaration or CAB certification covering all listed standards and criteria

#### Additional Information CAC-014

Subject: All Participants; Ref: §6.1

### CX-XXXX-CAC-015

- type: MUST
- topic: Requirements
- automisable: yes
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-015

The serialized ECU MUST be identified by its Global Asset ID (globalAssetId) and local identifiers including manufacturerId (BPNL of supplier), partInstanceId. It is recommended to use the Serial Part Aspect Model for that.

#### Proof of Conformity CAC-015

Provide sample payload containing catenaXId, manufacturerId, and partInstanceId

#### Additional Information CAC-015

Subject: Data Provider; Ref: §2.1.2

### CX-XXXX-CAC-016

- type: MUST
- topic: Requirements
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

#### Requirement CAC-016

If the data exchange via pull-based mechanism is implemented, the Digital Twin MUST represent a PartInstance as defined in CX-0127 Industry Core: Part Instance.

#### Proof of Conformity CAC-016

Provide Digital Twin registration record showing PartInstance type per CX-0127

#### Additional Information CAC-016

Subject: Data Provider; Ref: §2.1.2 — applies when a Digital Twin is created

### CX-XXXX-CAC-017

- type: MUST
- topic: Requirements
- automisable: yes
- assessment:
  - [ ] Inspection
  - [ ] Observation
  - [x] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-017

If pull-based mechanism via DT is implemented as defined in CAC-004 the Data Provider MUST create one Digital Twin per physical ECU instance in accordance with CX-0002: Digital Twins in Catena-X.

#### Proof of Conformity CAC-017

Provide Digital Twin in accordance to CX-0002.

#### Additional Information CAC-017

Subject: Data Provider; Ref: §4.4.1 — for pull-based access relationships

### CX-XXXX-CAC-018

- type: MUST
- topic: Requirements
- automisable: yes
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-018

If a digital twin is created (CAC-004), the following data asset and contract definition structure in their CX-0018-compliant connector MUST correspond to the described structure in Section 4.2.2.

#### Proof of Conformity CAC-018

Provide EDC data asset configuration JSON matching the structure specified in §4.2.2

#### Additional Information CAC-018

Subject: All Participants; Ref: §1.3

### CX-XXXX-CAC-019

- type: MUST
- topic: Requirements
- automisable: yes
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-019

If a digital twin is created (CAC-004), the following specific asset IDs MUST be provided when registering the Digital Twin (see CX-0127 Industry Core: Basics): Key = "ecuSerialNumber": The ECU serial number (OEM-specific serial number format).

#### Proof of Conformity CAC-019

Provide Digital Twin registration record containing the ecuSerialNumber specific asset ID

#### Additional Information CAC-019

Subject: Data Provider; Ref: §2.1.3

### CX-XXXX-CAC-020

- type: MUST
- topic: Requirements
- automisable: yes
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-020

If a digital twin is created (CAC-004), the usage purpose MUST be as specified in section 2.1.5.

#### Proof of Conformity CAC-020

Provide EDC connector asset configuration showing the usage policy attached to the Certificate Notifications asset

#### Additional Information CAC-020

Subject: Data Consumer; Ref: §2.1.5

### CX-XXXX-CAC-021

- type: MUST
- topic: Requirements
- automisable: yes
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-021

If both data exchange options (Push and Pull) are implemented, the globalAssetId used in notifications MUST match the globalAssetId of the Digital Twin.

#### Proof of Conformity CAC-021

Provide mapping evidence showing catenaXId equals globalAssetId of the corresponding Digital Twin

#### Additional Information CAC-021

Subject: Data Provider; Ref: §2.1.3 — applies when Digital Twin is used

### CX-XXXX-CAC-022

- type: SHOULD
- topic: Requirements
- automisable: yes
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-022

To inform the Data Consumer of newly created Digital Twins, the Data Provider should send a submodel Update to the Data Consumer. The Data Consumer SHOULD provide this endpoint, if the option to transfer data using Digital Twins was agreed by the Data Consumer and the Data Provider. [SubmodelUpdate: POST /submodel-update]

#### Proof of Conformity CAC-022

Demonstrate functional POST /receive endpoint; provide OpenAPI spec entry.

#### Additional Information CAC-022

Subject: Data Consumer; Ref: §4.2

### CX-XXXX-CAC-023

- type: MUST
- topic: Requirements
- automisable: yes
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-023

The following codes MUST be defined for all notification operations. The following HTTP response codes MUST be defined for the HTTP POST endpoint to receive an ECU Crypto Material Notification: 200, 400, 401, 403, 405, 409, 422.

#### Proof of Conformity CAC-023

Submit OpenAPI specification conforming to the standardized API definition

#### Additional Information CAC-023

Subject: All Participants; Ref: §4.2.3

### CX-XXXX-CAC-024

- type: MUST
- topic: Requirements
- automisable: yes
- assessment:
  - [x] Inspection
  - [ ] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-024

The following HTTP response codes MUST be defined for the HTTP POST endpoint to receive a Feedback Notification (receive-ecu-crypto-material-feedback): 200, 400, 401, 403, 404, 405.

#### Proof of Conformity CAC-024

Submit OpenAPI specification conforming to the standardized API definition

#### Additional Information CAC-024

Subject: All Participants; Ref: §4.2.3

### CX-XXXX-CAC-025

- type: MUST
- topic: Requirements
- automisable: yes
- assessment:
  - [ ] Inspection
  - [x] Observation
  - [ ] Self-Assessment
  - [ ] Inquiry
  - [ ] Confirmation
  - [ ] Recalculation
  - [ ] Reperformance
  - [ ] Analytical
  - [ ] Procedures

#### Requirement CAC-025

The Data Provider MUST match the received feedback via the globalAssetId to the according submodel.

#### Proof of Conformity CAC-025

Provide OpenAPI spec with both POST /receive and POST /update endpoints defined

#### Additional Information CAC-025

Subject: Data Provider; Ref: §4.5
