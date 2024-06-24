# CX-0069 Shop-Floor-Information-Service Aspect Model v.1.0.0

## FOR WHOM IS THE STANDARD DESIGNED

## ABSTRACT

A Modular Production is part of the value chain. It therefore has to guarantee flexibility and availability on one hand and on the other hand it has to allow product flexibility together with small lot sizes. The effect of disturbances and decision in this network are not limited to a local area, but they have also a big impact to other partners in the value chain network. It is therefore necessary to communicate values from the shop floor directly to other members of the network like the customers or their substitutes like logisticians. This communication is realized with the Shop-Floor-Information-Service (SIS).
For example a costumer wants to know the estimated date of production, he can therefore use the Shop-Floor-Information-Service to get the information either directly, via cyclic messages or notifications in case of changing calculated production dates. The Shop-Floor-Information-Service uses the GetProductionForecastInformation model and the ProvideProductionForecastInformation model.
This mechanism is reflected following the Shop-Floor-Information API.

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard is relevant for

- Business Application Providers:  their role is the implementation of the Shop-Floor-Information-Service
- Data  Providers: mainly modular productions - they have to provide the data necessary for the Shop-Floor-Information-Service
- Data Consumers: e.g. tier n-1 factories, end customers or logisticians, they have to be able to process the data provided by the Shop-Floor-Information-Service

Stakeholders within Catena-X

- PURIS, DCM: capacity planning requires a forecast of the delivered products
- OSIM: the Forecast Data of the SIS can serve as input for a OSIM-simulation

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

Higher-level, external influencing factors from the supply chain, such as delays in the logistics chain for supplier parts or short-term order changes, may invalidate a production plan that has already been drawn up. Today, such short-term changes in the general conditions of the production process can often only be taken into consideration indirectly and made through manual corrections. The solution approaches in the modular production use case are aimed at increasing the flexibility of production to better leverage the existing business potential. For this purpose, services, interface, and data model definitions based on industry standards are offered with the goal of increasing the flexibility and reliability of industrial production. The shop floor is networked with the Catena-X network via the connectors standardized in Catena-X. Modular production  will offer a Shop-Floor-Information-Service  that supplies information about the production status and planning as needed by other use cases. The goal here is to enable individual production (batch size 1) at the price of series production. In particular, this is to be achieved by automating the orchestration of production resources and planning of production processes as much as possible, thus significantly reducing effort and planning times. A growth in efficiency in the sense of the OEE is achieved in that production can be reconfigured in the event of faults to continue operating as well as possible. The increased flexibility creates the space for new business models, such as the interposition of highly prioritized, lucrative orders. As a consequence not only the production is required to be flexible and fast reactive to changes, it also requires  communication of future factory output to the customers.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

As well as sections marked as non-normative, all authoring guidelines, diagrams,
examples, and notes in this specification are non-normative. Everything else in
this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**,
**REQUIRED**, **SHOULD** and **SHOULD NOT** in this document document are to be
interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they
appear in all capitals, as shown here.

All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
The proof of conformity for a single semantic model is done according to the general rules for proving the conformity of data provided to a semantic model or the ability to consume the corresponding data.

### 1.4 EXAMPLES

In this chapter, examples for the GetProductionForecastInformation and ProvideProductionForecastInformation model are listed in form of JSON for reference.

**GetProductionForecastInformation**

The following data set shows an example for a GetProductionForecastInformation which will be sent to the endpoint GetProductionForecastInformation.
Request in case of synchronous answers:

```json
{
  "header": {
    "senderBpn": "BPNL1234567890SE",
    "expectedResponseBy": "2023-07-01T21:24:00+07:00",
    "context": "urn:samm:io.catenax.MP-SIS-GetProductionForecastInformation:1.x.x",
    "messageId": "00000000-0000-0000-C000-000000000042",
    "recipientBpn": "BPNL0987654321RE",
    "sentDateTime": "2023-06-19T21:24:00+07:00",
    "version": "urn:samm:io.catenax.shared.message_header:1.0.0"
  },
  "request": {
    "precisionOfForecast": {
      "timeUnit": "day",
      "value": 1
    },
    "offset": {
      "timeUnit": "day",
      "value": 1
    },
    "orderId": "0007",
    "customerId": "BPNL7588787849VQ",
    "deviationOfSchedule": {
      "timeUnit": "day",
      "value": 7
    },
    "productionForecastForAll": false,
    "versionDataModel": "urn:samm:io.catenax.shopfloor_information.production_request:1.0.0",
    "notificationInterval": {
      "timeUnit": "day",
      "value": 2
    },
    "communicationMode": "synchronous"
  }
}
```

