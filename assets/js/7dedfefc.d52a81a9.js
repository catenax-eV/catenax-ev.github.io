"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[1399],{37516:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(74848),o=t(28453);const s={},a="CX-0102 Functional Mock Up v1.0.0",r={id:"standards/CX-0102-Functional-Mock-Up/CX-0102-Functional-Mock-Up",title:"CX-0102 Functional Mock Up v1.0.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0102-Functional-Mock-Up/CX-0102-Functional-Mock-Up.md",sourceDirName:"standards/CX-0102-Functional-Mock-Up",slug:"/standards/CX-0102-Functional-Mock-Up/",permalink:"/docs/standards/CX-0102-Functional-Mock-Up/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0100 Triangle for Secondary Marketplace v1.0.0",permalink:"/docs/standards/CX-0100-TriangleForSecondaryMarketplace/"},next:{title:"CX-0103 Digital Product Passport v1.1.0",permalink:"/docs/standards/CX-0103-AspectModelDigitalProductPassport/"}},d={},l=[{value:"ABSTRACT",id:"abstract",level:2},{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2 MAIN CONTENT",id:"2-main-content",level:2},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cx-0102-functional-mock-up-v100",children:"CX-0102 Functional Mock Up v1.0.0"})}),"\n",(0,i.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,i.jsx)(n.p,{children:"The goal of this Catena-X standard is to make an existing industry standard available in the Catena-X Network. This document provides an overview of the standard as well as the relevant links to the online documentation.\nFMI (functional mockup interface) is a free cross-industry standard to exchange dynamic simulation models.\nThe vision of FMI is to improve the design of systems and embedded software in vehicles. As a real product can be decomposed into different parts interacting with each others and each performing specific tasks, so the model of the product can be decomposed into sub-systems interacting with each others each described by a set of physical equations. The FMI standard provides the means to support model based development by defining ways in which models of systems and subsystems can be exchanged and connected with each other.\nThe FMI standard is key for the interoperability of simulation tools. It is supported by more than 170 tools, both proprietary and open-source. The FMI specifications are published under the CC-BY-SA 4.0 (Creative Common Attribution-ShareAlike 4.0 International) license. Source code, such as C-header and XML-schema files, that accompany specification documents, are provided under the 2-Clause BSD License."}),"\n",(0,i.jsx)(n.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,i.jsx)(n.p,{children:"The standard is designed by the Modelica Association Project for anybody who wants to build, use and exchange dynamic simulation models."}),"\n",(0,i.jsx)(n.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,i.jsx)(n.p,{children:"Not relevant"}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,i.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This Standard is relevant for:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,i.jsx)(n.li,{children:"Enablement Service Provider"}),"\n",(0,i.jsx)(n.li,{children:"Consulting Services Provider"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The standard is relevant for modeling of physical assets."}),"\n",(0,i.jsx)(n.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"CX - 0102 FUNCTIONAL-MOCK-UP v1.0.0"}),"\n",(0,i.jsxs)(n.p,{children:["The Functional Mock-up Interface (FMI) is a free standard that defines a container and an interface to exchange dynamic simulation models using a combination of XML files, binaries and C code, distributed as a ZIP file. It is supported by 170+ tools and maintained as a Modelica Association Project. The FMI implementation by a software modelling tool enables the creation of simulation models that can be interconnected. The file format of the FMI standard is called Functional Mock-up Unit (FMU) (source: ",(0,i.jsx)(n.a,{href:"https://fmi-standard.org/",children:"https://fmi-standard.org/"}),").\nIn the context of Catena-X, simulation models can represent for example a component of a vehicle produced by a Tier-1. The Tier-1 develops the model of its component using any FMI compatible tool. The model is then exported as FMU. The model is now packed as a black box model. The person (for example from an OEM) who receives the simulation model can only see the input and output ports and the parameters and variables of the models that have been exposed by the model creator. In this way the intellectual properties of the model creator is protected.\nUsing the FMU format, an OEM can get models of the components needed for its vehicle from different Tier-1s already in the design phase. The models are then integrated together with the own OEM's models to build a vechicle model. The assembled model is used to run parametric studies to assess the performace of the vehicle. The same workflow is also valid for a Tier-(N+1) and its Tier-Ns.\nIn a more general approach, FMUs can be seen as services providing an output for a given input. As such they can be used for data processing and analytics and as components of more complex services like the computation of Remaining Useful Life (RUL)."]}),"\n",(0,i.jsx)(n.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For the FMI format the conformity is relevant both, for tools exporting FMUs and for tools importing FMUs. For each type, different proof of conformity are used. To prove the conformity of a tool exporting FMUs one of the following criteria MUST be fulfilled:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use one of the tools which exports FMUs among the ones listed on this page ",(0,i.jsx)(n.a,{href:"https://fmi-standard.org/tools/",children:"https://fmi-standard.org/tools/"})]}),"\n",(0,i.jsxs)(n.li,{children:["If a new tool is used which is not part of the list, a set of FMUs exported by the tool MUST be validated using the validation tool provided here ",(0,i.jsx)(n.a,{href:"https://fmu-check.herokuapp.com/",children:"https://fmu-check.herokuapp.com/"}),". The online validation tool takes an FMU as input and verifies that it is conform to the standard."]}),"\n",(0,i.jsx)(n.li,{children:'If the tool is not part of the list a request to add it can be submitted by following the instruction on the page under the link "How do I add or update my tool?". Once the request is accepted, the tool is added to the list.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To prove the conformity of a tool importing FMUs one of the following criteria MUST be fulfilled:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use one of the tools which imports FMUs among the ones listed on this page ",(0,i.jsx)(n.a,{href:"https://fmi-standard.org/tools/",children:"https://fmi-standard.org/tools/"}),"."]}),"\n",(0,i.jsx)(n.li,{children:'If the tool is not part of the list a request to add it can be submitted by following the instruction on the fmi page under the link "How do I add or update my tool". Once the request is accepted, the tool is added to the list.'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,i.jsxs)(n.p,{children:["When a FMU, generated from a tool, is verified for conformity using the ",(0,i.jsx)(n.a,{href:"https://fmu-check.herokuapp.com/",children:"https://fmu-check.herokuapp.com/"}),", the following aspects are part of the check.\nThe following list is copied from the FMU check page. FMU Check performs a static analysis of the FMU that validates the following aspects:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"validity of the modelDescription.xml w.r.t. the XML schema"}),"\n",(0,i.jsx)(n.li,{children:"uniqueness and validity of the variable names"}),"\n",(0,i.jsx)(n.li,{children:"completeness and integrity of the Model Structure"}),"\n",(0,i.jsx)(n.li,{children:"availability of the required start values"}),"\n",(0,i.jsx)(n.li,{children:"combinations of causality and variability"}),"\n",(0,i.jsx)(n.li,{children:"definition of units"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It does not check the following aspects:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"validity of the binaries"}),"\n",(0,i.jsx)(n.li,{children:"validity of the sources"}),"\n",(0,i.jsx)(n.li,{children:"any non-standard files inside the FMU"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"FMU = functional mock-up unit. A simulation model packed following the specification of the FMI industry standard."}),"\n",(0,i.jsx)(n.p,{children:"FMI = functional mock-up interface. Standard that defines an exchange format for dynamic simulation models."}),"\n",(0,i.jsx)(n.h2,{id:"2-main-content",children:"2 MAIN CONTENT"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The FMI standard is described and documented on the FMI website: ",(0,i.jsx)(n.a,{href:"https://fmi-standard.org/",children:"https://fmi-standard.org/"}),". At the moment there exist three versions of the FMI standard (FMI 1.0, 2.0 and 3.0) and they are all included in the Catena-X standard as well as future versions. Implementers Guide, Specification and Packages for each of the three versions can be downloaded on the website. The companies who want to use the FMI standard for their use cases MUST fullfill the criteria stated in the documentation provided on the link above."]}),"\n",(0,i.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,i.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,i.jsxs)(n.p,{children:["Functional Mock-up Interface Standard - ",(0,i.jsx)(n.a,{href:"https://fmi-standard.org/",children:"https://fmi-standard.org/"})]}),"\n",(0,i.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Not relevant"}),"\n",(0,i.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Not relevant"}),"\n",(0,i.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,i.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,i.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,i.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);