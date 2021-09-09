import jsLoader from '../babel/jsLoader'
import plugin from '../babel/plugin'
const path = require('path')
export default (config) => {
  const {
    entry = './index.js',
    mode = 'development'
  } = config
  return {
    entry,
    mode,
    output: {
      path: path.join(process.cwd(), 'dist'),   // 输出路径
      filename: 'bundle.[contenthash].js'
    },
    target: 'web',
    stats: "errors-only",
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue', '.css'],
    },
    module: {
      rules: [...jsLoader()]
    },
    plugins: [...plugin(config)]
  }

}