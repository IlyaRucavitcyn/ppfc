var precss       = require('precss'),
    autoprefixer = require('autoprefixer'),
    spyImport = require('postcss-import');


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
        },{
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }]
    },
    postcss: function (webpack) {
        return [spyImport({
            addDependencyTo: webpack
        }),precss, autoprefixer];
    },
    devServer: {
        host: 'localhost',
        port: 3000
    },

    devtool: "cheap-inline-module-source-map"
};
