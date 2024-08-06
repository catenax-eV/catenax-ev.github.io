"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[9291],{17755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(74848),s=t(28453);const o={tags:["CAT/Portal","CAT/Core Service Provider","CAT/Sandbox Services (Beta)"]},a="CX-0015 IAM & Access Control Paradigm for Users and Clients v1.0.1",r={id:"standards/CX-0015-IAMandAccessControlParadigmForUsersAndClients/CX-0015-IAMandAccessControlParadigmForUsersAndClients",title:"CX-0015 IAM & Access Control Paradigm for Users and Clients v1.0.1",description:"This standard is not certifiable yet",source:"@site/docs/standards/CX-0015-IAMandAccessControlParadigmForUsersAndClients/CX-0015-IAMandAccessControlParadigmForUsersAndClients.md",sourceDirName:"standards/CX-0015-IAMandAccessControlParadigmForUsersAndClients",slug:"/standards/CX-0015-IAMandAccessControlParadigmForUsersAndClients/",permalink:"/docs/next/standards/CX-0015-IAMandAccessControlParadigmForUsersAndClients/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"CAT/Portal",permalink:"/docs/next/tags/cat-portal"},{inline:!0,label:"CAT/Core Service Provider",permalink:"/docs/next/tags/cat-core-service-provider"},{inline:!0,label:"CAT/Sandbox Services (Beta)",permalink:"/docs/next/tags/cat-sandbox-services-beta"}],version:"current",frontMatter:{tags:["CAT/Portal","CAT/Core Service Provider","CAT/Sandbox Services (Beta)"]},sidebar:"sidebar_standards",previous:{title:"CX-0014 Employees and Technical Users v1.0.1",permalink:"/docs/next/standards/CX-0014-EmployeesAndTechnicalUsers/"},next:{title:"CX-0018 Dataspace Connectivity v.3.1.0",permalink:"/docs/next/standards/CX-0018-DataspaceConnectivity/"}},c={},l=[{value:"ABSTRACT",id:"abstract",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 AUDIENCE &amp; SCOPE",id:"11-audience--scope",level:3},{value:"1.2 Context",id:"12-context",level:3},{value:"1.3 Conformance",id:"13-conformance",level:3},{value:"1.4 Proof of Conformity",id:"14-proof-of-conformity",level:3},{value:"1.5 Terminology",id:"15-terminology",level:3},{value:"2. OpenID Connect",id:"2-openid-connect",level:2},{value:"ATTRIBUTE-BASED ACCESS CONTROL (ABAC)",id:"attribute-based-access-control-abac",level:2},{value:"3. References",id:"3-references",level:2},{value:"Legal",id:"legal",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cx-0015-iam--access-control-paradigm-for-users-and-clients-v101",children:"CX-0015 IAM & Access Control Paradigm for Users and Clients v1.0.1"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This standard is not certifiable yet"})}),"\n",(0,i.jsx)(n.h2,{id:"abstract",children:"ABSTRACT"}),"\n",(0,i.jsx)(n.p,{children:"The purpose of this standardization is to establish a decentralized and dynamic IAM for the interaction between a providing and a consuming company based on ABAC."}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsx)(n.p,{children:"As Identity and Access Management (IAM) is a mandatory basic infrastructure for every IT-System Catena-X will offer an implementation of an IAM solution of some sort for e.g., SMEs and rights/roles management within the CX network. The identity of any entity and actor (company, user, or technical client/connector) is the summary of the describing attributes (e.g., company name, address, tax number...). Catena-X is intended to be a network-of-networks. Consequently, there cannot be a single Identity Provider (IdP) for the company identities nested in one network. The company must be identifiable in an independent way and interoperable in all networks. The identity of users (employees of a company) and technical users (e.g., EDC) in Catena-X, must be bound to the company they are acting on behalf of."}),"\n",(0,i.jsx)(n.p,{children:"To realize this, a decentralized and dynamic IAM must be established. Here, for the interaction between a providing and a consuming company, the providing company must be able to grant access to a user of a consuming company. To realize this, a roles-and-rights concept must be realized that allows a dynamic authorization assignment to the user of a consuming company in a consistent way. To prevent a role explosion and ensure future scalability with the rising complexity, the dynamic access control will be based on consistent user attributes assigned to the user by the consuming company and processed by the providing company implemented by OpenID Connect and an attribute-based access control (ABAC) mechanism."}),"\n",(0,i.jsx)(n.h3,{id:"11-audience--scope",children:"1.1 AUDIENCE & SCOPE"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"List for which roles the standard is relevant:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Data Provider / Consumer"}),"\n",(0,i.jsx)(n.li,{children:"Business Application Provider"}),"\n",(0,i.jsx)(n.li,{children:"Onboarding Service Provider"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"12-context",children:"1.2 Context"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Standardization for the establishment of a decentralized and dynamic IAM for the\ninteraction between any participant based on ABAC."}),"\n",(0,i.jsx)(n.h3,{id:"13-conformance",children:"1.3 Conformance"}),"\n",(0,i.jsx)(n.p,{children:"As well as sections marked as non-normative, all authoring guidelines,\ndiagrams, examples, and notes in this specification are non-normative.\nEverything else in this specification is normative."}),"\n",(0,i.jsxs)(n.p,{children:["The key words MAY, MUST, MUST NOT, OPTIONAL, RECOMMENDED, REQUIRED,\nSHOULD and SHOULD NOT in this document are to be interpreted as\ndescribed in\xa0",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/bcp14",children:"BCP\n14"}),"\xa0[",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc2119",children:"RFC2119"}),"]\n[",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/did-core/#bib-rfc8174",children:"RFC8174"}),"] when, and\nonly when, they appear in all capitals, as shown here."]}),"\n",(0,i.jsx)(n.h3,{id:"14-proof-of-conformity",children:"1.4 Proof of Conformity"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All participants and their solutions will need to prove they conform with the\nCatena-X standards. To validate that the standards are applied correctly, Catena-\nX employs Conformity Assessment Bodies (CABs)."}),"\n",(0,i.jsx)(n.p,{children:"A test bed must be set up, to prove the correctness of the data provisioning. A\ngeneric test set of data must get processed, to prove the expected results."}),"\n",(0,i.jsx)(n.p,{children:"All Business Application Provider SHOULD provide an identity and access\nmanagement for the users of the Data Consumers and Service Customers that"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["SHOULD NOT have a static Access Management like","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An Access Control List (ACL)"}),"\n",(0,i.jsx)(n.li,{children:"A Role Based Access Control (RBAC) method"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"SHOULD have a dynamic access management based on policies rules and attribute repositories"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If a dynamic access management is not provided then it SHOULD be either"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"An Access Control List (ACL)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A Role Based Access Control (RBAC) method\nAn application provided by a Business Application Provider SHOULD have an\nimplementation of the following four building blocks"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Policy Administration Point"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Policy Decision Point"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Policy Information Point"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Policy Enforcement Point"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These building blocks can be a single dedicated function in the application.\nEvery Application provided by a Business Application Provider MUST prevent\nunauthorized access to the Application. Especially valuable goods must be\nprotected from unauthorized access by a 3rd party."}),"\n",(0,i.jsx)(n.p,{children:"To proof that these the access management compo, please collect the following\ndocumentation so that conformance with the standard can be validated:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Arch42 Document explaining the architecture of the implemented solution"}),"\n",(0,i.jsx)(n.li,{children:"openAPI specification of the APIs of the implemented solution."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Hand in this documentation to the conformity assessment body.\n",(0,i.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/item-relationship-service",children:"https://github.com/eclipse-tractusx/item-relationship-service"})]}),"\n",(0,i.jsx)(n.h3,{id:"15-terminology",children:"1.5 Terminology"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This section is non-normative"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Not applicable."}),"\n",(0,i.jsx)(n.h2,{id:"2-openid-connect",children:"2. OpenID Connect"}),"\n",(0,i.jsx)(n.p,{children:"Apps define their rights-and-roles concept independently of Catena-X. The roles (not permissions) that the app uses are created/registered in Catena-X as part of the integration into the CX portal. As soon as an end-user subscribes to an app, the corresponding roles can be assigned to him directly in the portal. Furthermore, member companies shall be able to federate their user base into the CX Network, so that the end-user has a seamless experience from the company network to the business app. Permission federation from member company IdPs into the CX IdP is currently out of\nscope."}),"\n",(0,i.jsx)(n.p,{children:"The currently only used authentication protocol is OpenID Connect (OIDC). Here, OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol. It allows clients to verify the identity of the end-user based on the authentication performed by an authorization server, as well as to obtain basic profile information about the end-user in an interoperable and REST-like manner. Its flow of actions is depicted in Fig. 1:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"OpenID Connect Flow of Actions",src:t(68456).A+"",width:"1183",height:"762"}),"\n",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"FIGURE 1: OpenID Connect Flow of Actions"})})]}),"\n",(0,i.jsx)(n.p,{children:"The corresponding authentication flow of users logging into Catena-X is then as follows:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Authentication Flow",src:t(56460).A+"",width:"1388",height:"603"}),"\n",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"FIGURE 2: Authentication Flow \u2013 User Login to Catena-X"})})]}),"\n",(0,i.jsx)(n.p,{children:"In general, Keycloak is used as the single-sign-on solution for the OIDC implementation. Keycloak is an Open-Source IAM solution, this means that it is an authentication and authorization Java-based server. Keycloak is developed by Red Hat and can be deployed to OpenShift using its official Docker image. Red Hat is a trusted entity for IT Security, so this project is also trustable. In terms of features, Keycloak provides a login page that can be customized to match the app theme. Single-sign-on allows the user to log in once to access all the apps. Moreover, Keycloak follows standard protocols such as OAuth 2.0, OIDC 1.0, SAML 2.0 and supports multi-factor authentication as well as social logins, such as Google, Facebook, and Twitter. It provides centralized user management, which creates a single point of truth to set the permissions of users and roles and is also supporting directory services."}),"\n",(0,i.jsx)(n.p,{children:"The main structure in Keycloak is called Realm. It is a container that stores all the other elements. Clients are applications that are to be secured, while Identity-Providers (IdP) give the possibility to log in via an external IdP. In addition, user federation uses the Keycloak login page with an external user store and themes modify Keycloak\u2019s login page to match the corporate solution. Moreover, Keycloak's login page uses Angular and users can be assigned to roles per Realm or per client."}),"\n",(0,i.jsx)(n.p,{children:"Different IdPs are available for Keycloak, whereas OIDC is selected for Catena-X as a connection to WebEAM.Next could be secured by using OIDC. With it, the WebEAM.Next login could authenticate the user and generate its token."}),"\n",(0,i.jsx)(n.p,{children:"Furthermore, Quarkus has an extension to use Keycloak to manage OIDC. The extension will map the URIs of the protected resources of Keycloak and evaluate the permissions, accordingly, granting or denying access depending on the permissions that will be conferred by Keycloak. Following the official Quarkus/Keycloak guide, the Quarkus properties set the details of the connection between the two systems."}),"\n",(0,i.jsx)(n.p,{children:"Essentially, Keycloak authenticates the user at the first server the access with a username and password takes place. After the authentication, the user receives a Keycloak token that is valid for only one session. The token is used to identify the user on other servers in the same Domain Name System where the servers are configured to use Keycloak. Hence, the user enters a username and password only once, while there is also only one access to the user directory to verify the identity of that user."}),"\n",(0,i.jsx)(n.p,{children:"To setup KeyCloak the following steps must be followed:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install Keycloak"}),"\n",(0,i.jsx)(n.li,{children:"Load balancer / Cluster Concept"}),"\n",(0,i.jsx)(n.li,{children:"Configure Master"}),"\n",(0,i.jsx)(n.li,{children:"Create Realms"}),"\n",(0,i.jsx)(n.li,{children:"Create Clients"}),"\n",(0,i.jsx)(n.li,{children:"Define one or more Roles for the client. The roles correspond to EBICS Client permissions that are used by EBICS Client in access control. Note: In this version of EBICS Client, there is one unique, global-access role."}),"\n",(0,i.jsx)(n.li,{children:"Optionally, you can create Groups, which are logical groupings or sets of permissions."}),"\n",(0,i.jsx)(n.li,{children:"Create Users. These are the users who will be able to access the EBICS Client application."}),"\n",(0,i.jsx)(n.li,{children:"Assign roles to the users."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Overall, the final interaction between Keycloak and CX web applications looks as follows:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"OpenID Connect Flow of Actions",src:t(37149).A+"",width:"1187",height:"1119"}),"\n",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"FIGURE 3: INTERACTION BETWEEN KEYCLOAK AND C-X WEB APPLICATIONS"})})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Note: (Schatten-) User: The \u201eSchatten-User\u201c is defined as an empty User frame holding limited information. The actual user is managed in the respective Identity Provider. The Schatten-User are always federated identities."})}),"\n",(0,i.jsxs)(n.p,{children:["Publicly available developer documentation can be found on ",(0,i.jsx)(n.a,{href:"https://www.keycloak.org/",children:"https://www.keycloak.org/"})," and GitHub (",(0,i.jsx)(n.a,{href:"https://github.com/keycloak/keycloak",children:"https://github.com/keycloak/keycloak"}),"). Moreover, there is also documentation for OpenID\nConnect available: ",(0,i.jsx)(n.a,{href:"https://openid.net/connect/",children:"https://openid.net/connect/"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"attribute-based-access-control-abac",children:"ATTRIBUTE-BASED ACCESS CONTROL (ABAC)"}),"\n",(0,i.jsx)(n.p,{children:"While role-based access control (RBAC) determines access based on a user's organizational role, ABAC uses user and object attributes to do this. The flexible use and combination of variables increase the flexibility and accuracy of authorization assignment and is used for the purpose of Catena-X."}),"\n",(0,i.jsx)(n.p,{children:"ABAC in Catena-X is realized through eXtensible Access Control Markup Language (XACML)\ntherefore five XACML roles are defined first, as follows:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Role-Abbr."}),(0,i.jsx)(n.th,{children:"Role-Term"}),(0,i.jsx)(n.th,{children:"Role Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"PAP"}),(0,i.jsx)(n.td,{children:"Policy Administration Point"}),(0,i.jsx)(n.td,{children:"Point which manages access authorization policies"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"PDP"}),(0,i.jsx)(n.td,{children:"Policy Decision Point"}),(0,i.jsx)(n.td,{children:"Point which evaluates access requests against authorization policies before issuing access decisions"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"PEP"}),(0,i.jsx)(n.td,{children:"Policy Enforcement Point"}),(0,i.jsx)(n.td,{children:"Point which intercepts user\u2019s access request to a resource, makes a decision request to the PDP to obtain the access decision (i.e., access to the resource is approved or rejected), and acts on the received decision"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"PIP"}),(0,i.jsx)(n.td,{children:"Policy Information Point"}),(0,i.jsx)(n.td,{children:"The system entity that acts as a source of attribute values (i.e., a resource, subject, environment)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"PRP"}),(0,i.jsx)(n.td,{children:"Policy Retrieval Point"}),(0,i.jsx)(n.td,{children:"Point where the XACML access authorization policies are stored, typically a database or the filesystem."})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Given the XACML roles, the corresponding flow of actions is depicted in Fig. 7 along with their explanations."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Flow of Actions",src:t(51711).A+"",width:"1129",height:"873"}),"\n",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"FIGURE 4: FLOW OF ACTIONS (XACML)"})})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"A user sends a request which is intercepted by the Policy Enforcement Point (PEP)"}),"\n",(0,i.jsx)(n.li,{children:"The PEP converts the request into an XACML authorization request"}),"\n",(0,i.jsx)(n.li,{children:"The PEP forwards the authorization request to the Policy Decision Point (PDP)"}),"\n",(0,i.jsx)(n.li,{children:"The PDP evaluates the authorization request against the policies it is configured with."}),"\n",(0,i.jsx)(n.li,{children:"The policies are acquired via the Policy Retrieval Point (PRP) and managed by the Policy\nAdministration Point (PAP)."}),"\n",(0,i.jsx)(n.li,{children:"If needed it also retrieves attribute values from underlying Policy Information Points (PIP)."}),"\n",(0,i.jsx)(n.li,{children:"The PDP reaches a decision (Permit / Deny / NotApplicable / Indeterminate) and returns it to the PEP"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The presented approach is realized in Catena-X as follows:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"OpenID Connect Flow of Actions",src:t(58651).A+"",width:"1847",height:"658"}),"\n",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"FIGURE 5: XACML REALIZATION IN CATENA-X)"})})]}),"\n",(0,i.jsx)(n.p,{children:"Further Information about XACML in the context of international data spaces can be found in the position paper by the IDSA:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://internationaldataspaces.org/wp-content/uploads/dlm_uploads/IDSA-Position-Paper-Usage-Control-in-the-IDS-V3..pdf",children:"https://internationaldataspaces.org/wp-content/uploads/dlm_uploads/IDSA-Position-Paper-Usage-Control-in-the-IDS-V3..pdf"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In addition, GitHub contains frontend and backend developer documentation with regards to the IAM:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["GitHub Frontend: ",(0,i.jsx)(n.a,{href:"https://github.com/catenax-ng/product-portal-frontend",children:"https://github.com/catenax-ng/product-portal-frontend"})]}),"\n",(0,i.jsxs)(n.li,{children:["GitHub Backend: ",(0,i.jsx)(n.a,{href:"https://github.com/catenax-ng/product-portal-backend",children:"https://github.com/catenax-ng/product-portal-backend"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-references",children:"3. References"}),"\n",(0,i.jsx)(n.p,{children:"Not applicable."}),"\n",(0,i.jsx)(n.h2,{id:"legal",children:"Legal"}),"\n",(0,i.jsxs)(n.p,{children:["Copyright \xa9 2024 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit ",(0,i.jsx)(n.a,{href:"/copyright",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},58651:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/XACML-realization-6083ea012a91b6def689b9e543272c2a.png"},51711:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/flow-of-actions-e2270878a3d8eb91dc937769302a030f.png"},56460:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/keycloak-authentification-7d5a35e45daa6f06906bda2ec4fb86b1.png"},37149:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/keycloak-cx-interaction-2995c4b1eaf957ba6448dee9a447d9d2.png"},68456:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/openid-connect-flow-a43fe069a0f13fd221c5d371f3004a00.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);