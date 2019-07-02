This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# About

This project is build for the [UESC (Universidade Estadual de Santa Cruz)](http://www.uesc.br/) Scientific Research. The main goal is to build Smart Contracts for E-Gov and integrate them by a Middleware called I²oTegrator which is described in [this paper](https://ieeexplore.ieee.org/document/8538541). We created contracts for Enrollment Proof, Immobile Registration and Vaccination Card. To give a better understanding about how the system could work, we implemented the Enrollment Proof contract in an Ethereum Testnet, created a server side, that plays the role of the Middleware using the [web3.js](https://web3js.readthedocs.io/en/1.0/) (Ethereum Javascript API) to access the smart contract and built a website (client side) which manages an student Enrollment Proof contract by making requests to the I²oTegrator.

## Project Stage

The project is in the **Development** stage.

# Versions

- **Node.js:** v10.15.3
- **NPM:** 6.4.1

# Organization

This repository is organized in client side and server side, to understand how each one works, you can access their folders:

- [Client Side](https://github.com/Levysantiago/smartcontracts-for-egov/tree/master/client)
- [Server Side](https://github.com/Levysantiago/smartcontracts-for-egov/tree/master/server)

# Authors

- [Levy Santiago](https://github.com/Levysantiago)
- [Jauberth Abijaude](https://github.com/jauberth)
