import OAuthClient from "intuit-oauth";
const oauth = new OAuthClient({
  clientId: "ABqv8rembL8cMgVkLuk4N8Udqyr6BGs0ZBMbsV7Dblj5EGf2m2",
  clientSecret: "aNEKuTyaWD4Ri6tANs5zFQWIP93JtSUAeIxQwNLv",
  environment: "sandbox",
  redirectUri: "http://localhost:3000/dev/callback",
});
export { OAuthClient, oauth };
