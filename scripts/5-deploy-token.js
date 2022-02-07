import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x0b48CCfD9007e17F894aa51837cD0f76dCD22716");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "KeleleDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "KELELE",
    });
    console.log(
      "✅ Successfully deployed token module, address:", //0x2A25BE5Ed1bD30344bAE5749066d36c111a5c930
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();