**ProvideProductionForecastInformation**

The following data set shows an example for a ProvideProductionForecastInformation which will be sent to the endpoint ProvideProductionForecastInformation.

```json
{
  "header": {
    "senderBpn": "BPNL1234567890SE",
    "relatedMessageId": "00000000-0000-0000-C000-000000000042",
    "expectedResponseBy": "2023-07-02T13:00:00.000+02:00",
    "context": "urn:samm:io.catenax.MP-SIS-ProvideProductionForecastInformation:1.x.x",
    "messageId": "00000000-0000-0000-C000-000000000046",
    "recipientBpn": "BPNL0987654321RE",
    "sentDateTime": "2023-06-19T21:24:00+07:00",
    "version": "urn:samm:io.catenax.shared.message_header:1.0.0"
  },
  "productionForecastResponse": {
    "listOfForecastItems": [
      {
        "returnCode": "ok",
        "precisionOfForecast": {
          "timeUnit": "day",
          "value": 3
        },
        "reasonsForDelay": "supplyProblems",
        "positionId": "0007-3",
        "productionStatus": "itemReceived",
        "productionForecast": "2023-07-05T14:05:00.000+02:00",
        "forecastDate": "2023-07-01T14:05:20.255+02:00"
      }
    ],
    "versionDataModel": "urn:samm:io.catenax.shopfloor_information.production_response:1.0.0",
    "communicationMode": "synchronous",
    "iterationNumber": 42
  }
}
```

**ShopfloorInformationTypes**

In order to use common data in the different models, a ShopfloorInformationTypes has been defined as well, a example is shown below:

```json
{
  "versionDataModel": "urn:samm:io.catenax.shared.shopfloor_information_types:1.0.0",
  "timeValue": {
    "value": 12,
    "timeUnit": "unit:secondUnitOfTime"
  },
  "communicationMode": "synchronous"
}

```

### 1.5 TERMINOLOGY

> *This section is non-normative*

Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.

: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

*[Source: Catena-X, CX-0002, note 3 removed]*

| Name | Abbreviation | Description |
|---|---|---|
| AAS | Asset Administration Shell | Specification to manage and administrate digital representations of assets (concepts, physical device, process, etc.). Used synonymously with the term "Digital Twin". |
| BPN | Business Partner Number | Business Partner Number |
| CX | Catena-X | Data ecosystem / data space for the automotive industry. |
| DCM | Demand and Capacity Management | Product within Catena-X for shortage identification. |
| DT | Digital Twin | Digital representation of an asset (concept, physical device, process, etc.). Realized using the Asset Administration Shell. Used synonymously with the term "Asset Administration Shell". |
| EDC | Eclipse Dataspace Connector | Open-Source Dataspace Connector Framework to participate in International Data Spaces. |
| JSON | JavaScript Object Notation | Json is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects. |
| MP | Modular Production | Product within Catena-X for shopfloor activities |
| OSim | Online Control and Simulation | Product within Catena-X for Online Simulation along the supply chain |
| PURIS | Predictive Unit Real-Time Information System | Product within Catena-X for shortage identification. |
| SAMM | Semantic aspect meta model | Modelling specification to realize a standardized set of models with strict typing which can be used within the AAS.  SAMMs are standardized via the Semantic Layer team and can be looked up via the Semantic Hub. |
| SIS | Shop-Floor-Information-Service | Service provided by MP in order to give information from the shopfloor to customers and third parties |
| SSI | Self Sovereign Identity | Self Sovereign Identity |

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

## 2 ASPECT MODEL “GetProductionForecastInformation”

> *This section is normative*

### 2.1 INTRODUCTION

The GetProductionForecastInformation MUST be sent from the customer or a third party to the modular production by HTTP request. The data format described here MUST be followed.
The GetProductionForecastInformation data model MUST be implemented by all participants who wish to use the Shop-Floor-Information-Service as a modular production, a customer or a participating third party.
For GetProductionForecastInformation the requester MUST either select the "synchronous", "cyclic" or "notification" communication mode.
Companies, which use the Shop-Floor-Information-Service as a customer or third party MUST be able to send GetProductionForecastInformation request.
Companies, use the Shop-Floor-Information-Service  as a modular production MUST be able to receive GetProductionForecastInformation  request.

