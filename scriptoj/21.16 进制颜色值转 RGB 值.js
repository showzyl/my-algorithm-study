// http://scriptoj.mangojuice.top/problems/21

"use strict"

// 完成函数 hexToRGB，它的作用将 16 进制颜色值转换成 RGB 值：
// hexToRGB('#F0F0F0') // => rgb(240, 240, 240)
// hexToRGB('#9fc') // => rgb(153, 255, 204)
// hexToRGB('无效颜色') // => null

const hexToRGB = function(hex) {
  const regex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  if(!regex.test(hex)) return null
  let rgb = []
  // 去除前缀 # 号
  hex = hex.substr(1)
  // 处理 "#abc" 成 "#aabbcc"
  if (hex.length === 3) hex = hex.replace(/(.)/g, '$1$1')
  hex.replace(/../g, function(color){
    console.log(`color: `, color)
    rgb.push(parseInt(color, 0x10)) // 按16进制将字符串转换为数字
  })
  return `rgb(${rgb.join(', ')})`
}

// console.log(`res: `, hexToRGB('#F0F0F0'))
// console.log(`res2: `, hexToRGB('#9fc'))

/**
 * @return {string}
 */
const RGBToHex = function(rgb) {
  const regx = /^rgb\(\d+(,\s*\d+){2}\)$/g;
  if(!regx.test(rgb)) return null;
  // rgb(x, y, z)
  const color = rgb.toString().match(/\d+/g); // 把 x,y,z 推送到 color 数组里
  let hex = "#";
  console.log(`color: `, color)
  for (let i = 0; i < 3; i++) {
    // 'Number.toString(16)' 是JS默认能实现转换成16进制数的方法.
    // 'color[i]' 是数组，要转换成字符串.
    // 如果结果是一位数，就在前面补零。例如： A变成0A
    hex += ("0" + Number(color[i]).toString(0x10)).slice(-2);
  }
  return hex
};

console.log(`res1: `, RGBToHex('rgb(240, 240, 240)'))
console.log(`res2: `, RGBToHex('rgb(153, 255, 204)'))
console.log(`res3: `, RGBToHex('rgb(108, 74, 7)'))

// console.log(
//   RGBToHex('rgb(240, 240, 240)'), // #F0F0F0
//   RGBToHex('rgb(153, 255, 204)'), // #99ffcc
//   RGBToHex('rgb(108, 74, 7)'), // #6c4A07
//   RGBToHex('无效颜色'),
// )




// const RGBToHex = (rgb) => {
//   const regx = /^rgb\(\d+(,\s*\d+){2}\)$/g;
//   if(!regx.test(rgb)) return null;
//   return rgb.slice()
//     .match(/\d+/g)
//     .reduce((p,c) => p.concat(
//       Number(c).toString(16) // Number.toString(16) 可以转换成16进制的字符串
//         .replace(/^[0-9a-fA-F](?=$)/,'0$&') // 如果结果是1位数，就在前面补0
//     ), ['#']).join('');
// }









