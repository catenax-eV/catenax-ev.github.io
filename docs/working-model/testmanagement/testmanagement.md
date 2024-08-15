# Test Management

<!-- TOC -->
* [Test Management](#test-management)
  * [Overview](#overview)
  * [Tools](#tools)
    * [Argo CD](#argo-cd)
    * [Vault](#vault)
    * [Grafana](#grafana)
    * [Goldilocks](#goldilocks)
    * [Xray](#xray)
  * [Processes](#processes)
    * [Test Cases in Xray](#test-cases-in-xray)
    * [Deployment of Specific Versions in Argo CD](#deployment-of-specific-versions-in-argo-cd)
  * [Dependencies](#dependencies)
    * [Internal Dependencies](#internal-dependencies)
    * [External Dependencies](#external-dependencies)
  * [Conclusion](#conclusion)
  * [Test Management old](#test-management-old)
    * [Product Tests](#product-tests)
    * [Release Tests](#release-tests)
    * [Test Beds](#test-beds)
    * [Defect Management](#defect-management)
    * [Test Artifacts](#test-artifacts)
<!-- TOC -->

## Overview

Test management involves the planning, execution, and monitoring of testing activities to ensure the quality and functionality of software products. This document outlines the tools and processes involved in our test management strategy.

## Tools

### Argo CD

- **Purpose:** Continuous delivery tool for Kubernetes.
- **Usage:** https://argocd.int.catena-x.net
- **Features:**
  - Automated deployments
  - Version control of deployments
  - Rollbacks to previous versions

### Vault

- **Purpose:** Store secrets for deployment configurations.
- **Usage:** https://vault.core.catena-x.net
- **Features:**
  - Secret management
  - Usable in Argo CD with Argo-Vault Plugin

### Grafana

- **Purpose:** Monitoring of resources of the product teams
- **Usage:** https://grafana.int.catena-x.net
- **Features:**
  - Dashboards for monitoring
  - Alerting

### Goldilocks

- **Purpose:** Resource usage recommendations for the product teams
- **Usage:** https://goldilocks.int.catena-x.net
- **Features:**
  - Resource recommendations
  - Cost savings if applied by the product teams
 
### Infrastructure Maintenance
- **INT-Environment:** last Sunday of each month -> Products should check their deployments after downtime

### Xray

- **Purpose:** Test management tool integrated with Jira.
- **Usage:** Managing test cases.
- **Features:**
  - Creation and execution of test cases
  - Test coverage reporting
  - Integration with CI/CD pipelines

## Processes

### Test Cases in Xray

- **Creation:** Define test cases based on requirements and user stories.
- **Execution:** Run test cases during different stages of the development lifecycle.
- **Reporting:** Generate reports to track test coverage and identify areas for improvement.

### Deployment of Specific Versions in Argo CD

- **Planning:** Schedule deployments based on the release plan.
- **Execution:** Deploy specific versions of products to the Kubernetes environment using Argo CD.
- **Monitoring:** Track deployment status and verify successful implementation.

## Dependencies

### Internal Dependencies

- **Components/Products:**
  - Ensure that all interdependent components/products are compatible with each other.
  - Regular integration tests to detect and resolve conflicts.

### External Dependencies

- **Clearing House:**
  - Integration with external clearing house systems.
  - Regular testing to ensure seamless data exchange and transaction processing.

- **SAP Wallet:**
  - Integration with SAP Wallet.
  - Testing to ensure secure and accurate data handling between systems.

## Conclusion

Effective test management requires careful planning, execution, and monitoring. By utilizing tools like Argo CD and Xray, and by managing both internal and external dependencies, we can ensure high-quality software releases that meet user expectations and business requirements.

-------------------------------------------

## Test Management old

The software testing of reference implementations is sponsored and coordinated by the Catena-X association. It includes the following three levels:

- Level 1: Product Tests
- Level 2: Release Tests
- Level 3: Test Beds for 3rd Party Solutions

### Product Tests

Product tests include unit, regression and integration tests based on product helm charts with individual dependencies.  

Contributors can create pull requests (PRs) for their developed features at any time. A PR must be assigned to a feature issue committed in the open planning. To get faster code reviews, it is recommended to submit small PRs.

A PR must include the feature code, adapted helm chart(s), technical documentation as well as product tests (e.g., unit tests) and product integration tests (e.g., by using helm charts or mocks). All these tests must be passed locally before the PR can be submitted.

**Hint:** You can find the latest versions of the product helm charts in our release changelog.

At least two committer must review the PR, including the source code, test results and the compliance with the Tractus-X release guidelines (TRGs), and approve the merging of these changes. In case there are change requests or defects that a committer cannot solve, the contributor must address these changes before merging.

The PR and the related product tests are part of the open-source development process resulting in a new product (rc-)version.

### Release Tests

The release tests include e2e tests for the Catena-X operating system (cxOS) itself as well as for the cxOS with open-source applications (e.g., Trace-X) based on [umbrella helm charts](https://github.com/eclipse-tractusx/tractus-x-umbrella). Thereby, various product combinations of umbrella helm charts are possible.

The purpose of release testing is for the feature requestor to validate the end-to-end business flow using various test executions and to confirm that the acceptance criteria have been fulfilled (business value).

Before a product can participate in a release test, it must fulfill the following **prerequisites**:

For release 24.08, Expert Groups of the Catena-X association must ...

- create new or refine existing e2e test cases, test data and documentation as .md-file in Tractus-X sig-testing.
- provide at least one tester for the execution of the e2e test cases (if not fully automated).

The Catena-X association will provide a test management team including ...

- a test manager that creates the test plan and report, coordinates the test execution.
- a DevSecOps engineer for setting up test environment infrastructure (based on the hotel budapest approach).
- a DevSecOps engineer for deploying the umbrella helm chart of release candidates (supported by Tractus-X committer, if not fully automated yet).

The release tests result in a validated version of the cxOS, which is made available through quarterly Eclipse [Tractus-X releases](https://projects.eclipse.org/projects/automotive.tractusx).

### Test Beds

Coming soon...

### Defect Management

Defects or unexpected behavior must be reported as bugs in the [sig-release repo](https://github.com/eclipse-tractusx/sig-release/issues/new/choose).

### Test Artifacts

There are various testing artifacts, that are either managed in Tractus-X GitHub or the Test Management Tool.

- In **GitHub** we manage the different user journeys and related business scenarios as .md files.
- In the **Test Management Tool** we manage test cases, test sets (opt.), test executions as well as test plans and reports.

| Artifact          | Artifact Owner          | \# per Release |
| ----------------- | ----------------------- | -------------- |
| Test Case(s)      | Product / Expert Group  | n              |
| Test Set(s)       | Product / Expert Group  | n              |
| Test Execution(s) | Product / Expert Group  | n              |
| Test Plan         | Test Manager            | 1              |
| Test Report       | Test Manager            | 1              |