### 2.2 NORMATIVE CRITERIA

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification SMT.
This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003 as input for the semantic deriven workflow.
Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to CX-0003.
Every data provider of GetProductionForecastInformation MUST provide the data conforming to the semantic model specified in this document.
The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred.
Every certified business application relying on GetProductionForecastInformation data MUST be able to consume data conformant to the semantic model specified in this document.
Data consumers (customer and third parties) and data provider (factories) MUST comply with the license of the semantic model.
In the Catena-X data GetProductionForecastInformation  MUST be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002.
The JSON Payload of data providers MUST be conformant to the JSON Schema as specified in this document.

### 2.3 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#52-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

### 2.4 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 2.5 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
    urn:samm:io.catenax.shopfloor_information.production_forecast_request:1.0.0
```

This identifier MUST be used by the data provider to define the semantics of the data being transferred.

### 2.6 FORMATS OF SEMANTIC MODEL

#### 2.6.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

  >[https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.shopfloor_information.get_production_forecast/1.0.0/GetProductionForecast.ttl](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.shopfloor_information.get_production_forecast/1.0.0/GetProductionForecast.ttl)

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 2.6.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 2.6.3 aasx

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#52-non-normative-references)].

### 2.7 SEMANTIC MODEL

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

The GetProductionForecastInformation model is described in detail in the following table:

|Field |Level |REQUIRED |Purpose |Data Type |Example Value |
|--|--|--|--|--|--|
|senderBpn |CX-header |mandatory |identification of the sender |string |BPNL1234567890SE |
|recipientBpn |CX-header |mandatory |identification of the recipient |string |BPNL0987654321RE |
|expectedResponseBy |CX-header |mandatory |Deadline for the first response |date |2023-07-01T21\:24\:00+07\:00 |
|messageId |CX-header |mandatory |unique ID for message will be used as requestID for the following communication  |UUID |00000000-0000-0000-C000-000000000046 |
|context |CX-header |mandatory |Information about the context the message should be considered in, e.g. "MP-Request" |string |MUST BE urn\:samm\:io.catenax.MP-SIS-GetProductionForecastInformation\:1.x.x |
|sentDateTime |CX-header |mandatory |time of request |string |2023-06-19T21\:24\:00+07\:00 |
|version |CX-header |mandatory |of Meta model used for compatibility |string |urn\:samm\:io.catenax.shared.message\_header\:1.0.0 |
|relatedMessageId |CX-header |optional |not used for request; will be used in the following parts to refer to the request |UUID |00000000-0000-0000-C000-000000000042 |
|versionDataModel |SIS-Payload |mandatory |version of the datamodel |string |urn\:samm\:io.catenax.shopfloor\_information.production\_request\:1.0.0 |
|customerId |SIS-Payload |mandatory |The internal ID of the customer of the Modular Production in order to identify the customer in the database |string |VLhpfQGTMDYpsBZxvfBoeygjb |
|orderId |SIS-Payload |mandatory |The orderID communicated between the modular production and the customer |string |0007 |
|communicationMode |SIS-Payload |mandatory |Enum describing which communication mode is used for data exchange resp. the mode of the response\: synchronous, cyclic or notification |enum |synchronous |
|productionForecast4All |SIS-Payload |mandatory |if true, the forecast for the entire order will be sent \(more precise\: latest production date of all suborders \) instead of splitting it in the suborders |bool |true |
|offset |SIS-Payload |mandatory |timespan to activating of cyclic and notification; for immediate response it should be "0" |TimeValue \[EnumTimeUnits, uint \] |\{"timeUnit"\: "day", "value"\: 1 \} |
|notificationInterval |SIS-Payload |optional if \[cyclic\] = mandatory |in case of cyclic notification it is giving the period of the notification cycles if \(communicationMode == \[cyclic\]\) =\> mandatory  |TimeValue \[EnumTimeUnits, uint \] |\{"timeUnit"\: "day", "value"\: 2 \} |
|deviationOfSchedule |SIS-Payload |optional if \[notification\] = mandatory  |in case of notification a tolerance will be defined for triggering a new notification to avoid too many notifications with smaa deviations in the forecasting date if \(communicationMode == \[notification\]\) =\> mandatory  |TimeValue \[EnumTimeUnits, uint \] |\{"timeUnit"\: "day", "value"\: 7 \} |
|precisionOfForecast |SIS-Payload |optional |Requested precision of the forecasting date default, the production defines the date in case of a requested precisionOfForecast, the modular production delivers with the required precision if the precision is not possible, an error code is send and the forecast will be the best possible precision |TimeValue \[EnumTimeUnits, uint \] |\{"timeUnit"\: "day", "value"\: 1 \} |

The context field in the header MUST be urn:samm:io.catenax.MP-SIS-GetProductionForecastInformation:1.x.x

The API GetProductionForecastInformation (CX-0068) call MUST use the GetProductionForecast data model

Communication Mode MUST be one of the following items: synchronous, cyclic and notification

EnumTimeUnits MUST be one of the following items: seconds, minutes, hour, day, week, month, year

## 3 ASPECT MODEL “ProvideProductionForecastInformation”

> *This section is normative*

Companies, which use the Shop-Floor-Information-Service as a customer or third party MUST be able to receive ProvideProductionForecastInformation information.
Companies, use the Shop-Floor-Information-Service as a factory MUST be able to send ProvideProductionForecastInformation information.

### 3.1 INTRODUCTION

### 3.2 NORMATIVE CRITERIA

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification SMT.
This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003 as input for the semantic driven workflow.
Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to CX-0003.
Every data provider of ProvideProductionForecastInformation MUST provide the data conforming to the semantic model specified in this document.
The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred.
Every certified business application relying on ProvideProductionForecastInformation data MUST be able to consume data conformant to the semantic model specified in this document.
Data consumers (customer and third parties) and data provider (factories) MUST comply with the license of the semantic model.
In the Catena-X data ProvideProductionForecastInformation MUST be requested and exchanged via Eclipse Dataspace Connector (EDC) conformant to CX-0018 and CX-0002.
The JSON Payload of data providers MUST be conformant to the JSON Schema as specified in this document.

### 3.3 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification SMT.

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003 as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to CX-0003.

### 3.4 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 3.5 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
    urn:samm:io.catenax.shopfloor_information.production_forecast_response:1.0.0
```

