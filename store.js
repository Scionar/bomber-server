const { createStore } = require('redux');
const reducer = require('./reducers');

const store = createStore(reducer);

store.subscribe(() => {
  const state = store.getState();

  if (process.env.DEBUG) console.log(state, 'new state');
});

module.exports = store;
