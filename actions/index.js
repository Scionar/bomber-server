module.exports = {
  createPlayer: name => ({
    type: 'CREATE_PLAYER',
    name
  }),

  setPlayerPosition: (id, y, x) => ({
    type: 'SET_PLAYER_POSITION',
    id,
    y,
    x
  }),

  removePlayer: id => ({
    type: 'REMOVE_PLAYER',
    id
  }),

  setBoard: layout => ({
    type: 'SET_BOARD',
    layout
  }),

  startGame: () => ({
    type: 'START_GAME'
  }),

  stopGame: () => ({
    type: 'STOP_GAME'
  }),

  movePlayerUp: id => ({
    type: 'MOVE_PLAYER_UP',
    id
  }),

  movePlayerDown: id => ({
    type: 'MOVE_PLAYER_DOWN',
    id
  }),

  movePlayerLeft: id => ({
    type: 'MOVE_PLAYER_LEFT',
    id
  }),

  movePlayerRight: id => ({
    type: 'MOVE_PLAYER_RIGHT',
    id
  }),

  reset: () => ({
    type: 'RESET'
  })
};
