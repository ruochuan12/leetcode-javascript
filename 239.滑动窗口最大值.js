/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//     var result = [];
//     for(var i = 0; i < nums.length - 2; i++){
//         var childNums = nums.slice(i, k);
//         result.push(Math.max.apply(null, childNums));
//     }
//     return result;
// };
let maxSlidingWindow = function (nums, k) {
    if (k === 0 || !nums.length) {
      return []
    }
    let left = 0
    let right = k - 1
    let res = [findMax(nums, left, right)]
  
    while (right < nums.length - 1) {
      right++
      left++
      res.push(findMax(nums, left, right))
    }
  
    return res
}
  
function findMax(nums, left, right) {
    let max = -Infinity
    for (let i = left; i <= right; i++) {
        max = Math.max(max, nums[i])
    }
    return max
}
// @lc code=end

