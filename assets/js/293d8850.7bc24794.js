"use strict";(self.webpackChunkcatenax_ev_github_io_new=self.webpackChunkcatenax_ev_github_io_new||[]).push([[5018],{62130:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(74848),i=r(28453);const s={},o="Infrastructure",a={id:"working-model/infrastructure/infrastructure",title:"Infrastructure",description:"Infrastructure involves the functionality of deploying, provision of a virtual environment and tools for monitoring",source:"@site/docs/working-model/infrastructure/infrastructure.md",sourceDirName:"working-model/infrastructure",slug:"/working-model/infrastructure/",permalink:"/docs/next/working-model/infrastructure/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar_working_model",previous:{title:"Legal",permalink:"/docs/next/working-model/legal/"}},l={},c=[{value:"Available environments",id:"available-environments",level:2},{value:"Core Environment",id:"core-environment",level:3},{value:"Integration Environment",id:"integration-environment",level:3},{value:"Environment Setup",id:"environment-setup",level:2},{value:"Tools",id:"tools",level:2},{value:"Argo CD",id:"argo-cd",level:3},{value:"Vault",id:"vault",level:3},{value:"Grafana",id:"grafana",level:3},{value:"Goldilocks",id:"goldilocks",level:3},{value:"Infrastructure Maintenance",id:"infrastructure-maintenance",level:2},{value:"Fair Play Policy CX-Environments",id:"fair-play-policy-cx-environments",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Equal Access to Resources",id:"equal-access-to-resources",level:3},{value:"Fair Usage Guidelines",id:"fair-usage-guidelines",level:3},{value:"Consequences of Violation",id:"consequences-of-violation",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"infrastructure",children:"Infrastructure"})}),"\n",(0,t.jsx)(n.p,{children:"Infrastructure involves the functionality of deploying, provision of a virtual environment and tools for monitoring\napplications to ensure the quality and functionality of software products. This document outlines the technology and\nprocesses involved in our infrastructure."}),"\n",(0,t.jsx)(n.h2,{id:"available-environments",children:"Available environments"}),"\n",(0,t.jsx)(n.p,{children:"The following environments are currently available."}),"\n",(0,t.jsx)(n.h3,{id:"core-environment",children:"Core Environment"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Tool"}),(0,t.jsx)(n.th,{children:"URL"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Vault"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://vault.core.catena-x.net",children:"https://vault.core.catena-x.net"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"integration-environment",children:"Integration Environment"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Tool"}),(0,t.jsx)(n.th,{children:"URL"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ArgoCD"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://argocd.int.catena-x.net",children:"https://argocd.int.catena-x.net"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Grafana"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://grafana.int.catena-x.net",children:"https://grafana.int.catena-x.net"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Goldilocks"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://goldilocks.int.catena-x.net",children:"https://goldilocks.int.catena-x.net"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,t.jsx)(n.p,{children:"This diagram provides an overview on how the environments are set up. In this example the integration environment is shown.\nArgoCD deploys the apps of the product teams in the int cluster by reading the configured secrets from the vault in the\ncore cluster and pulling the image of the service from the GHCR. With this architecture, no product team has to directly\naccess Azure for service deployments."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mermaid",children:'flowchart BT\n  subgraph github["GitHub"]\n    GitHub_ghcr[GitHub Container Registry]\n    GitHub_org[GitHub Organizations]\n  end\n  subgraph AKS_int["INT cluster"]\n    ArgoCD["ArgoCD \\n argocd.int.catena-x.net"]\n    ServiceDeployment[Product apps]\n    Grafana\n    Goldilocks\n  end\n  subgraph AKS_core["Core cluster"]\n    Vault["Vault \\n vault.core.catena-x.net "]\n  end\n  ArgoCD -- " get secrets " --\x3e Vault\n  ArgoCD -- " deploys " --\x3e ServiceDeployment\n  ArgoCD -- " pull images " --\x3e GitHub_ghcr\n  ArgoCD -- " authenticate user " --\x3e GitHub_org\n'})}),"\n",(0,t.jsx)(n.h2,{id:"tools",children:"Tools"}),"\n",(0,t.jsx)(n.h3,{id:"argo-cd",children:"Argo CD"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose:"})," Continuous delivery tool for Kubernetes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Automated deployments"}),"\n",(0,t.jsx)(n.li,{children:"Version control of deployments"}),"\n",(0,t.jsx)(n.li,{children:"Rollbacks to previous versions"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"vault",children:"Vault"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose:"})," Store secrets for deployment configurations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Secret management"}),"\n",(0,t.jsx)(n.li,{children:"Usable in Argo CD with Argo-Vault Plugin"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"grafana",children:"Grafana"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose:"})," Monitoring of resources of the product teams"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Dashboards for monitoring"}),"\n",(0,t.jsx)(n.li,{children:"Alerting"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"goldilocks",children:"Goldilocks"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose:"})," Resource usage recommendations for the product teams"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Resource recommendations"}),"\n",(0,t.jsx)(n.li,{children:"Cost savings if applied by the product teams"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"infrastructure-maintenance",children:"Infrastructure Maintenance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"INT-Environment:"})," last Sunday of each month -> Products should check their deployments after downtime"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"fair-play-policy-cx-environments",children:"Fair Play Policy CX-Environments"}),"\n",(0,t.jsx)(n.p,{children:"To ensure a fair use of the resources provided by the Catena-X Association, we'd like to propose a Fair Play Policy."}),"\n",(0,t.jsx)(n.h3,{id:"purpose",children:"Purpose"}),"\n",(0,t.jsx)(n.p,{children:"This Fair Play Policy outlines the acceptable use of resources within our platform, ensuring that all product teams have\nequitable access and a positive experience. We aim to prevent misuse or excessive consumption of resources that could\nnegatively impact other product teams. By adhering to this policy, users contribute to maintaining a cost-efficient and\nsustainable environment, ensuring that resources are available to everyone at a reasonable cost."}),"\n",(0,t.jsx)(n.h3,{id:"equal-access-to-resources",children:"Equal Access to Resources"}),"\n",(0,t.jsx)(n.p,{children:"All product teams are entitled to fair and equal access to the resources provided by our platform. No individual or\ngroup should engage in actions that monopolize resources, impair performance, or degrade the experience of others."}),"\n",(0,t.jsx)(n.h3,{id:"fair-usage-guidelines",children:"Fair Usage Guidelines"}),"\n",(0,t.jsx)(n.p,{children:"To promote fair play and responsible resource usage:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reasonable Resource requests and limits"}),": Product teams should adhere to reasonable usage of CPU and Memory, to\nensure optimal service for all. To get a hint on how the request/limit for your container should be, please take a\nlook in Goldilocks (links can be found in the ",(0,t.jsx)(n.a,{href:"#available-environments",children:"environments"})," section). Especially CPU and Memory\nrecommendations should be considered.\nSince there isn't much of a load on the systems (excluding testing before a release), the apps won't need many\nresources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Monitor your Namespace in ArgoCD"}),": You should regularly check your resource usage, requests and limits in your\nnamespace. This can be done with ",(0,t.jsx)(n.a,{href:"#available-environments",children:"Grafana"}),", here you can find many dashboards, that support\nyou with that."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"consequences-of-violation",children:"Consequences of Violation"}),"\n",(0,t.jsx)(n.p,{children:"If a product team is found to be in violation of this Fair Play Policy, the following actions may be taken:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Issuing a notice to inform the product team of the violation/improper usage."}),"\n",(0,t.jsx)(n.li,{children:"The system team might proactively create pull requests with decreased values for resource request/limits in the\nproduct teams repository."}),"\n",(0,t.jsx)(n.li,{children:"If a product team is not responding after several attempts of communication (via GitHub, MS Teams, Email), we reserve\nthe right to delete the resources created with ArgoCD by the product team. This may also apply, if no one is actively\nworking on a product that is already deployed on any environment."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);