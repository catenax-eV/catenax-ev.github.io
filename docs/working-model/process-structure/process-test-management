---
sidebar_position: 7
title: Test Management and Infrastructure
---

This chapter provides a comprehensive overview of the test management strategy and supporting infrastructure within the Catena-X ecosystem. It details the tools, processes, environments, and policies that ensure high-quality, reliable, and secure software delivery.

## 1. Test Management

### 1.1 Overview

Test management encompasses the planning, execution, and monitoring of testing activities to ensure software quality and functionality. The approach leverages integrated tools and defined processes to support continuous delivery and compliance.

### 1.2 Tools

#### Xray

- **Purpose:** Test management integrated with Jira.  
- **Usage:** Centralized management of test cases.  
- **Features:**  
  - Creation and execution of test cases  
  - Test coverage reporting  
  - Integration with CI/CD pipelines

#### Argo CD

- **Purpose:** Continuous delivery tool for Kubernetes deployments.  
- **Features:**  
  - Automated deployments  
  - Version control and rollbacks  
  - Integration with secret management (Vault)

### 1.3 Processes

#### Test Case Management (Xray)

- **Creation:** Define test cases based on requirements and user stories.  
- **Execution:** Run test cases at various development stages (unit, integration, system).  
- **Reporting:** Generate reports to track coverage and identify improvement areas.

#### Deployment and Testing (Argo CD)

- **Planning:** Schedule deployments according to the release plan.  
- **Execution:** Deploy specific product versions to Kubernetes environments.  
- **Monitoring:** Track deployment status and verify successful implementation.

### 1.4 Dependency Management

#### Internal Dependencies

- Ensure compatibility between all interdependent components/products.  
- Conduct regular integration tests to detect and resolve conflicts.

#### External Dependencies

- **Clearing House:** Test integration for seamless data exchange and transaction processing.  
- **SAP Wallet:** Test secure and accurate data handling between systems.

### 1.5 Conclusion

Effective test management relies on structured planning, execution, and monitoring. By utilizing Xray and Argo CD, and by managing dependencies, Catena-X ensures robust, high-quality software releases.

## 2. Infrastructure

### 2.1 Overview

Infrastructure covers the deployment, provisioning of virtual environments, and monitoring tools required to support software quality and operational reliability.

### 2.2 Available Environments

| Environment     | Tools & URLs                                                                                  |  
|-----------------|----------------------------------------------------------------------------------------------|  
| **Core**        | Vault: [https://vault.core.catena-x.net](https://vault.core.catena-x.net)                    |  
| **Integration** | ArgoCD: [https://argocd.int.catena-x.net](https://argocd.int.catena-x.net) <br> Grafana: [https://grafana.int.catena-x.net](https://grafana.int.catena-x.net) <br> Goldilocks: [https://goldilocks.int.catena-x.net](https://goldilocks.int.catena-x.net) |  
| **Stable**      | ArgoCD: [https://argocd.stable.catena-x.net](https://argocd.stable.catena-x.net) <br> Grafana: [https://grafana.stable.catena-x.net](https://grafana.stable.catena-x.net) <br> Goldilocks: [https://goldilocks.stable.catena-x.net](https://goldilocks.stable.catena-x.net) |

### 2.3 Environment Setup

The infrastructure is designed for secure, automated deployments without direct Azure access for product teams. Argo CD in the integration cluster deploys applications by:  
- Reading secrets from Vault in the core cluster  
- Pulling images from GitHub Container Registry (GHCR)  
- Authenticating users via GitHub Organizations

**Example Architecture Diagram:**  
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

### 2.4 Key Tools

#### Argo CD

- **Purpose:** Continuous delivery for Kubernetes.  
- **Features:** Automated deployments, version control, rollbacks.

#### Vault

- **Purpose:** Secret management for deployment configurations.  
- **Features:** Secure storage, integration with Argo CD via Argo-Vault Plugin.

#### Grafana

- **Purpose:** Resource monitoring.  
- **Features:** Dashboards, alerting.

#### Goldilocks

- **Purpose:** Resource usage recommendations.  
- **Features:** Optimization suggestions for CPU/memory, cost savings.

### 2.5 Infrastructure Maintenance

- **INT-Environment:** Maintenance occurs the last Sunday of each month. Product teams must verify deployments post-downtime.

### 2.6 Fair Play Policy for CX-Environments

#### Purpose

Ensures equitable access to shared resources, prevents misuse, and maintains a cost-efficient, sustainable environment.

#### Guidelines

- **Resource Requests/Limits:** Adhere to reasonable CPU/memory usage. Use Goldilocks for recommendations.  
- **Monitoring:** Regularly check resource usage in your namespace via Grafana dashboards.

#### Consequences of Violation

- Notice of improper usage.  
- System team may adjust resource limits via pull requests.  
- Persistent non-response may result in deletion of resources.

### 2.7 Deployment Instructions

#### Deploying Helm-Charts via Argo CD

1. Navigate to your chosen environment ([see environments](#available-environments)).  
2. Create an [ArgoCD-App](https://argo-cd.readthedocs.io/en/stable/getting_started/#creating-apps-via-ui) with your namespace and project.  
3. Store environment-specific configuration in a subfolder (see [Portal example](https://github.com/eclipse-tractusx/portal/tree/main/environments)).  
4. Reference values files in your Argo-App manifest:

    ```yaml  
    project: project-portal  
    source:  
      repoURL: 'https://github.com/eclipse-tractusx/portal.git'  
      path: charts/portal  
      targetRevision: portal-2.3.0-alpha.1  
      plugin:  
        env:  
          - name: AVP_SECRET  
            value: vault-secret  
          - name: helm_args  
            value: '-f values.yaml -f ../../environments/helm-values/values-int.yaml'  
    destination:  
      server: 'https://kubernetes.default.svc'  
      namespace: product-portal  
    ```

#### Ingress Configuration

- Annotate Ingresses for certificate management:  
    ```yaml  
    metadata:  
      annotations:  
        cert-manager.io/cluster-issuer: "letsencrypt-prod"  
    ```  
- Ensure `tls.secretName` is unique per namespace and URL is unique cluster-wide:  
    ```yaml  
    tls:  
      - hosts:  
          - projectName-serviceName.int.catena-x.net  
        secretName: tls-secret-serviceName  
    ```

## 3. Summary

By integrating robust test management practices with a secure, scalable infrastructure, Catena-X ensures the delivery of high-quality, reliable software. Adherence to fair usage policies and standardized deployment processes is mandatory for all product teams.

For further details, refer to the respective tool documentation or contact the system team.  
