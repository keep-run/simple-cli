
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

// require.resolve 找到当前物理目录下的对应模块的绝对地址， 返回的是一个字符串
// require返回的是对应木块的导出对象
// MiniCssExtractPlugin.loader 对应的就是loader的绝对路径字符串

export default () => {
  return [
    // babel-loader转义js  https://webpack.docschina.org/loaders/babel-loader/#root
    {
      test: /\.(m?js|jsx)$/,       //处理js or jsx
      exclude: /(node_modules)/,
      use: {
        loader: require.resolve('babel-loader'),     // require.resolve很重要,在当前项目的node_modules中寻找对应的模块
        options: {
          presets: [
            require.resolve('@babel/preset-env'),
            require.resolve('@babel/preset-react')     // 支持react
          ]
        }
      }
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      exclude: /node_modules/,
      use: [require.resolve('file-loader')],  //支持图片资源
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [MiniCssExtractPlugin.loader, require.resolve('css-loader')],
    },
    {
      test: /\.styl$/,
      exclude: /node_modules/,
      use: [MiniCssExtractPlugin.loader, require.resolve('css-loader'), require.resolve('stylus-loader')],   // 支持stylus
    },
    {
      test: /\.less$/,
      exclude: /node_modules/,
      use: [MiniCssExtractPlugin.loader, require.resolve('css-loader'), require.resolve('less-loader')],   // 支持stylus
    }
  ]
}

