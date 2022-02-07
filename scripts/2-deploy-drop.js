import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x0b48CCfD9007e17F894aa51837cD0f76dCD22716");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "KeleleDAO Membership",
      // A description for the collection.
      description: "A DAO of change makers creating, ideating, and showcasing.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/kelele.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:", // 0x65ceAdfccCE0D13f975d8B0481ea050Df2A5c6BC
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:", //
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()