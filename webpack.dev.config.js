var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var assign = require('object.assign');
module.exports = assign({},require('./webpack.common.config'),{
  output: {
    path: path.join(__dirname, 'build'),
    publicPath:'/',
    filename: "[name].js",
    chunkFilename: "[name].js"
  },
  plugins: [
    new ExtractTextPlugin("[name].css", {
      disable: false,
      allChunks: true
    })
  ]
});
