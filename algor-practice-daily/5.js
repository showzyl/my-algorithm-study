/**
 * 写一个函数，将字符串除了最后的四位，其他都变成#
 *
 * maskify("4556364607935616") == "############5616"
 * maskify(     "64607935616") ==      "#######5616"
 * maskify(               "1") ==                "1"
 * maskify(                "") ==                 ""
 * // "What was the name of your first pet?"
 * maskify("Skippy")                                   == "##ippy"
 * maskify("Nananananananananananananananana Batman!") == "####################################man!"
 *
 */


function maskify(str) {
  // console.log(`str: `, str.substr(-4, 4))
  if(str.length < 4) return str
  // console.log(`str: `, str.substr(0, str.length - 4))
  let len = str.substr(0, str.length - 4).length
  return '#'.repeat(len) + str.substr(-4, 4)
}


console.log(`res1: `, maskify("4556364607935616"))
console.log(`res2: `, maskify("64607935616"))
console.log(`res3: `, maskify("1"))
console.log(`res4: `, maskify(""))
console.log(`res5: `, maskify("Skippy"))
console.log(`res6: `, maskify("Nananananananananananananananana Batman!"))



