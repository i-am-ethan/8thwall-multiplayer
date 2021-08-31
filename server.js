const express = require('express') //expressモジュールの読み込み
const app = express() //アプリケーションオブジェクトをapp変数に格納する
const http = require('http').Server(app); //httpモジュールの読み込み
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));//ルートの静的ファイルへのアクセス許可

http.listen(PORT, function() { //3000番ポートでアクセスを待つ
    console.log('server listening. PORT:' + PORT);
  });

// GET リクエストを処理する
// ===========================================================
app.get(`/`, (req, res) => { 
    res.sendFile(__dirname + '/views/index.html'); //"ルートに"にアクセスがあったらindex.htmlを返却
  });

app.get(`/multiplayer`, (req, res) => {
  res.sendFile(__dirname + '/views/multiplayer.html');
});
