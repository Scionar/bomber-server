const getPlayerWithId = require('./getPlayerWithId');
const store = require('../store');

module.exports = (id, direction) => {
  const player = getPlayerWithId(id);
  if (player === null) return false;

  const position = player.position;
  const nextPosition = nextCoordination(position.x, position.y, direction);
  if (nextPosition === null) return false;

  const board = store.getState().board;
  const emptyCell = isEmptyCell(board, nextPosition.x, nextPosition.y);
  if (!emptyCell) return false;

  return true;
};

const nextCoordination = (x, y, direction) => {
  if (direction === 'up') return { x, y: y - 1 };
  if (direction === 'down') return { x, y: y + 1 };
  if (direction === 'left') return { x: x - 1, y };
  if (direction === 'right') return { x: x + 1, y };
  return null;
};

const isEmptyCell = (board, x, y) => {
  const boardCells = board.cells;
  const boardWidth = board.width;

  const cellIndex = (y - 1) * boardWidth + (x - 1);
  if (boardCells[cellIndex] !== 0) return false;

  return true;
};
