const merge = require("webpack-merge");
const loaders = require('./webpack.loaders');

module.exports = merge([
    loaders
    ]
);