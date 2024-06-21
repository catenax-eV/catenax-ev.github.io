"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[2418],{56270:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(74848),i=t(28453);const s={},r="CX-0035 Data Model: Marketplace offer v1.0.0",o={id:"standards/CX-0035-DataModelMarketplaceoffer/CX-0035-DataModelMarketplaceoffer",title:"CX-0035 Data Model: Marketplace offer v1.0.0",description:"Abstract",source:"@site/versioned_docs/version-24.03/standards/CX-0035-DataModelMarketplaceoffer/CX-0035-DataModelMarketplaceoffer.md",sourceDirName:"standards/CX-0035-DataModelMarketplaceoffer",slug:"/standards/CX-0035-DataModelMarketplaceoffer/",permalink:"/docs/standards/CX-0035-DataModelMarketplaceoffer/",draft:!1,unlisted:!1,tags:[],version:"24.03",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0034 Data Model Battery Pass v.2.0.0",permalink:"/docs/standards/CX-0034-DataModelBatteryPass/"},next:{title:"CX-0036 Aspect Model: Quality Task v1.0.2",permalink:"/docs/standards/CX-0036-AspectModelQualityTask/"}},d={},l=[{value:"Abstract",id:"abstract",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Purpose of the Document",id:"2-purpose-of-the-document",level:2},{value:"3. Scope of the Implementation",id:"3-scope-of-the-implementation",level:2},{value:"3.1 Preconditions and Dependencies",id:"31-preconditions-and-dependencies",level:3},{value:"3.2 Constraints and Limitations",id:"32-constraints-and-limitations",level:3},{value:"4. Data Model",id:"4-data-model",level:2},{value:"4.1 Overview",id:"41-overview",level:3},{value:"4.2 Properties &amp; Entities",id:"42-properties--entities",level:3},{value:"5. Normative References",id:"5-normative-references",level:2},{value:"5.1 Catena-X Reference implementations",id:"51-catena-x-reference-implementations",level:3},{value:"5.2 Common Standards",id:"52-common-standards",level:3},{value:"Glossary",id:"glossary",level:2},{value:"Terms &amp; Definitions",id:"terms--definitions",level:3},{value:"Abbreviations",id:"abbreviations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"cx-0035-data-model-marketplace-offer-v100",children:"CX-0035 Data Model: Marketplace offer v1.0.0"}),"\n",(0,a.jsx)(n.h2,{id:"abstract",children:"Abstract"}),"\n",(0,a.jsx)(n.p,{children:"As a central component on the part of Catena-X to enable a circular\neconomy, a data model is needed that describes products and their\nmaterials and components. The necessary combination of ecology and\neconomy to enable a functioning circular economy is realized via the\nmarketplace."}),"\n",(0,a.jsx)(n.p,{children:"Products are offered and bought for this purpose. By linking with other\ncomponents, such as the product passport or circularity dashboard, the\nmarketplace also provides a relevant information base for calculating\nscenarios, integrating R-decisions into the purchasing process or\naccessing digital product passports and the digital twins behind them."}),"\n",(0,a.jsx)(n.p,{children:"The present data model forms the basis for this. In order to make the\nrelevant processes in the marketplace scalable and interoperable, a\nreference implementation is required."}),"\n",(0,a.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,a.jsx)(n.p,{children:'The data model "marketplace offer" includes all needed information to\nplace a marketplace offer on a marketplace. It is in the general\ninterest of all parties involved to be provided with the relevant\ninformation necessary to complete the transaction intended, e.g., to buy\na used part from the marketplace.'}),"\n",(0,a.jsx)(n.p,{children:"A marketplace is a matchmaking platform that is operated by a\nparticipant of the network. Thus, even though data models are being\ngenerated as reference implementations and communication scenarios and\nuser journeys are being commonly defined, for a rapid value generation\ninside the network it is essential to also provide capabilities above\nand beyond the agreed network scenarios."}),"\n",(0,a.jsx)(n.p,{children:"This mainly concerns manual interactions with the marketplace user\ninterface and interfaces, as direct interactions between a seller and\nthe marketplace or a buyer and the marketplace are not necessarily\nnetwork interoperability scenarios. Instead, they are transaction-based\ninteractions, such as the creation of a listing by a seller with the\nintention of achieving maximum visibility for all potential buyers."}),"\n",(0,a.jsx)(n.h2,{id:"2-purpose-of-the-document",children:"2. Purpose of the Document"}),"\n",(0,a.jsx)(n.p,{children:"The purpose of this document is to describe the Asset Administration\nShell submodel marketplace offer. It includes all needed information to\nplace a marketplace offer on a marketplace. The presented data model is\ndescribed and illustrated in the following with the entities and\nproperties and their interrelationships."}),"\n",(0,a.jsx)(n.h2,{id:"3-scope-of-the-implementation",children:"3. Scope of the Implementation"}),"\n",(0,a.jsx)(n.p,{children:"This chapter serves to situate the given reference implementation, to\noutline its prerequisites and to point out its limitations."}),"\n",(0,a.jsx)(n.h3,{id:"31-preconditions-and-dependencies",children:"3.1 Preconditions and Dependencies"}),"\n",(0,a.jsxs)(n.p,{children:["Like all Catena-X data models, this model will be available in a\nmachine-readable format on GitHub",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["This aspect model is written in BAMM 2.0 as a modeling language, which\nis a separate industry standard from the open manufacturing platform,\nsee Open Manufacturing",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The data contained in this Catena-X data model is requested and\nexchanged via Catena-X using an Eclipse Dataspace Connector (EDC), which\nis a separate Catena-X standard and an implementation of the IDSA\nstandard."}),"\n",(0,a.jsx)(n.h3,{id:"32-constraints-and-limitations",children:"3.2 Constraints and Limitations"}),"\n",(0,a.jsx)(n.p,{children:"There are no constraints and limitations to this reference\nimplementation document."}),"\n",(0,a.jsx)(n.h2,{id:"4-data-model",children:"4. Data Model"}),"\n",(0,a.jsx)(n.p,{children:"The data model is described in BAMM and is available in the semantic hub\nfrom which the following description originates."}),"\n",(0,a.jsx)(n.h3,{id:"41-overview",children:"4.1 Overview"}),"\n",(0,a.jsx)(n.p,{children:"This chapter provides the information of the structure of the BAMM\nModel. It provides information about the properties, entities,\ncharacteristics and units of the data model. Each data model references\na concrete Aspect Model."}),"\n",(0,a.jsx)(n.p,{children:"The Meta Model is specified using the Resource Description Format (RDF)\nand the Terse RDF Triple Language syntax (TTL), together with validation\nrules in the Shapes Constraint Language (SHACL). Aspect models are\nlikewise specified in RDF/Turtle, following BAMM semantics. The\ngraphical representation of the MarketplaceOffer data model can be found\nin the annex."}),"\n",(0,a.jsx)(n.p,{children:"The graphical representation of the battery pass data model can be found\nin the annex."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"MarketplaceOffer"}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Description"}),(0,a.jsx)(n.td,{children:"Description of all   needed information to place a marketplace offer on the marketplace."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Name"}),(0,a.jsx)(n.td,{children:"MarketplaceOffer"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"42-properties--entities",children:"4.2 Properties & Entities"}),"\n",(0,a.jsx)(n.p,{children:"The corresponding TTL-file for the aspect model from chapter 2.1 can be accessed via the following link:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.market_place_offer/1.2.0/MarketplaceOffer.ttl",children:"Semantic Hub - Marketplaceoffer"})}),"\n",(0,a.jsx)(n.p,{children:"In addition to the technical representation of the semantic model through the linked TTL-file, the file can also be imported into the official BAMM Aspect Model Editor for further use. For example, the actual aspect model can be visually displayed or an HTML documentation can be generated, encompassing all properties and entities in a table-like form."}),"\n",(0,a.jsxs)(n.p,{children:["The BAMM Aspect Model Editor is open source and can be downloaded via the official website: ",(0,a.jsx)(n.a,{href:"https://www.bosch-connected-industry.com/de/de/downloads/aspect-model-editor",children:"BAMM Aspect Model Editor Landing Page"})]}),"\n",(0,a.jsxs)(n.p,{children:["The official documentation and installation instructions can be accessed via the open manufacturing platform: ",(0,a.jsx)(n.a,{href:"https://openmanufacturingplatform.github.io/sds-documentation/ame-guide/4.0.2/introduction.html",children:"BAMM Documentation"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"5-normative-references",children:"5. Normative References"}),"\n",(0,a.jsx)(n.p,{children:"The following references refer to related Catena-X reference\nimplementations and external standards. This is intended to place the\npresent reference implementation in the context of existing references."}),"\n",(0,a.jsx)(n.h3,{id:"51-catena-x-reference-implementations",children:"5.1 Catena-X Reference implementations"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"CATENA-X REFERENCE   IMPLEMENTATIONS"}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"SC-009"}),(0,a.jsx)(n.td,{children:"Catena-X standardized models"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"CX - 0003"}),(0,a.jsx)(n.td,{children:"BAMM   Aspect Meta Model"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"CX - 0010"}),(0,a.jsx)(n.td,{children:"Business Partner Number"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"SC-002"}),(0,a.jsx)(n.td,{children:"Catena-X   Eclipse Dataspace Connector (EDC)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"SC-012"}),(0,a.jsx)(n.td,{children:"Semantic Hub"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"CX - 0034"}),(0,a.jsx)(n.td,{children:"Data   Model BatteryPass"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"52-common-standards",children:"5.2 Common Standards"}),"\n",(0,a.jsxs)(n.p,{children:["IDSA: International Data Spaces Association",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})]}),"\n",(0,a.jsx)(n.h2,{id:"glossary",children:"Glossary"}),"\n",(0,a.jsx)(n.h3,{id:"terms--definitions",children:"Terms & Definitions"}),"\n",(0,a.jsx)(n.p,{children:"R-strategy: R-strategies serve to change the companies\u2019 business mod-els in the context of the circular economy"}),"\n",(0,a.jsx)(n.h3,{id:"abbreviations",children:"Abbreviations"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Abbreviations"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"EoL"}),(0,a.jsx)(n.td,{children:"End of life"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"OEM"}),(0,a.jsx)(n.td,{children:"Original   Equipment Manufacturer"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"BOM"}),(0,a.jsx)(n.td,{children:"Bill of material"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"EDC"}),(0,a.jsx)(n.td,{children:"Eclipse   Dataspace Connector"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IDSA"}),(0,a.jsx)(n.td,{children:"International Data Spaces Association"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,a.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Data Model",src:t(99531).A+"",width:"7327",height:"1626"})}),"\n","\n",(0,a.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,a.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{id:"user-content-fn-3",children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-models",children:"https://github.com/eclipse-tractusx/sldt-semantic-models"})," ",(0,a.jsx)(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{id:"user-content-fn-4",children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://openmanufacturingplatform.github.io/",children:"https://openmanufacturingplatform.github.io/"})," ",(0,a.jsx)(n.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{id:"user-content-fn-5",children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://internationaldataspaces.org/we/the-association/",children:"https://internationaldataspaces.org/we/the-association/"})," ",(0,a.jsx)(n.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},99531:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/CX-0035_DataModel-c4b27b4bf4263d03e1c774c85305584e.svg"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);