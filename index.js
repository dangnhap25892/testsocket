var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var mangUsersOnline = [];

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });


  
  socket.on("client_gui_username", function(data){
    console.log("Co nguoi dang ki username la: " + data);
    if( mangUsersOnline.indexOf(data)>=0){
      socket.emit("server-send-dangki-thatbai", data);
    }else{
      mangUsersOnline.push(data);
      socket.Username = data;
      io.sockets.emit("server-send-dangki-thanhcong", {username:data, id:socket.id});
    }
  });

  socket.on("client_gui_message", function(data){
    io.sockets.emit("server_gui_message", {Username:socket.Username, msg:data});
  });

  socket.on("user-chocgheo-socketid-khac", function(data){
    io.to(data).emit("server_xuly_chocgheo", socket.Username);
  })


});
  




http.listen(port, function(){
  console.log('listening on *:' + port);
});
