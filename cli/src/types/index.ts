
import { Configuration } from 'webpack'
export interface IConfig {
  entry: string,
  port: number,
  cwd: string,
  mock?: boolean,
  mode?: "development" | "production" | "none"
}
export interface ArgsConfig {
  react?: boolean,
  typeScript?: boolean
}

export type UConfig = ArgsConfig & IConfig


export interface webpackConfig {
  (config: UConfig): Configuration
}