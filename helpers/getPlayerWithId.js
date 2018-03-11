const store = require('../store');

module.exports = id => {
  const filtered = store
    .getState()
    .players.filter(current => current.id === id);
  return filtered.length ? filtered[0] : null;
};
