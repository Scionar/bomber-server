module.exports = {
  createUser: name => ({
    type: 'CREATE_USER',
    name
  }),

  removeUser: id => ({
    type: 'REMOVE_USER',
    id
  })
};
