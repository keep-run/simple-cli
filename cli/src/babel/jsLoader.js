export default () => {
  return [
    // babel-loader转义js  https://webpack.docschina.org/loaders/babel-loader/#root
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: require.resolve('babel-loader'),     // require.resolve很重要,在当前项目的node_modules中寻找对应的模块
        options: {
          presets: [require.resolve('@babel/preset-env')]
        }
      }
    }
  ]
}