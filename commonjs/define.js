/**
 * 规范中的定义方式
 * define(function(require, exports, module) { // ...Code })
 * 在NodeJs中自动生成了包裹函数
 */

function clone(source) {
  return JSON.parse(JSON.stringify(source))
}

module.exports = clone;