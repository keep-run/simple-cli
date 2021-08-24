import Webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import path from 'path'
import getDevConfig from '../webpack/config.dev.js'
export default (pkg) => {
  const { port = 8000 } = pkg
  const host = '0.0.0.0'
  const webpackConfig = getDevConfig(pkg)
  const devServer = {
    port,
    host,
    open: true,
    compress: true,
    // contentBase: path.join(__dirname, 'dist'),
    // stats: {
    //   assets: true, // 输出打包的资源信息
    //   modules: false,
    //   version: true,
    //   providedExports: true,
    //   children: false,
    // },
  }

  // const complier = Webpack(webpackConfig)
  // const server = new WebpackDevServer(complier, devServer)

  // server.listen(port, host, () => {
  //   console.log(`start server on http://localhost:${port}`)
  // })
}