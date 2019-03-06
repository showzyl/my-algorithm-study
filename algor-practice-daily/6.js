/**
 * 将数字的每一位求平方，然后组合成新的数字（注意：请返回一个数字）
 *
 */

function squareDigits(num) {
 return String(num).split('').map(i => i*i).join('')
}

console.log(`res1: `, squareDigits(9119))




