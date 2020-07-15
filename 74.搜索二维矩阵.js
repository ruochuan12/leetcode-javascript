/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/**
 * 方法1
var searchMatrix = function(matrix, target) {
     return matrix.some(el => el.includes(target));
};
 */
/**
 * 方法2
 * 
 */

var searchMatrix = function(matrix, target) {
    if(!Array.isArray(matrix)) return false;
    if(matrix.length == 0) return false;
    if(matrix[0].length == 0) return false;
    var row = 0, col = matrix[0].length - 1;
    while(row < matrix.length && col >= 0){
        if(matrix[row][col] < target){
            row++;
        }
        else if(matrix[row][col] > target){
            col--;
        }
        else{
            return true;
        }
    }
    return false;
};

// @lc code=end