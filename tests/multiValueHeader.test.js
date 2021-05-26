const { provider } = require('./helpers/pactHelper')

const Client = require('../client/client')
const client = new Client()

describe('request', () => {
  // interactions
  const aGETInfoInteraction = (provider) => {
    return provider
      .uponReceiving('a GET request')
      .withRequest({
        method: 'GET',
        path: '/api',
        headers: client.basicAuth,
      })
      .willRespondWith({
        status: 200,
        headers: {
          'content-type': 'application/json',
          'Access-Control-Expose-Headers':
            'Content-Length, Content-Type, Expires',
        },
      })
  }

  it('get request', async () => {
    await aGETInfoInteraction(provider)
    return provider.executeTest(() => {
      return client
        .getApi()
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  })
})
