// ignition/modules/MyToken.js

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("UltraKnowledgeModule", (m) => {
  const ultraKnowledge = m.contract("UltraKnowledge");
  return { ultraKnowledge };
});
