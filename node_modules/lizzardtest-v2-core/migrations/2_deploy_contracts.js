const Factory = artifacts.require("LizzardV2TestFactory.sol");
const Token1 = artifacts.require("Token1.sol");
const Token2 = artifacts.require("Token2.sol");

module.exports = async function (deployer, network, address) {
  //address- receive the payments for the payment fees
  await deployer.deploy(Factory, address);
  const factory = await Factory.deployed();

  let token1Address, token2Address;
  console.log(network);
  if (network === "mainnet") {
    token1Address = "";
    token2Address = "";
  } else {
//0xC92D996727f4E10C42dfdd083e06586f882b482d address factory
    await deployer.deploy(Token1);
    await deployer.deploy(Token2);
    const token1 = await Token1.deployed();
    const token2 = await Token2.deployed();
    token1Address = token1.address;
    token2Address = token2.address;
  }
  await factory.createPair(token1Address, token2Address);
};
