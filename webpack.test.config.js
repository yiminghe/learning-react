var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var assign = require('object-assign');
var common = require('./webpack.common.config');
common.module.postLoaders = [{ // << add subject as webpack's postloader
  test: /\.js$/,
  exclude: /(test|node_modules)\//,
  loader: 'node-jscover-webpack'
}];

common.entry['test/react-router/index-spec'] = ['./test/react-router/index-spec.js'];

module.exports = assign({}, common, {
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
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
