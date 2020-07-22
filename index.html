<!doctype html>
<html>
  <head>
    <title>Socket.IO chat</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font: 13px Helvetica, Arial; }
      form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
      form input { border: 0; padding: 10px; width: 85%; margin-right: .5%; }
      form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages li { padding: 5px 10px; }
      #messages li:nth-child(odd) { background: #eee; }
      #messages { margin-bottom: 40px }


      
      body{background-color: #d7dfed}
#wrapper{width: 600px; margin: auto}
h1{text-align: center}
#left, #right{min-height: 500px; float: left; margin-top: 10px}
#left{width: 30%; background:#eaf4b7}
#right{width: 70%; background-color: #d6f9d9}
.block{width: 100%; clear: both,}

#txtMessage, #btnChat{float: right; margin: 2px}
#txtMessage{width: 70%} 
#btnChat{width: 13%;}
#title{background-color: #ccf900; text-align: center; padding: 5px}

.hoten{color: red; font-weight: bold}
#dsMsg{height: 450px; overflow: scroll; clear: both}


    </style>

    
  </head>
  <body>
<!-- new room-->

    <div id="login" >
    <input type="text" id="txtUser" placeholder="Username" />
      <input type="button" id="btnDangki" value="Dang ki"  />
    </div>


    <div id="kiemtralogin">
    <input type="text" id="txtRoom" />
    <input type="button" id="btnTaoRoom" value="Tạo room">
    <div id="left">

      <h3>ROOMS ĐANG CÓ</h3>
      <div id="dsRoom"></div>
<!-- new room1-->
      <input type="text" id="txtUser" placeholder="Username" />
      <input type="button" id="btnDangki" value="Dang ki"  />
       <div id="title">Users Online</div>
        <div id="danhsachUsersOnline"></div>
      <!-- new room1-->
    </div>
    <h4 id="roomHienTai">...</h4>


    <!-- new room1-->
    <div id="right">
        <div id="dsMsg"></div>
        <div class="block"></div>
        <input type="text" id="txtMessage" placeholder="Message..." />
        <input type="button" id="btnChat" value="Chat" />
      </div>
  


    </div>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button id="btnChat">Send</button>
    </form>
      <!-- new room1-->
    <!--
    <div id="right">
    </div>
    <input type="text" id="txtMessage" />
    <input type="button" id="btnChat" value="Chat" />
<!-- new room-->



    <!-- new
    <div id="wrapper">
      <h1>DEMO CHAT SOCKET IO - NODEJS</h1>
      <input type="text" id="txtUser" placeholder="Username" />
      <input type="button" id="btnDangki" value="Dang ki"  />
      <div class="block"></div>
      <div id="left">
        <div id="title">Users Online</div>
        <div id="danhsachUsersOnline"></div>
      </div>
      <div id="right">
        <div id="dsMsg"></div>
        <div class="block"></div>
        <input type="text" id="txtMessage" placeholder="Message..." />
        <input type="button" id="btnChat" value="Chat" />
      </div>
    </div>

    <!-- new
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
    <!-- new-->
    <script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
    <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
    <script>
      $(function () {
        var socket = io();

         
        //bew rôm
        socket.on("server-send-rooms", function(data){
        $("#dsRoom").html("");
          
        data.map(function(r){
          var count = r.length;
            if(count != 20)
            {
          $("#dsRoom").append("<h4 class='room'>" + r + "</h4>");
            }
        });
          
        });

        socket.on("server-send-room-socket", function(data){
          $("#roomHienTai").html(data);
        });

        socket.on("server-chat", function(data){
          $("#right").append("<div>" + data + "</div>");
        });

        $(document).ready(function(){

          $("#btnTaoRoom").click(function(){
            socket.emit("tao-room", $("#txtRoom").val());
          });

          $("#btnChat").click(function(){
            socket.emit("user-chat", $("#txtMessage").val());
          });

        });
        //new room
  
        //new
        socket.on("server-send-dangki-thatbai", function(data){
      alert("User " + data + " is not availble!");
    });
       
       //  $("#danhsachUsersOnline").html("");
        
    socket.on("server-send-dangki-thanhcong", function(data){
 
      var s = "<div socketid='"+data.id+"' class='motUser'>" + data.username + "</div>";
      $("#danhsachUsersOnline").append(s);
      });
      
        socket.on("dangkithanhcong", function(data){
 
      $("#kiemtralogin").show();
      
      });
  
      // lỗi
      socket.on("server-send-dangki", function(data){
        
      var s = "<div class='motUser'>" + data + "</div>";
      $("#danhsachUsersOnline").append(s);
            
      });
//lỗi

      //hide form dang ki user
    
    socket.on("server_gui_message", function(data){
      var hoten = "<span class='hoten'>" + data.Username + ": </span>";
      var msg =  "<span class='msg'>" + data.msg + "</span>";
      $("#dsMsg").append(hoten + msg + "<div class='block'></div>");
    });
    socket.on("server_xuly_chocgheo", function(data){
      //alert(data + "vua moi choc ban :D");
      $( "body" ).effect( "shake" );
    });
    $(document).ready(function(){
      $("#btnDangki").click(function(){
        socket.emit("client_gui_username", $("#txtUser").val());
      });
      $("#btnChat").click(function(){
        socket.emit("client_gui_message", $("#txtMessage").val());
        $("#txtMessage").val("");
      });
      $(document).on("click", ".motUser", function(){
        var id = $(this).attr("socketid");
        socket.emit("user-chocgheo-socketid-khac", id);
      });
    });
        //new
        $('form').submit(function(){
          socket.emit("client_gui_message", $("#m").val());
          $('#m').val('');
          return false;
        });
        
        //new login
        socket.on('login', function(msg){
          $("#kiemtralogin").hide();
        });
        //newloginj
        /*
        $('form').submit(function(){
          socket.emit('chat message', $('#m').val());
          $('#m').val('');
          return false;
        });
        */
        socket.on('chat message', function(msg){
          $('#messages').append($('<li>').text(msg));
          window.scrollTo(0, document.body.scrollHeight);
        });

      });
    </script>
  </body>
</html>