### 3.6 FORMATS OF SEMANTIC MODEL

#### 3.6.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

> [https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.shopfloor_information.provide_production_forecast/1.0.0/ProvideProductionForecast.ttl](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.shopfloor_information.provide_production_forecast/1.0.0/ProvideProductionForecast.ttl)

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 3.6.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 3.6.3 aasx

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#52-non-normative-references)].

### 3.7 SEMANTIC MODEL

The ProvideProductionForecastInformation model is described in detail in the following table:

|Field |Level |REQUIRED |Purpose |Datatype |Example Value |
|--|--|--|--|--|--|
|version |CX-header |mandatory |of Meta model used for compatibility |string |urn\:samm\:io.catenax.shared.message\_header\:1.0.0 |
|messageId |CX-header |mandatory |unique ID for message will be used as requestID for the following communication |UUID |00000000-0000-0000-C000-000000000046 |
|context |CX-header |mandatory |Information about the context the message should be considered in, e.g. "MP-Request" |string |MUST BE urn\:samm\:io.catenax.MP-SIS-ProvideProductionForecastInformation\:1.x.x |
|sentDateTime |CX-header |mandatory |time of request |string |2023-06-19T21\:24\:00+07\:00 |
|senderBpn |CX-header |mandatory |identification of the sender |string |BPNL1234567890SE |
|recipientBpn |CX-header |mandatory |identification of the recipient |string |BPNL0987654321RE |
|expectedResponseBy |CX-header |mandatory |Deadline for the first response |date |2023-07-02T13\:00\:00.000+02\:00 |
|relatedMessageId |CX-header |optional |not used for request; will be used in the following parts to refer to the request |UUID |00000000-0000-0000-C000-000000000042 |
|versionDataModel |SIS-Payload |mandatory |version of the datamodel |string |urn\:samm\:io.catenax.shopfloor\_information.production\_response\:1.0.0 |
|iterationNo |SIS-Payload |optional |in case of cyclic or notification mode this field is used to count the iterations to keep them in the correct order  |int |42 |
|communicationMode |SIS-Payload |mandatory |Enum describing if synchronous, cyclic or notification is used for data exchange |enum |synchronous |
|ListOfForecastItems |SIS-Payload |mandatory |list containing the items corresponding to the order of this request  |List of Forecast Items | |
|ForecastItem\* |SIS-Payload | | | | |
|positionId |SIS-Payload |mandatory |field referring to the ID of this item in the order list, e.g. item number in case of productionForecastForAll =true \: provide order ID instead of position ID |UUID / string |0007-3 |
|productionForecast |SIS-Payload |mandatory |date of finalizing the production, this does not cover additional internal activities e.g. logistic |datetime |2023-07-05T14\:05\:00.000+02\:00 |
|precisionOfForecast |SIS-Payload |mandatory |precision of the forecast in form of an interval e.g. +-3days, the precision either matches to the required precision of the request or the maximal possible precision.  |TimeValue \[EnumTimeUnits, uint \] |\{ "timeUnit"\: "day", "value"\: 3 \}, |
|productionStatus |SIS-Payload |mandatory/opt |status of the production |enum \<ProductionStatus\> |itemReceived |
|forecastDate |SIS-Payload |mandatory |date of determination the forecasting status |datetime |2023-07-01T14\:05\:20.255+02\:00 |
|reasonForDelay |SIS-Payload |mandatory |in case of a delay a possible explanation |enum |supplyProblems |

