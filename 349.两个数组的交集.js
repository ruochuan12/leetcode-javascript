/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */


// set 方案
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var result = [];
    var smallerSet = new Set(nums1);
    var biggerSet = new Set(nums2);
    if(biggerSet.size < smallerSet.size){
        var temp = smallerSet;
        smallerSet = biggerSet;
        biggerSet = temp;
    }
    smallerSet.forEach((item) => {
        if(biggerSet.has(item)){
            result.push(item);
        }
    });
    return result;
};
// @lc code=end


// 数组 方案
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var result = [];
    var smallerSet = nums1;
    var biggerSet = nums2;
    if(biggerSet.length < smallerSet.length){
        var temp = smallerSet;
        smallerSet = biggerSet;
        biggerSet = temp;
    }
    smallerSet.forEach((item) => {
        if(biggerSet.includes(item)){
            result.push(item);
        }
    });
    return result;
};
// @lc code=end