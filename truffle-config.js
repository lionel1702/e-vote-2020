const path = require("path");
// const HDWalletProvider = require("@truffle/hdwallet-provider");

// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
//   contracts_build_directory: path.join(__dirname, "client/src/contracts"),
//   networks: {
//     rinkeyby: {
//       provider: function () {
//         return new HDWalletProvider(
//           "coach canal patrol alone dumb segment enjoy pledge relax fly sort maximum",
//           "https://rinkeby.infura.io/v3/348d9f22060749258c979a0d531acec3"
//         );
//       },
//       network_id: 4,
//     },
//     development: {
//       network_id: "*",
//       host: "localhost",
//       port: 8545,
//       gas: 6721975,
//       gasPrice: 20000000000,
//     },
//   },
//   compilers: {
//     solc: {
//       version: "0.4.17",
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   // rinkeyby: {
//   //   provider: new HDWalletProvider(secrets.mnemonic, secrets.infuraApiKey),
//   //   network_id: "4",
//   // },
// };

var HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic =
  "coach canal patrol alone dumb segment enjoy pledge relax fly sort maximum";
module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          "https://rinkeby.infura.io/v3/348d9f22060749258c979a0d531acec3"
        );
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.4.17",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
