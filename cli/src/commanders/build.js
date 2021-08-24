import Webpack from 'webpack'
import webpackConfig from '../webpack/config.prod.js'
export default pkg => {
  const compiler = Webpack(webpackConfig(pkg))
  compiler.run((err, status) => {
    // console.log(status)
    if (err) {
      console.log('build err -------------   XXXXXXXXXXXXXXXXXXX -----------err')
      console.log(err)
      process.exit(1)
    }
  })
}