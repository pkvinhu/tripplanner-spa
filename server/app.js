const express = require('express');
const path = require('path');
const app = express();
const volleyball = require('volleyball');
// const page = require('../public');

app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname + '..' + 'public')));


const PORT = 3000;

// app.get('/', (req, res, next) => {
// 	res.send(page);
// })

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send(
    // ... fill in this part
  );
});

const init = async () => {
  app.listen(PORT, () => {
  	console.log('ready to bounce');
  })
}

init();