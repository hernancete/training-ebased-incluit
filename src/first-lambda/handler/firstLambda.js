const { commandMapper } = require("ebased/handler");

const inputMode = require("ebased/handler/input/commandApi");
const outputMode = require("ebased/handler/output/commandApi");

const firstLambdaDomain = require("../domain/firstLambda");

module.exports.handler = async (command, context) => {
  return commandMapper(
    { command, context },
    inputMode,
    firstLambdaDomain,
    outputMode
  );
};
