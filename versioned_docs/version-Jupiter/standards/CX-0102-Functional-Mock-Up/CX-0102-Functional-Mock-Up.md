# CX-0102 Functional Mock Up v1.0.0

## ABSTRACT

The goal of this Catena-X standard is to make an existing industry standard available in the Catena-X Network. This document provides an overview of the standard as well as the relevant links to the online documentation.
FMI (functional mockup interface) is a free cross-industry standard to exchange dynamic simulation models.
The vision of FMI is to improve the design of systems and embedded software in vehicles. As a real product can be decomposed into different parts interacting with each others and each performing specific tasks, so the model of the product can be decomposed into sub-systems interacting with each others each described by a set of physical equations. The FMI standard provides the means to support model based development by defining ways in which models of systems and subsystems can be exchanged and connected with each other.
The FMI standard is key for the interoperability of simulation tools. It is supported by more than 170 tools, both proprietary and open-source. The FMI specifications are published under the CC-BY-SA 4.0 (Creative Common Attribution-ShareAlike 4.0 International) license. Source code, such as C-header and XML-schema files, that accompany specification documents, are provided under the 2-Clause BSD License.

## FOR WHOM IS THE STANDARD DESIGNED

The standard is designed by the Modelica Association Project for anybody who wants to build, use and exchange dynamic simulation models.

## COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD

Not relevant

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This Standard is relevant for:

- Data Provider / Consumer
- Enablement Service Provider
- Consulting Services Provider

The standard is relevant for modeling of physical assets.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

CX - 0102 FUNCTIONAL-MOCK-UP v1.0.0

The Functional Mock-up Interface (FMI) is a free standard that defines a container and an interface to exchange dynamic simulation models using a combination of XML files, binaries and C code, distributed as a ZIP file. It is supported by 170+ tools and maintained as a Modelica Association Project. The FMI implementation by a software modelling tool enables the creation of simulation models that can be interconnected. The file format of the FMI standard is called Functional Mock-up Unit (FMU) (source: https://fmi-standard.org/).
In the context of Catena-X, simulation models can represent for example a component of a vehicle produced by a Tier-1. The Tier-1 develops the model of its component using any FMI compatible tool. The model is then exported as FMU. The model is now packed as a black box model. The person (for example from an OEM) who receives the simulation model can only see the input and output ports and the parameters and variables of the models that have been exposed by the model creator. In this way the intellectual properties of the model creator is protected.
Using the FMU format, an OEM can get models of the components needed for its vehicle from different Tier-1s already in the design phase. The models are then integrated together with the own OEM's models to build a vechicle model. The assembled model is used to run parametric studies to assess the performace of the vehicle. The same workflow is also valid for a Tier-(N+1) and its Tier-Ns.
In a more general approach, FMUs can be seen as services providing an output for a given input. As such they can be used for data processing and analytics and as components of more complex services like the computation of Remaining Useful Life (RUL).

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

For the FMI format the conformity is relevant both, for tools exporting FMUs and for tools importing FMUs. For each type, different proof of conformity are used. To prove the conformity of a tool exporting FMUs one of the following criteria MUST be fulfilled:

- Use one of the tools which exports FMUs among the ones listed on this page https://fmi-standard.org/tools/
- If a new tool is used which is not part of the list, a set of FMUs exported by the tool MUST be validated using the validation tool provided here https://fmu-check.herokuapp.com/. The online validation tool takes an FMU as input and verifies that it is conform to the standard.
- If the tool is not part of the list a request to add it can be submitted by following the instruction on the page under the link "How do I add or update my tool?". Once the request is accepted, the tool is added to the list.

To prove the conformity of a tool importing FMUs one of the following criteria MUST be fulfilled:

- Use one of the tools which imports FMUs among the ones listed on this page https://fmi-standard.org/tools/.
- If the tool is not part of the list a request to add it can be submitted by following the instruction on the fmi page under the link "How do I add or update my tool". Once the request is accepted, the tool is added to the list.

### 1.4 EXAMPLES

When a FMU, generated from a tool, is verified for conformity using the https://fmu-check.herokuapp.com/, the following aspects are part of the check.
The following list is copied from the FMU check page. FMU Check performs a static analysis of the FMU that validates the following aspects:

- validity of the modelDescription.xml w.r.t. the XML schema
- uniqueness and validity of the variable names
- completeness and integrity of the Model Structure
- availability of the required start values
- combinations of causality and variability
- definition of units

It does not check the following aspects:

- validity of the binaries
- validity of the sources
- any non-standard files inside the FMU

### 1.5 TERMINOLOGY

> *This section is non-normative*

FMU = functional mock-up unit. A simulation model packed following the specification of the FMI industry standard.

FMI = functional mock-up interface. Standard that defines an exchange format for dynamic simulation models.

## 2 MAIN CONTENT

> *This section is normative*

The FMI standard is described and documented on the FMI website: https://fmi-standard.org/. At the moment there exist three versions of the FMI standard (FMI 1.0, 2.0 and 3.0) and they are all included in the Catena-X standard as well as future versions. Implementers Guide, Specification and Packages for each of the three versions can be downloaded on the website. The companies who want to use the FMI standard for their use cases MUST fullfill the criteria stated in the documentation provided on the link above.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

Functional Mock-up Interface Standard - https://fmi-standard.org/

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

Not relevant

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

Not relevant

## ANNEXES

### FIGURES

> *This section is non-normative*

### TABLES

> *This section is non-normative*

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
