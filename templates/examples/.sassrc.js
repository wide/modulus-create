const path = require('path')

module.exports = {
  // sass alias
  alias: {
    '~/': path.resolve(__dirname, 'src/assets/scss/'),
    '@/': path.resolve(__dirname, 'src/components/'),
    '!node_modules/': path.resolve(__dirname, 'node_modules/')
  }
}