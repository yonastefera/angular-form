const path = require("path");
const merge = require('webpack-merge');

const common = require('./webpack.common');
const loaders = require('./webpack.loaders');

const variables =  require('./variables');

const dev = {
    devtool: "source-map",
    devServer: {
        contentBase: variables.buildPathDev,
        historyApiFallback: true,
        compress: true,
        quiet: false,
        headers: {"X-Custom-Header": "yes"},
        stats: {colors: true},
        port: 5000,
        inline: true
    }
};

module.exports = merge(common, loaders, dev);