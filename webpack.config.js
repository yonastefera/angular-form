const webpackConfig = require('./config/index');

switch (process.env.WEBPACK_MODE) {
    case 'prod':
        module.exports = webpackConfig.webpackProd;
        break;
    case 'dev':
        module.exports = webpackConfig.webpackDev;
        break;
    case 'test':
    default:
        module.exports = webpackConfig.webpackTest;
}