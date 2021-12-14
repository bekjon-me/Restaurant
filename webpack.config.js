const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    plugins: [
    new HtmlwebpackPlugin({
        title: "RestaurantPage"
    })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ],
    },
}
