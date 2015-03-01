var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    'rc-calendar/index': ['./example/rc-calendar/index.js'],
    'react-router/index': ['./example/react-router/index.js'],
    'load-on-demand/index': ['./example/load-on-demand/index.js']
  },

  output: {
    path: path.join(__dirname, 'build/example'),
    filename: "[name].js",
    publicPath: "/build/example/",
    chunkFilename: "[name].js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'jsx-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader"
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
    jquery: "jQuery",
    "react-router": "window.ReactRouter",
    react: "React"
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: "production"
    }),
    new ExtractTextPlugin("[name].css", {
      disable: false,
      allChunks: true
    }),
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false
    //  }
    //})
  ]
};
