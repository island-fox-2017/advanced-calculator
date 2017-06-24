'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calc = new Calculator(5)

calc.add(5).substract(5).multiply(5).divide(5).square().squareRoot().display();

calc.lingkaran(7).display()
// console.log('Hasil penambahan');
// calc.add(5).display()
// console.log('Hasil pengurangan');   
// calc.substract(5).display()
// console.log('Hasil perkalian');
// calc.multiply(5).display()
// console.log('Hasil pembagian');
// calc.divide(5).display()
// console.log('Hasil pangkat');
// calc.square().display()
// console.log('Hasil akar pangkat');
// calc.squareRoot().display()
