import { middyfy } from "@libs/lambda";
import { Handler } from "aws-lambda";
import { OAuthClient, oauth } from "@libs/oAuth";
import { formatJSONResponse } from "@libs/apiGateway";

const authUri: Handler = async () => {
  var authUri = oauth.authorizeUri({
    scope: [OAuthClient.scopes.Accounting, OAuthClient.scopes.OpenId],
    state: "testState",
  });

  return formatJSONResponse({ authUri });
};

export const main = middyfy(authUri);
