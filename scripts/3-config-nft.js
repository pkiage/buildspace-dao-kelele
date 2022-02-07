import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x65ceAdfccCE0D13f975d8B0481ea050Df2A5c6BC",
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