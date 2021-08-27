import ProgressPlugin from "progress-bar-webpack-plugin"
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default () => {
  return [
    new CleanWebpackPlugin(),   // 清空output目录
    new HtmlWebpackPlugin(),    // 自动生成html模板，并引入打包生成的所有js文件
    new ProgressPlugin()       // 输出打包进度信息
  ]
}