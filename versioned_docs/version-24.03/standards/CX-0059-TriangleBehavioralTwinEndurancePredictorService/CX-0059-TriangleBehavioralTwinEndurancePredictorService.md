# CX-0059 Use Case Behavioral Twin Endurance Predictor v1.2.0

## ABSTRACT

Behavioral product models, built on a consistent architecture of reusable functional components within ecosystems like Catena-X, unlock a wide range of innovative business ideas and digital services.

The focus of the 'Data-centric and model-centric development and operational support' revolves around the 'digital behavior twin.' This concept maps products, their functions, attributes, and business metrics using a shared data model.

Part of this digital twin involves dynamic services providing real-time information about existing or planned vehicles. Stakeholders like automobile clubs or recycler seek specific details, such as a component's expected lifespan. This information is crucial for determining the viability of recycling components.

This standard focuses on the Endurance Predictor. The Endurance predictor recieves load spectra, that has been recorded in the vehicle, through the Catena-X network. The load spectra, combined with additional product knowledge by the service provider, is used to calculate presice remaining useful life values for specific components.

## FOR WHOM IS THE STANDARD DESIGNED

The standard is relevant for the following roles within the scope of the Endurance Predictor Service

- Data & Service Provider / Consumer
- Business Application Provider.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

This standard has changed compared to version 1.1.0 due to architectural changes, in the form of Knowledge agent useage insted of a notification based architecture.
This Standard document contains all required Semantic Models, APIs and Standards for the service.

The 1.2 version chnaged from a triangle to a Use Case and consolidates the contents of the previously independent standards CX-0056, CX-0057 and CX-0058 within a single comprehensive standard.

## 1 INTRODUCTION

This document acts as a bracket for single standards required to request "Remaining Useful Life (RUL)" data as well as providing a service for its calculation at a component level. Included are APIs to be provided by the service provider and the service requestor, as well as aspect models for the respective payloads being exchanged in an asynchronous pattern leveraging those APIs.

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

The standard is relevant for the following roles within the scope of Endurance Predictor Service

- Data Provider / Consumer
- Business Application Provider

NOTE: Fulfilling a use-case standard by a data provider / consumer can be done in two ways: A) Purchase a certified app for the
use-case. In this case the data provider / consumer does not need to proof conformity again and B) Data Provisioning /
Consumption without a certified app for the use-case. In this case the data provider / consumer needs to proof conformity with all single standards listed in this document.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

This graphic illustrates the principles architecture of the Endurance Predictor Service.

![architecture_overview.drawio.png](./assets/architecture_overview.drawio.png)

As a data provide you will receive a request for remaining useful life information from an outside RuL service requester via EDC. The Data provider must provide a running Knowledge Agent EDC extensions as described in CX-0084:v1.1.
The data provider then has the vehicle Load Spectrum data and forwards them by calling the supplier of that specific part.
The service provider also needs Knowledge Agent EDC extensions in order to connect the data to the endurance predictor service based on the underlying ontologies.
After the calcuslatio, the results are transfered back to the data provider through the EDC.

This standard contains two aspect models described in detail in Chapter 3.

- Aspect Model for load spectrums, acting as the main input for a component specific calculation for remaining useful life. (See section 3.1)
- Aspect Model for Remaining Useful Life data, acting as the main output for a component specific calculation for remaining useful life. (See section 3.2)

It also contains the API descriptions for the APIs to exchange requests as well as results of a remaining useful life calculation:

- API Endurance Predictor (contains both API descriptions). (See section 5.1)

The calculation is asynchronous, therefore both parties involved in a calculation request require to provide API endpoints, as the results are sent back at a later stage and not as part of the HTTP response body.
Since Data Transfer in Catena-X requires IDSA compliance, both parties involved must use an IDSA compliant connector and provision the API endpoints as specific data assets in those connectors.

Additionally the Knowledge Agent functionality for the EDC is required. This is defined in:

1. CX - 0084:v1.1 Federated Queries in Data Spaces
A standard for a semantic-driven and state-of-the-art compute-to-data architecture for Catena-X, the so called Knowledge Agents (KA) approach. It builds on well-established W3C-standards of the semantic web.

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the
standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs).
Since this document describes a set of standards to be fulfilled, participants MUST fulfill all mentioned standards and
the respective conformity assessment criteria in addition to the specific criteria mentioned in this document.
The specific criteria described in this document are describing the usage of the central tools as well as common tools described
in the linked standardization documents and therefore compliance should be checked with the tools provided for these
components.
The Eclipse Dataspace Connector (EDC) is RECOMMENDED to be used as an IDSA compliant connector, as it is the current reference implementation of the IDSA protocol.

