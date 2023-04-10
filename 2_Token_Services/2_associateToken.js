const {
    TransferTransaction,
    Client,
    TokenAssociateTransaction,
    Wallet,
    PrivateKey
} = require("@hashgraph/sdk");
require('dotenv').config({ path: '../.env' });

// fetching Account1 ID and PrivateKey from .env file
const myAccountId = process.env.ACCOUNT_ID1;
const myPrivateKey = PrivateKey.fromString(process.env.ACCOUNT_ID1_PVKEY);

// fetching Account3 ID and PrivateKey from .env file
const Account3_Id = process.env.ACCOUNT_ID3;
const Account3_PrivateKey = PrivateKey.fromString(process.env.ACCOUNT_ID3_PVKEY);

// fetching Account4 ID and PrivateKey from .env file
const Account4_Id = process.env.ACCOUNT_ID4;
const Account4_PrivateKey = PrivateKey.fromString(process.env.ACCOUNT_ID4_PVKEY);

// fetching tokenId from .env file
const tokenId = process.env.TokenID;

// checking myAccountId and myPrivateKey should not be null
if (myAccountId == null ||
    myPrivateKey == null) {
    throw new Error("Environment variables myAccountId and myPrivateKey must be present");
}

// Create our connection to the Hedera Testnet
const client = Client.forTestnet();
client.setOperator(myAccountId, myPrivateKey);

//create new wallet1 for Account3
const wallet1 = new Wallet(
    Account3_Id,
    Account3_PrivateKey
);
//create new wallet2 for Account4
const wallet2 = new Wallet(
    Account4_Id,
    Account4_PrivateKey
);

async function main() {

    //  Before an account that is not the treasury for a token can receive or send this specific token ID, the account
    //  must become “associated” with the token.
    try {
        let associateOtherWalletTx = await new TokenAssociateTransaction()
            .setAccountId(wallet1.accountId)
            .setTokenIds([tokenId])
            .freezeWith(client)
            .sign(Account3_PrivateKey);
        let associateOtherWalletTx2 = await new TokenAssociateTransaction()
            .setAccountId(wallet2.accountId)
            .setTokenIds([tokenId])
            .freezeWith(client)
            .sign(Account4_PrivateKey);

        //SUBMIT THE TRANSACTION
        let associateOtherWalletTxSubmit = await associateOtherWalletTx.execute(client);
        let associateOtherWalletTxSubmit2 = await associateOtherWalletTx2.execute(client);


        //GET THE RECEIPT OF THE TRANSACTION
        let associateOtherWalletRx = await associateOtherWalletTxSubmit.getReceipt(client);
        let associateOtherWalletRx2 = await associateOtherWalletTxSubmit2.getReceipt(client);


        //LOG THE TRANSACTION STATUS
        console.log(`- Token association with the users account3: ${associateOtherWalletRx.status} \n`);
        console.log(`- Token association with the users account4: ${associateOtherWalletRx2.status} \n`);
    } catch (error) {
        console.info(`Fail to associate account:${error}`);
        //once Account assoicated with Token Id,then can't assoiciate again,need to generate again TokainId and set in .env file
        console.log(`Already assoicated with totenID:${tokenId}`);
    }

}

main();