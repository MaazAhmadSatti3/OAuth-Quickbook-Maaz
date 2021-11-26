import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import schema from "./schema";
import { v4 as uuid } from "uuid";
import * as AWS from "aws-sdk";

const storeCredentials: ValidatedEventAPIGatewayProxyEvent<typeof schema> =
  async (event) => {
    const { credentials } = event.body;
    const query = {
      TableName: "OAuthCredentials",
      Item: {
        id: uuid(),
        credentials: credentials,
      },
    };

    const dynamoClient = process.env.IS_OFFLINE
      ? new AWS.DynamoDB.DocumentClient({
          region: "localhost",
          endpoint: "http://localhost:8000",
        })
      : new AWS.DynamoDB.DocumentClient({});

    await dynamoClient.put(query).promise();

    return formatJSONResponse({
      message: query.Item,
    });
  };
export const main = middyfy(storeCredentials);
