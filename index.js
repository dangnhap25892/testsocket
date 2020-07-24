var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//new rôm
var mangUsersOnline = [];
var mang=[];
var mangtest=[];
///new rôm
//new1

let mangUser = [];
let mangnguoichoi = [];
//Tao ra mang ban co trong do cac cell co gia tri ban dau la 0
//muc dich tao ra ma tran ban co nay de xet thang thua cho nguoi choi
//dung method cua Array
Array.matrix = function (n, init) {
    let mat = [];
    for (let i = 0; i < n; i++) {
        a = [];
        for (let j = 0; j < n; j++) {
            a[j] = init;
        }
        mat[i] = a;
    }
    return mat;
}
let Arr_Board = Array.matrix(10, 0)
//mang ma tran ban co sau khi khoi tao se co dang nhu sau:
/*[ [ 0, 0, 0, 0, 0, 0, 0, 0 ],
 [ 0, 0, 0, 0, 0, 0, 0, 0 ],
 [ 0, 0, 0, 0, 0, 0, 0, 0 ],
 [ 0, 0, 0, 0, 0, 0, 0, 0 ],
 [ 0, 0, 0, 0, 0, 0, 0, 0 ],
 [ 0, 0, 0, 0, 0, 0, 0, 0 ],
 [ 0, 0, 0, 0, 0, 0, 0, 0 ],
 [ 0, 0, 0, 0, 0, 0, 0, 0 ] ]*/
//Kiem tra thang thua khi nguoi choi danh nuoc moi tren ban co
//Kiểm tra theo phương ngang từ vị trí hiện tại đi sang trái và sang phải đếm xem có đủ 5 quân cùng giá trị thì trả về true
let Horizontal = (Mat, Cur_row, Cur_col, Value) => {
    //di sang ben trai
    let count_left = 0;
    let count_right = 0;
    //Di sang phia ben trai so voi vi tri hien tai
    for (let i = Cur_col; i >= 0; i--) {
        if (Mat[Cur_row][i] === Value) {
            count_left++;
        }
        else {
            break;
        }
    }
    //Di sang phia ben phai so voi vi tri hien tai
    for (let j = Cur_col + 1; j < 10; j++) {
        if (Mat[Cur_row][j] === Value) {
            count_right++;
        }
        else {
            break;
        }
    }
    if (count_right + count_left >= 5) {
        return 1;
    }
}
//Đếm số điểm theo phương thẳng đứng theo 2 hướng từ điểm hiên tại đi thẳng lên trên và đi xuống dưới nếu cả 2 phía trên và dưới
//tổng số ô cùng màu >=5 thì trả về giá trị true tức là chiến thắng
let Vertically = (Mat, Cur_row, Cur_col, Value) => {
    let i = Cur_row;
    let count_up = 0;
    let count_down = 0;
    for (let k = Cur_row; k < 10; k++) {
        if (Mat[k][Cur_col] === Value) {
            count_down++;
        }
        else {
            break;
        }
    }
    for (let h = Cur_row - 1; h >= 0; h--) {
        if (Mat[h][Cur_col] === Value) {
            count_up++;
        }
        else {
            break;
        }
    }
    if ((count_up + count_down >= 5)) {
        return 1;
    }
}
//Kiểm tra theo phương đường chéo phụ
let Diagonal = (Mat, Cur_row, Cur_col, Value) => {
    //kiểm tra theo phương đường chéo phía trên bên phải so với vị trí quân hiện tại
    let count_right_up = 0;
    let count_left_down = 0;
    let temp1 = 0;
    let temp2 = 1;
    for (let i = Cur_row; i >= 0; i--) {
        if (Mat[i][Cur_col + temp1] === Value) {
            count_right_up++;
            temp1++;
        }
        else {
            break;
        }
    }
    //kiểm tra theo phương đường chéo phía dưới bên trái so với vị trí quân hiện tại
    for (let j = Cur_row + 1; j < 10; j++) {
        if (Mat[j][Cur_col - temp2] === Value) {
            count_left_down++;
            temp2++;
        }
        else {
            break;
        }
    }
    if (count_right_up + count_left_down >= 5) {
        return 1;
    }
}
//Kiểm tra theo phương đường chéo chính
let Diagonal_main = (Mat, Cur_row, Cur_col, Value) => {
    let count_right_down = 0;
    let count_left_up = 0;
    let temp1 = 0;
    let temp2 = 1;
    //Kiểm tra theo phương đường chéo chính phía trên bên trái so với vị trí quân hiện tại
    for (let i = Cur_row; i >= 0; i--) {
        if (Mat[i][Cur_col - temp1] === Value) {
            count_left_up++;
            temp1++;
        }
        else {
            break;
        }
    }
    //Kiểm tra theo phương đường chéo chính phía dưới bên phải so với vị trí quân hiện tại
    for (let j = Cur_row + 1; j < 10; j++) {
        if (Mat[j][Cur_col + temp2] === Value) {
            count_right_down++;
            temp2++;
        }
        else {
            break;
        }
    }
    if (count_right_down + count_left_up >= 5) {
        return 1
    }
}
//Ket thuc kiem tra
//new1

