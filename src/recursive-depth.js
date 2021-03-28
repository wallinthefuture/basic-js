module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1, result = []) {
    result.push(depth);
    arr.forEach((element) => {
      if (Array.isArray(element))
        this.calculateDepth(element, depth + 1, result);
    });
    return Math.max(...result);
  }
};
