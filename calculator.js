'use strict'

class Calculator {
  //write your code here
  constructor () {

  }
  add (num1, num2) {
    return num1 + num2;
  }
  substract (num1,num2) {
    return num1 - num2;
  }
  multiply (num1,num2) {
    return num1 * num2
  }
  divide (num1,num2) {
    return num1 /num2
  }
  square (num1 ,num2) {
      return Math.pow(num1, num2)
  }
  squareRoot (num) {
    return Math.sqrt(num)
  }
  luasLingkaran(num){
    const phi = 3.14;
    const phi2 = 22/7
    if(num %7 == 0){
      return phi2 * Math.pow(num, 2)
    }  else {
      return phi * Math.pow(num,2)
    }
  }
}
let calculator = new Calculator();

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