io.on('connection', function(socket){


        //new rổm
        //hiện room
    
        var mang=[];
        for(r in socket.adapter.rooms){
          mang.push(r);
        }
        
          io.sockets.emit("server-send-rooms", mang);
       //hiện room

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

        //new room









	//new2
	console.log("co nguoi ket noi:" + socket.id)
    //lang nghe su kien tu client gui len
    socket.on("client-send-name", function (data) {
        if (mangUser.length > 2) {
            socket.emit("send-dki-that-bai")
        }
        else {
            mangUser.push(data);
            socket.Username = data;
            io.sockets.in(socket.Phong).emit("server-send-danhsach-user", mangUser)
        }
    })

    socket.on("su-kien-click", function (data) {
        let vitri = mangUser.indexOf(socket.Username)
        let Columb = data.x / 50;
        let Row = data.y / 50;
        //Kiem tra khong cho nguoi choi gui du lieu 2 lan lien tuc len server
        if (socket.Username !== mangnguoichoi[0]) {
            mangnguoichoi.unshift(socket.Username);
            if (vitri === 0) {
                if (Arr_Board[Row][Columb] === 0) {
                    Arr_Board[Row][Columb] = 1;
                    io.sockets.in(socket.Phong).emit("server-send-data", {
                        name: socket.Username,
                        x: data.x,
                        y: data.y,
                        nguoichoi: vitri,
                        ArrId: mangnguoichoi,
                        Board: Arr_Board,
                        value: 1
                    })
                    if(Horizontal(Arr_Board, Row, Columb, 1) || Vertically(Arr_Board, Row, Columb, 1) ||
                    Diagonal(Arr_Board, Row, Columb, 1) || Diagonal_main(Arr_Board, Row, Columb, 1)){
                        string = "BAN DA THUA CUOC";
                        socket.broadcast.in(socket.Phong).emit("khong-cho-doi-thu-click-khi-thua");
                        socket.broadcast.in(socket.Phong).emit("phat-su-kien-thang-thua", string);
                    }
                    

                }
            }
            else {
                if (Arr_Board[Row][Columb] === 0) {
                    Arr_Board[Row][Columb] = 2;
                    io.sockets.in(socket.Phong).emit("server-send-data", {
                        name: socket.Username,
                        x: data.x,
                        y: data.y,
                        nguoichoi: vitri,
                        ArrId: mangnguoichoi,
                        Board: Arr_Board,
                        value: 2
                    })
                    if(Horizontal(Arr_Board, Row, Columb, 2) || Vertically(Arr_Board, Row, Columb, 2) ||
                        Diagonal(Arr_Board, Row, Columb, 2) || Diagonal_main(Arr_Board, Row, Columb, 2)){
                        string = "BAN DA THUA CUOC";
                        socket.broadcast.in(socket.Phong).emit("khong-cho-doi-thu-click-khi-thua");
                        socket.broadcast.in(socket.Phong).emit("phat-su-kien-thang-thua", string);
                    }
                    
                }
            }
        }
    })

	//new2


  socket.on('chat message', function(msg){
   // io.emit('chat message', msg);
   io.sockets.in(socket.Phong).emit('chat message', msg);
  });



});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
