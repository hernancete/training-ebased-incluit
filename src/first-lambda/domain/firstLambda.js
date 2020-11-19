const sendToSqs = require("../service/sendToSqs");

const { InputValidation } = require("ebased/schema/inputValidation");

module.exports = async (commandPayload, commandMeta) => {
  const { name } = commandPayload;

  const firstLambdaValidation = new firstLambdaInputSchema(
    commandPayload,
    commandMeta
  ).get();

  if (firstLambdaValidation.code) {
    return { status: 400, body: firstLambdaValidation };
  }

  await sendToSqs(name);

  return {
    body: {
      message: `${name} is being processed`,
    },
  };
};

class firstLambdaInputSchema extends InputValidation {
  constructor(payload, meta) {
    super({
      source: meta.status,
      payload: payload,
      source: "FIRST.LAMBDA",
      specversion: "v1.0.0",
      schema: {
        strict: false,
        name: { type: String, required: true },
      },
    });
  }
}
