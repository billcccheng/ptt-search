let path = require('path');
let HtmlWebPackPlugin = require('html-webpack-plugin');

let configs = {
    entry: './app/index.js',
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [new HtmlWebPackPlugin({
        template: 'app/index.html'
    })],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'index_bundle.js'
    },
}

module.exports = configs;
