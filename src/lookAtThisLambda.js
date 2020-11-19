// Este es el helper que se encarga de parsear los datos segun el inputMode y llamar al domain
const { commandMapper } = require('ebased/handler');


// Nuestro input viene de API Gateway -> importamos input/commandApi
const inputMode = require('ebased/handler/input/commandApi');

// Nuestro lambda responde a API Gateway -> importamos output/commandApi
const outputMode = require('ebased/handler/output/commandApi');

const domain = require('./domain/queueLogger');

module.exports.handler = async (command, context) => {
  return commandMapper({ command, context }, inputMode, domain, outputMode);
}