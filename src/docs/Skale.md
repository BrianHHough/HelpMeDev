# Skale

## What we used it for:

- smart contracts deployed onto SKALE (rather than Ethereum chain, Rinkeby, Ropsten, etc.
- connection point of having Metamask handle auth

## Steps to integrate:

- add Skale network contracts and info to Metamask and use accounts while connected to Skale in Metamask
- where you deploy contracts to is controlled in your config file settings under network. The same info is what you need in Metamask so it knows where to look for the contracts
- deploying: https://docs.skale.network/develop/deployment
- Web3 setup with a react example https://docs.skale.network/develop/providers
  -React example: https://codesandbox.io/s/web3js-providers-skale-dev-docs-t3099

- If you use the IMA bridge, you will work with 2 chains, Mainnet and SKALE. Both will be configured in metamask. On my react app i like to trigger app reload when changing chain in metamask and display the app content depending on the chain which is selected in metamask for the user, but that is not mandatory.

Please check out the SDK here: https://docs.skale.network/develop/ima-sdk
