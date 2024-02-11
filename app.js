const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json());

app.use(cookieParser());

app.use(cors({
  origin: [
    'http://localhost:3001',
    'https://localhost:3001',
    'http://localhost:3000',
    'https://localhost:3000',
    'https://http://localhost:5000',
    'http://http://localhost:5000',
    ],
  credentials: true,
}));

const { PORT = 3000 } = process.env;

const router = require('./routes/index');
app.use('/', router);
mongoose.connect('mongodb://0.0.0.0:27017/modusRestaurantDB', {});



//mongodb://0.0.0.0:27017/modusrestauranDB
app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`)
})