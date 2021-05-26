const express = require('express')
const app = express()
const port = 9000
const xml = require('xml2js')

const xmlBuilder = new xml.Builder({
  renderOpts: { pretty: true },
})

app.get('/fileinfo', (req, res) => {
  const data = xmlBuilder.buildObject({
    multistatus: {
      response: {
        href: 'http://localhost:9000',
        prop: {
          id: '101',
          path: '/text101.txt',
          created_at: '2020-07-10 00:00:00 GMT',
        },
      },
    },
  })
  res.append('Content-Type', 'application/xml')
  res.status(200).send(data)
})

app.get('/dav/fileinfo', (req, res) => {
  const data = xmlBuilder.buildObject({
    'd:multistatus': {
      $: {
        'xmlns:d': 'DAV:',
      },
      'd:response': {
        'd:href': 'http://localhost:9000',
        'd:prop': {
          'd:id': '101',
          'd:path': '/text101.txt',
          'd:created_at': '2020-07-10 00:00:00 GMT',
        },
      },
    },
  })
  res.append('Content-Type', 'application/xml')
  res.status(200).send(data)
})

app.get('/api', (req, res) => {
  res.append('Content-Type', 'application/json')
  res.append('Access-Control-Expose-Headers', [
    'Content-Length',
    'Content-Type',
    'Expires',
  ])
  res.status(200).end()
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
