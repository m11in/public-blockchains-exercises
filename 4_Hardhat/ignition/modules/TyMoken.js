// ignition/modules/MyToken.js

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TyMokenModule", (m) => {
  const tyMoken = m.contract("TyMoken");
  return { tyMoken };
});
