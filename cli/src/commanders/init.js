
import fs from 'fs-extra'
import path from 'path'



export default (config) => {
  const templatePath = path.join(__dirname, '../../templates/react')
  const targetPath = config.cwd;
  // 复制文件到指定目录
  fs.copy(templatePath, targetPath, (err) => {
    if (err) {
      console.log('error:', err)
    }
  })
}