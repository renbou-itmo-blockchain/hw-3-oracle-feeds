# Ethereum monitor
A simple script providing capabilities for monitoring the Ethereum head blocks and Chainlink token pairs.  
*Note that an [Alchemy](https://alchemy.com) API key is required, since Alchemy's ETH MainNet node is used to monitor the head block.*

## Usage:
1. Setup dependencies
   ```bash
   npm ci
   ```
2. Specify your Alchemy API key and desired Chainlink pair aggregator address:
   ```bash
   export ALCHEMY_API_KEY=...
   export AGGREGATOR_ADDRESS=0x...
   ```

   As an example, here are some Chainlink pair aggregator addresses:
   - ETH/USD: 0x37bC7498f4FF12C19678ee8fE19d713b87F6a9e6
   - LINK/ETH: 0xbba12740DE905707251525477bAD74985DeC46D2
   - USDT/ETH: 0x7De0d6fce0C128395C488cb4Df667cdbfb35d7DE 
3. Run the monitor:
   ```bash
   node monitor.js
   ```

## Example
```
New block: timestamp=1669236899 number=16035201 hash=0x0321f71aa7f382a4f6fac7d1f6ccf13fffbad82c015184da1a952e16450be6ed
  parentHash=0x83139c051d7be7ba61d467e80189238e5b0c56e8bbeb0a18d63eeab0d5284ed6
New block: timestamp=1669236911 number=16035202 hash=0x53605d18b18fcde9f0cfe924a14533520ef6fbcd947368ca68641f6b400df118
  parentHash=0x0321f71aa7f382a4f6fac7d1f6ccf13fffbad82c015184da1a952e16450be6ed
New block: timestamp=1669236923 number=16035203 hash=0x79aae24a1136a0486af85586eb656f6e5f0665f0c54113dcec23f2fa8b4d7ea5
  parentHash=0x53605d18b18fcde9f0cfe924a14533520ef6fbcd947368ca68641f6b400df118
New block: timestamp=1669236935 number=16035204 hash=0x29d77e49679fa0cbe44c28101ea65f3f526e89f857be10864b19d9a854ec5cc3
  parentHash=0x79aae24a1136a0486af85586eb656f6e5f0665f0c54113dcec23f2fa8b4d7ea5
New block: timestamp=1669236947 number=16035205 hash=0x300f30eebe379b4f928688a9c678d5fdc0e539ae59ff8f457f73d47b42dd4c07
  parentHash=0x29d77e49679fa0cbe44c28101ea65f3f526e89f857be10864b19d9a854ec5cc3
New pair update: topics=0x0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f,0x0000000000000000000000000000000000000000000000000000001b4470a530,0x00000000000000000000000000000000000000000000000000000000000094bc 
  data=0x00000000000000000000000000000000000000000000000000000000637e88d3 current=117112350000, roundId=38076 updatedAt=1669236947
New block: timestamp=1669236959 number=16035206 hash=0x3d88686435d9a47d8d474d0ac99b9c98e60cb07d7de28fc2713e89086c2c4641
  parentHash=0x300f30eebe379b4f928688a9c678d5fdc0e539ae59ff8f457f73d47b42dd4c07
New block: timestamp=1669236971 number=16035207 hash=0x2db96163ec6bfc38f4b1570eb536f2b4fd35c60b4d7ac429f1511571ddf6e21a
  parentHash=0x3d88686435d9a47d8d474d0ac99b9c98e60cb07d7de28fc2713e89086c2c4641
New block: timestamp=1669236983 number=16035208 hash=0x78adec0ef08c652fc46c6603ad924f294d8c892059e2a2dc404e968eb7881d60
  parentHash=0x2db96163ec6bfc38f4b1570eb536f2b4fd35c60b4d7ac429f1511571ddf6e21a
New block: timestamp=1669236995 number=16035209 hash=0xa18f66d23c9f2636aa2c23fe30ff8fa58d0a2fd67f1c968f3ab2cb4600b8817f
  parentHash=0x78adec0ef08c652fc46c6603ad924f294d8c892059e2a2dc404e968eb7881d60
New block: timestamp=1669237007 number=16035210 hash=0x32ae79335b3d5e118e399aa32be26d9d56b2d61d44f2288467b427ad130cef32
  parentHash=0xa18f66d23c9f2636aa2c23fe30ff8fa58d0a2fd67f1c968f3ab2cb4600b8817f
```
