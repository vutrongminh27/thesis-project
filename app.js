var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var prorouter = require('./database/pro.db');
var sen1router = require('./database/sen1.db');
var sen2router = require('./database/sen2.db');
var sen3router = require('./database/sen3.db');
var statusrouter = require('./database/status.db');
var barcoderouter = require('./database/barcode.db');


app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/main',  function(req, res) {
   res.render('main');
});

app.get('/',  function(req, res) {
   res.render('main');
});

app.use('/pro', prorouter);
app.use('/sen1', sen1router);
app.use('/sen2', sen2router);
app.use('/sen3', sen3router);
app.use('/barcode', barcoderouter);
app.use('/status', statusrouter);
app.use('/static', express.static(__dirname + '/static'));

function looping() {
   io.on('connection', function(socket){

      socket.emit('news', { hello: 'world' });
      socket.on('my other event', (data) => {
         console.log(data);
   })
})
}

setInterval(looping, 5000)

const emitter = new EventEmitter()
emitter.setMaxListeners(0)

http.listen(5000, function () {

    console.log('Server is running...');

});