const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const playerRouter = require('./routers/player');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/player', playerRouter);

app.get('/', (req, res) => {
  res.status(200).send('Bomber server');
});

module.exports = app;
