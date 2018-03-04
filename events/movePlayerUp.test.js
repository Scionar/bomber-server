jest.mock('../actions');
const movePlayerUp = require('./movePlayerUp');
const actions = require('../actions');

describe('Move player up event', () => {
  test('Returns true', () => {
    expect(movePlayerUp()).toBe(true);
    actions.movePlayerUp.mockClear();
  });

  test('Calls movePlayerUp action creator', () => {
    movePlayerUp();
    expect(actions.movePlayerUp.mock.calls.length).toBe(1);
    actions.movePlayerUp.mockClear();
  });

  test('Calls movePlayerUp action creator with same parameter ', () => {
    const id = 123;
    movePlayerUp(id);
    expect(actions.movePlayerUp.mock.calls[0]).toEqual([id]);
  });
});
