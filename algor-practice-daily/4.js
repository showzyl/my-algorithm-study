/**
 *
 * is_square (-1) # => false
 * is_square   0 # => true
 * is_square   3 # => false
 * is_square   4 # => true
 * is_square  25 # => true
 * is_square  26 # => false
 */


function is_square(num) {
  if(num < 0) return false
  return Math.sqrt(num) % 1 === 0
}


console.log(`res1: `, is_square(-1))
console.log(`res2: `, is_square(0))
console.log(`res3: `, is_square(3))
console.log(`res4: `, is_square(4))
console.log(`res5: `, is_square(25))
console.log(`res6: `, is_square(26))


