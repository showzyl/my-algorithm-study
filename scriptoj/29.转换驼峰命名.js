// http://scriptoj.mangojuice.top/problems/29

const toCamelCaseVar = (variable) => {
  return variable.replace(/__*(\w)/g, function (a, b, c) {
    if (c) {
      return b.toUpperCase()
    } else {
      return a
    }
  })
}

// console.log(`res: `, toCamelCaseVar('_this__is_my__name_'))
// console.log(`res: `, toCamelCaseVar('this_is_my_name'))
// console.log(`res: `, toCamelCaseVar('this__is_my__name'))
console.log(`res: `, toCamelCaseVar('__thisIs_myName'))
