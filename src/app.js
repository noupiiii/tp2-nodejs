const express = require('express')
const {connectTodB} = require("./services/db/connection");
const { createUser } = require('./controllers/users');
const { createItem } = require('./controllers/item');
const { createWatchlist } = require('./controllers/watchlist');


const app = express()
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  return next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/users/create", createUser)

app.post("/item/create", createItem)

app.post("/watchlist/create", createWatchlist)

app.listen(port, () => {
    connectTodB();
})