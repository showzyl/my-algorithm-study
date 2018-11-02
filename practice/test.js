/**
 *
 * Created by showzyl on 2018/8/25
 *
 *  [ 、 ( 、 + 、 -
 *
 **/

'use strict'

// 5. 2018年8月17日题目
// 写一个函数，将字符串除了最后的四位，其他都变成#
//
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""


// function maskify(str) {
//   if (str.length <= 4) return str
//   let sRes = ``
//   for (let i = 0; i < str.length; i++) {
//     if (i >= str.length - 4) {
//       sRes += str[i]
//     } else {
//       sRes += `#`
//     }
//   }
//   return sRes
// }

// function maskify(str) {
//   if (str.length <= 4) return str
//   return str.split('').map((item, i) => {
//     if (i >= str.length - 4) {
//       return item
//     } else {
//       return 'x'
//     }
//   }).join('')
// }
//
// // 最好的思路是字符串截取
// console.log(`maskify(""): `, maskify("4556364607935616"))

// 2018年8月20日题目
// 写一个函数solution，求比一个数字n小的所有3和5的整数倍数和。
// 比如10，比它小的3、5整数倍数有： 3,5,6,9， 所以和为23。
// 比如16， 比它小的3，5整数倍数有： 3,5,6,9,10,12,15，所以和为60（15只计算1次）

// function solution(n) {
//   if(n < 0) return 0
//   let n1 = parseInt((n - 1) / 3)
//   let n2 = parseInt((n - 1) / 5)
//   let aTmp = []
//   // console.log(`n1: `, n1)
//   // console.log(`n2: `, n2)
//   while (n1) {
//     aTmp.push(3 * n1)
//     n1--
//   }
//
//   while (n2) {
//     if (aTmp.indexOf(5 * n2)) aTmp.push(5 * n2)
//     n2--
//   }
//
//   console.log(`aTmp: `, aTmp)
//   return aTmp.reduce((pre, cur) => pre + cur)
// }


// function solution(n) {
//   if(n < 0) return 0
//   let aTmp = []
//   while (n) {
//     n--
//     aTmp.push(n)
//   }
//   return aTmp.filter(item => {
//     return (item % 3 === 0) || (item % 5 === 0)
//   }).reduce((pre, cur) => pre + cur)
// }
//
// console.log(`solution(10): `, solution(16))


// 在一个数组中大部分都是奇数(或偶数），只有1个可能是偶数（或奇数），写一个函数special找到这个不一样的值。
//
// special( [2, 4, 0, 100, 4, 11, 2602, 36] ) // 11 唯一的奇数
//
// special( [160, 3, 1719, 19, 11, 13, -21] ) // 160 唯一的偶数

// function special(arr) {
//   let o = {
//     odd: 0,
//     even: 0
//   }
//   arr.reduce((pre, cur) => {
//     if (cur % 2 === 0)
//       o['even']++
//     else
//       o['odd']++
//   }, o)
//
//   return o['odd'] === 1
//         ? arr.filter(item => item % 2 === 1)[0]
//         : arr.filter(item => item % 2 === 0)[0]
// }
//
// // special([2, 4, 0, 100, 4, 11, 2602, 36])
//
// console.log(`sp: `, special([160, 3, 1719, 19, 11, 13, -21]))


// function reverse(arr) {
//   for (let i = 0, len = arr.length / 2; i < len; i++) {
//     let tmp = arr[i]
//     arr[i] = arr[arr.length - i - 1]
//     arr[arr.length - i - 1] = tmp
//   }
//   console.log(`arr: `, arr)
// }
//
// reverse([1, 2, 3, 4])


// 定义数组的旋转操作rotate(A, amount)，让数尾部amount个元素移动到头部。
//
// 例如数组: A=[1,2,3,4,5,6,7]
//
// rotate(A, 1) // [7,1,2,3,4,5,6]
// rotate(A, 2) // [6,7,1,2,3,4,5]
// rotate(A, 3) // [5,6,7,1,2,3,4]
// // 以此类推


// function rotate(arr, amount) {
//   let aTmp = arr.splice(-amount, amount)
//   console.log(`res: `, aTmp.concat(arr))
//   return aTmp.concat(arr)
// }

// function rotate(arr, amount) {
//   let aTmp1 = []
//   let aTmp2 = []
//   for (let i = 0; i < arr.length; i++) {
//     if (i > arr.length - 1 - amount) {
//       aTmp1.push(arr[i])
//     } else {
//       aTmp2.push(arr[i])
//     }
//   }
//   console.log(`res: `, aTmp1.concat(aTmp2))
//   return aTmp1.concat(aTmp2)
// }
//
// let A = [1, 2, 3, 4, 5, 6, 7]
// rotate(A, 1) // [7,1,2,3,4,5,6]
// rotate(A, 2) // [7,1,2,3,4,5,6]
// rotate(A, 3) // [7,1,2,3,4,5,6]


// 请实现一个递归版本的`reverse`函数，反转一个数组
// [3,5,2,4] [4,2,5,3]
// 'abc'

// function reverse(str, i = 0) {
//   if (i < str.length) {
//     console.log(`i: `, i)
//     reverse(str, i+=1)
//   }
// }
//
// let str = `abc`
// reverse(str)
// console.log(`str: `, str)

// let arr = [3, 5, 2, 4]
// console.log(`reverse: `, reverse(arr, 0))
// console.log(`arr: `, arr)

// function swap(arr, i, j) {
//   let tmp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = tmp
// }


