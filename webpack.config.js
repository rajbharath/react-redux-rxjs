const path = require('path');

module.exports = {
  entry: './app/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3400
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /(\.js$)|(\.jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};