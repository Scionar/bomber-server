jest.mock('../actions');
jest.mock('../store');
const movePlayer = require('./movePlayer');
const actions = require('../actions');

describe('Move player up event', () => {
  test('Calls movePlayerUp action creator with same id', () => {
    const id = 1;
    movePlayer(id, 'up');
    expect(actions.movePlayerUp).toHaveBeenCalledWith(id);
    actions.movePlayerUp.mockClear();
  });

  test('Calls movePlayerDown action creator with same id', () => {
    const id = 2;
    movePlayer(id, 'down');
    expect(actions.movePlayerDown).toHaveBeenCalledWith(id);
    actions.movePlayerDown.mockClear();
  });

  test('Calls movePlayerLeft action creator with same id', () => {
    const id = 3;
    movePlayer(id, 'left');
    expect(actions.movePlayerLeft).toHaveBeenCalledWith(id);
    actions.movePlayerLeft.mockClear();
  });

  test('Calls movePlayerRight action creator with same id', () => {
    const id = 3;
    movePlayer(id, 'right');
    expect(actions.movePlayerRight).toHaveBeenCalledWith(id);
    actions.movePlayerRight.mockClear();
  });

  test('Does not call movePlayerUp action creator with invalid direction', () => {
    const id = 4;
    movePlayer(id, 'argh');
    expect(actions.movePlayerUp).not.toHaveBeenCalled();
    actions.movePlayerUp.mockClear();
  });
});
