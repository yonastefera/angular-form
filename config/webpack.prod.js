const merge = require('webpack-merge');

const common = require('./webpack.common');
const loaders = require('./webpack.loaders');

const prod = {

};

module.exports = merge(common, loaders, prod);