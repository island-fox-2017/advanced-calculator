'use strict'

class Calculator {
  //write your code here
  constructor (inputNum) {
    this.inputNum = inputNum;
  }
  add (tambah) {
    this.inputNum += tambah;
    return this.inputNum
  }
  substract (kurang) {
    this.inputNum -= kurang
    return this.inputNum
  }
  multiply (kali) {
    this.inputNum *= kali
    return this.inputNum
  }
  divide (bagi) {
    this.inputNum /= bagi
    return this.inputNum
  }
  square (pangkat) {
    this.inputNum = Math.pow(this.inputNum, pangkat);
    return this.inputNum
  }
  squareRoot () {
    return Math.sqrt(this.inputNum);
    // return this.inputNum
  }
}



let angkaBaru = new Calculator(9)
console.log('hasil tambah angkaBaru + 4 adalah : ' + angkaBaru.add(4));
console.log('hasil kurang angkaBaru - 4 adalah : ' + angkaBaru.substract(4));
console.log('hasil kali angkaBaru x 9 adalah : ' + angkaBaru.multiply(9));
console.log('hasil bagi angkaBaru / 3 adalah : ' + angkaBaru.divide(3));
console.log('hasil angkaBaru dipangkat 2 : ' + angkaBaru.square(2));
// console.log('hasil akar kuadrat angkaBaru adalah s: ' angkaBaru.squareRoot());
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
