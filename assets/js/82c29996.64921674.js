"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[5085],{45686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=n(74848),r=n(28453);const s={},l="CX\u20130080 Fraud Prevention Service v1.0.0",d={id:"standards/CX-0080-BPDMFraudPreventionService/CX-0080-BPDMFraudPreventionService",title:"CX\u20130080 Fraud Prevention Service v1.0.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0080-BPDMFraudPreventionService/CX-0080-BPDMFraudPreventionService.md",sourceDirName:"standards/CX-0080-BPDMFraudPreventionService",slug:"/standards/CX-0080-BPDMFraudPreventionService/",permalink:"/docs/standards/CX-0080-BPDMFraudPreventionService/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0079 NaturalPersonScreeningDashboard v1.1.0",permalink:"/docs/standards/CX-0079-NaturalPersonScreeningDashboard/"},next:{title:"CX-0081 Country Risk API v.1.1.0",permalink:"/docs/standards/CX-0081-BPDMCountryRisk/"}},a={},o=[{value:"<strong>ABSTRACT</strong>",id:"abstract",level:2},{value:"<strong>1 INTRODUCTION</strong>",id:"1-introduction",level:2},{value:"<strong>1.1 AUDIENCE &amp; SCOPE</strong>",id:"11-audience--scope",level:3},{value:"<strong>1.2 CONTEXT</strong>",id:"12-context",level:3},{value:"<strong>1.3 CONFORMANCE</strong>",id:"13-conformance",level:3},{value:"<strong>1.4 PROOF OF CONFORMITY</strong>",id:"14-proof-of-conformity",level:3},{value:"<strong>1.5 TERMINOLOGY</strong>",id:"15-terminology",level:3},{value:"<strong>1.6 OUT OF SCOPE</strong>",id:"16-out-of-scope",level:3},{value:"<strong>1.7 FRAUD PREVENTION SERVICE</strong>",id:"17-fraud-prevention-service",level:3},{value:"<strong>2 REQUIREMENTS [NORMATIVE]</strong>",id:"2-requirements-normative",level:2},{value:"<strong>2.1 FRAUD PREVENTION SERVICE</strong>",id:"21-fraud-prevention-service",level:3},{value:"<strong>2.2 FRAUD PREVENTION SERVICE DATA ATTRIBUTES</strong>",id:"22-fraud-prevention-service-data-attributes",level:3},{value:"<strong>2.3 API ENDPOINTS AND RESOURCES</strong>",id:"23-api-endpoints-and-resources",level:3},{value:"<strong>2.4 FRAUD PREVENTION API DATA ATTRIBUTES</strong>",id:"24-fraud-prevention-api-data-attributes",level:3},{value:"<strong>2.5 FRAUD PREVENTION DATA CONTROLLER</strong>",id:"25-fraud-prevention-data-controller",level:3},{value:"<strong>2.6 EDC DATA ASSET STRUCTURE</strong>",id:"26-edc-data-asset-structure",level:3},{value:"<strong>2.7 ERROR HANDLING</strong>",id:"27-error-handling",level:3},{value:"<strong>3 REFERENCES</strong>",id:"3-references",level:2},{value:"<strong>3.1 NORMATIVE REFERENCES</strong>",id:"31-normative-references",level:3},{value:"<strong>3.2 NON-NORMATIVE REFERENCES</strong>",id:"32-non-normative-references",level:3},{value:"<strong>3.3 REFERENCE IMPLEMENTATIONS</strong>",id:"33-reference-implementations",level:3},{value:"<strong>ANNEXES</strong>",id:"annexes",level:2},{value:"<strong>FIGURES</strong>",id:"figures",level:3}];function c(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"cx0080-fraud-prevention-service-v100",children:"CX\u20130080 Fraud Prevention Service v1.0.0"}),"\n",(0,i.jsx)(t.h2,{id:"abstract",children:(0,i.jsx)(t.strong,{children:"ABSTRACT"})}),"\n",(0,i.jsx)(t.p,{children:"Digital fraud risks are constantly increasing, e.g., in the form of fake invoices sent in the name of real suppliers, but with third-party (fraudster) account data.\nThe Fraud Prevention Service provides information on most recent fraud cases which have been shared within the Catena-X (CX) network by contributing companies.\nIt therefore benefits from the overall idea of data sharing within the Catena-X community as such information is nowhere available in any data source accessible along the automotive supply chain."}),"\n",(0,i.jsx)(t.p,{children:"There is a strong need to create such a reliable data source by anonymously sharing fraud details within the CX member network."}),"\n",(0,i.jsx)(t.p,{children:"This data shall be made accessible and consumable via dashboard & reporting functionalities."}),"\n",(0,i.jsx)(t.p,{children:"By using this information, the CX community has the chance to prevent fraud cases in their own companies as they can use shared data about e.g., fraudulent bank accounts to stop payments and so avoid financial losses and reputation damage."}),"\n",(0,i.jsx)(t.p,{children:"The purpose of this standard is to describe guidelines and requirements specific for the challenges of fraud risks in order to minimize such threats and implications for the own company.  It focuses on fraudulent bank data as the most common fraud type although other relevant fraud types are also considered."}),"\n",(0,i.jsx)(t.h2,{id:"1-introduction",children:(0,i.jsx)(t.strong,{children:"1 INTRODUCTION"})}),"\n",(0,i.jsx)(t.h3,{id:"11-audience--scope",children:(0,i.jsx)(t.strong,{children:"1.1 AUDIENCE & SCOPE"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is non-normative."})}),"\n",(0,i.jsx)(t.p,{children:"This standard is relevant for the following audience:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Catena-X certified Operational Companies acting as:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Business Application Provider"}),"\n",(0,i.jsx)(t.li,{children:"Data Provider and Consumer"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This document focuses on the requirements regarding provision of fraud data and getting access to such data via reporting- / dashboard functionalities."}),"\n",(0,i.jsx)(t.p,{children:"It is relevant for business application providers who want to provide services for collecting, aggregating and reporting fraud data by empowering the CX companies to provide such data in an easy but formalized, secure and anonymous way."}),"\n",(0,i.jsx)(t.p,{children:"It is also relevant for data providers and consumers as it is initially the CX community who acts as data provider and consumer itself and can be extended with other communities or data providers."}),"\n",(0,i.jsx)(t.h3,{id:"12-context",children:(0,i.jsx)(t.strong,{children:"1.2 CONTEXT"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is non-normative."})}),"\n",(0,i.jsx)(t.p,{children:"Fraud prevention service is a value-added service (VAS) in the area of Business Partner Data Management which addresses the challenges for a company in terms of legal, compliance- and finance-related requirements."}),"\n",(0,i.jsx)(t.h3,{id:"13-conformance",children:(0,i.jsx)(t.strong,{children:"1.3 CONFORMANCE"})}),"\n",(0,i.jsx)(t.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,i.jsxs)(t.p,{children:["The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED, SHOULD and SHOULD NOT in this document are to be interpreted as described in\xa0",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"BCP 14"}),"\xa0[",(0,i.jsx)(t.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",children:"RFC2119"}),"] [",(0,i.jsx)(t.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",children:"RFC8174"}),"] when, and only when, they appear in all capitals, as shown here."]}),"\n",(0,i.jsx)(t.h3,{id:"14-proof-of-conformity",children:(0,i.jsx)(t.strong,{children:"1.4 PROOF OF CONFORMITY"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is non-normative."})}),"\n",(0,i.jsx)(t.p,{children:"All participants and their solutions will need to prove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,i.jsx)(t.p,{children:"To prove conformity with this standard providing a self-audited, stated and signed document that the syntax of the number is established is needed."}),"\n",(0,i.jsx)(t.h3,{id:"15-terminology",children:(0,i.jsx)(t.strong,{children:"1.5 TERMINOLOGY"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is non-normative."})}),"\n",(0,i.jsx)(t.p,{children:"The Fraud Prevention Service has to contain at least the following data attributes:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Fraud Case Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Describes the type of fraud case, e.g., active warning, fake bank data change or falsified Invoice."})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Confirmation State"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Specifies whether a fraud case is confirmed or not."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Date of Attack"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Specifies the date of the attack."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Some explanation and background to a fraud case."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"International Bank Account Identifier (IBAN)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"IBAN number as to be defined by the European Payments Council for SEPA, European Committee for Banking Standards (ECBS) for IBAN based on ISO 13616"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Business Identifier Code (BIC)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"This field contains the BIC code according to ISO 9362 and is also known as SWIFT-BIC, SWIFT ID, or SWIFT code, after the Society for Worldwide Interbank Financial Telecommunication (SWIFT), which is designated by ISO as the BIC registration authority (SWIFT)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Country Code"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Country the bank account is present respectively where the fraud case has occurred. Country Code as defined in ISO 3166-1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Region or State Code"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Code represents the region or dependent state as defined in ISO 3166-2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"National Bank Account Number (NBAN)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"National Bank Account Number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bank Name"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the bank"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fraudster Email"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Email the fraudster used to communicate with the affected company"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fraudster Phone"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Phone the fraudster used to communicate with the affected company"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"The Fraud Prevention Service has to provide at a minimum the following results:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Results"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Reporting Data and Time"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Specifies the date and time the fraud case was reported."})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Reporting Organization"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Specifies the organization that reported the fraud case. So, the organization that submitted the fraud case in the CX system."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Internal ID"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sequential and unique number to identify the fraud case."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Frequency"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Numeric field how often the fraud case was confirmed e.g., by using the same IBAN-no."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fraud Case Counter"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Total no. of reported fraud cases within this service"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"16-out-of-scope",children:(0,i.jsx)(t.strong,{children:"1.6 OUT OF SCOPE"})}),"\n",(0,i.jsx)(t.p,{children:"This standardization document does not describe the process and functionality of achieving the results as defined in the document."}),"\n",(0,i.jsx)(t.h3,{id:"17-fraud-prevention-service",children:(0,i.jsx)(t.strong,{children:"1.7 FRAUD PREVENTION SERVICE"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is normative."})}),"\n",(0,i.jsx)(t.p,{children:"The Fraud Prevention Service has to contain the following functionalities:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Getting informed about most recent fraud cases reported by CX members"}),"\n",(0,i.jsx)(t.li,{children:"Selecting different fraud types and time ranges"}),"\n",(0,i.jsx)(t.li,{children:"Discovering trends and conspicuities by using graphical front ends"}),"\n",(0,i.jsx)(t.li,{children:"Searching the CX fraud database for different values/strings, e.g., IBAN"}),"\n",(0,i.jsx)(t.li,{children:"Retrieving fraud case details with sort- & filter functions"}),"\n",(0,i.jsx)(t.li,{children:"Reporting new fraud cases directly out of the dashboard"}),"\n",(0,i.jsx)(t.li,{children:"Exporting in different formats and on different levels"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"2-requirements-normative",children:(0,i.jsx)(t.strong,{children:"2 REQUIREMENTS [NORMATIVE]"})}),"\n",(0,i.jsx)(t.h3,{id:"21-fraud-prevention-service",children:(0,i.jsx)(t.strong,{children:"2.1 FRAUD PREVENTION SERVICE"})}),"\n",(0,i.jsx)(t.p,{children:"The Fraud Prevention Service (FPS) is a reporting and monitoring solution and MUST provide the following capabilities as minimum requirement:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Fraud case reporting:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"User interface for unified reporting of fraud cases, integrated in the Fraud Prevention Dashboard (FPD)"}),"\n",(0,i.jsx)(t.li,{children:"Template for entering fraud data by the CX member"}),"\n",(0,i.jsx)(t.li,{children:"Individual selection of different fraud case types and status"}),"\n",(0,i.jsx)(t.li,{children:"Anonymized distribution of fraud cases to an aggregated CX fraud case database as basis for dashboard display (although the information about the fraud case originator MUST be retrievable by the service provider for e.g., audit reasons)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Dashboard functions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Administration functionality","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Switch between languages (MUST: German and English, others optional)"}),"\n",(0,i.jsx)(t.li,{children:"User information (name, corresponding CX-registered organization) based on CX-role and authorization management"}),"\n",(0,i.jsx)(t.li,{children:"Export / Download function for dashboard content (including graphical reports)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Selection functionality","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Individual selection of fraud case types (including multi-selection)"}),"\n",(0,i.jsx)(t.li,{children:"Individual selection of time periods of interest"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Display functionality","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Graphical reports:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Graphical reports MUST reflect the chosen time period as well as the selected fraud case types"}),"\n",(0,i.jsxs)(t.li,{children:["The reports MUST illustrate the following:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"CX-Fraud case distribution per country (with figures)"}),"\n",(0,i.jsx)(t.li,{children:"Number of CX-reported fraud cases over time per fraud case type"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["List report:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The list report MUST contain all CX-reported fraud cases"}),"\n",(0,i.jsx)(t.li,{children:"There MUST be filter and sort functions for the list content in order to focus on e.g., relevant time periods, fraud case types or countries"}),"\n",(0,i.jsx)(t.li,{children:"There MUST be a search function for a content look-up like IBAN-no. (if provided in the reported fraud cases)"}),"\n",(0,i.jsx)(t.li,{children:"There MUST be an export function for the list report in a common standard format"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"22-fraud-prevention-service-data-attributes",children:(0,i.jsx)(t.strong,{children:"2.2 FRAUD PREVENTION SERVICE DATA ATTRIBUTES"})}),"\n",(0,i.jsx)(t.p,{children:"The Fraud Prevention Service API MUST contain at least the following data attributes:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Fraud Case Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Describes the type of Fraud Case, e.g., active warning, fake bank data change or falsified Invoice."})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Confirmation State"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Specifies whether a fraud case is confirmed or not."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Date of Attack"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Specifies the date of the attack."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Some explanation and background to a fraud case."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"International Bank Account Identifier (IBAN)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"IBAN number as to be defined by the European Payments Council for SEPA, European Committee for Banking Standards (ECBS) for IBAN based on ISO 13616"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Business Identifier Code (BIC)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"This field contains the BIC code according to ISO 9362 and is also known as SWIFT-BIC, SWIFT ID, or SWIFT code, after the Society for Worldwide Interbank Financial Telecommunication (SWIFT), which is designated by ISO as the BIC registration authority (SWIFT)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Country Code"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Country the bank account is present respectively where the fraud case has occurred. Country Code as defined in ISO 3166-1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Region or State Code"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Code represents the region or dependent state as defined in ISO 3166-2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"National Bank Account Number (NBAN)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"National Bank Account Number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bank Name"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the bank"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"23-api-endpoints-and-resources",children:(0,i.jsx)(t.strong,{children:"2.3 API ENDPOINTS AND RESOURCES"})}),"\n",(0,i.jsx)(t.p,{children:"The resources MUST use the HTTP request methods for READ operations:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"GET MUST be used for read requests"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"24-fraud-prevention-api-data-attributes",children:(0,i.jsx)(t.strong,{children:"2.4 FRAUD PREVENTION API DATA ATTRIBUTES"})}),"\n",(0,i.jsx)(t.p,{children:"The Fraud Prevention Service API MUST support requests for the following data attributes or combinations of these for read operations:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Fraud Prevention Service API Data Fields"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Format"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"IBAN"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alphanumeric String"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"BIC/SWIFT"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alphanumeric String"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NBAN"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alphanumeric String"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bank Name"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alphanumeric String"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Country Code"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2-digit alphanumeric string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Region or State Code"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"6-digit alphanumeric string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Confirmation State"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Enum"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Date of Attack"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Date format"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fraud Case Counter"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Numeric"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fraud Case Type"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Enum"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"25-fraud-prevention-data-controller",children:(0,i.jsx)(t.strong,{children:"2.5 FRAUD PREVENTION DATA CONTROLLER"})}),"\n",(0,i.jsx)(t.p,{children:"The fraud prevention data controller MUST allow to read (search / return) fraud prevention data records.  It MUST have the following resources:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Bank Data Controller Resources"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"GET/api/fps/output/fps_datarecord"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Returns fraud prevention data record from the output stage by different search parameters"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"26-edc-data-asset-structure",children:(0,i.jsx)(t.strong,{children:"2.6 EDC DATA ASSET STRUCTURE"})}),"\n",(0,i.jsx)(t.p,{children:"The FPS API MUST support the EDC functionality based on Sovereign Data Exchange, 2.0.1 or higher, CX - 0018 Eclipse Data Space Connector (EDC). The FPS API for reading information (GET) MUST be represented by a data asset in the EDC."}),"\n",(0,i.jsx)(t.h3,{id:"27-error-handling",children:(0,i.jsx)(t.strong,{children:"2.7 ERROR HANDLING"})}),"\n",(0,i.jsx)(t.p,{children:"The following http response codes MUST be defined for all resources:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"200 \u2013 OK"}),"\n",(0,i.jsx)(t.li,{children:"400 \u2013 Bad Request"}),"\n",(0,i.jsx)(t.li,{children:"401 \u2013 Unauthorized"}),"\n",(0,i.jsx)(t.li,{children:"403 \u2013 Forbidden"}),"\n",(0,i.jsx)(t.li,{children:"404 \u2013 Not Found"}),"\n",(0,i.jsx)(t.li,{children:"500 \u2013 Internal Server Error"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["HTTP Status Code Registry MUST be adhered to in the implementation for the decision on when to use which error code: ",(0,i.jsx)(t.a,{href:"https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml",children:"https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml"})]}),"\n",(0,i.jsx)(t.h2,{id:"3-references",children:(0,i.jsx)(t.strong,{children:"3 REFERENCES"})}),"\n",(0,i.jsx)(t.h3,{id:"31-normative-references",children:(0,i.jsx)(t.strong,{children:"3.1 NORMATIVE REFERENCES"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is normative."})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The country codes and the country names used in FPS MUST comply with ISO 3166-1."}),"\n",(0,i.jsx)(t.li,{children:"The Region or State Codes used in FPS MUST comply with ISO 3166-2."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"32-non-normative-references",children:(0,i.jsx)(t.strong,{children:"3.2 NON-NORMATIVE REFERENCES"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is non-normative."})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://catena-x.net/en/offers-standards/bpdm",children:"BPDM Catena-X Website"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The Fraud Prevention Service design relies on the Catena-X style guide."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The Business Identifier Code (BIC) provided in the fraud reporting template shall be according to ISO 9362."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The International Bank Account Number provided in the fraud reporting template shall be according to ISO 13616."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"33-reference-implementations",children:(0,i.jsx)(t.strong,{children:"3.3 REFERENCE IMPLEMENTATIONS"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is non-normative."})}),"\n",(0,i.jsx)(t.p,{children:"Intentionally left blank."}),"\n",(0,i.jsx)(t.h2,{id:"annexes",children:(0,i.jsx)(t.strong,{children:"ANNEXES"})}),"\n",(0,i.jsx)(t.h3,{id:"figures",children:(0,i.jsx)(t.strong,{children:"FIGURES"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This section is non-normative."})}),"\n",(0,i.jsx)(t.p,{children:"Intentionally left blank."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);