### 1.4 EXAMPLES

The Endurance Predictor can be used in many different contexts.

OEM, TIER-X: In the early development phase, components can be designed using digital prototypes based on component-specific damage calculation. The load data required for this comes from simulation or measurement in the digital twin.

Tier-X: The overall product range becomes more attractive in the offer phase when model-based damage calculation is included as a product-related service.

During the usage phase, OEMs, car dealers and automotive clubs can further interpret the Remaining Useful Life calculation for a vehicle evaluation and offer it as vehicle-related services for their end customers and fleet operators.

Even during the usage phase, but particularly during the recycling phase, OEMs, Tier-X, automotive clubs, car dealers, insurers, fleet operators and recyclers benefit from precise residual value analyses of the entire vehicle and its components on the basis of component-specific damage calculation.

### 1.5 TERMINOLOGY

> *This section is non-normative*

- Business Partner Number (BPN) : A BPN is the unique identifier of a partner within Catena-X

- Eclipse Dataspace Connector (EDC) : The EDC is a reference implementation of a connector for IDSA conform sovereign data exchange

- Behavioral Twin : Behavioural product models, based on a structured and consistent architecture of reusable and standard functional components and applied in a common ecosystem

- Knowledge Agent(KA): The so called Knowledge Agents (KA) approach. It builds on well-established W3C-standards of the semantic web, such as OWL, SPARQL, SHACL, RDF etc. and makes these protocols usable to formulate powerful queries to the data space. Those queries can be used to answer business questions directly (comparable to a search engine) or they can be embedded in apps to include query results into workflows with more advanced visualization.

- Matchmaking Agent: This component supports SparQL to traverse the federated data space as a large data structure. It interacts with the EDC. The provider's Matchmaking Agent will be activated by its EDC. Therefore, the EDC must offer a Graph Asset (variant of ordinary data assets in the Catena-X EDC standard). The consumer's Matchmaking Agent interacts with its EDC to negotiate and perform the transfer of Sub-Skills to other dataspace participants. The Matchmaking Agents are matching the (sub)graphs and negotiate appropriated graph assets with the partner EDCs.

- Binding Agent: The Binding Agent is a restricted version of the Matchmaking Agent (subset of OWL/SparQL, e.g., without federation) which is just focused on translating Sub-Skills of a particular business domain (Bill-Of-Material, Chemical Materials, Production Sites, etc.) into proper SQL- or REST based backend system calls.Implementation details: For data bindings, OnTop is used. For service bindings, RDF4J is used.

The ontology is a formal representation of knowledge that captures concepts, relationships, and properties. It allows a shared understanding and reasoning about the respective domain.
It must be hosted in a way that all participants can access it. Currently, the ontology is hosted at GitHub.

Usecase specific glossary of used API and SAMM models can be found in the respective sections in this standard document.

## 2 RELEVANT PARTS OF THE STANDARD "Use Case Behavioral Twin Endurance Predictor"

> *This section is normative*

### 2.1 "STANDARDS FOR "Use Case Behavioral Twin Endurance Predictor"

> *This section is normative*

As a Service Provider for an Endurance Predictor Service I need to fulfill the following standards in the following contexts:

- Semantic Model: Classified load spectrum (Section 3.1) MUST be understood by my service and MUST be consumed by my service provider API.
- Semantic Model: Remaining Useful Life (Section 3.2) MUST be provided as part of my communication of the result towards the requestor and/or requesting application
- API: Endurance Predictor (Section 5.1) MUST be followed in terms of all relevant parts for a service provider

As a Service Requestor or Service Requestor Application I need to fulfill the following standards in the following contexts:

- Semantic Model: Classified load spectrum (Section 3.1) MUST be provided as part of the request for a remaining useful life calculation towards a service operator's API
- Semantic Model: Remaining Useful Life (Section 3.2) MUST be consumable by my connected underlying application.
- API: Endurance Predictor (Section 5.1) MUST be followed in terms of all relevant parts for a service requestor.

#### 2.1.1 LIST OF STANDALONE STANDARDS

To participate in the Use Case Behavioral Twin Endurance Predictor, the following single standards MUST be fulfilled:

