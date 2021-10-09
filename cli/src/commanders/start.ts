import Webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import path from 'path'
import getDevConfig from '../webpack/config.dev'
import { UConfig } from '../types/index'

export default (config: UConfig) => {
  const { port, cwd, mock } = config
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
    },
    onBeforeSetupMiddleware: function (devServer) {
      if (devServer) {
        devServer.app.use((req, res, next) => {
          // 对于ajax请求，可以设置mock
          if (mock && req.headers['x-requested-with']) {  //请求头中增加 x-requested-with  早期ajax请求会自动加， 新的fetch没有了，需要手动加
            const filePath = path.join(cwd, `/mock/${req._parsedUrl.path}.json`)
            let mockData = {}
            try {
              mockData = require(filePath)
            } catch (err) {
              mockData = { message: `${filePath} is not a file` }
            }
            res.set('Content-Type', 'application/json')
            res.send(mockData)
          }
          next()
        })
      }
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