"use strict"

// https://www.so.com/s?ie=utf-8&fr=so.com&src=home_so.com&q=%E5%9C%A3%E5%A2%9F
function getParam(url) {
  const reg = /[?&]([^=&?%]+)=[^=&?]+/g
  const query = url.match(reg)
  let o = {}
  query && query.forEach(item => {
    let tmp = item.substr(1).split('=')
    o[tmp[0]] = tmp[1]
  })
  console.log(`o: `, o)
  return o
}

// let url = 'https://www.so.com/s?ie=utf-8&fr=so.com&src=home_so.com&q=%E5%9C%A3%E5%A2%9F'
// let url = 'https://www.so.com/s'
// let url = 'https://cn.vuejs.org/v2/api/#optionMergeStrategies?a=123&b=000'
let url = 'http:www.baidu.com/index?name=username&age=27&pwd=zbc|123@&likes=lol&likes=beautifull girl&$id=main#flag=66'
console.log(`res: `, getParam(url))


