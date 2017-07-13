'use strict'

class Calculator {
  //write your code here
  constructor (x) {
    this.angka = x;
  }
  add (y = 0) {
    this.angka += y
    return this
  }
  substract (y = 0) {
    this.angka -= y
    return this
  }
  multiply (y = 1) {
    this.angka *= 1
    return this
  }
  divide (y = 1) {
    this.angka /= y
    return this
  }
  square (y = 1) {
    this.angka = Math.pow(this.angka, y)
    return this
  }
  squareRoot () {
    this.angka = Math.sqrt(this.angka)
    return this
  }
  // lingkaran (r){
  //   return this.phi*(r*r);
  // }
  hasil () {
    return `Hasilnya : ${this.angka}`
  }

}
var hitung = new Calculator(4);

console.log(hitung.square(1).add().substract().divide().hasil());
// console.log(hitung.add();
// console.log(hitung.substract());
// console.log(hitung.multiply());
// console.log(hitung.divide());
// console.log(hitung.square());
// console.log(hitung.squareRoot());
// console.log(hitung.lingkaran(4));

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
