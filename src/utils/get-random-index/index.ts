/**
 * Return a random Sudoku grid index in the 0-8 range
 */
const getRandomIndex = () => {
  return Math.floor(Math.random() * Math.floor(9));
};

export default getRandomIndex;
