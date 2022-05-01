const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let returnArr = Array.from({ length: matrix.length }, (_, i) =>
    Array.from({ length: matrix[0].length }, (_, i) => 0)
  );

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        let iStepLeft = i - 1 >= 0;
        let iStepRight = i + 1 <= matrix.length;
        let jStepLeft = j - 1 >= 0;
        let jStepRight = j + 1 <= matrix[i].length;

        if (iStepLeft) returnArr[i - 1][j] += 1;
        if (iStepRight) returnArr[i + 1][j] += 1;
        if (jStepLeft) returnArr[i][j - 1] += 1;
        if (jStepRight) returnArr[i][j + 1] += 1;

        if (iStepRight && jStepRight) returnArr[i + 1][j + 1] += 1;
        if (iStepRight && jStepLeft) returnArr[i + 1][j - 1] += 1;
        if (iStepLeft && jStepRight) returnArr[i - 1][j + 1] += 1;
        if (iStepLeft && jStepLeft) returnArr[i - 1][j - 1] += 1;
      }
    }
  }
  return returnArr;
}

module.exports = {
  minesweeper,
};
