const actions = require('../actions');
const store = require('../store');

module.exports = (id, direction) => {
  if (direction === 'up') store.dispatch(actions.movePlayerUp(id));
  if (direction === 'down') store.dispatch(actions.movePlayerDown(id));
  if (direction === 'left') store.dispatch(actions.movePlayerLeft(id));
  if (direction === 'right') store.dispatch(actions.movePlayerRight(id));
};
