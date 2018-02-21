const boardValidation = require('./boardValidation');

describe('BoardValidation helper', () => {
  const exampleBoard = {
    height: 3,
    width: 3,
    cells: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    startPoints: [
      { y: 1, x: 1 },
      { y: 1, x: 3 },
      { y: 3, x: 1 },
      { y: 3, x: 3 }
    ]
  };

  test('Return true if board valid', () => {
    expect(boardValidation(exampleBoard)).toBeTruthy();
  });

  test('Return false if board height not defined', () => {
    const board = { ...exampleBoard, height: undefined };
    expect(boardValidation(board)).toBeFalsy();
  });

  test('Return false if board width not defined', () => {
    const board = { ...exampleBoard, width: undefined };
    expect(boardValidation(board)).toBeFalsy();
  });

  test('Return false if board cells are not defined', () => {
    const board = { ...exampleBoard, cells: undefined };
    expect(boardValidation(board)).toBeFalsy();
  });

  test('Return false if board cell amount does not match with height and width', () => {
    const board = { ...exampleBoard, width: 2 };
    expect(boardValidation(board)).toBeFalsy();
  });

  test('Return false if player startPoints are not defined', () => {
    const board = { ...exampleBoard, startPoints: undefined };
    expect(boardValidation(board)).toBeFalsy();
  });

  test('Return false if player startPoints are out of board', () => {
    const board = {
      ...exampleBoard,
      startPoints: [...exampleBoard.startPoints, { y: 3, x: 4 }]
    };
    expect(boardValidation(board)).toBeFalsy();
  });
});
