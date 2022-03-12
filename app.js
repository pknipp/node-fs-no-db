const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Security Middleware
app.use(cors({ origin: true }));
app.use(helmet({ hsts: false }));

app.use(routes);

// Serve React Application
// This should come after routes, but before 404 and error handling.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get(/\/(?!api)*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(function(_req, _res, next) { next(createError(404)) });

app.use(function(err, _req, res, _next) {
  res.status(err.status || 500);
  res.json({ message: err.message, error: JSON.parse(JSON.stringify(err))});
});

module.exports = app;
