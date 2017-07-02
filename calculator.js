'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.angka = num;
    this.Pi = Math.PI;
  }

  add (num) {
    this.angka += num;
    return this;
  }
  substract (num) {
    this.angka -= num;
    return this;
  }
  multiply (num) {
    this.angka *= num;
    return this;
  }
  divide (num) {
    if (this.angka === 0){
      return 'Why 0, bro?';
    }else {
      this.angka /= num;
      return this;
    }
  }
  square (num) {
    this.angka = Math.pow(this.angka, num); //bisa berapa aja, nggak cuma perpangkatan 2
    return this;
  }
  squareRoot () {
    this.angka = Math.sqrt(this.angka);
    return this;
  }
  kelilinglingkarang () {
    this.angka = this.Pi * Math.pow(this.angka, 2);
    return this;
  }

  hasil (){
    return `Hasil dari perhitungan: ${this.angka}`;
  }
}


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

// let proses = new Calculator(1);


// console.log(proses.add(2).substract(1).multiply(10).divide(10).square(2).squareRoot().kelilinglingkarang().hasil());


module.exports = {
  Calculator
}
