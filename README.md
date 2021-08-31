# 8thwall multiplayer

## 導入
```
git init -y
npm view express
npm install --save-dev express@4.17.1 
npm view socket.io
npm install --save-dev socket.io@4.2.0
npm install 依存関係
```

## herokuと連携する
```
heroku login (初回のみ)
git init(初回のみ)
git add .
git commit -m ""
heroku create(初回のみ)
herokuとgithubを連携する(heroku appのdeployから連携)
git push origin HEAD
↓githubと連携していない場合
git push heroku master
↓herokuのアプリ名を変更したい場合
heroku apps:rename newname(heroku appの名前を変更したい場合)
heroku open
```