---
title: Cryptic Cryptography Codex
date: '2023-06-23'
---

# {title}

When working with sensitive data, it is inevitable to come across cryptography terms scattered here and there, be it for storing data, sharing data, de-identifying data, etc.
This post aggregates some of the common terms that I've come across related to cryptography in the software world, and also how the concepts relate to each other.

## Goals of Cryptography

Before diving into many of the cryptographic terms/acronyms used, it is useful to have a general overview of cryptography.

Broadly, there are some goals of cryptography which are related to information security:

- Confidentiality: Data that is secret is not able to be accessed/read by unauthorized users
- Integrity: Data is not altered by unauthorized users
- Authenticity: Data is sent/received between intended parties
- Non-repudiation: Action(s) done by a party cannot be refuted (e.g. I should not be able to send a message and later refute that the message wasn't sent by me)
- Availability: Data is available to authorized users in a timely manner

Note that some concepts do overlap with each other, for example if a protocol provides Authenticity, it also provides Integrity since it confirms that no unauthorized users has been involved in the communication channel.

## Encryption, Decryption

Encryption is the process of turning plaintext into cyphertext.
Decryption is the other way round, turning cyphertext back into plaintext.

## Plaintext

Plaintext is the data/information that that is unencrypted.
This includes any type of binary data, not just textual data.

## Cyphertext

Cyphertexts are the output of encrypting plaintext.
The bits will be scrambled in such a way that it does not resemble its original plaintext form anymore.

## Cyphers

Cyphers refer to the algorithms that is used to transform plaintext into cyphertext (encrypt), or cyphertext into plaintext (decrypt)

## Types of Algorithms / Cyphers

There are 3 broad categories of encryption: Hash functions, Symmetric algorithms, and Asymmetric algorithms.
These 3 categories form the building blocks of cryptography in computing, and can be combined/pieced together in ways to provide more novel use cases.

### Hash Functions

Hash functions are **one-way** functions that can only encrypt.
When an input passes through a hash function, the output will be a relatively small, fixed sized number of bytes called the _digest_.
It is designed to be impossible to decrypt and go from the digest back to the input (hence "one-way").
However, the important property is that the digest is designed to not clash when different inputs are used (technically it is extremely low probability).
Meaning, even if your input changes one single bit, passing it through a hash function will give a completely different result.
This makes it useful to verify whether anything that you have has been tampered with.

Common examples include: SHA, Poly1305 (used in TLS).

#### SHA

An example of a common hash function is **SHA** which stands for Secure Hash Algorithm.
SHA currently has 4 generations: SHA-0 to SHA-3. SHA-0 and SHA-1 are already considered insecure by today's standards and should not be used.

Within the SHA-2 and SHA-3 families, there are different variants that differ based on the size of the output.
Variants have naming conventions of "SHA-<size of output>" for SHA-2 and "SHA**3**-<size of output>" for SHA-3.
For example, "SHA-256" refers to SHA-2 variant that generates 256bit length output, and "SHA**3**-256" refers to SHA-**3** variant that generates 256bit length output.
_Note that there are no variants for SHA-0 and SHA-1_.

### Symmetric Algorithms

Symmetric algorithms (aka private key cryptography) are algorithms where you pass in your data and a key (which is generated, akin to the "password"), and it will encrypt the data as output.
To decrypt, pass in the cyphertext as well as the same key, and it will generate the original plaintext data.

The term "symmetric" comes from the fact that both encryption and decryption uses the same key, and the term "private key" comes from the fact that the same key which you used to encrypt must be shared to whoever needs to decrypt.

An important property of symmetric algorithms is it is very fast compared to asymmetric algorithms, and of course the ability to get back the original data from cyphertext.

There are two broad categories of symmetric algorithms: block cyphers and stream cyphers.

#### Block Cyphers

Block cyphers, as the name suggests, operate by encrypting the plaintext in fixed-length blocks, and the leftover bits will be padded to the size of the blocks.

Common examples include: AES, DES.

##### Mode of Operation

Since block cyphers are only able to encrypt one block of fixed number of bits (e.g. 256 bits), there is a need to determine how to actually repeat this one block operation on the entire plaintext data. This is known as the block cypher's _mode of operation_.

Some common modes of operation include:

- CBC (Cypher Block Chaining)
- CFB (Cypher FeedBack)
- OFB (Output FeedBack)
- ECB (Electronic CodeBook)
- CTR (Counter)

AEAD modes:

- GCM (Galois Counter Mode)
- CCM (Counter with CBC-MAC)
- SIV (Synthetic Initialisation Vector)

#### Stream Cyphers

Stream cyphers work by flipping the bits of a plaintext one bit at a time using the XOR operator against another sequence of bits (known as the keystream)
Every bit of the plaintext is XOR-ed against the corresponding bit of the keystream.
The keystream is generated pseudo-randomly by the algorithm, and typically is initialised with a seed value.
The same seed value will produce the same keystream which in turn lets the receiver decrypt the cyphertext.
This means that the seed value is the secret key, and it has to be generated randomly and should not be reused.

Benefits:

    - Fast, built on XOR operations instead of complicated math algorithms
    - Ability to decrypt any chunk instead of the whole file (e.g. for video seeking)

Examples of Stream Cyphers:

    - RC4/ARCFOUR/ARC4 (older versions of SSL/TLS, but not recommended)
    - ChaCha20 (used in TLS)

### Asymmetric Algorithms

aka public key cryptography

Asymmetric algorithms works by generating a key pair: a public key and a private key.

The two keys in the key pair are mathematically linked, such that it allows unique properties:

- Anything encrypted by the public key can only be decrypted by the private key
- Anything encrypted by the private key can only be decrypted by the public key
- Note: Cyphertext using private key != Cyphertext using public key
- It is practically impossible to reverse engineer the private key from the public key

Allows anyone ('public') with the public key (which is freely distributed) to send secret (encrypted) messages to the owner of the private key.

The second property on the surface seems useless, since theres not point in encrypting something that the public can decrypt.
However, this property actually enables digital signatures.

Examples of asymmetric algorithms:

    - RSA (Rivest-Shamir-Adleman)
    - ECC (Eliptic Curve Cryptography)

### Hybrid Systems

Hybrid systems are just implementations that makes use of multiple types of cryptography.
For example, TLS (SSL) uses both Asymmetric and Symmetric algorithm for communicate between server and clients.
This allows systems to leverage the speed of Symmetric algorithms while still gaining the utilities of Asymmetric algorithms.

## Digital Signatures

Digital Signatures help to prove that the information sent to the recipient has not been tampered with in any way.

Digital Signatures work by:

    1. Sender distributes public key to recipient
    1. Sender hashes message to obtain a digest of the message
    1. Sender encrypts digest with his private key (The output is the Signature!)
    1. Sender sends recipient the message and digest
    1. Recipient hashes message from Sender
    1. Recipient uses Sender's public key to decrypt the Signature to obtain Sender's Hash
    1. Recipient compares Recipient's hash and Sender's hash, if they are the same, then Recipient knows that the message has not been tempered with and that the Sender indeed sent that message, not anyone else

## Message Integrity Code (MIC)

aka Message Authentication Code (MAC)

Like Digital Signatures, MIC helps to prove that the information sent between parties has not been tampered with in any way.
However, the difference is that MIC uses the same secret key to generate and verify the MIC, whereas digital signatures are generated with private key and verified with public key.

    1. Sender and Receiver agrees on secret key
    1. Sender inputs message + secret key into MIC Algorithm to obtain the MIC
    1. Sender sends recipient the message and MIC
    1. Recipient inputs message + secret key into MIC Algorithm to obtain his own MIC
    1. Recipient compares Recipient's MIC and Sender's MIC, if they are the same, then Recipient knows that the message has not been tempered with and that the Sender indeed sent that message, not anyone else

_Note: this has no relation with MAC Address which stands for Media Access Control Address._

## AEAD

Authenticated Encryption (AE) is when an encryption/decryption method assures both confidentiality and data integrity, i.e. the receiver knows when the cyphertext has been tampered with. This can be done by sending the MIC along with the ciphertext.

Authenticated Encryption with Associated Data (AEAD) is just an extension, where there instead of generating the MIC from just the message ciphertext, you obtain the MIC from message ciphertext + any associated data. This sort of encryption method allows you to send ciphertext + (unencrypted) associated data, all while ensuring confidentiality and data integrity.

## Public Key Certificates

At a high level, a Certificate helps to (mostly) guarantee that a person is not an impostor.

Certificate includes information about the owner's:

    - public key
    - subject, aka identity of the key's owner
    - issuer, aka entity that verified the certificate's contents
    - signature, aka the issuer will hash the ceritifcate contents and encrypt the hash with its own private key

Helps to address this issue: "How do I know the subject I am communicating with is who they say they are?".
More concretely, "How do I know if this particular server that will be serving me web pages to www.abcxyz.com is actually the server of www.abcxyz.com and not just some other random server?"

Other names:

    - Digital Certificates
    - Identity Certificates
    - Certificates

### Certificate Authority

A Certificate Authority (CA) is an entity that signs and issues digital certificates.
They act as a third party to assert that digital certificates used by servers have been verified by them.
Users that visit servers with certificates can verify the certificate's authenticity by decrypting the signature with CA's public key, and matching the result with the hash of the certificate's contents.
If they match, then users can be relatively assured that the server is who they say they are.

## Fingerprint

Fingerprints are similar to hash functions, in that they take an arbitrarily large input and produces a relatively small output that uniquely identifies the input.
However, the difference is that fingerprints have no constraints whether the output can be reverse engineered to get the input.
In other words, all hash functions are fingerprints, but not all fingerprints are hash functions.

## X.509

X.509 is a standard format for public key **certificates** that was defined by the International Telecommunication Union (ITU).
The standard is defined using Abstract Syntax Notation One (ASN.1) language.
It defines what information should be in an X.509 certificate, such as the subject's name, public key, certificate validity period etc.
However, the standard does not define how the information is physically stored, hence the information can be encoded in different ways (e.g. binary formats), but rather ASN.1 itself has several encoding rules that people can use to encode ASN.1 information.
The most relevant ASN.1 encoding used in X.509 is Distinguished Encoding Rules (DER) encoding.

## Privacy-Enhanced Mail (PEM)

DER encoding produces binary output, and this may be troublesome for systems that only support ASCII (email), hence a further Base64 encoding on top of DER binary output was also developed: Privacy-Enhanced Mail (PEM).

PEM is a very general file format that can store multiple data that is Base64 encoded, it just has to have `---- BEGIN xxx ----` and `---- END xxx ----` section delimiters:

```
----- BEGIN CERTIFICATE -----
AWOIEJFOAIWJLKJASDF
----- END CERTIFICATE -----
----- BEGIN PRIVATE KEY -----
2342J34RIJ34IJ4FI
----- END PRIVATE KEY -----
```

Although originally developed for email, S/MIME and PGP standards made PEM obsolete, so nobody ended up using PEM for email.
But the Base64 encoding format became widely popular and became widely supported in cryptography systems.

Note that PEM files can store not just certificates, but also private key, or even multiple things in one PEM file.

Common file extensions for PEM format include:

    - `.pem` for any type of data, best to check section delimiters to see what it stores
    - `.cer` / `.crt` for certificates
    - `.key` for private keys

## PKCS

PKCS stands for Public Key Cryptography Standards, which includes a number of standards that are adopted in cryptographic systems to ensure that everyone is on the same page.

Usually, people will reference specific PKCS standards such as PKCS#7, PKCS#8, PKCS#11, etc.

### PKCS#7 / Cryptographic Message Syntax (CMS)

This standard describes how to sign, digest, authenticate, or encrypt arbitrary message contents and how to represent the resulting data.
Defined in ASN.1 language.
Think of PCKS#7 file as a container that can contain multiple things, such as the message hash, a certificate, a signature, etc.
The file usually has extension `.p7`.

When a PKCS#7 only has certificate and no message, it is usually stored as a `.p7b` file.

PKCS#7 standard evolved to Cryptographic Message Syntax standard, however they are still used interchangeably in layman (much like SSL refers to TLS).

### PKCS#12 / Personal Information Exchange (PFX)

PCKS#12 is similar to PKCS#7, but it contains both private and public key, and the file itself is encrypted with a password.
It usually comes in `.p12` or `.pfx` files.

# Links

[TLS](https://www.rfc-editor.org/rfc/rfc8446)

[Stream and Block Cyphers](https://crypto.stackexchange.com/questions/87078/stream-cipher-and-block-cipher-usage-in-network-data-encryption)

[Encodings of PKIX, PKCS and CMS](https://www.rfc-editor.org/rfc/rfc7468)

[ITU-T Recommendation Series](https://en.wikipedia.org/wiki/Category:ITU-T_recommendations)
