const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.TEST': JSON.stringify(process.env.TEST)
    })
  ]
};
