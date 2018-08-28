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
  let p = i - 1 // 定义一个指针
  while (p >= 0 && arr[p] > x) {
    arr[p + 1] = arr[p]
    p--
  }
  console.log(`p: `, p)
  arr[p + 1] = x
}

console.log(`insertSort([]): `, insertSort([2, -10, -1, 5]))












