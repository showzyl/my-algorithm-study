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


function sort(arr) {
  let cache = {}
  arr.reduce((pre, cur) => {
    if (cache[cur]) {
      cache[cur]++
    } else {
      cache[cur] = 1
    }
    console.log(`cur: `, cur)
  }, cache)
  console.log(`cache: `, cache)
}

let arr = [1, 2, 3, 1, 1, 0, 5, 5, 5, 5, 7]
sort(arr) // [5,5,5,5,1,1,1,0,2,3,7]



















