import MashUpTraderApp from './contracts/MashUpTraderApp';
import MashUpToken from './contracts/MashUpToken';
import Web3 from 'web3';

const options = {
  web3: {
    customProvider: new Web3.providers.WebsocketProvider('ws://127.0.0.1:7545')
  },
  contracts: [MashUpTraderApp(), MashUpToken()],
  events: {},
  polls: {
    accounts: 1500
  }
};

export default options;
