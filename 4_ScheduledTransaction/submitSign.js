// Import dependencies
const {
    ScheduleSignTransaction,
    Client,
    PrivateKey
} = require("@hashgraph/sdk");

// Loading values from ennvironment file
require('dotenv').config({path:'../.env'});

// Fetch Account2 Id and private key and  put down it as otherAccountId
const otherAccountId = process.env.ACCOUNT_ID2;
const otherPrivateKey = PrivateKey.fromString(process.env.ACCOUNT_ID2_PVKEY);

const scheduleId = process.env.ScheduleID;

// Validating otherAccountId and otherPrivateKey for null value
if (otherAccountId == null ||
    otherPrivateKey == null ) {
    throw new Error("Environment variables otherAccountId and otherPrivateKey must be present");
}

// Create our connection to the Hedera network
const client = Client.forTestnet();
client.setOperator(otherAccountId, otherPrivateKey);


// Define submitSignature() function to submit the signature
async function submitSignature() {

    //Create the transaction
    const transaction = await new ScheduleSignTransaction()
        .setScheduleId(scheduleId)
        .freezeWith(client)
        .sign(otherPrivateKey);

    //Sign with the client and submit to a Hedera network
    const txResponse = await transaction.execute(client);

    //Get the receipt of the transaction
    const receipt = await txResponse.getReceipt(client);

    //Get the transaction status
    const transactionStatus = receipt.status;
    console.log("The transaction consensus status is " +transactionStatus);

}

// Call submitSignature() function to execute program
submitSignature();