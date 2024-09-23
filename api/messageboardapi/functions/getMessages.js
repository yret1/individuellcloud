const { db, tablename } = require("../services/db");

exports.handler = async (event) => {
  const table = tablename;

  console.log("Reading messages from table", table);

  try {
    const messages = await db.scan({ TableName: table }).promise();

    console.log("messages", messages.Items);

    return {
      statusCode: 200,
      body: JSON.stringify(messages.Items),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 404,

      body: JSON.stringify({ message: "Could not find messages" }),
    };
  }
};
