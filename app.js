const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// 商品データ（サンプル）
const products = [
  { id: 1, name: '商品A', price: 1000 },
  { id: 2, name: '商品B', price: 2000 },
  { id: 3, name: '商品C', price: 3000 }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  let productList = products.map(
    p => `<li>${p.name} - ¥${p.price} <form method="POST" action="/buy" style="display:inline"><input type="hidden" name="id" value="${p.id}"><button type="submit">購入</button></form></li>`
  ).join('');
  res.send(`
    <h1>商品一覧</h1>
    <ul>${productList}</ul>
  `);
});

app.post('/buy', (req, res) => {
  const product = products.find(p => p.id == req.body.id);
  if (product) {
    res.send(`<h2>${product.name} を購入しました！</h2><a href="/">戻る</a>`);
  } else {
    res.send('<h2>商品が見つかりません</h2><a href="/">戻る</a>');
  }
});

app.listen(PORT, () => {
  console.log(`サーバーが http://localhost:${PORT} で起動しました`);
});