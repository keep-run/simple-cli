import jsLoader from '../babel/jsLoader'
import plugin from '../babel/plugin'
const path = require('path')
export default (props) => {
  const {
    entry = './index.js'
  } = props
  console.log('-----wzc---path--', path.join(process.cwd(), 'dist'))
  return {
    entry,
    output: {
      path: path.join(process.cwd(), 'dist'),   // 输出路径
      filename: 'bundle.[hash].js'
    },
    stats: "errors-only",
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
    },
    module: {
      rules: [...jsLoader()]
    },
    plugins: [...plugin()]
  }

}