import Web3 from "web3";

const alchemyApiKey = process.env["ALCHEMY_API_KEY"] || "demo";
const aggregatorAddress =
  process.env["AGGREGATOR_ADDRESS"] ||
  "0x37bC7498f4FF12C19678ee8fE19d713b87F6a9e6";
const web3 = new Web3(`wss://eth-mainnet.g.alchemy.com/v2/${alchemyApiKey}`);

web3.eth.subscribe("newBlockHeaders", (_, block) => {
  console.log(
    `New block: timestamp=${block.timestamp} number=${block.number} hash=${block.hash} parentHash=${block.parentHash}`
  );
});

web3.eth.subscribe(
  "logs",
  {
    address: aggregatorAddress,
    topics: [
      // Keccak-256("AnswerUpdated(int256,uint256,uint256)")
      "0x0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f",
    ],
    fromBlock: "latest",
  },
  (_, log) => {
    console.log(`New pair update: ${log}`);
  }
);
