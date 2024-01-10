(function (root, factory) {
  var clone = factory(root);
  // AMD
  if (typeof define === "function" && define.amd) {
    define("clone", function () {
      return clone;
    });
  }
  // Commonjs
  else if (typeof exports === "object") {
    module.exports = clone;
  }
  // 原始模块
  else {
    var _clone = root.clone;
    clone.noConflict = function () {
      if (root.clone === clone) {
        root.clone = _clone;
      }
      return clone;
    };
    root.clone = clone;
  }
})(this, function (root) {
  function clone(source) {
    return JSON.parse(JSON.stringify(source));
  }
  return clone;
});
