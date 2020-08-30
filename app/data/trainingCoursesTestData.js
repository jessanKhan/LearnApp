export default COURSES_TEST_DATA = {
  en: [
    {
      key: '1',
      topic_name: 'Origins of Blockchain',
      questions_data: [
        {
          question_key: 1,
          question:
            'What is the name of virtual Distributed Ledger Technology (DTL)?',
          options: ['Digital protocol', 'Blockchain', 'Genesis block'],
          answer: 2,
        },
        {
          question_key: 2,
          question:
            'What is the difference between decentralized databases and traditional ones?',
          options: [
            'Transparency and effectiveness',
            'Field of use',
            'The name only; basically, they are the same',
          ],
          answer: 1,
        },
        {
          question_key: 3,
          question:
            'Who can access the information about payments and transfers?',
          options: [
            'Only superhigh-level specialists',
            'Any user who applies digital protocols',
            `Only an employee of a bank or a regulatory authority`,
          ],
          answer: 2,
        },
      ],
    },
    {
      key: '2',
      topic_name: 'What is Blockchain?',
      questions_data: [
        {
          question_key: 1,
          question: 'Give the definition of hard fork.',
          options: [
            'Hard fork represents small changes to the network operation that do not particularly affect the operation and structure of the blockchain system.',
            'Hard fork is a decision unanimously made by all members of the community, which has a specialized protocol in the blockchain system.',
            'Hard fork is a radical change to the protocol that confirms or rejects a transaction, which significantly changes the structure of the blockchain system.',
          ],
          answer: 3,
        },
        {
          question_key: 2,
          question:
            'What are the main consensus protocols based on the blockchain technology?',
          options: [
            'Proof-of-Work (PoW), Proof-of-Stake (PoS) and Proof-of-Importance (Pol).',
            'Hard fork, a protocol used in the case of creating a new project based on the old source code.',
            'Soft fork, an algorithm providing innovations in the protocol that do not have a great influence on the operation and structure of the blockchain system.',
          ],
          answer: 1,
        },
        {
          question_key: 3,
          question: 'What is the consensus protocol’s function?',
          options: [
            'The consensus protocol is necessary to synchronize all the content that makes up the blockchain. This ensures that the network is always included in the blockchain.',
            'During this process, the blockchain split in two. This is a result of changes to the protocol consensus. One blockchain becomes the updated version, and the other uses the old protocol.',
            'In programming, this term is used in the case of creating a new project based on the old source code.',
          ],
          answer: 3,
        },
      ],
    },
    {
      key: '6',
      topic_name: 'Purpose of Blockchain',
      questions_data: [
        {
          question_key: 1,
          question:
            'Name the cryptographic algorithm that transforms a given set of information into a unique string.',
          options: ['Cryptanalysis', 'Hashing', 'Asymmetric cryptography'],
          answer: 2,
        },
        {
          question_key: 2,
          question:
            'What guarantees confirmation of the user’s personal identification data?',
          options: [
            'Encryption',
            'Digital signature',
            'Cryptographic proof of actions',
          ],
          answer: 2,
        },
        {
          question_key: 3,
          question:
            'Which of the cryptographic algorithms is most often used in the blockchain system?',
          options: [
            'Public-key cryptography (asymmetric cryptography)',
            'Symmetric cryptography',
            'A cryptographic hash method, such as the SHA256 computing algorithm',
          ],
          answer: 1,
        },
      ],
    },
    {
      key: '7',
      topic_name: 'Peer-to-peer (P2P) Network and Nodes',
      questions_data: [
        {
          question_key: 1,
          question: 'What are applications of blockchain technology?',
          options: [
            'This technology is used only in operations with Bitcoin',
            'The scope for the use of blockchain technology is almost limitless',
            'The technology is designed solely for financial services',
          ],
          answer: 2,
        },
        {
          question_key: 2,
          question: 'What does the term "distributed ledger" mean?',
          options: [
            'This is the name of the first published Bitcoin protocol',
            'It is a complex database covering many countries, organizations, websites, and ordinary users',
            'This is a clear demonstration of the P2P network with latching data',
          ],
          answer: 2,
        },
        {
          question_key: 3,
          question:
            'Why don’t state financial institutions regulate digital currencies?',
          options: [
            'It is technically impossible; decentralization is one of the basic principles of the system',
            'Authorities and major financial institutions consider it unnecessary',
            'Virtual money has long been regulated, as well as fiat money',
          ],
          answer: 1,
        },
      ],
    },
    {
      key: '8',
      topic_name: 'Consensus Rules',
      questions_data: [
        {
          question_key: 1,
          question: 'What are nodes?',
          options: [
            'Nodes are devices such as a personal computer that make up a blockchain network.',
            'Nodes are peer-to-peer (P2P) protocols based on blockchain technology.',
            'Nodes are active users operating within a blockchain protocol.',
          ],
          answer: 1,
        },
        {
          question_key: 2,
          question: 'The goal of the P2P network is to:',
          options: [
            'Check blocks of information that are not part of the network.',
            'Completely block transactions and chain blocks for all participants in case of emergency.',
            'Distribute transactions and chain blocks for all participants operating within a blockchain protocol.',
          ],
          answer: 3,
        },
        {
          question_key: 3,
          question:
            'What are the basic principles of the peer-to-peer network?',
          options: [
            'No hierarchy and centralization. This network is completely decentralized and independent.',
            'Every member of the network has unique capabilities, and every node performs different functions.',
            'To restrict access for users and ensure complete confidentiality of information in the system.',
          ],
          answer: 1,
        },
      ],
    },
    {
      key: '9',
      topic_name: 'Cryptographic Keys and Digital Signatures',
      questions_data: [
        {
          question_key: 1,
          question: 'Is it possible to cancel a blockchain transaction?',
          options: [
            'No, it is impossible, the transaction cannot be canceled.',
            'Yes, users with access keys can do this.',
            'If a sender or a recipient is not sure that his data has not been distorted, the transaction is canceled automatically.',
          ],
          answer: 1,
        },
        {
          question_key: 2,
          question: 'Define the decentralized nature of blockchain technology.',
          options: [
            'The term means the process of redistribution of system functions directed from the participants towards a single center or governing body that is responsible for the smooth operation of the system and has full control.',
            'It is a collective responsibility for making decisions and for the result obtained. Rather than relying on a central authority, it requires a consensus mechanism among individual users to establish a single ledger.',
            'This term means that the source data has not been changed when performing any operation, data transmission, storage or dataview.',
          ],
          answer: 2,
        },
        {
          question_key: 3,
          question: 'What guarantees confidentiality of a system user?',
          options: [
            'Confidentiality is guaranteed through technologies such as digital signatures, cryptography, and hashing.',
            'A blockchain system has the most stringent requirements for identifiers, as well as restrictions on the number and quality of pseudonyms.',
            'Block explorer. It hides the address from which and to which funds are transferred and also encrypts the number of tokens in the system and personal data of their current owners.',
          ],
          answer: 1,
        },
      ],
    },
    {
      key: '10',
      topic_name: 'Transactions',
      questions_data: [
        {
          question_key: 1,
          question:
            'Name the main function of the Unspent Transaction Output model (UTXO).',
          options: [
            'UTXO refers to transactions made earlier, which are no longer valid.',
            'The Unspent Transaction Output scheme, or UTXO, ensures confidentiality of transactions with the help of asymmetric encryption.',
            'It is designed to track the database state. In the UTXO model, the token sender and the token recipient can monitor the flow of transactions.',
          ],
          answer: 3,
        },
        {
          question_key: 2,
          question: 'Give a definition of the term “transaction”',
          options: [
            'This is an identifier of each monetary transaction that helps to determine the location of money, its remitter and amount.',
            'This is an operation for the movement of funds, an act of purchase and sale. In the field of information technologies, a transaction is a group of successive operations with a database.',
            'This is a technology for transmitting financial information in the blockchain system, as well as in wired networks or in packet switched networks.',
          ],
          answer: 2,
        },
        {
          question_key: 3,
          question:
            'What is an indication that the payment (transaction) has been conducted?',
          options: [
            'Transaction ID (TXID)',
            'STXO model',
            'The recipient’s personal confirmation',
          ],
          answer: 1,
        },
      ],
    },
    {
      key: '11',
      topic_name: 'Proof-of-Work (PoW) and\nProof-of-Stake (PoS)',
      questions_data: [
        {
          question_key: 1,
          question:
            'Who has the right to add a new block to the blockchain within the PoW algorithm?',
          options: [
            'creator of cryptocurrency.',
            'any user',
            'only the miner who will be the first to define the numerical solution of the cryptographic algorithm',
          ],
          answer: 3,
        },
        {
          question_key: 2,
          question:
            'How is a creator of the next block chosen within the PoS algorithm?',
          options: [
            'randomly',
            'based on the results of the cryptographic solution to an equation',
            'depending on the amount of invested coins',
          ],
          answer: 1,
        },
        {
          question_key: 3,
          question:
            'What are the main differences between PoW and PoS algorithms?',
          options: [
            'different volumes of power consumption and different levels of computational complexity',
            'field of application and purposes of using',
            'these algorithms have no special differences and operate on the same principle',
          ],
          answer: 1,
        },
      ],
    },
    {
      key: '41',
      topic_name: 'Characteristics of Cryptocurrency',
      questions_data: [
        {
          question_key: 1,
          question: 'What is cryptocurrency?',
          options: [
            'National monetary unit.',
            'Electronic means of payment used by participants of the system',
            'A method of data encryption',
          ],
          answer: 2,
        },
        {
          question_key: 2,
          question: 'What is ICO?',
          options: [
            'The Governing Council',
            'A ticker symbol of the Irish pound',
            'An initial coin offering',
          ],
          answer: 3,
        },
        {
          question_key: 3,
          question: 'What is mining?',
          options: [
            'The processing and storage of the data about the cryptocurrency transactions',
            'Production of cryptocurrencies',
            'Production of iron ore',
          ],
          answer: 1,
        },
      ],
    },
    {
      key: '46',
      topic_name: 'How to profit from investing in ICO?',
      questions_data: [
        {
          question_key: 1,
          question: 'What is ICO?',
          options: [
            'It is a type of fundraising. In an ICO, digital coins are sold in the form of tokens traded on the exchange market',
            'Initial coin offering. A project sells its coins in exchange for popular cryptocurrencies',
            'ICO is a fundraising event necessary for launching or finishing a project. Mostly, ICOs are done at the early stages of coin existence',
          ],
          answer: 3,
        },
        {
          question_key: 2,
          question: 'ICO risks or what’s worth special attention?',
          options: [
            'Studying and risks handling are necessary before making a decision to invest in an ICO. It is important that the project is widely recognized. Then, it is a sign of reliability',
            'ICOs have become vulnerable to fraud due to their popularity. It is important to carefully study a project roadmap. Ideally, ICO developers should own a run-time version of the product. Moreover, the company’s chief executives should have a successful development experience',
            'It is impossible to factor in all risks as new ones emerge every day. However, prolonged development is the most severe risk for an investor. This will also indicate the potential weakness of the future token. Probably, its development was unsuccessful from the very start',
          ],
          answer: 2,
        },
        {
          question_key: 3,
          question: 'Why ICOs are so popular?',
          options: [
            'When buying tokens, investors get big discounts. Sooner or later they will get a bonus as the coins will be traded on the exchange',
            'This is a new and profitable industry that does not require large investments and uncovering of personal data. As long as investors get profit, and cryptocurrency startups attract new investors, the rest of the world will have an increased interest in the ICO industry',
            'There is no regulator that would control cryptocurrency crowdsales. It does not require time to get prepared for an ICO. Though there is no bureaucracy, there also no mutual obligations',
          ],
          answer: 2,
        },
      ],
    },

    {
      key: '76',
      topic_name: 'Crypto Airdrop',
      questions_data: [
        {
          question_key: 1,
          question: 'What is a cryptocurrency airdrop and what is its purpose?',
          options: [
            'A cryptocurrency airdrop is an innovative way of earning money which is not time-consuming and does not require financial and time investments. Tokens are distributed between users in order to to increase the value of of a new virtual currency.',
            'An airdrop refers to a procedure through which a particular blockchain project credits free tokens to a user account. It was designed in order to attract attention to a new product. An airdrop is used in order to promote new tokens among potential investors and cryptocurrency enthusiasts.',
            'A cryptocurrency airdrop is a reward for Internet users in return for a particular services, such as posting about a new product on social media. People who hold a good deal of crypto coins in their wallets can also receive free tokens.',
          ],
          answer: 2,
        },
        {
          question_key: 2,
          question: 'What you need to get free coins?',
          options: [
            'In order to receive free coins, a user should have a crypto wallet and enough savings. Generally, as a result of a crypto fork, the developers of a particular cryptocurrency distribute coins among users for promotion.',
            'If you want to get cryptocurrencies for free , you need to constantly search for updates about the upcoming airdrops on the Internet. Blockchain projects will set a number of tasks you need to perform before an airdrop is launched.',
            'There are two types of an airdrop. They are automatic and promotional. In the first case, you need to have a crypto wallet that can support new coins. In the second case, an airdrop is an award for a repost, joining a crypto community, a ‘like’ or any other social activity. You should pay attention to the project’s conditions. There are cases when they change.',
          ],
          answer: 3,
        },
        {
          question_key: 3,
          question: 'What is more profitable a bounty or an airdrop?',
          options: [
            'It is better to participate in an airdrop, because it has simpler requirements. Registration in an airdrop is optional. You can receive a reward instantly compared to a bounty where there can be delays. Moreover, you don’t need to have special skills in programming and design. Also, the number of followers is not important.',
            'There are a number of reasons why an airdrop is more profitable than a bounty. It is effortless and  less time-consuming. At the same time, you can be engaged in other projects. Free tokens transferred to you wallet will eventually increase in price. As a result, you will gain profit. Desire is all you need to earn on airdrops. It is so simple to use.',
            'Bounties and airdrops have significant differences. An airdrop is a free distribution of tokens and promotion of a product. In case of bounty, it offers a reward for recruitment of investors or fundraising for new startups. Every user has a right to choose between an airdrop and a bounty.',
          ],
          answer: 3,
        },
        {
          question_key: 4,
          question: 'How much can you earn on an airdrop?',
          options: [
            'User’s profit depends on his/her patience and time invested. In theory, you can earn from $100 to $1,000 per month. If you wait a year or two, you can get even more money.',
            'You cannot know for sure how much you can earn until the coin enters the market. As part of the campaign, every user action has its equivalent in coins - 5, 10, 100, etc. Some coins can cost 5 or 6 cents for months, while others can be worth 50 or even 100 times more in just a couple of days.',
            'A cryptocurrency airdrop does not mean a regular income compared to salary. It is the opportunity to hit the jackpot. Here we are talking about big money for nothing. Everything that matters is the project you chose to be successful.',
          ],
          answer: 1,
        },
      ],
    },

    {
      key: '77',
      topic_name: 'IEO',
      questions_data: [
        {
          question_key: 1,
          question: 'What is IEO and what are its advantages?',
          options: [
            'New cryptocurrencies are listed on the exchange at IEOs. Then, interested investors buy tokens at a price set by a project developer. After a while, the value of the token increases by tens and hundreds of percent. It allows investors to profit from the difference in prices',
            'An IEO is a system that optimizes the process of token entry to the exchange. Here, the exchange plays the key role. It selects the most promising and viable projects, which means that the risk of losses will be minimal',
            'An IEO (the Initial Exchange Offering) is a more advanced that an Initial Coin Offering',
          ],
          answer: 2,
        },
        {
          question_key: 2,
          question: 'How to participate in IEO?',
          options: [
            'You can buy cryptocurrencies on the exchange right after KYC ( Know Your Customer) is successfully completed. You can trade the purchased tokens only after an offering is finished',
            'Every exchange has its own rules. If you want to participate in an IEO, you should follow the instructions set by each separate exchange',
            'First, make sure that the selected project is conducting an IEO, not an ICO. Then, check the list of exchanges where the offering is planned to be held. After choosing a suitable exchange, you need to create an account and go through the KYC (Know Your Customer) procedure',
          ],
          answer: 3,
        },
        {
          question_key: 3,
          question:
            'Why have exchanges and project developers become interested in IEO?',
          options: [
            'An IEO is mutually beneficial for both exchanges and token issuers. It allows them to significantly reduce the cost of marketing and promotional campaigns. All costs are shared equally between an exchange and a project developer',
            'For developers, this is a ready-made database of potential IEO participants from amongst the exchange users. For exchanges, conduction of an IEO is an opportunity to attract new customers. The more users and coins are  listed on the exchange, the more transactions and, accordingly, the higher the income from commissions are',
            'An IEO is just a new way to raise funds. It allows exchanges and developers to exercise reversed marketing. Buying tokens at both IEOs and ICOs entails equally high risks',
          ],
          answer: 2,
        },
        {
          question_key: 4,
          question: 'What determines the success of an IEO project?',
          options: [
            'IEO is a new concept. It is important to pay attention to the pioneers, that is, those platforms that have successfully implemented the new instrument. Moreover, the success of the project depends on a combination of factors such as an idea, marketing, and top-notch technologies',
            'It does not matter which exchange deals with IEO. Everything depends on the long-term business model of a project. If the idea is not quixotic, there is the hope of project financing',
            'Binance Launchpad is worth special attention. It is a good example of a successful IEO platform',
          ],
          answer: 1,
        },
      ],
    },
  ],

  ru: [
    {
      key: '78',
      topic_name: 'Origins of Blockchain',
      questions_data: [
        {
          question_key: 1,
          question:
            'Как называется виртуальная технология распределенного реестра (DLT)?',
          options: ['Цифровой протокол', 'Блокчейн', 'Genesis block (генезис)'],

          answer: 2,
        },
        {
          question_key: 2,
          question:
            'Чем отличаются децентрализованные базы данных от традиционных?',
          options: [
            ' Прозрачностью и эффективностью',
            'Областью применения',
            'Только названием, по сути это одно и то же',
          ],
          answer: 1,
        },
        {
          question_key: 3,
          question: 'Кто имеет доступ к информации о платежах и переводах?',
          options: [
            'Только специалисты superhigh-уровня',
            'Любой пользователь применяющий в работе цифровой протокол',
            'Только сотрудник банка или контролирующего органа',
          ],

          answer: 2,
        },
      ],
    },
    {
      key: '79',
      topic_name: 'What is Blockchain ?',
      questions_data: [
        {
          question_key: 1,
          question: 'Дайте определение понятию Нard fork ',
          options: [
            'Нard fork — это небольшие изменения в работе сети, которые не особо влияют на работу и структуру блокчейн-системы',
            'Нard fork — это решение единогласно принятое всем членами сообщества, которое имеет специализированный протокол в блокчейн-системе.',
            'Нard fork — это радикальное изменение протокола, подтверждающего или отклоняющего транзакции, которое существенно меняет структуру блокчейн-системы.',
          ],
          answer: 3,
        },
        {
          question_key: 2,
          question:
            'Назовите основные алгоритмы консенсуса, базирующимися на технологии блокчейн',
          options: [
            'Proof-of-Work (PoW), или «доказательство выполнения работы», Proof-of-Stake (PoS), или «доказательство доли владения» и Proof-of-Importance (Pol), или «доказательство важности».',
            'Hard fork, алгоритм, который используется в случае создания нового проекта на базе прежнего исходного кода.',
            'Soft fork, алгоритм благодаря которому в протоколе появляются нововведения, которые не слишком влияют на работу и структуру блокчейн-системы.',
          ],

          answer: 1,
        },
        {
          question_key: 3,
          question: 'Какую функцию выполняет протокол консенсуса?',
          options: [
            'Протокол консенсуса необходим для согласования всего контента, составляющего блок-цепь. Это обеспечивает постоянное включение сети в блок-цепочку.',
            'В ходе этого процесса блок-цепь делится надвое. Это происходит в результате изменений консенсуса алгоритма. В итоге одна блок-цепь становится обновленной версией, а ее ответвление пользуется старым протоколом.',
            'В мире программирования — это термин используется в случае создания нового проекта на базе прежнего исходного кода.',
          ],

          answer: 1,
        },
      ],
    },
    {
      key: '80',
      topic_name: 'Purpose of Blockchain',
      questions_data: [
        {
          question_key: 1,
          question:
            'Назовите метод криптографии, благодаря которому любая представленная информация, преобразуется в уникальную строку текста.',
          options: [
            'Криптоанализ',
            'Хеширование',
            'Асимметричная криптография',
          ],

          answer: 2,
        },
        {
          question_key: 2,
          question:
            'Что гарантирует подтверждение уникальности личности пользователя?',

          options: [
            'Шифрование',
            'Цифровая подпись',
            'Криптографическое доказательство своих действий',
          ],

          answer: 2,
        },
        {
          question_key: 3,
          question:
            'Какой из методов криптографии наиболее часто используется в блокчейн-системе?',

          options: [
            'Криптография с открытым ключом (асимметричная криптография)',
            'Симметричная криптография',
            'Метод криптографического хэша, такого как вычислительный алгоритм SHA256',
          ],

          answer: 1,
        },
      ],
    },
    {
      key: '81',
      topic_name: 'Peer-to-peer (P2P) Network and Nodes',
      questions_data: [
        {
          question_key: 1,
          question: 'Где может найти применение технология блокчейн?',
          options: [
            'Данная технолгия используется только в операциях с биткоином',
            'Реальные сферы применения технологии блокчейн, практически, безграничны',
            'Технология разработана исключительно для финансовых сервисов',
          ],

          answer: 2,
        },
        {
          question_key: 2,
          question: 'Что означает термин «распределенная книга»?',

          options: [
            'Так называется первый опубликованный протокол биткоина',
            'Это сложная база данных, охватывающая множество стран, организаций, интернет-сайты и рядовых пользователей',
            'Это наглядная демонстрация работы одноранговой сети P2P с полной фиксацией всех данных',
          ],

          answer: 2,
        },
        {
          question_key: 3,
          question:
            'Почему государственные финансовые институты не регулируют цифровые валюты?',
          options: [
            'Технически это невозможно, децентрализованность является одним из основных принципов системы',
            'Власти и крупные финансовые учреждения не видят в этом никакой необходимости',
            'Виртуальные деньги уже давно регулируются также как и фиатные',
          ],

          answer: 1,
        },
      ],
    },
    {
      key: '82',
      topic_name: 'Consensus\nRules',
      questions_data: [
        {
          question_key: 1,
          question: 'Что такое ноды?',
          options: [
            'Ноды — это любой компьютер в любой точке мира, подключенный к блокчейн-сети, другими словами — это специализированные узлы блокчейн-системы.',
            'Ноды — это протоколы, работающие в одноранговой сети (P2P), основанные на технологии блокчейн.',
            'Ноды — активные пользователи действующие в рамках протокола блокчейн',
          ],

          answer: 1,
        },
        {
          question_key: 2,
          question: 'Цель работы P2P-сети это:',
          options: [
            'Проверка блоков информации, не являющихся частью сети.',
            'Полная блокировка транзакций и блоков цепочки для всех участников в случае экстренной необходимости.',
            'Распространение транзакций и блоков цепочки для всех участников, действующих в рамках протокола блокчейн.',
          ],
          answer: 3,
        },
        {
          question_key: 3,
          question: 'Назовите основные принципы работы одноранговой сети',
          options: [
            'Отсутствие иерархии и централизации. Данная сеть полностью децентрализована и самостоятельна.',
            'Каждый участник сети имеет уникальные возможности, а каждый узел – выполняет разные функции.',
            'Ограничение доступа для пользователей и обеспечение полной конфиденциальности информации в системе.',
          ],
          answer: 1,
        },
      ],
    },
    {
      key: '83',
      topic_name: 'Cryptographic Keys and Digital Signatures',
      questions_data: [
        {
          question_key: 1,
          question:
            'Можно ли отменить транзакцию денежных средств, проводимую в блокчейн-системе?',
          options: [
            'Нет, это невозможно, данная транзакция не имеет обратного действия.',
            'Да, это могут сделать пользователи с ключами доступа.',
            'Если поставщик или получатель не уверены, что их данные не были искажены, транзакция отменяется автоматически.',
          ],

          answer: 1,
        },
        {
          question_key: 2,
          question:
            'Дайте определение понятию децентрализация в блокчейн-системе',
          options: [
            'Процесс перераспределения функций системы, направленный от участников в сторону единого центра или управляющего органа, который отвечает за бесперебойную работу системы и обладает полным контролем',
            'Это коллективная ответственность за принятие решений и за полученный результат. В этой системе нет главного, но каждый отвечает не только сам за себя, но и за партнера по бизнесу.',
            'В блокчейн-системе этот термин означает, что исходные данные не были изменены при выполнении любой операции над ними, будь то передача, хранение или представление.',
          ],

          answer: 2,
        },
        {
          question_key: 3,
          question: 'Что гарантирует конфиденциальность пользователя системы?',
          options: [
            'Конфиденциальность гарантируется благодаря таким технологиям, как цифровые подписи, криптография и хеширование.',
            'В блокчейн-системе самые жесткие требования к идентификатору личности пользователя, а также действуют ограничения по количеству и качеству псевдонимов.',
            'Блок-проводник. Он скрывает адрес, с которого и на который переводятся средства, а также шифрует количество токенов в системе и персональные данные их текущих владельцев.',
          ],
          answer: 1,
        },
      ],
    },
    {
      key: '84',
      topic_name: 'Transactions',
      questions_data: [
        {
          question_key: 1,
          question:
            'Назовите главную функцию модели Unspent Transaction Output (UTXO).',
          options: [
            'Модель UTXO представляет собой транзакционные платежи, совершенные ранее, которые в данный момент уже недействительны.',
            'Схема Unspent Transaction Output (UTXO), или «Неизбранный продукт вывода транзакций» обеспечивает конфиденциальность проводимых транзакций используя асимметричное шифрование',
            'Она предназначена для отслеживания состояния базы данных. Использование модели UTXO позволяет владельцу монет и их получателю контролировать перемещение денежных средств.',
          ],
          answer: 3,
        },
        {
          question_key: 2,
          question: 'Дайте определение термину «транзакция»',
          options: [
            'Это идентификатор каждой денежной операции, по которому легко определить, куда пришли деньги, от кого и в каком размере.',
            'Это операция по перемещению денежных средств, совершение сделки купли-продажи. В сфере IT-технологий транзакцией называют группу последовательных операций с базой данных.',
            'Это технология передачи финансовой информации в блокчейн-системе, также в проводных сетях или в сетях с пакетной коммутацией.',
          ],
          answer: 2,
        },
        {
          question_key: 3,
          question:
            'Что является свидетельством отправленного платежа (транзакции)?',
          options: [
            'Идентификатор платежа TXID',
            'Модель STXO',
            'Личное подтверждение получателя',
          ],
          answer: 1,
        },
      ],
    },
    {
      key: '85',
      topic_name: 'Proof-of-Work (PoW) и Proof-of-Stake (PoS)',
      questions_data: [
        {
          question_key: 1,
          question:
            'За кем сохраняется право записывать новый блок в блокчейн при алгоритме PoW?.',
          options: [
            'за создателем криптовалюты',
            'этим правом обладает любой пользователь',
            'только майнер, который первый определит численное решение для криптографического алгоритма',
          ],
          answer: 3,
        },
        {
          question_key: 2,
          question:
            'Как определяется создатель следующего блока при алгоритме PoS?',
          options: [
            'случайным образом.',
            'по результатам решения криптографического уравнения.',
            'в зависимости от объема вложенных монет.',
          ],
          answer: 1,
        },
        {
          question_key: 3,
          question:
            'Назовите основные отличия алгоритмов консенсуса PoW и PoS друг от друга',
          options: [
            'разные объемы потребляемой мощности и разный уровень сложности вычислений',
            'область применения и цели использования',
            'эти алгоритмы не имеют особых отличий и работают по одному принципу',
          ],
          answer: 1,
        },
      ],
    },
    {
      key: '86',
      topic_name: 'Характеристика крипто валюты.',
      questions_data: [
        {
          question_key: 1,
          question: 'Что такое криптовалюта?',
          options: [
            'Национальная денежная единица',
            'Электронное платежное средство, используемое участниками системы',
            'Метод шифрования данных',
          ],
          answer: 2,
        },
        {
          question_key: 2,
          question: 'Что такое ICO?',
          options: [
            'Совет управляющих',
            'Биржевой код ирландского фунта',
            'Первичное размещение монет',
          ],
          answer: 3,
        },
        {
          question_key: 3,
          question: 'Что такое mining?',
          options: [
            'Процесс обработки и хранения данных о транзакциях с криптовалютами',
            'Добыча криптовалюты',
            'Добыча железной руды',
          ],
          answer: 1,
        },
      ],
    },
    {
      key: '87',
      topic_name: 'Как заработать на инвестировании в ICO?',
      questions_data: [
        {
          question_key: 1,
          question: 'Что такое ICO?',
          options: [
            'Это кампания по сбору средств. В ходе ICO команда распродает цифровые монеты. На момент продажи токены готовы к запуску, далее инвесторы смогут торговать ими на биржах',
            'Первичное размещение монет. Проект обменивает свои токены на популярные криптовалюты',
            'ICO – привлечение финансирования, необходимого для запуска или финального развития проекта. Чаще всего ICO проводится на ранних этапах существования монет',
          ],
          answer: 3,
        },
        {
          question_key: 2,
          question: 'Риски участия в ICO или на что стоит обратить внимание?',
          options: [
            'Изучение и обработка рисков – обязательный этап при принятии решения об инвестировании в ICO. Главное чтобы проект был на слуху, о нем много говорили и писали. Это показатель надежности',
            'Из-за высокой популярности в индустрию ICO проникли мошенники. Нужно внимательно изучить «дорожную карту» проекта. В идеале команда, выходящая на ICO, должна иметь рабочую версию продукта. У главных лиц компании должен быть успешный опыт разработки',
            'Все риски охватить невозможно, поскольку каждый день появляются новые. И все же самым серьезным риском для инвестора является слишком длительный срок разработки. Это также укажет на потенциальную слабость будущего токена. Возможно, его разработка изначально была неудачной',
          ],
          answer: 2,
        },
        {
          question_key: 3,
          question: 'В чем причина популярности ICO?',
          options: [
            'Покупая токены на ICO, инвестор получает большую скидку. Рано или поздно монеты выйдут на биржу, а вкладчик получит бонусы',
            'Новая и прибыльная индустрия, не требующая больших вложения и раскрытия личных данных. Пока инвесторы продолжают считать свои деньги и прибыль, а криптовалютные стартапы привлекать новых вкладчиков, остальной мир будет испытывать повышенный интерес к индустрии ICO',
            'Отсутствие законодательства, которое бы регулировало проведение криптовалютных краудсейлов. Не требуется время на подготовку, нет бюрократии, как и взаимных обязательств',
          ],
          answer: 2,
        },
      ],
    },

    {
      key: '88',
      topic_name: 'Crypto Airdrop',
      questions_data: [
        {
          question_key: 1,
          question: 'Что такое аirdrop криптовалюты и для чего он нужен?',
          options: [
            'Аirdrop криптовалюты – новый, серьезный вид заработка, не требующий финансовых и временных вложений. Токены раздают пользователям, чтобы раздуть стоимость монеты, впервые появившейся на криптобирже.',
            'Аirdrop криптовалют – это бесплатное зачисление токенов на счет пользователя определенным блокчейн-проектом. Основная цель – реклама нового продукта. Аirdrop криптовалюты устраивают для того, чтобы распространить информацию о новом токене среди потенциальных инвесторов и энтузиастов криптовалют. ',
            'Аirdrop криптовалюты – поощрение пользователей сети Интернет за определенную работу. Это может быть реклама нового проекта в соцсетях или на форуме. Также поощряются люди, имеющие в кошельке приличное количество криптовалют.  ',
          ],
          answer: 2,
        },
        {
          question_key: 2,
          question: 'Что нужно сделать для получения бесплатных монет?',
          options: [
            'Нужно иметь свой криптовалютный кошелек и немного сбережений. Как правило, в результате форка определенной криптовалюты разработчики распространяют новую монету среди пользователей в целях рекламы. ',
            'Чтобы стать обладателем бесплатных валют, необходимо постоянно мониторить сеть в поисках информации о предстоящей раздаче. Блокчейн-проекты выдвигают условия, которые предстоит выполнить, перед тем как процесс аirdrop будет запущен. ',
            'Есть автоматические и стимулирующие виды аirdrop. В первом случае необходимо наличие кошелька, поддерживающего новые монеты. Во втором случае аirdrop – это своего рода награда пользователей за их действия – репост, вступление в сообщество, лайк и другая форма социальной активности. Также следует обратить внимание на условия, которые выставляет проект, бывают случаи, когда они меняются.',
          ],
          answer: 3,
        },
        {
          question_key: 3,
          question: 'Что выгоднее, bounty-кампании или аirdrop криптовалют?',
          options: [
            'Лучше участвовать в аirdrop криптовалюты, так как к его участникам более простые требования. Не обязательна регистрация, вознаграждения приходят сразу, в отличие от bounty, где случаются задержки. Не требуются специальные навыки в области программирования и дизайна, число фолловеров также не имеет значения.',
            'Аirdrop криптовалюты выгоднее bounty по ряду причин. Минимум усилий, не затратно по времени, параллельно можно заниматься другими делами. Бесплатные токены, которые будут зачислены на кошелек, рано или поздно вырастут в цене, соответственно, принесут доход. Главное желание, заработать здесь смогут и школьник и пенсионер. ',
            'Bounty и аirdrop имеют существенные различия между собой. Если аirdrop в данном случае – это бесплатная раздача токенов и реклама продукта, то bounty предполагает привлечение инвесторов и продвижение мероприятия по сбору средств для нового стартапа. Каждый пользователь выбирает то, что ему по душе и по силам.',
          ],
          answer: 3,
        },
        {
          question_key: 4,
          question: 'Сколько можно заработать на аirdrop криптовалют?',
          options: [
            'Сумма дохода зависит от усидчивости пользователя и от потраченного на работу времени. Теоретически можно заработать в месяц от 100 до 1000 долларов. Если же дать перспективным монетам полежать год или два, можно вообще выиграть джекпот. ',
            'Точную сумму заработка в долларовом или рублевом эквиваленте невозможно узнать, пока монета не выйдет на рынок. Каждое совершенное действие пользователя в рамках кампании оценивается в определенное количество монет – 5, 20, 100 и так далее. Одни монеты в течение многих месяцев оцениваются в 5 или 6 центов, тогда как другие за несколько дней вырастают в 50, а то и 100 раз. ',
            'Аirdrop криптовалют – это не такой стабильный доход, как зарплата, а возможность сорвать куш. Речь идет о больших деньгах «за просто так», главное, чтобы выбранный проект оказался успешным. ',
          ],
          answer: 1,
        },
      ],
    },

    {
      key: '89',
      topic_name: 'IEO',
      questions_data: [
        {
          question_key: 1,
          question: 'Что такое IEO и в чем преимущества новой модели?',
          options: [
            'Новые криптовалюты поступают на биржу сразу и распродаются заинтересованным инвесторам по цене организатора проекта. Через некоторое время стоимость токена возрастает на десятки и сотни процентов, что позволяет инвестору положить разницу в свой карман',
            'IEO – система, оптимизирующая процесс выхода токена на торговую площадку. Ключевую роль играет биржа, которая отбирает самые перспективные и жизнеспособные проекты, а значит риск потерь минимизируется',
            'IEO – первичные биржевые предложения. Тот же самый листинг монет, но только более усовершенствованный',
          ],
          answer: 2,
        },
        {
          question_key: 2,
          question: 'Как стать участником IEO?',
          options: [
            'После прохождения процедуры KYC («Знай своего клиента») на бирже, можно приобретать криптоактивы. Торговать вновь приобретенными токенами разрешается после того, как продажа закончится',
            'На каждой бирже свои правила. Чтобы стать участником IEO, нужно придерживаться инструкций, изложенных на каждой отдельной площадке',
            'В первую очередь нужно убедиться в том, что выбранный проект проводит IEO, а не ICO, а затем узнать, на каких именно биржах проводится первичное биржевое предложение. После выбора подходящей биржи необходимо создать на ней учетную запись и пройти процедуры KYC («Знай своего клиента»)',
          ],
          answer: 3,
        },
        {
          question_key: 3,
          question:
            'Почему IEO сразу заинтересовались биржи и организаторы проектов?',
          options: [
            'IEO является обоюдовыгодным как для бирж, так и для эмитентов токенов. Такой подход позволяет существенно сократить выделение средств на маркетинг и другие развивающие направления. Все затраты делятся поровну между биржей и организатором проекта',
            'Для организаторов это готовая база потенциальных участников IEO из состава пользователей биржи. Проведение IEO на собственной платформе дает бирже возможность привлечь новых клиентов. Чем больше пользователей и монет в листинге, тем больше сделок и, соответственно, выше доход от комиссий',
            'IEO – это всего лишь новинка, на которой биржи и организаторы получают обратный маркетинг. Риски покупки токенов проекта с помощью IEO и обычного ICO одинаково высоки',
          ],
          answer: 2,
        },
        {
          question_key: 4,
          question: 'От чего зависит успешность IEO-проекта?',
          options: [
            'Сфера IEO новая, поэтому стоит обратить внимание на «первопроходцев», то есть на те площадки, которым удалось успешно реализовать новый инструмент. Дополнительно успешность проекта зависит от совокупности таких факторов, как идея, маркетинг, ультрасовременные технологии',
            'Неважно, какая биржа занимается IEO. Все зависит от долгосрочной бизнес-модели проекта. Если идея не утопична, то есть надежда на привлечение капитала',
            'Успех Binance Launchpad – пример для подражания. Нужно ориентироваться только на эту площадку',
          ],
          answer: 1,
        },
      ],
    },
  ],
};
