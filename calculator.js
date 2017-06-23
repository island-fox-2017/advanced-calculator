'use strict'

class Calculator {
  constructor () {
    this.angka = 0;
  }
  add (bilanganPenambah) {
    this.angka += bilanganPenambah;
    return this;
  }
  substract (bilanganPengurang) {
    this.angka -= bilanganPengurang;
    return this;
  }
  multiply (bilanganPengali) {
    this.angka *= bilanganPengali;
    return this;
  }
  divide (bilanganPembagi) {
    this.angka /= bilanganPembagi;
    return this;
  }
  square (bilanganPemangkat) {
    this.angka = Math.pow(this.angka,bilanganPemangkat);
    return this;
  }
  squareRoot () {
    this.angka = Math.sqrt(this.angka);
    return this;
  }
  LuasLingkaran (jariJari) {
    const phi = 3.14;
    const phi2 = 22/7;
    if (jariJari % 7 == 0) {
      this.angka = phi2 * Math.pow(jariJari,2);
      return this
    } else {
      this.angka = phi * Math.pow(jariJari,2);
      return this
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
