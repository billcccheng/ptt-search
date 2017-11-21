const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const configs = {
  entry: './index.js',
  module: {
    rules: [
      { 
        test: /\.(js)$/, 
        loader: 'babel-loader', 
        query:{
         presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ],
  },
  plugins: [new HtmlWebPackPlugin({
      template: './index.html'
  })],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'index_bundle.js'
  },
}

module.exports = configs;

