const sns = require("ebased/service/downstream/sns");

module.exports = async (payload) => {
  await sns.publish({
    Message: `${payload} has been processed!`,
    TopicArn: process.env.SNS_ARN,
  });
};
