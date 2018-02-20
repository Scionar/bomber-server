const { combineReducers } = require('redux');
const status = require('./status');
const board = require('./board');
const players = require('./players');

const app = combineReducers({
  status,
  board,
  players
});

module.exports = app;
