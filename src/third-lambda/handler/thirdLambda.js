const { commandMapper } = require("ebased/handler");

const inputMode = require("ebased/handler/input/commandInvoke");
const outputMode = require("ebased/handler/output/commandInvoke");

const thirdLambdaDomain = require("../domain/thirdLambda");

module.exports.handler = async (command, context) => {
  return commandMapper(
    { command, context },
    inputMode,
    thirdLambdaDomain,
    outputMode
  );
};
