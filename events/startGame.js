const store = require('../store');
const actions = require('../actions');
const data = require('../data');

module.exports = () =>
  new Promise(resolve => {
    store.dispatch(actions.setBoard(data.defaultBoard));
    resolve();
  });
