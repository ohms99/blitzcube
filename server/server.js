const express = require('express'),
  hbs = require('hbs'),
  path = require('path'),
  logger = require('morgan'),
  bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const publicPath = path.join(__dirname, '../public');

var app = express();


app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(publicPath));


var port = process.eng.PORT || 3000;
app.listen(port, () => {
  console.log('listening on port ' + port + '...');

})
