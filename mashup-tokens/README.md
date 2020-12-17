# MASHUP TOKENS

The MashUp Films underlying smart contracts.

Test tokens implemented only for testing purposes.

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

Once you are in the directory **mashup-tokens** run in your terminal the following command:

`npm install`

## COMPILING THE SMART CONTRACTS

Truffle is used to compile the smart contracts.
Run the following command in your terminal:

`truffle compile`

## DEPLOYMENT

Now it's time to deploy the smart contracts first to the BSC Testnet and later to the BSC Mainnet. 

`truffle migrate --network testnet`

`truffle migrate --network bsc`

### BINANCE SMART CHAIN TESTNET

**Migrations**

_Contract address_: 0x86f92Dd5A728Cf7ed5B8e5f397d4351A19C7A9b7

_Transaction Hash_: 0xd21f018c34de367a1e8d7757dbedfd1b1bda2367750d5cb5b4b5b0797795e27a

**SharedRoyaltyToken**

_Contract address_: 0x7e94B82dADe42AD33d1Bb87E2774514BFe98e9ac

_Transaction Hash_: 0x8d2ed6f1996641a27ddaaa474fcd07ef429cd7af30cd712c6294b639f442117a

### BINANCE SMART CHAIN (MAINNET)

**Migrations**

_Contract address_: 0xDB2DE927B9f3bF6d7422D15bD9e351B4Fa1889Ae

_Transaction Hash_: 0x69ab3a856a5797cc2b8a2cef85d817e24587560df89484f83e1c90d492d90d5b

**SharedRoyaltyToken**

_Contract address_: 0xA5beD5f5068c7C81e66B158B3209B98511b25a25

_Transaction Hash_: 0xb932bdfc02df676193d429286720e45956b0bda01d40592478aa9581e532ae9d

## LICENSE
[Apache 2.0](LICENSE)

