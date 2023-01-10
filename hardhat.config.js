require("@nomiclabs/hardhat-waffle")

const fs = require("fs");
const POLYGON_PRIVATE_KEY = fs.readFileSync(".env").toString();
// const ALCHEMY_API_KEY = "6GL8E0Q59JorzOeI1piiTXzNjSAXzvKi"


/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 80001
    },
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [POLYGON_PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}