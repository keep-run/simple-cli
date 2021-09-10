import Webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import path from 'path'
import getDevConfig from '../webpack/config.dev.js'
export default (config) => {
  const { port, cwd } = config
  const host = '0.0.0.0'
  const webpackConfig = getDevConfig(config)
  const devServer = {
    port,
    host,
    open: true,
    compress: true,
    hot: true,
    static: {
      directory: path.join(cwd, 'dist'),
    }
  }

  const complier = Webpack(webpackConfig)
  const server = new WebpackDevServer(devServer, complier)

  server.startCallback((err) => {
    if (err) {
      console.log(`error : `, err)
    }
  })
}