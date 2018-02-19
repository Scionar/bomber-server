const express = require('express');
const router = express.Router();
const actions = require('../actions');
const store = require('../store');
const authentication = require('../helpers/authentication');

router.use(express.json());

router.post('/', function(req, res) {
  const name = req.body.name;
  store.dispatch(actions.createPlayer(name));

  const player = store
    .getState()
    .players.filter(current => current.name === name)[0];

  res.status(200).json({
    id: player.id,
    auth: authentication.hash(player.auth)
  });
});

module.exports = router;
