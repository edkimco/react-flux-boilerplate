const env = process.env['NODE_ENV'] || 'development'

const config = {
  port: 80,
  ssl: {
    pfx: '',
    passphrase: ''
  }
}

if (env === 'production') {
}

module.exports = config
