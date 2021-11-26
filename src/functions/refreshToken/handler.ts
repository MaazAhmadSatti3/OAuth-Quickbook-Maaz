import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { Handler } from "aws-lambda";
import { oauth } from "@libs/oAuth";

const refreshToken: Handler = async (event) => {
  const newToken = await oauth.refresh(event.body.token);

  return formatJSONResponse({
    message: newToken,
  });
};

export const main = middyfy(refreshToken);
