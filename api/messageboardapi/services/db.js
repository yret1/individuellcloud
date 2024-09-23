const AWS = require("aws-sdk");

const db = new AWS.DynamoDB.DocumentClient({
  region: "eu-north-1",
});

const tablename = "MessageBoardsTable";

module.exports = { db, tablename };
