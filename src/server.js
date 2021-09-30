'use strict';

const express = require('express');
const app = express();

// Bringing in modules to use
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');

// Global Middlware
app.use(logger);
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.status(200).send('Hello Main Sever');
});

app.get('/person', (req, res) => {
  const person = {
    name: req.query.name,
  }
  res.status(200).json(person);
});

// Handlers
app.use('*', notFoundHandler);
app.use(errorHandler);

// Exports to index.js
module.exports = {
  server: app,
  start: port => {
    if (!port) {
      throw new Error('Missing Port :(');
    }
    app.listen(port, () => console.log(`Server up on ${port}`));
  },
}

