/**
 * json-server設定
 * 起動方法：node server.js
 */
const jsonServer = require('json-server');
const server = jsonServer.create();

const middlewares = jsonServer.defaults();
server.use(middlewares);

server.use(function(req, res, next) {
  if (req.method === 'POST') {
    // POST送信を受ける場合、受けたPOSTレスポンスをGETに変更する
    req.method = 'GET';
  } else {
    req.query = req.params;
    req.params = null;
  }

  // 返却ステータス設定---------------------------------------
  // エラー用の空
  res.req.url = '/error_blank';

  if (req.originalUrl == '/api/v1/cart') {
    res.statusCode = 200;
    // res.req.url = '/cart_error';
  } else if (req.originalUrl == '/api/v1/add_favorite') {
    res.statusCode = 500;
  } else if (req.originalUrl == '/api/v1/add_owned') {
    res.statusCode = 500;
  } else if (req.originalUrl == '/api/v1/session') {
    res.statusCode = 500;

    // 成功
    res.statusCode = 200;
    // res.req.url = '/session_not_logged_in'; // 未ログイン状態
    res.req.url = '/session_logged_in'; // ログイン状態
  } else if (req.originalUrl == '/api/v1/login') {
    res.statusCode = 200;
    res.statusCode = 401; // 認証エラー
  }

  // next();
  setTimeout(next, 30000);
});

// db.json をもとにデフォルトのルーティングを設定する
const router = jsonServer.router('db.json');
server.use(router);

// サーバをポート 3003 で起動する
server.listen(3003, () => {
  console.log('JSON Server is running');
});
