import ProgressPlugin from "progress-bar-webpack-plugin"
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default (config) => {
  return [
    new CleanWebpackPlugin(),   // 清空output目录
    new HtmlWebpackPlugin(),    // 自动生成html模板，并引入打包生成的所有js文件
    new ProgressPlugin(),       // 输出打包进度信息
    new MiniCssExtractPlugin({
      filename: config.mode === 'development' ? 'bundle.css' : 'bundle.[contenthash].css'     //输出css文件名称,  开发环境，文件名不要带hash,带hash会做持久缓存，影响开发热更。  生产环境需要带hash，用于做缓存
    }),
  ]
}