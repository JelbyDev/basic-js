const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainLength: [],
  getLength() {},
  addLink(value) {
    if (value === undefined) value = "";
    this.chainLength.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    let deleteIndex = position - 1;
    if (!this.chainLength[deleteIndex])
      this.setError("You can't remove incorrect link!");
    this.chainLength.splice(deleteIndex, 1);
    return this;
  },
  reverseChain() {
    this.chainLength.reverse();
    return this;
  },
  finishChain() {
    let printChain = this.chainLength.join("~~");
    this.chainLength = [];
    return printChain;
  },
  setError(text) {
    this.chainLength = [];
    throw new Error(text);
  },
};

module.exports = {
  chainMaker,
};