// 15. 2018年8月27日 新题目
// 写一个函数flat展平一个数组
// flat([1,[2,'a',[5,6]],8]) // [1,2,'a',5,6,8]


// function flat(arr) {
//   let aRes = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       aRes = aRes.concat(flat(arr[i]))
//     } else {
//       aRes.push(arr[i])
//     }
//   }
//   return aRes
// }
// //
// let arr = [1,[2,'a',[5,6]],8]
// console.log(`flat(arr): `, flat(arr))

// function sum(n) {
//   if (n === 0) return n
//   return n + sum(n - 1)
// }

// 3  3 +

// console.log(`sum(4): `, sum(4))


// function sum(arr, i, num) {
//   let count = 0
//   if(arr.length === 0) return count
// }

// function sum(arr) {
//   if (arr.length === 0) return 0
//   return arr[0] + sum(arr.splice(1))
// }
//
// console.log(`sum: `, sum([1, 2, 3, 4]))


// [1,2,3] [3,2,1]

// 归并排序
// function merge(A, p, q, r) {
//   let A1 = A.slice(p, q) // 左半边的临时空间
//   let A2 = A.slice(q, r) // 右半边的临时空间
//   // 追加哨兵
//   A1.push(Number.MAX_SAFE_INTEGER)
//   A2.push(Number.MAX_SAFE_INTEGER)
//   for (let k = p, i = 0, j = 0; k < r; k++) {
//     // 循环不变式
//     // k: 下一个写入位置
//     // i: A1 中回写位置
//     // j: A2 中回写位置
//
//     if (A1[i] < A2[j]) {
//       A[k] = A1[i++]
//     } else {
//       A[k] = A2[j++]
//     }
//   }
//   // console.log(`A1: `, A1)
//   // console.log(`A2: `, A2)
// }
//
//
// function mergeSort(A, p, r) {
//   if(r - p < 2) return
//   const q = Math.ceil( (p + r) / 2 )
//   mergeSort(A, p, q)
//   mergeSort(A, q, r)
//   merge(A, p, q, r)
// }
//
// const A = [1,3,5,2,4,6]
// const B = [2,4,6,1,3,5]
// const C = [2,1]
//
// merge(A, 0, 3, 6)
// merge(B, 1, 3, 5)
// merge(C, 0, 1, 2)
//
// console.log(`A: `, A)
// console.log(`B: `, B)
// console.log(`C: `, C)

//
// nums1 = [1, 3]
// nums2 = [2]
//
// 中位数是 2.0
// nums1 = [1, 2]
// nums2 = [3, 4]
//
// 中位数是 (2 + 3) / 2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// function findMedianSortedArrays(nums1, nums2) {
//   // let aTmp = nums1.concat(nums2)
//   // aTmp.sort((a, b) => a - b)
//   let aTmp = merge(nums1, nums2)
//   console.log(`aTmp: `, aTmp)
//   let len = aTmp.length
//   if (len % 2 === 1) {
//     // console.log(`mid: `, Math.ceil(len / 2))
//     return aTmp[Math.floor(len / 2)]
//   } else {
//     // console.log(`mid: `, (aTmp[len / 2] + aTmp[len / 2 - 1]) / 2)
//     return (aTmp[len / 2] + aTmp[len / 2 - 1]) / 2
//   }
// }
//
// function merge(left, right) {
//   var tmp = [];
//
//   while (left.length && right.length) {
//     if (left[0] < right[0])
//       tmp.push(left.shift());
//     else
//       tmp.push(right.shift());
//   }
//
//   return tmp.concat(left, right);
// }
//
// console.log(`res: `, findMedianSortedArrays([1, 3], [2]))


// function merge1(left, right) {
//   let tmp = []
//   while (left.length && right.length) {
//     if (left[0] < right[0])
//       tmp.push(left.shift())
//     else
//       tmp.push(right.shift())
//   }
//   return tmp.concat(left, right);
// }
//
//
// function merge(A, p, q, r) {
//   let A1 = A.slice(p, q) // 左半边的临时空间
//   let A2 = A.slice(q, r) // 右半边的临时空间
//   // 追加哨兵
//   A1.push(Number.MAX_SAFE_INTEGER)
//   A2.push(Number.MAX_SAFE_INTEGER)
//   for (let k = p, i = 0, j = 0; k < r; k++) {
//     // 循环不变式
//     // k: 下一个写入位置
//     // i: A1 中回写位置
//     // j: A2 中回写位置
//
//     if (A1[i] < A2[j]) {
//       A[k] = A1[i++]
//     } else {
//       A[k] = A2[j++]
//     }
//   }
//   // console.log(`A1: `, A1)
//   // console.log(`A2: `, A2)
// }
//
//
// function mergeSort2(A, p, r) {
//   if(r - p < 2) return
//   const q = Math.ceil( (p + r) / 2 )
//   mergeSort(A, p, q)
//   mergeSort(A, q, r)
//   merge(A, p, q, r)
// }
//


// console.log(`merge1: `, merge1([2,10,20], [5, 9, 15]))

// 2018年8月28日 新题目
// 素数是（不包括1）只能被自己1整除的数字，比如2、3、5、7、11、13……都是素数，写一个函数is_prime验证一个数字是否是素数。
//
// is_prime(1) // false
// is_prime(100) // false
// is_prime(13) // true
// is_prime(179426549) // true
// is_prime(22801763489) // true

