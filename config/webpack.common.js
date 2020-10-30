const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const variables =  require('./variables');

module.exports = {
    entry: {
        app: `${variables.srcPath}/main.ts`,
        styles: `${variables.stylesPath}/index.css`,
        vendor: [
            'core-js',
            'zone.js/dist/zone',
            'zone.js/dist/long-stack-trace-zone',
            '@angular/core',
            '@angular/platform-browser-dynamic',
            '@angular/platform-browser',
            '@angular/common',
            "@angular/compiler",
            "@angular/forms",
            "@angular/router",
            "@angular/animations",
            "rxjs",
        ],
    },
    output: {
        filename: "[name].js",
        chunkFilename: '[name]-chunk.js',
        path: variables.buildPathDev
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Angular form',
            template: `${variables.rootPath}/index.html`,
            chunks: ['app', 'vendor', 'styles'],
            hash: true
        }),
        new webpack.DefinePlugin({
            DEV_MODE: JSON.stringify(process.env.WEBPACK_MODE),
        }),
        /*clean build path*/
        new CleanWebpackPlugin('dist', {
            root: variables.rootPath,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: 2
        }),
        new ContextReplacementPlugin(
            /(.+)?angular(\\|\/)core(.+)?/,
            variables.srcPath
        ),
        new ExtractTextPlugin("styles.css")
    ]
};