- CX-0018:v2.1 Eclipse Data Space Connector (EDC)
- CX-0084:v1.1 Federated Queries in Data Spaces (Knowledge Agent).

#### 2.1.2 DATA REQUIRED

As a Service Requestor or Service Requestor Application I MUST provide load spectra in the format of the aspect model described in Section 3.1.
As a Service Provider I MUST provide Remaining useful life information in the format of the aspect model described in Section 3.2.

#### 2.1.3 ADDITIONAL REQUIREMENTS

If you are engaged as a data provider, you MUST mount your data source to the federated knowledge graph as Graph Asset. Beside the policy and contract definition, a Graph Asset registration is needed.
As a service provider you MUST make the service available as part of the federated knowledge graph, a Grapth Asset pointing to your Remoting Agent endpoint is needed.

## 3 ASPECT MODELS

The folloeing Aspect Models are part of this standard

1. ClassifiedLoadSpectrum, V 1.0.0, urn:bamm:io.catenax.classified_load_spectrum:1.0.0
2. RemainingUsefulLife", V1.0.0, urn:bamm:io.catenax.rul:1.0.0##RemainingUsefulLife

> *This section is normative*

### 3.1 ASPECT MODEL "ClassifiedLoadSpectrum"

#### 3.1.1 INTRODUCTION

The data model “ClassifiedLoadSpectrum” represents the load data of a vehicle component.
The load spectrum is a data set that represents the aggregated loading of a component.
Any kind of loading is covered: loading can be force or torque or revolutions or temperature or event or similar. The load data is classified and counted with specific counting methods.

This standard defines the format for the counted load data, so that the exchange of load data between different partners is possible.

#### 3.1.2 CONTEXT

> *This section is non-normative*

The „ClassifiedLoadSpectrum“ contains load data, metadata to interpret this load data and the CX ID of the assembly or component these load data are valid for.

Load spectra counts the loading of a component in classes. Loading can be a change of a state like gearshift, a temperature distribution or the torque acting at a shaft or anything else. In a load spectrum, these loads are classified. The torque acting at a shaft, for example, has an upper and a lower limit: this interval is divided in a number smaller intervals, the classes and torque is sorted is this classes. The counting may be the time the shaft is subjected to the torque or the number of changes of torque classes.

In the standard, arbitrary number of load channels are possible, but only one counting. For each load channel a vector with the acting load classes must be provided. The first entry in the counts vector is the counting of the combination of loads given in the first entries of the load channel vectors. Only load combinations which occur are stored. So the number of data is minimized.

All kinds of load data and events can be covered with the standard. The counting might be time or any kind of numbering like number of events or revolutions.

The metadata block is used to identify the right component in order to interpret the load spectrum. A component is designed for a specific application with a specific loading. To estimate the damage respectively the health of a component, a lifetime model is combined with the load data. The lifetime model is in general property of the component producer. Load data might be measured, simulated or logged during component usage.

The standard covers all classified load spectra, independent of the origin. The origin is stored in the standard.

#### 3.1.3 EXAMPLES

```json
{ 
    "targetComponentID": "urn:uuid:1d161134-8bd4-4253-8735-304852d1d17b", 
    "metadata": { 
        "projectDescription": "projectnumber Stadt", 
        "componentDescription": "GearOil", 
        "routeDescription": "logged", 
        "status": { 
          "date": "2022-08-11T10:42:14.213+01:00", 
          "operatingHours": 3213.9, 
          "mileage": 65432 
       
        } 
    }, 
      "header": { 
        "countingMethod": "TimeAtLevel", 
        "channels": [ 
            { 
                "channelName": "TC_SU", 
                "unit": "unit:degreeCelsius", 
                "lowerLimit": 0.0, 
                "upperLimit": 640.0, 
                "numberOfBins": 128          
            } 
        ], 
        "countingValue": "Time", 
        "countingUnit": "unit:secondUnitOfTime"
    }, 
    "body": {
        "classes": [  
        {
                "className": "TC_SU-class",
                "classList": [
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22 
                ]
            }
        ],
        "counts": { 
        "countsName": "Time",
            "countsList": [
                34968.93, 
                73972.51, 
                401315.15, 
                4675505.56, 
                2526898.35, 
                864975.95, 
                938365.35, 
                1918920.77, 
                135387.54 
            ]
        } 
    }
```

