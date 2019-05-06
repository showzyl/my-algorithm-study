"use strict"

let arr = ['晨光', '叔亮', '张超', '冬冬', '丰满', '邵彬', '灵清', '勇军', '佳伟']
function shuffle(arr) {
  let len = arr.length - 1
  while (len >= 0) {
    let randomIndex = Math.floor((len + 1) * Math.random())
    _exchange(arr, len, randomIndex)
    len--
  }
  return arr

  function _exchange(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

// 值班表
// ["姚冬冬", "王佳伟", "秦晨光", "杜邵彬", "张叔亮", "张超", "吴勇军", "吴灵清", "张丰满"]

console.log(`res: `, shuffle(arr))
