"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[59457],{36486:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=n(74848),s=n(28453);const i={sidebar_position:1},o="How: Life Cycle Management",r={id:"operating-model/how-life-cycle-management/how-life-cycle-management",title:"How: Life Cycle Management",description:"Managing versions and changes of different artifacts in federated data spaces is critical to ensure compatibility, interoperability, and security. The life cycle management of the Catena-X ecosystem is coordinated by the Catena-X Association and includes the releases in the Catena-X Association and in the Eclipse Tractus-X Project (see Figure Overview Life Cycle Management).",source:"@site/docs/operating-model/how-life-cycle-management/how-life-cycle-management.md",sourceDirName:"operating-model/how-life-cycle-management",slug:"/operating-model/how-life-cycle-management/",permalink:"/docs/next/operating-model/how-life-cycle-management/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar_op_model",previous:{title:"How: Data Space Governance",permalink:"/docs/next/operating-model/how-data-space-governance/"},next:{title:"Outlook",permalink:"/docs/next/operating-model/outlook/"}},c={},l=[{value:"Definition of breaking changes and the impact",id:"definition-of-breaking-changes-and-the-impact",level:2},{value:"Impact of changes on the Catena-X network",id:"impact-of-changes-on-the-catena-x-network",level:3},{value:"Release Management",id:"release-management",level:2},{value:"Schedule",id:"schedule",level:3},{value:"Phases",id:"phases",level:4},{value:"Release Governance",id:"release-governance",level:4},{value:"Patches",id:"patches",level:3},{value:"Introduction of the release schedule",id:"introduction-of-the-release-schedule",level:3},{value:"Backwards compatibility",id:"backwards-compatibility",level:2}];function h(e){const a={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"how-life-cycle-management",children:"How: Life Cycle Management"})}),"\n",(0,t.jsxs)(a.p,{children:["Managing versions and changes of different artifacts in federated data spaces is critical to ensure compatibility, interoperability, and security. The life cycle management of the Catena-X ecosystem is coordinated by the Catena-X Association and includes the releases in the Catena-X Association and in the Eclipse Tractus-X Project (see Figure ",(0,t.jsx)(a.a,{href:"/docs/next/operating-model/how-life-cycle-management/",children:"Overview Life Cycle Management"}),")."]}),"\n",(0,t.jsxs)(a.p,{children:["Catena-X will provide ",(0,t.jsx)(a.strong,{children:"one major"})," and ",(0,t.jsx)(a.strong,{children:"one minor"})," ecosystem release per year. This means that each release of Catena-X can contain e.g. standards, normative documents of two quarterly releases of Tractus-X."]}),"\n",(0,t.jsxs)(a.p,{children:["Tractus-X will provide quarterly releases including ",(0,t.jsx)(a.strong,{children:"one major"})," and ",(0,t.jsx)(a.strong,{children:"three minor"})," releases per year. The releases follow calendar versioning (see ",(0,t.jsx)(a.a,{href:"https://calver.org/",children:"CalVer"}),"), whereas their artifacts such as feature, reference implementations, and KITs follow semantic versioning (see ",(0,t.jsx)(a.a,{href:"https://semver.org/",children:"SemVer"}),"). To ensure backward compatibility in the future, versioning and passing of predefined test cases of each individual artifact is mandatory. Exceptions, e.g. regulatory requirements, have to be approved by the Catena-X Association."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.img,{alt:"Overview Life Cycle Management",src:n(12222).A+"",width:"1757",height:"602"}),"\n",(0,t.jsx)(a.em,{children:"Overview Life Cycle Management"})]}),"\n",(0,t.jsx)(a.p,{children:"The Catena-X Association release includes all binding and certification-relevant artifacts such as standards (e.g., API-specifications, semantic models) and normative documents for all data space participants. The Tractus-X release contains all open-source products (including services or helm charts) of the cxOS and business applications as well as KITs. In addition, there are various commercial or self-developed solutions for business applications and services following individual release cycles and versioning schemes."}),"\n",(0,t.jsx)(a.p,{children:"Both the Tractus-X release and any commercial or self-developed solutions must adhere to Catena-X standards and other relevant normative documents to get deployed."}),"\n",(0,t.jsxs)(a.p,{children:["Open-source products are required to fulfill the ",(0,t.jsx)(a.a,{href:"https://eclipse-tractusx.github.io/docs/release/",children:"Tractus-X release guideline(TRGs)"})," and take part in the integration tests to be part of a quarterly Tractus-X release. For critical issues (e.g., security issues), hot fixes may be released to fix a bug in the active Catena-X operating system that interrupts the normal release cycle."]}),"\n",(0,t.jsx)(a.h2,{id:"definition-of-breaking-changes-and-the-impact",children:"Definition of breaking changes and the impact"}),"\n",(0,t.jsxs)(a.p,{children:["Catena-X defines the type of changes and thus also those of breaking changes according to semantic versioning (see ",(0,t.jsx)(a.a,{href:"https://semver.org/",children:"SemVer"}),"). There are therefore major, minor and patch changes. As shown in the figure above, there are major changes at a maximum once a year. Minor changes or patches can be introduced independently of this. These can be independent improvements or changes. However, every change must be compatible with the applicable standards."]}),"\n",(0,t.jsx)(a.h3,{id:"impact-of-changes-on-the-catena-x-network",children:"Impact of changes on the Catena-X network"}),"\n",(0,t.jsx)(a.p,{children:"In addition to the differentiation of changes into major, minor and patch described above, there are three different categories of major (breaking) changes. The examples mentioned can fall into this category. Depending on the changes, the component in the example may also fall into a different category:"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Intra-Company"}),"\nThese are changes that only have effects and dependencies within a company. This means that there are no dependencies on third parties and the upgrade can be planned exclusively internally. An example of such a component is SD-Factory, BPN-Issuer."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Inter-Company"}),"\nThese are changes that only have an effect on certain partners. An upgrade must therefore be agreed between the partner(s). The number of partners is limited and a joint approach must then be agreed upon. An example of such a component is the: GXDCH for the CSP-B."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Network"}),"\nThese changes have an impact on all participants of the Catena-X network. The objective is to abstract these as coordination between all participants is not possible. One possibility of abstraction is that one component supports several versions. An example of such a component is: EDC"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.img,{alt:"Differences from major (breaking) changes",src:n(38654).A+"",width:"1210",height:"313"}),"\n",(0,t.jsx)(a.em,{children:"Differences from major (breaking) changes"})]}),"\n",(0,t.jsx)(a.h2,{id:"release-management",children:"Release Management"}),"\n",(0,t.jsx)(a.p,{children:"There are two main channels in the Catena-X ecosystem that develop artifacts - Catena-X Association and Tractus-X. The Catena-X Association coordinates the releases for both and ensures compatibility. Moreover, through dedicated release management, the Catena-X Association also carefully evaluates any modifications to the productive network and provides all network participants time to adapt to any changes performed."}),"\n",(0,t.jsx)(a.p,{children:"As can be seen in the figure, in addition to the Tractus-X level, which releases quarterly features, reference implementations and KITs, there is the Catena-X Association, which publishes various governance documents such as the semantic models or the standards, as well as the ecosystem. This reflects all participants of the productive Catena-X network."}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.img,{alt:"Release schedule Catena-X",src:n(63234).A+"",width:"1904",height:"835"}),"\n",(0,t.jsx)(a.em,{children:"Release schedule"})]}),"\n",(0,t.jsx)(a.p,{children:"A major release may contain critical breaking changes that have a major impact on data space participants, such as changes to enablement services. A minor release contains backward compatible functionality. In addition, patch versions provide backward compatible bug and security fixes. The Tractus-X project has an overarching qualification process that all official quarterly Tractus-X releases adhere to. This process applies E2E activities for testing and security (relevant release candidates in compound) that stakeholders can build on. Each component can be released on demand on a higher cadence."}),"\n",(0,t.jsx)(a.p,{children:"The Catena-X data space aims to support a parallel\nphase of two major versions (each valid for a minimum of 12 months):"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Current"}),"\n",(0,t.jsx)(a.li,{children:"Maintenance"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"There is a dedicated date, when the current version of Catena-X and Tractus-X gets in maintenance mode. After that, the maintenance version will be available for at least 12 months to ensure a smooth upgrade process for all participants of the Catena-X data space. This means that both major version are supported, i.e. get required security fixes and bug fixes without migration to the next higher major version. A deployed major version is supported for a minimum of two years."}),"\n",(0,t.jsx)(a.p,{children:"All participants doing changes that are network-breaking or inter-company have to ensure one of the following variants to allow a smooth upgrade process:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Running two major versions with the same technical component"}),"\n",(0,t.jsx)(a.li,{children:"Running a technical component for each major version, with data migration in between to have the data available in both components"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"If the change only affects the component itself (run by one company, i.e. intra-company change), then the company only needs to run one version. It is handled within the company."}),"\n",(0,t.jsx)(a.p,{children:"This approach enables each participant to organize the upgrade on its own, because the surrounding technical component supports the current and maintenance valid version."}),"\n",(0,t.jsx)(a.h3,{id:"schedule",children:"Schedule"}),"\n",(0,t.jsxs)(a.p,{children:["As can be seen in the illustration (see Figure ",(0,t.jsx)(a.a,{href:"/docs/next/operating-model/how-life-cycle-management/#release-management",children:"Major Version Release"}),"), there is Tractus-X at the lowest level, which has a release cycle of 3 months and therefore generates 4 releases per year. At the middle level is the Catena-X association which defines the scope for each major and minor release (only the scope of the major release is shown in the figure). This scope is defined together with the various other technical committees and expert groups. This scope then contains the various artifacts of the association, as well as a reference to the corresponding Tractus-X version of the reference implementations."]}),"\n",(0,t.jsx)(a.p,{children:"Major changes are always introduced by the Catena-X Association scope and are part of the releases presented. The minor release, which always takes place at the earliest 6 months after the major release, contains minor changes to the Catena-X Association artifacts. Other minor changes from other parties are possible at any time, as they are by definition compatible with the previous version. Patches can be introduced by any party at any time, as they must also be compatible with the previous version."}),"\n",(0,t.jsx)(a.h4,{id:"phases",children:"Phases"}),"\n",(0,t.jsx)(a.p,{children:"The development process in Catena-X is based on three phases:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Planning phase: Tractus-X and Catena-X are planning together."}),"\n",(0,t.jsx)(a.li,{children:"Development phase: During this phase Catena-X and Tractus-X will develop reference implementations and standards covering the developed software."}),"\n",(0,t.jsx)(a.li,{children:"Deployment phase: After development, the components will be deployed to the productive network."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Following the quarterly development cycle of Tractus-X, the development takes one quarter and succeeds the planning phase. The deployment phase to the network will also take maximum one quarter, but happens at most two times a year, including one minor and one major release of an official ecosystem release."}),"\n",(0,t.jsx)(a.h4,{id:"release-governance",children:"Release Governance"}),"\n",(0,t.jsx)(a.p,{children:"The Release Governance is carried out by the Catena-X Association and ensures compatibility, stability and overall reliability of the ecosystem by following a set amount of principles, e.g. architecture guidelines. For this purpose, the Catena-X Association installs a committee, comprised of representatives from relevant stakeholder groups."}),"\n",(0,t.jsx)(a.p,{children:"The following milestones are instrumental and constitute the official funnel for deploying ecosystem releases:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Development Gate"})," ",(0,t.jsx)(a.em,{children:"after"})," planning phase: The development gate criteria are defined by the Catena-X Association, e.g. architecture guidelines, standards, etc. Additionally, the impact of the changes has to be assessed and all network breaking changes require an explicit decision to be included in an official Catena-X development cycle. Moreover, ",(0,t.jsx)(a.em,{children:"during"})," development phase, the Catena-X Association resolves to solve issues regarding compatibility and release management, i.e. communication between components."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Deployment Gate"})," ",(0,t.jsx)(a.em,{children:"after"})," development phase: After the development phase has concluded, the Catena-X Association formally approves an ecosystem release comprised of a set of coherent standards, normative documents and guidance regarding complementary Tractus-X products and reference implementations. The deployment gate initiates the deployment phase."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"The participants of the development and deployment gate decide about acceptance or rejection of features and deployments. Participation works by representatives of specific roles."}),"\n",(0,t.jsx)(a.h3,{id:"patches",children:"Patches"}),"\n",(0,t.jsx)(a.p,{children:"The release schedule does not cover patches. The schedule defines such long timeframes between minor and major versions that it can be problematic to fix bugs or security issues. Therefore bugs shall be fixed independently of the release schedule, i.e. if a bugfix is required, it shall be done. A bug is a problem that is not changing the behavior, i.e. the behavior according to the standard is not changed."}),"\n",(0,t.jsx)(a.p,{children:"Security patches are different, because to fix a bug, it is required to change the behavior, but the security issue makes it mandatory to patch the release. The decision, when a patch can be deployed, is with the participants of the deployment gate. Additionally, there is a dependency to the standard, because the security issue could already be initiated by the standard itself. This would not only require a patch, but at least a note in the standard."}),"\n",(0,t.jsx)(a.h3,{id:"introduction-of-the-release-schedule",children:"Introduction of the release schedule"}),"\n",(0,t.jsx)(a.p,{children:"As can be seen below the ecosystem release at the end of 2024 is the start of release management and naming. The release at the end of 2024 is therefore a hard network change resulting in an upgrade day. This is the last scheduled Catena-X release with this category of impact. Starting with the development of Tractus-X 24.12, the implementation will be carried out with the aim of making the release compatible with [Jupiter]. The same applies to the further creation of the Catena-X Association's artifacts. In this first phase there is only one major release. The complete implementation of 2 major releases running in parallel will be available after the next major ecosystem release [Jupiter]."}),"\n",(0,t.jsxs)(a.p,{children:["The details of the technical implementation and the process for defining the releases can be found in chapter ",(0,t.jsx)(a.a,{href:"/docs/next/operating-model/how-life-cycle-management/#backwards-compatibility",children:"Backwards compatibility"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"backwards-compatibility",children:"Backwards compatibility"}),"\n",(0,t.jsx)(a.p,{children:"Compatibility between the releases is one of the cornerstones of a stable network. There are major versions with potential breaking changes, but such changes have to work with the grace period of the maintenance version in mind. This means that the evolution is ensured by following the approach of two versions available at the same time."}),"\n",(0,t.jsxs)(a.p,{children:["As described in ",(0,t.jsx)(a.a,{href:"/docs/next/operating-model/how-life-cycle-management/#release-governance",children:"Release governance"}),", there are not only architecture guidelines to define the compatibility, but there is a governance body to check the fulfillment of the guidelines of each version."]})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},38654:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/impact-on-the-network-b3498ec485755dec880c6f6130bff353.png"},12222:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/overview-life-cycle-management-dfc25bce1da282bfe1fa509d8cfe7aac.png"},63234:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/release-schedule-8a057032956bd4f38408126dfcb1f923.png"},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>r});var t=n(96540);const s={},i=t.createContext(s);function o(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);