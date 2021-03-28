const CustomError = require('../extensions/custom-error');

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value == null) this.chain.push('null');
    else this.chain.push(value.toString());
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error();
    } else this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishString = '';
    this.chain.forEach((el) => {
      finishString += '( ' + el + ' )~~';
    });
    this.chain = [];
    return finishString.slice(0, finishString.length - 2);
  },
};

module.exports = chainMaker;
