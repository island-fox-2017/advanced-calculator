'use strict'

const {Calculator} = require("./calculator.js")

let kalkulator = new Calculator();

kalkulator.add(9).substract(7).multiply(10).divide(2).square(2).squareRoot();
console.log(kalkulator);
kalkulator.LuasLingkaran(7);
console.log(kalkulator);

// execute function on calculator.js in here
