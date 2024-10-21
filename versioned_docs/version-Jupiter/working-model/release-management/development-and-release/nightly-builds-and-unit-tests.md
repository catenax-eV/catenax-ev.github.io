---
sidebar_position: 3
---

# Nightly Builds including Unit Test

## Task

The nightly build process usually takes place at night, when it is unlikely that developers will be working on the source code. This ensures that the source code can be compiled error-free on the respective target platform. Automatic test runs are also carried out in order to work in a test-driven manner.

## To Dos

- Application created automatically at night.
- Completing a software build of the latest version of a program on a daily basis.
- (Automated) unit testing:
  - Initialization of the initial state.
  - Execution of the operation to be tested.
  - Comparison of the actual result with the target value from the specification.

## Outcome

- Module tests should be independent of each other and only test the respective module.
- All required dependencies are present and possibly tested to show no bugs have been introduced.
- Feedback to development teams of the overall test results should be provided.

## Timeline

- TBD
