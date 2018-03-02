const store = require('../store');
const config = require('../config');
const actions = require('../actions');
const events = require('.');

module.exports = name => {
  store.dispatch(actions.createPlayer(name));
  if (store.getState().players.length >= config.maxPlayers) events.startGame();
};
