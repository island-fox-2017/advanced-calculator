'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num
    this.phi = Math.PI
  }
  
  add (numInput) {
    this.num += numInput
    return this
  }
  
  substract (numInput) {
    this.num -= numInput
    return this
  }
  
  multiply (numInput) {
    this.num *= numInput
    return this
  }
  
  divide (numInput) {
    this.num /= numInput
    return this
  }
  
  square () {
    this.num = Math.pow(this.num, 2)
    return this
  }
  
  squareRoot () {
    this.num = Math.sqrt(this.num)
    return this
  }
  
  circumferenceCircle(){
    this.num = 2 * this.phi * this.num
    return this;
  }
  
  result(){
    console.log(`The result is = ${this.num}`);
  }
}

var calculator = new Calculator(2)
calculator.add(3).substract(1).multiply(6).divide(3).square().squareRoot().circumferenceCircle().result()

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
