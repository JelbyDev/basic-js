const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  if (arr.length === 0) return arr;

  let resultArr = { ...arr };
  let transforms = {
    "--discard-next": (index) => removeItem(index + 1),
    "--discard-prev": (index) => removeItem(index - 1),
    "--double-next": (index) => cloneItem(index, index + 1),
    "--double-prev": (index) => cloneItem(index, index - 1),
  };

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] in transforms) {
      delete resultArr[i];
      transforms[arr[i]](i);
    }
  }

  function removeItem(index) {
    if (!resultArr[index]) return;
    delete resultArr[index];
    return true;
  }

  function cloneItem(currentIndex, fromIndex) {
    if (!resultArr[fromIndex]) return;
    resultArr[currentIndex] = resultArr[fromIndex];
    return true;
  }

  return Object.values(resultArr);
}

module.exports = {
  transform,
};
