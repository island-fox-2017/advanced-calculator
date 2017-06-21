'use strict'

class Calculator {
  //write your code here
  constructor (num = 1) {
    this.num = num;
  }
  
  add (x = 1) {
    this.num += x;
    return this;
  }
  
  substract (x = 1) {
    this.num -= x;
    return this;
  }
  
  multiply (x = 2) {
    this.num * x;
    return this;
  }
  
  divide (x = 2) {
    this.num / x;
    return this;
  }
  
  square () {
    this.num * this.num;
    return this;
  }
  
  squareRoot () {
    Math.sqrt(this.num);
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let calc = new Calculator();

//console.log(calc.add(7).substract(4).multiply(100).square());
console.log(calc.add(7));

module.exports = {
  Calculator
}
