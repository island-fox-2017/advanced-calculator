'use strict'

const {
  Calculator
} = require("./calculator.js")


var cal = new Calculator();

console.log(cal.add(2, 3));
console.log(cal.substract(5, 3));
console.log(cal.multiply(5, 5));
console.log(cal.divide(50, 5));
console.log(cal.square(5, 3));
console.log(cal.squareRoot(100));
// execute function on calculator.js in here