// add(1)(2) // 3
// add(1, 2, 3)(10) // 16
// add(1)(2)(3)(4)(5) // 15

// function add() {
//   const aArgs = Array.prototype.slice.call(arguments)
//
//   let f = function () {
//     let curArgs = Array.prototype.slice.call(arguments)
//     // return aArgs.concat(curArgs).reduce( (pre, cur) => pre + cur )
//     return add.apply(null, aArgs.concat(curArgs))
//   }
//
//   f.valueOf = function () {
//     return aArgs.reduce((a, b) => a + b)
//   }
//
//   return f
// }
//
// console.log(`add: `, add(1)(2)(3)(4)(5))


// 归并排序
// function merge(A, p, q, r) {
//   let A1 = A.slice(p, q) // 左半边的临时空间
//   let A2 = A.slice(q, r) // 右半边的临时空间
//   // 追加哨兵
//   A1.push(Number.MAX_SAFE_INTEGER)
//   A2.push(Number.MAX_SAFE_INTEGER)
//   for (let k = p, i = 0, j = 0; k < r; k++) {
//     // 循环不变式
//     // k: 下一个写入位置
//     // i: A1 中回写位置
//     // j: A2 中回写位置
//
//     if (A1[i] < A2[j]) {
//       A[k] = A1[i++]
//     } else {
//       A[k] = A2[j++]
//     }
//   }
//   // console.log(`A1: `, A1)
//   // console.log(`A2: `, A2)
// }
//
//

// function mergeSort(A, p, r) {
//   if(r - p < 2) return
//   const q = Math.ceil( (p + r) / 2 )
//   mergeSort(A, p, q)
//   mergeSort(A, q, r)
//   merge(A, p, q, r)
// }

// function mergeSort(A, l, r) {
//   if (r - l < 2) return
//   const m = Math.ceil((l + r) / 2) // 找中点
//   console.log(`m: `, m)
//   mergeSort(A, l, m)
//   mergeSort(A, m, r)
//   merge(A, l, m, r)
// }
//
// function merge(A, l, m, r) {
//   let A1 = A.slice(l, m) // 左边空间
//   let A2 = A.slice(m, r) // 右边空间
//
//   // 追加哨兵
//   A1.push(Number.MAX_SAFE_INTEGER)
//   A2.push(Number.MAX_SAFE_INTEGER)
//
//   for (let k = l, i = 0, j = 0; k < r; k++) {
//     // 循环不变式
//     // k 下一个写入位置
//     // i: A1 中回写位置
//     // j: A2 中回写位置
//     if(A1[i] < A2[j]){
//       A[k] = A1[i++]
//     }else {
//       A[k] = A2[j++]
//     }
//   }
//
// }


// function mergeSort(A, l, r) {
//   if (r - l < 2) return
//   let m = Math.ceil((l + r) / 2)
//   console.log(`l: `, l)
//   console.log(`m: `, m)
//   console.log(`r: `, r)
//   console.log(`================`)
//   mergeSort(A, l, m)
//   mergeSort(A, m, r)
//   merge(A, l, m, r)
// }
//
// function merge(A, l, m, r) {
//   const A1 = A.slice(l, m) // left
//   const A2 = A.slice(m, r) // right
//   A1.push(Number.MAX_SAFE_INTEGER)
//   A2.push(Number.MAX_SAFE_INTEGER)
//   for (let k = l, i = 0, j = 0; k < r; k++) {
//     if (A1[i] < A2[j]) {
//       A[k] = A1[i++]
//     } else {
//       A[k] = A2[j++]
//     }
//   }
// }
//
// let A = [20, -10, 100, 5, 2, 8]
// mergeSort(A, 0, A.length)
// console.log(`A: `, A)


// 判断一个整数是否是回文数
// function t(x) {
//   if(x < 0 || (x % 10 === 0 && x !== 0)) return false
//   return String(x) === String(x).split('').reverse().join('')
// }
//
// console.log(`t(n): `, t(111))


// function removeElement(nums, val) {
//   // nums = nums.filter(item => {
//   //   console.log(`item: `, item)
//   //   return item !== val
//   // })
//   // console.log(`nums: `, nums)
//
//   for (let i = 0; i < nums.length; i++) {
//     if(nums[i] === val){
//       nums.splice(i, 1)
//       i--
//     }
//   }
//   console.log(`nums: `, nums)
//   return nums.length
// }
//
// // let nums = [3,2,2,3], val = 3
// let nums = [0,1,2,2,3,0,4,2], val = 2
// console.log(`removeElement(): `, removeElement(nums, val))


// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
//
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 18. 2018年8月31日
// 写一个函数peak寻找一个数组的峰值位置。
// 比如数组: 1,3,5,7,4,2有峰值7；
// 已排序数组1,2,3,4,5,6，有峰值6。
// 有的数组有多个峰值，这里只需要返回任何一个。
// 比如数组[1,2,3,2,7,6]有两个峰值3和7。
//
// 如果一个元素左右元素都相同，那么这个元素就是峰值，比如数组1,1,1,1，每个元素都是峰值。
//
// 例如
//
// peak([1,2,3,4,5,6])  // 5(6所在的位置）
// peak([1,3,5,7,4,2]) // 3（7所在的位置）
// peak([1,2,3,2,7,6]) // 2(3所在的位置)
// peak([1,1,1,1,1,1]) // 任何一个都是峰值
// 如果有多个峰值，只要随便返回一个就可以，不需要考虑顺序。

