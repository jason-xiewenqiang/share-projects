import { clone } from "./clone";

const a = { a: 1 };
const b = clone(a);
console.log(a === b);
