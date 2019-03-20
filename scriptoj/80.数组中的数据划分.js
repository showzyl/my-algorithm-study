// http://scriptoj.mangojuice.top/problems/80

// 完成一个函数 partition，它接受一个数组作为参数。它会搬动数组中的元素，使得所有小于第一个项的元素都搬动到它的左边，所有大于第一个项的元素都搬动到右边。例如：
// const arr = [3, 1, 6, 2, 4, 5]
// partition(arr)
// console.log(arr) // => [2, 1, 3, 6, 4, 5]
// 输入的数组的第一个项是 3，所以最后小于 3 的 1、2 的都到了左边，大于 3 的 4， 5， 6 都到了右边。
//
// 请你在不能使用任何数组原生方法，只能使用循环和赋值的情况下完成 partition 函数
"use strict"

// // 超时版
// function partition(arr) {
//   const swap = (a, i, j) => [a[i], a[j]] = [a[j], a[i]]
//   const pivot = arr[0]
//   let i = arr.length - 1
//   let j = 0
//
//   while (i !== j) {
//     if (arr[i] < pivot) {
//       swap(arr, i, ++j)
//     } else {
//       i--
//     }
//   }
//   swap(arr, j, 0)
//   return arr
// }

// 最终版
const partition = (arr) => {
  const swap = (a, i, j) => [a[i], a[j]] = [a[j], a[i]]

  const pivot = arr[0]
  let i = 0
  let k = 1
  let j = arr.length - 1

  while (k <= j) {
    if (arr[k] < pivot) {
      swap(arr, i++, k++)
    } else if (arr[k] > pivot) {
      swap(arr, j--, k)
    } else {
      k++
    }
  }
}


// const arr = [3, 1, 6, 2, 4, 5]
const A = [10, 50, 30, 90, 40, 80, 70]
const B = [10, 50, 30, 90, 40, 80, 70]
console.log(`res1: `, partition(A, 0, 7))
console.log(`res2: `, partition(B, 1, 3))




