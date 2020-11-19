const invokeThirdLambda = require("../service/invokeThirdLambda")

module.exports = async (eventPayload) => {
    await invokeThirdLambda(eventPayload);
  };