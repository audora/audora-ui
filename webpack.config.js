const path = require('path');
const webpack = require('webpack');

const PROD = process.env.NODE_ENV === 'production';

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: { screw_ie8: true, warnings: false },
    mangle: { screw_ie8: true },
    output: { comments: false, screw_ie8: true },
  }),
];

const plugins = PROD ? defaultPlugins.concat(prodPlugins) : defaultPlugins;

module.exports = {
  module: {
    loaders: [
      { exclude: /node_modules/, loaders: 'babel-loader', test: /\.(js|jsx)$/ },
      { exclude: /node_modules/, loader: 'svg-inline-loader', test: /\.svg$/ },
    ],
  },
  entry: {
    main: './src/index.js',
  },
  plugins,
  output: {
    filename: 'audora-ui.js',
    library: 'AudoraUI',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
  },
  externals: {
    'prop-types': 'prop-types',
    'react-dom': 'react-dom',
    react: 'react',
    'lodash.merge': 'lodash.merge',
    'styled-components': 'styled-components',
    color: 'color',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
  },
  devtool: PROD ? 'cheap-hidden-source-map' : 'cheap-module-eval-source-map',
};
