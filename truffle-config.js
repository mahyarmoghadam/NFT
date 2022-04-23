require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = process.env.PRIVATE_KEYS || "";


module.exports = {


   networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" //match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // array of private keys
          `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}` // Url to an Ethereum node
        )
      },
      gas:      6500000,
      gasPrice: 10000000000,
      network_id: 4,
      networkCheckTimeout: 120000,
      timeoutBlocks: 200,
      confirmations: 5,
      skipDryRun: true
    }
  },
  contracts_directory: './src/contracts',
  contracts_build_directory: './src/abis',


  // Set default mocha options here, use special reporters etc.
  mocha: {
    enableTimeouts: 120000 
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.11",
    }
  },
};
