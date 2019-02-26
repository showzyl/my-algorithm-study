/**
 * https://leetcode-cn.com/explore/leterview/card/top-leterview-questions-easy/1/array/31/
 */

const rotate = function (matrix) {
  let length = matrix.length;

  // 调换对角元素
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      let tmp = matrix[i][j]
      matrix[i][j] = matrix[length - j - 1][length - i - 1]
      matrix[length - j - 1][length - i - 1] = tmp
    }
  }

  // 调换列元素
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length / 2; j++) {
      let tmp = matrix[j][i]
      matrix[j][i] = matrix[length - j - 1][i]
      matrix[length - j - 1][i] = tmp
    }
  }
  return matrix
}

const exchange = function (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

let matrix =
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
// [
//   [9,6,3],
//   [8,5,2],
//   [7,4,1]
// ],
//     // [
//     //   [7,4,1],
//     //   [8,5,2],
//     //   [9,6,3]
//     // ]
// let matrix =
//   [
//     [ 5, 1, 9,11],
//     [ 2, 4, 8,10],
//     [13, 3, 6, 7],
//     [15,14,12,16]
//   ]
//
console.log(`rotate: `, rotate(matrix))


// let arr = [1, 2, 3]
//
// exchange(arr, 0, 1)
// console.log(arr)







