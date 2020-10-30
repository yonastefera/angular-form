const path = require("path");

const rootPath = path.resolve(__dirname, '..');
const buildPathDev = path.resolve(rootPath, 'dist');
const srcPath = path.resolve(rootPath, "src");
const appPath = path.resolve(rootPath, "src", "app");
const stylesPath = path.resolve(rootPath, "src", "styles");
const nodeModulesPath = path.resolve(rootPath, "node_modules");

module.exports = {
    rootPath,
    buildPathDev,
    srcPath,
    appPath,
    stylesPath,
    nodeModulesPath
};