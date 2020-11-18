// Este es el helper que se encarga de parsear los datos segun el inputMode y llamar al domain
const { commandMapper } = require('ebased/handler');
const config = require('ebased/util/config');
const sqs = require('ebased/service/downstream/sqs');

// Nuestro input viene de API Gateway -> importamos input/commandApi
const inputMode = require('ebased/handler/input/commandApi');

// Nuestro lambda responde a API Gateway -> importamos output/commandApi
const outputMode = require('ebased/handler/output/commandApi');

const QUEUE_URL = config.get('QUEUE_URL');

const domain = async ({ eventMeta }) => {
  const sqsSendParams = {
    QueueUrl: QUEUE_URL,
    MessageBody: 'Hello ebased',
  };
  await sqs.send(sqsSendParams, eventMeta);

  return { body: 'Ok' }
}

module.exports.handler = async (command, context) => {
  return commandMapper({ command, context }, inputMode, domain, outputMode);
}