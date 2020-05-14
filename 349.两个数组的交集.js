/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var result = [];
    var biggerSet = new Set(nums1);
    var smallerSet = new Set(nums2);
    if(nums2.length > nums1.length){
        biggerSet = new Set(nums2);
        smallerSet = new Set(nums1);
    }
    for(var item of smallerSet){
        if(biggerSet.has(item)){
            result.push(item);
        }
    }
    return result;
};
// @lc code=end