The context field in the header MUST be urn:samm:io.catenax.MP-SIS-ProvideProductionForecastInformation:1.x.x

The API ProvideProductionForecastInformation  call  (CX-0068)  MUST use the ProvideProductionForecast data model

Communication Mode MUST be one of the following items: synchronous, cyclic and notification

EnumTimeUnits MUST be one of the following items: unit:secondUnitOfTime, unit:minuteUnitOfTime, unit:hour, unit:day, unit:week, unit:month, unit:year

ProductionStatus MUST be one of the following items: itemReceived, itemPlanned, itemInProduction, itemCompleted, statusUndefined, ordered following the figure below

![ProductionStates](./assets/ProductionStates.png)

reasonsForDelay MUST be one of the following items: supplyProblems, internalProblems, otherCircumstances, noInformationAvailable

## 4 ASPECT MODEL “ShopfloorInformationTypes”

> *This section is normative*

The ShopfloorInformationTypes MUST be used for all parties using ProvideProductionForecastInformation or GetProductionForecastInformation information.

### 4.1 INTRODUCTION

The ShopfloorInformationTypes are a collection of commonly used data models of  ProvideProductionForecastInformation or GetProductionForecastInformation.

### 4.2 NORMATIVE CRITERIA

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification SMT.

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003 as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub conformant to CX-0003.

Every data provider of ProvideProductionForecastInformation MUST provide the data conforming to the semantic model specified in this document.

The unique identifier of the semantic model specified in this document MUST be used by the data provider to define the semantics of the data being transferred.

Every certified business application relying on ProvideProductionForecastInformation data MUST be able to consume data conformant to the semantic model specified in this document.

Data consumers (customer and third parties) and data provider (factories) MUST comply with the license of the semantic model.

The JSON Payload of data providers MUST be conformant to the JSON Schema as specified in this document.

### 4.3 SPECIFICATION ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#52-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic driven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

### 4.4 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

### 4.5 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier

```text
    urn:samm:io.catenax.shared.shopfloor_information_types:1.0.0
```

This identifier MUST be used by the data provider to define the semantics of the data being transferred.

### 4.6 FORMATS OF SEMANTIC MODEL

#### 4.6.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

> [https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.shared.shopfloor_information_types/1.0.0/ShopfloorInformationTypes.ttl](https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.shared.shopfloor_information_types/1.0.0/ShopfloorInformationTypes.ttl)

The open source command line tool of the Eclipse Semantic Modeling Framework is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

#### 4.6.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

#### 4.6.3 aasx

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#52-non-normative-references)].

### 4.7 SEMANTIC MODEL

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

The ProvideProductionForecastInformation model is described in detail in the following table:

|Field|Purpose|Datatype|Example Value|
|-|-|-|-|
|versionDataModel|version of the data model|string|urn:samm:io.catenax.shared.shopfloor_information_types:1.0.0|
|communicationMode|Enum describing if synchronous, cyclic or notification is used for data exchange|enum|synchronous|
|timeValue|dataFormat for storing timeValues|TimeValue [EnumTimeUnits, uint ]|\{ "timeUnit": "day", "value": 3\}|

Communication Mode MUST be one of the following items: synchronous, cyclic and notification

EnumTimeUnits MUST be one of the following items: unit:secondUnitOfTime, unit:minuteUnitOfTime, unit:hour, unit:day, unit:week, unit:month, unit:year

## 5 REFERENCES

### 5.1 NORMATIVE REFERENCES

- CX-0001 EDC Discovery API, Version 1.1
- CX-0003 SAMM Aspect Meta Model, Version 1.0.1
- CX-0018 Eclipse Data Space Connector (EDC)
- CX-0068 Shop-Floor-Information-Service API
- CX-0075 Shop-Floor-Information-Service Default/Process

### 5.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

[SMT]  How to create a submodel template specification. Guideline. Download from: https://industrialdigitaltwin.org/wp-content/uploads/2022/12/I40-IDTA-WS-Process-How-to-write-a-SMT-FINAL-.pdf

### 5.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*
