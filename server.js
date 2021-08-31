const express = require('express') //expressモジュールの読み込み
const app = express() //アプリケーションオブジェクトをapp変数に格納する
const port = 3000 //port番号の設定

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })