import sdk from "./1-initialize-sdk.js";
import { APP_MODULE_ADDRESS } from '../src/constants';


// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule(APP_MODULE_ADDRESS);

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
      "✅ Successfully deployed token module, address:", //TOKEN_MODULE_ADDRESS
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();