/**
 *
 * Created by showzyl on 2018/8/24
 *
 *  [ 、 ( 、 + 、 -
 *
 **/

'use strict'

/**
 * 冒泡排序
 * @param arr
 * @returns {*}
 */
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    console.log(`i: `, i)
    console.log(`=====================`)
    for (let j = 1; j <= i; j++) {
      console.log(`j: `, j)
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j)
      }
    }
    console.log(`=====================`)
  }
  return arr
}

function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

console.log(`bubbleSort: `, bubbleSort([2, -10, -1, 5]))




















