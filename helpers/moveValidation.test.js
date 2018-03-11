const moveValidation = require('./moveValidation');

describe('MoveValidation helper', () => {
  test('If cell free return true', () => {
    const board = {
      height: 2,
      width: 2,
      cells: [0, 0, 0, 0],
      startPoints: [{ y: 1, x: 1 }]
    };
    expect(moveValidation(board, 1, 1)).toBeTruthy();
  });

  test('If cell is not free return false', () => {
    const board = {
      height: 2,
      width: 2,
      cells: [0, 0, 0, 1],
      startPoints: [{ y: 1, x: 1 }]
    };
    expect(moveValidation(board, 2, 2)).toBeFalsy();
  });

  test('If x coordination goes over board, return false', () => {
    const board = {
      height: 1,
      width: 2,
      cells: [0, 0],
      startPoints: [{ y: 1, x: 1 }]
    };
    expect(moveValidation(board, 3, 1)).toBeFalsy();
  });

  test('If y coordination goes over board, return false', () => {
    const board = {
      height: 1,
      width: 2,
      cells: [0, 0],
      startPoints: [{ y: 1, x: 1 }]
    };
    expect(moveValidation(board, 1, 2)).toBeFalsy();
  });
});
