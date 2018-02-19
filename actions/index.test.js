const actions = require('./index');
const store = require('../store');

describe('Action creators', () => {
  test('createPlayer should create CREATE_PLAYER action with given name property', () => {
    expect(actions.createPlayer('username')).toEqual({
      type: 'CREATE_PLAYER',
      name: 'username'
    });
  });

  test('createPlayer creates player to state', () => {
    store.dispatch(actions.createPlayer('Tester'));
    expect(store.getState().players[0]).toHaveProperty('id', 0);
    expect(store.getState().players[0]).toHaveProperty('name', 'Tester');
    expect(store.getState().players[0]).toHaveProperty('auth');
  });

  test('deletePlayer should create REMOVE_PLAYER action with given id property', () => {
    expect(actions.removePlayer(0)).toEqual({
      type: 'REMOVE_PLAYER',
      id: 0
    });
  });

  test('removePlayer removes player from state', () => {
    store.dispatch(actions.removePlayer(0));
    expect(store.getState().players).not.toContainEqual({
      id: 0,
      name: 'Tester'
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

  test('setBoard sets right board layout to state', () => {
    const boardLayout = {
      height: 4,
      width: 3,
      cells: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
    };
    store.dispatch(actions.setBoard(boardLayout));
    expect(store.getState().board).toEqual(boardLayout);
  });
});
