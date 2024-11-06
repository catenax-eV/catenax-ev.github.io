"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[45881],{72179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(74848),i=t(28453);const a={tags:["CAT/Value Added Services"]},r="CX-0116 Sanction Party Watchlist Dashboard v1.2.0",o={id:"standards/CX-0116-SanctionWatchlistDashboard/CX-0116-SanctionWatchlistDashboard",title:"CX-0116 Sanction Party Watchlist Dashboard v1.2.0",description:"TABLE OF CONTENTS",source:"@site/docs/standards/CX-0116-SanctionWatchlistDashboard/CX-0116-SanctionWatchlistDashboard.md",sourceDirName:"standards/CX-0116-SanctionWatchlistDashboard",slug:"/standards/CX-0116-SanctionWatchlistDashboard/",permalink:"/docs/next/standards/CX-0116-SanctionWatchlistDashboard/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"CAT/Value Added Services",permalink:"/docs/next/tags/cat-value-added-services"}],version:"current",frontMatter:{tags:["CAT/Value Added Services"]},sidebar:"sidebar_standards",previous:{title:"CX-0115 Manufacturing Capability Exchange 1.0.0",permalink:"/docs/next/standards/CX-0115-ManufacturingCapabilityExchange/"},next:{title:"CX-0117 Use Case Circular Economy - Secondary Marketplace v1.0.0",permalink:"/docs/next/standards/CX-0117-UseCaseCircularEconomySecondaryMarketplace/"}},d={},l=[{value:"TABLE OF CONTENTS",id:"table-of-contents",level:2},{value:"ABSTRACT",id:"abstract",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT",id:"12-context",level:3},{value:"1.3 CONFORMANCE",id:"13-conformance",level:3},{value:"1.4 PROOF OF CONFORMITY",id:"14-proof-of-conformity",level:3},{value:"1.5 TERMINOLOGY OF SANCTION WATCHLIST DASHBOARD COMPONENTS",id:"15-terminology-of-sanction-watchlist-dashboard-components",level:3},{value:"1.6 OUT OF SCOPE",id:"16-out-of-scope",level:3},{value:"1.7 SANCTION PARTY WATCHLIST DASHBOARD",id:"17-sanction-party-watchlist-dashboard",level:3},{value:"2 SANCTION WATCHLIST DASHBOARD (NORMATIVE)",id:"2-sanction-watchlist-dashboard-normative",level:2},{value:"2.1 PRECONDITIONS AND DEPENDENCIES",id:"21-preconditions-and-dependencies",level:3},{value:"2.2 SWD SPECIFICATIONS",id:"22-swd-specifications",level:3},{value:"2.3 SWD USAGE OF NORMS",id:"23-swd-usage-of-norms",level:3},{value:"ISO 3166-1",id:"iso-3166-1",level:4},{value:"ISO 20275",id:"iso-20275",level:4},{value:"2.4 SWD USAGE OF EXTERNAL DATA SOURCES",id:"24-swd-usage-of-external-data-sources",level:3},{value:"2.5 SWD RESULTS",id:"25-swd-results",level:3},{value:"2.6 SWD DASHBOARD",id:"26-swd-dashboard",level:3},{value:"3 SWD API",id:"3-swd-api",level:2},{value:"3.1 API ENDPOINTS AND RESOURCES",id:"31-api-endpoints-and-resources",level:3},{value:"3.2 SANCTION PARTY WATCHLIST CONTROLLER",id:"32-sanction-party-watchlist-controller",level:3},{value:"3.3 SANCTION PARTY WATCHLIST SHARING STATE CONTROLLER",id:"33-sanction-party-watchlist-sharing-state-controller",level:3},{value:"3.4 <strong>AVAILABLE DATA TYPES</strong>",id:"34-available-data-types",level:3},{value:"3.5 <strong>DATA ASSET STRUCTURE</strong>",id:"35-data-asset-structure",level:3},{value:"3.6 <strong>ADDITIONAL REQUIREMENTS</strong>",id:"36-additional-requirements",level:3},{value:"3.6.1 <strong>CONVENTIONS FOR USE CASE POLICY IN CONTEXT OF DATA EXCHANGE</strong>",id:"361-conventions-for-use-case-policy-in-context-of-data-exchange",level:4},{value:"3.6.2 <strong>ADDITIONAL DETAILS REGARDING ACCESS POLICIES</strong>",id:"362-additional-details-regarding-access-policies",level:4},{value:"3.6.3 <strong>ADDITIONAL DETAILS REGARDING USAGE POLICIES</strong>",id:"363-additional-details-regarding-usage-policies",level:4},{value:"3.7 ERROR HANDLING",id:"37-error-handling",level:3},{value:"4 REFERENCES",id:"4-references",level:2},{value:"4.1 NON-NORMATIVE REFERENCES",id:"41-non-normative-references",level:3},{value:"4.2 REFERENCE IMPLEMENTATIONS",id:"42-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"cx-0116-sanction-party-watchlist-dashboard-v120",children:"CX-0116 Sanction Party Watchlist Dashboard v1.2.0"})}),"\n",(0,s.jsx)(n.h2,{id:"table-of-contents",children:"TABLE OF CONTENTS"}),"\n",(0,s.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,s.jsx)(n.p,{children:"Doing business with companies (and affiliates) which are sanctioned or affected by embargos can result in fines and reputational damage. However, identification of sanctioned partners is difficult due to the vast amount of different sanction lists from several countries and authorities. Even manual checks are difficult due to a lack of high-quality data provisioned by the authorities. With Sanction and Watchlist Monitoring, data synchronized with a data mirror is monitored continuously against the latest sanction and watch lists. The Sanction Party Watchlist Dashboard (SWD) has to provide a summary on potential matches. The matching against sanction and watch lists have to be activated in the company data lookup, so data maintainers are already notified during creation or update workflows. The monitoring scope has to be extended to political exposed persons (so called PEPs). SWD has to visualize the outcome of the sanction watchlist monitoring rules via a dashboard."}),"\n",(0,s.jsx)(n.p,{children:"SWD uses the Gate API CX-0074:3.0, optional the Pool API CX-0012:4.0 based on the CX-0018:3.0 Dataspace Connectivity for pulling BP data records. SWD has to be a client/ server cloud application which contains a Web Client and a Cloud Server Application.\nSWD has to contain a user and authorization management capability aligned with the CX Portal and Marketplace user management. SWD has to contain an API and has to be  available in English and German language"}),"\n",(0,s.jsx)(n.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Version"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Publishing Date"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Author"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description of Change"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1.1.0"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"SR"}),(0,s.jsx)(n.td,{children:"Added chapter 3 for SWD API."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1.2.0"}),(0,s.jsx)(n.td,{children:"2024-03-13"}),(0,s.jsx)(n.td,{children:"SR"}),(0,s.jsx)(n.td,{children:"Corrected 2.3 - country list, Added chapter 3.4 Data Types and 3.5 Data Attributes, Added chapter 3.6 for data sovereignty as additional requirement."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,s.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,s.jsx)(n.p,{children:"This standard is relevant for the following audience:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Catena-X certified Operational Companies acting as:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Core Service Provider"}),"\n",(0,s.jsx)(n.li,{children:"Business Application Provider"}),"\n",(0,s.jsx)(n.li,{children:"Data Provider and Consumer"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Screening and monitoring of BP data records to global, regional or country specific Sanction Party lists and regulations is not part of the Golden Record qualification process. Therefore has to offer SWD an optional incremental service of screening BP master data of an CX Member in his Inbound Persistence. SWD has to provide results and status codes which has to enable the navigation of CX Member and Golden Record related process steps."}),"\n",(0,s.jsx)(n.p,{children:"SWD has to be a Value Added Services Solution and has to get accessed via the CX Marketplace."}),"\n",(0,s.jsxs)(n.p,{children:["SWD MUST rely on CX-0010 Business Partner Number Version 2.0.0 or higher. The Gate API MUST be implemented as defined in CX-0074 Version 3.0.0 or higher based on the OpenAPI 3.0.1 specification or higher. Access to the Catena-X standards is available via Catena-X's standard library at ",(0,s.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"https://catena-x.net/de/standard-library"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"12-context",children:"1.2 CONTEXT"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,s.jsx)(n.p,{children:"This document is focusing on the functionality of the Sanction Party Watchlist Dashboard (SWD) which has to be a screening and monitoring tool of CX Member BP data records in the Inbound Persistence based on the following capabilities:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Continuously monitoring BP data records of a CX Member based on a unified rule methodology of global available sanction party watchlists"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Individual selection of sanction party watchlists"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Matching Score Weighting customization"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Sanction Watchlist results by BP data record, results status code and other filter functions"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Customizable dashboard functionalities and role and authorization management"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"SWD API functionalities for accessing SWD results"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Data Sovereignty: The SWD API allows to download sanction watchlist screening related quality results of related business partner data in a data sovereign way, because each Catena-X member has its own area of business partner data in BPDM, where private data (like customer / supplier relationships) is only visible to the Catena-X member."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"13-conformance",children:"1.3 CONFORMANCE"}),"\n",(0,s.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"https://datatracker.ietf.org/doc/html/bcp14"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",children:"Key words for use in RFCs to Indicate Requirement Levels"}),">"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",children:"Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"14-proof-of-conformity",children:"1.4 PROOF OF CONFORMITY"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,s.jsx)(n.p,{children:"All participants and their solutions will need to proove, that they are conform with the Catena-X standards. To validate that the standards are applied correctly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,s.jsx)(n.p,{children:"When implementing the API defined in this standard, proof of conformity must be provided by the following deliverables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"An OpenAPI specification defining the relevant resources for this standard"}),"\n",(0,s.jsx)(n.li,{children:"Examples of a data assets"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"15-terminology-of-sanction-watchlist-dashboard-components",children:"1.5 TERMINOLOGY OF SANCTION WATCHLIST DASHBOARD COMPONENTS"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,s.jsx)(n.p,{children:"The main SWD rule methodologies are described below:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sanction Party List Accessibility Unification"}),"\nSWD has to contain a functionality to unify the accessibility of defined Sanction Party Watchlists by defined sanction party relevant attributes into the SWD data model structure. It has to be capable to integrate sanction party data from APIs, JSON, XML, HTML and other data interface structures."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BP Data Model Enrichment"}),"\nSWD has to enrich the BP data model by defined and relevant sanction party watchlist data attributes and has to enable a unified and combined usage based on the BPN ID as defined in CX-0010 Business Partner Number Standard, Version 2.0.0."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sanction Party Watchlist Match"}),"\nThe SWD rules have to provide results which are classified into the Clear Match and Suspected Match."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Business Partner"}),"\nSWD has to be based on the BP data model structure as defined in CX-0010 Business Partner Number Version 2.0.0 and CX-0074 Business Partner Gate API, Version 3.0.0."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BP Shareholder Relation Risk Curation"}),"\nSWD can contain the capability to identify relations between sanctioned individuals\nacting as beneficial owner/shareholders of Catena-X BPDM relevant Business Partner legal entities (BPNL \u2013 Business Partner Number Legal).\nThe related findings have to be presented via appropriate hit scores."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Incident Reporting"}),"\nSWD has to contain the functionality to report results via Incidents by BP data record. The appropriate results have to be visible via the Sanction Party Watchlist Dashboard or via an API."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Inbound Persistence"}),"\nThe Inbound Persistence contains the BP data records which are send by a CX Member for\nvalidation and screening using the Gate API as defined in CX-0074, Version 3.0.0 into SWD."]}),"\n",(0,s.jsx)(n.h3,{id:"16-out-of-scope",children:"1.6 OUT OF SCOPE"}),"\n",(0,s.jsx)(n.p,{children:"The SWD product does not contain the functionality to correct and/or enrich a business partner data record."}),"\n",(0,s.jsx)(n.h3,{id:"17-sanction-party-watchlist-dashboard",children:"1.7 SANCTION PARTY WATCHLIST DASHBOARD"}),"\n",(0,s.jsx)(n.p,{children:"SWD has to contain the following dashboard-based functionalities:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Visualization of sanctioned or not sanctioned CX Member BP data records based on an Incident KPI and matching classification"}),"\n",(0,s.jsx)(n.li,{children:"Visualization of BP data records based on Identifier, sanction party list, date of incident, time, country, optional by shareholder or beneficial owner related to a BP"}),"\n",(0,s.jsx)(n.li,{children:"Search functionalities"}),"\n",(0,s.jsx)(n.li,{children:"Dashboard layout and view settings"}),"\n",(0,s.jsx)(n.li,{children:"Sanction Watchlist Weighting settings"}),"\n",(0,s.jsx)(n.li,{children:"Language setting for German and English"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The Sanction Party Watchlist Dashboard design relies on the Catena-X style guide. See details under confluence.catena-x.net/display/CORE/CX+Style+Guide"}),"\n",(0,s.jsx)(n.p,{children:"SWD does contain an own API."}),"\n",(0,s.jsx)(n.h2,{id:"2-sanction-watchlist-dashboard-normative",children:"2 SANCTION WATCHLIST DASHBOARD (NORMATIVE)"}),"\n",(0,s.jsx)(n.p,{children:"The Sanction Party Watchlist Dashboard (SWD) MUST be a screening and monitoring tool of BP data records based on the following capabilities."}),"\n",(0,s.jsx)(n.p,{children:"SWD MUST provide the following capabilities:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Continuously monitoring BP data records of a CX Member based on a unified rule methodology of global available sanction party watchlists"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Individual selection of sanction party watchlists"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Sanction Party Watchlist Matching Score Weighting customization"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Sanction Watchlist results by BP data record, results status code and other filter functions"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Customizable dashboard functionalities (language, chart type)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Role and authorization management"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Capability to identify Sanction Party Watchlist Incidents by BP legal entities (BPNL)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Capability optional to identify relations between sanctioned individuals acting as beneficial owners/shareholders of Business Partner legal entities (BPNL)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"API enabling CX Member accessing SWD results"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The SWD rule set and visualization of business partner data MUST be based on the standards defined in CX-0010 Version 2.0.0 Business Partner Number, CX-0074 Version 3.0.0 Business Partner Gate API."}),"\n",(0,s.jsx)(n.h3,{id:"21-preconditions-and-dependencies",children:"2.1 PRECONDITIONS AND DEPENDENCIES"}),"\n",(0,s.jsxs)(n.p,{children:["To run the SWD the BP Number, Gate API SHOULD be set up:\n",(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/bpdm/blob/main/README.md",children:"https://github.com/eclipse-tractusx/bpdm/blob/main/README.md"})]}),"\n",(0,s.jsx)(n.h3,{id:"22-swd-specifications",children:"2.2 SWD SPECIFICATIONS"}),"\n",(0,s.jsx)(n.p,{children:"The SWD rule set MUST use the following Business Partner data attributes:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Legal Entity as defined by CX-0074 Version 3.0.0 or higher which contains the following attributes","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"External ID"}),"\n",(0,s.jsx)(n.li,{children:"BPNL - optional"}),"\n",(0,s.jsx)(n.li,{children:"Legal Name Parts"}),"\n",(0,s.jsx)(n.li,{children:"BP Type - optional"}),"\n",(0,s.jsx)(n.li,{children:"Legal Address"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"23-swd-usage-of-norms",children:"2.3 SWD USAGE OF NORMS"}),"\n",(0,s.jsx)(n.p,{children:"The SWD the rule set MUST us the following ISO Norms:"}),"\n",(0,s.jsx)(n.h4,{id:"iso-3166-1",children:"ISO 3166-1"}),"\n",(0,s.jsx)(n.p,{children:"SWD MUST use be capable to use all countries based on the ISO Norm 3166-1.\xa0\xa0"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.iso.org/iso-3166-country-codes.html",children:"ISO - ISO 3166 \u2014 Country Codes"})}),"\n",(0,s.jsx)(n.h4,{id:"iso-20275",children:"ISO 20275"}),"\n",(0,s.jsx)(n.p,{children:"The SWD rule set MUST use the content of the ISO Norm 20275 to validate the correctness of legal names in long form and/or abbreviation in a transliterated form."}),"\n",(0,s.jsx)(n.h3,{id:"24-swd-usage-of-external-data-sources",children:"2.4 SWD USAGE OF EXTERNAL DATA SOURCES"}),"\n",(0,s.jsx)(n.p,{children:"The SWD rule set MUST use defined external data sources supporting the rule set as needed in screening BP data records against sanction party watchlist incidents."}),"\n",(0,s.jsx)(n.h3,{id:"25-swd-results",children:"2.5 SWD RESULTS"}),"\n",(0,s.jsx)(n.p,{children:"The SWD rule set MUST provide for each BP data record in the Inbound Persistence a result in the SWD Dashboard."}),"\n",(0,s.jsx)(n.h3,{id:"26-swd-dashboard",children:"2.6 SWD DASHBOARD"}),"\n",(0,s.jsx)(n.p,{children:"The SWD Dashboard MUST provide the following results:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Visualization of sanctioned or not sanctioned CX Member BP data record based on an Incident KPI and matching classification"}),"\n",(0,s.jsx)(n.li,{children:"Visualization of BP data records based on Identifier, sanction party list, date of incident, time, country, optional by shareholder or beneficial owner related to a BP"}),"\n",(0,s.jsx)(n.li,{children:"Search functionalities"}),"\n",(0,s.jsx)(n.li,{children:"Dashboard layout and view settings"}),"\n",(0,s.jsx)(n.li,{children:"Sanction Watchlist Weighting settings"}),"\n",(0,s.jsx)(n.li,{children:"Language setting for German and English"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The Sanction Party Watchlist Dashboard design MUST rely on the Catena-X style guide."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open-source repository: ",(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/portal-shared-components",children:"https://github.com/eclipse-tractusx/portal-shared-components"})]}),"\n",(0,s.jsxs)(n.li,{children:["NPM package: ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@catena-x/portal-shared-components/v/2.1.2",children:"https://www.npmjs.com/package/@catena-x/portal-shared-components/v/2.1.2"})]}),"\n",(0,s.jsxs)(n.li,{children:["Storybook: ",(0,s.jsx)(n.a,{href:"https://eclipse-tractusx.github.io/portal-shared-components/?path=/docs/chip--docs",children:"https://eclipse-tractusx.github.io/portal-shared-components/?path=/docs/chip--docs"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"3-swd-api",children:"3 SWD API"}),"\n",(0,s.jsx)(n.h3,{id:"31-api-endpoints-and-resources",children:"3.1 API ENDPOINTS AND RESOURCES"}),"\n",(0,s.jsx)(n.p,{children:"The resources MUST use the well-known HTTP request methods for CRU(D) operations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"POST MUST be used for create requests\xa0\xa0"}),"\n",(0,s.jsx)(n.li,{children:"PUT MUST be used for update requests\xa0\xa0"}),"\n",(0,s.jsx)(n.li,{children:"GET MUST be used for read requests\xa0\xa0"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"POST MAY also be used for read requests, if input is not given by parameters but rather by an HTTP body to bypass maximum URL length. PUT MAY also be used for upsert requests (create or update) if this is required. A state (active / inactive) at each entity MUST be used for a soft delete, so that the request method DELETE SHALL NOT be used. Other HTTP request methods SHALL NOT be used, including PATCH."}),"\n",(0,s.jsx)(n.p,{children:"Downloading data from the SDW API MUST follow a staging concept with two stages, so that consumers of the SWD API can compare what they have downloaded from the Inbound Persistence via the Gate API into the database of SWD against what kind of SWD rule result and status code was provided for each business partner data record."}),"\n",(0,s.jsx)(n.h3,{id:"32-sanction-party-watchlist-controller",children:"3.2 SANCTION PARTY WATCHLIST CONTROLLER"}),"\n",(0,s.jsx)(n.p,{children:"The Sanction Party Watchlist Controller MUST allow to read (search / return) sanction party watchlist incidents status codes related to an External Identifier or BPN ID. It MUST have the following resources:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Sanction Party Watchlist Controller Resources\xa0"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Description\xa0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"GET/api/swd/business partner data record with sanction party watchlist incident status codes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Returns business partner data record with sanction party watchlist incident status information array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"GET/api/swd/BP data records"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Returns business partner data record by different search parameters"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"GET/api/swd/business partner data record with sanction party workflow status"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Returns workflow status by business partner data record in Filtered Business Partner List"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"GET/api/swd/shareholder natural person list by Business Partner data record"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Returns first and last name of business partner data record shareholders"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"33-sanction-party-watchlist-sharing-state-controller",children:"3.3 SANCTION PARTY WATCHLIST SHARING STATE CONTROLLER"}),"\n",(0,s.jsx)(n.p,{children:"The sharing state controller MUST allow to read sharing state entries of BP data records complemented by the Sanction Party Watchlist incident status results.\xa0 The sharing state controller MUST have the following resources:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Sharing State Resources\xa0"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Description\xa0"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"GET/api/swd/sharing-state\xa0"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Returns sharing states of business partner data record with incident status result  filtered by External Identifier, BPN ID and type, country, city and address"})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"34-available-data-types",children:["3.4 ",(0,s.jsx)(n.strong,{children:"AVAILABLE DATA TYPES"})]}),"\n",(0,s.jsxs)(n.p,{children:["The API ",(0,s.jsx)(n.strong,{children:"MUST"})," use JSON as the payload format transported via HTTP.\xa0Other formats can be added. These are then, however, ",(0,s.jsx)(n.strong,{children:"OPTIONAL"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"35-data-asset-structure",children:["3.5 ",(0,s.jsx)(n.strong,{children:"DATA ASSET STRUCTURE"})]}),"\n",(0,s.jsxs)(n.p,{children:["The following data assets ",(0,s.jsx)(n.strong,{children:"MUST"})," be registered at the Core Service Provider so that the Sharing Member can negotiate an API usage contract with the Core Service Provider and access its dedicated BPDM Gate (hosted by the Core Service Provider) through these data assets[^6]:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Name"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Version"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UploadAccessSWDForSharingMember"}),(0,s.jsx)(n.td,{children:"SWD"}),(0,s.jsx)(n.td,{children:"1.0"}),(0,s.jsx)(n.td,{children:"Grants the Sharing Member upload access to the SWD Admin function, SWD database and SWD changelog. This contains create / update SWD admin settings by Sharing Member role by SWD function, activate and deactivate the usage of external data sources via defined APIs and license keys."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ReadAccessSWDForSharingMember"}),(0,s.jsx)(n.td,{children:"SWD"}),(0,s.jsx)(n.td,{children:"1.0"}),(0,s.jsx)(n.td,{children:"Grants the Sharing Member read access of the SWD changelog."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["The OAuth2 client permissions ",(0,s.jsx)(n.strong,{children:"MUST"})," be configured to solely allow access to the API resources defined in the corresponding asset, checking HTTP method (read vs. full access), path, query parameters and body of the HTTP request."]}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"36-additional-requirements",children:["3.6 ",(0,s.jsx)(n.strong,{children:"ADDITIONAL REQUIREMENTS"})]}),"\n",(0,s.jsxs)(n.h4,{id:"361-conventions-for-use-case-policy-in-context-of-data-exchange",children:["3.6.1 ",(0,s.jsx)(n.strong,{children:"CONVENTIONS FOR USE CASE POLICY IN CONTEXT OF DATA EXCHANGE"})]}),"\n",(0,s.jsx)(n.p,{children:"In alignment with our commitment to data sovereignty, a specific framework governing the utilization of data within the Catena-X use cases has been outlined. A set of specific policies on data offering and data usage level detail the conditions under which data may be accessed, shared, and used, ensuring compliance with legal standards."}),"\n",(0,s.jsx)(n.p,{children:"For a comprehensive understanding of the rights, restrictions, and obligations associated with data usage in the Catena-X ecosystem, we refer users to"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the detailed ",(0,s.jsx)(n.a,{href:"https://github.com/catenax-eV/cx-odrl-profile",children:"ODRL policy repository"}),". This document provides in-depth explanations of the terms and conditions applied to data access and utilization, ensuring that all engagement with our data is conducted responsibly and in accordance with established guidelines."]}),"\n",(0,s.jsxs)(n.li,{children:["the ODRL schema template. This defines how policies used for data sharing/usage should get defined. Those schemas ",(0,s.jsx)(n.strong,{children:"MUST"})," be followed when providing services or apps for data sharing/consuming."]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"362-additional-details-regarding-access-policies",children:["3.6.2 ",(0,s.jsx)(n.strong,{children:"ADDITIONAL DETAILS REGARDING ACCESS POLICIES"})]}),"\n",(0,s.jsx)(n.p,{children:'A Data Provider may tie certain access authorizations ("Access Policies") to its data offers for members of Catena-X and one or several Data Consumers. By limiting access to certain Participants, Data Provider maintains control over its anti-trust obligations when sharing certain data. In particular, Data Provider may apply Access Policies to restrict access to a particular data offer for only one Participant identified by a specific business partner number:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Membership"}),"\n",(0,s.jsx)(n.li,{children:"BPNL"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"363-additional-details-regarding-usage-policies",children:["3.6.3 ",(0,s.jsx)(n.strong,{children:"ADDITIONAL DETAILS REGARDING USAGE POLICIES"})]}),"\n",(0,s.jsxs)(n.p,{children:["In the context of data usage policies (\u201cUsage Policies\u201d), Participants and related services ",(0,s.jsx)(n.strong,{children:"MUST"})," use the following policy rules:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use Case Framework (\u201cFrameworkAgreement\u201d)"}),"\n",(0,s.jsxs)(n.li,{children:["at least one use case purpose (\u201cUsagePurpose\u201d) from the above mentioned ",(0,s.jsx)(n.a,{href:"https://github.com/catenax-eV/cx-odrl-profile",children:"ODRL policy repository"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, respective usage policies ",(0,s.jsx)(n.strong,{children:"MAY"})," include the following policy rule:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Reference Contract (\u201cContractReference\u201d)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Details on  namespaces and ODRL policy rule values to be used for the above-mentioned types are provided via the ["}),"\n",(0,s.jsx)(n.h3,{id:"37-error-handling",children:"3.7 ERROR HANDLING"}),"\n",(0,s.jsx)(n.p,{children:"The following http response codes MUST be defined for all resources:\xa0\xa0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"200 \u2013 OK\xa0\xa0"}),"\n",(0,s.jsx)(n.li,{children:"400 \u2013 Bad Request"}),"\n",(0,s.jsx)(n.li,{children:"401 \u2013 Unauthorized"}),"\n",(0,s.jsx)(n.li,{children:"403 \u2013 Forbidden"}),"\n",(0,s.jsx)(n.li,{children:"404 \u2013 Not Found\xa0\xa0"}),"\n",(0,s.jsx)(n.li,{children:"500 \u2013 Internal Server Error"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["HTTP Status Code Registry MUST be adhered to in the implementation for the decision on when to use which error code: ",(0,s.jsx)(n.a,{href:"https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml",children:"https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml"})]}),"\n",(0,s.jsx)(n.h2,{id:"4-references",children:"4 REFERENCES"}),"\n",(0,s.jsx)(n.h3,{id:"41-non-normative-references",children:"4.1 NON-NORMATIVE REFERENCES"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://catena-x.net/de/standard-library",children:"CX-0010:2.0 Business Partner Number"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://catena-x.net/en/offers-standards/bpdm",children:"BPDM Catena-X Website"})}),"\n",(0,s.jsx)(n.h3,{id:"42-reference-implementations",children:"4.2 REFERENCE IMPLEMENTATIONS"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/bpdm/tree/main/bpdm-pool-api/src/main/kotlin/org/eclipse/tractusx/bpdm/pool/api",children:"Business Partner Pool API"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/bpdm/tree/main/bpdm-gate-api/src/main/kotlin/org/eclipse/tractusx/bpdm/gate/api",children:"Business Partner Gate API"})}),"\n",(0,s.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,s.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,s.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section is non-normative."})}),"\n",(0,s.jsx)(n.p,{children:"Intentionally left blank."}),"\n",(0,s.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,s.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,s.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);