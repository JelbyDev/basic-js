const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1WordCount = {};
  let s2WordCount = {};
  let resultCount = 0;

  for (word of s1) {
    s1WordCount.hasOwnProperty(word)
      ? (s1WordCount[word] += 1)
      : (s1WordCount[word] = 1);
  }

  for (word of s2) {
    s2WordCount.hasOwnProperty(word)
      ? (s2WordCount[word] += 1)
      : (s2WordCount[word] = 1);
  }

  Object.keys(s1WordCount).forEach((index) => {
    resultCount += s2WordCount.hasOwnProperty(index)
      ? Math.min(s1WordCount[index], s2WordCount[index])
      : 0;
  });

  return resultCount;
}

module.exports = {
  getCommonCharacterCount,
};
