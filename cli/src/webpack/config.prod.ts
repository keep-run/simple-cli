import commonConfig from './config.com.js'
import { UConfig } from '../types/index'
import { Configuration } from 'webpack'
export default (config: UConfig): Configuration => {
  return commonConfig({ ...config, mode: 'production' })
}