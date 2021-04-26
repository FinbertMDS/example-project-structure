/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const {package1Name, packageName, useAdd} = require("@huynv/package-2")
const {add} = require("@huynv/package-1")

console.log(package1Name);
console.log(packageName);
console.log(add(1,1));
console.log(useAdd(1,2));