import Webpack from 'webpack'
import webpackConfig from '../webpack/config.prod'
import { UConfig } from '../types/index'
export default (config: UConfig) => {
  const compiler = Webpack(webpackConfig(config))
  compiler.run((err, status) => {
    if (err) {
      console.log(err)
      process.exit(1)
    }
  })
}