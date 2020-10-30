const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const variables = require('./variables');

module.exports = {
    resolve: {
        extensions: [".js", ".ts", ".css"],
        modules: [variables.srcPath, variables.nodeModulesPath]
    },
    module: {
        loaders: [{
            test: /\.ts/,
            loaders: ['awesome-typescript-loader', 'angular-router-loader', 'angular2-template-loader?keepUrl=true'],
        }, {
            /*for templates included in app*/
            test: /\.html/,
            loader: 'file-loader?name=templates/[hash].[ext]',
            include: [
                variables.srcPath
            ]
        }, {
            /*for styles included in app*/
            test: /\.css/,
            loader: 'file-loader?name=styles/[hash].[ext]',
            include: [
                variables.srcPath
            ],
            exclude: [
                variables.stylesPath
            ]
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            }),
            include: [
                variables.stylesPath
            ]
        }, {
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }]
    }
};