// function peak(arr) {
//
// }


// A是一个已排序的数组，x是目标值。
//
// 如果找到目标值，返回目标值在数组中的序号。
// 如果没有找到目标值，返回目标值应该被插入的位置
// 比如数组: A=3,5,7,13,22,25
//
// bSearch(A,5) // 1
// bSearch(A,13) // 3
// bSearch(A,4) // 1
// bSearch(-1) // 0
// bSearch(-10000) // 0
// bSearch(30) // 6

// function bSearch(A, x) {
//   let l = 0
//   let r = A.length - 1
//   let m
//
//   while (l <= r) {
//     m = Math.floor((l + r) / 2)
//     if (A[m] === x) {
//       return m
//     } else if (A[m] > x) {
//       if (A[m - 1] < x) {
//         return m
//       }
//       r = m - 1
//     } else {
//       if (A[m + 1] > x) {
//         return m + 1
//       }
//       l = m + 1
//     }
//   }
//
// }
//
//
// let A = [3, 5, 7, 13, 22, 25]
// console.log(`bSearch: `, bSearch(A, 4))


// function reverse(arr) {
//   for (let i = 0, len = arr.length / 2; i < len; i++) {
//     let tmp = arr[i]
//     arr[i] = arr[arr.length - 1 - i]
//     arr[arr.length - 1 - i] = tmp
//   }
//   // console.log(`arr: `, arr)
//   return arr
// }
//
// let arr = [2,10,5]
// reverse(arr)


// 柯里化函数curry是这样一个函数，它将一个接受多参数的函数，转换成为接收连续单参数的高阶函数（可以被连续调用）。
//
// 例如：
//
// function _add(a, b, c, d){
//   return a + b + c + d
// }
//
// const add = curry(_add)
//
// console.log( add(1) ) // 函数
// console.log( add(1)(2) ) // 函数
// console.log( add(1)(2)(3) ) // 函数
// console.log ( add(1)(2)(3)(4) ) // 10
// 再比如:
//
//   const pow = curry(Math.pow)
//
// pow(10)(2) // 100

// function curry(fn) {
//   console.log(`fn: `, fn.length)
//   let len = fn.length
//   return function cb(...args) {
//     console.log(`len: `,)
//     if ([...args].length < len) {
//       return cb([...args])
//     } else {
//       fn(...args)
//     }
//   }
// }
//
//


// const curry = function (fn) {
//   const g = function (...allArgs) {
//     if (allArgs.length >= fn.length) {
//       return fn(...allArgs)
//     } else {
//       return function(...args){
//         // console.log(`allArgs: `, ...allArgs)
//         // console.log(`args: `, ...args)
//         return g(...allArgs, ...args)
//       }
//     }
//   }
//
//   return g
// }
//
// function _add(a, b, c, d) {
//   return a + b + c + d
// }

// const add = curry(_add)
//
// console.log(add(1)) // 函数
// console.log(add(1)(2)) // 函数
// console.log(add(1)(2)(3)) // 函数
// console.log(add(1)(2)(3)(4)) // 10

// const pow = curry(Math.pow)
// console.log(`res: `, pow(10)(2)) // 100

// function bubble(arr) {
//   for (let i = arr.length - 1; i >= 1; i--) {
//     // console.log(`i: `, i)
//     for (let j = 1; j <= i; j++) {
//       console.log(`j: `, j)
//       if(arr[j-1] > arr[j]){
//         swap(arr, j-1, j)
//       }
//     }
//     console.log(`=======================`)
//   }
//   return arr
// }
//
// function swap(arr, i, j){
//   let tmp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = tmp
// }


// function insertSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     insert(arr, i, arr[i])
//   }
//   return arr
// }
//
// function insert(arr, i, x) {
//   let j = i - 1
//   while (j >= 0 && arr[j] > x) {
//     arr[j + 1] = arr[j]
//     j--
//   }
//   arr[j + 1] = x
// }
//
//
// let arr = [10, 5, 1, 3, 7, 100]
// console.log(`bubble(arr): `, insertSort(arr))
//


// 23 2018年9月4日
// 写一个函数find_missing(A, low, high)，给定一个范围[low,high]，寻找一个数组中缺失的元素。
//
// find_missing([10, 12, 11, 15], 10, 15) // [13,14]
// // 注: low=10 high = 15
//
// find_missing([1, 14, 11, 51, 15],50, 55) // [50, 52, 53, 54]
// // 注：low = 50, high = 55


// function find_missing(A, low, high) {
//   let map = {}
//   let aRes = []
//   for (let i = 0; i < A.length; i++) {
//     map[A[i]] = 1
//   }
//   for (let i = low; i < high; i++) {
//     if (!map[i]) aRes.push(i)
//   }
//   // console.log(`map: `, map)
//   console.log(`aRes: `, aRes)
//   return aRes
// }


// find_missing([1, 14, 11, 51, 15], 50, 55)


// function swap(A, i, j) {
//   [A[i], A[j]] = [A[j], A[i]]
// }
//
// function partition(A, lo, hi) {
//   const pivot = A[hi - 1]
//   let i = lo
//   let j = hi - 1
//   while (i !== j) {
//     if (A[i] <= pivot) {
//       i++
//     } else {
//       swap(A, i, --j)
//     }
//   }
//   swap(A, j, hi-1)
//   return j
// }
//
// function quickSort(A, lo = 0, hi = A.length) {
//   console.log(`lo: `, lo)
//   console.log(`hi: `, hi)
//   if (hi - lo <= 1) return
//   const p = partition(A, lo, hi)
//   quickSort(A, lo, p)
//   quickSort(A, p+1, hi)
// }
//
// const A = [10, 80, 30, 90, 50, 40, 20]
//
// quickSort(A)
//
// console.log(`A: `, A)


