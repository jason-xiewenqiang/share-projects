(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.XbroUtils = {}));
})(this, (function (exports) { 'use strict';

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
     * @example <caption>cameCase('hello_world')</caption>
     * // returns helloWorld
     * @returns { String } 驼峰格式
     * @see {@link more} for further information.
     * @see {@link https://www.lodashjs.com/docs/lodash.camelCase|lodash.camelCase}
     */
    var cameCase = function (word, connector) {
        if (connector === void 0) { connector = '_'; }
        if (word.includes(connector)) {
            var strs = word.split(connector);
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
     * @example <caption>kebabCase('helloWorld')</caption>
     * // returns hello_world
     * @returns { String } 下划线格式
     * @see {@link more} for further information.
     * @see {@link https://www.lodashjs.com/docs/lodash.kebabCase|lodash.kebabCase}
     */
    var kebabCase = function (word, connector) {
        if (connector === void 0) { connector = '_'; }
        var cases = word.match(/[A-Z][a-z]{0,}/g) || [];
        var firstWord = word.replace(cases.join(''), '');
        return (firstWord +
            cases.reduce(function (result, word) {
                return result + connector + word.toLowerCase();
            }, ''));
    };

    exports.cameCase = cameCase;
    exports.kebabCase = kebabCase;
    exports.walk = walk;

}));