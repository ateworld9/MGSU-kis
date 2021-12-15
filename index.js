/* eslint-disable import/extensions */
import express from 'express';
import path from 'path';
import cors from 'cors';

import './dotenv.js'; // подключение .env
import './db.js'; // подключение к бд

// import Vagons from './models/Vagons.js';
// import Orders from './models/Orders.js';

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: false }));

app.use(express.static(path.resolve('../mgsu-kis-frontend/build')));
app.use(express.json());

app.get('/vagons', async (req, res) => {
  // const vagons = await Vagons.findAll();
  res.json({ vagons: {} });
});

app.get('/api/orders', async (req, res) => {
  // const orders = await Orders.findAll({
  //   include: [
  //     {
  //       model: Vagons,
  //       as: 'Vagons',
  //       required: true,
  //     },
  //   ],
  // });
  res.json({ orders: {} });
});

app.post('/api/order', async (req, res) => {
  const customer = req.body;
  // const order = await Orders.create({
  //   name: customer.name,
  //   surname: customer.surname,
  //   tel: customer.tel,
  //   state: 'Заявка',
  //   vagon_id: customer.vagon_id,
  // });
  res.json({ order: {} });
});

app.patch('/api/order', async (req, res) => {
  // const order = await Orders.findByPk(req.body.id);
  // order.status = 'В обработке';
  // await order.save();
  res.json({ order: {} });
});

app.put('/api/order', async (req, res) => {
  // const order = await Orders.findByPk(req.body.id);
  // order.status = 'В архиве';
  // await order.save();
  res.json({ order: {} });
});

app.delete('/api/order', async (req, res) => {
  // const order = await Orders.findByPk(req.body.id);
  // order.set({ status: 'Удален' });
  // await order.save();
  // console.log(order);
  res.json({ order: {} });
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve('../mgsu-kis-frontend/build/index.html'));
});

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`The server is app and listening on port ${PORT}`);
});
