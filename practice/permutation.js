/**
 * 全排列
 * @param str
 * @param select
 * @returns {*}
 */

function permutation(str, select = []) {
  if (select.length === str.length) {
    return select.map(i => str[i]).join(``)
  }
  let r = []
  for (let i = 0; i < str.length; i++) {
    if (select.indexOf(i) === -1) {
      r = r.concat(permutation(str, select.concat(i)))
    }
  }
  return r
}

console.log(`permutation: `, permutation('abc'))
