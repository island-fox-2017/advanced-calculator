'use strict'

class Calculator {
  constructor () {
    this.angka = 0;
    this.phi = 3.14;
    this.phi2 = 22/7;
  }
  add (bilanganPenambah) {
    return this.angka += bilanganPenambah;
  }
  substract (bilanganPengurang) {
    return this.angka -= bilanganPengurang;
  }
  multiply (bilanganPengali) {
    return this.angka *= bilanganPengali;
  }
  divide (bilanganPembagi) {
    return this.angka /= bilanganPembagi;
  }
  square (bilanganPemangkat) {
    this.angka = Math.pow(this.angka,bilanganPemangkat);
    return this.angka;
  }
  squareRoot () {
    this.angka = Math.sqrt(this.angka);
    return this.angka;
  }
  LuasLingkaran (jariJari) {
    if (jariJari % 7 == 0) {
      this.angka = this.phi2 * Math.pow(jariJari,2);
      return this.angka
    } else {
      this.angka = this.phi * Math.pow(jariJari,2);
      return this.angka
    }
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
