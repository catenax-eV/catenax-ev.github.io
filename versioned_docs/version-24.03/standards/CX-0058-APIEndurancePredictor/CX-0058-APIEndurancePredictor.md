# CX-0058 API: Endurance Predictor v1.0.0

## ABSTRACT

Behavioral product models, based on a structured and consistent architecture of reusable and standard functional components and applied in a common ecosystem such as Catena-X, permit a wide range of new business concepts and digital services. Consequently, the central scope of consideration for the “Data-centric and model-centric development and operational support” use case is the concept of the “digital twin” for the integrated mapping of products with their functions, properties and key business figures via a common data model.

One typical requirement of the digital behavior twin relies on dynamic services, which offer up to date information of a built vehicle.

Different parties like automobile clubs, recyclers, and others want to know more about the current state of a specific vehicle. One such information is the expected lifetime of components. This information can be used e.g., to support a decision if a component is worth recycling.

This document sets the standards for the API for the usage of services which calculate a so-called "remaining useful life value "(RUL-value, see CX-0057).

## 1. INTRODUCTION

This documentation describes the technical specification to enable the request of standardized "Remaining Useful Life (RUL)" data at component level of a concrete vehicle instance ("as built") and its integration into the Eclipse Dataspace connector (EDC). It covers exclusively the illustration of the specific API endpoints. The minimal process an application needs in order to support such interaction will not be handled here.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for the following roles:

- Data Provider / Consumer
- Business Application Provider

For now, the Endurance predictor API is limited to sending of payload data and requesting the calculation result via notifications.

This document describes the relevant API endpoints to be created by each RUL application and their integration into the Eclipse Dataspace connector (EDC).
This standard covers exclusively the definition of the specific API endpoint. The minimal process an application needs to support for such notifications will not be handled here.

### 1.2 CONTEXT

> *This section is non-normative*

The two APIs described support the implementation of the dynamic behavior (i.e., service) of components (e.g., engine, gearbox..) in a digital behavior twin.
As the process is asynchronous, there are two APIs for different types of participants in the network.

1. API endpoint to be provided by a Service Provider providing a service to predict the expected lifetime of a product based on load spectrums.
2. API endpoint to be provided by a Service Requestor application or participant to receive the outcome of such an analysis in an asynchronous manner.

It is a non-central API, which can be implemented for various components. It relies on a load spectrum as input in order to calculate and return the corresponding RUL value.
The basic idea for the functionality of this API has been derived from CX-0023 Notification API.

As already mentioned in the Introduction, this standard provides the specification of the HTTP REST API endpoint to request (with an according Load Spectrum as input) and sending RUL value via the Catena X Dataspace. Without this API an interoperability between different application, with an aim to receive RUL data, is not given.

### 1.3 ARCHITECTURE OVERVIEW

> *This section is non-normative*

![architecture_overview](./assets/architecture_overview.png)

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
refer to: https://catena-x.net/en/catena-x-introduce-implement/certification for the process of conformity
assessment and certification.

Application or Service providers as well as data providers and consumers implementing their own solution need to proof conformity with this standard by providing:

An openAPI specification of the for this standard relevant endpoints

Those documents need to be handed over to a CAB.

### 1.6 EXAMPLES

### 1.7 TERMINOLOGY

> *This section is non-normative*

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2. "Endurance Predictor" API

> *This section is normative*

## 2.1 PRECONDITIONS AND DEPENDENCIES

The notification API MUST be published towards the network using a Data Asset/Contract Offer in terms of the IDSA Protocol.

The Eclipse Dataspace Connector as a reference implementation SHOULD BE used and is referenced in this document. Other connectors fulfilling the same standards towards Catena-X MAY be leveraged as well.

## 2.2 API SPECIFICATION

### 2.2.1 API Endpoints & resources

The notification API MUST be implemented as specified in the [openAPI](./assets/Notification_Endurance_predictor.json) documentation as stated here:

- POST /api/v1/routine/notification

In fact, it is OPTIONAL to implement the endpoint paths exactly as described above. The reason is that those endpoints are not called from any supply chain partner directly. Rather, they are called from the Eclipse Dataspace Connector (EDC) or a similar IDSA compliant connector as part of its data assets. In that sense, it is just important to implement endpoints that can process the defined request body and respond with the HTTP status codes and - if required - reply with the defined response body.

The EDCs/IDSA compliant data assets will act similar to a reverse proxy for the notification endpoints, therefore rather the EDC data assets are of significance, which should be exposed towards Catena-X through the Data Offer Catalogues in the EDC or any other IDSA Protocol compatible connector.

### 2.2.2 Available Data Types

The API MUST use JSON as the payload transported via HTTP.
The APIs payload consists of a general notification header and a use-case specific content dictionary.
The request and response are linked by the unique notificationID.

