require("@nomiclabs/hardhat-waffle")

const fs = require("fs");
const POLYGON_PRIVATE_KEY = fs.readFileSync(".env").toString();
// const ALCHEMY_API_KEY = "6GL8E0Q59JorzOeI1piiTXzNjSAXzvKi"


/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
    },
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/6GL8E0Q59JorzOeI1piiTXzNjSAXzvKi",
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