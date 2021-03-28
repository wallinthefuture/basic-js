module.exports = function countCats(matrix) {
  let countOfCats = 0;
  matrix.forEach((element) => {
    element.forEach((el) => {
      if (el == '^^') {
        countOfCats++;
      }
    });
  });
  return countOfCats;
};
