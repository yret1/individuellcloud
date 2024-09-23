const { db, tablename } = require("../services/db");

exports.handler = async (event) => {
  const user = event.pathParameters.user;
  const id = event.pathParameters.id;
  const table = tablename;

  const message = await db
    .scan({ TableName: table, user: user, id: id })
    .promise();

  if (message) {
    const body = JSON.parse(event.body);
    const { message } = body;

    if (!user || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "User and message are both required",
        }),
      };
    }

    try {
      const editedMessage = await db
        .update({
          TableName: table,
          Key: {
            id: id,
            user: user,
          },
          UpdateExpression: "set message = :m",
          ExpressionAttributeValues: {
            ":m": message,
          },
        })
        .promise();

      return {
        statusCode: 200,
        body: JSON.stringify("Message updated!"),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Could not update message" }),
      };
    }
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Could not find the message you are trying to edit",
      }),
    };
  }
};
