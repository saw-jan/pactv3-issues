const axios = require('axios')

const url = 'http://127.0.0.1:1234'
const authEncoded = Buffer.from('admin:admin').toString('base64')

class client {
  basicAuth = {
    Authorization: `Basic ${authEncoded}`,
  }

  getFileInfo() {
    return axios.get(`${url}/fileinfo`, {
      headers: {
        ...this.basicAuth,
      },
    })
  }

  getDavFileInfo() {
    return axios.get(`${url}/dav/fileinfo`, {
      headers: {
        ...this.basicAuth,
      },
    })
  }

  getApi() {
    return axios.get(`${url}/api`, {
      headers: {
        ...this.basicAuth,
      },
    })
  }
}
module.exports = client
