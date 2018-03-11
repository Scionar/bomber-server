jest.mock('../actions');
const movePlayer = require('./movePlayer');
const actions = require('../actions');

describe('Move player up event', () => {
  test('Calls movePlayerUp action creator with same id', () => {
    const id = 123;
    movePlayer(id, 'up');
    expect(actions.movePlayerUp).toHaveBeenCalledWith(id);
    actions.movePlayerUp.mockClear();
  });

  test('Calls movePlayerDown action creator with same id', () => {
    const id = 123;
    movePlayer(id, 'down');
    expect(actions.movePlayerDown).toHaveBeenCalledWith(id);
    actions.movePlayerUp.mockClear();
  });

  test('Does not call movePlayerUp action creator with invalid direction', () => {
    const id = 123;
    movePlayer(id, 'argh');
    expect(actions.movePlayerUp).not.toHaveBeenCalled();
    actions.movePlayerUp.mockClear();
  });
});
