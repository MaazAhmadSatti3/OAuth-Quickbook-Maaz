import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { Handler } from "aws-lambda";
import { oauth } from "@libs/oAuth";

const createToken: Handler = async (event) => {
  const parseRedirect = `http://localhost:3000/dev/callback?code=${event.queryStringParameters.code}&state=${event.queryStringParameters.state}&realmId=${event.queryStringParameters.realmId}`;

  const token = await oauth.createToken(parseRedirect);

  return formatJSONResponse({
    message: token.token,
  });
};

export const main = middyfy(createToken);
