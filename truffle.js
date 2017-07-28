

module.exports = {
  networks: {
    development: {
      host: process.env.RPC_HOST || 'localhost',
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
