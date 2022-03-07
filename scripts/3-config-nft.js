import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
import { BUNDLE_DROP_MODULE_ADDRESS } from '../src/constants';


const bundleDrop = sdk.getBundleDropModule(
  BUNDLE_DROP_MODULE_ADDRESS,
);



(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "KELELE Token",
        description: "This NFT will give you access to KeleleDAO!",
        image: readFileSync("scripts/assets/kelele.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()