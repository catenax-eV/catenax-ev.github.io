
# CX-0090 API Endurance Estimator v1.0.0

## ABSTRACT

EnduranceEstimator is a service which estimates the remaining useful life of a vehicle using basic information of the vehicle and the usage. It is aimed for normal customer without access to specific technical vehicle data or logged data stored in the ECU. Usage  data are estimated according to application like trailer use and geografical conditions like hilliness.
This document sets the standards for the API for the usage of services which estimates a so-called "remaining useful life value" (RUL-value, see CX-0057) using estimated load data (UserEstimatedLoading, see CX-0088).

## 1. INTRODUCTION

This documentation describes the technical specification to enable the request of standardized "Remaining Useful Life (RUL)" data for "User Estimated Loading" and its integration into the Eclipse Dataspace connector (EDC). It covers exclusively the illustration of the specific API endpoints. The minimal process an application needs in order to support such interaction will not be handled here.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following roles:

- Data Provider / Consumer
- Business Application Provider

For now, the Endurance Estimator API is limited to sending of payload data and requesting the calculation result via notifications.

This document describes the relevant API endpoints to be created by each application and their integration into the Eclipse Dataspace connector (EDC). This standard covers exclusively the definition of the specific API endpoint. The minimal process an application needs to support for such notifications will not be handled here.

### 1.2 CONTEXT

> *This section is non-normative*

The two APIs described support the implementation of the dynamic behavior (i.e., service) of vehicles or components in a digital behavior twin. As the process is asynchronous, there are two APIs for different types of participants in the network.

API endpoint to be provided by a Service Provider providing a service to predict the expected lifetime based on user estimated loading.
API endpoint to be provided by a Service Requestor application or participant to receive the outcome of such an analysis in an asynchronous manner.
It is a non-central API, which can be implemented for various components. It relies on the input of user estimated loading in order to estimate and return the corresponding RUL value. The basic idea for the functionality of this API has been derived from CX-0023 Notification API.

As already mentioned in the Introduction, this standard provides the specification of the HTTP REST API endpoint to request (with an according UserEstimatedLoading as input) and sending RUL value via the Catena X Dataspace. Without this API an interoperability between different application, with an aim to receive RUL data, is not given.

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams,
examples, and notes in this specification are non-normative. Everything else in
this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**,
**REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be
interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they
appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to proof, that they are conform
with the Catena-X standards. To validate that the standards are applied
correctly, Catena-X employs Conformity Assessment Bodies (CABs). Please
refer to: *[!LINK Conformity Assessment]* for the process of conformity
assessment and certification.

Application or Service providers as well as data providers and consumers implementing their own solution need to proof conformity with this standard by providing:

An openAPI specification of the for this standard relevant endpoints

Those documents need to be handed over to a CAB.

### 1.6 EXAMPLES

```text
    [Optional] - Providing examples already at the beginning of the standard
    makes it more tangible. Generally try to use examples to illustrate the
    standard. That will make it easier for readers to understand the context
    and meaning.
```

### 1.7 TERMINOLOGY

> *This section is non-normative*

Business Partner Number (BPN)
: A BPN is the unique identifier of a partner within Catena-x

Additional terminology used in this standard can be looked up in the glossary on
the association homepage.

## 2. "Endurance Estimator" API

> *This section is normative*

### 2.1 PRECONDITIONS AND DEPENDENCIES

The notification API MUST be published towards the network using a Data Asset/Contract Offer in terms of the IDSA Protocol.

The Eclipse Dataspace Connector as a reference implementation MUST BE used and is referenced in this document. Other connectors fulfilling the same standards towards Catena-X MAY be leveraged as well.

### 2.2 API SPECIFICATION

#### 2.2.1 API Endpoints & resources

