'use strict'

// 19. 2018年8月31日题目
// 写一个函数peak寻找一个数组的峰值位置。 比如数组: 1,3,5,7,4,2有峰值7；已排序数组1,2,3,4,5,6，有峰值6。有的数组有多个峰值，这里只需要返回任何一个。比如数组[1,2,3,2,7,6]有两个峰值3和7。
//
// 如果一个元素左右元素都相同，那么这个元素就是峰值，比如数组1,1,1,1，每个元素都是峰值。
//
// 答案:
//
// 参考二分查找，如果一次猜测不是峰值，那么分成两种情况：
//
// 左边数字大于猜测，那么左边一定存在峰值
// 右边数字大于猜测，那么右边一定存在峰值

function is_peak(A, g) {

}


function peak(A) {

}

console.log(`res1: `, peak([1,2,3,4,5,6]))  // 5(6所在的位置）
console.log(`res2: `, peak([1,3,5,7,4,2])) // 3（7所在的位置）
console.log(`res3: `, peak([1,2,3,2,7,6])) // 2(3所在的位置)
console.log(`res4: `, peak([1,1,1,1,1,1])) // 任何一个都是峰值












