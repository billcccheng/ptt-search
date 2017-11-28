const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const configs = {
  entry: './index.js',
  module: {
    rules: [
      { 
        test: /\.(js)$/, 
        exclude: /node_modules(?!\/webpack-dev-server)/,
        loader: 'babel-loader', 
        query:{
          presets: ['react', 'env'],
          plugins: ['transform-object-rest-spread', 'transform-decorators-legacy']
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({template: './index.html'}),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'index_bundle.js'
  },
}

module.exports = configs;

