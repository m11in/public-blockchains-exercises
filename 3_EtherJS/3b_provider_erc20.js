
// Loading path module for operations with file paths.
const path = require('path');

// Ethers JS: Providers.
////////////////////////

// A Provider is a read-only connection to the blockchain, which allows
// querying the blockchain state, such as accout, block or transaction
// details, querying event logs or evaluating read-only code using call.

// See: https://docs.ethers.org/v6/getting-started/

// Exercise 0. Require the `dotenv` and `ethers` package.
/////////////////////////////////////////////////////////

// Hint: As you did in file 2_wallet.

// Require packages.
require("dotenv").config();
pathToDotEnv = path.join(__dirname, '..', '..', '.env');
// console.log(pathToDotEnv);
require("dotenv").config({ path: pathToDotEnv });

const ethers = require("ethers");

const providerKey = process.env.ALCHEMY_KEY;

const sepoliaUrl = `${process.env.ALCHEMY_SEPOLIA_API_URL}${providerKey}`;
console.log(sepoliaUrl);
const sepoliaProvider = new ethers.JsonRpcProvider(sepoliaUrl);

// Exercise 1. Bonus. Get ERC20 Balance.
////////////////////////////////////////

// To get the balance of ERC20 tokens the procedure is a bit more complex.
// ETH is the native currency of Ethereum, so it's "simply there". Instead,
// ERC20 tokens are added to Ethereum via smart contracts. So, we need to 
// interact with the smart contract of the specific token we want to know
// the balance of.

// We need to know the address of the smart contract. We can use the 
// LINK contract. What is it? 
// Hint: First, get some LINK ERC20 tokens:
// https://faucets.chain.link/sepolia
// Then check the transaction: with which contract did it interact?

const linkAddress = "0x779877A7B0D9E8603169DdbD7836e478b4624789";

// At the address, there is only bytecode. So we need to tell Ethers JS, what
// methods can be invoked. To do so, we pass the Application Binary Interface
// (ABI) of the contract, available at Etherscan. For your convenience, 
// the LINK ABI is stored in this directory, under "link_abi.json";

const linkABI = require('./link_abi.json');

// Now your task. Get the balance for LINK for "unima.eth" and "vitalik.eth".
// Hint: you need first to create a Contract object via `ethers.Contract`, 
// then invoke the appropriate smart contract method.
// Hint2: want to try it with your own address? Get some LINK ERC20 tokens: 
// https://faucets.chain.link/sepolia

const link = async () => {
    try {
      // Create contract instance
      const linkContract = new ethers.Contract(linkAddress, linkABI, sepoliaProvider);
      
      // Resolve ENS names to addresses
      const vitalikAddress = await sepoliaProvider.resolveName("vitalik.eth");
      const unimaAddress = await sepoliaProvider.resolveName("unima.eth");
      
      console.log("Vitalik's address:", vitalikAddress);
      console.log("Unima's address:", unimaAddress);
      
      // Get LINK balances
      const vitalikBalance = await linkContract.balanceOf(vitalikAddress);
      console.log("Vitalik's LINK balance:", ethers.formatEther(vitalikBalance));
      
      const unimaBalance = await linkContract.balanceOf(unimaAddress);
      console.log("Unima's LINK balance:", ethers.formatEther(unimaBalance));
    } catch (error) {
      console.error("Error:", error.message);
      
      // Additional error details that might help debugging
      if (error.info) {
        console.error("Request URL:", error.info.requestUrl);
        console.error("Response Status:", error.info.responseStatus);
        console.error("Response Body:", error.info.responseBody);
      }
    }
  };

link();
