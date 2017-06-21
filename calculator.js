'use strict'

class Calculator {
  //write your code here
  constructor() {
    this.num;
  }
  add(x, y) {
    return x + y;
  }
  substract(x, y) {
    return x - y
  }
  multiply(x, y) {
    return x * y
  }
  divide(x, y) {
    return x / y
  }
  square(x, y) {
    return Math.pow(x, y)
  }
  squareRoot(x) {
    return Math.sqrt(x)
  }
}

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
