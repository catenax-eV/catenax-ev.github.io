---
tags:
  - CAT/SSI
  - CAT/Core Service Provider
  - CAT/Identity Wallet
  - CAT/Sandbox Services
---

# CX-0149 Wallet Requirements v2.0.0

## ABSTRACT

A wallet is a service used for managing Verifiable Credentials.
It is commonly associated with and identified by a Decentralized Identifier (DID).
This standard describes requirements for Catena-X compliant wallets and how participants may obtain such a wallet.

## FOR WHOM IS THE STANDARD DESIGNED

This standard is relevant for CSPs who must offer participants the provisioning of a Catena-X compliant wallet.
It is also relevant for anyone who may wish to implement, host, provide, or obtain a Catena-X compliant wallet.

## 1 INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

This standard describes minimum requirements a wallet must fulfil in order to be used in the Catena-X dataspace.
It also describes how a participant may obtain such a wallet.

This standard is relevant for Core Service Providers, as they must provide each participant with a Catena-X compliant wallet.
It is also relevant for anyone else wanting to host or provide a Catena-X compliant wallet.

### 1.2 CONTEXT AND ARCHITECTURE FIT

> *This section is non-normative*

The Catena-X dataspace uses Self-Sovereign Identity for verifying participants' identities and claims about the participants.
Participants are identified by a Decentralized Identifier (DID) and claims about participants are issued, presented, and verified in the form of Verifiable Credentials.
Both DIDs and Verifiable Credentials are managed through a wallet.
During onboarding, the CSP issues both a BPN Credential and a Membership Credential to a participant, see [CX-0050](https://catenax-ev.github.io/docs/standards/CX-0050-CXSpecificCredentials).

### 1.3 CONFORMANCE AND PROOF OF CONFORMITY

> *This section is non-normative*

Sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The keywords **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

For a wallet to be Catena-X compliant, it must fulfil compliance criteria of the specifications required in [2.1 REQUIREMENTS FOR A CATENA-X-COMPLIANT WALLET](#21-requirements-for-a-catena-x-compliant-wallet).

The CSP MUST provide a wallet that is Catena-X compliant.

## 2 MAIN CONTENT

> *This section is normative*

Unless mentioned otherwise, in this section "wallet" refers to a Catena-X-compliant wallet.
Any wallet used in the Catena-X dataspace MUST be a Catena-X-compliant wallet.

### 2.1 REQUIREMENTS FOR A CATENA-X-COMPLIANT WALLET

Wallets MUST implement the [Decentralized Claims Protocol (DCP) v1.0](https://eclipse-dataspace-dcp.github.io/decentralized-claims-protocol/) with profile [vc11-sl2021/jwt](https://eclipse-dataspace-dcp.github.io/decentralized-claims-protocol/v1.0-RC3/#dcp-profile-definitions).
Support for [presentation definitions](https://eclipse-dataspace-dcp.github.io/decentralized-claims-protocol/v1.0-RC3/#presentation-definitions) is not required, and they SHOULD NOT be used.
The following [scopes](https://eclipse-dataspace-dcp.github.io/decentralized-claims-protocol/v1.0-RC3/#scopes) MUST be implemented.

```txt
org.eclipse.tractusx.vc.type:MembershipCredential:read
org.eclipse.tractusx.vc.type:DataExchangeGovernanceCredential:read
org.eclipse.tractusx.vc.type:BpnCredential:read
```

The above requirements also imply the requirement of [VC Data Model v1.1](https://www.w3.org/TR/vc-data-model/), [StatusList2021](https://www.w3.org/TR/2023/WD-vc-status-list-20230427/) and that all communication happen via HTTPS.
For details, please see the [DCP specification](https://eclipse-dataspace-dcp.github.io/decentralized-claims-protocol/v1.0-RC3/)

The wallet MUST be associated with a Decentralized Identifier following the [DID v1.0](https://www.w3.org/TR/did-1.0/) specification and using the [did:web](https://w3c-ccg.github.io/did-method-web/) method.
The corresponding DID document MUST be compliant with [CX-0049](https://catenax-ev.github.io/docs/standards/CX-0049-DIDDocumentSchema).

#### 2.1.1 BACKWARDS COMPATIBILITY

For backwards compatibility with the R24.09 Jupiter release, a wallet MUST support [DCP presentation flow v0.8.1](https://github.com/eclipse-dataspace-dcp/decentralized-claims-protocol/releases/tag/0.8.1).
This requirement is in addition to the requirement for full DCP v1.0 support, i.e. the wallet must support both v0.8.1 and v1.0 of the DCP presentation flow.
This backwards compatibility requirement should be dropped with the R26.09 release or when compatibility with R24.09 is no longer required.

### 2.2 OBTAINING A WALLET INSTANCE

Every participant MUST have their own wallet instance.
There are two possible ways for a participant to obtain a wallet instance:

#### 2.2.1 PROVISIONING PARTICIPANT WALLETS

The CSP MUST offer every participant to provision a wallet instance for them.

#### 2.2.2 USING PARTICIPANT-OWNED WALLETS

A participant MAY reject this provisioned wallet instance and instead choose to use their own wallet instance.
In this case, the CSP is not required to provide a wallet instance for this participant.
The participant MUST provide the CSP with the DID of the wallet instance they wish to use.
The wallet instance used by the participant MUST be a Catena-X-compliant wallet and MUST be available before the participant initiates the onboarding process.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

<!--
    [Optional] - Links to related Catena-X or external standards that need to be
    met in order to fulfill this standard. If no external standards need to be
    met, leave it empty.
-->

### 3.2 NON-NORMATIVE REFERENCES

> *This section is non-normative*

<!--
    [Optional] – Links to further documentation that may help to understand the 
    standard but isn’t relevant for conformity assessment
-->

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

<!--
    [Optional] - List reference implementations that implement the standard. 

    Example: The code found at https://github.com/eclipse-tractusx/item-relationship-service 
    presents a reference implementation that implements this standard.

    The code found at XX implements the standard.
-->

## ANNEXES

### FIGURES

> *This section is non-normative*

N/A

### TABLES

> *This section is non-normative*

N/A

## Legal

Copyright © 2025 Catena-X Automotive Network e.V. All rights reserved. For more information, please visit [here](/copyright).
