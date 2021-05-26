import { PactV3 } from '@pact-foundation/pact/v3'
const path = require('path')

const provider = new PactV3({
  consumer: 'client',
  provider: 'server',
  port: 1234,
  dir: path.resolve(__dirname, 'pacts'),
  log: path.resolve(__dirname, 'logs', 'pact.log'),
  logLevel: 'debug',
})

module.exports = {
  provider,
}
