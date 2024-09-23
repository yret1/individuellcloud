const { db, tablename } = require("../services/db");

exports.handler = async (event) => {
  const user = event.pathParameters.user;
  const table = tablename;

  const messages = await db.scan({ TableName: table, user: user }).promise();

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
