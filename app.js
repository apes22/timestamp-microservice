'use strict';

// Require the modules we need
var express = require('express');
var fs = require('fs');
var path = require("path");


// Set up express
var app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));

// Processes homepage request
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Respond not found to all the wrong routes
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// Error Middleware
app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})

//Listen for requests
var server = app.listen(process.env.PORT, function () {
  var port = server.address().port;
  console.log('Timestamp Microservice app is listening on port ',  port);
});

