// const { QueueMessage } = require('../schema/event/queueMessage');
const { emitQueueMessage } = require('../service/emitQueueMessage');

module.exports = async (commandMeta) => {
  try {
    await emitQueueMessage(commandMeta);

    return { status: 200, body: 'Mensaje enviado correctamente' };
  } catch (error) {
    return { status: 400, body: error };
  }
};
