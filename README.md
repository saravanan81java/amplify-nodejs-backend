# amplify-nodejs-backend

API (REST)
NodeJS API
In this guide, you will learn how to deploy a Node.js API.

https://docs.amplify.aws/guides/api-rest/node-api/q/platform/js/

1. Initialize a new Amplify project
amplify init

# Follow the steps to give the project a name, environment name, and set the default text editor.
# Accept defaults for everything else and choose your AWS Profile.
copy
2. Add the API and function
amplify add api

? Please select from one of the below mentioned services: REST
? Provide a friendly name for your resource to be used as a label for this category in the project: nodeapi
? Provide a path (e.g., /book/{isbn}): /hello
? Choose a Lambda source: Create a new Lambda function
? Provide a friendly name for your resource to be used as a label for this category in the project: greetingfunction
? Provide the AWS Lambda function name: greetingfunction
? Choose the function runtime that you want to use: NodeJS
? Choose the function template that you want to use: Hello World
? Do you want to access other resources created in this project from your Lambda function? N
? Do you want to invoke this function on a recurring schedule? N
? Do you want to edit the local lambda function now? N
? Restrict API access: N
? Do you want to add another path? N
copy
The CLI should have created a new function located at amplify/backend/function/greetingfunction.

3. Updating the function code
Next, open amplify/backend/function/greetingfunction/src/index.js and update the code to the following:

exports.handler = async (event) => {
  const body = {
      message: "Hello from Lambda"
  }
  const response = {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
          "Access-Control-Allow-Origin": "*",
      }
  };
  return response;
};
copy
4. Deploy the API
To deploy the API, run the push command:

amplify push
copy
5. Using the API
Here is how you can send a GET request to the API.

import { API } from 'aws-amplify';

const response = await API.get('nodeapi', '/hello');
copy
To learn more about interacting with REST APIs using Amplify, check out the complete documentation here.

The API endpoint is located in the aws-exports.js folder.

You can also interact directly with the API using this URL and the specified path:

curl https://<api-id>.execute-api.<api-region>.amazonaws.com/<your-env-name>/hello