### Author
~ Amrita kumari
# Hedera Test Certification

This project is a Node.js based application that provides a set of scripts to interact with the Hedera Hashgraph network. The scripts are designed to perform various actions such as creating new accounts,Fungible Token Services ,multi-signature transactions, consensus, scheduling transactions, and interacting with smart contracts.

### Prerequisites

- Node.js (v14 or higher)

- Hedera Hashgraph account

- Hedera Hashgraph Testnet account (for testing)

### Installation

- Clone this repository or download the code as a zip file.

`git clone https://github.com/Amrita1196/Hedera_Test_Certification.git `

- Go to the `Hedera_Test_Certification` directory: `cd Hedera_Test_Certification`

- Install dependencies by running `npm init`
- Install dependencies by running `npm install`
- Install dependencies by running `npm install dotenv`
- Install dependencies by running `npm install @hashgraph/sdk`
- Install dependencies by running `npm install nodemon --save`
- Install dependencies by running `npm install web3`


## Usage
To use this application, you'll need to have Node.js and the @hashgraph/sdk and dotenv modules installed. Once you have those dependencies installed, you can clone this repository

Here are the available scripts:

### Account Scripts

- account directory: `cd 1_Account`

- run account.js file: `node account.js`

### Fungible Token Scripts

- go to fungibleToken directory: `cd   2_Token_Services`

- Create a new fungibleToken run:`node 1_createTokenAndSupply.js`:

- associate Token run:`node 2_associateToken.js`:

- Transfer a token`node 3_transferToken.js`:

- Pause then transfer Token:`node 4_pauseAndTransferToken.js`

- Unpause then transfer Token: `5_unPauseAndTransferToken.js`

### Smart Contract Scripts
- go to 3_SmartContractService folder: `cd 3_SmartContractService`

- Interact with a smart contract`node deploySmartContract.js`

### Scheduled Transactions Scripts

- go to scheduledTransaction file: `cd 4_ScheduledTransaction`

- run sheduleTxn.js file for create ScheduleID: `node createScheduleTxnAndSerialise.js`

- run submitSignature file: `node submitSign.js`

### Multi-Signature Scripts

- go to 5_MultiSignature directory: `cd   5_MultiSignature`

-  run multiSign.js file: `node multiSign.js`: 

### Consensus Scripts

- go to ConsensusService directory:`cd 6_Consensus_Services`

- run consensus.js file `node consensus.js`


## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
Collapse