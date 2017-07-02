'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.first_Num ;
    this.Last_Num ;

  }
  add (angka1, angka2) {
    return angka1 + angka2;
  }
  substract (angka1, angka2) {
    return angka1 - angka2;
  }
  multiply (angka1, angka2) {
    return angka1 * angka2;
  }
  divide (angka1, angka2) {
    return angka1/angka2;
  }
  square (angka1, angka2) {
    return Math.pow(angka1, angka2)
  }
  squareRoot (angka1) {
    return Math.sqrt(angka1)
  }
  ConstPi (jari1)
  {
    const pi = 3.14;
    return pi*(Math.pow(jari1,2));

  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
let myCal = new Calculator()
console.log(myCal.ConstPi(4));

module.exports = {
  Calculator
}
