const { db, tablename } = require("../services/db");

exports.handler = async (event) => {
  const user = event.pathParameters.user;
  const id = event.pathParameters.id;
  const table = tablename;

  try {
    // Does message to edit exist?
    const result = await db
      .query({
        TableName: table,
        KeyConditionExpression: "#usr = :user AND #id = :id",
        ExpressionAttributeNames: {
          "#usr": "user",
          "#id": "id",
        },
        ExpressionAttributeValues: {
          ":user": user,
          ":id": id,
        },
      })
      .promise();
    if (result.Items.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: "Could not find the message you are trying to edit",
        }),
      };
    }

    const body = JSON.parse(event.body);
    const { message } = body;

    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Message is required",
        }),
      };
    }

    // Update Post
    await db
      .update({
        TableName: table,
        Key: {
          user: user,
          id: id,
        },
        UpdateExpression: "set message = :message",
        ExpressionAttributeValues: {
          ":message": message,
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
      body: JSON.stringify({
        message: "Could not update message",
        error: error.message,
      }),
    };
  }
};
