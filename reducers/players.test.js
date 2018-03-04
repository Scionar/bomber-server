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

  test('SET_PLAYER_POSITION sets position for given player by id', () => {
    const state = [{ id: 0, name: 'Mary' }];
    const action = {
      type: 'SET_PLAYER_POSITION',
      id: 0,
      y: 1,
      x: 2
    };

    expect(playersReducer(state, action)[0]).toHaveProperty(
      'position',
      expect.objectContaining({
        x: expect.any(Number),
        y: expect.any(Number)
      })
    );
  });

  test('SET_PLAYER_POSITION does not set id for other players', () => {
    const state = [{ id: 0, name: 'Mary' }];
    const action = {
      type: 'SET_PLAYER_POSITION',
      id: 9,
      y: 1,
      x: 2
    };

    expect(playersReducer(state, action)[0]).not.toHaveProperty('position');
  });

  test('REMOVE_PLAYER removes player from state', () => {
    const state = [{ id: 0, name: 'Mary' }];
    const action = {
      type: 'REMOVE_PLAYER',
      id: 0
    };
    expect(playersReducer(state, action).length).toBe(0);
  });

  test("MOVE_PLAYER_UP decrease user's y position by one", () => {
    const state = [
      { id: 0, name: 'Mary', position: { y: 1, x: 1 } },
      { id: 1, name: 'John', position: { y: 1, x: 1 } }
    ];
    const action = {
      type: 'MOVE_PLAYER_UP',
      id: 0
    };
    expect(playersReducer(state, action)[0].position.y).toBe(0);
  });
});