```text
    [Mandatory] – State which endpoints and resources MUST be offered. Ideally, don’t copy and 
    paste the openAPI documentation into the standard, but link to e.g. the open API specification
    in a KIT or official tractus-X repository. Name the correct version of the spec and/or hash of
    the relevant git release.

    Example: 

    The API MUST be implemented as specified in the openAPI documentation as stated here:
    https://github.com/catenax-ng/tx-item-relationship-service/tree/v1.0.0/api
```

The notification API MUST be implemented as specified in the openAPI documentation as stated here:

- POST /api/v1/routine/notification

In fact, it is OPTIONAL to implement the endpoint paths exactly as described above. The reason is that those endpoints are not called from any supply chain partner directly. Rather, they are called from the Eclipse Dataspace Connector (EDC) or a similar IDSA compliant connector as part of its data assets. In that sense, it is just important to implement endpoints that can process the defined request body and respond with the HTTP status codes and - if required - reply with the defined response body.

The EDCs/IDSA compliant data assets will act similar to a reverse proxy for the notification endpoints, therefore rather the EDC data assets are of significance, which should be exposed towards Catena-X through the Data Offer Catalogues in the EDC or any other IDSA Protocol compatible connector.

#### 2.2.2 Available Data Types

### 2.2.2 Available Data Types

The API MUST use JSON as the payload transported via HTTP.
The APIs payload consists of a general notification header and a use-case specific content dictionary. The request and response are linked by the unique notificationID.

### Notification Request Payload Structure

The main part of the content dictionary MUST follow the standard "CX-0088 Semantic Model: User Estimated Loading" as this is given as the main input towards the endurance estimator.

```json
{
    "header": {
        "notificationId": "b1a15145-4533-48e3-8d80-f5b83cc6c201",
        "referencedNotificationId": null,
        "relatedNotificationId": null,
        "senderBPN": "BPNL00000002HCQ9",
        "senderAddress": "https://connector2.cp.int.adac.openresearch.com",
        "recipientBPN": "https://edc-ocp0900009.apps.c7von4sy.westeurope.aroapp.io/BPNL00000003B2OM",
        "recipientAddress": "BPNL00000003B2OM",
        "severity": "MINOR",
        "status": "SENT",
        "targetDate": "2023-02-03T11:58:00.326439Z",
        "timeStamp": "2023-02-03T11:58:00.326439Z",
        "classification": "RemainingUsefulLifeEstimator",
        "respondAssetId": "enduranceEstimatorResult-receipt"
    },
    "content": {
        "requestRefId": "b1a15145-4533-48e3-8d80-f5b83cc6c201",
        "enduranceEstimatorInputs": [
            {
                "userEstimatedLoading": {
                    <UserEstimatedLoading as per standard: CX-0088 : AspectModel_UserEsimatedLoading>
                }
            }
        ]        
    }
}

```

### Notification Response Payload Structure

The main part of the content dictionary MUST follow the standard "CX-0057 Semantic Model: Remaining Useful Life" as endurance estimator output MUST follow the sematics described in the corresponding model:

```json
{ 
    "header": { 
      "referencedNotificationID": "notification-UUID", 
      "senderBPN": "BPNL0000000", 
      "senderAddress": "https://edc-xxxx.xx/BPNL0000000", 
      "classification": "EnduranceEstimatorResult", 
      "recipientAddress": "https://connectorxx.com", 
      "recipientBPN": "BPNL0000000", 
      "severity": "MINOR", 
      "status": "SENT", 
      "targetDate": "target-date", 
      "timeStamp": "time-stamp", 
      "respondAssetId": "urn:pilot:service:EndurancePredictorEstimationNotification" 
    }, 
    "content": { 
      "enduranceEstimatorOutputs": [ 
        { 
          "remainingUsefulLife": { 
              <RuL as per standard: CX-0057 Semantic Model: Remaining Useful Life>
          } 
        } 
      ] 
    } 
  } 
```

### Notification Response Error Payload Structure

