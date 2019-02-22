/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/30/
 */

const isValidSudoku = function (board) {

  for (let i = 0; i < board.length; i++) {
    // 验证每一行
    let row = []
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== '.') row.push(board[i][j])
    }
    // console.log(`row: `, row)
    let setRow = new Set(row)
    if (setRow.size !== row.length) return false

    // 验证每一列
    let col = []
    for (let j = 0; j < board[i].length; j++) {
      if (board[j][i] !== '.') col.push(board[j][i])
    }
    // console.log(`col: `, col)
    let setCol = new Set(col)
    if (setCol.size !== col.length) return false
  }

  for (let k = 0; k < board.length; k += 3) {
    for (let l = 0; l < board[k].length; l += 3) {
      // 3 * 3 方格
      let aTmp = []
      for (let i = k; i < k + 3; i++) {
        for (let j = l; j < l + 3; j++) {
          if (board[i][j] !== '.') aTmp.push(board[i][j])
        }
      }
      let set = new Set(aTmp)
      if (set.size !== aTmp.length) return false
    }
  }

  return true
};


let arr = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
// let arr = [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
console.log(`isValidSudoku: `, isValidSudoku(arr))
// true











