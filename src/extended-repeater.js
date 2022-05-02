const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let defaultOptions = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionSeparator: "|",
    additionRepeatTimes: 1,
  };
  options = { ...defaultOptions, ...options };

  let repeatItems = [];
  for (let i = 1; i <= options.repeatTimes; i++) {
    let repeatAdditionalItems = [];
    for (let j = 1; j <= options.additionRepeatTimes; j++) {
      repeatAdditionalItems.push(String(options.addition));
    }
    let repeatItem =
      str + repeatAdditionalItems.join(String(options.additionSeparator));
    repeatItems.push(repeatItem);
  }

  return repeatItems.join(String(options.separator));
}

module.exports = {
  repeater,
};
