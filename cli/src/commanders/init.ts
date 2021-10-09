
import fs from 'fs-extra'
import path from 'path'
import { UConfig } from '../types/index'


export default (config: UConfig) => {
  const templatePath = path.join(__dirname, '../../templates/react')
  const targetPath = config.cwd;
  // 复制文件到指定目录
  fs.copy(templatePath, targetPath, (err) => {
    if (err) {
      console.log('error:', err)
    }
  })
}