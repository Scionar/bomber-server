const store = require('../store');
const actions = require('../actions');
const data = require('../data');

module.exports = () => {
  // Set board
  store.dispatch(actions.setBoard(data.defaultBoard));

  // Position players
  const state = store.getState();
  state.players.forEach((current, index) => {
    const y = state.board.startPoints[index].y;
    const x = state.board.startPoints[index].x;
    store.dispatch(actions.setPlayerPosition(current.id, y, x));
  });

  // Set game status running
  store.dispatch(actions.startGame());
};
