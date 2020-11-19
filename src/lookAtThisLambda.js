// Este es el helper que se encarga de parsear los datos segun el inputMode y llamar al domain
const { commandMapper } = require('ebased/handler');

//agrego la linea del sqs
const config = require('ebased/util/config');
const sqs = require('ebased/service/downstream/sqs');
const CREATE_DEPOSIT_QUEUE = config.get('QUEUE_URL');

// Nuestro input viene de API Gateway -> importamos input/commandApi
const inputMode = require('ebased/handler/input/commandApi');

// Nuestro lambda responde a API Gateway -> importamos output/commandApi
const outputMode = require('ebased/handler/output/commandApi');

const domain = async ({commandPayload, commandMeta}) => {
  //dejo el primer parametro por que si no lo toma
  const sqsSendParams = {
    QueueUrl: CREATE_DEPOSIT_QUEUE,
    MessageBody: "Test",
  };
  await sqs.send(sqsSendParams, commandMeta);
  
  return { body: 'OK' };
};

module.exports.handler = async (command, context) => {
  return commandMapper({ command, context }, inputMode, domain, outputMode);
}