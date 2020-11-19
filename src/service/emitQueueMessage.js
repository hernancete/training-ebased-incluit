const config = require('ebased/util/config');
const sqs = require('ebased/service/downstream/sqs');

const QUEUE_URL = config.get('QUEUE_URL');

const emitQueueMessage = async (eventMeta) => {
  //const { eventMeta } = queueMessageCreated.get();
  const sqsSendParams = {
    QueueUrl: QUEUE_URL,
    MessageBody: 'Hola mundo',
  };
  await sqs.send(sqsSendParams, eventMeta);
};

module.exports = { emitQueueMessage };
