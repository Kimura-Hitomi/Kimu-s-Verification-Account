const request = require('supertest');
const app = require('./app');

describe('商品購入Webサイト', () => {
  test('GET / で商品一覧が表示される', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('商品一覧');
    expect(res.text).toContain('商品A');
    expect(res.text).toContain('商品B');
    expect(res.text).toContain('商品C');
  });

  test('POST /buy で商品Aを購入できる', async () => {
    const res = await request(app)
      .post('/buy')
      .send('id=1');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('商品A を購入しました');
  });

  test('POST /buy で存在しない商品IDの場合エラー表示', async () => {
    const res = await request(app)
      .post('/buy')
      .send('id=999');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('商品が見つかりません');
  });
});