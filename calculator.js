'use strict'

class Calculator {
  //write your code here
  constructor (firstNum, secondNum) {
    this.pertama = firstNum;
    this.kedua = secondNum;
    this.pi = 3.14
  }
  add () {
    return this.pertama + this.kedua
  }
  substract () {
    return this.pertama - this.kedua
  }
  multiply () {
    return this.pertama * this.kedua
  }
  divide () {
    return this.pertama / this.kedua
  }
  square () {
    return Math.pow(this.pertama, this.kedua)
  }
  squareRoot () {
    return [Math.sqrt(this.pertama), Math.sqrt(this.kedua)].join(', ');
  }
  lingkaran (r) {
    return this.pi*(r*r)
  }
}
var bilangans = new Calculator(5, 4)
console.log(bilangans.add());
console.log(bilangans.square());
console.log(bilangans.squareRoot());
console.log(bilangans.lingkaran(4));
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
