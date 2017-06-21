'use strict'

class Calculator {
  //write your code here
  constructor() {
    this.result = 0;
  }
  add(num = 1) {
    this.result += num;
    return this;
  }
  substract(num = 1) {
    this.result -= num;
    return this;
  }
  multiply(num = 1 ) {
    this.result *= num;
    return this;
  }
  divide(num = 1) {
    this.result /= num;
    return this;
  }
  square(num = 1) {
    this.result = Math.pow(this.result, num);
    return this;
  }
  squareRoot() {
    this.result = Math.sqrt(this.result);
    return this;
  }

}

let calc = new Calculator();


//console.log(`hasil penambahan dari 0 tambah 2 adalah ${calc.add(2)}`);
// calc.add(2);
// calc.substract(1);
// calc.multiply(10);
// calc.multiply(10);
// calc.divide(2);
// calc.square(2);
// calc.squareRoot();


calc.add(2).substract(1).multiply(10).multiply(10).divide(2).square(2).squareRoot();
console.log(calc);

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
