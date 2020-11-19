const sendEmail = require("../service/sendEmail");

module.exports = async ({ Payload }) => {
  await sendEmail(Payload);
};
