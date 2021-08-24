"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevServer = _interopRequireDefault(require("webpack-dev-server"));

var _path = _interopRequireDefault(require("path"));

var _configDev = _interopRequireDefault(require("../webpack/config.dev.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(pkg) {
  var _pkg$port = pkg.port,
      port = _pkg$port === void 0 ? 8000 : _pkg$port;
  var host = '0.0.0.0';
  var webpackConfig = (0, _configDev["default"])(pkg);
  var devServer = {
    port: port,
    host: host,
    open: true,
    compress: true // contentBase: path.join(__dirname, 'dist'),
    // stats: {
    //   assets: true, // 输出打包的资源信息
    //   modules: false,
    //   version: true,
    //   providedExports: true,
    //   children: false,
    // },

  }; // const complier = Webpack(webpackConfig)
  // const server = new WebpackDevServer(complier, devServer)
  // server.listen(port, host, () => {
  //   console.log(`start server on http://localhost:${port}`)
  // })
};

exports["default"] = _default;