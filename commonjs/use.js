const clone = require("./define.js");
const a = { a: 1 };
const b = clone(a);

console.log(a === b);
