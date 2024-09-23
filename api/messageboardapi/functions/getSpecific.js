const { db, tablename } = require("../services/db");

exports.handler = async (event) => {
  const user = event.pathParameters.user;
  const table = tablename;

  const params = {
    TableName: table,
    KeyConditionExpression: "#usr = :username",
    ExpressionAttributeNames: {
      "#usr": "user",
    },
    ExpressionAttributeValues: {
      ":username": user,
    },
  };

  try {
    const messages = await db.query(params).promise();

    if (messages.Items.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify(messages.Items),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: "Could not find messages from the specified user",
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error querying the database" }),
    };
  }
};
