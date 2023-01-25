// import Moralis from 'moralis';
const {Moralis} = require("moralis");
require("dotenv").config();
const EvmChain = require("@moralisweb3/evm-utils").EvmChain;
// import { EvmChain } from "@moralisweb3/evm-utils";
const { env } = require("process");
// import { env } from 'process';

async function main() {
  await Moralis.start({
    apiKey: env.MORALIS_API_KEY || "",
  });

//   const stream = {
//     chains: [EvmChain.ETHEREUM, EvmChain.POLYGON], // list of blockchains to monitor
//     description: "Axie slp", // your description
//     tag: "test", // give it a tag
//     webhookUrl: process.env.WEBHOOK_URL, // webhook url to receive events,
//     includeNativeTxs: true,
//   };

//   const streamCallback = async (err, newStream) => {
//     if (err) {
//       // handle error
//       console.log(err);
//     } else {
//       const { id } = newStream.toJSON();
//       const address = "0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25";
//       Moralis.Streams.addAddress({ address, id }, addressCallback);
//     }
//   };

//   Moralis.Streams.add(stream, streamCallback);

//   const addressCallback = async (err) => {
//     if (err) {
//       // handle error
//       console.log(err);
//     } else {
//       console.log("Address added to stream");
//       // handle success
//     }
//   };
}

main();

// const newStream = await Moralis.Streams.add(stream);
// const { id } = newStream.toJSON(); // { id: 'YOUR_STREAM_ID', ...newStream }

// // Now we attach bobs address to the stream
// const address = "0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25";

// await Moralis.Streams.addAddress({ address, id });
