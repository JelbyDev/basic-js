const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  let nArr = String(n).split("");
  nArr.forEach((number, index) => {
    if (index === 0 || nArr[index] < nArr[index - 1]) {
      let numberArr = String(n).split("");
      delete numberArr[index];
      let joinNumberArr = Number(numberArr.join(""));
      !maxNumber || maxNumber < joinNumberArr
        ? (maxNumber = joinNumberArr)
        : "";
    }
  });

  return maxNumber;
}

module.exports = {
  deleteDigit,
};
