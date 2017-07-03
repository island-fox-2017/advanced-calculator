'use strict'

class Calculator {
  //write your code here
  constructor (inputSatu, inputDua) {
    this.inputSatu = inputSatu;
    this.inputDua= inputDua;
    this.phi = 3.14
  }
  add () {
    return this.inputSatu + this.inputDua
  }
  substract () {
    return this.inputSatu - this.inputDua
  }
  multiply () {
    return this.inputSatu * this.inputDua
  }
  divide () {
    return this.inputSatu / this.inputDua
  }
  square () {
    return Math.pow(this.inputSatu, this.inputDua)
  }
  squareRoot () {
    return Math.sqrt(this.inputSatu)

  }
  lingkaran (r){
    return this.phi*(r*r);
  }
}
var hitung = new Calculator(81);

console.log(hitung.add(2).substract(1));
console.log(hitung.substract());
console.log(hitung.multiply());
console.log(hitung.divide());
console.log(hitung.square());
console.log(hitung.squareRoot());
console.log(hitung.lingkaran(4));

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
