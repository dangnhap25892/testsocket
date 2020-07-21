var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });


  socket.on('client_gui_username', function(data){
  	socket.Username = data;
    io.emit('server-send-dangki-thanhcong', {username:data, id:socket.id});
  });	

  socket.on('client_gui_message', function(data){
    io.sockets.emit('server_gui_message', {username:data.Username, msg:data});
  });	


});
  




http.listen(port, function(){
  console.log('listening on *:' + port);
});
