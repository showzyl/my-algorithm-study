// http://scriptoj.mangojuice.top/problems/44

"use strict"


const isAnagram = (str1, str2) => {
  if(str1.length !== str2.length) return false
  let a1 = str1.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
  let a2 = str2.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
  return a1.every((item, i) => item === a2[i])
}


console.log(`res1: `, isAnagram("anagram", "nagaram")) // true
console.log(`res2: `, isAnagram("rat", "car")) // false
