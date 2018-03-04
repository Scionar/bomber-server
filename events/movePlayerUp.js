const actions = require('../actions');

module.exports = id => {
  actions.movePlayerUp(id);
  return true;
};
