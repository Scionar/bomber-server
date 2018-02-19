module.exports = {
  createPlayer: name => ({
    type: 'CREATE_PLAYER',
    name
  }),

  removePlayer: id => ({
    type: 'REMOVE_PLAYER',
    id
  })
};
