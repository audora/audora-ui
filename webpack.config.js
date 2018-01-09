module.exports = {
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"] }
    ]
  }
}