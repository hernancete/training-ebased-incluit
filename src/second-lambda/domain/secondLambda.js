const invokeThirdLambda = require("../service/invokeThirdLambda");
const { v4: uuidv4 } = require("uuid");

module.exports = async ({ Payload }) => {
  await invokeThirdLambda({
    id: uuidv4(),
    nameNormalized: Payload.trim(),
    letters: Payload.length,
    label: Payload.toUpperCase(),
  });
};
