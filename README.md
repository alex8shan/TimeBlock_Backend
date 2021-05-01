# TimeBlock_Backend
Backend API:
  POST - https://1sma35v9rh.execute-api.us-east-1.amazonaws.com/prod/time

  GET - https://1sma35v9rh.execute-api.us-east-1.amazonaws.com/prod/time

  PUT - https://1sma35v9rh.execute-api.us-east-1.amazonaws.com/prod/time

  DELETE - https://1sma35v9rh.execute-api.us-east-1.amazonaws.com/prod/time



tests:

Create: serverless invoke local --function create --path mocks/create-event.json

List: serverless invoke local --function list --path mocks/list-event.json

Update: serverless invoke local --function update --path mocks/update-event.json

Delete: serverless invoke local --function delete --path mocks/delete-event.json



Note: requires installation of serverless package via npm