#### 3.1.4 TERMINOLOGY

> *This section is non-normative*

Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.

: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).

*[Source: Catena-X, CX-0002:v1.2]*

- “Classified Load Spectrum”: Aspect model  
- “targetComponentID”: CX -ID of the assembly or component for which the load spectrum is valid for. It is necessary to identify the specific component.  
- “metadata”/”Metadata”: property/entity; Information on component, vehicle, load data origin and vehicle status
- “componentDescription”: property; identifier, might be used to find the right lifetime model
- “projectDescription”: property; identifier, might be used for information on specific vehicle
- “routeDescription”: property; identifier, might be used for information on specific application
- “status”/”StatusEntity”: property/entity; actual vehicle status
- “date”: property; actual date at which the load spectrum is provided
- “mileage”: property; mileage which the load spectrum covers, the unit is [km]
- “operatingHours”: property; number of operating hours which the load spectrum covers
  
- “header”/”HeaderEntity”: property/entity; classification information
- “countingMethod”: property; enumeration describing the kind of counting: “Rainflow”, “LRD”, “EventCount”, “TimeAtLevel”, “RangeCount”, “PeakCount”, “MaximumCount”.
- “countingValue”: property; optional, for example “Time”, if time is counted.
- “countingUnit” : property; dependent on counting value “unit: s” for time
- “channels”/”LoadChannelEntity” property/entity; list of load channels. Each list entry contains
- “channelName”: property; identifier of channel
- “unit”: property; unit of the load, for example “unit: degreeCelsius” or “unit: Nm”
- “lowerLimit”: property; lower limit of the load value
- “upperLimit”: property; upper limit of the load value
- “numerOfBins”: property; number of load classes
- “binLimits”: property; optional, if a non-equidistant divisio
  
- “body”/”BodySets”: property/entity; lists of load dat
- “classes”/”ClassListEntity”: property/entity; list of load channels, each entry in the list contains
- “className” : here the channel is characterized by channel name. The name ics extended by “-class”. For a rainflow counting, a load channel has two class lists, the channel name must be extended with “_from-class” and “_to-class”
- “classList”: list of the load data
- “counts”/”CountsEntity”: property/entity; counts name and list
- “countsName”: Name of counting, for example “NumberOfRevolutions” or just “Counts”
- “countsList”: property; list of the counting according to the classes in same position in “classList”

- “residuum”/”ResiduumEntity”: property/entity; for rainflow counted load spectra, a residuum stores the unclosed hysteresis loops.
- “residuumClassName”: property; the name is according to the load channel name
- “residuumClassList”: property; the list of turning point classes belonging to unclosed hysteresis loops

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

#### 3.1.5 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#52-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.1.6 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

#### 3.1.7 IDENTIFIER OF SEMANTIC MODEL

The semantic model has the unique identifier:

> urn:bamm:io.catenax.classified_load_spectrum:1.0.0  

This identifier **MUST** be used by the data provider to define the semantics of the data being transferred.

#### 3.1.8 FORMATS OF SEMANTIC MODEL

##### 3.1.8.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations. The file can be found here:

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.classified_load_spectrum/1.0.0/ClassifiedLoadSpectrum.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

##### 3.1.8.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

##### 3.1.8.3 aasx

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#52-non-normative-references)].

Note: As soon as the specification V3.0 of the Asset Administration Shell specfication is available
an update will be provided.
Template or a HTML documentation.

### 3.2 ASPECT MODEL "RemainingUsefulLife"

#### 3.2.1 INTRODUCTION

The data model Remaining Useful Life contains the two relevant values to describe the expected remaining life of a vehicle, remaining running distance and remaining operating hours.  

The data model is used for vehicle parts and vehicle components which cannot be visually assessed but need the loading information combined with a damage model to estimate the health of the component.  

#### 3.2.2 CONTEXT

> *This section is non-normative*

Remaining useful Life is describing the actual health of a vehicle component. Remaining useful Life is defined for vehicle and vehicle components; the values are “remaining running distance” and “remaining operating hours”. As it is a short-term property, the status of determination is part of the standard. Remaining useful Life is the result of a service determining the health of a vehicle component from the loading the component was subjected to. This loading might before example measured, simulate or estimated, this information on the origin of the loading is part of the standard.

![remaining_useful_life.png](./assets/remaing_useful_life.png)
*Figure 1: Overview*

#### 3.2.3 EXAMPLES

