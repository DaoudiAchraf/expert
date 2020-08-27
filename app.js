require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');

// -------------------Routes -------------------
const rtsIndex = require('./routes/index.router');

const ProfileRouter = require('./routes/Profile');


var app = express();


// middleware
app.use(bodyParser.json());
app.use('/images', express.static(path.join("./images")));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-With; Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use('/api/profile',ProfileRouter);




// error handler
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    var valErrors = [];
    Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
    res.status(422).send(valErrors)
  }

});

//start server


app.listen(5000);