// 28 2018年9月9日
// 某AI创业公司前端团队面试题，写一个函数sort，对一个只有字符的数组进行排序，比如说['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd']
//
// 要求：
//
// 大写在前，小写在后
// 大小写字母之间的顺序不能改变，比如AaBbCcDd排序后应该是ABCDabcd。
// 不能使用额外空间。


// function bubbleSort(arr) {
//   for (let i = arr.length-1; i > 0; i--) {
//     // console.log(`i: `, i)
//     for (let j = 1; j <= i; j++) {
//       // console.log(`j: `, j)
//       if(arr[j] < arr[j-1]){
//         swap(arr, j, j-1)
//       }
//     }
//     console.log(`================`)
//   }
//   return arr
// }
//
// function swap(arr, i ,j) {
//   let t = arr[i]
//   arr[i] = arr[j]
//   arr[j] = t
// }
//
// // let arr = [5,2,10,8,89,70]
// let arr = [2, -10, -1, 5]
// console.log(`re: `, bubbleSort(arr))
//


// function insertSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     console.log(`i: `, i)
//     insert(arr, i, arr[i])
//   }
//   return arr
// }
//
// function insert(arr, i, x) {
//   let p = i - 1
//   while (p >= 0 && arr[p] > x){
//     arr[p + 1] = arr[p]
//     p--
//   }
//   arr[p + 1] = x
// }
//
// let arr = [5,2,10,8,89,70]
// console.log(`res: `, insertSort(arr))


// function sort(arr) {
//   let cache = {}
//   arr.reduce((pre, cur) => {
//     if (cache[cur]) {
//       cache[cur]++
//     } else {
//       cache[cur] = 1
//     }
//     console.log(`cur: `, cur)
//   }, cache)
//   console.log(`cache: `, cache)
// }
//
// let arr = [1, 2, 3, 1, 1, 0, 5, 5, 5, 5, 7]
// sort(arr) // [5,5,5,5,1,1,1,0,2,3,7]


// /**
//  *
//  * @param str 全集
//  * @param decisions 已经选择的字符
//  */
// function permutation(str, decisions) {
//   if(decisions中包含了str全部字符) return
//   let r = []
//   for (c in str中所有不在decisions中的字符) {
//     r = r.concat(permutation(str, decisions+c))
//   }
//   return r
// }
//

// /**
//  *
//  * @param S 数组，需要求组合的集合
//  * @param k 取出元素个数
//  */
// function combination(S, k) {
//   if(k === 0 || S.length === k) return [ S.slice(0, k) ]
//   const [first, ...others] = S
//   let r = []
//   r = r.concat( combination(others, k-1).map(c => [first, ...c]) )
//   r = r.concat( combination(others, k) )
//
//   return r
// }
//
//
// const S = ['A', 'B', 'C', 'D']
// console.log(`S: `, combination(S, 2))


// console.log(`a: `, 123)

// function insertSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     insert(arr, i, arr[i])
//   }
//   return arr
// }
//
// function insert(arr, i, x) {
//   // p 指针指向下一个需要比较的元素
//   // p + 1 指向空位
//   let p = i - 1
//   while (p >= 0 && arr[p] > x) {
//     arr[p + 1] = arr[p]
//     p--
//   }
//   arr[p + 1] = x
// }


// function insert(arr, i, x){
//   let p = i - 1
//   while(p >= 0 && arr[p] > x){
//     arr[p+1] = arr[p]
//     p--
//   }
//   arr[p+1] = x
// }
//
// function insertSort(arr){
//   for (let i = 1; i < arr.length; i++) {
//     insert(arr, i, arr[i])
//   }
//   return arr
// }

// function mergeSort(arr, l, r) {
//   if (r - l < 2) return
//   let m = Math.ceil((l + r) / 2)
//   console.log(`m: `, m)
//   mergeSort(arr, l, m)
//   mergeSort(arr, m, r)
//   merge(arr, l, m, r)
// }
//
// function merge(arr, l, m, r) {
//   const a1 = arr.slice(l, m)
//   const a2 = arr.slice(m, r)
//   a1.push(Number.MAX_SAFE_INTEGER)
//   a2.push(Number.MAX_SAFE_INTEGER)
//
//   for (let k = l, i = 0, j = 0; k < r; k++) {
//     if(a1[i] < a2[j]){
//       arr[k] = a1[i++]
//     }else{
//       arr[k] = a2[j++]
//     }
//   }
// }
//
//
// let arr = [10, 5, 3, 7]
// mergeSort(arr, 0, arr.length)
// console.log(`res: `, arr)


// function bubbleSort(arr) {
//   for (let i = arr.length-1; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//       if(arr[j] < arr[j-1]){
//         swap(arr, j, j-1)
//       }
//     }
//   }
//   return arr
// }
//
// function swap(arr, i, j) {
//   // [arr[i], arr[j]] = [arr[j], arr[i]]
//   let t = arr[i]
//   arr[i] = arr[j]
//   arr[j] = t
// }


