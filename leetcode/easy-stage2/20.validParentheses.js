/**
 *
 *  https://github.com/azl397985856/leetcode/blob/master/problems/20.validParentheses.md
 *
 */


// 找左右对应的利用`栈`特性来处理

const map = {
  '(': ')',
  '[': ']',
  '{': '}'
}

const isValid = function(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if(map[s[i]]) {
      // 匹配到的`正括号`入栈
      stack.push(s[i])
    } else {
      // 没有匹配到的都是`反括号`
      let pop = stack.pop()
      if(map[pop] !== s[i]) return false
    }
  }
  console.log(`stack: `, stack)
  return !stack.length;
}


// let s = '()'
// let s = '()[]{}'
// let s = '(]'
// let s = '([)]'
let s = '{[]}'
console.log(`re: `, isValid(s))











