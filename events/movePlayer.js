const actions = require('../actions');

module.exports = (id, direction) => {
  if (direction === 'up') actions.movePlayerUp(id);
  if (direction === 'down') actions.movePlayerDown(id);
};
