const { createStore } = require('redux');
const reducer = require('./reducers');
const config = require('./config');
const events = require('./events');

const store = createStore(reducer);

store.subscribe(() => {
  const state = store.getState();

  if (process.env.DEBUG) console.log(state, 'new state');

  if (state.players.length >= config.maxPlayers) events.startGame();
});

module.exports = store;
