const playersReducer = require('./players');

describe('Players reducer', () => {
  test('CREATE_PLAYER creates user with given username', () => {
    const action = {
      type: 'CREATE_PLAYER',
      name: 'Mary'
    };
    expect(playersReducer(undefined, action)[0]).toHaveProperty('name', 'Mary');
  });

  test('CREATE_PLAYER creates another user with given username to end of array', () => {
    const state = [{ id: 0, name: 'Mary' }];
    const action = {
      type: 'CREATE_PLAYER',
      name: 'John'
    };
    expect(playersReducer(state, action)[1]).toHaveProperty('name', 'John');
  });

  test('REMOVE_PLAYER removes player from state', () => {
    const state = [{ id: 0, name: 'Mary' }];
    const action = {
      type: 'REMOVE_PLAYER',
      id: 0
    };
    expect(playersReducer(state, action).length).toBe(0);
  });
});
