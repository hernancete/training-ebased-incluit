const lambda = require("ebased/service/downstream/lambda");

module.exports = async (payload) => {
    await lambda.invoke({
      FunctionName: process.env.OUTPUT_LAMBDA,
      Payload: payload,
    });
  };