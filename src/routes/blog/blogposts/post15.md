---
title: Cryptic Cryptography Codex
date: '2023-06-23'
---

# {title}

When working with sensitive data, it is inevitable to come across cryptography terms scattered here and there, be it for storing data, sharing data, de-identifying data, etc.
This post aggregates some of the common terms that I've come across related to cryptography in the software world, and also how the concepts relate to each other.

## Goals of Cryptography

Before diving into many of the cryptographic terms/acronyms used, it is useful to have a general overview of cryptography.

Confidentiality
Integrity
Authenticity
Availability
Non-repudiation

## Encryption, Decryption

## Cyphers / Cyphers / Ciphertext

## Plain Text

## Types of Algorithms

### Hash Functions

SHA

#### Message Integrity Code (MIC)

aka Message Authentication Code (no relation with MAC Address which stands for Media Access Control Address)

Poly1305 (TLS)

### Symmetric

aka Public key cryptography

#### Block Cyphers

AES

##### Mode of Operation

Since block cypher only work on fixed size blocks (e.g. 512bits), how do the algorithms deal with bigger sizes?

GCM Mode?

#### Stream Cyphers

RC4/ARCFOUR/ARC4 (older versions of SSL/TLS, but not recommended)
ChaCha20 (TLS)

### Asymmetric Algorithms

aka Private key cryptography

RSA?

### Hybrid Systems

TLS (SSL), SSH

### Strength of Algorithm

## Private / Public Keys

## AEAD

Authenticated Encryption, Associated Data

## Digital Signatures

Digital Signatures help to prove that the information sent to the recipient has not been tampered with in any way.

## Public Key Certificates

At a high level, a Certificate helps to (mostly) guarantee that a person is not an impostor.

https://crypto.stackexchange.com/questions/102565/how-do-certificates-help

Certificate includes information about:

    - key
    - subject, aka identity of the key's owner
    - issuer, aka entity that verified the certificate's contents

Helps to address this issue: "How do I know the subject I am communicating with is who they say they are?".
More concretely, "How do I know if this particular server that will be serving me web pages to www.abcxyz.com is actually the server of www.abcxyz.com and not just some other random server?"

Other names:

    - Digital Certificates
    - Identity Certificates
    - Certificates

### Certificate Authority

## PKCS#

## S/MIME

## Fingerprint

## pkcs .cer .pfx pem

## X.509

# Links

[TLS](https://www.rfc-editor.org/rfc/rfc8446)

(https://crypto.stackexchange.com/questions/87078/stream-cipher-and-block-cipher-usage-in-network-data-encryption)
