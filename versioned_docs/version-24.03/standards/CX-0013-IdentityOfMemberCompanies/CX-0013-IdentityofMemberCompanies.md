
# CX-0013 Identity of Member Companies  v1.1.0

## ABSTRACT

Identity and Access management (IAM) enables any non-anonymous interactions, meaning independent identification and description of the actors in a verifiable and reliable way. The identification of assets or digital twins is not in the scope of IAM. A company in the context of IAM is a digital identity matched to a respective participant of Catena-X. The digital identities of employees and technical users are always tied to the company for which he or she acts. This standard documentation defines the technical foundation and the structure used for the identity of the company participating in Catena-X .

## 1. INTRODUCTION

### 1.1 AUDIENCE & SCOPE

> *This section is non-normative*

List for which roles the standard is relevant. Possible options, please delete the roles for which the standard isn’t relevant.

- Core Service Provider
- Data Provider / Consumer
- Onboarding Service Provider
- Consulting Services Provider

This document focuses on the handling and format of verifiable credential for unified verifiable attribute description of participant.

This document is relevant for core service providers who maintain the issuance of verifiable credentials for specific company attributes.

For Data Provider it is relevant in case they are providing data in the context of a use case for which a specific company attribute the a critiria for granting appropriate access rights to specific data.

For the Data Consumer it is relevant to be able to present the according company attribute to be able to consume data based on the appropriate company attribute.

For an Onboarding Service Provider this standard is relavant due to the fact, that verifiable credentials containing and approving specific company attributes need to be issued at the moment of onboarding.

### 1.2 CONTEXT

> *This section is non-normative*

Identity and Access Management (IAM) is a mandatory basic infrastructure for every IT-System. The identity of any entity and actor (company, user, or technical client/connector) is the summary of the describing attributes (e.g., Company Name, Address, Tax Number, etc.). Catena-X is intended to be a network-of-networks which consequently means that there cannot be a single Identity Provider (IdP) for the company identities nested in one network. The company must be identifiable in an independent way and interoperable in all networks. The identity of users (employees of a company) and technical users (e.g., EDC) in Catena-X, must be bound to the company they are acting on behalf of.

The purpose of this standardization request is to unify the Digital Company Identity in a self-sovereign manner. The digital identity of a Catena-X partner is the basis of any interaction with other partners. To ensure independence and data sovereignty from one identity provider this identity - as the summary of the describing attributes - must be under the sovereignty of the respective partner company.  

### 1.3 ARCHITECTURE OVERVIEW

Not applicable for this standard in this version

### 1.4 CONFORMANCE

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words **MAY**, **MUST**, **MUST NOT**, **OPTIONAL**, **RECOMMENDED**, **REQUIRED**, **SHOULD** and **SHOULD NOT** in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

### 1.5 PROOF OF CONFORMITY

> *This section is non-normative*