// function bubbleSort(arr){
//   for (let i = arr.length - 1; i >= 1; i--) {
//     for (let j = 1; j < i; j++) {
//       console.log(`j: `, j)
//       console.log(`j - 1: `, j - 1)
//       if(arr[j] < arr[j-1]){
//         swap(arr, j, j-1)
//       }
//     }
//     console.log(`==================`)
//   }
//   return arr
// }
//
// function swap(arr, i, j){
//   let t = arr[i]
//   arr[i] = arr[j]
//   arr[j] = t
// }

// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]]
// }
//
// function partition(a, l, r) {
//   const pivot = a[r - 1]
//   let i = l
//   let j = r - 1
//   while (i !== j) {
//     if (a[i] < pivot) {
//       i++
//     } else {
//       swap(a, i, --j)
//     }
//   }
//   swap(a, j, r-1)
//   return j
// }
//
// function quickSort(a, l, r) {
//   if (r - l <= 1) return
//   const p = partition(a, l, r)
//   quickSort(a, l, p)
//   quickSort(a, p, r)
// }
//
//
// // console.log(`res: `, bubbleSort([2, -10, -1, 5]))
// // console.log(`insert res: `, insertSort([2, -10, -1, 5]))
// // let a = [2, -10, -1, 5]
// // mergeSort(a, 0, a.length)
// // console.log(`insert res: `, a)
//
// let a = [2, -10, -1, 5]
// quickSort(a, 0, a.length)
// console.log(`insert res: `, a)


// i, j, k代表碟子，k最小，i最大
// A, B, C是三个位置

function solveHanoiTower(disks, from, to, use) {
  // console.log(`disks: `, disks)
  // console.log(`from: `, from)
  // console.log(`to: `, to)
  // console.log(`use: `, use)
  move(disks, 0, disks.length, from, to, use)
}

// function move(disks, k, n, from, to, use) {
//   console.log(`${disks[n-1]}: `, `${from}->${use}`)
//   console.log(`${disks[n-2]}: `, `${from}->${to}`)

//   console.log(`${disks[n-1]}: `, `${use}->${to}`)
// }

// function move(disks, k, n, from, to, use) {
//   console.log(`${disks[n-1]}: `, `${from}->${to}`)
//   console.log(`${disks[n-2]}: `, `${from}->${use}`)
//
//   console.log(`${disks[n-1]}: `, `${to}->${use}`)
//   console.log(`${disks[n-3]}: `, `${from}->${to}`)
//
//   console.log(`${disks[n-1]}: `, `${use}->${from}`)
//   console.log(`${disks[n-2]}: `, `${use}->${to}`)
//
//   console.log(`${disks[n-1]}: `, `${from}->${to}`)
// }

// function move(disks, k, n, from, to, use) {
//   if(n === 1) {
//     console.log(`${disks[k]}: ${from}->${to}`)
//     return
//   }
//   move(disks, k+1, n-1, from, use, to)
//   console.log(`${disks[k]}: ${from}->${to}`)
//   move(disks, k+1, n-1, use, to, from)
// }
//
// solveHanoiTower(['i', 'j', 'k'], 'A', 'B', 'C')

// k A->B
// j A->C
// k B->C
// i A->B
// k C->A
// j C->B
// k A->B


// permutation('abc') // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

// function permutation(str, select = []) {
//   // console.log(`str: `, str)
//   console.log(`select: `, select)
//   if (select.length === str.length) {
//     console.log(`here: `, select.map(i => str[i]).join(``))
//     return select.map(i => str[i]).join(``)
//   }
//
//   let r = []
//   for (let i = 0; i < str.length; i++) {
//     if (select.indexOf(i) === -1) {
//       // console.log(`select: `, select)
//       // console.log(`before r: `, r)
//       r = r.concat(permutation(str, select.concat(i)))
//       // console.log(`after r: `, r)
//     }
//   }
//   console.log(`===================`)
//   return r
// }
//
//
// console.log(`permutation: `, permutation('abc'))


// function findSubsets(S, decisions = []) {
//   // 所有决策都已经完成
//   if(S.length === decisions.length){
//     // 返回结果
//     return decisions
//   }
//   let r = []
//   r = r.concat(findSubsets(S, decisions.concat(true)))
//   r = r.concat(findSubsets(S, decisions.concat(false)))
//   return r
// }
//
// console.log(`findSubsets: `, findSubsets('abc'))
//
//
// 全排列问题抽象
// function permutation(str, decisions) {
//   // 所有决策都已经完成
//   if(decisions包含str全部字符){
//     // 返回结果
//     return decisions
//   }
//
//   let r = []
//   for(c in str中所有不在decisions中的字符){
//     r = r.concat(permutation(str, decisions + c))
//   }
//
//   return r
// }


// function mergeSort(a, l = 0, r = a.length) {
//   if (r - l < 2) return
//   let m = Math.ceil((l + r) / 2)
//   mergeSort(a, l, m)
//   mergeSort(a, m, r)
//   merge(a, l, m, r)
//   return a
// }
//
// function merge(a, l, m, r) {
//   const a1 = a.slice(l, m)
//   const a2 = a.slice(m, r)
//   a1.push(Number.MAX_SAFE_INTEGER)
//   a2.push(Number.MAX_SAFE_INTEGER)
//
//   for (let i = 0, j = 0, k = l; k < r; k++) {
//     if (a1[i] < a2[j]) {
//       a[k] = a1[i++]
//     } else {
//       a[k] = a2[j++]
//     }
//   }
// }
//
// const a = [10, 7, 5, 2, 4]
// console.log(`a: `, mergeSort(a, 0, a.length))

