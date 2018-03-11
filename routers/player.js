const express = require('express');
const router = express.Router();
const store = require('../store');
const authentication = require('../helpers/authentication');
const getPlayerWithId = require('../helpers/getPlayerWithId');
const validateMove = require('../helpers/validateMove');
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

router.put('/:id/move/:dir', function(req, res) {
  const id = parseInt(req.params.id);
  const direction = req.params.dir;
  const requestAuth = req.body.auth;
  const playerAuth = getPlayerWithId(id).auth;
  const gameRunState = store.getState().status.running;

  if (!gameRunState) {
    res.status(422).json({
      error: 'Game is not running.'
    });
  } else if (!authentication.check(playerAuth, requestAuth)) {
    res.status(401).send();
  } else if (!validateMove(id, direction)) {
    res.status(422).json({
      error: 'Not valid move.'
    });
  } else {
    events.movePlayer(id, direction);
    res.status(200).send();
  }
});

module.exports = router;
