
const { insertSort } = require('./insertSort')
// console.log(`insertSort: `, insertSort)
/**
 *
 * @param A
 * @param k 桶的数量
 * @param S 每只桶的大小
 */
function bucketSort(A, k, S) {
  // 生成`k`个二维数组
  const buckets = Array.from({length: k}, () => [])

  // 放入桶中
  for (let i = 0; i < A.length; i++) {
    const index = ~~(A[i] / S)
    // const index = parseInt(A[i] / S)
    // console.log(`index: `, index)
    buckets[index].push(A[i])
  }

  // 排序每只桶
  for (let i = 0; i < buckets.length; i++) {
    console.log(`buckets: `, buckets[i])
    insertSort(buckets[i])
  }

  // 取出数据
  return [].concat(...buckets)

}


const A = [29, 25, 3, 49, 9, 37, 21, 43]
console.log(`A: `, bucketSort(A, 5, 10))








