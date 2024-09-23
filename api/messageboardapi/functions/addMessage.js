const { db, tablename } = require("../services/db");

const { v4: uuidv4 } = require("uuid");

exports.handler = async (event) => {
  const table = tablename;

  const createData = new Date().toISOString();

  const body = JSON.parse(event.body);

  const id = uuidv4();

  const { user, message } = body;

  if (!user || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "User and message are both required" }),
    };
  }

  try {
    const newMessage = await db
      .put({
        TableName: table,
        Item: {
          id: id,
          user: user,
          message: message,
          createdAt: createData,
        },
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify("Message added!"),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Could not add message" }),
    };
  }
};
