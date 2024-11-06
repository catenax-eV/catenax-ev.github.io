"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[14997],{80798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=t(74848),s=t(28453);const r={},a="CX-0078 Bank Data Verification Dashboard v1.0.0",d={id:"standards/CX-0078-BankDataVerificationDashboard/CX-0078-BankDataVerificationDashboard",title:"CX-0078 Bank Data Verification Dashboard v1.0.0",description:"ABSTRACT",source:"@site/versioned_docs/version-24.03/standards/CX-0078-BankDataVerificationDashboard/CX-0078-BankDataVerificationDashboard.md",sourceDirName:"standards/CX-0078-BankDataVerificationDashboard",slug:"/standards/CX-0078-BankDataVerificationDashboard/",permalink:"/docs/24.03/standards/CX-0078-BankDataVerificationDashboard/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0077 Data Quality Dashboard v1.1.0",permalink:"/docs/24.03/standards/CX-0077-DataQualityDashboard/"},next:{title:"CX-0079 NaturalPersonScreeningDashboard v1.1.0",permalink:"/docs/24.03/standards/CX-0079-NaturalPersonScreeningDashboard/"}},o={},l=[{value:"ABSTRACT",id:"abstract",level:2},{value:"<strong>1 INTRODUCTION</strong>",id:"1-introduction",level:2},{value:"<strong>1.1 AUDIENCE &amp; SCOPE</strong>",id:"11-audience--scope",level:3},{value:"<strong>1.2 CONTEXT</strong>",id:"12-context",level:3},{value:"<strong>1.3 CONFORMANCE</strong>",id:"13-conformance",level:3},{value:"<strong>1.4 PROOF OF CONFORMITY</strong>",id:"14-proof-of-conformity",level:3},{value:"<strong>1.5 TERMINOLOGY OF BANK DATA VERIFICATION DASHBOARD RULES</strong>",id:"15-terminology-of-bank-data-verification-dashboard-rules",level:3},{value:"<strong>IBAN \u2013 International Bank Account Number</strong>",id:"iban--international-bank-account-number",level:4},{value:"<strong>BIC \u2013 Business Identifier Code</strong>",id:"bic--business-identifier-code",level:4},{value:"<strong>NBAN - National Bank Account Number</strong>",id:"nban---national-bank-account-number",level:4},{value:"<strong>Business Partner</strong>",id:"business-partner",level:4},{value:"<strong>Fraud Case</strong>",id:"fraud-case",level:4},{value:"<strong>1.6 OUT OF SCOPE</strong>",id:"16-out-of-scope",level:3},{value:"<strong>1.7 BANK DATA VERIFICATION DASHBOARD</strong>",id:"17-bank-data-verification-dashboard",level:3},{value:"<strong>2 BANK DATA VERIFICATION DASHBOARD (NORMATIVE)</strong>",id:"2-bank-data-verification-dashboard-normative",level:2},{value:"<strong>2.1 PRECONDITIONS AND DEPENDENCIES</strong>",id:"21-preconditions-and-dependencies",level:3},{value:"<strong>2.2 BDV SPECIFICATIONS</strong>",id:"22-bdv-specifications",level:3},{value:"<strong>2.3 BDV USAGE OF NORMS</strong>",id:"23-bdv-usage-of-norms",level:3},{value:"<strong>ISO 3166-1 Country</strong>",id:"iso-3166-1-country",level:4},{value:"<strong>ISO 3166-2 Administrative Area (Level 1)</strong>",id:"iso-3166-2-administrative-area-level-1",level:4},{value:"<strong>ISO 13616 IBAN Number</strong>",id:"iso-13616-iban-number",level:4},{value:"<strong>ISO 9362 BIC \u2013 Business Identifier Code</strong>",id:"iso-9362-bic--business-identifier-code",level:4},{value:"<strong>2.4 BDV USAGE OF EXTERNAL DATA SOURCES</strong>",id:"24-bdv-usage-of-external-data-sources",level:3},{value:"<strong>2.5 BDV RESULTS</strong>",id:"25-bdv-results",level:3},{value:"<strong>2.6 BDV DASHBOARD</strong>",id:"26-bdv-dashboard",level:3},{value:"<strong>3 BDV API</strong>",id:"3-bdv-api",level:2},{value:"<strong>3.1 API ENDPOINTS AND RESOURCES</strong>",id:"31-api-endpoints-and-resources",level:3},{value:"<strong>3.2 BANK DATA CONTROLLER</strong>",id:"32-bank-data-controller",level:3},{value:"<strong>3.3 BANK DATA SHARING STATE CONTROLLER</strong>",id:"33-bank-data-sharing-state-controller",level:3},{value:"<strong>3.4 EDC DATA ASSET STRUCTURE</strong>",id:"34-edc-data-asset-structure",level:3},{value:"<strong>3.5 ERROR HANDLING</strong>",id:"35-error-handling",level:3},{value:"<strong>4 REFERENCES</strong>",id:"4-references",level:2},{value:"<strong>4.1 NON-NORMATIVE REFERENCES</strong>",id:"41-non-normative-references",level:3},{value:"<strong>4.2 REFERENCE IMPLEMENTATIONS</strong>",id:"42-reference-implementations",level:3},{value:"<strong>ANNEXES</strong>",id:"annexes",level:2},{value:"<strong>FIGURES</strong>",id:"figures",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cx-0078-bank-data-verification-dashboard-v100",children:"CX-0078 Bank Data Verification Dashboard v1.0.0"})}),"\n",(0,i.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,i.jsx)(n.p,{children:"The Bank Data Verification Dashboard (BDV) has to rely on a set of clearly defined verification rules which has to be the basis to verify the syntactical and logical correctness of banking details used by CX Member Business Partners. BDV has to capture at least 125 countries, states and dependent sub-regions based on ISO 3166-1 and 3166-2 - (see Point 2.3). BDV has to verify BP Banking data records provided by each CX Member. Each BDV rule has to verify the syntactical and logical correctness of defined banking data as defined via the BDV data and rule model. They represent the business mission critical banking data attributes for at least 125 countries. The BDV verification rules have to rely on standards defined by banking data related authorized organizations (European Payments Council for SEPA, European Committee for Banking Standards (ECBS) for IBAN based on ISO 13616, Society for Worldwide Interbank Financial Telecommunication\n(S.W.I.F.T SC) for BIC Code based on ISO 9362. Additionally, BDV has to rely on national banking standards to complement global or regional standards related at least to the 125 countries as needed. BDV furthermore has to rely on the following Standards: ISO 3166-1, ISO 3166-2, ISO 20275, ISO 01-140-10, ISO 8601, ISO/IEC 8859-1."}),"\n",(0,i.jsx)(n.p,{children:"BDV has to visualize the outcome of the banking verification rules via a dashboard. There a user should be able to compare the input and output of banking data quality after the BDV verification process ended."}),"\n",(0,i.jsx)(n.p,{children:"BDV has to use the Gate API CX-0074_v1.1.0 or higher for synchronization of CX Member BP data records with the CX Member banking data. The CX Member banking data has to be send via the BDV API. The results of the BDV verification have to be stored in the BDV Logfile and should get pulled via the BDV API from the CX Member systems.\nBDV has to be a client/ server cloud application which has to contain a Web Client and a Cloud Servicer Application.\nBDV has to contain a user and authorization management capability aligned with the CX Portal and Marketplace user management. BDV has to support the EDC Asset function capability and has to be available in English and German language."}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:(0,i.jsx)(n.strong,{children:"1 INTRODUCTION"})}),"\n",(0,i.jsx)(n.h3,{id:"11-audience--scope",children:(0,i.jsx)(n.strong,{children:"1.1 AUDIENCE & SCOPE"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,i.jsx)(n.p,{children:"This standard is relevant for the following audience:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Catena-X certified Operational Companies acting as:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Core Service Provider"}),"\n",(0,i.jsx)(n.li,{children:"Business Application Provider"}),"\n",(0,i.jsx)(n.li,{children:"Data Provider and Consumer"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This document is focusing on the functionality of the Bank Data Verification Dashboard (BDV) as a screening and monitoring tool of banking data related quality."}),"\n",(0,i.jsx)(n.p,{children:"BDV has to be a Value Added Services (VAS) application for Data Provider and Consumer to verify the correctness of Banking Data provided by CX Member suppliers, customers or CpDs (Conto pro Diverse) in the role of a One Time Customer or One Time Supplier."}),"\n",(0,i.jsx)(n.p,{children:"BDV has to enrich the BP data model via a complementary banking data model. It has to contain a storage capability of statistical banking data quality outcome data over a time frame of at least 3 years."}),"\n",(0,i.jsx)(n.p,{children:"BDV rules have to focus on the verification of the banking data quality on a syntactical, logical or rule basis. BDV does not focus on validating semantical correctness or data enrichment services."}),"\n",(0,i.jsxs)(n.p,{children:["BDV has to be able to use the Business Partner ID as described in CX-0010 Version 2.0.0 or higher documented in the standard library of Catena-X: ",(0,i.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"https://catena-x.net/de/standard-library"}),"\nIf used terms are not explicitly defined they rely on the standard definitions defined in the\nupcoming Catena-X Business Partner Glossary."]}),"\n",(0,i.jsx)(n.h3,{id:"12-context",children:(0,i.jsx)(n.strong,{children:"1.2 CONTEXT"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,i.jsx)(n.p,{children:"The Bank Data Verification Dashboard has to be the verification tool of CX Member bank data records.  It has to support the validation of the correctness of banking related data provided by CX member suppliers, customers, One Time suppliers and One Time Customers. Furthermore, in combination with the Catena-X VAS solution Fraud Prevention it has to support the transparency if a banking data is affected by Fraud. BDV has to enable the management and monitoring of all CX member related banking details via a Dashboard and additionally the bi-directional intercommunication based on a BDV API."}),"\n",(0,i.jsx)(n.h3,{id:"13-conformance",children:(0,i.jsx)(n.strong,{children:"1.3 CONFORMANCE"})}),"\n",(0,i.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"https://datatracker.ietf.org/doc/html/bcp14"})," ",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",title:"Key words for use in RFCs to Indicate Requirement Levels",children:"https://www.w3.org/TR/did-core/"}),(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",title:"Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words",children:"https://www.w3.org/TR/did-core/"})]}),"\n",(0,i.jsx)(n.h3,{id:"14-proof-of-conformity",children:(0,i.jsx)(n.strong,{children:"1.4 PROOF OF CONFORMITY"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,i.jsx)(n.p,{children:"All participants and their solutions will need to proof, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,i.jsx)(n.p,{children:"To proof conformity with this standard providing a self-audited, stated and signed document that the syntax of the number is established is needed."}),"\n",(0,i.jsx)(n.h3,{id:"15-terminology-of-bank-data-verification-dashboard-rules",children:(0,i.jsx)(n.strong,{children:"1.5 TERMINOLOGY OF BANK DATA VERIFICATION DASHBOARD RULES"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,i.jsx)(n.p,{children:"The main BDV rule methodologies are described below:"}),"\n",(0,i.jsx)(n.h4,{id:"iban--international-bank-account-number",children:(0,i.jsx)(n.strong,{children:"IBAN \u2013 International Bank Account Number"})}),"\n",(0,i.jsx)(n.p,{children:"BDV has to validate the correctness of the IBAN number in all defined SEPA countries based on the rules defined by the European Payments Council for SEPA and the European Committee for Banking Standards (ECBS) for IBAN based on ISO 13616. The Bank Account Number contains the individual account number, the routing number and the SWIFT Code of the bank. The verification is based on the ISO 3166-1 and ISO 3166-2 standards to secure that the BDV rule is correct allocated to the appropriate countries and dependent states and regions as defined by the ISO norms."}),"\n",(0,i.jsx)(n.h4,{id:"bic--business-identifier-code",children:(0,i.jsx)(n.strong,{children:"BIC \u2013 Business Identifier Code"})}),"\n",(0,i.jsx)(n.p,{children:"BDV has to verify the correctness of the Business Identifier Code (BIC/SWIFT) of Financial Institutions. The Code is based on ISO 9362 defined by the Society for Worldwide Interbank Financial Telecommunication (S.W.I.F.T SC). The Code identifies an individual financial institution and the country residence based on the ISO 3166-1 and ISO 3166-2 standards to secure that the BDV rule is correct allocated to the appropriate countries and dependent states and regions as defined by the ISO norms."}),"\n",(0,i.jsx)(n.h4,{id:"nban---national-bank-account-number",children:(0,i.jsx)(n.strong,{children:"NBAN - National Bank Account Number"})}),"\n",(0,i.jsx)(n.p,{children:"BDV has to verify the correctness of the National Bank Account number as defined by the national bank institutions.  This verification rule is based on the ISO 3166-1 and ISO 3166-2 standards to secure that the BDV rule is correct allocated to the appropriate countries and dependent states and regions as defined by the ISO norms."}),"\n",(0,i.jsx)(n.h4,{id:"business-partner",children:(0,i.jsx)(n.strong,{children:"Business Partner"})}),"\n",(0,i.jsx)(n.p,{children:"BDV has to enable the transparency of the relation of a bank account to the appropriate business partner type as defined (Supplier, Customer, One Time supplier, One Time Customer)."}),"\n",(0,i.jsx)(n.h4,{id:"fraud-case",children:(0,i.jsx)(n.strong,{children:"Fraud Case"})}),"\n",(0,i.jsx)(n.p,{children:"BDV with the support of the Fraud Prevention application has to verify if a bank account is affected by Fraud. This verification has to include the information of the Fraud status and timeframe of affection."}),"\n",(0,i.jsx)(n.p,{children:"**"}),"\n",(0,i.jsx)(n.h3,{id:"16-out-of-scope",children:(0,i.jsx)(n.strong,{children:"1.6 OUT OF SCOPE"})}),"\n",(0,i.jsx)(n.p,{children:"The BDV product does not contain the functionality to correct and/or enrich a bank data record."}),"\n",(0,i.jsx)(n.h3,{id:"17-bank-data-verification-dashboard",children:(0,i.jsx)(n.strong,{children:"1.7 BANK DATA VERIFICATION DASHBOARD"})}),"\n",(0,i.jsx)(n.p,{children:"BDV has to contain the following dashboard-based functionalities:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Visualization of CX Member bank data verification results"}),"\n",(0,i.jsx)(n.li,{children:"Various bank data filter functionalities based on the bank data model"}),"\n",(0,i.jsx)(n.li,{children:"BDV target setting"}),"\n",(0,i.jsx)(n.li,{children:"Bank data record target versus actuals"}),"\n",(0,i.jsx)(n.li,{children:"Bank data rule results supported by dashboard visualization capabilities"}),"\n",(0,i.jsx)(n.li,{children:"Bank data visualization by country type"}),"\n",(0,i.jsx)(n.li,{children:"BDV statistical report"}),"\n",(0,i.jsx)(n.li,{children:"Search function"}),"\n",(0,i.jsx)(n.li,{children:"BDV dashboard settings by time, KPI, layout and view, country, language limited to German and English"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The results of BDV are accessible via a defined API and Changelog file managed via the Bank Data Sharing State Controller."}),"\n",(0,i.jsx)(n.p,{children:"The BDV dashboard design relies on the Catena-X style guide. See details under confluence.catena-x.net/display/CORE/CX+Style+Guide"}),"\n",(0,i.jsx)(n.h2,{id:"2-bank-data-verification-dashboard-normative",children:(0,i.jsx)(n.strong,{children:"2 BANK DATA VERIFICATION DASHBOARD (NORMATIVE)"})}),"\n",(0,i.jsx)(n.p,{children:"The Bank Data Verification Dashboard (BDV) MUST perform the verification of a bank data record of a defined CX Member business partner. The BDV rule set and visualization of business partner data MUST be based on the standards defined in CX-0010 Version 2.0.0 Business Partner Number, CX-0074 Version 1.1.0 Business Partner Gate API, CX-0012 Business Partner Pool API Version 2.1.0 or higher."}),"\n",(0,i.jsx)(n.h3,{id:"21-preconditions-and-dependencies",children:(0,i.jsx)(n.strong,{children:"2.1 PRECONDITIONS AND DEPENDENCIES"})}),"\n",(0,i.jsxs)(n.p,{children:["To run the BDV solution the BPDM, Gate API and Pool API SHOULD be set up: ",(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/bpdm/blob/main/README.md",children:"https://github.com/eclipse-tractusx/bpdm/blob/main/README.md"})]}),"\n",(0,i.jsx)(n.h3,{id:"22-bdv-specifications",children:(0,i.jsx)(n.strong,{children:"2.2 BDV SPECIFICATIONS"})}),"\n",(0,i.jsx)(n.p,{children:"The BDV rule set MUST use the following BP data attributes:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Legal Entity as defined by CX-0074 Version 1.1.0which contains the following attributes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"External ID"}),"\n",(0,i.jsx)(n.li,{children:"BPNL, BPNS, BPNA"}),"\n",(0,i.jsx)(n.li,{children:"Legal Name Parts"}),"\n",(0,i.jsx)(n.li,{children:"Legal Short Name"}),"\n",(0,i.jsx)(n.li,{children:"Legal Form"}),"\n",(0,i.jsx)(n.li,{children:"Classifications"}),"\n",(0,i.jsx)(n.li,{children:"Legal Address"}),"\n",(0,i.jsx)(n.li,{children:"Created at"}),"\n",(0,i.jsx)(n.li,{children:"Updated at"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Legal Entity Identifier as defined by CX-0074 Version 1.1.0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Value"}),"\n",(0,i.jsx)(n.li,{children:"Type"}),"\n",(0,i.jsx)(n.li,{children:"Issuing Body"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Site as defined by CX-0074 Version 1.1.0"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Address as defined by CX-0074 Version 1.1.0"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Identifier Type as defined by CX-0074 Version 1.1.0"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"23-bdv-usage-of-norms",children:(0,i.jsx)(n.strong,{children:"2.3 BDV USAGE OF NORMS"})}),"\n",(0,i.jsx)(n.p,{children:"The BDV the rule set MUST us the following ISO Norms:"}),"\n",(0,i.jsx)(n.h4,{id:"iso-3166-1-country",children:(0,i.jsx)(n.strong,{children:"ISO 3166-1 Country"})}),"\n",(0,i.jsx)(n.p,{children:"The BDV rule set** MUST use the ISO Norm 3166-1 related codes for at least 117 countries as listed below"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Country List based on ISO 3166-1"})}),"\xa0\xa0"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"AD\xa0"}),(0,i.jsx)(n.th,{children:"CL\xa0"}),(0,i.jsx)(n.th,{children:"GE\xa0"}),(0,i.jsx)(n.th,{children:"IS\xa0"}),(0,i.jsx)(n.th,{children:"MC\xa0"}),(0,i.jsx)(n.th,{children:"PL\xa0"}),(0,i.jsx)(n.th,{children:"TJ\xa0"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AE\xa0"}),(0,i.jsx)(n.td,{children:"CN\xa0"}),(0,i.jsx)(n.td,{children:"GH\xa0"}),(0,i.jsx)(n.td,{children:"IT\xa0"}),(0,i.jsx)(n.td,{children:"MD\xa0"}),(0,i.jsx)(n.td,{children:"PO\xa0"}),(0,i.jsx)(n.td,{children:"TM\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AL\xa0"}),(0,i.jsx)(n.td,{children:"CO\xa0"}),(0,i.jsx)(n.td,{children:"GI\xa0"}),(0,i.jsx)(n.td,{children:"JM\xa0"}),(0,i.jsx)(n.td,{children:"ME\xa0"}),(0,i.jsx)(n.td,{children:"PY\xa0"}),(0,i.jsx)(n.td,{children:"TN\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AM\xa0"}),(0,i.jsx)(n.td,{children:"CR\xa0"}),(0,i.jsx)(n.td,{children:"GP\xa0"}),(0,i.jsx)(n.td,{children:"JP\xa0"}),(0,i.jsx)(n.td,{children:"MK\xa0"}),(0,i.jsx)(n.td,{children:"QA\xa0"}),(0,i.jsx)(n.td,{children:"TR\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AR\xa0"}),(0,i.jsx)(n.td,{children:"CU\xa0"}),(0,i.jsx)(n.td,{children:"GR\xa0"}),(0,i.jsx)(n.td,{children:"KE\xa0"}),(0,i.jsx)(n.td,{children:"MT\xa0"}),(0,i.jsx)(n.td,{children:"RO\xa0"}),(0,i.jsx)(n.td,{children:"TT\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AT\xa0"}),(0,i.jsx)(n.td,{children:"CY\xa0"}),(0,i.jsx)(n.td,{children:"GT\xa0"}),(0,i.jsx)(n.td,{children:"KG\xa0"}),(0,i.jsx)(n.td,{children:"MX\xa0"}),(0,i.jsx)(n.td,{children:"RS\xa0"}),(0,i.jsx)(n.td,{children:"TW\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AU\xa0"}),(0,i.jsx)(n.td,{children:"CZ\xa0"}),(0,i.jsx)(n.td,{children:"HK\xa0"}),(0,i.jsx)(n.td,{children:"KK\xa0"}),(0,i.jsx)(n.td,{children:"MY\xa0"}),(0,i.jsx)(n.td,{children:"RU\xa0"}),(0,i.jsx)(n.td,{children:"UA\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AZ\xa0"}),(0,i.jsx)(n.td,{children:"DE\xa0"}),(0,i.jsx)(n.td,{children:"HN\xa0"}),(0,i.jsx)(n.td,{children:"KR\xa0"}),(0,i.jsx)(n.td,{children:"NA\xa0"}),(0,i.jsx)(n.td,{children:"SA\xa0"}),(0,i.jsx)(n.td,{children:"UK*\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BA\xa0"}),(0,i.jsx)(n.td,{children:"DK\xa0"}),(0,i.jsx)(n.td,{children:"HR\xa0"}),(0,i.jsx)(n.td,{children:"KW\xa0"}),(0,i.jsx)(n.td,{children:"NI\xa0"}),(0,i.jsx)(n.td,{children:"SE\xa0"}),(0,i.jsx)(n.td,{children:"US**\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BE\xa0"}),(0,i.jsx)(n.td,{children:"DZ\xa0"}),(0,i.jsx)(n.td,{children:"HT\xa0"}),(0,i.jsx)(n.td,{children:"KZ\xa0"}),(0,i.jsx)(n.td,{children:"NL\xa0"}),(0,i.jsx)(n.td,{children:"SG\xa0"}),(0,i.jsx)(n.td,{children:"UY\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BG\xa0"}),(0,i.jsx)(n.td,{children:"EC\xa0"}),(0,i.jsx)(n.td,{children:"HU\xa0"}),(0,i.jsx)(n.td,{children:"LB\xa0"}),(0,i.jsx)(n.td,{children:"NO\xa0"}),(0,i.jsx)(n.td,{children:"SI\xa0"}),(0,i.jsx)(n.td,{children:"UZ\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BO\xa0"}),(0,i.jsx)(n.td,{children:"EE\xa0"}),(0,i.jsx)(n.td,{children:"ID\xa0"}),(0,i.jsx)(n.td,{children:"LK\xa0"}),(0,i.jsx)(n.td,{children:"NZ\xa0"}),(0,i.jsx)(n.td,{children:"SK\xa0"}),(0,i.jsx)(n.td,{children:"VA\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BR\xa0"}),(0,i.jsx)(n.td,{children:"EG\xa0"}),(0,i.jsx)(n.td,{children:"IE\xa0"}),(0,i.jsx)(n.td,{children:"LT\xa0"}),(0,i.jsx)(n.td,{children:"PA\xa0"}),(0,i.jsx)(n.td,{children:"SM\xa0"}),(0,i.jsx)(n.td,{children:"VE\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BY\xa0"}),(0,i.jsx)(n.td,{children:"ES\xa0"}),(0,i.jsx)(n.td,{children:"IL\xa0"}),(0,i.jsx)(n.td,{children:"LU\xa0"}),(0,i.jsx)(n.td,{children:"PE\xa0"}),(0,i.jsx)(n.td,{children:"SN\xa0"}),(0,i.jsx)(n.td,{children:"VN\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CA\xa0"}),(0,i.jsx)(n.td,{children:"FI\xa0"}),(0,i.jsx)(n.td,{children:"IN\xa0"}),(0,i.jsx)(n.td,{children:"LV\xa0"}),(0,i.jsx)(n.td,{children:"PH\xa0"}),(0,i.jsx)(n.td,{children:"SV\xa0"}),(0,i.jsx)(n.td,{children:"XK\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CH***\xa0"}),(0,i.jsx)(n.td,{children:"FR\xa0"}),(0,i.jsx)(n.td,{children:"IR\xa0"}),(0,i.jsx)(n.td,{children:"MA\xa0"}),(0,i.jsx)(n.td,{children:"PK\xa0"}),(0,i.jsx)(n.td,{children:"TH\xa0"}),(0,i.jsx)(n.td,{children:"ZA\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsx)(n.td,{children:"ZW\xa0"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.iso.org/iso-3166-country-codes.html",children:"ISO - ISO 3166 \u2014 Country Codes"})}),"\n",(0,i.jsx)(n.h4,{id:"iso-3166-2-administrative-area-level-1",children:(0,i.jsx)(n.strong,{children:"ISO 3166-2 Administrative Area (Level 1)"})}),"\n",(0,i.jsx)(n.p,{children:"The BDV rule set MUST use the ISO Norm 3166-2 related codes for administrative area (level 1) - country subdivision, such as regions within a country or dependent states."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"(Data) Type / Code List / Enumeration"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Name"}),(0,i.jsxs)(n.td,{children:["The name of the country subdivision according to ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-2",children:"ISO 3166-2"}),"."]}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Code"}),(0,i.jsxs)(n.td,{children:["The six-character alphanumeric code according to ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-2",children:"ISO 3166-2"}),", consisting of the two-letter ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-1",children:"ISO 3166-1"})," country code and a three-character alphanumeric code for the subdivision in that country, separated by a hyphen."]}),(0,i.jsx)(n.td,{children:"String"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"iso-13616-iban-number",children:(0,i.jsx)(n.strong,{children:"ISO 13616 IBAN Number"})}),"\n",(0,i.jsx)(n.p,{children:"BDV MUST use the IBAN number in all defined SEPA countries based on the rules defined by the European Payments Council for SEPA and the European Committee for Banking Standards (ECBS) for IBAN based on ISO 13616."}),"\n",(0,i.jsx)(n.h4,{id:"iso-9362-bic--business-identifier-code",children:(0,i.jsx)(n.strong,{children:"ISO 9362 BIC \u2013 Business Identifier Code"})}),"\n",(0,i.jsx)(n.p,{children:"BDV MUST us the Business Identifier Code (BIC/SWIFT) of Financial Institutions. The Code is based on ISO 9362 defined by the Society for Worldwide Interbank Financial Telecommunication (S.W.I.F.T SC). The Code identifies an individual financial institution and the country residence based on the ISO 3166-1 and ISO 3166-2 standards to secure that the BDV rule is correct allocated to the appropriate countries and dependent states and regions as defined by the ISO norms."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NBAN - National Bank Account Number"}),"\nBDV MUST use the National Bank Account number as defined by the national bank institutions.  This verification rule is based on the ISO 3166-1 and ISO 3166-2 standards to secure that the BDV rule is correct allocated to the appropriate countries and dependent states and regions as defined by the ISO norms"]}),"\n",(0,i.jsx)(n.h3,{id:"24-bdv-usage-of-external-data-sources",children:(0,i.jsx)(n.strong,{children:"2.4 BDV USAGE OF EXTERNAL DATA SOURCES"})}),"\n",(0,i.jsx)(n.p,{children:"The BDV rule set MUST use defined external data sources supporting the rule set as needed in validating the correctness of bank data records or providing recommendation of data enrichments. External Data Sources are e.g. ISO 3166-1, ISO 3166-2, ISO 6074, SEPA, SWIFT, ISO 9362 and others."}),"\n",(0,i.jsx)(n.h3,{id:"25-bdv-results",children:(0,i.jsx)(n.strong,{children:"2.5 BDV RESULTS"})}),"\n",(0,i.jsx)(n.p,{children:"The BDV rule set MUST provide for each CX Member bank data record a result in the BDV dashboard and in the BDV Changelog file."}),"\n",(0,i.jsx)(n.h3,{id:"26-bdv-dashboard",children:(0,i.jsx)(n.strong,{children:"2.6 BDV DASHBOARD"})}),"\n",(0,i.jsx)(n.p,{children:"The BDV Dashboard MUST provide the following results:"}),"\n",(0,i.jsx)(n.p,{children:"Filter capabilities of BDV data results:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"By time (year, quarter, month) for rolling of 3 years at a minimum"}),"\n",(0,i.jsx)(n.li,{children:"By Business Partner Type"}),"\n",(0,i.jsx)(n.li,{children:"By Country"}),"\n",(0,i.jsx)(n.li,{children:"By Fraud Case Progress Status"}),"\n",(0,i.jsx)(n.li,{children:"By BDV Rule"}),"\n",(0,i.jsx)(n.li,{children:"By Status Code"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"BDV MUST contain the following dashboard-based functionalities:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Visualization of CX Member bank data verification results"}),"\n",(0,i.jsx)(n.li,{children:"Various bank data filter functionalities based on the bank data model"}),"\n",(0,i.jsx)(n.li,{children:"BDV target setting"}),"\n",(0,i.jsx)(n.li,{children:"Bank data record target versus actuals"}),"\n",(0,i.jsx)(n.li,{children:"Bank data rule results supported by dashboard visualization capabilities"}),"\n",(0,i.jsx)(n.li,{children:"Bank data visualization by country type"}),"\n",(0,i.jsx)(n.li,{children:"BDV statistical report"}),"\n",(0,i.jsx)(n.li,{children:"Search function"}),"\n",(0,i.jsx)(n.li,{children:"BDV dashboard settings by time, KPI, layout and view, country, language limited to German and English"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The BDV dashboard design MUST use the Catena-X style guide. See details under confluence.catena-x.net/display/CORE/CX+Style+Guide"}),"\n",(0,i.jsx)(n.h2,{id:"3-bdv-api",children:(0,i.jsx)(n.strong,{children:"3 BDV API"})}),"\n",(0,i.jsx)(n.h3,{id:"31-api-endpoints-and-resources",children:(0,i.jsx)(n.strong,{children:"3.1 API ENDPOINTS AND RESOURCES"})}),"\n",(0,i.jsx)(n.p,{children:"The resources MUST use the well-known HTTP request methods for CRU(D) operations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"POST MUST be used for create requests\xa0\xa0"}),"\n",(0,i.jsx)(n.li,{children:"PUT MUST be used for update requests\xa0\xa0"}),"\n",(0,i.jsx)(n.li,{children:"GET MUST be used for read requests\xa0\xa0"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"POST MAY also be used for read requests, if input is not given by parameters but rather by an HTTP body to bypass maximum URL length. PUT MAY also be used for upsert requests (create or update) if this is required. A state (active / inactive) at each entity MUST be used for a soft delete, so that the request method DELETE SHALL NOT be used. Other HTTP request methods SHALL NOT be used, including PATCH."}),"\n",(0,i.jsx)(n.p,{children:"Uploading and downloading data to/from the BDV API MUST follow a staging concept with two stages, so that consumers of the BDV API can compare what they have uploaded  into the input stage against what kind of BDV rule results and status code was provided for each bank data in the output stage. The following controllers MUST distinguish between an input and an output stage."}),"\n",(0,i.jsx)(n.h3,{id:"32-bank-data-controller",children:(0,i.jsx)(n.strong,{children:"3.2 BANK DATA CONTROLLER"})}),"\n",(0,i.jsx)(n.p,{children:"The bank data controller MUST allow to create, update, or read (search / return) bank data records related to an External Identifier or BPN ID in the input and output stage. It MUST have the following resources:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Bank Data Controller Resources\xa0"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Description\xa0"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"PUT/api/bdv/input/bank data\xa0"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Creates bank data record or updates existing bank data record in the input stage.\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"GET/api/bdv/output/bank data record"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Returns bank data record from the output stage by different search parameters\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"GET/api/bdv/input/bank data records"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Returns bank data record by different search parameters from the input stage.\xa0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"33-bank-data-sharing-state-controller",children:(0,i.jsx)(n.strong,{children:"3.3 BANK DATA SHARING STATE CONTROLLER"})}),"\n",(0,i.jsx)(n.p,{children:"The sharing state controller MUST allow to create, update, or read sharing state entries of bank data records.\xa0 The sharing state controller MUST have the following resources:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Sharing State Resources\xa0"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Description\xa0"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"GET/api/bdv/sharing-state\xa0"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Returns sharing states of bank data  filtered by IBAN, BIC, NBAN, External Identifier, BPN ID and type, country and status code\xa0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"PUT/api/bdv/sharing-state\xa0"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Creates or updates a sharing state of a bank data record\xa0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"34-edc-data-asset-structure",children:(0,i.jsx)(n.strong,{children:"3.4 EDC DATA ASSET STRUCTURE"})}),"\n",(0,i.jsx)(n.p,{children:"For each read and write (create and update) resource in the BDV API input stage there MUST be a dedicated EDC data asset definition. For each read resource in the BDV API output stage there MUST be a dedicated EDC data asset definition. Write resources (create and update) of the BDV API output stage MUST not be called from outside of the Catena-X operating environment. Consequently, EDC data assets for them are NOT REQUIRED.\nThe BDV API MUST support the EDC functionality based on Sovereign Data Exchange, 2.0.1, CX - 0018 Eclipse Data Space Connector (EDC)."}),"\n",(0,i.jsx)(n.h3,{id:"35-error-handling",children:(0,i.jsx)(n.strong,{children:"3.5 ERROR HANDLING"})}),"\n",(0,i.jsx)(n.p,{children:"The following http response codes MUST be defined for all resources:\xa0\xa0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"200 \u2013 OK\xa0\xa0"}),"\n",(0,i.jsx)(n.li,{children:"400 \u2013 Bad Request"}),"\n",(0,i.jsx)(n.li,{children:"401 \u2013 Unauthorized"}),"\n",(0,i.jsx)(n.li,{children:"403 \u2013 Forbidden"}),"\n",(0,i.jsx)(n.li,{children:"404 \u2013 Not Found\xa0\xa0"}),"\n",(0,i.jsx)(n.li,{children:"500 \u2013 Internal Server Error"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["HTTP Status Code Registry MUST be adhered to in the implementation for the decision on when to use which error code: ",(0,i.jsx)(n.a,{href:"https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml",children:"https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml"})]}),"\n",(0,i.jsx)(n.h2,{id:"4-references",children:(0,i.jsx)(n.strong,{children:"4 REFERENCES"})}),"\n",(0,i.jsx)(n.h3,{id:"41-non-normative-references",children:(0,i.jsx)(n.strong,{children:"4.1 NON-NORMATIVE REFERENCES"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://catena-x.net/en/offers/bpdm",children:"BPDM Catena-X Website"})}),"\n",(0,i.jsx)(n.h3,{id:"42-reference-implementations",children:(0,i.jsx)(n.strong,{children:"4.2 REFERENCE IMPLEMENTATIONS"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/bpdm/tree/main/bpdm-pool-api/src/main/kotlin/org/eclipse/tractusx/bpdm/pool/api",children:"Business Partner Pool API"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/bpdm/tree/main/bpdm-gate-api/src/main/kotlin/org/eclipse/tractusx/bpdm/gate/api",children:"Business Partner Gate API"})}),"\n",(0,i.jsx)(n.h2,{id:"annexes",children:(0,i.jsx)(n.strong,{children:"ANNEXES"})}),"\n",(0,i.jsx)(n.h3,{id:"figures",children:(0,i.jsx)(n.strong,{children:"FIGURES"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,i.jsx)(n.p,{children:"Intentionally left blank."}),"\n",(0,i.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,i.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,i.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);