```json
{ 
    "header": { 
      "referencedNotificationID": "notification-UUID", 
      "senderBPN": "BPNL0000000", 
      "senderAddress": "https://edc-xxxx.xx/BPNL0000000", 
      "classification": "EndurancePredictorResult", 
      "recipientAddress": "https://connectorxx.com", 
      "recipientBPN": "BPNL0000000", 
      "severity": "MINOR", 
      "status": "SENT", 
      "targetDate": "target-date", 
      "timeStamp": "time-stamp", 
      "respondAssetId": "urn:pilot:service:EndurancePredictorEstimationNotification" 
    }, 
    "content": { 
        "type": "Error", 
        "message": "Error Message", 
        "enduranceEstimatorOutputs": [] 
    } 
  } 
```

### 2.2.3 EDC Data Asset Structure

When using the EDC, the following asset MUST be registered by the specific roles in this process. Other connectors implementing the IDSA Protocol require a similar data asset with the same structure and provisioning towards Catena-X.

#### 2.2.3.1 Service Consumer

As an application provider or an data consumer calling an endurance estimator of another participant an API for asynchronous receival of the result is required. The corresponding data asset MUST look like the following:

```json
{
"asset": {
  "properties": {
    "asset:prop:id": "enduranceEstimatorResult-receipt",
    "asset:prop:name": "Asset to receive endurance estimator results",
    "asset:prop:contenttype": "application/json",
    "asset:prop:notificationtype": " behavioralTwinEnduranceEstimatorResult",
    "asset:prop:notificationmethod": "receive",
    "asset:prop:type": "notification.behavioralTwin.EnduranceEstimatorResult.receive"
    }
},
"dataAddress": {  
  "properties": {  
    "baseUrl": "https://{{httpServerWhichOffersTheHttpEndpoint}}/api/v1/routine/notification",  
    "proxyMethod": true,  
    "proxyBody": true,  
    "proxyPath": true,  
    "type": "HttpData"  
    }  
}
}

```

The variable \{\{httpServerWhichOffersTheHttpEndpoint\}\} **MUST** be set to the HTTP server that offers the endpoint. The path /api/v1/routine/notification **MAY** align with the HTTP POST path as stated in 2.2.1.
In that sense it can change dependent on the endurance application.

#### 2.2.3.1 Service Provider

As an service provider or data provider providing an endpoint for an endurance estimator service, an API for receival of the request including the user estimated loading data is required.
The corresponding data asset **MUST** look like the following:

```json
{
"asset": {
  "properties": {
    "asset:prop:id": "enduranceEstimatorRequest-receipt",
    "asset:prop:name": "Asset to receive endurance estimator requests incl. user estimated loading",
    "asset:prop:contenttype": "application/json",
    "asset:prop:notificationtype": "behavioralTwinEnduranceEstimatorRequest",
    "asset:prop:notificationmethod": "receive",
    "asset:prop:type": "notification.behavioralTwin.EnduranceEstimatorRequest.receive"
    }
},
"dataAddress": {  
  "properties": {  
    "baseUrl": "https://{{httpServerWhichOffersTheHttpEndpoint}}/api/v1/routine/notification",  
    "proxyMethod": true,  
    "proxyBody": true,  
    "proxyPath": true,  
    "type": "HttpData"  
    }  
}
}
```

The variable \{\{httpServerWhichOffersTheHttpEndpoint\}\} MUST be set to the HTTP server that offers the endpoint. The path /api/v1/routine/notification MAY align with the HTTP POST path as stated in 2.2.1.
In that sense it can change dependent on the endurance application.

### 2.2.4 Error Handling

The following http response codes MUST be defined for HTTP POST endpoint for the Endurance Predictor endpoint.

| Code | Description                      |
|------|----------------------------------|
| 202  | Accepted                         |
| 400  | Request body was malformed       |

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX-0018 Eclipse Data Space Connector (EDC)
- CX-0057 Semantic Model: Remaining Useful Life
- CX-0088 Semantic Model: User Estimated Loading

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
