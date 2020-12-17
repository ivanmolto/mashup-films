export default () => {
  let networks = {
    // Binance Smart Chain testnet
    '97': {
      address: '0xa3d52ef8932f58157353FC4a44452DE233372Db9',
      transactionHash:
        '0x6e3b870dbaeb1f0f5bd86121d4f058f0ea5705c6865a0ed5dba03a79d3078c54'
    },
    // Binance Smart Chain
    '56': {
      address: '0x7e94B82dADe42AD33d1Bb87E2774514BFe98e9ac',
      transactionHash:
        '0xc1269acbecaa7212bb8bdc74dca61cbb8d11beb66453404af0db2adc005e39d9'
    }
  };

  if (process.env.NODE_ENV !== 'production') {
    const {
      networks: devNetworks
    } = require('../build/contracts/MashUpTraderApp');

    networks = {
      ...networks,
      ...devNetworks
    };
  }

  return {
    networks,
    contractName: 'MashUpTraderApp',
    abi: [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "deployedAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "withdrawer",
            "type": "address"
          }
        ],
        "name": "PaymentWithdrawn",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "changer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "oldPriceInWei",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newPriceInWei",
            "type": "uint256"
          }
        ],
        "name": "PriceChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "weiAmount",
            "type": "uint256"
          }
        ],
        "name": "Purchased",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "mashupToken",
        "outputs": [
          {
            "internalType": "contract MashUpToken",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "mashupTokenId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "tokenPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "purchase",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "newPrice",
            "type": "uint256"
          }
        ],
        "name": "setTokenPrice",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getOwner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getTokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "possibleFranchisor",
            "type": "address"
          }
        ],
        "name": "isTokenFranchisor",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]
  };
};
