var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var assign = require('object-assign');
module.exports = assign({}, require('./webpack.common.config'), {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": "'production'"
    }),
    new ExtractTextPlugin("[name].css", {
      disable: false,
      allChunks: true
    })
  ]
});
