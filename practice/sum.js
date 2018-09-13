/**
 *
 * Created by showzyl on 2018/8/24
 *
 *  [ 、 ( 、 + 、 -
 *
 **/

'use strict'


/*
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

示例:
  给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

function twoSum(nums, target) {
  for (let i = nums.length - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      if (nums[j - 1] + nums[j] === target) {
        return [j - 1, j]
      }
    }
  }
}

console.log(`twoSum: `, twoSum([2, 7, 11, 15], 9))




