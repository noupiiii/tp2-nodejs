const express = require('express');
const userRoutes = require('./users');
const itemRoutes = require('./item');
const watchlistRoutes = require('./watchlist');

const app = express();

app.use('/users', userRoutes);

app.use('/item', itemRoutes);

app.use('./watchlist', watchlistRoutes);

module.exports = app;
