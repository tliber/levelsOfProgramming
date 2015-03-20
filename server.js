var express = require('express');
var morgan = require('morgan');
var app = express();
var bodyParser = require('bodyParser');
var methodOverride - require('method-override');
// app.get('/', function(res, req) {
//   res.sendfile(__dirname + '/client/views/index.html')
// })
var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/client/views/'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride())
app.get('/', function(req, res) {
  app.get('index.html')
})

app.listen(port);