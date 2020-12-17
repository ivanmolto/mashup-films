# MASHUP CONTRACTS

These are the MashUp Films dApp smart contracts.
You will deploy the smart contract and mint the token.

The tokens follow a withdraw pattern to avoid re-entrancy, maximum number of loops and double-withdrawals.

You will also need to create several wallet accounts:
- MASHUP_PLATFORM_ADDRESS: It is the address of the MashUp Platform Community.
- CREATOR_ADDRESS: It is the address of the creator of the digital good that you will get with the NFT purchase.
- A wallet for ALICE - our first fan/customer :)
She is in the mainnet and testnet.
- A wallet for BOB - another potential fan/customer.
He is only in the testnet by now.

Here we will use the below addresses:

MASHUP COMMUNITY BNB ADDRESS = 0x216bD67e7bD2D4ba535d5d224c1493309494B1C9

CREATOR BNB ADDRESS = 0x6b67aD0AAAf280DD7bC60506E785f50b72545542

ALICE BNB ADDRESS:

BOB BNB ADDRESS:


## SETUP

If you want to follow the steps to compile and deploy the smart contracts, you will need a mnemonic of a wallet with an account with BNB or test BNB from a faucet.

[Metamask](https://metamask.io)

[Binance Smart Chain Faucet](https://testnet.binance.org/faucet-smart)

[BINANCE](https://binance.com/en)

[Binance Block Explorer Testnet](https://explorer.binance.org/smart-testnet)

[BscScan Testnet Explorer](https://testnet.bscscan.com)

[Binance Block Explorer](https://explorer.binance.org/smart)

[Binance Smart Chain Explorer](https://bscscan.com/)

[Truffle](https://www.trufflesuite.com)

Go to the `mashup-app-contracts` directory.
Once there, run the following command in your terminal:

`yarn install`

## COMPILE SMART CONTRACTS

In your terminal, please run the following command:

`truffle compile`

## DEPLOY SMART CONTRACTS
Deploy the smart contracts and mint the MashUp (MASHUP) token using Truffle.
Run the below command in the terminal for Testnet or Mainnet:

`truffle migrate --network testnet`

`truffle migrate --network bsc`

### BINANCE SMART CHAIN TESTNET

**Migrations**

_Contract address_: 0x17938379792c958610F672997AC207519fa168B9

_Transaction Hash_: 0x54ae3301614d55f2b989effe794d062cfae147d53481265b3f0ccf508e9de96e

**MashUpToken**

_Contract address_: 0xd2A2b2CCf7a1cada724e49Cd528e020B0DeC4e31

_Transaction Hash_: 0xaa7ea1d4ba82716d111ef35ab6d499fa60440c7179bf040cc05cd65093c75137

_TokenTracker_: MashUp(MASHUP)

**MashUpTraderApp** 

_Contract address_: 0xa3d52ef8932f58157353FC4a44452DE233372Db9

_Transaction Hash: 0x6e3b870dbaeb1f0f5bd86121d4f058f0ea5705c6865a0ed5dba03a79d3078c54

### BINANCE SMART CHAIN (MAINNET)

**Migrations**

_Contract address_: 0xa4ce11f5f9d22C034601977597BA5e5064bEc89C

_Transaction Hash_: 0xea2daea1ff3684419e202d744441829bbcd4fe8286082c5ed2d01283b88f6384

**MashUpToken**

_Contract address_: 0x5FD54f1182a3A82301C71EeC715EB748C5b87F3A

_Transaction Hash_: 0x8e81e8e241dd554f4c6373c2c270f2c29696cedea831d5a071f54e2bf0e8e982

_TokenTracker_: MashUp(MASHUP)

**MashUpTraderApp** 

_Contract address_: 0x7e94B82dADe42AD33d1Bb87E2774514BFe98e9ac

_Transaction Hash: 0xc1269acbecaa7212bb8bdc74dca61cbb8d11beb66453404af0db2adc005e39d9


## LICENSE

[Apache 2.0](https://github.com/ivanmolto/mashup-films/blob/main/LICENSE)
