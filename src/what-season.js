const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";

  try {
    let numberDate = Number(date);
    let moth = date.getMonth() + 1;
    if (moth === 12 || moth < 3) return "winter";
    if (moth < 6) return "spring";
    if (moth < 9) return "summer";
    return "autumn";
  } catch (error) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
