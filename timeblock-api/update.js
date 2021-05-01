import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Key: {
      userName: data.userName,
      date: data.date,
      timeslot: data.timeslot,
    },
    UpdateExpression: "SET task = :task",
    ExpressionAttributeValues: {
      ":timeslot": data.timeslot || null,
      ":task": data.task || null,
    },
    ReturnValues: "ALL_NEW",
  };
  try{
    await dynamoDb.update(params);
  } catch (e) {
    return e;
  }
  return { status: true };
});