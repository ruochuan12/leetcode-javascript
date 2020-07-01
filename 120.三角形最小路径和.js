/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    return triangle.reduce((pre, item) => {
        var min = Array.isArray(item) ? Math.min.apply(null, item) : item;
        return pre + min;
    }, 0);
};
// @lc code=end

