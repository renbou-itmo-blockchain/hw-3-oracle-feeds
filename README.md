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
New block: timestamp=1669232255 number=16034823 hash=0x7d09a795cd935e746b8ccb19ab5b05974e924aae44cf9dc5bcf940531c3ea61c parentHash=0x4fb8a440d415f114744c446c472c90dfe9fae062b829f1dfc76e72ff870e77d6
New block: timestamp=1669232267 number=16034824 hash=0x694ab22da83a5cd52425dcb7aef2657894327cb96e6a59582eb4e55db9d94064 parentHash=0x7d09a795cd935e746b8ccb19ab5b05974e924aae44cf9dc5bcf940531c3ea61c
New block: timestamp=1669232279 number=16034825 hash=0xf745cfce9f3ed3b7a49a120d14e43eb0bee01f5af5e10ed430e470c8c28d8108 parentHash=0x694ab22da83a5cd52425dcb7aef2657894327cb96e6a59582eb4e55db9d94064
New block: timestamp=1669232291 number=16034826 hash=0x310e7b04de21fffeb15756b1804d1faba264b20dc39ca4439614f07718993286 parentHash=0xf745cfce9f3ed3b7a49a120d14e43eb0bee01f5af5e10ed430e470c8c28d8108
```
