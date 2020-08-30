// ignore "$id".
let data_EN = [
  {
    $id: '1',
    ID: 12,
    Lesson_Name: 'Ethash',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '2',
        Title: 'Ethash hashing algorithm',
        Description:
          'The Ethash algorithm was created for the Ethereum currency. It is memory-hard and requires an increased amount of mining video cards’ RAM. Moreover, AMD cards show better results because of architectural features. ',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '3',
        Title: 'History of development',
        Description:
          'The Ethash algorithm was developed by Vitalik Buterin. In 2015, he introduced it to the world, along with the Ethereum cryptocurrency. It was originally called Dagger-Hashimoto.\r\n \t\r\nInitially, Ethash-based mining needed at least 2 GB of RAM. Then the requirements were expanded to 3.5 GB. Besides, mining was carried out on the special software and represented a process of creating a DAG file up to several GB.  \r\n \r\nPreviously, hard disk drives (HDDs) were used to store a DAG file. In 2016, they were replaced by video cards, and it coincided with the release of the ClayMore software.\r\n \r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '4',
        Title: 'Technical characteristics of Ethash algorithm',
        Description:
          'Mining on Ethash is a process of forming graphs, trees with consecutive nodes. This architecture complicates the decryption process lowering chances of a random selection of values almost to zero. \r\n \r\nOver time, the development team improved the algorithm and changed its name from Dagger-Hashimoto to Ethash. Now its work is based on the principle of hashing metadata of the previous block using the Nonce code, a binary number for the unique hash formation.\r\n \r\nEarlier, the Ethash algorithm was unavailable for ASIC devices; however, the Bitman company managed to develop a specialized miner.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '5',
        Title: 'Ethash-based cryptocurrencies',
        Description:
          'Nowadays, a lot of cryptocurrencies use Ethash:\r\n \t\r\n●     Ethereum. The first cryptocurrency that started to use Ethash, the second famous cryptocurrency (after Bitcoin).\r\n \r\n●     Ethereum Classic. An Ethereum’s fork that was created by Internet users. \r\n \r\n●     Expanse. A cryptocurrency that shows results even at medium capacity. \r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '6',
    ID: 13,
    Lesson_Name: 'ECDSA',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '7',
        Title: 'ECDSA asymmetric encryption algorithm',
        Description:
          'The Elliptic Curve Digital Signature Algorithm (ECDSA), an asymmetric encryption algorithm, is based on the principle of using properties of algebraic elliptic curves to create digital signatures.\r\n \r\nFor the first time, this method was applied in cryptography in 1985. However, it has been used as the digital signature standard since the late 1990s.\r\n \r\nThe cryptographic stability of the algorithm is achieved by means of the mathematical problem of the discrete logarithm in the group of points of an elliptic curve.\r\n \r\nAn elliptic curve is a set of pairs of points X and Y that satisfy the equation:\r\n \r\nY² = ax³ + bx + c.\r\n \r\nA general view of the elliptic curve:\r\n',
        Diagram:
          'https://forex-images.ifxdb.com/userfiles/20190618/analytics5d08e033212b0.png',
        Caption: '',
      },
      {
        $id: '8',
        Title: '',
        Description:
          'And here is the elliptic curve of Bitcoin described by the equation y2 = x3 + 7:',
        Diagram:
          'https://forex-images.ifxdb.com/userfiles/20190618/analytics5d08e096aad78.png',
        Caption: 'Several remarkable properties of elliptic curves',
      },
      {
        $id: '9',
        Title: '',
        Description:
          '1. If a non-vertical line crosses an elliptic curve at two points (P and Q), then it will inevitably cross it at the third point (R):\r\n \r\n',
        Diagram:
          'https://forex-images.ifxdb.com/userfiles/20190618/analytics5d08e0b0af772.png',
        Caption: '',
      },
      {
        $id: '10',
        Title: '',
        Description:
          '2. If a non-vertical line is tangent to an elliptic curve at P point, then it will inevitably cross the curve at R point:',
        Diagram:
          'https://forex-images.ifxdb.com/userfiles/20190618/analytics5d08e0cd12a9a.png',
        Caption: '',
      },
      {
        $id: '11',
        Title: '',
        Description:
          'The ECDSA algorithm also uses properties of finite fields of the elliptic curve.\r\n \r\nA finite field is a given range of positive numbers within which the results of algebraic calculations lie.\r\n \r\nElliptic curves in the framework of finite fields change while preserving all mathematical properties. \r\n \r\nThe elliptic curve of Bitcoin combined with a finite field looks like this:\r\n',
        Diagram:
          'https://forex-images.ifxdb.com/userfiles/20190618/analytics5d08e0ebd6c57.png',
        Caption:
          'The process of applying the ECDSA algorithm to create a digital signature',
      },
      {
        $id: '12',
        Title: '',
        Description:
          'A digital signature is an encrypted hash of the message, that’s why it is needed to: \r\n \r\n1. get the hash of the message;\r\n2. hash it;\r\n3. convert the resulting irreversible hash (the digital imprint of the message) to a bit number;\r\n4. encrypt it using the ECDSA algorithm. \r\n \r\nThe private key is used to generate a ECDSA digital signature. However, the authenticity of the digital signature can only be verified by an open-access public key. \r\n \r\n \r\n \r\nThe ECDSA encryption algorithm ensures fairly high reliability and has not been hacked yet using the available computing power.\r\n \r\nIt is only possible to crack the ECDSA on smartphones with the help of the so-called “third-party attack”:\r\n \r\nWhen smartphones generate a digital signature, they emit certain electromagnetic waves. Hackers learned how to extract the encryption key by measuring the wavelength. But for this, it is necessary to have direct access to the device.\r\n \r\nBesides, the ECDSA algorithm is also vulnerable to quantum computers. \r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '13',
    ID: 14,
    Lesson_Name: 'Ed25519',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '14',
        Title: 'Introduction',
        Description:
          'Ed25519, an algorithm that takes input message and produces an output value in which the receiver of the message can mathematically confirm that the message has no longer been changed in transit and came from a person possessing a selected secret. \r\nThe purpose of the Ed25519 digital signature is to create non-repudiation, a key characteristic of a moist signature. The core feature function of an Ed25519 digital signature is that the signer might be certainly discover based on the signed message because the signed message can only be produced by means of relevant personal key holders.   \r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '15',
        Title: 'Background',
        Description:
          'The general public key and the non-public key play essential roles in the technique of signing with the non-public key, publishing the general public key, and sending the message and its signed model for validation purposes. The pair has a tendency to appear together and is kind of inseparable like quantum entanglement. The public and private key are commonly generated through a unique one-way function and a random number. The complexity of fixing the one-way function f(x) = y is equal to that of fixing polynomials while fixing the inverse function, f-1(y) = x, is exponential difficulty. The cost of calculating a private key from a public key exceeds the functionality of any modern computing systems. The signature version is safe enough by way of now. But, if quantum computers are available inside the future, then the current asymmetric encryption mechanism such as RSA, DLP (Discrete Logarithm Problem) or ECC (Elliptical Curve Cryptography, expanded from DLP) will not be safe anymore. In other words, the attainment of quantum safety will in all likelihood take as long as the discovery of quantum computer systems.\r\nThe signature algorithm, on which the era of account addresses and transactions is all primarily based, is essential for the blockchain gadget. To choose a signature set of rules, we want to assess the algorithm’s security and overall performance, wherein security is the greater important challenge. Satoshi Nakamoto selected “ECDSA over secp256k1”. Secp256k1 became a koblitz curve described by using SECG. Before Nakamoto’s paper, the algorithm wasn’t absolutely utilized by everybody. “ECDSA over secp256k1” is designed transparently, whilst the “secp256r1” curve (the more mainstream p256 algorithm) utilized by NIST has bizarre parameters, which can be extensively diagnosed because the lower back door arranged by way of NSA. A series of subsequent incidents certainly proved the vision of Nakamoto’s preference, which become picked up via Ethereum and EOS.     \r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '16',
        Title: 'Security',
        Description:
          'Ed25519 changed into taken into consideration “safe” after being examined and reviewed by using many independents and well-known safety specialists, at the same time as secp256k1 became deemed “unsafe.” ',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '17',
        Title: 'Performance',
        Description:
          'The overall performance of Ed25519 is several times quicker than ECDSA over secp256k1. We believe that the speed boost will substantially enhance the performance of Vite system. Further, the signature of Ed25519 is slightly shorter than that of ECDSA, which reduces the stress of the network transmission and the storage system.  ',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '18',
    ID: 15,
    Lesson_Name: 'RIPEMD160',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '19',
        Title: 'Introduction',
        Description:
          'The 160-bit RIPEMD-160 (also termed RIPE message digests) are typically represented as 40-digit hexadecimal numbers. RIPEMD-160 is a 160-bit message digest algorithm and cryptographic hash function. It is an improved version of RIPEMD, which in turn was based upon the design principles used in MD4, and is similar in performance to the more popular SHA-1.',
        Diagram:
          'https://forex-images.instaforex.com/userfiles/20190711/analytics5d2735f8f03bd.png',
        Caption:
          'A sub-block from the compression function of the RIPEMD-160 hash algorithm',
      },
      {
        $id: '20',
        Title: 'Background',
        Description:
          "A cryptographic hash function is an algorithm that can be run on data such as an individual file or a password to produce a value called a checksum. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes. A cryptographic hash function is a special class of hash function that has certain properties which make it suitable for use in cryptography. Hash functions are generally irreversible which means you can't figure out the input if you only know the output unless you try every possible input which is called a brute-force attack.",
        Diagram: '',
        Caption: '',
      },
      {
        $id: '21',
        Title: 'Conclusion',
        Description:
          'The design philosophy of RIPEMD-160 is to build as much as possible on experience gained by evaluating MD4, MD5, and RIPEMD. Like its predecessors, RIPEMD-160 is tuned for 32-bit processors, which we feel will remain important in the coming decade. ',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '22',
    ID: 17,
    Lesson_Name: 'Catapult',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '23',
        Title: 'Introduction:',
        Description:
          'Catapult is a full-featured blockchain engine that can power both private and public networks with its unique smart contract plugins. These plugins enable bulletproof digital asset creation, decentralized swaps, advanced account systems and business logic modeling. ',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '24',
        Title: 'Background:',
        Description:
          'Catapult offers new uses that have never been there on any blockchain through ‘Aggregated Transactions’ and ‘Multi-Level Multisignature Accounts’. NEM’s revolutionary blockchain technology accelerates enterprise solutions which serve the needs of the biggest technology businesses of the world and thereby moving ahead of other enterprise blockchains.\r\nCatapult’s four-layered architecture:\r\nLayer 1: Core Blockchain Server for P2P Transactions \r\nLayer 2: MongoDB and API Server\r\nLayer 3: SDKs (Javascript, Java, C#, Typescript and lots more)\r\nLayer 4: NEM Apps and Light Clients \r\n\r\nCatapult is fast because it’s built with a four-layered architecture. This keeps each layer free from getting slowed down by the others. So API calls and data queries can respond quickly even with high traffic. It also allows developers to update any of these tiers without disrupting the others, improving security. \r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '25',
        Title: 'Catapult Features: ',
        Description: '',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '26',
        Title: 'Aggregated Transactions – Decentralized Swaps',
        Description:
          'With Aggregated Transactions, it is possible to merge various transactions into just one. As a result, this will make it possible to conduct trustless swaps on the blockchain. Automated cross-chain transactions and other advanced logic will be possible effortlessly. To achieve this, Catapult generates a disposable contract. When both parties approve the transaction, all of them are executed at the same time. NEM Catapult is the only blockchain that can do this thus far.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '27',
        Title: 'Decentralized Swaps',
        Description:
          'Let’s take the example of a buyer who needs to purchase a license for 1000 XEM. The license is listed on an exchange. However, the buyer prefers to keep their private keys off the exchange. Catapult will automatically create three transfers required for a trustless swap. These transfers are:\r\n1000 XEM transferred to the seller, transferring the license to the buyer, and an XEM exchange fee made to the exchange.\r\nAll of these transfers will be executed on Catapult in one transaction. With the built-in escrow, it will ensure that transfers succeed or they fail together. It is worth noting that while the exchanges facilitate transactions, they will never hold your key. Thus, the funds can never be interrupted or seized.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '28',
        Title: 'Automated Transaction Fee Payment',
        Description:
          'For instance, if you send $100 using the payment, but you do not have XEM to pay the transaction fee, Catapult will automatically convert USD to XEM. Now you will be able to utilize the Catapult blockchain without having to hold or buy XEM.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '29',
        Title: 'Multi-Level MultiSig Accounts',
        Description:
          'This makes it possible to use the AND/OR logic to a multi-sig transaction on the blockchain. With this capability, the possibilities for business logic are greatly expanded.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '30',
        Title: 'Fraud Detection',
        Description:
          'Catapult also comes with Fraud detection AI. The transactions can only be approved from a hardware wallet or a phone combined with the fraud detection AI. It allows for various security configurations at the protocol level to safeguard customers and businesses.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '31',
        Title: 'Account Recovery',
        Description:
          'Catapult also has account recovery features. This means that you can set up an account so that it can be recovered using signatures from specific accounts.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '32',
        Title: 'Conclusion: ',
        Description:
          'Catapult represents a commercial open source approach to an enterprise distributed ledger offering built by Tech Bureau, powering both public blockchain networks, like NEM, as well as larger-scale, high-throughput enterprise distributed ledger deployments, complete with unique smart contract plugins. These plugins enable bulletproof digital asset creation, decentralized swaps, advanced account systems and business logic modeling. \r\nCatapult is supposed to become a comprehensive blockchain system that can be used for numerous purposes including IOT micropayments, securities trading, sharing economy and user identity verification, among others.\r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '33',
    ID: 18,
    Lesson_Name: 'Groestl',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '34',
        Title: 'Introduction',
        Description:
          'Groestl is an iterated hash function where the compression function is built from two fixed, large, different permutations. The design of Groestl is transparent and based on principles very different from those used in the SHA-family.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '35',
        Title: 'Background',
        Description:
          'Groestl is a less complex hashing algorithm and it performs well on GPUs and even on CPUs. Also this is one of the most efficient mining algorithm as it consumes very less power per hash compared to other algorithms. Due to this mining this algorithm will be quieter and cooler.\r\nGroestl is an ASIC resistant GPU friendly algorithm which an average computer user can mine. Groestl uses two rounds of pure Groestl-512 and there are no ASICs available or in production yet for. However FPGAs are available; there are several guides and implementation on FPGA you can find online.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '36',
        Title: 'Description',
        Description:
          "Like other hash functions in the MD5/SHA family, Groestl divides the input into blocks and iteratively computes hi = f(hi−1, mi). However, Groestl maintains a hash state at least twice the size of the final output (512 or 1024 bits), which is only truncated at the end of hash computation.\r\nThe compression function f is based on a pair of 256- or 512-bit permutation functions P and Q, and is defined as:\r\nf(h, m) = P(h ⊕ m) ⊕ Q(m) ⊕ h\r\nThe permutation functions P and Q are heavily based on the Rijndael (AES) block cipher, but operate on 8×8 or 8×16 arrays of bytes, rather than 4×4. Like AES, each round consists of four operations:\r\n1.\tAddRoundKey (the Groestl round keys are fixed, but differ between P and Q)\r\n2.\tSubBytes (this uses the Rijndael S-box, allowing sharing with AES implementations)\r\n3.\tShiftBytes (expanded compared to AES, this also differs between P and Q, and 512- and 1024-bit versions) \r\n4.\tMixColumns (using an 8×8 matrix rather than Rijndael's 4×4)\r\nUnlike Rijndael, all rounds are identical and there is no final AddRoundKey operation. 10 rounds are recommended for the 512-bit permutation, and 14 rounds for the 1024-bit version.\r\nThe final double-width hash receives a final output transformation of\r\nΩ(h) = h ⊕ P(h)\r\nand is then truncated to the desired width. This is equivalent to applying a final iteration of the compression function using an all-zero message block m, followed by a exclusive-or with the fixed constant Q(0).\r\n",
        Diagram: '',
        Caption: '',
      },
      {
        $id: '37',
        Title: 'Groestl Coins',
        Description:
          'There are many coins under Groestl algorithm such as Myriad coin (XMY), DigiByte (DGB), Verge (XVG) etc. But only one cryptocurrency is powered by Groestl Proof of Work algorithm and that is Groestlcoin. Diamond coin (DMD) also implemented Groestl but its optional which in addition to that also uses Myriad-Groestl algorithm. Anyways mining phase for Diamond coin has ended and it switched to environmental friendly Proof of Stake technology. Then there is Secure (SRC – Secure chain) which is another multi-algorithm coin that uses Groestlalong with 4 other algorithms. Moreover this coin seem to be less active. Groestlcoin is fairly distributed and decentralized. It is a fast, secure and privacy oriented cryptocurrency with almost ZERO fees.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '38',
        Title: 'Conclusion',
        Description:
          'Groestl is a byte-oriented SP-network which borrows components from the AES. The S-box used is identical to the one used in the block cipher AES and the diffusion layers are constructed in a similar manner to those of the AES. As a consequence there is a very strong confusion and diffusion in Groestl. ',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '39',
    ID: 19,
    Lesson_Name: 'Skein',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '40',
        Title: 'Skein',
        Description:
          'Skein is a variable-bit hashing algorithm developed in 2008. The Skein hash function is a universal cryptographic primitive or a simple algorithm based on the block cipher Threefish, operating in UBI-hashing mode.\r\nThreefish is a configurable block cipher that is used for 256, 512, and 1024 bit blocks. The cipher is implemented as a substitution- permutation network. It is based on the MIX function which accepts two 64-bit words using single addition blocks, rotation by constant and by module 2 (XOR). Thanks to the Threefish device, the Skein network runs fastest on 64-bit processors.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '41',
        Title: 'UBI',
        Description:
          'UBI mode is a hashing algorithm where each link combines input messages from the previous chain link with a sequence of arbitrary length and sets the output value to a fixed size. Messages (tweaks) are transmitted between links. Each tweak contains information about how many bytes have been processed, as well as the start and end of the chain flags. UBI mode guarantees a separate, non-repetitive hashing result for the same message. It provides additional protection by getting the same messages on the input of the hash function and the cipher.\r\n\r\nSubstitution–permutation network consists of two types of layers used repeatedly in order of priority. One of the main requirements for Skein development is optimization for 64-bit processors and active use of table calls. Compared to other algorithms based on the popular SHA 3, Skein is among the top 5 fastest. However, it applies only for the 64-bit processor which is four times faster than the 32-bit one.\r\nThere are implementations of Skein for three variants: 256, 512, and 1024 bits. The main option is considered to be Skein-512 as it is recognized as one of the safest. According to the developers, it can be used for all cryptographic applications in the nearest future. The 1024-bit version is more secure than Skein-512 and works twice as fast in existing hardware implementations. Nevertheless, Skein-256 is the most optimal version, experts pinpoint. It can be perfectly used in low-memory devices such as smart cards, as it requires only 100 bytes of RAM, unlike Skein-512, which requires 200 bytes.\r\nThe technology provides a high degree of protection, allows the user to control the integrity of information and guarantees the safety of user data owing to the MAC calculating and using the NMAS integrity check mechanism. Skein can be implemented provided that different programming languages are used.\r\nThe main principles of Skein are optimization for a minimum amount of memory, cryptographically secure hashing of small messages and resistance to all existing attacks on hash functions.\r\n\r\n\r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '42',
    ID: 20,
    Lesson_Name: 'Blake256',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '43',
        Title: 'Introduction:',
        Description:
          'SHA256, used in Bitcoin, has a number of technical shortcomings due to its Merkle-Damgard construction. These vulnerabilities led to the SHA3 competition for a new hash function based on a different fundamental construction. Hcash has chosen BLAKE256 as its hash function, a finalist for the competition. The hash function is based around a HAIFA construction that incorporates a variation of the ChaCha stream cipher by Bernstein. The hash function is notable for its high performance on x86-64 microarchitecture, being faster for short messages than SHA256 despite being considered to have a much higher security margin at 14-rounds. ',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '44',
        Title: 'Background:',
        Description:
          'Blake256 is a hashing function that is a part of the Blake family of algorithms, uses 32-bit words and produces digest sizes of 256 bits. Blake256 is a part of the first version of the Blake algorithm. In the Blake 2 family of algorithms, a successor of Blake256, BLAKE2s is used.\r\nAs all of the blake-based algorithms, Blake256 is based on and uses ChaCha stream cipher developed by Dan Bernstein. However, Blake256 provides some additional features, like adding a rearranged copy of the input block, XORed with several round constants before each round of the ChaCha cipher.\r\nAs a part of the broader Blake family, Blake256 is a SHA-3 competition finalist, popular and broadly implemented hashing function. However, it lost a part of the audience with the introduction of the Blake2 family of algorithms. Blake256 is based on the HAIFA construction principle.\r\nInitially, Blake256 used 10 rounds while operating. However, during the NIST hash function competition, developers made some changes to improve security. The number of rounds was increased from 10 to 14 for Blake256 and from 14 to 16 for Blake 512. It made it a little slower, but much secure and allowed it to remain very fast. Blake256 has very strong performance ratings on x86-64 microchip architecture, making it significantly faster than SHA-3 hashing function.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '45',
        Title: 'Blake256 mining:',
        Description:
          'Blake256 hasn’t manage to become widely used in the cryptocurrency industry. The only prominent coin using Blake256 is the Decred cryptocurrency. Decred is a popular cryptocurrency that is concentrated on open governance, decentralization and integrity of the network’s participants.\r\nSolo mining of DCR is discouraged by the developers. The Decred network is often to gain a hash rate of up to 10,000Gh/s. Solo mining of the coin with such hash rate can only be performed by the individuals with very powerful gear or organized groups with a many combined GPUs. Solo mining with the average gear can’t be profitable within the Decred network.\r\n\r\nDecred developers support pool mining approach and a lot of mining pools offer DCR mining. The following mining pools are mentioned as supportive of the Decred cryptocurrency: \r\n• BeePool\r\n• F2Pool\r\n• Poolin\r\n• UUpool\r\n• Luxor\r\n• Coinmine\r\n• Suprnova\r\nTo start DCR mining one should first ensure that his GPUs have all the latest updates. Then, it would be best to download the official Decred miner - Gominer. However, there are also third party miners for the Decred cryptocurrency - cgminer, ccminer and sgminer, that are also pretty efficient and are not dissuaded to use by the developers of the coin.\r\nCoinbase maturity of DCR is 256 blocks, meaning that mined coins can be spend only after 256 new blocks are validated following the origin of the coins.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '46',
        Title: 'Blake256 coins: ',
        Description:
          '\r\n• Decred (DCR)\r\n• Vcash (XVC)\r\n• TrumpCoin (TRUMP)\r\n• Blakecoin (BLC)\r\n• BigCoin (HUGE)\r\n• StarTrek (UFC)\r\nIn the cryptocurrency space Blake256 hashing algorithm has not been used widely. The only coin that is currently using Blake256 algorithm is Decred. Decred is one of the most popular cryptocurrency which ranks in the top 50 of CoinMarketCap. It is an autonomous digital currency with hybrid consensus system (PoW/PoS) which is focused on decentralization and open governance.\r\nNow Blake256 algorithm is a unique PoW algorithm meaning Decred coin is the only project using it so far. However do not that this algorithm is not designed to be ASIC resistant. Easy and fast implementation of hardware is the main design goal of Blake256. This has lead many different ASIC manufacturers to produce chips for Decred’s algorithm. \r\n\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '47',
        Title: 'Conclusion:',
        Description:
          'Blake256 is the predecessor to Blake2s, based on the original Blake algorithm. There are several versions of Blake now. The original Blake was entered into the National Institute of Standards and Technology (NIST) hash function competition back in 2012. The only difference between this algorithm and other Blake algorithms is that it uses 32-bit words and produces 256-bit digest size. The ultimate winner of the competition was Keccak.  ',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '48',
    ID: 21,
    Lesson_Name: 'Blake2b',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '49',
        Title: 'Blake2b technology',
        Description:
          "The Blake2b algorithm is a version derived from Blake2. The algorithm was developed by a group of specialists, including Jean-Philippe Aumasson, Luca Henzen, Willi Meier, and Raphael C.-W. Phan. Blake2 is also a basis of the Blake2s algorithm.\r\nBlake2b is used for data encoding like other cryptographic hashing functions. It is based on Dan Bernstein's ChaCha stream cipher. The Blake2 protocol provides hashing functions with the highest level of data protection. The technology was introduced in 2012 and since then no hacker attack has been recorded.\r\nThe crypto society welcomed the Blake2b technology. In 2008, the Blake2 protocol took part in the competition held by The National Institute of Standards and Technology (NIST). It was one of the 5 finalists and surpassed over a hundred of other competitors. Here are the best qualities of the program product:\r\n•\thigh performance\r\n•\texcellent analytical quality\r\n•\tsignificant level of security\r\n•\tversatile innovation.\r\nThe key advantage of the Blake2b algorithm is that it is optimized for the 64-bit platform. The algorithm uses 64 bit words, and it therefore works best on 64-bit platforms.\r\nThe Blake2b algorithm constitutes a basis for many digital money projects. Siacoin (SC) is the most popular cryptocurrency that powers the Sia network, the leading decentralized storage platform. Millions of people from all over the world provide their spare hard drive space thus forming secure сloud storage. In the middle of August 2018, Siacoin lost its positions, however, in January 2018 its price was rather high.\r\nNano (XRB) is another popular coin that uses the Blake2b algorithm. The cryptocurrency, earlier known as RaiBlocks, was created to become a decentralized payment method. The team behind Nano offers instantaneous transactions with low fees. In 2018, it also suffered a significant decline. In January, Nano plummeted from $33-$34 to $1.05-$2 for one token.\r\nEarlier, mining with the use of the Blake2b algorithm was performed on processors and video cards. Nowadays, there are several effective ASIC miners whose hash rate exceeds the previous systems’ rate. These devices are produced by a number of companies, including Bitmain that has developed the Antiminer A3 model with a maximum hash rate of 815 Gh/s for a power consumption of 1275W and Baikal that is known for models mining several algorithms. Besides, the Blake2b algorithm is supported by the Baikal Giant B Miner with a hash rate of 80 Gh/s for a power consumption of 300W as well as the iBeLink DSM6T miner with a maximum hash rate of 6Th/s for a power consumption of 2100W and Innosilicon S11 SiaMaster with the computing speed of 3.83 TH/s for a power consumption of 1380 W.\r\n\r\n\r\n",
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '50',
    ID: 22,
    Lesson_Name: 'Blockchain ',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '51',
        Title: 'What is Blockchain?',
        Description:
          "A blockchain is a database consisting of a continuous chain of blocks. The database is stored simultaneously on a bunch of different computers. New blocks are being constantly created – one after the other. Each block contains a group of records (transactions).\r\nTransactions record different types of user's activities in the network, e.g. sending tokens, paying for any item, registering property rights and so on.\r\nThe generated transaction is sent to the mempool and is stored there until the moment it is added to the block and thus confirmed. When the block is fully formed, it is checked by other network members. If everyone agrees, the new block is attached to the end of the chain and it is no longer possible to make changes to it. The database is updated on all connected computers. The formation of blocks is a nonstop process. After one block is made, the next one is due immediately. \r\nNetwork members are divided into two types: simple users (miners) and block builders (validators). Simple users send new transactions to the network while miners form blocks.\r\nThe main principles of blockchain are decentralization, security, transparency, and transactions without intermediaries.\r\n",
        Diagram: '',
        Caption: '',
      },
      {
        $id: '52',
        Title: 'Decentralization',
        Description:
          'Any information such as buying a house, taking out a loan, transferring money is centrally stored on the servers of state institutions or private companies. It is no secret that the database can be hacked and changed. The blockchain technology completely rules out such a possibility. Its main difference is that the data is not stored in one computer but distributed over thousands and even millions of computers that are scattered around the globe. The likelihood of a sudden crash of all computers is not just negligible but impossible. A blockchain-based system will continue to exist as long as at least one computer is operating.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '53',
        Title: 'Security',
        Description:
          'Even if someone is able to hack one of the blocks and change the information inside, it will not affect the database at all. Basically, it is just impossible as a hacker will have to crack all the blocks. This requires huge computing power as new blocks store encrypt data about the previous blocks.\r\nAny attempt to interfere will be noticed by other members of the network. A powerful encryption algorithm using hash functions and a digital signature will also become a hurdle to fraud. The digital signature has two keys – public and private. The first one verifies the signature itself while the second one is needed when creating it and it is known only to an owner. The keys provide access to information to members of the network. The hash function is similar to a sequence of random letters and numbers. It ensures the immutability of all recorded data. Therefore, this algorithm is based not on the mythical trust of users to each other but on complex and rigorous mathematical calculations.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '54',
        Title: 'Transparency',
        Description:
          'The database is fully available for public viewing. Anyone can see that someone transferred money to someone else. However, all further information about their names and whereabouts is hidden. Only the members of the transactions have access to this data. They can unveil it if they want to.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '55',
        Title: 'Transactions without intermediaries',
        Description:
          'Any financial transactions require the involvement of intermediaries such as banks, payment systems or currency exchangers. The transaction goes smoothly if intermediaries do not have problems or questions. However, there are cases when the money may not reach the addressee. For instance, the transaction may seem dubious for the bank and therefore it rejected it. Such a situation never occurs if you make transactions with blockchain.\r\nWhile working with blockchain, it is possible to keep records, store data, and to be engaged in any transactions: financial transactions, real estate transactions, insurance, logistics, marriage registration and much more.\r\nIn recent years, there have been loads of talks in the financial world about blockchain. Central banks started to show interest in this technology as well. Many countries are already experimenting with blockchain and looking for opportunities to expand its scope.\r\nSome experts predict that one day blockchain will be able to replace the banks. After all, it forms a space where the banks are not needed anymore and where different forms of transactions are carried out without any intermediary.\r\nSurprisingly, the Russian banks took lead in embracing its impact on the financial world. The Central Bank of Russia along with other major banks created the blockchain platform "Masterchain" to increase the transparency and efficiency of the financial system.\r\nThe first major use of the blockchain technology occurred with the creation of Bitcoin in 2009. Since then, a great number of cryptocurrencies have been invented.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '56',
        Title: 'Blockchain and Bitcoin: what do they have in common?',
        Description:
          'Blockchain is more like a concept, an idea. It is a system focused primarily on storing information for any transactions. Bitcoin is a cryptocurrency based on blockchain technology. This is a separate type of information recording on blockchain. Each user is assigned to a certain bitcoin address. He/she receives a wallet and a cryptographic key that opens access to the record.\r\nBoth concepts - blockchain and bitcoin- are interconnected, but the categories are completely different.\r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '57',
    ID: 23,
    Lesson_Name: 'BOINC ',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '58',
    ID: 24,
    Lesson_Name: 'CryptoNight',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '59',
        Title: 'CryptoNight',
        Description:
          'CryptoNight is one of the most popular mining algorithms based on extremely high degree of privacy which is possible by means of dimming the code for each transaction. CryptoNote, a protocol of the highest degree of anonymity in the cryptosphere, provides a similar privacy level.\r\n\r\nCryptoNote is a scheme that offers users anonymity when making a payment. The protocol utilizes a ring signature (which covers the identity of a sender) and one-time address system (which protects a receiver). A signature indicates that the transaction is signed by one of the group members. However, it is impossible to identify who exactly that was. According to developers, nobody can conduct the same transaction twice. In CryptoNight all private messages can be signed with the group name.\r\n\r\nImportant criteria for a high degree of privacy are the following parameters:\r\n•\ta transaction cannot be tracked;\r\n•\tpayments are not connected. CryptoNight fully corresponds to these criteria.\r\n\r\n American specialist Bernstein provided a base for  this cryptographic algorithm implementation. The developer added code dimming for each transaction. The system ended up having the opportunity of additional mixing and any foreign exchange operations became highly confidential. A primary goal of CryptoNight is to identify the largest information block in the device’s RAM with an unexpected sequence.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '60',
        Title: 'Types of CryptoNight coin mining:',
        Description:
          '•\tCPU mining. It consumes less electricity than GPU mining. According to experts, CryptoNight offers CPU mining of cryptocurrencies with great return.\r\n•\tGPU mining based on CryptoNight provides extremely high speed, but consumes more electricity. Experienced players recommend using anonymity function when mining to avoid transaction tracking. It is better to use numbers from 1 to 10. The higher the number, the better the security level. A slower payment process is the only disadvantage.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '61',
        Title: 'Benefits of CryptoNight mining:',
        Description:
          '•\tHigh mining profit\r\n•\tSmoothly decreasing issuance\r\n•\tShort intervals between blocks\r\n•\tCPU and GPU are less heated in the process of mining.\r\n•\tCryptoNight has little negative impact on CPU and does not overload GPU. Using algorithm, mining and distribution of coins are several times more efficient.\r\n•\tInability to mine coins on specialized ASIC devices\r\n•\tUsing of CPU+GPU to increase performance\r\n•\tHigh rate of return and relevance of coin mining in comparison to other digital currencies.\r\nThe most popular coin realized on CryptoNight is Monero (XRM). The cryptocurrency is focused on privacy, fungibility and decentralization. Monero is recognized as one of the best coins in the cryptomarket for its impressive level of anonymity. It is among the top 15 digital currencies in terms of trading volume.\r\n\r\nThere are several coins based on the CryptoNight algorithm. They are CryptoNoteCoin, Bytecoin, Boolberry, DarkNetCoin, Fantomcoin, Pebblecoin, Quazarcoin, AEON, Doctorbyte, Infinium-8, Moneta Verde, Dosh, Magnatoj, RedWind, and Tavos.\r\n\r\nA fork of the Monero network is among key CryptoNight updates. It was successfully launched on March 9, 2019. The fork is developed with the purpose of shifting to a new algorithm in order to protect GPU miners and escape from botnets. The cryptocurrency market players also expected that Monero mining would become completely unavailable for mining on ASIC devices.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '62',
        Title: 'Fork features of Monero network:',
        Description:
          '•\tpatch for fixing wallet errors\r\n•\tpatch for restoring Ledger miscounts\r\n•\tother system errors correction\r\n•\tenhancement of productivity\r\n•\tlaunching of new binary files and changing the GUI to version 0.14.0.0\r\n•\tcorrection of the PoW algorithm from V8 to Cryptonight R (CNv4)\r\n•\tchanging of payment ID to improve small transactions privacy.\r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '63',
    ID: 25,
    Lesson_Name: 'ECDSA ',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '64',
    ID: 30,
    Lesson_Name: 'LBRY ',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '65',
        Title: 'LBRY Technology',
        Description:
          "LBRY (Library Coin) is an open decentralized platform for distributing cultural content and monetizing digital information products such as movies, audio and video lessons, and others. LBRY's services are mainly used by creative people (artists, writers, film-makers, directors, etc.).\r\nThe developers underline a variety of the project's impressive features. LBRY enables users to create music, movies, photos, video blogs, streams, and other types of digital products. Creators can monetize their pieces of content by setting a fee for viewing them or allow free access. Other users of the platform can support creators by rewarding them with some LBC coins. LBRY wallets are currently compatible with such operating systems as Windows, MacOS, and Ubuntu.\r\nLBRY users can take both creative and financial control over their content shared through the LBRY system. This important technical advantage allows users to determine fees and terms under which they are ready to share their own media. In general, content remains entirely under the control of publishers.\r\nThe LBRY project is based on the blockchain technology and BitTorrent protocol. The platform is free of advertising, corporate censorship, and fees in the form of a cut of the content author’s proceeds. The decentralized LBRY platform is considered an alternative to large media stores.\r\nThe launch of the platform coincided with US Independence Day. The first beta version was released on July 4, 2016. The developers of LBRY aimed to create a worthy competitor to the Netflix platform. The latter is the world's most popular provider of cinematic content (movies and TV shows) which enables everyone who wishes to access its library.\r\nThe project has its own digital currency. LBRY Credit or LBC tokens serve as a means of payment. LBC coins are used for mutual settlements within the network. Tokens can be earned through mining. The maximum number of coins is one billion. The work is based on PoW (Proof-of-Work) and PoS (Proof of Stake) algorithms. Miners get paid for the power of their computers. One billion LBC is expected to be created over the next 20 years.\r\n",
        Diagram: '',
        Caption: '',
      },
      {
        $id: '66',
        Title:
          'The developers highlight the following benefits of the service:',
        Description:
          "1) For internal payments, customers can use both fiat money and the system's own currency (LBC). It can be earned by mining (PoW algorithm) or providing part of the hard drive space for the needs of the service, that is, for storing files (PoS algorithm).\r\n2) There is no need to spend time on promotional materials. Moreover, the system does not require a subscription.\r\n3) Compared to Netflix, the selection of videos is much wider, since LBRY Credits is open to independent media.\r\n4) The LBRY platform is beyond the control of state authorities, and its content is not subject to censorship. However, protection against state control does not mean complete freedom. The system supports a specific protocol which does not allow breaking the established rules. All data is stored on the blockchain network, so offenders can be identified by IP and blocked in a short time. Users making profits from illicit activity are liable to fines.\r\nSome countries have restricted access to content on popular platforms (YouTube, etc.). Experts believes that this gives LBRY a head start and a lot of potential for growth.\r\nMany specialists consider the LBRY project a large-scale library for future generations and an impressive virtual store designed for many years.\r\nHowever, there is already a positive effect of creating this platform. For example, the LBRY developers helped a huge piece of culture be saved. Thanks to this application, it was possible to prevent the disappearance of more than 20,000 valuable lectures and videos of the University of California at Berkeley (the USA). The company managed to copy the scientific materials using the blockchain technology. As a result, the catalog of unique information with a total size of 4Tb was saved on the network. The platform developers intend to further store and protect the lectures from hackers.\r\nThe LBRY system is equipped with such functions as a regular platform for downloading and posting any digital content, its own integrated LBC wallet, as well as LBC coin available for trading on the largest world's cryptocurrency exchanges. The platform provides its users with 24/7 support. Besides, customers can also be consulted in the LBRY community. Though the concept behind the LBRY network has great potential for development, experts believe that this innovative product has to stand the test of time.\r\n",
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '67',
    ID: 31,
    Lesson_Name: 'Lyra2RE ',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '68',
        Title: 'Lyra2RE algorithm',
        Description:
          'Lyra2RE system is a hashing algorithm designed for cryptocurrency mining. It was developed by the Vertcoin team to replace the Scrypt-N algorithm created earlier. Lyra2RE operation is based on the proof-of-work (PoW) algorithm. The project was launched in July 2014 and has been successfully operating ever since.\r\nThis new algorithm is mainly aimed at reducing energy consumption during the Vertcoin (VTC) tokens mining. The system also protects the Lyra2RE-based cryptocurrencies from the negative effects of ASIC mining. According to research, Lyra2RE consumes 30% less energy than the Scrypt-N algorithm and 17% less than the X11 algorithm. This network enables users to upload data on GPU in lower temperatures. The above stated advantages make it easy to mine the Vertcoin cryptocurrency.\r\nThe Vertcoin digital asset is a fork of the Litecoin. It uses proof-of-work algorithm to reach distributed consensus. Vertcoin is often referred to as “the people’s coin” for being the most democratized digital currency. Developers of this digital asset point out that any user can connect to the Vertcoin network through the personal computer. Vertcoin developers prioritize the decentralized mining functions of this network.\r\nThe previous Scrypt-N algorithm, that was later replaced with Lyra2RE, had limited functions to effectively protect the blockchain network from ASIC miners. The Scrypt-N project uses the so-called “adaptive N-factor” where N-factor component determines how much memory is required to compute the hashing functions. N-factor is characterized by N-schedule. The big difference between Scrypt-N and Lyra2RE is that Lyra2RE will not be using an N-schedule at this point in time, simply because it is not possible to calculate the future dynamics of the VTC. In case the N-schedule becomes necessary, Lyra2RE will implement these functions and launch the program. The Lyra2RE algorithm consists of five different interconnected hash functions: Keccak, Skein, Groestl, Blake, and Lyra2.\r\nThe Lyra2RE project allows Vertcoin developers to independently change features such as memory usage and transaction time cost. Due to the chained nature of internal hash functions, the network operation is hard to optimize, meaning that power consumption and heat can be reduced. Until recently, the Vertcoin’s hash-rate, or the computing power of mining equipment, have been consistently the highest among other cryptocoins.\r\nCryptocurrencies using the Lyra2RE blockchain network are mainly based on the PoW algorithm. These include Vertcoin (VTC), Crypto (CTO), LyraBar (LYB), ZoomCoin (ZOOM), Tianhe (TIA), ZCoin (XZC), HexxCoin (HXX), Zoin (ZOI), Verge (XVG), SHIELD- Lyra2RE (XSH) and Unitus-Lyra2RE (UIS).\r\nLyra2RE network settings allow miners to identify and eliminate potential threats from ASIC devices. Lyra2RE aims to be ASIC-resistant, ensuring less disruption to miners in the future. This function is possible due to the system’s ability to change algorithm parameters rather than change the algorithm itself in the event of a failure. This allows developers to focus on improving new features without having to worry about about constantly implementing new algorithms every time there is an ASIC threat.\r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '69',
    ID: 32,
    Lesson_Name: 'NXT ',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '70',
        Title: 'NXT technology',
        Description:
          'NXT, that stands for Next, is an advanced network cryptographic platform. It was launched in 2013. The platform is designed to work with decentralized apps, as well as to protect them against unauthorized access. Such apps include electronic payment systems, instant messengers, trading platforms, etc.\r\n\r\nNXT is a single ranked network based on equality of all project participants. The Proof-of-Stake algorithm, which serves as a proof of funds storage for a certain period of time, ensures stability and successful activity of the NXT crypto platform.\r\n\r\nThe NXT network is based on the blockchain technology. The method, employing the Proof-of-Stake algorithm, is designed to protect the chain of blocks from imitation.\r\nDevelopers of the NXT network created an innovative cryptographic software platform which can run not only a payment system with its own currency, but also various decentralized services and virtual companies.\r\n\r\nCurrently, the NXT cryptosystem allows to develop various independent apps. They are protected from DDoS attacks, as they use a blockchain as a highly reliable storage. The blockchain network is also used to transfer information from one user to another. Moreover, the system has a database of anonymous users (accounts) with built-in cryptography.\r\n\r\nNXT provides its users with an independent web app available online on PC. To access it, users need to go to one of the available servers in a browser. According to developers, the activity in this mode is completely safe, since a password is not transmitted to a server. Such transactions are signed locally and sent to the server in a RAW format. It contains primary data which prevents the loss of important information. A web interface provides working with the platform.\r\n\r\nProject developers have access to low-level API and all used java NXT data, as well as free licensed open source NXT codes, and accessible NXT transaction database in H2 format. Java is a well-arranged object-oriented programming language.\r\n\r\nNXT user transactions are recorded in a separate block. For successful work, it is necessary to create such a block, and then confirm its existence and compliance with the required characteristics. Confirmation must come from other network members. The choice of the user to generate a new block and the right to confirm the previous one are controlled by an algorithm that depends on the SHA256 hash identifier and the public key of the user of the previous block.\r\n\r\nA public key is an encryption and/or electronic signature system where some information remains in the public domain. The public key is transmitted through a channel available to users. It is applied for electronic signature verification and message encryption. \r\n\r\nThe amount of funds on a user account is also of great importance. Large sums of money can become crucial in the process of forming the next block. Users with a large efficient balance have more chances to do that. An efficient balance is the amount of funds on a user account that has not been changed over the past 1440 blocks. When the block is formed, the system rewards a commission. It is a sum of money equal to the costs of all transactions in the block. The process of forming blocks is called forging.\r\n\r\nForging is a creation of new blockchains in different cryptocurrencies based on the Proof-of-Stake algorithm. It enables users to receive monetary remuneration and a commission. \r\n\r\nExperts consider a transaction to be safe only after 10 confirmations. It protects the NXT crypto platform from cyber attacks. In order to hack into a system, the cracker has to form 10 new blocks in a row. These blocks should receive confirmation from users with very large accounts. This is almost impossible because, in this case, a hacker should have more than 90% of all network funds.\r\n\r\nThe NXT virtual currency is a payment instrument of the platform. This digital asset is used for internal payments. Developers have issued 1 billion NXT in one scoop. However, there will be no further currency issuing. According to the cryptocurrency founders, this approach clearly demonstrates the operating principle of the Proof-of-Stake (PoS) algorithm, that was first used in the NXT system for both initial issuing and block confirmation.\r\n\r\nMoney for remuneration of users who support the stability of the NXT platform are commissions for such operations as transactions, messaging, nickname registration, assets purchasing on the stock exchange, and goods acquisition in a digital store. The minimum operation fee in the NXT system is 1 NXT.\r\n\r\nEntering the market in late 2013, the crypto asset had been trading in the range of $0.01 to $0.06 for 1 NXT. In July 2014, one of the cryptocurrency exchanges began trading NXT tokens for fiat money.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '71',
        Title: 'NTX platform disadvantages',
        Description:
          '1. Technology vulnerability and closed asset development\r\n2. Incorrect initial distribution of funds\r\n3. Excessively high capitalization for new digital currencies\r\n4. Platform control by users with large accounts\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '72',
        Title: 'NTX platform advantages',
        Description:
          "1. This is not a bitcoin fork, but a new independent software product.\r\n2. NXT is not a cryptocurrency, but a unique digital platform with built-in support for special apps and digital assets.\r\n3. The project does not require large computing or energy capacity. Full-fledged forging works on low-powered platforms such as the Raspberry Pi.\r\n4. NXT does not require to store a user wallet on physical carrier. Brain wallet technology is enough.\r\n5. The platform is protected from attacks called double spending. It is able to return up to 90% of the attacker's network resources. Double spending is a resale of the same assets. It is a variation of a cyberattack by means of copying user assets. It usually occurs in the process of electronic payment.\r\n6. The system automatically returns transaction money to a user account if no confirmation of the funds has been recorded.\r\n7. The network also supports NXT users who are working with other tokens.\r\n\r\nThe NXT project includes a number of distributed apps with several functions and systems.\r\n",
        Diagram: '',
        Caption: '',
      },
      {
        $id: '73',
        Title: '1) Nickname system',
        Description:
          'It is designed to replace any text with its own names. Information about nicknames is stored in an open chain of NXT blocks and obeys the rules of general transaction. The system can be used as a decentralized DNS storage (a distributed system where domain information is stored). The substitution process is the following: the user enters an NXT nickname in his app, the local or remote service connects to net nodes, replaces the name with other data and sends the result back to the author. The user is considered the owner of the nickname. He or she can transfer or sell it through a digital store.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '74',
        Title: '2) Random messaging',
        Description:
          "The system allows to exchange messages up to 1000 bytes in length. They are put in a blockchain like an ordinary transaction. Thereafter, these messages cannot be changed or called back. A special app supports encryption of such messages with the help of the recipient's public key. Potentially, this service can be used to implement functions such as security and distributed storing of magnet links, electronic polls, blogs, and data storage systems.\r\n\r\n",
        Diagram: '',
        Caption: '',
      },
      {
        $id: '75',
        Title: '3) Asset exchange',
        Description:
          'The system is a distributed electronic platform built into the NXT protocol. The service allows its users to exchange or issue their personal assets. In order to trade, it is enough to implement colored coins. Its main principle is that the purchase and sale of assets is performed by the platform as an ordinary transaction, but with specific characteristics. Assets include financial instruments (stocks, bonds, currencies and their derivatives), as well as real physical objects in the NXT system.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '76',
        Title: '4) Account leasing',
        Description:
          ". This service enables a user to transfer the entire efficient balance of his/her account to another person. The function is used in the following situations: a) the user cannot do forging himself, so he/she transfers this right to his/her representative (usually a forging pool); b) the user does not plan to keep the computer permanently connected to the network or have an extensive amount of money on the account. In this case, he or she uses another account with a minimum amount of funds. In order to secure forging, the user leases his/her efficient balance to the NXT network. The maximum leasing period is about 36 days, then it automatically expires.\r\n\r\nThe NXT system supports several cryptocurrencies. These include both the most popular ones (Bitcoin, Litecoin), and the less known (Bitcoindark, Darkcoin, etc.). In order to trade other digital currencies on the NXT platform, there is a Multigateway. It works based of the multi-signature method. The gateway issues relevant assets on the NXT platform, such as mgwBTC, mgwLTC, etc.\r\n\r\nOne of the important features of the NXT network is a store of digital goods. This is a decentralized trading platform built into the crypto platform. The  purchase and sale process is carried out according to the C2C e-commerce scheme. It means that a buyer selects the goods, sends the order to a seller indicating the price, quantity, and time of delivery. The term of payment is advanced. The seller sends the information on how to pick up the goods. If he does not meet the deadline, the money paid is automatically returned to the customer's account.\r\n\r\nThe digital store is very important to the NXT community. NXT recognizes this service as a way to implement the results of creativity of independent artists, musicians, and other talented people.\r\n\r\n",
        Diagram: '',
        Caption: '',
      },
      {
        $id: '77',
        Title: 'Interesting facts about NXT',
        Description:
          'a) The network can be irrevocably destroyed if its blocks are sent to the first genesis account address. The fact is that each released NXT block has its own anti-NXT. The combination of a particle and an antiparticle leads to the elimination of the maternal ecosystem. If you send the whole billion NXT to the above-mentioned address, the NXT universe will cease to exist.\r\nb) The largest NXT theft occurred on August 15, 2014. 51 million NXT were stolen from the Bter cryptocurrency exchange. In order to offset the negative impact, developers released a new version of the platform which was able to reorganize the blockchain. It was necessary to isolate the damaged block sections in a transaction chain. Many users did not appreciate the new version. Two days later, the exchange managed to agree with a hacker, and a significant amount of coins (about 42 million NXT) was returned.\r\nc) The NXT community is one of the sponsors of the Low Orbit Helium Assisted Navigator project (LOHAN).\r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '78',
    ID: 33,
    Lesson_Name: 'Scrypt ',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '79',
        Title: 'Scrypt',
        Description:
          'In cryptography, Scrypt is a password-based key-derivation function. It was designed for crypto protection of an online service that stores back-up copies of  operating systems similar to UNIX. The Scrypt working principle is to artificially complicate the selection of possible cryptographic solutions.\r\nThe Script network was created by FreeBSD security representative Colin Persival. The function was originally intended for the Tarsnap backup storage system. The Scrypt algorithm was released as a preliminary document with technical specifications (a kind of the Internet draft) in September 2012. Later on, there were intentions to add the Scrypt to RFC Editor (an array of the WWW documents).\r\nThe system is designed in such a way so that to complicate a hacker attack where a cracker uses random numbers and keys as much as possible. In order to calculate the appropriate number value, an impressive amount of memory is needed. The implementation of the Scrypt cryptographic method not only requires a lot of memory but it is also time-consuming.\r\nLitecoin cryptocurrency developers were the first to employ Scrypt in order to secure the network from possible mining on ASIC devices. The algorithm helps to perplex the work of ASIC miners. The Scrypt method is used in the Proof-of-Work operating process while mining Litecoin.\r\nThe Scrypt algorithm implementation in the Litecoin network as an alternative to the popular SHA-256 hash function has brought novelty to the mining process. Both SHA-256 and Scrypt serve for the purpose of digital currency mining. The SHA-256 algorithm is relevant to Bitcoin mining, while Scrypt is for Litecoin.\r\nThe work of these algorithms is based on the Proof-of-Work mechanism. For successful mining, it is important to find a solution for a hash function so that to add a new block to the network of a cryptocurrency. When the best decision is found, the next block can be adjusted to the chain. Therefore, remuneration can be received.\r\nThe Scrypt and SHA-256 algorithms have a number of differences. Scrypt, for example, requires a greater amount of memory as a result of the rapid generation of solution options and the way data is stored. They are gathered in the RAM of the processing unit, which requires constant access before sending the result. The Scrypt algorithm also has a lower hash rate in comparison with SHA-256.\r\nThe password choice is quite significant for the Scrypt algorithm. Its password-based key-derivation functions (PBKDF) are developed taking into account an extensive amount of time needed to solve the problem. As a result, it can substantially complicate the work of cyber fraudsters. During a hacker attack, billions of calculations are needed to find the right key. The cyber attack loses its meaning due to a slow operation process and high cost.\r\nThe previous PBKDF, such as PBKDF-2, is easy to calculate. It is possible to find a proper key using specialized equipment (FPGA ASIC).\r\nPBKDF-2 is a digital standard required for the password-based key derivation.\r\nThe Scrypt function was designed to complicate hardware implementations by increasing the resources needed for computing tasks. The algorithm uses a massive amount of RAM in comparison with other PBKDF. In Scrypt, memory is a storage of pseudorandom bit sequences. During the algorithm operation, the elements are combined together to derive a key. According to developers, element calculation in Scrypt is a time-taking process. In the Scrypt network each unit is read multiple times, experts emphasize.\r\nA trade-off between time and memory based on the Scrypt algorithm indicates the balance of both quantities in the system. According to experts, the balance between time and memory is achieved by means of most favourable interrelation of place and time. This is a compromise approach to solving digital problems. This method implies the use of the inverse correlation of memory to program execution speed. During the operating process, the computing time can be extended with the help of memory reduction, as well as contracted via memory expansion.\r\nScrypt coins:\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '80',
        Title: '1) Litecoin (LTC). ',
        Description:
          'It is one of the leading virtual currencies along with Bitcoin, Ethereum, and Ripple. The digital asset is a fork of Bitcoin and a peer-to-peer payment system. In May 2017, SegWit support was activated in Litecoin software.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '81',
        Title: '2) Verge (XVG).',
        Description:
          "It is a decentralized virtual currency with a high level of privacy. This digital asset is considered an improved version of the Bitcoin blockchain network. Verge's high productivity is provided by the anonymous networks such as TOR and i2P, and several mining algorithms.",
        Diagram: '',
        Caption: '',
      },
      {
        $id: '82',
        Title: '3) Status (SNT). ',
        Description:
          'It is a mobile operating system designed to promote effective communication. It is used in the Ethereum network. The Status project has a in-built messenger and a decentralized browser, thanks to which users get access to blockchain services. These options are very convenient when working with a smartphone.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '83',
        Title: '4) SHIELD (XSH). ',
        Description:
          'A distinctive feature of this cryptocurrency is the ability to mine on the basis of several algorithms, including Proof-of-Stake. Thanks to the use of this algorithm, the cost of blockchain network maintenance is reduced significantly.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '84',
        Title: '5) DigiByte (DGB). ',
        Description:
          'This blockchain network guarantees the security of decentralized apps and digital payments. Its key features are high level of security, reliable data storage and almost instant transaction speed. This cryptocurrency is available to a wide range of users.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '85',
        Title: '6) Myriad (XMY). ',
        Description:
          'The primary goal of this project is decentralization and protection from any kind of cyber attacks. For this purpose,  creators of the cryptocurrency use innovative development such as special multi-algorithms.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '86',
        Title: '7) GameCredits (GAME). ',
        Description:
          'This digital currency is considered multifunctional. The asset also serves as a virtual wallet for more than 2.6 billion users.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '87',
        Title: '8) Gulden (NLG). ',
        Description:
          'In most cases this virtual currency is used as a payment system. Gulden enables its users to transfer money to one another or pay with NLG coins for various services.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '88',
        Title: '9) Bata (BTA). ',
        Description:
          'This digital asset was created in order to replace fiat money. In the long run, it was expected to contribute to economic improvement. Its developers planned to update the trading system and create new jobs. The BTA tokens should become the currency of this information-based system.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '89',
        Title: '10) Dogecoin (DOGE). ',
        Description:
          'This is a decentralized virtual currency. The project started as a comic experiment but then gained momentum and increased monetization. A shiba inu dog is portrayed on the DOGE coin. The project has such advantages as low fees and a high level of privacy, as well as secure transactions.',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '90',
    ID: 34,
    Lesson_Name: 'SHA-256',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '91',
        Title: 'SHA-256',
        Description:
          'SHA-256 (Secure Hash Algorithm) is a popular cryptographic hash function. The initial version of the algorithm was created in 2002 by the US National Security Agency. Several months later, the US National Metrological University launched the second version of SHA-256. The new encryption protocol was based on the FIPS PUB 180-2 secure data processing standard. It was adopted at the federal level, and two years later, it was replenished with the second version of the SHA-256 algorithm.\r\nIn its structure, any hash function is a mathematical operation running on digital data. One of the most important features of hash functions is their irreversibility. Due to this property, the SHA-256 protocol is very useful for various services and applications which require data protection.\r\nSHA-256 is part of the SHA-2 project created on the basis of SHA-1. Since its introduction, SHA-256 has been thoroughly tested for strong cryptography and the resistance to hacker attacks with the help of cryptanalysis. The principle of this method is to study the resistance of hash functions to two main types of attacks: finding collisions and detecting prototypes.\r\nFinding collisions assumes that a user discovers the same hash functions with different input parameters. If this attack succeeds, the security of the digital signature based on the SHA-256 algorithm comes under threat. Prototype detection makes it possible to decrypt the original message based on the current hash function. This attack seriously threatens the security of authentication password storage.\r\nAuthentication is the process of verifying the identity of a user and a certain operation he/she performs.\r\nThe SHA-256 algorithm was tested for the first time in 2003, but the developers found no vulnerabilities. Five years later, in 2008, they detected collisions for iterations of SHA-512 and SHA-256. To resolve these issues, specialists created a collision detection method for 31 iterations of SHA-256 and 27 iterations of SHA-512. In 2012, the US National Security Agency developed a new cryptographic function, the SHA-3 algorithm. According to experts, this updated algorithm will sooner or later overtake its predecessors in security.\r\nIteration is an act of repeating an action or a cycle of operations. In a broad sense, this refers to a repetitive process in data processing, in which a sequence of tasks are executed multiple times.\r\nAt present, the SHA-256 protocol works with the information broken down into pieces of 512 bits (or 64 bytes). It produces cryptographic "mixing" data. Each step in this algorithm has a fairly simple form, representing a regular bitwise operation and 32-bit addition. As a result, the algorithm issues a 256-bit hash code. The operation of the SHA-256 is cyclical. Every cycle which is repeated 64 times considered to be a relatively simple round. A feature of SHA-256 is the fact that each user of the World Wide Web uses this protocol when moving in digital space. Experts emphasize that visiting any web resource protected by SSL secure certificate automatically activates this algorithm.\r\nSHA-256 is based on the Merkle-Damgard construction method. According to this method, the initial index is divided into blocks immediately after the change is made, and those, in turn, into 16 words. The obtained data set goes through a cycle of 80 or 64 iterations. Each step involves hashing the words that comprise a block. Then, the conversion results are added, and the user gets the correct hash code value. To generate the next block, the value of the previous hash code is used. While SHA-256 is operating, it is impossible to convert blocks separately from each other.\r\nThe SHA-256 hash function is used in Bitcoin protocol, the world\'s most popular cryptocurrency. New BTC coins are issued with the help of finding strings according to the specified architecture of SHA-256. Bitcoin mining is based on the Proof-of-Work algorithm. At the same time, the SHA-256 system is necessary to create BTC addresses in order to increase security and maintain the appropriate level of confidentiality when executing transactions.\r\nSecure communications for websites and web services are ensured by files known as certificates. They are used to establish and authenticate secure connections. These certificates contain cryptographic elements that are generated with the help of SHA-256.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '92',
        Title: 'The main technical parameters of SHA-256',
        Description:
          '1) block size indicator - 64 bytes;\r\n   2) maximum allowed message length - 33 bytes;\r\n   3) message digest size - 32 bytes;\r\n   4) standard word size - 4 bytes;\r\n   5) internal position length parameter - 32 bytes;\r\n   6) number of iterations in one cycle - 64;\r\n   7) speed achieved by the protocol - approximately 140 Mb/s.\r\n\r\nAlong with various clear benefits of SHA-256, there is a number of drawbacks. A major flaw of the algorithm is its dependence on the computing power of miners. As a result, the owners of the greatest computing power receive the greatest number of coins. According to experts, this violates one of the fundamental principles of the cryptosphere, decentralization.\r\nSHA-256 is the most popular cryptographic hash function. It is extensively used by virtual currencies. In addition to Bitcoin, many other digital assets use this algorithm. For example, Scrypt is also a very popular algorithm. In contrast to Bitcoin, other altcoins (Litecoin, Dogecoin, etc.) use the Scrypt encryption protocol. It is equipped with a function of increasing complexity. During the operation, Scrypt saves 1024 different hash function values, connects them, and provides the converted data as a result. However, the Scrypt protocol requires more significant computing power than SHA-256.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '93',
        Title: 'Altcoins working on the SHA-256 algorithm',
        Description: '',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '94',
        Title: '1. Bitcoin Cash (BCH). ',
        Description:
          'This is a direct result of a Bitcoin fork that occured on August 1, 2017. The BCH block size usually reaches 1 Mb. The fork was a result of the network expansion when transactions no longer fitted in the block. This triggered transaction queues and increased fees for payments. Subsequently, the Bitcoin community decided to develop a new protocol in order to increase the blocksize to 2 MB. Since then, part of the information has been stored outside the blockchain network, and the time required to recalculate complexity decreased from two weeks to a day.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '95',
        Title: '2. Namecoin (NMC).',
        Description:
          'This project launched in 2011 is designed to store and transfer name/value pairs. Namecoin is most frequently used in the domain naming systems. Thanks to its unique characteristics, it is impossible to reveal a domain name. Namecoin runs on Bitcoin mining software.',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '96',
        Title: '3. DigiByte (DGB).',
        Description:
          'This cryptocurrency was created in 2013 with a view to improve Bitcoin and Litecoin. DigiByte is characterized by low volatility due to an increased number of coins issued (up to 21 billion), instant transactions due to doubling the capacity of the network every two years, as well as low fees or even their absence. Mining in the network can be conducted through five separate algorithms which makes it possible to mine coins independently of each other.\r\nAmong other digital currencies running on the SHA-256 algorithm, there are Peercoin, Unobtanium, Deutsche eMark, BetaCoin, and Steemit.\r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '97',
    ID: 35,
    Lesson_Name: 'Smart contract ',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '98',
        Title: 'Smart contract',
        Description:
          'Smart contract is an algorithm designed to generate, control and provide information about the owner of a digital product. Mostly, the algorithm is used in blockchain technology. Smart contract is a self-fulfilling project where terms of the agreement between the buyer and the seller are written in the form of a code. Both the code and the terms function in a distributed decentralized blockchain network. The code controls the fulfillment of the contract.\r\nSmart contracts allow traders to make trust-based transactions and agreements between anonymous parties. Implementation of smart contracts does not require interference of a legal system or regulatory authorities.\r\nThe concept of the smart contract was first introduced in 1994 by American computer scientist Nick Sabo. He also created the virtual currency Bit-Gold. The events took place 10 years before the Bitcoin invention. The scientist defined the smart contract as a computerized transaction protocol that was subject to the terms of the contract.\r\nThe smart contract implementation became possible thanks to blockchain technology. The first smart contracts were launched in 2008. Some of the smart contract principles were the base of the first Bitcoin protocol, analysts say. However, it took long enough to launch the technology. Eleven years ago, the Smart contract project was not included in user software. The first smart contracts were not Turing complete and were not used for security reasons. As blockchain technology developed, ideas began to emerge about creating higher-level protocols on top of the Bitcoin network. Foremost, these include smart contracts, experts emphasize.\r\nIn computability theory, Turing completeness is a special characteristic used to describe a computational system. It means the possibility of implementing any calculated function on smart contracts where each such function has its own computing element.\r\nSmart contracts became popular in 2013 when the Ethereum network was invented. Back then, Ethereum founder Vitalik Buterin actively tested the blockchain  capabilities. He came up with an idea of a universal decentralized blockchain platform with various storage and processing systems. Later, the Smart contracts system was tested and updated. Presently, the Ethereum network users can send 10 tokens to each other on a specific day using a smart contract.\r\nEthereum is a platform designed to implement smart contracts. It allows developers to program their personal smart contracts. The programming language of these contracts reflects Turing completeness, that is, it supports a wide range of computing functions.\r\nA commission is charged for completed contracts, where each transaction depends on the computing power of the network. Usually, Ethereum launches a smart contract code when a user or other contract sends a message to it. A commission is paid at the moment of transaction.\r\nThe Smart contract technology is based on sharing. It will not work for an individual, experts emphasize. They claim that smart contracts can build blocks for decentralized apps as well as large autonomous companies.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '99',
        Title: 'Smart contract operating principles:',
        Description:
          'The parties (sellers and buyers) enter into a smart contract using methods similar to transactions of funds in cryptocurrency networks. When it is signed, the contract comes into effect. To fulfill its obligations, it is necessary to have digital environment that provides full automatization of the contract. Smart contracts can be implemented only inside this environment. All terms of the agreement should have mathematical description and executed logically. A key feature of a smart contract is the ability to independently monitor the implementation or violation of a contract. In conflicting situations, the system makes its own decisions based on given conditions. The main principle of the smart contract is full automatic performance and acute execution of contractual relations.\r\nThe subject of a smart contract can only be an object inside of a digital environment. The smart contract condition should have a full mathematical description, which is programmed in a blockchain environment. A smart contract should be incorporated it the blockchain network of the decentralized platform so that it can be stored.\r\nThe following conditions are required for successful implementation of smart contracts:\r\n1. Electronic signatures based on public and private keys\r\n2. Open decentralized database without human factor involved\r\n3. Digital environment decentralization\r\n4. Reliability of the virtual data source. For example, key SSL certificate authorities in the internet browser database.\r\nMany experts fear that distribution of automated technologies that support smart contract will damage most social institutions. The development of such innovations can lead to the loss of many administrative jobs, such as notary officers, bank employees and real estate agents.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '100',
        Title: 'Smart contract technology prospects',
        Description:
          'According to developers, some of the smart contracts may become fully or partially self-fulfilling. Specialists develop self-sufficient, fully autonomous smart contracts which can provide higher security level in comparison to traditional agreements as well as reduce transaction costs. In the future, smart contracts may receive official recognition of the authorities, experts say. Smart contracts can be legally confirmed only if the legislative provisions of the country they are functioning in are observed.',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '101',
    ID: 36,
    Lesson_Name: 'Smartchain ',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '102',
        Title: 'Smart Chain technology',
        Description:
          "This system is considered the most effective project created to manage the supply chain with the help of the blockchain technology. The Smart Supply Chains network and the Radium platform (RADS) have the key role to play in this project.\r\nSmart Supply Chains technology is an intelligent system of supply chain management. It is designed to improve the level of service, boost demand at sales outlets, ensure timely delivery of products to offices and shops, as well as place an optimal order for production. Smart Supply Chains contributes to reducing storage and transport costs.\r\nThe smart network Smart Supply Chains ensures the movement of goods in a supply chain so that the profit of the network was as much as possible. The main feature of the project is a quick response to changes. The Smart Supply Chains network's self-regulation and autonomy are regarded as benefits. According to its developers, the project always has a relevant action plan focused on generating maximum earnings from both current and anticipated situations.\r\nThe prototype of the Smart Supply Chains was tested in real live operation of retail network in the United States. The test was based on supply management of more than 600 types of goods. The results showed that the system would allow users to increase profits by 18–25%.\r\nAnother element of the Smart Supply Chains network is Radium (RADS).\r\nRadium (RADS) is a decentralized blockchain platform designed for data validation and identification.\r\nData validation means checking time series and their compliance with specified conditions. It is performed through validation rules. To implement a task, these rules can be combined into groups.\r\nRadium was launched in May 2015. Its former name is xRadon. The project is targeted to improve the blockchain technology necessary for providing stable operation of a wide range of decentralized services. These services include identity and file verification systems, as well as decentralized voting platforms.\r\nInitially, the project was based on the Proof-of-Work algorithm (PoW). However, two weeks after the launch, the platform was transferred to the blockchain running on the Proof-of-Stake algorithm (PoS).\r\n",
        Diagram: '',
        Caption: '',
      },
      {
        $id: '103',
        Title: 'Key features of Radium:',
        Description:
          '1) SmartChain Core. This is a client program which allows users to access the necessary data. This information helps them work with Radium SmartChain interactively.\r\n2) Radium SmartChain. This is the second-level customization of the main network. It is a separate chain of blocks which enables data validation.\r\n3) SmartChain Verify. This is a program that checks files for their compliance with hashes reflected in the core blockchain network.\r\n4) SmartChain identifiers refer to usernames tied to their accounts on the Radium network.\r\n5) SmartChain API. This is a software interface designed to create Radium-based applications.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '104',
        Title: 'Advantages of Radium:',
        Description:
          'a) The platform is launched with the help of short user IDs. Further work does not require entering complex combinations of letters and numbers.\r\nb) The project provides for the possibility of verifying an account by a third party. This enhances system security.\r\nc) Radium helps users prove authorship of any files stored in the blockchain network and tied to user IDs.\r\nd) User text entries can be integrated into the blockchain running on Radium. Subsequently, this information can be read by any participant of the project.\r\n\r\n\r\nAs for the technical characteristics of the project, experts appreciate a high block generation rate (60 seconds). The generation of 60 blocks is necessary to fully confirm further work. Radium network nodes are run in the cloud through Microsoft Azure, Amazon AWS, and Docker processors.\r\n\r\nRadium developers single out its ability to generate 600 RADS coins per week as another advantage of Radium. However, this amount is reduced by 3% every year, experts emphasize. The project also supports the staking of RADS tokens. Staking is the process of locking cryptocurrencies to recieve rewards while contributing to the stable operation of a blockchain network. Staking also implies the ability to hold funds in a cryptocurrency wallet where some coins are locked. The reward for staking 1,000 coins per day is 0.5 coin. The minimum stake age is six hours. RADS tokens are stored in the wallets designed for various operating systems (OS) and available with Radium.\r\n\r\nParticipating in staking with Radium, users receive a reward in the form of another asset called Radon which is based on the Proof-of-Network protocol (PoN). This algorithm is used to conduct transactions. After the transactions are completed, the new asset is withdrawn from circulation.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '105',
        Title:
          'Potential stages in Radium development based on Smart Chain technology:',
        Description:
          '1. Addressing vulnerabilities and improvement of project details.\r\n2. Streamlining of payments to developers.\r\n3. Improvement of client application interface.\r\n4. Updating the RADS wallet protocol.\r\n5. Reformed and improved verification system.\r\n6. PGP encryption addition and IPFS file system support.\r\n7. Development and launch of new applications.\r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '106',
    ID: 37,
    Lesson_Name: 'Stanford Folding',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '107',
        Title: 'Stanford Folding',
        Description:
          "The Stanford Folding system (Folding@Home) is a distributed computing project designed for protein folding imitation. The system was launched on October 1, 2000. Folding@Home is a unique scientific project operated by scientists at Stanford University (USA). In 2008, it was more powerful than similar projects. In 2011, it was ranked second among the world's most advanced distributed computing projects preceded by Bitcoin with 161 petaFLOPS. As of May 2013, Folding@Home’s total capacity was 7 petaFLOPS. In 2007, Guinness World Records recognized the Stanford Folding project the world’s most powerful distributed computing network. However, in 10 years, Bitcoin took the lead in the industry.\r\nA petaFLOP is a computing performance measure which records the number of floating point operations per second.\r\nFolding@Home’s main purpose is to determine the mechanisms of protein folding. These processes are essential for better understanding of diseases caused by misfolding proteins, such as Alzheimer's disease, Parkinson’s disease, type 2 diabetes, Creutzfeldt–Jakob disease and many forms of cancer. Currently, Folding@Home has successfully simulated the process of protein folding during 5-10 microseconds. According to expert estimates, this is several thousand times more than was previously recorded.\r\nApart from research in the field of diseases that imitate protein folding, the project is designed to find new formula which can help to develop drugs. Folding is a process through which a protein chain acquires its native 3-dimensional structure.\r\nStanford Folding uses the idle processing resources of personal computers owned by users around the world. The project contributes to the work of scientists at Stanford University. Their research is focused on protein misfolding which poses a serious threat to health. Better understanding of protein misfolding requires long-term studies. If scientists can read the code of protein folding, they will be able to develop drugs and methods to combat many diseases.\r\nAccording to expert observations, proteins can almost immediately fold at a speed of one millisecond. It is an impossible task for scientists to stop folding and study the split second. However, scientists at Stanford University have managed to sufficiently advance Folding@Home and solve the issue. As a result of high capacity, a millisecond barrier was broken in 2007. At the same time, NTL9 protein imitation was discovered. In 2010, scientists overcame the 10-millisecond ACBP protein molecule barrier.\r\nAround 8,200,000 compute cores were active in Stanford Folding in February of 2015. The system’s total capacity was 9.3 petaFLOPS. By September 2019, the score has reached 98.7 petaFLOPS. Currently, Folding@Home is ranked third among the world's most powerful distributed computing systems. It is second only to Bitcoin which power is 80,704,291 petaFLOPS. The innovative Summit system with a capacity of about 200 petaFLOPS is recognized as a leader in the TOP500 ranking of supercomputers.\r\n",
        Diagram: '',
        Caption: '',
      },
      {
        $id: '108',
        Title: 'Folding@Home operating principle',
        Description:
          'In order to compute, the Stanford Folding system uses powerful resources of hundreds of thousands of personal computers around the world. To participate in the project, a user needs to download special client software. The software runs in background and performs computation only when other apps partially use the CPU resources.\r\nThe Folding@Home client software program occasionally connects to a server in order to receive another data block required for computing. The results are sent back to the program when computing is finished.\r\nAll project participants have access to statistics. Each of them can launch Folding@Home on one or more computers, as well as join a team of other participants.\r\nMulticore processors (CPUs) are a key platform for Stanford Folding.  In scientific circles, the largest number of jobs is formed for CPUs. However, single core processors have become less relevant.\r\nThe most perspective Folding@Home platforms are GPUs. Multiple threads are simultaneously involved in GPUs what makes them better than any modern CPUs by computational speed. However, project developers believe it is too early to write off CPUs. There are GPUs with computation restrictions. That means they cannot substitute CPUs. As a result, GPU and CPU complement each other in terms of the Stanford Folding project.\r\nFolding@Home developers strive to simplify the connection to the project as much as possible. Earlier, it required two different client software programs to use CPU and GPU. Currently, one program is enough.\r\nStanford Folding actively interacts with other systems. Cooperation with Rosetta@Home is considered the most successful. Both projects balance each other well. Rosetta@Home is a distributed computing system for protein structure prediction. Rosetta@Home is recognized as the most precise monitoring project. It aims to predict the final floating state of a protein. Unlike Folding@Home, the project does not imitate the process of floating. According to Rosetta@Home developers, thermodynamic and kinetic models can improve algorithms of protein structure prediction.\r\nIn recent years, interest in Folding@Home has declined due to increased popularity of cryptocurrency mining. Moreover, Stanford Folding has its own cryptocurrency called Folding Coin (FLDC). The coin is supported by the Folding@Home project. It aims to involve impressive amount of computing power to the Folding@Home project.\r\nAccording to Stanford Folding developers, the decline in the popularity of the project is a temporary event as Folding@Home is second to none in the power of the idea and its implementation. Scientific community as well as other parties concerned believe in the future of Stanford Folding as the issues solved by the project will always be relevant. \r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '109',
    ID: 38,
    Lesson_Name: 'X11 ',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '110',
        Title: 'Х11',
        Description:
          'X11 is a hashing algorithm developed in 2014 by Evan Duffield who is the main developer of the Darkcoin cryptocurrency (later Dash). The algorithm is designed to protect cryptocurrencies from ASIC miners.\r\nAccording to experts, the X11 project had been coping with the task for a long time.\r\nThe developer of Dash has managed to block ASIC mining which poses threat to any cryptocurrency decentralization.\r\nX11 appeared when Evan Duffield questioned the reliability of the SHA-256 algorithm. Therefore, Duffield started looking for alternatives. X11’s main characteristic is energy-efficiency. X11 is 20-30% more efficient in comparison to the Scrypt algorithm.\r\nIn addition to protection from ASIC miners, X11 aims at preventing problems with the centralization of the Dash blockchain. Duffield believed that X11 required complexity because the excessive simplicity of the SHA-256 could cause a sharp price collapse of the cryptocurrency.\r\nAnother important goal was a fair distribution of the cryptocurrency during mining. Duffield’s intention was to avoid concentration of the digital currency in selected influential mining pools. \r\nThe developer has also worked on increasing the level of mining security. Duffield  has repeatedly stressed that many investors are afraid to invest into digital assets due to the fact that the SHA-256 algorithm can not be called 100% protected from hacking. The X11 mechanism has become the developer’s ambitious goal. X11 is based on several rounds of sequential hashing which significantly inhanced protection against hacking.\r\nThe X11 protocol uses sequence of 11 scientific hashing algorithms for the Proof-of-Work (PoW). The chained hashing algorithm has been invented not only to make ASICs much more difficult but also to give the currency plenty of time to develop before mining centralization becomes a threat. However, ASICs for X11 became available in 2016. There is no protection from them. These devices comprise a significant portion of the network hashrate. However, they have not resulted in the level of centralization similar to the one of Bitcoin.\r\nX11 uses several rounds of 11 different hashes, making it one of the safest and more sophisticated cryptographic protocols. Duffield was inspired by the system used in the Quark cryptocurrency which required more complex chain hashing. Its “depth” is achieved by means of increased number of hashes. At the same time X11 differs from Quark in that the rounds of hashes are determined randomly and in advance.\r\nImmediately after the launch of X11, developers started working on new versions of this algorithm. Updated protocols have no fundamental differences. However, the number of rounds has changed. X17 is recognized as the most popular version of the algorithm. Moreover, X13 is based on the X11 algorithm.\r\nThe high energy efficiency of the X11 project made it attractive in the crypto society. The efficiency was achieved by means of combining 11 hash functions united into one algorithm which also includes BLAKE, BMW, Groestl, JH, Keccak, Skein, Luffa, Cubehash, Shavite, Simd, and Echo.\r\nAll X-algorithms have been created for use on GPU where they provide low power consumption and high profitability. X-algorithms have the highest degree of protection against hacker attacks. A block-chain system used on X11 is considered to be more reliable in comparison to a blockchain network on SHA-256.\r\nThe operating principle of Х11 is the following. A specific task defined by the X11 algorithm is submitted to the BLAKE function. Then, the function produces a hash value, which is submitted to the BMW function and then it produces another value. The process repeats in ordered chain and continues till the last function.\r\nOne of the main features of the X11 algorithm is 100% protection from hacking. Experts believe that a hacker attack on 11 round hashing is almost impossible. Other algorithms, such as SHA-256, are much more vulnerable than the advanced X11 algorithm.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '111',
        Title: 'X11’s advantages',
        Description:
          '1.\tHigh security level based on X11 hashing functions which provide efficient protection.\r\n2.\tLow vulnerability compared to the SHA-256 algorithm on which Bitcoin is based.\r\n3.\tPossibility of innovation breakthrough. The X11 algorithm is comprised of hash functions that inspire developers and help them to search for new innovative solutions. According to experts, the development of the newest SHA-3 hash function will be another step in that direction.\r\n4.\tEnergy consumption minimization. Mining on X11 requires less energy in comparison to other algorithms as it does not overload the equipment, developers emphasize. For example, mining on AMD reduces energy consumption by 40-50%.\r\n5.\tConveniency of mining on any equipment. After X11 has been launched, the balance between mining cryptocurrency on GPUs and CPUs has been achieved.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '112',
        Title: 'X11 disadvantages',
        Description:
          '1.\tSubtle difference in the profitability of mining on GPUs and CPUs.\r\n2.\tCompetition between more advanced algorithms based on more hash functions (X12, X13, X14, X15, X16, and X17). As a result, X11 became less popular.\r\n3.\tX11 is no longer ASIC-resistant. The algorithm has been functioning as a shield against ASIC mining until 2014. Over the past five years, new devices which override X11 protection during mining has been developed.\r\nThe key feature of mining digital currencies on the X11 algorithm is high profitability. There are three functions which determine mining efficiency:\r\n1.\tHigh productivity\r\n2.\tMinimal energy costs\r\n3.\tLow altcoin costs\r\nExperts recommend miners to choose devices with a large number of shaders and high frequency of the graphics core. In case of Radeon, they recommend choosing 7950 and 7970 version of GPU.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '113',
        Title: 'X11 cryptocurrencies',
        Description:
          '1) Dash. The Darkcoin currency was launched in 2014. The system is based on the DarkSend technology, which provides high transaction anonymity. Apart from mining, masternodes are also used to confirm a transaction. The digital currency is constantly being improved. Dash developers are planning to introduce the system of payments into various spheres of the economy.\r\n2) Digitalcoin. This digital asset with an open-source code, based on Litecoin, was developed in 2013. Apart from X11, the cryptocurrency uses Scrypt and SHA-256 to protect transaction consistency. Many experts recognize Digitalcoin as the most advanced cryptocurrency after Litecoin. However, the project has not been improved recently.\r\n3) Pura. This digital asset was launched in 2016. The system provides anonymous transactions based on the PrivatePay technology and masternodes, which support performance of the network. The DAO decentralized system is used to manage the development of a project.\r\n4) SmartCoin. This cryptocurrency with an open-source code emerged in 2014. SmartCoin was designed to simplify cryptocurrency payments. The developers tried to ensure that the speed of transactions did not exceed 40 seconds and the security level was high.\r\n5) Influxcoin. The Influxcoin system is based on the PoS (Proof-of-Stake) and PoW (Proof-of-Work) algorithms. The digital asset used to be very popular, as well as profitable. Currently, the project development has been put on hold. Therefore, the cryptocurrency has lost its popularity.\r\n6) StartCoin. The coin emerged in 2014. Unlike other cryptocurrencies such as Dash, it has a low privacy level. Commonly, StartCoin is used to finance various projects, as well as crowdfunding. For example, all cryptocurrency holders with over 100 StartCoin on their accounts receive additional coin each week.\r\n7) Onix is a decentralized platform aimed at providing loans. The project is designed to give assistance to the citizens of developing countries who want to start a business. Thanks to this platform, startuppers can take a loan if banks turned them down due to poor credit history. The principle of Onix is as follows: a user should deposit a certain amount of money on the platform. Then, he/she gets a loan. The deposited amount guarantees the timely loan repayment.\r\n8) Sibcoin. This digital asset, based on Dash, was developed in Russia. Cryptocurrency has additional encryption algorithms implemented by Russian cryptography specialists. For mining coins, masternodes and the X11Gost algorithm, a modified version of X11, are used. The difference of the X11Gost system is that the Stribog hash function is added to the chain of algorithms.\r\n9) Cream. This cryptocurrency based on the X11 protocol uses the CREAM algorithm (CRYPTO RULES EVERYTHING AROUND ME). According to developers, this project is able to fix the vulnerabilities of Bitcoin. CREAM coins can be received during mining.\r\n10) ArcticCoin. This is a virtual open-source currency. The X11 algorithm work is based on PoW mining while Goldmine nodes are used for PoS mining. A miner receives 50% of the remuneration for each created block and 50% goes to the owner of Goldmine. One of the key advantages of the project is Spysend anonymous transaction technology.\r\n11) Polis. This cryptocurrency emerged at the end of 2017. It uses the X11 algorithm and masternodes for mining. According to developers, this coin was created primarily for the community, which determines the course of its further development. The income from generating a block is distributed between the masternode (75%) and the miner (18%).\r\n12) Quebecoin. This open source digital asset was launched in 2014. Recently, little attention has been paid to the project. However, developers and the community have decided to unite and restart the cryptocurrency. The system uses the X11 algorithm as well as Dark Gravity Wave to set complex mining.\r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '114',
    ID: 39,
    Lesson_Name: 'X13 ',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '115',
        Title: 'X13 ',
        Description:
          'X13 is a hashing algorithm based on X11, a protocol which utilizes a sequence of eleven scientific hashing algorithms for the Proof-of-Work. The mechanism has been developed in order to fairly distribute cryptocurrencies during mining. X11 has been created to complicate mining on ASIC. According to expert estimates, it has coped with its task. Then, new advanced algorithm versions appeared, including X12, X13, X14, X15, etc. The first digital currency with its blockchain based on X11 was Dashcoil (later Dash).\r\n\r\nThe X13 algorithm is a chain of thirteen different hashing functions. The number in the algorithm name indicates the number of hashing rounds and the types of functions used by the algorithm. X13 consists of 13 hash cycles with 13 different cryptographic functions which makes it one of the most reliable projects in the crypto world.\r\n\r\nX13 as well as X11, has been developed specifically to restrict mining on ASIC. Experts believe that the algorithm is a modified version of X11. Two new functions have been added to the algorithm such as Hamsi and Fugue. Presently, the X13 system includes BLAKE, BMW, Groestl, JH, Keccak, Skein, Luffa, Cubehash, Shavite, Simd, Echo, Hamsi, and Fugue. The X13 activity is based on the Proof-of-Work principle which is implemented every 240 seconds. It is set as the target of the block. It means that 15 blocks per every 60 minutes are produced using the algorithm. In a day of 24 hours it is 360 blocks produced.\r\n\r\nX-algorithms have been created for use on GPU where they provide low power consumption and high profitability. The X-algorithm operational principle has many stages. Each subfunction result is passed to the next sub-algorithm and the process repeats X times. Thus, mining on ASIC gets difficult since the hardware should have a logical gate for each algorithm on its chip. In this case, the complexity of production as well as the cost of computing equipment significantly increase.\r\n\r\nAccording to experts, X13 is a high security algorithm. In order to crack it, you need to find vulnerabilities in all 13 hashes which is time-consuming. If at least one of the hashes is damaged, developers will receive a signal. It will help to make the necessary changes to the vulnerable function as soon as possible.\r\n\r\nThe majority of platforms based on X13 use a hybrid protocol to increase the reliability of a PoW/PoS node. This combination of protocols allows its users to be engaged in classical mining and earn on the storage of cryptocurrencies up to 20% per year.\r\n\r\nDigital currencies, such as Bitcoin Diamond, Stratis, and Navcoin are mined based on X13. Usually, digital assets, such as DeepOnion, run over the X13 algorithm. Other cryptocurrencies use similar operating principles.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '116',
        Title: 'X13 cryptocurrencies ',
        Description:
          '1) DeepOnion (ONION) is an anonymous digital asset which provides private transactions in the TOR network. Thus, users can bypass third party authentication making hidden payments on DeepSend. The operating principle is the following: DeepOnion sends the DeL traffic through the TOR network which provides double security by means of anonymous transaction concept. The X13 algorithm protects from spoofing and hacker attacks. Spoofing is a type of computer hacker attack. During spoofing attackers completely change domain cache data. It is necessary in order to return a false IP address to the user.\r\n2) Cloakcoin (CLOAK) is a decentralized open-source cryptocurrency aiming to provide complete anonymity and privacy of transactions. It was released in June 2016 and restarted in 2016. The platform was equipped with a new management system based on the Bitcoin Core protocol. After the restart, developers introduced the Enigma technology which is able to mix transactions outside the blockchain network. Enigma includes CloakShield, an innovative routing system that resembles the popular TOR software.\r\n3) MaruCoin (MARU) is one of the first digital assets on X13. The MaruCoin network is a combination of Kimoto Gravity Well and Darkcoin.\r\n4) Hshare (HSR). This virtual asset is based on the hive principle. It has a double side chain made of blockchains and DAG and operating without being binded with acyclic graphs. The project is designed to implement unlimited flow of information and transactions between distributed systems. The cryptocurrency is a data storage device for the main blocks which provides exchange of information between block systems.\r\n5) Stealthcoin (XST). The cryptocurrency is focused on utmost privacy. It is a distinctive feature of the project. The Stealth network provides a comprehensive solution to ensure anonymity. The key elements of this project are several important functions that include the TOR network and Stealth addresses. The project goal is to introduce new standards in the blockchain industry.\r\n6) MarteXcoin (MXT). This is a decentralized asset based on X13. During mining users can generate MXT. Currently, the number of MarteXcoin is limited to 3,724,325 MXT. Impressive transaction speed as well as high anonymity are the project’s distinctive features.\r\n\r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '117',
    ID: 40,
    Lesson_Name: 'Shabal256',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '118',
        Title: 'SHABAL-256 Technology',
        Description:
          "The SHABAL-256 system is a complex cryptographic hash algorithm. This project has become one of the best among the participants of the SHA-3 international competition conducted by the US National Institute of Standards and Technology. SHABAL-256 is an innovative product from the Saphir research group sponsored by the French National Research Agency (ANR).\r\nAccording to the new technology's developers, the SHABAL-256 algorithm is named after Sebastian Chabal, a French rugby player. He is known for his aggressive style of play. Apparently, the developers of the project sought to emphasize the high activity of the new algorithm and its resistance to hacker attacks. According to the creators of SHABAL-256, it is considered one of the fastest protocols. Its operations are performed in a flash.\r\nThe SHABAL-256 algorithm is able to accept input bit sequences of any length. However, the cryptographic strength of very long messages is not guaranteed.\r\nIn SHABAL, there is a gradation of protocols depending on the length of the resulting hash, which may be equal to 512, 384, 256, 224, and 192 bits. They are called SHABAL-512, SHABAL-384, SHABAL-256, SHABAL-224, and SHABAL-192, respectively.\r\nThe SHABAL protocol includes several steps. After an algorithm input accepts a bit sequence, it is divided into blocks of 512 bits, regardless of the protocol variation (SHABAL-512, SHABAL-384, etc.). The block size is a multiple of 32. If the length of the last block exceeds 512 bits, it is supplemented by another one bit unit and the corresponding number of zeros required for achieving the specified block size.\r\nThe SHABAL-256 system is an iterative algorithm. The point is that the number of repetitions is equal to the number of blocks of the original bit sequence. The blocks added to the beginning of the message are complemented by two additional iterations. Three final iterations complete the process. Each stage of adding iterations converts the function of A, B into the function of A, C. When computing a hash function, a buffer divided into three parts (A, B, C) is used.\r\nIteration is a repeating action, that is, a cycle of operations. In a broad sense, this is the data processing in which actions are repeated many times in a different manner. As a rule, after performing normal iterations, three more final iterations are required. Their difference is that the last message block acts as the key block. The SHABAL-256 algorithm implies that the operations of summation and subtraction are performed within 4-byte blocks without data transfer. The SHABAL-256 protocol is conducted through a 8-bit or 16-bit central processing unit (CPU), while 32-bit words are divided into several parts with the length of 8 or 16 bits.\r\nThe structure of SHABAL-256 is a context for computations. The system contains the intermediate values and some data from the last entered block. After a computation based on the SHABAL-256 algorithm has been performed, the context can be reused. The developers emphasize that the launched SHABAL computation can be repeatedly cloned by copying the context.\r\nAccording to experts, the SHABAL-256 algorithm is an intermediate link between the Merkle-Damgard system and the so-called “sponge” function. This is a class of algorithms with a finite internal state which take an input binary string of any length. The produced output binary string has arbitrary length as well. This construction can be used to develop hash functions, create stream and block ciphers, as well as generate a random number with the unlimited length of input data.\r\nThe Merkle-Damgard system is a method of building cryptographic hash functions. This hash function converts an input message of arbitrary length into an output message of fixed length. This is achieved by breaking an input message into blocks of equal size. Then they are processed through a one-way compression function, which converts a fixed-length input message into a very short output one. By splitting the input information into blocks, the Merkle-Damgard hash function processes them one at a time with the compression function, combining a block of the input with the output of the previous round.\r\nThe creators of SHABAL-256 algorithm were striving for high cryptographic resistant of the innovative product. However, the system's cryptographic resistant turned out to be close to zero. Nevertheless, according to the experts, this had no impact on the security of SHABAL.\r\nThe SHABAL-256 protocol exerts low pressure on the data cache. As for its performance, cache saving is regarded by experts as one of the strong points of the algorithm.\r\nData cache is a portion of memory designed for high-speed data processing. The required information is contained in the memory with a lower access speed (the main memory). A cache is composed of records. Each record is associated with a data element or a data block (that is, with a small piece of information). This information located in the main memory is a copy of the data element. All cache records have an identifier specifying the correspondence between the data elements in the cache and their copies in the main memory. Elements can be cached on CPUs, hard drives, as well as in web browsers and web servers.\r\n",
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
  {
    $id: '119',
    ID: 45,
    Lesson_Name: 'Dagger-Hashimoto',
    BookID: 2,
    LangID: 0,
    ReadDuration: '',
    Descriptions: [
      {
        $id: '120',
        Title: 'Dagger-Hashimoto ',
        Description:
          'The Dagger-Hashimoto (Ethash) encryption algorithm was originally used in Ethereum cryptocurrency mining. It was designed by Canadian software developer Vitalik Buterin in 2015.\r\nEthash was initially called Dagger-Hashimoto. That version looked like a script, but the method of crypto operations was completely different from other mining algorithms. Its distinctive feature was that Ethash created a graph, that is a tree with a large number of consecutive nodes.\r\nThe new system has greatly increased the complexity of decrypting, and it became almost impossible to figure out the required values. However, Buterin together with a team of developers continued to improve the algorithm, rebranding it thereafter. As a result, they created Ethash. The key aspect of the new project is a special software. Ethash requires large memory capacity, experts say. That is what distinguishes it from other algorithms.\r\nBefore the rebranding, the main issue with Ethash was a program hangup in a DAG file. Developers released the ClayMore program in 2016 which helped to solve the problem. Therefore, DAG began to be stored on VGA instead of HDD.\r\nTo mine coins (mainly Ethereum), the device had to have 2 GB of RAM in order for the software to work. Thereafter, the developers increased the minimum threshold to 3.5 GB. \r\nThe workflow chart represents the generation of DAG with a massive volume. This file was kept on HDD, since mining did not start without it. The generation of DAG took some 10 minutes. the process is much faster nowadays.\r\nAccording to expert estimates, the Dagger-Hashimoto hashing algorithm is compatible with AMD RX devices. VGAs with a high amount of RAM should be used in order to increase effectiveness of mining. The best option is AMD CPU. However, Nvidia’s 10-series equipment also shows impressive results on Ethash. Successful mining on this algorithm is impossible without a powerful VGA. The most popular models are the Radeon RX and RTX 2070 series, as well as the GTX 1060 and GTX 1070.\r\nAccording to experts, the electricity consumed during mining is abnormal. Therefore, the latest efficient equipment is a necessity. Excessive energy consumption is a characteristic feature of the Ethash algorithm. It has increased memory requirements. For example, successful mining means the last part of DAG must be stored. The requirements to the volume of storage devices based on the Ethash algorithm begin with 1 GB and grow by 441 MB per year.\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '121',
        Title: 'Dagger-Hashimoto (Ethash) coins:',
        Description:
          "1.\tEthereum. Currently, the cryptocurrency is the leading digital asset. It is considered the main counterpart to Bitcoin. Developers focus on the advanced Ethereum feature set, which is not only a means of payment, but also a decentralized platform for working with smart contracts.\r\n2.\tEthereum Classiс. This cryptocurrency appeared as a result of a hardfork criticized by many users. This digital asset was created based on the Ethereum Blockchain.\r\n3.\tExpanse. This virtual currency is an open source decentralized platform. It is designed for app development and is in demand on many popular stock markets.\r\n4.\tUbiq. This digital asset is a smart contracts platform developed to create Blockchain apps. The block is optimized compared to the original concept.\r\n5.\tPirl. The digital currency mining is based on the Ethash algorithm and masternodes’ activity. Smart contracts lie at the core of its process. The Ethash algorithm provides a reliable protection against ASIC miners.\r\n6.\tMetaversе. This is an advanced blockchain system created in China. It is designed to give access to digitized personal data, including assets with an increased level of secrecy. Metaverse’s goal is to drastically change the processing options of financial transactions. The improvement of supervisory services with the help of the digital assets network, such as Digital Identities and Oracle Intermediaries, are among the project's objectives.\r\nCryptocurrencies, such as Musicoin, SOILcoin, Elementrem, Ellaism, WhaleCoin, and Bowhead also work on the Ethash algorithm.\r\nCurrently, hashing of the metadata of the last block involving a special Nonce code is used when mining Ethereum and other popular coins. This code is represented as a regular binary number that defines a unique hash value.\r\nIn the updated algorithm, it is almost impossible to find the true value of the number. It requires going through many thousands of options to determine the hash.\r\n",
        Diagram: '',
        Caption: '',
      },
      {
        $id: '122',
        Title: 'Dagger-Hashimoto’s disadvantages:',
        Description:
          '1.\tProblems with repairing in case of equipment failure\r\n2.\tLow mobility, attachment to a specific place\r\n3.\tPossible interference from powerful ASIC devices\r\n',
        Diagram: '',
        Caption: '',
      },
      {
        $id: '123',
        Title: 'Dagger-Hashimoto’s advantages:',
        Description:
          '1.\tQuick and easy equipment setup\r\n2.\tRelative stability of the system\r\n3.\tHigh reliability\r\n4.\tDoes not require frequent software updates\r\nDespite the difficulties in activity and enormous competition in cryptosphere, the mining business is on a wave of popularity presently.\r\n',
        Diagram: '',
        Caption: '',
      },
    ],
    ImageURL: '',
    QuestionsAnswer: [],
  },
];

export default data_EN;
