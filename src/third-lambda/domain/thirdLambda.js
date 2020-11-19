const sendEmail = require("../service/sendEmail");

module.exports = async ({ id, nameNormalized, letters, label }) => {
  const message = `Your name has been processed! Details => Name id: ${id} - Name: ${nameNormalized} - Number of letters: ${letters} - User Name: ${label}`;
  await sendEmail(message);
};
