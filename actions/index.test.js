const actions = require('./index');
const data = require('../data');

describe('Action creators', () => {
  test('createPlayer should create CREATE_PLAYER action with given name property', () => {
    expect(actions.createPlayer('username')).toEqual({
      type: 'CREATE_PLAYER',
      name: 'username'
    });
  });

  test('setPlayerPosition should create SET_PLAYER_POSITION action with x, y  and id properties', () => {
    expect(actions.setPlayerPosition(1, 2, 3)).toEqual({
      type: 'SET_PLAYER_POSITION',
      id: 1,
      y: 2,
      x: 3
    });
  });

  test('removePlayer should create REMOVE_PLAYER action with given id property', () => {
    expect(actions.removePlayer(0)).toEqual({
      type: 'REMOVE_PLAYER',
      id: 0
    });
  });

  test('setBoard should create SET_BOARD action with given board layout', () => {
    expect(actions.setBoard(data.defaultBoard)).toEqual({
      type: 'SET_BOARD',
      layout: data.defaultBoard
    });
  });

  test('startGame should create START_GAME action', () => {
    expect(actions.startGame()).toEqual({
      type: 'START_GAME'
    });
  });

  test('stopGame should create STOP_GAME action', () => {
    expect(actions.stopGame()).toEqual({
      type: 'STOP_GAME'
    });
  });

  test('movePlayerUp should create MOVE_PLAYER_UP action with player ID', () => {
    expect(actions.movePlayerUp(1)).toEqual({
      type: 'MOVE_PLAYER_UP',
      id: 1
    });
  });
});
