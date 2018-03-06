const express = require('express');
const router = express.Router();
const store = require('../store');
const authentication = require('../helpers/authentication');
const events = require('../events');

router.post('/', function(req, res) {
  const name = req.body.name;
  events.addPlayer(name);

  const player = store
    .getState()
    .players.filter(current => current.name === name)[0];

  res.status(200).json({
    id: player.id,
    auth: authentication.hash(player.auth)
  });
});

router.post('/:id/up', function(req, res) {
  const id = parseInt(req.params.id);
  const requestAuth = req.body.auth;
  const playerAuth = store
    .getState()
    .players.filter(current => current.id === id)[0].auth;

  if (!authentication.check(playerAuth, requestAuth)) {
    res.status(401).send();
  } else {
    events.movePlayerUp(id);
    res.status(200).send();
  }
});

module.exports = router;
