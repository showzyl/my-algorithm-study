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



let a = [-1, 20, 5, 4, 10, 100, 1]
console.log(`bSearch(target, arr): `, bSearch(1, a))

/**
 * 无序的二分查找。返回true/false
 * @param target
 * @param arr
 * @returns {boolean}
 */
function bSearch(target, arr) {
  while (arr.length > 0) {
    //使用快速排序。以mid为中心划分大小，左边小，右边大。
    let left = []
    let right = []
    //选择第一个元素作为基准元素(基准元素可以为任意一个元素)
    let pivot = arr[0]
    //由于取了第一个元素，所以从第二个元素开始循环
    for (let i = 1; i < arr.length; i++) {
      let item = arr[i]
      //大于基准的放右边，小于基准的放左边
      item > pivot ? right.push(item) : left.push(item)
    }
    console.log(`left: `, left)
    console.log(`right: `, right)
    // 得到经过排序的新数组
    if (target === pivot) {
      return true
    } else if (target > pivot) {
      arr = right
    } else {
      arr = left
    }
    console.log(`=================================================`)
  }
  return false;
}

