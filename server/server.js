const express = require('express'),
  http = require('http'),
  hbs = require('hbs'),
  path = require('path'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("new user connected");
});

app.get('*', (req,res) => {
  res.sendFile('./index.html', {root: publicPath});
});

server.listen(port, () => {
  console.log(`listening on port ${port}...`);

})
