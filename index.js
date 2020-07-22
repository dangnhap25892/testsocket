var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var mangUsersOnline = [];
var mang=[];
var mangtest=[];

io.on('connection', function(socket){
  
  //kiemtra login
 if (socket.Username === undefined)
  {
    socket.emit('login', 'đã không có');

  }

//hiện người online
	
	
    for(r in socket.adapter.rooms){
      mangtest.push(r);
    }
      io.sockets.emit("server-send-dangki-thanhcong", mangtest);
	/*
	var length = mangtest.length;
  for (var i = 0; i < length; i++) {  
    socket.emit("server-send-dangki-thanhcong", mangtest[i]);
  }
  */
	/*
	var length = mangUsersOnline.length;
  for (var i = 0; i < length; i++) {  
    socket.emit("server-send-dangki", mangUsersOnline[i]);
  }
  */
	
   //socket.emit("server-send-dangki", mangUsersOnline);
	/*
    io.sockets.emit("server-send-dangki", mangUsersOnline);
   // io.sockets.emit("server-send-dangki-thanhcong", {username:data, id:socket.id});
//hiện người online
	*/
    
  socket.on('disconnect', function(){
    io.emit('chat message', socket.Username);
	  var hi = socket.Username;
	  //
	 var hu = mangUsersOnline.indexOf(hi);
	  mangUsersOnline.splice( hu, 1); 
	  
	  var length = mangtest.length;
  for (var i = 0; i < length; i++) {  
    socket.emit("server-send-dangki-thanhcong", mangtest[i]);
  }
	  /* khongog dung nữa //thử 
	for(r in socket.adapter.rooms){
      mangUsersOnline.push(r);
    }
      io.sockets.emit("server-send-rooms", mangUsersOnline);
	    //thử */
	  
	  /* hàm for
	for (var i = 0; i < length; i++) {
    //console.log(mangUsersOnline[i]);
		//xóa 1 phần tử tại vị trí i
		if (mangUsersOnline[i]=== hi )
		{
		mangUsersOnline.splice( i, 1); 
		}
   // io.emit("server-send-dangki", mangUsersOnline[i]);
  }
  */
	  
  });
  
    
  //hiện room
	
  var mang=[];
    for(r in socket.adapter.rooms){
      mang.push(r);
    }
    
      io.sockets.emit("server-send-rooms", mang);
   //hiện room
  
  
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

//new rom
socket.on("tao-room", function(data){
    socket.leave(socket.Phong);
    socket.join(data);
    socket.Phong=data;

    var mang=[];
    for(r in socket.adapter.rooms){
      mang.push(r);
    }
    
    
  
    io.sockets.emit("server-send-rooms", mang);
    socket.emit("server-send-room-socket", data);

  });

  socket.on("user-chat", function(data){
    io.sockets.in(socket.Phong).emit("server-chat", data);
  });
//new room
	
socket.on("client_gui_message", function(data){
    io.sockets.in(socket.Phong).emit("server_gui_message", {Username:socket.Username, msg:data});
  });


  
  socket.on("client_gui_username", function(data){
	 
	  
    console.log("Co nguoi dang ki username la: " + data);
    if( mangUsersOnline.indexOf(data)>=0){
      socket.emit("server-send-dangki-thatbai", data);
    }else{
	    
      mangUsersOnline.push(data);
	mangtest.push({username:data, id:socket.id});
      socket.Username = data;
     io.sockets.emit("server-send-dangki-thanhcong", {username:data, id:socket.id});
     socket.emit("dangkithanhcong", 'hi');

    }
  });
/*
  socket.on("client_gui_message", function(data){
    io.sockets.emit("server_gui_message", {Username:socket.Username, msg:data});
  });
*/
  socket.on("user-chocgheo-socketid-khac", function(data){
    io.to(data).emit("server_xuly_chocgheo", socket.Username);
  })


});
  




http.listen(port, function(){
  console.log('listening on *:' + port);
});
