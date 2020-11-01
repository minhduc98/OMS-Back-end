const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./router/auth');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  });
  next();
});

app.use(authRoutes);

mongoose
  .connect(
    'mongodb+srv://minhduc100298:iloveGMAIL1998@cluster0.ozi4b.mongodb.net/university?retryWrites=true&w=majority'
  )
  .then((result) => {
    console.log('Connected!');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
