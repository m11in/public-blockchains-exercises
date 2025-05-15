require("@nomicfoundation/hardhat-toolbox");

const path = require('path')
const res = require('dotenv')
  .config({ path: path.resolve(__dirname, '..', '.env') });


// You may also use Alchemy.
const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const ALCHEMY_URL = process.env.ALCHEMY_SEPOLIA_API_URL;
const SEPOLIA_RPC_URL = `${ALCHEMY_URL}${ALCHEMY_KEY}`;

const NOT_UNIMA_URL = "http://134.155.52.185:32779"

console.log(SEPOLIA_RPC_URL);
console.log('------------------------')

// Beware: NEVER put real Ether into testing accounts.
const MM_PRIVATE_KEY = process.env.METAMASK_1_PRIVATE_KEY;
const MM_PRIVATE_KEY2 = process.env.METAMASK_2_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  
  solidity: "0.8.28",
  
  defaultNetwork: "localhost",
  
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  },

  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [ MM_PRIVATE_KEY2 ],
    },
    notunima: {
      url: NOT_UNIMA_URL,
      accounts: [ MM_PRIVATE_KEY, MM_PRIVATE_KEY2 ],
    }
  }

};