```json
{ 
  "remainingOperatingHours": 2500, 
  "remainingRunningDistance": 150000, 
  "determinationStatus": { 
    "date": "2022-06-15T14:23:56Z", 
    "operatingHours": 3456.7, 
    "mileage": 204000 
  }, 
  "determinationLoaddataSource": { 
    "informationOriginLoadSpectrum": "loggedOEM" 
  } 
} 
```

#### 3.2.4 TERMINOLOGY

> *This section is non-normative*

Aspect Model
: a formal, machine-readable semantic description (expressed with RDF/turtle) of data accessible from an Aspect.

: Note 1 to entry: An Aspect Model must adhere to the Semantic Aspect Meta Model (SAMM), i.e., it utilizes elements and relations defined in the Semantic Aspect Meta Model and is compliant to the validity rules defined by the Semantic Aspect Meta Model.  
  
: Note 2 to entry: Aspect model are logical data models which can be used to detail a conceptual model in order to describe the semantics of runtime data related to a concept. Further, elements of an Aspect model can/should refer to terms of a standardized Business Glossary (if existing).
  
*[Source: Catena-X, CX-0002:v1.2]*

- RemainingRunningDistance:  The estimated number of kilometers, the vehicle can drive without expectable failure of the component. This is an integer number, the unit is [km].
- Remaining operating hours: Estimated number of operating hours of the vehicle without expectable failure of the component. Floating number, unit is [h].
- determinationLoaddataSource:  The remaining life is estimated from the loading the component was subjected to. The loading of the component might be logged during vehicle life or simulated or estimated: this information on the origin is stored here. If available, the URL of the loadspectrum can be stored here.
- determinationStatus :  Comprising “date”, “mileage”, “operatingHours”, the timestamp the remainingUsefulLife was calculated and the according mileage and operating  hours of the vehicle.
- sourceLoadSpectrum:  if available, the URL of the used load spectrum
- informationOriginLoadSpectrum:  enumeration of possible loaddata sources:
  - "loggedOEM":  the data are collected during usage and provided on OEM side
  - "measuredOEM": load data are measured on OEM side
  - "simulatedOEM": load data are simulated on OEM side
  - "loggedSupplier":  the data are collected during usage and provided on supplier side
  - "measuredSupplier": load data are measured on supplier side
  - "simulatedSupplier": load data are simulated on supplier side
  - "otherOrigin": any other origin of load data, may be not even a load spectrum

Additional terminology used in this standard can be looked up in the glossary on the association homepage.

#### 3.2.5 SPECIFICATIONS ARTIFACTS

