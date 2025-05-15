// ignition/modules/IkiabScratchModule.js

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("IkiabScratchModule", (m) => {
  // Deploy with initial supply of 1,000 tokens (adjust decimals!)
  const initialSupply = m.getParameter("initialSupply", BigInt("1000") * BigInt(10 ** 18));

  const ikiab = m.contract("ikiabScratch", [initialSupply]);

  return { ikiab };
});
