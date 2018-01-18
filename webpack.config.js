const webpack = require('webpack')
module.exports = {
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'file-loader?name=[name].[ext]',
        test: /\.(jpe?g|png|gif)$/i
      },
      {
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        test: /\.js$/
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ]
  },
  entry: {
    main: './src/index.js'
  },
  output: {
    library: 'Snacks',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'radium': 'radium',
    'prop-types': 'prop-types'
  },
  devtool: 'cheap-module-eval-source-map'
}