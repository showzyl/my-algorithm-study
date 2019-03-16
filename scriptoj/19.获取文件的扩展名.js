// http://scriptoj.mangojuice.top/problems/19
// 完成 extname 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。
// 例如，输入 emoji.png，返回 .png。

const extname = (filename) => {
  if (filename.lastIndexOf('.') <= 0) return ''
  return filename.substr(filename.lastIndexOf('.'))
}

console.log(`res: `, extname('.hello'))




