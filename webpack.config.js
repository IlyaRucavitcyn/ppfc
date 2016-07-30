var precss       = require('precss'),
    autoprefixer = require('autoprefixer');


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
            loader: 'style-loader!css-loader!postcss-loader'
        }]
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
    devServer: {
        host: 'localhost',
        port: 3000
    },

    devtool: "cheap-inline-module-source-map"
};