The modeling of the semantic model specified in this document was done in accordance to the "semantic driven workflow" to create a submodel template specification [SMT](#52-non-normative-references).

This aspect model is written in SAMM 2.0.0 as a modeling language conformant to CX-0003
as input for the semantic deriven workflow.

Like all Catena-X data models, this model is available in a machine-readable format on GitHub
conformant to CX-0003.

#### 3.2.6 LICENSE

This Catena-X data model is made available under the terms of the Creative Commons Attribution 4.0 International (CC-BY-4.0) license, which is available at Creative Commons.

#### 3.2.7 IDENTIFER OF SEMANTIC MODEL

The semantic model has the unique identifier:

urn:bamm:io.catenax.rul:1.0.0##RemainingUsefulLife

#### 3.2.8 FORMATS OF SEMANTIC MODEL

##### 3.2.8.1 RDF Turtle

The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating additional file formats and serializations.

The ttl file can be found here:

https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.rul/1.0.0/RemainingUsefulLife.ttl

The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation
of other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel
Template or a HTML documentation.

##### 3.2.8.2 JSON Schema

A JSON Schema can be generated from the RDF Turtle file. The JSON Schema defines the Value-Only
payload of the Asset Administration Shell for the API operation "GetSubmodel".

##### 3.2.8.3 aasx

An AASX file can be generated from the RDF Turtle file. The AASX file defines one of the requested
artifacts for a Submodel Template Specification conformant to \[[SMT](#52-non-normative-references)].

Note: As soon as the specification V3.0 of the Asset Administration Shell specfication is available
an update will be provided.

## 4 APPLICATION PROGRAMMING INTERFACES

> *This section is normative*

> *The headings below should only be understood as a suggestion*

### 4.1 Endurance Predictor API

#### 4.1.1 PRECONDITIONS AND DEPENDENCIES

The Endurance Predictor service was designed with interoperability in mind, thus the communication in both directions (input/input) fully supports the Catena-X Notification standard. These aspects are also covered by Catena-X ontologies.
For this purpose, in the behaviour_ontology, which is part of the Standard CX-0084:v1.1 is defined accordingly.

The two APIs described support the implementation of the dynamic behavior (i.e., service) of components (e.g., engine, gearbox..) in a digital behavior twin.
As the process is asynchronous, there are two APIs for different types of participants in the network.

1. API endpoint to be provided by a Service Provider providing a service to predict the expected lifetime of a product based on load spectrums.
2. API endpoint to be provided by a Service Requestor application or participant to receive the outcome of such an analysis in an asynchronous manner.

It is a non-central API, which can be implemented for various components. It relies on a load spectrum as input in order to calculate and return the corresponding RUL value.
The basic idea for the functionality of this API has been derived from CX-0023:v1.2 Notification API.

As already mentioned in the Introduction, this standard provides the specification of the HTTP REST API endpoint to request (with an according Load Spectrum as input) and sending RUL value via the Catena X Dataspace. Without this API an interoperability between different application, with an aim to receive RUL data, is not given.

#### 4.1.2 API SPECIFICATION

##### 4.1.2.1 API Endpoints & resources

The notification API MUST be implemented as specified in the [[openAPI](https://github.com/catenax-eV/product-standardization-prod/blob/main/standards/CX-0058-APIEndurancePredictor/1.0.0/src/Notification_Endurance_predictor.json)] documentation as stated here:

- POST /api/v1/routine/notification  

In fact, it is OPTIONAL to implement the endpoint paths exactly as described above. The reason is that those endpoints are not called from any supply chain partner directly.
Rather, they are called from the Eclipse Dataspace Connector (EDC) or a similar IDSA compliant connector as part of its data assets. In that sense, it is just important to implement endpoints that can process the defined request body and respond with the HTTP status codes and - if required - reply with the defined response body.

The EDCs/IDSA compliant data assets will act similar to a reverse proxy for the notification endpoints, therefore rather the EDC data assets are of significance, which should be exposed towards Catena-X through the Data Offer Catalogues in the EDC or any other IDSA Protocol compatible connector.

##### 4.1.2.2 Available Data Types

The API MUST use JSON as the payload transported.
The APIs payload consists of a general notification header and a use-case specific content dictionary.
The request and response are linked by the unique notificationID.

#### Notification Request Payload Structure

The main part of the content dictionary MUST follow the specification in section 3.1 "[Semantic Model: Classified Load Spectrum](#31-aspect-model-classifiedloadspectrum)" as the load spectrum itself is given as the main input towards the endurance predictor.

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
                  <load spectrum as per standard as specified in section 3.1: Semantic Model: Classified Load Spectrum>
                }, 
              "classifiedLoadSpectrumGearSet": { 
                  <load spectrum as per standard as specified in section section 3.1: Classified Load Spectrum>
   } 
            } 
        ] 
    } 
} 
```

#### Notification Response Payload Structure

The main part of the content dictionary MUST follow the specification in section 3.2 "[Semantic Model: Remaining Useful Life](#32-aspect-model-remainingusefullife)" as endurance predictor output MUST follow the sematics described in the corresponding model:

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
              <RuL as per standard as specified in section 3.2: Semantic Model: Remaining Useful Life>
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

#### 4.1.3 EDC DATA ASSET STRUCTURE

When using the EDC, the following asset MUST be registered by the specific roles in this process. Other connectors implementing the IDSA Protocol require a similar data asset with the same structure and provisioning towards Catena-X.

##### 4.1.3.1 Service Consumer

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

##### 4.1.3.2 Service Provider

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

#### 4.1.4 ERROR HANDLING

The following http response codes MUST be defined for HTTP POST endpoint for the Endurance Predictor endpoint.

| Code | Description                      |
|------|----------------------------------|
| 202  | Accepted                         |
| 400  | Request body was malformed       |

## 5 REFERENCES

### 5.1 NORMATIVE REFERENCES

- CX–0018:v2.1 Sovereign Data Exchange
- CX-0084:v1.1 Federated Queries in Data Spaces (Knowledge Agent).

### 5.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

- CX-0003:Governance Process for Semantic Models
- CX-0023:v1.2 Notification API

### 5.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
