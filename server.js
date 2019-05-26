// expressの呼び込み
const express = require('express');
// const basicAuth = require('basic-auth-connect'); // 追加
const compression = require('compression');

// PORTの設定
// もしenvにportが確立したらそのポートを、していなかったら8080を使う
const port = process.env.PORT || 8080;
// express()のインスタンス
const app = express();

// リダイレクト設定
// HTTP/WWWありでGETリクエストが来た場合，リダイレクトする設定
app.use(/.*/, function (req, res, next) {
  if (!req.hostname.startsWith('www.')) {
    // wwwなしの場合，www.をつけてからリダイレクト
    res.redirect(`https://www.${req.hostname}${req.url}`)
  }
  else if (req.headers['x-forwarded-proto'] != 'https') {
    // HTTPの場合，リダイレクト
    res.redirect(`https://${req.hostname}${req.url}`)
  }
  else {
    // 後続のハンドラを実行
    next()
  }
})

app.use(compression({
  threshold: 0,
  level: 9,
  memLevel: 9
}));

// app.use(basicAuth('love', 'average')); // 公開までの暫定処理（Basic認証）

// どこにアクセスさせるかの設定
// distフォルダ：コンパイルされたファイルが入る場所
app.use(express.static(__dirname + "/dist/"));

// SPAの時、ルーティングがうまくいかない時があるので以下の設定
// これをしていないと、https://~~~/aboutとかに行った時にリロードするとエラーがでる
// SPAだとaboutファイルを直で読み込んでいないから
// これでルート以外でリロードしてもindex.htmlを読み込んでちゃんとルーティングをしてくれる
// /.*/で全てのルートを指定。req(request), res(response)
app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});

// 一番上で指定したportをlisten
app.listen(port);

// 動いてるかどうかconsoleで見る
console.log("Server is up!!");