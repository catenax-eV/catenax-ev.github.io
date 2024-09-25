# Infrastructure

Infrastructure involves the functionality of deploying, provision of a virtual environment and tools for monitoring
applications to ensure the quality and functionality of software products. This document outlines the technology and
processes involved in our infrastructure.

## Available environments
<!-- markdown-link-check-disable -->
The following environments are currently available.

### Core Environment

| Tool  | URL                                                                |
|-------|--------------------------------------------------------------------|
| Vault | [https://vault.core.catena-x.net](https://vault.core.catena-x.net) |

### Integration Environment

| Tool       | URL                                                                        |
|------------|----------------------------------------------------------------------------|
| ArgoCD     | [https://argocd.int.catena-x.net](https://argocd.int.catena-x.net)         |
| Grafana    | [https://grafana.int.catena-x.net](https://grafana.int.catena-x.net)       |
| Goldilocks | [https://goldilocks.int.catena-x.net](https://goldilocks.int.catena-x.net) |

<!-- markdown-link-check-disable -->

## Environment Setup

This diagram provides an overview on how the environments are set up. In this example the integration environment is shown.
ArgoCD deploys the apps of the product teams in the int cluster by reading the configured secrets from the vault in the
core cluster and pulling the image of the service from the GHCR. With this architecture, no product team has to directly
access Azure for service deployments.

```mermaid
flowchart BT
  subgraph github["GitHub"]
    GitHub_ghcr[GitHub Container Registry]
    GitHub_org[GitHub Organizations]
  end
  subgraph AKS_int["INT cluster"]
    ArgoCD["ArgoCD \n argocd.int.catena-x.net"]
    ServiceDeployment[Product apps]
    Grafana
    Goldilocks
  end
  subgraph AKS_core["Core cluster"]
    Vault["Vault \n vault.core.catena-x.net "]
  end
  ArgoCD -- " get secrets " --> Vault
  ArgoCD -- " deploys " --> ServiceDeployment
  ArgoCD -- " pull images " --> GitHub_ghcr
  ArgoCD -- " authenticate user " --> GitHub_org
```

## Tools

### Argo CD

- **Purpose:** Continuous delivery tool for Kubernetes.
- **Features:**
  - Automated deployments
  - Version control of deployments
  - Rollbacks to previous versions

### Vault

- **Purpose:** Store secrets for deployment configurations.
- **Features:**
  - Secret management
  - Usable in Argo CD with Argo-Vault Plugin

### Grafana

- **Purpose:** Monitoring of resources of the product teams
- **Features:**
  - Dashboards for monitoring
  - Alerting

### Goldilocks

- **Purpose:** Resource usage recommendations for the product teams
- **Features:**
  - Resource recommendations
  - Cost savings if applied by the product teams

## Infrastructure Maintenance

- **INT-Environment:** last Sunday of each month -> Products should check their deployments after downtime

## Fair Play Policy CX-Environments

To ensure a fair use of the resources provided by the Catena-X Association, we'd like to propose a Fair Play Policy.

### Purpose

This Fair Play Policy outlines the acceptable use of resources within our platform, ensuring that all product teams have
equitable access and a positive experience. We aim to prevent misuse or excessive consumption of resources that could
negatively impact other product teams. By adhering to this policy, users contribute to maintaining a cost-efficient and
sustainable environment, ensuring that resources are available to everyone at a reasonable cost.

### Equal Access to Resources

All product teams are entitled to fair and equal access to the resources provided by our platform. No individual or
group should engage in actions that monopolize resources, impair performance, or degrade the experience of others.

### Fair Usage Guidelines

To promote fair play and responsible resource usage:

- **Reasonable Resource requests and limits**: Product teams should adhere to reasonable usage of CPU and Memory, to
  ensure optimal service for all. To get a hint on how the request/limit for your container should be, please take a
  look in Goldilocks (links can be found in the [environments](#available-environments) section). Especially CPU and Memory
  recommendations should be considered.
  Since there isn't much of a load on the systems (excluding testing before a release), the apps won't need many
  resources.
- **Monitor your Namespace in ArgoCD**: You should regularly check your resource usage, requests and limits in your
  namespace. This can be done with [Grafana](#available-environments), here you can find many dashboards, that support
  you with that.

### Consequences of Violation

If a product team is found to be in violation of this Fair Play Policy, the following actions may be taken:

- Issuing a notice to inform the product team of the violation/improper usage.
- The system team might proactively create pull requests with decreased values for resource request/limits in the
  product teams repository.
- If a product team is not responding after several attempts of communication (via GitHub, MS Teams, Email), we reserve
  the right to delete the resources created with ArgoCD by the product team. This may also apply, if no one is actively
  working on a product that is already deployed on any environment.
