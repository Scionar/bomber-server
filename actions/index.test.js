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
    expect(store.getState().players).toContainEqual({ id: 0, name: 'Tester' });
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
});
