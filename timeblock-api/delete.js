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
    };
    try{
        await dynamoDb.delete(params);
      } catch (e) {
        return e;
      }
  return { status: true };
});