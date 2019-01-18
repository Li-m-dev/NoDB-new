const express = require('express');
const {json} = require('body-parser');
// const cors = require('cors');
const {getRockets} = require('./controllers/rockets');
const {getLaunches} = require('./controllers/launches');
const {
  getWatchList,
  addToWatchList,
  updateWatchList,
  deleteWatchList
} = require('./controllers/watchList');

const app = express();

const port = 8080;

app.use(json());
// app.use(cors());

app.get('/api/rockets', getRockets);
app.get('/api/launches', getLaunches);

app.get('/api/watchlist', getWatchList);
app.post('/api/watchlist', addToWatchList);
app.put('/api/watchlist/:id', updateWatchList);
//------using query---------
app.delete('/api/watchlist',deleteWatchList)

//using params
// app.delete('/api/watchlist/:id',deleteWatchList)

app.listen(port, () => console.log(`Listening on port: ${port}`))