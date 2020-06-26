/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var length = s.length;
    if(length % 2) return false;
    var arr = [];
    var map = {
       ')': '(',
       ']': '[',
       '}': '{'
    };
    for(var i = 0; i < length; i++){
        var letter = s[i];
        var mapItem = map[letter];
        if(typeof mapItem === 'undefined'){
            arr.push(letter);
        }
        else if(mapItem !== arr.pop()){
            return false;
        }
    }
    return !arr.length;
};
// @lc code=end

