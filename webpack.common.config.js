var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  devtool: "#source-map",

  entry: {
    'example/code-share/index': ['./example/code-share/index.js'],
    'example/react-art/index': ['./example/react-art/index.js'],
    'example/svg/index': ['./example/svg/index.js'],
    'example/key-lifecycle/index': ['./example/key-lifecycle/index.js'],
    'example/css-transition-group/index': ['./example/css-transition-group/index.js'],
    'example/flux/index': ['./example/flux/index.js'],
    'example/rc-calendar/index': ['./example/rc-calendar/index.js'],
    'example/react-router/index': ['./example/react-router/index.js'],
    'example/load-on-demand/index': ['./example/load-on-demand/index.js']
  },

  output: {
    path: path.join(__dirname, 'build'),
    publicPath:'/build/',
    filename: "[name].js",
    chunkFilename: "[name].js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'jsx-loader?harmony'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap'
        )
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!' +
          'less?sourceMap'
        )
      },
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"}
    ]
  },

  externals: {
    jquery: "jQuery"
  }
};
