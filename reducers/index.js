const { combineReducers } = require('redux');
const board = require('./board');
const players = require('./players');

const app = combineReducers({
  board,
  players
});

module.exports = app;
