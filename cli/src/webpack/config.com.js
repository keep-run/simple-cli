import jsLoader from '../babel/jsLoader'
import plugin from '../babel/plugin'
const path = require('path')
export default (props) => {
  const {
    entry = './index.js'
  } = props
  return {
    entry,
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
    plugins: [...plugin()]
  }

}