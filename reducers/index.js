const { combineReducers } = require('redux');
const status = require('./status');
const board = require('./board');
const players = require('./players');

const appReducer = combineReducers({
  status,
  board,
  players
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') state = undefined;
  return appReducer(state, action);
};

module.exports = rootReducer;
