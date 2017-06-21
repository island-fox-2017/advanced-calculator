'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num
    this.pi = Math.PI
  }
  add (added) {
    this.num += added;
    return this;
  }
  substract (subs) {
    this.num -= subs;
    return this;
  }
  multiply (mult) {
    this.num *= mult;
    return this;
  }
  divide (div) {
    this.num /= div;
    return this;
  }
  square (seq) {
    this.num = Math.pow(this.num, seq)
    return this;
  }
  squareRoot () {
    this.num = Math.sqrt(this.num);
    return this;
  }
  
  calculateCircle(){
    this.num = this.pi*Math.pow(this.num, 2)
    return this;
  }
  
  result(){
    return `hasil akhir perhitungan : ${this.num}`
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
