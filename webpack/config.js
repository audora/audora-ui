module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'audora-ui.js',
    library: 'AudoraUI',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.svg$/, exclude: /node_modules/, use: ['svg-inline-loader'] },
    ],
  },
}
