const env = "staging";

let baseUrl;
let apiKeyPattern;
let timeout;
let description;

switch (env) {

    case "dev":
        baseUrl = "dev/dev.com";
        apiKeyPattern = "DEV";
        timeout = 200;
        description = "Dev environment";
        break;

    case "qa":
        baseUrl = "qa/qa.com";
        apiKeyPattern = "QA";
        timeout = 400;
        description = "QA environment";
        break;

    case "staging":
        baseUrl = "staging/staging.com";
        apiKeyPattern = "STG";
        timeout = 600;
        description = "STG environment";
        break;

    case "prod":
        baseUrl = "prod/prod.com";
        apiKeyPattern = "PROD";
        timeout = 700;
        description = "PROD environment";
        break;

    default:
        console.log("Invalid environment");
}

console.log("Environment Config");
console.log("-------------------");
console.log("Environment:", env);
console.log("Base URL:", baseUrl);
console.log("API Key Pattern:", apiKeyPattern);
console.log("Timeout:", timeout + "ms");
console.log("Description:", description);