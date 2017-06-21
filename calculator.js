'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.num= 1;
    this.pi= 22/7;
  }
  add (x) {
    this.num += x
    return this
  }
  substract (x) {
    this.num -= x
    return this
  }
  multiply (x) {
    this.num *= x
    return this
  }
  divide (x) {
    this.num /= x
    return this
  }
  square () {
    this.num= Math.pow(this.num,2)
    return this
  }
  squareRoot () {
    this.num= Math.sqrt(this.num)
    return this
  }
  circle() {
    this.num= Math.pow(this.num,2)*this.pi
    return this
  }
  save() {
    console.log(`Hasil perhitungan = ${this.num}`);
  }
}

var calculator = new Calculator()
calculator.add(1).square(2).multiply(3).circle().save()

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
