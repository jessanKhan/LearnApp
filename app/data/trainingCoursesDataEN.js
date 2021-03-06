// javascript common object data type

var COURSES_DATA_EN = [
  {
    key: "1",
    topic_name: "Origins of\nBlockchain",

    imaUrl: require("../images/TrainingCourses/1.png"),
    topic_details: [
      {
        topic_item_key: 1,
        topic_item_title: "Bitcoin",
        topic_item_detalis: `The Bitcoin protocol, launched in 2009, established for the first time the viability of transferring value on a peer-to-peer basis over the internet, without the need for a trusted intermediary. Bitcoin was truly the first incarnation of blockchain when Satoshi Nakamoto, the pseudonymous creator of Bitcoin, solved the 'double spend' problem: the issue that digital information can easily be copied, and therefore a centralised authority was previously required to reflect where funds were located.

Although Bitcoin is very successful at transferring value and is an effective form of decentralised money, from the outset it was recognized that the same approach could be used to record information of almost any kind on the same shared basis. As well as cash, strings of characters on the blockchain could represent simple messages, ownership of physical or digital assets or securities, voting decisions, and so on.`
      },
      {
        topic_item_key: 2,
        topic_item_title: "Revolutionary",
        topic_item_detalis: `The rise of Bitcoin and similar protocols was accompanied by a rapid re-evaluation by governments, regulators and the financial services industry of the existing paradigms. Due to Bitcoin’s position outside of the control of state and financial authorities and its potential for misuse as a tool of fraud, money laundering and other illegal activity, as well as other concerns such as its volatility and the unregulated nature of the exchanges on which it traded, the first reactions tended to be skepticism and concern. However, an increasing number of leaders have also recognized the potential of blockchain technology and the broad range of use cases to which the distributed ledger lends itself.`
      }
    ],
    translations: {
      TestComplete: "Test Completed",
      YourResult: "Your Result",
      Backtoarticlelist: "Back to articlelist"
    }
  },
  {
    key: "2",
    topic_name: "What is\nBlockchain?",
    imaUrl: require("../images/TrainingCourses/2.png"),
    topic_details: [
      {
        topic_item_key: 1,
        topic_item_title: "Blockchain",
        topic_item_detalis: `A blockchain is the term used to describe a modern distributed ledger technology (DLT). Traditional centralized databases have been employed for many years by entities, from governments to global institutions, to store data and record transactions of any kind. These are carefully-guarded and enclosed systems in which only authorized operators are allowed to make entries and govern the accuracy of data being stored. When a customer transfers money from one bank account to another, they make a request to the bank to do so on their behalf rather than engaging directly with the database that holds information about balances. Centralization is inherent in the existing paradigm.

At its simplest, the blockchain is a digital ledger that is stored on a network of computers around the world. Instead of securing information by restricting access, the blockchain shares information amongst all users that adhere to the protocol. For example, ownership of funds is cryptographically verified, and the full transparency and mutual ownership of the system means that a bad actor is immediately recognizable as such and any transactions submitted by such a malicious node are ignored.`
      },
      {
        topic_item_key: 2,
        topic_item_title: "Key Features",
        topic_item_detalis: `
The decentralised structure of the blockchain brings several key features in contrast to traditional centralized approaches:

1. Transparency: It is possible for anyone to track the movement of funds from one account to another.
2. Immutability: Once confirmed, a transaction cannot be reversed and no one can compromise a confirmed transfer.
3. Cost Efficiency: Transaction fees are minimal and determined upfront by the sender.
4. Cross-border: Funds can be sent as easily to someone on the other side of the world as they can to someone in the next room.
5. Transaction Speed: Due to the flat and transparent nature of the blockchain, transfers show up almost instantly and are typically confirmed in minutes, rather than hours or days.

The following sections will be dedicated to explaining the fundamental concepts underpinning the blockchain.
        `
      }
    ],
    translations: [
      { TestComplete: "Test Completed" },
      { YourResult: "Your Result" },
      { Backtoarticlelist: "Back to articlelist" }
    ],
    translations: {
      TestComplete: "Test Completed",
      YourResult: "Your Result",
      Backtoarticlelist: "Back to articlelist"
    }
  },
  {
    key: "3",
    topic_name: "Purpose of\nBlockchain",
    imaUrl: require("../images/TrainingCourses/3.png"),
    topic_details: [
      {
        topic_item_key: 1,
        topic_item_title: "Security",
        topic_item_detalis: `The blockchain keeps users' data safe through the use of cryptography to code and decode messages, digital signatures, private and public keys, to access that data, and the immutable nature of the append only database that is a blockchain. Once confirmed, a transaction cannot be reversed. Only users with access to keys are allowed to create transactions from previous balances, and no one can interfere with a completed transfer. These strengths provide benefits for audit. Providers and recipients of data can be sure that data has not been altered. These benefits are not only useful for databases of financial transactions, but all digital transactions over the internet.`
      },
      {
        topic_item_key: 2,
        topic_item_title: "Decentralization",
        topic_item_detalis: `Decentralization is the transfer of decision making power and assignment of accountability and responsibility to all involved parties for results. Decentralization is achieved via a Peer-to-Peer (P2P) network that relies on a host of computers that can be geographically distributed around the world. It physically cannot work with a single computer or point-of-connection. Instead, it requires a slew of other computers to join in, in order to complete a specific task on the network.`
      },
      {
        topic_item_key: 3,
        topic_item_title: "Privacy",
        topic_item_detalis: `Internet privacy concerns the rights and policies related with data that can be used to identify an individual; specifically, storing, repurposing, provision to third parties, and displaying of said information. The categories of data are Personally Identifying Information (PII) or non-PII, information such as a site visitors behaviour on a website.

Blockchain does not require a users identity to securely function in the network. A pseudonym or alias is a name that a person or group assumes for a particular purpose, which can differ from their true name or identifying details. With techniques like digital signatures, cryptography and hashing, privacy of the user can be maintained with an address being used as a pseudonym.

In further iterations of blockchain technology, once a user decides to share PII or non-PII, that user will have full control of who can see and use this information, very different from the current situation with 3rd party applications selling your information off to the highest bidder.`
      },
      {
        topic_item_key: 4,
        topic_item_title: "Transparency",
        topic_item_detalis: `The blockchain is a public registry of who owns what and who transacted what. This auditable, shared ledger make it is possible for anyone to track the movement of transactions and resulting balances throughout the network. By using a block explorer like: https://chainz.cryptoid.info/strat/ you can track a multitude of details; track an address to see what transactions it has made and to what addresses, you can see a breakdown of token ownership throughout the network down to the вЂњrich listвЂќ or biggest owner of tokens of that blockchain.`
      },
      {
        topic_item_key: 5,
        topic_item_title: "Trustless",
        topic_item_detalis: `Trust is the cornerstone of any transaction. Knowing you will receive what is expected from the party you are making the agreement with has always required a middle man to perform tasks such as holding assets in escrow or verifying identities. With the blockchain, trust is established through mass collaboration and clever code rather than through a powerful institution that does the authentication and the settlement. Cryptography and consensus are two of the features of blockchain which make trust issues a thing of the past when transacting safely.`
      }
    ],
    translations: {
      TestComplete: "Test Completed",
      YourResult: "Your Result",
      Backtoarticlelist: "Back to articlelist"
    }
  },
  {
    key: "4",
    topic_name: "Peer-to-peer (P2P)\nNetwork and Nodes",
    imaUrl: require("../images/TrainingCourses/4.png"),
    topic_details: [
      {
        topic_item_key: 1,
        topic_item_title: "Peer-to-peer (P2P) network",
        topic_item_detalis: `The blockchain protocol operates on a peer-to-peer (P2P) network, with each client participating by connecting to several other clients in the network. The purpose of the blockchain network is to propagate transactions and blocks to all participants that subscribe to the blockchain protocol.

A P2P network architecture consists of computers that participate in an open network and are peers to each other. The term peers is used since every participant is equal; there is no preferential treatment within nodes and all nodes share the burden of providing network services. There is no centralized service nor hierarchy within the network. Nodes in a P2P network both provide and consume services at the same time with reciprocity acting as the incentive for participation. P2P networks are inherently resilient, de-centralized, and accessible to anyone which is a true reflection and foundation of the core characteristics of blockchain.

Any application can send the new transaction to any of the other clients it is connected to over any Internet channels, whether wired or wireless. Any network node that receives a valid transaction it has not seen before, will immediately forward it to other nodes to which it is connected. Thus, the transaction rapidly propagates out across the P2P network, reaching a large percentage of the nodes within seconds. This strength-in-numbers approach upholds the integrity of the protocol and secures the network because it lacks a sensitive central point-of-attack.`
      },
      {
        topic_item_key: 2,
        topic_item_title: "Nodes",
        topic_item_detalis: `The nodes together verify the information presented to the blockchain, run checks against other 'blocks' of connected information and, upon consensus, distribute the updated information to all other nodes on the network. The nodes complete their task by giving information a timestamp that indicates changes from the last update. The node also shows the update is approved through use of a connecting hash that links their approved updates to prior approved updates; This process develops the chain of blocks known as the blockchain.

Every full node in the network has a copy of all the data in the blockchain and is updated in real time, this is known as a distributed ledger.`
      }
    ],
    translations: {
      TestComplete: "Test Completed",
      YourResult: "Your Result",
      Backtoarticlelist: "Back to articlelist"
    }
  },
  {
    key: "5",
    topic_name: "Consensus\nRules",
    imaUrl: require("../images/TrainingCourses/5.png"),
    topic_details: [
      {
        topic_item_key: 1,
        topic_item_title: "Consensus Protocol",
        topic_item_detalis: `Blockchains are created on the basis that there is general agreement on the protocol by every participant. This is known as consensus rules that govern the protocol on a blockchain. The root word of consensus is "consent", which means that even if parties disagree, there is overall consent to move forward in order to resolve any disputes.

Consensus protocols are used by nodes to agree on the blockchain content. All nodes must agree to the network verified transaction being permanently incorporated into the blockchain. The goal of consensus rules is to ensure a single chain is used and followed by every participant on the network without the need of a central trusted authority. If a major disagreement ever occurs on the consensus protocol, this might potentially result in a hard fork, thereby creating a split in the blockchain into two separate chains.`
      }
    ],
    translations: {
      TestComplete: "Test Completed",
      YourResult: "Your Result",
      Backtoarticlelist: "Back to articlelist"
    }
  },
  {
    key: "6",
    topic_name: "Cryptographic Keys and\nDigital Signatures",
    imaUrl: require("../images/TrainingCourses/6.png"),
    topic_details: [
      {
        topic_item_key: 1,
        topic_item_title: "Cryptographic Keys",
        topic_item_detalis: `As information on the blockchain is transferred over a P2P network across the globe, blockchain uses cryptography to send data throughout the network without compromising the safety and integrity. This allows the blockchain to respect the privacy of users, prove the ownership of assets and secure the information on the network.

Cryptography is applied throughout the entire protocol onto all of the information that is stored and transacted on the blockchain. This provides users with cryptographic proof which forms the basis for trusting the legitimacy of a user's claim to an asset on the blockchain.`
      },
      {
        topic_item_key: 2,
        topic_item_title: "Encryption",
        topic_item_detalis: `Cryptographic hashes, such as the SHA256 computational algorithm, ensure that even the smallest change to a transaction will result in a different hash value being computed, this indicates a clear change to the transactional history.
        
Encryption is one of the most critical tools used in cryptography. It is a means by which a message can be made unreadable for an unintended reader and can be read only by the sender and the recipient.`
      },
      {
        topic_item_key: 3,
        topic_item_title: "Hashes",
        topic_item_detalis: `Hashes ensure data is not altered. Hashing is a method of cryptography that converts any form of data into a unique string of text. Any piece of data can be hashed, no matter its size or type. In traditional hashing, regardless of the dataвЂ™s size, type, or length, the hash that any data produces is always the same length. A hash is designed to act as a one-way function, there by obscuring the sourceвЂЉвЂ”вЂЉyou can put data into a hashing algorithm and get a unique string, but if you come upon a new hash, you cannot decipher the input data it represents. A unique piece of data will always produce the same hash.`
      },
      {
        topic_item_key: 4,
        topic_item_title: "Digital Signature",
        topic_item_detalis: `Specifically, public-key cryptography (aka asymmetric cryptography) is used to create a key pair which consists of a private key and a public key. The public key is used to create an address to receive a transaction, and the private key is used to sign transactions. Digital signatures provide verification and authentication of ownership on the blockchain. Using cryptographic digital signatures, a user can sign a transaction proving the ownership of that asset and anyone on the blockchain can digitally verify this to be true.`
      }
    ],
    translations: {
      TestComplete: "Test Completed",
      YourResult: "Your Result",
      Backtoarticlelist: "Back to articlelist"
    }
  },
  {
    key: "7",
    topic_name: "Transactions",
    imaUrl: require("../images/TrainingCourses/7.png"),
    topic_details: [
      {
        topic_item_key: 1,
        topic_item_title: "Transaction",
        topic_item_detalis: `A blockchain transaction is a broadcast to the network that the owner of a number of coins has authorized the transfer of portion of those coins to another owner. The receiver can now spend these coins by creating another transaction that authorizes transfer to another owner, and so on, in a chain of ownership.Instead of storing balances in traditional double-entry bookkeeping, blockchains maintain a complete lineage of transactions, which can be used to work out each the balances at any point in time, as well as the state of the blockchain as a whole.`
      },
      {
        topic_item_key: 2,
        topic_item_title: "Unspent Transaction Output (UTXO)",
        topic_item_detalis: `Each cryptocurrency coin is represented by an unspent transaction output (UTXO) which is just a pair of transaction ID (TxID) and order number together with the associated coin value. And when the coin is used, for example the coin is sent to someone else or in parts, it becomes a spent transaction output (STXO). Only UTXOs are valid coins, not STXOs, which represent past transacted coins that are no longer valid. The system state is of UTXOs with each output locked requiring the user to provide proof of ownership using their private keys to spend their UTXOs.`
      }
    ],
    translations: {
      TestComplete: "Test Completed",
      YourResult: "Your Result",
      Backtoarticlelist: "Back to articlelist"
    }
  },
  {
    key: "8",
    topic_name: "Proof-of-Work (PoW) and\nProof-of-Stake (PoS)",
    imaUrl: require("../images/TrainingCourses/8.png"),
    topic_details: [
      {
        topic_item_key: 1,
        topic_item_title: "Proof-of-Work (PoW)",
        topic_item_detalis: `At the core of every blockchain consensus protocol is a cryptographic algorithmic computation that decides the proof required to computationally find the next block to be added on the chain. Answers to the cryptographic puzzle are super hard to find but very easy to prove.

Proof-of-Work (PoW) was the first of these algorithm to be proposed under the bitcoin protocol. This is essentially a piece of output from a cryptographic puzzle that requires significant computation to solve. In PoW, the miners are looking for a special value called nonce that is inserted inside the block in order for that hash of its header to have some specific properties. Bitcoin miners race to find a numeric solution to the cryptographic algorithm that meets a network-wide difficulty target. The first miner to find such a solution wins the round of competition and earns the right to publish that block into the blockchain. Every new block creates a number of new coins that is rewarded to the winning miner.`
      },
      {
        topic_item_key: 2,
        topic_item_title: "Proof-of-Stake (PoS)",
        topic_item_detalis: `As PoW requires tremendous computational power, Proof-of-Stake (PoS) is an energy-efficient alternative to achieve consensus between nodes. Instead of miners fighting to mine the next block onto the chain, PoS encourages holders of the coin to stake their holdings. The creator of the next block is determined randomly and in return, the more coins that are at stake, the greater chances there are to mine the next block. Staking is further secured by making holders lock their holdings for a period of time to realise their rewards.
        
The consensus protocol specifies that the difficulty target should be readjusted after every number of blocks have been mined to achieve a target spacing. The difficulty will increase or decrease based on the hash power of all devices on the blockchain network.`
      }
    ],
    translations: {
      TestComplete: "Test Completed",
      YourResult: "Your Result",
      Backtoarticlelist: "Back to articlelist"
    }
  },
  //EDITING
  //FINISH
  {
    key: "9",
    topic_name: "Characteristics of Cryptocurrency ",
    imaUrl: require("../images/TrainingCourses/9.png"),
    topic_details: [
      {
        topic_item_key: 1,
        topic_item_title: "WHAT IS CRYPTOCURRENCY ? ",
        topic_item_detalis: `A cryptocurrency is a payment instrument that is accepted by participants of a system for the rendered services or  provided products. 

Anyone who accepts the cryptocurrency as a payment becomes a participant of the system automatically. At the same time, when the participant rejects payments and disposes of the cryptocurrency, he or she leaves the system. This feature makes the cryptocurrencies transparent. However, the most distinctive feature of the digital money is that it is a voluntary payment system unlike the traditional money systems. Thus, citizens of any country are bound to use the national currencies regardless of their needs and wishes, whereas the use of cryptocurrencies is not obligatory at all. The only limitation in this system is the number of those who want to accept cryptocurrencies as a payment for services or products. `
      },
      {
        topic_item_key: 2,
        topic_item_title: "WHAT IS THE SOURCE OF CRYPTOCURRENCIES?",

        topic_item_detalis: `Originally, cryptocurrencies appear as a result of an initial coin offering (ICO) - an auction of a certain amount of virtual coins for all those who are interested and who subsequently become participants of the system based on the offered cryptocurrency. ICOs are usually conducted in order to launch a project. The project's participants are often big companies that maintain functioning of the system as they accept the cryptocurrency as a payment for their goods or services. This feature makes cryptocurrencies similar to stocks with the only difference: they can be used for settlements. 
        
Records about cryptocurrency transactions are stored in several places in a decentralized way unlike the traditional money. Participants of the cryptocurrency system are the ones who store and make records about all operations that are conducted with the cryptocurrency. This process is called mining. Those who are involved in mining provide their technical resources (a PC) for storage and processing of the data on transactions with a certain cryptocurrency. It ensures operation of the system. At the same time, the security of the system is maintained thanks to decentralized processing and storage of the data. However, this process is quite energy-consuming and requires high capacity of a computer. Those who provide their technical resources get the mined digital coins as a reward. 

Most projects have a limited amount of cryptocurrencies, and some part of them is placed initially at ICOs. The rest of the coins is put  into circulation as rewards for miners. However, the mining is not endless: sooner or later all coins get mined, so only processing of transactions and storage of the data are left to be done. As a reward for these activities, miners get a share of the commissions paid for the transactions with this cryptocurrency. 
        
Along with that, some projects have no limits on the amount of coins as they are issued as rewards for mining. 
        
Lately, the projects that imply no mining at all have become frequent. These projects have a limited amount of coins.`
      }
    ],
    translations: {
      TestComplete: "Test Completed",
      YourResult: "Your Result",
      Backtoarticlelist: "Back to articlelist"
    }
  },

  {
    key: "10",
    topic_name: "How to profit from investing in ICO?",
    imaUrl: require("../images/TrainingCourses/10.png"),
    topic_details: [
      {
        topic_item_key: 1,
        topic_item_title: "What is ICO",
        topic_item_detalis: `An ICO is a modern means of investment with the help of cryptocurrencies. The abbreviation stands for “Initial Coin Offering”. On the Internet, you can also come across such a term as crowdsale.

With an ICO, the cryptocurrency is sold in a form of digital tokens (coins) that are not yet listed on the stock exchanges and their mining has not been launched. Token owners sell them to other investors in exchange for cryptocurrency or money. Later, these tokens can be used both as an internal currency within the launched startup project or for trading in the stock market.`
      },
      {
        topic_item_key: 2,
        topic_item_title: "What is an ICO for?",
        topic_item_detalis: `All new coins need support at the initial stage as their development usually requires some investments. Therefore, token holders at the very early stage of development issue them for ICOs and exchange them for cryptocurrencies (Bitcoin, Ethereum) or fiat money (the dollar, the euro). The raised funds are invested further into the project.

When launching an ICO, the developers give details of their startup, its main idea and prospects. If investors show interest in the token, they become participants of the ICO. 
Notably, the more users know about the token and trust it, the more successful its launch will be. This means that the investor can actually make a good profit by selling his/her tokens later.`
      },
      {
        topic_item_key: 3,
        topic_item_title: "ICO regulation",
        topic_item_detalis: `The legal status of cryptocurrencies is rather uncertain nowadays what makes all the associated processes, such as ICOs, a very ambiguous type of investment. Although ICOs are not prohibited by law, no official agreement can be signed between project developers and investors.

Relationships between investors and developers are based on trust and belief that the cryptocurrency startup will become successful. If the project fails, the reputation of its creators will be damaged. What is more, investors will not be able to sue developers or receive any support from the government.`
      },
      {
        topic_item_key: 4,
        topic_item_title: "ICO and IPO: What is the difference?",
        topic_item_detalis: `IPO stands for an initial public offering, whereas an ICO is the initial coin offering. Both IPO and ICO have some similar features, however, there are some major differences as well.
Within an IPO, shares sold in the primary market belong to well-established and trustworthy companies with stable income. As for the ICO, it is very similar to crowdfunding since the token itself has no real value at the stage of launching. In other words, startup developers sell an idea rather than a final product.
        
An initial public offering is regulated by national legislation, and stock investors have certain guarantees unlike those who invest in ICOs. However, the IPO procedure is much more complicated. For example, in order to launch a public offering in the US, a company must be registered with the SEC (Securities and Exchange Commission) and have the status of a joint-stock company. The process of an initial coin offering is easier to launch and is less restricted, but users have no guarantees.`
      },
      {
        topic_item_key: 5,
        topic_item_title: "Why invest in ICO?",
        topic_item_detalis: `Despite high risks, a startup project can bring big profit for its investors. In case of a successful launch, the token’s popularity grows and so does the price. It is quite common nowadays when investors become immensely rich after buying tokens of a promising project. Ethereum can be a good example. In the summer of 2014, during the ICO, tokens were less than one cent, and today their price rises to $400.

Selling tokens is not the only possible way to gain profit. You can use them to get the services stated in the project at a lower price.
        `
      },
      {
        topic_item_key: 6,
        topic_item_title: "Risks of investing in ICO: what to pay attention to?",
        topic_item_detalis: `The possibility to face a fraud remains the biggest risk when entering an ICO. In this case, the scammers have the only goal - to “pump and dump” users. However, there is also a chance that a project may fail or disappoint investors at the stage of its implementation. Usually, an ICO is done in one round, so the chances of getting additional funds are extremely small. This factor may be considered as a potential risk for the long-term project development.

First of all, the investor should have a closer look at the Token Sale Agreement. Some details may come up that developers of the ICO preferred not to announce publicly.
Moreover, there are several common signs indicating reliable developers.
        
        • Founders of the project have flawless reputation.
        • Company’s website features all the necessary agreements and regulations.
        • The project has a working prototype.
        • The white paper and additional documentation are well-elaborated.
        • There is a special escrow account where money and documentation are stored until certain obligations are fulfilled.
        • The company should be a registered business.`
      },
      {
        topic_item_key: 7,
        topic_item_title: "Successful ICOs",
        topic_item_detalis: `Whether an ICO is successful should be determined by the amount of attracted investments. So far, the Bancor project is the leader among ICOs as in June 2017 the project team managed to raise 396,720 ETH in less than three hours.

Brave, an innovative browser, is another good example. The project raised $35 million in just 30 seconds.
        
The list of successful cryptocurrency startups in spring of 2017 also includes the following projects:
         
            • Aragon (the planned 275,000 ETH (about $25 million) were collected in 15 minutes);
            • Storj (the project raised $30 million within a few days ).
        
Some other projects with equally impressive results:
        
            • mobileGo ($53 million);
            • Gnosis ($12.5 million in 10 minutes);
            • Blockchain Capital ($10 million in 2 hours);
            • Aeternity (23.4 CHF);
            • Status (around $100 million). The project was also notable for causing failure in the Ethereum network operation.
        
The DAO famous project became a part of cryptocurrency history. As the result of its collapse, the Ethereum Classic came into existence in summer 2016.`
      }
    ],
    translations: {
      TestComplete: "Test Completed",
      YourResult: "Your Result",
      Backtoarticlelist: "Back to articlelist"
    }
  },


  {
    key: "11",
    topic_name: "Crypto Airdrop",

    imaUrl: require("../images/AirDrop/AirDrop.jpg"),
    topic_details: [
      {
        topic_item_key: 1,
        topic_item_title: "Crypto airdrop: how to get free tokens?",
        topic_item_detalis: `Nowadays, cryptocurrencies are perceived as a way to make money due to increased popularity and international recognition. There are different methods you can use to earn on cryptocurrencies. Some of them require particular investments. However, there are cases when you can make a profit without any investment. It is not a trap or a scam. You can receive free tokens as a reward for particular services. Therefore, a cryptocurrency airdrop deserves special attention. Read our article to find out what an airdrop is and how to use it.
          `
      },
      {
        topic_item_key: 2,
        topic_item_title: "What is a cryptocurrency airdrop?",
        topic_item_detalis: `The definition of an airdrop is an act of dropping supplies by parachute from an aircraft. In crypto sphere, an airdrop is when a blockchain project distributes free tokens to the crypto community. \n Usually, airdrops are launched by a little-known startup to attract attention to their projects. These can be new cryptocurrencies, programs, apps, platforms, blog hosting services, etc. Startups attract investors offering them their services. When a startup is launched or is being developed it needs to raise awareness to its new project as well as find interested users.\n The final goal of an airdrop is promotion.\n The launch of an airdrop is similar to an ICO, notifications of the crypto community about new projects, or a Bounty campaign. The airdrop announcement is the following:
 \n• famous crypto forums such as BitcoinTalk make a corresponding announcement. \n
 • An airdrop is announced on special platforms such as Airropalert.com \n
 • Platforms which gather information about crypto projects also provide the details about the upcoming airdrop of free tokens. \n
 • Telegram channels and social media accounts, dedicated to a new project, tell subscribers about an airdrop.  \n
Such information release takes place not long before a cryptocurrency airdrop and right after the distribution of tokens. Announcements can give you the details about an airdrop and its conditions as well as some facts about a project and its advantages.

                 `
      },
      {
        topic_item_key: 3,
        topic_item_title: "How to conduct a crypto airdrop? ",
        topic_item_detalis: `Currently, there are two main methods to realize an airdrop \n\nMethod 1.  The holders of a particular cryptocurrency can receive free tokens. The distribution of tokens is in correlation with the number of coins in user’s wallet. Tokens are sent automatically to wallet addresses.
            \nThis method is typical for developer of hard forks who try to enhance the efficiency of a parent cryptocurrency. Their primary goal is to attract users’ attention to the advanced version of the coin. \n For example, let’s take a look at the distribution of Bitcoin Cash to Bitcoin holders. They received a number of coins equal to the amount of Bitcoins on their accounts.
 \nHowever, there are cases when conditions of airdrops change depending on developers’ decision. Thus, Bitcore was credited only to accounts of those Bitcoin holders who had at least 0.01 BTC on their account.\n Sometimes coins are distributed between holders of unrelated cryptocurrencies. For example, Bitcoin holders can get the Stellar Lumens coin. Nowadays, a common condition for an airdrop is a certain amount of Ethereum in your wallet.
\n\nMethod 2.  Blockchain products distribute tokens in return for particular services. They can ask users to assist in project promotion, to leave comments, set an avatar, translate a text or be active on social media. In this case, anyone can receive free coins.
\n It is not beneficial for project developers to simply give tokens to people who left their wallets addresses and forgot about them. That is why, conditions of the distribution change every time. However, the primary goal of an airdrop is promotion of a new product which includes reposts on Facebook or Twitter. In return for free coins, users become members of particular crypto communities. In order to raise awareness to the project, developers use various Telegram channels, messengers and social platforms.


            `
      },
      {
        topic_item_key: 4,
        topic_item_title: "What is the difference between a cryptocurrency airdrop and a bounty campaign?",
        topic_item_detalis: `There are users who confuse an airdrop with a bounty campaign. However, these are two completely different types of earning money.
\n• A bounty has inflated requirements for its participants.\nAn airdrop has simpler rules for participants, while a bounty campaign requires special skills, such as knowledge in the field of programming, design, and foreign languages. Sometimes, users should have a large number of followers. Developers who choose bounty for their project, have to look for competent people. In an airdrop, simple actions are enough to promote a project.  \n 
• An airdrop is easier to implement compared to a bounty.\nRegistration for a bounty can be time-consuming compared to an airdrop. Participants of a bounty campaign can wait for two weeks in order to receive a reward. Complementary tokens for an airdrop come much faster. However, in the case of an airdrop, the distribution of free tokens can also be delayed. However, it is not about an airdrop, but about developers incompetence.
\n• A bounty reward is bigger than an airdrop reward.\nUsers tried to calculate the difference between a reward for a bounty and an airdrop multiple times reporting about the results on various forums. They came to a conclusion that the remuneration ranges from tenfold to twentyfold if to participate in several projects at the same time. This information cannot be not 100% accurate. However, it is true that an airdrop reward is smaller than a bounty reward.
\n Point to note: airdrops do not require much effort compared to Bounties.`
      },
      {
        topic_item_key: 5,
        topic_item_title: "Advantages of an airdrop",
        topic_item_detalis: `   • Free cryptocurrency, which can rise in price over time. Do not hope for huge profit. However, if a project is successful, you will be able to earn $50-100 at some point.
            \n
   •	Minimum of effort. You just need to press a few buttons - repost or sign up on a particular website, in order to receive free coins. If tokens are credited automatically, no other actions needed.
           \n
   •	Participation in an airdrop is less time-consuming. You have time to do other things or take part in similar campaigns.
            `
      },
      {
        topic_item_key: 6,
        topic_item_title: "Disadvantages of an airdrop",
        topic_item_detalis: `• There are high standards for the airdrop participants. Usually, it requires a certain number of friends and followers or a particular status on forums. Beginners will not meet the standards. For example, a participant with 100,000 Twitter followers can expect more or less considerable reward in the form of coins. However, it will be minimum if you have only 400-500 subscribers on social media. \n
            •	You can count on big profit participating in several projects at once. This is not about dozens but hundreds even thousands of projects. On average, participation in one project takes about an hour. It is time consuming when it is a hundred of projects. You can get $50 for a hundred of hours. \n

            ⦁	Nobody can guarantee success of the project. There are tokens that never enter the cryptocurrency exchange. Moreover, you need to take into account token distribution delays, unexpected changes in conditions, and force majeure. \n

            •	There are many fraudulent schemes when it comes to crypto airdrops. In particular, viruses can be spread via airdrops to steal money from user accounts. For example, holders of a certain amount of Bitcoin or other online currency make an announcement about free distribution of tokens. On the registration page you need to specify personal data, including the wallet address and the amount of money on the account. Sometimes, it is enough to get into the risk zone and lose money. There are even more tragic stories. A user is asked to enter the private key from the wallet to check the amount of funds in the account. Many users give it, instantly losing the accumulated funds. \n
            `
      },
      {
        topic_item_key: 7,
        topic_item_title: "Is it worth participating in an airdrop and why?",
        topic_item_detalis: `Despite some persuasive disadvantages, an airdrop still can be considered as a way of earning money. \n
            Certainly, you can participate in a hundred airdrops with 90% of them being failed. In this case, nobody will get any money. At the same time, other, say, nine will bring from $5 to $50 and one out of a hundred will give tens and even hundreds of percent. Successful airdrops happen rarely. However, nobody knows for sure. In order to find a profitable project, you need to participate in a hundred of them.\n
            Moreover, there are some remarkable results. A user earned $12,000 on airdrops for three months. Surely, it did not happen very fast, as coins needed time to go up in price.\n
            As for airdrops, we can say that holders of popular cryptocurrencies can see them as a source of additional income. Therefore, they monitor projects to be aware of future token distributions.\n
            In order not to get in the hands of scammers, you need to be very attentive, control each your step from checking the website address to entering personal data. This does not include private keys, passwords and other highly confidential information.\n
            If you do not have a popular social media account, there is no need to attract attention to it for the sake of an airdrop. If you have time and desire, you can monitor airdrop projects with suitable conditions. There are not so many relevant projects. However, participation in dozens of such airdrops can be beneficial. \n
            `
      },

    ],
    translations: {
      TestComplete: "Test Completed",
      YourResult: "Your Result",
      Backtoarticlelist: "Back to articlelist"
    }
  },
  {
    key: "11",
    topic_name: "Is ICO to be replaced by IEO?",
    imaUrl: require("../images/TrainingCourses/11.png"),
    topic_details: [
      {
        topic_item_key: 1,
        topic_item_title: "Is ICO to be replaced by IEO?",
        topic_item_detalis: `The cryptosphere is growing rapidly. Recently, an ICO (Initial Coin Offering) has been introduced. It allows projects to receive money for further development. Currently, there are many talks about the new innovative financing model, called an IEO (Initial Exchange Offering). What is an IEO? Will it become a new ICO?`
      },
      {
        topic_item_key: 2,
        topic_item_title: "What is IEO? History of the concept",
        topic_item_detalis: `An IEO is a token sale or fundraising conducted by a cryptocurrency exchange on its platform.  Basically, it is an advanced ICO. Here, the exchange is the key marketing partner of the project and the coin listing is carried out in a couple of days after the end of the campaign.

The concept of IEOs belongs to Binance, the largest cryptocurrency exchange. The Binance Launchpad platform emerged in 2017. It is designed to create tokens and trade new cryptocurrencies directly from the exchange. IEOs had remained in the background for a while. However, Binance’s latest initiative to introduce more digital currencies directly from the platform sparked great interest among investors around the world. 
        
Recently, Binance Launchpad has held two IEO of Fetch and BitTorrent. The latter has grown by 600% compared to its original cost. Investors could not ignore such overwhelming results. IEOs are now being carefully studied and closely monitored by the cryptosphere members.`
      },
      {
        topic_item_key: 3,
        topic_item_title: "What is the difference between ICO and IEO?",
        topic_item_detalis: `The main difference between ICOs and IEOs is that in case of an IEO, a coin is traded on a platform at once. Any investor can confirm that the most tricky thing about ICOs is uncertainty about whether a token will appear on a popular exchange. Obviously, these circumstances are not welcomed by investors.

IEO procedure: Binance Launchpad announces new IEOs. Then, a token becomes available on a first-come, first-served basis. The tokensale is complete when the fundraising reaches its limit (Hard Cap). At that point, investors can immediately exchange tokens on Binance.
        
ICOs lost their credibility when many of its tokens turned out to be a scam. At the same time, IEOs give investors confidence.
        
However, there is another difference between an ICO and an IEO. In case of an ICO, tokens are released right after the funding, while in an IEO, projects generate tokens and send them to the exchange.
        
Interesting fact: IEO’s capitalization amounted to $909.7 billion in the first six month of 2019. On average, projects have put up for sale about 4.4% of issued token. Information is based on BitMEX data.`
      },
      {
        topic_item_key: 4,
        topic_item_title: "Why exchanges are interested in IEO?",
        topic_item_detalis: `Exchanges are interested in IEOs because they can rely on a completely new use of their platform. The scope of an exchange's services expands once it carries out an EIO. Exchanges can now earn on the project offering, trading commissions, the growth rate of their native coins, and consulting services. Moreover, they attract new users, offer exclusive currency pairs, and increase reputation. Remarkably, Binance Launchpad have become popular due to successful IEOs.

After conducting IEOs, an exchange becomes the first platform to list a token. In case of Binance Launchpad, Fetch and BitTorrent tokens were available only on Binance which made it the first platform to ever trade both tokens. Therefore, the exchange has surpassed its competitors. An IEO provides free advertising which is equally important.`
      },
      {
        topic_item_key: 5,
        topic_item_title: "IEO disadvantages",
        topic_item_detalis: `Like any other platform, IEOs also have their disadvantages. In this case, the drawback is that token issuers will have to pay for the benefits provided by an IEO. Offering is expensive. Therefore, some startupperss cannot afford it. Moreover, a number of exchanges charge additional commissions from the funds raised by an IEO.
Usually, token issuers are responsible for marketing expense which can be rather high. The costs can exceed $100 thousand and should be paid despite the results of listing on the exchange.`
      },
      {
        topic_item_key: 6,
        topic_item_title: "Who can invest in IEO?",
        topic_item_detalis: `In theory, any person can invest in IEOs. However, there are exceptions. There are countries where IEOs are forbidden. If you are a resident of such a country, you cannot invest in IEOs.
The process is the same as in ICOs, it requires identity verification similar to KYC (Know Your Customer). Trading will be available only when verification is successfully completed. Residents of countries such as the US, China, North Korea, Venezuela, and New Zealand are forbidden from participating in IEOs due to the local legislation on digital currencies.`
      },
      {
        topic_item_key: 7,
        topic_item_title: "How and where to invest in IEO",
        topic_item_detalis: `The process of selling and buying new digital assets is being improved. In order to invest in IEOs, you just need to have an account on a corresponding exchange. Investment is possible when KYC is successfully completed. An IEO is more user friendly in comparison to an ICO. Previously, ICOs required participants to have a personalized digital wallet and send money to the tokensale address. This procedure caused unnecessary stress. Therefore, it was negatively perceived by investors. In IEOs, the process has become easier because the exchange has embedded wallets.

More cryptocurrency exchanges are trying to implement the new investment model in their work creating healthy competition. Recently, Kucoin has announced its new IEO platform called Spotlight. The Huobi exchange is also developing a similar platform. Besides, Bittrex has shown intentions to implement IEO. 
        
Binance’s successful initial exchange offerings suggest that IEOs have potential. Both Fetch and BitTorrent were immediately sold out becoming a popular topic on specialized online forums.
        
Many exchanges are actively implementing their token platforms. Thanks to the Launchpad program, Binance has become a leader in the industry. 

Binance Launchpad. 2017 has become a successful year for ICOs bringing fame and profit to exchange founders. In the second half of 2018, market problems became clearly visible. Numerous fraudulent projects have been very damaging for ICOs. Since January 2019, IEOs have begun to replace ICOs. They are not just individual startups, but eminent exchanges. Binance Launchpad has turned IEOs into a powerful new trend.

Launchpad is a token platform. Binance team provides necessary training for chosen startups and allows them to use its 10 million audience platform for fundraising. The largest prestigious exchange is more reliable compared to numerous infamous scam-projects.

Binance carefully collects information about each project before approving and presenting it to the huge audience of its users. A detailed profile allows Binance investors to weigh up the pros and cons before investing in a particular offer.

Bitmax Launchpad. The Bitmax exchange has also introduced its Launchpad. DOS Network became the first IEO when the token was launched on March 10, 2019. DOS Network promises to make the blockchain more user friendly with the help of real data and computing power.

Bittrex IEO. Bittrex announced the launch of its first IEO in March 2019. A new RAID token (Hard Cap - $6 million) was supposed to appear on the platform. According to official data, users could have bought coins for a set price directly from developers on the exchange. However, when the time of launch came, the exchange canceled the IEO promising to explain the reasons later.

OKEx. The OK Jumpstart program will allow developers to sell tokens in order to finance their projects. OKEx is aimed at making financing safer. OKEx team is also planning to help developers to attract more investors. According to Andy Cheung, Head of Operations at OKEx, EIOs will be beneficial not only for the exchange but project developers as well. First of all, this applies to startuppers who are looking for means to implement their ideas.

uCoin Spotlight. KuCoin representatives have also been thinking about their own IEO platform. Its name will be KuCoin Spotlight. Michael Gan, CEO at KuCoin, is pleased that the new platform will be able to find new tokens in a blockchain allowing exchange users to directly invest in financially profitable projects.

Huobi Prime. The Huobi exchange follows a similar path. Its Huobi Prime platform will be slightly different from others. According to developers, it will become a platform for selective listing of tokens based on their native coin - the Huobi token. Huobi Prime team continues working on the platform in order to offer high-quality crypto projects an innovative, fast, and compatible coin listing service.`
      }
    ],
    translations: {
      TestComplete: "Test Completed",
      YourResult: "Your Result",
      Backtoarticlelist: "Back to articlelist"
    }
  },
];
// module.exports = flatListData;  // For this you can access "flatListData" as a publicy
export default COURSES_DATA_EN;
