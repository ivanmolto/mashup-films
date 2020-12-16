const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
    host: "127.0.0.1",     // Localhost (default: none)
    port: 8545,            // Standard BSC port (default: none)
    network_id: "*",       // Any network (default: none)
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,       // BSC testnet id
      confirmations: 10,    // # of confs to wait between deployments. 
      timeoutBlocks: 200,  // # of blocks before a deployment times out  
      skipDryRun: true     // Skip dry run before migrations? 
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
    }
  }
};
