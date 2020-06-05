const express = require('express');

const app = express();

const itemRoutes = require('./routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(itemRoutes);

app.get('/', (req, res) => {
  return res.json('Start with /items');
});

app.listen(5000, function () {
  console.log('The  server has started on port 5000.');
});
