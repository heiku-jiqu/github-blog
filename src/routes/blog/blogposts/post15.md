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

## Certificate

## PKCS#

## S/MIME

## Certificate Authority

## Signatures

## Fingerprint

## pkcs .cer .pfx pem

## X.509

# Links

[TLS](https://www.rfc-editor.org/rfc/rfc8446)

(https://crypto.stackexchange.com/questions/87078/stream-cipher-and-block-cipher-usage-in-network-data-encryption)
