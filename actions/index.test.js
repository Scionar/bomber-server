const actions = require('./index');

describe('Action creators', () => {
  test('createPlayer should create CREATE_PLAYER action with given name property', () => {
    expect(actions.createPlayer('username')).toEqual({
      type: 'CREATE_PLAYER',
      name: 'username'
    });
  });

  test('deletePlayer should create REMOVE_PLAYER action with given id property', () => {
    expect(actions.removePlayer(0)).toEqual({
      type: 'REMOVE_PLAYER',
      id: 0
    });
  });

  test('setBoard should create SET_BOARD action with given board layout', () => {
    const boardLayout = {
      height: 4,
      width: 3,
      cells: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
    };
    expect(actions.setBoard(boardLayout)).toEqual({
      type: 'SET_BOARD',
      layout: boardLayout
    });
  });
});
