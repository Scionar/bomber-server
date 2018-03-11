module.exports = (board, x, y) => {
  const boardCells = board.cells;
  const boardWidth = board.width;

  const cellIndex = (y - 1) * boardWidth + (x - 1);
  if (boardCells[cellIndex] !== 0) return false;

  return true;
};
