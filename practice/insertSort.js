/**
 *
 * Created by showzyl on 2018/8/23
 *
 *  [ 、 ( 、 + 、 -
 *
 *
 **/

'use strict'

/**
 * 插入排序
 * @param arr
 */

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    insert(arr, i, arr[i])
  }
  return arr
}

function insert(arr, i, x) {
  // p 指针指向下一个需要比较的元素
  // p + 1 指向空位
  let p = i - 1
  while (p >= 0 && arr[p] > x) {
    arr[p + 1] = arr[p]
    p--
  }
  arr[p + 1] = x
}

// console.log(`insertSort: `, insertSort([2, -10, -1, -11]))

module.exports = {
  insertSort
}