All participants MUST provide evidence of possessing an identity wallet for a DID based on the W3C Standard for Self Sovereign Identity ([Decentralized Identifier (DIDs) v1.0 (w3.org)](https://www.w3.org/TR/did-core/)). This is necessary to:

- Receive verifiable credentials for the BPN issued by the agency described in the standard CX-0011 Issuing Agency.
- Receive verifiable credentials in verifiable presentations to proof attributes of other partners
- Provide verifiable credentials in verifiable presentations to other partners, allowing proof of their own attributes.

```text
Disclaimer:
 
In future releases it will be possible for every participant to operate the identity wallet
either by itself or by a 3rd party provider (Wallet Hosting Provider).
An appropriate migration process from the MIW to a self-hosted or 3rd party Wallet will be described.
```

A Core Service Provider MUST ensure that all dataspace participants are able to have an identity wallet.
A Core Service Provider CAN provide such a wallet hosting service to the participant. The wallet software which is used for the wallet hosting service CAN be the reference implementation of the **M**anaged **I**dentity **W**allet (MIW) at *https://github.com/eclipse-tractusx/managed-identity-wallet*.
If a Core Service Provider chooses to implement an own managed wallet solution to provide a wallet hosting service, the implementation MUST meet the following requirements:

- The wallet MUST follow the W3C Standard for Self Sovereign Identity ([Decentralized Identifiers (DIDs) v1.0 (w3.org)](https://www.w3.org/TR/did-core/))
- The wallet MUST have an appropriate access management for the functionalities of the wallet to prevent misuse of the partner identities described in **CX - 0015 IAM & ACCESS CONTROL PARADIGM FOR USERS AND CLIENTS**.
- Furthermore the wallet MUST implement at least the following functionalities:
  - Issuance of Verifiable Credentials
  - Verification of Verifiable Credentials
  
To validate these criteria for an own managed wallet implementation of the Core Service Provider please collect the following documents:

- Arch42 Documentation explaining the architecture, access management and process flows of the implementation

Hand this documentation to the conformity assessment body.

## 2. SELF SOVEREIGN IDENTITY

> *This section is normative*

See [ANNEXES](#annexes) [Self Sovereign Identity](#self-sovereign-identity)

### 2.1 MANAGED IDENTITY WALLET

> *This section is normative*

SSI will be an integral part of Catena-X. This requires a wallet for each company to store their private keys to issue verifiable credentials. Therefore, during onboarding, each company must receive an instance of the MIW to store credentials until it has its own truly decentral company wallet.

To ensure the processes needed for data exchange the MIW provides the following core functionalities:

- Issuance of Verifiable Credentials
- Verification of Verifiable Credentials
- User Access Management to the wallet functionalities

The Managed Identity Wallets (MIW) service implements the Self-Sovereign-Identity (SSI) readiness by providing a wallet hosting platform including a DID resolver, service endpoints and the company wallets itself.

A detailed description is available on GitHub: https://github.com/eclipse-tractusx/ssi-docu/blob/main/docs/architecture/cx-3-2/2.%20Managed%20Identity%20Wallet/MiW.md

### 2.2 DID METHOD

The DID method describes the implementation of a DID network, which includes the type of the anchoring of the DIDs and the Verifiable Data Registry. It is used for the resolving of the DID with the goal to receive the DID Document done with a resolver. A reference implementation of a DID resolver beeing able to resolve multiple DID methods is the "universal resolver" which  can be found here https://github.com/decentralized-identity/universal-resolver

The DIDs for the participants, generated by the Onboarding Provider at the moment of registration and managed by the Managed Identity Wallet, are based in the DID method did:web, which is specified here: https://w3c-ccg.github.io/did-method-web/

### 2.3 REGISTRATION PROCESS

To ensure that every participant of Catena-X has a valid DID, a new participating company will be provided a tenant in the Managed Identity at the moment of registration to become an official Catena-X partner.

The required company information for the registration process needs to be provided by the participant and validated by the Onboarding Service Provider. After successful registration, the Catena-X specific Business Partner Number (BPN) VC and Catena-X specific Membership VC get available in the Managed Identity Wallet.

## 3 REFERENCES

### 3.1 NORMATIVE REFERENCES

- CX-0015 IAM & ACCESS CONTROL PARADIGM
- CX-0011 ISSUING AGENCY

### 3.3 REFERENCE IMPLEMENTATIONS

> *This section is non-normative*

Managed Identity Wallet which supports the **did:web** method: https://github.com/catenax-ng/tx-managed-identity-wallets/tree/features/java-did-web

## ANNEXES

### Self Sovereign Identity

Self Sovereign Identity (SSI) is a loose concept and approach to digital identity that gives individuals control over the information they use to prove identity. It can be defined as the following:

Self-Sovereign Identity (SSI) is the next step beyond user-centric identity and that means it begins at the same place: the user must be central to the administration of identity. That requires not just the interoperability of a user’s identity across multiple locations, with the user’s consent, but also true user control of that digital identity, creating user autonomy. To accomplish this, a self-sovereign identity must be transportable and cannot be tide to one site or locale.

A self-sovereign identity must also allow ordinary users to make claims, which could include personally identifying information or facts about personal capability or group membership. It can even contain information about the user that was asserted by other persons or groups.

Self Sovereign Identity is based on the following ten principles:

1. **Existence**: Users must have an independent existence. Any self-sovereign identity is based on the ineffable “I” that is the foundation of identity. It can never exist fully in digital form. This must be the kernel of self that is upheld and supported. A self-sovereign identity simply makes public and accessible some limited aspects of the “I” that already exists.

2. **Control**: Users must control their identities. Subject to well-understood and secure algorithms that ensure the continued validity of an identity and its claims, the user is the ultimate authority on their identity. They should always be able to refer to it, update it, or hide it. This does not mean that a user controls all of the claims on their identity: other users may make claims about a user, but they should not be central to the identity itself.

3. **Access**: Users must have access to their own data. A user must always be able to easily retrieve all the claims and other data within his identity. There must be no hidden data and no gatekeepers. This does not mean that a user can necessarily modify all the claims associated with his identity, but it does mean they should be aware of them. It also does not mean that users have equal access to others’ data, only to their own.

4. **Transparency**: Systems and algorithms must be transparent. The systems used to administer and operate a network of identities must be open, both in how they function and in how they are managed and updated. The algorithms should be free open-source well-known, and as independent as possible of any architecture; anyone should be able to examine how they work.

5. **Persistence**: Identities must be long-lived Though private keys might need to be rotated and data might need to be changed, the identity remains. However, a user should be able to dispose of an identity if he wishes and claims should be modified or removed as appropriate over time.

6. **Portability**: Information and services about identity must be transportable. Identities must not be held by a singular third-party entity, even if it is a trusted entity that is expected to work in the best interest of the user. Transportable identities ensure that the user remains in control of his identity no matter what and can also improve an identity’s persistence over time.

7. **Interoperability**: Identities should be as widely usable as possible. Identities are of little value if they only work in limited niches. The goal of a digital identity system is to make identity information widely available, crossing international boundaries to create global identities, without losing user control.

8. **Consent**: Users must agree to the use of their identity. Any identity system is built  around sharing that identity and its claims, and an interoperable system increases the amount of sharing that occurs. However, sharing of data must only occur with the consent of the user.

9. **Minimalization**: Disclosure of claims must be minimized. When data is disclosed, that disclosure should involve the minimum amount of data necessary to accomplish the task at hand.

10. **Protection**: The rights of users must be protected. When there is a conflict between the needs of the identity network and the rights of individual users, then the network should err on the side of preserving the freedoms and rights of the individuals over the needs of the network. To ensure this, identity authentication must occur through independent algorithms that are censorship-resistant and force-resilient and that are run in a decentralized manner.

The leading technical implementation of SSI evolves around the open standards of Decentralized Identifiers (DIDs), Decentralized Public Key Infrastructure (DPKI) and Verifiable Credentials.

![summary_flow](./assets/open-standards-for-ssi.png)

Figure 1: Overview of Open Standards for SSI

Source: http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html
