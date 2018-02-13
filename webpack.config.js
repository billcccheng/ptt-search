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
          presets: ['react', 'env', 'es2015'],
          plugins: ['transform-object-rest-spread', 'transform-decorators-legacy', 'transform-class-properties']
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      favicon: './favicon.ico'
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'index_bundle.js'
  },
}

module.exports = configs;

