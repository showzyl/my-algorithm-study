/**
 *
 * Created by showzyl on 2018/8/24
 *
 *  [ 、 ( 、 + 、 -
 *
 **/

'use strict'

//
function isPalindrome(str) {
  for (let i = 0, len = str.length - 1; i < str.length / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false
    }
  }
  return true
}


// palindrome("almostomla")


console.log(`isPalindrome(): `, isPalindrome('almostsomla'))





















