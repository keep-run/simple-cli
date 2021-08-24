import commonConfig from './config.com.js'

export default (pkg) => {
  return {
    mode: 'development',          //设置开发模式
    ...commonConfig(pkg)          //各个模式下的公共配置
  }
}