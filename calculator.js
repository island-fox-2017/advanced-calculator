'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number;

  }

  add (angka) {
    this.number += angka;
    return this;
  }

  substract (angka) {
    this.number -= angka;
    return this;
  }

  multiply (angka) {
    this.number *= angka;
    return this;
  }

  divide (angka) {
    this.number /= angka;
    return this;
  }

  exp (angka) {
    this.number = Math.pow(this.number, angka);
    return this;
  }

  squareRoot () {
    this.number = Math.sqrt(this.number);
    return this;
  }

  areaOfCircle(jari2) {
    this.number = Math.PI * (Math.pow(jari2, 2));
    return this;
  }

} // --- class Calculator ---

let calc = new Calculator(0);

// let hitung = calc.add(10).substract(6).multiply(2).divide(4).exp(2).squareRoot(2).number;
let hitung = calc.add(10)
                 .substract(6)  // 4
                 .multiply(2)   // 8
                 .divide(4)     // 2
                 .exp(4)        // 16
                 .squareRoot()  // 4
                 .add(6)        // 10
                 .number;
console.log(hitung);
console.log(calc.areaOfCircle(hitung).number);



/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = {
  Calculator
}
