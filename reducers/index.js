const { combineReducers } = require('redux');
const board = require('./board');

const app = combineReducers({
  board
});

module.exports = app;
