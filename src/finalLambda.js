// Este es el helper que se encarga de parsear los datos segun el inputMode y llamar al domain
const { batchEventMapper } = require('ebased/handler');
const inputMode = require('ebased/handler/input/batchEventQueue');
const outputMode = require('ebased/handler/output/batchEventConfirmation');

const domain = async (eventMeta) => {
    console.log('from finalLambda');
    console.log(eventMeta);
    return {body: 'All cool'};
  };
  
  module.exports.handler = async (events, context) => {
    return batchEventMapper({ events, context }, inputMode, domain, outputMode);
  }