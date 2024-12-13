import avatar from '../assets/avatar.png'
import avatar2 from '../assets/fiverrProfilePic.jpg'
import avatar3 from '../assets/IMG-20231018-WA0001.jpg'

let currentDate = new Date();
currentDate = currentDate.toLocaleString()

const Transactions = [
    {
        transactorImg: avatar3,
        transactorName: 'Apostle UI ',
        transactionStatus: 'Approved',
        transactionType: 'Fund Transfer',
        transactionDate: currentDate,
        transactionAmount: '$300',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        ReciverName: 'Emmy Tech',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'NGN(₦) Wallet'
    },
    {   transactorImg: avatar2,
        transactorName: 'Emmy Tech',
        transactionStatus: 'Decline',
        transactionType: 'Fund Received',
        transactionDate: currentDate,
        transactionAmount: '$200',
        issue: 'Bad request',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4545549545454,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'NGN(₦) Wallet'
    },

    {   transactorImg: avatar3,
        transactorName: 'Emmy Tech',
        transactionStatus: 'Decline',
        transactionType: 'Fund Received',
        transactionDate: currentDate,
        transactionAmount: '$200',
        issue: 'Bad request',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4443434343434,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'NGN(₦) Wallet'
    },
    {   transactorImg: avatar3,
        transactorName: 'Emmy Tech',
        transactionStatus: 'Decline',
        transactionType: 'Fund Received',
        transactionDate: currentDate,
        transactionAmount: '$200',
        issue: 'Fraud',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'NGN(₦) Wallet'       
    },
    {   transactorImg: avatar,
        transactorName: 'Emmy Tech',
        transactionStatus: 'Decline',
        transactionType: 'Fund Received',
        transactionDate: currentDate,
        transactionAmount: '$200',
        issue: 'Spam',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'NGN(₦) Wallet'        
    },
]
const PendingTransactions = [
    {
        transactorImg: avatar,
        transactorName:'Eze ChukuwEmeka .D',
        transactionStatus: 'Pending',
        transactionType: 'Fund Transfer',
        transactionDate: currentDate,
        transactionAmount: '$300',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'NGN(₦) Wallet',
        ReciverName: 'Emmy Tech',
    },
    {
        transactorImg: avatar,
        transactorName:'Eze ChukuwEmeka .D',
        transactionStatus: 'Pending',
        transactionType: 'Fund Transfer',
        transactionDate: currentDate,
        transactionAmount: '$300',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'NGN(₦) Wallet',
        ReciverName: 'Emmy Tech',
    },
    {   transactorImg: avatar2,
        transactorName: 'Emmy Tech',
        transactionStatus: 'Pending',
        transactionType: 'Fund Received',
        transactionDate: currentDate,
        transactionAmount: '$200',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'NGN(₦) Wallet',
        ReciverName: 'Emmy Tech',
    }
]
const CardsTransactions = [
    {
        transactorImg: avatar,
        transactorName:'Eze ChukuwEmeka .D',
        transactionStatus: 'Approved',
        transactionType: 'Card Transaction',
        transactionDate: currentDate,
        transactionAmount: '$300',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'Vertual Card',
    },

    {
        transactorImg: avatar3,
        transactorName: 'Apostle UI ',
        transactionStatus: 'Decline',
        transactionType: 'Card Transaction',
        transactionDate: currentDate,
        transactionAmount: '$300',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        issue: 'Fraud',       
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'Vertual Card',
    },

    {   transactorImg: avatar2,
        transactorName: 'Emmy Tech',
        transactionStatus: 'Approved',
        transactionType: 'Card Transaction',
        transactionDate: currentDate,
        transactionAmount: '$200',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'Vertual Card',
    }
]
const UtilityTransactions = [
    {
        transactorImg: avatar,
        transactorName:'Eze ChukuwEmeka .D',
        transactionStatus: 'Approved',
        transactionType: 'Electricity bill',
        transactionDate: currentDate,
        transactionAmount: '$300',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'Vertual Card',
        Provider: 'AEDC',
        Package: 'Prepaid',
        MeterNumber: '10030040560',
        Tokens: 200300990420300230
    },

    {
        transactorImg: avatar3,
        transactorName:'Apostle UI',
        transactionStatus: 'Decline',
        transactionType: 'Electricity bill',
        transactionDate: currentDate,
        transactionAmount: '$4400',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'In-active',
        PaymentMethod: 'Vertual Card',
        Provider: 'AEDC',
        Package: 'Prepaid',
        MeterNumber: '10030040560',
        Tokens: 200300990420300230
    },

    {
        transactorImg: avatar2,
        transactorName:'Emmy Tech Global',
        transactionStatus: 'Approved',
        transactionType: 'Electricity bill',
        transactionDate: currentDate,
        transactionAmount: '$300',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'Vertual Card',
        Provider: 'AEDC',
        Package: 'Prepaid',
        MeterNumber: '10030040560',
        Tokens: 200300990420300230
    }
]
const CableSubscriptionTransactions = [
    {
        transactorImg: avatar,
        transactorName:'Eze ChukuwEmeka .D',
        transactionStatus: 'Approved',
        transactionType: 'Cable Subscription',
        transactionDate: currentDate,
        transactionAmount: '$300',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'NGN(₦) Wallet',
        Provider: 'Startime',
        Package: 'Startime Basic',
    },

    {
        transactorImg: avatar3,
        transactorName: 'Apostle UI ',
        transactionStatus: 'Decline',
        transactionType: 'Cable Subscription',
        transactionDate: currentDate,
        transactionAmount: '$300',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        issue: 'Fraud',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'NGN(₦) Wallet',
        Provider: 'Gotv',
        Package: 'Gotv Jinja',
    },

    {   transactorImg: avatar2,
        transactorName: 'Emmy Tech',
        transactionStatus: 'Approved',
        transactionType: 'Cable Subscription',
        transactionDate: currentDate,
        transactionAmount: '$200',
        transactionId: 'TXN1234567890',
        transactionLocation: 'Nigeria',
        UserID: 4049484747,
        AccountNumber: 7010885943,
        SenderStatus: 'Active',
        PaymentMethod: 'NGN(₦) Wallet',
        Provider: 'Gotv',
        Package: 'Gotv Joli',
    }
]

const UserList = [
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Eze Chukwu Emeka David",
            AccountNumber: '250220231216',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '7010885943',
            BVN: '32332323232323',
            Country: 'Nigeria',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Active',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Business',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Eze Chukwu Emeka David",
            AccountNumber: '250220231216',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '7010885943',
            BVN: '32332323232323',
            Country: 'Nigeria',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Active',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Business',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
   
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },

    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
    {
        PersonalInfo: {
            Name: "Emmy Tech Global",
            AccountNumber: '234545343',
            EmailAddress: 'emekad745@gmail.com',
            PhoneNumber: '65657564',
            BVN: '5469343943434',
            Country: 'Quaite',
            LastTransactionTime: '25-02-2023, 13:22:16',
            Status: 'Inactive',
            UserID: '4340904390493',
        },
        AccountInfo: {
            AccountType: 'Casual',
            AccountBalance: '30,000,000',
            TransactionLimit: '10,000,000',
            Currency: 'USD($)',
            DateCreated: '13-may-2024'
        }
    },
 
]


export {Transactions,PendingTransactions,CardsTransactions,UtilityTransactions, CableSubscriptionTransactions, UserList}