const { batchEventMapper } = require('ebased/handler');
const inputMode = require('ebased/handler/input/batchEventQueue');
const outputMode = require('ebased/handler/output/batchEventConfirmation');

const domain = async () => {
    console.log('OMG IT WORKS!');

    return { body: 'Ok' }
};

module.exports.handler = async (events, context) => {
  return batchEventMapper({ events, context }, inputMode, domain, outputMode);
}