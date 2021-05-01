import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Key: {
        userName: data.userName,
        date: data.date,
    },
  };
  const result = await dynamoDb.get(params);
  return result.Items;
});