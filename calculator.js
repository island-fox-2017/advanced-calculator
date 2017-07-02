'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.total = 0;
  }
  add (x=0) {
    this.total += x;
    return this;
  }
  substract (x=0) {
    this.total -= x;
    return this;
  }
  multiply (x=1) {
    this.total *= x;
    return this;
  }
  divide (x=1) {
    this.total /= x;
    return this;
  }
  square (x=1) {
    this.total = Math.pow(this.total, x);
    return this;
  }
  squareRoot () {
    this.total = Math.sqrt(this.total);
    return this;
  }
}

let cal = new Calculator();

cal.add(10).substract(5).multiply(3).divide(2).square(2).squareRoot();
console.log(cal);

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
