const express = require('express');
const app = express();
const playerRouter = require('./routers/player');

app.use('/player', playerRouter);

app.get('/', (req, res) => {
  res.status(200).send('Bomber server');
});

module.exports = app;
