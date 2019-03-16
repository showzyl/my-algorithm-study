// http://scriptoj.mangojuice.top/problems/33


const flatten = (arr) => {
  return arr.reduce((acc, item) => {
    return Array.isArray(item) ? acc.concat(flatten(item)) : acc.concat(item)
  }, [])
}





