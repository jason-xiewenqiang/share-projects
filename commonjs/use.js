const clone = require("./define.js");
const clone1 = require('../umd/clone.umd.js');
const a = { a: 1 };
const b = clone(a);
const c = clone1(a);

console.log(a === b);
console.log(a === c);
