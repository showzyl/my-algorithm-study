/**
 *
 * Created by showzyl on 2018/8/24
 *
 *  [ 、 ( 、 + 、 -
 *
 **/

'use strict'

/**
 * `有序数组`的二分查找
 * @param arr
 * @param x
 * @returns {number}
 */
function binarySearch(arr, x) {
  let l = 0,
    r = arr.length - 1,
    guess

  while (l <= r) {
    guess = Math.floor((l + r) / 2)
    if (arr[guess] === x) {
      return guess
    } else if (arr[guess] > x) {
      r = guess - 1
    } else {
      l = guess + 1
    }
  }

  return -1
}

console.log(`binarySearch: `, binarySearch([-10, -2, 2, 4, 5], 5))



/**
 * `无序数组`的二分查找
 * @param arr
 * @param x
 * @returns {number}
 */


