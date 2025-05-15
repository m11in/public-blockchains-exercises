// ignition/modules/MyToken.js

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ikiabModule", (m) => {
  const ikiab = m.contract("ikiab");
  return { ikiab };
});
