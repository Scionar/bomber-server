const actions = require('./index');
const store = require('../store');

describe('Action creators', () => {
  test('createUser should create CREATE_USER action with given name property', () => {
    expect(actions.createUser('username')).toEqual({
      type: 'CREATE_USER',
      name: 'username'
    });
  });

  test('createUser creates user to state', () => {
    store.dispatch(actions.createUser('Tester'));
    expect(store.getState().players).toContainEqual({ id: 0, name: 'Tester' });
  });

  test('deleteUser should create REMOVE_USER action with given id property', () => {
    expect(actions.removeUser(0)).toEqual({
      type: 'REMOVE_USER',
      id: 0
    });
  });

  test('removeUser removes user from state', () => {
    store.dispatch(actions.removeUser(0));
    expect(store.getState().players).not.toContainEqual({
      id: 0,
      name: 'Tester'
    });
  });
});
