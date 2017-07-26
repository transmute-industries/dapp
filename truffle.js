


const HOST = process.env.RPC_HOST || 'testrpc';
const PORT = process.env.RPC_PORT || 8545;


module.exports = {
  networks: {
    development: {
      host: HOST,
      port: PORT,
      network_id: "*" // Match any network id
    }
  }
};
