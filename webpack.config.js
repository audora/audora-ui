module.exports = {
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"] },
      { test: /\.svg$/, loader: 'svg-inline-loader' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },      
    ]
  }
}