#### Notification Request Payload Structure

The main part of the content dictionary MUST follow the standard "CX-0056 Semantic Model: Classified Load Spectrum" as the load spectrum itself is given as the main input towards the endurance predictor.

```json
{ 
    "header": { 
        "notificationID": "notification-UUID", 
        "senderBPN": "BPNL0000000000", 
        "senderAddress": "https://abc.com", 
       "recipientAddress":"https://edc-xxxxxxx/BPNL000000", 
        "recipientBPN": "BPNL0000000", 
        "severity": "MINOR", 
        "status": "SENT", 
        "targetDate": "target-date", 
        "timeStamp": "time-stamp", 
        "classification": "RemainingUsefulLifePredictor", 
        "respondAssetId": "urn:pilot:service:EndurancePredictorEstimationNotification" 
    }, 
    "content": { 
        "requestRefId": " notification-receipt ", 
        "endurancePredictorInputs": [ 
            { 
                "componentId": " notification-receipt ", 
                "classifiedLoadSpectrumGearOil": { 
                  <load spectrum as per standard: CX-0056 Semantic Model: Classified Load Spectrum>
                }, 
              "classifiedLoadSpectrumGearSet": { 
                  <load spectrum as per standard: CX-0056 Semantic Model: Classified Load Spectrum>
   } 
            } 
        ] 
    } 
} 
```

#### Notification Response Payload Structure

The main part of the content dictionary MUST follow the standard "CX-0057 Semantic Model: Remaining Useful Life" as endurance predictor output MUST follow the sematics described in the corresponding model:

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
      "componentType": "GearBox", 
      "endurancePredictorOutputs": [ 
        { 
          "componentType": "GearSet", 
          "componentId": " notification-receipt ", 
          "remainingUsefulLife": { 
              <RuL as per standard: CX-0057 Semantic Model: Remaining Useful Life>
          } 
        } 
      ] 
    } 
  } 
```

#### Notification Response Error Payload Structure

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
      "componentType": "GearBox", 
        "type": "Error", 
        "message": "Error Message", 
      "endurancePredictorOutputs": [] 
    } 
  } 
```

### 2.2.3 EDC Data Asset Structure

When using the EDC, the following asset MUST be registered by the specific roles in this process. Other connectors implementing the IDSA Protocol require a similar data asset with the same structure and provisioning towards Catena-X.

#### 2.2.3.1 Service Consumer

As an application provider or an data consumer calling an endurance predictor of another participant an API for asynchronous receival of the result is required.
The corresponding data asset **MUST** look like the following:

```json
{
"asset": {
  "properties": {
    "asset:prop:id": "endurancePredictorResult-receipt",
    "asset:prop:name": "Asset to receive endurance predictor results",
    "asset:prop:contenttype": "application/json",
    "asset:prop:notificationtype": " behavioralTwinEndurancePredictorResult",
    "asset:prop:notificationmethod": "receive",
    "asset:prop:type": "notification.behavioralTwin.EndurancePredictorResult.receive"
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

The variable \{\{httpServerWhichOffersTheHttpEndpoint\}\} MUST be set to the HTTP server that offers the endpoint. The path /api/v1/routine/notification MAY align with the HTTP POST path as stated in 2.2.1. In that sense it can change dependent on the endurance application.

#### 2.2.3.1 Service Provider

As an service provider or data provider providing an endpoint for an endurance predictor service, an API for receival of the request including the load spectrum data is required.
The corresponding data asset **MUST** look like the following:

```json
{
"asset": {
  "properties": {
    "asset:prop:id": "endurancePredictorRequest-receipt",
    "asset:prop:name": "Asset to receive endurance predictor requests incl. load spectrum",
    "asset:prop:contenttype": "application/json",
    "asset:prop:notificationtype": "behavioralTwinEndurancePredictorRequest",
    "asset:prop:notificationmethod": "receive",
    "asset:prop:type": "notification.behavioralTwin.EndurancePredictorRequest.receive"
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

The variable \{\{httpServerWhichOffersTheHttpEndpoint\}\} MUST be set to the HTTP server that offers the endpoint. The path /api/v1/routine/notification MAY align with the HTTP POST path as stated in 2.2.1. In that sense it can change dependent on the endurance application.

### 2.2.4 Error Handling

The following http response codes MUST be defined for HTTP POST endpoint for the Endurance Predictor endpoint.

| Code | Description                      |
|------|----------------------------------|
| 202  | Accepted                         |
| 400  | Request body was malformed       |

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX-0056 Semantic Model: Classified Load Spectrum
- CX-0057 Semantic Model: Remaining Useful Life
- CX-0018 Eclipse Data Space Connector (EDC)

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

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
