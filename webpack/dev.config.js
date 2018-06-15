const merge = require('webpack-merge')
const config = require('./config')

module.exports = merge.smart(config, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
})
