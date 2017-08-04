

const LightWalletProvider = require('@digix/truffle-lightwallet-provider')

module.exports = {
  networks: {
    development: {
      host: process.env.RPC_HOST || 'localhost',
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new LightWalletProvider({
        keystore: './sigmate-v3-ti.json',
        password: process.env.PASSWORD,
        rpcUrl: 'https://ropsten.infura.io',
        debug: true, // optional, show JSON-RPC logs
        // prefund: 1e18, // optional, fund all lightwallet addresses (via coinbase) with this of wei
        pollingInterval: 2000 // optional, polling interval for the provider (reduce for faster deploy with testRPC or kovan)
      }),
      network_id: '*',

    },
  }
};
