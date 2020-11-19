const { DownstreamEvent } = require('ebased/schema/downstreamEvent');

class QueueMessage extends DownstreamEvent {
  constructor(payload, meta) {
    super({
      payload: payload || 'No hay payload',
      meta: meta,
      schema: {
        message: { type: String, required: true },
      },
    })
  }
}

module.exports = { QueueMessage };