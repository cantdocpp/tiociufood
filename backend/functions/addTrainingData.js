const AWS = require('aws-sdk')

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2'
})

const requestJson1 = {
    "RequestItems": {
        'trainingTable': [
            {
                'PutRequest': {
                    'Item': {
                        'name': 'aleksander',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 4
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'manatap sitorus',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 0
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'handri',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 1
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'william halim bunarto',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 5
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'muhammad noer agommy',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 5
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'michael heaviside',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 4
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'steffany',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 1
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'agnetasya',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 0
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'florentina pramita',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 3
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'cynthia',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 2
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'aril',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 5
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'andy wijaya',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 0
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'christine lee',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 2
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'mylinda ivana christi',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 0
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'asen',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 5
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'aldy pratama',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 4
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'bona lingga',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 4
                            }
                        ]
                    }
                }
            },
        ]
    }
}

const requestJson2 = {
    "RequestItems": {
        'trainingTable': [
            {
                'PutRequest': {
                    'Item': {
                        'name': 'joni',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 3
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'hermul',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 4
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'isammudin',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 5
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'yohana martadinata',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 0
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'devi susilawati',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 2
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'lyvia chastina',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 5
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'kevin kurniawan',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 5
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'vivia alvita',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 5
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'graciela',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 3
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'debbie lay',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 4
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'stefanus dinata',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 4
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'anthony',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 4
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'hendy',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 0
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'ewaldo filbert',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 5
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'ketjie',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 5
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'yonico ariando pratama',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 5
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'tania k',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 0
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'ivan irawan',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 0
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'yohanes lukiyanto',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 0
                            }
                        ]
                    }
                }
            },
            {
                'PutRequest': {
                    'Item': {
                        'name': 'hendri chen',
                        'reviews': [
                            {
                                'foodName': 'fu yung hai',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'ngohiong',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'sapo tahu',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'bistik babi',
                                'foodRate': 4
                            },
                            {
                                'foodName': 'ifumie',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'lomie',
                                'foodRate': 1
                            },
                            {
                                'foodName': 'babi kecap',
                                'foodRate': 3
                            },
                            {
                                'foodName': 'caysim cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'paklay cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'mun tahu',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'kwetiaw sapi',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'khailan cah',
                                'foodRate': 2
                            },
                            {
                                'foodName': 'babi kuluyuk',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'sapi cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'tahu kuah sayur asin',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'hie pien saos',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'cap cay cah',
                                'foodRate': 5
                            },
                            {
                                'foodName': 'bubur babi',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'kodok cah',
                                'foodRate': 0
                            },
                            {
                                'foodName': 'udang yam ha',
                                'foodRate': 0
                            }
                        ]
                    }
                }
            },
        ]
    }
}

async function run() {
    try {
        const res = await docClient.batchWrite(requestJson2).promise()
        console.log(res)
    } catch(err) {
        console.log(err)
    }
}

run()