// function quickSort(arr) {
//
// }


// function swap(a, i, j) {
//   let t = a[i]
//   a[i] = a[j]
//   a[j] = t
// }
//
// function partition(a, l, r) {
//   const pivot = a[r - 1]
//   let i = l
//   let j = r - 1
//   // 小于中心点范围 [ l, i )
//   // 未确认范围 [ i, j )
//   // 大于中心点范围 [ j, r-1 )
//
//   while (i !== j) {
//     if (a[i] <= pivot) {
//       i++
//     } else {
//       swap(a, i, --j)
//     }
//   }
//   swap(a, j, r - 1)
//   return j
// }
//
//
// function quickSort(a, l = 0, r = a.length) {
//   if (r - l <= 1) return
//   const p = partition(a, l, r)
//   quickSort(a, l, p)
//   quickSort(a, p + 1, r)
//   return a
// }
//
// const a = [10, 5, 8, 4, 2]
// console.log(`a: `, quickSort(a, 0, a.length))


// function permutation(str, select = []) {
//   if (select.length === str.length) {
//     return select.map(i => str[i]).join(``)
//   }
//   let r = []
//   for (let i = 0; i < str.length; i++) {
//     if (select.indexOf(i) === -1) {
//       r = r.concat(permutation(str, select.concat(i)))
//     }
//   }
//   return r
// }
//
// console.log(`permutation: `, permutation('abc'))


// function findSubsets(str, selects = []) {
//   if(str.length === selects.length){
//     console.log(`selects: `, selects)
//     let s = selects.map((item, i) => (item ? str[i] : '')).join('')
//     console.log(`s: `, s)
//     console.log(`======================`)
//     return [s]
//   }
//   let r = []
//   r = r.concat(findSubsets(str, selects.concat(true)))
//   r = r.concat(findSubsets(str, selects.concat(false)))
//   console.log(`r: `, r)
//   console.log(`======================`)
//   return r
// }
//
// console.log(`findSubsets: `, findSubsets('abc'))


// function flat(arr) {
//   return [].concat(...arr.map(x => {
//     if (Array.isArray(x)) {
//       return flat(x)
//     } else {
//       return x
//     }
//   }))
// }
//
// console.log(`flat: `, flat([1,[2,'a',[5,6]],8]))

// 递归反转数组
// function reverse(a, i, j) {
//   if( parseInt(a.length / 2) === i ){
//     // console.log(`a: `, a)
//     a = a.filter(item => item !== undefined)
//     console.log(`aa: `, a)
//     return a
//   }
//   swap(a, i, j)
//   reverse(a, ++i, --j)
// }
//
// function swap(a, i, j) {
//   let t = a[i]
//   a[i] = a[j]
//   a[j] = t
// }
//
// let a = [1,2,3]
// reverse(a, 0, a.length)
// console.log(`a: `, a)


// function reverse(arr) {
//   for (let i = 0; i < arr.length / 2; i++) {
//     console.log(`i: `, i)
//     let t = arr[i]
//     arr[i] = arr[arr.length - i - 1]
//     arr[arr.length - i - 1] = t
//   }
// }

// let a = [1,2,3]
// reverse(a)
// console.log(`a: `, a)


// function reverse(a, i) {
//   if(i === parseInt(a.length / 2)){
//     return a
//   }
//   let t = a[i]
//   a[i] = a[a.length - i - 1]
//   a[a.length - i - 1] = t
//   reverse(a, ++i)
// }
//
// let a = [1,2,3]
// reverse(a, 0)
// console.log(`a: `, a)

// solution(10) // 23
// solution(16) // 60

// const A = [1, 2, 2, 3, 6, 3]
// countSort(A)

// console.log(`insertSort: `, insertSort(A))
// console.log(`bubbleSort: `, bubbleSort(A))
// console.log(`mergeSort: `, mergeSort(A))
// console.log(`countSort: `, countSort(A))
// console.log(`quickSort: `, quickSort(A))

// class LinkList {
//   constructor() {
//     this.head = null
//   }
//
//   insert(node) {
//     if (this.head !== null) {
//       node.text = this.head
//     }
//     this.head = node
//   }
//
//   find(node) {
//     let p = this.head
//     while (p && p !== node) {
//       p = p.next
//     }
//     return p
//   }
//
// }
//


function ListNode(key) {
  this.key = key
  this.next = null
}


// class LinkedList {
//   constructor() {
//     this.head = null
//   }
//
//   // O(1)
//   insert(node) {
//     if (this.head !== null) {
//       node.next = this.head
//     }
//     this.head = node
//   }
//
//   find(node) {
//     // 遍历指针
//     let p = this.head
//     // 循环遍历直到找到和`node`相同的节点
//     while (p && p !== node) {
//       p = p.next
//     }
//     return p
//   }
//
//   reverse(p = this.head) {
//     if (p.next) {
//       this.reverse(p.next)
//       p.next.next = p
//       p.next = null
//     } else {
//       this.head = p
//     }
//   }
//
//   print() {
//     console.log(`LinkedList: `, this)
//   }
//
// }
//
// const list = new LinkedList()
//
// const node = new ListNode(1)
// const node2 = new ListNode(2)
// const node3 = new ListNode(3)
//
// // list.head = node
// list.insert(node2)
// list.insert(node3)
// list.insert(node)
//
// // node2.next = node
//
// console.log(`list: `, JSON.stringify(list))
// // console.log(`node: `, node)


