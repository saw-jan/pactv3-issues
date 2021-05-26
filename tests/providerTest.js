describe('Pact Verification', () => {
  const { VerifierV3 } = require('@pact-foundation/pact/v3')
  const path = require('path')
  const chai = require('chai')
  const chaiAsPromised = require('chai-as-promised')
  chai.use(chaiAsPromised)

  const providerBaseUrl = 'http://localhost:9000'

  it('verifies the provider', () => {
    const opts = {
      provider: 'server',
      providerBaseUrl,
      disableSSLVerification: true,
      callbackTimeout: 5000,
    }
    opts.pactUrls = [
      path.resolve(process.cwd(), 'tests', 'pacts', 'client-server.json'),
    ]

    return new VerifierV3(opts)
      .verifyProvider()
      .then((output) => {
        console.log('Pact Verification Complete!')
        console.log('Result:', output)
      })
      .catch(function (error) {
        console.log(error)
        chai.assert.fail(error)
      })
  }, 10000)
})
