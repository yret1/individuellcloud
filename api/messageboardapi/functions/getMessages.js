const { db, tablename } = require("../services/db");

exports.handler = async (event) => {
  const table = tablename;

  const messages = await db.scan({ TableName: table }).promise();

  if (messages) {
    return {
      statusCode: 200,
      body: JSON.stringify(messages.Items),
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Could not find messages" }),
    };
  }
};
