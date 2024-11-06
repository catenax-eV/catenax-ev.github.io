"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[98822],{85388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var a=t(74848),i=t(28453);const s={},r="CX-0045 Aspect Model Data Chain Template v1.3.0",l={id:"standards/CX-0045-AspectModelDataChainTemplate/CX-0045-AspectModelDataChainTemplate",title:"CX-0045 Aspect Model Data Chain Template v1.3.0",description:"ABSTRACT",source:"@site/versioned_docs/version-Jupiter/standards/CX-0045-AspectModelDataChainTemplate/CX-0045-AspectModelDataChainTemplate.md",sourceDirName:"standards/CX-0045-AspectModelDataChainTemplate",slug:"/standards/CX-0045-AspectModelDataChainTemplate/",permalink:"/docs/standards/CX-0045-AspectModelDataChainTemplate/",draft:!1,unlisted:!1,tags:[],version:"Jupiter",frontMatter:{},sidebar:"sidebar_standards",previous:{title:"CX-0044 ECLASS v1.0.2",permalink:"/docs/standards/CX-0044-ECLASS/"},next:{title:"CX-0049 DID Document v2.0.0",permalink:"/docs/standards/CX-0049-DIDDocumentSchema/"}},c={},o=[{value:"ABSTRACT",id:"abstract",level:2},{value:"FOR WHOM IS THE STANDARD DESIGNED",id:"for-whom-is-the-standard-designed",level:2},{value:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD",id:"comparison-with-the-previous-version-of-the-standard",level:2},{value:"1 INTRODUCTION",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 CONTEXT AND ARCHITECTURE FIT",id:"12-context-and-architecture-fit",level:3},{value:"1.3 CONFORMANCE AND PROOF OF CONFORMITY",id:"13-conformance-and-proof-of-conformity",level:3},{value:"1.4 EXAMPLES",id:"14-examples",level:3},{value:"1.5 TERMINOLOGY",id:"15-terminology",level:3},{value:"2 DATA CHAIN ASPECT TEMPLATE",id:"2-data-chain-aspect-template",level:2},{value:"2.1 FORMATS OF TEMPLATE",id:"21-formats-of-template",level:3},{value:"2.1.1 JSON Schema",id:"211-json-schema",level:4},{value:"2.1.1.1 JSON schema for relationship types of children",id:"2111-json-schema-for-relationship-types-of-children",level:5},{value:"2.1.1.2 JSON Schema for Relationship types of parent",id:"2112-json-schema-for-relationship-types-of-parent",level:5},{value:"3 REFERENCES",id:"3-references",level:2},{value:"3.1 NORMATIVE REFERENCES",id:"31-normative-references",level:3},{value:"3.2 NON-NORMATIVE REFERENCES",id:"32-non-normative-references",level:3},{value:"3.3 REFERENCE IMPLEMENTATIONS",id:"33-reference-implementations",level:3},{value:"ANNEXES",id:"annexes",level:2},{value:"FIGURES",id:"figures",level:3},{value:"TABLES",id:"tables",level:3},{value:"Legal",id:"legal",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"cx-0045-aspect-model-data-chain-template-v130",children:"CX-0045 Aspect Model Data Chain Template v1.3.0"})}),"\n",(0,a.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,a.jsx)(n.p,{children:"This component of the capability Cross Company Data Chain Management is a data model, so that the\nItem Relationship Service API, and other applications can work not only on existing semantic models,\nbut also, to new defined data chain relevant aspect models which fit to the template.\nWith this model template in place, interoperability is being provided, because participants defining\ntheir connection between digital twins according to that template, will be able to access connected data.\nA data chain is a chain of linked data. The minimal set of information necessary to build this are\ntwo objects and one link between those objects. Objects in Catena-X are called Asset Administration\nShell (AAS) or digital twins and linked digital twins are data chains. This template describes the\nminimal information of a link between two digital twins, so the most flexibility is given for\nfurther use-cases to build use-case specific data chains."}),"\n",(0,a.jsx)(n.h2,{id:"for-whom-is-the-standard-designed",children:"FOR WHOM IS THE STANDARD DESIGNED"}),"\n",(0,a.jsx)(n.h2,{id:"comparison-with-the-previous-version-of-the-standard",children:"COMPARISON WITH THE PREVIOUS VERSION OF THE STANDARD"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Relevant only for existing standards. At the new standard, please delete"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"1-introduction",children:"1 INTRODUCTION"}),"\n",(0,a.jsx)(n.p,{children:"This component is used to standardize the way in which an aspect model of a digital twin needs to be\nmodelled, so that services and products which consume linked data can work and that an\ninteroperability on data chain level can exist. It is a minimal set of conditions to be applied to\nsuch aspect models that model a connection between two digital twins.\nThis minimal set of conditions shall guide developer of new services and semantic models in the\nprocess of creating new solutions for Catena-X. It is an easy extendable template to fit the\nuse-case needs."}),"\n",(0,a.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"List for which roles the standard is relevant."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Core Service Provider"}),"\n",(0,a.jsx)(n.li,{children:"Data Provider"}),"\n",(0,a.jsx)(n.li,{children:"Business Application Provider"}),"\n",(0,a.jsx)(n.li,{children:"Enablement Service Provider"}),"\n",(0,a.jsx)(n.li,{children:"Consulting Provider"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This standard is only applicable when a use-case has the need to extend existing Aspect Models\nwith models connecting several Digital Twins. When a use-case has the need to extend the\nexisting Aspect Models with models which connect several Digital Twins with each other. Then this\nstandard applies.\nA so-called Data Chain exists when multiple Digital Twins are semantically connected to each other.\nFor example, a Bill of Materials (BoM) Structure, where each part results in a separate Digital Twin.\nTo have the same structure on how Data Chains can be built this template applies. This provides a\nlean structure that can be extended with Use-Case specific information and attributes."}),"\n",(0,a.jsx)(n.p,{children:"This standard is only to be applied in the creation process of new aspect models, which connects\ndigital twins in the Catena-X Network."}),"\n",(0,a.jsx)(n.h3,{id:"12-context-and-architecture-fit",children:"1.2 CONTEXT AND ARCHITECTURE FIT"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The following dependencies and preconditions exist. This aspect model template is written in\nSAMM 2.0 as a modeling language, which is an industry standard from the ",(0,a.jsx)(n.a,{href:"https://eclipse-esmf.github.io/esmf-documentation/index.html",children:"Eclipse Semantic Modelling Framework"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["SAMM is used to model Asset Administration Shell submodels, which are attached to digital twins in\nthe form of an Asset Administration Shell (AAS). All submodels in Catena-X are managed in the\nsemantic hub ",(0,a.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-semantic-hub",children:"https://github.com/eclipse-tractusx/sldt-semantic-hub"}),". A data model is requested and exchanged via Catena-X using an Eclipse Dataspace\nConnector (see chapter 3.1 NORMATIVE REFERENCES), which is a separate Catena-X standard. An EDC is discovered by the EDC Discovery Flow (see chapter 3.1 NORMATIVE REFERENCES)."]}),"\n",(0,a.jsx)(n.p,{children:"The following preconditions must be met that a developer is bound to use this template as reference:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The to be developed semantic model describes a data chain (e.g., linking one digital twin with another)"}),"\n",(0,a.jsx)(n.li,{children:"The to be developed semantic model is used or meant to be accessed by multiple use-cases."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"13-conformance-and-proof-of-conformity",children:"1.3 CONFORMANCE AND PROOF OF CONFORMITY"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"All participants and their solutions will need to prove, that they are conform\nwith the Catena-X standards. To validate that the standards are applied\ncorrectly, Catena-X employs Conformity Assessment Bodies (CABs)."}),"\n",(0,a.jsx)(n.p,{children:"To prove conformity with the Data Chain Template, use the schema (see Chapter 2.1.1 JSON Schema) and check if the\nnecessary structure is implicitly in the Aspect to prove. What is necessary:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The Object structure ",(0,a.jsx)(n.strong,{children:"MUST"})," match the template, but ",(0,a.jsx)(n.strong,{children:"MAY"})," contain more attributes"]}),"\n",(0,a.jsxs)(n.li,{children:["see chapter ",(0,a.jsx)(n.a,{href:"#2-data-chain-aspect-template",children:"2 DATA CHAIN ASPECT TEMPLATE"})," for more conformity assessment criteria"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"14-examples",children:"1.4 EXAMPLES"}),"\n",(0,a.jsx)(n.p,{children:"The JSON schema describes the schema of the template. The following examples show\nminimal setups of this template."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "catenaXId": "urn:uuid:055c1128-0375-47c8-98de-7cf802c3241d",\n    "childItems": [\n        {\n            "catenaXId": "urn:uuid:7BeA9fAE-A1ca-D164-3BDF-0E5bac5E5b7d",\n            "businessPartner" : "BPNL50096894aXYZ"\n        }\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"or"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "catenaXId": "urn:uuid:055c1128-0375-47c8-98de-7cf802c3241d",\n    "parentItems": [\n        {\n            "catenaXId": "urn:uuid:7BeA9fAE-A1ca-D164-3BDF-0E5bac5E5b7d",\n            "businessPartner" : "BPNL50096894aXYZ"\n        }\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:'This template describes the minimal necessary set of attributes for a valid data chain in Catena-X.\nA digital twin with a catenaXId and at least one linked \u201cchild\u201d catenaXId or "parent" catenaXId is necessary to connect two individual digital\ntwins, which can be provided by different companies. The use-cases have the possibility to\nextend this to their behalf and publish it as a separate Aspect Model.'}),"\n",(0,a.jsx)(n.p,{children:"The partentItems and the childItems contain objects with at least a catenaXId to identify the digital twin and a businessPartner to identify where to find the digital twin."}),"\n",(0,a.jsx)(n.h3,{id:"15-terminology",children:"1.5 TERMINOLOGY"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Aspect Meta Model (SAMM): A Meta description model to describe AAS"}),"\n",(0,a.jsx)(n.p,{children:"Business Partner Number (BPN): A BPN is the unique identifier of a partner within Catena-x."}),"\n",(0,a.jsx)(n.p,{children:"Additional terminology used in this standard can be looked up in the glossary on the association homepage."}),"\n",(0,a.jsx)(n.h2,{id:"2-data-chain-aspect-template",children:"2 DATA CHAIN ASPECT TEMPLATE"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is normative"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The purpose of this data model is to enable newly defined data chain relevant aspect models to\noperate with the Item Relationship Service API, which is described in a separate ",(0,a.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/item-relationship-service",children:"reference implementation"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Classical naming convention:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["the object ",(0,a.jsx)(n.strong,{children:"MUST"})," be a digital twin / AAS (Asset Administration Shell)"]}),"\n",(0,a.jsxs)(n.li,{children:["the object ",(0,a.jsx)(n.strong,{children:"MUST"})," be identified by catenaXId"]}),"\n",(0,a.jsxs)(n.li,{children:["the array of \u201cchild\u201d objects ",(0,a.jsx)(n.strong,{children:"MUST"})," be identified by childItems"]}),"\n",(0,a.jsxs)(n.li,{children:["the array of \u201cchild\u201d objects ",(0,a.jsx)(n.strong,{children:"MUST"})," contain at least one element"]}),"\n",(0,a.jsxs)(n.li,{children:["the item of a child item array element ",(0,a.jsx)(n.strong,{children:"MUST"})," be identified by catenaXId and a businessPartner (BPN)"]}),"\n",(0,a.jsxs)(n.li,{children:['the array of "parent" objects ',(0,a.jsx)(n.strong,{children:"MUST"})," be identified by parentItems"]}),"\n",(0,a.jsxs)(n.li,{children:['the array of "parent" objects ',(0,a.jsx)(n.strong,{children:"MUST"})," contain at least one element"]}),"\n",(0,a.jsxs)(n.li,{children:["the item of a parent item array element ",(0,a.jsx)(n.strong,{children:"MUST"})," be identified by catenaXId and a businessPartner (BPN)"]}),"\n",(0,a.jsxs)(n.li,{children:["the parameter businessPartner ",(0,a.jsx)(n.strong,{children:"MUST"})," be a BPNL"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This template ",(0,a.jsx)(n.strong,{children:"MAY"})," be extended with use-case specific attributes. The template ",(0,a.jsx)(n.strong,{children:"MUST"})," be\npublished as a new aspect model."]}),"\n",(0,a.jsxs)(n.p,{children:["Changes in the minimal aspect model regarding the relationship of a data chain ",(0,a.jsx)(n.strong,{children:"RECOMMENDED"})," to be\nalways backward compatible, so that existing data chains do not break."]}),"\n",(0,a.jsx)(n.h3,{id:"21-formats-of-template",children:"2.1 FORMATS OF TEMPLATE"}),"\n",(0,a.jsx)(n.h4,{id:"211-json-schema",children:"2.1.1 JSON Schema"}),"\n",(0,a.jsx)(n.h5,{id:"2111-json-schema-for-relationship-types-of-children",children:"2.1.1.1 JSON schema for relationship types of children"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "$schema": "https://json-schema.org/draft-04/schema",\n    "type": "object",\n    "components": {\n        "schemas": {\n            "urn_samm_io.catenax.relationship_template_0.0.0_CatenaXIdTraitCharacteristic": {\n                "type": "string",\n                "pattern": "(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"\n            },\n          "urn_samm_io.catenax.relationship_template_0.0.0_BpnTrait": {\n            "type" : "string",\n            "pattern" : "^(BPNL)([0-9]{8})([a-zA-Z0-9]{4})$"\n          },\n            "urn_samm_io.catenax.relationship_template_0.0.0_ChildData": {\n                "type": "object",\n                "properties": {\n                    "catenaXId": {\n                        "$ref": "#/components/schemas/urn_samm_io.catenax.relationship_template_0.0.0_CatenaXIdTraitCharacteristic"\n                    },\n                    "businessPartner": {\n                        "$ref": "#/components/schemas/urn_samm_io.catenax.relationship_template_0.0.0_BpnTrait"\n                    }\n                },\n                "required": [\n                    "catenaXId",\n                    "businessPartner"\n                ]\n            },\n            "urn_samm_io.catenax.relationship_template_0.0.0_SetOfChildPartsCharacteristic": {\n                "type": "array",\n                "items": {\n                    "$ref": "#/components/schemas/urn_samm_io.catenax.relationship_template_0.0.0_ChildData"\n                },\n                "uniqueItems": true\n            }\n        }\n    },\n    "properties": {\n        "catenaXId": {\n            "$ref": "#/components/schemas/urn_samm_io.catenax.relationship_template_0.0.0_CatenaXIdTraitCharacteristic"\n        },\n        "childItems": {\n            "$ref": "#/components/schemas/urn_samm_io.catenax.relationship_template_0.0.0_SetOfChildPartsCharacteristic"\n        }\n    },\n    "required": [\n        "catenaXId",\n        "childItems"\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h5,{id:"2112-json-schema-for-relationship-types-of-parent",children:"2.1.1.2 JSON Schema for Relationship types of parent"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "$schema": "https://json-schema.org/draft-04/schema",\n    "type": "object",\n    "components": {\n        "schemas": {\n            "urn_samm_io.catenax.relationship_template_0.0.0_CatenaXIdTraitCharacteristic": {\n                "type": "string",\n                "pattern": "(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"\n            },\n            "urn_samm_io.catenax.relationship_template_0.0.0_BpnTrait": {\n                "type" : "string",\n                "pattern" : "^(BPNL)([0-9]{8})([a-zA-Z0-9]{4})$"\n            },\n            "urn_samm_io.catenax.relationship_template_0.0.0_ParentData": {\n                "type": "object",\n                "properties": {\n                    "catenaXId": {\n                        "$ref": "#/components/schemas/urn_samm_io.catenax.relationship_template_0.0.0_CatenaXIdTraitCharacteristic"\n                    },\n                    "businessPartner": {\n                        "$ref": "#/components/schemas/urn_samm_io.catenax.relationship_template_0.0.0_BpnTrait"\n                    }\n\n                },\n                "required": [\n                    "catenaXId",\n                    "businessPartner"\n                ]\n            },\n            "urn_samm_io.catenax.relationship_template_0.0.0_SetOfParentPartsCharacteristic": {\n                "type": "array",\n                "items": {\n                    "$ref": "#/components/schemas/urn_samm_io.catenax.relationship_template_0.0.0_ParentData"\n                },\n                "uniqueItems": true\n            }\n        }\n    },\n    "properties": {\n        "catenaXId": {\n            "$ref": "#/components/schemas/urn_samm_io.catenax.relationship_template_0.0.0_CatenaXIdTraitCharacteristic"\n        },\n        "parentItems": {\n            "$ref": "#/components/schemas/urn_samm_io.catenax.relationship_template_0.0.0_SetOfParentPartsCharacteristic"\n        }\n    },\n    "required": [\n        "catenaXId",\n        "parentItems"\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"3-references",children:"3 REFERENCES"}),"\n",(0,a.jsx)(n.h3,{id:"31-normative-references",children:"3.1 NORMATIVE REFERENCES"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u201cDigital Twins in Catena-X v2.2.0\u201d [CX-0002]"}),"\n",(0,a.jsx)(n.li,{children:"\u201cSAMM Aspect Meta Model v1.1.0\u201d [CX-0003]"}),"\n",(0,a.jsx)(n.li,{children:"\u201cBusiness Partner Number v2.0.0\u201d [CX-0010]"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"32-non-normative-references",children:"3.2 NON-NORMATIVE REFERENCES"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u201cEDC Discovery API v1.0.2\u201d [CX-0001]"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Aspect models built upon this template:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'\u201cIndustryCorePartType v2.0.0" [CX-0126]'}),"\n",(0,a.jsx)(n.li,{children:'"IndustryCorePartInstance v2.0.0" [CX-0127]'}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"33-reference-implementations",children:"3.3 REFERENCE IMPLEMENTATIONS"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"not applicable"}),"\n",(0,a.jsx)(n.h2,{id:"annexes",children:"ANNEXES"}),"\n",(0,a.jsx)(n.h3,{id:"figures",children:"FIGURES"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"not applicable"}),"\n",(0,a.jsx)(n.h3,{id:"tables",children:"TABLES"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"not applicable"}),"\n",(0,a.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,a.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,a.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var a=t(96540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);