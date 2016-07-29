var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./main.js'],
    output: {
        path: __dirname + '/js',
        filename: 'bundle.js',
        publicPath: '/js'
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    devServer: {
        host: 'localhost',
        port: 3000
    },

    devtool: "cheap-inline-module-source-map"
};
