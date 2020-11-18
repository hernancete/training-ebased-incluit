// Este es el helper que se encarga de parsear los datos segun el inputMode y llamar al domain
const { commandMapper } = require('ebased/handler');

// Nuestro input viene de API Gateway -> importamos input/commandApi
const inputMode = require('ebased/handler/input/commandApi');

// Nuestro lambda responde a API Gateway -> importamos output/commandApi
const outputMode = require('ebased/handler/output/commandApi');

const sqs = require('ebased/service/downstream/sqs');

const config = require('ebased/util/config');
const CREATE_DEPOSIT_QUEUE = config.get('QUEUE_URL');

const domain = async ({commandMeta}) => {
  const sqsSendParams  = {
    QueueUrl: CREATE_DEPOSIT_QUEUE,
    MessageBody: 'blabla bla',
  };
  await sqs.send(sqsSendParams , commandMeta);
  return { body: 'ok' };
};


module.exports.handler = async (command, context) => {
  return commandMapper({ command, context }, inputMode, domain, outputMode);
}