
import { spawnSync } from 'child_process'   // node内置模块，可以执行unix命令
import fs from 'fs-extra'
import path from 'path'



export default (config) => {
  const templatePath = path.join(__dirname, '../../templates/react')
  const targetPath = config.cwd;
  // 复制文件到指定目录
  fs.copy(templatePath, targetPath, (err) => {
    console.log('error:', err)
  })
}