// let A = []

// function sum(A) {
//   let r = 0
//   for (let i = 0; i < A.length; i++) {
//     r += A[i]
//   }
//   return r
// }

// function sum(A, i = 0, r = 0){
//   if(!A.length) return
//   if(i === A.length) return r
//   return sum(A, i+1) + A[i] + r
// }
//
// console.log(`sum: `, sum(A))


// function permutation(str, select = []) {
//   if (select.length === str.length) {
//     return select.map(i => str[i]).join(``)
//   }
//   let r = []
//   for (let i = 0; i < str.length; i++) {
//     if (select.indexOf(i) === -1) {
//       r = r.concat(permutation(str, select.concat(i)))
//     }
//   }
//   return r
// }
//
// console.log(`permutation: `, permutation('abc'))
//


// class MaxHeap {
//   constructor(data, Max = 10000) {
//     this.list = new Array(Max)
//     for (let i = 0; i < data.length; i++) {
//       this.list[i] = data[i]
//     }
//     this.heapSize = data.length
//     this.build()
//   }
//
//   build() {
//     let i = Math.floor(this.heapSize / 2) - 1
//     while (i >= 0) {
//       this.maxHeapify(i--)
//     }
//   }
//
//   maxHeapify(){
//
//   }
//
// }


// let t = {
//   n: {
//     k: 1,
//     y: 2,
//     d: {
//       a: 1,
//       b: 2
//     }
//   },
//   b: 3
// }
//
// function isObj(p) {
//   return Object.prototype.toString.call(p) === '[object Object]'
// }
//
// function zip(t) {
//   console.log(`t: `, t)
//   let o = {}
//
//   for (let k in t) {
//     // console.log(`k: `, k)
//     // console.log(`k: `, t[k])
//     if(isObj(t[k])){
//       // 是对象
//
//     }else {
//       // 不是
//       o[k] = t[k]
//     }
//   }
//
//   return o
// }
//
// console.log(`zip(t): `, zip(t)); // 返回以下结果

// {
//   b       : 3,
//   'n.k'   : 1,
//   'n.y'   : 2,
//   'n.d.a' : 1,
//   'n.d.b' : 2,
// }


// const A = [2, 100, 5, -10, 6]
// const B = [2, 100, 5, -10, 6]
// const C = [2, 100, 5, -10, 6]


// function merge(A, l, m, r) {
//
// }
//
// console.log(`C: `, merge(C, 0, 3, C.length))


// const A = [10, 1, 0, 5, 2, 8]
// function countSort(A) {
//
// }
//
// console.log(`countSort(A): `, countSort(A))
//

// // 合并两个有序数组
// let A = [1,5,10]
// let B = [2,4,11]
//
// let C = A.concat(B)
// console.log(`C: `, C)
// function merge(A, l, m, r) {
//
// }
//
// console.log(`merge: `, merge(C, 0, 3, C.length))

// let A = [1,5,10]
// let B = [2,4,6]
//
// let C = A.concat(B)
//
// function swap(A, i, j) {
//   [A[i], A[j]] = [A[j], A[i]]
// }
//
// function partition(A, l, r) {
//
// }
//
// // let A = [10, 80, 30, 90, 40, 50, 70]
// console.log(C, partition(C, 0, 6))


// let A = [10, 80, 30, 90, 40, 50, 70]
// let A = [1, 10, 40, 80, 200]


// function binarySearch(A, x) {
//   let l = 0
//   let r = A.length
//   let guess
//
//   while (l <= r) {
//     guess = Math.floor((l + r) / 2)
//     if (A[guess] === x) {
//       return guess
//     } else if (A[guess] > x) {
//       r = guess - 1
//     } else {
//       l = guess + 1
//     }
//   }
// }
//
// console.log(`binarySearch(A, x): `, binarySearch(A, 10))


// '2018-10-07T11:48:47 Asia/zh-cn'  用正则取出 ['2018', '10', '07', '11', '48', '47']


// const man = {
//   name: 'jsCoder',
//   age: 22
// }

// // 补全代码
// const proxy = new Proxy(...)
//
// proxy.name // jsCoder
// proxy.age // 22
// proxy.location // Property 'location' does not exist

// let obj = new Proxy({}, {
//   get: function (target, key, receiver) {
//     console.log(`getting ${key}!`);
//     return Reflect.get(target, key, receiver);
//   },
//   set: function (target, key, value, receiver) {
//     console.log(`setting ${key}!`);
//     return Reflect.set(target, key, value, receiver);
//   }
// })
//
// obj.count = 1
// //  setting count!
// obj.count++


// let domNode = {
//   tagName: 'ul',
//   props: {class: 'list'},
//   childen: [{
//     tagName: 'li',
//     childen: ['toutiao']
//   },{
//     tagName: 'li',
//     childen: ['douyin']
//   }]
// }
//
// function render() {
//
// }

function render(data) {
  let el = document.createElement(data.tagName)

  if(data.props){
    for (let k in data.props) {
      el.setAttribute(k, data.props[k])
    }
  }

  data.childen.forEach(item => {
    let child = item.childen.length > 1 ? render(createDom(item)) : document.createTextNode(item)
    el.appendChild(child)
  })

  console.log(`el: `, el)
  return el
}

function createDom(data) {
  let el = document.createElement(data.tagName)

  if(data.props){
    for (let k in data.props) {
      el.setAttribute(k, data.props[k])
    }
  }

  return el
}































































































