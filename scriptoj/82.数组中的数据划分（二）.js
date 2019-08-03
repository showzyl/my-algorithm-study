"use strict"

// http://scriptoj.mangojuice.top/problems/82

// 完成一个函数 partition3way，它接受一个数组作为参数。它会搬动数组中的元素，使得所有小于第一个项的元素都搬动到它的左边，所有大于第一个项的元素都搬动到右边，等于它的都放在中间。例如：
//
// const arr = [3, 1, 3, 6, 2, 3, 4, 5]
// partition3way(arr)
// console.log(arr) // => [2, 1, 3, 3, 3, 6, 4, 5] or [1, 2, 3, 3, 3, 4, 5, 6]
// 输入的数组的第一个项是 3，所以最后小于 3 的 1、2 的都到了左边，大于 3 的 4， 5， 6 都到了右边，3 都放在了中间。
//
// 请你在不能使用任何数组原生方法，只能使用循环和赋值的情况下完成 partition3way 函数。


function partition3way(arr) {
  let leftArr = []
  let rightArr = []

  for (let i = 1; i < arr.length; i++) {

  }
  // console.log(`leftArr: `, leftArr)
  // console.log(`rightArr: `, rightArr)
  return leftArr.concat(arr[0], rightArr)
}


let arr = [3, 1, 3, 6, 2, 3, 4, 5]
console.log(`res: `, partition3way(arr))


