"use strict"

// http://scriptoj.mangojuice.top/problems/18

function commafy (num) {
  let tmp = String(num).split('.')
  let prefix = String(tmp[0]).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  if(tmp[1]) {
    return prefix + '.' + tmp[1]
  }
  return prefix
}
