const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeStr = "";
  str.split("").reduce((countRepeat, word, index) => {
    if (word === str[index + 1]) {
      countRepeat++;
    } else {
      encodeStr += countRepeat === 1 ? word : countRepeat + word;
      countRepeat = 1;
    }
    return countRepeat;
  }, 1);

  return encodeStr;
}

module.exports = {
  encodeLine,
};
