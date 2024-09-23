const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDB({
  region: "eu-north-1",
});

const db = DynamoDBDocument.from(client);

const tablename = "messageboard";

module.exports = { db, tablename };
