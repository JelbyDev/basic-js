const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    let resultArr = [];
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let word of message) {
      if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) {
        word = String.fromCharCode(
          ((word.charCodeAt(0) -
            65 +
            key[count % key.length].charCodeAt(0) -
            65) %
            26) +
            65
        );
        count++;
      }
      resultArr.push(word);
    }

    if (!this.direct) resultArr.reverse();
    return resultArr.join("");
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    let resultArr = [];
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let word of message) {
      if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) {
        word = String.fromCharCode(
          ((word.charCodeAt(0) +
            65 -
            key[count % key.length].charCodeAt(0) +
            65) %
            26) +
            65
        );
        count++;
      }
      resultArr.push(word);
    }
    if (!this.direct) resultArr.reverse();
    return resultArr.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
