'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * 树结构遍历函数
 * @param nodeList 节点数组
 * @param callback 遍历节点回调，传入：节点，节点索引，父级节点数组，控制器(stop - 设置为true时，可以停止遍历)
 * @param parents 各级父级节点
 * @param ctrl 控制是否停止遍历
 * @param childrenKey 子项的键
 */
function walk(nodeList, callback, parents, ctrl, childrenKey) {
    var _a;
    if (parents === void 0) { parents = []; }
    if (ctrl === void 0) { ctrl = { stop: false }; }
    if (childrenKey === void 0) { childrenKey = 'children'; }
    if (Array.isArray(nodeList)) {
        for (var i = 0, l = nodeList.length; i < l; i++) {
            callback(nodeList[i], i, parents, ctrl);
            if (!ctrl.stop) {
                var children = ((_a = nodeList[i]) === null || _a === void 0 ? void 0 : _a[childrenKey]) || [];
                var node = nodeList[i];
                parents.push(node);
                if (children && children.length) {
                    walk(children, callback, __spreadArray([], parents, true), ctrl);
                }
                parents.pop();
            }
            else {
                break;
            }
        }
    }
}

/**
 * 下划线单词装驼峰
 * @param word 英文（有下划线）
 * @returns { String } 驼峰格式
 */
var toHump = function (word) {
    if (word.includes('_')) {
        var strs = word.split('_');
        var allHums = strs
            .slice(1)
            .map(function (str) { return str.charAt(0).toUpperCase() + str.slice(1); });
        return __spreadArray([strs[0]], allHums, true).join('');
    }
    return word;
};
/**
 * 驼峰单词转下划线
 * @param word 英文
 * @returns { String } 下划线格式
 */
var toUnderline = function (word) {
    return word.replaceAll(/A-Z/g, function (str) {
        return "_".concat(str.toLowerCase());
    });
};

exports.toHump = toHump;
exports.toUnderline = toUnderline;
exports.walk = walk;
