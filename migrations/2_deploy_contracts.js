const Router = artifacts.require("LizzardV2TestRouter02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
  let weth;
  const FACTORY_ADDRESS = "0xC92D996727f4E10C42dfdd083e06586f882b482d";

  if (network === "mainnet") {
    weth = await WETH.at("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }
  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
