import commonConfig from './config.com.js'

export default (pkg) => {
  return commonConfig({ ...pkg, mode: 'production' })
}