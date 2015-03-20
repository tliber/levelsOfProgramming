var express = require('express');
var morgan = require('morgan');
var app = express();

// app.get('/', function(res, req) {
//   res.sendfile(__dirname + '/client/views/index.html')
// })
var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/client/views/'));
app.use(morgan('dev'));
app.get('/', function(req, res) {
  app.get('index.html')
})

app.listen(port);